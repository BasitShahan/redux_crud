
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import  axios from 'axios'


// https://64aa39138b9afaf4844b4280.mockapi.io/crud
export const createuser=createAsyncThunk('createuser',async (data,{rejectWithValue})=>{
  console.log(data)
try {

  const getuser=await axios.post('https://64aa39138b9afaf4844b4280.mockapi.io/crud',data)
console.log(getuser.data)

} catch (error) {
  console.log(error)
return rejectWithValue(error);  
}
})

export const showuser = createAsyncThunk('show', async (_, { rejectWithValue }) => {
  try {
    const data = await axios.get('https://64aa39138b9afaf4844b4280.mockapi.io/crud');
    return data.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

  
export const deleteuser = createAsyncThunk('deleteuser', async (id, { rejectWithValue }) => {
   
  try {

    
    const data = await axios.delete(`https://64aa39138b9afaf4844b4280.mockapi.io/crud/${id}`);
    console.log(data.data)
    return data.data

  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk('updateUser', async (userdata, { rejectWithValue }) => {
  try {
    const { id } = userdata;
    const response = await axios.put(`https://64aa39138b9afaf4844b4280.mockapi.io/crud/${id}`, userdata);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});



  


  export const userdetail = createSlice({
    name: 'userdetail',
    initialState: {
      user: [],
      loading: false,
      error: null,
      SearchData:[]
    },
     
    reducers :{
   SearchData:(state,action)=>{
    console.log(action.payload)
    state.SearchData=action.payload;
   }
      
    },
    extraReducers: {
    

[createuser.pending]:(state)=>{
  state.loading=true
 
  },
   [createuser.fulfilled]:(state,action)=>{
    state.loading=false,
    state.user.push(action.payload)
   
   },
    [createuser.rejected]:(state,action)=>{
     state.error=action.payload
     },
     

      [showuser.pending]: (state) => {
        state.loading = true;
      },
      [showuser.fulfilled]: (state, action) => {
        state.loading = false;
        state.user = 
        action.payload // Assign the payload value to state.user
      },
      [showuser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

      [deleteuser.pending]: (state) => {
        state.loading = true;
      },
      [deleteuser.fulfilled]: (state, action) => {
         const {id}=action.payload;
         
         state.user=state.user.filter((elem)=>
          elem.id!==id
         )
         
         
        },
      [deleteuser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }, 
    [updateUser.pending]: (state) => {
        state.loading = true;
      },
      [updateUser.fulfilled]: (state, action) => {
        state.loading = false;
        // state.user=action.payload
      const {id}=action.payload;

    
      state.user=state.user.map((elem)=>elem.id === id ? action.payload : elem)
    
       
        
    

      
      //   // Assign the payload value to state.user
      },
      [updateUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      
      
    },
  });
  
  export default userdetail.reducer;
  export const {SearchData} =userdetail.actions;




// [createuser.pending]:(state)=>{
//   state.loading=true
 
//   },
//   [createuser.fulfilled]:(state,action)=>{
//    state.loading=false,
//    state.user.push=action.payload
   
//    },
//    [createuser.rejected]:(state,action)=>{
//      state.user=action.payload
//      },
     