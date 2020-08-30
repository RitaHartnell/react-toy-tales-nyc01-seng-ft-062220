import React from 'react';
import ToyCard from './ToyCard'
//import toyData from '../data';

const ToyContainer = (props) => {
  
  let toyArr = props.toys.map(toyObj => <ToyCard likes={props.likes} key = {toyObj.id} toy={toyObj}/>)

  return(
    <div id="toy-collection">
      {toyArr}
    </div>
  );
}

export default ToyContainer;
