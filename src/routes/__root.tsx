import { Outlet, createRootRoute } from "@tanstack/react-router";
import { ConfigProvider, Flex, Layout } from "antd";
import { SideNavigation } from "../components/side-navigation";
import { TopNavigation } from "../components/top-navigation";
import { useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isSiderCollapsed, setIsSiderCollapsed] = useState(false);

  function toggleSider() {
    setIsSiderCollapsed(!isSiderCollapsed);
  }

  return (
    <ConfigProvider
      theme={{
        token: { fontFamily: "Poppins", colorPrimary: "#00803C" },
        components: {
          Menu: {
            itemBg: "#00803C",
            itemHoverBg: "#D09B2C",
            colorText: "white",
          },
        },
      }}
    >
      <Layout
        hasSider
        style={{
          display: "flex",
          flex: "1 1 0%",
          minHeight: "100vh",
          maxWidth: "100vw",
          gap: "1rem",
          backgroundColor: "white",
        }}
      >
        <SideNavigation
          toggleSider={toggleSider}
          isSiderCollapsed={isSiderCollapsed}
        />
        <Flex vertical flex={"1 1 0%"}>
          <TopNavigation toggleSider={toggleSider} />
          <Outlet />
        </Flex>
      </Layout>
    </ConfigProvider>
  );
}
