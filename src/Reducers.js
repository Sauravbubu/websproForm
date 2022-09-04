import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    form:{
        firstname:"",
        lastname:"",
        email:"",
        dob:" ",
        resAddress:{
            street1:"",
            street2:"",
        },
        perAddress: {
            street1:"",
            street2:"",
        },
        files:{
   file1:{},
   file2:{}
        }
    }
  },
  reducers: {
 
    adduser: (state, action) => {
      state.form ={...state.form,...action.payload}
    }
  }
});

// Action creators are generated for each case reducer function
export const {adduser} = formSlice.actions;

export default formSlice.reducer;
