/**
 * Plural rules for the kw (Cornish, Kernewek) language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - one, 1 - two, 2 - other
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
plural.kw = function (p) { var n = Math.abs(p)||0; return n === 1 ? 0 : n === 2 ? 1 : 2; };