import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import toyData from './data'


class App extends React.Component{

  state = {
    display: false,
    data: toyData
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  likeHander = (toyObj) => {
    let updateArr = [...this.state.data]
    //console.log("array before: ", updateArr)
    let index = toyObj.id - 1
    toyObj.likes = toyObj.likes + 1
    //console.log('likes: ', toyObj.likes)
    updateArr[index] = toyObj
    //console.log('array after: ', updateArr)
    this.setState({data: updateArr})
  }

  submitHandler = (e, newToy) => {
    const newObj = {
      name: newToy.name,
      image: newToy.image,
      id: this.state.data.length+1,
      likes: 0
    }
    e.preventDefault()
    this.setState(prevState => {
      const obj = [...prevState.data, newObj]
      return {data: obj}
    }, this.handleClick())
  }


  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submit = {this.submitHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer likes={this.likeHander} toys={this.state.data}/>
      </>
    );
  }

}

export default App;
