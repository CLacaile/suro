export const COLORS = {
  BLACK: "black",
  WHITE: "white",
  GREEN: "green",
  RED: "red",
  BLUE: "blue",
  PURPLE: "purple",
  DARK_ORANGE: "darkorange",
  BROWN: "brown",
  DARK_VIOLET: "darkviolet",
  DEEP_PINK: "deeppink",
  DODGER_BLUE: "dodgerblue",
  INDIGO: "indigo",
  MAGENTA: "magenta",
  ORANGE_RED: "orangered",
  LIME_GREEN: "limegreen"
};

const RESERVED_COLORS = [COLORS.BLACK, COLORS.WHITE, COLORS.RED, COLORS.GREEN, COLORS.LIME_GREEN]; 

export const getRandomColor = (prevColor) => {
  const colors = Object.keys(COLORS).filter(color => !RESERVED_COLORS.includes(COLORS[color]) && color !== prevColor);
  const randomNumber = Math.floor(Math.random() * colors.length);
  return COLORS[colors[randomNumber]];
}