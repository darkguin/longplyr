import { PlayerModuleFunc } from "@/core/models";
import { Player } from "@/core";

export function useModule(callback: (player: Player) => void) {
  return function (player: Player) {
    callback(player);
    return player;
  } as PlayerModuleFunc;
}
