import React from "react";
import './App.css';
 const PicList = ({ picsL }) => {
  const fpics=picsL[0];
  if (!fpics) {
    return <div>Loading...</div>;
  } 
  const picItems = fpics.map(pic => {
    return (    
      <div key={pic.id} className="card" >
         <img src={pic.url} alt="pictures are unavailable"/>
         <div className="container">
         <p>{pic.title}</p>
          </div>
       </div>
       
   )
  });
  return (
    <div className='main'>
    {picItems}
    </div>
  )
};
export default PicList;
