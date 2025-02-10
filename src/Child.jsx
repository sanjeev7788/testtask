import React, { useState } from 'react'
import './Child.css';
import { useLocation } from 'react-router-dom';

const Child = () => {

const[selectedParentdata,setselectedparentdata]=useState(null)

const location=useLocation()
  
console.log(location.state)
 
const {parentData}=location.state
 
 console.log(parentData)
  

 function getParentdetails(id){ 
   
    const child= parentData.childs.find(child=>child.id===id);
   
   if(child){

     setselectedparentdata({
      id:parentData.id,
      name:parentData.name,
      mobile:parentData.mobile,
      image:parentData.image
})


   }

  }

 return (
    <div className='container'>
        <h4>Child details</h4>
      <table border="1">
        <thead>
         
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>ParentName</th>
            <th>Age</th>
            <th>School</th>
            <th>Parent Name</th>

        </tr>
        </thead>
        <tbody>
          {
            parentData.childs.map(cdata=>(
             <tr>
              <td>{cdata.id}</td>
              <td>{cdata.name}</td>
              <td>{cdata.parentname}</td>
              <td>{cdata.age}</td>
              <td>{cdata.school}</td>
              <th><button onClick={()=>getParentdetails(cdata.id)}>GetParent</button></th>
             </tr>

            ))
          }
              
        </tbody>
      </table>
   {
    selectedParentdata&&(
      <table border="1">
      <thead>
      <tr>
       <th>id</th>
       <th>name</th>
       <th>mobile</th>
       <th>image</th>
      </tr> 
      </thead>
     <tbody>
       <tr>
         <td>{selectedParentdata.id}</td>
         <td>{selectedParentdata.name}</td>
         <td>{selectedParentdata.mobile}</td>
         <td>{selectedParentdata.image}</td>
       </tr>
     </tbody>
     </table>  
     

    )
   }
           
    </div>
  )
}

export default Child
