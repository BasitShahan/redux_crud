import React,{useState} from 'react'
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createuser } from '../slice/Slices';
import { useNavigate } from 'react-router-dom';


export default function CreatePost() {

     const [error, seterror] = useState(false);
     const [state, setstate] = useState({name:"",email:"",age:"",gender:""});     
      const navigate=useNavigate();

     const dispatch=useDispatch();
     const change=(e)=>{
     setstate({...state,[e.target.name]:e.target.value})

     }
     const submit=(e)=>{
     e.preventDefault();
     console.log(state)
       
      dispatch(createuser(state))
      navigate('/readpost')
    }
     
    return (

    <>
  
      
     

    <div style={{
      display:'flex',justifyContent:'center',alignItems:'center'
      
      
      }}> 
       
        <form  onSubmit={submit} style={{marginTop:'40px'}}> 
    <h1>Registration form</h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name='name' onChange={change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email"name='email' onChange={change}  className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Age</label>
    <input type="text" name='age' onChange={change} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Gender</label>
  
<input type="radio" onChange={change}  name="gender" value="male"/> Male
<input type="radio" onChange={change}   name="gender" value="female"/> Female


  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>  

<ToastContainer/>
  </>
  )
}


