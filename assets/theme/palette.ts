import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY = {
  //JINGGA BIS KOTA
  lighter: "#FEE5D1",
  light: "#FE9B76",
  main: "#FC351C",
  dark: "#B50E16",
  darker: "#78051D",
  contrastText: "#fff",
};
const SECONDARY = {
  //BIRU ABANG
  lighter: "#D1E6FD",
  light: "#74A8F4",
  main: "#1C5DDC",
  dark: "#0E349E",
  darker: "#051969",
  contrastText: "#fff",
};
const INFO = {
  //BIRU PESISIR
  lighter: "#CCFBFF",
  light: "#66DFFF",
  main: "#00AAFF",
  dark: "#0062B7",
  darker: "#00327A",
  contrastText: "#fff",
};
const SUCCESS = {
  //HIJAU BETAWI
  lighter: "#CFFAD2",
  light: "#70E68E",
  main: "#19AE5D",
  dark: "#0C7D56",
  darker: "#045348",
  contrastText: "#fff",
};
const WARNING = {
  //KUNING GIGI BALANG
  lighter: "#FEF6D4",
  light: "#FEDB7F",
  main: "#FEB52B",
  dark: "#B67315",
  darker: "#794208",
  contrastText: GREY[800],
};
const ERROR = {
  //PINK NONE
  lighter: "#FED5DE",
  light: "#F982B2",
  main: "#EB30A2",
  dark: "#A9188D",
  darker: "#700970",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, GREY[0]),
  info: createGradient(INFO.light, GREY[0]),
  success: createGradient(SUCCESS.light, GREY[0]),
  warning: createGradient(WARNING.light, GREY[0]),
  error: createGradient(ERROR.light, GREY[0]),
};

const GRADIENTS_WHITE = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  pinkNone: ["#EB30A2", "#F361AB", "#F982B2", "#FDACC5"],
  biruPesisir: ["#00AAFF", "#3FCBFF", "#66DFFF", "#99F0FF"],
  hijauBetawi: ["#19AE5D", "#49CE79", "#70E68E", "#A2F6AF"],
  kuningBalang: ["#FEB52B", "#FECD5F", "#FEDB7F", "#FEEAAA"],
  jinggaBis: ["#FC351C", "#FD7454", "#FE9B76", "#FEC4A4"],
};

const palette = {
  common: { black: "#000", white: "#fff" },
  neutral: { main: "#fff", contrastText: GREY[800] },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  gradients_white: GRADIENTS_WHITE,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: GREY[200],
    primary: PRIMARY.lighter,
    info: INFO.lighter,
    success: SUCCESS.lighter,
    error: ERROR.lighter,
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
