(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l}});i(2791);var r=i(1087),s=i(6842),n=i(7892),a=i.n(n),o=i(184),c=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",target:"_blank",rel:"noreferrer",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"three-svg-extrude NPM Package",subtitle:"Personal Project",image:"/images/projects/three-svg-extrude.png",date:"2023-08-28",link:"https://www.npmjs.com/package/three-svg-extrude",desc:"An npm package that effortlessly transforms SVG shapes into extruded 3D geometries for use in ThreeJS scenes."},{title:"three-particle-geometry NPM Package",subtitle:"Personal Project",image:"/images/projects/three-particle-geometry.png",date:"2023-08-25",link:"https://www.npmjs.com/package/three-particle-geometry",desc:"An npm package that allows users to represent threeJS geometry instances as a system of customizable particles. I used Webpack and Babel to bundle the package and make it compatible with all browsers that support threeJS. So far it is averaging over 1000 weekly installs."},{title:"Circle of Fifths Jam Board",subtitle:"Personal Project",image:"/images/projects/circleOfFifths.png",date:"2023-08-6",link:"https://jakemartin1234.github.io/circle-of-fifths-jam-board/",desc:"A small app I created that provides the user with a highly visual way to interact with the circle of fifths. Click the photo to go to the live demo."},{title:"Productivity Web App",subtitle:"Personal Project",image:"/images/projects/productivityApp.png",date:"2023-07-20",link:"https://jakemartin1234.github.io/productivity-app-frontend/",desc:"Designed and Developed a productivity based web application that allows users to create and manage to-do lists. I plan on adding more functionality to the app such as sticky notes and possibly a calendar. I used Auth0 for authentication and MongoDB for the database. Click the photo to go to the live demo."},{title:"Share Portfolio Visualizer",subtitle:"Personal Project",image:"/images/projects/visualizerScreenshot.png",date:"2023-06-20",link:"https://jakemartin1234.github.io/share-portfolio-visualizer-frontend/",desc:"Designed and Developed a web application that allows users to visualize their share portfolio using charts made by recharts.js. Users can add share portfolios to the program and it will automatically generate a series of charts that give the user statistics about their portfolio. Click the photo to go to the live demo."},{title:"Dispersive Photon Mapping",subtitle:"Computer Graphics Course",image:"/images/projects/spectraComparisons.png",date:"2022-05-12",link:"https://cal-cs184-student.github.io/sp22-project-webpages-jlbuja/final/index.html",desc:"Added to an open source photon mapping library written in C++ by adding support for ray dispersion effects. Also implemented laser light sources that could emit photons in a specified direction. Program is cabable of producing beautiful, complex caustic effects. Also implemented different wavelength to color mappings which allows the program to disperse different spectra as seen below."},{title:"Computer Graphics Coursework",subtitle:"Computer Graphics Course",image:"/images/projects/spheresTracing.png",date:"2022-03-20",link:"https://cal-cs184-student.github.io/sp22-project-webpages-jakeMartin1234/",desc:"Implemented a rasterizer, a mesh upsampler, a ray tracer and a virtual cloth used for animations in C++ for my university's computer graphics course. Clicking the imageabove will take you to a website explaining all of the projects."},{title:"Table Scanner",subtitle:"Personal Project",link:"https://github.com/jakeMartin1234/table-scanner-fullstack",image:"/images/projects/ExampleGraph.png",date:"2022-07-20",desc:"Designed and developed a UI for a table reader from scratch in ReactJS. I have also developed the back end software to parse the scanned graph using OCR APIs and make it available in a downloadable CSV file."},{title:"The Floor is Lava",subtitle:"A fun school project.",image:"/images/projects/byowGame.gif",date:"2021-06-28",desc:'Developed a game using Java called "The Floor is Lava" which involved making a randomly generated 2D map with islands and pathways that connect the islands together. Map is generated from a seed input by the user. Game features a secret room where the player is tasked with a mission.'}],l=function(){return(0,o.jsx)(s.Z,{title:"Projects",description:"Learn about Jake Martin's projects.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h2",{children:(0,o.jsx)(r.rU,{to:"/projects",children:"Projects"})})})}),u.map((function(t){return(0,o.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,i=36e5,r="millisecond",s="second",n="minute",a="hour",o="day",c="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}},$=function(t,e,i){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(i)+t},v={s:$,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),r=Math.floor(i/60),s=i%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(s,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var r=12*(i.year()-e.year())+(i.month()-e.month()),s=e.clone().add(r,u),n=i-s<0,a=e.clone().add(r+(n?-1:1),u);return+(-(r+(i-s)/(n?s-a:a-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:d,h:a,m:n,s:s,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",b={};b[y]=g;var w=function(t){return t instanceof D},j=function t(e,i,r){var s;if(!e)return y;if("string"==typeof e){var n=e.toLowerCase();b[n]&&(s=n),i&&(b[n]=i,s=n);var a=e.split("-");if(!s&&a.length>1)return t(a[0])}else{var o=e.name;b[o]=e,s=o}return!r&&s&&(y=s),s||!r&&y},M=function(t,e){if(w(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new D(i)},k=v;k.l=j,k.i=w,k.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function g(t){this.$L=j(t.locale,null,!0),this.parse(t)}var $=g.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(k.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var s=r[2]-1||0,n=(r[7]||"0").substring(0,3);return i?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,n)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,n)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return k},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var i=M(t);return this.startOf(e)<=i&&i<=this.endOf(e)},$.isAfter=function(t,e){return M(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<M(t)},$.$g=function(t,e,i){return k.u(t)?this[e]:this.set(i,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var i=this,r=!!k.u(e)||e,l=k.p(t),f=function(t,e){var s=k.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return r?s:s.endOf(o)},p=function(t,e){return k.w(i.toDate()[t].apply(i.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},m=this.$W,g=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case u:return r?f(1,g):f(0,g+1);case c:var y=this.$locale().weekStart||0,b=(m<y?m+7:m)-y;return f(r?$-b:$+(6-b),g);case o:case d:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case n:return p(v+"Seconds",2);case s:return p(v+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var i,c=k.p(t),l="set"+(this.$u?"UTC":""),f=(i={},i[o]=l+"Date",i[d]=l+"Date",i[u]=l+"Month",i[h]=l+"FullYear",i[a]=l+"Hours",i[n]=l+"Minutes",i[s]=l+"Seconds",i[r]=l+"Milliseconds",i)[c],p=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[k.p(t)]()},$.add=function(r,l){var d,f=this;r=Number(r);var p=k.p(l),m=function(t){var e=M(f);return k.w(e.date(e.date()+Math.round(t*r)),f)};if(p===u)return this.set(u,this.$M+r);if(p===h)return this.set(h,this.$y+r);if(p===o)return m(1);if(p===c)return m(7);var g=(d={},d[n]=e,d[a]=i,d[s]=t,d)[p]||1,$=this.$d.getTime()+r*g;return k.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=k.z(this),n=this.$H,a=this.$m,o=this.$M,c=i.weekdays,u=i.months,l=function(t,i,s,n){return t&&(t[i]||t(e,r))||s[i].slice(0,n)},h=function(t){return k.s(n%12||12,t,"0")},d=i.meridiem||function(t,e,i){var r=t<12?"AM":"PM";return i?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:k.s(this.$y,4,"0"),M:o+1,MM:k.s(o+1,2,"0"),MMM:l(i.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,c,2),ddd:l(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(n),HH:k.s(n,2,"0"),h:h(1),hh:h(2),a:d(n,a,!0),A:d(n,a,!1),m:String(a),mm:k.s(a,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:s};return r.replace(m,(function(t,e){return e||p[t]||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(r,d,f){var p,m=k.p(d),g=M(r),$=(g.utcOffset()-this.utcOffset())*e,v=this-g,y=k.m(this,g);return y=(p={},p[h]=y/12,p[u]=y,p[l]=y/3,p[c]=(v-$)/6048e5,p[o]=(v-$)/864e5,p[a]=v/i,p[n]=v/e,p[s]=v/t,p)[m]||v,f?y:k.a(y)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return b[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),r=j(t,e,!0);return r&&(i.$L=r),i},$.clone=function(){return k.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),S=D.prototype;return M.prototype=S,[["$ms",r],["$s",s],["$m",n],["$H",a],["$W",o],["$M",u],["$y",h],["$D",d]].forEach((function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,D,M),t.$i=!0),M},M.locale=j,M.isDayjs=w,M.unix=function(t){return M(1e3*t)},M.en=b[y],M.Ls=b,M.p={},M}()}}]);
//# sourceMappingURL=161.750417c4.chunk.js.map