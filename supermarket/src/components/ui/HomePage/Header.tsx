import React, { ReactElement } from "react";
import "./Header.css";
import { Logo } from "./Logo";

export interface HeaderProps {}
export const Header = (props: HeaderProps): ReactElement => {
  return (
    <div className='header'>
      <Logo />
    </div>
  );
};
