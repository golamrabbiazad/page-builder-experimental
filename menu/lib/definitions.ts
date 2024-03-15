import { nanoid } from "@reduxjs/toolkit";

export type NewsContentType = "TEXT" | "PAGEBUILDER";

export type NewsFormat =
  | "DEFAULT"
  | "GALLERY"
  | "LINK"
  | "PICTURE"
  | "QUOTE"
  | "VIDEO"
  | "AUDIO"
  | "CHAT_LOG";

export type NewsVisibility = "PUBLIC" | "PASSWORD_PROTECTED" | "PRIVATE";

export type NewsStatus = "DRAFT" | "PUBLISHED" | "REJECTED";

export interface CreatePost {
  title: string;
  subTitle?: string;
  shortDescription?: string;
  description?: string;
  contentType: NewsContentType;
  featuredImage?: string;
  posterImage?: string;
  isFeatured?: boolean;
  tags: Array<string[]>;
  categoryIds: number[];
  status: NewsStatus;
  visibility: NewsVisibility;
  newsFormat: NewsFormat;
  videoUrl?: string;
  audioUrl?: string;
  liveUrl?: string;
  viewCount?: number;
  divisionId?: number;
  districtId?: number;
  upazilaId?: number;
  thanaId?: number;
  publishedAt: string;
  metaTitle?: string;
  metaKeyword: string;
  metaDescription?: string;
}

export interface News {
  title: string;
  subTitle: string;
  shortDescription: string;
  description: string;
  contentType: NewsContentType;
  newsType: NewsFormat;
  videoUrl: string;
  audioUrl: string;
  liveUrl: string;
  categoryIds: Array<Category>;
  featuredImage: string;
  posterImage: string;
  isFeatured: boolean;
  tags: Array<string[]>;
  publishedAt: string;
  viewCount: number;
  metaTitle: string;
  metaKeyword: string;
  metaDescription: string;
  status: NewsStatus;
  divisionId: number | null;
  districtId: number | null;
  upazilaId: number | null;
  thanaId: number | null;
}

interface CreatedBy {
  fullName: string;
}

export interface PublicNews extends News {
  id: number;
  slug: string;
  categories: Array<Category>;
  createdAt: string;
  updatedAt: string;
  newsFormat: string;
  isBrakingNews: boolean;
  galleries: Array<{ imageUrl: ""; caption: ""; photoCredit: "" }>;
  visibility: string;
  createdBy: CreatedBy;
  division: {
    name: string;
    slug: string;
    bn_name: string;
  };
  district: {
    name: string;
    slug: string;
    bn_name: string;
  };
  upazila: {
    name: string;
    slug: string;
    bn_name: string;
  };
}

