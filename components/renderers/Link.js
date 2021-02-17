import { useContext } from "react";
import MarkdownContext from "../../context/MarkdownContext";

const Link = ({ value, type }) => {
  const { emails, phones } = useContext(MarkdownContext);

  switch (type) {
    case "phone": {
      const phone = phones.find((phone) => phone.naam === value).nummer;

      return <a href={`tel:${phone}`}>{phone}</a>;
    }
    case "email": {
      const email = emails.find((email) => email.naam === value).email;

      return <a href={`mailto:${email}`}>{email}</a>;
    }

    default: {
      return <a href={`/${type}`}>{value}</a>;
    }
  }
};

export default Link;
