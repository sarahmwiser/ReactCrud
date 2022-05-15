import React, {Component} from "react";
import { CatList } from "./Components/CatList";
import { NewCatForm } from "./Components/NewCatForm";




class App extends Component {
  render(){
    return(
      <div>
        <NewCatForm/>
        <CatList/>
      </div>
    )
  }
} export default App



