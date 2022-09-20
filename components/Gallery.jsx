import { useNFTDrop, useNFTs, ThirdwebNftMedia } from '@thirdweb-dev/react';

export default function NFTGalleryComponent() {
  const contract = useNFTDrop('0x24c5258769d49951fb2Fffb0c1948B9A53db12D6');

  const { data: nfts, isLoading } = useNFTs(contract);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {nfts.map((nft, id) => (
            <>
              <ThirdwebNftMedia
                width='150px'
                height='150px'
                key={id}
                metadata={nft.metadata}
              />
              <h3>{nft.metadata.name}</h3>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
