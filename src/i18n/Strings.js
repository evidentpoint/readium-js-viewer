//  Copyright (c) 2014 Readium Foundation and/or its licensees. All rights reserved.
//
//  Redistribution and use in source and binary forms, with or without modification,
//  are permitted provided that the following conditions are met:
//  1. Redistributions of source code must retain the above copyright notice, this
//  list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright notice,
//  this list of conditions and the following disclaimer in the documentation and/or
//  other materials provided with the distribution.
//  3. Neither the name of the organization nor the names of its contributors may be
//  used to endorse or promote products derived from this software without specific
//  prior written permission.

import de from './_locales/de/messages.json';
import es from './_locales/es/messages.json';
import en_US from './_locales/en_US/messages.json';
import fr from './_locales/fr/messages.json';
import it from './_locales/it/messages.json';
import id from './_locales/id/messages.json';
import ja from './_locales/ja/messages.json';
import ko from './_locales/ko/messages.json';
import pt_BR from './_locales/pt_BR/messages.json';
import zh_CN from './_locales/zh_CN/messages.json';
import zh_TW from './_locales/zh_TW/messages.json';

var Strings = {};

Strings['de'] = de;
Strings['es'] = es;
Strings['en_US'] = en_US;
Strings['fr'] = fr;
Strings['id'] = id;
Strings['it'] = it;
Strings['ja'] = ja;
Strings['ko'] = ko;
Strings['pt_BR'] = pt_BR;
Strings['zh_CN'] = zh_CN;
Strings['zh_TW'] = zh_TW;

var language = navigator.userLanguage || navigator.language;
//FORCE HERE (for testing)
//language="es";
console.log('Language: [' + language + ']');

var allowEnglishFallback = true;

var i18nObj = Strings[language] || en_US;
var i18nObj_en = i18nObj === en_US ? i18nObj : en_US;

for (var prop in i18nObj_en) {
  var okay = prop in i18nObj;
  if (!okay) console.log('Language [' + language + '], missing string: [' + prop + ']');

  i18nObj[prop] = okay
    ? i18nObj[prop].message
    : allowEnglishFallback
      ? '*' + i18nObj_en[prop].message
      : '';
}

export default i18nObj;
