if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("IGDSGlimmer.react",["CometGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{backgroundColor:"x19g9edo",borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r"}};function a(a){var b=a.children,d=a.className,e=a.index;a=a.xstyle;return h.jsx(c("CometGlimmer.react"),{children:b,className:d,index:e,xstyle:[i.root,a]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityFeedContext.react",["$InternalEnum","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;c=b("$InternalEnum").Mirrored(["ActivityFeedBox","ActivityFeedPage","SidebarNotificationsPanel"]);var j=h.createContext(null);function a(a){var b=a.children,c=a.placement;a=i(function(){return{placement:c}},[c]);return h.jsx(j.Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g.ActivityFeedPlacement=c;g.PolarisActivityFeedContext=j;g.PolarisActivityFeedContextProvider=a}),98);
__d("PolarisActivityFeedBlankShareView.react",["cx","fbt","BaseButton.react","PolarisActivityFeedContext.react","PolarisConnectionsLogger","PolarisCreationMode","PolarisFetchingSuggestedUserList.react","PolarisIGCoreText","PolarisUA","PolariswithCreationStarter","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useContext,l=i._("Activity on your posts"),m=i._("When someone likes or comments on one of your posts, you'll see it here."),n=i._("Share your first photo");function a(a){var b=a.onStartCreation;a=function(){b&&b("activity_null_upsell",d("PolarisCreationMode").CreationMode.POST)};var e=k(d("PolarisActivityFeedContext.react").PolarisActivityFeedContext),f=(e==null?void 0:e.placement)===d("PolarisActivityFeedContext.react").ActivityFeedPlacement.ActivityFeedPage;e=(e==null?void 0:e.placement)===d("PolarisActivityFeedContext.react").ActivityFeedPlacement.SidebarNotificationsPanel;var g=f||e;return j.jsxs(j.Fragment,{children:[j.jsx("div",{className:"_aajo"+(f?" _ag91":""),children:j.jsx("div",{className:"_aajp",children:j.jsxs("div",{className:"_aajq",children:[j.jsx("div",{className:"_aajr",children:j.jsx("div",{className:"_aajs _9zkj"})}),j.jsx("h2",{className:"_aajt",children:j.jsx(c("PolarisIGCoreText").Body,{zeroMargin:!0,children:l})}),j.jsx("h3",{className:"_aaju",children:j.jsx(c("PolarisIGCoreText").Body,{zeroMargin:!0,children:m})}),d("PolarisUA").isMobile()&&j.jsx("div",{className:"_aajv",children:j.jsx(c("BaseButton.react"),{onClick:a,children:n})})]})})}),g&&j.jsx("div",{className:"xx4vt8u"+(e?" xurb0ha x1sxyh0":""),children:j.jsx(c("PolarisFetchingSuggestedUserList.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.newsfeed_you,viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.activity_page})})]})}a.displayName=a.name+" [from "+f.id+"]";b=c("PolariswithCreationStarter")(a);g["default"]=b}),98);
__d("PolarisActivityFeedBox.react",["cx","PolarisActivityFeedContext.react","PolarisDesktopNavPopover.react","cr:2070","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j="ActivityFeedBox",k=423;function a(a){var e=a.isVisible;a=a.onClose;return i.jsx(c("PolarisDesktopNavPopover.react"),{isVisible:e,marginLeft:k,onClose:a,children:i.jsx("div",{className:"_aajc",children:i.jsx(d("PolarisActivityFeedContext.react").PolarisActivityFeedContextProvider,{placement:d("PolarisActivityFeedContext.react").ActivityFeedPlacement.ActivityFeedBox,children:i.jsx(b("cr:2070"),{analyticsContext:j,updateHistory:!1})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityFeedFollowRequestsEmptyState.react",["fbt","PolarisAssetManagerGlyphMapping","PolarisConnectionsLogger","PolarisFetchingSuggestedUserList.react","PolarisIGCoreBorderedIcon","PolarisIGCoreBox","PolarisIGCoreText","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){return i.jsxs(i.Fragment,{children:[i.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",border:!0,color:"ig-secondary-background",justifyContent:"center",paddingX:4,paddingY:6,children:[i.jsx(c("PolarisIGCoreBorderedIcon"),{alt:"",icon:d("PolarisAssetManagerGlyphMapping").ICONS.FOLLOW_CONTEXTUAL_LOGIN,size:100}),i.jsx(c("PolarisIGCoreBox"),{paddingY:5,children:i.jsx(c("PolarisIGCoreText").Headline2,{textAlign:"center",children:h._("Follow requests")})}),i.jsx(c("PolarisIGCoreText").Body,{textAlign:"center",children:h._("When people ask to follow you, you'll see their requests here.")})]}),i.jsx(c("PolarisFetchingSuggestedUserList.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.follow_requests,viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.activity_page})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityFeedV3MainViewHeader.react",["IGDSText.react","PolarisNavigationStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx("div",{className:"xbbxn1n xwxc41k xxbr6pl xyamay9",children:h.jsx(c("IGDSText.react"),{size:"headline2",weight:"bold",children:d("PolarisNavigationStrings").NOTIFICATIONS_TEXT})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityFeedGlimmersLoadingState.react",["CometHeroHoldTrigger.react","IGDSGlimmer.react","PolarisActivityFeedContext.react","PolarisActivityFeedV3MainViewHeader.react","qex","range","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j={firstSectionLabelGlimmer:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"xlup9mm",marginBottom:"x1yztbdb",marginStart:"xmupa6y",width:"x1exxlbk"},row:{alignItems:"x6s0dn4",display:"x78zum5",paddingTop:"x1y1aw1k",paddingEnd:"xxbr6pl",paddingBottom:"xwib8y2",paddingStart:"xbbxn1n"},actorGlimmer:{borderTopStartRadius:"x1ke7ulo",borderTopEndRadius:"x3jqge",borderBottomEndRadius:"x1i7howy",borderBottomStartRadius:"x4y8mfe",flexShrink:"x2lah0s",height:"xn3w4p2",width:"x187nhsf"},textGlimmer:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",flexGrow:"x1iyjqo2",height:"x1v9usgg",marginStart:"x16n37ib",width:"xh8yej3"},mediaGlimmer:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",flexShrink:"x2lah0s",height:"xn3w4p2",marginStart:"x1tv9t25",width:"x187nhsf"}};function a(){var a;a=(a=c("qex")._("1815"))!=null?a:!1;var b=i(d("PolarisActivityFeedContext.react").PolarisActivityFeedContext);b=b==null?void 0:b.placement;return h.jsxs("div",{children:[a&&b===d("PolarisActivityFeedContext.react").ActivityFeedPlacement.SidebarNotificationsPanel&&h.jsx(c("PolarisActivityFeedV3MainViewHeader.react"),{}),a&&h.jsx(c("IGDSGlimmer.react"),{index:0,xstyle:j.firstSectionLabelGlimmer}),c("range")(1,25).map(function(a){return h.jsxs("div",{className:c("stylex")(j.row),children:[h.jsx(c("IGDSGlimmer.react"),{index:a,xstyle:j.actorGlimmer}),h.jsx(c("IGDSGlimmer.react"),{index:a+1,xstyle:j.textGlimmer}),h.jsx(c("IGDSGlimmer.react"),{index:a+2,xstyle:j.mediaGlimmer})]},a)}),h.jsx(k,{})]})}a.displayName=a.name+" [from "+f.id+"]";function k(){return h.jsx(c("CometHeroHoldTrigger.react"),{description:"PolarisActivityFeedGlimmersLoadingState",hold:!0})}k.displayName=k.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisActivityFeedStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("Follow requests");g.FOLLOW_REQUESTS_TITLE=a}),98);
__d("PolarisFollowRequestButtons.react",["fbt","PolarisConnectionsLogger","PolarisFollowButtonContainer.react","PolarisFollowRequestState","PolarisIGCoreBox","PolarisIGCoreButton","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=h._("Confirm"),k=h._("Delete");function a(a){var b=a.onApprove,e=a.onIgnore,f=a.position,g=a.requestStatus,h=a.userId;a=a.username;var l=function(a){n("follow_request_accept_tapped"),b(a)},m=function(a){n("follow_request_ignore_tapped"),e(a)},n=function(a){d("PolarisConnectionsLogger").logConnectionAction({eventName:a,position:f,containerModule:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.follow_requests,targetId:h})};return g===d("PolarisFollowRequestState").FollowRequestStatus.Approved?i.jsx(c("PolarisIGCoreBox"),{"data-testid":void 0,direction:"row",justifyContent:"between",children:i.jsx(c("PolarisFollowButtonContainer.react"),{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.follow_requests,userId:h,username:a})}):i.jsxs(c("PolarisIGCoreBox"),{"data-testid":void 0,direction:"row",justifyContent:"end",children:[i.jsx(c("PolarisIGCoreBox"),{marginEnd:2,children:i.jsx(c("PolarisIGCoreButton"),{disabled:g!==d("PolarisFollowRequestState").FollowRequestStatus.Pending,loading:g===d("PolarisFollowRequestState").FollowRequestStatus.Approving,onClick:l,children:j})}),i.jsx(c("PolarisIGCoreBox"),{children:i.jsx(c("PolarisIGCoreButton"),{color:"ig-secondary-button",disabled:g!==d("PolarisFollowRequestState").FollowRequestStatus.Pending,loading:g===d("PolarisFollowRequestState").FollowRequestStatus.Ignoring,onClick:m,children:k})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisTimedSpinner.react",["PolarisIGCoreSpinner","PolarisPerformanceLogger","PolarisTimer","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useEffect,j=e.useRef;function a(a){a.component;var b=a.onTimingSpinner;a.timingEvent;a=babelHelpers.objectWithoutPropertiesLoose(a,["component","onTimingSpinner","timingEvent"]);var e=j();i(function(){e.current=b},[b]);i(function(){var a=d("PolarisTimer").now();return function(){var b=e.current;b!=null&&b(d("PolarisTimer").now()-a)}},[]);return h.jsx(c("PolarisIGCoreSpinner"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";function b(a,b){return{onTimingSpinner:function(c){var e=a.navigation,f=e.pageIdentifier;e=e.route;e!=null&&e!==""&&f&&d("PolarisPerformanceLogger").logComponentPerformanceTiming({component:b.component,eventType:b.timingEvent,pageId:f,route:e,timeTaken:c})}}}e=d("react-redux-wwwig").connect(b)(a);g["default"]=e}),98);
__d("PolarisNewsfeedStoryClickFalcoEvent",["PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";var h={pigeon:!0,falco:!1};a=function(){function a(){}a.log=function(a){d("PolarisFalcoLogger").FalcoLogger.log("newsfeed_story_click",a(),h)};return a}();g.NewsfeedStoryClickFalcoEvent=a}),98);