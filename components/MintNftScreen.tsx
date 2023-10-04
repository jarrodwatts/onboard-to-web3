import React from "react";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import Image from "next/image";
import { useToast } from "./ui/use-toast";
import Link from "next/link";

const nftContractAddress = "0x3f5056815763d8fEC4DE5499C8176016EEf6A7c9";

export default function MintNftScreen() {
  const { toast } = useToast();

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="scroll-m-20 border-b mb-6 pb-2 text-xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Claim Your Free Digital Collectible
      </h2>
      <div className="w-full flex flex-col items-center md:flex-row md:items-start gap-8">
        <Image
          src="/eth.png"
          alt="Ethereum AI art"
          width={300}
          height={300}
          className="rounded-lg"
        />

        <div className="flex flex-col  h-full gap-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            All Roads Lead to Ethereum
          </h3>

          <p className="text-sm text-muted-foreground mb-4 md:mb-12">
            This is a non-fungible token (NFT) on the Polygon Mumbai test
            network. You can trade, sell or buy this & other NFTs from the
            wallet you are connected to below.
          </p>

          <ConnectWallet />

          <Web3Button
            contractAddress={nftContractAddress}
            action={(contract) => contract.erc1155.claim(0, 1)}
            onSuccess={() =>
              toast({
                title: "Successfully claimed NFT!",
                description: (
                  <Link
                    href={`https://testnets.opensea.io/assets/mumbai/${nftContractAddress}/0`}
                    className="font-bold underline"
                    target="_blank"
                  >
                    View on OpenSea
                  </Link>
                ),
              })
            }
            onError={() => {
              toast({
                title: "Error",
                description: "Something went wrong. Please try again later!",
                variant: "destructive",
              });
            }}
          >
            Claim NFT
          </Web3Button>
        </div>
      </div>
    </div>
  );
}
