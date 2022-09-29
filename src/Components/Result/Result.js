import "./Result.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../man.jpg";

const Result = ({ show, sum, timeClick }) => {
  // console.log(sum);
  const diffToast = () => {
    toast("Wow so easy!");
  };
  return (
    <div>
      <div className="result">
        <div className="man_name">
          <img className="man" src={logo} alt="" />
          <div>
          <h3>Hasin Kamal</h3>
          <p>Mirpur,Bangladesh</p>
          </div>
        </div>
<div>
  
</div>
        <h1>result</h1>
        <h3>Add A Break</h3>
        <div className="second">
          <span onClick={() => timeClick("10s")}>10s</span>
          <span onClick={() => timeClick("20s")}>20s</span>
          <span onClick={() => timeClick("30s")}>30s</span>
          <span onClick={() => timeClick("40s")}>40s</span>
          <span onClick={() => timeClick("50s")}>50s</span>
        </div>
        <div className="details">
          <h3>Exercise Details</h3>
          <b>
            Exercise time <span>{sum}</span>
          </b>
          <br /> <br />
          <b>
            Break time <span>{show}</span>
          </b>
        </div>
        <div>
          <button onClick={diffToast}>
            <p>Activity Completed</p>
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Result;
