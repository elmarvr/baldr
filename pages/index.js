import "twin.macro";
import PropTypes from "prop-types";
import { fetchApi } from "../lib/api";

import OverOns from "../components/sections/OverOns";
import Leden, { ledenPropTypes } from "../components/sections/Leden/Leden";
import Bestuur, {
  bestuurPropTypes,
} from "../components/sections/Bestuur/Bestuur";
import Stats, { statsPropTypes } from "../components/sections/Stats/Stats";
import Huis, { huisPropTypes } from "../components/sections/Huis/Huis";
import Aanbevelingen, {
  aanbevelingenPropTypes,
} from "../components/sections/Aanbevelingen/Aanbevelingen";

const Home = ({ leden, bestuur, stats, over_ons, kamers, aanbevelingen }) => {
  return (
    <>
      <OverOns overOns={over_ons} />
      <Stats {...stats} />
      <Leden leden={leden} />
      <Huis kamers={kamers} />
      <Bestuur {...bestuur} />
      <Aanbevelingen aanbevelingen={aanbevelingen} />
    </>
  );
};

// Home.propTypes = {
//   leden: PropTypes.shape(ledenPropTypes.ledxen),
//   bestuur: PropTypes.shape(bestuurPropTypes),
//   stats: PropTypes.shape(statsPropTypes),
//   over_ons: PropTypes.string,
//   kamers: PropTypes.shape(huisPropTypes.kamers),
//   aanbevelingen: PropTypes.shape(aanbevelingenPropTypes.aanbevelingen),
// };

export const getStaticProps = async (ctx) => {
  const home = await fetchApi("/home-pagina");
  const leden = await fetchApi("/lids?_sort=nummer:DESC&jaar_ncontains=KKM");
  const kkms = await fetchApi("/lids?_sort=nummer:ASC&jaar_contains=KKM");
  const bestuur = await fetchApi("/bestuur");
  const emails = await fetchApi("/emails");
  const telefoonnummers = await fetchApi("/telefoonnummers");
  const kamers = await fetchApi("/kamers");
  const aanbevelingen = await fetchApi("/aanbevelings");

  return {
    props: {
      aanbevelingen,
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
