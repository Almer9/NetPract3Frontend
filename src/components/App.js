import '../style/App.module.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Predict from "./Predict";
import History from "./History";
import classes from "../style/App.module.css";

function App() {
  return (
      <div className={classes.wrapper}>
          <Header/>
          <Routes>
              <Route path='/' element={<Main/>} />
              <Route path='/predict' element={<Predict/>} />
              <Route path='/history' element={<History/>} />
          </Routes>
      </div>
  );
}

export default App;
