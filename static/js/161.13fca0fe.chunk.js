(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(1087),r=n(6842),s=n(7892),a=n.n(s),o=n(184),u=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Share Portfolio Visualizer",subtitle:"Personal Project",image:"/images/projects/visualizerScreenshot.png",date:"2023-05-20",link:"https://jakemartin1234.github.io/share-portfolio-visualizer-frontend/",desc:"Designed and Developed a web application that allows users to visualize their share portfolio using charts made by recharts.js. Users can add share portfolios to the program and it will automatically generate a series of charts that give the user statistics about their portfolio. Click the photo to go to the live demo."},{title:"Dispersive Photon Mapping",subtitle:"Computer Graphics Course",image:"/images/projects/spectraComparisons.png",date:"2022-05-12",link:"https://github.com/jakeMartin1234/raveTracer",desc:"Added to an open source photon mapping library written in C++ by adding support for ray dispersion effects. Also implemented laser light sources that could emit photons in a specified direction. Program is cabable of producing beautiful, complex caustic effects. Also implemented different wavelength to color mappings which allows the program to disperse different spectra as seen below."},{title:"Table Scanner",subtitle:"Personal Project",link:"https://github.com/jakeMartin1234/table-scanner-fullstack",image:"/images/projects/ExampleGraph.png",date:"2022-07-20",desc:"Designed and developed a UI for a table reader from scratch in ReactJS. I have also developed the back end software to parse the scanned graph using OCR APIs and make it available in a downloadable CSV file."},{title:"The Floor is Lava",subtitle:"A fun school project.",image:"/images/projects/byowGame.gif",date:"2021-06-28",desc:'Built a game using Java called "The Floor is Lava" which involved making a randomly generated 2D map with islands and pathways that connect the islands together. Map is generated from a seed input by the user. Game features a secret room where the player is tasked with a mission.'}],h=function(){return(0,o.jsx)(r.Z,{title:"Projects",description:"Learn about Jake Martin's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h2",{children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})})})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},v={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:d,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",y={};y[M]=$;var w=function(t){return t instanceof j},D=function t(e,n,i){var r;if(!e)return M;if("string"==typeof e){var s=e.toLowerCase();y[s]&&(r=s),n&&(y[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var o=e.name;y[o]=e,r=o}return!i&&r&&(M=r),r||!i&&M},b=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new j(n)},S=v;S.l=D,S.i=w,S.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function $(t){this.$L=D(t.locale,null,!0),this.parse(t)}var g=$.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(p);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return b(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<b(t)},g.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,i=!!S.u(e)||e,h=S.p(t),f=function(t,e){var r=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(o)},p=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,$=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case l:return i?f(1,0):f(31,11);case c:return i?f(1,$):f(0,$+1);case u:var M=this.$locale().weekStart||0,y=(m<M?m+7:m)-M;return f(i?g-y:g+(6-y),$);case o:case d:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case s:return p(v+"Seconds",2);case r:return p(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,u=S.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[o]=h+"Date",n[d]=h+"Date",n[c]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[u],p=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[S.p(t)]()},g.add=function(i,h){var d,f=this;i=Number(i);var p=S.p(h),m=function(t){var e=b(f);return S.w(e.date(e.date()+Math.round(t*i)),f)};if(p===c)return this.set(c,this.$M+i);if(p===l)return this.set(l,this.$y+i);if(p===o)return m(1);if(p===u)return m(7);var $=(d={},d[s]=e,d[a]=n,d[r]=t,d)[p]||1,g=this.$d.getTime()+i*$;return S.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},l=function(t){return S.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},p={YY:String(this.$y).slice(-2),YYYY:S.s(this.$y,4,"0"),M:o+1,MM:S.s(o+1,2,"0"),MMM:h(n.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,u,2),ddd:h(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:S.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:r};return i.replace(m,(function(t,e){return e||p[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,d,f){var p,m=S.p(d),$=b(i),g=($.utcOffset()-this.utcOffset())*e,v=this-$,M=S.m(this,$);return M=(p={},p[l]=M/12,p[c]=M,p[h]=M/3,p[u]=(v-g)/6048e5,p[o]=(v-g)/864e5,p[a]=v/n,p[s]=v/e,p[r]=v/t,p)[m]||v,f?M:S.a(M)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return y[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=D(t,e,!0);return i&&(n.$L=i),n},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},$}(),x=j.prototype;return b.prototype=x,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",o],["$M",c],["$y",l],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,j,b),t.$i=!0),b},b.locale=D,b.isDayjs=w,b.unix=function(t){return b(1e3*t)},b.en=y[M],b.Ls=y,b.p={},b}()}}]);
//# sourceMappingURL=161.13fca0fe.chunk.js.map