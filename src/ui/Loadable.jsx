import ErrorBoundary from "./ErrorBoundary";

function Loadable({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}

export default Loadable;
