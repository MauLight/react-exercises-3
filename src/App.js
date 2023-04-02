import './App.css';
import ConfirmationDialog from './components/Dialog';
import { Fragment } from 'react';
import LiveOrders from './components/LiveOrders';

function Button({ children, backgroundColor }) {
  return <button className='btn' style={{ backgroundColor }}>{children}</button>;
};

function Alert({ children }) {
  return (
    <div id='modal1' className='modal' tabindex="-1">
      <div className='Overlay' />
      <div className='Alert'>{children}</div>
    </div>
  );
};

const DeleteBtn = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

function App() {
  return (
    <div className="App">
      <header>Mau's Restaurant</header>
      <LiveOrders />
    </div>
  );
}

export default App;
