import ProductsComponent from '@/components/products/products.component'
import React from 'react'

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function ProductPage() {
  const products = await getProducts();
  return (
   <ProductsComponent data={products?.data} />
  )
}
