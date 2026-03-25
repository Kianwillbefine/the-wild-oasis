import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { useLanguage } from "../context/LanguageContext";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  const { t } = useLanguage();

  return (
    <StyledConfirmDelete>
      <Heading as="h3">{t("ui.deleteTitle", { resource: resourceName })}</Heading>
      <p>{t("ui.deleteDescription", { resource: resourceName })}</p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          {t("common.cancel")}
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          {t("cabins.delete")}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
