import { NavLink } from "./navLink";
import { Product } from "./product";

export type Category = {
  id: number;
  spanishTitle: string;
  englishTitle: string;
  products: Product[];
  navLinkId: number;
  navLink: NavLink;
};
