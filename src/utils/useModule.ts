import { PlayerModule, PlayerModuleContext, PlayerModuleFunc } from "@/types";
import { Player } from "@/core";

export function useModule(callback: (context: PlayerModuleContext) => void): PlayerModule {
  let disposeHandler: () => void;

  const onModuleDispose = (handler: () => void) => {
    disposeHandler = handler;
  };

  const moduleFunc: PlayerModuleFunc = (player: Player) => {
    callback({ player, onModuleDispose });
    return player;
  };

  const dispose = () => {
    disposeHandler && disposeHandler();
  };

  return { moduleFunc, dispose };
}
