import { ConnectWallet } from '@thirdweb-dev/react';
import NFTGalleryComponent from '../components/Gallery';
import ClaimButtonComponent from '../components/ClaimButton';

export default function Home() {
  return (
    <div>
      <ConnectWallet accentColor='#f213a4' colorMode='light' />
      <NFTGalleryComponent />
      <ClaimButtonComponent />
    </div>
  );
}
