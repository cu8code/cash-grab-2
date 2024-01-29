"use client"

import { useEffect } from "react";
import { Testimonial } from "./components";

export default function Home() {
  useEffect(() => {
    const typekitScript = document.createElement('script');
    typekitScript.src = 'https://use.typekit.net/hvw1atg.js';
    typekitScript.type = 'text/javascript';
    typekitScript.onload = () => {
      try {
        Typekit.load();
      } catch (e) {
        console.error('Error loading Typekit script:', e);
      }
    };

    document.head.appendChild(typekitScript);

    // Optional: Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(typekitScript);
    };
  }, []);
  return (
    <>
  <div
    data-animation="default"
    data-collapse="small"
    data-duration={400}
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="navbar w-nav"
  >
    <div className="container-3 w-container">
      <a
        href="index.html"
        aria-current="page"
        className="brand w-nav-brand w--current"
      >
        <div className="text-block">
          BlackBook.<span className="text-span-16">digital</span>
          <span className="text-span-12" />
        </div>
      </a>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <a href="website-management.html" className="navlink w-nav-link">
          Website Management
        </a>
        <a href="about.html" className="navlink w-nav-link">
          About
        </a>
        <a href="blog.html" className="navlink w-nav-link">
          Blog
        </a>
        <a
          href="https://calendly.com/blackbookdigital"
          id="cB1"
          className="nav__main-button w-nav-link"
        >
          Book a meeting
        </a>
      </nav>
      <div className="menu-button w-nav-button">
        <div className="w-icon-nav-menu" />
      </div>
    </div>
  </div>
  <div className="div-block-8">
    <div className="section is--hero">
      <div className="bg-faded" />
      <div className="container is--vertical">
        <div className="hero is--home">
          <div className="hero-hero">
            <div className="hero-wrapper">
              <h1 className="h1 hero-home top-row">Generate AI-assisted SEO 2.0 stratergy that 10x</h1>
            </div>
            <div className="hero-wrapper">
              <h1 className="h1 hero-home top-row">business sales, profit and brand growth </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="sharp-corner__div" />
    </div>
  </div>
  <Testimonial />
  <div className="page-wrapper">
    <div className="section is--yellow">
      <div
        style={{
          WebkitTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
        }}
        className="container is--banner is--masters"
      >
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
      </div>
    </div>
    <div className="section is--left is--dark">
      <div className="container is--vertical">
        <div className="optimize-head">
          <img
            src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40073113a1e76_optimize.svg"
            loading="lazy"
            alt=""
            className="optimize-head__eyebrow"
          />
          <div className="header-header">
            <h2 letters-slide-up="" text-split="" className="h2">
              Experience a Rapid Transformation
            </h2>
          </div>
        </div>
        <div className="features">
          <div className="features-intro left-align">
            <img
              src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4000d4d3a1e61_dollar.svg"
              loading="lazy"
              alt=""
              className="features-head__image"
            />
            <h4
              letters-slide-up=""
              text-split=""
              className="features-head__header"
            >
              Your website isn’t making enough money.
            </h4>
          </div>
          <div className="features-wrapper">
            <div
              data-w-id="ebc29258-75e0-75dc-1cf3-877176d21d5e"
              style={{ opacity: 0 }}
              className="feature"
            >
              <div className="feature-header">Where you are</div>
              <div className="feature-text">
                You’ve invested in a website but you’re not seeing the returns
                you hoped for.
              </div>
            </div>
            <div
              data-w-id="ad80faeb-da7c-51f7-415e-a9ec0ddd403a"
              style={{ opacity: 0 }}
              className="feature"
            >
              <div className="feature-header">Where you can be</div>
              <div className="feature-text">
                Your website is now a passive income stream, and you’re ready
                for your next digital asset.
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="features-intro left-align">
            <img
              src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e400c7193a1e65_downArrow.svg"
              loading="lazy"
              alt=""
              className="features-head__image"
            />
            <h4
              letters-slide-up=""
              text-split=""
              className="features-head__header"
            >
              You’re losing out on website revenue.
            </h4>
          </div>
          <div className="features-wrapper">
            <div
              data-w-id="1721a034-25cf-53f9-a6c8-212694a34bdd"
              style={{ opacity: 0 }}
              className="feature"
            >
              <div className="feature-header">Where you are</div>
              <div className="feature-text">
                Struggling to produce content consistently, be on top of SEO
                updates, and tackle technical back-end hiccups?
              </div>
            </div>
            <div
              data-w-id="1721a034-25cf-53f9-a6c8-212694a34be2"
              style={{ opacity: 0 }}
              className="feature"
            >
              <div className="feature-header">Where you can be</div>
              <div className="feature-text">
                Sipping a margarita on a beach, because BlackBook Digital is
                taking care of your website maintenance and growth.&nbsp;
              </div>
            </div>
          </div>
        </div>
        <div className="supercharge">
          <h3
            data-w-id="2ca1aaaa-bb35-73ab-71ab-87d655b62c49"
            style={{ opacity: 0 }}
            className="supercharge-text"
          >
            Supercharge your
            <br />
            Website Growth
          </h3>
          <div className="supercharge-glow" />
        </div>
      </div>
    </div>
    <div className="section is--grey is--short is--border">
      <div className="container is--spread">
        <div className="service-bottom">
          <img
            src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e400134b3a1e5e_services.svg"
            loading="lazy"
            alt=""
          />
          <div letters-slide-up="" text-split="" className="services-main">
            We’ll create an actionable strategy <em>and</em>
            grow your website, end-to-end.
          </div>
        </div>
        <div className="service-image">
          <div className="service-image__rotating">
            <img
              src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e400ddb73a1e7a_Button_Circular.svg"
              loading="lazy"
              data-w-id="408d8493-d6bd-9a28-3428-bf07a71d4ed4"
              alt=""
              className="service-image__rotating-button"
            />
            <img
              src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4002a773a1e7e_laptop.svg"
              loading="lazy"
              alt=""
              className="service-image__rotating-laptop"
            />
          </div>
          <img
            src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40082e93a1e90_service.png"
            loading="lazy"
            sizes="(max-width: 479px) 95vw, (max-width: 767px) 91vw, (max-width: 991px) 93vw, 36vw"
            srcSet="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40082e93a1e90_service-p-500.png 500w, https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40082e93a1e90_service.png 539w"
            alt=""
            className="image-11"
          />
        </div>
        <div className="service-top">
          <div
            data-w-id="55287570-7b1e-ad77-bd1c-5c210ed2151c"
            style={{
              WebkitTransform:
                "translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 30px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            className="services-text"
          >
            Our no-frills approach focuses on building authority through
            high-quality content and audience-focused search intent.
          </div>
          <a id="cB3" href="index.html#" className="button w-inline-block">
            <div className="button-text">Learn more</div>
            <img
              src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e400e2cf3a1e92_buttonArrow.svg"
              loading="lazy"
              alt=""
              className="button-arrow"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="section is--yellow">
      <div
        style={{
          WebkitTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
        }}
        className="container is--banner is--masters"
      >
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
      </div>
    </div>
    <div
      data-w-id="a328f88b-3771-c789-4047-0729bcdcef02"
      className="section is--graph is--relative"
    >
      <div className="container is--vertical is--relative is--graph-container">
        <div className="capabilities-wrapper">
          <div className="capabilities-head">
            <div className="capabilities-header">
              <h2 letters-slide-up="" text-split="" className="h2">
                What we are
                <br />
                capable of
              </h2>
            </div>
            <div className="capabilities-subheader is--max-width">
              <img
                src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e400e4683a1e7d_capabilities.svg"
                loading="lazy"
                alt=""
                className="capabilities-subheader__img"
              />
              <div
                letters-slide-up=""
                text-split=""
                className="subheader is--semibold"
              >
                BlackBook Digital’s past clients have top-ranking websites that
                dominate their niches, leaving competition eating dust.
              </div>
            </div>
          </div>
          <div className="capabilities-graph">
            <div className="graph-indicator">
              <div className="graph-dot" />
              <div className="graph-dot__glow" />
            </div>
            <img
              src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40023403a1e8d_graphLine.png"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 93vw, 90vw"
              srcSet="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40023403a1e8d_graphLine-p-500.png 500w, https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40023403a1e8d_graphLine-p-800.png 800w, https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40023403a1e8d_graphLine-p-1080.png 1080w, https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40023403a1e8d_graphLine.png 1210w"
              alt=""
              className="graph-image"
            />
            <div className="capabilities-graph__bg-red" />
            <div className="capabilities-graph__bg-green" />
            <div className="capabilities-cash">
              <div className="capabilities-text__number">$9,000</div>
            </div>
            <div className="capabilities-text">
              We've a proven record of
              <br />
              increasing website revenue
              <br />
              by 80% within 4 months.
            </div>
            <div className="service-image__rotating is--keep-scrolling">
              <img
                src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/645d4729da6e53d4b0a269fe_Keep%20Scrolling%20Circle-out.svg"
                loading="lazy"
                data-w-id="14a1176e-fd6b-260c-ca7c-0c69aa61b758"
                alt=""
                className="service-image__rotating-button"
              />
              <img
                src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/645d472f7b3b815ec384c89b_Keep%20Scrolling%20Circle-middle.svg"
                loading="lazy"
                alt=""
                className="service-image__rotating-laptop is--aligned"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container is--vertical">
        <div className="record-head">
          <div className="record-header">
            <h2 letters-slide-up="" text-split="" className="h2">
              Our Track
              <br />
              Record
            </h2>
          </div>
          <div className="record-subheader">
            <img
              src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4000c7a3a1e75_case.svg"
              loading="lazy"
              alt=""
              className="record-subheader__img"
            />
            <div
              letters-slide-up=""
              text-split=""
              className="subheader is--semibold"
            >
              Are you sure you want to lose out on staggering ROI? Stop wasting
              your website’s potential. Contact us today.
            </div>
            <a
              id="cB4"
              href="index.html#"
              target="_blank"
              className="button is--mt20 w-inline-block"
            >
              <div className="button-text">Book a meeting</div>
              <img
                src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e400e2cf3a1e92_buttonArrow.svg"
                loading="lazy"
                alt=""
                className="button-arrow"
              />
            </a>
          </div>
        </div>
        <div
          data-w-id="6e024bb3-6f19-5465-8a3a-6c4aba5fe04a"
          style={{
            WebkitTransform:
              "translate3d(0, 120px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            MozTransform:
              "translate3d(0, 120px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            msTransform:
              "translate3d(0, 120px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            transform:
              "translate3d(0, 120px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
            opacity: 0
          }}
          className="record-images"
        >
          <div className="record-image">
            <div className="record-image__container">
              <h4 className="record-image__brand">Content Business</h4>
              <div className="record-image__wrap">
                <h4 className="record-image__data">
                  <span className="number">+57%</span> Valuation |{" "}
                  <span className="number">+100%</span>Visitors
                </h4>
                <div className="record-image__text">
                  In less than six months, we significantly boosted the
                  website's valuation by over 57% by leveraging high-authority
                  SEO practices, optimizing content to align perfectly with
                  search intent, and increasing visitors to the site by over
                  100%.
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="record-image affiliate">
            <div className="record-image__container">
              <h4 className="record-image__brand">Affiliate Website</h4>
              <div className="record-image__wrap">
                <h4 className="record-image__data">
                  <span className="number">+45%</span> Visitors |{" "}
                  <span className="number">61.8%</span> Revenue Increase
                </h4>
                <div className="record-image__text">
                  We successfully acquired an affiliate website in the Outdoors
                  niche, strategically leveraging SEO, strong content, and
                  targeted audience engagement to increase the valuation by an
                  impressive 70% growing the asset from $440K to $752K.
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section is--short">
      <div className="container is--vertical is--left">
        <div className="clients-head">
          <h3 className="clients-h3">
            What our
            <br />
            clients say
          </h3>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-header">
                “Working with BlackBook Digital has been an amazing experience
                thus far!”
              </div>
              <div className="slide-text">
                I have bought one website from them and the whole process was
                super easy. Mohit and the team were excellent in explaining my
                options and vetting the sites. Since acquisition, things have
                been very smooth and I have been getting regular detailed
                reports with performance of my site. I am really happy with the
                transparency and the returns. Hope to be able to do future
                investments with them and would highly recommend them to others!
              </div>
              <div className="slide-footer">
                <img
                  alt=""
                  loading="lazy"
                  src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  className="slide-footer__avatar"
                />
                <div className="slide-footer__person">
                  <div className="slide-footer__person-name">Taabish I.</div>
                  <div className="slide-footer__person-position">
                    Entrepreneur &amp; Investor
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-header">
                "Working with Mohit and the entire BlackBook team has been a
                great experience..."
              </div>
              <div className="slide-text">
                “Working with Mohit and the entire BlackBook team has been a
                great experience - they are experts at finding and evaluating
                website investment opportunities. Additionally, I have found
                BlackBook to operate with the highest integrity. When we ran
                into an issue with a deal during due diligence, the BlackBook
                team acted with experience and professionalism to work with all
                parties to achieve an optimal outcome. I plan to work with
                BlackBook in the future and would recommend them to any
                investors looking to invest in websites.
              </div>
              <div className="slide-footer">
                <img
                  alt=""
                  loading="lazy"
                  src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  className="slide-footer__avatar"
                />
                <div className="slide-footer__person">
                  <div className="slide-footer__person-name">
                    Jason Mitchell
                  </div>
                  <div className="slide-footer__person-position">
                    Partner, GSM Sales LLC
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-header">
                “Mohit and his team at BlackBook have been excellent to work
                with.”
              </div>
              <div className="slide-text">
                They are friendly and reliable. Mohit was able to negotiate tens
                of thousands off the asking price of our first website purchase,
                and his team manage it completely passively for us. We are
                receiving an annual 22.5% return on our investment.
              </div>
              <div className="slide-footer">
                <img
                  src="https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  loading="lazy"
                  alt=""
                  className="slide-footer__avatar"
                />
                <div className="slide-footer__person">
                  <div className="slide-footer__person-name">
                    Khusbhoo Kherajani
                  </div>
                  <div className="slide-footer__person-position">
                    Entrepreneur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clients-nav">
          <img
            src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4007e073a1e69_yellowArrow.svg"
            loading="lazy"
            alt=""
            className="client-nav__arrow button-prev"
          />
          <img
            src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001e043a1e6e_yellowArrow2.svg"
            loading="lazy"
            alt=""
            className="client-nav__arrow button-next"
          />
        </div>
      </div>
    </div>
    <div className="section is--contact is--top_margin_150px">
      <div className="container is--bottom">
        <div className="consult-main">
          <div className="div-block-14">
            <div className="div-block-17">
              <img
                src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4003df93a1e78_getInTouch.svg"
                loading="lazy"
                alt=""
                className="consult-eyebrow"
              />
              <h2 letters-slide-up="" text-split="" className="consult-header">
                Request a Consultation
              </h2>
            </div>
            <div className="div-block-15">
              <div className="consult-text is--no_bottom_margin">
                <div
                  letters-slide-up=""
                  text-split=""
                  className="consult-text__txt"
                >
                  Get the website growth you need.&nbsp;We’ll find out what’s
                  been going wrong with your approach, and get you back on
                  track. Book a strategy call now.
                </div>
              </div>
            </div>
          </div>
          <div className="shape" />
          <div className="consult-footer is--hidden">
            <a
              id="cB5"
              href="index.html#"
              className="button is--cta w-inline-block"
            >
              <div className="button-text">Book a meeting</div>
              <img
                src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e400e2cf3a1e92_buttonArrow.svg"
                loading="lazy"
                alt=""
                className="button-arrow"
              />
            </a>
            <div className="div-block-9">
              <a href="index.html#" className="social-link w-inline-block">
                <img
                  src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40025683a1e5a_linked.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a href="index.html#" className="social-link w-inline-block">
                <img
                  src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e40070363a1e6c_twitter.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="from-wrapper">
            <div className="form-block w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                data-wf-page-id="642ac36c89e40042813a1e50"
                data-wf-element-id="c20d16ed-bb87-a22c-959b-fe3f46ef2dc0"
              >
                <div className="row-form">
                  <div className="text-block-22">My name is</div>
                  <input
                    className="form-field w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="Your Name"
                    type="text"
                    id="name"
                    required=""
                  />
                  <div className="text-block-22">from</div>
                  <input
                    className="form-field w-input"
                    maxLength={256}
                    name="CompanyWebsite"
                    data-name="CompanyWebsite"
                    placeholder="Your Company's Website"
                    type="text"
                    id="CompanyWebsite"
                    required=""
                  />
                </div>
                <div className="row-form">
                  <div className="text-block-22">I heard about you from</div>
                  <input
                    className="form-field w-input"
                    maxLength={256}
                    name="Hear-From"
                    data-name="Hear From"
                    placeholder="Where did you hear about us?"
                    type="text"
                    id="Hear-From"
                    required=""
                  />
                </div>
                <div className="row-form">
                  <div className="text-block-22">My budget is</div>
                  <div className="div-block-16">
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        id="1-000"
                        type="radio"
                        name="Budget-Selection"
                        data-name="Budget Selection"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        defaultValue="<$1,000"
                      />
                      <span
                        className="radio-label w-form-label"
                        htmlFor="1-000"
                      >
                        &lt;$1,000
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        id="2999--3999"
                        type="radio"
                        name="Budget-Selection"
                        data-name="Budget Selection"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        defaultValue="$2999-$3999"
                      />
                      <span
                        className="radio-label w-form-label"
                        htmlFor="2999--3999"
                      >
                        $1000-$2500
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        id="4000-or-above"
                        type="radio"
                        name="Budget-Selection"
                        data-name="Budget Selection"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        defaultValue="$4000 or above"
                      />
                      <span
                        className="radio-label w-form-label"
                        htmlFor="4000-or-above"
                      >
                        $2500-$5000{" "}
                      </span>
                    </label>
                    <label className="radio-button-field w-radio">
                      <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
                      <input
                        id="4000-or-above"
                        type="radio"
                        name="Budget-Selection"
                        data-name="Budget Selection"
                        style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                        defaultValue="$4000 or above"
                      />
                      <span
                        className="radio-label w-form-label"
                        htmlFor="4000-or-above"
                      >
                        $5000 +
                      </span>
                    </label>
                  </div>
                </div>
                <div className="row-form">
                  <div className="text-block-22">Get back &nbsp;at</div>
                  <input
                    className="form-field w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="Your Email"
                    type="email"
                    id="Email"
                    required=""
                  />
                </div>
                <div className="form-button__wrapper">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button is--form-button w-button"
                    defaultValue="Submit"
                  />
                </div>
              </form>
              <div className="success-message w-form-done">
                <div className="text-block-23">
                  Thank you! Your submission has been received!
                </div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section is--yellow">
      <div
        style={{
          WebkitTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          MozTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          msTransform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
          transform:
            "translate3d(500px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
        }}
        className="container is--banner is--masters"
      >
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
        <div className="banner-text">MASTERS OF GROWTH</div>
        <img
          src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4001b023a1e6d_star.svg"
          loading="lazy"
          alt=""
          className="banner-image"
        />
      </div>
    </div>
  </div>
  <div className="footer">
    <div className="div-block">
      <div className="footer-main">
        <h5 className="footer-logo">
          BlackBook.<span className="text-span-17">digital</span>
          <span className="text-span-3" />
        </h5>
        <div className="footer-main__text">
          hello@blackbook.digital
          <br />
          801, Woodbridge Commons Way, Iselin, NJ 08830
        </div>
        <div className="footer-main__copyright">
          Copyright © 2023 BlackBook Digital
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-links">
          <img
            src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4007e4d3a1e67_quick.svg"
            loading="lazy"
            alt=""
            className="footer-image"
          />
          <a
            href="index.html"
            aria-current="page"
            className="footer-link w--current"
          >
            Home
          </a>
          <a href="website-management.html" className="footer-link">
            Website Management
          </a>
          <a href="about.html" className="footer-link">
            About
          </a>
          <a href="blog.html" className="footer-link">
            Blog
          </a>
        </div>
        <div className="footer-policy">
          <img
            src="https://assets-global.website-files.com/642ac36c89e40068e23a1e52/642ac36c89e4007d7c3a1e62_policy.svg"
            loading="lazy"
            alt=""
            className="footer-image"
          />
          <a href="index.html#" className="footer-link">
            Privacy Policy
          </a>
          <a href="index.html#" className="footer-link">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </div>
  </div>
</>

  );
}
