import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const rowSlice = createSlice({
  name: 'row',
  initialState,
  reducers: {
    addRow: (state, action) => {
      state.items.push(action.payload)
    },
    deleteRow: (state, action) => {
      state.items = state.items.filter((r) => r.id !== action.payload);
    },
    disableRow: (state, action) => {
        return state.items.find((r) => {
            if(r.id === action.payload){
                r.disabled = !r.disabled
            }
        });
    },
    operatorChange: (state, action) => {
        return state.items.find((r) => {
            if(r.id === action.payload.id){
              r.operator = Number(action.payload.value);
            }
        });
    },
    amountChange: (state, action) => {
        return state.items.find((r) => {
          if(r.id === action.payload.id){
            r.amount = Number(action.payload.value);
          }
        });
    }
  },
})

// Action creators are generated for each case reducer function
export const { addRow, deleteRow, disableRow, operatorChange, amountChange } = rowSlice.actions

export default rowSlice.reducer