import { usePlayerExtend } from "@/utils/usePlayerExtend";
import { useModule } from "@/utils";
import { HookFn, HookStore } from "@/modules/lifecycle/hook-store";
import { Player } from "@/core";

export enum LifecycleHook {
  CREATED = "created",
  BEFORE_DISPOSED = "beforeDisposed",
}

const createLifecycleHook = (name: LifecycleHook) => {
  return (player: Player, hook: HookFn) => {
    player._hooks[name].dispatch(hook);
  };
};

export const Lifecycle = useModule(({ player }) => {
  const hooks = {} as Record<LifecycleHook, HookStore<LifecycleHook>>;

  Object.values(LifecycleHook).forEach((key: LifecycleHook) => {
    hooks[key] = new HookStore<typeof key>(player);
  });

  usePlayerExtend({
    _hooks: hooks,
    _triggerHook: (name: LifecycleHook) => {
      hooks[name].hooks.forEach((hook) => {
        hook(player);
      });
    },
  });
});

export interface Lifecycle {
  readonly _hooks: Record<LifecycleHook, HookStore<LifecycleHook>>;

  _triggerHook(name: LifecycleHook): void;
}

export const onCreated = createLifecycleHook(LifecycleHook.CREATED);
export const onBeforeDisposed = createLifecycleHook(LifecycleHook.BEFORE_DISPOSED);
