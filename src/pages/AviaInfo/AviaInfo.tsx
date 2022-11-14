import {FC} from 'react';

import './avia-info.scss'
import s7 from '@/assets/s7.svg'

import AviaInfoItem from "@/components/AviaInfoItem/AviaInfoItem";
import {useNavigate} from "react-router-dom";
import {FlightType, serverTypes} from "@/pages/AviaInfo/server.types";
import {useAppDispatch} from "@/hooks/hooks";
import {clearDates} from "../../redux/slices/aviaInfoSlice";

const serverData:serverTypes = {
  company: 'S7 Airlines',
  companyImage: s7,
  return: false,
  price: 8300,
  airportFrom: 'SVO',
  airportTo: 'ROV',
  flightTimeFrom: [
    {from: '2022-12-12T06:20:00.000Z', to: '2022-12-12T07:05:00.000Z'},
    {from: '2022-12-12T07:20:00.000Z', to: '2022-12-12T09:05:00.000Z'},
    {from: '2022-12-12T09:20:00.000Z', to: '2022-12-12T10:05:00.000Z'},
  ] as FlightType[],
  //Раскомментировать чтобы отобразился обратный рейс
  // flightTimeBack: [
  //   {from: '2022-12-13T06:20:00.000Z', to: '2022-12-13T07:05:00.000Z'},
  //   {from: '2022-12-13T07:20:00.000Z', to: '2022-12-13T09:05:00.000Z'},
  //   {from: '2022-12-13T09:20:00.000Z', to: '2022-12-13T10:05:00.000Z'},
  // ],
}



const AviaInfo: FC = () => {

  const dispatch = useAppDispatch();

  const navigate = useNavigate()

  const resetDates = async () => {
    await dispatch(clearDates())
    navigate('/avia')

  }

  return (
    <div className='avia-info'>
      <AviaInfoItem serverData={serverData}/>

      <button onClick={resetDates} className='avia-info__button button'>Вернуться назад</button>
    </div>
  );
};

export default AviaInfo;