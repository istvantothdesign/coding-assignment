type Color =
  | "yellow"
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "purple"
  | "pink"
  | "teal";

// Function to generate a color mapping for server types dynamically
export const generateColorForTypes = (
  types: string[],
  colors: Color[], // Use the specific "Color" type here
): Record<string, Color> => {
  let colorMapping: Record<string, Color> = {}; // Now, "colorMapping" will only accept values from the "Color" type
  let usedColors: Set<Color> = new Set();

  types.forEach((type, index) => {
    if (!colorMapping[type]) {
      const availableColors = colors.filter((color) => !usedColors.has(color));
      if (availableColors.length > 0) {
        const color = availableColors[0];
        colorMapping[type] = color;
        usedColors.add(color);
      } else {
        const recycledColor = colors[index % colors.length];
        colorMapping[type] = recycledColor;
        usedColors.add(recycledColor);
      }
    }
  });

  return colorMapping;
};
