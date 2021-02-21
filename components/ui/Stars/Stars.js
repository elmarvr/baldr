import "twin.macro";
import PropTypes from "prop-types";
import { times } from "lodash";
import Star from "./Star";

const Stars = ({ rating, ...props }) => {
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
    <div tw="flex" {...props}>
      {times(5, (index) => (
        <Star
          key={`stars-${index}`}
          value={getStarValue(index + 1)}
          tw="w-6 h-6"
        />
      ))}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number,
};

export default Stars;
