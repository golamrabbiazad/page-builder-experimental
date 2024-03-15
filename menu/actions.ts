import { MenuType, NavigationItem } from "@/appstore/lib/definitions";

export const INSERTED_NAVIGATION_ITEMS = "INSERTED_NAVIGATION_ITEMS" as const;
export const UPDATED_NAVIGATION_URL = "UPDATED_NAVIGATION_URL" as const;
export const UPDATED_NAVIGATION_TEXT = "UPDATED_NAVIGATION_TEXT" as const;
export const DELETED_MENU_ITEM = "DELETED_MENU_ITEM" as const;
export const UPDATED_CATEGORY = "UPDATED_CATEGORY" as const;
export const CLEARED_CATEGORY_ITEMS = "CLEARED_CATEGORY_ITEMS" as const;
export const ADDED_MENU_ITEM = "ADDED_MENU_ITEM" as const;
export const UPDATED_TAG = "UPDATED_TAG" as const;
export const CLEARED_TAG_ITEMS = "CLEARED_TAG_ITEMS" as const;
export const UPDATED_CUSTOM_LINK = "UPDATED_CUSTOM_LINK" as const;
export const UPDATED_CUSTOM_TITLE = "UPDATED_CUSTOM_TITLE" as const;
export const UPDATED_MENU_NAME = "UPDATED_MENU_NAME" as const;
export const REORDERED_MENU_ITEM = "REORDERED_MENU_ITEM" as const;
export const RESET_CUSTOM_LINK = "RESET_CUSTOM_LINK" as const;

export const insertNavigationItems = (items: NavigationItem[]) => ({
  type: INSERTED_NAVIGATION_ITEMS,
  payload: {
    items,
  },
});

export const updateNavigationURL = (
  menu: Record<string, any>,
  data: string
) => ({
  type: UPDATED_NAVIGATION_URL,
  payload: {
    menu,
    data,
  },
});

export const updateNavigationText = (
  menu: Record<string, any>,
  data: string
) => ({
  type: UPDATED_NAVIGATION_TEXT,
  payload: {
    menu,
    data,
  },
});

export const deleteMenuItem = (payload: Record<string, any>) => ({
  type: DELETED_MENU_ITEM,
  payload,
});

type CategoryPayload = Omit<
  NavigationItem,
  "position" | "navigationId" | "children"
>;

export const updateCategory = (category: CategoryPayload) => {
  return {
    type: UPDATED_CATEGORY,
    payload: {
      category,
    },
  };
};

export const addMenuItem = (item: NavigationItem) => ({
  type: ADDED_MENU_ITEM,
  payload: {
    item,
  },
});

type TagPayload = Omit<
  NavigationItem,
  "position" | "navigationId" | "children"
>;

export const updateTag = (payload: TagPayload) => ({
  type: UPDATED_TAG,
  payload,
});

export const updateCustomLink = (url: string) => ({
  type: UPDATED_CUSTOM_LINK,
  payload: { url },
});

export const updateCustomTitle = (title: string) => ({
  type: UPDATED_CUSTOM_TITLE,
  payload: {
    title,
  },
});

export const updateMenuName = (name: string) => ({
  type: UPDATED_MENU_NAME,
  payload: { name },
});

export const reorderMenuItem = (items: NavigationItem[]) => ({
  type: REORDERED_MENU_ITEM,
  payload: {
    items,
  },
});

export const clearCategoryItems = () => ({
  type: CLEARED_CATEGORY_ITEMS,
});

export const clearTagItems = () => ({
  type: CLEARED_TAG_ITEMS,
});

export const resetCustomLink = () => ({
  type: RESET_CUSTOM_LINK,
});

export type MenuAction =
  | ReturnType<typeof insertNavigationItems>
  | ReturnType<typeof updateNavigationURL>
  | ReturnType<typeof updateNavigationText>
  | ReturnType<typeof deleteMenuItem>
  | ReturnType<typeof updateCategory>
  | ReturnType<typeof addMenuItem>
  | ReturnType<typeof updateTag>
  | ReturnType<typeof updateCustomLink>
  | ReturnType<typeof updateCustomTitle>
  | ReturnType<typeof updateMenuName>
  | ReturnType<typeof reorderMenuItem>
  | ReturnType<typeof clearCategoryItems>
  | ReturnType<typeof clearTagItems>
  | ReturnType<typeof resetCustomLink>;
