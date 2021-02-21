import "twin.macro";
import PropTypes from "prop-types";
import { Icon as ApiIcon } from "@iconify/react-with-api";
import { animated, useTransition } from "react-spring";
import { useCarousel } from "@/ui/Carousel";

const KamerInfo = ({ kamers }) => {
  const { page } = useCarousel();

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

  return (
    <div tw="relative" css={{ height: "400px" }}>
      {transition((style, item) => (
        <div
          tw="absolute border-b-2 border-red-200 h-full overflow-hidden"
          css={{ maxWidth: "350px" }}
        >
          <animated.div style={style} tw="h-full">
            <h3 tw="font-heading tracking-wider text-red-900 text-4xl mb-2">
              {kamers[item].titel}
            </h3>
            <p tw="text-gray-600 mb-6">{kamers[item].omschrijving}</p>
            <ul tw="space-y-8 text-lg font-semibold text-gray-700">
              {kamers[item].eigenschappen.map((eigenschap) => (
                <li key={eigenschap.id} tw="flex items-center">
                  <ApiIcon icon={eigenschap.icon} tw="mr-2 text-2xl" />
                  {eigenschap.text}
                </li>
              ))}
            </ul>
          </animated.div>
        </div>
      ))}
    </div>
  );
};

export const kamerInfoPropTypes = {
  titel: PropTypes.string,
  omschrijving: PropTypes.string,
  eigenschappen: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

KamerInfo.propTypes = {
  kamers: PropTypes.arrayOf(PropTypes.shape(kamerInfoPropTypes)),
};

export default KamerInfo;
