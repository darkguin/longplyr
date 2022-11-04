import { Player } from "@/core";

export type HookFn = (player: Player) => void;

export class HookStore<T> {
  private readonly _hooks: Set<HookFn> = new Set<HookFn>();
  private readonly _player: Player;

  constructor(player: Player) {
    this._player = player;
  }

  get hooks() {
    return this._hooks;
  }

  dispatch(fn: HookFn) {
    this._hooks.add(fn);
  }

  clear() {
    this._hooks.clear();
  }
}
