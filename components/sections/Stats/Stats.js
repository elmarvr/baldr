import "twin.macro";
import { useRef } from "react";
import PropTypes from "prop-types";
import { useChain } from "react-spring";
import user from "@iconify/icons-la/user";
import graduate from "@iconify/icons-la/graduation-cap";
import globe from "@iconify/icons-la/globe";
import poop from "@iconify/icons-la/poop";
import Section from "@/ui/Section";
import Stat from "./Stat";

const Stats = ({ leden, kkms, leden_op_reis, reunisten }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useChain([ref1, ref2, ref3, ref4]);

  return (
    <Section tw="px-40 py-12 bg-red-900">
      <Section.Content tw="flex-row">
        <Stat ref={ref1} icon={user} naam="Actieve leden" aantal={leden} />
        <Stat
          ref={ref2}
          icon={graduate}
          naam="Reunisten"
          aantal={leden_op_reis}
        />
        <Stat ref={ref3} icon={globe} naam="Leden op reis" aantal={reunisten} />
        <Stat ref={ref4} icon={poop} naam="KKMs" aantal={kkms} />
      </Section.Content>
    </Section>
  );
};

export const statsPropTypes = {
  leden: PropTypes.number,
  kkms: PropTypes.number,
  leden_op_reis: PropTypes.number,
  reunisten: PropTypes.number,
};

Stats.propTypes = statsPropTypes;

export default Stats;
