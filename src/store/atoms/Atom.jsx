import {atom, selector}from "recoil"

const Myatom  = atom ({
    key :"Myatom",
    default:0
})

export default Myatom


export const evenSelector = selector({
    key :"evenSelector",
    get :({get})=>{
        const count = get (Myatom)
        return count%2;
    }
})

