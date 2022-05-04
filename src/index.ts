import { Main } from "./components/Main";
import { ReactApplication } from "./react_application";

interface CreateCommandOptions {
  commandKey?: string;
  invokeOnCommand?: Function;
  shouldDisplayToChat?: boolean;
  createdMessageType?: number;
  iconClass?: string;
  description?: string;
  gmOnly?: boolean;
}

interface ChatCommand {
  registerCommand: (data: ChatCommandData) => void;
  createCommandFromData: (options: CreateCommandOptions) => ChatCommandData;
}

interface ChatCommandData { }


Hooks.on("chatCommandsReady", (chatCommands: ChatCommand) => {
  chatCommands.registerCommand(
    chatCommands.createCommandFromData({
      commandKey: "/settlement",
      invokeOnCommand: (
        _chatLog: unknown,
        _messageText: unknown,
        _chatData: unknown
      ) => {
        const dialog = new ReactApplication({
          title: "settlement",
          buttons: {},
          default_button: "",
          component: Main,
          width: 1000,
          height: 800,
        })
        dialog.render(true)
      },
    })
  );
});
