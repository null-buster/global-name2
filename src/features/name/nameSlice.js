import {createSlice} from '@reduxjs/toolkit'

export const nameSlice = createSlice({
    name: 'name',
    initialState: {
        name: 'Global Demo'
    },
    reducers : {
        CHANGE_NAME : state => {
            state.name = 'Global Name: Global Name changed by dispatch'
        },
        CHANGE_DEFAULT : state => {
            state.name = 'Global Name: Global Demo'
        }
    }
})

export const {CHANGE_DEFAULT, CHANGE_NAME} = nameSlice.actions
export const selectName = (state) => state.name.name

export default nameSlice.reducer