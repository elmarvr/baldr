import tw, { styled } from "twin.macro";

const sizes = {
  xs: tw`tracking-wider text-xl`,
  sm: tw`tracking-wider text-3xl`,
  md: tw`tracking-wider text-4xl`,
  lg: tw`tracking-wide text-5xl`,
};

type HeadingProps = {
  size: keyof typeof sizes;
};

const Heading = styled.h1<HeadingProps>`
  ${tw`font-heading`}
  ${({ size }) => sizes[size] || sizes.md}
`;

export default Heading;
