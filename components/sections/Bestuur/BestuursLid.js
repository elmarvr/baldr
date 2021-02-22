import "twin.macro";
import Card from "@/ui/Card";
import { imagePropTypes } from "@/ui/Image";
import BestuursLidCard, { bestuurslidCardPropTypes } from "./BestuursLidCard";

const BestuursLid = ({ foto, achternaam, voorletters, functie, ...props }) => {
  return (
    <BestuursLidCard
      achternaam={achternaam}
      voorletters={voorletters}
      functie={functie}
      {...props}
    >
      <Card.Image image={foto} tw="w-80 h-56" />
    </BestuursLidCard>
  );
};

export const bestuursLidPropTypes = {
  foto: imagePropTypes.image,
  ...bestuurslidCardPropTypes,
};

BestuursLid.propTypes = bestuursLidPropTypes;

export default BestuursLid;
