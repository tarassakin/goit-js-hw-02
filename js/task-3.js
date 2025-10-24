function getElementWidth(content, padding, border) {
  let elementContent = Number.parseFloat(content);
  let elementPadding = Number.parseFloat(padding);
  let elementBorder = Number.parseFloat(border);

  let totalElementWidth;
  totalElementWidth = elementContent + elementPadding * 2 + elementBorder * 2;

  return totalElementWidth;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
