import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { deleteuser } from '../slice/Slices';

export default function Delete() {
    const {id}=useParams();
     const navigate=useNavigate();
   const dispatch=useDispatch();
 
       useEffect(() => {
         dispatch(deleteuser(id));
         navigate('/readpost')
       }, []);    

  return (
    <>
      
    </>
  )
}
