export function shortenNumber(num: number) {
  if (num < 1000) {return num.toString();}

  const suffixes = ['', ' K', ' M', ' B', ' T'];
  const i = Math.floor(Math.log10(num) / 3);

  const shortNum = (num / Math.pow(10, i * 3)).toFixed(1);
  return parseFloat(shortNum) + suffixes[i];
}
