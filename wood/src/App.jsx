import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from './Pages/MainPage'
// import { Posters } from "./Pages/Posters";



  function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route index element={<MainPage />}>
            {/* <Route path="/about" element={<PLAKATER/>}/>
            <Route path="/contact" element={<ABOUT/>}/>
            <Route path="/employees" element={<CONTACT/>}/>
            <Route path="*" element={<LOGIN/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;