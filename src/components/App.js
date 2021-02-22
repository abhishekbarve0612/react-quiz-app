
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import MainArea from './main/MainArea';
import Sidebar from './main/Sidebar';
import QuestionNavigator from './quiz/QuestionNavigator';
import Quiz from './quiz/Quiz';

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
          <Route exact path="/react-quiz-app/quiz">
            <QuestionNavigator />
            <MainArea quizOn={true} />
          </Route>
        </Switch>
        </div>
        <Footer />
    </div>
  
    </Router>
    );
}

export default App;
