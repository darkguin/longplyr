import { usePlayerExtend } from "@/utils/usePlayerExtend";
import { useModule } from "@/utils";
import { HookFn, HookStore } from "@/modules/lifecycle/hook-store";
import { Player } from "@/core";

enum LifeCycleHook {
  CREATED = "created",
  BEFORE_DISPOSED = "beforeDisposed",
}

const createLifecycleHook = (name: LifeCycleHook) => {
  return (player: Player, hook: HookFn) => {
    player._hooks[name].dispatch(hook);
  };
};

export const Lifecycle = useModule(({ player }) => {
  const hooks = {} as Record<LifeCycleHook, HookStore<LifeCycleHook>>;

  Object.values(LifeCycleHook).forEach((key: LifeCycleHook) => {
    hooks[key] = new HookStore<typeof key>(player);
  });

  usePlayerExtend({
    _hooks: hooks,
  });
});

export interface Lifecycle {
  readonly _hooks: Record<LifeCycleHook, HookStore<LifeCycleHook>>;
}

export const onCreated = createLifecycleHook(LifeCycleHook.CREATED);
export const onBeforeDisposed = createLifecycleHook(LifeCycleHook.BEFORE_DISPOSED);
