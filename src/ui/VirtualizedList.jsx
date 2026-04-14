import styled from "styled-components";
import { List } from "react-window";

const ListShell = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  overflow: hidden;
`;

function VirtualizedList({
  className,
  height = 640,
  rowCount,
  rowHeight,
  rowComponent,
  rowProps,
  header,
  overscanCount = 8,
}) {
  return (
    <ListShell className={className}>
      {header}
      <List
        rowCount={rowCount}
        rowHeight={rowHeight}
        rowComponent={rowComponent}
        rowProps={rowProps}
        overscanCount={overscanCount}
        style={{ height, width: "100%" }}
      />
    </ListShell>
  );
}

export default VirtualizedList;
