import axios from 'axios'
import { initialDataFail, initialDataRequest, initialDataSuccess } from './initialData.reducer'

export const getInitialData = async(dispatch) =>{
    try {
        dispatch(initialDataRequest());
        const data = await axios({
            method:"GET",
            url:"https://tiffinwala.onrender.com/initialData"
        })
        dispatch(initialDataSuccess(data.data))
    } catch (error) {
        dispatch(initialDataFail(error))
    }
}