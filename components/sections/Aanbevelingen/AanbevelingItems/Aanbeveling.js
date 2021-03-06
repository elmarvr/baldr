import "twin.macro";
import PropTypes from "prop-types";
import Image, { imagePropTypes } from "@/ui/Image";
import Stars from "@/ui/Stars/Stars";
import Heading from "@/ui/Heading";

const Aanbeveling = ({ wapen, naam, omschrijving, cijfer }) => (
  <div tw="flex flex-col items-center space-y-6 justify-center w-full">
    <Image image={wapen} tw="w-24 h-24 rounded-full bg-gray-100" />

    <Heading as="h3" tw="text-gray-900">
      {naam}
    </Heading>

    <p tw="text-center text-white" css={{ maxWidth: "400px" }}>
      {omschrijving}
    </p>

    <Stars rating={cijfer} />
  </div>
);

export const aanbevelingPropTypes = {
  wapen: imagePropTypes.image,
  naam: PropTypes.string,
  omschrijving: PropTypes.string,
  cijfer: PropTypes.number,
};

Aanbeveling.propTypes = aanbevelingPropTypes;

export default Aanbeveling;
