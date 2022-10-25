import { ARRIVALCOLORS } from 'helpers/enums/colors';
import { AdminDataPropsType } from 'helpers/types/admin-data';
import { FC } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import styles from 'styles/components/Admin.module.scss'

type StatisticChartGuestTypes = {
  data: AdminDataPropsType[]
}

const StatisticChartGuest: FC<StatisticChartGuestTypes> = ({
  data
}) => {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className={styles.statistikChartContainer}>
      <div className={styles.statistikChart}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={ARRIVALCOLORS[entry?.name?.replace(/\s/g, '')?.toUpperCase()]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.statistikChartDesc}>
        {data.map(
          (_: any, key: number) => (
            <h3 key={key}>
              <span style={{
                backgroundColor: ARRIVALCOLORS[_?.name?.replace(/\s/g, '')?.toUpperCase()]
              }} />
              <span>{_?.name}</span>
              <span>{_?.value}</span>
            </h3>
          ))}
      </div>
    </div>
  )
}

export default StatisticChartGuest;
