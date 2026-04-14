import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import TodayActivity from "../check-in-out/TodayActivity";
// import LazyComponent from "../../ui/LazyComponent";
import ErrorBoundary from "../../ui/ErrorBoundary";
// import Uploader from "../../data/Uploader";
const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

const ChartPlaceholder = styled.div`
  min-height: 32rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const StatSkeleton = styled.div`
  min-height: 9.6rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background: linear-gradient(90deg, var(--color-grey-0) 25%, var(--color-grey-100) 50%, var(--color-grey-0) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }
`;

function StatsSkeleton() {
  return (
    <>
      <StatSkeleton />
      <StatSkeleton />
      <StatSkeleton />
      <StatSkeleton />
    </>
  );
}

// const SalesChart = (props) => (
//   <LazyComponent importComponent={() => import("./SalesChart")} Loading={() => <ChartPlaceholder />} {...props} />
// );

// const DurationChart = (props) => (
//   <LazyComponent importComponent={() => import("./DurationChart")} Loading={() => <ChartPlaceholder />} {...props} />
// );
function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();
  const isLoadingStats = isLoading1 || isLoading2 || isLoading3;
  const isLoadingDurationChart = isLoading2;
  const isLoadingSalesChart = isLoading1 || isLoading2;

  return (
    <ErrorBoundary>
      <StyledDashboardLayout>
        {/* <Uploader /> */}
        {isLoadingStats ? (
          <StatsSkeleton />
        ) : (
          <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length} />
        )}
        <TodayActivity />
        {isLoadingDurationChart ? <ChartPlaceholder /> : <DurationChart confirmedStays={confirmedStays} />}
        {isLoadingSalesChart ? (
          <ChartPlaceholder />
        ) : (
          <ErrorBoundary>
            <SalesChart bookings={bookings} numDays={numDays} />
          </ErrorBoundary>
        )}
      </StyledDashboardLayout>
    </ErrorBoundary>
  );
}

export default DashboardLayout;
