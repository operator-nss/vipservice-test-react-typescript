import './form.scss'
import Input from "../Input/Input";
import {useAppDispatch} from "../../redux/store";
import {setDateFrom, setDateTo, setFrom, setTo} from "../../redux/slices/aviaInfoSlice";
import {useState} from "react";


const Form = () => {

    const dispatch = useAppDispatch();

    const [cityFrom, setCityFrom] = useState('');
    const [cityTo, setCityTo] = useState('');
    const [dateFrom, setStateDateFrom] = useState('');
    const [dateTo, setStateDateTo] = useState('');


    const fromInput = (e: any) => {
        setCityFrom(e)
    }
    const toInput = (e: any) => {
        setCityTo(e)
    }
    const fromDateInput = (e: any) => {
        setStateDateFrom(String(e))

    }
    const toDateInput = (e: any) => {
        setStateDateTo(String(e))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(setFrom(cityFrom))
        dispatch(setTo(cityTo))
        dispatch(setDateFrom(String(dateFrom)))
        dispatch(setDateTo(String(dateTo)))
    }


    return (
        <form onSubmit={handleSubmit} action="" className="form">
            <div className="form__label">
                <Input
                    onChange={fromInput}
                    label='откуда'
                    placeholder='Город вылета'
                    name='from-city'
                />
                <Input
                    onChange={toInput}
                    label='куда'
                    placeholder='Город прилёта'
                    name='from-city'
                />
                <Input
                    onChange={fromDateInput}
                    datePicker label='туда'
                    placeholder='дд.мм.гг'
                    name='from-city'
                />
                <Input
                    onChange={toDateInput}
                    datePicker
                    label='обратно'
                    placeholder='дд.мм.гг'
                    name='from-city'
                />
            </div>
            <div className="form__action">
                <button type='submit' disabled={!cityFrom.length || !cityTo.length || !dateFrom.length}
                        className="button">Найти билеты
                </button>
            </div>
        </form>
    );
};

export default Form;