import React from 'react'

const AxiosTest = () => {
    const handleClick = () =>{
        console.log("이벤트 발생");
    }
    return (
        <div>
            <button onClick={handleClick}>데이터 가져오기!</button>
        </div>
    )
}

export default AxiosTest
