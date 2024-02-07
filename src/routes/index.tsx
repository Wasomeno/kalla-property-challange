import { DownOutlined, EyeOutlined } from "@ant-design/icons";
import { createFileRoute } from "@tanstack/react-router";
import { Button, Dropdown, Flex, Input, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import Title from "antd/es/typography/Title";
import { CreateLink } from "../components/create-link";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const dataSource = [
  {
    key: "1",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "draft",
  },
  {
    key: "2",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "signed",
  },
  {
    key: "3",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "draft",
  },
  {
    key: "4",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "rejected",
  },
  {
    key: "5",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "approved",
  },
  {
    key: "7",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "need approval",
  },
  {
    key: "8",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "need approval",
  },
  {
    key: "9",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "need approval",
  },
  {
    key: "10",
    looNumber: "220.LOI/SL-MARI/VIII/2019",
    looDate: "11/01/2024",
    customerInfo: "PT Boga Makmur Dinasti (Boga Group) -Kimukatsu",
    propertyInfo: "PT Kalla Inti Karsa -Mall Ratu Indah",
    status: "need approval",
  },
];

const filterItems = [
  {
    key: 1,
    label: "Status",
  },
  {
    key: 2,
    label: "Date",
  },
  {
    key: 3,
    label: "Other",
  },
];

const columns: ColumnsType<{
  key: string;
  looNumber: string;
  looDate: string;
  customerInfo: string;
  propertyInfo: string;
  status: string;
}> = [
  {
    title: "Nomor & Tanggal LOO",
    dataIndex: "looNumber",
    key: "looNumber",
  },
  {
    title: "Informasi Customer",
    dataIndex: "customerInfo",
    key: "customerInfo",
  },
  {
    title: "Informasi Property",
    dataIndex: "propertyInfo",
    key: "propertyInfo",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (value: string) => {
      const renderedValue = `${value[0].toUpperCase()}${value.slice(1)}`;
      switch (value) {
        case "rejected":
          return <Tag color="red">{renderedValue}</Tag>;
        case "approved":
          return <Tag color="green">{renderedValue}</Tag>;
        case "signed":
          return <Tag color="purple">{renderedValue}</Tag>;
        case "need approval":
          return <Tag color="blue">{renderedValue}</Tag>;
        default:
          return <Tag color="default">{renderedValue}</Tag>;
      }
    },
  },
  {
    title: "Aksi",
    dataIndex: "aksi",
    key: "aksi",
    render: () => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          type="link"
          icon={<EyeOutlined style={{ color: "#00803C", fontSize: "18px" }} />}
        />
      </div>
    ),
  },
];

function HomePage() {
  return (
    <Flex vertical flex={"1 1 0%"} gap={"0.5rem"} style={{ padding: "1rem" }}>
      <Flex align="center" justify="space-between">
        <Title style={{ fontSize: "24px" }}>Daftar Penawaran Awal (LOO)</Title>
        <CreateLink text="Tambah" />
      </Flex>
      <Flex vertical gap={"0.5rem"} flex={"1 1 0%"}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Dropdown.Button
            icon={<DownOutlined />}
            menu={{ items: filterItems }}
            style={{ width: "fit-content" }}
          >
            Filter
          </Dropdown.Button>
          <Input placeholder="Search by LOO number" />
        </div>
        <Flex
          vertical
          flex="1 1 0%"
          style={{
            maxWidth: "100vw",
            overflowX: "scroll",
            border: "1px solid #00000026",
            borderRadius: "8px",
          }}
        >
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{
              pageSize: 10,
              responsive: true,
              total: 50,
              itemRender: (_, type, originalElement) => {
                if (type === "prev") {
                  return <Button type="link">Previous</Button>;
                }
                if (type === "next") {
                  return <Button type="link">Next</Button>;
                }
                return originalElement;
              },
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
