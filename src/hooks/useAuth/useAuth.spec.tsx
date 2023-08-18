import { act, renderHook } from "@testing-library/react";
import {useAuth} from './useAuth'; 

describe('useAuth', () => {
    it('should returns default values', () =>{
        const { result } = renderHook(()=> useAuth());
        
        expect(result.current.user).toBe(null)
        expect(result.current.isAuthenticated).toBe(false)
        expect(typeof result.current.login).toBe('function'); 
        expect(typeof result.current.logout).toBe('function'); 
    });

    it('should isAuthenticated to be true and user contains complete infos when login was called correctly', () =>{
        const { result } = renderHook(() => useAuth()); 

        act(() => {
            result.current.login({login:'email@email.com', password: 'password'
          })
        }); 

        expect(result.current.user).toMatchObject({
            name:'Lucas',
            permissions: ['all'],
            isAdmin: true,
            token: 'token'
        }); 

        expect(result.current.isAuthenticated).toBe(true); 

    });
})


