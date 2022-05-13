import * as React from "react";
import { Blueprint } from "../blueprint";
import { Building } from "../building";

export interface BuildingLogoProbs {
  building: Blueprint<Building>;
}

export class BuildingTag extends React.Component<BuildingLogoProbs> {
  constructor(probs: BuildingLogoProbs) {
    super(probs);
  }

  render() {
    return (
      <img
        title={this.props.building.type}
        alt={this.props.building.type}
        src={this.props.building.icon}
      />
    );
  }
}
