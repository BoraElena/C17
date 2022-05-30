import logo from './logo.svg';
import './App.css';
// import React, {Component} from './Component';

class App extends Component {
  state={
    Done : false
  };
  onChange = e => {
    this.setState ({ Done : e.target.checked});
  }
  render() {
    const {Done} = this.state;
    return (
      <form>
      <h1>You did this? :{Done ? "Yes" : "No"}  </h1>
      <label>
        Are you done? 
        <input type ="checkboX"
        checked={Done}
        onChange={this.onChange}/>

      </label>
      </form>

    )
  }
}

export default App;
