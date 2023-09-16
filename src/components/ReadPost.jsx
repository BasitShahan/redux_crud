import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { showuser } from '../slice/Slices';



   export default function ReadPost() {
    

  const { user, loading,SearchData } = useSelector((state) => state.app);

  const [radioData, setradio] = useState('');  


 const dispatch=useDispatch();

     
       useEffect(() => {
        dispatch(showuser());
         }, []);

// radio filter code

// Log the user data

 if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
    <br/>

         <div>
              <h1 style={{textAlign:'center'}}>Filter Data</h1>
            </div> 
         <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
             
        <div>
        <input type="radio" onChange={(e)=>{setradio(e.target.value)}}  checked={radioData === ""}  name="gender" /> ALL
    
        <input type="radio"  onChange={(e)=>{setradio(e.target.value)}}   checked={radioData === "male"} name="gender" value="male"/> Male
    
        <input type="radio"  onChange={(e)=>{setradio(e.target.value)}}  checked={radioData === "female"}  name="gender" value="female"/> Female

        </div>
     </div>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {   
          user.filter((data)=>{
               if (data.length === 0) {
                return data
               }
               else{
                return data.name.toLowerCase().includes(SearchData.toLowerCase()) ||
                data.email.toLowerCase().includes(SearchData.toLowerCase()) ||
                data.age.toLowerCase().includes(SearchData.toLowerCase()) || 
                data.gender.toLowerCase().includes(SearchData.toLowerCase())

               
               }
          }).filter((elem)=>{
            if(radioData === 'male'){
             return elem.gender ===radioData
            
            }
            else if(radioData === 'female') {
                return elem.gender ===radioData
            }
            else {
                return elem
            }
          })
            
          
         .map((value) => 
               
          (
                     
              <tr key={value ? value.id : null}> 
              <td>{value ? value.id :null}</td>
              <td>{value ? value.name : null}</td>
              <td>{value ? value.email : null}</td>
              <td> {value ? value.age : null}</td>
              <td>{value ? value.gender : null}</td>
              <td>
                <NavLink style={{ color: 'green' }} to={`/edit/${value ? value.id :null}`}>Edit</NavLink>
            
              </td>
              <td>
                
              <NavLink style={{ color: 'red' }} to={`/delete/${value ? value.id :null}`}>remove</NavLink>
            

                {/* <button style={{ color: 'green' }} onClick={() => { dispatch(deleteuser(value.id)); }}>
                  Remove
                </button>
                 */}
              </td>
            </tr>
          )) }

        </tbody>
      </table>
    </>
  );
}
