import { v4 as uuidv4 } from 'uuid';

export default function reducer(currentState,action) {
    switch(action.type) {
        case "add" :  {
            const newProduct = {
                id: uuidv4().slice(0,4),
                title: action.payload.title,
                Price: action.payload.price,
                Ads: action.payload.ads,
                Tax:action.payload.tax,
                Discount:action.payload.discount,
                Total:(Number(action.payload.price) + Number(action.payload.ads) + Number(action.payload.tax) - Number(action.payload.discount)),
                Category:action.payload.category
            }
            const updatedCruds = [...currentState,newProduct]
            return updatedCruds

        }
        case "delete" : {
            const updatedCruds = currentState.filter((cruds)=>{
                return cruds.id !== action.payload
            })
            return updatedCruds
        }
        default:throw Error('Unknown action: ' + action.type);
        
    }

}
