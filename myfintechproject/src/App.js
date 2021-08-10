import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const Header = ({title}) => {
  return(
  <>
    <h1>{title} 입니다.</h1>
  </>)
}


function App() {
  const [data, setData] = useState();
  const clickEvent = () =>{
    alert("버튼 클릭하셨습니다.")
  }

  const handleChange = (event) => {
    const userInput = event.target.value;
    setData(userInput);
    console.log("데이터가 변경:", data)//? 입력 데이터는?    
  }

  return (
    <>
      <Header title="첫번째"></Header>
      <Header ></Header>
      <Header></Header>
      <Header></Header>
      {data}
      <br/>
      <input onChange={handleChange}></input>
      <button onClick={clickEvent}>이벤트 버튼입니다.</button>
    </>
  );
}

export default App;
