import React from 'react';

export const withColor = (Component) => (props) => {
    const colorList = ["blue", "green"];
    return <Component {...props} color={colorList[props.colorState]} />
  }
  
export const withImage = (Component) => (props) => {
    return <Component {...props} src={props.imagesList[props.imageState]} />
  }