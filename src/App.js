import './App.css';
/*import FixedPosition from './components/AppBar/AppBar';*/
import React from "react";
/*import MainContent from './Pages/Contact/contact';*/
import FixedContainer from './Pages/Contact/ContactHeader';

/*
import App2 from './Pages/Contact/ContactHeader';
import Footer from "./components/Footer";
*/


function App() {
  return (
    <React.Fragment>
      {/*<App2/>*/}
    <FixedContainer/>{/*
    <MainContent/>*/}
      {/*<FixedPosition/>*/}
     {/* <Footer />*/}
    </React.Fragment>
  );
}

export default App;
