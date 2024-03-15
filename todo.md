# Todo

All work(bugs, fixes, features) for this page builder.

## News Portal Admin

- perf: Admin Dashboard super fast, previous admin dashboard rendered time 22s, now ~1.1 - 1.7s (Huge perfomance wins)
- perf: navigate links between pages instant (Huge UX)
- feat: dashboard, categories, topics, reporters, admin pages with typesafe codebase and UI.
- searchbar.
- ...bug fixes

- fix: responsive dashboard mobile menu (todo)

- suggestion: fonts and sizes which is in the newsportal folder.

## Priorities

- fix image upload locally.
- temporary remove online store, implement offline storage.
- implement radix UI and tailwindCSS.
- row block and add sections is same layout.
- after blocks dropped customize menu should open.
- for heading block, default text heading, and can changeable to heading type for ex, h1, h2, h3, h4, h5.

- customize existing layout stucture.

- feat: add text alignment to position of that text.
- fix: double click to insert image not works because of the server can't store the image rtn. This may works if we can interact with real db.
- fix: hide default eye button.
- feat: workable `Rich Text Editor` functionality.
- feat: select on component right side panel pops up.
- feat: implement <https://platejs.org/> RTE for the text Editor.
- fix: discard button
- implement tooltip (ex, shows bigger images of layout) on templates when mouse hover on them.
- fix: image import issue for `@/app/page-builder/lib/plugins/category/assets/index.ts`
- <https://github.com/GrapesJS/grapesjs/issues/3399>
- <https://github.com/GrapesJS/grapesjs/discussions/3672>

## Bugs

- bug: after section added to the layout the id of the section can't be changed.
- bug: when we're in the preview-mode, contents are still now editable.

- ~~bug: initial display get empty that means doesn't show canvas.~~
- ~~bug: click body element in the layer panel takes full page to zoom, and can't show the topbar buttons.~~
- ~~bug: canvas should be scrollable to the viewport when dragging to the bottom.~~
- ~~bug: insert Data **not removed, for ex, (layout-1)** when layout rendered from the server.~~
- ~~bug: append data can't exported into HTML.~~

## Enhancements

- fix: when a component is selected and switch to another tab (content) the state gets lost.
- fix: style manager's classes panel, this could be default panel.

- ~~fix: asset manager design and functionality.~~
- ~~fix: after clicking the content the right side panel content editable window opens.~~
- ~~fix: category name will be basic block and layout is going to dynamic content.~~

## Features

- feat: heading plugin where default heading is h1, and later it can be changed to h2, h3, h4, h5, h6
- context menu for various option for example, delete, save, copy, cut etc in the canvas.
- feat: custom layout, for example `grid` layout.
- feat: form elements from figma to add.
- feat: custom google ads banner.
- feat: add more layouts.
- refactor: refactor layouts.
- feat: heading plugin where default heading is h1, and later it can be changed to h2, h3, h4, h5, h6
- context menu for various option for example, delete, save, copy, cut etc in the canvas.

- ~~feat: redesign the full editor (light, dark mode support.)~~
- ~~feat: data stored in local db~~
- ~~feat: load raw html from server to the editor~~
- ~~feat: basic tailwind layout~~
- ~~feat: dynamic data fill up based on the category when layout selected.~~
- ~~feat: dynamic data for example, fill up data based on category. Ex, `crimes, sports, politics, etc.`~~
- ~~feat: click save button to post request to the API.~~
- ~~feat: custom save button for save the project in the db.~~
- ~~feat: all images are show in the asset manager preview panel.~~
- ~~feat: toast shows when user hit the save button.~~
- ~~**feat: news layout data can't be editable.**~~
- ~~feat: news layouts can't be editable but basic element are editable.~~

## Username Schema

