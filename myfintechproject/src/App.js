import logo from './logo.svg';
import './App.css';

const Header = ({title}) => {
  return(
  <>
    <h1>{title} 입니다.</h1>
  </>)
}


function App() {
  return (
    <>
      <Header title="첫번째"></Header>
      <Header ></Header>
      <Header></Header>
      <Header></Header>
    </>
  );
}

export default App;
