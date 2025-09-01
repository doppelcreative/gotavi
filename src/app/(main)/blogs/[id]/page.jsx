import BlogDetail from "@/components/blog-detail/blog-detail.component";
import Header from "@/common/components/header/header";
import Footer from "@/common/components/footer/footer";

export async function generateMetadata({ params }) {
  const id = params.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return {
      title: "Blog not found",
      description: "The blog you are looking for does not exist.",
    };
  }

  const blog = await res.json();

  return {
    title: blog?.result?.title || "Blog Title",
    description:
      blog?.result?.metaDescription ||
      "Gotavi description",
  };
}

export default async function Page({ params }) {
  const id = params.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const blogs = await res.json();

  return (
   <BlogDetail blogs={blogs?.result} />
  );
}
