(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{241:function(e,t,n){e.exports=n(420)},249:function(e,t,n){},253:function(e,t,n){},365:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);n(242);var r=n(1),a=n.n(r),i=n(59),s=n.n(i),c=(n(249),n(7)),o=n.n(c),u=n(16),l=n(28),f=n(29),h=n(229),p=n(203),m=n(230),v=(n(253),n(425)),b=n(435),d=n(436),k=n(421),g=n(431),w=function(e){return a.a.createElement(b.a,{fixed:"top",inverted:!0},a.a.createElement(v.a,null,a.a.createElement(b.a.Item,{header:!0},a.a.createElement(d.a,{as:"h3",inverted:!0},a.a.createElement(k.a,{size:"mini",src:"logo.png",style:{marginRight:"1.5em"}}),"Notissue")),a.a.createElement(b.a.Menu,{position:"right"},a.a.createElement(b.a.Item,null,e.user&&a.a.createElement(g.a,{header:"Signed in by GitHub",trigger:a.a.createElement("span",{style:{color:"white"}},a.a.createElement(k.a,{avatar:!0,src:e.user.avatar_url}),e.user.name),options:[{key:"unregister",text:"Unregister token",icon:"sign out",onClick:e.onStartUnregister}]})))))},y=function(){function e(t){Object(l.a)(this,e),this.timer=-1,this.minInterval=3e4,this.task=void 0,this.taskWaiting=!1,this.task=t}return Object(f.a)(e,[{key:"setNextTime",value:function(e){var t=this;this.stopTimer(),this.taskWaiting=!0;var n=e.lastFetched,r=e.pollInterval,a=Math.max(n.getTime()+1e3*r-(new Date).getTime(),this.minInterval);this.timer=window.setTimeout(function(){t.taskWaiting&&(t.taskWaiting=!1,console.log("[NotificationTrigger] task triggered"),t.task())},a),console.log("[NotificationTrigger] set next time after ".concat(a," ms"))}},{key:"stopTimer",value:function(){clearInterval(this.timer),this.taskWaiting=!1}}]),e}(),x=function(){function e(){Object(l.a)(this,e),this.isGranted=!1,this.lifetime=1e4}return Object(f.a)(e,[{key:"spawnNotification",value:function(e){if(this.isGranted){var t=e.title,n=e.body,r=new Notification(t,{body:n});setTimeout(r.close.bind(r),this.lifetime)}else console.warn("Cannot spawn notification for not granted")}},{key:"requestPermissionIfNeeded",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Notification"in window){e.next=2;break}return e.abrupt("return");case 2:if("granted"!==Notification.permission){e.next=5;break}return this.isGranted=!0,e.abrupt("return");case 5:return e.abrupt("return",new Promise(function(e){Notification.requestPermission(function(n){t.isGranted="granted"===n,e()})}));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),j=n(53),O=n(98),N=n(36),T=n(217),E=n.n(T),I=n(99),A=function(e){return function(t){return Object.entries(t).map(function(t){var n=Object(N.a)(t,2),r=n[0],a=n[1];return[e(r),a]}).reduce(function(e,t){var n=Object(N.a)(t,2),r=n[0],a=n[1];return Object(O.a)({},e,Object(j.a)({},r,a))},{})}},S=function(e){return new Promise(function(t){return setTimeout(t,e)})},D=function(e,t){var n=this[e];return n instanceof Date?{$type:"Date",$value:n.getTime()}:t},U=function(e,t){return t&&"Date"===t.$type?new Date(t.$value):t},H=function(e){return JSON.stringify(e,D)},R=function(e){return JSON.parse(e,U)},C="https://github.com",P={pullRequestApi:new I.a("/repos/:owner/:repo/pulls/:number"),pullRequestHtml:new I.a("/:owner/:repo/pull/:number"),issueApi:new I.a("/repos/:owner/:repo/issues/:number"),issueHtml:new I.a("/:owner/:repo/issues/:number")},K=["assign","author","comment","invitation","manual","mention","state_change","subscribed","team_mention"],G=function(){function e(t){Object(l.a)(this,e),this.reasons=void 0,this.bNotification=new x,this.reasons=t.reasons||K}return Object(f.a)(e,[{key:"onNewNotifications",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,a,i,s,c,u,l=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Notification"in window){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.bNotification.requestPermissionIfNeeded();case 4:if(this.bNotification.isGranted){e.next=6;break}return e.abrupt("return");case 6:(n=t.filter(function(e){return l.reasons.includes(e.reason)})).length>0&&console.log("[NotificationNotifier] ".concat(n.length," new notifications")),r=!0,a=!1,i=void 0,e.prev=11,s=n[Symbol.iterator]();case 13:if(r=(c=s.next()).done){e.next=21;break}return u=c.value,this.bNotification.spawnNotification({title:u.subject.type,body:u.subject.title}),e.next=18,S(3e3);case 18:r=!0,e.next=13;break;case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(11),a=!0,i=e.t0;case 27:e.prev=27,e.prev=28,r||null==s.return||s.return();case 30:if(e.prev=30,!a){e.next=33;break}throw i;case 33:return e.finish(30);case 34:return e.finish(27);case 35:case"end":return e.stop()}},e,this,[[11,23,27,35],[28,,30,34]])}));return function(t){return e.apply(this,arguments)}}()}]),e}(),L=n(218),M=n(219),W=n.n(M),_=n(220),F=n(428),q="https://api.github.com/notifications",Y="https://api.github.com/user",$=A(_.snake),z=A(function(e){return e instanceof Date?e.toISOString():"boolean"===typeof e?e?"true":"false":e}),B=Object(F.a)($,z,function(e){return W.a.stringify(e,{format:"RFC1738"})}),J=function(){function e(t){Object(l.a)(this,e),this.accessToken=void 0,this.accessToken=t.accessToken}return Object(f.a)(e,[{key:"fetchNotifications",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,a,i,s,c,u,l,f,h,p,m,v,b,d,k;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=q+"?"+B(Object(O.a)({accessToken:this.accessToken},t)),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,i={},s=!0,c=!1,e.prev=10,l=Object(L.a)(r.headers.entries());case 12:return e.next=14,l.next();case 14:return f=e.sent,s=f.done,e.next=18,f.value;case 18:if(h=e.sent,s){e.next=25;break}p=h,m=Object(N.a)(p,2),v=m[0],b=m[1],i[v.toLowerCase()]=b;case 22:s=!0,e.next=12;break;case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(10),c=!0,u=e.t0;case 31:if(e.prev=31,e.prev=32,s||null==l.return){e.next=36;break}return e.next=36,l.return();case 36:if(e.prev=36,!c){e.next=39;break}throw u;case 39:return e.finish(36);case 40:return e.finish(31);case 41:if(d=i,k={lastModified:new Date(d["last-modified"]),lastFetched:new Date,pollInterval:Number(d["x-poll-interval"])},r.ok){e.next=47;break}if(304!==r.status){e.next=46;break}return e.abrupt("return",{meta:k,notifications:[]});case 46:throw new Error(a.message);case 47:return e.abrupt("return",{meta:k,notifications:a});case 48:case"end":return e.stop()}},e,this,[[10,27,31,41],[32,,36,40]])}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchAuthenticatedUser",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Y+"?"+B({accessToken:this.accessToken}),e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Failed to fetch user: ".concat(n.status," ").concat(n.statusText)),e.abrupt("return",null);case 7:return e.next=9,n.json();case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),Q=n(185),V=n(429),X=n(426),Z=Object(V.a)(function(e){return e.id}),ee=Object(X.a)(function(e,t){return new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()}),te=function(){function e(){Object(l.a)(this,e),this.storage=window.localStorage,this.maxNotifications=500,this.notificationKey="github:notification:items",this.metaKey="github:notification:meta",this.tokenKey="github:token",this.userKey="github:user"}return Object(f.a)(e,[{key:"drop",value:function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.clear();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getNotifications",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.storage.getItem(this.notificationKey)){e.next=3;break}return e.abrupt("return",[]);case 3:return e.abrupt("return",R(t));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveNotifications",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNotifications();case 2:n=e.sent,r=Z([].concat(Object(Q.a)(t),Object(Q.a)(n))),a=ee(r),this.storage.setItem(this.notificationKey,H(a));case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"cleanUpOldNotifications",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getNotifications();case 2:if(!((t=e.sent).length<=this.maxNotifications)){e.next=5;break}return e.abrupt("return");case 5:n=t.slice(0,this.maxNotifications),this.storage.setItem(this.notificationKey,H(n));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getNotificationMeta",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.storage.getItem(this.metaKey)){e.next=3;break}return e.abrupt("return",null);case 3:return e.abrupt("return",R(t));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveNotificationMeta",value:function(){var e=Object(u.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.setItem(this.metaKey,H(t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"saveAccessToken",value:function(){var e=Object(u.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.setItem(this.tokenKey,t);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAccessToken",value:function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.storage.getItem(this.tokenKey));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"clearAccessToken",value:function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.removeItem(this.tokenKey);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"saveUser",value:function(){var e=Object(u.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.setItem(this.userKey,H(t));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.storage.getItem(this.userKey)){e.next=3;break}return e.abrupt("return",null);case 3:return e.abrupt("return",R(t));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"clearUser",value:function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.storage.removeItem(this.userKey);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),ne=function(){function e(t){Object(l.a)(this,e),this.api=void 0,this.db=void 0,this.ui=void 0,this.readyToken=!1,this.api=new J({accessToken:""}),this.db=new te,this.ui=t,Object.assign(window,{app:{db:this.db,api:this.api}})}return Object(f.a)(e,[{key:"register",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.api.accessToken=t,e.next=3,this.api.fetchAuthenticatedUser();case 3:if(n=e.sent){e.next=7;break}return this.api.accessToken="",e.abrupt("return",null);case 7:return e.next=9,this.db.saveUser(n);case 9:return e.next=11,this.db.saveAccessToken(t);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"unregister",value:function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.drop();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"syncFromAPI",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,a,i,s,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t||{}).all,r=void 0===n||n,e.next=3,this.api.fetchNotifications({all:r});case 3:return a=e.sent,i=a.meta,s=a.notifications,e.next=8,this.filterNewNotifications(s);case 8:return c=e.sent,this.ui.onNewNotifications(c),e.next=12,this.db.saveNotifications(s);case 12:return e.next=14,this.db.saveNotificationMeta(i);case 14:return e.t0=this.ui,e.next=17,this.db.getNotifications();case 17:e.t1=e.sent,e.t2=i,e.t3={notifications:e.t1,meta:e.t2},e.t0.onData.call(e.t0,e.t3);case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"restoreFromDB",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t,n,r,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.getAccessToken();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:return this.readyToken=!0,this.api.accessToken=t,e.next=9,this.db.getNotifications();case 9:return n=e.sent,e.next=12,this.db.getNotificationMeta();case 12:return r=e.sent,e.next=15,this.db.getUser();case 15:a=e.sent,this.ui.onData({notifications:n,meta:r,user:a||void 0});case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"filterNewNotifications",value:function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.getNotifications();case 2:return e.t0=function(e,t){return Object.assign(e,Object(j.a)({},t.id,t))},e.t1={},n=e.sent.reduce(e.t0,e.t1),r=t.filter(function(e){var t=e.id,r=e.updated_at;if(!e.unread)return!1;var a=n[t];return!a||a.updated_at!==r}),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),re=n(432),ae=n(184),ie=(n(365),function(e){return a.a.createElement("span",{className:"NotificationListItem-desc-item"},e.children)}),se=function(e){var t,n=e.notification,r=n.subject,i=n.updated_at,s=n.unread,c=n.repository,o=n.reason,u=r.title,l=r.type,f=function(e){var t=e.subject,n=t.type,r=t.url,a=new URL(r).pathname,i=e.repository.html_url;switch(n){case"PullRequest":var s=P.pullRequestApi.test(a);return s?C+P.pullRequestHtml.build(s):(console.error('Something wrong on finding HTML URL. Type is "PullRequest", but given URL is '.concat(r)),i);case"Issue":var c=P.issueApi.test(a);return c?C+P.issueHtml.build(c):(console.error('Something wrong on finding HTML URL. Type is "Issue", but given URL is '.concat(r)),i);default:return i}}(n);return a.a.createElement(re.a.Item,{className:"NotificationListItem",as:"a",target:"_blank",href:f},a.a.createElement(re.a.Content,{floated:"right"},a.a.createElement(ae.a,{tag:!0},l,a.a.createElement(ae.a.Detail,null,o))),a.a.createElement(re.a.Icon,{name:s?"circle outline":"check circle outline",verticalAlign:"top"}),a.a.createElement(re.a.Content,null,a.a.createElement(re.a.Header,null,u),a.a.createElement(re.a.Description,{className:"NotificationListItem-desc"},a.a.createElement(ie,null,c.full_name),a.a.createElement(ie,null,"At ",(t=i,E()(t).format("YYYY/MM/DD HH:mm"))))))},ce=function(e){return a.a.createElement(re.a,{divided:!0,verticalAlign:"middle",relaxed:"very",selection:!0,className:"NotificationList"},e.notifications.map(function(e){return a.a.createElement(se,{key:e.id,notification:e})}))},oe=n(438),ue=n(433),le=n(427),fe=n(434),he=function(e){var t=e.onRegister,n=e.errorToken,i=Object(r.useState)(""),s=Object(N.a)(i,2),c=s[0],l=s[1],f=Object(r.useState)(!1),h=Object(N.a)(f,2),p=h[0],m=h[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{as:"h1",icon:!0,textAlign:"center"},a.a.createElement(k.a,{size:"massive",src:"logo.png"}),a.a.createElement(d.a.Content,null,"Notissue"),a.a.createElement(d.a.Subheader,null,"GitHub notification timeline with web notification")),a.a.createElement(oe.a,{className:"Welcome-segment",basic:!0,textAlign:"center"},"Nottisue let you know GitHub notifications by web notification. All you need to do is to register your GitHub access token. It will be saved in local storage. Then, you get GitHub notifications through your browser."),a.a.createElement(oe.a,{className:"Welcome-segment",basic:!0,textAlign:"center"},a.a.createElement(d.a,{as:"h3"},"Get started"),a.a.createElement(ue.a,{negative:!0,className:"Welcome-input-error",size:"mini",hidden:!n},a.a.createElement(ue.a.Header,null,"Invalid access token.")),a.a.createElement(le.a,{action:a.a.createElement(fe.a,{primary:!0,loading:p,onClick:function(){var e=Object(u.a)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return m(!0),e.next=5,t(c);case 5:m(!1);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},"Save"),placeholder:"GitHub Access Token",onChange:function(e,t){var n=t.value;l(n)}})))},pe=n(430),me=function(e){var t=e.open,n=e.onClose,r=e.onOk;return a.a.createElement(pe.a,{size:"mini",open:t,onClose:n},a.a.createElement(pe.a.Header,null,"Delete Your Access Token"),a.a.createElement(pe.a.Content,null,"Are you sure?"),a.a.createElement(pe.a.Actions,null,a.a.createElement(fe.a,{negative:!0,content:"No",onClick:n}),a.a.createElement(fe.a,{positive:!0,icon:"checkmark",labelPosition:"right",content:"Yes",onClick:r})))},ve=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).trigger=void 0,n.hub=void 0,n.notifier=void 0,n.state={notifications:[],meta:null,user:void 0,ready:!1,readyToken:!1,errorToken:!1,unregisterActive:!1},n.onRegister=function(){var e=Object(u.a)(o.a.mark(function e(t){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.hub.register(t);case 2:(r=e.sent)?(n.setState({readyToken:!0,errorToken:!1,user:r}),n.startPolling()):n.setState({errorToken:!0});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n.onStartUnregister=function(){n.setState({unregisterActive:!0})},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.notifications,r=t.ready,i=t.readyToken,s=t.errorToken,c=t.user,l=t.unregisterActive;return a.a.createElement("div",{className:"App"},a.a.createElement(w,{user:c,onStartUnregister:this.onStartUnregister}),a.a.createElement(v.a,{text:!0,style:{paddingTop:"6em"}},r&&i&&a.a.createElement(ce,{notifications:n}),r&&!i&&a.a.createElement(he,{onRegister:this.onRegister,errorToken:s})),a.a.createElement(me,{open:l,onClose:function(){return e.setState({unregisterActive:!1})},onOk:Object(u.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({unregisterActive:!1}),t.next=3,e.hub.unregister();case 3:location.reload();case 4:case"end":return t.stop()}},t,this)}))}))}},{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.notifier=new G({}),this.hub=new ne({onData:function(e){return t.setState(e)},onNewNotifications:function(){var e=Object(u.a)(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.notifier.onNewNotifications(n);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}),this.trigger=new y(Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.hub.syncFromAPI();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:t.trigger.setNextTime(t.state.meta);case 9:case"end":return e.stop()}},e,this,[[0,5]])}))),e.next=5,this.hub.restoreFromDB();case 5:this.hub.readyToken&&(this.startPolling(),this.setState({readyToken:!0})),this.setState({ready:!0});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.stopPolling()}},{key:"startPolling",value:function(){var e=Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.meta){e.next=3;break}return e.next=3,this.hub.syncFromAPI({all:!0});case 3:this.trigger.setNextTime(this.state.meta);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"stopPolling",value:function(){this.trigger.stopTimer()}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[241,2,1]]]);
//# sourceMappingURL=main.031f8170.chunk.js.map