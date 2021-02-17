import "twin.macro";
import Head from "next/head";

import { fetchApi } from "../lib/api";

import OverOns from "../components/sections/OverOns";
import Leden from "../components/sections/Leden";
import Bestuur from "../components/sections/Bestuur";
import Stats from "../components/sections/Stats";
import Huis from "../components/sections/Huis";
import Aanbevelingen from "../components/sections/Aanbevelingen";

const Home = ({ leden, bestuur, stats, over_ons, kamers }) => {
  return (
    <>
      <OverOns overOns={over_ons} />
      <Stats {...stats} />
      <Leden leden={leden} />
      <Huis kamers={kamers} />
      <Bestuur {...bestuur} />
      <Aanbevelingen />
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const home = await fetchApi("/home-pagina");
  const leden = await fetchApi("/lids?_sort=nummer:DESC&jaar_ncontains=KKM");
  const kkms = await fetchApi("/lids?_sort=nummer:ASC&jaar_contains=KKM");
  const bestuur = await fetchApi("/bestuur");
  const emails = await fetchApi("/emails");
  const telefoonnummers = await fetchApi("/telefoonnummers");
  const kamers = await fetchApi("/kamers");

  return {
    props: {
      kamers,
      emails,
      telefoonnummers,
      over_ons: home.over_ons,
      leden: [...leden, ...kkms],
      bestuur,
      stats: {
        leden: leden.length,
        kkms: kkms.length,
        reunisten: home.reunisten,
        leden_op_reis: home.leden_op_reis,
      },
    },
  };
};

export default Home;
