import { useContext } from "react";
import MarkdownContext from "../../context/MarkdownContext";

const Link = ({ href, node }) => {
  const { emails, phones } = useContext(MarkdownContext);
  const [{ value }] = node.children;

  switch (value) {
    case "phone": {
      const phone = phones.find((phone) => phone.naam === href).nummer;

      return <a href={`tel:${phone}`}>{phone}</a>;
    }
    case "email": {
      const email = emails.find((email) => email.naam === href).email;

      return <a href={`mailto:${email}`}>{email}</a>;
    }

    default: {
      return <a href={`/${value}`}>{href}</a>;
    }
  }
};

export default Link;