```tsx
  // Validation schema
  const validationSchema = Yup.object().shape({
    adminType: Yup.string().required("Admin Type is required"),
    username: Yup.string()
      .required("username or email is required.")
      .test("is-email", "Invalid email", (value) => {
        return (
          Yup.string().email().isValidSync(value) ||
          Yup.string()
            .matches(
              /^[a-zA-Z0-9_.-]+$/,
              "Username can only contain letters, numbers, underscores, dots, or hyphens"
            )
            .isValidSync(value)
        );
      }),
    password: Yup.string().required("Password is required").min(6),
  });
```

## issues in frontend

- searchbar not working.
- nested category not showing.
- in tag/রাজশাহী-বিভাগ page still showing not news found from this tag.
- popular/most read/ tabs is still shows static news. no news in good news tab.
- in search page, left side search not working.
- no one wait for menu to be loaded in the screen except for news. 
- news date, AM/PM shows
- need more video gallery news.
- in video gallery details page social media icons are not same. need same size.
- in details page, comments section need attention.



- fix: required input field should be marked as RED.

## Admin Auth

```tsx
"use client";
import {
  useSignInMutation,
  useReporterSignInMutation,
  useContributorSignInMutation,
} from "@/appstore/auth/api";
import { Radio, Spin, message } from "antd";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronLeft } from "react-icons/fa6";
import * as Yup from "yup";

export const Login = () => {
  const [type, setType] = useState("password");
  const [signIn, { data, isLoading: isAdminLoading, isError }] =
    useSignInMutation();
  const [signInContributor, { isLoading: isContributorLoading }] =
    useContributorSignInMutation();
  const [signInReporter, { isLoading: isReporterLoading }] =
    useReporterSignInMutation();

  const signInInit = {
    adminType: "ADMIN",
    username: "",
    password: "",
  };

  // Validation schema
  const validationSchema = Yup.object().shape({
    adminType: Yup.string().required("Admin Type is required"),
    username: Yup.string()
      .required("username or email is required.")
      .test("is-email", "Invalid email", (value) => {
        return (
          Yup.string().email().isValidSync(value) ||
          Yup.string()
            .matches(
              /^[a-zA-Z0-9_.-]+$/,
              "Username can only contain letters, numbers, underscores, dots, or hyphens"
            )
            .isValidSync(value)
        );
      }),
    password: Yup.string().required("Password is required").min(6),
  });

  const signinHandler = async (values: any) => {
    const adminType = values?.adminType;

    try {
      let res: any;

      if (adminType === "ADMIN") {
        res = await signIn({
          username: values?.username,
          password: values?.password,
        });
      }

      if (adminType === "CONTRIBUTOR") {
        res = await signInContributor({
          username: values?.username,
          password: values?.password,
        });
      }

      if (adminType === "REPORTER") {
        res = await signInReporter({
          username: values?.username,
          password: values?.password,
        });
      }

      if (res.error) {
        if (res.error.status === 401) {
          message.error(res.error.data.message);
        } else if (res.error.status === 404) {
          message.error("User not found");
        } else if (res.error.status === 422) {
          message.error("Password Incorrect");
        } else if (res.error.status === 400) {
          message.error("Invalid username or password");
        } else {
          message.error("Something went wront. Please try again!");
        }
      } else {
        message.success("Login Successfully!");
        <Link href={"/dashboard"}></Link>;
      }
    } catch (error: any) {}
  };

  const radioOptions = [
    { value: "ADMIN", label: "ADMIN" },
    { value: "CONTRIBUTOR", label: "CONTRIBUTOR" },
    { value: "REPORTER", label: "REPORTER" },
  ];

  return (
    <>
      <div className="p-8 ">
        <div className=" grid grid-cols-[1.2fr_1fr] gap-6 max-w-[1170px] mx-auto mb-8">
          <div className="hidden lg:flex lg:items-center xl:items-center justify-center  rounded-2xl pt-10">
            <Image
              alt="welcome"
              height={700}
              width={600}
              src={"/images/misc/loginCover.jpg"}
            />
          </div>

          <div className="flex flex-col h-full items-center justify-center ">
            <div className="mb-10 text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  alt="logo"
                  height={100}
                  width={200}
                  src={"/images/misc/generation-logo.png"}
                />
              </div>
              <h4 className="mb-2">Welcome to Generation</h4>
            </div>

            <Formik
              initialValues={signInInit}
              enableReinitialize={true}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                signinHandler(values);
              }}
            >
              {({ handleSubmit, setFieldValue, errors, values, touched }) => (
                <Form className="w-full">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-10 mb-5">
                    <div className="flex gap-8 w-[40px]">
                      <div>
                        <Radio.Group
                          id="adminType"
                          onChange={(e) => {
                            const value = e.target.value;
                            setFieldValue("adminType", value);
                          }}
                          value={values?.adminType || "ADMIN"}
                          className="flex flex-col gap-2 w-full"
                        >
                          <div className="flex flex-wrap 2xl:flex-nowrap w-full">
                            {radioOptions.map((option, index) => (
                              <div key={index} className="flex w-full">
                                <Radio value={option.value}>
                                  {option.label}
                                </Radio>
                              </div>
                            ))}
                          </div>
                        </Radio.Group>
                      </div>
                    </div>
                    <div className="form_group col-span-2">
                      <label htmlFor="">
                        User Name or Email Address
                        <span className="astrisk">*</span>
                      </label>
                      <Field
                        type="text"
                        name="username"
                        className={
                          errors?.username && touched?.username && "error"
                        }
                        placeholder="User Name or Email Address"
                        value={values?.username ?? ""}
                      />
                      {errors?.username && touched?.username ? (
                        <div className="error">{errors?.username}</div>
                      ) : null}
                    </div>
                    <div className="form_group col-span-2 relative">
                      <label htmlFor="">
                        Password <span className="astrisk">*</span>
                      </label>
                      <Link
                        href="/forgot-password"
                        className="font-normal text-sm  text-[#7367f0] absolute right-0 top-[-20px]  hover:underline"
                      >
                        Forgot Password?
                      </Link>
                      <div className="relative">
                        <Field
                          type={`${type}`}
                          name="password"
                          className={`${
                            errors?.password && touched?.password ? "error" : ""
                          } !pr-11`}
                          placeholder="Password"
                          value={values?.password ?? ""}
                        />
                        <div
                          className="password_view"
                          onClick={() =>
                            setType(type == "password" ? "text" : "password")
                          }
                        >
                          {type === "password" ? (
                            <AiOutlineEyeInvisible className="text-xl" />
                          ) : (
                            <AiOutlineEye className="text-xl" />
                          )}
                        </div>
                      </div>
                      {errors?.password && touched?.password ? (
                        <div className="error">{errors?.password}</div>
                      ) : null}
                    </div>
                  </div>
                  <p className=" mb-0 ml-2">
                    No account? <Link href={"/register"}>Create one</Link>{" "}
                  </p>

                  {!isAdminLoading &&
                  !isReporterLoading &&
                  !isContributorLoading ? (
                    <>
                      <button
                        onClick={() => handleSubmit}
                        type="submit"
                        className="btn btn-primary w-full mt-5 mb-4 py-3.5 rounded-lg"
                      >
                        Sign In
                      </button>
                      <div className="text-center">
                        <Link
                          href={"/"}
                          className=" font-semibold transition-all items-center flex justify-center gap-3 "
                        >
                          <FaChevronLeft className="text-sm" />
                          Browsing as a Guest
                        </Link>
                      </div>
                    </>
                  ) : (
                    <button className="btn btn-primary w-full mt-5 mb-4 py-3 rounded-lg disabled">
                      <Spin />
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

```

