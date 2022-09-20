import { useNFTDrop, useAddress, useClaimNFT } from '@thirdweb-dev/react';

export default function ClaimButtonComponent() {
  const contract = useNFTDrop('0x24c5258769d49951fb2Fffb0c1948B9A53db12D6');
  const connectedAddress = useAddress();

  const { mutate: claim, isLoading } = useClaimNFT(contract);

  return (
    <button
      disabled={isLoading}
      onClick={() => claim({ to: connectedAddress, quantity: 1 })}
    >
      Claim NFT
    </button>
  );
}
