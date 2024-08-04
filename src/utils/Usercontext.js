import { createContext } from "react";

const UserContext = createContext({
  loggerUser: "Default User",
});

export default UserContext;