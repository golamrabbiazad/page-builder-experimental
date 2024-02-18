"use client";
import Header from "@/modules/admin/layout/@components/header";
import SidebarComponent from "@/modules/admin/layout/@components/sidebar";
import { useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { inter } from "../fonts/english-fonts";
import { shurjoFont } from "../fonts/bangla-fonts";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  //   const navigate = useRouter();

  return (
    <div className={`${inter.className} ${shurjoFont.className}`}>
      <div className="flex relative h-screen overflow-hidden">
        <div className="h-screen relative">
          <button
            className="hidden lg:block absolute z-[100] right-[-12px] top-[45px]"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <FiArrowRightCircle className="text-2xl text-gray-500" />
            ) : (
              <FiArrowLeftCircle className="text-2xl text-gray-500" />
            )}
          </button>
          <SidebarComponent
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            toggled={toggled}
            setToggled={setToggled}
          />
        </div>
        <div className="h-screen overflow-auto w-full">
          <Header toggled={toggled} setToggled={setToggled} />
          <div className="p-8 pt-4">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
