import React , { Component} from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isShow: true
    }
  }

  toggle = () => {
    this.setState(state => ({isShow: !state.isShow}))
  }

  render() {
    const animal = 'Briedis';
    return (
      <div> 
        <Animal rodyti={this.state.isShow} title={{name:"Zoo Sodas", town:"Kaune"}} animal1={animal} />

        <Car rodyti={this.state.isShow} title={"Volvo"} />

        <Button title={"rodyti"} parodyti={this.toggle} />
      </div>
    );
  }
}

const Button = ({ parodyti, title }) => (
  <button onClick={parodyti} type="button">
  {title}
  </button>
);

const Animal = ({ title, animal1, rodyti }) => 
  rodyti ? <h1>{title.name}{title.town}{animal1}</h1> : null;


const Car = ({ title, rodyti }) => 
  rodyti ? null : <h1>{title}</h1>;


export default App;
