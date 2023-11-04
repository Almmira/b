import React from "react";
import "../Styles/Quiz.css";
import uvedomlenie from "./uvedomlenie";

function Not() {
  return (
    <div className="not-enough-funds-page" style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: 100, marginBottom: 20 }}>Not Enough Funds</h1>
      <p>
        Sorry, you do not have enough funds in your wallet to complete this
        transaction.
      </p>
      <p style={{ marginBottom: 30 }}>
        Please add more funds to your wallet or use a different payment method.
      </p>
      <button
        style={{ marginBottom: 40 }}
        onClick={() => {
          window.location.href = "https://www.alchemy.com/faucets";
        }}
      >
        Add Funds
      </button>

      <p style={{ marginBottom: 200 }}>
        If you believe this is an error, please contact our support team.
      </p>
    </div>
  );
}

export default Not;
