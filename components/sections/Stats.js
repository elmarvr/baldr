import "twin.macro";
import { useRef, forwardRef } from "react";
import { animated, useSpring, useChain } from "react-spring";

import { Icon } from "@iconify/react";
import user from "@iconify/icons-la/user";
import graduate from "@iconify/icons-la/graduation-cap";
import globe from "@iconify/icons-la/globe";
import poop from "@iconify/icons-la/poop";

import Section from "../ui/Section";

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

const Stat = forwardRef(({ icon, naam, aantal }, ref) => {
  const { number, opacity, y } = useSpring({
    from: {
      y: 20,
      opacity: 0,
      number: 0,
    },
    number: aantal,
    opacity: 1,
    y: 0,
    config: {
      mass: 3,
      friction: 30,
      tension: 150,
      clamp: true,
    },
    ref,
  });

  return (
    <div tw="flex flex-col items-center flex-grow text-white">
      <Icon icon={icon} tw="text-4xl mb-4" />
      <div tw="mb-10 font-semibold text-sm">{naam}</div>
      <animated.span style={{ opacity, y }} tw="font-bold text-4xl">
        {number.to(Math.round)}
      </animated.span>
    </div>
  );
});

export default Stats;
