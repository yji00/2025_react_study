/* eslint-disable */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let post = '글제목입니다.';
//   let [글제목, b] = useState('내일의 날짜 입니다.');//변경시 자동재랜더링
  let [글제목, 제목변경] = useState(['오늘의 날짜 입니다.', '내일의 날짜 입니다.', '어제의 날짜 입니다']);//변경시 자동재랜더링
  let [작성일, 작성일정렬] = useState(['2025-09-05', '2025-09-06', '2025-09-04']);//변경시 자동재랜더링
  let [logo, setLogo] = useState('React Blog');
  let [굿, 굿변경] = useState(0)
//  = 굿 + 1 state등호로 변경 불가
// 변경함수(새로운
  return (
    <div className='App'>
        <div className='title'>
            <h3>{ logo }</h3>
        </div>
        {/* <span onClick={() => { 
            글제목[0] = '25-11-11'
            제목변경(글제목) 
        }}>새로고침</span> */}
        
        <button onClick={() => { 

            let arr = [1,2,3]
            //array/object 담은 변수엔 화살표만 저장됨

            // let copy = 글제목; 배열의 화살표만 복사됨
            let copy = [...글제목];//
            copy[0] = '25-11-11'
            제목변경(copy) //기존 배열과 비교하여 달라졌으면 변경
        }}>새로고침</button>

        {/* 날짜정렬 */}
        <button onClick={() => {
            let sortdate = [...작성일].sort((a, b) => new Date(b) - new Date(a))
            작성일정렬(sortdate)
        }}>최신순
        </button>
        <div className="list">
            <h4>{ 글제목[0] } <span onClick={() => { 굿변경(굿+1) }}>❤</span>  {굿} </h4>
            <p>{ 작성일[0] }</p>
        </div>
        <div className="list">
            <h4>{ 글제목[1] }</h4>
            <p>{ 작성일[1]}</p>
        </div>
        <div className="list">
            <h4>{ 글제목[2] }</h4>
            <p>{ 작성일[2] }</p>
        </div>
    </div>
  )
}

export default App
