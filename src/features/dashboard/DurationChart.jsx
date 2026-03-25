import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { useLanguage } from "../../context/LanguageContext";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startDataLight = [
  { key: "oneNight", value: 0, color: "#ef4444" },
  { key: "twoNights", value: 0, color: "#f97316" },
  { key: "threeNights", value: 0, color: "#eab308" },
  { key: "fourFiveNights", value: 0, color: "#84cc16" },
  { key: "sixSevenNights", value: 0, color: "#22c55e" },
  { key: "eightFourteenNights", value: 0, color: "#14b8a6" },
  { key: "fifteenTwentyOneNights", value: 0, color: "#3b82f6" },
  { key: "twentyOnePlusNights", value: 0, color: "#a855f7" },
];

const startDataDark = [
  { key: "oneNight", value: 0, color: "#b91c1c" },
  { key: "twoNights", value: 0, color: "#c2410c" },
  { key: "threeNights", value: 0, color: "#a16207" },
  { key: "fourFiveNights", value: 0, color: "#4d7c0f" },
  { key: "sixSevenNights", value: 0, color: "#15803d" },
  { key: "eightFourteenNights", value: 0, color: "#0f766e" },
  { key: "fifteenTwentyOneNights", value: 0, color: "#1d4ed8" },
  { key: "twentyOnePlusNights", value: 0, color: "#7e22ce" },
];

function getDurationKey(numNights) {
  if (numNights === 1) return "oneNight";
  if (numNights === 2) return "twoNights";
  if (numNights === 3) return "threeNights";
  if ([4, 5].includes(numNights)) return "fourFiveNights";
  if ([6, 7].includes(numNights)) return "sixSevenNights";
  if (numNights >= 8 && numNights <= 14) return "eightFourteenNights";
  if (numNights >= 15 && numNights <= 21) return "fifteenTwentyOneNights";
  if (numNights >= 21) return "twentyOnePlusNights";

  return null;
}

function prepareData(startData, stays, t) {
  return stays
    .reduce((arr, cur) => {
      const durationKey = getDurationKey(cur.numNights);
      if (!durationKey) return arr;

      return arr.map((item) =>
        item.key === durationKey ? { ...item, value: item.value + 1 } : item
      );
    }, startData)
    .filter((item) => item.value > 0)
    .map((item) => ({
      ...item,
      duration: t(`dashboardPage.${item.key}`),
    }));
}

function DurationChart({ confirmedStays }) {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const data = prepareData(isDarkMode ? startDataDark : startDataLight, confirmedStays, t);

  return (
    <ChartBox>
      <Heading as="h2">{t("dashboardPage.durationTitle")}</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.key} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="middle" align="right" width="30%" layout="vertical" iconSize={15} iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
