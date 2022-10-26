function bonAppetit(bill, k, b) {
    // Write your code here
    const initialValue = 0;
    const totalBill = bill.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    const annaBill = (totalBill - bill[k]) / 2;

    console.log(annaBill == b ? 'Bon Appetit' : Math.abs(annaBill- b));
}

const bill = [2, 4, 6];
const k = 2;
const b = 6;

bonAppetit(bill, k, b);