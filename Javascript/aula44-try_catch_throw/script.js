// try {
//     console.log(noExist);
// } catch (err) {
//     console.log('noExist no exist');
//     console.log(err)
// }

function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x and y must be numbers');
    }
    return x + y;
}

try {
    console.log(sum(10, 2))
    console.log(sum('2', 2))
} catch (err) {
    console.log(err)
}