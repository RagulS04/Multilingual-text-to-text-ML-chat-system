const { createContext, useState, useContext } = require("react");


export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children})=>{
    const [authuser,setAuthuser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    const [inputs,setInputs] = useState({
        fullname:'',
        mobile:'',
        password:'',
        confirmPassword:'',
        gender:'',
        email:''
    });

    return <AuthContext.Provider value={{authuser,setAuthuser,inputs,setInputs}} >
       {children}
    </AuthContext.Provider>
}