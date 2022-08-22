import { createContext, useState } from "react";

export const ModalMenuContext = createContext();

const ModalMenuProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalMenuContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalMenuContext.Provider>
  );
};

export default ModalMenuProvider;
