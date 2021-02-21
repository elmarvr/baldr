import "twin.macro";
import PropTypes from "prop-types";
import Section from "@/ui/Section";
import Lid, { lidPropTypes } from "./Lid";

// eslint-disable-next-line camelcase
const Bestuur = ({ praeses, ab_actis, quaestor }) => {
  return (
    <Section>
      <Section.Title>Het bestuur</Section.Title>

      <Section.Content tw="grid grid-cols-2 grid-rows-3">
        <Lid functie="Ab-actis" {...ab_actis.lid} bounce />

        <Lid
          tw="row-start-2 col-start-2 flex-row-reverse"
          functie="Praeses"
          {...praeses.lid}
        />
        <Lid tw="row-start-3" functie="Quaestor" {...quaestor.lid} />
      </Section.Content>
    </Section>
  );
};

export const bestuurPropTypes = {
  ab_actis: PropTypes.shape({
    lid: PropTypes.shape(lidPropTypes),
  }),
  praeses: PropTypes.shape({
    lid: PropTypes.shape(lidPropTypes),
  }),
  quaestor: PropTypes.shape({
    lid: PropTypes.shape(lidPropTypes),
  }),
};

Bestuur.propTypes = bestuurPropTypes;

export default Bestuur;
