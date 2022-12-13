import {ADD_T0_CART,REMOVE_T0_CART} from'../constants'
 export const addtocart= (data)=>{
    // console.log("action",data)
    return{
        type:ADD_T0_CART,
        data:data
    }
 }
 export const removeToCart= (data)=>{
    console.log("action")
    return{
        type:REMOVE_T0_CART,
    }
 }