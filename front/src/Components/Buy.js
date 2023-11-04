import { ethers } from "ethers";
import "../Styles/Buy.css";
import "../Styles/text.css";

const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    //const amount = document.querySelector("#amount").value;
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    alert("Transaction is successul");
    window.location.reload();
  };
  return (
    <div
      className="form-content"
      style={{
        padding: "1em 10em 2em",
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        background: "linear-gradient(to right, #ECF2FF, #FBFCFF)",
      }}
    >
      <h1
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Write something inspiring:
      </h1>
      <form onSubmit={buyChai}>
        <div
          className="inputbox"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Name</span>
          <input
            type="text"
            required="required"
            id="name"
            style={{
              width: "100%",
              margin: "8px 0",
              padding: "0 12px",
              display: "block",
              height: "40px",
              color: "black",
              border: "1px solid transparent",
              borderRadius: "6px",
              backgroundColor: "#c9def4",
              outline: "transparent",
              fontFamily: "'Rubik', sans-serif",
              fontSize: "18px",
              letterSpacing: ".7px",
            }}
          />
        </div>
        <div className="inputbox">
          {" "}
          <span>Message</span>
          <input
            type="text"
            required="required"
            id="message"
            style={{
              width: "100%",
              margin: "8px 0",
              padding: "0 12px",
              display: "block",
              height: "40px",
              color: "black",
              border: "1px solid transparent",
              borderRadius: "6px",
              backgroundColor: "#c9def4",
              outline: "transparent",
              fontFamily: "'Rubik', sans-serif",
              fontSize: "18px",
              letterSpacing: ".7px",
            }}
          />
        </div>
        <div className="inputbox" style={{ marginTop: 30 }}>
          <input
            type="submit"
            value="Pay"
            disabled={!state.contract}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#dd5030",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "18px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "lighter",
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default Buy;
