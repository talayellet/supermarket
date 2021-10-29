import React, { ReactElement } from "react";
import "./HomePage.css";
import { Header } from "./Header";

export interface HomePageProps {}

export const HomePage = (props: HomePageProps): ReactElement => {
  return (
    <div>
      <Header />
    </div>
  );
};
