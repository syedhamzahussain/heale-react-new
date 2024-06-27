import React, { useEffect, useState } from "react";
import { useWizard } from "react-use-wizard";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CheckIcon, RadioIcon, RadioIconChecked } from "../../../shared/Icons";
import { useLocation } from "react-router-dom";


export const usePersistedStep = (initialStep: number): [number, React.Dispatch<React.SetStateAction<number>>, () => void] => {
    const [step, setStep] = useState(() => {
        const savedStep = localStorage.getItem("onboardingStep");
        return savedStep ? Number(savedStep) : initialStep;
    });

    useEffect(() => {
        localStorage.setItem("onboardingStep", step.toString());
    }, [step]);

    const clearStep = () => {
        localStorage.removeItem("onboardingStep");
    };

    return [step, setStep, clearStep];
};


const StepFormHeader = () => {
    const { activeStep, stepCount } = useWizard();
    const [step, setStep, clearStep] = usePersistedStep(0);
    const location = useLocation();
    useEffect(() => {
        setStep(activeStep);
    }, [activeStep, setStep]);

    const stepNames = location.pathname.includes("business")
        ? [
            "Personal Info",
            "2 Factor Authentication",
            "Verify Identity",
            "Business Info",
            "Application",
            "Connect Account",
            "Receive Card",
            "Team Info"
        ]
        : [
            "Personal Info",
            "2 Factor Authentication",
            "Verify Identity",
            "Connect Account",
            "Receive Card",
        ];

    const renderSteps = () => {
        const steps = [];

        for (let i = 0; i < stepCount; i++) {
            const stepNumber = i + 1;
            const isActive = stepNumber <= step + 1;
            const isCompleted = stepNumber < step + 1;

            steps.push(
                <Flex w={"100%"} alignItems={"center"} gap={2} key={i} pb={4} pos={"relative"} _after={{
                    content: { md: "''", base: "unset" },
                    pos: "absolute",
                    w: "2px",
                    h: "8px",
                    bgColor: "Neutral.200",
                    left: "8px",
                    bottom: 0,
                    transform: "translate(-50%, -50%)"
                }} _last={{
                    _after: {
                        content: "unset"
                    }
                }}>
                    <Box>
                        {isCompleted ? <CheckIcon /> : isActive ? <RadioIconChecked /> : <RadioIcon mb={1} />}
                    </Box>
                    <Text w={"max-content"} color={isCompleted ? "Primary.Navy" : isActive ? "Primary.Blue" : "Neutral.700"}>{stepNames[i]}</Text>
                </Flex>
            );
        }
        return steps;
    };
    return (
        <Flex flexDir={{ md: "column", base: "row" }} gap={{ md: 0, base: 4 }} minW={"25%"} overflowX={"auto"}>
            {renderSteps()}
        </Flex>
    );
};

export default StepFormHeader;
