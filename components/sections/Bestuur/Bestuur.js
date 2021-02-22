import "twin.macro";
import PropTypes from "prop-types";
import Section from "@/ui/Section";
import AbActis from "./AbActis";
import BestuursLid, { bestuursLidPropTypes } from "./BestuursLid";

// eslint-disable-next-line camelcase
const Bestuur = ({ praeses, ab_actis, quaestor }) => {
  return (
    <Section>
      <Section.Title>Het bestuur</Section.Title>

      <Section.Content tw="grid grid-cols-2 grid-rows-3">
        <AbActis
          functie="Ab-actis"
          {...ab_actis.lid}
          telefoonnummer={ab_actis.telefoonnummer}
          email={ab_actis.email}
          borrel={ab_actis.borrel}
        />

        <BestuursLid
          tw="row-start-2 col-start-2 flex-row-reverse"
          functie="Praeses"
          {...praeses.lid}
        />
        <BestuursLid tw="row-start-3" functie="Quaestor" {...quaestor.lid} />
      </Section.Content>
    </Section>
  );
};

export const bestuurPropTypes = {
  ab_actis: PropTypes.shape({
    lid: PropTypes.shape(bestuursLidPropTypes),
  }),
  praeses: PropTypes.shape({
    lid: PropTypes.shape(bestuursLidPropTypes),
  }),
  quaestor: PropTypes.shape({
    lid: PropTypes.shape(bestuursLidPropTypes),
  }),
};

Bestuur.propTypes = bestuurPropTypes;

export default Bestuur;
