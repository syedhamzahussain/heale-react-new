import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const ButtonTheme = ({
    btnText,
    chakraProps,
    primary,
    invert,
}: {
    btnText: string;
    chakraProps?: ButtonProps;
    invert?: boolean;
    primary?: boolean;
}) => {
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