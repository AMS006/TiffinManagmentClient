import axios from 'axios'
import { providerRequest,providerSuccess,providerFail,providerLogout,allProvidersSuccess,allProvidersFail, singleProviderSuccess,providerRegistrationSuccess } from './provider.reducer';

export const loginProvider = (provider) => async(dispatch) =>{
    try {
        dispatch(providerRequest());
        const config = { headers: { "Content-Type": "application/json" } };
        const providerData = await axios({
            method:"POST",
            url:"https://tiffinwala.onrender.com/provider/login",
            data: provider,
            config
        })
        return dispatch(providerSuccess(providerData.data))
    }catch (error) {
        console.log(error.response)
        return dispatch(providerFail(error.response.data.message));
    }
}
export const providerRegister = (provider) => async(dispatch) =>{
    try {
        dispatch(providerRequest());
        const providerData = await axios({
            method:"POST",
            url:"https://tiffinwala.onrender.com/provider/register",
            data: provider
        })
        return dispatch(providerRegistrationSuccess())
    }catch (error) {
        return dispatch(providerFail(error.response.data.message));
    }
    
}
export const providerlogout = () => async(dispatch) =>{
    try {
        dispatch(providerRequest());
        await axios({
            method:"GET",
            url:"https://tiffinwala.onrender.com/provider/logout",
        })
        return dispatch(providerLogout())
    }catch (error) {
        return dispatch(providerFail(error.response.data.message));
    }
}
export const getAllProviders = () => async(dispatch) =>{
    try {
        dispatch(providerRequest());
        const providerData = await axios({
            method:"GET",
            url:"https://tiffinwala.onrender.com/provider",
        })
        return dispatch(allProvidersSuccess(providerData.data))
    }catch (error) {
        return dispatch(allProvidersFail());
    }
}
export const getProviderById = (id) => async(dispatch) =>{
    try {
        dispatch(providerRequest())
        const provider = await axios({
            method:"GET",
            url:`https://tiffinwala.onrender.com/provider/${id}`
        })
        dispatch(singleProviderSuccess(provider.data))
    } catch (error) {
        return dispatch(allProvidersFail());
    }
}
export const getProviderDetails = () => async(dispatch) =>{
    try {
        dispatch(providerRequest());
        const providerData = await axios({
            method:"GET",
            url:"https://tiffinwala.onrender.com/provider/me",
        })
        return dispatch(providerSuccess(providerData.data))
    }catch (error) {
        return dispatch(providerFail());
    }
}