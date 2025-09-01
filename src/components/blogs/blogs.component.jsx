import Hero from "@/common/components/hero-sec/hero-sec";
import blog from "@/common/assets/images/blog.jpg"
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

export default function Blogs({blogs}) {
    return (
        <>
            <Hero title="Blog Grid" />
            <section className="pp-pp-news-section-2 pt-[40px] pb-[50px] fix">
                <div className="container mx-auto">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        {blogs?.data?.blogs?.map((item, i) => (
                            <div key={i} className="pp-news-card-item-2 mt-0">
                            <div className="pp-news-image">
                                <Image src={blog} alt="" />
                                {
                                    item.tags?.length > 0 && (
                                        <span className="!text-black font-[600]">
                                            {item.tags?.join(", ")}
                                        </span>
                                    )
                                }
                                
                            </div>
                            <div className="pp-news-content">
                                <h3>
                                <Link href={`/blogs/${item._id}`}>
                                    {item.title}
                                </Link>
                                </h3>
                                <ul className="news-post">
                                <li className="flex items-center gap-1">
                                    <FaRegUser className="text-[#59d69c]" />
                                    <span>{item.role}</span>
                                </li>
                                <li className="pp-style-2 flex items-center gap-1">
                                    <SlCalender className="text-[#59d69c]" />
                                    <span>{new Date(item.createdAt).toISOString().split("T")[0]}</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
