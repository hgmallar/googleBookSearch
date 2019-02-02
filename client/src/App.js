import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import "./App.css";

const io = require('socket.io-client');
const socket = io();

class App extends React.Component {
  state = {
    show: false,
    title: ""
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleOpen = () => {
    this.setState({ show: true });
  }

  send = (title) => {
    socket.emit('book saved', title);
  }

  render() {
    socket.on('book saved', (title) => {
      this.setState({ title: title });
      this.handleOpen();
    })

    return (
      <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Search {...props} show={this.state.show} title={this.state.title} saveBook={this.send} handleClose={this.handleClose} />} />
            <Route exact path="/saved" render={(props) => <Saved {...props} show={this.state.show} title={this.state.title} saveBook={this.send} handleClose={this.handleClose} />} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );
  }
}

export default App;
