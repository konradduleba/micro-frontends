import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const Bimbows = React.lazy(() => import("@dulcon/bimbows-3-1/App"));

export const BimbowsLoader = () => {
  return (
    <React.Suspense fallback="loading">
      <ErrorBoundary fallback={<h2>Failed to load bimbows 3.1</h2>}>
        <Bimbows />
      </ErrorBoundary>
    </React.Suspense>
  );
};
