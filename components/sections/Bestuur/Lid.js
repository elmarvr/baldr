import "twin.macro";
import { animated } from "react-spring";
import PropTypes from "prop-types";
import Card from "@/ui/Card";
import useBounce from "@/hooks/springs/useBounce";
import { imagePropTypes } from "@/ui/Image";

const Lid = ({ foto, functie, voorletters, achternaam, bounce, ...props }) => {
  const naam = `${voorletters} ${achternaam}`;
  const style = useBounce();

  return (
    <Card tw="flex-row h-48 w-full" {...props}>
      <animated.span tw="w-80 h-full" style={bounce && style}>
        <Card.Image image={foto} tw="w-full h-full" />
      </animated.span>
      <div tw="h-full flex flex-col justify-center items-center flex-grow">
        <h3 tw="text-4xl font-heading tracking-wide text-red-900">{functie}</h3>
        <p>{naam}</p>
      </div>
    </Card>
  );
};

export const lidPropTypes = {
  foto: imagePropTypes.image,
  voorletters: PropTypes.string,
  achternaam: PropTypes.string,
};

Lid.propTypes = {
  ...lidPropTypes,
  functie: PropTypes.string,
  bounce: PropTypes.bool,
};

export default Lid;
