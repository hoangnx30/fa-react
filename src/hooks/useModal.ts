import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return { isOpen, handleClose, handleOpen };
}

export default useModal;
