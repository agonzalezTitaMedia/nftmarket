import { useState } from 'react';
import './../App.css';



const ConectWallet = () =>{
    const [currentAccount, setCurrentAccount] = useState(null);

    const connectWalletHandler =  async () => { 
        const { ethereum } = window;
    
        if(!ethereum){
          alert('por favor instalar metamaks');
        }
        try{
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          console.log('encontramos una cuenta! Address:', accounts[0]);
          setCurrentAccount(accounts[0]);
        } catch (err){
          console.log(err)
        }
    
      }

   return(
    <>
        <button onClick={connectWalletHandler} className="mainButton">Conect Wallet</button>
        <p>{currentAccount}</p>
    </>
   )
}

export default ConectWallet;