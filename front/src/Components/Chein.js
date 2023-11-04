import React, { useState, useEffect } from "react";
import Web3 from "web3";

function MyDApp() {
  const [web3, setWeb3] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setConnectedAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const logout = () => {
    setConnectedAccount(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        marginBottom: 50,
        marginTop: 50,
      }}
    >
      <h1 style={{ textAlign: "center" }}>Share your document</h1>
      <button
        className="text-appointment-btn"
        style={{ color: "#ffff", marginBottom: 10, marginTop: 10 }}
        type="button"
        onClick={() => {
          window.location.href = "https://metamask.io/"; // Замените на нужный URL
        }}
      >
        What do I need to connect?
      </button>
      <button onClick={connectWallet}>Connect</button>
      {connectedAccount && (
        <p style={{ color: "#dd5030" }}>Ваш аккаунт: {connectedAccount} </p>
      )}

      {connectedAccount ? <button onClick={logout}>Logout</button> : null}

      <h3 style={{ marginTop: 10, marginBottom: 10 }}>
        Upload Content to IPFS
      </h3>

      <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
      <button>Upload</button>
    </div>
  );
}

export default MyDApp;
