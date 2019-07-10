import React from "react";

import { BottomLevel } from "../home/BottomLevel";
import { TopLevel } from "../home/TopLevel";

interface HomeProps {};

type Props = HomeProps;

export class Home extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopLevel />
        <BottomLevel />
      </div>
    );
  }
}

export default Home;
