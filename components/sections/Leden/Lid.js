import tw from "twin.macro";
import PropTypes from "prop-types";
import Card from "../../ui/Card";
import { imagePropTypes } from "../../ui/Image";

const line = "flex-grow content block bg-gray-300 h-px mx-4";

const Lid = ({ foto, voornaam, achternaam, studie, jaar }) => {
  const naam = `${voornaam} ${achternaam}`;

  return (
    <Card>
      <Card.Image image={foto} tw="w-80 h-60 mb-6 rounded-sm" />
      <h3 tw="font-heading font-semibold tracking-wider text-3xl text-red-900 mb-2">
        {naam}
      </h3>
      <span
        css={tw`after:(${line}) before:(${line}) text-gray-500 w-full flex items-center`}
      >
        {jaar}
      </span>
      <p tw="mt-2 font-thin tracking-wide text-gray-500">{studie}</p>
    </Card>
  );
};

export const lidPropTypes = {
  foto: imagePropTypes.image,
  voornaam: PropTypes.string,
  achternaam: PropTypes.string,
  studie: PropTypes.string,
  jaar: PropTypes.string,
};

Lid.propTypes = lidPropTypes;

export default Lid;
