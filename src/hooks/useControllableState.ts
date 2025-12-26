import { useState } from "react";

type ArgumentType = {
  open?: boolean;
  defaultOpen?: boolean;
  onChange?: (V: boolean) => void;
};

export default function useControllableState({
  open,
  defaultOpen,
  onChange,
}: ArgumentType) {
  const [internal, setInternal] = useState(defaultOpen ?? false);

  const isControlled = open !== undefined;

  const state = isControlled ? open : internal;

  const setState = (next: boolean) => {
    if (!isControlled) {
      setInternal(next);
    }

    onChange?.(next);
  };

  return [state, setState] as const;
}
