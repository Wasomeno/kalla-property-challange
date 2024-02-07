import { MenuOutlined, BellOutlined } from "@ant-design/icons";
import { Flex, Button, Avatar, Image } from "antd";

import "./style.css";
import React from "react";

export const TopNavigation: React.FC<{ toggleSider: () => void }> = ({
  toggleSider,
}) => {
  return (
    <Flex
      className="top-navigation"
      gap="0.5rem"
      align="center"
      justify="space-between"
    >
      <div style={{ display: "inline" }}>
        <Button
          onClick={toggleSider}
          style={{
            boxShadow: "unset",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        >
          <MenuOutlined />
        </Button>
        <Image
          width={72}
          height={24}
          preview={false}
          src="https://s3-alpha-sig.figma.com/img/a59b/c682/944d32ca07533e8fa0f675e91ea3a011?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jy3pEwsbEq7v1J0tZBT5rYouUKggYjUC6u88D~zoZaZrDGdUxqEYR3gJnj0x2bt6Slx2G58iaUP8FYnfhhtKszUY18daVf8MWIUZpxdIc6qOoYbDxhrwjn6aJIWQlegIJFtWeEelmEFKjsYGyF~RhD9Gg92B1EsjJhUo~zP2KQRqf5cCzjir0oxpYsuhJHqaWK2BX1FidJtwhGWrvDKNi20WflzjtNJA4KgWUGUhd681uGo3qM9I6M~RR6-EHHiKIOqNm1Z8zSAMz1PGRxxkIxICIvkzHEx7BeDp19epxGpMxu57~0tOu8sgusgAQ30HM6rJqtdQNlwWin~kghvSvQ__"
        />
      </div>
      <Flex align="center" gap="0.75rem" style={{ paddingRight: "15px" }}>
        <Avatar
          size={30}
          src="https://s3-alpha-sig.figma.com/img/e499/4283/332609b7f24770ef80a0261324ada328?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MbKD7XgNG5dUfnTulqDDzxyPNKuVoicF8eizjiwpJB2vFTYch1ymEPZQfq7iiGKpk~WiaiyNrM9UoWs8s1ozTAyFX062BnzOQBfSY305vvfxl1UkMwSMxm6c~R2C2RsqJSyyaVqFa~~kJUD8I-4I4vpIU3yTShTikhzP1vEwlfr3x3HbVviLJvD0FaLO9PjSA9Q4mzDUC2Ie3aLlEPtem6XSgR7JRZ5v5zcQfDB8Hgtjj1sn5aRgZGzh5WjKxJ8ctmomEFV9c89Nqg02cahrCkk0Jlf41DHFvcL~xGHgP97MsOKXYH70oBQm27itsp1MSyTu-bXzZbs1mFrQcCPVFw__"
        />
        <BellOutlined style={{ fontSize: "20px", color: "white" }} />
      </Flex>
    </Flex>
  );
};
