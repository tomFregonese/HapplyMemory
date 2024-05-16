import type { Theme } from '@/models/Theme'

export interface Category {
  id: string;
  title: string;
  description: string;
  themes: Theme[];
}
