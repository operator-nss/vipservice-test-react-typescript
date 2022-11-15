import './input.scss'
import React, {FC, useCallback, useState} from "react";
import DatePicker from "react-datepicker";
import cities from '@/assets/cities.json'

import "react-datepicker/dist/react-datepicker.css";
import IconCalendar from "../ui/Icons/Calendar";
import clsx from "clsx";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {setSearchValue} from "../../redux/slices/aviaInfoSlice";
import debounce from 'lodash.debounce';
import {createLogger} from "vite";

interface IInput {
  type?: string
  classes?: string
  name: string
  label: string
  placeholder: string
  datePicker?: boolean
  onChangeInput: (e: string) => void
}

const Input: FC<IInput> = ({type = 'text', datePicker = false, onChangeInput, name, label, placeholder, classes}) => {

    const dispatch = useAppDispatch();
    const {searchValue} = useAppSelector(state => state.avia)


    const [startDate, setStartDate] = useState('');
    const [selectedDatepicker, setSelectedDatepicker] = useState(false);
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');
    const [openCities, setOpenCities] = useState(false);


    const onDatepickerInput = (e: string) => {
      setFocus(false)
      setSelectedDatepicker(true)
      onChangeInput(String(e))
      setStartDate(e)
    }

    const onInput = () => {
      if (value.length) {
        onChangeInput(value)
      }
      setTimeout(() => {
        setFocus(false)
        setOpenCities(false)
      }, 200)

    }

    const setInputValue = (e: React.FormEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
      if (e.currentTarget.value.length > 1 && e.currentTarget.value.match(/\D/)) {
        setOpenCities(true)
        updateSearchValue(e.currentTarget.value);
      }
    }

    const setCity = (city: string) => {
      setValue(city);
      setTimeout(() => {
        setOpenCities(false)
        setFocus(false)
      }, 200)

    }

    const updateSearchValue = useCallback(
      debounce((str) => {
        dispatch(setSearchValue(str));
      }, 350),
      []);

    const renderCities = () => {
      let coincidence =cities?.filter(city =>
        city.name?.toLowerCase().includes(searchValue?.toLowerCase()))
      return coincidence?.length > 0 && <ul className={clsx('input__list', {'open': openCities})}>
        {coincidence?.map((city, i) =>
          <li onClick={() => setCity(city?.name)} key={i}>{city.name}</li>
        )}
      </ul>
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
					onChange={setInputValue}
					autoComplete='off'
					name={name}
					onFocus={() => setFocus(true)}
					onBlur={onInput}
					placeholder={placeholder}
					type={type}
					className={`input ${classes}`}
				/>}
        <label className='input__label' htmlFor={name}>{label}</label>
        {!datePicker && renderCities()}
      </div>
    );
  }
;

export default Input;