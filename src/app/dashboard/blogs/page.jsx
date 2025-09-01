"use client"
import dynamic from "next/dynamic";

const BlogsDy = dynamic(
  () => import("@/components/dashboard-components/blogs/blogs.component"),
  { ssr: false } 
);

export default function BlogsPage() {
  return <BlogsDy />
}
