import "twin.macro";
import PropTypes from "prop-types";
import Section from "@/ui/Section";

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

const overOnsPropTypes = {
  overOns: PropTypes.string,
};

OverOns.propTypes = overOnsPropTypes;

export default OverOns;
