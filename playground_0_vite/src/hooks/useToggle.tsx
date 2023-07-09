import { useState } from "react";

type ToggleHook = {
  status: boolean;
  toggleStatus: () => void;
};

export const useToggle = (): ToggleHook => {
  const [status, setStatus] = useState<boolean>(false);

  const toggleStatus = () => {
    setStatus((prevStatus: boolean) => !prevStatus);
  };

  return {
    status,
    toggleStatus,
  };
};
