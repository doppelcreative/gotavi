import team1 from "@/common/assets/images/shai.png"
import Image from "next/image"
import team2 from "@/common/assets/images/eli.png"
import team3 from "@/common/assets/images/michelle.png"
import team4 from "@/common/assets/images/elishah.png"

export default function OurTeam({TEAM}) {
    
   
    return (
        <section className="hosting-section fix">
                <div className="container mx-auto lg:px-[10px] px-[20px]">
                    <div className="pp-section-title-area">
                    <div className="pp-section-title">
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">{TEAM.heading}</h2>
                            <p>{TEAM.desc}</p>
                    </div>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                        {
                            TEAM.MEMBER.map((item, i)=>(
                                <div className=" wow fadeInUp" data-wow-delay=".2s" key={i.toString()}>
                                    <div className="pp-hosting-box-items pp-hosting-box-items2">
                                        <div className="content"> 
                                    
                                        <Image src={item.img} alt="Shai stern" className="mx-auto" />
                                            <h3>{item.name} <span className="md:h-[61px] !flex items-center text-center justify-center">{item.designation}</span></h3>
                                            <p>{item.desc}</p>
                                    </div> 
                                    </div>
                                </div>
                            ))  
                        }
                        
                    
                    </div>
                
                </div>
        </section>
    )
}
