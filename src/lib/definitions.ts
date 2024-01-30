import { Asset } from "grapesjs";

export interface News {
  title: string;
  subtitle: string;
  image: string;
  published_date: string;
}

type CategoryStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "DRAFT"
  | "PUBLIC"
  | "PENDING"
  | "REJECTED"
  | "COMPLETED";

export interface Category {
  id: number;
  title: string;
  slug: string;
  parentId?: number;
  featuredImage?: string;
  content?: string;
  status: CategoryStatus;
  searchKeyword?: string;
  metaTitle?: string;
  metaKeyword?: string;
  metaDescription?: string;
  createdById: number;
  updatedById: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  parent: unknown;
}

export interface ProjectDataProps {
  assets: Asset[];
  pagesHtml: { html: string; css: string }[];
}
