import React from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import AppLayout from "../../templates/AppLayout/AppLayout";

import Footer from "../../molecules/Footer/Footer";
import Header from "../../molecules/Header/Header";
import Pages from "../../molecules/Pages/Pages";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AppLayout header={<Header />} main={<Pages />} footer={<Footer />} />
    </ErrorBoundary>
  );
}
