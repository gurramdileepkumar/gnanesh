import React from 'react';
import ReactDOM from 'react-dom';
// import H from './H';
// import Ref from './Hooks/Ref';
// import FormValid from './FormValid';
import './index.css';
import Redux from './Redux';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Yup from './Yup';
// import AxiosApi from './AxiosApi';
// import UseContext from './Hooks/UseContext';
// import Life from './Life';
// import Condition from './Condition';
// import Home from './Home';
// import Header from './Header';
// import Main from './Main';
// import Bottom from './Footer'
// import { Header1, Header2 } from './Header'
// import Styles from './Styles';
// import Props from './Props';
// import Prop from './Components/Prop'
// import Bind from './Bind';
// import Boot from './Boot';
// import Reactstrap from './Reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import UseEffect from './Hooks/UseEffect';
// import UseState from './Hooks/UseState';
// import Nav from './Navigation/Nav';
// import Home from './Navigation/Home';
// import About from './Navigation/About';
// import About1 from './Navigation/About1';
// import ReactNav from './Navigation/ReactNav';
// import Error from './Navigation/Error';

// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import Map from "./map";
import Api from './Api'
// import Form from "./Form";

ReactDOM.render(
  <React.StrictMode>
    {/* <Redux /> */}
    {/* <Ref /> */}
    {/* <Yup /> */}
    {/* <FormValid /> */}
    {/* <H /> */}
    {/* <UseContext /> */}
    {/* <UseEffect /> */}
    {/* <UseState /> */}
    {/* <Form /> */}
    {/* <AxiosApi /> */}
    <Api />
    {/* <Life /> */}
    {/* <Condition /> */}
    {/* <Map /> */}
    {/* <BrowserRouter>
    <div className="container">
    <Nav />
    <ReactNav />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}>
    <Route path="about/about1" element={<About1 />}></Route>
    </Route>
    <Route path="/*" element={<Error />}></Route>
    </Routes>

    </div>
    </BrowserRouter> */}
    {/* <Boot /> */}
    {/* <Reactstrap /> */}
    {/* <Bind /> */}
    {/* <Prop /> */}
      {/* <Props /> */}
      {/* <Styles /> */}
       {/* <Header />
       <Header1 />
       <Header2 />
       <Main />
       <Bottom /> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
