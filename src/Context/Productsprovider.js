import React from 'react'
import { useEffect } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
const PRODUCT_CONTEXT=createContext()

const Productsprovider = ({children}) => {
    const [services,setServices]=useState([])
    useEffect(() => {
  
        fetch('/Serviec.json')
          .then(res => res.json())
          .then(data => setServices(data))
      }, [])
        
      const value={
          services,
          setServices
  
      }
  
      return(
        <PRODUCT_CONTEXT.Provider value={value}>
              {children}
        </PRODUCT_CONTEXT.Provider>
      )
}

export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
  };



export default Productsprovider




  
  
    






