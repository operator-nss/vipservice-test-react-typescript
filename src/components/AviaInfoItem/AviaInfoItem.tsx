import {FC} from "react";
import AviaInfoLabel from "@/components/AviaInfoItem/AviaInfoLabel";
import {useAppSelector} from "@/hooks/hooks";
import {serverTypes} from "@/pages/AviaInfo/server.types";

interface IAviaInfoItem {
  serverData: serverTypes
}

const AviaInfoItem: FC<IAviaInfoItem> = ({serverData}) => {
  const {dateTo} = useAppSelector(state => state.avia)
  return (
    <div className="avia-info__item">
      <div className="avia-info__body">
        <AviaInfoLabel serverData={serverData}/>
        {dateTo && <AviaInfoLabel back serverData={serverData}/>}
      </div>


      <div className="avia-info__price">{serverData.price + 'р'}</div>
    </div>
  );
};

export default AviaInfoItem;