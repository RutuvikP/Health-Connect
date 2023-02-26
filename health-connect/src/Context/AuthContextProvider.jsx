import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = useState(false)

    // const login=()=>{
    //     setIsAuth(true)
    // }

    // const logout=()=>{
    //     setIsAuth(false)
    // }

    return(
        <AuthContext.Provider value={{isAuth,setIsAuth}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;