import * as React from "react";
import { Building } from "../building";

export interface BuildingTabProbs {
  buildings: Building[];
}

export class BuildingTag extends React.Component<BuildingTabProbs> {
  constructor(probs: BuildingTabProbs) {
    super(probs);
  }

  render() {
    
    return <div></div>;
  }
}
