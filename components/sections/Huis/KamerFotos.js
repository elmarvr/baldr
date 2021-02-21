import "twin.macro";
import PropTypes from "prop-types";
import Carousel, { useCarousel } from "@/ui/Carousel";
import Image, { imagePropTypes } from "@/ui/Image";
import Chevron from "@/ui/Chevron";

const KamerFotos = ({ kamers }) => {
  const { next, previous } = useCarousel();

  return (
    <div tw="text-5xl text-white w-full relative" css={{ height: "350px" }}>
      <Carousel.Items
        tw="h-full w-full"
        config={{
          duration: 500,
        }}
      >
        {kamers.map((kamer) => (
          <Image key={kamer.id} image={kamer.foto} tw="h-full w-full" />
        ))}
      </Carousel.Items>

      <Chevron left onClick={previous} tw="h-12 w-12" />
      <Chevron onClick={next} tw="h-12 w-12" />
    </div>
  );
};

export const kamerFotoPropTypes = {
  id: PropTypes.number,
  foto: imagePropTypes.image,
};

KamerFotos.propTypes = {
  kamers: PropTypes.arrayOf(PropTypes.shape(kamerFotoPropTypes)),
};

export default KamerFotos;
