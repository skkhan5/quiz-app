// import React, { useState } from 'react'
// import { Data } from './data'

// const Quiz = () => {
//     const [data, setData] = useState(Data)
//     console.log(data)
//   return (
// <div className='container flex flex-wrap  bg-gradient-to-r from-cyan-500 to-blue-500'>
//     <div className='quiz'>
//         <div className='py-4'>
//             <h1>Q :{data[0].q}</h1>
//         </div>
//             <div className='option py-2'>
//                       <input type="radio" /> 
//                       <p>A :{data[0].a}</p>
//             </div>
//             <div className='option  py-2'>
//                       <input type="radio" /> 
//                       <p>B :{data[0].b}</p>
//             </div>
//             <div className='option  py-2'>
//                       <input type="radio" /> 
//                       <p>C :{data[0].c}</p>
//             </div>
//             <div className='option  py-2'>
//                       <input type="radio" /> 
//                       <p>D :{data[0].d}</p>
//             </div>
//     </div>

//     <div className="btns"> Next </div>

// </div>
//   )
// }
// export default Quiz



 import React, { useState } from 'react'
 import { Data } from './Data';
 
 const Quiz = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0)
  console.log(data);

  const next = () =>{
    if(index < data.length-1){
      setIndex(index+1)
    }else{
      document.querySelector(".score").innerHTML=`<p>Your Score : ${score}/5</p>`

      document.querySelector(".quiz").innerHTML=""

      let nextBtn = document.querySelector("#next");
      nextBtn.innerHTML="Play Again";
      nextBtn.classList.add("reset");
      const reset = document.querySelector(".reset");
      reset.addEventListener("click", ()=>{
        window.location.reload()
      })



    }
    
  const checked = document.querySelectorAll(".checkedValue");
  checked.forEach((curVal)=>{
    curVal.checked=false
  })
     
  }
 

  const handleInput = (event) =>{
    let chooseVal = event.target.value;
    console.log(chooseVal);
    if(chooseVal === data[index].ans){
      setScore(score+1);
      

    }
    
  }
  console.log(score);
   return (
     <div className='container flex flex-wrap  bg-gradient-to-r from-cyan-500 to-blue-500'>
       <div className='quiz'>
        <div>
          <h1 className='py-4'>Q : {data[index].q}</h1>
        </div>
         <div className='option py-4'>
          <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].a}  />
          <p>A : {data[index].a}</p>
         </div>

         <div className='option py-4'>
          <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].b} />
          <p>B :{data[index].b}</p>
         </div>

         <div className='option py-4'>
          <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].c} />
          <p>C : {data[index].c}</p>
         </div>

         <div className='option py-4'>
          <input name='select' type='radio' onChange={handleInput} className='checkedValue' value={data[index].d} />
          <p>D : {data[index].d}</p>
         </div>
       </div>
       
       <div className='score'></div>
       <div className='btns'>
        <button id='next' onClick={next}>Next</button>
       </div>
     </div>
   )
 }
 
 export default Quiz;