import axios from 'axios'
import {orderRequest,orderFail,addOrderSuccess,orderSuccess,userOrderSuccess,updateOrderSuccess, updateUserOrderSuccess} from './order.reducer'
export const getAllOrders = () => async(dispatch) =>{
    try{
        dispatch(orderRequest())
        const orders = await axios({
            method:"GET",
            url:`https://tiffinwala.onrender.com/order/provider`
        })
        dispatch(orderSuccess(orders.data))
    }catch(error){
        return dispatch(orderFail(error.response.data.message));
    }
}
export const getUserOrders = () => async(dispatch) =>{
    try {
        dispatch(orderRequest())
        const orders = await axios({
            method:"GET",
            url:"https://tiffinwala.onrender.com/order/user"
        })
        console.log(orders.data)
        return dispatch(userOrderSuccess(orders.data));
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}
export const addOrder = (data) => async(dispatch)=>{
    try {
        dispatch(orderRequest())
        const order = await axios({
            method:"POST",
            url:`https://tiffinwala.onrender.com/order`,
            data
        })
        console.log(order)
        dispatch(addOrderSuccess(order.data))
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}
export const updateOrder = (data) => async(dispatch)=>{
    try {
        dispatch(orderRequest())
        const order = await axios({
            method:"POST",
            url:`https://tiffinwala.onrender.com/order/updateStatus`,
            data
        })
        console.log(order)
        dispatch(updateOrderSuccess(order.data))
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}
export const updateUserOrder = (data) => async(dispatch)=>{
    try {
        dispatch(orderRequest())
        const order = await axios({
            method:"POST",
            url:`https://tiffinwala.onrender.com/order/updateStatus`,
            data
        })
        console.log(order)
        dispatch(updateUserOrderSuccess(order.data))
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}
export const deleteOrder = (data) => async(dispatch) =>{
    try {
        dispatch(orderRequest())
        const order = await axios({
            method:"DELETE",
            url:`https://tiffinwala.onrender.com/order/${data.order._id}`
        })
    } catch (error) {
        return dispatch(orderFail(error.response.data.message));
    }
}
