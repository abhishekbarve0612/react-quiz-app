(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{16:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);for(var s=c(1),n=c.n(s),r=c(17),a=c.n(r),i=(c(35),c(36),c(3)),o=c(4),l=c(5),j=(c(41),c(0)),d=function(){return Object(j.jsx)("div",{className:"footer",children:"Being Developed By - Abhishek Barve"})},u=(c(43),c.p+"static/media/logo.6ce24c58.svg"),b=function(){return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsxs)("div",{className:"brand",children:[Object(j.jsx)("div",{className:"brand-icon",children:Object(j.jsx)("img",{src:u,alt:"logo"})}),Object(j.jsx)("div",{className:"brand-name",children:"React Quiz App"})]}),Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(i.b,{to:"/react-quiz-app/",children:"Home"})}),Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(i.b,{to:"/react-quiz-app/random-quiz/",children:"Play Random Quiz"})}),Object(j.jsx)("div",{className:"item",children:Object(j.jsx)("a",{href:"#opt3",children:"ScoreCard"})}),Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(i.b,{to:"/react-quiz-app/register",children:"Register"})}),Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(i.b,{to:"/react-quiz-app/sign-in",children:"Sign In"})})]})]})},O=c(19),h=c(26),m=function(e){var t=e.value,c=(e.markedAnswers,e.checkIfMarked),n=e.qno,r=e.markAnswer,a=Object(s.useRef)(null);return Object(s.useEffect)((function(){if(a){var e=a.current;c(n,t,e)}})),Object(j.jsxs)("div",{className:"option",ref:a,value:t,onClick:function(e){r(e,n)},children:[Object(j.jsx)("input",{type:"checkbox"}),Object(j.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})]})},p=function(e){var t=e.markedAnswers,c=e.question,n=e.markAnswer,r=e.checkIfMarked,a=e.optionsArray,i=Object(o.g)().qn,l=c[i];return console.log(c+"[[[[[[[[[[[[[[[[["),Object(s.useEffect)((function(){}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"question",children:[Object(j.jsx)("div",{className:"q",children:"Q"}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:l.question}})]}),Object(j.jsx)("div",{className:"options",children:a[i].map((function(e,c){return Object(j.jsx)(m,{checkIfMarked:r,value:e,markAnswer:n,markedAnswers:t,qno:i},c)}))})]})},x=(c(16),function(){var e=Object(o.g)(),t=Object(l.c)((function(e){return e.quiz.questionCount})),c=parseInt(e.qn),s=null,n=null;return c>0&&(s=c-1),c<t-1&&(n=c+1),Object(j.jsxs)("div",{className:"quiz-nav",children:[c>0&&Object(j.jsx)(i.b,{className:"previous primary-color",to:"/react-quiz-app/quiz/".concat(e.qid,"/").concat(s),children:Object(j.jsx)("span",{children:"Previous"})}),n&&Object(j.jsx)(i.b,{className:"next primary-color",to:"/react-quiz-app/quiz/".concat(e.qid,"/").concat(n),children:Object(j.jsx)("span",{children:"Next"})}),Object(j.jsx)(i.b,{className:"submit success-color",to:"/react-quiz-app/quiz/result",children:Object(j.jsx)("span",{children:"Submit"})}),Object(j.jsx)(i.b,{className:"close danger-color",to:"/react-quiz-app/",children:Object(j.jsx)("div",{children:"Close"})})]})}),v=c(20),f=function(e){var t=Object(s.useState)(null),c=Object(v.a)(t,2),n=c[0],r=c[1],a=Object(s.useState)(null),i=Object(v.a)(a,2),o=i[0],l=i[1],j=Object(s.useState)(!0),d=Object(v.a)(j,2),u=d[0],b=d[1];return Object(s.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){return e.json()})).then((function(e){b(!1),r(e),l(null)})).catch((function(e){"AbortError"===e.name||(l(e.message),b(!1))})),function(){t.abort()}}),[e]),{data:n,isLoading:u,error:o}},N="INCREMENT_SCORE",g="SET_QUIZ",q="MARKED_ANSWERS",y="SET_CATEGORY",z="SET_GUEST_USER",k="SET_QUESTION_COUNT",S="SET_DIFFICULTY",I=[],A=0;A<10;A++)I[A]="";for(var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:31;return{type:y,payload:e}},T=function(){Object(l.c)((function(e){return e.score.totalScore}));var e=Object(l.c)((function(e){return e.quiz.markedAnswers})),t=(Object(l.c)((function(e){return e.quiz.quiz})),Object(l.c)((function(e){return e.quiz.questionCount}))),c=Object(l.c)((function(e){return e.quiz.category})),n=Object(l.c)((function(e){return e.quiz.difficulty})),r=Object(l.b)(),a=Object(o.g)();console.log(t+" "+n),r(E(a.qid));var i="https://opentdb.com/api.php?amount=".concat(t,"&category=").concat(c,"&difficulty=").concat(n);console.log(i);var d=f(i),u=d.data,b=d.isLoading,m=d.error;r(function(){return{type:g,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}(u));var v=function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),s=[e[c],e[t]];e[t]=s[0],e[c]=s[1]}},y=[];if(null!=u){for(var z=0;z<u.results.length;z++){var k=[].concat(Object(h.a)(u.results[z].incorrect_answers),[u.results[z].correct_answer]);v(k),y.push(k)}console.log(y+"randomized"),console.log(u.results+" Original")}var S=function(){if(u){a.qn;var t=u.results;console.log("Checkin correct answers"),console.log(t);var c,s=[],n=0,i=Object(O.a)(u.results);try{for(i.s();!(c=i.n()).done;){var o=c.value;s[n]=o.correct_answer,n++}}catch(d){i.e(d)}finally{i.f()}console.log(s);for(var l=0,j=0;j<s.length;j++)s[j]==e[j]&&l++;console.log("Total Score Till Now: "+l),r(function(){return{type:N,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}}(l))}};return Object(s.useEffect)((function(){S()})),Object(j.jsxs)("div",{className:"quiz",children:[b&&Object(j.jsx)("div",{children:"Content Is Loading"}),m&&Object(j.jsxs)("div",{children:["Error ",m," "]}),Object(j.jsxs)("div",{className:"quiz-header",children:[null!=u&&Object(j.jsxs)("div",{className:"quiz-title",children:["Quiz Title: ",c]}),Object(j.jsx)("div",{className:"quiz-creator",children:"Quiz Creator"}),Object(j.jsx)("div",{className:"quiz-score",children:"Top Score: 0"})]}),u&&Object(j.jsxs)("div",{className:"quiz-body",children:[Object(j.jsx)(p,{question:u.results,checkIfMarked:function(t,c,s){var n=s.children;e[t]==c?(s.classList.add("marked"),n[0].checked=!0):(s.classList.remove("marked"),n[0].checked=!1)},markAnswer:function(t,c){var s=Object(h.a)(e);if("INPUT"==t.target.nodeName||"SPAN"==t.target.nodeName){var n=t.target.parentElement,a=n.children;n.classList.contains("marked")?(n.classList.remove("marked"),a[0].checked=!1,s[c]=""):(n.classList.add("marked"),a[0].checked=!0,s[c]=n.getAttribute("value"))}else{var i=t.target,o=t.target.children;i.classList.contains("marked")?(i.classList.remove("marked"),o[0].checked=!1,s[c]=""):(i.classList.add("marked"),o[0].checked=!0,s[c]=i.getAttribute("value"))}r(function(){return{type:q,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:I}}(s))},optionsArray:y,markedAnswers:e}),Object(j.jsx)(x,{})]})]})},C=function(e){var t=e.name,c=e.creator,s=e.date,n=e.attemptCount,r=e.topScorer;return Object(j.jsxs)("div",{className:"quiz-info",children:[Object(j.jsxs)("div",{className:"quiz-info-head",children:[Object(j.jsx)("div",{className:"quiz-name",children:t}),Object(j.jsx)("div",{className:"quiz-attempt",children:Object(j.jsx)("button",{children:"Attempt Now"})})]}),Object(j.jsxs)("div",{className:"quiz-details",children:[Object(j.jsxs)("div",{className:"attempted-by",children:["Attempted By: ",n]}),Object(j.jsxs)("div",{className:"creator",children:["Created By: ",c]}),Object(j.jsxs)("div",{className:"created-date",children:["Created On: ",s]}),Object(j.jsxs)("div",{className:"top-scorer",children:["Top Scorer: ",r]})]})]})},w=function(){var e,t=f("https://opentdb.com/api_category.php"),c=t.data;t.isLoading,t.error;return c&&(e=c.trivia_categories),Object(j.jsxs)("div",{className:"quiz-list-category",children:[c&&Object(j.jsx)("div",{className:"categories",children:e.map((function(e,t){return Object(j.jsx)(i.b,{to:"/react-quiz-app/quiz/".concat(e.id,"/0"),children:Object(j.jsx)("span",{children:e.name})},t)}))}),Object(j.jsxs)("div",{className:"quiz-list",children:[Object(j.jsx)(C,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(j.jsx)(C,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"}),Object(j.jsx)(C,{name:"Abhishek's Quiz",creator:"Abhishek",date:"12-02-2022",attemptCount:32,topScorer:"Abhishek Barve"})]})]})},L=(c(28),function(e){var t=e.rank,c=e.name;return Object(j.jsxs)("div",{className:"ranker",children:[Object(j.jsx)("div",{className:"rank",children:Object(j.jsxs)("div",{children:["Rank: ",t]})}),Object(j.jsx)("div",{className:"name",children:Object(j.jsx)("div",{children:c})})]})}),G=function(){return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("h3",{children:"Our Top Rankers!!"}),Object(j.jsx)(L,{name:"Abhishek",rank:1}),Object(j.jsx)(L,{name:"Abhi",rank:2}),Object(j.jsx)(L,{name:"Abhishek Barve",rank:3}),Object(j.jsx)(L,{name:"Abhishek",rank:4})]})},R=function(){for(var e=Object(o.g)(),t=Object(l.c)((function(e){return e.quiz.questionCount})),c=[],s=0;s<t;s++){var n="/react-quiz-app/quiz/".concat(e.qid,"/").concat(s);c.push(n)}return Object(j.jsx)("div",{className:"question-navigator",children:c.map((function(e,t){return Object(j.jsx)(i.b,{to:e,children:Object(j.jsxs)("span",{children:["Question ",t+1]})},t)}))})},F=function(e){var t=e.quizOn,c=(e.category,Object(o.g)()),s="https://opentdb.com/api.php?amount=10&category=".concat(c.qid,"&difficulty=easy"),n=f(s);n.data,n.isLoading,n.error;return Object(j.jsxs)(j.Fragment,{children:[t?Object(j.jsx)(R,{}):Object(j.jsx)(G,{}),Object(j.jsx)("div",{className:"main-area",children:t?Object(j.jsx)(T,{}):Object(j.jsx)(w,{})})]})},_=(c(29),function(){return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"heading",children:"Register Here"}),Object(j.jsxs)("div",{className:"registration-form",children:[Object(j.jsxs)("form",{action:"#",children:[Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:"fName",children:"First Name:"}),Object(j.jsx)("input",{type:"text",name:"fName",id:"fName"})]}),Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:"lName",children:"Last Name:"}),Object(j.jsx)("input",{type:"text",name:"lName",id:"lName"})]}),Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:"emailID",children:"Email ID:"}),Object(j.jsx)("input",{type:"email",name:"emailID",id:"emailID"})]}),Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Enter Password:"}),Object(j.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(j.jsxs)("div",{className:"form-buttons",children:[Object(j.jsx)("button",{type:"submit",children:"REGISTER"}),Object(j.jsx)("button",{type:"reset",children:"RESET"}),Object(j.jsx)("button",{children:"GO BACK"})]})]}),Object(j.jsxs)("div",{className:"sign-up-with",children:[Object(j.jsx)("button",{children:"SIGN UP WITH GOOGLE"}),Object(j.jsx)("button",{children:"SIGN UP WITH FACEBOOK"}),Object(j.jsx)("button",{children:"SIGN UP WITH GITHUB"})]})]})]})}),B=function(){return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsx)("div",{className:"heading",children:"Sign In Here"}),Object(j.jsxs)("div",{className:"registration-form",children:[Object(j.jsxs)("form",{action:"#",children:[Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:"emailID",children:"Email ID:"}),Object(j.jsx)("input",{type:"email",name:"emailID",id:"emailID"})]}),Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Enter Password:"}),Object(j.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(j.jsxs)("div",{className:"form-buttons",children:[Object(j.jsx)("button",{type:"submit",children:"SIGN IN"}),Object(j.jsx)("button",{type:"reset",children:"RESET"}),Object(j.jsx)("button",{children:"GO BACK"})]})]}),Object(j.jsxs)("div",{className:"sign-up-with",children:[Object(j.jsx)("button",{children:"SIGN IN WITH GOOGLE"}),Object(j.jsx)("button",{children:"SIGN IN WITH FACEBOOK"}),Object(j.jsx)("button",{children:"SIGN IN WITH GITHUB"})]})]})]})},D=c(12),H=c(6),M=[],Q=0;Q<10;Q++)M[Q]="";var U={markedAnswers:M,quiz:{},questionCount:10,user:"Guest",category:31,difficulty:"easy"},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(H.a)(Object(H.a)({},e),{},{markedAnswers:t.payload});case g:return Object(H.a)(Object(H.a)({},e),{},{quiz:t.payload});case k:return Object(H.a)(Object(H.a)({},e),{},{questionCount:t.payload});case z:return Object(H.a)(Object(H.a)({},e),{},{user:t.payload});case y:return Object(H.a)(Object(H.a)({},e),{},{category:t.payload});case S:return Object(H.a)(Object(H.a)({},e),{},{difficulty:t.payload});default:return e}},W={totalScore:0},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(H.a)(Object(H.a)({},e),{},{totalScore:t.payload});default:return e}},Y=Object(D.b)({quiz:P,score:K}),J=Object(D.c)(Y),Z=function(){var e=Object(l.c)((function(e){return e.score.totalScore})),t=Object(l.c)((function(e){return e.quiz.questionCount})),c=Object(l.c)((function(e){return e.quiz.user}));return Object(j.jsxs)("div",{className:"scorecard",children:[Object(j.jsxs)("div",{className:"res",children:["Congratulations! ",c," ",Object(j.jsx)("br",{}),"You Scored: ",e," ",Object(j.jsx)("br",{}),"Your Success % is ",(e/t*100).toFixed(2)," %"]}),Object(j.jsx)(i.b,{to:"/react-quiz-app/",children:"Go Back To Home"})]})},V=function(e){var t=Object(l.b)(),c=Object(o.f)(),n=f("https://opentdb.com/api_category.php"),r=n.data,a=(n.isLoading,n.error,Object(s.useRef)(null)),i=Object(s.useRef)(null),d=Object(s.useRef)(null),u=[];if(r){var b,h=Object(O.a)(r.trivia_categories);try{for(h.s();!(b=h.n()).done;){var m=b.value;u.push(m.id)}}catch(p){h.e(p)}finally{h.f()}console.log(u)}return Object(j.jsx)("div",{className:"for-guest-user",children:Object(j.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),console.log(d.current.value);var s="";if(""!=d.current.value)switch(d.current.value){case"1":s="easy";break;case"2":s="medium";break;case"3":s="hard";break;default:s=""}""!=s&&t(function(){return{type:S,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"easy"}}(s));var n=u[Math.floor(Math.random()*u.length)];t(E(n)),a.current.value>0&&t(function(){return{type:k,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:10}}(a.current.value)),""!=i.current.value&&t(function(){return{type:z,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"guest"}}(i.current.value)),c.push("/react-quiz-app/quiz/".concat(n,"/0"))},children:[Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(j.jsx)("input",{type:"text",ref:i,name:"name",id:"name"})]}),Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{htmlFor:"questionCount",children:"Enter Question Count:"}),Object(j.jsx)("input",{type:"number",ref:a,name:"questionCount",id:"questionCount"})]}),Object(j.jsxs)("div",{className:"form-input",children:[Object(j.jsx)("label",{for:"cars",children:"Select Difficulty Level:"}),Object(j.jsxs)("select",{ref:d,name:"difficulty",id:"difficulty",children:[Object(j.jsx)("option",{value:"1",children:"Easy"}),Object(j.jsx)("option",{value:"2",children:"Intermediate"}),Object(j.jsx)("option",{value:"3",children:"Difficult"})]})]}),Object(j.jsxs)("div",{className:"form-buttons",children:[Object(j.jsx)("button",{type:"submit",children:"ATTEMPT QUIZ"}),Object(j.jsx)("button",{type:"reset",children:"RESET"}),Object(j.jsx)("button",{children:"GO BACK"})]})]})})};var X=function(){return Object(j.jsx)(l.a,{store:J,children:Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"main-body",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/react-quiz-app/",children:Object(j.jsx)(F,{quizOn:!1})}),Object(j.jsx)(o.a,{exact:!0,path:"/react-quiz-app/random-quiz/",children:Object(j.jsx)(V,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/react-quiz-app/quiz/:qid/:qn",children:Object(j.jsx)(F,{quizOn:!0})}),Object(j.jsx)(o.a,{exact:!0,path:"/react-quiz-app/quiz/result",children:Object(j.jsx)(Z,{})}),Object(j.jsxs)(o.a,{exact:!0,path:"/react-quiz-app/register",children:[Object(j.jsx)(G,{}),Object(j.jsx)(_,{})]}),Object(j.jsxs)(o.a,{exact:!0,path:"/react-quiz-app/sign-in",children:[Object(j.jsx)(G,{}),Object(j.jsx)(B,{})]})]})}),Object(j.jsx)(d,{})]})})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(X,{})}),document.getElementById("root")),$()}},[[45,1,2]]]);
//# sourceMappingURL=main.30378cd1.chunk.js.map