import "twin.macro";
import PropTypes from "prop-types";

import Carousel, { useCarousel } from "@/ui/Carousel";
import Chevron from "@/ui/Chevron";
import Aanbeveling, { aanbevelingPropTypes } from "./Aanbeveling";

const AanbevelingItems = ({ aanbevelingen }) => {
  const { next, previous } = useCarousel();

  return (
    <>
      <Chevron left onClick={previous} />

      <Carousel.Items
        tw="flex items-center justify-center w-full"
        fade
        config={{
          duration: 600,
        }}
      >
        {aanbevelingen.map((aanbeveling) => (
          <Aanbeveling key={aanbeveling.id} {...aanbeveling} />
        ))}
      </Carousel.Items>

      <Chevron onClick={next} />
    </>
  );
};

export const aanbevelingItemsPropTypes = {
  aanbevelingen: PropTypes.arrayOf(PropTypes.shape(aanbevelingPropTypes)),
};

AanbevelingItems.propTypes = aanbevelingItemsPropTypes;

export default AanbevelingItems;
