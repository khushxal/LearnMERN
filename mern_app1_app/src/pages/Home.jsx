import React from "react";
import "../css/Home.css";
function Home() {
  return (
    <div className="container mb-3">
      <div className="card">
        <div className="row flex-lg-row-reverse align-items-center g-5 my-auto mx-auto">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://picsum.photos/seed/picsum/500/450"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={500}
              height={450}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                fdprocessedid="od5oab"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                fdprocessedid="r2pvtr"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
