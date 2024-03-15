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
import { initialState, menuReducer } from "../reducer";
import { BiGridVertical } from "react-icons/bi";
import {
  addMenuItem,
  clearCategoryItems,
  clearTagItems,
  deleteMenuItem,
  insertNavigationItems,
  reorderMenuItem,
  resetCustomLink,
  updateCategory,
  updateCustomLink,
  updateCustomTitle,
  updateMenuName,
  updateNavigationText,
  updateNavigationURL,
  updateTag,
} from "../actions";
import { NavigationItem } from "@/appstore/lib/definitions";

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

  const [state, dispatch] = useReducer(menuReducer, initialState);

  useEffect(() => {
    if (singleNavigation) {
      dispatch(updateMenuName(singleNavigation.name));
      dispatch(insertNavigationItems(singleNavigation.navigationItems));
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
                        onChange={(e) => {
                          dispatch(updateNavigationURL(item, e.target.value));
                        }}
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
                          dispatch(updateNavigationText(item, e.target.value));
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <button
                      className="btn btn-ghost underline rounded-md"
                      onClick={() => {
                        dispatch(deleteMenuItem(item));
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
              name,
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
                            dispatch(
                              updateCategory({
                                id: node.key.toString() as unknown as number,
                                title: node.title?.toString()!,
                                icon: "",
                                url: `/category/${node.title}`,
                                target: "SELF",
                                linkType: "Category",
                                status: "ACTIVE",
                              })
                            );
                          }}
                          activeKey={
                            state.categories.map(({ id }) => id)[0] ?? []
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
                              state.categories.map((item) =>
                                dispatch(addMenuItem(item as NavigationItem))
                              );

                              dispatch(clearCategoryItems());
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
                                          dispatch(
                                            updateTag({
                                              id: tagId,
                                              title,
                                              icon: "",
                                              url: `/${title}`,
                                              linkType: "Tag",
                                              target: "SELF",
                                              status: "ACTIVE",
                                            })
                                          );
                                      }}
                                      // need external state to manage checked {checked: true | false}
                                      checked={state.tags?.some(
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
                            state.tags.map((item) => {
                              dispatch(addMenuItem(item as NavigationItem));
                            });
                            dispatch(clearTagItems());
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
                              dispatch(updateCustomLink(e.target.value));
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
                            value={state.link.title}
                            className="border px-3 py-2 text-sm w-full"
                            onChange={(e) =>
                              dispatch(updateCustomTitle(e.target.value))
                            }
                          />
                        </div>

                        <div className="flex mt-4 justify-end">
                          <button
                            className="btn btn-primary "
                            type="submit"
                            onClick={() => {
                              dispatch(
                                addMenuItem(
                                  state.link as unknown as NavigationItem
                                )
                              );

                              dispatch(resetCustomLink());
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
                        value={state.name}
                        className="border px-3 py-1 text-sm w-1/3 rounded-sm bg-[#F6F7FA] focus:outline-none"
                        onChange={(e) => {
                          dispatch(updateMenuName(e.target.value));
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
                        dispatch(reorderMenuItem(e.items as NavigationItem[]));
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
