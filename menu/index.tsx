"use client";

import { Table } from "antd";
import { useState } from "react";
import PageHeader from "@/modules/@common/page_header";
import SearchComponent from "@/modules/@common/search";
import { ColumnsType } from "antd/es/table";
import MenuAction from "./@components/action_column";
import { useGetAllNavigationsQuery } from "@/appstore/menu/menu_api";

export default function AdminMenu() {
  const [keyword, setKeyword] = useState("");

  const { data: allNavigation, isFetching: isAllNavigationLoading } =
    useGetAllNavigationsQuery();

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "menu-name",
      key: "menu-name",
      render: (_, record) => {
        return <p className="text-[14px] mb-0">{record?.name}</p>;
      },
    },
    {
      title: "Position",
      dataIndex: "menu-position",
      key: "menu-position",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      align: "right",
      render: (_, record) => <MenuAction record={record} />,
    },
  ];

  return (
    <div className="mt-4">
      <PageHeader
        breadcrumbsData={[
          { title: "Dashboard", link: "/admin/dashboard" },
          { title: `Menu` },
        ]}
        title={`All Menu`}
        btnTitle="Add New"
        btnLink="/admin/menu/add"
      />
      <div className="grid grid-cols-2 mb-4 items-center">
        <div className="col-end-2 lg:col-end-4 items-center">
          <SearchComponent setKeyword={setKeyword} />
        </div>
      </div>

      <div className="lg:w-[900px]">
        <Table
          rowKey="id"
          style={{ backgroundColor: "white" }}
          columns={columns}
          dataSource={allNavigation}
          pagination={false}
          loading={isAllNavigationLoading}
        />
      </div>
    </div>
  );
}
