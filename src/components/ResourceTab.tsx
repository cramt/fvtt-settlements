import * as React from "react";
import { RESOURCES, Resources } from "../resources";
import { ResourceLogo } from "./ResourceLogo";
import styles from "./resource_tab.css";

export interface ResourceTabProps {
  resources: Resources;
}

export class ResourceTab extends React.Component<ResourceTabProps> {
  constructor(props: ResourceTabProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.outerContainer}>
        {Array.from(RESOURCES.values()).map((resource, i) => {
          return (
            <div key={i} className={styles.innerContainer}>
              <ResourceLogo resource={resource} />
              <div className={styles.resourceText}>
                {this.props.resources.value(resource)}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
