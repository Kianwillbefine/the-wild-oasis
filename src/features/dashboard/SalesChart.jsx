import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useStore } from "../../stores/index";
import { useMemo } from "react";
import { eachDayOfInterval, subDays } from "date-fns";
import { formatChartDate, formatDate } from "../../utils/helpers";
const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* 用一个小技巧修改网格线颜色 */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, numDays }) {
  const isDarkMode = useStore((state) => state.isDarkMode);

  const { allDates, data } = useMemo(() => {
    const dates = eachDayOfInterval({
      start: subDays(new Date(), numDays - 1),
      end: new Date(),
    });

    const salesByDay = bookings.reduce((map, booking) => {
      const day = formatChartDate(booking.created_at);
      const current = map.get(day) ?? { totalSales: 0, extrasSales: 0 };

      map.set(day, {
        totalSales: current.totalSales + booking.totalPrice,
        extrasSales: current.extrasSales + booking.extrasPrice,
      });

      return map;
    }, new Map());

    return {
      allDates: dates,
      data: dates.map((date) => {
        const label = formatChartDate(date);
        const sales = salesByDay.get(label) ?? { totalSales: 0, extrasSales: 0 };

        return {
          label,
          totalSales: sales.totalSales,
          extrasSales: sales.extrasSales,
        };
      }),
    };
  }, [bookings, numDays]);

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };
  return (
    <StyledSalesChart>
      <Heading as="h2">{`${formatDate(allDates.at(0))} 至 ${formatDate(allDates.at(-1))} 的销售额`}</Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis dataKey="label" tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
          <YAxis unit="¥" tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="总销售额"
            unit="¥"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="附加销售额"
            unit="¥"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
