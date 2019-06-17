(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),c=n.n(o),l=(n(31),n(19)),i=n(20),s=n(24),u=n(21),m=n(25),p=n(6),d=n(7),h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello, welcome to Magical Lines!"),r.a.createElement("p",null,"This site was created to help people learn about application development. While this blog has many posts detailing application development and its components, it\u2019s not designed to be a step-by-step tutorial. I designed the blog as a teaching tool first and foremost, but it is designed to be simple, clean, and responsive. I used MERN stack as my starting points and narrowed them down to what I considered to be the essentials. The menu is manually generated but is responsive and built on pure CSS. The HTML focuses on semantics and is built with accessibility in mind. The CSS is not based on any framework, and only contains what the blog needs, there are no layout grids or extra UI classes."))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,"My name is Abrar Zahin. I\u2019m a Student at Queens college and I\u2019ve been doing application development for two years. I love what I do and hope you find this website useful. If you see me out at a conference or event please say hello. My favorite form of communication is linkedin, feel free to connect @ https://www.linkedin.com/in/abrar-zahin-995648152/. I have some cool projects you might want to check out. And also can checkout the codes in my github profile @ github.com/abrarzahin ."))},E=function(e){var t=e.articles;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement(p.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.content[0].substring(0,150),"..."))}))},b=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing ..."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing...."]}],v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Articles"),r.a.createElement(E,{articles:b}))},g=n(5),w=n.n(g),y=n(8),k=n(11),j=function(e){var t=e.comments;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comments:"),t.map(function(e,t){return r.a.createElement("div",{className:"comment",key:t},r.a.createElement("h4",null,e.username),r.a.createElement("p",null,e.text))}))},O=function(e){var t=e.articleName,n=e.upvotes,a=e.setArticleInfo,o=function(){var e=Object(y.a)(w.a.mark(function e(){var n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a(r);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"upvotes-section"},r.a.createElement("button",{onClick:function(){return o()}},"Add Upvote"),r.a.createElement("p",null,"This post has been upvoted ",n," times"))},x=function(e){var t=e.articleName,n=e.setArticleInfo,o=Object(a.useState)(""),c=Object(k.a)(o,2),l=c[0],i=c[1],s=Object(a.useState)(""),u=Object(k.a)(s,2),m=u[0],p=u[1],d=function(){var e=Object(y.a)(w.a.mark(function e(){var a,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:l,text:m}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n(r),i(""),p("");case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"add-comment-form"},r.a.createElement("h3",null,"Add a Comment"),r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",value:l,onChange:function(e){return i(e.target.value)}})),r.a.createElement("label",null,"Comment:",r.a.createElement("textarea",{rows:"4",cols:"50",value:m,onChange:function(e){return p(e.target.value)}})),r.a.createElement("button",{onClick:function(){return d()}},"Add Comment"))},I=function(){return r.a.createElement("h1",null,"404: Page Not Found")},A=function(e){var t=e.match.params.name,n=b.find(function(e){return e.name===t}),o=Object(a.useState)({upvotes:0,comments:[]}),c=Object(k.a)(o,2),l=c[0],i=c[1];if(Object(a.useEffect)(function(){!function(){var e=Object(y.a)(w.a.mark(function e(){var n,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),!n)return r.a.createElement(I,null);var s=b.filter(function(e){return e.name!==t});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,n.title),r.a.createElement(O,{articleName:t,upvotes:l.upvotes,setArticleInfo:i}),n.content.map(function(e,t){return r.a.createElement("p",{key:t},e)}),r.a.createElement(j,{comments:l.comments}),r.a.createElement(x,{articleName:t,setArticleInfo:i}),r.a.createElement("h3",null,"Other Articles:"),r.a.createElement(E,{articles:s}))},N=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/articles-list"},"Articles"))))},C=(n(37),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:h,exact:!0}),r.a.createElement(d.a,{path:"/about",component:f}),r.a.createElement(d.a,{path:"/articles-list",component:v}),r.a.createElement(d.a,{path:"/article/:name",component:A}),r.a.createElement(d.a,{component:I})))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.c33cc914.chunk.js.map