import "twin.macro";
import { animated } from "react-spring";

import Card from "../ui/Card";
import Section from "../ui/Section";

import useBounce from "../../hooks/springs/useBounce";

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

export default Bestuur;
