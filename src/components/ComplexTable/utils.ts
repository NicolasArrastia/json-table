export const capitalizeWords = (text: string): string => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" ");
};

export const getHeaders = <TData extends Record<string, any>>(
  jsonList: TData[]
): string[] => {
  const headers: Set<string> = new Set();
  jsonList.forEach((item) => {
    Object.keys(item).forEach((key) => {
      headers.add(key);
    });
  });
  return Array.from(headers);
};

export const isLink = (str: string): boolean => {
  const urlPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

  return urlPattern.test(str);
};
