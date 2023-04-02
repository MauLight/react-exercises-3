import './App.css';
import LiveOrders from './components/LiveOrders';

function Button({ type, children, ...buttonProps }) {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className} btn border rounded-0`}{...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button type="secondary" {...buttonProps} onClick={() => { alert("Logging In!") }} >
      {children}
    </Button>
  )
};


function App() {
  return (
    <div className="App">
      <header>Mau's Restaurant</header>
      <Button type="primary" onClick={() => { alert("Signing up!") }}>Sign up</Button>
      <LoginButton type="secondary" onClick={() => alert("Loggin in!")}>Log in</LoginButton>
      <LiveOrders />
    </div>
  );
}

export default App;
