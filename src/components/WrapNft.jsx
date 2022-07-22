import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "../app/Provider";
import { ethers } from "ethers";
import './../App.css';
import contract from "./../contracts/abi.json";
const contractAddress = "0x25f37057CDc1538DAD98799ec680682336640e58";
const abi = contract.abi;

const mintNftHandler = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Initialize payment");
        // let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther("0.01") });
        let initAddres = "0x7F9691fAa9D935b5B55e3ac4E3399161e7ab37F6";
        let nftTxn = await nftContract.mintNFT(initAddres, { value: ethers.utils.parseEther("0.01") });
        console.log("Mining... please wait");
        await nftTxn.wait();
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  }

 

const WrapNft = () => {

  const [state, setState] = useContext(AppContext);

  const [numero, setNumero] = useState('0');

   // funcion para llamaer la variable  token_count
   const callCount = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contractCall = new ethers.Contract(contractAddress, abi, signer);
    const cantidadNft = await contractCall.token_count();
    return cantidadNft.toString();
  }

  callCount().then( (result) => { 
    setNumero(result)
  }).catch(error => console.log>(error))
  

  
    return(
        <>

        {state ? 

          <div className="wrap-nft">
          <img src={'https://raw.githubusercontent.com/agonzalezTitaMedia/collection04/main/' + numero +'.png'} alt="esta es la imagen de siguiente nft para mintiar" />
          
          <h3>Numero del nft {numero}</h3>
          <p className="text-center">Adquiere este NFT por tan solo 0.01 eth</p>
          <button onClick={mintNftHandler} className="mainButton">Mint NFT</button>
          </div> : 

          <></>
        
      }
            
        </>
    )
}

export default WrapNft;