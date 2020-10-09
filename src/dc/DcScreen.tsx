import React, { FunctionComponent } from "react";
import HeroList from "../heroes/HeroList";

const DcScreen: FunctionComponent = (): JSX.Element => {
  return (
    <div>
      <h1>DC DcScreen</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};

export default DcScreen;
