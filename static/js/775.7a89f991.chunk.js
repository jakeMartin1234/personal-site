(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[775],{4775:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(9439),i=n(2791),s=n(1087),a=n(6842),c=n(184),o=function(e){var t=e.data;return(0,c.jsx)("article",{className:"degree-container",children:(0,c.jsxs)("header",{children:[(0,c.jsx)("h4",{className:"degree",children:t.degree}),(0,c.jsxs)("p",{className:"school",children:[(0,c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]}),(0,c.jsx)("p",{children:t.gpa})]})})},u=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"education",children:[(0,c.jsx)("div",{className:"link-to",id:"education"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,c.jsx)(o,{data:e},e.school)}))]})};u.defaultProps={data:[]};var l=u,d=n(7892),h=n.n(d),f=n(2773),m=function(e){var t=e.data,n=t.name,r=t.position,i=t.url,s=t.startDate,a=t.endDate,o=t.summary,u=t.highlights;return(0,c.jsxs)("article",{className:"jobs-container",children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("h4",{children:[(0,c.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:n})," - ",r]}),(0,c.jsxs)("p",{className:"daterange",children:[" ",h()(s).format("MMMM YYYY")," - ",a?h()(a).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,c.jsx)(f.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,u?(0,c.jsx)("ul",{className:"points",children:u.map((function(e){return(0,c.jsx)("li",{children:e},e)}))}):null]})},y=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"experience",children:[(0,c.jsx)("div",{className:"link-to",id:"experience"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,c.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};y.defaultProps={data:[]};var p=y,g=n(4942),v=n(1413),b=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,c.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},j=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,s=t.title,a={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},o=(0,v.Z)((0,v.Z)({},a),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,c.jsxs)("div",{className:"skillbar clearfix",children:[(0,c.jsx)("div",{className:"skillbar-title",style:a,children:(0,c.jsx)("span",{children:s})}),(0,c.jsx)("div",{className:"skillbar-bar",style:o}),(0,c.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};j.defaultProps={categories:[]};var S=j,x=function(e){var t=e.skills,n=e.categories,s=Object.fromEntries([["All",!1]].concat(n.map((function(e){return[e.name,!1]})))),a=(0,i.useState)(s),o=(0,r.Z)(a,2),u=o[0],l=o[1],d=function(e){var t=Object.keys(u).reduce((function(t,n){return(0,v.Z)((0,v.Z)({},t),{},(0,g.Z)({},n,e===n&&!u[n]))}),{});t.All=!Object.keys(u).some((function(e){return t[e]})),l(t)};return(0,c.jsxs)("div",{className:"skills",children:[(0,c.jsx)("div",{className:"link-to",id:"skills"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Skills"})}),(0,c.jsx)("div",{className:"skill-button-container",children:Object.keys(u).map((function(e){return(0,c.jsx)(b,{label:e,active:u,handleClick:d},e)}))}),(0,c.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(u).reduce((function(e,t){return u[t]?t:e}),"All");return t.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,c.jsx)(S,{categories:n,data:e},e.title)}))}()})]})};x.defaultProps={skills:[],categories:[]};var $=x,D=function(e){var t=e.data,n=e.last;return(0,c.jsxs)("li",{className:"course-container",children:[(0,c.jsxs)("a",{href:t.link,children:[(0,c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,c.jsx)("div",{className:"course-dot",children:(0,c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var M=D,k=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,c.jsx)(M,{data:t,last:n===e.length-1},t.title)}))},C=function(e){var t=e.data;return(0,c.jsxs)("div",{className:"courses",children:[(0,c.jsx)("div",{className:"link-to",id:"courses"}),(0,c.jsx)("div",{className:"title",children:(0,c.jsx)("h3",{children:"Selected Courses"})}),(0,c.jsx)("ul",{className:"course-list",children:k(t)})]})};C.defaultProps={data:[]};var w=C,N=[{title:"Data Structures and Programming Methodology,",number:"CS 61B",university:"UC Berkeley"},{title:"Computer Architecture",number:"CS 61C",university:"UC Berkeley"},{title:"Multivariable Calculus",number:"MATH 1023",university:"University of Sydney"},{title:"Physics for Engineers",number:"PHYSICS 7A",university:"UC Berkeley"},{title:"Discrete Mathematics and Probability Theory",number:"CS 70",university:"UC Berkeley"},{title:"Linear Algebra,",number:"MATH 1002",university:"University of Sydney"},{title:"Sound and Music Computing",number:"MUSIC 158A",university:"UC Berkeley"},{title:"Computer Graphics",number:"CS 184",university:"UC Berkeley"},{title:"Computer Security",number:"CS 161",university:"UC Berkeley"},{title:"Artificial Intelligence,",number:"CS 188",university:"UC Berkeley"},{title:"Database Systems",number:"CS 186",university:"UC Berkeley"},{title:"Efficient Algorithms and Intractable Problems",number:"CS 170",university:"UC Berkeley"}],O=[{school:"UC Berkeley",degree:"B.A. Majoring in Computer Science",link:"https://berkeley.edu",year:2023,gpa:"GPA: 3.60"}],P=[{name:"NextGen.Net",position:"Software Engineer",url:"https://nextgen.net/",startDate:"2023-10-02",highlights:["Member of the Research and Development Team working with Angular and NodeJS."]},{name:"Neubauer Agency",position:"Web Developer Intern",startDate:"2023-05-05",endDate:"2023-08-20",highlights:["Facilitated the development of custom websites for individual clients, aligning with their unique requirements andpreferences.","Created visually appealing website layouts using Figma and seamlessly transformed them into functional and responsive\nWix components."]},{name:"East Cost Sailing",position:"Deckhand",startDate:"2020-12-01",endDate:"2021-06-01",highlights:["Worked as a deckhand for a company that runs charter boat services during the summer months on Sydney Harbor.","This job entailed cleaning the boat, assisting the captain with operations on the boat and helping out customers with\ntheir needs."]}],A=n(3433),L=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:4,category:["Web Development","Javascript"]},{title:"React",competency:4,category:["Web Development","Javascript"]},{title:"Angular",competency:4,category:["Web Development","Javascript"]},{title:"Google Cloud Platform",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:5,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL/Redshift",competency:4,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:4,category:["Web Development","Javascript"]},{title:"Git",competency:3,category:["Tools"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Pandas",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:2,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"C++",competency:2,category:["Languages"]},{title:"Java",competency:5,category:["Languages"]}].map((function(e){return(0,v.Z)((0,v.Z)({},e),{},{category:e.category.sort()})})),T=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],Y=(0,A.Z)(new Set(L.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:T[t]}})),W={Education:function(){return(0,c.jsx)(l,{data:O})},Experience:function(){return(0,c.jsx)(p,{data:P})},Skills:function(){return(0,c.jsx)($,{skills:L,categories:Y})},Courses:function(){return(0,c.jsx)(w,{data:N})}},_=function(){return(0,c.jsx)(a.Z,{title:"Resume",description:"Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook.",children:(0,c.jsxs)("article",{className:"post",id:"resume",children:[(0,c.jsx)("header",{children:(0,c.jsxs)("div",{className:"title",children:[(0,c.jsx)("h2",{children:(0,c.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,c.jsx)("div",{className:"link-container",children:Object.keys(W).map((function(e){return(0,c.jsx)("h4",{children:(0,c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(W).map((function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,c.jsx)(i,{},n)}))]})})}},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",c="day",o="week",u="month",l="quarter",d="year",h="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},g=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,u),s=n-i<0,a=t.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:u,y:d,w:o,d:c,D:h,h:a,m:s,s:i,ms:r,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",j={};j[b]=p;var S=function(e){return e instanceof M},x=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var s=t.toLowerCase();j[s]&&(i=s),n&&(j[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var c=t.name;j[c]=t,i=c}return!r&&i&&(b=i),i||!r&&b},$=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},D=v;D.l=x,D.i=S,D.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function p(e){this.$L=x(e.locale,null,!0),this.parse(e)}var g=p.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return D},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(e,t){var n=$(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return $(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<$(e)},g.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,r=!!D.u(t)||t,l=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(c)},m=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,p=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return r?f(1,0):f(31,11);case u:return r?f(1,p):f(0,p+1);case o:var b=this.$locale().weekStart||0,j=(y<b?y+7:y)-b;return f(r?g-j:g+(6-j),p);case c:case h:return m(v+"Hours",0);case a:return m(v+"Minutes",1);case s:return m(v+"Seconds",2);case i:return m(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var n,o=D.p(e),l="set"+(this.$u?"UTC":""),f=(n={},n[c]=l+"Date",n[h]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],m=o===c?this.$D+(t-this.$W):t;if(o===u||o===d){var y=this.clone().set(h,1);y.$d[f](m),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[D.p(e)]()},g.add=function(r,l){var h,f=this;r=Number(r);var m=D.p(l),y=function(e){var t=$(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===c)return y(1);if(m===o)return y(7);var p=(h={},h[s]=t,h[a]=n,h[i]=e,h)[m]||1,g=this.$d.getTime()+r*p;return D.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),s=this.$H,a=this.$m,c=this.$M,o=n.weekdays,u=n.months,l=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},d=function(e){return D.s(s%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:D.s(this.$y,4,"0"),M:c+1,MM:D.s(c+1,2,"0"),MMM:l(n.monthsShort,c,u,3),MMMM:l(u,c),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,o,2),ddd:l(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(e,t){return t||m[e]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,f){var m,y=D.p(h),p=$(r),g=(p.utcOffset()-this.utcOffset())*t,v=this-p,b=D.m(this,p);return b=(m={},m[d]=b/12,m[u]=b,m[l]=b/3,m[o]=(v-g)/6048e5,m[c]=(v-g)/864e5,m[a]=v/n,m[s]=v/t,m[i]=v/e,m)[y]||v,f?b:D.a(b)},g.daysInMonth=function(){return this.endOf(u).$D},g.$locale=function(){return j[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},g.clone=function(){return D.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),k=M.prototype;return $.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",c],["$M",u],["$y",d],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,M,$),e.$i=!0),$},$.locale=x,$.isDayjs=S,$.unix=function(e){return $(1e3*e)},$.en=j[b],$.Ls=j,$.p={},$}()},4942:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9142);function i(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=775.7a89f991.chunk.js.map