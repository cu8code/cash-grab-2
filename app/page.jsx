"use client"

import { useEffect } from "react";
import { CallToAction, CompanyTestimonial, Footer, Form } from "./components";
import Testimonials from "./components/testimonial/testimonial";


const testimonialData = [
  {
    title:"Teaming up with Boringmarketing.com is a game-changer",
    text: "Teaming up with Boringmarketing.com is a game-changer. They’re nailing our SEO needs and are amping up our traffic and keyword rankings. Working with them is easy—they're sharp, get our business, and have already pushed us to new heights.",
    author: "Alex Johnson",
    position: "Marketing Manager",
    company: "Innovatech Ltd."
  },
  {
    text: "Working with this team has been an absolute pleasure. Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to our specific needs.",
    author: "Samantha Lee",
    position: "Product Owner",
    company: "TechSphere Solutions"
  },
  {
    text: "I'm truly impressed by the professionalism and high-quality service provided. They delivered on their promises and exceeded our expectations.",
    author: "Michael Brown",
    position: "CEO",
    company: "Brown Industries"
  },
  {
    text: "Their expertise in the field is unmatched and has been critical to the growth and success of our online presence. Highly recommended!",
    author: "Emily Clark",
    position: "Digital Strategist",
    company: "Clark Media"
  },
  {
    text: "From the initial concept to the final product, their attention to detail and creative approach have made a significant impact on our marketing strategy.",
    author: "David Kim",
    position: "Creative Director",
    company: "Kim & Associates"
  },
  {
    text: "The results speak for themselves. We've seen a considerable increase in sales and brand recognition since we started working with this amazing team.",
    author: "Sophia Martinez",
    position: "Sales Director",
    company: "Martinez Retail Group"
  }
];


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
            <CallToAction />
          </div>
        </div>
      </div>
      <div className="sharp-corner__div" />
    </div>
  </div>
  <Testimonials testimonials={testimonialData} />
  <CompanyTestimonial />
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
              style={{ opacity: 1 }}
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
              style={{ opacity: 1 }}
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
              style={{ opacity: 1 }}
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
              style={{ opacity: 1 }}
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
                  website{"'"}s valuation by over 57% by leveraging high-authority
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
  <Footer />
</>

  );
}
