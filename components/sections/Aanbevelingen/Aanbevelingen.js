import "twin.macro";

import Section from "@/ui/Section";
import Carousel from "@/ui/Carousel";
import AanbevelingItems, {
  aanbevelingItemsPropTypes,
} from "./AanbevelingItems/AanbevelingItems";

const Aanbevelingen = ({ aanbevelingen }) => {
  return (
    <Section>
      <Section.Title>Aanbevelingen</Section.Title>
      <Section.Content
        css={{ height: "500px" }}
        tw="rounded-lg bg-gradient-to-br from-red-600 to-red-900 w-full"
      >
        <Carousel time={10000} tw="relative flex justify-center h-full">
          <AanbevelingItems aanbevelingen={aanbevelingen} />
        </Carousel>
      </Section.Content>
    </Section>
  );
};

export const aanbevelingenPropTypes = aanbevelingItemsPropTypes;

Aanbevelingen.propTypes = aanbevelingenPropTypes;

export default Aanbevelingen;
