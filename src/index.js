module.exports = function toReadable (number) {
    const a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    if (number === 0) return 'zero';
    if ((number = number.toString()).length > 3) return 'more than 999';
    n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; 
    let str = '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + ' hundred' : ' ';
    str += (n[5] != 0) ? ((str != '') ? ' ' : ' ') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : ' ';
    return str.trim();
};