export interface Division {
  id: number;
  name: string;
  slug: string;
  bn_name: string;
  latitude: string;
  longitude: string;
  title: string;
  subTitle: string;
  content: string;
  featuredImage: string;
  bannerImage: string;
  status: string;
  metaTitle: string;
  metaKeyword: string;
  metaDescription: string;
  createdById: string;
  updatedById: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface AdminDashboardNews {
  data: Array<{
    id: number;
    title: string;
    fullName: string;
    slug: string;
    subTitle: string;
    shortDescription: string;
    contentType: string;
    newsFormat: string;
    videoUrl: string;
    liveUrl: string;
    audioUrl: string;
    featuredImage: string;
    posterImage: string;
    isFeatured: boolean;
    tags: Array<string[]>;
    publishedAt: string;
    viewCount: number;
    status: string;
    metaTitle: string;
    metaDescription: string;
    metaKeyword: string;
    initials: string;
    customReporterName: string;
    createdAt: string;
    updatedAt: string;
    createdBy: CreatedBy;
    categories: Array<{
      id: number;
      title: string;
      slug: string;
    }>;
    _count: {
      comments: number;
    };
  }>;
  totalCount: number;
  currentPage: number;
  perPage: number;
  nextPage: number;
}

// Category Type Definitions

export interface Category {
  id: number;
  title: string;
  slug: string;
  parentId: number | null;
  featuredImage: string;
  content: string;
  count: number;
  positionOrder: number;
  status: string;
  searchKeyword: string;
  metaTitle: string | null;
  metaKeyword: string;
  metaDescription: string | null;
  createdById: number;
  updatedById: string | null;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  parent: number | null;
  _count: {
    news: number;
  };
}

// Topics Type Definitions

export interface Topic {
  id: number;
  title: string;
  slug: string;
  featuredImage: string;
  content: string;
  status: string;
  searchKeyword: string;
  metaTitle: string;
  metaKeyword: string;
  metaDescription: string;
  createdById: number;
  updatedById: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  _count: {
    news: number;
  };
}

// Reporter Type Definitions

interface ReporterProfileDetails {
  mobile: string;
  gender: string;
  bloodGroup: string;
  dateOfBirth: string;
  profession: string;
  fatherName: string;
  motherName: string;
  identityType: string;
  identityFiles: string;
  picture: string;
}

interface ReporterRole {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Reporter {
  id: number;
  username: string;
  email: string;
  fullName: string;
  userType: string;
  displayName: string;
  status: string;
  divisionId: number;
  division: {
    name: string;
    slug: string;
  };
  districtId: number;
  district: {
    name: string;
    slug: string;
  };
  upazilaId: number;
  upazila: {
    name: string;
    slug: string;
  };
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  profile: ReporterProfileDetails;
  roles: ReporterRole[];
}

// Subscriber Type Definations

interface SubscriberProfileDetails {
  mobile: string;
  gender: string;
  bloodGroup: string;
  dateOfBirth: string;
  profession: string;
  fatherName: string;
  motherName: string;
  identityType: string;
  identityFiles: string;
  picture: string;
}

interface SubscriberRole {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Subscriber {
  id: number;
  username: string;
  email: string;
  fullName: string;
  userType: string;
  displayName: string;
  status: string;
  divisionId: number;
  division: {
    name: string;
    slug: string;
  };
  districtId: number;
  district: {
    name: string;
    slug: string;
  };
  upazilaId: number;
  upazila: {
    name: string;
    slug: string;
  };
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  profile: SubscriberProfileDetails;
  roles: SubscriberRole[];
}

// Poll Type Definitions
interface PollOpton {
  label: string;
  value: string;
}

export interface Poll {
  id: number;
  question: string;
  featuredImage: string;
  options: Array<PollOpton>;
  status: string;
  metaTitle: string;
  metaKeyword: string;
  metaDescription: string;
  createdById: number;
  updatedById: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

// Comment type Definitions

export interface Comment {
  id: number;
  featuredImage: string;
  content: string;
  guestName: string;
  createdAt: string;
  deletedAt: string | null;
  createdBy: {
    fullName: string;
  };
  news: {
    title: string;
    slug: string;
    featuredImage: string;
  };
}
export interface Bookmark {
  id: number;
  featuredImage: string;
  content: string;
  guestName: string;
  createdAt: string;
  deletedAt: string | null;
  createdBy: {
    fullName: string;
  };
  news: {
    title: string;
    slug: string;
  };
}

// Contributor Type Definitions

interface ContributorRole {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Contributor {
  id: number;
  username: string;
  email: string;
  fullName: string;
  userType: string;
  displayName: string;
  status: string;
  divisionId: number;
  division: {
    name: string;
    slug: string;
  };
  districtId: number;
  district: {
    name: string;
    slug: string;
  };
  upazilaId: number;
  upazila: {
    name: string;
    slug: string;
  };
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  profile: ReporterProfileDetails;
  roles: ContributorRole[];
}

// Navigation type Defination
export interface NavigationItem {
  id: number;
  title: string;
  icon: string;
  url: string;
  target: "SELF";
  linkType: string;
  position?: number;
  parentId?: number | null;
  status: string;
  navigationId?: string | null;
  children: NavigationItem[];
}

export interface MenuType {
  id?: number;
  name: string;
  categories: Omit<NavigationItem, "children">[];
  tags: Omit<NavigationItem, "id" | "children">[];
  link: {
    id: string;
    url: string;
    title: string;
  };
  navigationItems: NavigationItem[];
}
