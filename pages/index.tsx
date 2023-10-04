import { useAddress } from "@thirdweb-dev/react";
import { NextPage } from "next";
import ConnectWalletScreen from "../components/ConnectWalletScreen";
import MintNftScreen from "../components/MintNftScreen";

const Home: NextPage = () => {
  const address = useAddress();

  return (
    <main
      className="min-h-screen min-w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center flex-col pb-12"
      style={{
        backgroundImage: `
            radial-gradient(circle farthest-side at -15% 85%, rgba(90, 122, 255, .36), rgba(0, 0, 0, 0) 42%),
            radial-gradient(circle farthest-side at 100% 30%, rgba(245, 40, 145, 0.25), rgba(0, 0, 0, 0) 60%)
          `,
      }}
    >
      <div className="px-2">
        <h1 className="mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Web3 Onboarding Template 💅
        </h1>
        <p className="text-xl text-muted-foreground mt-6 text-center mb-8">
          A demo flow for onboarding both new and existing users onto a web3
          app.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-xl shadow-xl h-auto max-w-3xl w-11/12 backdrop-blur-xl backdrop-filter bg-white bg-opacity-5 px-8 py-8">
        {!address ? <ConnectWalletScreen /> : <MintNftScreen />}
      </div>
    </main>
  );
};

export default Home;
