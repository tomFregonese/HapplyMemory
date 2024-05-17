import type { Card } from '@/models/Card'

export interface Theme {
  id: number;
  title: string;
  description: string;
  cards: Card[]
}
