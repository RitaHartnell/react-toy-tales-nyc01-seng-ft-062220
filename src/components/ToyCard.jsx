import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name /* Toy's Name */}</h2>
        <img src={this.props.toy.image /* Toy's Image */} alt={this.props.toy.name /* Toy's Name */} className="toy-avatar" />
        <p>{this.props.toy.likes/* Toy's Likes */} Likes </p>
        <button onClick={() => this.props.likes(this.props.toy)} className="like-btn">Like {'<3'}</button>
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
