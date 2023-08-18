import { useState } from "react"

type UserProps = {
    name: string; 
    permissions: string[]; 
    isAdmin: boolean; 
    token: string; 
}

export const useAuth = () => { 
    const [user, setUser] = useState<UserProps | null >(null); 
   // const [isAuthenticated, setIsAuthenticated] = useState(false)
   
    const isAuthenticated = !!user; 

    const login = ({login, password}) => {
        //try .. catch
        //axios.post('/...', {login,password})

        const response = {
            name:'Lucas',
            permissions: ['all'],
            isAdmin: true,
            token: 'token'
        }

        setUser( response )
    }; 

    const logout = () =>{
        setUser(null)
    }

    return{ user,isAuthenticated, login, logout}
}