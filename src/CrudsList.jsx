import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  ProductTable from './Table'
import { useState,useEffect } from "react";
import { useDispatch } from "./AllContext";
import { handelEditeContext } from "./AllContext";


export default function CrudsList() {
    const [titleInput,setTitleInput] =useState("")
    const [priceInput,setPriceInput] =useState("")
    const [taxInput,setTaxeInput] =useState("")
    const [adsInput,setAdsInput] =useState("")
    const [discountInput,setDiscountInput] =useState("")
    const [countInput,setcountInput] =useState("")
    const [categoryInput,setCategoryInput] =useState("")
    const [searchInput,setSearchInput] =useState("")
    const [searchMethod,setSearchMetod]=useState("searchbytitle")

    const [updateId ,setUpdateId]=useState("")
    const [state,setState] =useState("Create")

    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(localStorage.getItem("cruds")) {
            dispatch({type:"storage"})
        }
    },[])

function addNewProduct () {
    if(state === "Create") {
        if(countInput>0) {
            for(let i=0;i<countInput;i++) {
                dispatch({type:"add",payload:{
                    title:titleInput,
                    price:priceInput,
                    tax:taxInput,
                    ads:adsInput,
                    discount:discountInput,
                    category:categoryInput
                   }})
            }
        }else {
            dispatch({type:"add",payload:{
                title:titleInput,
                price:priceInput,
                tax:taxInput,
                ads:adsInput,
                discount:discountInput,
                category:categoryInput
               }})
        }
    } else {
        dispatch({type:"update",payload:{
            title:titleInput,
            price:priceInput,
            tax:taxInput,
            ads:adsInput,
            discount:discountInput,
            category:categoryInput,
            updateId:updateId
           }})
           setState("Create")
    }
   

    setTitleInput("")
    setPriceInput("")
    setAdsInput("")
    setTaxeInput("")
    setDiscountInput("")
    setCategoryInput("")
   
  
}

function editeProduct(value) {
    setTitleInput(value.title)
    setPriceInput(value.Price)
    setAdsInput(value.Ads)
    setTaxeInput(value.Tax)
    setDiscountInput(value.Discount)
    setCategoryInput(value.Category)
    console.log("done")
    console.log(value.Price)
    setState("Update")
    setUpdateId(value.id)
}

function handelSearch (e) {
    setSearchInput(e.target.value)
    if (searchMethod === "searchbytitle") {
    dispatch({type:"searchByTitle",payload:searchInput})
    } else {
        dispatch({type:"searchByCategory",payload:searchInput})
    }
}

  return (
    <handelEditeContext.Provider value={editeProduct}> 

    <div className="bg-gray-800 text-white">
      <Container maxWidth="lg">
        <Box
          sx={{ bgcolor: "rgb(31 41 55)", minHeight: "100vh", paddingTop: 5,paddingBottom:5 }}
        >
          <Typography className="text-center" variant="h4" gutterBottom>
            CRUDS
          </Typography>
          <Typography className="text-center" variant="h5" gutterBottom>
            PRODUCT MANAGEMENT SYSTEM
          </Typography>
          <div>
            <Grid container spacing={2}>
              <Grid   size={12}>
                  <TextField value={titleInput} onChange={(e)=>{setTitleInput(e.target.value)}}  color="secondary" sx={{backgroundColor:"white"}} className="w-full" id="filled-basic" label="Title" variant="filled" />
              </Grid>
              <Grid size={3}>
                   <TextField value={priceInput} type="number" onChange={(e)=>{setPriceInput(e.target.value)}}  color="secondary" sx={{backgroundColor:"white"}} className="w-full" id="filled-basic" label="Price" variant="filled" />
              </Grid>
              <Grid size={3}>
                   <TextField value={taxInput} type="number" onChange={(e)=>{setTaxeInput(e.target.value)}}  color="secondary" sx={{backgroundColor:"white"}} className="w-full" id="filled-basic" label="Tax" variant="filled" />
              </Grid>
              <Grid size={3}>
                   <TextField value={adsInput} type="number" onChange={(e)=>{setAdsInput(e.target.value)}}  color="secondary" sx={{backgroundColor:"white"}} className="w-full" id="filled-basic" label="Ads" variant="filled" />
              </Grid>
              <Grid size={3}>           
                   <TextField value={discountInput} type="number" onChange={(e)=>{setDiscountInput(e.target.value)}}  color="secondary" sx={{backgroundColor:"white"}} className="w-full" id="filled-basic" label="Discount" variant="filled" />
              </Grid>
              <Grid size={12}>           
                   <TextField disabled={state ==="Create"?false:true} value={countInput} type="number" onChange={(e)=>{setcountInput(e.target.value)}}  color="secondary" sx={{backgroundColor:"white"}} className="w-full" id="filled-basic" label="Count" variant="filled" />
              </Grid>
              <Grid size={12}>           
                   <TextField value={categoryInput} onChange={(e)=>{setCategoryInput(e.target.value)}}  color="secondary" sx={{backgroundColor:"white"}} className="w-full" id="filled-basic" label="Category" variant="filled" />
              </Grid>
              <Grid size={12}>           
              <Button onClick={addNewProduct} className="bg-purple-900 w-full h-[56px] text-xl" variant="contained">{state}</Button>
              </Grid>
              <Grid size={12}>           
              <TextField value={searchInput} onChange={handelSearch}  color="secondary" sx={{backgroundColor:"white"}} className="w-full" id="filled-basic" label="Search a product" variant="filled" />
              </Grid>
              <Grid size={6}>           
              <Button onClick={()=>{setSearchMetod("searchbytitle")}} className="bg-purple-900 w-full h-[56px] text-xl" variant="contained">Search by Title</Button>
              </Grid>
              <Grid size={6}>           
              <Button onClick={()=>{setSearchMetod("searchbycategory")}} className="bg-purple-900 w-full h-[56px] text-xl" variant="contained">Search by Category</Button>
              </Grid>
            </Grid>
            <ProductTable/>
          </div>
        </Box>
      </Container>
    </div>
    </handelEditeContext.Provider>
  );
}
