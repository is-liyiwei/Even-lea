(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50d59591","chunk-2d0c46cf"],{"245d":function(o,l,e){"use strict";e.r(l),e.d(l,"default",(function(){return s}));var t=e("3b7a"),a={all_lowercase:!0,gmail_lowercase:!0,gmail_remove_dots:!0,gmail_remove_subaddress:!0,gmail_convert_googlemaildotcom:!0,outlookdotcom_lowercase:!0,outlookdotcom_remove_subaddress:!0,yahoo_lowercase:!0,yahoo_remove_subaddress:!0,yandex_lowercase:!0,icloud_lowercase:!0,icloud_remove_subaddress:!0},i=["icloud.com","me.com"],m=["hotmail.at","hotmail.be","hotmail.ca","hotmail.cl","hotmail.co.il","hotmail.co.nz","hotmail.co.th","hotmail.co.uk","hotmail.com","hotmail.com.ar","hotmail.com.au","hotmail.com.br","hotmail.com.gr","hotmail.com.mx","hotmail.com.pe","hotmail.com.tr","hotmail.com.vn","hotmail.cz","hotmail.de","hotmail.dk","hotmail.es","hotmail.fr","hotmail.hu","hotmail.id","hotmail.ie","hotmail.in","hotmail.it","hotmail.jp","hotmail.kr","hotmail.lv","hotmail.my","hotmail.ph","hotmail.pt","hotmail.sa","hotmail.sg","hotmail.sk","live.be","live.co.uk","live.com","live.com.ar","live.com.mx","live.de","live.es","live.eu","live.fr","live.it","live.nl","msn.com","outlook.at","outlook.be","outlook.cl","outlook.co.il","outlook.co.nz","outlook.co.th","outlook.com","outlook.com.ar","outlook.com.au","outlook.com.br","outlook.com.gr","outlook.com.pe","outlook.com.tr","outlook.com.vn","outlook.cz","outlook.de","outlook.dk","outlook.es","outlook.fr","outlook.hu","outlook.id","outlook.ie","outlook.in","outlook.it","outlook.jp","outlook.kr","outlook.lv","outlook.my","outlook.ph","outlook.pt","outlook.sa","outlook.sg","outlook.sk","passport.com"],c=["rocketmail.com","yahoo.ca","yahoo.co.uk","yahoo.com","yahoo.de","yahoo.fr","yahoo.in","yahoo.it","ymail.com"],r=["yandex.ru","yandex.ua","yandex.kz","yandex.com","yandex.by","ya.ru"];function u(o){return o.length>1?o:""}function s(o,l){l=Object(t["default"])(l,a);var e=o.split("@"),s=e.pop(),n=e.join("@"),h=[n,s];if(h[1]=h[1].toLowerCase(),"gmail.com"===h[1]||"googlemail.com"===h[1]){if(l.gmail_remove_subaddress&&(h[0]=h[0].split("+")[0]),l.gmail_remove_dots&&(h[0]=h[0].replace(/\.+/g,u)),!h[0].length)return!1;(l.all_lowercase||l.gmail_lowercase)&&(h[0]=h[0].toLowerCase()),h[1]=l.gmail_convert_googlemaildotcom?"gmail.com":h[1]}else if(i.indexOf(h[1])>=0){if(l.icloud_remove_subaddress&&(h[0]=h[0].split("+")[0]),!h[0].length)return!1;(l.all_lowercase||l.icloud_lowercase)&&(h[0]=h[0].toLowerCase())}else if(m.indexOf(h[1])>=0){if(l.outlookdotcom_remove_subaddress&&(h[0]=h[0].split("+")[0]),!h[0].length)return!1;(l.all_lowercase||l.outlookdotcom_lowercase)&&(h[0]=h[0].toLowerCase())}else if(c.indexOf(h[1])>=0){if(l.yahoo_remove_subaddress){var d=h[0].split("-");h[0]=d.length>1?d.slice(0,-1).join("-"):d[0]}if(!h[0].length)return!1;(l.all_lowercase||l.yahoo_lowercase)&&(h[0]=h[0].toLowerCase())}else r.indexOf(h[1])>=0?((l.all_lowercase||l.yandex_lowercase)&&(h[0]=h[0].toLowerCase()),h[1]="yandex.ru"):l.all_lowercase&&(h[0]=h[0].toLowerCase());return h.join("@")}},"3b7a":function(o,l,e){"use strict";function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;for(var e in l)"undefined"===typeof o[e]&&(o[e]=l[e]);return o}e.r(l),e.d(l,"default",(function(){return t}))}}]);