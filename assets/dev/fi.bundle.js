// Setup firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDEDUX3syxvKeDeGkutaOC815fnoC5QBV8",
  authDomain: "minafi-fi.firebaseapp.com",
  databaseURL: "https://minafi-fi.firebaseio.com",
  projectId: "minafi-fi",
  storageBucket: "",
  messagingSenderId: "217431444061"
};
firebase.initializeApp(config);
window.user = null;

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("Error signing in... ", errorCode, errorMessage);
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.user = user;
  }
});

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3={})}(this,function(t){"use strict";function n(t,n){return n>t?-1:t>n?1:t>=n?0:NaN}function e(t){return 1===t.length&&(t=r(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);i>r;){var a=r+i>>>1;t(n[a],e)<0?r=a+1:i=a}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);i>r;){var a=r+i>>>1;t(n[a],e)>0?i=a:r=a+1}return r}}}function r(t){return function(e,r){return n(t(e),r)}}function i(t,n){return t>n?-1:n>t?1:n>=t?0:NaN}function a(t){return null===t?NaN:+t}function o(t,n){var e,r,i=t.length,o=0,u=0,s=-1,c=0;if(null==n)for(;++s<i;)isNaN(e=a(t[s]))||(r=e-o,o+=r/++c,u+=r*(e-o));else for(;++s<i;)isNaN(e=a(n(t[s],s,t)))||(r=e-o,o+=r/++c,u+=r*(e-o));return c>1?u/(c-1):void 0}function u(t,n){var e=o(t,n);return e?Math.sqrt(e):e}function s(t,n){var e,r,i,a=-1,o=t.length;if(null==n){for(;++a<o;)if(null!=(r=t[a])&&r>=r){e=i=r;break}for(;++a<o;)null!=(r=t[a])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++a<o;)if(null!=(r=n(t[a],a,t))&&r>=r){e=i=r;break}for(;++a<o;)null!=(r=n(t[a],a,t))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]}function c(t){return function(){return t}}function f(t){return t}function h(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):3>i?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),a=new Array(i);++r<i;)a[r]=t+r*e;return a}function l(t,n,e){var r=d(t,n,e);return h(Math.ceil(t/r)*r,Math.floor(n/r)*r+r/2,r)}function d(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=rc?i*=10:a>=ic?i*=5:a>=ac&&(i*=2),t>n?-i:i}function g(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1}function p(t){return+t}function m(){function t(t){var i,a,o=t.length,u=new Array(o);for(i=0;o>i;++i)u[i]=+n(t[i],i,t);var s=e(u),c=+s[0],f=+s[1],h=r(u,c,f);Array.isArray(h)||(h=l(c,f,+h));var d=h.length;for(i=0;d>i;++i)h[i]=+h[i];for(;h[0]<=c;)h.shift(),--d;for(;h[d-1]>=f;)h.pop(),--d;var g,p=new Array(d+1);for(i=0;d>=i;++i)g=p[i]=[],g.x0=i>0?h[i-1]:c,g.x1=d>i?h[i]:f;for(i=0;o>i;++i)a=u[i],a>=c&&f>=a&&p[nc(h,a,0,d)].push(t[i]);return p}var n=f,e=s,r=g;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:c(+e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:c([+n[0],+n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:c(Array.isArray(n)?Array.prototype.map.call(n,p):+n),t):r},t}function _(t,n,e){if(null==e&&(e=a),r=t.length){if((n=+n)<=0||2>r)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t),s=+e(t[o+1],o+1,t);return u+(s-u)*(i-o)}}function y(t,e,r){return t.sort(n),Math.ceil((r-e)/(2*(_(t,.75)-_(t,.25))*Math.pow(t.length,-1/3)))}function b(t,n,e){return Math.ceil((e-n)/(3.5*u(t)*Math.pow(t.length,-1/3)))}function v(t,n){var e,r,i=-1,a=t.length;if(null==n){for(;++i<a;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<a;)null!=(r=t[i])&&r>e&&(e=r)}else{for(;++i<a;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<a;)null!=(r=n(t[i],i,t))&&r>e&&(e=r)}return e}function M(t,n){var e,r=0,i=t.length,o=-1,u=i;if(null==n)for(;++o<i;)isNaN(e=a(t[o]))?--u:r+=e;else for(;++o<i;)isNaN(e=a(n(t[o],o,t)))?--u:r+=e;return u?r/u:void 0}function x(t,e){var r,i=[],o=t.length,u=-1;if(null==e)for(;++u<o;)isNaN(r=a(t[u]))||i.push(r);else for(;++u<o;)isNaN(r=a(e(t[u],u,t)))||i.push(r);return _(i.sort(n),.5)}function w(t){for(var n,e,r,i=t.length,a=-1,o=0;++a<i;)o+=t[a].length;for(e=new Array(o);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--o]=r[n];return e}function k(t,n){var e,r,i=-1,a=t.length;if(null==n){for(;++i<a;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<a;)null!=(r=t[i])&&e>r&&(e=r)}else{for(;++i<a;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<a;)null!=(r=n(t[i],i,t))&&e>r&&(e=r)}return e}function T(t){for(var n=0,e=t.length-1,r=t[0],i=new Array(0>e?0:e);e>n;)i[n]=[r,r=t[++n]];return i}function N(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r}function S(t,e){if(r=t.length){var r,i,a=0,o=0,u=t[o];for(e||(e=n);++a<r;)(e(i=t[a],u)<0||0!==e(u,u))&&(u=i,o=a);return 0===e(u,u)?o:void 0}}function A(t,n,e){for(var r,i,a=(null==e?t.length:e)-(n=null==n?0:+n);a;)i=Math.random()*a--|0,r=t[a+n],t[a+n]=t[i+n],t[i+n]=r;return t}function C(t,n){var e,r=0,i=t.length,a=-1;if(null==n)for(;++a<i;)(e=+t[a])&&(r+=e);else for(;++a<i;)(e=+n(t[a],a,t))&&(r+=e);return r}function D(t){if(!(i=t.length))return[];for(var n=-1,e=k(t,P),r=new Array(e);++n<e;)for(var i,a=-1,o=r[n]=new Array(i);++a<i;)o[a]=t[a][n];return r}function P(t){return t.length}function E(){return D(arguments)}function F(){}function L(t,n){var e=new F;if(t instanceof F)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,i=-1,a=t.length;if(null==n)for(;++i<a;)e.set(i,t[i]);else for(;++i<a;)e.set(n(r=t[i],i,t),r)}else if(t)for(var o in t)e.set(o,t[o]);return e}function q(){function t(n,i,o,u){if(i>=a.length)return r?r(n):e?n.sort(e):n;for(var s,c,f,h=-1,l=n.length,d=a[i++],g=L(),p=o();++h<l;)(f=g.get(s=d(c=n[h])+""))?f.push(c):g.set(s,[c]);return g.each(function(n,e){u(p,e,t(n,i,o,u))}),p}function n(t,e){if(e>=a.length)return t;var r=[],i=o[e++];return t.each(function(t,i){r.push({key:i,values:n(t,e)})}),i?r.sort(function(t,n){return i(t.key,n.key)}):r}var e,r,i,a=[],o=[];return i={object:function(n){return t(n,0,U,O)},map:function(n){return t(n,0,H,j)},entries:function(e){return n(t(e,0,H,j),0)},key:function(t){return a.push(t),i},sortKeys:function(t){return o[a.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}}function U(){return{}}function O(t,n,e){t[n]=e}function H(){return L()}function j(t,n,e){t.set(n,e)}function R(){}function z(t,n){var e=new R;if(t instanceof R)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function Y(t){var n=[];for(var e in t)n.push(e);return n}function I(t){var n=[];for(var e in t)n.push(t[e]);return n}function J(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n}function B(t,n){return t=null==t?0:+t,n=null==n?1:+n,1===arguments.length?(n=t,t=0):n-=t,function(){return Math.random()*n+t}}function X(t,n){var e,r;return t=null==t?0:+t,n=null==n?1:+n,function(){var i;if(null!=e)i=e,e=null;else do e=2*Math.random()-1,i=2*Math.random()-1,r=e*e+i*i;while(!r||r>1);return t+n*i*Math.sqrt(-2*Math.log(r)/r)}}function W(){var t=X.apply(this,arguments);return function(){return Math.exp(t())}}function $(t){return function(){for(var n=0,e=0;t>e;++e)n+=Math.random();return n}}function V(t){var n=$(t);return function(){return n()/t}}function Z(t){return function(){return-Math.log(1-Math.random())/t}}function G(t){return(t=+t)<Dc?jc*t*t:Ec>t?jc*(t-=Pc)*t+Fc:qc>t?jc*(t-=Lc)*t+Uc:jc*(t-=Oc)*t+Hc}function K(t){for(var n,e=-1,r=t.length,i=t[r-1],a=0;++e<r;)n=i,i=t[e],a+=n[1]*i[0]-n[0]*i[1];return a/2}function Q(t){for(var n,e,r=-1,i=t.length,a=0,o=0,u=t[i-1],s=0;++r<i;)n=u,u=t[r],s+=e=n[0]*u[1]-u[0]*n[1],a+=(n[0]+u[0])*e,o+=(n[1]+u[1])*e;return s*=3,[a/s,o/s]}function tt(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])}function nt(t,n){return t[0]-n[0]||t[1]-n[1]}function et(t){for(var n=t.length,e=[0,1],r=2,i=2;n>i;++i){for(;r>1&&tt(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function rt(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;e>n;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(nt),n=0;e>n;++n)i[n]=[r[n][0],-r[n][1]];var a=et(r),o=et(i),u=o[0]===a[0],s=o[o.length-1]===a[a.length-1],c=[];for(n=a.length-1;n>=0;--n)c.push(t[r[a[n]][2]]);for(n=+u;n<o.length-s;++n)c.push(t[r[o[n]][2]]);return c}function it(t,n){for(var e,r,i=t.length,a=t[i-1],o=n[0],u=n[1],s=a[0],c=a[1],f=!1,h=0;i>h;++h)a=t[h],e=a[0],r=a[1],r>u!=c>u&&(s-e)*(u-r)/(c-r)+e>o&&(f=!f),s=e,c=r;return f}function at(t){for(var n,e,r=-1,i=t.length,a=t[i-1],o=a[0],u=a[1],s=0;++r<i;)n=o,e=u,a=t[r],o=a[0],u=a[1],n-=o,e-=u,s+=Math.sqrt(n*n+e*e);return s}function ot(){this._x0=this._y0=this._x1=this._y1=null,this._=[]}function ut(){return new ot}function st(t){return t[0]}function ct(t){return t[1]}function ft(t){return function(){return t}}function ht(){this.x=null,this.y=null,this.leaf=!0,this.data=null,this.nodes=[]}function lt(t,n,e,r,i,a){if(!t(n,e,r,i,a)){var o=(e+i)/2,u=(r+a)/2,s=n.nodes;s[0]&&lt(t,s[0],e,r,o,u),s[1]&&lt(t,s[1],o,r,i,u),s[2]&&lt(t,s[2],e,u,o,a),s[3]&&lt(t,s[3],o,u,i,a)}}function dt(t,n,e,r,i,a,o){var u,s=1/0;return function c(t,f,h,l,d){if(!(f>a||h>o||r>l||i>d)){if(null!=t.x){var g=n-t.x,p=e-t.y,m=g*g+p*p;if(s>m){var _=Math.sqrt(s=m);r=n-_,i=e-_,a=n+_,o=e+_,u=t}}for(var y=t.nodes,b=(f+l)/2,v=(h+d)/2,M=n>=b,x=e>=v,w=x<<1|M,k=w+4;k>w;++w)if(t=y[3&w])switch(3&w){case 0:c(t,f,h,b,v);break;case 1:c(t,b,h,l,v);break;case 2:c(t,f,v,b,d);break;case 3:c(t,b,v,l,d)}}}(t,r,i,a,o),u&&u.data}function gt(){function t(t){function u(t,n,e,r,i,a,o,u){if(!isNaN(e)&&!isNaN(r))if(t.leaf){var c=t.x,f=t.y;if(null!=c)if(Math.abs(c-e)+Math.abs(f-r)<.01)s(t,n,e,r,i,a,o,u);else{var h=t.data;t.x=t.y=t.data=null,s(t,h,c,f,i,a,o,u),s(t,n,e,r,i,a,o,u)}else t.x=e,t.y=r,t.data=n}else s(t,n,e,r,i,a,o,u)}function s(t,n,e,r,i,a,o,s){var c=(i+o)/2,f=(a+s)/2,h=e>=c,l=r>=f,d=l<<1|h;t.leaf=!1,t=t.nodes[d]||(t.nodes[d]=new ht),h?i=c:o=c,l?a=f:s=f,u(t,n,e,r,i,a,o,s)}var c,f,h,l,d,g,p,m,_,y="function"==typeof a?a:ft(a),b="function"==typeof o?o:ft(o);if(t||(t=[]),null!=n)g=n,p=r,m=e,_=i;else for(m=_=-(g=p=1/0),f=[],h=[],d=t.length,l=0;d>l;++l){var v=+y(c=t[l],l,t),M=+b(c,l,t);g>v&&(g=v),p>M&&(p=M),v>m&&(m=v),M>_&&(_=M),f.push(v),h.push(M)}var x=m-g,w=_-p;isFinite(x)&&isFinite(w)&&(x>w?_=p+x:m=g+w);var k=new ht;if(k.add=function(t){return u(k,t,+y(t,++l),+b(t,l),g,p,m,_),k},k.visit=function(t){return lt(t,k,g,p,m,_),k},k.find=function(t,n){return dt(k,t,n,g,p,m,_)},l=-1,null==n){for(;++l<d;)u(k,t[l],f[l],h[l],g,p,m,_);--l}else t.forEach(k.add);return f=h=t=c=null,k}var n,e,r,i,a=st,o=ct;return t.x=function(n){return arguments.length?(a=n,t):a},t.y=function(n){return arguments.length?(o=n,t):o},t.extent=function(a){return arguments.length?(null==a?n=r=e=i=null:(n=+a[0][0],r=+a[0][1],e=+a[1][0],i=+a[1][1]),t):null==n?null:[[n,r],[e,i]]},t.size=function(a){return arguments.length?(null==a?n=r=e=i=null:(n=r=0,e=+a[0],i=+a[1]),t):null==n?null:[e-n,i-r]},t}function pt(){}function mt(t){function n(){if(!o)try{e()}catch(t){u[h+f-1]&&i(t)}}function e(){for(;o=c&&t>f;){var n=h+f,e=u[n],i=e.length-1,a=e[i];e[i]=r(n),--c,++f,e=a.apply(null,e),u[n]&&(u[n]=e||af)}}function r(t){return function(e,r){u[t]&&(--f,++h,u[t]=null,null==l&&(null!=e?i(e):(s[t]=r,c?n():f||d(l,s))))}}function i(t){var n,e=u.length;for(l=t,s=void 0,c=NaN;--e>=0;)if((n=u[e])&&(u[e]=null,n.abort))try{n.abort()}catch(t){}f=NaN,d(l,s)}if(!(t>=1))throw new Error;var a,o,u=[],s=[],c=0,f=0,h=0,l=null,d=pt;return a={defer:function(t){if("function"!=typeof t||d!==pt)throw new Error;if(null!=l)return a;var e=rf.call(arguments,1);return e.push(t),++c,u.push(e),n(),a},abort:function(){return null==l&&i(new Error("abort")),a},await:function(t){if("function"!=typeof t||d!==pt)throw new Error;return d=function(n,e){t.apply(null,[n].concat(e))},f||d(l,s),a},awaitAll:function(t){if("function"!=typeof t||d!==pt)throw new Error;return d=t,f||d(l,s),a}}}function _t(t){return mt(arguments.length?+t:1/0)}function yt(t){return function(){return t}}function bt(t){return t.innerRadius}function vt(t){return t.outerRadius}function Mt(t){return t.startAngle}function xt(t){return t.endAngle}function wt(t){return t&&t.padAngle}function kt(t){return t>=1?sf:-1>=t?-sf:Math.asin(t)}function Tt(t,n,e,r,i,a,o,u){var s=e-t,c=r-n,f=o-i,h=u-a,l=(f*(n-a)-h*(t-i))/(h*s-f*c);return[t+l*s,n+l*c]}function Nt(t,n,e,r,i,a,o){var u=t-e,s=n-r,c=(o?a:-a)/Math.sqrt(u*u+s*s),f=c*s,h=-c*u,l=t+f,d=n+h,g=e+f,p=r+h,m=(l+g)/2,_=(d+p)/2,y=g-l,b=p-d,v=y*y+b*b,M=i-a,x=l*p-g*d,w=(0>b?-1:1)*Math.sqrt(Math.max(0,M*M*v-x*x)),k=(x*b-y*w)/v,T=(-x*y-b*w)/v,N=(x*b+y*w)/v,S=(-x*y+b*w)/v,A=k-m,C=T-_,D=N-m,P=S-_;return A*A+C*C>D*D+P*P&&(k=N,T=S),{cx:k,cy:T,x01:-f,y01:-h,x11:k*(i/M-1),y11:T*(i/M-1)}}function St(){function t(){var t,c,f=+n.apply(this,arguments),h=+e.apply(this,arguments),l=a.apply(this,arguments)-sf,d=o.apply(this,arguments)-sf,g=Math.abs(d-l),p=d>l;if(s||(s=t=ut()),f>h&&(c=h,h=f,f=c),h>of)if(g>cf-of)s.moveTo(h*Math.cos(l),h*Math.sin(l)),s.arc(0,0,h,l,d,!p),f>of&&(s.moveTo(f*Math.cos(d),f*Math.sin(d)),s.arc(0,0,f,d,l,p));else{var m,_,y=l,b=d,v=l,M=d,x=g,w=g,k=u.apply(this,arguments)/2,T=k>of&&(i?+i.apply(this,arguments):Math.sqrt(f*f+h*h)),N=Math.min(Math.abs(h-f)/2,+r.apply(this,arguments)),S=N,A=N;if(T>of){var C=kt(T/f*Math.sin(k)),D=kt(T/h*Math.sin(k));(x-=2*C)>of?(C*=p?1:-1,v+=C,M-=C):(x=0,v=M=(l+d)/2),(w-=2*D)>of?(D*=p?1:-1,y+=D,b-=D):(w=0,y=b=(l+d)/2)}var P=h*Math.cos(y),E=h*Math.sin(y),F=f*Math.cos(M),L=f*Math.sin(M);if(N>of){var q=h*Math.cos(b),U=h*Math.sin(b),O=f*Math.cos(v),H=f*Math.sin(v);if(uf>g){var j=x>of?Tt(P,E,O,H,q,U,F,L):[F,L],R=P-j[0],z=E-j[1],Y=q-j[0],I=U-j[1],J=1/Math.sin(Math.acos((R*Y+z*I)/(Math.sqrt(R*R+z*z)*Math.sqrt(Y*Y+I*I)))/2),B=Math.sqrt(j[0]*j[0]+j[1]*j[1]);S=Math.min(N,(f-B)/(J-1)),A=Math.min(N,(h-B)/(J+1))}}w>of?A>of?(m=Nt(O,H,P,E,h,A,p),_=Nt(q,U,F,L,h,A,p),s.moveTo(m.cx+m.x01,m.cy+m.y01),N>A?s.arc(m.cx,m.cy,A,Math.atan2(m.y01,m.x01),Math.atan2(_.y01,_.x01),!p):(s.arc(m.cx,m.cy,A,Math.atan2(m.y01,m.x01),Math.atan2(m.y11,m.x11),!p),s.arc(0,0,h,Math.atan2(m.cy+m.y11,m.cx+m.x11),Math.atan2(_.cy+_.y11,_.cx+_.x11),!p),s.arc(_.cx,_.cy,A,Math.atan2(_.y11,_.x11),Math.atan2(_.y01,_.x01),!p))):(s.moveTo(P,E),s.arc(0,0,h,y,b,!p)):s.moveTo(P,E),f>of&&x>of?S>of?(m=Nt(F,L,q,U,f,-S,p),_=Nt(P,E,O,H,f,-S,p),s.lineTo(m.cx+m.x01,m.cy+m.y01),N>S?s.arc(m.cx,m.cy,S,Math.atan2(m.y01,m.x01),Math.atan2(_.y01,_.x01),!p):(s.arc(m.cx,m.cy,S,Math.atan2(m.y01,m.x01),Math.atan2(m.y11,m.x11),!p),s.arc(0,0,f,Math.atan2(m.cy+m.y11,m.cx+m.x11),Math.atan2(_.cy+_.y11,_.cx+_.x11),p),s.arc(_.cx,_.cy,S,Math.atan2(_.y11,_.x11),Math.atan2(_.y01,_.x01),!p))):s.arc(0,0,f,M,v,p):s.lineTo(F,L)}else s.moveTo(0,0);return s.closePath(),t?(s=null,t+""||null):void 0}var n=bt,e=vt,r=yt(0),i=null,a=Mt,o=xt,u=wt,s=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+a.apply(this,arguments)+ +o.apply(this,arguments))/2-uf/2;return[Math.cos(r)*t,Math.sin(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:yt(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:yt(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:yt(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:yt(+n),t):i},t.startAngle=function(n){return arguments.length?(a="function"==typeof n?n:yt(+n),t):a},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:yt(+n),t):o},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:yt(+n),t):u},t.context=function(n){return arguments.length?(s=null==n?null:n,t):s},t}function At(t,n){return n.length<2?t:(n=ff.call(n),n[0]=null,function(e){return n[0]=e,t.apply(null,n)})}function Ct(t){this._context=t}function Dt(t){return new Ct(t)}function Pt(t){return t[0]}function Et(t){return t[1]}function Ft(){function t(t){var c,f,h,l,d,g=t.length,p=!1,m=new Array(g),_=new Array(g);for(o||(s=u(d=ut())),c=0;g>=c;++c){if(!(g>c&&a(l=t[c],c,t))===p)if(p=!p)f=c,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),h=c-1;h>=f;--h)s.point(m[h],_[h]);s.lineEnd(),s.areaEnd()}p&&(m[c]=+n(l,c,t),_[c]=+r(l,c,t),s.point(e?+e(l,c,t):m[c],i?+i(l,c,t):_[c]))}return d?(s=null,d+""||null):void 0}var n=Pt,e=null,r=yt(0),i=Et,a=yt(!0),o=null,u=Dt,s=null;return t.x=function(r){return arguments.length?(n="function"==typeof r?r:yt(+r),e=null,t):n},t.x0=function(e){return arguments.length?(n="function"==typeof e?e:yt(+e),t):n},t.x1=function(n){return arguments.length?(e=null==n?null:"function"==typeof n?n:yt(+n),t):e},t.y=function(n){return arguments.length?(r="function"==typeof n?n:yt(+n),i=null,t):r},t.y0=function(n){return arguments.length?(r="function"==typeof n?n:yt(+n),t):r},t.y1=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:yt(+n),t):i},t.defined=function(n){return arguments.length?(a="function"==typeof n?n:yt(!!n),t):a},t.curve=function(n){return arguments.length?(u=At(n,arguments),null!=o&&(s=u(o)),t):u},t.context=function(n){return arguments.length?(null==n?o=s=null:s=u(o=n),t):o},t}function Lt(){function t(t){var u,s,c,f=t.length,h=!1;for(i||(o=a(c=ut())),u=0;f>=u;++u)!(f>u&&r(s=t[u],u,t))===h&&((h=!h)?o.lineStart():o.lineEnd()),h&&o.point(+n(s,u,t),+e(s,u,t));return c?(o=null,c+""||null):void 0}var n=Pt,e=Et,r=yt(!0),i=null,a=Dt,o=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:yt(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:yt(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:yt(!!n),t):r},t.curve=function(n){return arguments.length?(a=At(n,arguments),null!=i&&(o=a(i)),t):a},t.context=function(n){return arguments.length?(null==n?i=o=null:o=a(i=n),t):i},t}function qt(t,n){return t>n?-1:n>t?1:n>=t?0:NaN}function Ut(t){return t}function Ot(){function t(t){var u,s,c,f,h,l=t.length,d=0,g=new Array(l),p=new Array(l),m=+i.apply(this,arguments),_=Math.min(cf,Math.max(-cf,a.apply(this,arguments)-m)),y=Math.min(Math.abs(_)/l,o.apply(this,arguments)),b=y*(0>_?-1:1);for(u=0;l>u;++u)(h=p[g[u]=u]=+n(t[u],u,t))>0&&(d+=h);for(null!=e?g.sort(function(t,n){return e(p[t],p[n])}):null!==r&&g.sort(function(n,e){return r(t[n],t[e])}),u=0,c=d?(_-l*b)/d:0;l>u;++u,m=f)s=g[u],h=p[s],f=m+(h>0?h*c:0)+b,p[s]={data:t[s],index:u,value:h,startAngle:m,endAngle:f,padAngle:y};return p}var n=Ut,e=qt,r=null,i=yt(0),a=yt(cf),o=yt(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:yt(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:yt(+n),t):i},t.endAngle=function(n){return arguments.length?(a="function"==typeof n?n:yt(+n),t):a},t.padAngle=function(n){return arguments.length?(o="function"==typeof n?n:yt(+n),t):o},t}function Ht(t){this._curve=t}function jt(t,n){function e(n){return new Ht(t(n))}return t=At(t,n),e._curve=t,e}function Rt(){var t=Ft(),n=t.curve;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.curve=function(t){return arguments.length?n(jt(t,arguments)):n()._curve},t.curve(Dt)}function zt(){var t=Lt(),n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(jt(t,arguments)):n()._curve},t.curve(Dt)}function Yt(){function t(){var t;return r||(r=t=ut()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t?(r=null,t+""||null):void 0}var n=yt(hf),e=yt(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:yt(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:yt(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t}function It(){}function Jt(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function Bt(t){this._context=t}function Xt(t){return new Bt(t)}function Wt(t){this._context=t}function $t(t){return new Wt(t)}function Vt(t){this._context=t}function Zt(t){return new Vt(t)}function Gt(t,n){this._basis=Xt(t),this._beta=n}function Kt(t,n){return null==n?new Gt(t,.85):1===(n=+n)?Xt(t):new Gt(t,n)}function Qt(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function tn(t,n){this._context=t,this._k=n}function nn(t,n){return new tn(t,(null==n?1:1-n)/6)}function en(t,n){this._context=t,this._k=n}function rn(t,n){return new en(t,(null==n?1:1-n)/6)}function an(t,n){this._context=t,this._k=n}function on(t,n){return new an(t,(null==n?1:1-n)/6)}function un(t,n,e){var r=t._x1,i=t._y1,a=t._x2,o=t._y2;if(t._l01_a>of){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/s}if(t._l23_a>of){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);a=(a*c+t._x1*t._l23_2a-n*t._l12_2a)/f,o=(o*c+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,a,o,t._x2,t._y2)}function sn(t,n){this._context=t,this._alpha=n}function cn(t,n){return(n=null==n?.5:+n)?new sn(t,n):nn(t,0)}function fn(t,n){this._context=t,this._alpha=n}function hn(t,n){return(n=null==n?.5:+n)?new fn(t,n):rn(t,0)}function ln(t,n){this._context=t,this._alpha=n}function dn(t,n){return(n=null==n?.5:+n)?new ln(t,n):on(t,0)}function gn(t){this._context=t}function pn(t){return new gn(t)}function mn(t){return 0>t?-1:1}function _n(t,n,e){var r=t._x1-t._x0,i=n-t._x1,a=(t._y1-t._y0)/(r||0>i&&-0),o=(e-t._y1)/(i||0>r&&-0),u=(a*i+o*r)/(r+i);return(mn(a)+mn(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(u))||0}function yn(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function bn(t,n,e){var r=t._x0,i=t._y0,a=t._x1,o=t._y1,u=(a-r)/3;t._context.bezierCurveTo(r+u,i+u*n,a-u,o-u*e,a,o)}function vn(t){this._context=t}function Mn(t){this._context=new xn(t)}function xn(t){this._context=t}function wn(t){return new vn(t)}function kn(t){return new Mn(t)}function Tn(t){this._context=t}function Nn(t){var n,e,r=t.length-1,i=new Array(r),a=new Array(r),o=new Array(r);for(i[0]=0,a[0]=2,o[0]=t[0]+2*t[1],n=1;r-1>n;++n)i[n]=1,a[n]=4,o[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,a[r-1]=7,o[r-1]=8*t[r-1]+t[r],n=1;r>n;++n)e=i[n]/a[n-1],a[n]-=e,o[n]-=e*o[n-1];for(i[r-1]=o[r-1]/a[r-1],n=r-2;n>=0;--n)i[n]=(o[n]-i[n+1])/a[n];for(a[r-1]=(t[r]+i[r-1])/2,n=0;r-1>n;++n)a[n]=2*t[n+1]-i[n+1];return[i,a]}function Sn(t){return new Tn(t)}function An(t,n){this._context=t,this._t=n}function Cn(t){return new An(t,.5)}function Dn(t){return new An(t,0)}function Pn(t){return new An(t,1)}function En(t,n){if((r=t.length)>1)for(var e,r,i=1,a=t[n[0]],o=a.length;r>i;++i){e=a,a=t[n[i]];for(var u=0;o>u;++u)a[u][1]+=a[u][0]=isNaN(e[u][1])?e[u][0]:e[u][1]}}function Fn(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e}function Ln(t,n){return t[n]}function qn(){function t(t){var a,o,u=n.apply(this,arguments),s=t.length,c=u.length,f=new Array(c);for(a=0;c>a;++a){for(var h,l=u[a],d=f[a]=new Array(s),g=0;s>g;++g)d[g]=h=[0,+i(t[g],l,g,t)],h.data=t[g];d.key=l}for(a=0,o=e(f);c>a;++a)f[o[a]].index=a;return r(f,o),f}var n=yt([]),e=Fn,r=En,i=Ln;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:yt(Df.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:yt(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?Fn:"function"==typeof n?n:yt(Df.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?En:n,t):r},t}function Un(t,n){if((r=t.length)>0){for(var e,r,i,a=0,o=t[0].length;o>a;++a){for(i=e=0;r>e;++e)i+=t[e][a][1]||0;if(i)for(e=0;r>e;++e)t[e][a][1]/=i}En(t,n)}}function On(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],a=i.length;a>r;++r){for(var o=0,u=0;e>o;++o)u+=t[o][r][1]||0;i[r][1]+=i[r][0]=-u/2}En(t,n)}}function Hn(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,a=0,o=1;r>o;++o){for(var u=0,s=0,c=0;i>u;++u){for(var f=t[n[u]],h=f[o][1]||0,l=f[o-1][1]||0,d=(h-l)/2,g=0;u>g;++g){var p=t[n[g]],m=p[o][1]||0,_=p[o-1][1]||0;d+=m-_}s+=h,c+=d*h}e[o-1][1]+=e[o-1][0]=a,s&&(a-=c/s)}e[o-1][1]+=e[o-1][0]=a,En(t,n)}}function jn(t){var n=t.map(Rn);return Fn(t).sort(function(t,e){return n[t]-n[e]})}function Rn(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function zn(t){return jn(t).reverse()}function Yn(t){var n,e,r=t.length,i=t.map(Rn),a=Fn(t).sort(function(t,n){return i[n]-i[t]}),o=0,u=0,s=[],c=[];for(n=0;r>n;++n)e=a[n],u>o?(o+=i[e],s.push(e)):(u+=i[e],c.push(e));return c.reverse().concat(s)}function In(t){return Fn(t).reverse()}function Jn(){}function Bn(t){var n;return t=(t+"").trim().toLowerCase(),(n=Ff.exec(t))?(n=parseInt(n[1],16),new Zn(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Lf.exec(t))?Xn(parseInt(n[1],16)):(n=qf.exec(t))?new Zn(n[1],n[2],n[3],1):(n=Uf.exec(t))?new Zn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Of.exec(t))?Wn(n[1],n[2],n[3],n[4]):(n=Hf.exec(t))?Wn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=jf.exec(t))?Gn(n[1],n[2]/100,n[3]/100,1):(n=Rf.exec(t))?Gn(n[1],n[2]/100,n[3]/100,n[4]):zf.hasOwnProperty(t)?Xn(zf[t]):"transparent"===t?new Zn(NaN,NaN,NaN,0):null}function Xn(t){return new Zn(t>>16&255,t>>8&255,255&t,1)}function Wn(t,n,e,r){return 0>=r&&(t=n=e=NaN),new Zn(t,n,e,r)}function $n(t){return t instanceof Jn||(t=Bn(t)),t?(t=t.rgb(),new Zn(t.r,t.g,t.b,t.opacity)):new Zn}function Vn(t,n,e,r){return 1===arguments.length?$n(t):new Zn(t,n,e,null==r?1:r)}function Zn(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function Gn(t,n,e,r){return 0>=r?t=n=e=NaN:0>=e||e>=1?t=n=NaN:0>=n&&(t=NaN),new te(t,n,e,r)}function Kn(t){if(t instanceof te)return new te(t.h,t.s,t.l,t.opacity);if(t instanceof Jn||(t=Bn(t)),!t)return new te;if(t instanceof te)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),a=Math.max(n,e,r),o=NaN,u=a-i,s=(a+i)/2;return u?(o=n===a?(e-r)/u+6*(r>e):e===a?(r-n)/u+2:(n-e)/u+4,u/=.5>s?a+i:2-a-i,o*=60):u=s>0&&1>s?0:o,new te(o,u,s,t.opacity)}function Qn(t,n,e,r){return 1===arguments.length?Kn(t):new te(t,n,e,null==r?1:r)}function te(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function ne(t,n,e){return 255*(60>t?n+(e-n)*t/60:180>t?e:240>t?n+(e-n)*(240-t)/60:n)}function ee(t){if(t instanceof ie)return new ie(t.l,t.a,t.b,t.opacity);if(t instanceof he){var n=t.h*Jf;return new ie(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof Zn||(t=$n(t));var e=se(t.r),r=se(t.g),i=se(t.b),a=ae((.4124564*e+.3575761*r+.1804375*i)/Wf),o=ae((.2126729*e+.7151522*r+.072175*i)/$f),u=ae((.0193339*e+.119192*r+.9503041*i)/Vf);return new ie(116*o-16,500*(a-o),200*(o-u),t.opacity)}function re(t,n,e,r){return 1===arguments.length?ee(t):new ie(t,n,e,null==r?1:r)}function ie(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function ae(t){return t>Qf?Math.pow(t,1/3):t/Kf+Zf}function oe(t){return t>Gf?t*t*t:Kf*(t-Zf)}function ue(t){return 255*(.0031308>=t?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function se(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function ce(t){if(t instanceof he)return new he(t.h,t.c,t.l,t.opacity);t instanceof ie||(t=ee(t));var n=Math.atan2(t.b,t.a)*Bf;return new he(0>n?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function fe(t,n,e,r){return 1===arguments.length?ce(t):new he(t,n,e,null==r?1:r)}function he(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function le(t){if(t instanceof ge)return new ge(t.h,t.s,t.l,t.opacity);t instanceof Zn||(t=$n(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(ch*r+uh*n-sh*e)/(ch+uh-sh),a=r-i,o=(oh*(e-i)-ih*a)/ah,u=Math.sqrt(o*o+a*a)/(oh*i*(1-i)),s=u?Math.atan2(o,a)*Bf-120:NaN;return new ge(0>s?s+360:s,u,i,t.opacity)}function de(t,n,e,r){return 1===arguments.length?le(t):new ge(t,n,e,null==r?1:r)}function ge(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function pe(t){return function(){return t}}function me(t,n){return function(e){return t+e*n}}function _e(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function ye(t,n){var e=n-t;return e?me(t,e>180||-180>e?e-360*Math.round(e/360):e):pe(isNaN(t)?n:t)}function be(t){return 1===(t=+t)?ve:function(n,e){return e-n?_e(n,e,t):pe(isNaN(n)?e:n)}}function ve(t,n){var e=n-t;return e?me(t,e):pe(isNaN(t)?n:t)}function Me(t,n){var e,r=[],i=[],a=t?t.length:0,o=n?n.length:0,u=Math.min(a,o);for(e=0;u>e;++e)r.push(Se(t[e],n[e]));for(;a>e;++e)i[e]=t[e];for(;o>e;++e)i[e]=n[e];return function(t){for(e=0;u>e;++e)i[e]=r[e](t);return i}}function xe(t,n){return t=+t,n-=t,function(e){return t+n*e}}function we(t,n){var e,r={},i={};(null===t||"object"!=typeof t)&&(t={}),(null===n||"object"!=typeof n)&&(n={});for(e in t)e in n?r[e]=Se(t[e],n[e]):i[e]=t[e];for(e in n)e in t||(i[e]=n[e]);return function(t){for(e in r)i[e]=r[e](t);return i}}function ke(t){return function(){return t}}function Te(t){return function(n){return t(n)+""}}function Ne(t,n){var e,r,i,a=dh.lastIndex=gh.lastIndex=0,o=-1,u=[],s=[];for(t+="",n+="";(e=dh.exec(t))&&(r=gh.exec(n));)(i=r.index)>a&&(i=n.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(e=e[0])===(r=r[0])?u[o]?u[o]+=r:u[++o]=r:(u[++o]=null,s.push({i:o,x:xe(e,r)})),a=gh.lastIndex;return a<n.length&&(i=n.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?s[0]?Te(s[0].x):ke(n):(n=s.length,function(t){for(var e,r=0;n>r;++r)u[(e=s[r]).i]=e.x(t);return u.join("")})}function Se(t,n){for(var e,r=ph.length;--r>=0&&!(e=ph[r](t,n)););return e}function Ae(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}}function Ce(t){hh||(hh=document.createElementNS("http://www.w3.org/2000/svg","g")),t&&(hh.setAttribute("transform",t),n=hh.transform.baseVal.consolidate());var n,e=n?n.matrix:_h,r=[e.a,e.b],i=[e.c,e.d],a=Pe(r),o=De(r,i),u=Pe(Ee(i,r,-o))||0;r[0]*i[1]<i[0]*r[1]&&(r[0]*=-1,r[1]*=-1,a*=-1,o*=-1),this.rotate=(a?Math.atan2(r[1],r[0]):Math.atan2(-i[0],i[1]))*mh,this.translate=[e.e,e.f],this.scale=[a,u],this.skew=u?Math.atan2(o,u)*mh:0}function De(t,n){return t[0]*n[0]+t[1]*n[1]}function Pe(t){var n=Math.sqrt(De(t,t));return n&&(t[0]/=n,t[1]/=n),n}function Ee(t,n,e){return t[0]+=e*n[0],t[1]+=e*n[1],t}function Fe(t){return t.length?t.pop()+",":""}function Le(t,n,e,r){if(t[0]!==n[0]||t[1]!==n[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:xe(t[0],n[0])},{i:i-2,x:xe(t[1],n[1])})}else(n[0]||n[1])&&e.push("translate("+n+")")}function qe(t,n,e,r){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),r.push({i:e.push(Fe(e)+"rotate(",null,")")-2,x:xe(t,n)})):n&&e.push(Fe(e)+"rotate("+n+")")}function Ue(t,n,e,r){t!==n?r.push({i:e.push(Fe(e)+"skewX(",null,")")-2,x:xe(t,n)}):n&&e.push(Fe(e)+"skewX("+n+")")}function Oe(t,n,e,r){if(t[0]!==n[0]||t[1]!==n[1]){var i=e.push(Fe(e)+"scale(",null,",",null,")");r.push({i:i-4,x:xe(t[0],n[0])},{i:i-2,x:xe(t[1],n[1])})}else(1!==n[0]||1!==n[1])&&e.push(Fe(e)+"scale("+n+")")}function He(t,n){var e=[],r=[];return t=new Ce(t),n=new Ce(n),Le(t.translate,n.translate,e,r),qe(t.rotate,n.rotate,e,r),Ue(t.skew,n.skew,e,r),Oe(t.scale,n.scale,e,r),t=n=null,function(t){for(var n,i=-1,a=r.length;++i<a;)e[(n=r[i]).i]=n.x(t);return e.join("")}}function je(t){return((t=Math.exp(t))+1/t)/2}function Re(t){return((t=Math.exp(t))-1/t)/2}function ze(t){return((t=Math.exp(2*t))-1)/(t+1)}function Ye(t,n){var e,r,i=t[0],a=t[1],o=t[2],u=n[0],s=n[1],c=n[2],f=u-i,h=s-a,l=f*f+h*h;if(Mh>l)r=Math.log(c/o)/yh,e=function(t){return[i+t*f,a+t*h,o*Math.exp(yh*t*r)]};else{var d=Math.sqrt(l),g=(c*c-o*o+vh*l)/(2*o*bh*d),p=(c*c-o*o-vh*l)/(2*c*bh*d),m=Math.log(Math.sqrt(g*g+1)-g),_=Math.log(Math.sqrt(p*p+1)-p);r=(_-m)/yh,e=function(t){var n=t*r,e=je(m),u=o/(bh*d)*(e*ze(yh*n+m)-Re(m));return[i+u*f,a+u*h,o*e/je(yh*n+m)]}}return e.duration=1e3*r,e}function Ie(t,n){var e=ye((t=Qn(t)).h,(n=Qn(n)).h),r=ve(t.s,n.s),i=ve(t.l,n.l),a=ve(t.opacity,n.opacity);return function(n){return t.h=e(n),t.s=r(n),t.l=i(n),t.opacity=a(n),t+""}}function Je(t,n){var e=ve((t=Qn(t)).h,(n=Qn(n)).h),r=ve(t.s,n.s),i=ve(t.l,n.l),a=ve(t.opacity,n.opacity);return function(n){return t.h=e(n),t.s=r(n),t.l=i(n),t.opacity=a(n),t+""}}function Be(t,n){var e=ve((t=re(t)).l,(n=re(n)).l),r=ve(t.a,n.a),i=ve(t.b,n.b),a=ve(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=a(n),t+""}}function Xe(t,n){var e=ye((t=fe(t)).h,(n=fe(n)).h),r=ve(t.c,n.c),i=ve(t.l,n.l),a=ve(t.opacity,n.opacity);return function(n){return t.h=e(n),
t.c=r(n),t.l=i(n),t.opacity=a(n),t+""}}function We(t,n){var e=ve((t=fe(t)).h,(n=fe(n)).h),r=ve(t.c,n.c),i=ve(t.l,n.l),a=ve(t.opacity,n.opacity);return function(n){return t.h=e(n),t.c=r(n),t.l=i(n),t.opacity=a(n),t+""}}function $e(){return new Ve(arguments)}function Ve(t){function n(t){var n=(t+="").indexOf("."),e=t;if(n>=0?t=t.slice(0,n):e+=".",t&&!o.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}function e(t){return function(){for(var n,e=o[t],r=-1,i=e.length;++r<i;)(n=e[r].value)&&n.apply(this,arguments);return s}}var r,i=-1,a=t.length,o={},u={},s=this;for(s.on=function(t,e){if(t=n(t),arguments.length<2)return(e=u[t.name])&&e.value;if(t.type){var r,i=o[t.type],a=u[t.name];a&&(a.value=null,r=i.indexOf(a),o[t.type]=i=i.slice(0,r).concat(i.slice(r+1)),delete u[t.name]),e&&(e={value:e},u[t.name]=e,i.push(e))}else if(null==e)for(var c in o)(e=u[c+t.name])&&(e.value=null,i=o[c],r=i.indexOf(e),o[c]=i.slice(0,r).concat(i.slice(r+1)),delete u[e.name]);return s};++i<a;){if(r=t[i]+"",!r||r in s)throw new Error("illegal or duplicate type: "+r);o[r]=[],s[r]=e(r)}}function Ze(t){return new tr(t)}function Ge(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function Ke(t,n){var e=Ge(t);return function(r,i){return n(e(r),i,t)}}function Qe(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function tr(t){function n(n){return n.map(e).join(t)}function e(t){return r.test(t)?'"'+t.replace(/\"/g,'""')+'"':t}var r=new RegExp('["'+t+"\n]"),i=t.charCodeAt(0);this.parse=function(t,n){var e,r,i=this.parseRows(t,function(t,i){return e?e(t,i-1):(r=t,void(e=n?Ke(t,n):Ge(t)))});return i.columns=r,i},this.parseRows=function(t,n){function e(){if(f>=c)return u;if(a)return a=!1,o;var n,e=f;if(34===t.charCodeAt(e)){for(var r=e;r++<c;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return f=r+2,n=t.charCodeAt(r+1),13===n?(a=!0,10===t.charCodeAt(r+2)&&++f):10===n&&(a=!0),t.slice(e+1,r).replace(/""/g,'"')}for(;c>f;){var s=1;if(n=t.charCodeAt(f++),10===n)a=!0;else if(13===n)a=!0,10===t.charCodeAt(f)&&(++f,++s);else if(n!==i)continue;return t.slice(e,f-s)}return t.slice(e)}for(var r,a,o={},u={},s=[],c=t.length,f=0,h=0;(r=e())!==u;){for(var l=[];r!==o&&r!==u;)l.push(r),r=e();n&&null==(l=n(l,h++))||s.push(l)}return s},this.format=function(n,r){return null==r&&(r=Qe(n)),[r.map(e).join(t)].concat(n.map(function(n){return r.map(function(t){return e(n[t])}).join(t)})).join("\n")},this.formatRows=function(t){return t.map(n).join("\n")}}function nr(t,n){function e(t){var n,e=c.status;if(!e&&rr(c)||e>=200&&300>e||304===e){if(a)try{n=a.call(r,c)}catch(i){return void u.error.call(r,i)}else n=c;u.load.call(r,n)}else u.error.call(r,t)}var r,i,a,o,u=$e("beforesend","progress","load","error"),s=L(),c=new XMLHttpRequest,f=0;return"undefined"==typeof XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(t)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=c.ontimeout=e:c.onreadystatechange=function(t){c.readyState>3&&e(t)},c.onprogress=function(t){u.progress.call(r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?s.get(t):(null==n?s.remove(t):s.set(t,n+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(o=t,r):o},timeout:function(t){return arguments.length?(f=+t,r):f},response:function(t){return a=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,a){return a||"function"!=typeof e||(a=e,e=null),a&&1===a.length&&(a=er(a)),c.open(n,t,!0),null==i||s.has("accept")||s.set("accept",i+",*/*"),c.setRequestHeader&&s.each(function(t,n){c.setRequestHeader(n,t)}),null!=i&&c.overrideMimeType&&c.overrideMimeType(i),null!=o&&(c.responseType=o),f>0&&(c.timeout=f),a&&r.on("error",a).on("load",function(t){a(null,t)}),u.beforesend.call(r,c),c.send(null==e?null:e),r},abort:function(){return c.abort(),r},on:function(){var t=u.on.apply(u,arguments);return t===u?r:t}},n?r.get(n):r}function er(t){return function(n,e){t(null==n?e:null)}}function rr(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function ir(t,n){return function(e,r){var i=nr(e).mimeType(t).response(n);return r?i.get(r):i}}function ar(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var a=nr(e).mimeType(t);return a.row=function(t){return arguments.length?a.response(or(n,r=t)):r},a.row(r),i?a.get(i):a}}function or(t,n){return function(e){return t.parse(e.responseText,n)}}function ur(){this.id=++Uh}function sr(t,n,e){var r=new ur;return r.restart(t,n,e),r}function cr(t,n,e){var r=new ur;return r.restart(function(n,e){r.stop(),t(n,e)},n,e),r}function fr(t){t=null==t?Date.now():+t,++Lh;try{for(var n,e=kh;e;)t>=e.time&&(n=e.callback)(t-e.time,t),e=e.next}finally{--Lh}}function hr(){Lh=qh=0;try{fr()}finally{for(var t,n=kh,e=1/0;n;)n.callback?(e>n.time&&(e=n.time),n=(t=n).next):n=t?t.next=n.next:kh=n.next;Th=t,lr(e)}}function lr(t){if(!Lh){qh&&(qh=clearTimeout(qh));var n=t-Date.now();n>24?1/0>t&&(qh=setTimeout(hr,n)):(Lh=1,Hh(hr))}}function dr(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.round=function(e){var r=new Date(+e),i=new Date(e-1);return t(r),t(i),n(i,1),i-e>e-r?r:i},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,i){var a=[];if(e=new Date(e-1),r=new Date(+r),i=null==i?1:Math.floor(i),!(r>e&&i>0))return a;for(n(e,1),t(e),r>e&&a.push(new Date(+e));n(e,i),t(e),r>e;)a.push(new Date(+e));return a},i.filter=function(e){return dr(function(n){for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return jh.setTime(+n),Rh.setTime(+r),t(jh),t(Rh),Math.floor(e(jh,Rh))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t===0}:function(n){return i.count(0,n)%t===0}):i:null}),i}function gr(t){return dr(function(n){n.setHours(0,0,0,0),n.setDate(n.getDate()-(n.getDay()+7-t)%7)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/6048e5})}function pr(t){return dr(function(n){n.setUTCHours(0,0,0,0),n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/6048e5})}function mr(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function _r(t){return t=mr(Math.abs(t)),t?t[1]:NaN}function yr(t,n){return function(e,r){for(var i=e.length,a=[],o=0,u=t[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),a.push(e.substring(i-=u,i+u)),!((s+=u+1)>r));)u=t[o=(o+1)%t.length];return a.reverse().join(n)}}function br(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,a=-1;r>i;++i)switch(t[i]){case".":a=e=i;break;case"0":0===a&&(a=i),e=i;break;case"e":break t;default:a>0&&(a=0)}return a>0?t.slice(0,a)+t.slice(e+1):t}function vr(t,n){var e=mr(t,n);if(!e)return t+"";var r=e[0],i=e[1],a=i-(Yh=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+mr(t,Math.max(0,n+a-1))[0]}function Mr(t,n){var e=mr(t,n);if(!e)return t+"";var r=e[0],i=e[1];return 0>i?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}function xr(t){return new wr(t)}function wr(t){if(!(n=Wl.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",a=n[4]||"",o=!!n[5],u=n[6]&&+n[6],s=!!n[7],c=n[8]&&+n[8].slice(1),f=n[9]||"";"n"===f?(s=!0,f="g"):Xl[f]||(f=""),(o||"0"===e&&"="===r)&&(o=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=a,this.zero=o,this.width=u,this.comma=s,this.precision=c,this.type=f}function kr(t){return t}function Tr(t){function n(t){function n(t){var n,i,s,y=g,b=p;if("c"===d)b=m(t)+b,t="";else{t=+t;var v=(0>t||0>1/t)&&(t*=-1,!0);if(t=m(t,l),v)for(n=-1,i=t.length,v=!1;++n<i;)if(s=t.charCodeAt(n),s>48&&58>s||"x"===d&&s>96&&103>s||"X"===d&&s>64&&71>s){v=!0;break}if(y=(v?"("===u?u:"-":"-"===u||"("===u?"":u)+y,b=b+("s"===d?$l[8+Yh/3]:"")+(v&&"("===u?")":""),_)for(n=-1,i=t.length;++n<i;)if(s=t.charCodeAt(n),48>s||s>57){b=(46===s?a+t.slice(n+1):t.slice(n))+b,t=t.slice(0,n);break}}h&&!c&&(t=r(t,1/0));var M=y.length+t.length+b.length,x=f>M?new Array(f-M+1).join(e):"";switch(h&&c&&(t=r(x+t,x.length?f-b.length:1/0),x=""),o){case"<":return y+t+b+x;case"=":return y+x+t+b;case"^":return x.slice(0,M=x.length>>1)+y+t+b+x.slice(M)}return x+y+t+b}t=xr(t);var e=t.fill,o=t.align,u=t.sign,s=t.symbol,c=t.zero,f=t.width,h=t.comma,l=t.precision,d=t.type,g="$"===s?i[0]:"#"===s&&/[boxX]/.test(d)?"0"+d.toLowerCase():"",p="$"===s?i[1]:/[%p]/.test(d)?"%":"",m=Xl[d],_=!d||/[defgprs%]/.test(d);return l=null==l?d?6:12:/[gprs]/.test(d)?Math.max(1,Math.min(21,l)):Math.max(0,Math.min(20,l)),n.toString=function(){return t+""},n}function e(t,e){var r=n((t=xr(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(_r(e)/3))),a=Math.pow(10,-i),o=$l[8+i/3];return function(t){return r(a*t)+o}}var r=t.grouping&&t.thousands?yr(t.grouping,t.thousands):kr,i=t.currency,a=t.decimal;return{format:n,formatPrefix:e}}function Nr(t){return Math.max(0,-_r(Math.abs(t)))}function Sr(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(_r(n)/3)))-_r(Math.abs(t)))}function Ar(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,_r(n)-_r(t))+1}function Cr(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function Dr(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Pr(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function Er(t){function n(t,n){return function(e){var r,i,a,o=[],u=-1,s=0,c=t.length;for(e instanceof Date||(e=new Date(+e));++u<c;)37===t.charCodeAt(u)&&(o.push(t.slice(s,u)),null!=(i=vd[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(a=n[r])&&(r=a(e,i)),o.push(r),s=u+1);return o.push(t.slice(s,u)),o.join("")}}function e(t,n){return function(e){var i=Pr(1900),a=r(i,t,e+="",0);if(a!=e.length)return null;if("p"in i&&(i.H=i.H%12+12*i.p),"W"in i||"U"in i){"w"in i||(i.w="W"in i?1:0);var o="Z"in i?Dr(Pr(i.y)).getUTCDay():n(Pr(i.y)).getDay();i.m=0,i.d="W"in i?(i.w+6)%7+7*i.W-(o+5)%7:i.w+7*i.U-(o+6)%7}return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,Dr(i)):n(i)}}function r(t,n,e,r){for(var i,a,o=0,u=n.length,s=e.length;u>o;){if(r>=s)return-1;if(i=n.charCodeAt(o++),37===i){if(i=n.charAt(o++),a=Y[i in vd?n.charAt(o++):i],!a||(r=a(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function i(t,n,e){var r=D.exec(n.slice(e));return r?(t.p=P[r[0].toLowerCase()],e+r[0].length):-1}function a(t,n,e){var r=L.exec(n.slice(e));return r?(t.w=q[r[0].toLowerCase()],e+r[0].length):-1}function o(t,n,e){var r=E.exec(n.slice(e));return r?(t.w=F[r[0].toLowerCase()],e+r[0].length):-1}function u(t,n,e){var r=H.exec(n.slice(e));return r?(t.m=j[r[0].toLowerCase()],e+r[0].length):-1}function s(t,n,e){var r=U.exec(n.slice(e));return r?(t.m=O[r[0].toLowerCase()],e+r[0].length):-1}function c(t,n,e){return r(t,x,n,e)}function f(t,n,e){return r(t,w,n,e)}function h(t,n,e){return r(t,k,n,e)}function l(t){return S[t.getDay()]}function d(t){return N[t.getDay()]}function g(t){return C[t.getMonth()]}function p(t){return A[t.getMonth()]}function m(t){return T[+(t.getHours()>=12)]}function _(t){return S[t.getUTCDay()]}function y(t){return N[t.getUTCDay()]}function b(t){return C[t.getUTCMonth()]}function v(t){return A[t.getUTCMonth()]}function M(t){return T[+(t.getUTCHours()>=12)]}var x=t.dateTime,w=t.date,k=t.time,T=t.periods,N=t.days,S=t.shortDays,A=t.months,C=t.shortMonths,D=qr(T),P=Ur(T),E=qr(N),F=Ur(N),L=qr(S),q=Ur(S),U=qr(A),O=Ur(A),H=qr(C),j=Ur(C),R={a:l,A:d,b:g,B:p,c:null,d:Gr,e:Gr,H:Kr,I:Qr,j:ti,L:ni,m:ei,M:ri,p:m,S:ii,U:ai,w:oi,W:ui,x:null,X:null,y:si,Y:ci,Z:fi,"%":Ti},z={a:_,A:y,b:b,B:v,c:null,d:hi,e:hi,H:li,I:di,j:gi,L:pi,m:mi,M:_i,p:M,S:yi,U:bi,w:vi,W:Mi,x:null,X:null,y:xi,Y:wi,Z:ki,"%":Ti},Y={a:a,A:o,b:u,B:s,c:c,d:Jr,e:Jr,H:Xr,I:Xr,j:Br,L:Vr,m:Ir,M:Wr,p:i,S:$r,U:Hr,w:Or,W:jr,x:f,X:h,y:zr,Y:Rr,Z:Yr,"%":Zr};return R.x=n(w,R),R.X=n(k,R),R.c=n(x,R),z.x=n(w,z),z.X=n(k,z),z.c=n(x,z),{format:function(t){var e=n(t+="",R);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",Cr);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",z);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,Dr);return n.toString=function(){return t},n}}}function Fr(t,n,e){var r=0>t?"-":"",i=(r?-t:t)+"",a=i.length;return r+(e>a?new Array(e-a+1).join(n)+i:i)}function Lr(t){return t.replace(wd,"\\$&")}function qr(t){return new RegExp("^(?:"+t.map(Lr).join("|")+")","i")}function Ur(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function Or(t,n,e){var r=Md.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function Hr(t,n,e){var r=Md.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function jr(t,n,e){var r=Md.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function Rr(t,n,e){var r=Md.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function zr(t,n,e){var r=Md.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function Yr(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function Ir(t,n,e){var r=Md.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function Jr(t,n,e){var r=Md.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function Br(t,n,e){var r=Md.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function Xr(t,n,e){var r=Md.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function Wr(t,n,e){var r=Md.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function $r(t,n,e){var r=Md.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function Vr(t,n,e){var r=Md.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Zr(t,n,e){var r=xd.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function Gr(t,n){return Fr(t.getDate(),n,2)}function Kr(t,n){return Fr(t.getHours(),n,2)}function Qr(t,n){return Fr(t.getHours()%12||12,n,2)}function ti(t,n){return Fr(1+Xh.count(nl(t),t),n,3)}function ni(t,n){return Fr(t.getMilliseconds(),n,3)}function ei(t,n){return Fr(t.getMonth()+1,n,2)}function ri(t,n){return Fr(t.getMinutes(),n,2)}function ii(t,n){return Fr(t.getSeconds(),n,2)}function ai(t,n){return Fr(Wh.count(nl(t),t),n,2)}function oi(t){return t.getDay()}function ui(t,n){return Fr($h.count(nl(t),t),n,2)}function si(t,n){return Fr(t.getFullYear()%100,n,2)}function ci(t,n){return Fr(t.getFullYear()%1e4,n,4)}function fi(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Fr(n/60|0,"0",2)+Fr(n%60,"0",2)}function hi(t,n){return Fr(t.getUTCDate(),n,2)}function li(t,n){return Fr(t.getUTCHours(),n,2)}function di(t,n){return Fr(t.getUTCHours()%12||12,n,2)}function gi(t,n){return Fr(1+al.count(gl(t),t),n,3)}function pi(t,n){return Fr(t.getUTCMilliseconds(),n,3)}function mi(t,n){return Fr(t.getUTCMonth()+1,n,2)}function _i(t,n){return Fr(t.getUTCMinutes(),n,2)}function yi(t,n){return Fr(t.getUTCSeconds(),n,2)}function bi(t,n){return Fr(ol.count(gl(t),t),n,2)}function vi(t){return t.getUTCDay()}function Mi(t,n){return Fr(ul.count(gl(t),t),n,2)}function xi(t,n){return Fr(t.getUTCFullYear()%100,n,2)}function wi(t,n){return Fr(t.getUTCFullYear()%1e4,n,4)}function ki(){return"+0000"}function Ti(){return"%"}function Ni(t){return t.toISOString()}function Si(t){var n=new Date(t);return isNaN(n)?null:n}function Ai(){function t(t){var a=t+"",o=n.get(a);if(!o){if(i!==eg)return i;n.set(a,o=e.push(t))}return r[(o-1)%r.length]}var n=L(),e=[],r=[],i=eg;return t.domain=function(r){if(!arguments.length)return e.slice();e=[],n=L();for(var i,a,o=-1,u=r.length;++o<u;)n.has(a=(i=r[o])+"")||n.set(a,e.push(i));return t},t.range=function(n){return arguments.length?(r=ng.call(n),t):r.slice()},t.unknown=function(n){return arguments.length?(i=n,t):i},t.copy=function(){return Ai().domain(e).range(r).unknown(i)},t}function Ci(){function t(){var t=i().length,r=o[1]<o[0],l=o[r-0],d=o[1-r];n=(d-l)/Math.max(1,t-s+2*c),u&&(n=Math.floor(n)),l+=(d-l-n*(t-s))*f,e=n*(1-s),u&&(l=Math.round(l),e=Math.round(e));var g=h(t).map(function(t){return l+n*t});return a(r?g.reverse():g)}var n,e,r=Ai().unknown(void 0),i=r.domain,a=r.range,o=[0,1],u=!1,s=0,c=0,f=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(o=[+n[0],+n[1]],t()):o.slice()},r.rangeRound=function(n){return o=[+n[0],+n[1]],u=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(u=!!n,t()):u},r.padding=function(n){return arguments.length?(s=c=Math.max(0,Math.min(1,n)),t()):s},r.paddingInner=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},r.paddingOuter=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.align=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.copy=function(){return Ci().domain(i()).range(o).round(u).paddingInner(s).paddingOuter(c).align(f)},t()}function Di(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return Di(n())},t}function Pi(){return Di(Ci().paddingInner(1))}function Ei(t){return function(){return t}}function Fi(t){return+t}function Li(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:Ei(n)}function qi(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return n>=t?0:t>=e?1:r(t)}}}function Ui(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return 0>=t?n:t>=1?e:r(t)}}}function Oi(t,n,e,r){var i=t[0],a=t[1],o=n[0],u=n[1];return i>a?(i=e(a,i),o=r(u,o)):(i=e(i,a),o=r(o,u)),function(t){return o(i(t))}}function Hi(t,n,e,r){var i=Math.min(t.length,n.length)-1,a=new Array(i),o=new Array(i),u=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<i;)a[u]=e(t[u],t[u+1]),o[u]=r(n[u],n[u+1]);return function(n){var e=nc(t,n,1,i)-1;return o[e](a[e](n))}}function ji(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function Ri(t,n){function e(){var e=Math.min(o.length,u.length)>2?Hi:Oi;return i=e(o,u,c?qi(t):t,s),a=e(u,o,Li,c?Ui(n):n),r}function r(t){return i(+t)}var i,a,o=rg,u=rg,s=Se,c=!1;return r.invert=function(t){return a(+t)},r.domain=function(t){return arguments.length?(o=tg.call(t,Fi),e()):o.slice()},r.range=function(t){return arguments.length?(u=ng.call(t),e()):u.slice()},r.rangeRound=function(t){return u=ng.call(t),s=Ae,e()},r.clamp=function(t){return arguments.length?(c=!!t,e()):c},r.interpolate=function(t){return arguments.length?(s=t,e()):s},e()}function zi(t,n,e){var r,i=t[0],a=t[t.length-1],o=d(i,a,null==n?10:n);switch(e=xr(null==e?",f":e),e.type){case"s":var u=Math.max(Math.abs(i),Math.abs(a));return null!=e.precision||isNaN(r=Sr(o,u))||(e.precision=r),bd(e,u);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(r=Ar(o,Math.max(Math.abs(i),Math.abs(a))))||(e.precision=r-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(r=Nr(o))||(e.precision=r-2*("%"===e.type))}return yd(e)}function Yi(t){var n=t.domain;return t.ticks=function(t){var e=n();return l(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return zi(n(),t,e)},t.nice=function(e){var r=n(),i=r.length-1,a=null==e?10:e,o=r[0],u=r[i],s=d(o,u,a);return s&&(s=d(Math.floor(o/s)*s,Math.ceil(u/s)*s,a),r[0]=Math.floor(o/s)*s,r[i]=Math.ceil(u/s)*s,n(r)),t},t}function Ii(){var t=Ri(Li,xe);return t.copy=function(){return ji(t,Ii())},Yi(t)}function Ji(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=tg.call(e,Fi),t):n.slice()},t.copy=function(){return Ji().domain(n)},Yi(t)}function Bi(t,n){t=t.slice();var e,r=0,i=t.length-1,a=t[r],o=t[i];return a>o&&(e=r,r=i,i=e,e=a,a=o,o=e),t[r]=n.floor(a),t[i]=n.ceil(o),t}function Xi(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:Ei(n)}function Wi(t,n){return 0>t?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function $i(t){return isFinite(t)?+("1e"+t):0>t?0:t}function Vi(t){return 10===t?$i:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function Zi(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Gi(t){return function(n){return-t(-n)}}function Ki(){function t(){return i=Zi(r),a=Vi(r),e()[0]<0&&(i=Gi(i),a=Gi(a)),n}var n=Ri(Xi,Wi).domain([1,10]),e=n.domain,r=10,i=Zi(10),a=Vi(10);return n.base=function(n){return arguments.length?(r=+n,t()):r},n.domain=function(n){return arguments.length?(e(n),t()):e()},n.ticks=function(t){var n,o=e(),u=o[0],s=o[o.length-1];(n=u>s)&&(d=u,u=s,s=d);var c,f,h,d=i(u),g=i(s),p=null==t?10:+t,m=[];if(!(r%1)&&p>g-d){if(d=Math.round(d)-1,g=Math.round(g)+1,u>0){for(;g>d;++d)for(f=1,c=a(d);r>f;++f)if(h=c*f,!(u>h)){if(h>s)break;m.push(h)}}else for(;g>d;++d)for(f=r-1,c=a(d);f>=1;--f)if(h=c*f,!(u>h)){if(h>s)break;m.push(h)}n&&m.reverse()}else m=l(d,g,Math.min(g-d,p)).map(a);return m},n.tickFormat=function(t,e){if(null==e?e=10===r?ig:ag:"function"!=typeof e&&(e=yd(e)),t===1/0)return e;null==t&&(t=10);var o=Math.max(1,r*t/n.ticks().length);return function(t){var n=t/a(Math.round(i(t)));return r-.5>n*r&&(n*=r),o>=n?e(t):""}},n.nice=function(){return e(Bi(e(),{floor:function(t){return a(Math.floor(i(t)))},ceil:function(t){return a(Math.ceil(i(t)))}}))},n.copy=function(){return ji(n,Ki().base(r))},n}function Qi(t,n){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}function ta(){function t(t,n){return(n=Qi(n,e)-(t=Qi(t,e)))?function(r){return(Qi(r,e)-t)/n}:Ei(n)}function n(t,n){return n=Qi(n,e)-(t=Qi(t,e)),function(r){return Qi(t+n*r,1/e)}}var e=1,r=Ri(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e},r.copy=function(){return ji(r,ta().exponent(e))},Yi(r)}function na(){return ta().exponent(.5)}function ea(){function t(){var t=0,n=Math.max(1,i.length);for(a=new Array(n-1);++t<n;)a[t-1]=_(r,t/n);return e}function e(t){return isNaN(t=+t)?void 0:i[nc(a,t)]}var r=[],i=[],a=[];return e.invertExtent=function(t){var n=i.indexOf(t);return 0>n?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},e.domain=function(e){if(!arguments.length)return r.slice();r=[];for(var i,a=0,o=e.length;o>a;++a)i=e[a],null==i||isNaN(i=+i)||r.push(i);return r.sort(n),t()},e.range=function(n){return arguments.length?(i=ng.call(n),t()):i.slice()},e.quantiles=function(){return a.slice()},e.copy=function(){return ea().domain(r).range(i)},e}function ra(){function t(t){return t>=t?o[nc(a,t,0,i)]:void 0}function n(){var n=-1;for(a=new Array(i);++n<i;)a[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,a=[.5],o=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(o=ng.call(t)).length-1,n()):o.slice()},t.invertExtent=function(t){var n=o.indexOf(t);return 0>n?[NaN,NaN]:1>n?[e,a[0]]:n>=i?[a[i-1],r]:[a[n-1],a[n]]},t.copy=function(){return ra().domain([e,r]).range(o)},Yi(t)}function ia(){function t(t){return t>=t?e[nc(n,t,0,r)]:void 0}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=ng.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=ng.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return ia().domain(n).range(e)},t}function aa(t){return new Date(t)}function oa(t,n,e,r,i,a,o,u,s){function c(u){return(o(u)<u?p:a(u)<u?m:i(u)<u?_:r(u)<u?y:n(u)<u?e(u)<u?b:v:t(u)<u?M:x)(u)}function f(n,e,r,i){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(r-e)/n,o=dg(w,a);o===w.length?(i=d(e/lg,r/lg,n),n=t):o?(o=w[a/w[o-1][2]<w[o][2]/a?o-1:o],i=o[1],n=o[0]):(i=d(e,r,n),n=u)}return null==i?n:n.every(i)}var h=Ri(Li,xe),l=h.invert,g=h.domain,p=s(".%L"),m=s(":%S"),_=s("%I:%M"),y=s("%I %p"),b=s("%a %d"),v=s("%b %d"),M=s("%B"),x=s("%Y"),w=[[o,1,og],[o,5,5*og],[o,15,15*og],[o,30,30*og],[a,1,ug],[a,5,5*ug],[a,15,15*ug],[a,30,30*ug],[i,1,sg],[i,3,3*sg],[i,6,6*sg],[i,12,12*sg],[r,1,cg],[r,2,2*cg],[e,1,fg],[n,1,hg],[n,3,3*hg],[t,1,lg]];return h.invert=function(t){return new Date(l(t))},h.domain=function(t){return arguments.length?g(t):g().map(aa)},h.ticks=function(t,n){var e,r=g(),i=r[0],a=r[r.length-1],o=i>a;return o&&(e=i,i=a,a=e),e=f(t,i,a,n),e=e?e.range(i,a+1):[],o?e.reverse():e},h.tickFormat=function(t){return null==t?c:s(t)},h.nice=function(t,n){var e=g();return(t=f(t,e[0],e[e.length-1],n))?g(Bi(e,t)):h},h.copy=function(){return ji(h,oa(t,n,e,r,i,a,o,u,s))},h}function ua(){return oa(nl,tl,Wh,Xh,Bh,Jh,Ih,zh,Vd).domain([new Date(2e3,0,1),new Date(2e3,0,2)])}function sa(){return oa(gl,dl,ol,al,il,rl,el,Dl,Gd).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])}function ca(t){return t.match(/.{6}/g).map(function(t){return"#"+t})}function fa(){return Ai().range(ca("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"))}function ha(){return Ai().range(ca("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"))}function la(){return Ai().range(ca("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"))}function da(){return Ai().range(ca("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"))}function ga(){}function pa(t){var n;return t=(t+"").trim().toLowerCase(),(n=mg.exec(t))?(n=parseInt(n[1],16),new ya(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n)):(n=_g.exec(t))?ma(parseInt(n[1],16)):(n=yg.exec(t))?new ya(n[1],n[2],n[3]):(n=bg.exec(t))?new ya(255*n[1]/100,255*n[2]/100,255*n[3]/100):(n=vg.exec(t))?new va(n[1],n[2]/100,n[3]/100):Mg.hasOwnProperty(t)?ma(Mg[t]):null}function ma(t){return new ya(t>>16&255,t>>8&255,255&t)}function _a(t,n,e){return 1===arguments.length&&(t instanceof ga||(t=pa(t)),t?(t=t.rgb(),e=t.b,n=t.g,t=t.r):t=n=e=NaN),new ya(t,n,e)}function ya(t,n,e){this.r=+t,this.g=+n,this.b=+e}function ba(t,n,e){if(1===arguments.length)if(t instanceof va)e=t.l,n=t.s,t=t.h;else if(t instanceof ga||(t=pa(t)),t){if(t instanceof va)return t;t=t.rgb();var r=t.r/255,i=t.g/255,a=t.b/255,o=Math.min(r,i,a),u=Math.max(r,i,a),s=u-o;e=(u+o)/2,s?(n=.5>e?s/(u+o):s/(2-u-o),t=r===u?(i-a)/s+6*(a>i):i===u?(a-r)/s+2:(r-i)/s+4,t*=60):(t=NaN,n=e>0&&1>e?0:t)}else t=n=e=NaN;return new va(t,n,e)}function va(t,n,e){this.h=+t,this.s=+n,this.l=+e}function Ma(t,n,e){return 255*(60>t?n+(e-n)*t/60:180>t?e:240>t?n+(e-n)*(240-t)/60:n)}function xa(t,n,e){if(1===arguments.length)if(t instanceof wa)e=t.b,n=t.a,t=t.l;else if(t instanceof Ca){var r=t.h*kg;e=Math.sin(r)*t.c,n=Math.cos(r)*t.c,t=t.l}else{t instanceof ya||(t=_a(t)),e=Sa(t.r),n=Sa(t.g),t=Sa(t.b);var i=ka((.4124564*e+.3575761*n+.1804375*t)/Sg),a=ka((.2126729*e+.7151522*n+.072175*t)/Ag),o=ka((.0193339*e+.119192*n+.9503041*t)/Cg);e=200*(a-o),n=500*(i-a),t=116*a-16}return new wa(t,n,e)}function wa(t,n,e){this.l=+t,this.a=+n,this.b=+e}function ka(t){return t>Fg?Math.pow(t,1/3):t/Eg+Dg}function Ta(t){return t>Pg?t*t*t:Eg*(t-Dg)}function Na(t){return 255*(.0031308>=t?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Sa(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function Aa(t,n,e){return 1===arguments.length&&(t instanceof Ca?(e=t.l,n=t.c,t=t.h):(t instanceof wa||(t=xa(t)),e=t.l,n=Math.sqrt(t.a*t.a+t.b*t.b),t=Math.atan2(t.b,t.a)*Tg,0>t&&(t+=360))),new Ca(t,n,e)}function Ca(t,n,e){this.h=+t,this.c=+n,this.l=+e}function Da(t,n,e){if(1===arguments.length)if(t instanceof Pa)e=t.l,n=t.s,t=t.h;else{t instanceof ya||(t=_a(t));var r=t.r/255,i=t.g/255,a=t.b/255;e=(Ig*a+zg*r-Yg*i)/(Ig+zg-Yg);var o=a-e,u=(Rg*(i-e)-Hg*o)/jg;n=Math.sqrt(u*u+o*o)/(Rg*e*(1-e)),t=n?Math.atan2(u,o)*Tg-120:NaN,0>t&&(t+=360)}return new Pa(t,n,e)}function Pa(t,n,e){this.h=+t,this.s=+n,this.l=+e}function Ea(){return Ii().interpolate(wh).range([Da(300,.5,0),Da(-240,.5,1)])}function Fa(t){function n(n){var a=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,a)):a)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.copy=function(){return Fa(t).domain([e,r]).clamp(i)},Yi(n)}function La(t){(0>t||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return $g.h=360*t-100,$g.s=1.5-1.5*n,$g.l=.8-.9*n,$g+""}function qa(){return Fa(Vg)}function Ua(){return Fa(Zg)}function Oa(){return Fa(La)}function Ha(t){var n=Fa(function(n){return t[Math.round(n*t.length-n)]}).clamp(!0);return delete n.clamp,n}function ja(){return Ha(Gg)}function Ra(){return Ha(Kg)}function za(){return Ha(Qg)}function Ya(){return Ha(tp)}function Ia(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),np.hasOwnProperty(n)?{space:np[n],local:t}:t}function Ja(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e&&e!==n.documentElement.namespaceURI?n.createElementNS(e,t):n.createElement(t)}}function Ba(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Xa(t){var n=Ia(t);return(n.local?Ba:Ja)(n)}function Wa(t){return t.replace(op,"\\$&")}function $a(){}function Va(n,e,r){return function(i){var a=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=a}}}function Za(t){return function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t(n)}}function Ga(t,n){return function(){var e=this[t];e&&(this.removeEventListener(n,e,e._capture),delete this[t])}}function Ka(t){var n=new RegExp("^__on([^.]+)"+Wa(t)+"$");return function(){for(var t in this){var e=t.match(n);if(e){var r=this[t];this.removeEventListener(e[1],r,r._capture),delete this[t]}}}}function Qa(t,n,e,r,i){return function(a,o,u){var s=this[n];s&&this.removeEventListener(e,s,s._capture),s=Va(r,o,u),t&&(s=Za(s)),s._listener=r,this.addEventListener(e,this[n]=s,s._capture=i)}}function to(t,n,e){var r,i,a=t+"",o="__on"+a;return arguments.length<2?(r=this.node()[o])&&r._listener:((r=a.indexOf("."))>0&&(a=a.slice(0,r)),(i=up.hasOwnProperty(a))&&(a=up[a]),this.each(n?r?Qa(i,o,a,n,null==e?!1:e):$a:r?Ga(o,a):Ka(a)))}function no(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e}function eo(t){return t&&(t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView)}function ro(t){return function(){return this.querySelector(t)}}function io(t){"function"!=typeof t&&(t=ro(t));for(var n=this._groups,e=this._update,r=n.length,i=new Array(r),a=0;r>a;++a)for(var o,u,s=n[a],c=s.length,f=i[a]=new Array(c),h=0;c>h;++h)(o=s[h])&&(u=t.call(o,o.__data__,h,s))&&("__data__"in o&&(u.__data__=o.__data__),e&&(e._groups[a][h]=u),f[h]=u);return new vu(i,this._parents)}function ao(t){return function(){return this.querySelectorAll(t)}}function oo(t){"function"!=typeof t&&(t=ao(t));for(var n=this._groups,e=n.length,r=[],i=[],a=0;e>a;++a)for(var o,u=n[a],s=u.length,c=0;s>c;++c)(o=u[c])&&(r.push(t.call(o,o.__data__,c,u)),i.push(o));return new vu(r,i)}function uo(t){"function"!=typeof t&&(t=ap(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;e>i;++i)for(var a,o=n[i],u=o.length,s=r[i]=[],c=0;u>c;++c)(a=o[c])&&t.call(a,a.__data__,c,o)&&s.push(a);return new vu(r,this._parents)}function so(t){for(var n=t._groups,e=0,r=n.length;r>e;++e)if(!Array.isArray(i=n[e]))for(var i,a=i.length,o=n[e]=new Array(a),u=0;a>u;++u)o[u]=i[u];return n}function co(t){return function(){
return t}}function fo(t,n,e,r,i){var a,o=0,u=n.length,s=i.length,c=Math.min(u,s);for(e.length=0,e.length=s,r.length=0,r.length=u;c>o;++o)(a=n[o])?a.__data__=i[o]:e[o]=new go(t,i[o]);for(;s>o;++o)e[o]=new go(t,i[o]);for(;u>o;++o)(a=n[o])&&(r[o]=n[o]);n.length=s}function ho(t,n,e,r,i,a){var o,u,s,c=i.length,f=n.length,h={},l=new Array(f);for(e.length=0,e.length=c,r.length=0,r.length=f,o=0;f>o;++o)(u=n[o])&&(l[o]=s=cp+a.call(u,u.__data__,o,n),h[s]?r[o]=u:h[s]=u);for(n.length=0,n.length=c,o=0;c>o;++o)s=cp+a.call(t,i[o],o,i),(u=h[s])?u!==!0&&(n[o]=u,u.__data__=i[o]):e[o]=new go(t,i[o]),h[s]=!0;for(o=0;f>o;++o)(u=h[l[o]])!==!0&&(r[o]=u)}function lo(t,n){if(!t){var e=new Array(this.size()),r=-1;return this.each(function(t){e[++r]=t}),e}var i=n?ho:fo,a=this._parents,o=so(this),u=(this._enter=this.enter())._groups,s=(this._exit=this.exit())._groups;"function"!=typeof t&&(t=co(t));for(var c=o.length,f=0;c>f;++f){var h=o[f],l=a[f];i(l,h,u[f],s[f],t.call(l,l&&l.__data__,f,a),n);for(var d,g,p=h.length,m=0,_=0;p>m;++m)if(d=u[f][m]){for(m>=_&&(_=m+1);!(g=h[_])&&++_<p;);d._next=g||null}}return this}function go(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function po(t){return new Array(t.length)}function mo(){var t=this._enter;return t?(this._enter=null,t):(t=new vu(this._groups.map(po),this._parents),t._update=this,t)}function _o(){var t=this._exit;return t?(this._exit=null,t):new vu(this._groups.map(po),this._parents)}function yo(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],a=i.length-1,o=i[a];--a>=0;)(r=i[a])&&(o&&o!==r.nextSibling&&o.parentNode.insertBefore(r,o),o=r);return this}function bo(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=vo);for(var e=so(this),r=0,i=e.length;i>r;++r)e[r].sort(n);return this.order()}function vo(t,n){return n>t?-1:t>n?1:t>=n?0:NaN}function Mo(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function xo(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t}function wo(){for(var t=this._groups,n=0,e=t.length;e>n;++n)for(var r=t[n],i=0,a=r.length;a>i;++i){var o=r[i];if(o)return o}return null}function ko(){var t=0;return this.each(function(){++t}),t}function To(){return!this.node()}function No(t){for(var n=this._groups,e=0,r=n.length;r>e;++e)for(var i,a=n[e],o=0,u=a.length;u>o;++o)(i=a[o])&&t.call(i,i.__data__,o,a);return this}function So(t){return function(){this.removeAttribute(t)}}function Ao(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Co(t,n){return function(){this.setAttribute(t,n)}}function Do(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function Po(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function Eo(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function Fo(t,n){var e=Ia(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?Ao:So:"function"==typeof n?e.local?Eo:Po:e.local?Do:Co)(e,n))}function Lo(t){return function(){this.style.removeProperty(t)}}function qo(t,n,e){return function(){this.style.setProperty(t,n,e)}}function Uo(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function Oo(t,n,e){var r;return arguments.length>1?this.each((null==n?Lo:"function"==typeof n?Uo:qo)(t,n,null==e?"":e)):eo(r=this.node()).getComputedStyle(r,null).getPropertyValue(t)}function Ho(t){return function(){delete this[t]}}function jo(t,n){return function(){this[t]=n}}function Ro(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function zo(t,n){return arguments.length>1?this.each((null==n?Ho:"function"==typeof n?Ro:jo)(t,n)):this.node()[t]}function Yo(t){return t.trim().split(/^|\s+/)}function Io(t){return t.classList||new Jo(t)}function Jo(t){this._node=t,this._names=Yo(t.getAttribute("class")||"")}function Bo(t,n){for(var e=Io(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Xo(t,n){for(var e=Io(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function Wo(t){return function(){Bo(this,t)}}function $o(t){return function(){Xo(this,t)}}function Vo(t,n){return function(){(n.apply(this,arguments)?Bo:Xo)(this,t)}}function Zo(t,n){var e=Yo(t+"");if(arguments.length<2){for(var r=Io(this.node()),i=-1,a=e.length;++i<a;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?Vo:n?Wo:$o)(e,n))}function Go(){this.textContent=""}function Ko(t){return function(){this.textContent=t}}function Qo(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function tu(t){return arguments.length?this.each(null==t?Go:("function"==typeof t?Qo:Ko)(t)):this.node().textContent}function nu(){this.innerHTML=""}function eu(t){return function(){this.innerHTML=t}}function ru(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function iu(t){return arguments.length?this.each(null==t?nu:("function"==typeof t?ru:eu)(t)):this.node().innerHTML}function au(){this.parentNode.appendChild(this)}function ou(){return this.each(au)}function uu(){this.parentNode.insertBefore(this,this.parentNode.firstChild)}function su(){return this.each(uu)}function cu(t){return function(){return this.appendChild(t.apply(this,arguments))}}function fu(t,n){return function(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null)}}function hu(){return null}function lu(t,n){var e="function"==typeof t?t:Xa(t);return this.select(arguments.length<2?cu(e):fu(e,null==n?hu:"function"==typeof n?n:ro(n)))}function du(){var t=this.parentNode;t&&t.removeChild(this)}function gu(){return this.each(du)}function pu(t){return arguments.length?this.property("__data__",t):this.node().__data__}function mu(t,n,e){var r=eo(t),i=r.CustomEvent;i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function _u(t,n){return function(){return mu(this,t,n)}}function yu(t,n){return function(){return mu(this,t,n.apply(this,arguments))}}function bu(t,n){return this.each(("function"==typeof n?yu:_u)(t,n))}function vu(t,n){this._groups=t,this._parents=n}function Mu(){return new vu([[document.documentElement]],fp)}function xu(t){return"string"==typeof t?new vu([[document.querySelector(t)]],[document.documentElement]):new vu([[t]],fp)}function wu(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>hp){var i=eo(t);if(i.scrollX||i.scrollY){e=xu(i.document.body).append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var a=e.node().getScreenCTM();hp=!(a.f||a.e),e.remove()}}return hp?(r.x=n.pageX,r.y=n.pageY):(r.x=n.clientX,r.y=n.clientY),r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var o=t.getBoundingClientRect();return[n.clientX-o.left-t.clientLeft,n.clientY-o.top-t.clientTop]}function ku(t,n){return null==n&&(n=no()),n.changedTouches&&(n=n.changedTouches[0]),wu(t,n)}function Tu(t){return"string"==typeof t?new vu([document.querySelectorAll(t)],[document.documentElement]):new vu([t],fp)}function Nu(t,n,e){arguments.length<3&&(e=n,n=no().changedTouches);for(var r,i=0,a=n?n.length:0;a>i;++i)if((r=n[i]).identifier===e)return wu(t,r);return null}function Su(t,n){null==n&&(n=no().touches);for(var e=0,r=n?n.length:0,i=new Array(r);r>e;++e)i[e]=wu(t,n[e]);return i}function Au(){return this.each(function(){})}function Cu(t){return function(){this.removeAttribute(t)}}function Du(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Pu(t,n){return n+="",function(){var e,r=this,i=r.getAttribute(t);return i!==n&&(e=Se(i,n),function(n){r.setAttribute(t,e(n))})}}function Eu(t,n){return n+="",function(){var e,r=this,i=r.getAttributeNS(t.space,t.local);return i!==n&&(e=Se(i,n),function(n){r.setAttributeNS(t.space,t.local,e(n))})}}function Fu(t,n){return function(){var e,r,i=this,a=n.apply(i,arguments);return null==a?i.removeAttribute(t):(e=i.getAttribute(t),a+="",e!==a&&(r=Se(e,a),function(n){i.setAttribute(t,r(n))}))}}function Lu(t,n){return function(){var e,r,i=this,a=n.apply(i,arguments);return null==a?i.removeAttributeNS(t.space,t.local):(e=i.getAttributeNS(t.space,t.local),a+="",e!==a&&(r=Se(e,a),function(n){i.setAttributeNS(t.space,t.local,r(n))}))}}function qu(t,n){if(arguments.length<2)return this.tween("attr."+t);var e=Ia(t);return this.tween("attr."+t,(null==n?e.local?Du:Cu:"function"==typeof n?e.local?Lu:Fu:e.local?Eu:Pu)(e,n))}function Uu(t,n,e,r,i,a){var o=t[n];if(o){if(Ou(t,n,e))return}else t[n]=o={active:null,pending:[]};Hu(t,n,{id:e,index:r,group:i,tweens:[],time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null})}function Ou(t,n,e){var r=t[n],i=r.active;if(i&&i.id===e)return i;for(var a=r.pending,o=a.length;--o>=0;)if((i=a[o]).id===e)return i}function Hu(t,n,e){function r(n,r){var i,u,s,c,f=o.pending,h=e.tweens;for(o.active&&o.active.timer.stop(),i=0,u=-1,s=f.length;s>i;++i)c=f[i],c.id<e.id?c.timer.stop():c.id>e.id&&(f[++u]=c);for(f.length=u+1,o.active=e,cr(function(){o.active===e&&(e.timer.restart(a,e.delay,e.time),a(n))},0,r),i=0,u=-1,s=h.length;s>i;++i)(c=h[i].value.call(t,t.__data__,e.index,e.group))&&(h[++u]=c);h.length=u+1}function i(n){for(var r=e.tweens,i=0,a=r.length;a>i;++i)r[i].call(t,n)}function a(r){r>=e.duration?(i(1),o.active=null,o.pending.length||delete t[n],e.timer.stop()):i(e.ease.ease(r/e.duration))}var o=t[n];o.pending.push(e),e.timer=sr(function(t,n){e.delay<=t?r(t-e.delay,n):e.timer.restart(r,e.delay,e.time)},0,e.time)}function ju(t,n,e){return function(){Ou(this,t,n).delay=+e.apply(this,arguments)}}function Ru(t,n,e){return e=+e,function(){Ou(this,t,n).delay=e}}function zu(t){var n=this._id,e=this._key;return arguments.length?this.each(("function"==typeof t?ju:Ru)(e,n,t)):Ou(this.node(),e,n).delay}function Yu(t,n,e){return function(){Ou(this,t,n).duration=+e.apply(this,arguments)}}function Iu(t,n,e){return e=+e,function(){Ou(this,t,n).duration=e}}function Ju(t){var n=this._id,e=this._key;return arguments.length?this.each(("function"==typeof t?Yu:Iu)(e,n,t)):Ou(this.node(),e,n).duration}function Bu(t,n,e){return function(){Ou(this,t,n).ease=e.apply(this,arguments)}}function Xu(t,n,e){return function(){Ou(this,t,n).ease=e}}function Wu(t){var n=this._id,e=this._key;return arguments.length?this.each(("function"==typeof t?Bu:Xu)(e,n,t)):Ou(this.node(),e,n).ease}function $u(t){"function"!=typeof t&&(t=ap(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;e>i;++i)for(var a,o=n[i],u=o.length,s=r[i]=[],c=0;u>c;++c)(a=o[c])&&t.call(a,a.__data__,c,o)&&s.push(a);return new is(r,this._parents,this._key,this._id)}function Vu(t){var n=this._id,e=this._key;"function"!=typeof t&&(t=ro(t));for(var r=this._groups,i=r.length,a=new Array(i),o=0;i>o;++o)for(var u,s,c=r[o],f=c.length,h=a[o]=new Array(f),l=0;f>l;++l)(u=c[l])&&(s=t.call(u,u.__data__,l,c))&&("__data__"in u&&(s.__data__=u.__data__),h[l]=s,Uu(h[l],e,n,l,h,Ou(u,e,n)));return new is(a,this._parents,e,n)}function Zu(t){var n=this._id,e=this._key;"function"!=typeof t&&(t=ao(t));for(var r=this._groups,i=r.length,a=[],o=[],u=0;i>u;++u)for(var s,c=r[u],f=c.length,h=0;f>h;++h)if(s=c[h]){for(var l,d=t.call(s,s.__data__,h,c),g=Ou(s,e,n),p=0,m=d.length;m>p;++p)(l=d[p])&&Uu(l,e,n,p,d,g);a.push(d),o.push(s)}return new is(r,o,e,n)}function Gu(t){return t&&(t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView)}function Ku(t,n,e){return function(){var n,r=this,i=Gu(r).getComputedStyle(r,null),a=i.getPropertyValue(t),o=(r.style.removeProperty(t),i.getPropertyValue(t));return a!==o&&(n=Se(a,o),function(i){1===i?r.style.removeProperty(t):r.style.setProperty(t,n(i),e)})}}function Qu(t,n,e){return n+="",function(){var r,i=this,a=Gu(i).getComputedStyle(i,null).getPropertyValue(t);return a!==n&&(r=Se(a,n),function(n){i.style.setProperty(t,r(n),e)})}}function ts(t,n,e){return function(){var r,i,a=this,o=n.apply(a,arguments);return null==o?a.style.removeProperty(t):(r=Gu(a).getComputedStyle(a,null).getPropertyValue(t),o+="",r!==o&&(i=Se(r,o),function(n){a.style.setProperty(t,i(n),e)}))}}function ns(t,n,e){return arguments.length<2?this.tween("style."+t):this.tween("style."+t,(null==n?Ku:"function"==typeof n?ts:Qu)(t,n,null==e?"":e))}function es(t,n,e,r){return function(){for(var i,a=Ou(this,t,n).tweens,o=0,u=a.length;u>o;++o)if((i=a[o]).name===e)return i.value=r;a.push({name:e,value:r})}}function rs(t,n){var e=t+"";if(arguments.length<2){for(var r,i=Ou(this.node(),this._key,this._id).tweens,a=0,o=i.length;o>a;++a)if((r=i[a]).name===e)return r;return null}return this.each(es(this._key,this._id,e,n))}function is(t,n,e,r){this._groups=t,this._parents=n,this._key=e,this._id=r}function as(t){return new is([[document.documentElement]],lp,os(t))}function os(t){return t?"__transition_"+t+"__":"__transition__"}function us(t){for(var n=++gp,e=os(t),r={time:Date.now(),delay:0,duration:250,ease:gc},i=this._groups,a=i.length,o=new Array(a),u=0;a>u;++u)for(var s,c=i[u],f=c.length,h=o[u]=new Array(f),l=0;f>l;++l)(s=c[l])&&Uu(h[l]=s,e,n,l,h,r);return new is(o,this._parents,e,n)}function ss(t){return t}function cs(t){return function(n){return"translate("+t(n)+",0)"}}function fs(t){return function(n){return"translate(0,"+t(n)+")"}}function hs(t){var n=t.bandwidth()/2;return function(e){return t(e)+n}}function ls(t){t.enter().append("path").attr("class","domain")}function ds(t){t.exit().remove();var n=t.enter().append("g",".domain").attr("class","tick");n.append("line"),n.append("text"),t.order()}function gs(t,n){function e(e){var c=null==i?n.ticks?n.ticks.apply(n,r):n.domain():i,f=null==a?n.tickFormat?n.tickFormat.apply(n,r):ss:a,h=Math.max(o,0)+s,l=n.bandwidth?hs(n):n,d=n.range();e.each(function(){var e=xu(this),r=e.selectAll(".domain").data([null]).call(ls),i=e.selectAll(".tick").data(c,n).call(ds),a=i.select("line"),s=i.select("text").text(f);switch(t){case mp:r.attr("d","M"+d[0]+","+-u+"V0H"+d[1]+"V"+-u),i.attr("transform",cs(l)),a.attr("x2",0).attr("y2",-o),s.attr("x",0).attr("y",-h).attr("dy","0em").style("text-anchor","middle");break;case _p:r.attr("d","M"+u+","+d[0]+"H0V"+d[1]+"H"+u),i.attr("transform",fs(l)),a.attr("y2",0).attr("x2",o),s.attr("y",0).attr("x",h).attr("dy",".32em").style("text-anchor","start");break;case yp:r.attr("d","M"+d[0]+","+u+"V0H"+d[1]+"V"+u),i.attr("transform",cs(l)),a.attr("x2",0).attr("y2",o),s.attr("x",0).attr("y",h).attr("dy",".71em").style("text-anchor","middle");break;case bp:r.attr("d","M"+-u+","+d[0]+"H0V"+d[1]+"H"+-u),i.attr("transform",fs(l)),a.attr("y2",0).attr("x2",-o),s.attr("y",0).attr("x",-h).attr("dy",".32em").style("text-anchor","end")}})}var r=[],i=null,a=null,o=6,u=6,s=3;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=pp.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:pp.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(i=null==t?null:pp.call(t),e):i&&i.slice()},e.tickFormat=function(t){return arguments.length?(a=t,e):a},e.tickSize=function(t){return arguments.length?(o=u=+t,e):o},e.tickSizeInner=function(t){return arguments.length?(o=+t,e):o},e.tickSizeOuter=function(t){return arguments.length?(u=+t,e):u},e.tickPadding=function(t){return arguments.length?(s=+t,e):s},e}function ps(t){return gs(mp,t)}function ms(t){return gs(_p,t)}function _s(t){return gs(yp,t)}function ys(t){return gs(bp,t)}function bs(t){return function(){return t}}function vs(t){return t[0]}function Ms(t){return t[1]}function xs(){this._=null}function ws(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function ks(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Ts(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Ns(t){for(;t.L;)t=t.L;return t}function Ss(t,n,e,r){var i=[null,null],a=kp.push(i)-1;return i.left=t,i.right=n,e&&Cs(i,t,n,e),r&&Cs(i,n,t,r),xp[t.index].halfedges.push(a),xp[n.index].halfedges.push(a),i}function As(t,n,e){var r=[n,e];return r.left=t,r}function Cs(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function Ds(t,n,e,r,i){var a,o,u=t[0],s=t[1],c=u[0],f=u[1],h=s[0],l=s[1],d=0,g=1,p=h-c,m=l-f;if(o=n-c,p||!(o>0)){if(o/=p,0>p){if(d>o)return;g>o&&(g=o)}else if(p>0){if(o>g)return;o>d&&(d=o)}if(o=r-c,p||!(0>o)){if(o/=p,0>p){if(o>g)return;o>d&&(d=o)}else if(p>0){if(d>o)return;g>o&&(g=o)}if(o=e-f,m||!(o>0)){if(o/=m,0>m){if(d>o)return;g>o&&(g=o)}else if(m>0){if(o>g)return;o>d&&(d=o)}if(o=i-f,m||!(0>o)){if(o/=m,0>m){if(o>g)return;o>d&&(d=o)}else if(m>0){if(d>o)return;g>o&&(g=o)}return d>0||1>g?(a=t.left,o=t.right,d>0&&(u=[c+d*p,f+d*m]),1>g&&(s=[c+g*p,f+g*m]),t=[u,s],t.left=a,t.right=o,t):t}}}}}function Ps(t,n,e,r,i){var a=t[1];if(a)return t;var o,u,s=t[0],c=t.left,f=t.right,h=c[0],l=c[1],d=f[0],g=f[1],p=(h+d)/2,m=(l+g)/2;if(g===l){if(n>p||p>=r)return;if(h>d){if(s){if(s[1]>=i)return}else s=[p,e];a=[p,i]}else{if(s){if(s[1]<e)return}else s=[p,i];a=[p,e]}}else if(o=(h-d)/(g-l),u=m-o*p,-1>o||o>1)if(h>d){if(s){if(s[1]>=i)return}else s=[(e-u)/o,e];a=[(i-u)/o,i]}else{if(s){if(s[1]<e)return}else s=[(i-u)/o,i];a=[(e-u)/o,e]}else if(g>l){if(s){if(s[0]>=r)return}else s=[n,o*n+u];a=[r,o*r+u]}else{if(s){if(s[0]<n)return}else s=[r,o*r+u];a=[n,o*n+u]}return t=[s,a],t.left=c,t.right=f,t}function Es(t,n,e,r){for(var i,a=kp.length,o=new Array(a);a--;)(i=Ps(kp[a],t,n,e,r))&&(i=Ds(i,t,n,e,r))&&(Math.abs(i[0][0]-i[1][0])>Sp||Math.abs(i[0][1]-i[1][1])>Sp)&&(o[a]=i);return o}function Fs(t){return xp[t.index]={site:t,halfedges:[]}}function Ls(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function qs(t,n){return n[+(n.left!==t.site)]}function Us(t,n){return n[+(n.left===t.site)]}function Os(){for(var t,n,e,r,i=0,a=xp.length;a>i;++i)if((t=xp[i])&&(r=(n=t.halfedges).length)){var o=new Array(r),u=new Array(r);for(e=0;r>e;++e)o[e]=e,u[e]=Ls(t,kp[n[e]]);for(o.sort(function(t,n){return u[n]-u[t]}),e=0;r>e;++e)u[e]=n[o[e]];for(e=0;r>e;++e)n[e]=u[e]}}function Hs(t,n,e,r,i){for(var a,o,u,s,c,f,h,l,d,g,p=xp.length;p--;)if(a=xp[p]){for(u=a.halfedges,o=u.length;o--;)t[u[o]]||u.splice(o,1);for(o=0,s=u.length;s>o;)l=Us(a,t[u[o]]),d=l[0],g=l[1],c=qs(a,t[u[++o%s]]),f=c[0],h=c[1],(Math.abs(d-f)>Sp||Math.abs(g-h)>Sp)&&(u.splice(o,0,t.push(As(a.site,l,Math.abs(d-n)<Sp&&i-g>Sp?[n,Math.abs(f-n)<Sp?h:i]:Math.abs(g-i)<Sp&&r-d>Sp?[Math.abs(h-i)<Sp?f:r,i]:Math.abs(d-r)<Sp&&g-e>Sp?[r,Math.abs(f-r)<Sp?h:e]:Math.abs(g-e)<Sp&&d-n>Sp?[Math.abs(h-e)<Sp?f:n,e]:null))-1),++s)}}function js(){ws(this),this.x=this.y=this.arc=this.site=this.cy=null}function Rs(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,a=e.site;if(r!==a){var o=i[0],u=i[1],s=r[0]-o,c=r[1]-u,f=a[0]-o,h=a[1]-u,l=2*(s*h-c*f);if(!(l>=-Ap)){var d=s*s+c*c,g=f*f+h*h,p=(h*d-c*g)/l,m=(s*g-f*d)/l,_=Tp.pop()||new js;_.arc=t,_.site=i,_.x=p+o,_.y=(_.cy=m+u)+Math.sqrt(p*p+m*m),t.circle=_;for(var y=null,b=wp._;b;)if(_.y<b.y||_.y===b.y&&_.x<=b.x){if(!b.L){y=b.P;break}b=b.L}else{if(!b.R){y=b;break}b=b.R}wp.insert(y,_),y||(vp=_)}}}}function zs(t){var n=t.circle;n&&(n.P||(vp=n.N),wp.remove(n),Tp.push(n),ws(n),t.circle=null)}function Ys(){ws(this),this.edge=this.site=this.circle=null}function Is(t){var n=Np.pop()||new Ys;return n.site=t,n}function Js(t){zs(t),Mp.remove(t),Np.push(t),ws(t)}function Bs(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],a=t.P,o=t.N,u=[t];Js(t);for(var s=a;s.circle&&Math.abs(e-s.circle.x)<Sp&&Math.abs(r-s.circle.cy)<Sp;)a=s.P,u.unshift(s),Js(s),s=a;u.unshift(s),zs(s);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<Sp&&Math.abs(r-c.circle.cy)<Sp;)o=c.N,u.push(c),Js(c),c=o;u.push(c),zs(c);var f,h=u.length;for(f=1;h>f;++f)c=u[f],s=u[f-1],Cs(c.edge,s.site,c.site,i);s=u[0],c=u[h-1],c.edge=Ss(s.site,c.site,null,i),Rs(s),Rs(c)}function Xs(t){for(var n,e,r,i,a=t[0],o=t[1],u=Mp._;u;)if(r=Ws(u,o)-a,r>Sp)u=u.L;else{if(i=a-$s(u,o),!(i>Sp)){r>-Sp?(n=u.P,e=u):i>-Sp?(n=u,e=u.N):n=e=u;break}if(!u.R){n=u;break}u=u.R}Fs(t);var s=Is(t);if(Mp.insert(n,s),n||e){if(n===e)return zs(n),e=Is(n.site),Mp.insert(s,e),s.edge=e.edge=Ss(n.site,s.site),Rs(n),void Rs(e);if(!e)return void(s.edge=Ss(n.site,s.site));zs(n),zs(e);var c=n.site,f=c[0],h=c[1],l=t[0]-f,d=t[1]-h,g=e.site,p=g[0]-f,m=g[1]-h,_=2*(l*m-d*p),y=l*l+d*d,b=p*p+m*m,v={x:(m*y-d*b)/_+f,y:(l*b-p*y)/_+h};Cs(e.edge,c,g,v),s.edge=Ss(c,t,null,v),e.edge=Ss(t,g,null,v),Rs(n),Rs(e)}}function Ws(t,n){var e=t.site,r=e[0],i=e[1],a=i-n;if(!a)return r;var o=t.P;if(!o)return-(1/0);e=o.site;var u=e[0],s=e[1],c=s-n;if(!c)return u;var f=u-r,h=1/a-1/c,l=f/c;return h?(-l+Math.sqrt(l*l-2*h*(f*f/(-2*c)-s+c/2+i-a/2)))/h+r:(r+u)/2}function $s(t,n){var e=t.N;if(e)return Ws(e,n);var r=t.site;return r[1]===n?r[0]:1/0}function Vs(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function Zs(t,n){return n[1]-t[1]||n[0]-t[0]}function Gs(t,n){var e,r,i,a=t.sort(Zs).pop();for(kp=[],xp=new Array(t.length),Mp=new xs,wp=new xs;;)if(i=vp,a&&(!i||a[1]<i.y||a[1]===i.y&&a[0]<i.x))(a[0]!==e||a[1]!==r)&&(Xs(a),e=a[0],r=a[1]),a=t.pop();else{if(!i)break;Bs(i.arc)}if(Os(),n){var o=n[0][0],u=n[0][1],s=n[1][0],c=n[1][1];this.extent=[[o,u],[s,c]],this.cellEdges=Es(o,u,s,c),Hs(this.cellEdges,o,u,s,c)}else this.cellEdges=kp;this.cells=xp,this.edges=kp,Mp=wp=kp=xp=null}function Ks(){function t(t){return new Gs(t.map(function(r,i){var a=[Math.round(n(r,i,t)/Sp)*Sp,Math.round(e(r,i,t)/Sp)*Sp];return a.index=i,a.data=r,a}),r)}var n=vs,e=Ms,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:bs(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:bs(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0],r[1][1]]},t}var Qs="4.0.0-alpha.14",tc=e(n),nc=tc.right,ec=tc.left,rc=Math.sqrt(50),ic=Math.sqrt(10),ac=Math.sqrt(2),oc="$";F.prototype=L.prototype={has:function(t){return oc+t in this},get:function(t){return this[oc+t]},set:function(t,n){return this[oc+t]=n,this},remove:function(t){var n=oc+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===oc&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===oc&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===oc&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===oc&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===oc&&++t;return t},empty:function(){for(var t in this)if(t[0]===oc)return!1;return!0},each:function(t){for(var n in this)n[0]===oc&&t(this[n],n.slice(1),this)}};var uc=L.prototype;R.prototype=z.prototype={has:uc.has,add:function(t){return t+="",this[oc+t]=t,this},remove:uc.remove,clear:uc.clear,values:uc.keys,size:uc.size,empty:uc.empty,each:uc.each};var sc={ease:function(t){return+t}},cc={ease:function(t){return t*t}},fc={ease:function(t){return t*(2-t)}},hc={ease:function(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}},lc={ease:function(t){return t*t*t}},dc={ease:function(t){return--t*t*t+1}},gc={ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}},pc=3,mc=function Cp(t){return t=+t,{exponent:Cp,ease:function(n){return Math.pow(n,t)}}}(pc),_c=function Dp(t){return t=+t,{exponent:Dp,ease:function(n){return 1-Math.pow(1-n,t)}}}(pc),yc=function Pp(t){return t=+t,{exponent:Pp,ease:function(n){return((n*=2)<=1?Math.pow(n,t):2-Math.pow(2-n,t))/2}}}(pc),bc=Math.PI,vc=bc/2,Mc={ease:function(t){return 1-Math.cos(t*vc)}},xc={ease:function(t){return Math.sin(t*vc)}},wc={ease:function(t){return(1-Math.cos(bc*t))/2}},kc={ease:function(t){return Math.pow(2,10*t-10)}},Tc={ease:function(t){return 1-Math.pow(2,-10*t)}},Nc={ease:function(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}},Sc={ease:function(t){return 1-Math.sqrt(1-t*t)}},Ac={ease:function(t){return Math.sqrt(1- --t*t)}},Cc={ease:function(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}},Dc=4/11,Pc=6/11,Ec=8/11,Fc=.75,Lc=9/11,qc=10/11,Uc=.9375,Oc=21/22,Hc=63/64,jc=1/Dc/Dc,Rc={ease:function(t){return 1-G(1-t)}},zc={ease:G},Yc={ease:function(t){return((t*=2)<=1?1-G(1-t):G(t-1)+1)/2}},Ic=1.70158,Jc=function Ep(t){return t=+t,{overshoot:Ep,ease:function(n){return n*n*((t+1)*n-t)}}}(Ic),Bc=function Fp(t){return t=+t,{overshoot:Fp,ease:function(n){return--n*n*((t+1)*n+t)+1}}}(Ic),Xc=function Lp(t){return t=+t,{overshoot:Lp,ease:function(n){return((n*=2)<1?n*n*((t+1)*n-t):(n-=2)*n*((t+1)*n+t)+2)/2}}}(Ic),Wc=2*Math.PI,$c=1,Vc=.3,Zc=function qp(t,n){var e=Math.asin(1/(t=Math.max(1,t)))*(n/=Wc);return{amplitude:function(t){return qp(t,n*Wc)},period:function(n){return qp(t,n)},ease:function(r){return t*Math.pow(2,10*--r)*Math.sin((e-r)/n)}}}($c,Vc),Gc=function Up(t,n){var e=Math.asin(1/(t=Math.max(1,t)))*(n/=Wc);return{amplitude:function(t){return Up(t,n*Wc)},period:function(n){return Up(t,n)},ease:function(r){return 1-t*Math.pow(2,-10*(r=+r))*Math.sin((r+e)/n)}}}($c,Vc),Kc=function Op(t,n){var e=Math.asin(1/(t=Math.max(1,t)))*(n/=Wc);return{amplitude:function(t){return Op(t,n*Wc)},period:function(n){return Op(t,n)},ease:function(r){return((r=2*r-1)<0?t*Math.pow(2,10*r)*Math.sin((e-r)/n):2-t*Math.pow(2,-10*r)*Math.sin((e+r)/n))/2}}}($c,Vc),Qc=Math.PI,tf=2*Qc,nf=1e-6,ef=tf-nf;ot.prototype=ut.prototype={moveTo:function(t,n){this._.push("M",this._x0=this._x1=+t,",",this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._.push("Z"))},lineTo:function(t,n){this._.push("L",this._x1=+t,",",this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._.push("Q",+t,",",+n,",",this._x1=+e,",",this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,a){this._.push("C",+t,",",+n,",",+e,",",+r,",",this._x1=+i,",",this._y1=+a)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var a=this._x1,o=this._y1,u=e-t,s=r-n,c=a-t,f=o-n,h=c*c+f*f;if(0>i)throw new Error("negative radius: "+i);if(null===this._x1)this._.push("M",this._x1=t,",",this._y1=n);else if(h>nf)if(Math.abs(f*u-s*c)>nf&&i){var l=e-a,d=r-o,g=u*u+s*s,p=l*l+d*d,m=Math.sqrt(g),_=Math.sqrt(h),y=i*Math.tan((Qc-Math.acos((g+h-p)/(2*m*_)))/2),b=y/_,v=y/m;Math.abs(b-1)>nf&&this._.push("L",t+b*c,",",n+b*f),this._.push("A",i,",",i,",0,0,",+(f*l>c*d),",",this._x1=t+v*u,",",this._y1=n+v*s)}else this._.push("L",this._x1=t,",",this._y1=n);else;},arc:function(t,n,e,r,i,a){t=+t,n=+n,e=+e;var o=e*Math.cos(r),u=e*Math.sin(r),s=t+o,c=n+u,f=1^a,h=a?r-i:i-r;if(0>e)throw new Error("negative radius: "+e);null===this._x1?this._.push("M",s,",",c):(Math.abs(this._x1-s)>nf||Math.abs(this._y1-c)>nf)&&this._.push("L",s,",",c),e&&(h>ef?this._.push("A",e,",",e,",0,1,",f,",",t-o,",",n-u,"A",e,",",e,",0,1,",f,",",this._x1=s,",",this._y1=c):(0>h&&(h=h%tf+tf),this._.push("A",e,",",e,",0,",+(h>=Qc),",",f,",",this._x1=t+e*Math.cos(i),",",this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._.push("M",this._x0=this._x1=+t,",",this._y0=this._y1=+n,"h",+e,"v",+r,"h",-e,"Z")},toString:function(){return this._.join("")}};var rf=[].slice,af={},of=1e-12,uf=Math.PI,sf=uf/2,cf=2*uf,ff=Array.prototype.slice;Ct.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},Ht.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){t-=sf,this._curve.point(n*Math.cos(t),n*Math.sin(t))}};var hf={draw:function(t,n){var e=Math.sqrt(n/uf);t.moveTo(e,0),t.arc(0,0,e,0,cf)}},lf={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},df=Math.sqrt(1/3),gf=2*df,pf={draw:function(t,n){var e=Math.sqrt(n/gf),r=e*df;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},mf=.8908130915292852,_f=Math.sin(uf/10)/Math.sin(7*uf/10),yf=Math.sin(cf/10)*_f,bf=-Math.cos(cf/10)*_f,vf={draw:function(t,n){var e=Math.sqrt(n*mf),r=yf*e,i=bf*e;t.moveTo(0,-e),t.lineTo(r,i);for(var a=1;5>a;++a){var o=cf*a/5,u=Math.cos(o),s=Math.sin(o);t.lineTo(s*e,-u*e),t.lineTo(u*r-s*i,s*r+u*i)}t.closePath()}},Mf={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},xf=Math.sqrt(3),wf={draw:function(t,n){var e=-Math.sqrt(n/(3*xf));t.moveTo(0,2*e),t.lineTo(-xf*e,-e),t.lineTo(xf*e,-e),t.closePath()}},kf=-.5,Tf=Math.sqrt(3)/2,Nf=1/Math.sqrt(12),Sf=3*(Nf/2+1),Af={draw:function(t,n){var e=Math.sqrt(n/Sf),r=e/2,i=e*Nf,a=r,o=e*Nf+e,u=-a,s=o;t.moveTo(r,i),t.lineTo(a,o),t.lineTo(u,s),t.lineTo(kf*r-Tf*i,Tf*r+kf*i),t.lineTo(kf*a-Tf*o,Tf*a+kf*o),t.lineTo(kf*u-Tf*s,Tf*u+kf*s),t.lineTo(kf*r+Tf*i,kf*i-Tf*r),t.lineTo(kf*a+Tf*o,kf*o-Tf*a),t.lineTo(kf*u+Tf*s,kf*s-Tf*u),t.closePath()}},Cf=[hf,lf,pf,Mf,vf,wf,Af];Bt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Jt(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Jt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Wt.prototype={areaStart:It,areaEnd:It,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:Jt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Vt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:Jt(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}},Gt.prototype={lineStart:function(){
this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],a=n[0],o=t[e]-i,u=n[e]-a,s=-1;++s<=e;)r=s/e,this._basis.point(this._beta*t[s]+(1-this._beta)*(i+r*o),this._beta*n[s]+(1-this._beta)*(a+r*u));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}},tn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:Qt(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:Qt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},en.prototype={areaStart:It,areaEnd:It,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:Qt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},an.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:Qt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},sn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this,this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:un(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},fn.prototype={areaStart:It,areaEnd:It,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:un(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},ln.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:un(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},gn.prototype={areaStart:It,areaEnd:It,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}},vn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:bn(this,this._t0,yn(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,bn(this,yn(this,e=_n(this,t,n)),e);break;default:bn(this,this._t0,e=_n(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(Mn.prototype=Object.create(vn.prototype)).point=function(t,n){vn.prototype.point.call(this,n,t)},xn.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,a){this._context.bezierCurveTo(n,t,r,e,a,i)}},Tn.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=Nn(t),i=Nn(n),a=0,o=1;e>o;++a,++o)this._context.bezierCurveTo(r[0][a],i[0][a],r[1][a],i[1][a],t[o],n[o]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}},An.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:var e=t>this._x?this._t:1-this._t;if(0>=e)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else if(e>=1)this._context.lineTo(t,this._y),this._context.lineTo(t,n);else{var r=(this._x+t)*e;this._context.lineTo(r,this._y),this._context.lineTo(r,n)}}this._x=t,this._y=n}};var Df=Array.prototype.slice,Pf=.7,Ef=1/Pf,Ff=/^#([0-9a-f]{3})$/,Lf=/^#([0-9a-f]{6})$/,qf=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Uf=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Of=/^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,Hf=/^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,jf=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Rf=/^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/,zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Bn.prototype=Jn.prototype={displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}};var Yf=Vn.prototype=Zn.prototype=new Jn;Yf.brighter=function(t){return t=null==t?Ef:Math.pow(Ef,t),new Zn(this.r*t,this.g*t,this.b*t,this.opacity)},Yf.darker=function(t){return t=null==t?Pf:Math.pow(Pf,t),new Zn(this.r*t,this.g*t,this.b*t,this.opacity)},Yf.rgb=function(){return this},Yf.displayable=function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},Yf.toString=function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")};var If=Qn.prototype=te.prototype=new Jn;If.brighter=function(t){return t=null==t?Ef:Math.pow(Ef,t),new te(this.h,this.s,this.l*t,this.opacity)},If.darker=function(t){return t=null==t?Pf:Math.pow(Pf,t),new te(this.h,this.s,this.l*t,this.opacity)},If.rgb=function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(.5>e?e:1-e)*n,i=2*e-r;return new Zn(ne(t>=240?t-240:t+120,i,r),ne(t,i,r),ne(120>t?t+240:t-120,i,r),this.opacity)},If.displayable=function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1};var Jf=Math.PI/180,Bf=180/Math.PI,Xf=18,Wf=.95047,$f=1,Vf=1.08883,Zf=4/29,Gf=6/29,Kf=3*Gf*Gf,Qf=Gf*Gf*Gf,th=re.prototype=ie.prototype=new Jn;th.brighter=function(t){return new ie(this.l+Xf*(null==t?1:t),this.a,this.b,this.opacity)},th.darker=function(t){return new ie(this.l-Xf*(null==t?1:t),this.a,this.b,this.opacity)},th.rgb=function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=$f*oe(t),n=Wf*oe(n),e=Vf*oe(e),new Zn(ue(3.2404542*n-1.5371385*t-.4985314*e),ue(-.969266*n+1.8760108*t+.041556*e),ue(.0556434*n-.2040259*t+1.0572252*e),this.opacity)};var nh=fe.prototype=he.prototype=new Jn;nh.brighter=function(t){return new he(this.h,this.c,this.l+Xf*(null==t?1:t),this.opacity)},nh.darker=function(t){return new he(this.h,this.c,this.l-Xf*(null==t?1:t),this.opacity)},nh.rgb=function(){return ee(this).rgb()};var eh=-.14861,rh=1.78277,ih=-.29227,ah=-.90649,oh=1.97294,uh=oh*ah,sh=oh*rh,ch=rh*ih-ah*eh,fh=de.prototype=ge.prototype=new Jn;fh.brighter=function(t){return t=null==t?Ef:Math.pow(Ef,t),new ge(this.h,this.s,this.l*t,this.opacity)},fh.darker=function(t){return t=null==t?Pf:Math.pow(Pf,t),new ge(this.h,this.s,this.l*t,this.opacity)},fh.rgb=function(){var t=isNaN(this.h)?0:(this.h+120)*Jf,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new Zn(255*(n+e*(eh*r+rh*i)),255*(n+e*(ih*r+ah*i)),255*(n+e*(oh*r)),this.opacity)};var hh,lh=function Hp(t){function n(t,n){var r=e((t=Vn(t)).r,(n=Vn(n)).r),i=e(t.g,n.g),a=e(t.b,n.b),o=e(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=a(n),t.opacity=o(n),t+""}}var e=be(t);return n.gamma=Hp,n}(1),dh=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,gh=new RegExp(dh.source,"g"),ph=[function(t,n){var e,r=typeof n;return("string"===r?(e=Bn(n))?(n=e,lh):Ne:n instanceof Bn?lh:Array.isArray(n)?Me:"object"===r&&isNaN(n)?we:xe)(t,n)}],mh=180/Math.PI,_h={a:1,b:0,c:0,d:1,e:0,f:0},yh=Math.SQRT2,bh=2,vh=4,Mh=1e-12,xh=function jp(t){function n(n,e){var r=ye((n=de(n)).h,(e=de(e)).h),i=ve(n.s,e.s),a=ve(n.l,e.l),o=ve(n.opacity,e.opacity);return function(e){return n.h=r(e),n.s=i(e),n.l=a(Math.pow(e,t)),n.opacity=o(e),n+""}}return t=+t,n.gamma=jp,n}(1),wh=function Rp(t){function n(n,e){var r=ve((n=de(n)).h,(e=de(e)).h),i=ve(n.s,e.s),a=ve(n.l,e.l),o=ve(n.opacity,e.opacity);return function(e){return n.h=r(e),n.s=i(e),n.l=a(Math.pow(e,t)),n.opacity=o(e),n+""}}return t=+t,n.gamma=Rp,n}(1);$e.prototype=Ve.prototype,Ze.prototype=tr.prototype;var kh,Th,Nh=Ze(","),Sh=Ze("	"),Ah=ir("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)}),Ch=ir("application/json",function(t){return JSON.parse(t.responseText)}),Dh=ir("text/plain",function(t){return t.responseText}),Ph=ir("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}),Eh=ar("text/csv",Nh),Fh=ar("text/tab-separated-values",Sh),Lh=0,qh=0,Uh=0,Oh={},Hh="undefined"!=typeof window&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame)||function(t){return setTimeout(t,17)};ur.prototype=sr.prototype={restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?Date.now():+e)+(null==n?0:+n);var r=this.id,i=Oh[r];i?(i.callback=t,i.time=e):(i={next:null,callback:t,time:e},Th?Th.next=i:kh=i,Oh[r]=Th=i),lr()},stop:function(){var t=this.id,n=Oh[t];n&&(n.callback=null,n.time=1/0,delete Oh[t],lr())}};var jh=new Date,Rh=new Date,zh=dr(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});zh.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?dr(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):zh:null};var Yh,Ih=dr(function(t){t.setMilliseconds(0)},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getSeconds()}),Jh=dr(function(t){t.setSeconds(0,0)},function(t,n){t.setTime(+t+6e4*n)},function(t,n){return(n-t)/6e4},function(t){return t.getMinutes()}),Bh=dr(function(t){t.setMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getHours()}),Xh=dr(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5},function(t){return t.getDate()-1}),Wh=gr(0),$h=gr(1),Vh=gr(2),Zh=gr(3),Gh=gr(4),Kh=gr(5),Qh=gr(6),tl=dr(function(t){t.setHours(0,0,0,0),t.setDate(1)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),nl=dr(function(t){t.setHours(0,0,0,0),t.setMonth(0,1)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()}),el=dr(function(t){t.setUTCMilliseconds(0)},function(t,n){t.setTime(+t+1e3*n)},function(t,n){return(n-t)/1e3},function(t){return t.getUTCSeconds()}),rl=dr(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+6e4*n)},function(t,n){return(n-t)/6e4},function(t){return t.getUTCMinutes()}),il=dr(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+36e5*n)},function(t,n){return(n-t)/36e5},function(t){return t.getUTCHours()}),al=dr(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/864e5},function(t){return t.getUTCDate()-1}),ol=pr(0),ul=pr(1),sl=pr(2),cl=pr(3),fl=pr(4),hl=pr(5),ll=pr(6),dl=dr(function(t){t.setUTCHours(0,0,0,0),t.setUTCDate(1)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),gl=dr(function(t){t.setUTCHours(0,0,0,0),t.setUTCMonth(0,1)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()}),pl=zh.range,ml=Ih.range,_l=Jh.range,yl=Bh.range,bl=Xh.range,vl=Wh.range,Ml=$h.range,xl=Vh.range,wl=Zh.range,kl=Gh.range,Tl=Kh.range,Nl=Qh.range,Sl=Wh.range,Al=tl.range,Cl=nl.range,Dl=zh,Pl=pl,El=el.range,Fl=rl.range,Ll=il.range,ql=al.range,Ul=ol.range,Ol=ul.range,Hl=sl.range,jl=cl.range,Rl=fl.range,zl=hl.range,Yl=ll.range,Il=ol.range,Jl=dl.range,Bl=gl.range,Xl={"":br,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Mr(100*t,n)},r:Mr,s:vr,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},Wl=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;wr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var $l=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],Vl=Tr({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),Zl=Tr({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),Gl=Tr({decimal:",",thousands:" ",grouping:[3],currency:[""," Kč"]}),Kl=Tr({decimal:",",thousands:"'",grouping:[3],currency:[""," CHF"]}),Ql=Tr({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),td=Tr({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),nd=Tr({decimal:".",thousands:",",grouping:[3],currency:["£",""]}),ed=Tr({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),rd=Tr({decimal:",",thousands:" ",grouping:[3],currency:[""," €"]}),id=Tr({decimal:",",thousands:" ",grouping:[3],currency:["","$"]}),ad=Tr({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),od=Tr({decimal:".",thousands:",",grouping:[3],currency:["₪",""]}),ud=Tr({decimal:",",thousands:" ",grouping:[3],currency:[""," Ft"]}),sd=Tr({decimal:",",thousands:".",grouping:[3],currency:["€",""]}),cd=Tr({decimal:".",thousands:",",grouping:[3],currency:["","円"]}),fd=Tr({decimal:".",thousands:",",grouping:[3],currency:["₩",""]}),hd=Tr({decimal:",",thousands:".",grouping:[3],currency:[""," ден."]}),ld=Tr({decimal:",",thousands:".",grouping:[3],currency:["€ ",""]}),dd=Tr({decimal:",",thousands:".",grouping:[3],currency:["","zł"]}),gd=Tr({decimal:",",thousands:".",grouping:[3],currency:["R$",""]}),pd=Tr({decimal:",",thousands:" ",grouping:[3],currency:[""," руб."]}),md=Tr({decimal:",",thousands:" ",grouping:[3],currency:["","SEK"]}),_d=Tr({decimal:".",thousands:",",grouping:[3],currency:["¥",""]}),yd=Vl.format,bd=Vl.formatPrefix,vd={"-":"",_:" ",0:"0"},Md=/^\s*\d+/,xd=/^%/,wd=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,kd=Er({dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Td=Er({dateTime:"%A, %e de %B de %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],shortDays:["dg.","dl.","dt.","dc.","dj.","dv.","ds."],months:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],shortMonths:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."]}),Nd=Er({dateTime:"%A, der %e. %B %Y, %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]}),Sd=Er({dateTime:"%A, der %e. %B %Y, %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]}),Ad=Er({dateTime:"%a %b %e %X %Y",date:"%Y-%m-%d",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Cd=Er({dateTime:"%a %e %b %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Dd=Er({dateTime:"%A, %e de %B de %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],shortDays:["dom","lun","mar","mié","jue","vie","sáb"],months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],shortMonths:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"]}),Pd=Er({dateTime:"%A, %-d. %Bta %Y klo %X",date:"%-d.%-m.%Y",time:"%H:%M:%S",periods:["a.m.","p.m."],days:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],shortDays:["Su","Ma","Ti","Ke","To","Pe","La"],months:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],shortMonths:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"]}),Ed=Er({dateTime:"%a %e %b %Y %X",date:"%Y-%m-%d",time:"%H:%M:%S",periods:["",""],days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim","lun","mar","mer","jeu","ven","sam"],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortMonths:["jan","fév","mar","avr","mai","jui","jul","aoû","sep","oct","nov","déc"]}),Fd=Er({dateTime:"%A, le %e %B %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortMonths:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."]}),Ld=Er({dateTime:"%A, %e ב%B %Y %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],shortDays:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],months:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],shortMonths:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"]}),qd=Er({dateTime:"%Y. %B %-e., %A %X",date:"%Y. %m. %d.",time:"%H:%M:%S",periods:["de.","du."],days:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],shortDays:["V","H","K","Sze","Cs","P","Szo"],months:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],shortMonths:["jan.","feb.","már.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."]}),Ud=Er({dateTime:"%A %e %B %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],shortDays:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],shortMonths:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"]}),Od=Er({dateTime:"%Y %b %e %a %X",date:"%Y/%m/%d",time:"%H:%M:%S",periods:["AM","PM"],days:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],shortDays:["日","月","火","水","木","金","土"],months:["睦月","如月","弥生","卯月","皐月","水無月","文月","葉月","長月","神無月","霜月","師走"],shortMonths:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}),Hd=Er({dateTime:"%Y/%m/%d %a %X",date:"%Y/%m/%d",time:"%H:%M:%S",periods:["오전","오후"],days:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],shortDays:["일","월","화","수","목","금","토"],months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],shortMonths:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]}),jd=Er({dateTime:"%A, %e %B %Y г. %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["недела","понеделник","вторник","среда","четврток","петок","сабота"],shortDays:["нед","пон","вто","сре","чет","пет","саб"],months:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"],shortMonths:["јан","фев","мар","апр","мај","јун","јул","авг","сеп","окт","ное","дек"]}),Rd=Er({dateTime:"%a %e %B %Y %T",date:"%d-%m-%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],shortDays:["zo","ma","di","wo","do","vr","za"],months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortMonths:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"]}),zd=Er({dateTime:"%A, %e %B %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],shortDays:["Niedz.","Pon.","Wt.","Śr.","Czw.","Pt.","Sob."],months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],shortMonths:["Stycz.","Luty","Marz.","Kwie.","Maj","Czerw.","Lipc.","Sierp.","Wrz.","Paźdz.","Listop.","Grudz."]}),Yd=Er({dateTime:"%A, %e de %B de %Y. %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]}),Id=Er({dateTime:"%A, %e %B %Y г. %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],shortDays:["вс","пн","вт","ср","чт","пт","сб"],months:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],shortMonths:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"]}),Jd=Er({dateTime:"%A den %d %B %Y %X",date:"%Y-%m-%d",time:"%H:%M:%S",periods:["fm","em"],days:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],shortDays:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],shortMonths:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]}),Bd=Er({dateTime:"%a %b %e %X %Y",date:"%Y/%-m/%-d",time:"%H:%M:%S",periods:["上午","下午"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}),Xd="%Y-%m-%dT%H:%M:%S.%LZ",Wd=Date.prototype.toISOString?Ni:kd.utcFormat(Xd),$d=+new Date("2000-01-01T00:00:00.000Z")?Si:kd.utcParse(Xd),Vd=kd.format,Zd=kd.parse,Gd=kd.utcFormat,Kd=kd.utcParse,Qd=Array.prototype,tg=Qd.map,ng=Qd.slice,eg={name:"implicit"},rg=[0,1],ig=yd(".0e"),ag=yd(","),og=1e3,ug=60*og,sg=60*ug,cg=24*sg,fg=7*cg,hg=30*cg,lg=365*cg,dg=e(function(t){return t[2]}).right,gg=.7,pg=1/gg,mg=/^#([0-9a-f]{3})$/,_g=/^#([0-9a-f]{6})$/,yg=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,bg=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,vg=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Mg={
aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};pa.prototype=ga.prototype={displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}};var xg=_a.prototype=ya.prototype=new ga;xg.brighter=function(t){return t=null==t?pg:Math.pow(pg,t),new ya(this.r*t,this.g*t,this.b*t)},xg.darker=function(t){return t=null==t?gg:Math.pow(gg,t),new ya(this.r*t,this.g*t,this.b*t)},xg.rgb=function(){return this},xg.displayable=function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255},xg.toString=function(){var t=Math.round(this.r),n=Math.round(this.g),e=Math.round(this.b);return"#"+(isNaN(t)||0>=t?"00":16>t?"0"+t.toString(16):t>=255?"ff":t.toString(16))+(isNaN(n)||0>=n?"00":16>n?"0"+n.toString(16):n>=255?"ff":n.toString(16))+(isNaN(e)||0>=e?"00":16>e?"0"+e.toString(16):e>=255?"ff":e.toString(16))};var wg=ba.prototype=va.prototype=new ga;wg.brighter=function(t){return t=null==t?pg:Math.pow(pg,t),new va(this.h,this.s,this.l*t)},wg.darker=function(t){return t=null==t?gg:Math.pow(gg,t),new va(this.h,this.s,this.l*t)},wg.rgb=function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(.5>e?e:1-e)*n,i=2*e-r;return new ya(Ma(t>=240?t-240:t+120,i,r),Ma(t,i,r),Ma(120>t?t+240:t-120,i,r))},wg.displayable=function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1};var kg=Math.PI/180,Tg=180/Math.PI,Ng=18,Sg=.95047,Ag=1,Cg=1.08883,Dg=4/29,Pg=6/29,Eg=3*Pg*Pg,Fg=Pg*Pg*Pg,Lg=xa.prototype=wa.prototype=new ga;Lg.brighter=function(t){return new wa(this.l+Ng*(null==t?1:t),this.a,this.b)},Lg.darker=function(t){return new wa(this.l-Ng*(null==t?1:t),this.a,this.b)},Lg.rgb=function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=Ag*Ta(t),n=Sg*Ta(n),e=Cg*Ta(e),new ya(Na(3.2404542*n-1.5371385*t-.4985314*e),Na(-.969266*n+1.8760108*t+.041556*e),Na(.0556434*n-.2040259*t+1.0572252*e))};var qg=Aa.prototype=Ca.prototype=new ga;qg.brighter=function(t){return new Ca(this.h,this.c,this.l+Ng*(null==t?1:t))},qg.darker=function(t){return new Ca(this.h,this.c,this.l-Ng*(null==t?1:t))},qg.rgb=function(){return xa(this).rgb()};var Ug=-.14861,Og=1.78277,Hg=-.29227,jg=-.90649,Rg=1.97294,zg=Rg*jg,Yg=Rg*Og,Ig=Og*Hg-jg*Ug,Jg=Da.prototype=Pa.prototype=new ga;Jg.brighter=function(t){return t=null==t?pg:Math.pow(pg,t),new Pa(this.h,this.s,this.l*t)},Jg.darker=function(t){return t=null==t?gg:Math.pow(gg,t),new Pa(this.h,this.s,this.l*t)},Jg.rgb=function(){var t=isNaN(this.h)?0:(this.h+120)*kg,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new ya(255*(n+e*(Ug*r+Og*i)),255*(n+e*(Hg*r+jg*i)),255*(n+e*(Rg*r)))};var Bg=Da(-100,.75,.35),Xg=Da(80,1.5,.8),Wg=Da(260,.75,.35),$g=Da(),Vg=wh(Bg,Xg),Zg=wh(Wg,Xg),Gg=ca("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"),Kg=ca("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"),Qg=ca("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"),tp=ca("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"),np={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ep=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var rp=document.documentElement;if(!rp.matches){var ip=rp.webkitMatchesSelector||rp.msMatchesSelector||rp.mozMatchesSelector||rp.oMatchesSelector;ep=function(t){return function(){return ip.call(this,t)}}}}var ap=ep,op=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,up={};if(t.event=null,"undefined"!=typeof document){var sp=document.documentElement;"onmouseenter"in sp||(up={mouseenter:"mouseover",mouseleave:"mouseout"})}var cp="$";go.prototype={appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}},Jo.prototype={add:function(t){var n=this._names.indexOf(t);0>n&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var fp=[null];vu.prototype=Mu.prototype={select:io,selectAll:oo,filter:uo,data:lo,enter:mo,exit:_o,order:yo,sort:bo,call:Mo,nodes:xo,node:wo,size:ko,empty:To,each:No,attr:Fo,style:Oo,property:zo,classed:Zo,text:tu,html:iu,raise:ou,lower:su,append:lu,remove:gu,datum:pu,on:to,dispatch:bu};var hp="undefined"!=typeof navigator&&/WebKit/.test(navigator.userAgent)?-1:0,lp=[null],dp=Mu.prototype;is.prototype=as.prototype={select:Vu,selectAll:Zu,filter:$u,call:dp.call,nodes:dp.nodes,node:dp.node,size:dp.size,empty:dp.empty,each:dp.each,attr:qu,style:ns,tween:rs,delay:zu,duration:Ju,ease:Wu};var gp=0;Mu.prototype.interrupt=Au,Mu.prototype.transition=us;var pp=Array.prototype.slice,mp={},_p={},yp={},bp={};xs.prototype={insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=Ns(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(ks(this,e),t=e,e=t.U),e.C=!1,r.C=!0,Ts(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(Ts(this,e),t=e,e=t.U),e.C=!1,r.C=!0,ks(this,r))),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,a=t.L,o=t.R;if(e=a?o?Ns(o):a:o,i?i.L===t?i.L=e:i.R=e:this._=e,a&&o?(r=e.C,e.C=t.C,e.L=a,a.U=e,e!==o?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=o,o.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===i.L){if(n=i.R,n.C&&(n.C=!1,i.C=!0,ks(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,Ts(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,ks(this,i),t=this._;break}}else if(n=i.L,n.C&&(n.C=!1,i.C=!0,Ts(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,ks(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,Ts(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var vp,Mp,xp,wp,kp,Tp=[],Np=[],Sp=1e-6,Ap=1e-12;Gs.prototype={polygons:function(){var t=this.cells,n=this.cellEdges,e=this.extent,r=e[0][0],i=e[0][1],a=e[1][0],o=e[1][1],u=new Array(t.length);return t.forEach(function(t,e){var s,c=t.site,f=t.halfedges;if(f.length)s=f.map(function(e){return qs(t,n[e])});else{if(!(c[0]>=r&&c[0]<=a&&c[1]>=i&&c[1]<=o))return;s=[[r,o],[a,o],[a,i],[r,i]]}u[e]=s,s.data=c.data}),u},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){for(var i,a=e.site,o=e.halfedges,u=-1,s=o.length,c=n[o[s-1]],f=c.left===a?c.right:c.left;++u<s;)i=f,c=n[o[u]],f=c.left===a?c.right:c.left,r<i.index&&r<f.index&&Vs(a,i,f)<0&&t.push([a.data,i.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})}},t.version=Qs,t.bisect=nc,t.bisectRight=nc,t.bisectLeft=ec,t.ascending=n,t.bisector=e,t.descending=i,t.deviation=u,t.extent=s,t.histogram=m,t.thresholdFreedmanDiaconis=y,t.thresholdScott=b,t.thresholdSturges=g,t.max=v,t.mean=M,t.median=x,t.merge=w,t.min=k,t.pairs=T,t.permute=N,t.quantile=_,t.range=h,t.scan=S,t.shuffle=A,t.sum=C,t.ticks=l,t.transpose=D,t.variance=o,t.zip=E,t.entries=J,t.keys=Y,t.values=I,t.map=L,t.set=z,t.nest=q,t.randomUniform=B,t.randomNormal=X,t.randomLogNormal=W,t.randomBates=V,t.randomIrwinHall=$,t.randomExponential=Z,t.easeLinearIn=sc,t.easeLinearOut=sc,t.easeLinearInOut=sc,t.easeQuadIn=cc,t.easeQuadOut=fc,t.easeQuadInOut=hc,t.easeCubicIn=lc,t.easeCubicOut=dc,t.easeCubicInOut=gc,t.easePolyIn=mc,t.easePolyOut=_c,t.easePolyInOut=yc,t.easeSinIn=Mc,t.easeSinOut=xc,t.easeSinInOut=wc,t.easeExpIn=kc,t.easeExpOut=Tc,t.easeExpInOut=Nc,t.easeCircleIn=Sc,t.easeCircleOut=Ac,t.easeCircleInOut=Cc,t.easeBounceIn=Rc,t.easeBounceOut=zc,t.easeBounceInOut=Yc,t.easeBackIn=Jc,t.easeBackOut=Bc,t.easeBackInOut=Xc,t.easeElasticIn=Zc,t.easeElasticOut=Gc,t.easeElasticInOut=Kc,t.polygonArea=K,t.polygonCentroid=Q,t.polygonHull=rt,t.polygonContains=it,t.polygonLength=at,t.path=ut,t.quadtree=gt,t.queue=_t,t.arc=St,t.area=Ft,t.line=Lt,t.pie=Ot,t.radialArea=Rt,t.radialLine=zt,t.symbol=Yt,t.symbols=Cf,t.symbolCircle=hf,t.symbolCross=lf,t.symbolDiamond=pf,t.symbolSquare=Mf,t.symbolStar=vf,t.symbolTriangle=wf,t.symbolWye=Af,t.curveBasisClosed=$t,t.curveBasisOpen=Zt,t.curveBasis=Xt,t.curveBundle=Kt,t.curveCardinalClosed=rn,t.curveCardinalOpen=on,t.curveCardinal=nn,t.curveCatmullRomClosed=hn,t.curveCatmullRomOpen=dn,t.curveCatmullRom=cn,t.curveLinearClosed=pn,t.curveLinear=Dt,t.curveMonotoneX=wn,t.curveMonotoneY=kn,t.curveNatural=Sn,t.curveStep=Cn,t.curveStepAfter=Pn,t.curveStepBefore=Dn,t.stack=qn,t.stackOffsetExpand=Un,t.stackOffsetNone=En,t.stackOffsetSilhouette=On,t.stackOffsetWiggle=Hn,t.stackOrderAscending=jn,t.stackOrderDescending=zn,t.stackOrderInsideOut=Yn,t.stackOrderNone=Fn,t.stackOrderReverse=In,t.color=Bn,t.rgb=Vn,t.hsl=Qn,t.lab=re,t.hcl=fe,t.cubehelix=de,t.interpolate=Se,t.interpolators=ph,t.interpolateArray=Me,t.interpolateNumber=xe,t.interpolateObject=we,t.interpolateRound=Ae,t.interpolateString=Ne,t.interpolateTransform=He,t.interpolateZoom=Ye,t.interpolateRgb=lh,t.interpolateHsl=Ie,t.interpolateHslLong=Je,t.interpolateLab=Be,t.interpolateHcl=Xe,t.interpolateHclLong=We,t.interpolateCubehelix=xh,t.interpolateCubehelixLong=wh,t.dispatch=$e,t.dsv=Ze,t.csv=Nh,t.tsv=Sh,t.request=nr,t.requestHtml=Ah,t.requestJson=Ch,t.requestText=Dh,t.requestXml=Ph,t.requestCsv=Eh,t.requestTsv=Fh,t.timer=sr,t.timerOnce=cr,t.timerFlush=fr,t.timeInterval=dr,t.timeMillisecond=zh,t.timeMilliseconds=pl,t.timeSecond=Ih,t.timeSeconds=ml,t.timeMinute=Jh,t.timeMinutes=_l,t.timeHour=Bh,t.timeHours=yl,t.timeDay=Xh,t.timeDays=bl,t.timeWeek=Wh,t.timeWeeks=Sl,t.timeSunday=Wh,t.timeSundays=vl,t.timeMonday=$h,t.timeMondays=Ml,t.timeTuesday=Vh,t.timeTuesdays=xl,t.timeWednesday=Zh,t.timeWednesdays=wl,t.timeThursday=Gh,t.timeThursdays=kl,t.timeFriday=Kh,t.timeFridays=Tl,t.timeSaturday=Qh,t.timeSaturdays=Nl,t.timeMonth=tl,t.timeMonths=Al,t.timeYear=nl,t.timeYears=Cl,t.utcMillisecond=Dl,t.utcMilliseconds=Pl,t.utcSecond=el,t.utcSeconds=El,t.utcMinute=rl,t.utcMinutes=Fl,t.utcHour=il,t.utcHours=Ll,t.utcDay=al,t.utcDays=ql,t.utcWeek=ol,t.utcWeeks=Il,t.utcSunday=ol,t.utcSundays=Ul,t.utcMonday=ul,t.utcMondays=Ol,t.utcTuesday=sl,t.utcTuesdays=Hl,t.utcWednesday=cl,t.utcWednesdays=jl,t.utcThursday=fl,t.utcThursdays=Rl,t.utcFriday=hl,t.utcFridays=zl,t.utcSaturday=ll,t.utcSaturdays=Yl,t.utcMonth=dl,t.utcMonths=Jl,t.utcYear=gl,t.utcYears=Bl,t.format=yd,t.formatPrefix=bd,t.formatLocale=Tr,t.formatCaEs=Zl,t.formatCsCz=Gl,t.formatDeCh=Kl,t.formatDeDe=Ql,t.formatEnCa=td,t.formatEnGb=nd,t.formatEnUs=Vl,t.formatEsEs=ed,t.formatFiFi=rd,t.formatFrCa=id,t.formatFrFr=ad,t.formatHeIl=od,t.formatHuHu=ud,t.formatItIt=sd,t.formatJaJp=cd,t.formatKoKr=fd,t.formatMkMk=hd,t.formatNlNl=ld,t.formatPlPl=dd,t.formatPtBr=gd,t.formatRuRu=pd,t.formatSvSe=md,t.formatZhCn=_d,t.formatSpecifier=xr,t.precisionFixed=Nr,t.precisionPrefix=Sr,t.precisionRound=Ar,t.timeFormat=Vd,t.timeParse=Zd,t.utcFormat=Gd,t.utcParse=Kd,t.isoFormat=Wd,t.isoParse=$d,t.timeFormatLocale=Er,t.timeFormatCaEs=Td,t.timeFormatDeCh=Nd,t.timeFormatDeDe=Sd,t.timeFormatEnCa=Ad,t.timeFormatEnGb=Cd,t.timeFormatEnUs=kd,t.timeFormatEsEs=Dd,t.timeFormatFiFi=Pd,t.timeFormatFrCa=Ed,t.timeFormatFrFr=Fd,t.timeFormatHeIl=Ld,t.timeFormatHuHu=qd,t.timeFormatItIt=Ud,t.timeFormatJaJp=Od,t.timeFormatKoKr=Hd,t.timeFormatMkMk=jd,t.timeFormatNlNl=Rd,t.timeFormatPlPl=zd,t.timeFormatPtBr=Yd,t.timeFormatRuRu=Id,t.timeFormatSvSe=Jd,t.timeFormatZhCn=Bd,t.scaleBand=Ci,t.scalePoint=Pi,t.scaleIdentity=Ji,t.scaleLinear=Ii,t.scaleLog=Ki,t.scaleOrdinal=Ai,t.scaleImplicit=eg,t.scalePow=ta,t.scaleSqrt=na,t.scaleQuantile=ea,t.scaleQuantize=ra,t.scaleThreshold=ia,t.scaleTime=ua,t.scaleUtc=sa,t.scaleCategory10=fa,t.scaleCategory20b=ha,t.scaleCategory20c=la,t.scaleCategory20=da,t.scaleCubehelix=Ea,t.scaleRainbow=Oa,t.scaleWarm=qa,t.scaleCool=Ua,t.scaleViridis=ja,t.scaleMagma=Ra,t.scaleInferno=za,t.scalePlasma=Ya,t.mouse=ku,t.namespace=Ia,t.namespaces=np,t.select=xu,t.selectAll=Tu,t.selection=Mu,t.touch=Nu,t.touches=Su,t.transition=as,t.axisTop=ps,t.axisRight=ms,t.axisBottom=_s,t.axisLeft=ys,t.voronoi=Ks});

//Finance.js
//For more information, visit http://financejs.org
//Copyright 2014 - 2015 Essam Al Joubori, MIT license

// Instantiate a Finance class
var Finance = function() {};

// Present Value (PV)
Finance.prototype.PV = function (rate, cf1, numOfPeriod) {
  numOfPeriod = typeof numOfPeriod !== 'undefined' ? numOfPeriod : 1;
  var rate = rate/100, pv;
  pv = cf1 / Math.pow((1 + rate),numOfPeriod);
  return Math.round(pv * 100) / 100;
};

// Future Value (FV)
Finance.prototype.FV = function (rate, cf0, numOfPeriod) {
  var rate = rate/100, fv;
  fv = cf0 * Math.pow((1 + rate), numOfPeriod);
  return Math.round(fv * 100) / 100;
};

// Net Present Value (NPV)
Finance.prototype.NPV = function (rate) {
  var rate = rate/100, npv = arguments[1];
  for (var i = 2; i < arguments.length; i++) {
    npv +=(arguments[i] / Math.pow((1 + rate), i - 1));
  }
  return Math.round(npv * 100) / 100;
};

// seekZero seeks the zero point of the function fn(x), accurate to within x \pm 0.01. fn(x) must be decreasing with x.
function seekZero(fn) {
  var x = 1;
  while (fn(x) > 0) {
    x += 1;
  }
  while (fn(x) < 0) {
    x -= 0.01
  }
  return x + 0.01;
}

// Internal Rate of Return (IRR)
Finance.prototype.IRR = function(cfs) {
  var args = arguments;
  var numberOfTries = 1;
  // Cash flow values must contain at least one positive value and one negative value
  var positive, negative;
  Array.prototype.slice.call(args).forEach(function (value) {
    if (value > 0) positive = true;
    if (value < 0) negative = true;
  })
  if (!positive || !negative) throw new Error('IRR requires at least one positive value and one negative value');
  function npv(rate) {
    numberOfTries++;
    if (numberOfTries > 1000) {
      throw new Error('IRR can\'t find a result');
    }
    var rrate = (1 + rate/100);
    var npv = args[0];
    for (var i = 1; i < args.length; i++) {
      npv += (args[i] / Math.pow(rrate, i));
    }
    return npv;
  }
  return Math.round(seekZero(npv) * 100) / 100;
};

// Payback Period (PP)
Finance.prototype.PP = function(numOfPeriods, cfs) {
  // for even cash flows
  if (numOfPeriods === 0) {
    return Math.abs(arguments[1]) / arguments[2];
  }
  // for uneven cash flows
  var cumulativeCashFlow = arguments[1];
  var yearsCounter = 1;
  for (i = 2; i < arguments.length; i++) {
    cumulativeCashFlow += arguments[i];
    if (cumulativeCashFlow > 0) {
      yearsCounter += (cumulativeCashFlow - arguments[i]) / arguments[i];
      return yearsCounter;
    } else {
      yearsCounter++;
    }
  }
};

// Return on Investment (ROI)
Finance.prototype.ROI = function(cf0, earnings) {
  var roi = (earnings - Math.abs(cf0)) / Math.abs(cf0) * 100;
  return Math.round(roi * 100) / 100;
};

// Amortization
Finance.prototype.AM = function (principal, rate, period, yearOrMonth, payAtBeginning) {
  var numerator, denominator, am;
  var ratePerPeriod = rate / 12 / 100;

  // for inputs in years
  if (!yearOrMonth) {
    numerator = buildNumerator(period * 12);
    denominator = Math.pow((1 + ratePerPeriod), period * 12) - 1;

  // for inputs in months
  } else if (yearOrMonth === 1) {
    numerator = buildNumerator(period)
    denominator = Math.pow((1 + ratePerPeriod), period) - 1;

  } else {
    console.log('not defined');
  }
  am = principal * (numerator / denominator);
  return Math.round(am * 100) / 100;

  function buildNumerator(numInterestAccruals){
    if( payAtBeginning ){
      //if payments are made in the beginning of the period, then interest shouldn't be calculated for first period
      numInterestAccruals -= 1;
    }
    return ratePerPeriod * Math.pow((1 + ratePerPeriod), numInterestAccruals);
  }
};

// Profitability Index (PI)
Finance.prototype.PI = function(rate, cfs){
  var totalOfPVs = 0, PI;
  for (var i = 2; i < arguments.length; i++) {
    var discountFactor;
    // calculate discount factor
    discountFactor = 1 / Math.pow((1 + rate/100), (i - 1));
    totalOfPVs += arguments[i] * discountFactor;
  }
  PI = totalOfPVs/Math.abs(arguments[1]);
  return Math.round(PI * 100) / 100;
};

// Discount Factor (DF)
Finance.prototype.DF = function(rate, numOfPeriods) {
  var dfs = [], discountFactor;
  for (var i = 1; i < numOfPeriods; i++) {
    discountFactor = 1 / Math.pow((1 + rate/100), (i - 1));
    roundedDiscountFactor = Math.ceil(discountFactor * 1000)/1000;
    dfs.push(roundedDiscountFactor);
  }
  return dfs;
};

// Compound Interest (CI)
Finance.prototype.CI = function(rate, numOfCompoundings, principal, numOfPeriods) {
  var CI = principal * Math.pow((1 + ((rate/100)/ numOfCompoundings)), numOfCompoundings * numOfPeriods);
  return Math.round(CI * 100) / 100;
};

// Compound Annual Growth Rate (CAGR)
Finance.prototype.CAGR = function(beginningValue, endingValue, numOfPeriods) {
  var CAGR = Math.pow((endingValue / beginningValue), 1 / numOfPeriods) - 1;
  return Math.round(CAGR * 10000) / 100;
};

// Leverage Ratio (LR)
Finance.prototype.LR = function(totalLiabilities, totalDebts, totalIncome) {
  return (totalLiabilities  + totalDebts) / totalIncome;
};

// Rule of 72
Finance.prototype.R72 = function(rate) {
  return 72 / rate;
};

// Weighted Average Cost of Capital (WACC)
Finance.prototype.WACC = function(marketValueOfEquity, marketValueOfDebt, costOfEquity, costOfDebt, taxRate) {
  E = marketValueOfEquity;
  D = marketValueOfDebt;
  V =  marketValueOfEquity + marketValueOfDebt;
  Re = costOfEquity;
  Rd = costOfDebt;
  T = taxRate;

  var WACC = ((E / V) * Re/100) + (((D / V) * Rd/100) * (1 - T/100));
  return Math.round(WACC * 1000) / 10;
};

// PMT calculates the payment for a loan based on constant payments and a constant interest rate
Finance.prototype.PMT = function(fractionalRate, numOfPayments, principal) {
  return -principal * fractionalRate/(1-Math.pow(1+fractionalRate,-numOfPayments))
};

// IAR calculates the Inflation-adjusted return
Finance.prototype.IAR = function(investmentReturn, inflationRate){
  return 100 * (((1 + investmentReturn) / (1 + inflationRate)) - 1);
}

// XIRR - IRR for irregular intervals
Finance.prototype.XIRR = function(cfs, dts, guess) {
if (cfs.length != dts.length) throw new Error('Number of cash flows and dates should match');

  var positive, negative;
  Array.prototype.slice.call(cfs).forEach(function (value) {
    if (value > 0) positive = true;
    if (value < 0) negative = true;
  });

  if (!positive || !negative) throw new Error('XIRR requires at least one positive value and one negative value');
  

  guess = !!guess ? guess : 0;

  var limit = 100; //loop limit
  var guess_last;
  var durs = [];

  durs.push(0);

  //Create Array of durations from First date
  for(var i = 1; i < dts.length; i++) {
    durs.push(durYear(dts[0], dts[i]));
  }
  
  do {
    guess_last = guess;
    guess = guess_last - sumEq(cfs, durs, guess_last);
    limit--;
    
  }while(guess_last.toFixed(5) != guess.toFixed(5) && limit > 0);

  var xirr = guess_last.toFixed(5) != guess.toFixed(5) ? null : guess*100;

  return Math.round(xirr * 100) / 100;
};

//Returns Sum of f(x)/f'(x)
function sumEq(cfs, durs, guess) {
  var sum_fx = 0;
  var sum_fdx = 0;
  for (var i = 0; i < cfs.length; i++) {
    sum_fx = sum_fx + (cfs[i] / Math.pow(1 + guess, durs[i]));
  }
  for ( i = 0; i < cfs.length; i++) {
    sum_fdx = sum_fdx + (-cfs[i] * durs[i] * Math.pow(1 + guess, -1 - durs[i]));
  }
  return sum_fx / sum_fdx;
}

//Returns duration in years between two dates
function durYear(first, last) {
  return (Math.abs(last.getTime() - first.getTime()) / (1000 * 3600 * 24 * 365));
}

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
      module.exports = Finance;
      module.exports.Finance = Finance;
  }
}

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

//
//  Tangle.js
//  Tangle 0.1.0
//
//  Created by Bret Victor on 5/2/10.
//  (c) 2011 Bret Victor.  MIT open-source license.
//
//  ------ model ------
//
//  var tangle = new Tangle(rootElement, model);
//  tangle.setModel(model);
//
//  ------ variables ------
//
//  var value = tangle.getValue(variableName);
//  tangle.setValue(variableName, value);
//  tangle.setValues({ variableName:value, variableName:value });
//
//  ------ UI components ------
//
//  Tangle.classes.myClass = {
//     initialize: function (element, options, tangle, variable) { ... },
//     update: function (element, value) { ... }
//  };
//  Tangle.formats.myFormat = function (value) { return "..."; };
//

var Tangle = this.Tangle = function (rootElement, modelClass) {

    var tangle = this;
    tangle.element = rootElement;
    tangle.setModel = setModel;
    tangle.getValue = getValue;
    tangle.setValue = setValue;
    tangle.setValues = setValues;

    var _model;
    var _nextSetterID = 0;
    var _setterInfosByVariableName = {};   //  { varName: { setterID:7, setter:function (v) { } }, ... }
    var _varargConstructorsByArgCount = [];


    //----------------------------------------------------------
    //
    // construct

    initializeElements();
    setModel(modelClass);
    return tangle;


    //----------------------------------------------------------
    //
    // elements

    function initializeElements() {
        var elements = rootElement.getElementsByTagName("*");
        var interestingElements = [];
        
        // build a list of elements with class or data-var attributes
        
        for (var i = 0, length = elements.length; i < length; i++) {
            var element = elements[i];
            if (element.getAttribute("class") || element.getAttribute("data-var")) {
                interestingElements.push(element);
            }
        }

        // initialize interesting elements in this list.  (Can't traverse "elements"
        // directly, because elements is "live", and views that change the node tree
        // will change elements mid-traversal.)
        
        for (var i = 0, length = interestingElements.length; i < length; i++) {
            var element = interestingElements[i];
            
            var varNames = null;
            var varAttribute = element.getAttribute("data-var");
            if (varAttribute) { varNames = varAttribute.split(" "); }

            var views = null;
            var classAttribute = element.getAttribute("class");
            if (classAttribute) {
                var classNames = classAttribute.split(" ");
                views = getViewsForElement(element, classNames, varNames);
            }
            
            if (!varNames) { continue; }
            
            var didAddSetter = false;
            if (views) {
                for (var j = 0; j < views.length; j++) {
                    if (!views[j].update) { continue; }
                    addViewSettersForElement(element, varNames, views[j]);
                    didAddSetter = true;
                }
            }
            
            if (!didAddSetter) {
                var formatAttribute = element.getAttribute("data-format");
                var formatter = getFormatterForFormat(formatAttribute, varNames);
                addFormatSettersForElement(element, varNames, formatter);
            }
        }
    }
            
    function getViewsForElement(element, classNames, varNames) {   // initialize classes
        var views = null;
        
        for (var i = 0, length = classNames.length; i < length; i++) {
            var clas = Tangle.classes[classNames[i]];
            if (!clas) { continue; }
            
            var options = getOptionsForElement(element);
            var args = [ element, options, tangle ];
            if (varNames) { args = args.concat(varNames); }
            
            var view = constructClass(clas, args);
            
            if (!views) { views = []; }
            views.push(view);
        }
        
        return views;
    }
    
    function getOptionsForElement(element) {   // might use dataset someday
        var options = {};

        var attributes = element.attributes;
        var regexp = /^data-[\w\-]+$/;

        for (var i = 0, length = attributes.length; i < length; i++) {
            var attr = attributes[i];
            var attrName = attr.name;
            if (!attrName || !regexp.test(attrName)) { continue; }
            
            options[attrName.substr(5)] = attr.value;
        }
         
        return options;   
    }
    
    function constructClass(clas, args) {
        if (typeof clas !== "function") {  // class is prototype object
            var View = function () { };
            View.prototype = clas;
            var view = new View();
            if (view.initialize) { view.initialize.apply(view,args); }
            return view;
        }
        else {  // class is constructor function, which we need to "new" with varargs (but no built-in way to do so)
            var ctor = _varargConstructorsByArgCount[args.length];
            if (!ctor) {
                var ctorArgs = [];
                for (var i = 0; i < args.length; i++) { ctorArgs.push("args[" + i + "]"); }
                var ctorString = "(function (clas,args) { return new clas(" + ctorArgs.join(",") + "); })";
                ctor = eval(ctorString);   // nasty
                _varargConstructorsByArgCount[args.length] = ctor;   // but cached
            }
            return ctor(clas,args);
        }
    }
    

    //----------------------------------------------------------
    //
    // formatters

    function getFormatterForFormat(formatAttribute, varNames) {
        if (!formatAttribute) { formatAttribute = "default"; }

        var formatter = getFormatterForCustomFormat(formatAttribute, varNames);
        if (!formatter) { formatter = getFormatterForSprintfFormat(formatAttribute, varNames); }
        if (!formatter) { log("Tangle: unknown format: " + formatAttribute); formatter = getFormatterForFormat(null,varNames); }

        return formatter;
    }
        
    function getFormatterForCustomFormat(formatAttribute, varNames) {
        var components = formatAttribute.split(" ");
        var formatName = components[0];
        if (!formatName) { return null; }
        
        var format = Tangle.formats[formatName];
        if (!format) { return null; }
        
        var formatter;
        var params = components.slice(1);
        
        if (varNames.length <= 1 && params.length === 0) {  // one variable, no params
            formatter = format;
        }
        else if (varNames.length <= 1) {  // one variable with params
            formatter = function (value) {
                var args = [ value ].concat(params);
                return format.apply(null, args);
            };
        }
        else {  // multiple variables
            formatter = function () {
                var values = getValuesForVariables(varNames);
                var args = values.concat(params);
                return format.apply(null, args);
            };
        }
        return formatter;
    }
    
    function getFormatterForSprintfFormat(formatAttribute, varNames) {
        if (!sprintf || !formatAttribute.test(/\%/)) { return null; }

        var formatter;
        if (varNames.length <= 1) {  // one variable
            formatter = function (value) {
                return sprintf(formatAttribute, value);
            };
        }
        else {
            formatter = function (value) {  // multiple variables
                var values = getValuesForVariables(varNames);
                var args = [ formatAttribute ].concat(values);
                return sprintf.apply(null, args);
            };
        }
        return formatter;
    }

    
    //----------------------------------------------------------
    //
    // setters
    
    function addViewSettersForElement(element, varNames, view) {   // element has a class with an update method
        var setter;
        if (varNames.length <= 1) {
            setter = function (value) { view.update(element, value); };
        }
        else {
            setter = function () {
                var values = getValuesForVariables(varNames);
                var args = [ element ].concat(values);
                view.update.apply(view,args);
            };
        }

        addSetterForVariables(setter, varNames);
    }

    function addFormatSettersForElement(element, varNames, formatter) {  // tangle is injecting a formatted value itself
        var span = null;
        var setter = function (value) {
            if (!span) { 
                span = document.createElement("span");
                element.insertBefore(span, element.firstChild);
            }
            span.innerHTML = formatter(value);
        };

        addSetterForVariables(setter, varNames);
    }
    
    function addSetterForVariables(setter, varNames) {
        var setterInfo = { setterID:_nextSetterID, setter:setter };
        _nextSetterID++;

        for (var i = 0; i < varNames.length; i++) {
            var varName = varNames[i];
            if (!_setterInfosByVariableName[varName]) { _setterInfosByVariableName[varName] = []; }
            _setterInfosByVariableName[varName].push(setterInfo);
        }
    }

    function applySettersForVariables(varNames) {
        var appliedSetterIDs = {};  // remember setterIDs that we've applied, so we don't call setters twice
    
        for (var i = 0, ilength = varNames.length; i < ilength; i++) {
            var varName = varNames[i];
            var setterInfos = _setterInfosByVariableName[varName];
            if (!setterInfos) { continue; }
            
            var value = _model[varName];
            
            for (var j = 0, jlength = setterInfos.length; j < jlength; j++) {
                var setterInfo = setterInfos[j];
                if (setterInfo.setterID in appliedSetterIDs) { continue; }  // if we've already applied this setter, move on
                appliedSetterIDs[setterInfo.setterID] = true;
                
                setterInfo.setter(value);
            }
        }
    }
    

    //----------------------------------------------------------
    //
    // variables

    function getValue(varName) {
        var value = _model[varName];
        if (value === undefined) { log("Tangle: unknown variable: " + varName);  return 0; }
        return value;
    }

    function setValue(varName, value) {
        var obj = {};
        obj[varName] = value;
        setValues(obj);
    }

    function setValues(obj) {
        var changedVarNames = [];

        for (var varName in obj) {
            var value = obj[varName];
            var oldValue = _model[varName];
            if (oldValue === undefined) { log("Tangle: setting unknown variable: " + varName);  continue; }
            if (oldValue === value) { continue; }  // don't update if new value is the same

            _model[varName] = value;
            changedVarNames.push(varName);
        }
        
        if (changedVarNames.length) {
            applySettersForVariables(changedVarNames);
            updateModel();
        }
    }
    
    function getValuesForVariables(varNames) {
        var values = [];
        for (var i = 0, length = varNames.length; i < length; i++) {
            values.push(getValue(varNames[i]));
        }
        return values;
    }

                    
    //----------------------------------------------------------
    //
    // model

    function setModel(modelClass) {
        var ModelClass = function () { };
        ModelClass.prototype = modelClass;
        _model = new ModelClass;

        updateModel(true);  // initialize and update
    }
    
    function updateModel(shouldInitialize) {
        var ShadowModel = function () {};  // make a shadow object, so we can see exactly which properties changed
        ShadowModel.prototype = _model;
        var shadowModel = new ShadowModel;
        
        if (shouldInitialize) { shadowModel.initialize(); }
        shadowModel.update();
        
        var changedVarNames = [];
        for (var varName in shadowModel) {
            if (!shadowModel.hasOwnProperty(varName)) { continue; }
            if (_model[varName] === shadowModel[varName]) { continue; }
            
            _model[varName] = shadowModel[varName];
            changedVarNames.push(varName);
        }
        
        applySettersForVariables(changedVarNames);
    }


    //----------------------------------------------------------
    //
    // debug

    function log (msg) {
        if (window.console) { window.console.log(msg); }
    }

};  // end of Tangle


//----------------------------------------------------------
//
// components

Tangle.classes = {};
Tangle.formats = {};

Tangle.formats["default"] = function (value) { return "" + value; };


/*
---
MooTools: the javascript framework

web build:
 - http://mootools.net/core/5b88354153bcb3b6ae280d7f56d4147a

packager build:
 - packager build Core/Core Core/Array Core/Event Core/Class Core/Element Core/Element.Event Core/Element.Dimensions Core/Fx Core/Fx.CSS Core/Fx.Tween Core/Fx.Morph Core/Fx.Transitions Core/DOMReady

copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
(function(){this.MooTools={version:"1.3.2",build:"c9f1ff10e9e7facb65e9481049ed1b450959d587"};var o=this.typeOf=function(i){if(i==null){return"null";}if(i.$family){return i.$family();
}if(i.nodeName){if(i.nodeType==1){return"element";}if(i.nodeType==3){return(/\S/).test(i.nodeValue)?"textnode":"whitespace";}}else{if(typeof i.length=="number"){if(i.callee){return"arguments";
}if("item" in i){return"collection";}}}return typeof i;};var j=this.instanceOf=function(t,i){if(t==null){return false;}var s=t.$constructor||t.constructor;
while(s){if(s===i){return true;}s=s.parent;}return t instanceof i;};var f=this.Function;var p=true;for(var k in {toString:1}){p=null;}if(p){p=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];
}f.prototype.overloadSetter=function(s){var i=this;return function(u,t){if(u==null){return this;}if(s||typeof u!="string"){for(var v in u){i.call(this,v,u[v]);
}if(p){for(var w=p.length;w--;){v=p[w];if(u.hasOwnProperty(v)){i.call(this,v,u[v]);}}}}else{i.call(this,u,t);}return this;};};f.prototype.overloadGetter=function(s){var i=this;
return function(u){var v,t;if(s||typeof u!="string"){v=u;}else{if(arguments.length>1){v=arguments;}}if(v){t={};for(var w=0;w<v.length;w++){t[v[w]]=i.call(this,v[w]);
}}else{t=i.call(this,u);}return t;};};f.prototype.extend=function(i,s){this[i]=s;}.overloadSetter();f.prototype.implement=function(i,s){this.prototype[i]=s;
}.overloadSetter();var n=Array.prototype.slice;f.from=function(i){return(o(i)=="function")?i:function(){return i;};};Array.from=function(i){if(i==null){return[];
}return(a.isEnumerable(i)&&typeof i!="string")?(o(i)=="array")?i:n.call(i):[i];};Number.from=function(s){var i=parseFloat(s);return isFinite(i)?i:null;
};String.from=function(i){return i+"";};f.implement({hide:function(){this.$hidden=true;return this;},protect:function(){this.$protected=true;return this;
}});var a=this.Type=function(u,t){if(u){var s=u.toLowerCase();var i=function(v){return(o(v)==s);};a["is"+u]=i;if(t!=null){t.prototype.$family=(function(){return s;
}).hide();}}if(t==null){return null;}t.extend(this);t.$constructor=a;t.prototype.$constructor=t;return t;};var e=Object.prototype.toString;a.isEnumerable=function(i){return(i!=null&&typeof i.length=="number"&&e.call(i)!="[object Function]");
};var q={};var r=function(i){var s=o(i.prototype);return q[s]||(q[s]=[]);};var b=function(t,x){if(x&&x.$hidden){return;}var s=r(this);for(var u=0;u<s.length;
u++){var w=s[u];if(o(w)=="type"){b.call(w,t,x);}else{w.call(this,t,x);}}var v=this.prototype[t];if(v==null||!v.$protected){this.prototype[t]=x;}if(this[t]==null&&o(x)=="function"){m.call(this,t,function(i){return x.apply(i,n.call(arguments,1));
});}};var m=function(i,t){if(t&&t.$hidden){return;}var s=this[i];if(s==null||!s.$protected){this[i]=t;}};a.implement({implement:b.overloadSetter(),extend:m.overloadSetter(),alias:function(i,s){b.call(this,i,this.prototype[s]);
}.overloadSetter(),mirror:function(i){r(this).push(i);return this;}});new a("Type",a);var d=function(s,w,u){var t=(w!=Object),A=w.prototype;if(t){w=new a(s,w);
}for(var x=0,v=u.length;x<v;x++){var B=u[x],z=w[B],y=A[B];if(z){z.protect();}if(t&&y){delete A[B];A[B]=y.protect();}}if(t){w.implement(A);}return d;};d("String",String,["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","quote","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase"])("Array",Array,["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice","indexOf","lastIndexOf","filter","forEach","every","map","some","reduce","reduceRight"])("Number",Number,["toExponential","toFixed","toLocaleString","toPrecision"])("Function",f,["apply","call","bind"])("RegExp",RegExp,["exec","test"])("Object",Object,["create","defineProperty","defineProperties","keys","getPrototypeOf","getOwnPropertyDescriptor","getOwnPropertyNames","preventExtensions","isExtensible","seal","isSealed","freeze","isFrozen"])("Date",Date,["now"]);
Object.extend=m.overloadSetter();Date.extend("now",function(){return +(new Date);});new a("Boolean",Boolean);Number.prototype.$family=function(){return isFinite(this)?"number":"null";
}.hide();Number.extend("random",function(s,i){return Math.floor(Math.random()*(i-s+1)+s);});var g=Object.prototype.hasOwnProperty;Object.extend("forEach",function(i,t,u){for(var s in i){if(g.call(i,s)){t.call(u,i[s],s,i);
}}});Object.each=Object.forEach;Array.implement({forEach:function(u,v){for(var t=0,s=this.length;t<s;t++){if(t in this){u.call(v,this[t],t,this);}}},each:function(i,s){Array.forEach(this,i,s);
return this;}});var l=function(i){switch(o(i)){case"array":return i.clone();case"object":return Object.clone(i);default:return i;}};Array.implement("clone",function(){var s=this.length,t=new Array(s);
while(s--){t[s]=l(this[s]);}return t;});var h=function(s,i,t){switch(o(t)){case"object":if(o(s[i])=="object"){Object.merge(s[i],t);}else{s[i]=Object.clone(t);
}break;case"array":s[i]=t.clone();break;default:s[i]=t;}return s;};Object.extend({merge:function(z,u,t){if(o(u)=="string"){return h(z,u,t);}for(var y=1,s=arguments.length;
y<s;y++){var w=arguments[y];for(var x in w){h(z,x,w[x]);}}return z;},clone:function(i){var t={};for(var s in i){t[s]=l(i[s]);}return t;},append:function(w){for(var v=1,t=arguments.length;
v<t;v++){var s=arguments[v]||{};for(var u in s){w[u]=s[u];}}return w;}});["Object","WhiteSpace","TextNode","Collection","Arguments"].each(function(i){new a(i);
});var c=Date.now();String.extend("uniqueID",function(){return(c++).toString(36);});})();Array.implement({every:function(c,d){for(var b=0,a=this.length;
b<a;b++){if((b in this)&&!c.call(d,this[b],b,this)){return false;}}return true;},filter:function(d,e){var c=[];for(var b=0,a=this.length;b<a;b++){if((b in this)&&d.call(e,this[b],b,this)){c.push(this[b]);
}}return c;},indexOf:function(c,d){var a=this.length;for(var b=(d<0)?Math.max(0,a+d):d||0;b<a;b++){if(this[b]===c){return b;}}return -1;},map:function(d,e){var c=[];
for(var b=0,a=this.length;b<a;b++){if(b in this){c[b]=d.call(e,this[b],b,this);}}return c;},some:function(c,d){for(var b=0,a=this.length;b<a;b++){if((b in this)&&c.call(d,this[b],b,this)){return true;
}}return false;},clean:function(){return this.filter(function(a){return a!=null;});},invoke:function(a){var b=Array.slice(arguments,1);return this.map(function(c){return c[a].apply(c,b);
});},associate:function(c){var d={},b=Math.min(this.length,c.length);for(var a=0;a<b;a++){d[c[a]]=this[a];}return d;},link:function(c){var a={};for(var e=0,b=this.length;
e<b;e++){for(var d in c){if(c[d](this[e])){a[d]=this[e];delete c[d];break;}}}return a;},contains:function(a,b){return this.indexOf(a,b)!=-1;},append:function(a){this.push.apply(this,a);
return this;},getLast:function(){return(this.length)?this[this.length-1]:null;},getRandom:function(){return(this.length)?this[Number.random(0,this.length-1)]:null;
},include:function(a){if(!this.contains(a)){this.push(a);}return this;},combine:function(c){for(var b=0,a=c.length;b<a;b++){this.include(c[b]);}return this;
},erase:function(b){for(var a=this.length;a--;){if(this[a]===b){this.splice(a,1);}}return this;},empty:function(){this.length=0;return this;},flatten:function(){var d=[];
for(var b=0,a=this.length;b<a;b++){var c=typeOf(this[b]);if(c=="null"){continue;}d=d.concat((c=="array"||c=="collection"||c=="arguments"||instanceOf(this[b],Array))?Array.flatten(this[b]):this[b]);
}return d;},pick:function(){for(var b=0,a=this.length;b<a;b++){if(this[b]!=null){return this[b];}}return null;},hexToRgb:function(b){if(this.length!=3){return null;
}var a=this.map(function(c){if(c.length==1){c+=c;}return c.toInt(16);});return(b)?a:"rgb("+a+")";},rgbToHex:function(d){if(this.length<3){return null;}if(this.length==4&&this[3]==0&&!d){return"transparent";
}var b=[];for(var a=0;a<3;a++){var c=(this[a]-0).toString(16);b.push((c.length==1)?"0"+c:c);}return(d)?b:"#"+b.join("");}});Function.extend({attempt:function(){for(var b=0,a=arguments.length;
b<a;b++){try{return arguments[b]();}catch(c){}}return null;}});Function.implement({attempt:function(a,c){try{return this.apply(c,Array.from(a));}catch(b){}return null;
},bind:function(c){var a=this,b=(arguments.length>1)?Array.slice(arguments,1):null;return function(){if(!b&&!arguments.length){return a.call(c);}if(b&&arguments.length){return a.apply(c,b.concat(Array.from(arguments)));
}return a.apply(c,b||arguments);};},pass:function(b,c){var a=this;if(b!=null){b=Array.from(b);}return function(){return a.apply(c,b||arguments);};},delay:function(b,c,a){return setTimeout(this.pass((a==null?[]:a),c),b);
},periodical:function(c,b,a){return setInterval(this.pass((a==null?[]:a),b),c);}});Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this));
},round:function(a){a=Math.pow(10,a||0).toFixed(a<0?-a:0);return Math.round(this*a)/a;},times:function(b,c){for(var a=0;a<this;a++){b.call(c,a,this);}},toFloat:function(){return parseFloat(this);
},toInt:function(a){return parseInt(this,a||10);}});Number.alias("each","times");(function(b){var a={};b.each(function(c){if(!Number[c]){a[c]=function(){return Math[c].apply(null,[this].concat(Array.from(arguments)));
};}});Number.implement(a);})(["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","sin","sqrt","tan"]);String.implement({test:function(a,b){return((typeOf(a)=="regexp")?a:new RegExp(""+a,b)).test(this);
},contains:function(a,b){return(b)?(b+this+b).indexOf(b+a+b)>-1:this.indexOf(a)>-1;},trim:function(){return this.replace(/^\s+|\s+$/g,"");},clean:function(){return this.replace(/\s+/g," ").trim();
},camelCase:function(){return this.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase();});},hyphenate:function(){return this.replace(/[A-Z]/g,function(a){return("-"+a.charAt(0).toLowerCase());
});},capitalize:function(){return this.replace(/\b[a-z]/g,function(a){return a.toUpperCase();});},escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");
},toInt:function(a){return parseInt(this,a||10);},toFloat:function(){return parseFloat(this);},hexToRgb:function(b){var a=this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
return(a)?a.slice(1).hexToRgb(b):null;},rgbToHex:function(b){var a=this.match(/\d{1,3}/g);return(a)?a.rgbToHex(b):null;},substitute:function(a,b){return this.replace(b||(/\\?\{([^{}]+)\}/g),function(d,c){if(d.charAt(0)=="\\"){return d.slice(1);
}return(a[c]!=null)?a[c]:"";});}});(function(){var k=this.document;var i=k.window=this;var b=1;this.$uid=(i.ActiveXObject)?function(e){return(e.uid||(e.uid=[b++]))[0];
}:function(e){return e.uid||(e.uid=b++);};$uid(i);$uid(k);var a=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),j=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],f=j[1]=="ie"&&k.documentMode;
var o=this.Browser={extend:Function.prototype.extend,name:(j[1]=="version")?j[3]:j[1],version:f||parseFloat((j[1]=="opera"&&j[4])?j[4]:j[2]),Platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||c.match(/mac|win|linux/)||["other"])[0]},Features:{xpath:!!(k.evaluate),air:!!(i.runtime),query:!!(k.querySelector),json:!!(i.JSON)},Plugins:{}};
o[o.name]=true;o[o.name+parseInt(o.version,10)]=true;o.Platform[o.Platform.name]=true;o.Request=(function(){var q=function(){return new XMLHttpRequest();
};var p=function(){return new ActiveXObject("MSXML2.XMLHTTP");};var e=function(){return new ActiveXObject("Microsoft.XMLHTTP");};return Function.attempt(function(){q();
return q;},function(){p();return p;},function(){e();return e;});})();o.Features.xhr=!!(o.Request);var h=(Function.attempt(function(){return navigator.plugins["Shockwave Flash"].description;
},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");})||"0 r0").match(/\d+/g);o.Plugins.Flash={version:Number(h[0]||"0."+h[1])||0,build:Number(h[2])||0};
o.exec=function(p){if(!p){return p;}if(i.execScript){i.execScript(p);}else{var e=k.createElement("script");e.setAttribute("type","text/javascript");e.text=p;
k.head.appendChild(e);k.head.removeChild(e);}return p;};String.implement("stripScripts",function(p){var e="";var q=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(r,s){e+=s+"\n";
return"";});if(p===true){o.exec(e);}else{if(typeOf(p)=="function"){p(e,q);}}return q;});o.extend({Document:this.Document,Window:this.Window,Element:this.Element,Event:this.Event});
this.Window=this.$constructor=new Type("Window",function(){});this.$family=Function.from("window").hide();Window.mirror(function(e,p){i[e]=p;});this.Document=k.$constructor=new Type("Document",function(){});
k.$family=Function.from("document").hide();Document.mirror(function(e,p){k[e]=p;});k.html=k.documentElement;if(!k.head){k.head=k.getElementsByTagName("head")[0];
}if(k.execCommand){try{k.execCommand("BackgroundImageCache",false,true);}catch(g){}}if(this.attachEvent&&!this.addEventListener){var d=function(){this.detachEvent("onunload",d);
k.head=k.html=k.window=null;};this.attachEvent("onunload",d);}var m=Array.from;try{m(k.html.childNodes);}catch(g){Array.from=function(p){if(typeof p!="string"&&Type.isEnumerable(p)&&typeOf(p)!="array"){var e=p.length,q=new Array(e);
while(e--){q[e]=p[e];}return q;}return m(p);};var l=Array.prototype,n=l.slice;["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice"].each(function(e){var p=l[e];
Array[e]=function(q){return p.apply(Array.from(q),n.call(arguments,1));};});}})();(function(){var a=Object.prototype.hasOwnProperty;Object.extend({subset:function(d,g){var f={};
for(var e=0,b=g.length;e<b;e++){var c=g[e];if(c in d){f[c]=d[c];}}return f;},map:function(b,e,f){var d={};for(var c in b){if(a.call(b,c)){d[c]=e.call(f,b[c],c,b);
}}return d;},filter:function(b,e,g){var d={};for(var c in b){var f=b[c];if(a.call(b,c)&&e.call(g,f,c,b)){d[c]=f;}}return d;},every:function(b,d,e){for(var c in b){if(a.call(b,c)&&!d.call(e,b[c],c)){return false;
}}return true;},some:function(b,d,e){for(var c in b){if(a.call(b,c)&&d.call(e,b[c],c)){return true;}}return false;},keys:function(b){var d=[];for(var c in b){if(a.call(b,c)){d.push(c);
}}return d;},values:function(c){var b=[];for(var d in c){if(a.call(c,d)){b.push(c[d]);}}return b;},getLength:function(b){return Object.keys(b).length;},keyOf:function(b,d){for(var c in b){if(a.call(b,c)&&b[c]===d){return c;
}}return null;},contains:function(b,c){return Object.keyOf(b,c)!=null;},toQueryString:function(b,c){var d=[];Object.each(b,function(h,g){if(c){g=c+"["+g+"]";
}var f;switch(typeOf(h)){case"object":f=Object.toQueryString(h,g);break;case"array":var e={};h.each(function(k,j){e[j]=k;});f=Object.toQueryString(e,g);
break;default:f=g+"="+encodeURIComponent(h);}if(h!=null){d.push(f);}});return d.join("&");}});})();var Event=new Type("Event",function(a,i){if(!i){i=window;
}var o=i.document;a=a||i.event;if(a.$extended){return a;}this.$extended=true;var n=a.type,k=a.target||a.srcElement,m={},c={},q=null,h,l,b,p;while(k&&k.nodeType==3){k=k.parentNode;
}if(n.indexOf("key")!=-1){b=a.which||a.keyCode;p=Object.keyOf(Event.Keys,b);if(n=="keydown"){var d=b-111;if(d>0&&d<13){p="f"+d;}}if(!p){p=String.fromCharCode(b).toLowerCase();
}}else{if((/click|mouse|menu/i).test(n)){o=(!o.compatMode||o.compatMode=="CSS1Compat")?o.html:o.body;m={x:(a.pageX!=null)?a.pageX:a.clientX+o.scrollLeft,y:(a.pageY!=null)?a.pageY:a.clientY+o.scrollTop};
c={x:(a.pageX!=null)?a.pageX-i.pageXOffset:a.clientX,y:(a.pageY!=null)?a.pageY-i.pageYOffset:a.clientY};if((/DOMMouseScroll|mousewheel/).test(n)){l=(a.wheelDelta)?a.wheelDelta/120:-(a.detail||0)/3;
}h=(a.which==3)||(a.button==2);if((/over|out/).test(n)){q=a.relatedTarget||a[(n=="mouseover"?"from":"to")+"Element"];var j=function(){while(q&&q.nodeType==3){q=q.parentNode;
}return true;};var g=(Browser.firefox2)?j.attempt():j();q=(g)?q:null;}}else{if((/gesture|touch/i).test(n)){this.rotation=a.rotation;this.scale=a.scale;
this.targetTouches=a.targetTouches;this.changedTouches=a.changedTouches;var f=this.touches=a.touches;if(f&&f[0]){var e=f[0];m={x:e.pageX,y:e.pageY};c={x:e.clientX,y:e.clientY};
}}}}return Object.append(this,{event:a,type:n,page:m,client:c,rightClick:h,wheel:l,relatedTarget:document.id(q),target:document.id(k),code:b,key:p,shift:a.shiftKey,control:a.ctrlKey,alt:a.altKey,meta:a.metaKey});
});Event.Keys={enter:13,up:38,down:40,left:37,right:39,esc:27,space:32,backspace:8,tab:9,"delete":46};Event.implement({stop:function(){return this.stopPropagation().preventDefault();
},stopPropagation:function(){if(this.event.stopPropagation){this.event.stopPropagation();}else{this.event.cancelBubble=true;}return this;},preventDefault:function(){if(this.event.preventDefault){this.event.preventDefault();
}else{this.event.returnValue=false;}return this;}});(function(){var a=this.Class=new Type("Class",function(h){if(instanceOf(h,Function)){h={initialize:h};
}var g=function(){e(this);if(g.$prototyping){return this;}this.$caller=null;var i=(this.initialize)?this.initialize.apply(this,arguments):this;this.$caller=this.caller=null;
return i;}.extend(this).implement(h);g.$constructor=a;g.prototype.$constructor=g;g.prototype.parent=c;return g;});var c=function(){if(!this.$caller){throw new Error('The method "parent" cannot be called.');
}var g=this.$caller.$name,h=this.$caller.$owner.parent,i=(h)?h.prototype[g]:null;if(!i){throw new Error('The method "'+g+'" has no parent.');}return i.apply(this,arguments);
};var e=function(g){for(var h in g){var j=g[h];switch(typeOf(j)){case"object":var i=function(){};i.prototype=j;g[h]=e(new i);break;case"array":g[h]=j.clone();
break;}}return g;};var b=function(g,h,j){if(j.$origin){j=j.$origin;}var i=function(){if(j.$protected&&this.$caller==null){throw new Error('The method "'+h+'" cannot be called.');
}var l=this.caller,m=this.$caller;this.caller=m;this.$caller=i;var k=j.apply(this,arguments);this.$caller=m;this.caller=l;return k;}.extend({$owner:g,$origin:j,$name:h});
return i;};var f=function(h,i,g){if(a.Mutators.hasOwnProperty(h)){i=a.Mutators[h].call(this,i);if(i==null){return this;}}if(typeOf(i)=="function"){if(i.$hidden){return this;
}this.prototype[h]=(g)?i:b(this,h,i);}else{Object.merge(this.prototype,h,i);}return this;};var d=function(g){g.$prototyping=true;var h=new g;delete g.$prototyping;
return h;};a.implement("implement",f.overloadSetter());a.Mutators={Extends:function(g){this.parent=g;this.prototype=d(g);},Implements:function(g){Array.from(g).each(function(j){var h=new j;
for(var i in h){f.call(this,i,h[i],true);}},this);}};})();(function(){var k,n,l,g,a={},c={},m=/\\/g;var e=function(q,p){if(q==null){return null;}if(q.Slick===true){return q;
}q=(""+q).replace(/^\s+|\s+$/g,"");g=!!p;var o=(g)?c:a;if(o[q]){return o[q];}k={Slick:true,expressions:[],raw:q,reverse:function(){return e(this.raw,true);
}};n=-1;while(q!=(q=q.replace(j,b))){}k.length=k.expressions.length;return o[k.raw]=(g)?h(k):k;};var i=function(o){if(o==="!"){return" ";}else{if(o===" "){return"!";
}else{if((/^!/).test(o)){return o.replace(/^!/,"");}else{return"!"+o;}}}};var h=function(u){var r=u.expressions;for(var p=0;p<r.length;p++){var t=r[p];
var q={parts:[],tag:"*",combinator:i(t[0].combinator)};for(var o=0;o<t.length;o++){var s=t[o];if(!s.reverseCombinator){s.reverseCombinator=" ";}s.combinator=s.reverseCombinator;
delete s.reverseCombinator;}t.reverse().push(q);}return u;};var f=function(o){return o.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(p){return"\\"+p;});};
var j=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+f(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));
function b(x,s,D,z,r,C,q,B,A,y,u,F,G,v,p,w){if(s||n===-1){k.expressions[++n]=[];l=-1;if(s){return"";}}if(D||z||l===-1){D=D||" ";var t=k.expressions[n];
if(g&&t[l]){t[l].reverseCombinator=i(D);}t[++l]={combinator:D,tag:"*"};}var o=k.expressions[n][l];if(r){o.tag=r.replace(m,"");}else{if(C){o.id=C.replace(m,"");
}else{if(q){q=q.replace(m,"");if(!o.classList){o.classList=[];}if(!o.classes){o.classes=[];}o.classList.push(q);o.classes.push({value:q,regexp:new RegExp("(^|\\s)"+f(q)+"(\\s|$)")});
}else{if(G){w=w||p;w=w?w.replace(m,""):null;if(!o.pseudos){o.pseudos=[];}o.pseudos.push({key:G.replace(m,""),value:w,type:F.length==1?"class":"element"});
}else{if(B){B=B.replace(m,"");u=(u||"").replace(m,"");var E,H;switch(A){case"^=":H=new RegExp("^"+f(u));break;case"$=":H=new RegExp(f(u)+"$");break;case"~=":H=new RegExp("(^|\\s)"+f(u)+"(\\s|$)");
break;case"|=":H=new RegExp("^"+f(u)+"(-|$)");break;case"=":E=function(I){return u==I;};break;case"*=":E=function(I){return I&&I.indexOf(u)>-1;};break;
case"!=":E=function(I){return u!=I;};break;default:E=function(I){return !!I;};}if(u==""&&(/^[*$^]=$/).test(A)){E=function(){return false;};}if(!E){E=function(I){return I&&H.test(I);
};}if(!o.attributes){o.attributes=[];}o.attributes.push({key:B,operator:A,value:u,test:E});}}}}}return"";}var d=(this.Slick||{});d.parse=function(o){return e(o);
};d.escapeRegExp=f;if(!this.Slick){this.Slick=d;}}).apply((typeof exports!="undefined")?exports:this);(function(){var j={},l={},b=Object.prototype.toString;
j.isNativeCode=function(c){return(/\{\s*\[native code\]\s*\}/).test(""+c);};j.isXML=function(c){return(!!c.xmlVersion)||(!!c.xml)||(b.call(c)=="[object XMLDocument]")||(c.nodeType==9&&c.documentElement.nodeName!="HTML");
};j.setDocument=function(w){var t=w.nodeType;if(t==9){}else{if(t){w=w.ownerDocument;}else{if(w.navigator){w=w.document;}else{return;}}}if(this.document===w){return;
}this.document=w;var y=w.documentElement,u=this.getUIDXML(y),o=l[u],A;if(o){for(A in o){this[A]=o[A];}return;}o=l[u]={};o.root=y;o.isXMLDocument=this.isXML(w);
o.brokenStarGEBTN=o.starSelectsClosedQSA=o.idGetsName=o.brokenMixedCaseQSA=o.brokenGEBCN=o.brokenCheckedQSA=o.brokenEmptyAttributeQSA=o.isHTMLDocument=o.nativeMatchesSelector=false;
var m,n,x,q,r;var s,c="slick_uniqueid";var z=w.createElement("div");var p=w.body||w.getElementsByTagName("body")[0]||y;p.appendChild(z);try{z.innerHTML='<a id="'+c+'"></a>';
o.isHTMLDocument=!!w.getElementById(c);}catch(v){}if(o.isHTMLDocument){z.style.display="none";z.appendChild(w.createComment(""));n=(z.getElementsByTagName("*").length>1);
try{z.innerHTML="foo</foo>";s=z.getElementsByTagName("*");m=(s&&!!s.length&&s[0].nodeName.charAt(0)=="/");}catch(v){}o.brokenStarGEBTN=n||m;try{z.innerHTML='<a name="'+c+'"></a><b id="'+c+'"></b>';
o.idGetsName=w.getElementById(c)===z.firstChild;}catch(v){}if(z.getElementsByClassName){try{z.innerHTML='<a class="f"></a><a class="b"></a>';z.getElementsByClassName("b").length;
z.firstChild.className="b";q=(z.getElementsByClassName("b").length!=2);}catch(v){}try{z.innerHTML='<a class="a"></a><a class="f b a"></a>';x=(z.getElementsByClassName("a").length!=2);
}catch(v){}o.brokenGEBCN=q||x;}if(z.querySelectorAll){try{z.innerHTML="foo</foo>";s=z.querySelectorAll("*");o.starSelectsClosedQSA=(s&&!!s.length&&s[0].nodeName.charAt(0)=="/");
}catch(v){}try{z.innerHTML='<a class="MiX"></a>';o.brokenMixedCaseQSA=!z.querySelectorAll(".MiX").length;}catch(v){}try{z.innerHTML='<select><option selected="selected">a</option></select>';
o.brokenCheckedQSA=(z.querySelectorAll(":checked").length==0);}catch(v){}try{z.innerHTML='<a class=""></a>';o.brokenEmptyAttributeQSA=(z.querySelectorAll('[class*=""]').length!=0);
}catch(v){}}try{z.innerHTML='<form action="s"><input id="action"/></form>';r=(z.firstChild.getAttribute("action")!="s");}catch(v){}o.nativeMatchesSelector=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector;
if(o.nativeMatchesSelector){try{o.nativeMatchesSelector.call(y,":slick");o.nativeMatchesSelector=null;}catch(v){}}}try{y.slick_expando=1;delete y.slick_expando;
o.getUID=this.getUIDHTML;}catch(v){o.getUID=this.getUIDXML;}p.removeChild(z);z=s=p=null;o.getAttribute=(o.isHTMLDocument&&r)?function(D,B){var E=this.attributeGetters[B];
if(E){return E.call(D);}var C=D.getAttributeNode(B);return(C)?C.nodeValue:null;}:function(C,B){var D=this.attributeGetters[B];return(D)?D.call(C):C.getAttribute(B);
};o.hasAttribute=(y&&this.isNativeCode(y.hasAttribute))?function(C,B){return C.hasAttribute(B);}:function(C,B){C=C.getAttributeNode(B);return !!(C&&(C.specified||C.nodeValue));
};o.contains=(y&&this.isNativeCode(y.contains))?function(B,C){return B.contains(C);}:(y&&y.compareDocumentPosition)?function(B,C){return B===C||!!(B.compareDocumentPosition(C)&16);
}:function(B,C){if(C){do{if(C===B){return true;}}while((C=C.parentNode));}return false;};o.documentSorter=(y.compareDocumentPosition)?function(C,B){if(!C.compareDocumentPosition||!B.compareDocumentPosition){return 0;
}return C.compareDocumentPosition(B)&4?-1:C===B?0:1;}:("sourceIndex" in y)?function(C,B){if(!C.sourceIndex||!B.sourceIndex){return 0;}return C.sourceIndex-B.sourceIndex;
}:(w.createRange)?function(E,C){if(!E.ownerDocument||!C.ownerDocument){return 0;}var D=E.ownerDocument.createRange(),B=C.ownerDocument.createRange();D.setStart(E,0);
D.setEnd(E,0);B.setStart(C,0);B.setEnd(C,0);return D.compareBoundaryPoints(Range.START_TO_END,B);}:null;y=null;for(A in o){this[A]=o[A];}};var e=/^([#.]?)((?:[\w-]+|\*))$/,g=/\[.+[*$^]=(?:""|'')?\]/,f={};
j.search=function(U,z,H,s){var p=this.found=(s)?null:(H||[]);if(!U){return p;}else{if(U.navigator){U=U.document;}else{if(!U.nodeType){return p;}}}var F,O,V=this.uniques={},I=!!(H&&H.length),y=(U.nodeType==9);
if(this.document!==(y?U:U.ownerDocument)){this.setDocument(U);}if(I){for(O=p.length;O--;){V[this.getUID(p[O])]=true;}}if(typeof z=="string"){var r=z.match(e);
simpleSelectors:if(r){var u=r[1],v=r[2],A,E;if(!u){if(v=="*"&&this.brokenStarGEBTN){break simpleSelectors;}E=U.getElementsByTagName(v);if(s){return E[0]||null;
}for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}else{if(u=="#"){if(!this.isHTMLDocument||!y){break simpleSelectors;}A=U.getElementById(v);
if(!A){return p;}if(this.idGetsName&&A.getAttributeNode("id").nodeValue!=v){break simpleSelectors;}if(s){return A||null;}if(!(I&&V[this.getUID(A)])){p.push(A);
}}else{if(u=="."){if(!this.isHTMLDocument||((!U.getElementsByClassName||this.brokenGEBCN)&&U.querySelectorAll)){break simpleSelectors;}if(U.getElementsByClassName&&!this.brokenGEBCN){E=U.getElementsByClassName(v);
if(s){return E[0]||null;}for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}else{var T=new RegExp("(^|\\s)"+d.escapeRegExp(v)+"(\\s|$)");E=U.getElementsByTagName("*");
for(O=0;A=E[O++];){className=A.className;if(!(className&&T.test(className))){continue;}if(s){return A;}if(!(I&&V[this.getUID(A)])){p.push(A);}}}}}}if(I){this.sort(p);
}return(s)?null:p;}querySelector:if(U.querySelectorAll){if(!this.isHTMLDocument||f[z]||this.brokenMixedCaseQSA||(this.brokenCheckedQSA&&z.indexOf(":checked")>-1)||(this.brokenEmptyAttributeQSA&&g.test(z))||(!y&&z.indexOf(",")>-1)||d.disableQSA){break querySelector;
}var S=z,x=U;if(!y){var C=x.getAttribute("id"),t="slickid__";x.setAttribute("id",t);S="#"+t+" "+S;U=x.parentNode;}try{if(s){return U.querySelector(S)||null;
}else{E=U.querySelectorAll(S);}}catch(Q){f[z]=1;break querySelector;}finally{if(!y){if(C){x.setAttribute("id",C);}else{x.removeAttribute("id");}U=x;}}if(this.starSelectsClosedQSA){for(O=0;
A=E[O++];){if(A.nodeName>"@"&&!(I&&V[this.getUID(A)])){p.push(A);}}}else{for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}if(I){this.sort(p);
}return p;}F=this.Slick.parse(z);if(!F.length){return p;}}else{if(z==null){return p;}else{if(z.Slick){F=z;}else{if(this.contains(U.documentElement||U,z)){(p)?p.push(z):p=z;
return p;}else{return p;}}}}this.posNTH={};this.posNTHLast={};this.posNTHType={};this.posNTHTypeLast={};this.push=(!I&&(s||(F.length==1&&F.expressions[0].length==1)))?this.pushArray:this.pushUID;
if(p==null){p=[];}var M,L,K;var B,J,D,c,q,G,W;var N,P,o,w,R=F.expressions;search:for(O=0;(P=R[O]);O++){for(M=0;(o=P[M]);M++){B="combinator:"+o.combinator;
if(!this[B]){continue search;}J=(this.isXMLDocument)?o.tag:o.tag.toUpperCase();D=o.id;c=o.classList;q=o.classes;G=o.attributes;W=o.pseudos;w=(M===(P.length-1));
this.bitUniques={};if(w){this.uniques=V;this.found=p;}else{this.uniques={};this.found=[];}if(M===0){this[B](U,J,D,q,G,W,c);if(s&&w&&p.length){break search;
}}else{if(s&&w){for(L=0,K=N.length;L<K;L++){this[B](N[L],J,D,q,G,W,c);if(p.length){break search;}}}else{for(L=0,K=N.length;L<K;L++){this[B](N[L],J,D,q,G,W,c);
}}}N=this.found;}}if(I||(F.expressions.length>1)){this.sort(p);}return(s)?(p[0]||null):p;};j.uidx=1;j.uidk="slick-uniqueid";j.getUIDXML=function(m){var c=m.getAttribute(this.uidk);
if(!c){c=this.uidx++;m.setAttribute(this.uidk,c);}return c;};j.getUIDHTML=function(c){return c.uniqueNumber||(c.uniqueNumber=this.uidx++);};j.sort=function(c){if(!this.documentSorter){return c;
}c.sort(this.documentSorter);return c;};j.cacheNTH={};j.matchNTH=/^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/;j.parseNTHArgument=function(p){var n=p.match(this.matchNTH);
if(!n){return false;}var o=n[2]||false;var m=n[1]||1;if(m=="-"){m=-1;}var c=+n[3]||0;n=(o=="n")?{a:m,b:c}:(o=="odd")?{a:2,b:1}:(o=="even")?{a:2,b:0}:{a:0,b:m};
return(this.cacheNTH[p]=n);};j.createNTHPseudo=function(o,m,c,n){return function(r,p){var t=this.getUID(r);if(!this[c][t]){var z=r.parentNode;if(!z){return false;
}var q=z[o],s=1;if(n){var y=r.nodeName;do{if(q.nodeName!=y){continue;}this[c][this.getUID(q)]=s++;}while((q=q[m]));}else{do{if(q.nodeType!=1){continue;
}this[c][this.getUID(q)]=s++;}while((q=q[m]));}}p=p||"n";var u=this.cacheNTH[p]||this.parseNTHArgument(p);if(!u){return false;}var x=u.a,w=u.b,v=this[c][t];
if(x==0){return w==v;}if(x>0){if(v<w){return false;}}else{if(w<v){return false;}}return((v-w)%x)==0;};};j.pushArray=function(o,c,q,n,m,p){if(this.matchSelector(o,c,q,n,m,p)){this.found.push(o);
}};j.pushUID=function(p,c,r,o,m,q){var n=this.getUID(p);if(!this.uniques[n]&&this.matchSelector(p,c,r,o,m,q)){this.uniques[n]=true;this.found.push(p);}};
j.matchNode=function(m,n){if(this.isHTMLDocument&&this.nativeMatchesSelector){try{return this.nativeMatchesSelector.call(m,n.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'));
}catch(u){}}var t=this.Slick.parse(n);if(!t){return true;}var r=t.expressions,p,s=0,q;for(q=0;(currentExpression=r[q]);q++){if(currentExpression.length==1){var o=currentExpression[0];
if(this.matchSelector(m,(this.isXMLDocument)?o.tag:o.tag.toUpperCase(),o.id,o.classes,o.attributes,o.pseudos)){return true;}s++;}}if(s==t.length){return false;
}var c=this.search(this.document,t),v;for(q=0;v=c[q++];){if(v===m){return true;}}return false;};j.matchPseudo=function(p,c,o){var m="pseudo:"+c;if(this[m]){return this[m](p,o);
}var n=this.getAttribute(p,c);return(o)?o==n:!!n;};j.matchSelector=function(n,u,c,o,p,r){if(u){var s=(this.isXMLDocument)?n.nodeName:n.nodeName.toUpperCase();
if(u=="*"){if(s<"@"){return false;}}else{if(s!=u){return false;}}}if(c&&n.getAttribute("id")!=c){return false;}var q,m,t;if(o){for(q=o.length;q--;){t=n.getAttribute("class")||n.className;
if(!(t&&o[q].regexp.test(t))){return false;}}}if(p){for(q=p.length;q--;){m=p[q];if(m.operator?!m.test(this.getAttribute(n,m.key)):!this.hasAttribute(n,m.key)){return false;
}}}if(r){for(q=r.length;q--;){m=r[q];if(!this.matchPseudo(n,m.key,m.value)){return false;}}}return true;};var i={" ":function(p,v,m,q,r,t,o){var s,u,n;
if(this.isHTMLDocument){getById:if(m){u=this.document.getElementById(m);if((!u&&p.all)||(this.idGetsName&&u&&u.getAttributeNode("id").nodeValue!=m)){n=p.all[m];
if(!n){return;}if(!n[0]){n=[n];}for(s=0;u=n[s++];){var c=u.getAttributeNode("id");if(c&&c.nodeValue==m){this.push(u,v,null,q,r,t);break;}}return;}if(!u){if(this.contains(this.root,p)){return;
}else{break getById;}}else{if(this.document!==p&&!this.contains(p,u)){return;}}this.push(u,v,null,q,r,t);return;}getByClass:if(q&&p.getElementsByClassName&&!this.brokenGEBCN){n=p.getElementsByClassName(o.join(" "));
if(!(n&&n.length)){break getByClass;}for(s=0;u=n[s++];){this.push(u,v,m,null,r,t);}return;}}getByTag:{n=p.getElementsByTagName(v);if(!(n&&n.length)){break getByTag;
}if(!this.brokenStarGEBTN){v=null;}for(s=0;u=n[s++];){this.push(u,v,m,q,r,t);}}},">":function(o,c,q,n,m,p){if((o=o.firstChild)){do{if(o.nodeType==1){this.push(o,c,q,n,m,p);
}}while((o=o.nextSibling));}},"+":function(o,c,q,n,m,p){while((o=o.nextSibling)){if(o.nodeType==1){this.push(o,c,q,n,m,p);break;}}},"^":function(o,c,q,n,m,p){o=o.firstChild;
if(o){if(o.nodeType==1){this.push(o,c,q,n,m,p);}else{this["combinator:+"](o,c,q,n,m,p);}}},"~":function(p,c,r,o,m,q){while((p=p.nextSibling)){if(p.nodeType!=1){continue;
}var n=this.getUID(p);if(this.bitUniques[n]){break;}this.bitUniques[n]=true;this.push(p,c,r,o,m,q);}},"++":function(o,c,q,n,m,p){this["combinator:+"](o,c,q,n,m,p);
this["combinator:!+"](o,c,q,n,m,p);},"~~":function(o,c,q,n,m,p){this["combinator:~"](o,c,q,n,m,p);this["combinator:!~"](o,c,q,n,m,p);},"!":function(o,c,q,n,m,p){while((o=o.parentNode)){if(o!==this.document){this.push(o,c,q,n,m,p);
}}},"!>":function(o,c,q,n,m,p){o=o.parentNode;if(o!==this.document){this.push(o,c,q,n,m,p);}},"!+":function(o,c,q,n,m,p){while((o=o.previousSibling)){if(o.nodeType==1){this.push(o,c,q,n,m,p);
break;}}},"!^":function(o,c,q,n,m,p){o=o.lastChild;if(o){if(o.nodeType==1){this.push(o,c,q,n,m,p);}else{this["combinator:!+"](o,c,q,n,m,p);}}},"!~":function(p,c,r,o,m,q){while((p=p.previousSibling)){if(p.nodeType!=1){continue;
}var n=this.getUID(p);if(this.bitUniques[n]){break;}this.bitUniques[n]=true;this.push(p,c,r,o,m,q);}}};for(var h in i){j["combinator:"+h]=i[h];}var k={empty:function(c){var m=c.firstChild;
return !(m&&m.nodeType==1)&&!(c.innerText||c.textContent||"").length;},not:function(c,m){return !this.matchNode(c,m);},contains:function(c,m){return(c.innerText||c.textContent||"").indexOf(m)>-1;
},"first-child":function(c){while((c=c.previousSibling)){if(c.nodeType==1){return false;}}return true;},"last-child":function(c){while((c=c.nextSibling)){if(c.nodeType==1){return false;
}}return true;},"only-child":function(n){var m=n;while((m=m.previousSibling)){if(m.nodeType==1){return false;}}var c=n;while((c=c.nextSibling)){if(c.nodeType==1){return false;
}}return true;},"nth-child":j.createNTHPseudo("firstChild","nextSibling","posNTH"),"nth-last-child":j.createNTHPseudo("lastChild","previousSibling","posNTHLast"),"nth-of-type":j.createNTHPseudo("firstChild","nextSibling","posNTHType",true),"nth-last-of-type":j.createNTHPseudo("lastChild","previousSibling","posNTHTypeLast",true),index:function(m,c){return this["pseudo:nth-child"](m,""+c+1);
},even:function(c){return this["pseudo:nth-child"](c,"2n");},odd:function(c){return this["pseudo:nth-child"](c,"2n+1");},"first-of-type":function(c){var m=c.nodeName;
while((c=c.previousSibling)){if(c.nodeName==m){return false;}}return true;},"last-of-type":function(c){var m=c.nodeName;while((c=c.nextSibling)){if(c.nodeName==m){return false;
}}return true;},"only-of-type":function(n){var m=n,o=n.nodeName;while((m=m.previousSibling)){if(m.nodeName==o){return false;}}var c=n;while((c=c.nextSibling)){if(c.nodeName==o){return false;
}}return true;},enabled:function(c){return !c.disabled;},disabled:function(c){return c.disabled;},checked:function(c){return c.checked||c.selected;},focus:function(c){return this.isHTMLDocument&&this.document.activeElement===c&&(c.href||c.type||this.hasAttribute(c,"tabindex"));
},root:function(c){return(c===this.root);},selected:function(c){return c.selected;}};for(var a in k){j["pseudo:"+a]=k[a];}j.attributeGetters={"class":function(){return this.getAttribute("class")||this.className;
},"for":function(){return("htmlFor" in this)?this.htmlFor:this.getAttribute("for");},href:function(){return("href" in this)?this.getAttribute("href",2):this.getAttribute("href");
},style:function(){return(this.style)?this.style.cssText:this.getAttribute("style");},tabindex:function(){var c=this.getAttributeNode("tabindex");return(c&&c.specified)?c.nodeValue:null;
},type:function(){return this.getAttribute("type");}};var d=j.Slick=(this.Slick||{});d.version="1.1.5";d.search=function(m,n,c){return j.search(m,n,c);
};d.find=function(c,m){return j.search(c,m,null,true);};d.contains=function(c,m){j.setDocument(c);return j.contains(c,m);};d.getAttribute=function(m,c){return j.getAttribute(m,c);
};d.match=function(m,c){if(!(m&&c)){return false;}if(!c||c===m){return true;}j.setDocument(m);return j.matchNode(m,c);};d.defineAttributeGetter=function(c,m){j.attributeGetters[c]=m;
return this;};d.lookupAttributeGetter=function(c){return j.attributeGetters[c];};d.definePseudo=function(c,m){j["pseudo:"+c]=function(o,n){return m.call(o,n);
};return this;};d.lookupPseudo=function(c){var m=j["pseudo:"+c];if(m){return function(n){return m.call(this,n);};}return null;};d.override=function(m,c){j.override(m,c);
return this;};d.isXML=j.isXML;d.uidOf=function(c){return j.getUIDHTML(c);};if(!this.Slick){this.Slick=d;}}).apply((typeof exports!="undefined")?exports:this);
var Element=function(b,g){var h=Element.Constructors[b];if(h){return h(g);}if(typeof b!="string"){return document.id(b).set(g);}if(!g){g={};}if(!(/^[\w-]+$/).test(b)){var e=Slick.parse(b).expressions[0][0];
b=(e.tag=="*")?"div":e.tag;if(e.id&&g.id==null){g.id=e.id;}var d=e.attributes;if(d){for(var f=0,c=d.length;f<c;f++){var a=d[f];if(g[a.key]!=null){continue;
}if(a.value!=null&&a.operator=="="){g[a.key]=a.value;}else{if(!a.value&&!a.operator){g[a.key]=true;}}}}if(e.classList&&g["class"]==null){g["class"]=e.classList.join(" ");
}}return document.newElement(b,g);};if(Browser.Element){Element.prototype=Browser.Element.prototype;}new Type("Element",Element).mirror(function(a){if(Array.prototype[a]){return;
}var b={};b[a]=function(){var h=[],e=arguments,j=true;for(var g=0,d=this.length;g<d;g++){var f=this[g],c=h[g]=f[a].apply(f,e);j=(j&&typeOf(c)=="element");
}return(j)?new Elements(h):h;};Elements.implement(b);});if(!Browser.Element){Element.parent=Object;Element.Prototype={"$family":Function.from("element").hide()};
Element.mirror(function(a,b){Element.Prototype[a]=b;});}Element.Constructors={};var IFrame=new Type("IFrame",function(){var e=Array.link(arguments,{properties:Type.isObject,iframe:function(f){return(f!=null);
}});var c=e.properties||{},b;if(e.iframe){b=document.id(e.iframe);}var d=c.onload||function(){};delete c.onload;c.id=c.name=[c.id,c.name,b?(b.id||b.name):"IFrame_"+String.uniqueID()].pick();
b=new Element(b||"iframe",c);var a=function(){d.call(b.contentWindow);};if(window.frames[c.id]){a();}else{b.addListener("load",a);}return b;});var Elements=this.Elements=function(a){if(a&&a.length){var e={},d;
for(var c=0;d=a[c++];){var b=Slick.uidOf(d);if(!e[b]){e[b]=true;this.push(d);}}}};Elements.prototype={length:0};Elements.parent=Array;new Type("Elements",Elements).implement({filter:function(a,b){if(!a){return this;
}return new Elements(Array.filter(this,(typeOf(a)=="string")?function(c){return c.match(a);}:a,b));}.protect(),push:function(){var d=this.length;for(var b=0,a=arguments.length;
b<a;b++){var c=document.id(arguments[b]);if(c){this[d++]=c;}}return(this.length=d);}.protect(),unshift:function(){var b=[];for(var c=0,a=arguments.length;
c<a;c++){var d=document.id(arguments[c]);if(d){b.push(d);}}return Array.prototype.unshift.apply(this,b);}.protect(),concat:function(){var b=new Elements(this);
for(var c=0,a=arguments.length;c<a;c++){var d=arguments[c];if(Type.isEnumerable(d)){b.append(d);}else{b.push(d);}}return b;}.protect(),append:function(c){for(var b=0,a=c.length;
b<a;b++){this.push(c[b]);}return this;}.protect(),empty:function(){while(this.length){delete this[--this.length];}return this;}.protect()});(function(){var g=Array.prototype.splice,b={"0":0,"1":1,length:2};
g.call(b,1,1);if(b[1]==1){Elements.implement("splice",function(){var e=this.length;g.apply(this,arguments);while(e>=this.length){delete this[e--];}return this;
}.protect());}Elements.implement(Array.prototype);Array.mirror(Elements);var f;try{var a=document.createElement("<input name=x>");f=(a.name=="x");}catch(c){}var d=function(e){return(""+e).replace(/&/g,"&amp;").replace(/"/g,"&quot;");
};Document.implement({newElement:function(e,h){if(h&&h.checked!=null){h.defaultChecked=h.checked;}if(f&&h){e="<"+e;if(h.name){e+=' name="'+d(h.name)+'"';
}if(h.type){e+=' type="'+d(h.type)+'"';}e+=">";delete h.name;delete h.type;}return this.id(this.createElement(e)).set(h);}});})();Document.implement({newTextNode:function(a){return this.createTextNode(a);
},getDocument:function(){return this;},getWindow:function(){return this.window;},id:(function(){var a={string:function(d,c,b){d=Slick.find(b,"#"+d.replace(/(\W)/g,"\\$1"));
return(d)?a.element(d,c):null;},element:function(b,c){$uid(b);if(!c&&!b.$family&&!(/^(?:object|embed)$/i).test(b.tagName)){Object.append(b,Element.Prototype);
}return b;},object:function(c,d,b){if(c.toElement){return a.element(c.toElement(b),d);}return null;}};a.textnode=a.whitespace=a.window=a.document=function(b){return b;
};return function(c,e,d){if(c&&c.$family&&c.uid){return c;}var b=typeOf(c);return(a[b])?a[b](c,e,d||document):null;};})()});if(window.$==null){Window.implement("$",function(a,b){return document.id(a,b,this.document);
});}Window.implement({getDocument:function(){return this.document;},getWindow:function(){return this;}});[Document,Element].invoke("implement",{getElements:function(a){return Slick.search(this,a,new Elements);
},getElement:function(a){return document.id(Slick.find(this,a));}});if(window.$$==null){Window.implement("$$",function(a){if(arguments.length==1){if(typeof a=="string"){return Slick.search(this.document,a,new Elements);
}else{if(Type.isEnumerable(a)){return new Elements(a);}}}return new Elements(arguments);});}(function(){var k={},i={};var n={input:"checked",option:"selected",textarea:"value"};
var e=function(p){return(i[p]||(i[p]={}));};var j=function(q){var p=q.uid;if(q.removeEvents){q.removeEvents();}if(q.clearAttributes){q.clearAttributes();
}if(p!=null){delete k[p];delete i[p];}return q;};var o=["defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","maxLength","readOnly","rowSpan","tabIndex","useMap"];
var d=["compact","nowrap","ismap","declare","noshade","checked","disabled","readOnly","multiple","selected","noresize","defer","defaultChecked"];var g={html:"innerHTML","class":"className","for":"htmlFor",text:(function(){var p=document.createElement("div");
return(p.textContent==null)?"innerText":"textContent";})()};var m=["type"];var h=["value","defaultValue"];var l=/^(?:href|src|usemap)$/i;d=d.associate(d);
o=o.associate(o.map(String.toLowerCase));m=m.associate(m);Object.append(g,h.associate(h));var c={before:function(q,p){var r=p.parentNode;if(r){r.insertBefore(q,p);
}},after:function(q,p){var r=p.parentNode;if(r){r.insertBefore(q,p.nextSibling);}},bottom:function(q,p){p.appendChild(q);},top:function(q,p){p.insertBefore(q,p.firstChild);
}};c.inside=c.bottom;var b=function(s,r){if(!s){return r;}s=Object.clone(Slick.parse(s));var q=s.expressions;for(var p=q.length;p--;){q[p][0].combinator=r;
}return s;};Element.implement({set:function(r,q){var p=Element.Properties[r];(p&&p.set)?p.set.call(this,q):this.setProperty(r,q);}.overloadSetter(),get:function(q){var p=Element.Properties[q];
return(p&&p.get)?p.get.apply(this):this.getProperty(q);}.overloadGetter(),erase:function(q){var p=Element.Properties[q];(p&&p.erase)?p.erase.apply(this):this.removeProperty(q);
return this;},setProperty:function(q,r){q=o[q]||q;if(r==null){return this.removeProperty(q);}var p=g[q];(p)?this[p]=r:(d[q])?this[q]=!!r:this.setAttribute(q,""+r);
return this;},setProperties:function(p){for(var q in p){this.setProperty(q,p[q]);}return this;},getProperty:function(q){q=o[q]||q;var p=g[q]||m[q];return(p)?this[p]:(d[q])?!!this[q]:(l.test(q)?this.getAttribute(q,2):(p=this.getAttributeNode(q))?p.nodeValue:null)||null;
},getProperties:function(){var p=Array.from(arguments);return p.map(this.getProperty,this).associate(p);},removeProperty:function(q){q=o[q]||q;var p=g[q];
(p)?this[p]="":(d[q])?this[q]=false:this.removeAttribute(q);return this;},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this;
},hasClass:function(p){return this.className.clean().contains(p," ");},addClass:function(p){if(!this.hasClass(p)){this.className=(this.className+" "+p).clean();
}return this;},removeClass:function(p){this.className=this.className.replace(new RegExp("(^|\\s)"+p+"(?:\\s|$)"),"$1");return this;},toggleClass:function(p,q){if(q==null){q=!this.hasClass(p);
}return(q)?this.addClass(p):this.removeClass(p);},adopt:function(){var s=this,p,u=Array.flatten(arguments),t=u.length;if(t>1){s=p=document.createDocumentFragment();
}for(var r=0;r<t;r++){var q=document.id(u[r],true);if(q){s.appendChild(q);}}if(p){this.appendChild(p);}return this;},appendText:function(q,p){return this.grab(this.getDocument().newTextNode(q),p);
},grab:function(q,p){c[p||"bottom"](document.id(q,true),this);return this;},inject:function(q,p){c[p||"bottom"](this,document.id(q,true));return this;},replaces:function(p){p=document.id(p,true);
p.parentNode.replaceChild(this,p);return this;},wraps:function(q,p){q=document.id(q,true);return this.replaces(q).grab(q,p);},getPrevious:function(p){return document.id(Slick.find(this,b(p,"!~")));
},getAllPrevious:function(p){return Slick.search(this,b(p,"!~"),new Elements);},getNext:function(p){return document.id(Slick.find(this,b(p,"~")));},getAllNext:function(p){return Slick.search(this,b(p,"~"),new Elements);
},getFirst:function(p){return document.id(Slick.search(this,b(p,">"))[0]);},getLast:function(p){return document.id(Slick.search(this,b(p,">")).getLast());
},getParent:function(p){return document.id(Slick.find(this,b(p,"!")));},getParents:function(p){return Slick.search(this,b(p,"!"),new Elements);},getSiblings:function(p){return Slick.search(this,b(p,"~~"),new Elements);
},getChildren:function(p){return Slick.search(this,b(p,">"),new Elements);},getWindow:function(){return this.ownerDocument.window;},getDocument:function(){return this.ownerDocument;
},getElementById:function(p){return document.id(Slick.find(this,"#"+(""+p).replace(/(\W)/g,"\\$1")));},getSelected:function(){this.selectedIndex;return new Elements(Array.from(this.options).filter(function(p){return p.selected;
}));},toQueryString:function(){var p=[];this.getElements("input, select, textarea").each(function(r){var q=r.type;if(!r.name||r.disabled||q=="submit"||q=="reset"||q=="file"||q=="image"){return;
}var s=(r.get("tag")=="select")?r.getSelected().map(function(t){return document.id(t).get("value");}):((q=="radio"||q=="checkbox")&&!r.checked)?null:r.get("value");
Array.from(s).each(function(t){if(typeof t!="undefined"){p.push(encodeURIComponent(r.name)+"="+encodeURIComponent(t));}});});return p.join("&");},destroy:function(){var p=j(this).getElementsByTagName("*");
Array.each(p,j);Element.dispose(this);return null;},empty:function(){Array.from(this.childNodes).each(Element.dispose);return this;},dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this;
},match:function(p){return !p||Slick.match(this,p);}});var a=function(t,s,q){if(!q){t.setAttributeNode(document.createAttribute("id"));}if(t.clearAttributes){t.clearAttributes();
t.mergeAttributes(s);t.removeAttribute("uid");if(t.options){var u=t.options,p=s.options;for(var r=u.length;r--;){u[r].selected=p[r].selected;}}}var v=n[s.tagName.toLowerCase()];
if(v&&s[v]){t[v]=s[v];}};Element.implement("clone",function(r,p){r=r!==false;var w=this.cloneNode(r),q;if(r){var s=w.getElementsByTagName("*"),u=this.getElementsByTagName("*");
for(q=s.length;q--;){a(s[q],u[q],p);}}a(w,this,p);if(Browser.ie){var t=w.getElementsByTagName("object"),v=this.getElementsByTagName("object");for(q=t.length;
q--;){t[q].outerHTML=v[q].outerHTML;}}return document.id(w);});var f={contains:function(p){return Slick.contains(this,p);}};if(!document.contains){Document.implement(f);
}if(!document.createElement("div").contains){Element.implement(f);}[Element,Window,Document].invoke("implement",{addListener:function(s,r){if(s=="unload"){var p=r,q=this;
r=function(){q.removeListener("unload",r);p();};}else{k[$uid(this)]=this;}if(this.addEventListener){this.addEventListener(s,r,!!arguments[2]);}else{this.attachEvent("on"+s,r);
}return this;},removeListener:function(q,p){if(this.removeEventListener){this.removeEventListener(q,p,!!arguments[2]);}else{this.detachEvent("on"+q,p);
}return this;},retrieve:function(q,p){var s=e($uid(this)),r=s[q];if(p!=null&&r==null){r=s[q]=p;}return r!=null?r:null;},store:function(q,p){var r=e($uid(this));
r[q]=p;return this;},eliminate:function(p){var q=e($uid(this));delete q[p];return this;}});if(window.attachEvent&&!window.addEventListener){window.addListener("unload",function(){Object.each(k,j);
if(window.CollectGarbage){CollectGarbage();}});}})();Element.Properties={};Element.Properties.style={set:function(a){this.style.cssText=a;},get:function(){return this.style.cssText;
},erase:function(){this.style.cssText="";}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase();}};(function(a){if(a!=null){Element.Properties.maxlength=Element.Properties.maxLength={get:function(){var b=this.getAttribute("maxLength");
return b==a?null:b;}};}})(document.createElement("input").getAttribute("maxLength"));Element.Properties.html=(function(){var c=Function.attempt(function(){var e=document.createElement("table");
e.innerHTML="<tr><td></td></tr>";});var d=document.createElement("div");var a={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};
a.thead=a.tfoot=a.tbody;var b={set:function(){var f=Array.flatten(arguments).join("");var g=(!c&&a[this.get("tag")]);if(g){var h=d;h.innerHTML=g[1]+f+g[2];
for(var e=g[0];e--;){h=h.firstChild;}this.empty().adopt(h.childNodes);}else{this.innerHTML=f;}}};b.erase=b.set;return b;})();(function(){Element.Properties.events={set:function(b){this.addEvents(b);
}};[Element,Window,Document].invoke("implement",{addEvent:function(f,h){var i=this.retrieve("events",{});if(!i[f]){i[f]={keys:[],values:[]};}if(i[f].keys.contains(h)){return this;
}i[f].keys.push(h);var g=f,b=Element.Events[f],d=h,j=this;if(b){if(b.onAdd){b.onAdd.call(this,h);}if(b.condition){d=function(k){if(b.condition.call(this,k)){return h.call(this,k);
}return true;};}g=b.base||g;}var e=function(){return h.call(j);};var c=Element.NativeEvents[g];if(c){if(c==2){e=function(k){k=new Event(k,j.getWindow());
if(d.call(j,k)===false){k.stop();}};}this.addListener(g,e,arguments[2]);}i[f].values.push(e);return this;},removeEvent:function(e,d){var c=this.retrieve("events");
if(!c||!c[e]){return this;}var h=c[e];var b=h.keys.indexOf(d);if(b==-1){return this;}var g=h.values[b];delete h.keys[b];delete h.values[b];var f=Element.Events[e];
if(f){if(f.onRemove){f.onRemove.call(this,d);}e=f.base||e;}return(Element.NativeEvents[e])?this.removeListener(e,g,arguments[2]):this;},addEvents:function(b){for(var c in b){this.addEvent(c,b[c]);
}return this;},removeEvents:function(b){var d;if(typeOf(b)=="object"){for(d in b){this.removeEvent(d,b[d]);}return this;}var c=this.retrieve("events");
if(!c){return this;}if(!b){for(d in c){this.removeEvents(d);}this.eliminate("events");}else{if(c[b]){c[b].keys.each(function(e){this.removeEvent(b,e);},this);
delete c[b];}}return this;},fireEvent:function(e,c,b){var d=this.retrieve("events");if(!d||!d[e]){return this;}c=Array.from(c);d[e].keys.each(function(f){if(b){f.delay(b,this,c);
}else{f.apply(this,c);}},this);return this;},cloneEvents:function(e,d){e=document.id(e);var c=e.retrieve("events");if(!c){return this;}if(!d){for(var b in c){this.cloneEvents(e,b);
}}else{if(c[d]){c[d].keys.each(function(f){this.addEvent(d,f);},this);}}return this;}});Element.NativeEvents={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,orientationchange:2,touchstart:2,touchmove:2,touchend:2,touchcancel:2,gesturestart:2,gesturechange:2,gestureend:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,load:2,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};
var a=function(b){var c=b.relatedTarget;if(c==null){return true;}if(!c){return false;}return(c!=this&&c.prefix!="xul"&&typeOf(this)!="document"&&!this.contains(c));
};Element.Events={mouseenter:{base:"mouseover",condition:a},mouseleave:{base:"mouseout",condition:a},mousewheel:{base:(Browser.firefox)?"DOMMouseScroll":"mousewheel"}};
})();(function(){var c=document.html;Element.Properties.styles={set:function(f){this.setStyles(f);}};var e=(c.style.opacity!=null);var d=/alpha\(opacity=([\d.]+)\)/i;
var b=function(g,f){if(!g.currentStyle||!g.currentStyle.hasLayout){g.style.zoom=1;}if(e){g.style.opacity=f;}else{f=(f*100).limit(0,100).round();f=(f==100)?"":"alpha(opacity="+f+")";
var h=g.style.filter||g.getComputedStyle("filter")||"";g.style.filter=d.test(h)?h.replace(d,f):h+f;}};Element.Properties.opacity={set:function(g){var f=this.style.visibility;
if(g==0&&f!="hidden"){this.style.visibility="hidden";}else{if(g!=0&&f!="visible"){this.style.visibility="visible";}}b(this,g);},get:(e)?function(){var f=this.style.opacity||this.getComputedStyle("opacity");
return(f=="")?1:f;}:function(){var f,g=(this.style.filter||this.getComputedStyle("filter"));if(g){f=g.match(d);}return(f==null||g==null)?1:(f[1]/100);}};
var a=(c.style.cssFloat==null)?"styleFloat":"cssFloat";Element.implement({getComputedStyle:function(h){if(this.currentStyle){return this.currentStyle[h.camelCase()];
}var g=Element.getDocument(this).defaultView,f=g?g.getComputedStyle(this,null):null;return(f)?f.getPropertyValue((h==a)?"float":h.hyphenate()):null;},setOpacity:function(f){b(this,f);
return this;},getOpacity:function(){return this.get("opacity");},setStyle:function(g,f){switch(g){case"opacity":return this.set("opacity",parseFloat(f));
case"float":g=a;}g=g.camelCase();if(typeOf(f)!="string"){var h=(Element.Styles[g]||"@").split(" ");f=Array.from(f).map(function(k,j){if(!h[j]){return"";
}return(typeOf(k)=="number")?h[j].replace("@",Math.round(k)):k;}).join(" ");}else{if(f==String(Number(f))){f=Math.round(f);}}this.style[g]=f;return this;
},getStyle:function(l){switch(l){case"opacity":return this.get("opacity");case"float":l=a;}l=l.camelCase();var f=this.style[l];if(!f||l=="zIndex"){f=[];
for(var k in Element.ShortStyles){if(l!=k){continue;}for(var j in Element.ShortStyles[k]){f.push(this.getStyle(j));}return f.join(" ");}f=this.getComputedStyle(l);
}if(f){f=String(f);var h=f.match(/rgba?\([\d\s,]+\)/);if(h){f=f.replace(h[0],h[0].rgbToHex());}}if(Browser.opera||(Browser.ie&&isNaN(parseFloat(f)))){if((/^(height|width)$/).test(l)){var g=(l=="width")?["left","right"]:["top","bottom"],i=0;
g.each(function(m){i+=this.getStyle("border-"+m+"-width").toInt()+this.getStyle("padding-"+m).toInt();},this);return this["offset"+l.capitalize()]-i+"px";
}if(Browser.opera&&String(f).indexOf("px")!=-1){return f;}if((/^border(.+)Width|margin|padding/).test(l)){return"0px";}}return f;},setStyles:function(g){for(var f in g){this.setStyle(f,g[f]);
}return this;},getStyles:function(){var f={};Array.flatten(arguments).each(function(g){f[g]=this.getStyle(g);},this);return f;}});Element.Styles={left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"};
Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};["Top","Right","Bottom","Left"].each(function(l){var k=Element.ShortStyles;
var g=Element.Styles;["margin","padding"].each(function(m){var n=m+l;k[m][n]=g[n]="@px";});var j="border"+l;k.border[j]=g[j]="@px @ rgb(@, @, @)";var i=j+"Width",f=j+"Style",h=j+"Color";
k[j]={};k.borderWidth[i]=k[j][i]=g[i]="@px";k.borderStyle[f]=k[j][f]=g[f]="@";k.borderColor[h]=k[j][h]=g[h]="rgb(@, @, @)";});})();(function(){var h=document.createElement("div"),e=document.createElement("div");
h.style.height="0";h.appendChild(e);var d=(e.offsetParent===h);h=e=null;var l=function(m){return k(m,"position")!="static"||a(m);};var i=function(m){return l(m)||(/^(?:table|td|th)$/i).test(m.tagName);
};Element.implement({scrollTo:function(m,n){if(a(this)){this.getWindow().scrollTo(m,n);}else{this.scrollLeft=m;this.scrollTop=n;}return this;},getSize:function(){if(a(this)){return this.getWindow().getSize();
}return{x:this.offsetWidth,y:this.offsetHeight};},getScrollSize:function(){if(a(this)){return this.getWindow().getScrollSize();}return{x:this.scrollWidth,y:this.scrollHeight};
},getScroll:function(){if(a(this)){return this.getWindow().getScroll();}return{x:this.scrollLeft,y:this.scrollTop};},getScrolls:function(){var n=this.parentNode,m={x:0,y:0};
while(n&&!a(n)){m.x+=n.scrollLeft;m.y+=n.scrollTop;n=n.parentNode;}return m;},getOffsetParent:d?function(){var m=this;if(a(m)||k(m,"position")=="fixed"){return null;
}var n=(k(m,"position")=="static")?i:l;while((m=m.parentNode)){if(n(m)){return m;}}return null;}:function(){var m=this;if(a(m)||k(m,"position")=="fixed"){return null;
}try{return m.offsetParent;}catch(n){}return null;},getOffsets:function(){if(this.getBoundingClientRect&&!Browser.Platform.ios){var r=this.getBoundingClientRect(),o=document.id(this.getDocument().documentElement),q=o.getScroll(),t=this.getScrolls(),s=(k(this,"position")=="fixed");
return{x:r.left.toInt()+t.x+((s)?0:q.x)-o.clientLeft,y:r.top.toInt()+t.y+((s)?0:q.y)-o.clientTop};}var n=this,m={x:0,y:0};if(a(this)){return m;}while(n&&!a(n)){m.x+=n.offsetLeft;
m.y+=n.offsetTop;if(Browser.firefox){if(!c(n)){m.x+=b(n);m.y+=g(n);}var p=n.parentNode;if(p&&k(p,"overflow")!="visible"){m.x+=b(p);m.y+=g(p);}}else{if(n!=this&&Browser.safari){m.x+=b(n);
m.y+=g(n);}}n=n.offsetParent;}if(Browser.firefox&&!c(this)){m.x-=b(this);m.y-=g(this);}return m;},getPosition:function(p){if(a(this)){return{x:0,y:0};}var q=this.getOffsets(),n=this.getScrolls();
var m={x:q.x-n.x,y:q.y-n.y};if(p&&(p=document.id(p))){var o=p.getPosition();return{x:m.x-o.x-b(p),y:m.y-o.y-g(p)};}return m;},getCoordinates:function(o){if(a(this)){return this.getWindow().getCoordinates();
}var m=this.getPosition(o),n=this.getSize();var p={left:m.x,top:m.y,width:n.x,height:n.y};p.right=p.left+p.width;p.bottom=p.top+p.height;return p;},computePosition:function(m){return{left:m.x-j(this,"margin-left"),top:m.y-j(this,"margin-top")};
},setPosition:function(m){return this.setStyles(this.computePosition(m));}});[Document,Window].invoke("implement",{getSize:function(){var m=f(this);return{x:m.clientWidth,y:m.clientHeight};
},getScroll:function(){var n=this.getWindow(),m=f(this);return{x:n.pageXOffset||m.scrollLeft,y:n.pageYOffset||m.scrollTop};},getScrollSize:function(){var o=f(this),n=this.getSize(),m=this.getDocument().body;
return{x:Math.max(o.scrollWidth,m.scrollWidth,n.x),y:Math.max(o.scrollHeight,m.scrollHeight,n.y)};},getPosition:function(){return{x:0,y:0};},getCoordinates:function(){var m=this.getSize();
return{top:0,left:0,bottom:m.y,right:m.x,height:m.y,width:m.x};}});var k=Element.getComputedStyle;function j(m,n){return k(m,n).toInt()||0;}function c(m){return k(m,"-moz-box-sizing")=="border-box";
}function g(m){return j(m,"border-top-width");}function b(m){return j(m,"border-left-width");}function a(m){return(/^(?:body|html)$/i).test(m.tagName);
}function f(m){var n=m.getDocument();return(!n.compatMode||n.compatMode=="CSS1Compat")?n.html:n.body;}})();Element.alias({position:"setPosition"});[Window,Document,Element].invoke("implement",{getHeight:function(){return this.getSize().y;
},getWidth:function(){return this.getSize().x;},getScrollTop:function(){return this.getScroll().y;},getScrollLeft:function(){return this.getScroll().x;
},getScrollHeight:function(){return this.getScrollSize().y;},getScrollWidth:function(){return this.getScrollSize().x;},getTop:function(){return this.getPosition().y;
},getLeft:function(){return this.getPosition().x;}});(function(){this.Chain=new Class({$chain:[],chain:function(){this.$chain.append(Array.flatten(arguments));
return this;},callChain:function(){return(this.$chain.length)?this.$chain.shift().apply(this,arguments):false;},clearChain:function(){this.$chain.empty();
return this;}});var a=function(b){return b.replace(/^on([A-Z])/,function(c,d){return d.toLowerCase();});};this.Events=new Class({$events:{},addEvent:function(d,c,b){d=a(d);
this.$events[d]=(this.$events[d]||[]).include(c);if(b){c.internal=true;}return this;},addEvents:function(b){for(var c in b){this.addEvent(c,b[c]);}return this;
},fireEvent:function(e,c,b){e=a(e);var d=this.$events[e];if(!d){return this;}c=Array.from(c);d.each(function(f){if(b){f.delay(b,this,c);}else{f.apply(this,c);
}},this);return this;},removeEvent:function(e,d){e=a(e);var c=this.$events[e];if(c&&!d.internal){var b=c.indexOf(d);if(b!=-1){delete c[b];}}return this;
},removeEvents:function(d){var e;if(typeOf(d)=="object"){for(e in d){this.removeEvent(e,d[e]);}return this;}if(d){d=a(d);}for(e in this.$events){if(d&&d!=e){continue;
}var c=this.$events[e];for(var b=c.length;b--;){if(b in c){this.removeEvent(e,c[b]);}}}return this;}});this.Options=new Class({setOptions:function(){var b=this.options=Object.merge.apply(null,[{},this.options].append(arguments));
if(this.addEvent){for(var c in b){if(typeOf(b[c])!="function"||!(/^on[A-Z]/).test(c)){continue;}this.addEvent(c,b[c]);delete b[c];}}return this;}});})();
(function(){var f=this.Fx=new Class({Implements:[Chain,Events,Options],options:{fps:60,unit:false,duration:500,frames:null,frameSkip:true,link:"ignore"},initialize:function(g){this.subject=this.subject||this;
this.setOptions(g);},getTransition:function(){return function(g){return -(Math.cos(Math.PI*g)-1)/2;};},step:function(g){if(this.options.frameSkip){var h=(this.time!=null)?(g-this.time):0,i=h/this.frameInterval;
this.time=g;this.frame+=i;}else{this.frame++;}if(this.frame<this.frames){var j=this.transition(this.frame/this.frames);this.set(this.compute(this.from,this.to,j));
}else{this.frame=this.frames;this.set(this.compute(this.from,this.to,1));this.stop();}},set:function(g){return g;},compute:function(i,h,g){return f.compute(i,h,g);
},check:function(){if(!this.isRunning()){return true;}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.pass(arguments,this));
return false;}return false;},start:function(k,j){if(!this.check(k,j)){return this;}this.from=k;this.to=j;this.frame=(this.options.frameSkip)?0:-1;this.time=null;
this.transition=this.getTransition();var i=this.options.frames,h=this.options.fps,g=this.options.duration;this.duration=f.Durations[g]||g.toInt();this.frameInterval=1000/h;
this.frames=i||Math.round(this.duration/this.frameInterval);this.fireEvent("start",this.subject);b.call(this,h);return this;},stop:function(){if(this.isRunning()){this.time=null;
d.call(this,this.options.fps);if(this.frames==this.frame){this.fireEvent("complete",this.subject);if(!this.callChain()){this.fireEvent("chainComplete",this.subject);
}}else{this.fireEvent("stop",this.subject);}}return this;},cancel:function(){if(this.isRunning()){this.time=null;d.call(this,this.options.fps);this.frame=this.frames;
this.fireEvent("cancel",this.subject).clearChain();}return this;},pause:function(){if(this.isRunning()){this.time=null;d.call(this,this.options.fps);}return this;
},resume:function(){if((this.frame<this.frames)&&!this.isRunning()){b.call(this,this.options.fps);}return this;},isRunning:function(){var g=e[this.options.fps];
return g&&g.contains(this);}});f.compute=function(i,h,g){return(h-i)*g+i;};f.Durations={"short":250,normal:500,"long":1000};var e={},c={};var a=function(){var h=Date.now();
for(var j=this.length;j--;){var g=this[j];if(g){g.step(h);}}};var b=function(h){var g=e[h]||(e[h]=[]);g.push(this);if(!c[h]){c[h]=a.periodical(Math.round(1000/h),g);
}};var d=function(h){var g=e[h];if(g){g.erase(this);if(!g.length&&c[h]){delete e[h];c[h]=clearInterval(c[h]);}}};})();Fx.CSS=new Class({Extends:Fx,prepare:function(c,d,b){b=Array.from(b);
if(b[1]==null){b[1]=b[0];b[0]=c.getStyle(d);}var a=b.map(this.parse);return{from:a[0],to:a[1]};},parse:function(a){a=Function.from(a)();a=(typeof a=="string")?a.split(" "):Array.from(a);
return a.map(function(c){c=String(c);var b=false;Object.each(Fx.CSS.Parsers,function(f,e){if(b){return;}var d=f.parse(c);if(d||d===0){b={value:d,parser:f};
}});b=b||{value:c,parser:Fx.CSS.Parsers.String};return b;});},compute:function(d,c,b){var a=[];(Math.min(d.length,c.length)).times(function(e){a.push({value:d[e].parser.compute(d[e].value,c[e].value,b),parser:d[e].parser});
});a.$family=Function.from("fx:css:value");return a;},serve:function(c,b){if(typeOf(c)!="fx:css:value"){c=this.parse(c);}var a=[];c.each(function(d){a=a.concat(d.parser.serve(d.value,b));
});return a;},render:function(a,d,c,b){a.setStyle(d,this.serve(c,b));},search:function(a){if(Fx.CSS.Cache[a]){return Fx.CSS.Cache[a];}var c={},b=new RegExp("^"+a.escapeRegExp()+"$");
Array.each(document.styleSheets,function(f,e){var d=f.href;if(d&&d.contains("://")&&!d.contains(document.domain)){return;}var g=f.rules||f.cssRules;Array.each(g,function(k,h){if(!k.style){return;
}var j=(k.selectorText)?k.selectorText.replace(/^\w+/,function(i){return i.toLowerCase();}):null;if(!j||!b.test(j)){return;}Object.each(Element.Styles,function(l,i){if(!k.style[i]||Element.ShortStyles[i]){return;
}l=String(k.style[i]);c[i]=((/^rgb/).test(l))?l.rgbToHex():l;});});});return Fx.CSS.Cache[a]=c;}});Fx.CSS.Cache={};Fx.CSS.Parsers={Color:{parse:function(a){if(a.match(/^#[0-9a-f]{3,6}$/i)){return a.hexToRgb(true);
}return((a=a.match(/(\d+),\s*(\d+),\s*(\d+)/)))?[a[1],a[2],a[3]]:false;},compute:function(c,b,a){return c.map(function(e,d){return Math.round(Fx.compute(c[d],b[d],a));
});},serve:function(a){return a.map(Number);}},Number:{parse:parseFloat,compute:Fx.compute,serve:function(b,a){return(a)?b+a:b;}},String:{parse:Function.from(false),compute:function(b,a){return a;
},serve:function(a){return a;}}};Fx.Tween=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a);},set:function(b,a){if(arguments.length==1){a=b;
b=this.property||this.options.property;}this.render(this.element,b,a,this.options.unit);return this;},start:function(c,e,d){if(!this.check(c,e,d)){return this;
}var b=Array.flatten(arguments);this.property=this.options.property||b.shift();var a=this.prepare(this.element,this.property,b);return this.parent(a.from,a.to);
}});Element.Properties.tween={set:function(a){this.get("tween").cancel().setOptions(a);return this;},get:function(){var a=this.retrieve("tween");if(!a){a=new Fx.Tween(this,{link:"cancel"});
this.store("tween",a);}return a;}};Element.implement({tween:function(a,c,b){this.get("tween").start(arguments);return this;},fade:function(c){var e=this.get("tween"),d="opacity",a;
c=[c,"toggle"].pick();switch(c){case"in":e.start(d,1);break;case"out":e.start(d,0);break;case"show":e.set(d,1);break;case"hide":e.set(d,0);break;case"toggle":var b=this.retrieve("fade:flag",this.get("opacity")==1);
e.start(d,(b)?0:1);this.store("fade:flag",!b);a=true;break;default:e.start(d,arguments);}if(!a){this.eliminate("fade:flag");}return this;},highlight:function(c,a){if(!a){a=this.retrieve("highlight:original",this.getStyle("background-color"));
a=(a=="transparent")?"#fff":a;}var b=this.get("tween");b.start("background-color",c||"#ffff88",a).chain(function(){this.setStyle("background-color",this.retrieve("highlight:original"));
b.callChain();}.bind(this));return this;}});Fx.Morph=new Class({Extends:Fx.CSS,initialize:function(b,a){this.element=this.subject=document.id(b);this.parent(a);
},set:function(a){if(typeof a=="string"){a=this.search(a);}for(var b in a){this.render(this.element,b,a[b],this.options.unit);}return this;},compute:function(e,d,c){var a={};
for(var b in e){a[b]=this.parent(e[b],d[b],c);}return a;},start:function(b){if(!this.check(b)){return this;}if(typeof b=="string"){b=this.search(b);}var e={},d={};
for(var c in b){var a=this.prepare(this.element,c,b[c]);e[c]=a.from;d[c]=a.to;}return this.parent(e,d);}});Element.Properties.morph={set:function(a){this.get("morph").cancel().setOptions(a);
return this;},get:function(){var a=this.retrieve("morph");if(!a){a=new Fx.Morph(this,{link:"cancel"});this.store("morph",a);}return a;}};Element.implement({morph:function(a){this.get("morph").start(a);
return this;}});Fx.implement({getTransition:function(){var a=this.options.transition||Fx.Transitions.Sine.easeInOut;if(typeof a=="string"){var b=a.split(":");
a=Fx.Transitions;a=a[b[0]]||a[b[0].capitalize()];if(b[1]){a=a["ease"+b[1].capitalize()+(b[2]?b[2].capitalize():"")];}}return a;}});Fx.Transition=function(c,b){b=Array.from(b);
var a=function(d){return c(d,b);};return Object.append(a,{easeIn:a,easeOut:function(d){return 1-c(1-d,b);},easeInOut:function(d){return(d<=0.5?c(2*d,b):(2-c(2*(1-d),b)))/2;
}});};Fx.Transitions={linear:function(a){return a;}};Fx.Transitions.extend=function(a){for(var b in a){Fx.Transitions[b]=new Fx.Transition(a[b]);}};Fx.Transitions.extend({Pow:function(b,a){return Math.pow(b,a&&a[0]||6);
},Expo:function(a){return Math.pow(2,8*(a-1));},Circ:function(a){return 1-Math.sin(Math.acos(a));},Sine:function(a){return 1-Math.cos(a*Math.PI/2);},Back:function(b,a){a=a&&a[0]||1.618;
return Math.pow(b,2)*((a+1)*b-a);},Bounce:function(f){var e;for(var d=0,c=1;1;d+=c,c/=2){if(f>=(7-4*d)/11){e=c*c-Math.pow((11-6*d-11*f)/4,2);break;}}return e;
},Elastic:function(b,a){return Math.pow(2,10*--b)*Math.cos(20*b*Math.PI*(a&&a[0]||1)/3);}});["Quad","Cubic","Quart","Quint"].each(function(b,a){Fx.Transitions[b]=new Fx.Transition(function(c){return Math.pow(c,a+2);
});});(function(i,k){var l,f,e=[],c,b,d=k.createElement("div");var g=function(){clearTimeout(b);if(l){return;}Browser.loaded=l=true;k.removeListener("DOMContentLoaded",g).removeListener("readystatechange",a);
k.fireEvent("domready");i.fireEvent("domready");};var a=function(){for(var m=e.length;m--;){if(e[m]()){g();return true;}}return false;};var j=function(){clearTimeout(b);
if(!a()){b=setTimeout(j,10);}};k.addListener("DOMContentLoaded",g);var h=function(){try{d.doScroll();return true;}catch(m){}return false;};if(d.doScroll&&!h()){e.push(h);
c=true;}if(k.readyState){e.push(function(){var m=k.readyState;return(m=="loaded"||m=="complete");});}if("onreadystatechange" in k){k.addListener("readystatechange",a);
}else{c=true;}if(c){j();}Element.Events.domready={onAdd:function(m){if(l){m.call(this);}}};Element.Events.load={base:"load",onAdd:function(m){if(f&&this==i){m.call(this);
}},condition:function(){if(this==i){g();delete Element.Events.load;}return true;}};i.addEvent("load",function(){f=true;});})(window,document);
/**
sprintf() for JavaScript 0.7-beta1
http://www.diveintojavascript.com/projects/javascript-sprintf

Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of sprintf() for JavaScript nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL Alexandru Marasteanu BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


Changelog:
2010.09.06 - 0.7-beta1
  - features: vsprintf, support for named placeholders
  - enhancements: format cache, reduced global namespace pollution

2010.05.22 - 0.6:
 - reverted to 0.4 and fixed the bug regarding the sign of the number 0
 Note:
 Thanks to Raphael Pigulla <raph (at] n3rd [dot) org> (http://www.n3rd.org/)
 who warned me about a bug in 0.5, I discovered that the last update was
 a regress. I appologize for that.

2010.05.09 - 0.5:
 - bug fix: 0 is now preceeded with a + sign
 - bug fix: the sign was not at the right position on padded results (Kamal Abdali)
 - switched from GPL to BSD license

2007.10.21 - 0.4:
 - unit test and patch (David Baird)

2007.09.17 - 0.3:
 - bug fix: no longer throws exception on empty paramenters (Hans Pufal)

2007.09.11 - 0.2:
 - feature: added argument swapping

2007.04.03 - 0.1:
 - initial release
**/

var sprintf = (function() {
	function get_type(variable) {
		return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	}
	function str_repeat(input, multiplier) {
		for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
		return output.join('');
	}

	var str_format = function() {
		if (!str_format.cache.hasOwnProperty(arguments[0])) {
			str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
		}
		return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
	};

	str_format.format = function(parse_tree, argv) {
		var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
		for (i = 0; i < tree_length; i++) {
			node_type = get_type(parse_tree[i]);
			if (node_type === 'string') {
				output.push(parse_tree[i]);
			}
			else if (node_type === 'array') {
				match = parse_tree[i]; // convenience purposes only
				if (match[2]) { // keyword argument
					arg = argv[cursor];
					for (k = 0; k < match[2].length; k++) {
						if (!arg.hasOwnProperty(match[2][k])) {
							throw(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
						}
						arg = arg[match[2][k]];
					}
				}
				else if (match[1]) { // positional argument (explicit)
					arg = argv[match[1]];
				}
				else { // positional argument (implicit)
					arg = argv[cursor++];
				}

				if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
					throw(sprintf('[sprintf] expecting number but found %s', get_type(arg)));
				}
				switch (match[8]) {
					case 'b': arg = arg.toString(2); break;
					case 'c': arg = String.fromCharCode(arg); break;
					case 'd': arg = parseInt(arg, 10); break;
					case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
					case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
					case 'o': arg = arg.toString(8); break;
					case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
					case 'u': arg = Math.abs(arg); break;
					case 'x': arg = arg.toString(16); break;
					case 'X': arg = arg.toString(16).toUpperCase(); break;
				}
				arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
				pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
				pad_length = match[6] - String(arg).length;
				pad = match[6] ? str_repeat(pad_character, pad_length) : '';
				output.push(match[5] ? arg + pad : pad + arg);
			}
		}
		return output.join('');
	};

	str_format.cache = {};

	str_format.parse = function(fmt) {
		var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
		while (_fmt) {
			if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
				parse_tree.push(match[0]);
			}
			else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
				parse_tree.push('%');
			}
			else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
				if (match[2]) {
					arg_names |= 1;
					var field_list = [], replacement_field = match[2], field_match = [];
					if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
						field_list.push(field_match[1]);
						while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
							if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else {
								throw('[sprintf] huh?');
							}
						}
					}
					else {
						throw('[sprintf] huh?');
					}
					match[2] = field_list;
				}
				else {
					arg_names |= 2;
				}
				if (arg_names === 3) {
					throw('[sprintf] mixing positional and named placeholders is not (yet) supported');
				}
				parse_tree.push(match);
			}
			else {
				throw('[sprintf] huh?');
			}
			_fmt = _fmt.substring(match[0].length);
		}
		return parse_tree;
	};

	return str_format;
})();

var vsprintf = function(fmt, argv) {
	argv.unshift(fmt);
	return sprintf.apply(null, argv);
};

//
//  BVTouchable.js
//  ExplorableExplanations
//
//  Created by Bret Victor on 3/10/11.
//  (c) 2011 Bret Victor.  MIT open-source license.
//

(function () {

var BVTouchable = this.BVTouchable = new Class ({

	initialize: function (el, delegate) {
		this.element = el;
		this.delegate = delegate;
		this.setTouchable(true);
	},
	
	//----------------------------------------------------------------------------------
	//
	//  touches
	//

	setTouchable: function (isTouchable) {
		if (this.touchable === isTouchable) { return; }
		this.touchable = isTouchable;
		this.element.style.pointerEvents = (this.touchable || this.hoverable) ? "auto" : "none";

		if (isTouchable) {
			if (!this._mouseBound) {
				this._mouseBound = {
					mouseDown: this._mouseDown.bind(this),
					mouseMove: this._mouseMove.bind(this),
					mouseUp: this._mouseUp.bind(this),
					touchStart: this._touchStart.bind(this),
					touchMove: this._touchMove.bind(this),
					touchEnd: this._touchEnd.bind(this),
					touchCancel: this._touchCancel.bind(this)
				};
			}
			this.element.addEvent("mousedown", this._mouseBound.mouseDown);
			this.element.addEvent("touchstart", this._mouseBound.touchStart);
		}
		else {
			this.element.removeEvents("mousedown");
			this.element.removeEvents("touchstart");
		}
	},
	
	touchDidGoDown: function (touches) { this.delegate.touchDidGoDown(touches); },
	touchDidMove: function (touches) { this.delegate.touchDidMove(touches);  },
	touchDidGoUp: function (touches) { this.delegate.touchDidGoUp(touches);  },

	
	_mouseDown: function (event) {
		event.stop();
		this.element.getDocument().addEvents({
			mousemove: this._mouseBound.mouseMove,
			mouseup: this._mouseBound.mouseUp
		});
	
		this.touches = new BVTouches(event);
		this.touchDidGoDown(this.touches);
	},

	_mouseMove: function (event) {
		event.stop();
		this.touches.updateWithEvent(event);
		this.touchDidMove(this.touches);
	},

	_mouseUp: function (event) {
		event.stop();
		this.touches.updateWithEvent(event);
		this.touches.count = 0;
		this.touchDidGoUp(this.touches);
		
		delete this.touches;
		this.element.getDocument().removeEvents({
			mousemove: this._mouseBound.mouseMove,
			mouseup: this._mouseBound.mouseUp
		});
	},

	_touchStart: function (event) {
		event.stop();
		if (this.touches || event.length > 1) { this._touchCancel(event); return; }  // only-single touch for now
		
		this.element.getDocument().addEvents({
			touchmove: this._mouseBound.touchMove,
			touchend: this._mouseBound.touchEnd,
			touchcancel: this._mouseBound.touchCancel
		});
	
		this.touches = new BVTouches(event);
		this.touchDidGoDown(this.touches);
	},
	
	_touchMove: function (event) {
		event.stop();
		if (!this.touches) { return; }

		this.touches.updateWithEvent(event);
		this.touchDidMove(this.touches);
	},
	
	_touchEnd: function (event) {
		event.stop();
		if (!this.touches) { return; }

		this.touches.count = 0;
		this.touchDidGoUp(this.touches);
		
		delete this.touches;
		this.element.getDocument().removeEvents({
			touchmove: this._mouseBound.touchMove,
			touchend: this._mouseBound.touchEnd,
			touchcancel: this._mouseBound.touchCancel
		});
	},
	
	_touchCancel: function (event) {
		this._touchEnd(event);
	}

});


//====================================================================================
//
//  BVTouches
//

var BVTouches = this.BVTouches = new Class({

	initialize: function (event) {
		this.globalPoint = { x:event.page.x, y:-event.page.y };
		this.translation = { x:0, y:0 };
		this.deltaTranslation = { x:0, y:0 };
		this.count = 1;
		this.event = event;
	},
	
	updateWithEvent: function (event) {
		var dx = event.page.x - this.globalPoint.x;  // todo, transform to local coordinate space?
		var dy = -event.page.y - this.globalPoint.y;
		this.translation.x += dx;
		this.translation.y += dy;
		this.deltaTranslation.x += dx;
		this.deltaTranslation.y += dy;
		this.globalPoint.x = event.page.x;
		this.globalPoint.y = -event.page.y;
		this.event = event;
	},
	
	resetDeltaTranslation: function () {
		this.deltaTranslation.x = 0;
		this.deltaTranslation.y = 0;
	}

});


//====================================================================================

})();

//
//  TangleKit.js
//  Tangle 0.1.0
//
//  Created by Bret Victor on 6/10/11.
//  (c) 2011 Bret Victor.  MIT open-source license.
//


(function () {


//----------------------------------------------------------
//
//  TKIf
//
//  Shows the element if value is true (non-zero), hides if false.
//
//  Attributes:  data-invert (optional):  show if false instead.

Tangle.classes.TKIf = {
    
    initialize: function (element, options, tangle, variable) {
        this.isInverted = !!options.invert;
    },
    
    update: function (element, value) {
        if (this.isInverted) { value = !value; }
        element.style.display = !value ? "none" : "inline";   // todo, block or inline?
    }
};


//----------------------------------------------------------
//
//  TKSwitch
//
//  Shows the element's nth child if value is n.
//
//  False or true values will show the first or second child respectively.

Tangle.classes.TKSwitch = {

    update: function (element, value) {
        element.getChildren().each( function (child, index) {
            child.style.display = (index != value) ? "none" : "inline";
        });
    }
};


//----------------------------------------------------------
//
//  TKSwitchPositiveNegative
//
//  Shows the element's first child if value is positive or zero.
//  Shows the element's second child if value is negative.

Tangle.classes.TKSwitchPositiveNegative = {

    update: function (element, value) {
        Tangle.classes.TKSwitch.update(element, value < 0);
    }
};


//----------------------------------------------------------
//
//  TKToggle
//
//  Click to toggle value between 0 and 1.

Tangle.classes.TKToggle = {

    initialize: function (element, options, tangle, variable) {
        element.addEvent("click", function (event) {
            var isActive = tangle.getValue(variable);
            tangle.setValue(variable, isActive ? 0 : 1);
        });
    }
};


//----------------------------------------------------------
//
//  TKNumberField
//
//  An input box where a number can be typed in.
//
//  Attributes:  data-size (optional): width of the box in characters

Tangle.classes.TKNumberField = {

    initialize: function (element, options, tangle, variable) {
        this.input = new Element("input", {
    		type: "text",
    		"class":"TKNumberFieldInput",
    		size: options.size || 6
        }).inject(element, "top");
        
        var inputChanged = (function () {
            var value = this.getValue();
            tangle.setValue(variable, value);
        }).bind(this);
        
        this.input.addEvent("keyup",  inputChanged);
        this.input.addEvent("blur",   inputChanged);
        this.input.addEvent("change", inputChanged);
	},
	
	getValue: function () {
        var value = parseFloat(this.input.get("value"));
        return isNaN(value) ? 0 : value;
	},
	
	update: function (element, value) {
	    var currentValue = this.getValue();
	    if (value !== currentValue) { this.input.set("value", "" + value); }
	}
};


//----------------------------------------------------------
//
//  TKAdjustableNumber
//
//  Drag a number to adjust.
//
//  Attributes:  data-min (optional): minimum value
//               data-max (optional): maximum value
//               data-step (optional): granularity of adjustment (can be fractional)

var isAnyAdjustableNumberDragging = false;  // hack for dragging one value over another one

Tangle.classes.TKAdjustableNumber = {

    initialize: function (element, options, tangle, variable) {
        this.element = element;
        this.tangle = tangle;
        this.variable = variable;

        this.min = (options.min !== undefined) ? parseFloat(options.min) : 1;
        this.max = (options.max !== undefined) ? parseFloat(options.max) : 10;
        this.step = (options.step !== undefined) ? parseFloat(options.step) : 1;
        
        this.initializeHover();
        this.initializeHelp();
        this.initializeDrag();
    },


    // hover
    
    initializeHover: function () {
        this.isHovering = false;
        this.element.addEvent("mouseenter", (function () { this.isHovering = true;  this.updateRolloverEffects(); }).bind(this));
        this.element.addEvent("mouseleave", (function () { this.isHovering = false; this.updateRolloverEffects(); }).bind(this));
    },
    
    updateRolloverEffects: function () {
        this.updateStyle();
        this.updateCursor();
        this.updateHelp();
    },
    
    isActive: function () {
        return this.isDragging || (this.isHovering && !isAnyAdjustableNumberDragging);
    },

    updateStyle: function () {
        if (this.isDragging) { this.element.addClass("TKAdjustableNumberDown"); }
        else { this.element.removeClass("TKAdjustableNumberDown"); }
        
        if (!this.isDragging && this.isActive()) { this.element.addClass("TKAdjustableNumberHover"); }
        else { this.element.removeClass("TKAdjustableNumberHover"); }
    },

    updateCursor: function () {
        var body = document.getElement("body");
        if (this.isActive()) { body.addClass("TKCursorDragHorizontal"); }
        else { body.removeClass("TKCursorDragHorizontal"); }
    },


    // help

    initializeHelp: function () {
        this.helpElement = (new Element("div", { "class": "TKAdjustableNumberHelp" })).inject(this.element, "top");
        this.helpElement.setStyle("display", "none");
        this.helpElement.set("text", "drag");
    },
    
    updateHelp: function () {
        var size = this.element.getSize();
        var top = -size.y + 7;
        var left = Math.round(0.5 * (size.x - 20));
        var display = (this.isHovering && !isAnyAdjustableNumberDragging) ? "block" : "none";
        this.helpElement.setStyles({ left:left, top:top, display:display });
    },


    // drag
    
    initializeDrag: function () {
        this.isDragging = false;
        new BVTouchable(this.element, this);
    },
    
    touchDidGoDown: function (touches) {
        this.valueAtMouseDown = this.tangle.getValue(this.variable);
        this.isDragging = true;
        isAnyAdjustableNumberDragging = true;
        this.updateRolloverEffects();
        this.updateStyle();
    },
    
    touchDidMove: function (touches) {
        var value = this.valueAtMouseDown + touches.translation.x / 5 * this.step;
        value = ((value / this.step).round() * this.step).limit(this.min, this.max);
        this.tangle.setValue(this.variable, value);
        this.updateHelp();
    },
    
    touchDidGoUp: function (touches) {
        this.helpElement.setStyle("display", "none");
        this.isDragging = false;
        isAnyAdjustableNumberDragging = false;
        this.updateRolloverEffects();
        this.updateStyle();
    }
};




//----------------------------------------------------------
//
//  formats
//
//  Most of these are left over from older versions of Tangle,
//  before parameters and printf were available.  They should
//  be redesigned.
//

function formatValueWithPrecision (value,precision) {
    if (Math.abs(value) >= 100) { precision--; }
    if (Math.abs(value) >= 10) { precision--; }
    return "" + value.round(Math.max(precision,0));
}

Tangle.formats.p3 = function (value) {
    return formatValueWithPrecision(value,3);
};

Tangle.formats.neg_p3 = function (value) {
    return formatValueWithPrecision(-value,3);
};

Tangle.formats.p2 = function (value) {
    return formatValueWithPrecision(value,2);
};

Tangle.formats.e6 = function (value) {
    return "" + (value * 1e-6).round();
};

Tangle.formats.abs_e6 = function (value) {
    return "" + (Math.abs(value) * 1e-6).round();
};

Tangle.formats.freq = function (value) {
    if (value < 100) { return "" + value.round(1) + " Hz"; }
    if (value < 1000) { return "" + value.round(0) + " Hz"; }
    return "" + (value / 1000).round(2) + " KHz"; 
};

Tangle.formats.dollars = function (value) {
    return "$" + value.round(0);
};

Tangle.formats.free = function (value) {
    return value ? ("$" + value.round(0)) : "free";
};

Tangle.formats.percent = function (value) {
    return "" + (100 * value).round(0) + "%";
};


    
//----------------------------------------------------------

})();


var putThousandsSeparators = function(value, sep) {
  if (sep == null) {
    sep = ',';
  }
  value = parseInt(value);
  // check if it needs formatting
  if (value.toString() === value.toLocaleString()) {
    // split decimals
    var parts = value.toString().split('.')
    // format whole numbers
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    // put them back together
    value = parts[1] ? parts.join('.') : parts[0];
  } else {
    value = value.toLocaleString();
  }
  return value;
};


Tangle.classes.FIAdjustableNumber = {
  initialize: function (element, options, tangle, variable) {
    this.element = element;
    this.tangle = tangle;
    this.variable = variable;

    this.min = (options.min !== undefined) ? parseFloat(options.min) : 0;
    this.max = (options.max !== undefined) ? parseFloat(options.max) : 1e100;
    this.step = (options.step !== undefined) ? parseFloat(options.step) : 1;

    this.initializeHover();
    this.initializeDrag();
    this.initializeSlider();
    this.initializeSliderFill();
  },

  // hover
  initializeHover: function () {
    this.isHovering = false;
    this.element.addEvent("mouseenter", (function () {
      this.isHovering = true;
      this.updateRolloverEffects();
    }).bind(this));
    this.element.addEvent("mouseleave", (function () {
      this.isHovering = false;
      this.updateRolloverEffects();
    }).bind(this));
  },

  updateRolloverEffects: function () {
    this.updateStyle();
    this.updateCursor();
    this.updateSlider();
  },

  isActive: function () {
    return this.isDragging || (this.isHovering && !this.isAnyAdjustableNumberDragging);
  },

  updateStyle: function () {
    if (this.isDragging) { this.element.addClass("FIAdjustableNumberDown"); }
    else { this.element.removeClass("FIAdjustableNumberDown"); }

    if (!this.isDragging && this.isActive()) { this.element.addClass("FIAdjustableNumberHover"); }
    else { this.element.removeClass("FIAdjustableNumberHover"); }
  },

  updateCursor: function () {
    var body = document.getElement("body");
    if (this.isActive()) { body.addClass("FICursorDragHorizontal"); }
    else { body.removeClass("FICursorDragHorizontal"); }
  },

  // Slider
  initializeSlider: function() {
    this.slider = (new Element("div", { "class": "FIAdjustableNumberSlider" })).inject(this.element, "top");
    this.slider.setStyle("display", "none");
  },
  initializeSliderFill: function() {
    this.sliderFill = (new Element("div", { "class": "FIAdjustableNumberSliderFill" })).inject(this.slider);
  },

  updateSlider: function() {
    var display = (this.isActive()) ? "block" : "none";
		this.slider.setStyle("display", display);

    var value = this.tangle.getValue(this.variable) - this.min;
    var diff = this.max - this.min;
    var percent = (value/diff);
    this.sliderFill.setStyle("width", (134 * percent).round());
	},


  // drag

  initializeDrag: function () {
    this.isDragging = false;
    new BVTouchable(this.element, this);
  },

  touchDidGoDown: function (touches) {
    this.valueAtMouseDown = this.tangle.getValue(this.variable);
    this.isDragging = true;
    this.isAnyAdjustableNumberDragging = true;
    this.updateRolloverEffects();
    this.updateStyle();
  },

  touchDidMove: function (touches) {
    var value = this.valueAtMouseDown + touches.translation.x / 5 * this.step;
    value = ((value / this.step).round() * this.step).limit(this.min, this.max);
    this.tangle.setValue(this.variable, value);
    this.updateSlider();
  },

  touchDidGoUp: function (touches) {
    this.isDragging = false;
    this.isAnyAdjustableNumberDragging = false;
    this.updateRolloverEffects();
    this.updateStyle();
    this.slider.setStyle("display", touches.wasTap ? "block" : "none");
  }
};
Tangle.formats.currency = function(value) {
  return "$" + putThousandsSeparators(value);
};

Tangle.formats.integer = function(value) {
  return parseInt(value);
};
Tangle.formats.yearsOnly = function(value) {
  if(value === 0) {
    return "0 years";
  }

  var years = Math.floor(value);
  var result = "";
  result = years + " year";
  if(years !== 1) { result = result + "s"; }

  return result;
}

Tangle.formats.years = function(value) {
  if(value === 0) {
    return "0 years";
  }

  var years = Math.floor(value),
      months = value - years;
  var monthsNumber = Math.floor((months*100) / ((1/12)*100));
  var result = "";

  // damn you language
  if(years > 0) {
    result = years + " year";
    if(years !== 1) { result = result + "s"; }
  }
  if(monthsNumber > 0) {
    if(years > 0) { result = result + " "; }
    result = result + monthsNumber + " month";
    if(months !== 1) { result = result + "s"; }
  }

  return result;
}

Tangle.formats.date = function (date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
};

Tangle.formats.percentDecimal = function (value) {
  return "" + (100 * value).round(1) + "%";
};

Tangle.classes.MultiToggle = {
  initialize: function (element, options, tangle, variable) {
    // this.element = element;

    element.addEvent("click", function (event) {
      var nextVal = tangle.getValue(variable) + 1;
      if(nextVal >= this.children.length) { nextVal = 0; }
      tangle.setValue(variable, nextVal);
    });

    // initiali hover
    // this.initializeHover();
    // this.initializeHelp();
  }
  // ,
  //
  // initializeHover: function () {
  //   this.isHovering = false;
  //   this.element.addEvent("mouseenter", (function () {
  //     this.isHovering = true;
  //     this.updateHelp();
  //   }).bind(this));
  //   this.element.addEvent("mouseleave", (function () {
  //     this.isHovering = false;
  //     this.updateHelp();
  //   }).bind(this));
  // },
  //
  // initializeHelp: function () {
  //   this.helpElement = (new Element("div", { "class": "TKAdjustableNumberHelp" })).inject(this.element, "top");
  //   this.helpElement.setStyle("display", "none");
  //   this.helpElement.set("text", "click");
  // },
  // updateHelp: function () {
  //   var size = this.element.getSize();
  //   var top = -size.y + 20;
  //   var left = Math.round(0.5 * (size.x - 20));
  //   var display = (this.isHovering) ? "block" : "none";
  //   this.helpElement.setStyles({ left:left, top:top, display:display });
  // }
};

Tangle.classes.BlockSwitch = {
  update: function (element, value) {
    element.getChildren().each(function (child, index) {
      child.style.display = (index != value) ? "none" : "block";
    });
  }
};

$(function() {
  var element = document.getElementById("fi--wrapper");

  var defaults = {
    exampleClick: 0,
    storeCookies: true,
    yearlyIncome: 50000,
    yearlySavings: 10000,
    phase: 1,
    age: 30,
    gender: 0,
    networth: 5000,
    yearlySpending: 40000,
    retirementSpendingPercent: 0.8,
    marketGrowth: 0.07,
    wr: 0.04,
    spendingReductionPercent: 0.10,
    eirIncomePercent: 0.10,
    monthlyIncome: 0,
    retirementMonthlyIncome: 0,
    payIncreasePercent: 0.02,
    inflationRate: 0.03,
    goalReAge: 50
  };

  var tangle = new Tangle(element, {
    initialize: function () {
      if(this.cookie()['storeCookies']) {
        this.loadCookies();
      } else {
        this.reset();
      }
    },
    update: function () {
      // Savings Rate Calculator
      this.savingsRate = this.yearlySavings / this.yearlyIncome;

      this.impliedYearlySpending = this.yearlyIncome - this.yearlySavings;
      this.impliedRetirementStashNeeded = this.calcStash(this.impliedYearlySpending);
      this.yearsUntilFiOnlySR = this.calcTimeUntilFi(this.yearlySavings, this.impliedRetirementStashNeeded, 0, this.marketGrowth)


      // Let's Talk More About You
      this.retirementYearlySpending = this.yearlySpending * this.retirementSpendingPercent;

      this.fiStash = this.calcStash(this.retirementYearlySpending);

      this.missingRetirementIncome = this.fiStash - this.networth;
      if(this.missingRetirementIncome < 0) {
        this.missingRetirementIncome = 0;
      }
      this.yearsUntilFi = this.calcTimeUntilFi(this.yearlySavings, this.fiStash, this.networth, this.marketGrowth) || 0;


      this.fiPhase = this.calcFiPhase();
      this.fiAge = this.age + this.yearsUntilFi;

      // Reducing Spending
      this.impliedSpendingReductionYearlySavings = this.yearlySpending * this.spendingReductionPercent;
      this.impliedSpendingReductionYearlySavingsTotal = this.impliedSpendingReductionYearlySavings + this.yearlySavings;
      this.impliedSpendingReductionYearlySpending = this.retirementYearlySpending - this.impliedSpendingReductionYearlySavings;
      this.spendingReductionStash = this.calcStash(this.impliedSpendingReductionYearlySpending);
      this.spendingReductionYearsUntilFi = this.calcTimeUntilFi(this.impliedSpendingReductionYearlySavingsTotal, this.spendingReductionStash, this.networth, this.marketGrowth);




      this.spendingReductionYearsEarlier = this.yearsUntilFi - this.spendingReductionYearsUntilFi;
      this.spendingReductionStashDifference = this.fiStash - this.spendingReductionStash;



      // Part 2: How is this enough?
      this.yearsOfFiNoInvestment = this.fiStash / this.retirementYearlySpending;
      this.fiTotalSpending = this.calcFiSpending();
      this.investmentYearsDifference = (this.fiTotalSpending - this.fiStash) / this.retirementYearlySpending


      this.earnInRetirement();
      // this.yearlySpending = this.yearlyIncome - this.newSavings;
        // this.ffr = ( this.savings / this.yearlySpending);
        // this.swr = 1 / ( this.savings / this.yearlySpending);
        // this.swrDollars = this.savings * this.gloablSWR;

        // this.retirementSavingsNeeded = this.retirementYearlySpending * this.gloablSWR;
      this.earningsIncrease();
      this.allReductionsSooner();

      // Inflation
      this.neededMarketRate = this.inflationRate + this.wr;
      this.retirementYearlySpendingWithInflation = this.calcCompoundInterest(this.inflationRate, this.retirementYearlySpending, this.yearsUntilFi);
      this.retirementYear = this.yearsUntilFi + (new Date()).getFullYear();

      if(this.savingsRate > 0) {
        setTimeout(function() {
          highlightSr(this.savingsRate, this.marketGrowth, this.wr);
          window.fiGraph.update(this.resultState());
        }.bind(this), 50);
      }
      if(this.storeCookies) {
        this.saveCookies();
        this.updateFirebase();
      } else {
        this.clearCookies();
        this.deleteFirebase();
      }
    },

    // eir
    earnInRetirement: function() {
      this.eirIncomeAfterRetirement = this.eirIncomePercent * this.retirementYearlySpending;
      this.earnInRetirementStashNeeded = this.calcStash(this.retirementYearlySpending - this.eirIncomeAfterRetirement);

      this.eirTimeUntilFi = this.calcTimeUntilFi(this.yearlySavings, this.earnInRetirementStashNeeded, this.networth, this.marketGrowth)
      this.eirTimeSooner = this.yearsUntilFi - this.eirTimeUntilFi;
    },

    // Earnings increase ~2% a year and you save it
    earningsIncrease: function() {
      this.payIncreaseTimeUntilFi = this.calcTimeUntilFi(this.yearlySavings, this.fiStash, this.networth, this.marketGrowth+this.payIncreasePercent);
      this.payIncreaseSooner = this.yearsUntilFi - this.payIncreaseTimeUntilFi;
    },

    allReductionsSooner: function() {
      var combinedStashNeeded = this.calcStash(this.retirementYearlySpending - this.eirIncomeAfterRetirement - this.impliedSpendingReductionYearlySavings);
      this.allSoonerYears = this.calcTimeUntilFi(this.impliedSpendingReductionYearlySavingsTotal, combinedStashNeeded, this.networth, this.marketGrowth);
      this.allSoonerYearsEarly = this.yearsUntilFi - this.allSoonerYears;
      this.allSoonerPercent = this.allSoonerYearsEarly / this.yearsUntilFi;
    },


    // General Functions
    // From http://www.ultimatecalculators.com/future_value_savings_calculator.html
    calcTimeUntilFi: function(yearlySavings, stash, networth, marketGrowth) {
      var fv = yearlySavings + (stash * marketGrowth);
      var pv = yearlySavings + (networth * marketGrowth);

      var j = Math.log(fv/pv);
      var d = Math.log(1+marketGrowth);

      if(j < 0) { return 0; }
      return j/d;
    },
    calcStash: function(spending) {
      return spending * (100/(this.wr*100))
    },
    calcFiSpending: function() {
      var stash = this.fiStash,
          spending = 0,
          yearlySpending = this.retirementYearlySpending,
          growthRate = this.marketGrowth;

      if(this.fiAge > 100) { return 0; }

      for(var i=0; i<(100-this.fiAge); i++) {
        spending += yearlySpending;
        stash = stash + (stash * growthRate) - yearlySpending;
        yearlySpending = yearlySpending + (yearlySpending * 0.03);
        if(stash < 0) { break; }
      }

      return spending;
    },

    calcCompoundInterest: function(rate, amount, years) {
      var finance = new Finance();
      return finance.FV(rate*100, amount, years);
    },

    calcFiPhase: function() {
      var calcYearsUntilFi = this.goalReAge - this.age,
          diff = this.yearsUntilFi - calcYearsUntilFi;

      if(diff <= -1) {
        return 0;
      } else if(diff > -1 && diff < 1) {
        return 1;
      } else if(diff >= 1) {
        return 2;
      }
    },


    // Cookies related
    allSaveableValues: function() {
      return [
        'exampleClick',
        'storeCookies',
        'yearlyIncome',
        'yearlySavings',
        'phase',
        'age',
        'networth',
        'yearlySpending',
        'retirementSpendingPercent',
        'marketGrowth',
        'wr',
        'spendingReductionPercent',
        'eirIncomePercent',
        'monthlyIncome',
        'retirementMonthlyIncome',
        'payIncreasePercent',
        'inflationRate',
        'gender',
        'goalReAge'
      ];
    },
    state: function() {
      var s = {};
      this.allSaveableValues().forEach(function(v) {
        s[v] = this[v];
      }.bind(this));
      s['createdAt'] = s['createdAt'] || new Date();
      s['updatedAt'] = new Date();

      // Move over default properties
      // This is for when new properties are added
      for(var key in defaults) {
        s[key] = s[key] || defaults[key];
      }

      return s;
    },
    reset: function() {
      this.allSaveableValues().forEach(function(v) {
        this[v] = defaults[v];
      }.bind(this));
      return true;
    },
    cookie: function() {
      try {
        var stateJson = Cookies.get("fi-post");
        return JSON.parse(stateJson);
      } catch(e) {
        return {};
      }
    },
    loadCookies: function() {
      try {
        var cookieState = this.cookie();
        for(var property in cookieState) {
          this[property] = cookieState[property];
        }
      } catch(e) {
        this.reset();
      }
    },
    saveCookies: function() {
        var cookie = JSON.stringify(this.state());
      Cookies.set("fi-post", cookie);
    },
    clearCookies: function() {
      Cookies.remove("fi-post");
    },

    env: function() {
      return (window.location.origin.indexOf("minafi") !== -1) ? "production" : "development";
    },
    calculatedValues: function() {
      return [
        'savingsRate',
        'impliedYearlySpending',
        'impliedRetirementStashNeeded',
        'yearsUntilFiOnlySR',
        'retirementYearlySpending',
        'fiStash',
        'missingRetirementIncome',
        'yearsUntilFi',
        'fiPhase',
        'fiAge',
        'impliedSpendingReductionYearlySavings',
        'impliedSpendingReductionYearlySavingsTotal',
        'impliedSpendingReductionYearlySpending',
        'spendingReductionStash',
        'spendingReductionYearsUntilFi',
        'spendingReductionYearsEarlier',
        'spendingReductionStashDifference',
        'yearsOfFiNoInvestment',
        'fiTotalSpending',
        'investmentYearsDifference',
        'neededMarketRate',
        'retirementYearlySpendingWithInflation',
        'retirementYear',
        'eirIncomeAfterRetirement',
        'earnInRetirementStashNeeded',
        'eirTimeUntilFi',
        'eirTimeSooner',
        'payIncreaseTimeUntilFi',
        'payIncreaseSooner',
        'allSoonerYears',
        'allSoonerYearsEarly',
        'allSoonerPercent'
      ];
    },
    resultState: function() {
      var s = this.state();
      this.calculatedValues().forEach(function(key) {
        if(typeof(this[key]) !== undefined) {
          s[key] = this[key];
        }
      }.bind(this));
      return s;
    },
    // Number of values they changed
    changedValues: function(result) {
      var changedItems = []
      this.allSaveableValues().forEach(function(key) {
        if((key !== "uid") && (this[key] != defaults[key])) {
          changedItems.push(key);
        }
      }.bind(this));

      return changedItems;
    },
    updateFirebase: function() {
      if(!window.user) { return false; }

      if(!this.database) {
        this.database = firebase.database();
      }
      var result = this.resultState(),
          changedItems = this.changedValues(result);
      if(changedItems.length >= 2) {
        this.database.ref("fipost/"+this.env()+'/'+window.user.uid)
                .set(result);
      }
    },
    deleteFirebase: function() {
      this.database.ref("fipost/"+this.env()+'/'+window.user.uid).remove();
    }
  });
});

function calcYears(sr, marketRate, wr) {
  var savings = 100*sr,
      spending = 100 - savings,
      stashNeeded = spending * (1/wr),
      growth = marketRate;

  var fv = savings + (stashNeeded * growth);
  var pv = savings;

  var j = Math.log(fv/pv);
  var d = Math.log(1 + growth);

  if(j < 0) { return 0; }
  return j/d;
}

function messageForYear(year, format) {
  var numYears = year.years;
  if(numYears < 1) {
    numYears = numYears.toFixed(2);
  } else {
    numYears = parseInt(numYears);
  }
  var yearMessage = numYears+" year";
  if(years!==1) {
    yearMessage += "s";
  }
  if(format && format=="html") {
    return "<b>Your Rate:</b> "+year.rate+"%<br/>"+yearMessage;
  } else {
    return year.rate + "% / " + yearMessage;
  }
}

var svg,
    yScale,
    xScale,
    barSelection,
    labelSelection,
  margin = {
    top: 20,
    left: 50,
    right: 40,
    bottom: 30
  },
  options = {
    height: 400,
    width: 900
  },
  savingsRates = d3.range(1, 100, 1),
  years,
  bisectSr = d3.bisector(function(d) { return d.rate; }).left,
  initial, tooltip;

if(options.width > window.getWidth()) {
  options.width = window.getWidth();
  margin.left = 40;
}

function createGraph() {
  // Define the div for the tooltip
  initial = d3.select(".graph--sr--container").append("div")
    .attr("class", "tooltip tooltip--sr")
    .style("opacity", 1);

  svg = d3.select(".graph--sr").append("svg")
      .attr("width", options.width)
      .attr("height", options.height);

  var g = svg.append("g")
      .attr("class", "graph--sr--line-group")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  path = svg.select(".graph--sr--line-group")
    .append("path")
    .attr("class", "line");

  var focus = g.append("g")
        .attr("class", "focus")
        .style("display", "none");

  focus.append("line")
      .attr("class", "x-hover-line hover-line")
      .attr("y1", 0)
      .attr("y2", options.height);

  focus.append("line")
      .attr("class", "y-hover-line hover-line")
      .attr("x1", 0)
      .attr("x2", options.width);

  focus.append("circle")
      .attr("r", 7.5);

  focus.append("rect")
        .attr("class", "tooltip--svg")
        .attr("transform", "translate(12, -10)")
        .attr("width", 120)
        .attr("height", 20);


  focus.append("text")
      .attr("x", 15)
    	.attr("dy", ".31em");

  // Rect for moving
  g.append("rect")
    .attr("class", "overlay")
    .attr("width", options.width-margin.left-margin.right)
    .attr("height", options.height-margin.top-margin.bottom)
    .on("mouseover", function() {
      focus.style("display", null);
    })
    .on("mouseout", function() {
      focus.style("display", "none");
    })
    .on("mousemove", function() {
      var x0 = xScale.invert(d3.mouse(this)[0]),
          i = bisectSr(years, x0, 1),
          d0 = years[i - 1],
          d1 = years[i];
      if(!d0 || !d1) { return true; }
      var year = x0 - d0.year > d1.year - x0 ? d1 : d0;

      focus.attr("transform", "translate(" + xScale(year.rate) + "," + yScale(year.years) + ")");
      focus.select("text").text(function() { return messageForYear(year); });

      if(year.rate > 90) {
        focus.select(".tooltip--svg").attr("transform", "translate(-85, -30)")
        focus.select("text").attr("y", -20).attr("x", -80);
      } else if(year.rate > 75) {
        focus.select("text").attr("y", -20).attr("x", -40);
        focus.select(".tooltip--svg").attr("transform", "translate(-45, -30)")
      } else {
        focus.select("text").attr("y", 0).attr("x", 20)
        focus.select(".tooltip--svg").attr("transform", "translate(16, -10)")
      }
      focus.select(".x-hover-line").attr("y2", options.height - margin.bottom - margin.top - yScale(year.years));
      focus.select(".y-hover-line").attr("x2",xScale(year.rate)*-1 );
    });

    xAxisEl = svg.append("g")
                 .attr("class", "x axis")
                 .attr("transform", "translate("+margin.left+"," + (options.height-margin.top-10) + ")");
    xAxisEl.append("text")
           .attr("class", "axis--label")
           .attr("y", -18)
           .attr("x", 150)
           .attr("dy", ".71em")
           .text("Savings Rate");

    yAxisEl = svg.append("g")
                 .attr("class", "y axis")
                 .attr("transform", "translate("+margin.left+","+margin.top+")");
    yAxisEl.append("text")
           .attr("class", "axis--label")
           .attr("transform", "rotate(-90)")
           .attr("y", 6)
           .attr("x", options.height*-1+175)
           .attr("dy", ".71em")
           .text("Years of Saving");
}

var highlightG, highlightCircle, marketRate, wr, rate, xAxisEl, yAxisEl, path;

function highlightSr(nRate, nMarketRate, nWr) {
  //if((nRate == rate) && (nRate == rate) && (nRate == rate)) { return true; }
  rate = nRate;
  marketRate = nMarketRate;
  wr = nWr;

  years = savingsRates.map(function(d) {
    return {
      rate: d,
      years: calcYears(d/100, marketRate, wr)
    };
  });

  var maxYears = d3.max(years, function(y) { return y.years; });
  yScale = d3.scaleLinear()
      .domain([maxYears, 0])
      .range([0, options.height - margin.bottom - margin.top]);
  xScale = d3.scaleLinear()
      .domain([1,100])
      .range([0, options.width - margin.left - margin.right]);
  var xTickCount = options.width / 100;
  if(xTickCount > 20) { xTickCount = 20; }
  var xAxis = d3.axisBottom().scale(xScale).ticks(xTickCount),
    yAxis = d3.axisLeft().scale(yScale).ticks(6); //.orient("left");


  var line = d3.line()
    .x(function(year) {
      return xScale(year.rate);
    })
    .y(function(year) {
      return yScale(year.years);
    });


    xAxisEl.call(xAxis);
    yAxisEl.call(yAxis);

    path.datum(years)
      .attr("d", line);


  // Featured year
  var year = years.find(function(year) {
    return parseInt(year.rate) == parseInt(rate*100);
  });
  var x = xScale(year.rate),
      y = yScale(year.years);

  highlightG = highlightG || svg.append("g")
    .attr("transform", "translate("+margin.left+","+margin.top+")")
    // .attr("width", options.width-margin.left-margin.right)
    // .attr("height", options.height-margin.top-margin.bottom)
    .attr("class", "active--sr")

  highlightCircle = highlightCircle || highlightG.append("circle")
      .attr("class", "user--sr")
      .attr("r", 8)

  highlightCircle.transition()
    .duration(1000)
      .attr("cy", y)
      .attr("cx", x);

  var message = messageForYear(year, "html");

  initial.html(message);
  initial.transition()
     .duration(1000)
       .style("left", x + (margin.left/2) + "px")
       .style("top", (y+10)+"px");
}

$(function() {
  createGraph();
});

function FiGraph() {
  this.margin = {
    top: 20,
    left: 100,
    right: 0,
    bottom: 30
  };
  this.options = {
    height: 400,
    width: 900
  };
  this.finance = new Finance();

  if(this.options.width > window.getWidth()) {
    this.options.width = window.getWidth();
    this.margin.left = 75;
  }

  this.messageForAge = function(age) {
    return "$" + d3.format(".3s")(age.networth) + " @ age " + age.age;
  }

  this.setup = function() {
    this.svg = d3.select(".graph--fi-date").append("svg")
        .attr("width", this.options.width)
        .attr("height", this.options.height);

    // Used for the networth line
    this.svg.append("g")
        .attr("class", "graph--fi-date--line-group")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    this.path = this.svg.select(".graph--fi-date--line-group")
      .append("path")
      .attr("class", "line");

    // Path used for the 3% line
    var wrGroup = this.svg.select(".graph--fi-date--line-group")
          .append("g")
          .attr("class", "focus");
    this.wrLine = wrGroup.append("line")
        .attr("class", "graph--fi--wr-line")
        .attr("x1", 0)
        .attr("x2", this.options.width - this.margin.left - this.margin.right);
    this.wrText = wrGroup.append("text")
           .attr("class", "fi-date--wr-label")
           .attr("y", 0)
           .attr("x", this.options.width-this.margin.right-180)
           .attr("dy", ".71em");


    // Hover lines
    var focus = this.svg.select(".graph--fi-date--line-group")
          .append("g")
          .attr("class", "focus")
          .style("display", "none");
    focus.append("line")
        .attr("class", "x-hover-line hover-line")
        .attr("y1", 0)
        .attr("y2", this.options.height);
    focus.append("line")
        .attr("class", "y-hover-line hover-line")
        .attr("x1", 0)
        .attr("x2", this.options.width);
    focus.append("circle")
        .attr("r", 7.5);
    focus.append("rect")
          .attr("class", "tooltip--svg")
          .attr("transform", "translate(12, -10)")
          .attr("width", 140)
          .attr("height", 20);
    focus.append("text")
        .attr("x", 15)
      	.attr("dy", ".31em");
    var graph = this;
    this.svg.select(".graph--fi-date--line-group")
      .append("rect")
      .attr("class", "overlay")
      .attr("width", this.options.width-this.margin.left-this.margin.right)
      .attr("height", this.options.height-this.margin.top-this.margin.bottom)
      .on("mouseover", function() {
        focus.style("display", null);
      })
      .on("mouseout", function() {
        focus.style("display", "none");
      })
      .on("mousemove", function() {
        var bisectAge = d3.bisector(function(d) { return d.age; }).left;

        var x0 = graph.xScale.invert(d3.mouse(this)[0]),
            i = bisectAge(graph.ages, x0, 1),
            d0 = graph.ages[i - 1],
            d1 = graph.ages[i];
        if(!d0 || !d1) { return true; }
        var age = x0 - d0.age > d1.age - x0 ? d1 : d0;

        focus.attr("transform", "translate(" + graph.xScale(age.age) + "," + graph.yScale(age.networth) + ")");
        focus.select("text").text(function() { return graph.messageForAge(age); }.bind(graph));
        focus.select(".x-hover-line").attr("y2", graph.options.height - graph.margin.bottom - graph.margin.top - graph.yScale(age.networth));
        focus.select(".y-hover-line").attr("x2",graph.xScale(age.age)*-1 );
      });

    // X Axis for Age
    this.xAxisEl = this.svg.append("g")
                 .attr("class", "x axis")
                 .attr("transform", "translate("+this.margin.left+"," + (this.options.height-this.margin.top-10) + ")");
    this.xAxisEl.append("text")
           .attr("class", "axis--label")
           .attr("y", -18)
           .attr("x", this.options.width-this.margin.right-100)
           .attr("dy", ".71em")
           .text("Age");

    // Y Axis for Net worth
    this.yAxisEl = this.svg.append("g")
                 .attr("class", "y axis")
                 .attr("transform", "translate("+this.margin.left+","+this.margin.top+")");
    this.yAxisEl.append("text")
           .attr("class", "axis--label")
           .attr("transform", "rotate(-90)")
           .attr("y", 6)
           .attr("x", -20)
           .attr("dy", ".71em")
           .text("Net Worth");
  }

  this.update = function(user) {
    this.user = user;
    var maxAge = user.goalReAge + 10;
    if(maxAge < user.age) { maxAge = user.age + 25; }
    this.ages = d3.range(user.age, maxAge, 1).map(function(d) {
      var years = d - this.user.age;

      // Growth in the original deposit
      var stashValue = this.finance.FV(this.user.marketGrowth*100, this.user.networth, years);

      // Growth in amount added each year
      var depositValue = this.user.yearlySavings * Math.pow(1 + this.user.marketGrowth, d);

      return {
        age: d,
        networth: stashValue + depositValue
      };
    }.bind(this));

    var currencyFormat = function(d) { return "$" + d3.format(".3s")(d); };
    this.maxNetWorth = d3.max(this.ages, function(y) { return y.networth; });
    this.yScale = d3.scaleLinear()
        .domain([this.maxNetWorth, 0])
        .range([0, this.options.height - this.margin.bottom - this.margin.top]);
    this.xScale = d3.scaleLinear()
        .domain([user.age, maxAge])
        .range([0, this.options.width - this.margin.left - this.margin.right]);
    var xTickCount = this.options.width / 100;
    if(xTickCount > 20) { xTickCount = 20; }
    var xAxis = d3.axisBottom()
                  .scale(this.xScale)
                  .ticks(xTickCount)
                  .tickFormat(d3.format("d"));
      yAxis = d3.axisLeft()
                .scale(this.yScale)
                .ticks(8)
                .tickFormat(currencyFormat);

    var line = d3.line()
      .x(function(age) {
        return this.xScale(age.age);
      }.bind(this))
      .y(function(age) {
        return this.yScale(age.networth);
      }.bind(this));

    // Update the axis
    this.xAxisEl.call(xAxis);
    this.yAxisEl.call(yAxis);

    // Add/Update the line with data
    this.path.datum(this.ages).attr("d", line);

    // Update the WR line
    var r = Math.round(user.wr*1000, 2)/10;
    var wry = this.yScale(user.fiStash);
    this.wrText.attr("y", wry-20).text(r+"% WR");
    this.wrLine.attr("y1", wry)
               .attr("y2", wry);
  }
};

$(function() {
  function adjustInputSize($el) {
    var size = parseInt($el.attr('size'));
    var chars = $el.val().length + 1;
    if(chars !== size) {
      $el.attr('size', chars);
    }
  }
  $('#fi--wrapper').on('keydown', '.TKNumberFieldInput', function() {
    adjustInputSize($(this));
  });

  $.each($("#fi--wrapper .TKNumberFieldInput"), function(index, el) {
    adjustInputSize($(el));
  });

  $('.fi--reset').on('click', function(e) {
    e.preventDefault();
    tangle.setValues(defaults);
  });

  $('.tooltippable').tooltip();



  if (!window.sr) {
    window.sr = ScrollReveal();
  }

  var revealOptions = {
    origin: 'left', distance: '0px', duration: 1000
  };

  ['adam', 'gwen', 'erdude', 'darrow'].forEach(function(profile) {
    sr.reveal('#fi-profile--'+profile, revealOptions);
    jQuery('#fi-profile--'+profile).css("visibility", "visible");
  })


  $('.profile-toggle').on('click', function(e) {
    e.preventDefault();

    $(this).closest('.fi--profile')
           .toggleClass('fi--profile-collapsed')
           .find('.profile-toggle--more')
           .fadeToggle();
  });

  $('.fi-share-twitter').on('click', function() {
    var message = $(this).closest('.card').find('.fi-share--message').text();
    $(this).attr('href', "https://twitter.com/share?url=https://minafi.com/fi&text="+message)
  });

  $('.fi-share-fb').on('click', function() {
    var message = $(this).closest('.card').find('.fi-share--message').text();
    var url = "https://www.facebook.com/sharer/sharer.php?u=https://minafi.com/fi/&display=popup&ref=plugin&src=share_button&quote="+message;
    $(this).attr('href', url);
  });


  // Create the fi age Graph
  window.fiGraph = new FiGraph('.graph--fi-date');
  window.fiGraph.setup();
});
