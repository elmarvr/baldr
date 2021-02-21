import tw, { styled } from "twin.macro";
import PropTypes from "prop-types";
import { times } from "lodash";

import Slider from "../../ui/Slider/index";
import Section from "../../ui/Section";
import Lid, { lidPropTypes } from "./Lid";

const Leden = ({ leden }) => {
  return (
    <Section>
      <Section.Title>De leden</Section.Title>
      <Slider>
        {({ pages, page, paginate }) => (
          <>
            <Slider.Items tw="flex space-x-16">
              {leden.map((lid) => (
                <Lid key={`lid-${lid.id}`} {...lid} />
              ))}
            </Slider.Items>

            <div tw="flex space-x-4 w-full justify-center mt-10">
              {times(pages, (index) => (
                <Bullet
                  active={page === index}
                  onClick={() => paginate(index)}
                />
              ))}
            </div>
          </>
        )}
      </Slider>
    </Section>
  );
};

export const ledenPropTypes = {
  leden: PropTypes.arrayOf(PropTypes.shape(lidPropTypes)),
};

Leden.propTypes = ledenPropTypes;

const Bullet = styled.div`
  ${tw`
		flex items-center justify-center 
		w-3 h-3 rounded-full 
		from-yellow-300 to-yellow-500
		cursor-pointer
	`}
  ${({ active }) => (active ? tw`bg-gradient-to-br ` : tw`bg-gray-200`)}
`;

export default Leden;
