/**
 * Plural rules for the lag (Latin, latine, lingua latina) language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - zero, 1 - one, 2 - other
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
plural.lag = function (p) { var n = Math.abs(p)||0, i = Math.floor(n,10)||0; return n === 0 ? 0 : i === 0 || i === 1 && n !== 0 ? 1 : 2; };