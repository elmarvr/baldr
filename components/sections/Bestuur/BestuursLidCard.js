import "twin.macro";
import PropTypes from "prop-types";
import Card from "@/ui/Card";

const LidCard = ({ functie, voorletters, achternaam, children, ...props }) => {
  const naam = `${voorletters} ${achternaam}`;

  return (
    <Card tw="flex-row h-48 w-full" {...props}>
      {children}
      <div tw="h-full flex flex-col justify-center items-center flex-grow">
        <h3 tw="text-4xl font-heading tracking-wide text-red-900">{functie}</h3>
        <p>{naam}</p>
      </div>
    </Card>
  );
};

export const bestuurslidCardPropTypes = {
  voorletters: PropTypes.string,
  achternaam: PropTypes.string,
  functie: PropTypes.string,
};

LidCard.propTypes = {
  ...bestuurslidCardPropTypes,
  children: PropTypes.node,
};

export default LidCard;
