import { CE } from "./lib/modules/input-slot/content-editable/input-slot-content-editable";



export const MyDumbComponent = ({title}) => {
    return <section className="section video" data-section="section5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="left-content">
              <CE.span>our presentation is for you</CE.span>
              <CE.h4 />
              <p>
                <CE.rawText sectionName="p1" />
                <CE.a
                  rel="nofollow"
                  href="https://templatemo.com/contact"
                  target="_parent"
                >
                  contact TemplateMo
                </CE.a>
                for details.
                <br />
                <br />
                Suspendisse tincidunt, magna ut finibus rutrum, libero dolor
                euismod odio, nec interdum quam felis non ante.
              </p>
            <VideoSectionCTAButton />
            </div>
          </div>
          <div className="col-md-6">
            <article className="video-item">
              <div className="video-caption">
                <CE.h4 sectionName="videoTitle">Power HTML Template</CE.h4>
              </div>
              <figure>
                <a
                  href="https://www.youtube.com/watch?v=r9LtOG6pNUw"
                  className="play"
                >
                  <img src="assets/images/main-thumb.png" />
                </a>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
}

export const VideoSectionCTAButton = ({sectionName="cta-button"}) => {
    sectionName = `cta-button_${sectionName}`;
    return <div className="main-button">
    <CE.a
      rel="nofollow"
      href="https://fb.com/templatemo"
      target="_parent"
      sectionName={sectionName}
    >
      External URL
    </CE.a>
  </div>
}