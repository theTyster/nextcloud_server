/*! For license information please see files_reminders-init.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,r={24539:(t,e,n)=>{var r=n(35810),i=n(53334);const o="set-reminder-menu",s=new r.hY({id:o,displayName:()=>(0,i.Tl)("files","Set reminder"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" /></svg>',enabled:()=>!0,exec:async()=>null,order:20});var a=n(85471),d=n(61338),l=n(26287),c=n(99498);const u=async(t,e)=>{const n=(0,c.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:t});return(await l.A.put(n,{dueDate:e.toISOString()})).data.ocs.data};var p,m=n(51651);!function(t){t.LaterToday="later-today",t.Tomorrow="tomorrow",t.ThisWeekend="this-weekend",t.NextWeek="next-week"}(p||(p={}));const h=t=>({[p.LaterToday]:()=>{const t=(0,m.A)(),e=(0,m.A)().startOf("day").add(18,"hour"),n=e.clone().subtract(1,"hour");return t.isSameOrAfter(n)?null:e.toDate()},[p.Tomorrow]:()=>(0,m.A)().add(1,"day").startOf("day").add(8,"hour").toDate(),[p.ThisWeekend]:()=>{const t=(0,m.A)();return[5,6,7].includes(t.isoWeekday())?null:(0,m.A)().startOf("isoWeek").add(5,"day").add(8,"hour").toDate()},[p.NextWeek]:()=>7===(0,m.A)().isoWeekday()?null:(0,m.A)().startOf("isoWeek").add(1,"week").add(8,"hour").toDate()}[t]()),f=()=>{const t=(0,m.A)().get("hour");return(0,m.A)().startOf("day").add(t+2,"hour").toDate()},g=t=>{let e={hour:"numeric",minute:"2-digit"};const n=(0,m.A)(t),r=(0,m.A)();return n.isSame(r,"date")||(e={...e,weekday:"short"}),n.isSame(r,"week")||(e={...e,month:"short",day:"numeric"}),t.toLocaleString((0,i.lO)(),e)},w=t=>t.toLocaleString((0,i.lO)(),{weekday:"long",hour:"numeric",minute:"2-digit",month:"long",day:"numeric"}),A=new r.hY({id:"clear-reminder",displayName:()=>(0,i.Tl)("files","Clear reminder"),title:t=>{const e=t.at(0),n=new Date(e.attributes["reminder-due-date"]);return"".concat((0,i.Tl)("files","Clear reminder")," – ").concat(w(n))},iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-alarm-off" viewBox="0 0 24 24"><path d="M8,3.28L6.6,1.86L5.74,2.57L7.16,4M16.47,18.39C15.26,19.39 13.7,20 12,20A7,7 0 0,1 5,13C5,11.3 5.61,9.74 6.61,8.53M2.92,2.29L1.65,3.57L3,4.9L1.87,5.83L3.29,7.25L4.4,6.31L5.2,7.11C3.83,8.69 3,10.75 3,13A9,9 0 0,0 12,22C14.25,22 16.31,21.17 17.89,19.8L20.09,22L21.36,20.73L3.89,3.27L2.92,2.29M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72M12,6A7,7 0 0,1 19,13C19,13.84 18.84,14.65 18.57,15.4L20.09,16.92C20.67,15.73 21,14.41 21,13A9,9 0 0,0 12,4C10.59,4 9.27,4.33 8.08,4.91L9.6,6.43C10.35,6.16 11.16,6 12,6Z" /></svg>',enabled:t=>{if(1!==t.length)return!1;const e=t.at(0).attributes["reminder-due-date"];return Boolean(e)},async exec(t){if(t.fileid)try{return await(async t=>{const e=(0,c.KT)("/apps/files_reminders/api/v1/{fileId}",{fileId:t});return(await l.A.delete(e)).data.ocs.data})(t.fileid),a.Ay.set(t.attributes,"reminder-due-date",""),(0,d.Ic)("files:node:updated",t),!0}catch(t){return!1}return null},order:19});var v=n(85168);const b=(0,n(53529).YK)().setApp("files_reminders").detectUser().build();var y=n(85072),N=n.n(y),x=n(97825),_=n.n(x),E=n(77659),C=n.n(E),T=n(55056),D=n.n(T),S=n(10540),L=n.n(S),O=n(41113),P=n.n(O),I=n(19672),k={};k.styleTagTransform=P(),k.setAttributes=D(),k.insert=C().bind(null,"head"),k.domAPI=_(),k.insertStyleElement=L(),N()(I.A,k),I.A&&I.A.locals&&I.A.locals;const R={dateTimePreset:p.LaterToday,label:(0,i.Tl)("files_reminders","Later today"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for later today"),dateString:"",verboseDateString:""},$={dateTimePreset:p.Tomorrow,label:(0,i.Tl)("files_reminders","Tomorrow"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for tomorrow"),dateString:"",verboseDateString:""},F={dateTimePreset:p.ThisWeekend,label:(0,i.Tl)("files_reminders","This weekend"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for this weekend"),dateString:"",verboseDateString:""},j={dateTimePreset:p.NextWeek,label:(0,i.Tl)("files_reminders","Next week"),ariaLabel:(0,i.Tl)("files_reminders","Set reminder for next week"),dateString:"",verboseDateString:""};[R,$,F,j].forEach((t=>{const e=h(t.dateTimePreset);e&&(t.dateString=g(e),t.verboseDateString=w(e),setInterval((()=>{const e=h(t.dateTimePreset);e&&(t.dateString=g(e),t.verboseDateString=w(e))}),18e5))}));const B=[R,$,F,j].map((t=>new r.hY({id:"set-reminder-".concat(t.dateTimePreset),displayName:()=>"".concat(t.label," – ").concat(t.dateString),title:()=>"".concat(t.ariaLabel," – ").concat(t.verboseDateString),iconSvgInline:()=>"<svg></svg>",enabled:()=>Boolean(h(t.dateTimePreset)),parent:o,async exec(e){if(!e.fileid)return b.error("Failed to set reminder, missing file id"),(0,v.Qg)((0,i.Tl)("files_reminders","Failed to set reminder")),null;try{const n=h(t.dateTimePreset);await u(e.fileid,n),a.Ay.set(e.attributes,"reminder-due-date",n.toISOString()),(0,d.Ic)("files:node:updated",e),(0,v.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:e.basename}))}catch(t){b.error("Failed to set reminder",{error:t}),(0,v.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}return null},order:21})));var M=n(54576),V=n(4604),G=n(65386),W=n(4620),U=n(12256);const H=a.Ay.extend({name:"SetCustomReminderModal",components:{NcButton:M.A,NcDateTime:V.A,NcDateTimePickerNative:G.A,NcModal:W.A,NcNoteCard:U.A},data:()=>({node:void 0,opened:!1,isValid:!0,customDueDate:f(),nowDate:new Date}),computed:{fileId(){return this.node.fileid},fileName(){return this.node.basename},title(){return(0,i.Tl)("files_reminders",'Set reminder for "{fileName}"',{fileName:this.fileName})},label:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),clearAriaLabel:()=>(0,i.Tl)("files_reminders","Clear reminder")},methods:{t:i.Tl,getDateString:g,async open(t){this.node=t,this.isValid=!0,this.opened=!0,this.customDueDate=f(),this.nowDate=new Date,setTimeout((()=>{const t=document.getElementById("set-custom-reminder");t.focus(),t.showPicker()}),300)},async setCustom(){if(this.customDueDate instanceof Date&&!isNaN(this.customDueDate))try{await u(this.fileId,this.customDueDate),a.Ay.set(this.node.attributes,"reminder-due-date",this.customDueDate.toISOString()),(0,d.Ic)("files:node:updated",this.node),(0,v.Te)((0,i.Tl)("files_reminders",'Reminder set for "{fileName}"',{fileName:this.fileName})),this.onClose()}catch(t){b.error("Failed to set reminder",{error:t}),(0,v.Qg)((0,i.Tl)("files_reminders","Failed to set reminder"))}else(0,v.Qg)((0,i.Tl)("files_reminders","Please choose a valid date & time"))},onClose(){this.opened=!1,this.$emit("close")},onInput(){const t=document.getElementById("set-custom-reminder");this.isValid=t.checkValidity()}}});var Y=n(68217),z={};z.styleTagTransform=P(),z.setAttributes=D(),z.insert=C().bind(null,"head"),z.domAPI=_(),z.insertStyleElement=L(),N()(Y.A,z),Y.A&&Y.A.locals&&Y.A.locals;const q=(0,n(14486).A)(H,(function(){var t=this,e=t._self._c;return t._self._setupProxy,t.opened?e("NcModal",{attrs:{"out-transition":!0,size:"small"},on:{close:t.onClose}},[e("form",{staticClass:"custom-reminder-modal",on:{submit:function(e){return e.preventDefault(),t.setCustom.apply(null,arguments)}}},[e("h2",{staticClass:"custom-reminder-modal__title"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),t._v(" "),e("NcDateTimePickerNative",{attrs:{id:"set-custom-reminder",label:t.label,min:t.nowDate,required:!0,type:"datetime-local"},on:{input:t.onInput},model:{value:t.customDueDate,callback:function(e){t.customDueDate=e},expression:"customDueDate"}}),t._v(" "),t.isValid?e("NcNoteCard",{attrs:{type:"info"}},[t._v("\n\t\t\t"+t._s(t.t("files_reminders","We will remind you of this file"))+"\n\t\t\t"),e("NcDateTime",{attrs:{timestamp:t.customDueDate}})],1):e("NcNoteCard",{attrs:{type:"error"}},[t._v("\n\t\t\t"+t._s(t.t("files_reminders","Please choose a valid date & time"))+"\n\t\t")]),t._v(" "),e("div",{staticClass:"custom-reminder-modal__buttons"},[e("NcButton",{on:{click:t.onClose}},[t._v("\n\t\t\t\t"+t._s(t.t("files_reminders","Cancel"))+"\n\t\t\t")]),t._v(" "),e("NcButton",{attrs:{disabled:!t.isValid,"native-type":"submit",type:"primary"}},[t._v("\n\t\t\t\t"+t._s(t.t("files_reminders","Set reminder"))+"\n\t\t\t")])],1)],1)]):t._e()}),[],!1,null,"0105318b",null).exports,K=a.Ay.extend(q),Q=document.createElement("div");Q.id="set-custom-reminder-modal",document.body.appendChild(Q);const Z=new K({name:"SetCustomReminderModal",el:Q}),J=new r.hY({id:"set-reminder-custom",displayName:()=>(0,i.Tl)("files","Set custom reminder"),title:()=>(0,i.Tl)("files_reminders","Set reminder at custom date & time"),iconSvgInline:()=>'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-clock" viewBox="0 0 24 24"><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>',enabled:()=>!0,parent:o,exec:async t=>((async t=>{Z.open(t),new Promise((t=>{Z.$on("close",t)}))})(t),null),order:22});(0,r.Yc)("nc:reminder-due-date",{nc:"http://nextcloud.org/ns"}),(0,r.Gg)(A),(0,r.Gg)(s),(0,r.Gg)(J),B.forEach((t=>(0,r.Gg)(t)))},19672:(t,e,n)=>{n.d(e,{A:()=>a});var r=n(71354),i=n.n(r),o=n(76314),s=n.n(o)()(i());s.push([t.id,'.files-list__row-action-set-reminder-custom{margin-top:13px;position:relative}.files-list__row-action-set-reminder-custom::before{content:"";margin:3px 10px 3px 15px;border-bottom:1px solid var(--color-border-dark);cursor:default;display:flex;height:0;position:absolute;left:0;right:0;top:-10px}',"",{version:3,sources:["webpack://./apps/files_reminders/src/actions/setReminderSuggestionActions.scss"],names:[],mappings:"AAuBA,4CACC,eAAA,CACA,iBAAA,CAEA,oDACC,UAAA,CACA,wBAAA,CACA,gDAAA,CACA,cAAA,CACA,YAAA,CACA,QAAA,CACA,iBAAA,CACA,MAAA,CACA,OAAA,CACA,SAAA",sourcesContent:['/**\n * @copyright Copyright (c) 2023 John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @author John Molakvoæ <skjnldsv@protonmail.com>\n *\n * @license AGPL-3.0-or-later\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program. If not, see <http://www.gnu.org/licenses/>.\n *\n */\n // TODO: remove when/if the actions API supports a separator\n // This the last preset action, so we need to add a separator\n.files-list__row-action-set-reminder-custom {\n\tmargin-top: 13px;\n\tposition: relative;\n\n\t&::before {\n\t\tcontent: "";\n\t\tmargin: 3px 10px 3px 15px;\n\t\tborder-bottom: 1px solid var(--color-border-dark);\n\t\tcursor: default;\n\t\tdisplay: flex;\n\t\theight: 0;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\ttop: -10px;\n\t}\n}\n'],sourceRoot:""}]);const a=s},68217:(t,e,n)=>{n.d(e,{A:()=>a});var r=n(71354),i=n.n(r),o=n(76314),s=n.n(o)()(i());s.push([t.id,".custom-reminder-modal[data-v-0105318b]{margin:30px}.custom-reminder-modal__title[data-v-0105318b]{font-size:16px;line-height:2em}.custom-reminder-modal__buttons[data-v-0105318b]{display:flex;justify-content:flex-end;margin-top:30px}.custom-reminder-modal__buttons button[data-v-0105318b]{margin-left:10px}","",{version:3,sources:["webpack://./apps/files_reminders/src/components/SetCustomReminderModal.vue"],names:[],mappings:"AACA,wCACC,WAAA,CAEA,+CACC,cAAA,CACA,eAAA,CAGD,iDACC,YAAA,CACA,wBAAA,CACA,eAAA,CAEA,wDACC,gBAAA",sourcesContent:["\n.custom-reminder-modal {\n\tmargin: 30px;\n\n\t&__title {\n\t\tfont-size: 16px;\n\t\tline-height: 2em;\n\t}\n\n\t&__buttons {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tmargin-top: 30px;\n\n\t\tbutton {\n\t\t\tmargin-left: 10px;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const a=s},35810:(t,e,n)=>{n.d(e,{Al:()=>F,Gg:()=>w,H4:()=>R,PY:()=>k,Q$:()=>$,R3:()=>E,VL:()=>_,Yc:()=>y,hY:()=>g,lJ:()=>I,pt:()=>C,v7:()=>h});var r=n(92457),i=n(53529),o=n(53334),s=n(43627),a=n(71089),d=n(99498),l=n(44719);const c=null===(u=(0,r.HW)())?(0,i.YK)().setApp("files").build():(0,i.YK)().setApp("files").setUid(u.uid).build();var u;const p=["B","KB","MB","GB","TB","PB"],m=["B","KiB","MiB","GiB","TiB","PiB"];function h(t,e=!1,n=!1,r=!1){n=n&&!r,"string"==typeof t&&(t=Number(t));let i=t>0?Math.floor(Math.log(t)/Math.log(r?1e3:1024)):0;i=Math.min((n?m.length:p.length)-1,i);const s=n?m[i]:p[i];let a=(t/Math.pow(r?1e3:1024,i)).toFixed(1);return!0===e&&0===i?("0.0"!==a?"< 1 ":"0 ")+(n?m[1]:p[1]):(a=i<2?parseFloat(a).toFixed(0):parseFloat(a).toLocaleString((0,o.lO)()),a+" "+s)}var f=(t=>(t.DEFAULT="default",t.HIDDEN="hidden",t))(f||{});class g{_action;constructor(t){this.validateAction(t),this._action=t}get id(){return this._action.id}get displayName(){return this._action.displayName}get title(){return this._action.title}get iconSvgInline(){return this._action.iconSvgInline}get enabled(){return this._action.enabled}get exec(){return this._action.exec}get execBatch(){return this._action.execBatch}get order(){return this._action.order}get parent(){return this._action.parent}get default(){return this._action.default}get inline(){return this._action.inline}get renderInline(){return this._action.renderInline}validateAction(t){if(!t.id||"string"!=typeof t.id)throw new Error("Invalid id");if(!t.displayName||"function"!=typeof t.displayName)throw new Error("Invalid displayName function");if("title"in t&&"function"!=typeof t.title)throw new Error("Invalid title function");if(!t.iconSvgInline||"function"!=typeof t.iconSvgInline)throw new Error("Invalid iconSvgInline function");if(!t.exec||"function"!=typeof t.exec)throw new Error("Invalid exec function");if("enabled"in t&&"function"!=typeof t.enabled)throw new Error("Invalid enabled function");if("execBatch"in t&&"function"!=typeof t.execBatch)throw new Error("Invalid execBatch function");if("order"in t&&"number"!=typeof t.order)throw new Error("Invalid order");if("parent"in t&&"string"!=typeof t.parent)throw new Error("Invalid parent");if(t.default&&!Object.values(f).includes(t.default))throw new Error("Invalid default");if("inline"in t&&"function"!=typeof t.inline)throw new Error("Invalid inline function");if("renderInline"in t&&"function"!=typeof t.renderInline)throw new Error("Invalid renderInline function")}}const w=function(t){typeof window._nc_fileactions>"u"&&(window._nc_fileactions=[],c.debug("FileActions initialized")),window._nc_fileactions.find((e=>e.id===t.id))?c.error(`FileAction ${t.id} already registered`,{action:t}):window._nc_fileactions.push(t)};var A=(t=>(t[t.NONE=0]="NONE",t[t.CREATE=4]="CREATE",t[t.READ=1]="READ",t[t.UPDATE=2]="UPDATE",t[t.DELETE=8]="DELETE",t[t.SHARE=16]="SHARE",t[t.ALL=31]="ALL",t))(A||{});const v=["d:getcontentlength","d:getcontenttype","d:getetag","d:getlastmodified","d:quota-available-bytes","d:resourcetype","nc:has-preview","nc:is-encrypted","nc:mount-type","nc:share-attributes","oc:comments-unread","oc:favorite","oc:fileid","oc:owner-display-name","oc:owner-id","oc:permissions","oc:share-types","oc:size","ocs:share-permissions"],b={d:"DAV:",nc:"http://nextcloud.org/ns",oc:"http://owncloud.org/ns",ocs:"http://open-collaboration-services.org/ns"},y=function(t,e={nc:"http://nextcloud.org/ns"}){typeof window._nc_dav_properties>"u"&&(window._nc_dav_properties=[...v],window._nc_dav_namespaces={...b});const n={...window._nc_dav_namespaces,...e};return window._nc_dav_properties.find((e=>e===t))?(c.error(`${t} already registered`,{prop:t}),!1):t.startsWith("<")||2!==t.split(":").length?(c.error(`${t} is not valid. See example: 'oc:fileid'`,{prop:t}),!1):n[t.split(":")[0]]?(window._nc_dav_properties.push(t),window._nc_dav_namespaces=n,!0):(c.error(`${t} namespace unknown`,{prop:t,namespaces:n}),!1)},N=function(){return typeof window._nc_dav_properties>"u"&&(window._nc_dav_properties=[...v]),window._nc_dav_properties.map((t=>`<${t} />`)).join(" ")},x=function(){return typeof window._nc_dav_namespaces>"u"&&(window._nc_dav_namespaces={...b}),Object.keys(window._nc_dav_namespaces).map((t=>`xmlns:${t}="${window._nc_dav_namespaces?.[t]}"`)).join(" ")},_=function(){return`<?xml version="1.0"?>\n\t\t<d:propfind ${x()}>\n\t\t\t<d:prop>\n\t\t\t\t${N()}\n\t\t\t</d:prop>\n\t\t</d:propfind>`},E=function(t){return`<?xml version="1.0" encoding="UTF-8"?>\n<d:searchrequest ${x()}\n\txmlns:ns="https://github.com/icewind1991/SearchDAV/ns">\n\t<d:basicsearch>\n\t\t<d:select>\n\t\t\t<d:prop>\n\t\t\t\t${N()}\n\t\t\t</d:prop>\n\t\t</d:select>\n\t\t<d:from>\n\t\t\t<d:scope>\n\t\t\t\t<d:href>/files/${(0,r.HW)()?.uid}/</d:href>\n\t\t\t\t<d:depth>infinity</d:depth>\n\t\t\t</d:scope>\n\t\t</d:from>\n\t\t<d:where>\n\t\t\t<d:and>\n\t\t\t\t<d:or>\n\t\t\t\t\t<d:not>\n\t\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t\t<d:getcontenttype/>\n\t\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t\t<d:literal>httpd/unix-directory</d:literal>\n\t\t\t\t\t\t</d:eq>\n\t\t\t\t\t</d:not>\n\t\t\t\t\t<d:eq>\n\t\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t\t<oc:size/>\n\t\t\t\t\t\t</d:prop>\n\t\t\t\t\t\t<d:literal>0</d:literal>\n\t\t\t\t\t</d:eq>\n\t\t\t\t</d:or>\n\t\t\t\t<d:gt>\n\t\t\t\t\t<d:prop>\n\t\t\t\t\t\t<d:getlastmodified/>\n\t\t\t\t\t</d:prop>\n\t\t\t\t\t<d:literal>${t}</d:literal>\n\t\t\t\t</d:gt>\n\t\t\t</d:and>\n\t\t</d:where>\n\t\t<d:orderby>\n\t\t\t<d:order>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<d:getlastmodified/>\n\t\t\t\t</d:prop>\n\t\t\t\t<d:descending/>\n\t\t\t</d:order>\n\t\t</d:orderby>\n\t\t<d:limit>\n\t\t\t<d:nresults>100</d:nresults>\n\t\t\t<ns:firstresult>0</ns:firstresult>\n\t\t</d:limit>\n\t</d:basicsearch>\n</d:searchrequest>`};var C=(t=>(t.Folder="folder",t.File="file",t))(C||{});const T=function(t,e){return null!==t.match(e)},D=(t,e)=>{if(t.id&&"number"!=typeof t.id)throw new Error("Invalid id type of value");if(!t.source)throw new Error("Missing mandatory source");try{new URL(t.source)}catch{throw new Error("Invalid source format, source must be a valid URL")}if(!t.source.startsWith("http"))throw new Error("Invalid source format, only http(s) is supported");if(t.mtime&&!(t.mtime instanceof Date))throw new Error("Invalid mtime type");if(t.crtime&&!(t.crtime instanceof Date))throw new Error("Invalid crtime type");if(!t.mime||"string"!=typeof t.mime||!t.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))throw new Error("Missing or invalid mandatory mime");if("size"in t&&"number"!=typeof t.size&&void 0!==t.size)throw new Error("Invalid size type");if("permissions"in t&&void 0!==t.permissions&&!("number"==typeof t.permissions&&t.permissions>=A.NONE&&t.permissions<=A.ALL))throw new Error("Invalid permissions");if(t.owner&&null!==t.owner&&"string"!=typeof t.owner)throw new Error("Invalid owner type");if(t.attributes&&"object"!=typeof t.attributes)throw new Error("Invalid attributes type");if(t.root&&"string"!=typeof t.root)throw new Error("Invalid root type");if(t.root&&!t.root.startsWith("/"))throw new Error("Root must start with a leading slash");if(t.root&&!t.source.includes(t.root))throw new Error("Root must be part of the source");if(t.root&&T(t.source,e)){const n=t.source.match(e)[0];if(!t.source.includes((0,s.join)(n,t.root)))throw new Error("The root must be relative to the service. e.g /files/emma")}if(t.status&&!Object.values(S).includes(t.status))throw new Error("Status must be a valid NodeStatus")};var S=(t=>(t.NEW="new",t.FAILED="failed",t.LOADING="loading",t.LOCKED="locked",t))(S||{});class L{_data;_attributes;_knownDavService=/(remote|public)\.php\/(web)?dav/i;constructor(t,e){D(t,e||this._knownDavService),this._data=t;const n={set:(t,e,n)=>(this.updateMtime(),Reflect.set(t,e,n)),deleteProperty:(t,e)=>(this.updateMtime(),Reflect.deleteProperty(t,e))};this._attributes=new Proxy(t.attributes||{},n),delete this._data.attributes,e&&(this._knownDavService=e)}get source(){return this._data.source.replace(/\/$/i,"")}get encodedSource(){const{origin:t}=new URL(this.source);return t+(0,a.O0)(this.source.slice(t.length))}get basename(){return(0,s.basename)(this.source)}get extension(){return(0,s.extname)(this.source)}get dirname(){if(this.root){let t=this.source;this.isDavRessource&&(t=t.split(this._knownDavService).pop());const e=t.indexOf(this.root),n=this.root.replace(/\/$/,"");return(0,s.dirname)(t.slice(e+n.length)||"/")}const t=new URL(this.source);return(0,s.dirname)(t.pathname)}get mime(){return this._data.mime}get mtime(){return this._data.mtime}get crtime(){return this._data.crtime}get size(){return this._data.size}get attributes(){return this._attributes}get permissions(){return null!==this.owner||this.isDavRessource?void 0!==this._data.permissions?this._data.permissions:A.NONE:A.READ}get owner(){return this.isDavRessource?this._data.owner:null}get isDavRessource(){return T(this.source,this._knownDavService)}get root(){return this._data.root?this._data.root.replace(/^(.+)\/$/,"$1"):this.isDavRessource&&(0,s.dirname)(this.source).split(this._knownDavService).pop()||null}get path(){if(this.root){let t=this.source;this.isDavRessource&&(t=t.split(this._knownDavService).pop());const e=t.indexOf(this.root),n=this.root.replace(/\/$/,"");return t.slice(e+n.length)||"/"}return(this.dirname+"/"+this.basename).replace(/\/\//g,"/")}get fileid(){return this._data?.id||this.attributes?.fileid}get status(){return this._data?.status}set status(t){this._data.status=t}move(t){D({...this._data,source:t},this._knownDavService),this._data.source=t,this.updateMtime()}rename(t){if(t.includes("/"))throw new Error("Invalid basename");this.move((0,s.dirname)(this.source)+"/"+t)}updateMtime(){this._data.mtime&&(this._data.mtime=new Date)}}class O extends L{get type(){return C.File}}class P extends L{constructor(t){super({...t,mime:"httpd/unix-directory"})}get type(){return C.Folder}get extension(){return null}get mime(){return"httpd/unix-directory"}}const I=`/files/${(0,r.HW)()?.uid}`,k=(0,d.dC)("dav"),R=function(t=k,e={}){const n=(0,l.UU)(t,{headers:e});function i(t){n.setHeaders({...e,"X-Requested-With":"XMLHttpRequest",requesttoken:t??""})}return(0,r.zo)(i),i((0,r.do)()),(0,l.Gu)().patch("fetch",((t,e)=>{const n=e.headers;return n?.method&&(e.method=n.method,delete n.method),fetch(t,e)})),n},$=async(t,e="/",n=I)=>(await t.getDirectoryContents(`${n}${e}`,{details:!0,data:`<?xml version="1.0"?>\n\t\t<oc:filter-files ${x()}>\n\t\t\t<d:prop>\n\t\t\t\t${N()}\n\t\t\t</d:prop>\n\t\t\t<oc:filter-rules>\n\t\t\t\t<oc:favorite>1</oc:favorite>\n\t\t\t</oc:filter-rules>\n\t\t</oc:filter-files>`,headers:{method:"REPORT"},includeSelf:!0})).data.filter((t=>t.filename!==e)).map((t=>F(t,n))),F=function(t,e=I,n=k){const i=t.props,o=function(t=""){let e=A.NONE;return t&&((t.includes("C")||t.includes("K"))&&(e|=A.CREATE),t.includes("G")&&(e|=A.READ),(t.includes("W")||t.includes("N")||t.includes("V"))&&(e|=A.UPDATE),t.includes("D")&&(e|=A.DELETE),t.includes("R")&&(e|=A.SHARE)),e}(i?.permissions),s=i?.["owner-id"]||(0,r.HW)()?.uid,a={id:i?.fileid||0,source:`${n}${t.filename}`,mtime:new Date(Date.parse(t.lastmod)),mime:t.mime,size:i?.size||Number.parseInt(i.getcontentlength||"0"),permissions:o,owner:s,root:e,attributes:{...t,...i,hasPreview:i?.["has-preview"]}};return delete a.attributes?.props,"file"===t.type?new O(a):new P(a)};var j={};!function(t){const e=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",n="["+e+"]["+e+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",r=new RegExp("^"+n+"$");t.isExist=function(t){return typeof t<"u"},t.isEmptyObject=function(t){return 0===Object.keys(t).length},t.merge=function(t,e,n){if(e){const r=Object.keys(e),i=r.length;for(let o=0;o<i;o++)t[r[o]]="strict"===n?[e[r[o]]]:e[r[o]]}},t.getValue=function(e){return t.isExist(e)?e:""},t.isName=function(t){const e=r.exec(t);return!(null===e||typeof e>"u")},t.getAllMatches=function(t,e){const n=[];let r=e.exec(t);for(;r;){const i=[];i.startIndex=e.lastIndex-r[0].length;const o=r.length;for(let t=0;t<o;t++)i.push(r[t]);n.push(i),r=e.exec(t)}return n},t.nameRegexp=n}(j);new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");var B={};const M={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(t,e,n){return t}};B.buildOptions=function(t){return Object.assign({},M,t)},B.defaultOptions=M,!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,j.nameRegexp),new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?","gm");var V={};function G(t,e,n){let r;const i={};for(let o=0;o<t.length;o++){const s=t[o],a=W(s);let d="";if(d=void 0===n?a:n+"."+a,a===e.textNodeName)void 0===r?r=s[a]:r+=""+s[a];else{if(void 0===a)continue;if(s[a]){let t=G(s[a],e,d);const n=H(t,e);s[":@"]?U(t,s[":@"],d,e):1!==Object.keys(t).length||void 0===t[e.textNodeName]||e.alwaysCreateTextNode?0===Object.keys(t).length&&(e.alwaysCreateTextNode?t[e.textNodeName]="":t=""):t=t[e.textNodeName],void 0!==i[a]&&i.hasOwnProperty(a)?(Array.isArray(i[a])||(i[a]=[i[a]]),i[a].push(t)):e.isArray(a,d,n)?i[a]=[t]:i[a]=t}}}return"string"==typeof r?r.length>0&&(i[e.textNodeName]=r):void 0!==r&&(i[e.textNodeName]=r),i}function W(t){const e=Object.keys(t);for(let t=0;t<e.length;t++){const n=e[t];if(":@"!==n)return n}}function U(t,e,n,r){if(e){const i=Object.keys(e),o=i.length;for(let s=0;s<o;s++){const o=i[s];r.isArray(o,n+"."+o,!0,!0)?t[o]=[e[o]]:t[o]=e[o]}}}function H(t,e){const{textNodeName:n}=e,r=Object.keys(t).length;return!(0!==r&&(1!==r||!t[n]&&"boolean"!=typeof t[n]&&0!==t[n]))}V.prettify=function(t,e){return G(t,e)};const{buildOptions:Y}=B,{prettify:z}=V;function q(t,e,n,r){let i="",o=!1;for(let s=0;s<t.length;s++){const a=t[s],d=K(a);if(void 0===d)continue;let l="";if(l=0===n.length?d:`${n}.${d}`,d===e.textNodeName){let t=a[d];Z(l,e)||(t=e.tagValueProcessor(d,t),t=J(t,e)),o&&(i+=r),i+=t,o=!1;continue}if(d===e.cdataPropName){o&&(i+=r),i+=`<![CDATA[${a[d][0][e.textNodeName]}]]>`,o=!1;continue}if(d===e.commentPropName){i+=r+`\x3c!--${a[d][0][e.textNodeName]}--\x3e`,o=!0;continue}if("?"===d[0]){const t=Q(a[":@"],e),n="?xml"===d?"":r;let s=a[d][0][e.textNodeName];s=0!==s.length?" "+s:"",i+=n+`<${d}${s}${t}?>`,o=!0;continue}let c=r;""!==c&&(c+=e.indentBy);const u=r+`<${d}${Q(a[":@"],e)}`,p=q(a[d],e,l,c);-1!==e.unpairedTags.indexOf(d)?e.suppressUnpairedNode?i+=u+">":i+=u+"/>":p&&0!==p.length||!e.suppressEmptyNode?p&&p.endsWith(">")?i+=u+`>${p}${r}</${d}>`:(i+=u+">",p&&""!==r&&(p.includes("/>")||p.includes("</"))?i+=r+e.indentBy+p+r:i+=p,i+=`</${d}>`):i+=u+"/>",o=!0}return i}function K(t){const e=Object.keys(t);for(let n=0;n<e.length;n++){const r=e[n];if(t.hasOwnProperty(r)&&":@"!==r)return r}}function Q(t,e){let n="";if(t&&!e.ignoreAttributes)for(let r in t){if(!t.hasOwnProperty(r))continue;let i=e.attributeValueProcessor(r,t[r]);i=J(i,e),!0===i&&e.suppressBooleanAttributes?n+=` ${r.substr(e.attributeNamePrefix.length)}`:n+=` ${r.substr(e.attributeNamePrefix.length)}="${i}"`}return n}function Z(t,e){let n=(t=t.substr(0,t.length-e.textNodeName.length-1)).substr(t.lastIndexOf(".")+1);for(let r in e.stopNodes)if(e.stopNodes[r]===t||e.stopNodes[r]==="*."+n)return!0;return!1}function J(t,e){if(t&&t.length>0&&e.processEntities)for(let n=0;n<e.entities.length;n++){const r=e.entities[n];t=t.replace(r.regex,r.val)}return t}const X=function(t,e){let n="";return e.format&&e.indentBy.length>0&&(n="\n"),q(t,e,"",n)},tt={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(t,e){return e},attributeValueProcessor:function(t,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function et(t){this.options=Object.assign({},tt,t),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=it),this.processTextOrObjNode=nt,this.options.format?(this.indentate=rt,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}function nt(t,e,n){const r=this.j2x(t,n+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextValNode(t[this.options.textNodeName],e,r.attrStr,n):this.buildObjectNode(r.val,e,r.attrStr,n)}function rt(t){return this.options.indentBy.repeat(t)}function it(t){return!(!t.startsWith(this.options.attributeNamePrefix)||t===this.options.textNodeName)&&t.substr(this.attrPrefixLen)}et.prototype.build=function(t){return this.options.preserveOrder?X(t,this.options):(Array.isArray(t)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(t={[this.options.arrayNodeName]:t}),this.j2x(t,0).val)},et.prototype.j2x=function(t,e){let n="",r="";for(let i in t)if(Object.prototype.hasOwnProperty.call(t,i))if(typeof t[i]>"u")this.isAttribute(i)&&(r+="");else if(null===t[i])this.isAttribute(i)?r+="":"?"===i[0]?r+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar;else if(t[i]instanceof Date)r+=this.buildTextValNode(t[i],i,"",e);else if("object"!=typeof t[i]){const o=this.isAttribute(i);if(o)n+=this.buildAttrPairStr(o,""+t[i]);else if(i===this.options.textNodeName){let e=this.options.tagValueProcessor(i,""+t[i]);r+=this.replaceEntitiesValue(e)}else r+=this.buildTextValNode(t[i],i,"",e)}else if(Array.isArray(t[i])){const n=t[i].length;let o="";for(let s=0;s<n;s++){const n=t[i][s];typeof n>"u"||(null===n?"?"===i[0]?r+=this.indentate(e)+"<"+i+"?"+this.tagEndChar:r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar:"object"==typeof n?this.options.oneListGroup?o+=this.j2x(n,e+1).val:o+=this.processTextOrObjNode(n,i,e):o+=this.buildTextValNode(n,i,"",e))}this.options.oneListGroup&&(o=this.buildObjectNode(o,i,"",e)),r+=o}else if(this.options.attributesGroupName&&i===this.options.attributesGroupName){const e=Object.keys(t[i]),r=e.length;for(let o=0;o<r;o++)n+=this.buildAttrPairStr(e[o],""+t[i][e[o]])}else r+=this.processTextOrObjNode(t[i],i,e);return{attrStr:n,val:r}},et.prototype.buildAttrPairStr=function(t,e){return e=this.options.attributeValueProcessor(t,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&"true"===e?" "+t:" "+t+'="'+e+'"'},et.prototype.buildObjectNode=function(t,e,n,r){if(""===t)return"?"===e[0]?this.indentate(r)+"<"+e+n+"?"+this.tagEndChar:this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar;{let i="</"+e+this.tagEndChar,o="";return"?"===e[0]&&(o="?",i=""),!n&&""!==n||-1!==t.indexOf("<")?!1!==this.options.commentPropName&&e===this.options.commentPropName&&0===o.length?this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine:this.indentate(r)+"<"+e+n+o+this.tagEndChar+t+this.indentate(r)+i:this.indentate(r)+"<"+e+n+o+">"+t+i}},et.prototype.closeTag=function(t){let e="";return-1!==this.options.unpairedTags.indexOf(t)?this.options.suppressUnpairedNode||(e="/"):e=this.options.suppressEmptyNode?"/":`></${t}`,e},et.prototype.buildTextValNode=function(t,e,n,r){if(!1!==this.options.cdataPropName&&e===this.options.cdataPropName)return this.indentate(r)+`<![CDATA[${t}]]>`+this.newLine;if(!1!==this.options.commentPropName&&e===this.options.commentPropName)return this.indentate(r)+`\x3c!--${t}--\x3e`+this.newLine;if("?"===e[0])return this.indentate(r)+"<"+e+n+"?"+this.tagEndChar;{let i=this.options.tagValueProcessor(e,t);return i=this.replaceEntitiesValue(i),""===i?this.indentate(r)+"<"+e+n+this.closeTag(e)+this.tagEndChar:this.indentate(r)+"<"+e+n+">"+i+"</"+e+this.tagEndChar}},et.prototype.replaceEntitiesValue=function(t){if(t&&t.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){const n=this.options.entities[e];t=t.replace(n.regex,n.val)}return t}}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var n=i[t]={id:t,loaded:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=r,t=[],o.O=(e,n,r,i)=>{if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],i=t[c][2];for(var a=!0,d=0;d<n.length;d++)(!1&i||s>=i)&&Object.keys(o.O).every((t=>o.O[t](n[d])))?n.splice(d--,1):(a=!1,i<s&&(s=i));if(a){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,r,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,n)=>(o.f[n](t,e),e)),[])),o.u=t=>t+"-"+t+".js?v="+{3747:"9b0f884a07c9e7c83b1a",5662:"d1f20e62402d8be29948"}[t],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},n="nextcloud:",o.l=(t,r,i,s)=>{if(e[t])e[t].push(r);else{var a,d;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+i){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",n+i),a.src=t),e[t]=[r];var p=(n,r)=>{a.onerror=a.onload=null,clearTimeout(m);var i=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((t=>t(r))),n)return n(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),d&&document.head.appendChild(a)}},o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),o.j=9735,(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{o.b=document.baseURI||self.location.href;var t={9735:0};o.f.j=(e,n)=>{var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise(((n,i)=>r=t[e]=[n,i]));n.push(r[2]=i);var s=o.p+o.u(e),a=new Error;o.l(s,(n=>{if(o.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}}),"chunk-"+e,e)}},o.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,s=n[0],a=n[1],d=n[2],l=0;if(s.some((e=>0!==t[e]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(d)var c=d(o)}for(e&&e(n);l<s.length;l++)i=s[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),o.nc=void 0;var s=o.O(void 0,[4208],(()=>o(24539)));s=o.O(s)})();
//# sourceMappingURL=files_reminders-init.js.map?v=e7e4a0274b772923989c