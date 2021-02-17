import "twin.macro";
import { useTransition, animated } from "react-spring";
import useMeasure from "react-use-measure";
import { Icon as ApiIcon } from "@iconify/react-with-api";
import chevronLeft from "@iconify/icons-fa-solid/chevron-left";
import chevronRight from "@iconify/icons-fa-solid/chevron-right";

import Section from "../ui/Section";
import Image from "../ui/Image";
import Carousel from "../ui/Carousel";
import GoldIcon from "../ui/GoldIcon";
import { useCarousel } from "../ui/Carousel";

const Huis = ({ kamers }) => {
  return (
    <Section tw="bg-red-100">
      <Section.Title>Het Huis</Section.Title>
      <Section.Content as={Carousel} time={10000} tw="flex-row">
        <div tw="relative w-1/2">
          <KamerInfo kamers={kamers} />
        </div>

        <div tw="w-1/2 flex justify-end">
          <KamerCarousel kamers={kamers} />
        </div>
      </Section.Content>
    </Section>
  );
};

const KamerInfo = ({ kamers }) => {
  const { page, direction } = useCarousel();
  const [ref, { width }] = useMeasure();

  const transition = useTransition(page, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    initial: false,
    config: {
      duration: 600,
    },
  });

  return transition((style, item) => (
    <div
      ref={ref}
      tw="absolute border-b-2 border-red-200 h-full overflow-hidden"
      css={{ maxWidth: "400px" }}
    >
      <animated.div style={style} tw="h-full">
        <h3 tw="font-heading tracking-wider text-red-900 text-4xl mb-2">
          {kamers[item].titel}
        </h3>
        <p tw="text-gray-600 mb-6">{kamers[item].omschrijving}</p>
        <ul tw="space-y-8 text-lg font-semibold text-gray-700">
          {kamers[item].eigenschappen.map((eigenschap) => (
            <li tw="flex items-center">
              <ApiIcon icon={eigenschap.icon} tw="mr-2 text-2xl" />
              {eigenschap.text}
            </li>
          ))}
        </ul>
      </animated.div>
    </div>
  ));
};

const KamerCarousel = ({ kamers }) => {
  const { next, previous } = useCarousel();

  return (
    <div tw="text-5xl text-white w-full relative" css={{ height: "400px" }}>
      <Carousel.Items
        tw="w-full h-full"
        config={{
          duration: 600,
        }}
      >
        {kamers.map((kamer, index) => (
          <div key={kamer.titel} tw="w-full h-full">
            <Image key={`kamer-${index}`} image={kamer.foto} />
          </div>
        ))}
      </Carousel.Items>

      <GoldIcon
        onClick={previous}
        hover
        tw="absolute transform! -translate-y-1/2 top-1/2 left-4"
        icon={chevronLeft}
      />
      <GoldIcon
        onClick={next}
        hover
        tw="absolute transform! -translate-y-1/2 top-1/2 right-4"
        icon={chevronRight}
      />
    </div>
  );
};

export default Huis;
