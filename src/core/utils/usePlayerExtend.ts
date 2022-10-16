import Player from "../core";

export function usePlayerExtend(prototypes: { [key: string]: any }) {
  Object.keys(prototypes).forEach((protoMethod: string) => {
    (Player.prototype as any)[protoMethod] = prototypes[protoMethod];
  });
}
