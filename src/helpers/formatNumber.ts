export const formatNumber = (amount: number, thousandSeparator = ' ') => {
  let intStr = amount.toString();
  let fstDigitsCount = intStr.length > 3 ? intStr.length % 3 : 0;

  return (
    (fstDigitsCount
      ? intStr.length === 4 // to hide thousands separator for values <= 9999
        ? intStr.substring(0, fstDigitsCount)
        : intStr.substring(0, fstDigitsCount) + thousandSeparator
      : '') +
    intStr
      .substring(fstDigitsCount)
      .replace(/(\d{3})(?=\d)/g, '$1' + thousandSeparator)
    );
};
