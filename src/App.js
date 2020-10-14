import React from 'react';
import { compose } from 'recompose';
import { Square } from './components/Square'
import { withColor, withImage } from './components/SquareHocs'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = { 
      colorState: 0, 
      clock: new Date() 
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.doTick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  doTick = () => {
    this.setState({clock: new Date()})
  }

  changeColor = () => {
    if (0 === this.state.colorState) {
      this.setState({colorState: 1});
    } else {
      this.setState({colorState: 0});
    }
  }

  render() {
    return (
      <ColorSquare 
        clock={this.state.clock}
        changeColor={this.changeColor}
        colorState={this.state.colorState}
      />
    )
  }
}

const withSquareColor = compose(
  withColor,
  // withImage
);

const ColorSquare = withSquareColor(Square);

export default App;
