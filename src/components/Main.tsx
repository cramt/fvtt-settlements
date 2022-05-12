import * as React from "react";
import { Resources, ResourceType } from "../resources";
import { ResourceLogo } from "./ResourceLogo";
import { ResourceTab } from "./ResourceTab";

export class Main extends React.Component<{}, { resources: Resources }> {
  constructor(props: {}) {
    super(props);
    this.state = { resources: new Resources({ wood: 10 }) };
  }
  render() {
    return (
      <div>
        <ResourceTab resources={this.state.resources} />
        <button
          onClick={(event) => {
            let x = this.state.resources.add(new Resources({ wood: 10 }));
            this.setState({resources: x});
          }}
        >
          new day
        </button>
      </div>
    );
  }
}
