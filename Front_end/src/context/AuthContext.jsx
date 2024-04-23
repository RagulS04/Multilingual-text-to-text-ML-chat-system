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

    const languages = [
        { value: 'english', label: 'English' },
        { value: 'tamil', label: 'தமிழ் (Tamil)' }, // Tamil in Unicode
        { value: 'hindi', label: 'हिंदी (Hindi)' },  // Hindi in Unicode
      ];

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0].value); // Initial language

    return <AuthContext.Provider value={{authuser,setAuthuser,inputs,setInputs,languages,selectedLanguage,setSelectedLanguage}} >
       {children}
    </AuthContext.Provider>
}