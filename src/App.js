
import './App.css';
import  Provider  from './app/Provider';
import WrapNft from './components/WrapNft';
import ConectWallet from './components/ConectWallet';
import ShowState from './components/ShowState';

function App() {
  return (
    <Provider>
      <div className='mainWrap'>
        <h1 className='title'>NFT Marketplace</h1>
        <ConectWallet />
        <WrapNft />
        
      </div>
    </Provider>

  );
}

export default App;
