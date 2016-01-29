#!/usr/bin/env node
'use strict';

let fs = require('fs');
let libConstants = require('universal-i18n/lib/const.json');
let templates = require('./templates');
let langs = require('./languages');

main();

function main() {
    var plurals = transform(require('universal-i18n/lib/plurals.js'));
    for (let i of Object.keys(plurals)) {
        writePlural(plurals[i]);
    }
}

function transform(languages) {
    for (let i of Object.keys(languages)) {
        let language = languages[i];

        language = transformAddRulesList(language);
        language = transformConstToPosNumbers(language);
        language = transformJsCosmetics(language);
        language = transformRulesNames(language);
        language = transformLanguageName(language, i);

        languages[i] = language;
    }
    return languages;
}

function transformAddRulesList(language) {
    let constants = [
        'PLURAL_ZERO',
        'PLURAL_ONE',
        'PLURAL_TWO',
        'PLURAL_FEW',
        'PLURAL_MANY',
        'PLURAL_OTHER'
    ];

    let usedRules = [];

    let js = language.cardinal.toString();

    for (let cons of constants) {
        if (-1 !== js.indexOf('C.' + cons)) {
            usedRules.push(cons);
        }
    }

    language.rules = usedRules;

    return language;
}

function transformConstToPosNumbers(language) {
    let js = language.cardinal.toString();
    language.rules.forEach(function(name, pos) {
        js = js.replace(new RegExp('C\.' + name, 'g'), pos);
    });
    return {
        js,
        rules: language.rules
    };
}

function transformJsCosmetics(language) {
    language.js = language.js.replace(new RegExp('"', 'g'), '\'');
    language.js = language.js.replace(new RegExp('cardinal\\d{1,2}'), '');
    return language;
}

function transformRulesNames(language) {
    language.rules = language.rules.map(c => libConstants[c]);
    return language;
}

function transformLanguageName(language, code) {
    language.code = code;
    let names = [langs.getLanguageName(code), langs.getLanguageNativeName(code)];
    if (names[0]) {
        language.description = '(' + names.join(', ') + ')';
    } else {
        language.description = '';
    }
    return language;
}

function writePlural(language) {
    let file = language.code + '.js';
    fs.writeFile(__dirname + '/../node/' + file, templates.node(language), function (err) {
        if (err) throw err;
    });
    fs.writeFile(__dirname + '/../web/' + file, templates.web(language), function (err) {
        if (err) throw err;
    });
}