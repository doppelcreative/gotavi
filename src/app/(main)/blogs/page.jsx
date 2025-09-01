import Blogs from '@/components/blogs/blogs.component'

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`, {
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

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <Blogs blogs={blogs} />
  );
}