action.ts

```tsx
import { Category, CategoryProps } from "./menuTypes";

export const UPDATE_CATEGORY = "UPDATE_CATEGORY" as const;
export const UPDATE_TAG = "UPDATE_TAG" as const;
export const UPDATE_LINK = "UPDATE_LINK" as const;
export const ADD_MENU_ITEM = "ADD_MENU_ITEM" as const;
export const REORDER_MENU_ITEM = "REORDER_MENU_ITEM" as const;
export const CLEAR_CATEGORY_STATE = "CLEAR_CATEGORY_STATE" as const;

type UPDATE_CATEGORY_PAYLOAD = Category & { children: Array<CategoryProps> };
type UPDATE_TAG_PAYLOAD = Category & { children: Array<CategoryProps> };
type UPDATE_LINK_PAYLOAD = Category;
type ADD_MENU_ITEM_PAYLOAD = Category;

export const updateCategory = (payload: UPDATE_CATEGORY_PAYLOAD) => ({
  type: UPDATE_CATEGORY,
  payload,
});

export const updateTag = (payload: UPDATE_TAG_PAYLOAD) => ({
  type: UPDATE_TAG,
  payload,
});

export const updateLink = (payload: UPDATE_LINK_PAYLOAD) => ({
  type: UPDATE_LINK,
  payload,
});

export const addMenuItem = (payload: ADD_MENU_ITEM_PAYLOAD) => ({
  type: ADD_MENU_ITEM,
  payload,
});

export const reorderMenuItem = (payload: any) => ({
  type: REORDER_MENU_ITEM,
  payload,
});

export const updateMenuItem = (payload: { menu: any; data: string }) => ({
  type: "UPDATE_MENU_ITEM",
  payload,
});

export const deleteMenuItem = (payload: { menuItem: any }) => ({
  type: "DELETE_MENU_ITEM",
  payload,
});

export const updateSubCategory = (payload: any) => ({
  type: "UPDATE_SUB_CATEGORY",
  payload,
});

export const deleteSubCategory = (payload: any) => ({
  type: "DELETE_SUB_CATEGORY",
  payload,
});

export const clearState = () => ({
  type: "CLEAR_STATE",
});

export const clearCategoryState = () => ({
  type: CLEAR_CATEGORY_STATE,
});

export const clearMenu = () => ({
  type: "CLEAR_MENU",
});

```

