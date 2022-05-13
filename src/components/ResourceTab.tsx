import * as React from "react";
import { RESOURCES, Resources } from "../resources";
import { ResourceLogo } from "./ResourceLogo";

export interface ResourceTabProps {
  resources: Resources;
}

export class ResourceTab extends React.Component<ResourceTabProps> {
  constructor(props: ResourceTabProps) {
    super(props);
  }

  render() {
    return (
      <div>
        {Array.from(RESOURCES.values()).map((resource) => {
          return (
            <div>
              <ResourceLogo resource={resource} />
              <div>{this.props.resources.value(resource)}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
