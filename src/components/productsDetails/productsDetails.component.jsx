import Hero from '@/common/components/hero-sec/hero-sec'
import Image from 'next/image'
import scale1 from "@/common/assets/icons/scale.svg"
import scale2 from "@/common/assets/icons/scale2.svg"
import scale3 from "@/common/assets/icons/scale3.svg"
import parse from 'html-react-parser';
import StreamLine from '@/common/components/stream-line/streamLine'

export default function ProductsDetails({data}) {
    return (
        <>
            <Hero title="Project Details" />
            <section className="pp-project-details-section pt-[100px] fix">
                <div className="container mx-auto md:px-[0px] px-[20px]">
                    <div className="pp-project-details-wrapper">
                        <div className="">
                           
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full mb-6">
                                <div>
                                    <div className="pp-details-box">
                                        <div className="pp-content">
                                            <h5>Sectors</h5>
                                            <span>{data.sector??""}</span>
                                        </div>
                                        <div className="pp-icon relative"> 
                                            <Image src={scale1} alt="" className='absolute top-0 right-0 left-0 bottom-0 m-auto' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pp-details-box">
                                        <div className="pp-content">
                                            <h5>Owner</h5>
                                            <span>{data.companyName??""}</span>
                                        </div>
                                        <div className="pp-icon relative">
                                            <Image src={scale2} alt="" className='absolute top-0 right-0 left-0 bottom-0 m-auto' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pp-details-box">
                                        <div className="pp-content">
                                            <h5>Project Date</h5>
                                            <span>{`Started: ${new Date(data.startDate).toISOString().split("T")[0]} - Ending: ${new Date(data.endDate).toISOString().split("T")[0]}`??""}</span>
                                        </div>
                                        <div className="pp-icon relative">
                                            <Image src={scale3} alt="" className='absolute top-0 right-0 left-0 bottom-0 m-auto' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pp-project-details-content w-full">
                                <h3>
                                    Project Description
                                </h3>
                                <p className='quil_Text'>
                                    {data?.productDescription ? parse(data?.productDescription) : ""}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            
            </section>
            <StreamLine />
        </>
    )
}
