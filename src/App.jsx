/* eslint-disable */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let post = '글제목입니다.';
//   let [글제목, b] = useState('내일의 날짜 입니다.');//변경시 자동재랜더링
  let [글제목, b] = useState(['오늘의 날짜 입니다.', '내일의 날짜 입니다.', '어제의 날짜 입니다']);//변경시 자동재랜더링
  let [logo, setLogo] = useState('React Blog');

  return (
    <div className='App'>
        <div className='title'>
            <h3>{ logo }</h3>
        </div>
        <div className="list">
            <h4>{ 글제목[0] } <span>좋아요</span> 0 </h4>
            <p>2025-09-05</p>
        </div>
        <div className="list">
            <h4>{ 글제목[1] }</h4>
            <p>2025-09-06</p>
        </div>
        <div className="list">
            <h4>{ 글제목[2] }</h4>
            <p>2025-09-04</p>
        </div>
    </div>
  )
}

export default App
