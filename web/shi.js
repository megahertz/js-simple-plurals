/**
 * Plural rules for the shi  language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - one, 1 - few, 2 - other
 *
 * @example
 * function pluralize_en(number, one, many) {
 *     var rules = [one, many];
 *     var position = plural.en(number)
 *     return rules[position];
 * }
 *
 * console.log('2 ' + pluralize_en(2, 'day', 'days')); // prints '2 days'
 */
plural = window.plural || {};
plural.shi = function (p) { var n = Math.abs(p)||0, i = Math.floor(n,10)||0; return i === 0 || n === 1 ? 0 : (n >= 2 && n <= 10) ? 1 : 2; };