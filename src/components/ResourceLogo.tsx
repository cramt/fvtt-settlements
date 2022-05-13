import * as React from "react";
import { ResourceType } from "../resources";
import { RESOURCE_LOGOS } from "./constants";
import styles from "./resource_logo.css";

export interface ResourceLogoProps {
  resource: ResourceType;
}

export class ResourceLogo extends React.Component<ResourceLogoProps> {
  constructor(props: ResourceLogoProps) {
    super(props);
  }

  render() {
    const logoSrc = RESOURCE_LOGOS[this.props.resource];
    return (
      <img
        title={this.props.resource}
        alt={this.props.resource}
        className={styles.resourceLogo}
        src={logoSrc}
      />
    );
  }
}
