import React, { Suspense, lazy } from "react";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

const LazyComponent = ({
  importComponent,
  Loading = () => <Spinner />,
  Error = ({ error }) => toast.error(error?.message ?? "Failed to load component"),
  ...props
}) => {
  try {
    const LazyComp = lazy(importComponent);
    return (
      <Suspense fallback={<Loading />}>
        <LazyComp {...props} />
      </Suspense>
    );
  } catch (error) {
    return <Error error={error} />;
  }
};

export default LazyComponent;
