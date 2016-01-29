/**
 * Plural rules for the mk (Macedonian, македонски јазик) language
 *
 * This plural file is generated from CLDR-DATA
 * (http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
 * using js-simple-plurals and universal-i18n
 *
 * @param {number} p
 * @return {number} 0 - one, 1 - other
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
plural.mk = function (p) { var n = Math.abs(p)||0, i = Math.floor(n,10)||0, v = ((p+'').split('.')[1]||'').length, f = Math.floor((p+'').split('.')[1],10)||0, i10 = i % 10, f10 = f % 10; return v === 0 && i10 === 1 || f10 === 1 ? 0 : 1; };