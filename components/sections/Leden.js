import tw, { styled } from "twin.macro";
import { times } from "lodash";

import Slider from "../ui/Slider/index";
import Card from "../ui/Card";
import Section from "../ui/Section";

const Leden = ({ leden }) => {
  return (
    <Section>
      <Section.Title>De leden</Section.Title>
      <Slider>
        {({ pages, page, paginate }) => (
          <>
            <Slider.Items tw="flex space-x-16">
              {leden.map((lid) => (
                <Lid key={lid.id} {...lid} />
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

const line = "flex-grow content block bg-gray-300 h-px mx-4";

const Lid = ({ foto, voornaam, achternaam, studie, jaar }) => {
  const naam = `${voornaam} ${achternaam}`;

  return (
    <Card>
      <Card.Image image={foto} tw="w-80 h-60 mb-6 rounded-sm" />
      <h3 tw="font-heading font-semibold tracking-wider text-3xl text-red-900 mb-2">
        {naam}
      </h3>
      <span
        css={tw`after:(${line}) before:(${line}) text-gray-500 w-full flex items-center`}
      >
        {jaar}
      </span>
      <p tw="mt-2 font-thin tracking-wide text-gray-500">{studie}</p>
    </Card>
  );
};

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
