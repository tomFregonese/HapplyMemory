import type { Theme } from '@/models/Theme'

export interface Category {
  id: number;
  title: string;
  description: string;
  themes: Theme[];
}
