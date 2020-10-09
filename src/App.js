import React from "react";
import { compose } from 'recompose';


class App extends React.Component 
{
    constructor(props) {
      super();
      this.state = { color: 0, image: 0, clock: new Date() }
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
      this.setState({clock: new Date})
    }

    changeColor = () => {
      if (0 === this.state.color) {
        this.setState({color: 1});
      }
      else {
        this.setState({color: 0});
      }
    }

    changeImage = (e) => {
      e.stopPropagation();
      if (0 === this.state.image) {
        this.setState({image: 1});
      }
      else {
        this.setState({image: 0});
      }
    }

    render() {
      return (
        <FullSquare 
          clock={this.state.clock}
          changeColor={this.changeColor}
          changeImage={this.changeImage}
          color={this.state.color}
          image={this.state.image}
          // imagesList={["racoon.jpg", "cat.jpg"]}
        />
      )
    }
}


class Square extends React.Component 
{
    constructor(props) {
      super();
      this.state = {imagesList: ["racoon.jpg", "cat.jpg"]}
    }

    changeImageList = (e) => {
      e.stopPropagation();
      if("racoon.jpg" == this.state.imagesList[0]) {
        this.setState({imagesList: ['dog.jpg', 'rabbit.png']})
      }
      else {
        this.setState({imagesList: ["racoon.jpg", "cat.jpg"]})
      }
    }

  render() {
    return (
  <div>
    <h1 className={this.props.color} onClick={this.props.changeColor}>
      <img src={this.state.imagesList[this.props.image]} alt="picture" onClick={this.props.changeImage} />
      <span>Clock: {this.props.clock.toLocaleTimeString()}</span>
      <button onClick={this.changeImageList}>Change Photos</button>
    </h1>
  </div>
    )
  }
}


const withColor = (Component) => (props) => {
  const colorList = ["blue", "green"];
  return <Component {...props} color={colorList[props.color]} />
}

const withImage = (Component) => (props) => {
  return <Component {...props} src={props.imagesList[props.image]} />
}

// const Square1 = withColor(Square);
// const Square2 = withImage(Square1);

const withAll = compose (
  withColor,
  
);

const FullSquare = withAll(Square);




export default App;
