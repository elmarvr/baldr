import "twin.macro";

import Section from "../ui/Section";

const OverOns = ({ overOns }) => {
  return (
    <Section>
      <Section.Title>Over Ons</Section.Title>
      <Section.Content>
        <Section.Text>{overOns}</Section.Text>
      </Section.Content>
    </Section>
  );
};

export default OverOns;
