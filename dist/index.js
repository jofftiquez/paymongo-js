"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var _classCallCheck=_interopDefault(require("@babel/runtime/helpers/classCallCheck")),_regeneratorRuntime=_interopDefault(require("@babel/runtime/regenerator")),_defineProperty=_interopDefault(require("@babel/runtime/helpers/defineProperty")),_slicedToArray=_interopDefault(require("@babel/runtime/helpers/slicedToArray")),_asyncToGenerator=_interopDefault(require("@babel/runtime/helpers/asyncToGenerator")),bent=_interopDefault(require("bent"));function ownKeys(r,e){var t,n=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,t)),n}function _objectSpread(r){for(var t,e=1;e<arguments.length;e++)t=null==arguments[e]?{}:arguments[e],e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))});return r}var PAYMONGO_API_URL="https://api.paymongo.com/v1",makeRequest=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r){var t,n,a,o,c,u,s;return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.data,n=r.method,a=r.path,o=r.secret,c={Authorization:"Basic ".concat(Buffer.from(o).toString("base64"))},u=bent(PAYMONGO_API_URL,n||"GET","json",c,200),a){e.next=5;break}throw new Error("API endpoint required");case 5:return s=[a],t&&s.push(t),e.abrupt("return",u.apply(void 0,s).catch(function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r){var t,n,a,o;return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:throw t=e.sent,n=t.errors,a=_slicedToArray(n,1),_objectSpread(_objectSpread({},o=a[0]),{},{message:o.detail});case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()));case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),createPaymentMethod=function(e,r){if(0===Object.entries(r).length||!r.constructor===Object)throw new Error("Data is required!");return makeRequest({secret:e,method:"POST",path:"/payment_methods",data:r})},retrievePaymentMethod=function(e,r){if(!r)throw new Error("PaymentMethod id is required.");return makeRequest({secret:e,method:"GET",path:"/payment_methods/".concat(r)})},createPaymentIntent=function(e,r){if(0===Object.entries(r).length||!r.constructor===Object)throw new Error("Data is required!");return makeRequest({secret:e,method:"POST",path:"/payment_intents",data:r})},retrievePaymentIntent=function(e,r){if(!r)throw new Error("PaymentIntent id is required.");return makeRequest({secret:e,method:"GET",path:"/payment_intents/".concat(r)})},attachToPaymentIntent=function(e,r,t){if(0===Object.entries(t).length||!t.constructor===Object)throw new Error("Data is required!");return makeRequest({secret:e,method:"POST",path:"/payment_intents/".concat(r,"/attach"),data:t})},createToken=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.warn("Deprecated: Tokens are now deprecated. https://developers.paymongo.com/reference#token-resource"),0===Object.entries(t).length||!t.constructor===Object)throw new Error("Data is required!");e.next=3;break;case 3:return e.abrupt("return",makeRequest({secret:r,method:"POST",path:"/tokens",data:t}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),retrieveToken=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.warn("Deprecated: Tokens are now deprecated. https://developers.paymongo.com/reference#token-resource"),t){e.next=3;break}throw new Error("Token id is required.");case 3:return e.abrupt("return",makeRequest({secret:r,method:"GET",path:"/tokens/".concat(t)}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),createSource=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.entries(t).length||!t.constructor===Object)throw new Error("Data is required!");e.next=2;break;case 2:return e.abrupt("return",makeRequest({secret:r,method:"POST",path:"/sources",data:t}));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),retrieveSource=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("Source id is required.");case 2:return e.abrupt("return",makeRequest({secret:r,method:"GET",path:"/sources/".concat(t)}));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),createPayment=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.entries(t).length||!t.constructor===Object)throw new Error("Data is required!");e.next=2;break;case 2:return e.abrupt("return",makeRequest({secret:r,method:"POST",path:"/payments",data:t}));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),retrievePayment=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("Payment id is required.");case 2:return e.abrupt("return",makeRequest({secret:r,method:"GET",path:"/payments/".concat(t)}));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),listPayments=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",makeRequest({secret:r,method:"GET",path:"/payments"}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),createWebhook=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===Object.entries(t).length||!t.constructor===Object)throw new Error("Data is required!");e.next=2;break;case 2:return e.abrupt("return",makeRequest({secret:r,method:"POST",path:"/webhooks",data:t}));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),retrieveWebhook=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",makeRequest({secret:r,method:"GET",path:"/webhooks/".concat(t)}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),listWebhooks=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",makeRequest({secret:r,method:"GET",path:"/webhooks"}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),toggleWebhook=function(){var e=_asyncToGenerator(_regeneratorRuntime.mark(function e(r,t,n){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("Webhook id is required.");case 2:if("enable"!==n&&"disable"!==n)throw new Error("Invalid action. Must be one of ('enable', 'disable')");e.next=4;break;case 4:return e.abrupt("return",makeRequest({secret:r,method:"POST",path:"/webhooks/".concat(t,"/").concat(n)}));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),Paymongo=function e(r){var t=this;if(_classCallCheck(this,e),e.instance instanceof e)return e.instance;if(!r)throw new Error("API key is required!");this.secret=r,this.paymentMethods={create:function(e){return createPaymentMethod(t.secret,e)},retrieve:function(e){return retrievePaymentMethod(t.secret,e)}},this.paymentIntents={create:function(e){return createPaymentIntent(t.secret,e)},retrieve:function(e){return retrievePaymentIntent(t.secret,e)},attach:function(e,r){return attachToPaymentIntent(t.secret,e,r)}},this.sources={create:function(e){return createSource(t.secret,e)},retrieve:function(e){return retrieveSource(t.secret,e)}},this.payments={create:function(e){return createPayment(t.secret,e)},retrieve:function(e){return retrievePayment(t.secret,e)},list:function(){return listPayments(t.secret)}},this.tokens={create:function(e){return createToken(t.secret,e)},retrieve:function(e){return retrieveToken(t.secret,e)}},this.webhooks={create:function(e){return createWebhook(t.secret,e)},retrieve:function(e){return retrieveWebhook(t.secret,e)},list:function(){return listWebhooks(t.secret)},toggle:function(e,r){return toggleWebhook(t.secret,e,r)}},Object.freeze(this.secret),Object.freeze(this),e.instance=this};module.exports=Paymongo;
