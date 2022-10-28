import { usePlayerExtend } from "@/utils/usePlayerExtend";
import { useModule } from "@/utils";
import { Player } from "@/core";

enum LifeCycleHook {
  MOUNTED = "mounted",
  UNMOUNTED = "unmounted",
}

type LifeCycleHookFn = (player: Player) => void;

export const Lifecycle = useModule(({ player }) => {
  const hooks = {} as Record<LifeCycleHook, LifeCycleHookFn[]>;

  Object.values(LifeCycleHook).forEach((key: LifeCycleHook) => {
    hooks[key] = [];
  });

  usePlayerExtend({
    _hooks: hooks,
  });
});

export interface Lifecycle {
  readonly _hooks: Record<LifeCycleHook, LifeCycleHookFn[]>;
}
