import { useState } from 'react';

import { useContext, useEffect } from "react";
import { AppContext } from "../app/Provider";

import './../App.css';



const ConectWallet = () =>{
    // const [currentAccount, setCurrentAccount] = useState(null);
    const [state,setState] = useContext(AppContext);

    const connectWalletHandler =  async () => { 
        const { ethereum } = window;
    
        if(!ethereum){
          alert('por favor instalar metamaks');
        }
        try{
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          console.log('encontramos una cuenta! Address:', accounts[0]);
          // setCurrentAccount(accounts[0]);
          setState(accounts[0])
        

        } catch (err){
          console.log(err)
        }
    
      }

      useEffect(()=>{
        connectWalletHandler();
      }, [])


   return(
    <>
      { state ? <></> : <button onClick={connectWalletHandler} className="mainButton">Conect Wallet</button>}
        
      
    </>
   )
}

export default ConectWallet;