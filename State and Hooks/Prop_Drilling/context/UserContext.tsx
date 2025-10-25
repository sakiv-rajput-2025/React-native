import {
  createContext,
  Dispatch,
  useState,
  SetStateAction,
  ReactNode,
} from "react";

interface UserContextType {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("John Doe");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
