import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Features({SECTION}) {
  return (
    <section className="hosting-section fix">
      <div className="container mx-auto lg:px-[10px] px-[20px]">
        <div className="hero-content">
          <div className="pp-section-title-area">
            <div className="pp-section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                {SECTION.heading}
              </h2>
              <p>{SECTION.desc}</p>
              <h2
                className="wow fadeInUp subhero"
                data-wow-delay=".3s"
                dangerouslySetInnerHTML={{ __html: SECTION.subHeading }}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-2">
          {SECTION.DATA.map((item, i) => (
            <div key={i} className="wow fadeInUp" data-wow-delay=".2s">
              <div className="pp-hosting-box-items">
                <div className="icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div className="content">
                  <h3>
                    <Link href="#">{item.title}</Link>
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pp-section-title-area">
          <div className="pp-section-title-quote">
            <h2
              className="wow fadeInUp"
              data-wow-delay=".3s"
              dangerouslySetInnerHTML={{ __html: SECTION.quote }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
