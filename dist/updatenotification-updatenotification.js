/*! For license information please see updatenotification-updatenotification.js.LICENSE.txt */
(()=>{"use strict";var e,a,i,o={13227:(e,a,i)=>{var o=i(53334),s=i(85471),r=i(85168),l=i(38613),c=i(53529),p=i(99498),d=i(26287),u=i(24764),h=i(52054),A=i(34968),g=i(76534),f=i(12256),v=i(67607),m=i(88837);const b={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var C=i(14486);const w=(0,C.A)(b,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon chevron-down-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var _=i(89979);const y={name:"NewBoxIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},k=(0,C.A)(y,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon new-box-icon",attrs:{"aria-hidden":!t.title||null,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M20,4C21.11,4 22,4.89 22,6V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V6C2,4.89 2.89,4 4,4H20M8.5,15V9H7.25V12.5L4.75,9H3.5V15H4.75V11.5L7.3,15H8.5M13.5,10.26V9H9.5V15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5M20.5,14V9H19.25V13.5H18.13V10H16.88V13.5H15.75V9H14.5V14A1,1 0 0,0 15.5,15H19.5A1,1 0 0,0 20.5,14Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var x=i(17334),U=i.n(x);const S=(0,c.YK)().setApp("updatenotification").detectUser().build(),N={name:"UpdateNotification",components:{IconChevronDown:w,IconLink:_.A,IconNewBox:k,NcActions:u.A,NcActionButton:h.A,NcActionCaption:A.A,NcActionLink:g.A,NcNoteCard:f.A,NcSelect:v.A,NcSettingsSection:m.A},data:()=>({loadingGroups:!1,newVersionString:"",lastCheckedDate:"",isUpdateChecked:!1,webUpdaterEnabled:!0,isWebUpdaterRecommended:!0,updaterEnabled:!0,versionIsEol:!1,downloadLink:"",isNewVersionAvailable:!1,hasValidSubscription:!1,updateServerURL:"",changelogURL:"",whatsNewData:[],currentChannel:"",channels:[],notifyGroups:"",groups:[],isDefaultUpdateServerURL:!0,enableChangeWatcher:!1,availableAppUpdates:[],missingAppUpdates:[],appStoreFailed:!1,appStoreDisabled:!1,isListFetched:!1,hideMissingUpdates:!1,hideAvailableUpdates:!0,openedWhatsNew:!1,openedUpdateChannelMenu:!1}),computed:{newVersionAvailableString(){return t("updatenotification","A new version is available: <strong>{newVersionString}</strong>",{newVersionString:this.newVersionString})},noteDelayedStableString:()=>t("updatenotification","Note that after a new release the update only shows up after the first minor release or later. We roll out new versions spread out over time and sometimes skip a version when issues are found. Learn more about updates and release channels at {link}").replace("{link}",'<a href="https://nextcloud.com/release-channels/">https://nextcloud.com/release-channels/</a>'),lastCheckedOnString(){return t("updatenotification","Checked on {lastCheckedDate} - Open changelog",{lastCheckedDate:this.lastCheckedDate})},statusText(){return this.isListFetched?this.appStoreDisabled?t("updatenotification","Please make sure your config.php does not set <samp>appstoreenabled</samp> to false."):this.appStoreFailed?t("updatenotification","Could not connect to the App Store or no updates have been returned at all. Search manually for updates or make sure your server has access to the internet and can connect to the App Store."):0===this.missingAppUpdates.length?t("updatenotification","<strong>All</strong> apps have a compatible version for this Nextcloud version available.",this):n("updatenotification","<strong>%n</strong> app has no compatible version for this Nextcloud version available.","<strong>%n</strong> apps have no compatible version for this Nextcloud version available.",this.missingAppUpdates.length):t("updatenotification","Checking apps for compatible versions")},channelList(){const e=[];return e.push({text:t("updatenotification","Enterprise"),longtext:t("updatenotification","For enterprise use. Provides always the latest patch level, but will not update to the next major release immediately. That update happens once Nextcloud GmbH has done additional hardening and testing for large-scale and mission-critical deployments. This channel is only available to customers and provides the Nextcloud Enterprise package."),icon:"icon-star",active:"enterprise"===this.currentChannel,disabled:!this.hasValidSubscription,action:this.changeReleaseChannelToEnterprise}),e.push({text:t("updatenotification","Stable"),longtext:t("updatenotification","The most recent stable version. It is suited for regular use and will always update to the latest major version."),icon:"icon-checkmark",active:"stable"===this.currentChannel,action:this.changeReleaseChannelToStable}),e.push({text:t("updatenotification","Beta"),longtext:t("updatenotification","A pre-release version only for testing new features, not for production environments."),icon:"icon-category-customization",active:"beta"===this.currentChannel,action:this.changeReleaseChannelToBeta}),this.isNonDefaultChannel&&e.push({text:this.currentChannel,icon:"icon-rename",active:!0,action:()=>{}}),e},isNonDefaultChannel(){return"enterprise"!==this.currentChannel&&"stable"!==this.currentChannel&&"beta"!==this.currentChannel},localizedChannelName(){switch(this.currentChannel){case"enterprise":return t("updatenotification","Enterprise");case"stable":return t("updatenotification","Stable");case"beta":return t("updatenotification","Beta");default:return this.currentChannel}}},watch:{notifyGroups(t){if(!this.enableChangeWatcher)return void(this.enableChangeWatcher=!0);const e=this.notifyGroups.map((t=>t.id));OCP.AppConfig.setValue("updatenotification","notify_groups",JSON.stringify(e))},isNewVersionAvailable(){this.isNewVersionAvailable&&d.A.get((0,p.KT)("apps/updatenotification/api/v1/applist/{newVersion}",{newVersion:this.newVersion})).then((t=>{let{data:e}=t;this.availableAppUpdates=e.ocs.data.available,this.missingAppUpdates=e.ocs.data.missing,this.isListFetched=!0,this.appStoreFailed=!1})).catch((t=>{let{data:e}=t;this.availableAppUpdates=[],this.missingAppUpdates=[],this.appStoreDisabled=e.ocs.data.appstore_disabled,this.isListFetched=!0,this.appStoreFailed=!0}))}},beforeMount(){const t=(0,l.C)("updatenotification","data");this.newVersion=t.newVersion,this.newVersionString=t.newVersionString,this.lastCheckedDate=t.lastChecked,this.isUpdateChecked=t.isUpdateChecked,this.webUpdaterEnabled=t.webUpdaterEnabled,this.isWebUpdaterRecommended=t.isWebUpdaterRecommended,this.updaterEnabled=t.updaterEnabled,this.downloadLink=t.downloadLink,this.isNewVersionAvailable=t.isNewVersionAvailable,this.updateServerURL=t.updateServerURL,this.currentChannel=t.currentChannel,this.channels=t.channels,this.notifyGroups=t.notifyGroups,this.isDefaultUpdateServerURL=t.isDefaultUpdateServerURL,this.versionIsEol=t.versionIsEol,this.hasValidSubscription=t.hasValidSubscription,t.changes&&t.changes.changelogURL&&(this.changelogURL=t.changes.changelogURL),t.changes&&t.changes.whatsNew&&(t.changes.whatsNew.admin&&(this.whatsNewData=this.whatsNewData.concat(t.changes.whatsNew.admin)),this.whatsNewData=this.whatsNewData.concat(t.changes.whatsNew.regular))},mounted(){this.searchGroup()},methods:{searchGroup:U()((async function(t){this.loadingGroups=!0;try{const e=await d.A.get((0,p.KT)("cloud/groups/details"),{search:t,limit:20,offset:0});this.groups=e.data.ocs.data.groups.sort((function(t,e){return t.displayname.localeCompare(e.displayname)}))}catch(t){S.error("Could not fetch groups",t)}finally{this.loadingGroups=!1}}),500),clickUpdaterButton(){d.A.get((0,p.Jv)("/apps/updatenotification/credentials")).then((t=>{let{data:e}=t;const n=document.createElement("form");n.setAttribute("method","post"),n.setAttribute("action",(0,p.aU)()+"/updater/");const a=document.createElement("input");a.setAttribute("type","hidden"),a.setAttribute("name","updater-secret-input"),a.setAttribute("value",e),n.appendChild(a),document.body.appendChild(n),n.submit()}))},changeReleaseChannelToEnterprise(){this.changeReleaseChannel("enterprise")},changeReleaseChannelToStable(){this.changeReleaseChannel("stable")},changeReleaseChannelToBeta(){this.changeReleaseChannel("beta")},changeReleaseChannel(t){this.currentChannel=t,d.A.post((0,p.Jv)("/apps/updatenotification/channel"),{channel:this.currentChannel}).then((t=>{let{data:e}=t;(0,r.Te)(e.data.message)})),this.openedUpdateChannelMenu=!1},toggleHideMissingUpdates(){this.hideMissingUpdates=!this.hideMissingUpdates},toggleHideAvailableUpdates(){this.hideAvailableUpdates=!this.hideAvailableUpdates}}};var D=i(85072),E=i.n(D),L=i(97825),V=i.n(L),T=i(77659),R=i.n(T),B=i(55056),H=i.n(B),G=i(10540),M=i.n(G),O=i(41113),I=i.n(O),P=i(77165),j={};j.styleTagTransform=I(),j.setAttributes=H(),j.insert=R().bind(null,"head"),j.domAPI=V(),j.insertStyleElement=M(),E()(P.A,j),P.A&&P.A.locals&&P.A.locals;var F=i(17345),z={};z.styleTagTransform=I(),z.setAttributes=H(),z.insert=R().bind(null,"head"),z.domAPI=V(),z.insertStyleElement=M(),E()(F.A,z),F.A&&F.A.locals&&F.A.locals;const W=(0,C.A)(N,(function(){var t=this,e=t._self._c;return e("NcSettingsSection",{attrs:{id:"updatenotification",name:t.t("updatenotification","Update")}},[e("div",{staticClass:"update"},[t.isNewVersionAvailable?[t.versionIsEol?e("NcNoteCard",{attrs:{type:"warning"}},[t._v("\n\t\t\t\t"+t._s(t.t("updatenotification","The version you are running is not maintained anymore. Please make sure to update to a supported version as soon as possible."))+"\n\t\t\t")]):t._e(),t._v(" "),e("p",[e("span",{domProps:{innerHTML:t._s(t.newVersionAvailableString)}}),e("br"),t._v(" "),t.isListFetched?t._e():e("span",{staticClass:"icon icon-loading-small"}),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.statusText)}})]),t._v(" "),t.missingAppUpdates.length?[e("h3",{staticClass:"clickable",on:{click:t.toggleHideMissingUpdates}},[t._v("\n\t\t\t\t\t"+t._s(t.t("updatenotification","Apps missing compatible version"))+"\n\t\t\t\t\t"),t.hideMissingUpdates?t._e():e("span",{staticClass:"icon icon-triangle-n"}),t._v(" "),t.hideMissingUpdates?e("span",{staticClass:"icon icon-triangle-s"}):t._e()]),t._v(" "),t.hideMissingUpdates?t._e():e("ul",{staticClass:"applist"},t._l(t.missingAppUpdates,(function(n,a){return e("li",{key:a},[e("a",{attrs:{href:"https://apps.nextcloud.com/apps/"+n.appId,title:t.t("settings","View in store")}},[t._v(t._s(n.appName)+" ↗")])])})),0)]:t._e(),t._v(" "),t.availableAppUpdates.length?[e("h3",{staticClass:"clickable",on:{click:t.toggleHideAvailableUpdates}},[t._v("\n\t\t\t\t\t"+t._s(t.t("updatenotification","Apps with compatible version"))+"\n\t\t\t\t\t"),t.hideAvailableUpdates?t._e():e("span",{staticClass:"icon icon-triangle-n"}),t._v(" "),t.hideAvailableUpdates?e("span",{staticClass:"icon icon-triangle-s"}):t._e()]),t._v(" "),t.hideAvailableUpdates?t._e():e("ul",{staticClass:"applist"},t._l(t.availableAppUpdates,(function(n,a){return e("li",{key:a},[e("a",{attrs:{href:"https://apps.nextcloud.com/apps/"+n.appId,title:t.t("settings","View in store")}},[t._v(t._s(n.appName)+" ↗")])])})),0)]:t._e(),t._v(" "),!t.isWebUpdaterRecommended&&t.updaterEnabled&&t.webUpdaterEnabled?[e("h3",{staticClass:"warning"},[t._v("\n\t\t\t\t\t"+t._s(t.t("updatenotification","Please note that the web updater is not recommended with more than 100 accounts! Please use the command line updater instead!"))+"\n\t\t\t\t")])]:t._e(),t._v(" "),e("div",[t.updaterEnabled&&t.webUpdaterEnabled?e("a",{staticClass:"button primary",attrs:{href:"#"},on:{click:t.clickUpdaterButton}},[t._v(t._s(t.t("updatenotification","Open updater")))]):t._e(),t._v(" "),t.downloadLink?e("a",{staticClass:"button",class:{hidden:!t.updaterEnabled},attrs:{href:t.downloadLink}},[t._v(t._s(t.t("updatenotification","Download now")))]):t._e(),t._v(" "),t.updaterEnabled&&!t.webUpdaterEnabled?e("span",[t._v("\n\t\t\t\t\t"+t._s(t.t("updatenotification","Web updater is disabled. Please use the command line updater or the appropriate update mechanism for your installation method (e.g. Docker pull) to update."))+"\n\t\t\t\t")]):t._e(),t._v(" "),t.whatsNewData||t.changelogURL?e("NcActions",{attrs:{"force-menu":!0,"menu-name":t.t("updatenotification","What's new?"),type:"tertiary"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconNewBox",{attrs:{size:20}})]},proxy:!0},{key:"default",fn:function(){return[t._l(t.whatsNewData,(function(t,n){return e("NcActionCaption",{key:n,attrs:{name:t}})})),t._v(" "),t.changelogURL?e("NcActionLink",{attrs:{href:t.changelogURL,"close-after-click":"",target:"_blank"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconLink",{attrs:{size:20}})]},proxy:!0}],null,!1,3963853667)},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.t("updatenotification","View changelog"))+"\n\t\t\t\t\t\t\t")]):t._e()]},proxy:!0}],null,!1,1184001031)}):t._e()],1)]:t.isUpdateChecked?[t._v("\n\t\t\t"+t._s(t.t("updatenotification","Your version is up to date."))+"\n\t\t\t"),e("a",{staticClass:"icon-info details",attrs:{title:t.lastCheckedOnString,"aria-label":t.lastCheckedOnString,href:"https://nextcloud.com/changelog/",target:"_blank"}})]:[t._v("\n\t\t\t"+t._s(t.t("updatenotification","The update check is not yet finished. Please refresh the page."))+"\n\t\t")],t._v(" "),t.isDefaultUpdateServerURL?t._e():[e("p",{staticClass:"topMargin"},[e("em",[t._v(t._s(t.t("updatenotification","A non-default update server is in use to be checked for updates:"))+" "),e("code",[t._v(t._s(t.updateServerURL))])])])]],2),t._v(" "),e("h3",[t._v(t._s(t.t("updatenotification","Update channel")))]),t._v(" "),e("p",{staticClass:"inlineblock"},[t._v("\n\t\t"+t._s(t.t("updatenotification","Changing the update channel also affects the apps management page. E.g. after switching to the beta channel, beta app updates will be offered to you in the apps management page."))+"\n\t")]),t._v(" "),e("div",{staticClass:"update-channel-selector"},[e("span",[t._v(t._s(t.t("updatenotification","Current update channel:")))]),t._v(" "),e("NcActions",{attrs:{"force-menu":!0,"menu-name":t.localizedChannelName,type:"tertiary"},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconChevronDown",{attrs:{size:20}})]},proxy:!0},{key:"default",fn:function(){return t._l(t.channelList,(function(n,a){return e("NcActionButton",{key:a,staticClass:"update-channel-action",attrs:{"aria-checked":n.active?"true":"false","aria-label":n.text,disabled:!!n.disabled,icon:n.icon,name:n.text,"close-after-click":"",role:"menuitemradio"},on:{click:n.action}},[t._v("\n\t\t\t\t\t"+t._s(n.longtext)+"\n\t\t\t\t")])}))},proxy:!0}])})],1),t._v(" "),e("p",[e("em",[t._v(t._s(t.t("updatenotification","You can always update to a newer version. But you can never downgrade to a more stable version.")))]),e("br"),t._v(" "),e("em",{domProps:{innerHTML:t._s(t.noteDelayedStableString)}})]),t._v(" "),e("NcSelect",{attrs:{id:"notify-members-settings-select-wrapper","input-label":t.t("updatenotification","Notify members of the following groups about available updates:"),options:t.groups,multiple:!0,label:"displayname",loading:t.loadingGroups,"close-on-select":!1},on:{search:t.searchGroup},scopedSlots:t._u([{key:"no-options",fn:function(){return[t._v("\n\t\t\t"+t._s(t.t("updatenotification","No groups"))+"\n\t\t")]},proxy:!0}]),model:{value:t.notifyGroups,callback:function(e){t.notifyGroups=e},expression:"notifyGroups"}}),t._v(" "),e("p",["daily"===t.currentChannel||"git"===t.currentChannel?e("em",[t._v(t._s(t.t("updatenotification","Only notifications for app updates are available.")))]):t._e(),t._v(" "),"daily"===t.currentChannel?e("em",[t._v(t._s(t.t("updatenotification","The selected update channel makes dedicated notifications for the server obsolete.")))]):"git"===t.currentChannel?e("em",[t._v(t._s(t.t("updatenotification","The selected update channel does not support updates of the server.")))]):t._e()])],1)}),[],!1,null,"190a4008",null).exports;s.Ay.mixin({methods:{t:(t,e,n,a,i)=>(0,o.Tl)(t,e,n,a,i),n:(t,e,n,a,i,s)=>(0,o.zw)(t,e,n,a,i,s)}}),new s.Ay({el:"#updatenotification",render:t=>t(W)})},77165:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(71354),i=n.n(a),o=n(76314),s=n.n(o)()(i());s.push([t.id,"#updatenotification>*[data-v-190a4008]{max-width:900px}#updatenotification .topMargin[data-v-190a4008]{margin-top:15px}#updatenotification div.update[data-v-190a4008],#updatenotification p[data-v-190a4008]:not(.inlineblock){margin-bottom:25px}#updatenotification h2.inlineblock[data-v-190a4008]{margin-top:25px}#updatenotification h3.clickable[data-v-190a4008]{cursor:pointer}#updatenotification h3.clickable .icon[data-v-190a4008]{cursor:pointer}#updatenotification .update-channel-selector[data-v-190a4008]{display:flex;align-items:center;gap:12px}#updatenotification .icon[data-v-190a4008]{display:inline-block;margin-bottom:-3px}#updatenotification .icon-triangle-s[data-v-190a4008],#updatenotification .icon-triangle-n[data-v-190a4008]{opacity:.5}#updatenotification .applist[data-v-190a4008]{margin-bottom:25px}#updatenotification .update-menu[data-v-190a4008]{position:relative;cursor:pointer;margin-left:3px;display:inline-block;padding:10px;border-radius:10px;border:2px solid var(--color-border-dark)}#updatenotification .update-menu .icon-update-menu[data-v-190a4008]{cursor:inherit}#updatenotification .update-menu .icon-update-menu .icon-triangle-s[data-v-190a4008]{display:inline-block;vertical-align:middle;cursor:inherit;opacity:1}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/UpdateNotification.vue"],names:[],mappings:"AAEC,uCACC,eAAA,CAGD,gDACC,eAAA,CAGD,yGAEC,kBAAA,CAED,oDACC,eAAA,CAGA,kDACC,cAAA,CACA,wDACC,cAAA,CAIH,8DACC,YAAA,CACA,kBAAA,CACA,QAAA,CAED,2CACC,oBAAA,CACA,kBAAA,CAED,4GACC,UAAA,CAED,8CACC,kBAAA,CAGD,kDACC,iBAAA,CACA,cAAA,CACA,eAAA,CACA,oBAAA,CACA,YAAA,CACA,kBAAA,CACA,yCAAA,CACA,oEACC,cAAA,CACA,qFACC,oBAAA,CACA,qBAAA,CACA,cAAA,CACA,SAAA",sourcesContent:["\n#updatenotification {\n\t& > * {\n\t\tmax-width: 900px;\n\t}\n\n\t.topMargin {\n\t\tmargin-top: 15px;\n\t}\n\n\tdiv.update,\n\tp:not(.inlineblock) {\n\t\tmargin-bottom: 25px;\n\t}\n\th2.inlineblock {\n\t\tmargin-top: 25px;\n\t}\n\th3 {\n\t\t&.clickable {\n\t\t\tcursor: pointer;\n\t\t\t.icon {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t}\n\t.update-channel-selector {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 12px;\n\t}\n\t.icon {\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: -3px;\n\t}\n\t.icon-triangle-s, .icon-triangle-n {\n\t\topacity: 0.5;\n\t}\n\t.applist {\n\t\tmargin-bottom: 25px;\n\t}\n\n\t.update-menu {\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tmargin-left: 3px;\n\t\tdisplay: inline-block;\n\t\tpadding: 10px;\n\t\tborder-radius: 10px;\n\t\tborder: 2px solid var(--color-border-dark);\n\t\t.icon-update-menu {\n\t\t\tcursor: inherit;\n\t\t\t.icon-triangle-s {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tvertical-align: middle;\n\t\t\t\tcursor: inherit;\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const r=s},17345:(t,e,n)=>{n.d(e,{A:()=>r});var a=n(71354),i=n.n(a),o=n(76314),s=n.n(o)()(i());s.push([t.id,".update-channel-action[aria-checked=true]{border-inline-start:4px solid var(--color-primary-element)}.update-channel-action[aria-checked=true]:hover,.update-channel-action[aria-checked=true]:focus-within{background-color:var(--color-primary-element-light-hover)}.update-channel-action[aria-checked=true] button{background-color:var(--color-primary-element-light);color:var(--color-primary-element-light-text)}.update-channel-action[aria-checked]{margin-block:2px}#updatenotification .update-menu .icon-star:hover,#updatenotification .update-menu .icon-star:focus{background-image:var(--icon-starred)}#updatenotification #notify-members-settings-select-wrapper{width:fit-content}#updatenotification #notify-members-settings-select-wrapper .vs__dropdown-toggle{min-width:100%}","",{version:3,sources:["webpack://./apps/updatenotification/src/components/UpdateNotification.vue"],names:[],mappings:"AAEA,0CACC,0DAAA,CAEA,uGACC,yDAAA,CAGD,iDACC,mDAAA,CACA,6CAAA,CAIF,qCACC,gBAAA,CAKA,oGAEC,oCAAA,CAGD,4DACC,iBAAA,CAEA,iFACC,cAAA",sourcesContent:["\n// Make current selected update channel visually visible, remove if NcActionRadio is used\n.update-channel-action[aria-checked=true] {\n\tborder-inline-start: 4px solid var(--color-primary-element);\n\n\t&:hover, &:focus-within {\n\t\tbackground-color: var(--color-primary-element-light-hover);\n\t}\n\n\tbutton {\n\t\tbackground-color: var(--color-primary-element-light);\n\t\tcolor: var(--color-primary-element-light-text);\n\t}\n}\n// Ensure outline for focus-visible works even with background color of selected channel\n.update-channel-action[aria-checked] {\n\tmargin-block: 2px;\n}\n\n#updatenotification {\n\t/* override needed to replace yellow hover state with a dark one */\n\t.update-menu .icon-star:hover,\n\t.update-menu .icon-star:focus {\n\t\tbackground-image: var(--icon-starred);\n\t}\n\t/* override NcSelect styling so that label can have correct width */\n\t#notify-members-settings-select-wrapper {\n\t\twidth: fit-content;\n\n\t\t.vs__dropdown-toggle {\n\t\t\tmin-width: 100%;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]);const r=s}},s={};function r(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={id:t,loaded:!1,exports:{}};return o[t].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=o,e=[],r.O=(t,n,a,i)=>{if(!n){var o=1/0;for(p=0;p<e.length;p++){n=e[p][0],a=e[p][1],i=e[p][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((t=>r.O[t](n[l])))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(p--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[n,a,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+"-"+t+".js?v="+{3747:"9b0f884a07c9e7c83b1a",5662:"d1f20e62402d8be29948"}[t],r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),a={},i="nextcloud:",r.l=(t,e,n,o)=>{if(a[t])a[t].push(e);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),p=0;p<c.length;p++){var d=c[p];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==i+n){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",i+n),s.src=t),a[t]=[e];var u=(e,n)=>{s.onerror=s.onload=null,clearTimeout(h);var i=a[t];if(delete a[t],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((t=>t(n))),e)return e(n)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),l&&document.head.appendChild(s)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),r.j=8604,(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=n[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{r.b=document.baseURI||self.location.href;var t={8604:0};r.f.j=(e,n)=>{var a=r.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(((n,i)=>a=t[e]=[n,i]));n.push(a[2]=i);var o=r.p+r.u(e),s=new Error;r.l(o,(n=>{if(r.o(t,e)&&(0!==(a=t[e])&&(t[e]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}}),"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,n)=>{var a,i,o=n[0],s=n[1],l=n[2],c=0;if(o.some((e=>0!==t[e]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var p=l(r)}for(e&&e(n);c<o.length;c++)i=o[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(p)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.nc=void 0;var l=r.O(void 0,[4208],(()=>r(13227)));l=r.O(l)})();
//# sourceMappingURL=updatenotification-updatenotification.js.map?v=bcb5f9d9e27311d62130