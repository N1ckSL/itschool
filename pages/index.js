import { Hero } from "../components/sections/_home/Hero/Hero";
import { Layout } from "../components/Layout/Layout";
import { Courses } from "../components/sections/_home/Carrousel/Courses";
import { Pregatire } from "../components/sections/_home/Pregatire/Pregatire";
import { Despre } from "../components/sections/_home/Despre/Despre";
import { Testimoniale } from "../components/sections/_home/Testimoniale/Testimoniale";
import { TheHead } from "../components/Head/Head";

const Home = () => {
  const metas = [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "title",
      content: "IT School | Cursuri programare",
    },
  ];

  return (
    <>
      <TheHead metas={metas} />
      <Layout>
        <Hero />
        <Courses />
        <Pregatire />
        <Despre />
        <Testimoniale />
        <section>landing about</section>
        <section>lanidng testimoniale</section>
      </Layout>
    </>
  );
};

export default Home;
