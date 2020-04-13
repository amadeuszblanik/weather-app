export const hexToRGBA = (hex: string, opacity: number): string => {
  hex = hex.replace("#", "");
  let r = 0;
  let g = 0;
  let b = 0;

  if (hex.length === 6) {
    [r, g, b] = [0, 2, 4].map(idx => parseInt(hex.substring(idx, idx + 2), 16));
  } else {
    [r, g, b] = [0, 1, 2].map(idx => parseInt(hex.substring(idx, idx + 1) + hex.substring(idx, idx + 1), 16));
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
