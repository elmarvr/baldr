/* eslint-disable react/display-name */
import tw, { styled } from "twin.macro";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import Strong from "../renderers/Strong";
import Link from "../renderers/Link";

const Section = tw.section`flex flex-col items-center py-24 w-full`;

Section.Title = tw.h2`text-5xl tracking-wider text-gray-800 font-heading mb-20 uppercase after:(border-b-2 border-red-900 border-dashed w-24 mx-auto h-2 content block mt-3)`;

Section.Content = styled.div`
  max-width: 1100px;
  ${tw`w-full flex flex-col`}
`;

const SectionText = ({ children, ...props }) => {
  return (
    <div tw="prose max-w-none" {...props}>
      <ReactMarkdown
        renderers={{
          strong: Strong,
          link: Link,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

SectionText.propTypes = {
  children: PropTypes.node,
};

Section.Text = SectionText;

export default Section;
