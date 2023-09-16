import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../slice/Slices';


export default function Edit() {
 
    const [state, setState] = useState({ name: '', email: '', age: '', gender: '' });
    const { id } = useParams();
    
    const dispatch=useDispatch();
    
    const { user, loading } = useSelector((state) => state.app);
 
  const navigate=useNavigate();
  console.log(state)
  const  data=user.filter((elem)=>{
    return id===elem.id

  })
  
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    
};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(state))
    navigate('/readpost')
    
  };


  useEffect(() => {
setState(data[0]);
}, []);
    
    
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <form onSubmit={handleSubmit} style={{ marginTop: '40px' }}>
          <h1>Update Record</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={data && state.name}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={data &&  state.email}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
            <input
              type="text"
              name="age"
              value={data &&  state.age}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>

            <input
              type="radio"
              onChange={handleChange}
              name="gender"
              value="male"
              checked={data &&  state.gender === 'male'}
            />
            Male

            <input
              type="radio"
              onChange={handleChange}
              name="gender"
              value="female"
              checked={data &&  state.gender === 'female'}
            />
            Female
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

      <ToastContainer />
    </>
  );
}
