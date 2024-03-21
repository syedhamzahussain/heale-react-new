import { Button } from "@chakra-ui/react";
import React from "react";
import { ButtonThemeType } from "type";

const ButtonTheme = ({
    btnText,
    chakraProps,
    primary,
    invert,
}: ButtonThemeType) => {
    return (
        <Button
            {...chakraProps}
            bg={invert ? "white" : primary ? "Primary.Blue" : "Neutral.100"}
            color={primary ? "white" : "Primary.Blue"}
            borderRadius={"40px"}
            p={"8px 24px"}
            borderWidth={"1px"}
            borderColor={invert ? "Neutral.200" : ""}
            transition={"all .35s ease-in-out"}
            _hover={{
                transform: "translateY(-2px)",
            }}
        >
            {btnText}
        </Button >
    );
};

export default ButtonTheme;