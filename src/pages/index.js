import React, { useState, useEffect } from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Head from "../components/Head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Showcase from "../components/Showcase"
import posts from "../../posts.json"
import "./bootstrap.css"
import "./index.css"

export default function App() {
  const [currentOpenShowcase, setCurrentOpenShowcase] = useState(null)

  useEffect(() => {
    function handleEscPress(e) {
      if (e.keyCode === 27) {
        setCurrentOpenShowcase(null)
      }
    }

    document.addEventListener("keydown", handleEscPress)
    return () => {
      document.removeEventListener("keydown", handleEscPress)
    }
  }, [])

  function handleViewCase(e, id) {
    e.preventDefault()
    setCurrentOpenShowcase(id)
  }

  function createMarkup(str) {
    return { __html: str }
  }

  return (
    <>
      <Head />
      <Header />
      <ReactFullpage
        normalScrollElements={".showcase"}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {posts.map((post, i) => (
              <div className="section" key={post.id}>
                <div
                  id="scene-1"
                  className={`scene ${post.id === currentOpenShowcase ? "animate-circle" : ""}`}
                >
                  <div className="scene__container">
                    <div className="scene__content">
                      <header>
                        <h1
                          className="scene__title"
                          dangerouslySetInnerHTML={createMarkup(post.title.rendered)}
                        />
                      </header>
                      <div dangerouslySetInnerHTML={createMarkup(post.content.rendered)} />
                      {i > 0 && (
                        <a href={post.link} onClick={(e) => handleViewCase(e, post.id)}>
                          VIEW CASE <i className="fa fa-chevron-right" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className={`scene__outer-circle scene__outer-circle--${post.acf.theme}`}>
                    <div className="scene__inner-circle" />
                  </div>
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
      {posts
        .filter((post) => post.acf.theme !== "home")
        .map((post) => (
          <Showcase post={post} key={post.id} isActive={post.id === currentOpenShowcase} />
        ))}
      <Footer />
    </>
  )
}
