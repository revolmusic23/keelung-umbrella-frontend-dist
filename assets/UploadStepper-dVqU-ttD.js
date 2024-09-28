import{_ as ee,e as F,f as P,g as le,r as w,o as S,h as V,b as x,w as E,F as T,i as L,a as R,d as k,t as q,j as C,u as N,c as z,k as oe,l as $,m as te,n as re,p as ue}from"./index-Bt-L2twE.js";import{s as ce}from"./services-vMF6gtvx.js";import{c as fe}from"./cors-anywhere-CZnAS8i4.js";var K={exports:{}};/*!
 * validate.js 0.13.1
 *
 * (c) 2013-2019 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */(function(c,p){(function(D,y,d){var g=function(e,t,n){n=r.extend({},r.options,n);var s=r.runValidations(e,t,n);if(s.some(function(l){return r.isPromise(l.error)}))throw new Error("Use validate.async if you want support for promises");return g.processValidationResults(s,n)},r=g;r.extend=function(e){return[].slice.call(arguments,1).forEach(function(t){for(var n in t)e[n]=t[n]}),e},r.extend(g,{version:{major:0,minor:13,patch:1,metadata:null,toString:function(){var e=r.format("%{major}.%{minor}.%{patch}",r.version);return r.isEmpty(r.version.metadata)||(e+="+"+r.version.metadata),e}},Promise:typeof Promise<"u"?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(e,t,n){var s=[],l,i,u,a,o,f,m;(r.isDomElement(e)||r.isJqueryElement(e))&&(e=r.collectFormValues(e));for(l in t){u=r.getDeepObjectValue(e,l),a=r.result(t[l],u,e,l,n,t);for(i in a){if(o=r.validators[i],!o)throw m=r.format("Unknown validator %{name}",{name:i}),new Error(m);f=a[i],f=r.result(f,u,e,l,n,t),f&&s.push({attribute:l,value:u,validator:i,globalOptions:n,attributes:e,options:f,error:o.call(o,u,f,l,e,n)})}}return s},processValidationResults:function(e,t){e=r.pruneEmptyErrors(e,t),e=r.expandMultipleErrors(e,t),e=r.convertErrorMessages(e,t);var n=t.format||"grouped";if(typeof r.formatters[n]=="function")e=r.formatters[n](e);else throw new Error(r.format("Unknown format %{format}",t));return r.isEmpty(e)?void 0:e},async:function(e,t,n){n=r.extend({},r.async.options,n);var s=n.wrapErrors||function(i){return i};n.cleanAttributes!==!1&&(e=r.cleanAttributes(e,t));var l=r.runValidations(e,t,n);return new r.Promise(function(i,u){r.waitForResults(l).then(function(){var a=r.processValidationResults(l,n);a?u(new s(a,n,e,t)):i(e)},function(a){u(a)})})},single:function(e,t,n){return n=r.extend({},r.single.options,n,{format:"flat",fullMessages:!1}),r({single:e},{single:t},n)},waitForResults:function(e){return e.reduce(function(t,n){return r.isPromise(n.error)?t.then(function(){return n.error.then(function(s){n.error=s||null})}):t},new r.Promise(function(t){t()}))},result:function(e){var t=[].slice.call(arguments,1);return typeof e=="function"&&(e=e.apply(null,t)),e},isNumber:function(e){return typeof e=="number"&&!isNaN(e)},isFunction:function(e){return typeof e=="function"},isInteger:function(e){return r.isNumber(e)&&e%1===0},isBoolean:function(e){return typeof e=="boolean"},isObject:function(e){return e===Object(e)},isDate:function(e){return e instanceof Date},isDefined:function(e){return e!=null},isPromise:function(e){return!!e&&r.isFunction(e.then)},isJqueryElement:function(e){return e&&r.isString(e.jquery)},isDomElement:function(e){return!e||!e.querySelectorAll||!e.querySelector?!1:r.isObject(document)&&e===document?!0:typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},isEmpty:function(e){var t;if(!r.isDefined(e))return!0;if(r.isFunction(e))return!1;if(r.isString(e))return r.EMPTY_STRING_REGEXP.test(e);if(r.isArray(e))return e.length===0;if(r.isDate(e))return!1;if(r.isObject(e)){for(t in e)return!1;return!0}return!1},format:r.extend(function(e,t){return r.isString(e)?e.replace(r.format.FORMAT_REGEXP,function(n,s,l){return s==="%"?"%{"+l+"}":String(t[l])}):e},{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(e){return r.isNumber(e)?e*100%1===0?""+e:parseFloat(Math.round(e*100)/100).toFixed(2):r.isArray(e)?e.map(function(t){return r.prettify(t)}).join(", "):r.isObject(e)?r.isDefined(e.toString)?e.toString():JSON.stringify(e):(e=""+e,e.replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,function(t,n,s){return""+n+" "+s.toLowerCase()}).toLowerCase())},stringifyValue:function(e,t){var n=t&&t.prettify||r.prettify;return n(e)},isString:function(e){return typeof e=="string"},isArray:function(e){return{}.toString.call(e)==="[object Array]"},isHash:function(e){return r.isObject(e)&&!r.isArray(e)&&!r.isFunction(e)},contains:function(e,t){return r.isDefined(e)?r.isArray(e)?e.indexOf(t)!==-1:t in e:!1},unique:function(e){return r.isArray(e)?e.filter(function(t,n,s){return s.indexOf(t)==n}):e},forEachKeyInKeypath:function(e,t,n){if(r.isString(t)){var s="",l,i=!1;for(l=0;l<t.length;++l)switch(t[l]){case".":i?(i=!1,s+="."):(e=n(e,s,!1),s="");break;case"\\":i?(i=!1,s+="\\"):i=!0;break;default:i=!1,s+=t[l];break}return n(e,s,!0)}},getDeepObjectValue:function(e,t){if(r.isObject(e))return r.forEachKeyInKeypath(e,t,function(n,s){if(r.isObject(n))return n[s]})},collectFormValues:function(e,t){var n={},s,l,i,u,a,o;if(r.isJqueryElement(e)&&(e=e[0]),!e)return n;for(t=t||{},u=e.querySelectorAll("input[name], textarea[name]"),s=0;s<u.length;++s)if(i=u.item(s),!r.isDefined(i.getAttribute("data-ignored"))){var f=i.name.replace(/\./g,"\\\\.");o=r.sanitizeFormValue(i.value,t),i.type==="number"?o=o?+o:null:i.type==="checkbox"?i.attributes.value?i.checked||(o=n[f]||null):o=i.checked:i.type==="radio"&&(i.checked||(o=n[f]||null)),n[f]=o}for(u=e.querySelectorAll("select[name]"),s=0;s<u.length;++s)if(i=u.item(s),!r.isDefined(i.getAttribute("data-ignored"))){if(i.multiple){o=[];for(l in i.options)a=i.options[l],a&&a.selected&&o.push(r.sanitizeFormValue(a.value,t))}else{var m=typeof i.options[i.selectedIndex]<"u"?i.options[i.selectedIndex].value:"";o=r.sanitizeFormValue(m,t)}n[i.name]=o}return n},sanitizeFormValue:function(e,t){return t.trim&&r.isString(e)&&(e=e.trim()),t.nullify!==!1&&e===""?null:e},capitalize:function(e){return r.isString(e)?e[0].toUpperCase()+e.slice(1):e},pruneEmptyErrors:function(e){return e.filter(function(t){return!r.isEmpty(t.error)})},expandMultipleErrors:function(e){var t=[];return e.forEach(function(n){r.isArray(n.error)?n.error.forEach(function(s){t.push(r.extend({},n,{error:s}))}):t.push(n)}),t},convertErrorMessages:function(e,t){t=t||{};var n=[],s=t.prettify||r.prettify;return e.forEach(function(l){var i=r.result(l.error,l.value,l.attribute,l.options,l.attributes,l.globalOptions);if(!r.isString(i)){n.push(l);return}i[0]==="^"?i=i.slice(1):t.fullMessages!==!1&&(i=r.capitalize(s(l.attribute))+" "+i),i=i.replace(/\\\^/g,"^"),i=r.format(i,{value:r.stringifyValue(l.value,t)}),n.push(r.extend({},l,{error:i}))}),n},groupErrorsByAttribute:function(e){var t={};return e.forEach(function(n){var s=t[n.attribute];s?s.push(n):t[n.attribute]=[n]}),t},flattenErrorsToArray:function(e){return e.map(function(t){return t.error}).filter(function(t,n,s){return s.indexOf(t)===n})},cleanAttributes:function(e,t){function n(i,u,a){return r.isObject(i[u])?i[u]:i[u]=a?!0:{}}function s(i){var u={},a;for(a in i)i[a]&&r.forEachKeyInKeypath(u,a,n);return u}function l(i,u){if(!r.isObject(i))return i;var a=r.extend({},i),o,f;for(f in i)o=u[f],r.isObject(o)?a[f]=l(a[f],o):o||delete a[f];return a}return!r.isObject(t)||!r.isObject(e)?{}:(t=s(t),l(e,t))},exposeModule:function(e,t,n,s,l){n?(s&&s.exports&&(n=s.exports=e),n.validate=e):(t.validate=e,e.isFunction(l)&&l.amd&&l([],function(){return e}))},warn:function(e){typeof console<"u"&&console.warn&&console.warn("[validate.js] "+e)},error:function(e){typeof console<"u"&&console.error&&console.error("[validate.js] "+e)}}),g.validators={presence:function(e,t){if(t=r.extend({},this.options,t),t.allowEmpty!==!1?!r.isDefined(e):r.isEmpty(e))return t.message||this.message||"can't be blank"},length:function(e,t,n){if(r.isDefined(e)){t=r.extend({},this.options,t);var s=t.is,l=t.maximum,i=t.minimum,u=t.tokenizer||function(m){return m},a,o=[];e=u(e);var f=e.length;if(!r.isNumber(f))return t.message||this.notValid||"has an incorrect length";if(r.isNumber(s)&&f!==s&&(a=t.wrongLength||this.wrongLength||"is the wrong length (should be %{count} characters)",o.push(r.format(a,{count:s}))),r.isNumber(i)&&f<i&&(a=t.tooShort||this.tooShort||"is too short (minimum is %{count} characters)",o.push(r.format(a,{count:i}))),r.isNumber(l)&&f>l&&(a=t.tooLong||this.tooLong||"is too long (maximum is %{count} characters)",o.push(r.format(a,{count:l}))),o.length>0)return t.message||o}},numericality:function(e,t,n,s,l){if(r.isDefined(e)){t=r.extend({},this.options,t);var i=[],u,a,o={greaterThan:function(h,b){return h>b},greaterThanOrEqualTo:function(h,b){return h>=b},equalTo:function(h,b){return h===b},lessThan:function(h,b){return h<b},lessThanOrEqualTo:function(h,b){return h<=b},divisibleBy:function(h,b){return h%b===0}},f=t.prettify||l&&l.prettify||r.prettify;if(r.isString(e)&&t.strict){var m="^-?(0|[1-9]\\d*)";if(t.onlyInteger||(m+="(\\.\\d+)?"),m+="$",!new RegExp(m).test(e))return t.message||t.notValid||this.notValid||this.message||"must be a valid number"}if(t.noStrings!==!0&&r.isString(e)&&!r.isEmpty(e)&&(e=+e),!r.isNumber(e))return t.message||t.notValid||this.notValid||this.message||"is not a number";if(t.onlyInteger&&!r.isInteger(e))return t.message||t.notInteger||this.notInteger||this.message||"must be an integer";for(u in o)if(a=t[u],r.isNumber(a)&&!o[u](e,a)){var M="not"+r.capitalize(u),_=t[M]||this[M]||this.message||"must be %{type} %{count}";i.push(r.format(_,{count:a,type:f(u)}))}if(t.odd&&e%2!==1&&i.push(t.notOdd||this.notOdd||this.message||"must be odd"),t.even&&e%2!==0&&i.push(t.notEven||this.notEven||this.message||"must be even"),i.length)return t.message||i}},datetime:r.extend(function(e,t){if(!r.isFunction(this.parse)||!r.isFunction(this.format))throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");if(r.isDefined(e)){t=r.extend({},this.options,t);var n,s=[],l=t.earliest?this.parse(t.earliest,t):NaN,i=t.latest?this.parse(t.latest,t):NaN;if(e=this.parse(e,t),isNaN(e)||t.dateOnly&&e%864e5!==0)return n=t.notValid||t.message||this.notValid||"must be a valid date",r.format(n,{value:arguments[0]});if(!isNaN(l)&&e<l&&(n=t.tooEarly||t.message||this.tooEarly||"must be no earlier than %{date}",n=r.format(n,{value:this.format(e,t),date:this.format(l,t)}),s.push(n)),!isNaN(i)&&e>i&&(n=t.tooLate||t.message||this.tooLate||"must be no later than %{date}",n=r.format(n,{date:this.format(i,t),value:this.format(e,t)}),s.push(n)),s.length)return r.unique(s)}},{parse:null,format:null}),date:function(e,t){return t=r.extend({},t,{dateOnly:!0}),r.validators.datetime.call(r.validators.datetime,e,t)},format:function(e,t){(r.isString(t)||t instanceof RegExp)&&(t={pattern:t}),t=r.extend({},this.options,t);var n=t.message||this.message||"is invalid",s=t.pattern,l;if(r.isDefined(e)&&(!r.isString(e)||(r.isString(s)&&(s=new RegExp(t.pattern,t.flags)),l=s.exec(e),!l||l[0].length!=e.length)))return n},inclusion:function(e,t){if(r.isDefined(e)&&(r.isArray(t)&&(t={within:t}),t=r.extend({},this.options,t),!r.contains(t.within,e))){var n=t.message||this.message||"^%{value} is not included in the list";return r.format(n,{value:e})}},exclusion:function(e,t){if(r.isDefined(e)&&(r.isArray(t)&&(t={within:t}),t=r.extend({},this.options,t),!!r.contains(t.within,e))){var n=t.message||this.message||"^%{value} is restricted";return r.isString(t.within[e])&&(e=t.within[e]),r.format(n,{value:e})}},email:r.extend(function(e,t){t=r.extend({},this.options,t);var n=t.message||this.message||"is not a valid email";if(r.isDefined(e)&&(!r.isString(e)||!this.PATTERN.exec(e)))return n},{PATTERN:/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i}),equality:function(e,t,n,s,l){if(r.isDefined(e)){r.isString(t)&&(t={attribute:t}),t=r.extend({},this.options,t);var i=t.message||this.message||"is not equal to %{attribute}";if(r.isEmpty(t.attribute)||!r.isString(t.attribute))throw new Error("The attribute must be a non empty string");var u=r.getDeepObjectValue(s,t.attribute),a=t.comparator||function(f,m){return f===m},o=t.prettify||l&&l.prettify||r.prettify;if(!a(e,u,t,n,s))return r.format(i,{attribute:o(t.attribute)})}},url:function(e,t){if(r.isDefined(e)){t=r.extend({},this.options,t);var n=t.message||this.message||"is not a valid url",s=t.schemes||this.schemes||["http","https"],l=t.allowLocal||this.allowLocal||!1,i=t.allowDataUrl||this.allowDataUrl||!1;if(!r.isString(e))return n;var u="^(?:(?:"+s.join("|")+")://)(?:\\S+(?::\\S*)?@)?(?:",a="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";if(l?a+="?":u+="(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",u+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"+a+")(?::\\d{2,5})?(?:[/?#]\\S*)?$",i){var o="\\w+\\/[-+.\\w]+(?:;[\\w=]+)*",f="[A-Za-z0-9-_.!~\\*'();\\/?:@&=+$,%]*",m="data:(?:"+o+")?(?:;base64)?,"+f;u="(?:"+u+")|(?:^"+m+"$)"}var M=new RegExp(u,"i");if(!M.exec(e))return n}},type:r.extend(function(e,t,n,s,l){if(r.isString(t)&&(t={type:t}),!!r.isDefined(e)){var i=r.extend({},this.options,t),u=i.type;if(!r.isDefined(u))throw new Error("No type was specified");var a;if(r.isFunction(u)?a=u:a=this.types[u],!r.isFunction(a))throw new Error("validate.validators.type.types."+u+" must be a function.");if(!a(e,i,n,s,l)){var o=t.message||this.messages[u]||this.message||i.message||(r.isFunction(u)?"must be of the correct type":"must be of type %{type}");return r.isFunction(o)&&(o=o(e,t,n,s,l)),r.format(o,{attribute:r.prettify(n),type:u})}}},{types:{object:function(e){return r.isObject(e)&&!r.isArray(e)},array:r.isArray,integer:r.isInteger,number:r.isNumber,string:r.isString,date:r.isDate,boolean:r.isBoolean},messages:{}})},g.formatters={detailed:function(e){return e},flat:r.flattenErrorsToArray,grouped:function(e){var t;e=r.groupErrorsByAttribute(e);for(t in e)e[t]=r.flattenErrorsToArray(e[t]);return e},constraint:function(e){var t;e=r.groupErrorsByAttribute(e);for(t in e)e[t]=e[t].map(function(n){return n.validator}).sort();return e}},g.exposeModule(g,this,D,y,d)}).call(fe,p,c,null)})(K,K.exports);const j="此欄位不得為空",ne=(c,p)=>`${c}必須是 ${p} 個字元`,de=c=>`${c}格式不正確`,me=c=>`此欄位不得超過 ${c} 個字`,ge=["基隆市政府 員工、評審及配偶及二親等以內血 姻 親 均 不得參與比賽 ，有違反而得獎者，撤銷其參賽與得獎資格。","凡上傳作品完成報名參加本活動者，即視為已充分瞭解本辦法中各項條款，且願意完全遵守本活動之各項規定。","參賽作品不得含有任何具挑釁、猥褻、毀謗、暴力、情色、種族歧視性或其他任何引人厭惡或不合宜之內容，主辦單位得自行判斷並 有權下架作品不另行通知 。","主辦單位保留隨時修正、暫停、終止或解釋本活動之一切及 最 終權利（包括但不限於更換活動、提前終止或延長活動時間之 最 終決定權等事項），相關內容如有變動將於 比賽 活動 網 站 及 文化觀光局臉書 另行公告，不另行通知， 若有任何異動，以本競賽活動官方網站最新公告為準。","若得獎獎項價值累計超過新台幣 1,001 元 含 以上者而未滿 1 8 歲之中獎者，視同父母或監護人中獎，由父母或監護人代為領獎，並請附上得獎者及其代領人關係證明影本。","本活動如有任何因電腦、網路、技術或其他不可歸責於主辦單位之事由，而使活動參加者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無 效之狀況，主辦單位不負任何法律責任，本活動參加者及獲採用者亦不得異議。如發生前述情形，主辦單位將不做任何通知。","本活動參加者應聲明及保證其所填寫或提出之資料均為真實，且未冒用或盜用任何第三人之資料，概與主辦單位無關，參賽者保證所有填寫或提出之資料均為真實且正確，且未冒用或盜用任何第三人之資料。如有不實或不正確之情事，將被被取消參加或得獎資格。如因此導致主辦單位無法通知其得獎訊息時，主辦取消參加或得獎資格。如因此導致主辦單位無法通知其得獎訊息時，主辦單位不負任何責任，且如有致損害於主辦單位或其他任何第三人，參賽者應自負一切相關責任。自負一切相關責任。","參賽者在參賽之同時，即代表參賽者同意且未違反與第三者之協議、保證參賽作品未侵犯其他任何個人或實體之版權、商標權、人格權、隱私／公開權、以及智慧財產權，且未有第三者對該參賽作品具備任何權利、所有權、權、以及智慧財產權，且未有第三者對該參賽作品具備任何權利、所有權、主張擁有或相關利益，亦未有違反其他法令情事。如有違反之虞，主辦單位主張擁有或相關利益，亦未有違反其他法令情事。如有違反之虞，主辦單位得立即移除相關內容，並取消其參賽與得獎資格，並追回一切獎項，且參賽得立即移除相關內容，並取消其參賽與得獎資格，並追回一切獎項，且參賽者須自負法律責任。者須自負法律責任。","參賽者應尊重評審觀點，對於評審結果不得異議，經評審得獎確定之作品，參賽者應尊重評審觀點，對於評審結果不得異議，經評審得獎確定之作品，不得要求取消得獎資格。不得要求取消得獎資格。","若主辦單位因使用參賽者所提供之圖文、照片及其他資料遭第三人請求、索若主辦單位因使用參賽者所提供之圖文、照片及其他資料遭第三人請求、索賠、提出民、刑事訴訟或主張任何法律上之權利，參賽者應賠償主辦單位因賠、提出民、刑事訴訟或主張任何法律上之權利，參賽者應賠償主辦單位因此所生之全部損失與費用。此所生之全部損失與費用。","參賽者如因參加本活動或因活動獎項而遭受任何損失，主辦單位不負任何責參賽者如因參加本活動或因活動獎項而遭受任何損失，主辦單位不負任何責任。一旦得獎者領取獎品後，若有遺失或被竊，主辦單位不發給任何證明或任。一旦得獎者領取獎品後，若有遺失或被竊，主辦單位不發給任何證明或補償。補償。","本辦法若有其他未盡事宜，悉依主辦單位相關規定或解釋辦理，主辦單位保本辦法若有其他未盡事宜，悉依主辦單位相關規定或解釋辦理，主辦單位保有有最最終之解釋權。終之解釋權。"],Z="身分證字號",Y="手機號碼",G="電子郵件地址",X=()=>[c=>!!c||j],he=()=>[c=>!!c||j,c=>c.length===10||ne(Z,10),c=>/^[A-Z][12]\d{8}$/.test(c)||de(Z)],pe=()=>[c=>!!c||j,c=>c.length===10||ne(Y,10),c=>/^09\d{8}$/.test(c)||`${Y}必須為 09 開頭的 10 位數字`],ve=()=>[c=>!!c||j,c=>!c||c.length<=255||`${G}不能超過 255 個字元`,c=>!c||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)||`請輸入有效的${G}`,c=>!c||/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(c)||`${G}格式不正確`],ye=c=>[p=>!!p||j,p=>p.length<c||me(c)],xe=c=>[p=>p.length>0||"請選擇圖片",p=>!p||p[0].size<=c*1024*1024||`圖片大小不能超過 ${c} MB`],_e={class:"mb-2"},we={key:0,style:{color:"red"}},be={class:"mb-2"},Ee={key:0,style:{color:"red"}},Q=50,W=50,Se={__name:"UserForm",props:{userFormData:Object,imgFormData:Object,imgUrl:String},emits:["update:imgUrl"],setup(c,{expose:p,emit:D}){const y=F(null),d=c,g=D,r=d.userFormData,e=[{id:"name",label:"姓名",required:!0,rules:X()},{id:"idNo",label:"身分證字號",required:!0,counter:10,rules:he()},{id:"phone",label:"手機號碼",required:!0,counter:10,rules:pe()},{id:"email",label:"E-mail",required:!0,rules:ve()}],t=F(null),n=d.imgFormData,s=F(null);P(s,u=>{g("update:imgUrl",u)}),P(()=>n.img,u=>{console.log("Image file:",u),u&&(s.value=URL.createObjectURL(u),console.log("Image url:",s.value))});const l=[{id:"author",label:"作者",required:!0,rules:X()},{id:"title",label:"圖片名稱",required:!0,rules:X()},{id:"description",label:`圖片敘述（最多 ${W} 字）`,required:!0,counter:W,rules:ye(W)}];return le(()=>{URL.revokeObjectURL(s.value)}),p({validate:async()=>{const u=await y.value.validate(),a=await t.value.validate();return u.valid&&a.valid}}),(u,a)=>{const o=w("v-text-field"),f=w("v-form"),m=w("v-img"),M=w("v-icon"),_=w("v-card-text"),h=w("v-card"),b=w("v-file-input");return S(),V(T,null,[x(f,{ref_key:"userFormRef",ref:y},{default:E(()=>[(S(),V(T,null,L(e,v=>R("div",{key:v.id,class:"mb-4"},[R("h5",_e,[k(q(v.label)+" ",1),v.required?(S(),V("span",we,"*")):C("",!0)]),x(o,{variant:"outlined",color:"var(--primary-blue)",modelValue:N(r)[v.id],"onUpdate:modelValue":A=>N(r)[v.id]=A,rules:v.rules?v.rules:[],counter:v.counter,density:"compact"},null,8,["modelValue","onUpdate:modelValue","rules","counter"])])),64))]),_:1},512),x(f,{ref_key:"imgFormRef",ref:t},{default:E(()=>[x(h,{class:"border mb-4","min-height":"200"},{default:E(()=>[N(n).img?(S(),z(m,{key:0,src:s.value},null,8,["src"])):(S(),z(_,{key:1},{default:E(()=>[x(M,{size:"50",class:"mb-2"},{default:E(()=>a[1]||(a[1]=[k("mdi-image")])),_:1}),R("p",null,[a[2]||(a[2]=k(" 支援格式有 png/jpg 檔，")),a[3]||(a[3]=R("br",null,null,-1)),k(" 最大限制為 "+q(Q)+" MB。 ")])]),_:1}))]),_:1}),x(b,{label:"上傳圖片",accept:"image/*","prepend-icon":"","append-inner-icon":"mdi-camera",modelValue:N(n).img,"onUpdate:modelValue":a[0]||(a[0]=v=>N(n).img=v),variant:"solo-filled",density:"compact",rules:N(xe)(Q),class:"mb-4"},null,8,["modelValue","rules"]),(S(),V(T,null,L(l,v=>R("div",{key:v.id,class:"mb-4"},[R("h5",be,[k(q(v.label)+" ",1),v.required?(S(),V("span",Ee,"*")):C("",!0)]),(S(),z(oe(v.id==="description"?"v-textarea":"v-text-field"),{variant:"outlined",color:"var(--primary-blue)",modelValue:N(n)[v.id],"onUpdate:modelValue":A=>N(n)[v.id]=A,rules:v.rules||[],counter:v.counter,density:"compact"},null,8,["modelValue","onUpdate:modelValue","rules","counter"]))])),64))]),_:1},512)],64)}}},De=ee(Se,[["__scopeId","data-v-6e135d2a"]]),Fe=["width","height"],Ae=["src"],H=450,O=20,Ne={__name:"PolaroidImage",props:{imgSrc:{type:String},title:{type:String},description:{type:String}},setup(c){const p=c;$({});const D=F(null),y=F(null),d=$({width:0,height:0}),g=$({width:H,height:0});te(async()=>{p.imgSrc&&await e(p.imgSrc)}),P(()=>p.imgSrc,async a=>{a&&await e(p.imgSrc)});const r=a=>new Promise((o,f)=>{const m=new Image;m.crossOrigin="Anonymous",m.onload=()=>o(m),m.onerror=f,m.src=a}),e=async a=>{try{if(!a)return;y.value=await r(p.imgSrc||a),console.log(y.value.width,y.value.height),n(y.value.width,y.value.height),t(d.width,d.height);const o=document.createElement("canvas");o.width=g.width,o.height=g.height,console.log(g,d);const f=o.getContext("2d");s(f),l(f),i(f),D.value=o.toDataURL("image/png")}catch(o){console.error("Error generating image:",o)}},t=(a,o)=>{g.width=H,g.height=o+120},n=(a,o)=>{d.width=H-O*2,a===o?d.height=d.width:a>o?d.height=d.width*Math.max(o/a,9/16):d.height=d.width*Math.min(o/a,3/2),console.log(d)},s=a=>{a.fillStyle="GhostWhite",a.fillRect(0,0,g.width,g.height)},l=a=>{const o=d.width/y.value.width,f={width:y.value.width*o,height:y.value.height*o};console.log(y.value.width,y.value.height),console.log(d),console.log(f);const m={x:(f.width-d.width)/2,y:(f.height-d.height)/2};console.log(m),a.drawImage(y.value,m.x,m.y,d.width/o,d.height/o,O,O,d.width,d.height)},i=a=>{let o=O+d.height+40;o=u(a,p.title?p.title:"-",20,g.width-O*2,o),o+=10,u(a,p.description?p.description:"-",14,g.width-O*2,o)},u=(a,o,f,m,M)=>{a.font=`${f}px Arial`,a.fillStyle="black";const _=o.split(" ");let h="",b=f*1.2,v=M;for(let A=0;A<_.length;A++){let I=h+_[A]+" ";a.measureText(I).width>m&&A>0?(a.fillText(h,O,v),h=_[A]+" ",v+=b):h=I}return a.fillText(h,O,v),v+b};return(a,o)=>(S(),V(T,null,[R("canvas",{ref:"canvas",width:g.width,height:g.height,style:{display:"none"}},null,8,Fe),D.value?(S(),V("img",{key:0,src:D.value,style:{width:"100%","box-shadow":"0 4px 8px rgba(0, 0, 0, 0.1)"}},null,8,Ae)):C("",!0)],64))}},Ve={__name:"PolaroidPreview",props:{imgFormData:Object,imgUrl:String},setup(c){return(p,D)=>(S(),z(Ne,{imgSrc:c.imgUrl,title:c.imgFormData.title,description:c.imgFormData.description},null,8,["imgSrc","title","description"]))}},Me={class:"d-flex flex-column text-start pl-4 pl-md-6 rounded-lg"},Ue={__name:"AgreeModal",props:{showModal:Boolean},emits:["update:showModal","agree-notice"],setup(c,{emit:p}){re();const D=c,y=p,d=F(!1),g=F(!1),r=()=>{d.value=!1,y("agree-notice")};return P(()=>D.showModal,e=>{d.value=e}),P(d,e=>{y("update:showModal",e)}),(e,t)=>{const n=w("v-checkbox"),s=w("v-btn"),l=w("XBaseModal");return S(),z(l,{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=i=>d.value=i)},{title:E(()=>t[2]||(t[2]=[R("div",{class:"ml-4 mt-2"},"注意事項",-1)])),text:E(()=>[R("ol",Me,[(S(!0),V(T,null,L(N(ge),(i,u)=>(S(),V("li",{key:u,class:"mb-4"},q(i),1))),128))]),x(n,{modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=i=>g.value=i),label:"我已詳閱並同意以上注意事項",class:"ml-n2",color:"var(--primary-orange)","hide-details":""},null,8,["modelValue"])]),actions:E(()=>[x(s,{class:"btn-orange mb-2 mr-2",disabled:!g.value,onClick:r},{default:E(()=>t[3]||(t[3]=[k("送出")])),_:1},8,["disabled"])]),_:1},8,["modelValue"])}}},Re={class:"button-container"},ke={__name:"UploadStepper",setup(c){const p=re(),D={user:{idx:1,title:"基本資料填寫"},polaroid:{idx:2,title:"生成拍立得"}},y=F(1),d=Object.keys(D).length;ue(()=>y.value>=d);const g=$({}),r=$({}),e=F(""),t=F(null);F(null);const n=F(!1);te(()=>{const _=JSON.parse(localStorage.getItem("userInfo"));_&&s(_)});const s=_=>{g.name=_.name,g.phone=_.phone,g.email=_.email},l=()=>{y.value--},i=()=>{y.value++},u=async()=>{await t.value.validate()&&(a(),i())},a=()=>{let _={name:g.name,phone:g.phone,email:g.email};localStorage.setItem("userInfo",JSON.stringify(_))},o=async()=>{n.value=!0;const[_,h]=await ce.postImg(g,r);h?p.push({name:"UploadComplete"}):(f.value=_,m.error=!0),n.value=!1},f=F(""),m=$({agree:!1,error:!1}),M={agree:()=>{m.agree=!0}};return(_,h)=>{const b=w("v-stepper-item"),v=w("v-divider"),A=w("v-stepper-header"),I=w("v-btn"),B=w("v-stepper-window-item"),J=w("v-stepper-window"),ie=w("v-stepper"),ae=w("XErrorModal"),se=w("v-container");return S(),z(se,{class:"pa-0 mt-sm-4","max-width":"500"},{default:E(()=>[x(ie,{"model-value":y.value},{default:E(()=>[x(A,null,{default:E(()=>[(S(),V(T,null,L(D,U=>(S(),V(T,{key:U.idx},[x(b,{title:U.title,value:U.idx},null,8,["title","value"]),U.idx<N(d)||N(d)<3?(S(),z(v,{key:0})):C("",!0)],64))),64))]),_:1}),x(J,null,{default:E(()=>[x(B,{value:D.user.idx},{default:E(()=>[x(De,{ref_key:"userFormRef",ref:t,userFormData:g,imgFormData:r,imgUrl:e.value,"onUpdate:imgUrl":h[0]||(h[0]=U=>e.value=U)},null,8,["userFormData","imgFormData","imgUrl"]),x(I,{class:"mt-2 btn-orange",block:"",onClick:u},{default:E(()=>h[3]||(h[3]=[k(" 下一步 ")])),_:1})]),_:1},8,["value"]),x(B,{value:D.polaroid.idx},{default:E(()=>[x(Ve,{imgFormData:r,imgUrl:e.value},null,8,["imgFormData","imgUrl"]),R("div",Re,[x(I,{onClick:l,variant:"tonal"},{default:E(()=>h[4]||(h[4]=[k("上一步")])),_:1}),x(I,{class:"btn-orange",onClick:M.agree,loading:n.value},{default:E(()=>h[5]||(h[5]=[k("送出")])),_:1},8,["onClick","loading"])])]),_:1},8,["value"])]),_:1})]),_:1},8,["model-value"]),x(Ue,{showModal:m.agree,"onUpdate:showModal":h[1]||(h[1]=U=>m.agree=U),onAgreeNotice:o},null,8,["showModal"]),x(ae,{showModal:m.error,"onUpdate:showModal":h[2]||(h[2]=U=>m.error=U),errorMessage:f.value},null,8,["showModal","errorMessage"])]),_:1})}}},Ie=ee(ke,[["__scopeId","data-v-0d26d737"]]);export{Ie as default};
