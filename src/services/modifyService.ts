import type { Data } from '@/models/Data'

export function modifyingCategory() : boolean {
  const categoryToUpdate = localStorage.getItem('categoryToUpdate');
  return !!categoryToUpdate;
}

export function modifyingTheme() : boolean {
  const themeToUpdate = localStorage.getItem('themeToUpdate');
  return !!themeToUpdate;
}

export function removeTheme(themeId: number): void {
  const dataFromStorage = localStorage.getItem('data')
  if (dataFromStorage) {
    const data: Data = JSON.parse(dataFromStorage).data
    for (const category of data.categories) {
      const themeIndex = category.themes.findIndex(theme => theme.id === themeId)
      if (themeIndex !== -1) {
        category.themes.splice(themeIndex, 1)
        localStorage.setItem('data', JSON.stringify({ data }))
        return
      }
    }
  }
}


export function modifyingCard() : boolean {
  const cardToUpdate = localStorage.getItem('cardToUpdate');
  return !!cardToUpdate;
}

export function removeCard(cardId: number): void {
  const dataFromStorage = localStorage.getItem('data')
  if (dataFromStorage) {
    const data: Data = JSON.parse(dataFromStorage).data
    for (const category of data.categories) {
      for (const theme of category.themes) {
        const cardIndex = theme.cards.findIndex(card => card.id === cardId)
        if (cardIndex !== -1) {
          theme.cards.splice(cardIndex, 1)
          localStorage.setItem('data', JSON.stringify({ data }))
          return
        }
      }
    }
  }
}




export function getCategoryIdOfTheme(themeId: number): number | null {
  const dataFromStorage = localStorage.getItem('data')
  if (dataFromStorage) {
    const data: Data = JSON.parse(dataFromStorage).data
    for (const category of data.categories) {
      if (category.themes.find(theme => theme.id === themeId)) {
        return category.id
      }
    }
  }
  return null
}


export function getThemeIdOfCard(cardId: number): number | null {
  const dataFromStorage = localStorage.getItem('data')
  if (dataFromStorage) {
    const data: Data = JSON.parse(dataFromStorage).data
    for (const category of data.categories) {
      for (const theme of category.themes) {
        if (theme.cards.find(card => card.id === cardId)) {
          return theme.id
        }
      }
    }
  }
  return null
}