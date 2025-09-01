import React from "react";
import HomeBanner from "./home-banner.component";
import WhatDo from "./what-do.component";
import OurMarketing from "./our-marketing.component";
import GotvistMovement from "./gotvist-movement.component";
import Features from "@/common/components/features/features";
import "@fortawesome/fontawesome-free/css/all.min.css";
import OurTeam from "@/common/components/team/team";
import team2 from "@/common/assets/images/eli.png"
import team3 from "@/common/assets/images/michelle.png"
import team4 from "@/common/assets/images/elishah.png"
import team1 from "@/common/assets/images/shai.png"
import StreamLine from "@/common/components/stream-line/streamLine";

export default function HomePage() {
  const FEATURES = {
    heading: "What We Do",
    subHeading: "Gotavi is your <span>all-in-one command center</span>.",
    desc: "Dozens of providers. Endless paperwork. Too many decisions.",
    quote:
      "Whether you're a founder or a bank, gotavi is the orchestration layer that <span class='highlighter '>brings it all together</span>.",
      DATA : [
    {
      title: "File with confidence",
      desc: "Complete business formation with all required documentation",
      icon: "fa-file-text",
    },
    {
      title: "Open your bank account in mins",
      desc: "Instant account setup with trusted banking partners",
      icon: "fa-bank",
    },
    {
      title: "Setup your Pay-ins and Pay-Outs",
      desc: "Full operational setup without the headache",
      icon: "fa-credit-card",
    },
    {
      title: "Seamless Payro",
      desc: "Full operational setup without the headache",
      icon: "fa-shopping-cart",
    },
    {
      title: "Get Covered",
      desc: "Stay tuned for our new AI and marketing site!",
      icon: "fa-umbrella",
    },
    {
      title: "Gotavi.io",
      desc: "Full operational setup without the headache",
      icon: "fa-desktop",
    },
  ]
  };

  const TEAM = {
          heading: "Meet our Team",
          desc: "Experienced leaders from fintech, banking, and enterprise software, united by a mission to simplify business formation.",
          MEMBER : [
          {
              name:"Shai Stern",
              designation:"Founder, Chairman",
              img:team1,
              desc:"Shai is a seasoned entrepreneur with over 3 decades of experience building businesses in corporate services, fintech and payments. AST Stock Plan, Vintage Filings, VCheck Global, VCorp Services, VStock Transfer, CheckAlt."
          },
           {
              name:"Michelle Miklosey",
              designation:"Co-Founder, Ops & Admin",
              img:team2,
              desc:"Michelle brings 15 years of experience from VCorp Services and CheckAlt, where she cross-functionally led critical business operations, client experience, and customer support initiatives."
          },
           {
              name:"Elishah Herman",
              designation:"Co-Founder, Technology",
              img:team3,
              desc:"Elishan developed Gotavi's technology, ensuring a user-friendly and scalable platform. With over a decade at HSBC in marketing technology and data, he leverages data to identify new opportunities."
          },
           {
              name:"Eli Lauer",
              designation:"Co-Founder, Strategy & Product",
              img:team4,
              desc:"Eli leads Gotavi's strategy, product development, go-to-market, and partnerships. He brings extensive experience from Deloitte, Cross River, JPMorgan, Amex, and Worldpay"
          }
          ]
      
  }

  return (
    <>
      <HomeBanner />
      <Features SECTION={FEATURES} />
      <WhatDo />
      <OurMarketing />
      <GotvistMovement />
      <OurTeam TEAM={TEAM} />
      <StreamLine />
  
    </>
  );
}
