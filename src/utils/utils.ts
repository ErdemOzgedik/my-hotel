export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getBorderColor = (rate: number) => {
  if (rate >= 18) return "#4CAF50";
  if (rate >= 15) return "#8BC34A";
  if (rate >= 12) return "#CDDC39";
  if (rate >= 9) return "#FFEB3B";
  if (rate >= 6) return "#FFC107";
  if (rate >= 3) return "#FF9800";
  return "#F44336";
};
