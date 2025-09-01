import ProductsDetails from '@/components/productsDetails/productsDetails.component'

export default async function page({params}) {
    const id = await params; 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const singleProductDetail = await res.json();

  return (
    <ProductsDetails data={singleProductDetail?.result} />
  )
}
