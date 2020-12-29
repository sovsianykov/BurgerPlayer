import React,{Component} from "react";
import Layout from "./Components/Layout/Layout";
import Player1 from "./Containers/Player/Player1";
class App  extends Component{
  render() {
    return (
        <Layout>
          <Player1/>
        </Layout>
    )
  }
}

export default App;
