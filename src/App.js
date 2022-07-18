import './App.css';
import WrapNft from './components/WrapNft';
import ConectWallet from './components/ConectWallet';

function App() {
  return (
    <div className='mainWrap'>
      <h1 className='title'>NFT Marketplace</h1>
      {/* <ConectWallet /> */}
      <WrapNft />
    </div>
  );
}

export default App;
