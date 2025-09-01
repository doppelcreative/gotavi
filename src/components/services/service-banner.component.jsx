import banner from "@/common/assets/images/service-banner.jpg";
import Image from "next/image";

export default function ServiceBanner() {
  return (
    <div className="pp-breadcrumb-wrapper relative">
      <div className="absolute top-20 left-0 w-full h-full">
        <Image src={banner} alt="#" />
      </div>
      <div className="container mx-auto">
        <div className="pp-page-heading">
          <div className="pp-breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              Services
            </h1>
          </div>
          <ul className="pp-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
