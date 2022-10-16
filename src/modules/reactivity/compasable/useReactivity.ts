import { Ref, toRef } from "vue";

// @TODO: May be change to:
// return "function" === typeof reactive.value[key]
//   ? (reactive.value[key] as (...arg: any[]) => void)
//   : (toRef(reactive.value, key) as Ref<T>);

export function useReactivity<T>(player: Ref, key: string) {
  const reactive = toRef(player.value, "reactive");
  return toRef(reactive.value, key) as Ref<T>;
}
