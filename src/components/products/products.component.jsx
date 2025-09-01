import Hero from '@/common/components/hero-sec/hero-sec'
import productImg from "@/common/assets/images/product.jpg"
import Image from 'next/image'
import Link from 'next/link';

export default function ProductsComponent({data}) {
    const ALL_PRODUCTS = data?.products
    return (
        <>
        <Hero title="Our Products" />
            <section className="pp-project-section pb-[50px] pt-[40px] fix">
                <div className="container-fluid custom-container">
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                        {
                            ALL_PRODUCTS?.map((item, i) => {
                                return (
                                    // <div className="wow fadeInUp" data-wow-delay=".2s" key={i.toString()}>
                                    //     <div className="pp-project-card-item">
                                    //         <div className="pp-project-image">
                                    //             <Image src={productImg} alt="" />
                                    //             <div className="pp-project-content">
                                    //             <h3>
                                    //                 <Link href={`products/${item._id}`}>{item.productName}</Link>
                                    //             </h3>
                                    //             <Link href={`products/${item._id}`} className="pp-link-btn">{`View ${item.productName}`}</Link>
                                    //         </div>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <div class="wow fadeInUp" data-wow-delay=".2s">
                                        <div class="pp-hosting-box-items pp-hosting-box-items-products">
                                            <div class="icon">
                                                <i class="fa-solid fa-file-text"></i>
                                            </div>
                                            <div class="content"> 
                                                <h3><Link href={`products/${item._id}`}>{item.productName}</Link></h3>
                                                <p>Complete business formation with all required documentation</p>
                                                <Link class="pp-theme-btn mt-4 !bg-[green] flex justify-center" href={`products/${item._id}`}>{`View ${item.productName}`} <i class="fa-solid fa-arrow-right-long"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    
                    </div>
                </div>
            </section>
        </>
    )
}
