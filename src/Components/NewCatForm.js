import React, {useState} from "react";


export const NewCatForm = (props)=>{
  const [name, setName] = useState('');
  const isSleeping = false
  const onSubmit =(e) => {
    e.preventDefault();
    if (name && isSleeping) {
      props.addNewCat({name, isSleeping});
      setName('');
    } else {
     // console.log('invalid input');
    }
  }

  return (

    <>
      <form onSubmit={onSubmit}>
        <input
              type="text"
              placeholder="New Cat"
            
        />
        <button type = "submit">Add</button>
      </form>
    </>
  )
}