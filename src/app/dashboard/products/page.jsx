"use client"
import dynamic from "next/dynamic";

const ProductsDy = dynamic(
  () => import("@/components/dashboard-components/products/products.component"),
  { ssr: false }
);

export default function ProductsPage() {
  return <ProductsDy />
}
