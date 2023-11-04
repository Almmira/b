import { useState, useEffect } from "react";
import "../Styles/Memos.css";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
      //console.log(memos)
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <div
      className="container-fluid"
      style={{
        textAlign: "center",
        padding: "2em 10em",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginTop: "5px",
          marginBottom: 30,
          fontFamily: "'Poppins', sans-serif",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Messages
      </h3>
      <table
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <tbody style={{}}>
          {memos.map((memo) => {
            return (
              <tr>
                <td
                  style={{
                    backgroundColor: "#c9def4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "100px",
                    color: "gray",
                  }}
                >
                  {memo.name}
                </td>
                <td
                  style={{
                    backgroundColor: "#c9def4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "800px",
                    color: "gray",
                  }}
                >
                  {new Date(memo.timestamp * 1000).toLocaleString()}
                </td>
                <td
                  style={{
                    backgroundColor: "#c9def4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "300px",
                    color: "rgb(221, 80, 48)",
                  }}
                >
                  {memo.message}
                </td>
                <td
                  className="container-fluid"
                  style={{
                    backgroundColor: "#c9def4",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "400px",
                    color: "gray",
                  }}
                >
                  {memo.from}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Memos;
