import aboutUSImg from "../../../public/images/aboutUs.png";

const aboutData = [
  {
    id: 1,
    title: "Fast platform",
    description:
      "Speed and efficiency is important for any business. We understand that and so we have built a platform that speeds up your entire content marketing process.",
  },
  {
    id: 2,
    title: "Translate your content easily",
    description:
      "Target any country and any language and grow your business internationally. Using our proprietary Content Management System, you can easily manage your multilingual blog under a single dashboard.",
  },
  {
    id: 3,
    title: "Minimalistic design",
    description:
      "We believe in simplicity. That’s why we will make your blog clean and simple in design. Here is a sample of how your blog will look when you build it with Polyblog.",
  },
  {
    id: 4,
    title: "SEO optimized",
    description:
      "SEO is the cornerstone of all your content marketing efforts. Getting organic search traffic from Google is crucial for any blog. That’s why we have spent a lot of resources to make your blog SEO friendly.",
  },
];

export default function About() {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col-md-7">
        <h1 className="my-3 text-info">Why Use Polyblog?</h1>
        <div className="row">
          {aboutData.map((about) => (
            <div className="col-md-6 p-3">
              <h3 className="text-info">
                {about.id}. {about.title}
              </h3>
              <p className="text-secondary">{about.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-5">
        <img src={aboutUSImg} alt="About Us Img" className="img-fluid" />
      </div>
    </div>
  );
}
