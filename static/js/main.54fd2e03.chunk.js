(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(22),n=c.n(i),r=(c(29),c(30),c(4)),j=c(2),d=(c(31),c(0)),l=function(){return Object(d.jsx)("div",{className:"footer",children:"Being Developed By - Abhishek Barve"})},o=(c(33),c.p+"static/media/logo.6ce24c58.svg"),b=function(){return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsxs)("div",{className:"brand",children:[Object(d.jsx)("div",{className:"brand-icon",children:Object(d.jsx)("img",{src:o,alt:"logo"})}),Object(d.jsx)("div",{className:"brand-name",children:"React Quiz App"})]}),Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(r.b,{to:"/react-quiz-app/",children:"Home"})}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(r.b,{to:"/react-quiz-app/quiz/31/0",children:"Play Random Quiz"})}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)("a",{href:"#opt3",children:"ScoreCard"})}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(r.b,{to:"/react-quiz-app/register",children:"Register"})}),Object(d.jsx)("div",{className:"item",children:Object(d.jsx)(r.b,{to:"/react-quiz-app/sign-in",children:"Sign In"})})]})]})},u=(c(24),c(13)),h=c(10),m=function(e){var t=e.value,c=(e.markedAnswers,e.checkIfMarked),a=e.qno,i=e.markAnswer,n=Object(s.useRef)(null);return Object(s.useEffect)((function(){if(n){var e=n.current;c(a,t,e)}})),Object(d.jsxs)("div",{className:"option",ref:n,value:t,onClick:function(e){i(e,a)},children:[Object(d.jsx)("input",{type:"checkbox"}),Object(d.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})]})},O=function(e){var t=e.markedAnswers,c=e.question,a=e.markAnswer,i=e.checkIfMarked,n=Object(j.f)().qn,r=c[n],l=(new Set,[].concat(Object(u.a)(r.incorrect_answers),[r.correct_answer]));return Object(s.useEffect)((function(){console.log(l+" -----"),function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),s=[e[c],e[t]];e[t]=s[0],e[c]=s[1]}}(l),console.log(l)}),[l]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"question",children:[Object(d.jsx)("div",{className:"q",children:"Q"}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:r.question}})]}),Object(d.jsx)("div",{className:"options",children:l.map((function(e,c){return Object(d.jsx)(m,{checkIfMarked:i,value:e,markAnswer:a,markedAnswers:t,qno:n},c)}))})]})},x=(c(19),function(){var e=Object(j.f)(),t=parseInt(e.qn),c=null,s=null;return t>0&&(c=t-1),t<9&&(s=t+1),Object(d.jsxs)("div",{className:"quiz-nav",children:[t>0&&Object(d.jsx)(r.b,{to:"/react-quiz-app/quiz/".concat(e.qid,"/").concat(c),children:Object(d.jsx)("span",{className:"previous",children:"Previous"})}),s&&Object(d.jsx)(r.b,{to:"/react-quiz-app/quiz/".concat(e.qid,"/").concat(s),children:Object(d.jsx)("span",{className:"next",children:"Next"})}),Object(d.jsx)("div",{className:"submit",children:"Submit"}),Object(d.jsx)("div",{className:"close",children:"Close"})]})}),p=function(e){var t=Object(s.useState)(null),c=Object(h.a)(t,2),a=c[0],i=c[1],n=Object(s.useState)(null),r=Object(h.a)(n,2),j=r[0],d=r[1],l=Object(s.useState)(!0),o=Object(h.a)(l,2),b=o[0],u=o[1];return Object(s.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){return e.json()})).then((function(e){u(!1),i(e),d(null)})).catch((function(e){"AbortError"===e.name||(d(e.message),u(!1))})),function(){t.abort()}}),[e]),{data:a,isLoading:b,error:j}},v=function(){for(var e=Object(j.f)(),t="https://opentdb.com/api.php?amount=10&category=".concat(e.qid,"&difficulty=easy"),c=p(t),a=c.data,i=c.isLoading,n=c.error,r=[],l=0;l<10;l++)r[l]="";var o=Object(s.useState)(r),b=Object(h.a)(o,2),m=b[0],v=b[1];return Object(s.useEffect)((function(){})),Object(d.jsxs)("div",{className:"quiz",children:[i&&Object(d.jsx)("div",{children:"Content Is Loading"}),n&&Object(d.jsxs)("div",{children:["Error ",n," "]}),Object(d.jsxs)("div",{className:"quiz-header",children:[a&&Object(d.jsxs)("div",{className:"quiz-title",children:["Quiz Title: ",a.results[0].category]}),Object(d.jsx)("div",{className:"quiz-creator",children:"Quiz Creator"}),Object(d.jsx)("div",{className:"quiz-score",children:"Top Score: 0"})]}),a&&Object(d.jsxs)("div",{className:"quiz-body",children:[Object(d.jsx)(O,{question:a.results,checkIfMarked:function(e,t,c){var s=c.children;m[e]==t?(c.classList.add("marked"),s[0].checked=!0):(c.classList.remove("marked"),s[0].checked=!1)},markAnswer:function(e,t){var c=Object(u.a)(m);if("INPUT"==e.target.nodeName||"SPAN"==e.target.nodeName){var s=e.target.parentElement,a=s.children;s.classList.contains("marked")?(s.classList.remove("marked"),a[0].checked=!1,c[t]=""):(s.classList.add("marked"),a[0].checked=!0,c[t]=s.getAttribute("value"))}else{var i=e.target,n=e.target.children;i.classList.contains("marked")?(i.classList.remove("marked"),n[0].checked=!1,c[t]=""):(i.classList.add("marked"),n[0].checked=!0,c[t]=i.getAttribute("value"))}v(c)},markedAnswers:r}),Object(d.jsx)(x,{})]})]})},f=function(e){var t=e.name,c=e.creator,s=e.date,a=e.attemptCount,i=e.topScorer;return Object(d.jsxs)("div",{className:"quiz-info",children:[Object(d.jsxs)("div",{className:"quiz-info-head",children:[Object(d.jsx)("div",{className:"quiz-name",children:t}),Object(d.jsx)("div",{className:"quiz-attempt",children:Object(d.jsx)("button",{children:"Attempt Now"})})]}),Object(d.jsxs)("div",{className:"quiz-details",children:[Object(d.jsxs)("div",{className:"attempted-by",children:["Attempted By: ",a]}),Object(d.jsxs)("div",{className:"creator",children:["Created By: ",c]}),Object(d.jsxs)("div",{className:"created-date",children:["Created On: ",s]}),Object(d.jsxs)("div",{className:"top-scorer",children:["Top Scorer: ",i]})]})]})},N=function(){var e,t=p("https://opentdb.com/api_category.php"),c=t.data;t.isLoading,t.error;return c&&(e=c.trivia_categories),Object(d.jsxs)("div",{className:"quiz-list-category",children:[c&&Object(d.jsx)("div",{className:"categories",children:e.map((function(e,t){return Object(d.jsx)(r.b,{to:"/react-quiz-app/quiz/".concat(e.id,"/0"),children:Object(d.jsx)("span",{children:e.name})},t)}))}),Object(d.jsxs)("div",{className:"quiz-list",children:[Object(d.jsx)(f,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(d.jsx)(f,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(d.jsx)(f,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"})]})]})},g=(c(20),function(e){var t=e.rank,c=e.name;return Object(d.jsxs)("div",{className:"ranker",children:[Object(d.jsx)("div",{className:"rank",children:Object(d.jsxs)("div",{children:["Rank: ",t]})}),Object(d.jsx)("div",{className:"name",children:Object(d.jsx)("div",{children:c})})]})}),k=function(){return Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("h3",{children:"Our Top Rankers!!"}),Object(d.jsx)(g,{name:"Abhishek",rank:1}),Object(d.jsx)(g,{name:"Abhi",rank:2}),Object(d.jsx)(g,{name:"Abhishek Barve",rank:3}),Object(d.jsx)(g,{name:"Abhishek",rank:4})]})},q=function(){for(var e=Object(j.f)(),t=[],c=0;c<10;c++){var s="/react-quiz-app/quiz/".concat(e.qid,"/").concat(c);t.push(s)}return Object(d.jsx)("div",{className:"question-navigator",children:t.map((function(e,t){return Object(d.jsx)(r.b,{to:e,children:Object(d.jsxs)("span",{children:["Question ",t+1]})},t)}))})},z=function(e){var t=e.quizOn,c=(e.category,Object(j.f)()),s="https://opentdb.com/api.php?amount=10&category=".concat(c.qid,"&difficulty=easy"),a=p(s);a.data,a.isLoading,a.error;return Object(d.jsxs)(d.Fragment,{children:[t?Object(d.jsx)(q,{}):Object(d.jsx)(k,{}),Object(d.jsx)("div",{className:"main-area",children:t?Object(d.jsx)(v,{}):Object(d.jsx)(N,{})})]})},I=(c(21),function(){return Object(d.jsxs)("div",{className:"register",children:[Object(d.jsx)("div",{className:"heading",children:"Register Here"}),Object(d.jsxs)("div",{className:"registration-form",children:[Object(d.jsxs)("form",{action:"#",children:[Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("label",{htmlFor:"fName",children:"First Name:"}),Object(d.jsx)("input",{type:"text",name:"fName",id:"fName"})]}),Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("label",{htmlFor:"lName",children:"Last Name:"}),Object(d.jsx)("input",{type:"text",name:"lName",id:"lName"})]}),Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("label",{htmlFor:"emailID",children:"Email ID:"}),Object(d.jsx)("input",{type:"email",name:"emailID",id:"emailID"})]}),Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Enter Password:"}),Object(d.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(d.jsxs)("div",{className:"form-buttons",children:[Object(d.jsx)("button",{type:"submit",children:"REGISTER"}),Object(d.jsx)("button",{type:"reset",children:"RESET"}),Object(d.jsx)("button",{children:"GO BACK"})]})]}),Object(d.jsxs)("div",{className:"sign-up-with",children:[Object(d.jsx)("button",{children:"SIGN UP WITH GOOGLE"}),Object(d.jsx)("button",{children:"SIGN UP WITH FACEBOOK"}),Object(d.jsx)("button",{children:"SIGN UP WITH GITHUB"})]})]})]})}),A=function(){return Object(d.jsxs)("div",{className:"register",children:[Object(d.jsx)("div",{className:"heading",children:"Sign In Here"}),Object(d.jsxs)("div",{className:"registration-form",children:[Object(d.jsxs)("form",{action:"#",children:[Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("label",{htmlFor:"emailID",children:"Email ID:"}),Object(d.jsx)("input",{type:"email",name:"emailID",id:"emailID"})]}),Object(d.jsxs)("div",{className:"form-input",children:[Object(d.jsx)("label",{htmlFor:"password",children:"Enter Password:"}),Object(d.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(d.jsxs)("div",{className:"form-buttons",children:[Object(d.jsx)("button",{type:"submit",children:"SIGN IN"}),Object(d.jsx)("button",{type:"reset",children:"RESET"}),Object(d.jsx)("button",{children:"GO BACK"})]})]}),Object(d.jsxs)("div",{className:"sign-up-with",children:[Object(d.jsx)("button",{children:"SIGN IN WITH GOOGLE"}),Object(d.jsx)("button",{children:"SIGN IN WITH FACEBOOK"}),Object(d.jsx)("button",{children:"SIGN IN WITH GITHUB"})]})]})]})};var y=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{className:"main-body",children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{exact:!0,path:"/react-quiz-app/",children:Object(d.jsx)(z,{quizOn:!1})}),Object(d.jsx)(j.a,{exact:!0,path:"/react-quiz-app/quiz/:qid/:qn",children:Object(d.jsx)(z,{quizOn:!0})}),Object(d.jsxs)(j.a,{exact:!0,path:"/react-quiz-app/register",children:[Object(d.jsx)(k,{}),Object(d.jsx)(I,{})]}),Object(d.jsxs)(j.a,{exact:!0,path:"/react-quiz-app/sign-in",children:[Object(d.jsx)(k,{}),Object(d.jsx)(A,{})]})]})}),Object(d.jsx)(l,{})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.54fd2e03.chunk.js.map