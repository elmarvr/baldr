import "twin.macro";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import useBounce from "@/hooks/springs/useBounce";
import Card from "@/ui/Card";
import { imagePropTypes } from "@/ui/Image";
import BestuursLidCard, { bestuurslidCardPropTypes } from "./BestuursLidCard";

const AbActis = ({
  foto,
  achternaam,
  voorletters,
  email,
  telefoonnummer,
  functie,
  borrel,
  ...props
}) => {
  const [hovered, set] = useState(false);
  const { style, stop, start } = useBounce(5000);

  const { transform, opacity } = useSpring({
    backfaceVisibility: "hidden",
    transform: `perspective(1000px) rotateY(${hovered ? 180 : 0}deg)`,
    opacity: hovered ? 0 : 1,
    onRest: () => {
      if (!hovered) {
        start();
      }
    },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <BestuursLidCard
      achternaam={achternaam}
      voorletters={voorletters}
      functie={functie}
      {...props}
    >
      <animated.div
        style={style}
        onMouseEnter={async () => {
          await stop();
          set(true);
        }}
        onMouseLeave={() => set(false)}
        css={{
          perspective: "1000px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        tw="w-80 h-56 relative"
      >
        <animated.span
          tw="h-full w-full absolute top-0 left-0"
          style={{
            transform,
            opacity,
          }}
        >
          <Card.Image image={foto} tw="h-full w-full" />
        </animated.span>

        <AbActisBack
          email={email.email}
          nummer={telefoonnummer.nummer}
          style={{
            transform: transform.to((t) => `${t} rotateY(180deg)`),
            opacity: opacity.to((o) => 1 - o),
          }}
        />
      </animated.div>
    </BestuursLidCard>
  );
};

const AbActisBack = ({ email, nummer, ...props }) => (
  <animated.div
    tw="h-full w-full absolute top-0 left-0 bg-gray-100 flex flex-col items-center p-6 text-center justify-between"
    {...props}
  >
    <h3 tw="tracking-widest text-3xl text-red-900 font-heading mb-1">
      Zin om te borrelen?
    </h3>

    <div>
      <h4 tw="text-xl tracking-wider font-heading">
        <span tw="bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent mr-1">
          Bel me
        </span>
        😉
      </h4>
      <a href={`tel:${nummer}`} tw="text-gray-900 hover:text-red-700">
        {nummer}
      </a>
    </div>

    <div>
      <h4 tw="text-xl tracking-wider font-heading  bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
        Stuur een mailtje
      </h4>
      <a href={`mailto:${email}`} tw="text-gray-900 hover:text-red-700">
        {email}
      </a>
    </div>
  </animated.div>
);

AbActis.propTypes = {
  foto: imagePropTypes.image,
  ...bestuurslidCardPropTypes,
};

export default AbActis;
