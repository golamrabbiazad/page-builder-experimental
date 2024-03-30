import { Asset } from "grapesjs";

export interface News {
  title: string;
  subtitle: string;
  image: string;
  published_date: string;
}

export interface Category {
  id: string;
  title: string;
}

export interface ProjectDataProps {
  assets: Asset[];
  pagesHtml: { html: string; css: string }[];
}
