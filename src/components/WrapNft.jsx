import React from "react";
import './../App.css';
import ButtonMain from "./ButtonMain";

const WrapNft = () => {
    return(
        <>
            <div className="wrap-nft">
                <img src="https://raw.githubusercontent.com/agonzalezTitaMedia/collection04/main/0.png" alt="" />
                <h3>Nombre del nft</h3>
                <ButtonMain text="Mint NFT" />
            </div>
        </>
    )
}

export default WrapNft;