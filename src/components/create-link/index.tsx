import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

import "./style.css";

export const CreateLink: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button
      style={{
        backgroundColor: "#00803C",
        fontFamily: "Poppins",
        color: "white",
        fontSize: "14px",
      }}
      size="middle"
    >
      <PlusOutlined />
      <span className="create-link__title">{text}</span>
    </Button>
  );
};
