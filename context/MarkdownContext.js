import { createContext } from "react";

const MarkdownContext = createContext({
  emails: [],
  phones: [],
});

export const MarkdownProvider = ({ emails, phones, ...props }) => {
  return <MarkdownContext.Provider value={{ emails, phones }} {...props} />;
};

export default MarkdownContext;
