import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SvgLibrary from "src/svgs/SvgLibrary";
import Label from '../Label';
import { Wrapper } from "./index.styled";

interface PickerProps {
    onDateChange: (Date: Date | null) => void;
    placeholder?: string;
    showTimeSelect?: boolean;
    format?: string;
    shortDays?: boolean;
    selectedDate?: Date;
    label?: string;
}

const Picker = ({onDateChange, label, showTimeSelect = true, format = 'yyyy-MM-dd h:mm aa', placeholder = 'YYYY-MM-DD 00:00', shortDays = false, selectedDate}:PickerProps) => {
    const [date, setDate] = useState<Date|null>(null);

    useEffect( () => {
        if (onDateChange) {
            onDateChange(date);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date]);

    return (
        <Wrapper>
            {label && <Label label={label} />}
            <DatePicker
                id="datepicker"
                aria-label={label}
                showTimeSelect={showTimeSelect}
                useWeekdaysShort={shortDays}
                onChange={(date: Date) => setDate(date)}
                selected={selectedDate || date}
                placeholderText={placeholder ? placeholder : 'YYYY-MM-DD --:--'}
                dateFormat={format ? format : "yyyy-MM-dd h:mm aa"}
            />
            <SvgLibrary name='calendar' />
        </Wrapper>
    );
};

export default Picker;