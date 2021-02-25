
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import MainArea from './main/MainArea';
import Sidebar from './main/Sidebar';
import QuestionNavigator from './quiz/QuestionNavigator';
import Quiz from './quiz/Quiz';
import Registration from './accounts/Registration';
import Signin from './accounts/Signin';
import store from '../redux/store';
import ScoreCard from './quiz/ScoreCard';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
      <Navbar />
      <div className="main-body">
        <Switch>
          <Route exact path="/react-quiz-app/">
            <MainArea quizOn={false} />
          </Route>
          <Route exact path="/react-quiz-app/quiz/:qid/:qn">
            <MainArea quizOn={true} />
          </Route>
          <Route exact path="/react-quiz-app/quiz/result">
            <ScoreCard />
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
    </Provider>
    );
}

export default App;
