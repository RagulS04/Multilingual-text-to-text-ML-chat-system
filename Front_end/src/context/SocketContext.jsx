import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "../context/AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {

    const [socket,setSocket] = useState(null)
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authuser} = useAuthContext();

    useEffect(()=>{
        if(authuser){

            console.log(authuser)
            const socket = io("http://localhost:5000",{
                query: {userId: authuser.data._id}
            })
            console.log(authuser.data._id)
            
            setSocket(socket);

            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })
            console.log(onlineUsers)
            return ()=> socket.close();
        }else{
            if(socket){
                socket.close()
                setSocket(null);
            }
        }
    },[authuser])


    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
    )
}