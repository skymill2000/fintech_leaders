import logo from './logo.svg';
import './App.css';

const Header = ({title}) => {
  return(
  <>
    <h1>{title} 입니다.</h1>
  </>)
}


function App() {
  const clickEvent = () =>{
    alert("버튼 클릭하셨습니다.")
  }

  return (
    <>
      <Header title="첫번째"></Header>
      <Header ></Header>
      <Header></Header>
      <Header></Header>
      <button onClick={clickEvent}>이벤트 버튼입니다.</button>
    </>
  );
}

export default App;
