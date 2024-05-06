// import React, { useState } from 'react'
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// const DateFilter = () => {
//     const [startDate, setStartDate] = useState<Date>(new Date());
//     return (
//         <>
//             <DatePicker inline monthsShown={2} selected={startDate}
//                 onChange={(date) => setStartDate(date as Date)} />
//         </>
//     )
// }

// export default DateFilter


import { Box, Flex, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    };

    return (
        <Flex gap={4}>
            <Box>
                <FormLabel fontWeight={"600"} color={"Primary.Navy"}>From</FormLabel>
                <Input mb={2} value={startDate ? startDate.toISOString().slice(0, 10) : ''} />
                <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    inline
                />
            </Box>
            <Box>
                <FormLabel fontWeight={"600"} color={"Primary.Navy"}>To</FormLabel>
                <Input mb={2} value={endDate ? endDate.toISOString().slice(0, 10) : ''} />
                <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    inline
                />
            </Box>
        </Flex>
    );
};

export default DateFilter;
