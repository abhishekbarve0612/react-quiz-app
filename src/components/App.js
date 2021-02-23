
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import MainArea from './main/MainArea';
import Sidebar from './main/Sidebar';
import QuestionNavigator from './quiz/QuestionNavigator';
import Quiz from './quiz/Quiz';
import Registration from './accounts/Registration';
import Signin from './accounts/Signin';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="main-body">
        <Switch>
          <Route exact path="/react-quiz-app/">
            <Sidebar />
            <MainArea quizOn={false} />
          </Route>
          <Route exact path="/react-quiz-app/quiz/:qn">
            <QuestionNavigator />
            <MainArea quizOn={true} />
          </Route>
          <Route exact path="/react-quiz-app/register">
            <Sidebar />
            <Registration />
          </Route>
          <Route exact path="/react-quiz-app/sign-in">
            <Sidebar />
            <Signin />
          </Route>
        </Switch>
        </div>
        <Footer />
    </div>
  
    </Router>
    );
}

export default App;
