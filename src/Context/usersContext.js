import React, {useState} from 'react';

const usersContextType = {
    users: [],
    setUser: () => {}
}

export const usersContext = React.createContext(usersContextType.user);

export function UsersContextProvider({children}){

  const [users, setUser] = useState([])

  const value = {users, setUser}

  return <usersContext.Provider value={value}>{children}</usersContext.Provider>
}

export default function useUsersContext(){
    return React.useContext(usersContext)
}