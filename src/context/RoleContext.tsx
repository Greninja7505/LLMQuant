import { createContext, useContext, useState } from "react";

type Role = "hr" | "dev" | "finance" | "default";

const RoleContext = createContext<{
  role: Role;
  setRole: (role: Role) => void;
}>({
  role: "default",
  setRole: () => {},
});

export const RoleProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<Role>("dev"); // 👈 hardcode role here for now
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);