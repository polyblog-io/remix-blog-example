import headerImg from "../../public/images/headerImg.png";

export default function IndexRoute() {
  return (
    <div>
      {/* Hero Section */}
      <div
        title="Welcome To Polyblog"
        className="row justify-content-between align-items-center my-5"
      >
        <div className="col-md-7">
          <h1 className="fw-bold">
            A Fast And Efficient Content Management System Built For Online
            Businesses
          </h1>
        </div>
        <div className="col-md-5">
          <img className="img-fluid" src={headerImg} alt="Header Image" />
        </div>
      </div>

      {/* FAQ */}
      <h1 className="text-center text-info mb-4 fw-bold">
        Frequently Asked Questions
      </h1>
      <div className="accordion mb-3" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Can I use a custom domain?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, you can use a custom domain with all of our plans. You will
              just have to set up your domain with our system.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What’s the difference between Polyblog and other content
              management systems?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Polyblog is specially designed for multilingual content
              management. There are a lot of benefits of multilingual content
              marketing but usually implementing it is hard. Polyblog makes it
              very easy to manage and promote a multilingual blog.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Do I have to optimize my blog for page speed and other technical
              SEO factors?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Not at all, Polyblog is already optimized for all the vital
              technical SEO factors like page speed, link structure, sitemap,
              meta tags, and more.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Who is Polyblog for?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Polyblog is specially designed for startups that want a fast and
              responsive blog to their start content marketing journey.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Do I need to install plugins and themes?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Polyblog already comes with a clean, responsive theme and all the
              features you will need are pre-installed. This way you can get
              started with your blog immediately and clearly focus on publishing
              high-quality content without worrying too much on technicalities.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Can you show me an example of a blog built with Polyblog?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Sure, check out the blog of one of our top clients:
              https://www.waiterio.com/blog
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
