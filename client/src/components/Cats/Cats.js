import React, { Component } from 'react';
import './Cats.css';

class Cats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    fetch('/api/cats')
      .then(res => res.json())
      .then(cats => this.setState({ cats }))
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.cats.map(cat =>
              <li key={cat.id}>{cat.name}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Cats;