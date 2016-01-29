module.exports = {
    node: node,
    web: web
};

function node(language) {
    return (

`/**
 * Plural rules for the ${language.code} ${language.description} language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} ${language.rules.map((name, i) => i + ' - ' + name).join(', ')}
 *
 * @example
 * var plural = require('js-simple-plural/node/en');
 * function pluralizeEn(number, one, many) {
 *     var rules = [one, many];
 *     var position = plural(number);
 *     return rules[position];
 * }
 *
 * console.log('2 ' + pluralizeEn(2, 'day', 'days')); // prints '2 days'
 */
module.exports = ${language.js};`

    );
}

function web(language) {
    return (

        `/**
 * Plural rules for the ${language.code} ${language.description} language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} ${language.rules.map((name, i) => i + ' - ' + name).join(', ')}
 *
 * @example
 * function pluralizeEn(number, one, many) {
 *     var rules = [one, many];
 *     var position = plural.en(number);
 *     return rules[position];
 * }
 *
 * console.log('2 ' + pluralizeEn(2, 'day', 'days')); // prints '2 days'
 */
plural = window.plural || {};
plural.${language.code} = ${language.js};`

    );
}