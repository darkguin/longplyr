import { Dispose } from "@/types/dispose";
import { Player } from "@/core";

export type PlayerModuleFunc = (player: Player) => Player;

export interface PlayerModule extends Dispose {
  moduleFunc: PlayerModuleFunc;
}

export interface PlayerModuleContext {
  player: Player;

  onModuleDispose(handler: () => void): void;
}
