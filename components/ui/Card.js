import "twin.macro";
import Image from "./Image";

const Card = ({ foto, children, ...props }) => {
  return (
    <div tw="flex flex-col items-center relative" {...props}>
      {children}
    </div>
  );
};

Card.Image = Image;

export default Card;

// <motion.div
//   tw="opacity-0 absolute w-full h-full top-0 p-1"
//   transition={{ type: "spring", duration: 0.5, bounce: 0.4 }}
//   style={{ scale: 0.9 }}
//   whileHover={{ opacity: 1, scale: 1 }}
// >
//   <div tw="w-full h-full bg-primary-main flex flex-col justify-center items-center text-white space-y-4">
//     <h3 tw="font-semibold leading-none">{naam}</h3>
//     <p tw="leading-none">{studie}</p>
//     <p tw="font-thin leading-none">{jaar}</p>
//   </div>
// </motion.div>;

//<h3 tw="font-semibold leading-loose text-primary-main">{naam}</h3>
//<p tw="font-thin">{jaar}</p>
