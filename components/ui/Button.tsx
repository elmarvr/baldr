import tw, { styled } from "twin.macro";

const variants = {
  primary: tw`bg-red-900 text-white`,
  secondary: tw`bg-white text-red-900`,
};

type ButtonProps = {
  variant?: keyof typeof variants;
};

const Button = styled.h1<ButtonProps>`
  ${tw`w-80 py-4 sm:(w-40 py-3) transform transition text-lg font-semibold rounded flex items-center justify-center hover:(cursor-pointer scale-125)`}
  ${({ variant }) => variants[variant] || variants.primary}
`;

export default Button;
