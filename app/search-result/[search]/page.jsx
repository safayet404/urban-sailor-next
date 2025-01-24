import Affiliate from '@/app/components/Affiliate';
import CommonComponent from '@/app/components/CommonComponent';
import DressStyle from '@/app/components/DressStyle';
import { fetchData } from '@/app/lib/fetchData'
import React from 'react'

const page = async ({params}) => {

    const {search} = await params

    console.log(search);
    

    const decoded = decodeURIComponent(search)
    const {searchProduct} = await fetchData(null,decoded)

    const products = searchProduct.map((edge) => edge.node)
    console.log("checkkkkkkk",products);
    
  return (
    <div>
        <CommonComponent title="" products={products} />
        <DressStyle/>
        <Affiliate/>
    </div>
  )
}

export default page