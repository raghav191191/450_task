import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import HeaderComponent from '../src/Component/HeaderComponent/HeaderComponent'
import TopicsListComponent from '../src/Component/TopicsListComponent/TopicsListComponent'
import TopicDetail from '../src/Component/TopicsListComponent/TopicDetail'
function App() {
  return (
    <div className="App">
       <Router>
        <HeaderComponent/>
          <Switch>
          <Route path="/:topicSlug" component ={TopicDetail} />
            
            <Route path="/">
                <TopicsListComponent/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
