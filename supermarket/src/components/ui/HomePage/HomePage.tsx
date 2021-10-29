import React, { ReactElement } from "react";
import "./HomePage.css";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Content } from "./Content/Content";

export interface HomePageProps {}

export const HomePage = (props: HomePageProps): ReactElement => {
  return (
    <div>
      <Header />
      <div className='home-page'>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};
