"use client";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
function SideNav() {
  const path = usePathname();
  const router = useRouter();
  const getActives = (e: any) => {
    router.push(e.key);
  };
  let menuList = [
    {
      key: "/dashboard",
      icon: <UserOutlined />,
      label: "首页",
    },
    {
      key: "/dashboard/customers",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "/dashboard/invoices",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[path]}
      items={menuList}
      onClick={getActives}
    />
  );
}
export default SideNav;
