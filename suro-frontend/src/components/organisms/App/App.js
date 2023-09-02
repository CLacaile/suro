import React from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import AppLayout from "../../templates/AppLayout/AppLayout";
import HomeScreen from "../HomeScreen/HomeScreen";
import QuestionList from "../../molecules/QuestionList/QuestionList";
import Footer from "../../molecules/Footer/Footer";

export default function App() {

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppLayout
          header={<></>}
          main={
            <>
              <HomeScreen />
              <QuestionList />
            </>
          }
          footer={<Footer />}
        />
      </ErrorBoundary>
    </div>
  );
}
