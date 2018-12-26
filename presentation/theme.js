import merge from "deepmerge";
import createTheme from "spectacle/lib/themes/default";

export const colors = {
  primary: "#01AAFF",
  secondary: "#fff",
  tertiary: "#10cbc4",
  quartenary: "#e535ab",
  keyword: "#c792ea",
  tokenString: "#ecc48d",
  comment: "#5c6370"
};

export const size = {
  extraSmall: "24px",
  small: "1.5em",
  medium: "2.3em",
  large: "3.3em"
};

const overrides = {
  components: {
    link: {
      color: colors.tertiary
    },
    code: {
      fontSize: "0.75em"
    },
    codePane: {
      margin: 0,
      "& .prism-code": {
        background: "#011627 !important"
      },
      "& .buildin-prism-theme, .token.keyword": {
        color: `${colors.keyword} !important`
      },
      "& .buildin-prism-theme, .token.string": {
        color: `${colors.tokenString} !important`
      },
      "& .buildin-prism-theme, .token.comment": {
        color: `${colors.comment} !important`
      },
      "& .buildin-prism-theme, .token.function": {
        color: `${colors.quartenary} !important`
      },
      "& .buildin-prism-theme, .token.attr-name": {
        color: `${colors.tertiary} !important`
      },
      fontSize: size.extraSmall
    }
  }
};

export const theme = merge(
  createTheme(colors, {
    primary: {
      name: "Source Sans Pro",
      googleFont: true,
      styles: ["400"]
    },
    secondary: "Helvetica"
  }),
  { screen: overrides, print: overrides }
);
