import React from "react"

export default function Showcase({ post, isActive }) {
  const activeClass = isActive ? "showcase--active" : ""

  return (
    <div className={`showcase showcase--${post.acf.theme} ${activeClass} showcase--modal`}>
      {/* <div className="showcase__header container">
        <a href="http://www.appletreelabs.com/" className="showcase__home">
          <img />
        </a>
      </div> */}
      <div className="showcase__top-bg" />
      <div className="showcase__content container">
        <div className="showcase__content-row row">
          <div className="col-md-6 col-lg-4">
            <h1>My super dooper title</h1>
            <hr className="showcase__separator" />
            <h2>{post.acf.title_1}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.acf.body_1 }} />
          </div>
          <div className="col-md-6 offset-lg-2 showcase__mobile-center-text">
            <img
              alt={post.acf.title_1}
              src={require(`../images/${post.acf.image_1}`)}
              className="showcase__image-1"
            />
          </div>
        </div>
        <div className="showcase__content-row row">
          <div className="col-md-6 col-md-push-6">
            <h2>{post.acf.title_2}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.acf.body_2 }} />
          </div>
          <div className="col-md-6 col-md-pull-6 showcase__mobile-center-text">
            <img
              alt={post.acf.title_2}
              src={require(`../images/${post.acf.image_2}`)}
              className="showcase__image-2"
            />
          </div>
        </div>
        <div className="showcase__content-row row">
          <div className="col-md-6">
            <h2>{post.acf.title_3}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.acf.body_3 }} />
            <a
              href={post.acf.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary showcase__link"
            >
              View site
            </a>
            {/* <h3>{post.acf.header}</h3>
            <a href="mailto:hi@appletreelabs.com">
              hi@appletreelabs.com
            </a> */}
          </div>
          <div className="col-md-6 showcase__mobile-center-text">
            <img
              alt={post.acf.title_3}
              src={require(`../images/${post.acf.image_3}`)}
              className="showcase__image-3"
            />
          </div>
        </div>
      </div>
      {/* <div className="showcase__bottom-bg">
        <div className="showcase__bottom-content container" />
      </div> */}
    </div>
  )
}
