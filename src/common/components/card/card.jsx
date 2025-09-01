import Image from "next/image";

export default function Card({img, title, des}) {
  return (
    <div className="wow fadeInUp md:w-[32%] w-full" data-wow-delay=".3s">
      <div className="pp-offer-box-item mt-0">
        <div className="pp-offer-icon">
          <Image src={img} alt="" />
        </div>
        <div className="pp-offer-content">
          <h3>{title}</h3>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}
