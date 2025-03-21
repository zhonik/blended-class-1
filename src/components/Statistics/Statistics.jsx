import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp key="1" size={30} color="purple" />,
  <MdPeople key="2" size={30} color="purple" />,
  <MdOutlineProductionQuantityLimits key="3" size={30} color="purple" />,
  <GiTreeDoor key="4" size={30} color="purple" />,
];

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map(({ title, id, total }, index) => (
          <li key={id} className={style.item}>
            <StatisticsItem title={title} total={total} icon={icons[index]} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
