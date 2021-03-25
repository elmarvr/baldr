import "twin.macro";
import { animated, useSpring } from "react-spring";
import { Icon } from "@iconify/react-with-api";
import Section, { SectionContent } from "@/ui/Section";

export type StatistiekenProps = {
  stats: StatProps[];
};

const Statistieken = ({ stats }: StatistiekenProps) => {
  return (
    <Section tw="py-12 bg-red-900">
      <SectionContent tw="grid grid-cols-1 space-y-12 sm:(grid-cols-4 space-y-0)  ">
        {stats.map((stat) => (
          <Stat {...stat} key={stat.naam} />
        ))}
      </SectionContent>
    </Section>
  );
};

type StatProps = {
  naam: string;
  icoon: string;
  waarde: number;
};

const Stat = ({ icoon, naam, waarde }: StatProps) => {
  const { number, opacity, y } = useSpring({
    from: {
      y: 20,
      opacity: 0,
      number: 0,
    },
    number: waarde,
    opacity: 1,
    y: 0,
    config: {
      mass: 3,
      friction: 30,
      tension: 150,
      clamp: true,
    },
  });

  return (
    <div tw="flex flex-col items-center text-white ">
      <Icon icon={icoon} tw="text-4xl mb-4" />
      <div tw="mb-10 font-semibold text-sm capitalize">{naam}</div>
      <animated.div
        style={{ opacity: opacity as any, y }}
        tw="font-bold text-4xl"
      >
        {number.to(Math.round)}
      </animated.div>
    </div>
  );
};

export default Statistieken;
