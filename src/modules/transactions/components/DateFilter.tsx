import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    return (
        <DatePicker selected={startDate}
            onChange={(date) => setStartDate(date as Date)} />
    )
}

export default DateFilter