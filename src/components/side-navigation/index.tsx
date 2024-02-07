import {
  ProfileOutlined,
  ReconciliationOutlined,
  OneToOneOutlined,
  FileSyncOutlined,
  ShopOutlined,
  LogoutOutlined,
  LeftOutlined,
  DownOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Link } from "@tanstack/react-router";
import { Flex, Menu, Avatar, Typography, Image } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";

import "./style.css";

const menuItems = [
  {
    key: 2,
    icon: <ProfileOutlined />,
    label: "Dashboard",
  },

  {
    key: 2,
    icon: <ProfileOutlined />,
    label: "User Manajemen",
  },
  {
    key: 1,
    icon: <ReconciliationOutlined />,
    label: "Master Data",
    children: [
      {
        key: 1,
        icon: <ReconciliationOutlined />,
        label: "Child 1",
      },
      {
        key: 2,
        icon: <ReconciliationOutlined />,
        label: "Child 2",
      },
    ],
  },

  {
    key: 2,
    icon: <ProfileOutlined />,
    label: "Penawaran Awal (LOO)",
  },
  {
    key: 3,
    icon: <OneToOneOutlined />,
    label: "Penawaran Lanjutan",
  },
  {
    key: 4,
    icon: <FileSyncOutlined />,
    label: "Lease",
  },
  {
    key: 5,
    icon: <ShopOutlined />,
    label: "Casual Lease",
  },
];

export const SideNavigation: React.FC<{
  toggleSider: () => void;
  isSiderCollapsed: boolean;
}> = ({ toggleSider, isSiderCollapsed }) => {
  const bottomMenuItems = [
    {
      key: 5,
      icon: <LogoutOutlined />,
      label: "Logout",
    },
    {
      key: 6,
      icon: (
        <LeftOutlined
          style={{
            rotate: isSiderCollapsed ? "180deg" : "0deg",
            transition: "all",
          }}
        />
      ),
      label: "Collapse",
      onClick: toggleSider,
    },
  ];

  return (
    <Sider
      className="sidebar-navigation"
      style={{
        boxShadow: "0 3px 10px rgb(0,0,0,0.2)",
        left: isSiderCollapsed ? -200 : 0,
        top: 0,
        padding: "6px",
        backgroundColor: "#00803C",
        zIndex: 50,
        position: "sticky",
      }}
      width={"300px"}
      collapsed={isSiderCollapsed}
    >
      <Flex vertical justify="space-between" style={{ height: "100%" }}>
        <div>
          <Menu mode="inline" inlineIndent={10} style={{ border: "none" }}>
            <Flex
              justify={isSiderCollapsed ? "center" : "start"}
              align="center"
              style={{
                padding: "1em",
                height: "72px",
                borderBottom: "1px solid #00000026",
              }}
            >
              <Link>
                <Image
                  width={isSiderCollapsed ? 40 : 92}
                  height={isSiderCollapsed ? 16 : 32}
                  preview={false}
                  src="https://s3-alpha-sig.figma.com/img/a59b/c682/944d32ca07533e8fa0f675e91ea3a011?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jy3pEwsbEq7v1J0tZBT5rYouUKggYjUC6u88D~zoZaZrDGdUxqEYR3gJnj0x2bt6Slx2G58iaUP8FYnfhhtKszUY18daVf8MWIUZpxdIc6qOoYbDxhrwjn6aJIWQlegIJFtWeEelmEFKjsYGyF~RhD9Gg92B1EsjJhUo~zP2KQRqf5cCzjir0oxpYsuhJHqaWK2BX1FidJtwhGWrvDKNi20WflzjtNJA4KgWUGUhd681uGo3qM9I6M~RR6-EHHiKIOqNm1Z8zSAMz1PGRxxkIxICIvkzHEx7BeDp19epxGpMxu57~0tOu8sgusgAQ30HM6rJqtdQNlwWin~kghvSvQ__"
                />
              </Link>
            </Flex>
            <Menu.Item style={{ height: "72px", padding: "0.5rem" }}>
              <Flex align="center" justify="space-between">
                <Flex align="center" gap={10}>
                  <Avatar
                    size={40}
                    src="https://s3-alpha-sig.figma.com/img/e499/4283/332609b7f24770ef80a0261324ada328?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MbKD7XgNG5dUfnTulqDDzxyPNKuVoicF8eizjiwpJB2vFTYch1ymEPZQfq7iiGKpk~WiaiyNrM9UoWs8s1ozTAyFX062BnzOQBfSY305vvfxl1UkMwSMxm6c~R2C2RsqJSyyaVqFa~~kJUD8I-4I4vpIU3yTShTikhzP1vEwlfr3x3HbVviLJvD0FaLO9PjSA9Q4mzDUC2Ie3aLlEPtem6XSgR7JRZ5v5zcQfDB8Hgtjj1sn5aRgZGzh5WjKxJ8ctmomEFV9c89Nqg02cahrCkk0Jlf41DHFvcL~xGHgP97MsOKXYH70oBQm27itsp1MSyTu-bXzZbs1mFrQcCPVFw__"
                  />
                  <Flex vertical>
                    <Flex gap={10} align="center">
                      <Typography.Text
                        style={{ color: "white", fontSize: "16px" }}
                      >
                        Rio Irawan
                      </Typography.Text>
                      <DownOutlined />
                    </Flex>

                    <Typography.Text
                      style={{ color: "white", fontWeight: "lighter" }}
                    >
                      Sales
                    </Typography.Text>
                  </Flex>
                </Flex>
                <BellOutlined style={{ fontSize: "20px" }} />
              </Flex>
            </Menu.Item>

            {menuItems.map((item) =>
              item.children ? (
                <Menu.SubMenu icon={item.icon} title={item.label}>
                  {item.children.map((childItem) => (
                    <Menu.Item icon={childItem.icon}>
                      {childItem.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item icon={item.icon}>{item.label}</Menu.Item>
              )
            )}
          </Menu>
        </div>
        <div>
          <Menu>
            {bottomMenuItems.map((item) => (
              <Menu.Item icon={item.icon} onClick={item.onClick}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Flex>
    </Sider>
  );
};
