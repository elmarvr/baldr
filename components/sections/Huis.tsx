import "twin.macro";
import Section, {
  SectionContent,
  SectionTitle,
  SectionText,
} from "@/ui/Section";

const Huis = () => {
  return (
    <Section tw="bg-red-100">
      <SectionTitle>Het huis</SectionTitle>
      <SectionContent>
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue
          auctor finibus. Donec ornare justo et dictum egestas. Duis ullamcorper
          odio ut odio tincidunt sollicitudin. Phasellus ac scelerisque dolor.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Aliquam finibus luctus massa vitae pulvinar.
          Aliquam sed lectus a eros vehicula auctor eu sed arcu. Mauris non enim
          velit. Sed pharetra orci quis sem dictum bibendum.
        </SectionText>
      </SectionContent>
    </Section>
  );
};

export default Huis;
