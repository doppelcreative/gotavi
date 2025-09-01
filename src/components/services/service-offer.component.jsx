import Image from "next/image";
import { SERVICES } from "./service.constant";
import Card from "@/common/components/card/card";

export default function ServiceOffer() {
  return (
    <section className="pp-offer-section section-padding fix section-bg">
      <div className="container mx-auto md:px-[0px] px-[20px]">
        <div className="flex flex-wrap gap-4">
          {SERVICES?.map((item, i) => {
            return (
              <Card img={item.img} title={item.title} des={item.des} key={i.toString()} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
