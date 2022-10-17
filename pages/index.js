import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect, useMemo } from "react";
import { ServiceContent, WorkCard } from "../components";
import HeaderTag from "../components/HeaderTag";
//import { useIsInViewPort } from "../customHooks/useInViewPort";

function useIsInViewPort(ref) {
  const [isIntersecting, setIsIntersecting] = useState(true);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    const { current: currentObserver } = observer;

    currentObserver.observe(ref.current);

    return () => {
      currentObserver.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function Home() {
  const scrollRef = useRef();
  const stickyRef = useRef();
  const [stickyContainerHeight, setStickyContainerHeight] = useState(0);

  let isInViewPort = useIsInViewPort(stickyRef);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const stickyContainer = stickyRef.current;

    setStickyContainerHeight(scrollContainer.scrollWidth);

    // console.log(isInViewPort);

    const handleScroll = (e) => {
      //e.preventDefault();

      if (isInViewPort) {
        var isPlaceHolderBelowTop =
          stickyContainer.offsetTop < document.documentElement.scrollTop;

        var isPlaceHolderBelowBottom =
          stickyContainer.offsetTop + stickyContainer.offsetHeight >
          document.documentElement.scrollTop;

        var _canScrollHorizontally =
          isPlaceHolderBelowBottom && isPlaceHolderBelowTop;

        // console.log(_canScrollHorizontally);

        if (_canScrollHorizontally) {
          scrollContainer.scrollLeft += e.deltaY;
        }
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>David Adeola</title>
        <meta
          name="description"
          content="My name is David Adeola. Hire a UI/UX Designer and Front-end developer in React and Javascript"
        />
        <link rel="icon" href="assets/images/logo.png" />
      </Head>

      <div className="container hero">
        <div className="row">
          <div className="column">
            <h3>My name is David Adeola. I am a</h3>
            <h1>
              UX/UI Designer <span className="accent">&</span> Front-End
              Developer
            </h1>
            <h4>
              I am passionate about innovating creative solutions and building
              enjoyable experiences to solve real problems.
            </h4>
          </div>
          <div className="column">
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box3"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <HeaderTag title="Featured Works" />
        <div
          className="main"
          ref={stickyRef}
          style={{
            height: stickyContainerHeight,
          }}
        >
          <div className="work-row" ref={scrollRef}>
            <WorkCard />
            <WorkCard />
            <WorkCard />
          </div>
        </div>
      </div>
      <div className="container">
        <HeaderTag title="I Offer..." />
        <ServiceContent
          title="Web and Mobile Application Interface Design"
          desc="Utilizing Figma, Adobe XD and Framer, I can create storyboards, draw wireframes, and design high fidelity prototypes to visualize your ideas"
        />
        <ServiceContent title="Application Development" />
        <ServiceContent title="User Experience Design" />
      </div>
    </>
  );
}
