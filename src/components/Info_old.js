// new component
// class component

import React from 'react';
//import { PropTypes } from 'prop-types';

class Info_old extends React.Component {
  constructor(props) {
    super(props);
    // defining state in class component
    this.state = {
      count: 0
    };
    // button press function must be bound to access this object: method 1
    // this.buttonPressed = this.buttonPressed.bind(this);
  }

  // class function
  buttonPressed() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <p>
          Count: {this.state.count}
        </p>
        {/* <button onClick={this.buttonPressed}>Click Me (Class Component)!</button> // button press function must be bound to access this object: method 1 */}
        {/* button press function bound to this object with arrow function: method 2 */}
        <button onClick={() => this.buttonPressed()}>Click Me (Class Component)!</button>
      </div>
    );
  }
}

// //defaultProps will work in class components
// Info.defaultProps = {
//   title: "Welcome"
// }

// // propTypes is DEPRECATED!!!!!
// // use TypeScript or another type-checking solution
// Info.propTypes = {
//   number: PropTypes.number
// }

export default Info_old;
