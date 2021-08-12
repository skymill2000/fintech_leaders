import React from 'react';
import axios from 'axios';


const AxiosTest = () => {
    const handleClick = () =>{
        console.log("이벤트 발생");
        axios.get('/').then((response)=>{
            console.log(response);
        })
    }
    return (
        <div>
            <button onClick={handleClick}>데이터 가져오기!</button>
        </div>
    )
}

export default AxiosTest
