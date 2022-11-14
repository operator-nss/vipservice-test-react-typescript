import './form.scss'
import Input from "../Input/Input";


const Form = () => {

    return (
        <form action="" className="form">
            <div className="form__label">
                <Input label='откуда' placeholder='Город вылета' name='from-city' />
                <Input label='куда' placeholder='Город прилёта' name='from-city' />
                <Input datePicker label='туда' placeholder='дд.мм.гг' name='from-city' />
                <Input datePicker label='обратно' placeholder='дд.мм.гг' name='from-city' />
            </div>
        </form>
    );
};

export default Form;