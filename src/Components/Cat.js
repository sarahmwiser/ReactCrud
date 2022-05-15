import React from "react";


export const Cat = (props) => {
  const {cat, updatedCat} = props;

  const deleteCat = (catId) => {
    const updatedCat = {
        ...cat,
        cats: cat._id((x) => x._id !== catId)
    };
    updatedCat(updatedCat);
    //didnt get delete to work or anything really... ran out of time. needed help but no mentors were available .
}

const addCat = (cat) => updatedCat({...cat});



  return (
      <>
        <li>
           
            <span>
               {cat.name} 
               <button onClick={deleteCat}>Delete</button>
            </span>
            
       </li>
      </>
  )
  }