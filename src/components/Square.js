import React from 'react';
import { compose } from 'recompose';
import { withImage } from './SquareHocs'
export class Square extends React.Component 
{
    constructor(props) {
      super();
      this.state = {imagesList: ["racoon.jpg", "cat.jpg"], imageState: 0}
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

    changeImage = (e) => {
        e.stopPropagation();
        if (0 === this.state.imageState) {
          this.setState({imageState: 1});
        }
        else {
          this.setState({imageState: 0});
        }
      }

  render() {
    return (
    <ImageSquare
    changeImage={this.changeImage}
    changeColor={this.props.changeColor}
    changeImageList={this.changeImageList}
    clock={this.props.clock}

    imageState={this.state.imageState}
    
    src={this.props.src}
    color={this.props.color}
    
    imagesList={this.state.imagesList}
    />
    )
  }
}


export const ImageBox = props =>
<div>
<h1 className={props.color} onClick={props.changeColor}>

  <img src={props.src} alt="picture" onClick={props.changeImage} />
  
  <span>Clock: {props.clock.toLocaleTimeString()}</span>
  <button onClick={props.changeImageList}>Change Photos</button>
</h1>
</div>

const withSquareImage = compose (
    withImage
);
  
const ImageSquare = withSquareImage(ImageBox);