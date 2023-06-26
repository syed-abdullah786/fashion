import {
  Route,
  Switch,
  BrowserRouter,
  useHistory,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Allproducts from "./components/all_products";
import Navbar from "./components/navbar";
import Detail from "./components/detail";
function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Allproducts />
          </Route>
          <Route exact path="/:title">
            <Detail />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
