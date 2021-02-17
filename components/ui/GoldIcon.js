import { theme } from "twin.macro";
import { Icon } from "@iconify/react";

const GoldIcon = ({ hover = false, ...props }) => {
  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="gold" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor={theme`colors.yellow.300`} offset="0%" />
          <stop stopColor={theme`colors.yellow.500`} offset="100%" />
        </linearGradient>
        <linearGradient id="goldDark" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor={theme`colors.yellow.500`} offset="0%" />
          <stop stopColor={theme`colors.yellow.700`} offset="100%" />
        </linearGradient>
      </svg>
      <Icon
        {...props}
        css={{
          path: {
            fill: "url(#gold)",
          },
          "&:hover": hover
            ? {
                cursor: "pointer",
                path: {
                  fill: "url(#goldDark)",
                },
              }
            : {},
        }}
      />
    </>
  );
};

export default GoldIcon;