## reducer.ts

```tsx
function updateTitleRecursive(
  items: any,
  menuId: number,
  parentId: number,
  newData: string
) {
  return items.map((item: any) => {
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

function removeItemRecursive(items: any, menuId: number, parentId: number) {
  return items
    .map((item: any) => {
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
    .filter(Boolean); // Filter out null items
}

export function menuReducer(state: any, action: any) {
  switch (action.type) {
    case "UPDATE_MENU_NAME": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "UPDATE_CATEGORY":
      return {
        ...state,
        category: [...state.category, action.payload],
      };

    case "UPDATE_TAG":
      return {
        ...state,
        tag: [...state.tag, action.payload],
      };

    case "UPDATE_LINK":
      return {
        ...state,
        link: action.payload,
      };

    case "INSERT_NAVIGATION_ITEMS":
      return {
        ...state,
        navigationItems: [...state.navigationItems, ...action.payload],
      };

    case "ADD_MENU_ITEM":
      return {
        ...state,
        navigationItems: [...state.navigationItems, action.payload],
      };

    case "REORDER_MENU_ITEM":
      return {
        ...state,
        navigationItems: [...action.payload],
      };

    case "UPDATE_MENU_ITEM":
      const { menu, data } = action.payload;

      const updatedNavigationItems = updateTitleRecursive(
        state.navigationItems,
        menu.id,
        menu.parentId,
        data
      );

      return {
        ...state,
        navigationItems: updatedNavigationItems,
      };

    case "DELETE_MENU_ITEM":
      const { menuItem } = action.payload;

      const updatedNavigationsItem = removeItemRecursive(
        state.navigationItems,
        menuItem.id,
        menuItem.parentId
      );

      return {
        ...state,
        navigationItems: updatedNavigationsItem,
      };

    case "CLEAR_CATEGORY_STATE":
      return {
        ...state,
        category: [],
      };

    case "CLEAR_TAG_STATE":
      return {
        ...state,
        tag: [],
      };

    case "CLEAR_STATE":
      return {
        ...state,
        category: [],
        tag: [],
        link: {
          type: "Custom Link",
          name: "",
          url: "",
        },
      };

    case "CLEAR_MENU":
      return {
        ...state,
        navigationItems: [],
      };

    default:
      throw new Error("Unknown action type");
  }
}
```

