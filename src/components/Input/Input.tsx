import './input.scss'
import {FC, useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import IconCalendar from "../ui/Icons/Calendar";
import clsx from "clsx";


interface IInput {
    type?: string
    classes?: string
    name: string
    label: string
    placeholder: string
    datePicker?: boolean
    onChange: (e: any) => void
}

const Input: FC<IInput> = ({type = 'text', datePicker = false, onChange, name, label, placeholder, classes}) => {


    const [startDate, setStartDate] = useState('');
    const [selectedDatepicker, setSelectedDatepicker] = useState(false);
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');


    const onDatepickerInput = (e: any) => {
        setFocus(false)
        setSelectedDatepicker(true)
        onChange(e)
        setStartDate(e)
    }

    const onInput = () => {
        if (value.length) {
            onChange(value)
            setFocus(false)
        }

    }

    return (
        <div className={clsx('input__container', {'input__container--selected': selectedDatepicker},
            {'input__container--focused': focus})}>
            {datePicker && <IconCalendar/>}
            {datePicker &&
							<DatePicker
								onFocus={() => setFocus(true)}
								onBlur={() => setFocus(false)}
								dateFormat='dd.MM.yyyy'
								placeholderText='дд.мм.гг'
								selected={startDate}
								onChange={(e: any) => onDatepickerInput(e)}
							/>}

            {!datePicker && <input
							id={name}
							value={value}
							onChange={(e) => setValue(e.target.value)}
							autoComplete='new-password'
							name={name}
							onFocus={() => setFocus(true)}
							onBlur={onInput}
							placeholder={placeholder}
							type={type}
							className={`input ${classes}`}
						/>}
            <label className='input__label' htmlFor={name}>{label}</label>
        </div>
    );
};

export default Input;