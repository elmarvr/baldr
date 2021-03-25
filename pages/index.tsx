import "twin.macro";
import { GetStaticProps } from "next";
import Navigation from "@/ui/Navigation";
import Hero, { HeroProps } from "@/sections/Hero";
import OverOns, { OverOnsProps } from "@/sections/OverOns";
import Statistieken, { StatistiekenProps } from "@/sections/Statistieken";
import Bestuur from "@/sections/Bestuur";
import Huis from "@/sections/Huis";

import { fetchApi } from "@/lib/api";

type HomeProps = OverOnsProps & StatistiekenProps & HeroProps;

const Home = ({ overOns, stats, omslagFoto, omslagTekst }: HomeProps) => {
  return (
    <>
      <Navigation />
      <Hero omslagFoto={omslagFoto} omslagTekst={omslagTekst} />
      <OverOns overOns={overOns} />
      <Statistieken stats={stats} />
      <Bestuur />
      <Huis />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const home = await fetchApi("/home-pagina");
  const stats = await fetchApi("/statistieks");

  return {
    props: {
      omslagTekst: home.omslag_tekst,
      omslagFoto: home.omslagfoto,
      overOns: home.over_ons,
      stats,
    },
  };
};

export default Home;
