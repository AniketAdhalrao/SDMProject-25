import logo from './logo.svg';
import './App.css';
import HelloClassComp from './Component/ass1ClassComp.js';
import FunComp from './Component/ass1FunComp';
import FunImage from './Component/ass3FunImage';
import TimeDate from './Component/ass4Time';
import Factorial from './Component/ass1PropsFact';
import ArrayNameProps from './Component/ass2PropsArray'
import EmpDetails from './Component/ass3PropsEmpDetails';
import DisplayMsg from './Component/ass1StateWelcomeHello';
import DisplayCount from './Component/ass2StateCount';
import MyMSg from './Component/ass1InlineExternal';
import './Component/mystyle.css'
import UsingBootstrap from './Component/ass2Bootstrap';
import ParaChange from './Component/ass2ParagraphState';
import ShowHideImage from './Component/ass4ImageHideShow';
import LoginForm from './Component/ass1HandlingForm';
import RegForm from './Component/ass2RegForm';
import RESTApiUrl from './Component/ass1RestAPI';
import { Link, Route, Routes } from 'react-router-dom';
import RestDummyAPI from './Component/ass2DummyAPI';
import FormReducer from './Component/ass1HandlingFormReduce';
import EmpInsert from './Component/ass3InsertEmpAPI';
import UpdateEmp from './Component/ass4updateEmp';
import StyledMsg from './Component/examQuestion3';
import StudentForm_004 from './Component/Test';
function App() {
  return (
    <div className="App">
       {/*<header className="App-header">
  
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
  </a>
  <HelloClassComp/>
  <FunComp/>

  <TimeDate/>
  <Factorial number="7"/>
    <ArrayNameProps names={["Aniket","Tushar","Vishwajit"]}/>

  <EmpDetails/>
  <EmpDetails id="4" name="Aniket" sal="$50000" dept="Development"/>
    <DisplayCount/>
  <DisplayMsg/>
  <UsingBootstrap/>
  <ParaChange/>
  <ShowHideImage/>
  <LoginForm/>
  <RegForm/>
  <RESTApiUrl/>
  </header>
<RestDummyAPI/>
 
<FormReducer/>
 <RegForm/>
 <EmpInsert/>
 <Link to="/hello">Hello</Link><br/>
 <Link to="/image">Image</Link><br/>
 <Link to="/insertIMP">insertEmp</Link>
 <Routes>
  <Route path='/hello' element={<HelloClassComp/>}></Route>
  <Route path='/image' element={<FunImage/>}></Route>
  <Route path='/insertImp' element={<EmpInsert/>}></Route>
 </Routes>
  <UpdateEmp/>
<FunImage/>
<TimeDate/>
<StyledMsg/>
<StudentForm_0004/>
<StudentForm_004/>*/}
<HelloClassComp/>
    </div>
  ) 
 
}

export default App;
