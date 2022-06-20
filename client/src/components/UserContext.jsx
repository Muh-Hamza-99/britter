import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({ loggedIn: false });

const Context = ({ children }) => {
    const [user, setUser] = useState(() => ({ loggedIn: false }));
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/account`, { credentials: "include" })
            .then(response => response.json())
            .then(data => setUser({ ...data }));
    }, []);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
};

export default Context;