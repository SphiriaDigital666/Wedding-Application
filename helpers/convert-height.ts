export function convertHeight(height: string | number = '0') {
  // Ensure height is a string
  const heightString = typeof height === 'string' ? height : height.toString();

  // Split the height into feet and inches
  const [feet, inches] = heightString.split('.') || ['0', '0'];

  // Convert feet and inches to inches
  const totalInches = parseInt(feet) * 12 + parseInt(inches);

  // Convert inches to centimeters
  const centimeters = totalInches * 2.54;

  return `${feet} Ft ${inches} In / ${centimeters.toFixed(2)} Cms`;
}
