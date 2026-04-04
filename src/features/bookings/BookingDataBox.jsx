import styled from "styled-components";
import { isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

import {
  formatCurrency,
  formatDateTime,
  formatDateWithWeekday,
  formatDistanceFromNow,
} from "../../utils/helpers";
import { useLanguage } from "../../context/LanguageContext";

const StyledBookingDataBox = styled.section`
  /* 盒子容器 */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

// 纯展示组件
function BookingDataBox({ booking }) {
  const { t } = useLanguage();
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {t("bookings.nightsInCabin", { nights: numNights, cabin: cabinName })}
          </p>
        </div>

        <p>
          {formatDateWithWeekday(startDate)} (
          {isToday(new Date(startDate))
            ? t("common.today")
            : formatDistanceFromNow(startDate)}
          ) &mdash; {formatDateWithWeekday(endDate)}
        </p>
      </Header>

      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? t("bookings.guestCount", { count: numGuests - 1 }) : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>{t("bookings.nationalId", { id: nationalID })}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label={t("bookings.observations")}
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label={t("bookings.breakfastIncluded")}>
          {hasBreakfast ? t("bookings.yes") : t("bookings.no")}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={t("bookings.totalPrice")}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` ${t("bookings.totalWithBreakfast", {
                cabinPrice: formatCurrency(cabinPrice),
                breakfastPrice: formatCurrency(extrasPrice),
              })}`}
          </DataItem>

          <p>{isPaid ? t("bookings.paid") : t("bookings.willPayAtProperty")}</p>
        </Price>
      </Section>

      <Footer>
        <p>
          {t("bookings.bookedOn", {
            date: formatDateTime(created_at),
          })}
        </p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
