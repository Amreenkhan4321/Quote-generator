import React from 'react'


function Main({Quotes ,getData}) {

  


  const handleSubmit = (e)=>{
    e.preventDefault()
   getData()
  }
  return (
<>

<div className="box">
      
<div className="quotes">
        <p>{Quotes.content}</p>
        <h1>{Quotes.author} ✍🏻</h1>
    <button onClick={(e)=>handleSubmit(e)}>Click</button>
  </div>
</div>
</>  )
}

export default Main