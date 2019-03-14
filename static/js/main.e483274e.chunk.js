(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,n){e.exports={self:"OpenUnreadButton_self__3rPAS",help:"OpenUnreadButton_help__2ug8A"}},242:function(e,t,n){e.exports=n(422)},250:function(e,t,n){},254:function(e,t,n){},366:function(e,t,n){},422:function(e,t,n){"use strict";n.r(t);n(243);var r=n(0),a=n.n(r),i=n(60),s=n.n(i),o=(n(250),n(7)),c=n.n(o),u=n(15),l=n(28),f=n(29),h=n(230),p=n(204),m=n(231),v=(n(254),n(427)),d=n(437),b=n(438),g=n(423),k=n(433),w=function(e){return a.a.createElement(d.a,{fixed:"top",inverted:!0},a.a.createElement(v.a,null,a.a.createElement(d.a.Item,{header:!0},a.a.createElement(b.a,{as:"h3",inverted:!0},a.a.createElement(g.a,{size:"mini",src:"logo.png",style:{marginRight:"1.5em"}}),"Notifissue")),a.a.createElement(d.a.Menu,{position:"right"},a.a.createElement(d.a.Item,null,e.user&&a.a.createElement(k.a,{header:"Signed in by GitHub",trigger:a.a.createElement("span",{style:{color:"white"}},a.a.createElement(g.a,{avatar:!0,src:e.user.avatar_url}),e.user.name),options:[{key:"unregister",text:"Unregister token",icon:"sign out",onClick:e.onStartUnregister}]})))))},y=function(){function e(t){Object(l.a)(this,e),this.timer=-1,this.minInterval=3e4,this.task=void 0,this.taskWaiting=!1,this.task=t}return Object(f.a)(e,[{key:"setNextTime",value:function(e){var t=this;this.stopTimer(),this.taskWaiting=!0;var n=e.lastFetched,r=e.pollInterval,a=Math.max(n.getTime()+1e3*r-(new Date).getTime(),this.minInterval);this.timer=window.setTimeout(function(){t.taskWaiting&&(t.taskWaiting=!1,console.log("[NotificationTrigger] task triggered"),t.task())},a),console.log("[NotificationTrigger] set next time after ".concat(a," ms"))}},{key:"stopTimer",value:function(){clearInterval(this.timer),this.taskWaiting=!1}}]),e}(),x=function(){function e(){Object(l.a)(this,e),this.isGranted=!1,this.lifetime=1e4}return Object(f.a)(e,[{key:"spawnNotification",value:function(e){if(this.isGranted){var t=e.title,n=e.body,r=new Notification(t,{body:n,icon:"./logo.png"});setTimeout(r.close.bind(r),this.lifetime)}else console.warn("Cannot spawn notification for not granted")}},{key:"requestPermissionIfNeeded",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Notification"in window){e.next=2;break}return e.abrupt("return");case 2:if("granted"!==Notification.permission){e.next=5;break}return this.isGranted=!0,e.abrupt("return");case 5:return e.abrupt("return",new Promise(function(e){Notification.requestPermission(function(n){t.isGranted="granted"===n,e()})}));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),N=n(53),O=n(99),j=n(30),E=n(218),T=n.n(E),A=n(100),I=function(e){return function(t){return Object.entries(t).map(function(t){var n=Object(j.a)(t,2),r=n[0],a=n[1];return[e(r),a]}).reduce(function(e,t){var n=Object(j.a)(t,2),r=n[0],a=n[1];return Object(O.a)({},e,Object(N.a)({},r,a))},{})}},S=function(e){return new Promise(function(t){return setTimeout(t,e)})},U=function(e,t){var n=this[e];return n instanceof Date?{$type:"Date",$value:n.getTime()}:t},C=function(e,t){return t&&"Date"===t.$type?new Date(t.$value):t},D=function(e){return JSON.stringify(e,U)},R=function(e){return JSON.parse(e,C)},L="https://github.com",P={pullRequestApi:new A.a("/repos/:owner/:repo/pulls/:number"),pullRequestHtml:new A.a("/:owner/:repo/pull/:number"),issueApi:new A.a("/repos/:owner/:repo/issues/:number"),issueHtml:new A.a("/:owner/:repo/issues/:number")},_=function(e){var t=e.subject,n=t.type,r=t.url,a=new URL(r).pathname,i=e.repository.html_url;switch(n){case"PullRequest":var s=P.pullRequestApi.test(a);return s?L+P.pullRequestHtml.build(s):(console.error('Something wrong on finding HTML URL. Type is "PullRequest", but given URL is '.concat(r)),i);case"Issue":var o=P.issueApi.test(a);return o?L+P.issueHtml.build(o):(console.error('Something wrong on finding HTML URL. Type is "Issue", but given URL is '.concat(r)),i);default:return i}},H=["assign","author","comment","invitation","manual","mention","state_change","subscribed","team_mention"],W=function(){function e(t){Object(l.a)(this,e),this.reasons=void 0,this.bNotification=new x,this.reasons=t.reasons||H}return Object(f.a)(e,[{key:"onNewNotifications",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r,a,i,s,o,u,l=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Notification"in window){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.bNotification.requestPermissionIfNeeded();case 4:if(this.bNotification.isGranted){e.next=6;break}return e.abrupt("return");case 6:(n=t.filter(function(e){return l.reasons.includes(e.reason)})).length>0&&console.log("[NotificationNotifier] ".concat(n.length," new notifications")),r=!0,a=!1,i=void 0,e.prev=11,s=n[Symbol.iterator]();case 13:if(r=(o=s.next()).done){e.next=21;break}return u=o.value,this.bNotification.spawnNotification({title:u.subject.type,body:u.subject.title}),e.next=18,S(3e3);case 18:r=!0,e.next=13;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(11),a=!0,i=e.t0;case 27:e.prev=27,e.prev=28,r||null==s.return||s.return();case 30:if(e.prev=30,!a){e.next=33;break}throw i;case 33:return e.finish(30);case 34:return e.finish(27);case 35:case"end":return e.stop()}},e,this,[[11,23,27,35],[28,,30,34]])}));return function(t){return e.apply(this,arguments)}}()}]),e}(),K=n(219),F=n(220),G=n.n(F),M=n(221),q=n(430),B="https://api.github.com/notifications",Y="https://api.github.com/user",z=I(M.snake),$=I(function(e){return e instanceof Date?e.toISOString():"boolean"===typeof e?e?"true":"false":e}),J=Object(q.a)(z,$,function(e){return G.a.stringify(e,{format:"RFC1738"})}),Q=function(){function e(t){Object(l.a)(this,e),this.accessToken=void 0,this.accessToken=t.accessToken}return Object(f.a)(e,[{key:"fetchNotifications",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r,a,i,s,o,u,l,f,h,p,m,v,d,b,g;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=B+"?"+J(Object(O.a)({accessToken:this.accessToken},t)),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,i={},s=!0,o=!1,e.prev=10,l=Object(K.a)(r.headers.entries());case 12:return e.next=14,l.next();case 14:return f=e.sent,s=f.done,e.next=18,f.value;case 18:if(h=e.sent,s){e.next=25;break}p=h,m=Object(j.a)(p,2),v=m[0],d=m[1],i[v.toLowerCase()]=d;case 22:s=!0,e.next=12;break;case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(10),o=!0,u=e.t0;case 31:if(e.prev=31,e.prev=32,s||null==l.return){e.next=36;break}return e.next=36,l.return();case 36:if(e.prev=36,!o){e.next=39;break}throw u;case 39:return e.finish(36);case 40:return e.finish(31);case 41:if(b=i,g={lastModified:new Date(b["last-modified"]),lastFetched:new Date,pollInterval:Number(b["x-poll-interval"])},r.ok){e.next=47;break}if(304!==r.status){e.next=46;break}return e.abrupt("return",{meta:g,notifications:[]});case 46:throw new Error(a.message);case 47:return e.abrupt("return",{meta:g,notifications:a});case 48:case"end":return e.stop()}},e,this,[[10,27,31,41],[32,,36,40]])}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchAuthenticatedUser",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Y+"?"+J({accessToken:this.accessToken}),e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Failed to fetch user: ".concat(n.status," ").concat(n.statusText)),e.abrupt("return",null);case 7:return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),V=n(150),X=n(431),Z=n(428),ee=Object(X.a)(function(e){return e.id}),te=Object(Z.a)(function(e,t){return new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()}),ne=function(){function e(){Object(l.a)(this,e),this.storage=window.localStorage,this.maxNotifications=500,this.notificationKey="github:notification:items",this.metaKey="github:notification:meta",this.tokenKey="github:token",this.userKey="github:user"}return Object(f.a)(e,[{key:"drop",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.clear();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getNotifications",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.storage.getItem(this.notificationKey)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.abrupt("return",R(t));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveNotifications",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNotifications();case 2:n=e.sent,r=ee([].concat(Object(V.a)(t),Object(V.a)(n))),a=te(r),this.storage.setItem(this.notificationKey,D(a));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"cleanUpOldNotifications",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNotifications();case 2:if(!((t=e.sent).length<=this.maxNotifications)){e.next=5;break}return e.abrupt("return");case 5:n=t.slice(0,this.maxNotifications),this.storage.setItem(this.notificationKey,D(n));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getNotificationMeta",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.storage.getItem(this.metaKey)){e.next=3;break}return e.abrupt("return",null);case 3:return e.abrupt("return",R(t));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveNotificationMeta",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.setItem(this.metaKey,D(t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"saveAccessToken",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.setItem(this.tokenKey,t);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAccessToken",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.storage.getItem(this.tokenKey));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"clearAccessToken",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.removeItem(this.tokenKey);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveUser",value:function(){var e=Object(u.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.setItem(this.userKey,D(t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.storage.getItem(this.userKey)){e.next=3;break}return e.abrupt("return",null);case 3:return e.abrupt("return",R(t));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"clearUser",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.removeItem(this.userKey);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),re=function(){function e(t){Object(l.a)(this,e),this.api=void 0,this.db=void 0,this.ui=void 0,this.readyToken=!1,this.api=new Q({accessToken:""}),this.db=new ne,this.ui=t,Object.assign(window,{app:{db:this.db,api:this.api}})}return Object(f.a)(e,[{key:"register",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.api.accessToken=t,e.next=3,this.api.fetchAuthenticatedUser();case 3:if(n=e.sent){e.next=7;break}return this.api.accessToken="",e.abrupt("return",null);case 7:return e.next=9,this.db.saveUser(n);case 9:return e.next=11,this.db.saveAccessToken(t);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"unregister",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.drop();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"syncFromAPI",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r,a,i,s,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t||{}).all,r=void 0===n||n,e.next=3,this.api.fetchNotifications({all:r});case 3:return a=e.sent,i=a.meta,s=a.notifications,e.next=8,this.filterNewNotifications(s);case 8:return o=e.sent,this.ui.onNewNotifications(o),e.next=12,this.db.saveNotifications(s);case 12:return e.next=14,this.db.saveNotificationMeta(i);case 14:return e.t0=this.ui,e.next=17,this.db.getNotifications();case 17:e.t1=e.sent,e.t2=i,e.t3={notifications:e.t1,meta:e.t2},e.t0.onData.call(e.t0,e.t3);case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"restoreFromDB",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t,n,r,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.getAccessToken();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:return this.readyToken=!0,this.api.accessToken=t,e.next=9,this.db.getNotifications();case 9:return n=e.sent,e.next=12,this.db.getNotificationMeta();case 12:return r=e.sent,e.next=15,this.db.getUser();case 15:a=e.sent,this.ui.onData({notifications:n,meta:r,user:a||void 0});case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"filterNewNotifications",value:function(){var e=Object(u.a)(c.a.mark(function e(t){var n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.getNotifications();case 2:return e.t0=function(e,t){return Object.assign(e,Object(N.a)({},t.id,t))},e.t1={},n=e.sent.reduce(e.t0,e.t1),r=t.filter(function(e){var t=e.id,r=e.updated_at;if(!e.unread)return!1;var a=n[t];return!a||a.updated_at!==r}),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),ae=n(434),ie=n(203),se=(n(366),function(e){return a.a.createElement("span",{className:"NotificationListItem-desc-item"},e.children)}),oe=function(e){var t,n=e.notification,r=n.subject,i=n.updated_at,s=n.unread,o=n.repository,c=n.reason,u=r.title,l=r.type,f=_(n);return a.a.createElement(ae.a.Item,{className:"NotificationListItem",as:"a",target:"_blank",href:f},a.a.createElement(ae.a.Content,{floated:"right"},a.a.createElement(ie.a,{tag:!0},l,a.a.createElement(ie.a.Detail,null,c))),a.a.createElement(ae.a.Icon,{name:s?"circle outline":"check circle outline",verticalAlign:"top"}),a.a.createElement(ae.a.Content,null,a.a.createElement(ae.a.Header,null,u),a.a.createElement(ae.a.Description,{className:"NotificationListItem-desc"},a.a.createElement(se,null,o.full_name),a.a.createElement(se,null,"At ",(t=i,T()(t).format("YYYY/MM/DD HH:mm"))))))},ce=function(e){var t=e.notifications;return"unread"===e.filter&&(t=t.filter(function(e){return e.unread})),a.a.createElement(ae.a,{divided:!0,verticalAlign:"middle",relaxed:"very",selection:!0,className:"NotificationList"},t.map(function(e){return a.a.createElement(oe,{key:e.id,notification:e})}))},ue=n(440),le=n(435),fe=n(429),he=n(436),pe=function(e){var t=e.onRegister,n=e.errorToken,i=Object(r.useState)(""),s=Object(j.a)(i,2),o=s[0],l=s[1],f=Object(r.useState)(!1),h=Object(j.a)(f,2),p=h[0],m=h[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{as:"h1",icon:!0,textAlign:"center"},a.a.createElement(g.a,{size:"massive",src:"logo.png"}),a.a.createElement(b.a.Content,null,"Notifissue"),a.a.createElement(b.a.Subheader,null,"GitHub notification timeline with web notification")),a.a.createElement(ue.a,{className:"Welcome-segment",basic:!0,textAlign:"center"},"Nottisue let you know GitHub notifications by web notification. All you need to do is to register your GitHub access token. It will be saved in local storage. Then, you get GitHub notifications through your browser."),a.a.createElement(ue.a,{className:"Welcome-segment",basic:!0,textAlign:"center"},a.a.createElement(b.a,{as:"h3"},"Get started"),a.a.createElement(le.a,{negative:!0,className:"Welcome-input-error",size:"mini",hidden:!n},a.a.createElement(le.a.Header,null,"Invalid access token.")),a.a.createElement(fe.a,{action:a.a.createElement(he.a,{primary:!0,loading:p,onClick:function(){var e=Object(u.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return");case 2:return m(!0),e.next=5,t(o);case 5:m(!1);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},"Save"),placeholder:"GitHub Access Token",onChange:function(e,t){var n=t.value;l(n)}})))},me=n(432),ve=function(e){var t=e.open,n=e.onClose,r=e.onOk;return a.a.createElement(me.a,{size:"mini",open:t,onClose:n},a.a.createElement(me.a.Header,null,"Delete Your Access Token"),a.a.createElement(me.a.Content,null,"Are you sure?"),a.a.createElement(me.a.Actions,null,a.a.createElement(he.a,{negative:!0,content:"No",onClick:n}),a.a.createElement(he.a,{positive:!0,icon:"checkmark",labelPosition:"right",content:"Yes",onClick:r})))},de=function(e){var t=function(t,n){var r=n.name;return e.onChange(r)};return a.a.createElement(ue.a,{basic:!0,textAlign:"center"},a.a.createElement(d.a,{compact:!0,color:"blue"},a.a.createElement(d.a.Item,{name:"unread",active:"unread"===e.filter,onClick:t,content:"UNREAD"}),a.a.createElement(d.a.Item,{name:"all",active:"all"===e.filter,onClick:t,content:"ALL"})))},be=n(149),ge=n.n(be),ke=function(e,t){return new Date(e.updated_at).getTime()-new Date(e.updated_at).getTime()},we=function(e){var t=e.notifications.filter(function(e){return e.unread}).sort(ke),n=Object(r.useState)(!1),i=Object(j.a)(n,2),s=i[0],o=i[1],l=function(){var e=Object(u.a)(c.a.mark(function e(){var n,r,a,i,s,u,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o(!0),n=!0,r=!1,a=void 0,e.prev=4,i=t[Symbol.iterator]();case 6:if(n=(s=i.next()).done){e.next=15;break}return u=s.value,l=_(u),window.open(l),e.next=12,S(2e3);case 12:n=!0,e.next=6;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),r=!0,a=e.t0;case 21:e.prev=21,e.prev=22,n||null==i.return||i.return();case 24:if(e.prev=24,!r){e.next=27;break}throw a;case 27:return e.finish(24);case 28:return e.finish(21);case 29:o(!1);case 30:case"end":return e.stop()}},e,this,[[4,17,21,29],[22,,24,28]])}));return function(){return e.apply(this,arguments)}}();return a.a.createElement("span",{className:ge.a.self},a.a.createElement(he.a,{basic:!0,color:"black",loading:s,disabled:s,onClick:l,content:"OPEN ALL UNREAD"}),a.a.createElement(me.a,{trigger:a.a.createElement(he.a,{circular:!0,size:"tiny",className:ge.a.help,icon:"help"})},a.a.createElement(me.a.Header,null,"OPEN ALL UNREAD button"),a.a.createElement(me.a.Content,null,a.a.createElement("p",null,'Allow browser pop-up feature to use the "OPEN ALL UNREAD" button.'))))},ye=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).trigger=void 0,n.hub=void 0,n.notifier=void 0,n.state={notifications:[],meta:null,user:void 0,ready:!1,readyToken:!1,errorToken:!1,unregisterActive:!1,filter:"unread"},n.onRegister=function(){var e=Object(u.a)(c.a.mark(function e(t){var r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.hub.register(t);case 2:(r=e.sent)?(n.setState({readyToken:!0,errorToken:!1,user:r}),n.startPolling()):n.setState({errorToken:!0});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.onStartUnregister=function(){n.setState({unregisterActive:!0})},n.onChangeFilter=function(e){n.setState({filter:e})},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.notifications,r=t.ready,i=t.readyToken,s=t.errorToken,o=t.user,l=t.unregisterActive,f=t.filter;return a.a.createElement("div",{className:"App"},a.a.createElement(w,{user:o,onStartUnregister:this.onStartUnregister}),a.a.createElement(v.a,{text:!0,style:{paddingTop:"5em",marginBottom:"2em"}},r&&i&&a.a.createElement(a.a.Fragment,null,a.a.createElement(de,{filter:f,onChange:this.onChangeFilter}),a.a.createElement("div",{className:"App-OpenUnreadButton"},a.a.createElement(we,{notifications:n})),a.a.createElement(ce,{notifications:n,filter:f})),r&&!i&&a.a.createElement(pe,{onRegister:this.onRegister,errorToken:s})),a.a.createElement(ve,{open:l,onClose:function(){return e.setState({unregisterActive:!1})},onOk:Object(u.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({unregisterActive:!1}),t.next=3,e.hub.unregister();case 3:location.reload();case 4:case"end":return t.stop()}},t,this)}))}))}},{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.notifier=new W({}),this.hub=new re({onData:function(e){return t.setState(e)},onNewNotifications:function(){var e=Object(u.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.notifier.onNewNotifications(n);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}),this.trigger=new y(Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.hub.syncFromAPI();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:t.trigger.setNextTime(t.state.meta);case 9:case"end":return e.stop()}},e,this,[[0,5]])}))),e.next=5,this.hub.restoreFromDB();case 5:this.hub.readyToken&&(this.startPolling(),this.setState({readyToken:!0})),this.setState({ready:!0});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.stopPolling()}},{key:"startPolling",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.hub.syncFromAPI({all:!0});case 2:this.trigger.setNextTime(this.state.meta);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"stopPolling",value:function(){this.trigger.stopTimer()}}]),t}(r.Component),xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(a.a.createElement(ye,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/notifissue",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/notifissue","/service-worker.js");xe?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Ne(t,e)})}}()}},[[242,2,1]]]);
//# sourceMappingURL=main.e483274e.chunk.js.map