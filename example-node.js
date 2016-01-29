var plural = require('./node/en');
function pluralizeEn(number, one, many) {
    var rules = [one, many];
    var position = plural(number);
    return rules[position];
}

console.log('2 ' + pluralizeEn(2, 'day', 'days')); // prints '2 days'