'use client'
import ShopCatalog from "@/components/ShopCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default  function Hospital(){
    
    const hospitals =  getHospitals()
    
    return(
    <main className="text-center p-10">
        <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
            <ShopCatalog hospitalsJson={hospitals}/>
        </Suspense>
    </main>
    )
}