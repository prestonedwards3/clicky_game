import React, {Component} from "react";
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import data from './data.json'


//import HelloBootstrap from "./components";

class App extends Component{   
    state={
        data,
        count: 0,
        clicked: []
    }
     
    handleIncrement = () => {
        
        this.setState({ count: this.state.count + 1 });
      };
      
    shuffleHandler = () => {
        console.log(`Card was clicked`);
        for(var j, x, i = this.state.data.length; i; j = parseInt(Math.random() * i), x = this.state.data[--i], this.state.data[i] = this.state.data[j], this.state.data[j] = x);
        console.log(this.state.data)
        console.log(this.state.clicked);
        this.setState({data})
	    return this.state.data;
    }
    render(){
        
        return(
           <div> 
            <Nav />
            <Header />
            <div className="container">
           <div className="row">
           {this.state.data.map((pic, i) =>(
            <Card key={i} img={pic.image} click={this.shuffleHandler} click={this.state.clicked.push(pic.name)}/> ))   }
           </div>
            </div>
            
        </div>
        )
    }
        
    }
  

export default App;
