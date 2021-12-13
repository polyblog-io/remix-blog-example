import headerImg from "../../public/images/headerImg.png";

export default function IndexRoute() {
  return (
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
  );
}
