import type { Theme } from '@/models/Theme'

export interface Category extends CommonInterface{
  themes: Theme[];
}
