import { Route, Switch } from "react-router";

import './App.css';
import HomePage from "./pages/Home";
import DirectorsPage from "./pages/Directors";
import StoriesPage from "./pages/Stories";
import ContactsPage from "./pages/Contacts";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/directors'>
            <DirectorsPage/>
          </Route>
          <Route path='/stories'>
            <StoriesPage/>
          </Route>
          <Route path='/contacts'>
            <ContactsPage/>
          </Route>
        </Switch>
      </Layout>
    );
}

export default App;
