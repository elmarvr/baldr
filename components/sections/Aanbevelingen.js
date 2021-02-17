import { theme } from "twin.macro";
import { Icon } from "@iconify/react";
import starHalf from "@iconify/icons-la/star-half-alt";
import star from "@iconify/icons-la/star-solid";
import { times } from "lodash";

import Section from "../ui/Section";
import GoldIcon from "../ui/GoldIcon";

const Aanbevelingen = ({ rating = 8 }) => {
  const getStarValue = (value) => {
    const filledStars = Math.ceil(rating / 2);

    if (value <= filledStars) {
      if (value === filledStars && rating % 2 === 1) {
        return 0.5;
      }
      return 1;
    }
    return 0;
  };

  return (
    <Section>
      <Section.Title>Aanbevelingen</Section.Title>
      <Section.Content
        css={{ height: "500px" }}
        tw="rounded-lg bg-gradient-to-br from-red-900 to-red-700 w-full justify-center items-center"
      >
        <div tw="w-24 h-24 rounded-full bg-gray-500 mb-4"></div>
        <div tw="flex mb-6">
          {times(5, (index) => (
            <Star value={getStarValue(index + 1)} tw="w-8 h-8 text-gray-300" />
          ))}
        </div>
        <p tw="text-center text-white" css={{ maxWidth: "500px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          pretium convallis dui, eget interdum massa placerat dignissim
        </p>
      </Section.Content>
    </Section>
  );
};

const Star = ({ value, ...props }) => (
  <div tw="relative" {...props}>
    {value > 0 && (
      <GoldIcon
        width="100%"
        height="100%"
        icon={value === 0.5 ? starHalf : star}
        tw="absolute top-0 left-0 z-10"
      />
    )}
    <Icon icon={star} tw="absolute" width="100%" height="100%" />
  </div>
);

export default Aanbevelingen;
