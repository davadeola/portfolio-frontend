import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
        <h3>My name is David Adeola</h3>
        <h1>UX/UI Designer</h1>
        <h1 className="accent">+</h1>
        <h1>Front-End Developer</h1>

        <button type="button" className="btn">
          Let's Talk
        </button>
      </div>

      <div className="container">
        <h2>Projects</h2>
      </div>
    </>
  );
}
