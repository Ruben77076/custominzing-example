import React from 'react'

function Heading(props) {
    const fName = props.firstName +' '+ props.firstname;
    console.log(fName);
  
  return (
    <h1>Hello,{fName} </h1>
  )
}

export default Heading