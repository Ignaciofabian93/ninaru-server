import { Category } from "./category";

export type NavLink = {
  id: number;
  spanishTitle: string;
  englishTitle: string;
  enabled: boolean;
  categories: Category[];
};
