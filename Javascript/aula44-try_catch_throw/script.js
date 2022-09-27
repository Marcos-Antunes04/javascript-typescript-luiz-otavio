// try {
//     console.log(error);
//     console.log('will not run');
// } catch (err) {
//     console.log('handling the error');
// } finally {
//     console.log('will always be done')
// }

function returnHour(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Waiting for date instance.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
}

try {
    const date = new Date('01-01-1970 12:58:12');
    let hour = returnHour(11);
    console.log(hour);
} catch(err) {
    // handling error
    console.log(err);
} finally {
    console.log('Have a nice day');
}