import React from "react";
import { compose } from 'recompose';


class App extends React.Component 
{
    constructor(props) {
      super();
      this.state = { color: 0, image: 0}
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
          changeColor={this.changeColor}
          changeImage={this.changeImage}
          color={this.state.color}
          image={this.state.image}
          imagesList={["racoon.jpg", "cat.jpg"]}
        />
      )
    }
}

const Square = (props) => 
<div>
  <h1 className={props.color} onClick={props.changeColor}>
    <img src={props.src} alt="picture" onClick={props.changeImage} />
  </h1>
</div>

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
  withImage
);

const FullSquare = withAll(Square);



export default App;
