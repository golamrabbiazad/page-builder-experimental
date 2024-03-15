import { nanoid } from "@reduxjs/toolkit";
import {
  ADDED_MENU_ITEM,
  CLEARED_CATEGORY_ITEMS,
  CLEARED_TAG_ITEMS,
  DELETED_MENU_ITEM,
  INSERTED_NAVIGATION_ITEMS,
  MenuAction,
  REORDERED_MENU_ITEM,
  RESET_CUSTOM_LINK,
  UPDATED_CATEGORY,
  UPDATED_CUSTOM_LINK,
  UPDATED_CUSTOM_TITLE,
  UPDATED_MENU_NAME,
  UPDATED_NAVIGATION_TEXT,
  UPDATED_NAVIGATION_URL,
  UPDATED_TAG,
} from "./actions";
import { MenuType, NavigationItem } from "@/appstore/lib/definitions";

export const initialState: MenuType = {
  name: "",
  categories: [],
  tags: [],
  link: {
    id: nanoid(),
    title: "",
    url: "/",
  },
  navigationItems: [],
};

function updateURLRecursive(
  items: MenuType["navigationItems"],
  menuId: number,
  parentId: number,
  newData: string
): MenuType["navigationItems"] {
  return items.map((item) => {
    if (item.id === menuId && item.parentId === parentId) {
      // Update the title
      return { ...item, url: newData };
    }
    if (item.children) {
      // Recursively update children
      return {
        ...item,
        children: updateURLRecursive(item.children, menuId, parentId, newData),
      };
    }
    return item;
  });
}

function updateTitleRecursive(
  items: MenuType["navigationItems"],
  menuId: number,
  parentId: number,
  newData: string
): MenuType["navigationItems"] {
  return items.map((item) => {
    if (item.id === menuId && item.parentId === parentId) {
      // Update the title
      return { ...item, title: newData };
    }
    if (item.children) {
      // Recursively update children
      return {
        ...item,
        children: updateTitleRecursive(
          item.children,
          menuId,
          parentId,
          newData
        ),
      };
    }
    return item;
  });
}

function removeItemRecursive(
  items: MenuType["navigationItems"],
  menuId: number,
  parentId: number
): any {
  return items
    .map((item) => {
      if (item.id === menuId && item.parentId === parentId) {
        // If the item matches the menuId and parentId, don't include it in the result
        return null;
      }
      if (item.children) {
        // Recursively filter children
        return {
          ...item,
          children: removeItemRecursive(item.children, menuId, parentId),
        };
      }
      return item;
    })
    .filter(Boolean);
}

export function menuReducer(state = initialState, action: MenuAction) {
  if (action.type === INSERTED_NAVIGATION_ITEMS) {
    return {
      ...state,
      navigationItems: [...state.navigationItems, ...action.payload.items],
    };
  }

  if (action.type === UPDATED_NAVIGATION_URL) {
    const { menu, data } = action.payload;

    const updatedNavigationURL = updateURLRecursive(
      state.navigationItems,
      menu.id,
      menu.parentId!,
      data
    );

    return {
      ...state,
      navigationItems: updatedNavigationURL,
    };
  }

  if (action.type === UPDATED_NAVIGATION_TEXT) {
    const { menu, data } = action.payload;

    const updatedNavigationTitle = updateTitleRecursive(
      state.navigationItems,
      menu.id,
      menu.parentId!,
      data
    );

    return {
      ...state,
      navigationItems: updatedNavigationTitle,
    };
  }

  if (action.type === UPDATED_CATEGORY) {
    const { category } = action.payload;

    return {
      ...state,
      categories: [...state.categories, category],
    };
  }

  if (action.type === UPDATED_MENU_NAME) {
    const { name } = action.payload;

    return {
      ...state,
      name,
    };
  }

  if (action.type === UPDATED_TAG) {
    return {
      ...state,
      tags: [...state.tags, action.payload],
    };
  }

  if (action.type === UPDATED_CUSTOM_LINK) {
    const { url } = action.payload;
    return {
      ...state,
      link: {
        ...state.link,
        url,
      },
    };
  }

  if (action.type === UPDATED_CUSTOM_TITLE) {
    const { title } = action.payload;

    return {
      ...state,
      link: {
        ...state.link,
        title,
      },
    };
  }

  if (action.type === ADDED_MENU_ITEM) {
    const { item } = action.payload;

    return {
      ...state,
      navigationItems: [...state.navigationItems, item],
    };
  }

  if (action.type === REORDERED_MENU_ITEM) {
    const { items } = action.payload;

    return {
      ...state,
      navigationItems: [...items],
    };
  }

  if (action.type === DELETED_MENU_ITEM) {
    const updatedNavigationsItem = removeItemRecursive(
      state.navigationItems,
      action.payload.id,
      action.payload.parentId
    ) as NavigationItem[];

    return {
      ...state,
      navigationItems: updatedNavigationsItem,
    };
  }

  if (action.type === CLEARED_CATEGORY_ITEMS) {
    return {
      ...state,
      categories: [],
    };
  }

  if (action.type === CLEARED_TAG_ITEMS) {
    return {
      ...state,
      tags: [],
    };
  }

  if (action.type === RESET_CUSTOM_LINK) {
    return {
      ...state,
      link: {
        id: nanoid(),
        title: "",
        url: "/",
      },
    };
  }

  return state;
}
