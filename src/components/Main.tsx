import * as React from "react";
import { LABOUR_IMG, METAL_IMG, SAND_IMG, STONE_IMG, WOOD_IMG } from "./constants";
export class Main extends React.Component {
  render() {
    return (
      <div>
        <img src={STONE_IMG} />
        <img src={WOOD_IMG} />
        <img src={SAND_IMG} />
        <img src={METAL_IMG} />
        <img src={LABOUR_IMG} />
      </div>
    );
  }
}
