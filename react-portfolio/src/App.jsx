import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <img
        className="w-full h-screen object-cover"
        src="/images/forest.jpeg"
      />
      <Outlet />
    </div>
  );
}

export default App;
