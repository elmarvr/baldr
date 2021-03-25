import tw from "twin.macro";
import { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import Heading from "./Heading";

const Section = tw.section`flex flex-col w-full py-24 items-center`;

const SectionContent = tw.div`w-full h-full flex flex-col max-w-screen-xl items-center px-8 sm:(px-16)`;

const SectionTitle = (
  props: Omit<ComponentProps<typeof Heading>, "size" | "as">
) => (
  <Heading
    as="h2"
    size="lg"
    tw="text-gray-800 mb-20 after:(border-b-2 border-red-900 border-dashed w-24 mx-auto h-2 content block mt-3)"
    {...props}
  />
);

type SectionTextProps = {
  children: string;
};

const SectionText = ({ children, ...props }: SectionTextProps) => {
  return (
    <div tw="prose max-w-none" {...props}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
};

export { SectionContent, SectionTitle, SectionText };
export default Section;
