(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{19:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(22),a=s.n(n),r=(s(28),s(29),s(4)),j=s(2),l=(s(30),s(0)),d=function(){return Object(l.jsx)("div",{className:"footer",children:"Being Developed By - Abhishek Barve"})},b=(s(32),s.p+"static/media/logo.6ce24c58.svg"),o=function(){return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsxs)("div",{className:"brand",children:[Object(l.jsx)("div",{className:"brand-icon",children:Object(l.jsx)("img",{src:b,alt:"logo"})}),Object(l.jsx)("div",{className:"brand-name",children:"React Quiz App"})]}),Object(l.jsxs)("div",{className:"menu",children:[Object(l.jsx)("div",{className:"item",children:Object(l.jsx)(r.b,{to:"/react-quiz-app/",children:"Home"})}),Object(l.jsx)("div",{className:"item",children:Object(l.jsx)(r.b,{to:"/react-quiz-app/quiz/0",children:"Play Random Quiz"})}),Object(l.jsx)("div",{className:"item",children:Object(l.jsx)("a",{href:"#opt3",children:"ScoreCard"})}),Object(l.jsx)("div",{className:"item",children:Object(l.jsx)(r.b,{to:"/react-quiz-app/register",children:"Register"})}),Object(l.jsx)("div",{className:"item",children:Object(l.jsx)(r.b,{to:"/react-quiz-app/sign-in",children:"Sign In"})})]})]})},h=s(11),u=function(e){var t=e.value,s=e.markedAnswers,i=e.qno,n=e.answers,a=(e.options,Object(c.useRef)(null));return Object(l.jsxs)("div",{className:"option",ref:a,onClick:function(){console.log(s);var e=a.current.children;a.current.classList.contains("marked")?(a.current.classList.remove("marked"),e[0].checked=!1,n.delete(e[1].innerText)):(a.current.classList.add("marked"),e[0].checked=!0,n.add(e[1].innerText));var t=Object(h.a)(s),c={qno:n};t[i]=c,s=Object(h.a)(t),console.log(s)},children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{children:t})]})},O=function(e){var t=e.markedAnswers,s=e.question,c=(e.qno,Object(j.f)().qn),i=s[c],n=new Set,a=[].concat(Object(h.a)(i.incorrect_answers),[i.correct_answer]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"question",children:[Object(l.jsx)("div",{className:"q",children:"Q"}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:i.question}})]}),Object(l.jsx)("div",{className:"options",children:a.map((function(e,s){return Object(l.jsx)(u,{value:e,answers:n,markedAnswers:t,qno:c},s)}))})]})},m=(s(19),function(){var e=Object(j.f)(),t=parseInt(e.qn),s=null,c=null;return t>0&&(s=t-1),t<9&&(c=t+1),Object(l.jsxs)("div",{className:"quiz-nav",children:[t>0&&Object(l.jsx)(r.b,{to:"/react-quiz-app/quiz/".concat(s),children:Object(l.jsx)("span",{className:"previous",children:"Previous"})}),c&&Object(l.jsx)(r.b,{to:"/react-quiz-app/quiz/".concat(c),children:Object(l.jsx)("span",{className:"next",children:"Next"})}),Object(l.jsx)("div",{className:"submit",children:"Submit"}),Object(l.jsx)("div",{className:"close",children:"Close"})]})}),x=s(13),p=function(e){var t=Object(c.useState)(null),s=Object(x.a)(t,2),i=s[0],n=s[1],a=Object(c.useState)(null),r=Object(x.a)(a,2),j=r[0],l=r[1],d=Object(c.useState)(!0),b=Object(x.a)(d,2),o=b[0],h=b[1];return Object(c.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){return e.json()})).then((function(e){console.log(e),h(!1),n(e),l(null)})).catch((function(e){"AbortError"===e.name||(l(e.message),h(!1))})),function(){t.abort()}}),[e]),{data:i,isLoading:o,error:j}},v=function(e){for(var t=e.quiz,s=e.isLoading,c=e.error,i=[],n=0;n<5;n++){i.push({i:[]})}return Object(l.jsxs)("div",{className:"quiz",children:[s&&Object(l.jsx)("div",{children:"Content Is Loading"}),c&&Object(l.jsxs)("div",{children:["Error ",c," "]}),Object(l.jsxs)("div",{className:"quiz-header",children:[t&&Object(l.jsxs)("div",{className:"quiz-title",children:["Quiz Title: ",t.results[0].category]}),Object(l.jsx)("div",{className:"quiz-creator",children:"Quiz Creator"}),Object(l.jsx)("div",{className:"quiz-score",children:"Top Score: 0"})]}),t&&Object(l.jsxs)("div",{className:"quiz-body",children:[Object(l.jsx)(O,{question:t.results,markedAnswers:i}),Object(l.jsx)(m,{})]})]})},N=function(e){var t=e.name,s=e.creator,c=e.date,i=e.attemptCount,n=e.topScorer;return Object(l.jsxs)("div",{className:"quiz-info",children:[Object(l.jsxs)("div",{className:"quiz-info-head",children:[Object(l.jsx)("div",{className:"quiz-name",children:t}),Object(l.jsx)("div",{className:"quiz-attempt",children:Object(l.jsx)("button",{children:"Attempt Now"})})]}),Object(l.jsxs)("div",{className:"quiz-details",children:[Object(l.jsxs)("div",{className:"attempted-by",children:["Attempted By: ",i]}),Object(l.jsxs)("div",{className:"creator",children:["Created By: ",s]}),Object(l.jsxs)("div",{className:"created-date",children:["Created On: ",c]}),Object(l.jsxs)("div",{className:"top-scorer",children:["Top Scorer: ",n]})]})]})},f=function(){return Object(l.jsxs)("div",{className:"quiz-list",children:[Object(l.jsx)(N,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(l.jsx)(N,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(l.jsx)(N,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(l.jsx)(N,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(l.jsx)(N,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(l.jsx)(N,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"})]})},q=(s(20),function(e){var t=e.rank,s=e.name;return Object(l.jsxs)("div",{className:"ranker",children:[Object(l.jsx)("div",{className:"rank",children:Object(l.jsxs)("div",{children:["Rank: ",t]})}),Object(l.jsx)("div",{className:"name",children:Object(l.jsx)("div",{children:s})})]})}),z=function(){return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("h3",{children:"Our Top Rankers!!"}),Object(l.jsx)(q,{name:"Abhishek",rank:1}),Object(l.jsx)(q,{name:"Abhi",rank:2}),Object(l.jsx)(q,{name:"Abhishek Barve",rank:3}),Object(l.jsx)(q,{name:"Abhishek",rank:4})]})},g=function(e){for(var t=e.quiz.results.length,s=[],c=0;c<t;c++){var i="/react-quiz-app/quiz/".concat(c);s.push(i)}return Object(l.jsx)("div",{className:"question-navigator",children:s.map((function(e,t){return Object(l.jsx)(r.b,{to:e,children:Object(l.jsxs)("span",{children:["Question ",t+1]})},t)}))})},k=function(e){var t=e.quizOn,s=p("https://opentdb.com/api.php?amount=10&category=31&difficulty=easy"),c=s.data,i=s.isLoading,n=s.error;return Object(l.jsxs)(l.Fragment,{children:[t?c&&Object(l.jsx)(g,{quiz:c}):Object(l.jsx)(z,{}),Object(l.jsx)("div",{className:"main-area",children:c&&Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(v,{quiz:c,isLoading:i,error:n}):Object(l.jsx)(f,{})})})]})},A=(s(21),function(){return Object(l.jsxs)("div",{className:"register",children:[Object(l.jsx)("div",{className:"heading",children:"Register Here"}),Object(l.jsxs)("div",{className:"registration-form",children:[Object(l.jsxs)("form",{action:"#",children:[Object(l.jsxs)("div",{className:"form-input",children:[Object(l.jsx)("label",{htmlFor:"fName",children:"First Name:"}),Object(l.jsx)("input",{type:"text",name:"fName",id:"fName"})]}),Object(l.jsxs)("div",{className:"form-input",children:[Object(l.jsx)("label",{htmlFor:"lName",children:"Last Name:"}),Object(l.jsx)("input",{type:"text",name:"lName",id:"lName"})]}),Object(l.jsxs)("div",{className:"form-input",children:[Object(l.jsx)("label",{htmlFor:"emailID",children:"Email ID:"}),Object(l.jsx)("input",{type:"email",name:"emailID",id:"emailID"})]}),Object(l.jsxs)("div",{className:"form-input",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Enter Password:"}),Object(l.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("button",{type:"submit",children:"REGISTER"}),Object(l.jsx)("button",{type:"reset",children:"RESET"}),Object(l.jsx)("button",{children:"GO BACK"})]})]}),Object(l.jsxs)("div",{className:"sign-up-with",children:[Object(l.jsx)("button",{children:"SIGN UP WITH GOOGLE"}),Object(l.jsx)("button",{children:"SIGN UP WITH FACEBOOK"}),Object(l.jsx)("button",{children:"SIGN UP WITH GITHUB"})]})]})]})}),I=function(){return Object(l.jsxs)("div",{className:"register",children:[Object(l.jsx)("div",{className:"heading",children:"Sign In Here"}),Object(l.jsxs)("div",{className:"registration-form",children:[Object(l.jsxs)("form",{action:"#",children:[Object(l.jsxs)("div",{className:"form-input",children:[Object(l.jsx)("label",{htmlFor:"emailID",children:"Email ID:"}),Object(l.jsx)("input",{type:"email",name:"emailID",id:"emailID"})]}),Object(l.jsxs)("div",{className:"form-input",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Enter Password:"}),Object(l.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsx)("button",{type:"submit",children:"SIGN IN"}),Object(l.jsx)("button",{type:"reset",children:"RESET"}),Object(l.jsx)("button",{children:"GO BACK"})]})]}),Object(l.jsxs)("div",{className:"sign-up-with",children:[Object(l.jsx)("button",{children:"SIGN IN WITH GOOGLE"}),Object(l.jsx)("button",{children:"SIGN IN WITH FACEBOOK"}),Object(l.jsx)("button",{children:"SIGN IN WITH GITHUB"})]})]})]})};var S=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)("div",{className:"main-body",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/react-quiz-app/",children:Object(l.jsx)(k,{quizOn:!1})}),Object(l.jsx)(j.a,{exact:!0,path:"/react-quiz-app/quiz/:qn",children:Object(l.jsx)(k,{quizOn:!0})}),Object(l.jsxs)(j.a,{exact:!0,path:"/react-quiz-app/register",children:[Object(l.jsx)(z,{}),Object(l.jsx)(A,{})]}),Object(l.jsxs)(j.a,{exact:!0,path:"/react-quiz-app/sign-in",children:[Object(l.jsx)(z,{}),Object(l.jsx)(I,{})]})]})}),Object(l.jsx)(d,{})]})})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.a5296c7a.chunk.js.map