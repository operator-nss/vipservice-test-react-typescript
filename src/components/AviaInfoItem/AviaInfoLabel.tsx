import {FC, useState} from 'react'
import {getTime} from "@/helpers/getTime";
import {getDay} from "@/helpers/getDay";
import {dateDifference} from "@/helpers/dateDifference";
import baggage from "@/assets/baggage.svg";
import clsx from "clsx";
import {useAppSelector} from "@/hooks/hooks";
import {FlightType, serverTypes} from "@/pages/AviaInfo/server.types";

interface IAviaInfoLabel {
  serverData: serverTypes
  back?: boolean
}

const AviaInfoLabel: FC<IAviaInfoLabel> = ({serverData, back = false}) => {
  const {from, to, dateFrom, dateTo} = useAppSelector(state => state.avia)
  const [selectedTime, setSelectedTime] = useState(0);

  return (
    <div className={clsx("avia-info__label", {'avia-info__label--back': back})}>
      <div
        className="avia-info__return">{!serverData.return ? 'Невозвратный' : 'Возвратный'}</div>
      <div className="avia-info__company">
        <img src={serverData.companyImage} alt={serverData.company}/>
        <span>{serverData.company}</span>
      </div>
      <div className="description">
        <div className="description__body">
          <div className={clsx("description__main-info", {'description__main-info--reverse':back})}>
            <div className='description__from'>
              <div className="description__time"> {getTime(serverData.flightTimeFrom[selectedTime].from)}</div>
              <div className="description__city">{from}</div>
              <div className="description__date">{getDay(dateFrom)}</div>
            </div>
            <div className="description__row">
              <div className="description__airports">
                <div className="description__airport">{serverData.airportFrom}</div>
                <div className="description__airport">{serverData.airportTo}</div>
              </div>
              <div className="description__line"/>
              <div className="description__flight-time">В
                пути {dateDifference(serverData.flightTimeFrom[selectedTime].from, serverData.flightTimeFrom[selectedTime].to)}</div>
            </div>
            <div className="description__to">
              <div className="description__time">{getTime(serverData.flightTimeFrom[selectedTime].to)}</div>
              <div className="description__city">{to}</div>
              <div className="description__date">{getDay(dateTo)}</div>
            </div>
          </div>

          <div className="avia-info__baggage">
            <img src={baggage} alt="baggage"/>
          </div>
        </div>
        {!dateTo && <div className="description__buttons">
          {serverData.flightTimeFrom.map((time: FlightType, i: number) => (
            <button onClick={() => setSelectedTime(i)}
                    className={clsx('description__button', {active: selectedTime === i})}
                    key={i}>{getTime(time?.from)} - {getTime(time?.to)}</button>
          ))}
				</div>}

      </div>

    </div>
  );
};

export default AviaInfoLabel;