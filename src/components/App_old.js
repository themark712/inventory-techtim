import './App.css';
import { useState } from 'react';
import Info from './components/Info';

function App_old() {
  return (
    <div className='_old'>
      <Info title="Inventory Management" />
      <ButtonState />
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updatedTitleClicked = () => {
    setTitle("We now have a title");
  }

  const updatedCounterClicked = () => {
    setCount(count + 1);
  }

  return (
    <div>
      {/* state data is passed to component via props */}
      <Data title={title} count={count} />
      <button onClick={updatedTitleClicked}>Update Title</button>
      <button onClick={updatedCounterClicked}>Update Counter</button>
    </div>
  );
}

// passing state values to components (props)
function Data(props) {
  return (
    <div>
      <p>Title: {props.title}</p>
      <p>Count: {props.count}</p>
    </div>
  )
}

export default App_old;
