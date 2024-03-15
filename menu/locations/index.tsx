"use client";
import Link from "next/link";
import { useState } from "react";
import { Select, Skeleton, Table, message } from "antd";
import PageHeader from "@/modules/@common/page_header";
import { ColumnsType } from "antd/es/table";
import {
  useAssignLocationMutation,
  useGetAllLocationQuery,
  useGetAllNavigationsQuery,
} from "@/appstore/menu/menu_api";

export default function ManageLocations() {
  const [locId, setLocId] = useState<number>();
  const [navId, setNavId] = useState<number>();

  const {
    data: allLocation,
    isLoading: isAllLocationLoading,
    refetch,
  } = useGetAllLocationQuery();

  const { data: allNavigations, isLoading: isAllNavigationLoading } =
    useGetAllNavigationsQuery();

  const columns: ColumnsType<any> = [
    {
      title: "Menu Location",
      dataIndex: "name",
      className: "font-semibold",
      key: "menu-location",
    },
    {
      title: "Assigned Menu",
      dataIndex: "assigned-menu",
      key: "assigned-menu",
      render: (_, record) => {
        return (
          <div className="flex items-center gap-2">
            <Select
              size="middle"
              style={{ width: "150px" }}
              defaultValue={
                navId
                  ? navId
                  : record?.navigationId
                  ? record?.navigationId
                  : undefined
              }
              placeholder="Select a menu"
              onChange={(value) => {
                setLocId(record.id);
                setNavId(parseInt(value, 10));
              }}
              options={allNavigations ?? []}
              fieldNames={{
                label: "name",
                value: "id",
              }}
            />

            <div>
              {record?.navigationId ? (
                <span className="space-x-2">
                  <Link
                    className="text-blue-500 hover:text-blue-500"
                    href={`/admin/menu/edit/${record.navigationId}`}
                  >
                    Edit
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link
                    className="text-blue-500 hover:text-blue-500"
                    href={"/admin/menu/add"}
                  >
                    Use new menu
                  </Link>
                </span>
              ) : (
                <Link
                  className="text-blue-500 hover:text-blue-500"
                  href={"/admin/menu/add"}
                >
                  Use new menu
                </Link>
              )}
            </div>
          </div>
        );
      },
    },
  ];

  const [assignLocation] = useAssignLocationMutation();

  const handleSaveChange = async () => {
    try {
      const payload = await assignLocation({
        locationId: locId!,
        navigationId: navId!,
      }).unwrap();

      if (payload.id) {
        message.success("Location assigned successfully");
        refetch();
      }
    } catch (error) {
      if (
        error instanceof Error &&
        typeof error === "object" &&
        "message" in error &&
        error.message !== ""
      ) {
        message.error(error.message);
      }
    }
  };

  return (
    <div className="mt-4">
      <PageHeader
        breadcrumbsData={[
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: `Menu` },
        ]}
        title={`Manage Locations`}
      />

      <div className="grid grid-cols-[900px]">
        <Skeleton
          loading={isAllLocationLoading && isAllNavigationLoading}
          active
        >
          <div>
            <Table
              rowKey="id"
              style={{ backgroundColor: "white" }}
              columns={columns}
              dataSource={allLocation}
              loading={isAllLocationLoading}
              pagination={false}
            />
            <button className="btn btn-primary mt-4" onClick={handleSaveChange}>
              Save Changes
            </button>
          </div>
        </Skeleton>
      </div>
    </div>
  );
}

/**
 * incase new location is needed
 * 
const [newLocation, setNewLocation] = useState("");
const [createNavLocation] = useCreateNavigationLocationMutation();

const handleSubmit = async () => {
  try {
    const payload = await createNavLocation({
      name: newLocation,
    }).unwrap();

    if (payload.id) {
      message.success("Location created successfully");
      setNewLocation("");
      refetch();
    }
  } catch (error) {
    if (error instanceof Error && typeof error === "object") {
      message.error(error.message);
    }
  }
};

<div>
          <Card>
            <h5 className="uppercase">New Location</h5>

            <div className="mt-8">
              <label
                htmlFor="location-name"
                className="text-base font-semibold"
              >
                Location Name
                <span className="text-danger"> *</span>
              </label>
              <div>
                <input
                  type="text"
                  id="location-name"
                  placeholder="Enter Name"
                  value={newLocation}
                  className="border px-2 py-2 rounded-sm w-full"
                  onChange={(e) => setNewLocation(e.target.value)}
                />
              </div>
            </div>

            <div>
              {true ? (
                <button
                  type="submit"
                  className={`btn btn-secondary mt-5 rounded-md`}
                  onClick={handleSubmit}
                >
                  Add
                </button>
              ) : (
                <button
                  className={`btn btn-secondary rounded-md mt-5 disabled w-[134px]`}
                >
                  <Spin className="h-5 w-5" />
                </button>
              )}
            </div>
          </Card>
        </div>
 */
