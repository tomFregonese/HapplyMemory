import type { Card } from '@/models/Card'

export interface Theme {
  id: string;
  title: string;
  description: string;
  cards: Card[]
}
