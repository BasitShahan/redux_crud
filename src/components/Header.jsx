import React, { useState,useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SearchData } from '../slice/Slices';

export default function Header() {
    const [state, setstate] = useState('');
  const {user}=useSelector((state)=>state.app)
      
    const dispatch=useDispatch();

    const search=(e)=>{
setstate(e.target.value)
}
  useEffect(() => {
  dispatch(SearchData(state))
  }, [state]);  
  
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">RTK</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/createpost">CreatePost</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">All_Post({user.length})</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input onChange={search}  className="form-control me-2" name='search'  style={{ width: '35rem' }} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
