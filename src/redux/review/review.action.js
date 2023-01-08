import axios from 'axios'
import { reviewRequest,providerReviewRequest,reviewSuccess,reviewFail, addReviewSuccess, allReviewSuccess } from './review.reducer'

export const addReview = (data) => async(dispatch)=>{
    try {
        dispatch(reviewRequest())
        const review = await axios({
            method:"POST",
            url:"https://tiffinwala.onrender.com/review",
            data
        })
        dispatch(addReviewSuccess(review.data))
    } catch (error) {
        return dispatch(reviewFail(error.response.data.message));    
    }
}
export const getAllReview = () => async(dispatch)=>{
    try {
        dispatch(reviewRequest())
        const review = await axios({
            method:"GET",
            url:`https://tiffinwala.onrender.com/review`,
        })
        dispatch(allReviewSuccess(review.data))
    } catch (error) {
        return dispatch(reviewFail());    
    }
}
export const getProvidersReview = (_id) => async(dispatch)=>{
    try {
        dispatch(providerReviewRequest())
        console.log(_id)
        const review = await axios({
            method:"GET",
            url:`https://tiffinwala.onrender.com/review/${_id}`,
        })
        console.log(review.data)
        dispatch(reviewSuccess(review.data))
    } catch (error) {
        return dispatch(reviewFail());    
    }
}