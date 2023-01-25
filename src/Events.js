import React from 'react'

export default function Events() {
    function handleClick(){
        console.log('button Clicked');
    }
    function add(a,b){
        let ans=a+b;
        console.log(ans);
    }
    function addHandle(){
        add(3,4);
    }
  return (
    <div>
        <button onClick={handleClick}>Button1</button>
        <button onClick={addHandle}>Button2</button>
    </div>
  )
}
