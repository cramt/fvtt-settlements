import * as React from "react";
import { createRoot } from "react-dom/client";
export interface ReactApplicationOptions {
  title: string;
  buttons: Record<string, Dialog.Button>;
  default_button: string;
  component: typeof React.Component;
  height?: number;
  width?: number;
}

export class ReactApplication extends Application {
  uuid: string;
  component: typeof React.Component;
  constructor(options: ReactApplicationOptions) {
    const uuid = crypto.randomUUID();
    super({
      title: options.title,
      width: options.width || 200,
      height: options.height || 200,
      template: "modules/fvtt-settlements/templates/empty.html",
      resizable: true
    });
    this.uuid = uuid;
    this.component = options.component;
  }
  protected _render(
    force?: boolean,
    options?: Application.RenderOptions<ApplicationOptions>
  ): Promise<void> {
    return super._render(force, options).then(() => {
      const Component = this.component;
      createRoot(
        this.element[0].getElementsByClassName("inner-react-app")[0]
      ).render(<Component />);
    });
  }
}
