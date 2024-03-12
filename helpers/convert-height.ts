export function convertHeight(height:number) {
    // Split the height into feet and inches
    const [feet, inches] = height.toString().split('.');
    
    // Convert feet and inches to inches
    const totalInches = parseInt(feet) * 12 + parseInt(inches);
    
    // Convert inches to centimeters
    const centimeters = totalInches * 2.54;
    
    return `${feet} Ft ${inches} In / ${centimeters.toFixed(2)} Cms`;
}