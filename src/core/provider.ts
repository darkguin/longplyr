import Player from "@/core/player";
import { Source, SourceType } from "@/types";
import { Dispose } from "@/types/dispose";

export abstract class MediaProvider implements Dispose {
  protected player_: Player;
  protected abstract currentSource_?: Source;
  protected abstract sources_?: Source[];

  protected $mediaEl: HTMLMediaElement;

  protected constructor(player: Player) {
    this.player_ = player;
    this.$mediaEl = player.$el;
  }

  abstract setSources(source: Source[]): void;

  abstract isSupport(): boolean;

  abstract canPlayType(type: SourceType): boolean;

  abstract dispose(): void;
}
