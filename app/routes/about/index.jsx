import aboutUSImg from "../../../public/images/aboutUs.png";

export default function About() {
  return (
    <div className="row justify-content-between align-items-center">
      <div className="col-md-6">
        <h1>Why Use Polyblog?</h1>
        <p>
          Grow your business with content marketing. Reach an international
          audience and grow your business drastically.
        </p>
      </div>
      <div className="col-md-6">
        <img src={aboutUSImg} alt="About Us Img" className="img-fluid" />
      </div>
    </div>
  );
}
