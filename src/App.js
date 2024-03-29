import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import Landing from './pages/Landing/Landing'
import FAQ from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

import Calculator from './pages/Calculator/Calculator'
import ViewResultSingle from './pages/View-Result/ViewResultSingle'
import ViewList from './pages/View-Result/ViewList'
import ViewResultMulti from './pages/View-Result/ViewResultMulti'
import UpdateInfo from './pages/UpdateProfile/UpdateInfo'
import UpdatePassword from './pages/UpdateProfile/UpdatePassword';
import DeleteAcc from './pages/UpdateProfile/DeleteAcc';

function App() {
  const [isOpen, setIsOpen] = useState(false) //closed drop down state
  const [logInState, setLogInState] = useState("flex")
  const [logOutState, setLogOutState] = useState("none")
  const [selectedYears, setSelectedYears] = useState([])
  const toggle = () => { //switch sidebar drop down states
      setIsOpen(!isOpen)
  }
  // making auth signin and signup button green
  const theme = {
    name: 'button-theme',
    tokens: {
      colors: {
        
        border: {
          // this will affect the default button's border color
          primary: { value: 'black' },
        },
      },
      components: {
        button: {
          // this will affect the font weight of all button variants
          fontWeight: { value: '{fontWeights.extrabold}' },
          // style the primary variation
          // primary: {
          //   backgroundColor: { value: '#01BF71' },
          //   _hover: {
          //     backgroundColor: { value: '#01BF71' },
          //   },
          //   _focus: {
          //     backgroundColor: { value: '#01BF71' },
          //   },
          //   _active: {
          //     backgroundColor: { value: '#01BF71' },
          //   },
          // },
        },
        
      },
    },
  };

  // signup attributes specified as required or optional
  const formFields = {
    signUp: {
      email: {
        order: 1,
        isRequired: true
      },
      given_name: {
        order: 2,
        isRequired: true
      },
      family_name: {
        order: 3,
        isRequired: true
      },
      password: {
        order: 5,
        isRequired: true
      },
      confirm_password: {
        order: 6,
        isRequired: true
      }
    },
  }
  return (
    <>
    <Router>
      <SideBar isOpen={isOpen} toggle={toggle} logInState={logInState} setLogInState={setLogInState} logOutState={logOutState} setLogOutState={setLogOutState}/>
      <Navbar toggle={toggle} logInState={logInState} setLogInState={setLogInState} logOutState={logOutState} setLogOutState={setLogOutState}/>
      <Routes>

          <Route exact path='/calculator' element={<Calculator setLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields}/>} />
          <Route exact path='/' element={<Landing setLogInState={setLogInState} setLogOutState={setLogOutState}/>} />
          <Route exact path='/faq' element={<FAQ setLogInState={setLogInState} setLogOutState={setLogOutState}/>} />
          <Route exact path='/contact' element={<Contact setLogInState={setLogInState} setLogOutState={setLogOutState}/>} />
          <Route exact path='/about' element={<About setLogInState={setLogInState} setLogOutState={setLogOutState}/>} />
          <Route exact path='/home' element={<Home setLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields}/>} />
          <Route exact path='/profile' element={<Profile setLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields}/>} />
          <Route exact path='/profile/update/info' element={<UpdateInfo setLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields}/>} />
          <Route exact path='/profile/update/password' element={<UpdatePassword setLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields}/>} />
          <Route exact path='/profile/delete' element={<DeleteAcc setLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields}/>} />
          <Route exact path='/ViewResultSingle' element={<ViewResultSingle selectedYears={selectedYears} setLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields} />} />
          <Route exact path='/ViewList' element={<ViewList  setSelectedYears={setSelectedYears} setLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields} />} />
          <Route exact path='/ViewResultMulti' element={<ViewResultMulti selectedYears={selectedYears} setsetLogInState={setLogInState} setLogOutState={setLogOutState} theme={theme} formFields={formFields} />} />

      </Routes>
      <Footer />
    </Router>
    </>
  );
};

export default App;
