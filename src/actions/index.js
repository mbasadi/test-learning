
import axios from 'axios';
export const FETCH_PIC='FETCH_PIC';
export function fetchPic(){
  const url=`https://jsonplaceholder.typicode.com/photos`;

  const request =axios.get(url);


   return (dispatch)=>{
     request.then(({data})=>{
       
dispatch({

       type:FETCH_PIC,
       payload:data}
    )} )
   };
   }
