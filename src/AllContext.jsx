import { createContext, useContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";

const crudsListContext = createContext([])
const dispatchContext = createContext("")
/* eslint-disable react/prop-types */

export default function AllProvider ({children}) {
    

    const [crudsListitem,dispatch] = useReducer(reducer,[])
    return(
      <dispatchContext.Provider value={dispatch}>
     <crudsListContext.Provider value={crudsListitem}>
        {children}
     </crudsListContext.Provider>
     </dispatchContext.Provider>  
    )
}

export const useCruds = ()=>{ return useContext(crudsListContext)}
export const useDispatch = ()=>{ return useContext(dispatchContext)}