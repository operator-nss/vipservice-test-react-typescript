import './input.scss'
import {FC, useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import IconCalendar from "../ui/Icons/Calendar";


interface IInput {
    type?: string
    classes?: string
    name: string
    label: string
    placeholder: string
    datePicker?: boolean
}

const Input:FC<IInput> = ({type = 'text',datePicker = false, name,label,placeholder, classes}) => {


    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='input__container'>
            <label className='input__label' htmlFor={name}>{label}</label>
            {datePicker && <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>}
            {datePicker && <IconCalendar />}
            <input id={name}
                   autoComplete='new-password'
                   name={name}
                   placeholder={placeholder}
                   type={type}
                   className={`input ${classes}`}
            />
        </div>
    );
};

export default Input;