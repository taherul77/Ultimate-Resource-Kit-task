import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";


function App() {
  return (
    <>
      
     <div className="flex">
    <div className="sm:hidden md:block">
    <Nav></Nav>
    </div>
      <Outlet></Outlet>
     </div>
    </>
  );
}

export default App;
