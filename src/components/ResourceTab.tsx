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
              <span>{this.props.resources.value(resource)}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
