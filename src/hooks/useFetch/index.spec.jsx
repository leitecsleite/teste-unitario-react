import { renderHook, act, debug, waitForNextUpdate } from "@testing-library/react";
//import { waitForNextUpdate } from '@testing-library/react-hooks';
import { useFetch } from ".";

describe('useFetch', () => {
    it('should return data and loading status', async () => {
        const mockData = {message: 'Test Data'}; 
        const mockUrl = 'https://jasonplaceholder.typicode.com/posts'
        const mockOptions = {method: 'GET'}

        global.fetch = jest.fn(() => Promise.resolve({
            json:() => Promise.resolve(mockData)
        })
      ); 

      const { result } = renderHook(() => useFetch(mockUrl,mockOptions)); 


     // expect(result.current[0]).toBeUndefined(); 
     // expect(result.current[1]).toBe(false); 

      act(() => {
       expect(result.current[1]).toBe(true)
      });

      await  waitForNextUpdate(); 

      expect(result.current[0]).toEqual(mockData);
      expect(result.current[1]).toBe(false);


    })
})