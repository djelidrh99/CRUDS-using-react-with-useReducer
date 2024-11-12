import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useCruds,useDispatch } from './AllContext';
import { useHandelEdite } from './AllContext';



export default function CrudsItem() {
    const crudsListItem  =useCruds()
    const dispatch = useDispatch()
    const editeProduct =useHandelEdite()




function handelDelete(Id) {
dispatch({type:"delete",payload:Id})
}

    const crudsList = crudsListItem.map((cruds)=>{
        return (
                <TableRow key={cruds.id} >
                    <TableCell >{cruds.id}</TableCell>
                    <TableCell >{cruds.title}</TableCell>
                    <TableCell >{cruds.Price}</TableCell>
                    <TableCell >{cruds.Ads}</TableCell>
                    <TableCell >{cruds.Tax}</TableCell>
                    <TableCell >{cruds.Discount}</TableCell>
                    <TableCell >{cruds.Total}</TableCell>
                    <TableCell >{cruds.Category}</TableCell>
                    <TableCell >
                    <Button onClick={()=>{editeProduct(cruds)}} className="bg-purple-900 " variant="contained">Update</Button>
                    </TableCell>
                    <TableCell >
                    <Button onClick={()=>{handelDelete(cruds.id)}} className="bg-purple-900 " variant="contained">Delete</Button>
                    </TableCell>
                </TableRow>
        )
            
    })
    return(
    <>
    {crudsList} 
    </>  
    )
}