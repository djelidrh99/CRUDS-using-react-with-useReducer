import { v4 as uuidv4 } from 'uuid';

export default function reducer(currentState,action) {
    switch(action.type) {
        case "add" :  {
            const newProduct = {
                id: uuidv4().slice(0,4),
                title: action.payload.title,
                Price: action.payload.price,
                Ads: action.payload.ads || 0,
                Tax:action.payload.tax || 0,
                Discount:action.payload.discount || 0,
                Total:(Number(action.payload.price) + Number(action.payload.ads) + Number(action.payload.tax) - Number(action.payload.discount)),
                Category:action.payload.category
            }
            const updatedCruds = [...currentState,newProduct]
            localStorage.setItem("cruds",JSON.stringify(updatedCruds))
            return updatedCruds

        }
        case "delete" : {
            const updatedCruds = currentState.filter((cruds)=>{
                return cruds.id !== action.payload
            })
            localStorage.setItem("cruds",JSON.stringify(updatedCruds))
            return updatedCruds
        }

        case "update" : {
            const updatedCruds = currentState.map((cruds)=>{
                if(cruds.id === action.payload.updateId) {
                    return {...cruds,title: action.payload.title,Price: action.payload.price,Ads: action.payload.ads || 0,Tax:action.payload.tax || 0,Discount:action.payload.discount || 0,Total:(Number(action.payload.price) + Number(action.payload.ads) + Number(action.payload.tax) - Number(action.payload.discount)),Category:action.payload.category}
                } else {
                    return cruds
                }
            })
            localStorage.setItem("cruds",JSON.stringify(updatedCruds))
            return updatedCruds
        }

        case "searchByTitle" : {
            const updateCruds = currentState.filter((cruds)=>{
                return cruds.title.includes(action.payload)
            })
            return updateCruds
        }

        case "searchByCategory" : {
            const updateCruds = currentState.filter((cruds)=>{
                return cruds.Category.includes(action.payload)
            })
            return updateCruds
        }


        case "storage" : {
            const savedCruds = JSON.parse(localStorage.getItem("cruds")) || []
            return savedCruds
        }
        default:throw Error('Unknown action: ' + action.type);
        
    }

}
