import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return <div>
      this is my component:
      <Helloworld hello="Hello" tittle="tittle"/>
      <Helloworld hello="world" tittle="two"/>
      <Helloworld hello="world"/>
    </div>
  }
}

/*
//ESTE ES EL MISMO CODIGO DE ARRIBA PERO ESCRITO DE OTRA FORMA
const App = () => <div>this is my component <Helloworld/> <Helloworld/> <Helloworld/></div>
*/

/*
//ESTE ES EL MISMO CODIGO DE ARRIBA PERO ESCRITO DE OTRA FORMA
function App() {
  return (
    <div>
      this is my component: 
      <Helloworld/>
      <Helloworld/>
      <Helloworld/>
    </div>
  );
}
*/

class Helloworld extends React.Component {

  state = {
    show: true
  }

  togleShow = () => {
    this.setState({ show: !this.state.show });
  }

  render(){
    if(this.state.show){
      return (
        <div id="helloworld">
          <h3>
            {this.props.tittle}
          </h3>      
          {this.props.hello}
          <button onClick={()=> this.togleShow()}>Togle show</button>
        </div>
      );
    }else{
      return (
        <div>
          <h1>No hay Elementos.</h1>
          <button onClick={()=> this.togleShow()}>Togle show</button>
        </div>
      );
    }
  }
}

/*
//ESTE ES EL MISMO CODIGO QUE ESTA ESCRITO ARRIBA PERO DE OTRA FORMA.
function Helloworld(props) {
  console.log(props);
  return (
    <div id="helloworld">
      <h3>
        {props.tittle}
      </h3>      
      {props.hello}
    </div>
  );
}
*/

export default App;
