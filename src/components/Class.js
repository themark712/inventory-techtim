import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  // componentDidMount(): class component life-cycle method that runs when the component first mounts
  //   , i.e., first full render
  // Mounting is the process of outputting the virtual representation of a component
  //   into the final UI representation
  // In a a browser, that means outputting a React element into an actual DOM element
  componentDidMount() {
    console.log('mounted');
  }

  // componentDidUpdate(): class component life-cycle method that runs immediately after
  //   updating occurs. NOT called for the initial render
  componentDidUpdate() {
    console.log('component updated');
  }

  // componentWillUnmount(): class component life-cycle method that runs immediately before a component is
  //   being removed from the DOM (destroyed)
  // Used primarily for clean-up operations
  componentWillUnmount() {
    console.log('component unmounted')
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    console.log('clicked');
    this.props.destroy(false);
  }

  render() {
    return (<div>
      <p>Clicked: {this.state.count}</p>
      <button className="btn btn-primary" onClick={() => this.clickedButton()}>Click me</button>
    </div>)
  }
}