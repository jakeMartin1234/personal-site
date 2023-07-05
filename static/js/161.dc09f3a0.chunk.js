(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return h}});i(2791);var r=i(1087),n=i(6842),s=i(7892),a=i.n(s),o=i(184),u=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},c=[{title:"Share Portfolio Visualizer",subtitle:"Personal Project",image:"/images/projects/visualizerScreenshot.png",date:"2023-05-20",link:"https://jakemartin1234.github.io/share-portfolio-visualizer-frontend/",desc:"Designed and Developed a web application that allows users to visualize their share portfolio using charts made by recharts.js. Users can add share portfolios to the program and it will automatically generate a series of charts that give the user statistics about their portfolio. Click the photo to go to the live demo."},{title:"Dispersive Photon Mapping",subtitle:"Computer Graphics Course",image:"/images/projects/spectraComparisons.png",date:"2022-05-12",link:"https://cal-cs184-student.github.io/sp22-project-webpages-jlbuja/final/index.html",desc:"Added to an open source photon mapping library written in C++ by adding support for ray dispersion effects. Also implemented laser light sources that could emit photons in a specified direction. Program is cabable of producing beautiful, complex caustic effects. Also implemented different wavelength to color mappings which allows the program to disperse different spectra as seen below."},{title:"Computer Graphics Coursework",subtitle:"Computer Graphics Course",image:"/images/projects/spheresTracing.png",date:"2022-03-20",link:"https://cal-cs184-student.github.io/sp22-project-webpages-jakeMartin1234/",desc:"Implemented a rasterizer, a mesh upsampler, a ray tracer and a virtual cloth used for animations in C++ for my university's computer graphics course. Clicking the imageabove will take you to a website explaining all of the projects."},{title:"Table Scanner",subtitle:"Personal Project",link:"https://github.com/jakeMartin1234/table-scanner-fullstack",image:"/images/projects/ExampleGraph.png",date:"2022-07-20",desc:"Designed and developed a UI for a table reader from scratch in ReactJS. I have also developed the back end software to parse the scanned graph using OCR APIs and make it available in a downloadable CSV file."},{title:"The Floor is Lava",subtitle:"A fun school project.",image:"/images/projects/byowGame.gif",date:"2021-06-28",desc:'Built a game using Java called "The Floor is Lava" which involved making a randomly generated 2D map with islands and pathways that connect the islands together. Map is generated from a seed input by the user. Game features a secret room where the player is tasked with a mission.'}],h=function(){return(0,o.jsx)(n.Z,{title:"Projects",description:"Learn about Jake Martin's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h2",{children:(0,o.jsx)(r.rU,{to:"/projects",children:"Projects"})})})}),c.map((function(t){return(0,o.jsx)(u,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,i=36e5,r="millisecond",n="second",s="minute",a="hour",o="day",u="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}},$=function(t,e,i){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(i)+t},v={s:$,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),r=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var r=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(r,c),s=i-n<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(i-n)/(s?n-a:a-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:o,D:d,h:a,m:s,s:n,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=g;var w=function(t){return t instanceof S},b=function t(e,i,r){var n;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(n=s),i&&(M[s]=i,n=s);var a=e.split("-");if(!n&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,n=o}return!r&&n&&(y=n),n||!r&&y},j=function(t,e){if(w(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new S(i)},D=v;D.l=b,D.i=w,D.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function g(t){this.$L=b(t.locale,null,!0),this.parse(t)}var $=g.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var n=r[2]-1||0,s=(r[7]||"0").substring(0,3);return i?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return D},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var i=j(t);return this.startOf(e)<=i&&i<=this.endOf(e)},$.isAfter=function(t,e){return j(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<j(t)},$.$g=function(t,e,i){return D.u(t)?this[e]:this.set(i,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var i=this,r=!!D.u(e)||e,h=D.p(t),f=function(t,e){var n=D.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return r?n:n.endOf(o)},p=function(t,e){return D.w(i.toDate()[t].apply(i.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},m=this.$W,g=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case l:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case u:var y=this.$locale().weekStart||0,M=(m<y?m+7:m)-y;return f(r?$-M:$+(6-M),g);case o:case d:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case s:return p(v+"Seconds",2);case n:return p(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var i,u=D.p(t),h="set"+(this.$u?"UTC":""),f=(i={},i[o]=h+"Date",i[d]=h+"Date",i[c]=h+"Month",i[l]=h+"FullYear",i[a]=h+"Hours",i[s]=h+"Minutes",i[n]=h+"Seconds",i[r]=h+"Milliseconds",i)[u],p=u===o?this.$D+(e-this.$W):e;if(u===c||u===l){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[D.p(t)]()},$.add=function(r,h){var d,f=this;r=Number(r);var p=D.p(h),m=function(t){var e=j(f);return D.w(e.date(e.date()+Math.round(t*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===l)return this.set(l,this.$y+r);if(p===o)return m(1);if(p===u)return m(7);var g=(d={},d[s]=e,d[a]=i,d[n]=t,d)[p]||1,$=this.$d.getTime()+r*g;return D.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=D.z(this),s=this.$H,a=this.$m,o=this.$M,u=i.weekdays,c=i.months,h=function(t,i,n,s){return t&&(t[i]||t(e,r))||n[i].slice(0,s)},l=function(t){return D.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,i){var r=t<12?"AM":"PM";return i?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:D.s(this.$y,4,"0"),M:o+1,MM:D.s(o+1,2,"0"),MMM:h(i.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,u,2),ddd:h(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:D.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:n};return r.replace(m,(function(t,e){return e||p[t]||n.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,d,f){var p,m=D.p(d),g=j(r),$=(g.utcOffset()-this.utcOffset())*e,v=this-g,y=D.m(this,g);return y=(p={},p[l]=y/12,p[c]=y,p[h]=y/3,p[u]=(v-$)/6048e5,p[o]=(v-$)/864e5,p[a]=v/i,p[s]=v/e,p[n]=v/t,p)[m]||v,f?y:D.a(y)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),r=b(t,e,!0);return r&&(i.$L=r),i},$.clone=function(){return D.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),k=S.prototype;return j.prototype=k,[["$ms",r],["$s",n],["$m",s],["$H",a],["$W",o],["$M",c],["$y",l],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,S,j),t.$i=!0),j},j.locale=b,j.isDayjs=w,j.unix=function(t){return j(1e3*t)},j.en=M[y],j.Ls=M,j.p={},j}()}}]);
//# sourceMappingURL=161.dc09f3a0.chunk.js.map