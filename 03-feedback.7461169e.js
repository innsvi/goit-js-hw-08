!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function i(e){return e&&e.constructor===Symbol?"symbol":typeof e}var r="Expected a function",o=NaN,u="[object Symbol]",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),g=Object.prototype.toString,p=Math.max,y=Math.min,b=function(){return v.Date.now()};function S(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function v(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function S(){var e=b();if(g(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?y(n,u-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?v(e):(i=o=void 0,a)}function O(){var e=b(),n=g(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(S,t),s?v(e):a}(l);if(d)return f=setTimeout(S,t),v(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=h(t)||0,j(n)&&(s=!!n.leading,u=(d="maxWait"in n)?p(h(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},O.flush=function(){return void 0===f?a:w(b())},O}function j(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==u}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):f.test(e)?o:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return j(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:i,maxWait:t,trailing:o})};var w={form:document.querySelector(".feedback-form"),mail:document.querySelector("input"),message:document.querySelector("textarea")},O="feedback-form-state",T={};function x(){var e=JSON.parse(localStorage.getItem(O));if(e)return w.mail.value=e.email,w.message.value=e.message,e}w.form.addEventListener("input",e(t)((function(){T.email=w.mail.value,T.message=w.message.value,localStorage.setItem(O,JSON.stringify(T))}),500)),w.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(x()),localStorage.removeItem(O),e.target.reset()})),x()}();
//# sourceMappingURL=03-feedback.7461169e.js.map