createMenu.tsx

```tsx
"use client";
import "react-nestable/dist/styles/index.css";

import dynamic from "next/dynamic";
import { NestableProps } from "react-nestable";
import { useEffect, useMemo, useReducer, useState } from "react";
import {
  Card,
  Checkbox,
  Collapse,
  Input,
  Skeleton,
  Spin,
  Tree,
  message,
} from "antd";
import { useGetPublicTagsDropdownQuery } from "@/appstore/public/public_api";
import { useGetCategoryDropdownsQuery } from "@/appstore/news/category/category_api";
import PageHeader from "@/modules/@common/page_header";
import {
  useCreateNavigationMutation,
  useDeleteNavigationMutation,
  useGetSingleNavigationQuery,
  useUpdateNavigationMutation,
} from "@/appstore/menu/menu_api";
import { notFound, useRouter } from "next/navigation";
import { nanoid } from "@reduxjs/toolkit";
import { menuReducer } from "../reducer";
import { BiGridVertical } from "react-icons/bi";
import {
  addMenuItem,
  clearCategoryState,
  deleteMenuItem,
  updateCategory,
  updateMenuItem,
} from "../actions";

const Nestable = dynamic(() => import("react-nestable"), {
  ssr: false,
});

const { Search } = Input;

interface CategoryType {
  id: number;
  title: string;
  children: ChildType[];
}

interface ChildType {
  id: number;
  key?: string;
  title: string;
  children: ChildType[];
}

export const treeData = (categories: any) => {
  return categories?.map((category: CategoryType) => ({
    value: category.id.toString(),
    title: category.title,
    children: category.children.map(mapChildrenValue),
  }));
};

export const treeDataWithKey = (categories: any) => {
  return categories?.map((category: CategoryType) => ({
    key: category.id.toString(),
    title: category.title,
    children: category.children.map(mapChildren),
  }));
};

function mapChildren(child: ChildType): ChildType {
  return {
    id: child.id,
    key: child.id.toString(),
    title: child.title,
    children: child.children.length ? child.children.map(mapChildren) : [],
  };
}

function mapChildrenValue(child: any) {
  return {
    id: child.id,
    value: child.id.toString(),
    title: child.title,
    children: child.children.length ? child.children.map(mapChildren) : [],
  };
}

export default function MenuAddEdit({ id }: any) {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const { data: singleNavigation, isFetching: isSingleNavigationFetching } =
    useGetSingleNavigationQuery({ id }, { skip: !id });

  if (singleNavigation === null) notFound();

  const [state, dispatch] = useReducer(menuReducer, {
    name: "",
    category: [],
    tag: [],
    link: {
      id: nanoid(),
      title: "",
      icon: "",
      url: "/",
      target: "SELF",
      linkType: "Custom Link",
      status: "ACTIVE",
      parentId: null,
    },
    navigationItems: [],
  });

  useEffect(() => {
    if (singleNavigation) {
      dispatch({
        type: "INSERT_NAVIGATION_ITEMS",
        payload: singleNavigation.navigationItems,
      });
    }
  }, [id, singleNavigation]);

  const queryString = `?title=${searchValue}`;

  const {
    data: categories,
    isLoading,
    isFetching,
  } = useGetCategoryDropdownsQuery(queryString);

  const onExpandCategory = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const searchableTreeData = useMemo(() => {
    return treeDataWithKey(categories);
  }, [categories]);

  const renderMenuItem: NestableProps["renderItem"] = ({ item, handler }) => {
    return (
      <div className="category-container">
        <Collapse
          style={{
            borderRadius: 0,
            marginTop: 8,
          }}
          bordered={false}
          expandIconPosition="end"
          defaultActiveKey={[]}
          items={[
            {
              key: "1",
              label: (
                <div className="flex items-center gap-2">
                  {handler}
                  <span className="tracking-wide border-gray-200 font-normal text-gray-900">
                    {item.title}
                  </span>
                </div>
              ),
              headerClass: "text-base bg-[#F6F7FA]",
              style: {
                backgroundColor: "#fff",
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderColor: "#F6F7FA",
              },
              extra: (
                <p
                  className="!mb-0 text-sm text-gray-400"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.linkType}
                </p>
              ),
              children: (
                <div className="mt-2">
                  {item.linkType === "Custom Link" && (
                    <div>
                      <label htmlFor="categoryUrl" className="tracking-wide">
                        URL
                      </label>
                      <input
                        type="text"
                        name="categoryUrl"
                        id="categoryUrl"
                        defaultValue={item.url}
                        placeholder="Name"
                        className="border px-3 py-2 text-sm w-full"
                      />
                    </div>
                  )}
                  <div className="mt-2">
                    <label htmlFor="linkText" className="tracking-wide">
                      Navigation Label
                    </label>

                    <div>
                      <input
                        type="text"
                        name="linkText"
                        id="linkText"
                        placeholder="Name"
                        defaultValue={item.title}
                        className="border px-3 py-2 text-sm w-full"
                        onChange={(e) => {
                          dispatch(
                            updateMenuItem({
                              menu: item,
                              data: e.target.value,
                            })
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <button
                      className="btn btn-ghost underline rounded-md"
                      onClick={() => {
                        dispatch(
                          deleteMenuItem({
                            menuItem: item,
                          })
                        );
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    );
  };

  const { data: tags, isLoading: isTagLoading } = useGetPublicTagsDropdownQuery(
    {}
  );

  const router = useRouter();
  const [createNavigation] = useCreateNavigationMutation();
  const [updateNavigation, { isLoading: isUpdateNavigationLoading }] =
    useUpdateNavigationMutation();

  const handleMenu = async () => {
    const name = state.name;

    try {
      const payload = !id
        ? await createNavigation({
            name,
          }).unwrap()
        : await updateNavigation({
            navigationId: id,
            data: {
              name: singleNavigation?.name!,
              items: state.navigationItems,
            },
          }).unwrap();

      if (payload.id) {
        message.success(`Menu ${id ? "Updated" : "Created"} Successfully!`);
        router.push(`/admin/menu/edit/${payload.id}`);
      } else {
        message.error("something went wrong");
      }
    } catch (error) {
      if (
        error instanceof Error &&
        typeof error === "object" &&
        "message" in error!
      ) {
        message.error(error.message);
      } else {
        message.error("something went wrong");
      }
    }
  };

  const [deleteNavigation] = useDeleteNavigationMutation();

  const handleDeleteMenu = async () => {
    await deleteNavigation({ navigationId: id }).then((res: any) => {
      if (res.data === null) {
        router.push("/admin/menu");
      } else {
        message.error("something went wrong");
      }
    });
  };

  const handleCancel = () => {
    router.push("/admin/menu");
  };

  return (
    <div className="mt-4">
      <PageHeader
        breadcrumbsData={[
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: `Menu` },
        ]}
        title={`${id ? "Update" : "Create"} Menu`}
      />

      <div className="grid lg:grid-cols-[400px_1fr] gap-5 mb-8 mt-6">
        <div>
          <h4 className="font-semibold">Add Menu</h4>

          <div>
            <Collapse
              style={{
                borderRadius: 0,
              }}
              bordered={false}
              expandIconPosition="end"
              defaultActiveKey={!id ? [] : ["1"]}
              className="drop-shadow-sm"
              rootClassName={`${!id ? "disabled" : ""}`}
              items={[
                {
                  key: "1",
                  label: (
                    <span className="tracking-wide font-semibold text-gray-900">
                      Categories
                    </span>
                  ),
                  headerClass: "text-base bg-[#F6F7FA] shadow-sm",
                  style: {
                    backgroundColor: "#fff",
                  },
                  children: (
                    <div className="pt-4">
                      <div>
                        <Search
                          size="large"
                          className="mb-3"
                          placeholder="Search Category"
                          onChange={onChange}
                        />

                        <Tree
                          checkable
                          checkStrictly
                          selectable={false}
                          onExpand={onExpandCategory}
                          expandedKeys={expandedKeys}
                          autoExpandParent={autoExpandParent}
                          treeData={searchableTreeData}
                          onCheck={(_, { node }) => {
                            // this should onchecked added to the category and unchecked to removed from category
                            dispatch({
                              type: "UPDATE_CATEGORY",
                              payload: {
                                id: node.key.toString(),
                                title: node.title?.toString()!,
                                icon: "",
                                url: `/category/${node.title}`,
                                target: "SELF",
                                linkType: "Category",
                                status: "ACTIVE",
                              },
                            });
                          }}
                          activeKey={
                            state.category?.map(
                              ({ id }: { id: string }) => id
                            ) ?? []
                          }
                        />

                        {categories?.length === 0 && (
                          <p className="flex justify-center mt-3">
                            {isLoading || isFetching ? (
                              <Spin />
                            ) : (
                              "No Category Found."
                            )}
                          </p>
                        )}

                        <div className="flex justify-between items-center mt-2 px-4">
                          <span>
                            <Checkbox onChange={(e) => {}}>Select All</Checkbox>
                          </span>
                          <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={() => {
                              state.category?.map((item: any) =>
                                dispatch(addMenuItem(item))
                              );

                              dispatch(clearCategoryState());
                            }}
                          >
                            Add to Menu
                          </button>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mt-2">
            <Collapse
              style={{
                borderRadius: 0,
              }}
              bordered={false}
              expandIconPosition="end"
              className="drop-shadow-sm"
              rootClassName={`${!id ? "disabled" : ""}`}
              items={[
                {
                  key: "1",
                  label: (
                    <span className="tracking-wide font-semibold text-gray-900">
                      Tags
                    </span>
                  ),
                  headerClass: "text-base bg-[#F6F7FA] shadow-sm",
                  style: {
                    backgroundColor: "#fff",
                  },
                  children: (
                    <div className="mt-4">
                      <Search
                        size="large"
                        className="mb-3"
                        placeholder="Search Tags"
                        onChange={onChange}
                      />
                      <Skeleton loading={isTagLoading} active>
                        {!isTagLoading && (
                          <div className="mt-2 px-4 space-y-1">
                            {tags
                              ?.slice(0, 5)
                              ?.map(
                                ({
                                  title,
                                  id: tagId,
                                }: {
                                  id: number;
                                  title: string;
                                }) => (
                                  <div key={title}>
                                    <Checkbox
                                      onChange={(e) => {
                                        e.target.checked &&
                                          dispatch({
                                            type: "UPDATE_TAG",
                                            payload: {
                                              id: tagId?.toString(),
                                              title,
                                              icon: "",
                                              url: `/${title}`,
                                              linkType: "Tag",
                                              target: "SELF",
                                              parentId: null,
                                              status: "ACTIVE",
                                            },
                                          });
                                      }}
                                      // need external state to manage checked {checked: true | false}
                                      checked={state.tag?.some(
                                        (item: any) => item.title === title
                                      )}
                                    >
                                      {title}
                                    </Checkbox>
                                  </div>
                                )
                              )}
                          </div>
                        )}
                      </Skeleton>

                      <div className="flex justify-between items-center mt-2 px-4">
                        <span>
                          <Checkbox onChange={(e) => ""}>Select All</Checkbox>
                        </span>
                        <button
                          className="btn btn-primary mt-2"
                          type="submit"
                          onClick={() => {
                            state.tag.map(
                              (item: {
                                id: string;
                                link: string;
                                target: "_self";
                                type: string;
                                name: string;
                              }) => {
                                dispatch({
                                  type: "ADD_MENU_ITEM",
                                  payload: item,
                                });
                              }
                            );
                            dispatch({
                              type: "CLEAR_TAG_STATE",
                            });
                          }}
                        >
                          Add to Menu
                        </button>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="mt-2">
            <Collapse
              style={{
                borderRadius: 0,
              }}
              bordered={false}
              expandIconPosition="end"
              className="drop-shadow-sm"
              rootClassName={`${!id ? "disabled" : ""}`}
              items={[
                {
                  key: "1",
                  label: (
                    <span className="tracking-wide font-semibold text-gray-900">
                      Custom Links
                    </span>
                  ),
                  headerClass: "text-base bg-[#F6F7FA] shadow-sm",
                  style: {
                    backgroundColor: "#fff",
                  },
                  children: (
                    <div className="pt-4 px-4">
                      <div>
                        <label
                          htmlFor="customUrl"
                          className="text-base tracking-wide"
                        >
                          URL
                        </label>

                        <div>
                          <input
                            type="text"
                            name="customUrl"
                            id="customUrl"
                            placeholder="https://"
                            value={state.link.url}
                            className="border px-3 py-2 text-sm w-full"
                            onChange={(e) => {
                              dispatch({
                                type: "UPDATE_LINK",
                                payload: {
                                  ...state.link,
                                  url: e.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div className="mt-2">
                        <label
                          htmlFor="linkText"
                          className="text-base tracking-wide"
                        >
                          Add Link Text
                        </label>

                        <div>
                          <input
                            type="text"
                            name="linkText"
                            id="linkText"
                            value={state.link.name}
                            className="border px-3 py-2 text-sm w-full"
                            onChange={(e) =>
                              dispatch({
                                type: "UPDATE_LINK",
                                payload: {
                                  ...state.link,
                                  title: e.target.value,
                                },
                              })
                            }
                          />
                        </div>

                        <div className="flex mt-4 justify-end">
                          <button
                            className="btn btn-primary "
                            type="submit"
                            onClick={() => {
                              dispatch({
                                type: "ADD_MENU_ITEM",
                                payload: state.link,
                              });
                            }}
                          >
                            Add to Menu
                          </button>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Menu Structure</h4>

          <Skeleton loading={isSingleNavigationFetching} active>
            <div>
              <Card
                title={
                  <div>
                    <span>
                      <label
                        className="text-sm font-semibold tracking-wide mr-2"
                        htmlFor="menuName"
                      >
                        Menu Name
                      </label>
                      <input
                        type="text"
                        name="menuName"
                        id="menuName"
                        placeholder="Menu 1"
                        value={singleNavigation?.name}
                        className="border px-3 py-1 text-sm w-1/3 rounded-sm bg-[#F6F7FA] focus:outline-none"
                        onChange={(e) => {
                          dispatch({
                            type: "UPDATE_MENU_NAME",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </span>
                  </div>
                }
                bordered={false}
                style={{
                  borderRadius: 0,
                }}
                styles={{
                  header: {
                    backgroundColor: "#F6F7FA",
                    borderRadius: 0,
                  },
                  body: {
                    borderRadius: 0,
                    minHeight: "350px",
                  },
                }}
                actions={[
                  <div key="actions" className="flex gap-2 ml-6">
                    <div>
                      <button onClick={handleMenu} className="btn btn-primary">
                        {!id ? "Create Menu" : "Update Menu"}
                      </button>
                    </div>

                    <div>
                      <button
                        className="btn btn-ghost underline rounded-md"
                        onClick={!id ? handleCancel : handleDeleteMenu}
                      >
                        {!id ? "Cancel" : "Delete Menu"}
                      </button>
                    </div>
                  </div>,
                ]}
              >
                {id && state.navigationItems?.length === 0 && (
                  <p>Add menu items from the column on the left.</p>
                )}

                {!id && <p>Give your menu a name, then click Create Menu.</p>}

                <div className="grid grid-cols-[545px]">
                  {!isUpdateNavigationLoading ? (
                    <Nestable
                      items={state.navigationItems}
                      renderItem={renderMenuItem}
                      handler={<BiGridVertical className="text-gray-400" />}
                      onChange={(e) => {
                        dispatch({
                          type: "REORDER_MENU_ITEM",
                          payload: e.items,
                        });
                      }}
                    />
                  ) : (
                    <div className="h-48 flex items-center mx-auto">
                      <Spin size="large" />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
```
