import { Category } from "./category";

export type Product = {
  id: number;
  spanishTitle: string;
  englishTitle: string;
  price: number;
  spanishIngredients: string;
  englishIngredients: string;
  spanishDescription: string;
  englishDescription: string;
  image: string;
  available: boolean;
  categoryId: number;
  category: Category;
};
