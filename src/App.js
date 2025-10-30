import React from "react"
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";

 const App=()=>{

    return(
        <div className="flex">
            <Sidebar/>
            <Main/>
        </div>
    )
 }

 export default App;