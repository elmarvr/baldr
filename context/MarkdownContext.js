import { createContext } from "react";
import PropTypes from "prop-types";

const MarkdownContext = createContext({
  emails: [],
  phones: [],
});

export const MarkdownProvider = ({ emails, phones, ...props }) => {
  return <MarkdownContext.Provider value={{ emails, phones }} {...props} />;
};

export const markdownProviderPropTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      naam: PropTypes.string,
    })
  ),
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      nummer: PropTypes.string,
      naam: PropTypes.string,
    })
  ),
};

MarkdownProvider.propTypes = markdownProviderPropTypes;

export default MarkdownContext;
