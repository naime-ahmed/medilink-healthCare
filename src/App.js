
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import About from './component/About/About';
import SignIn from './component/CreateUser/SignIn/SignIn';
import SignUp from './component/CreateUser/SignUp/SignUp';
import Doctors from './component/Doctors/Doctors';
import Home from './component/Home/Home';
import ServiceDetails from './component/Home/Services/ServiceDetails/ServiceDetails';
import NotExist from './component/NotExist/NotExist';
import Footer from './component/shared/Footer/Footer';
import NavigationBar from './component/shared/NavigationBar/NavigationBar';
import AuthProvider from './Context/AuthProvider';
import MakePrivate from './Hooks/MakePrivate';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavigationBar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>
            <MakePrivate  path="/home/:serviceId">
              <ServiceDetails/>
            </MakePrivate>
            <MakePrivate  path="/doctors">
              <Doctors/>
            </MakePrivate>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/signIn">
              <SignIn/>
            </Route>
            <Route path="/signUp">
              <SignUp/>
            </Route>
            <Route path="*">
              <NotExist/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
        
      </AuthProvider>
      
    </div>
  );
}

export default App;
