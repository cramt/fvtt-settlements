import * as React from "react";
import { ResourceType } from "../resources";
import { ResourceLogo } from "./ResourceLogo";


export class Main extends React.Component {
  render() {
    return (
      <div>
        <ResourceLogo resource={ResourceType.food} />
      </div>
    );
  }
}
