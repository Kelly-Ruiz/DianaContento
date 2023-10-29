import { createContext, useContext, useState } from "react";

const loginContext = createContext();

export function useLoginContext(){
    return useContext(loginContext);
}

export function Providers({children}){
    const [openLogin, setOpenLogin] = useState(false);

    return (
        <loginContext.Provider value={{openLogin, setOpenLogin}}>
            {children}
        </loginContext.Provider>
    )
}