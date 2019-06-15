import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesList} />
            <Route path="/article" component={ArticlePage} />
          </div>
          <footer >
      <div class="collapse bg-dark" id="navbarFooter">
      <div class="container">
        <div class="row">        
          <div class="col-sm-8 col-md-7 py-4">
          </div>        
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container d-flex justify-content-between">
          <h6 class="lead text-muted">Abrar Zahin</h6>
      </div>
    </div>
</footer>
        </div>
      </Router>
    );
  }
}

export default App;
