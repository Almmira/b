import { useState, useEffect } from "react";
import abi from "../contractJson/chai.json";
import Memos from "../Components/Memos";
import { ethers } from "ethers";
import Buy from "../Components/Buy";
import ins from "../Assets/ins.png";
// import chai from "./chai.png";
import "../Styles/Blockchain.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Blockchain() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddres = "0x9D369b1b1f6056513fDA89Fa68626a7882684074";
      const contractABI = abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum); //read the Blockchain
        const signer = provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddres,
          contractABI,
          signer
        );
        console.log(contract);
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);
  return (
    <div>
      <Navbar />
      <img src={ins} className="img-fluid" alt=".." width="100%" />
      <p
        style={{
          marginTop: "20px",
          marginBottom: 30,
          marginLeft: "5px",
          textAlign: "center",
          color: "#dd5030",
        }}
      >
        <small>Connected Account - {account}</small>
      </p>
      <Buy state={state} />
      <Memos state={state} />
      <Footer />
    </div>
  );
}

export default Blockchain;
