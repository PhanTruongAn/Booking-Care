// import logo from "./logo.svg";
// import "./App.css";
import Login from "./containers/Auth/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Login />
      <ToastContainer />
    </div>
  );
}

export default App;
