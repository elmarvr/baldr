import "twin.macro";
import PropTypes from "prop-types";
import Carousel from "@/ui/Carousel";
import Section from "@/ui/Section";
import KamerInfo, { kamerInfoPropTypes } from "./KamerInfo";
import KamerFotos, { kamerFotoPropTypes } from "./KamerFotos";

const Huis = ({ kamers }) => {
  return (
    <Section tw="bg-red-100">
      <Section.Title>Het Huis</Section.Title>
      <Section.Content as={Carousel} time={10000} tw="grid grid-cols-2 w-full">
        <KamerInfo kamers={kamers} />
        <KamerFotos kamers={kamers} />
      </Section.Content>
    </Section>
  );
};

export const huisPropTypes = {
  kamers: PropTypes.arrayOf(
    PropTypes.shape({
      ...kamerInfoPropTypes,
      ...kamerFotoPropTypes,
    })
  ),
};

Huis.propTypes = huisPropTypes;

export default Huis;
