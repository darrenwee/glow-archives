/* [Warning] Do not copy or self host this file, you will not be supported */
/* BrowseAloud Plus v2.5.1 (15-02-2018) */

function toggleBar(){debug.trace("Legacy toggleBar()"),(!BrowseAloud.config.isMobile||BrowseAloud.config.isMobile&&BrowseAloud.config.availableMobile)&&BrowseAloud.panel.toggleBar(!0)}var _ba_cv="2.5.1";if(void 0===_baApplicationServer)var $jq,$panel=!1,$buttonlink=!1,$logo=!1,_baApplicationServer="plus.browsealoud.com",_baResourceServer="plus.browsealoud.com",_baS3Bucket="plus.browsealoud.com",_baPdfServer="pdf.browsealoud.com",_speechServerUrl="baspeech.speechstream.net",_speechServerBackupUrl="baspeech-backup.speechstream.net",_baGTMContainerId="GTM-NJ9C74",_strServerBabm="babm.texthelp.com",_baSrcPath="//plus.browsealoud.com/modules/",_baSrcFile="browsealoud.min.js",_baCsrcFile="ba.js",_baInitialised=!1,_baPacSettingExpiry=60;var BrowseAloud=BrowseAloud||{};BrowseAloud.start=BrowseAloud.start||{settings:{jsFilesList:[location.hostname],jsFileHit:"",validExpiry:!1,validFolder:!0,pageLanguage:0,chosenVoice:""},init:function(a){if(""===BrowseAloud.config.version)BrowseAloud.config.version=a,debug.log("version",BrowseAloud.config.version),BrowseAloud.start.normaliseVariables(),BrowseAloud.start.updateCookies(),BrowseAloud.util.isBookmarklet()?(BrowseAloud.browsers.init(),BrowseAloud.jquery.init(function(){BrowseAloud.start.getUrlInfo(0)})):BrowseAloud.start.processUrlFile();else if(void 0!==BrowseAloud.config.languageId){var b=location.protocol+"//"+BrowseAloud.config.assetPath+"/js/locales/"+BrowseAloud.config.languageId+".min.js?v="+BrowseAloud.config.version;BrowseAloud.script.injectScript(b,function(){_baPanelMode?BrowseAloud.panel.init():BrowseAloud.toolbar.init()})}},normaliseVariables:function(){switch(_baMode="undefined"==typeof _baMode?"":_baMode,mode="undefined"==typeof mode?"":mode,_baMode=_baMode||mode,_baLocale="undefined"==typeof _baLocale?0:_baLocale,"undefined"!=typeof locale&&(_baLocale=locale),"string"==typeof _baLocale&&(debug.log("_baLocale (string)",_baLocale),_baLocale=BrowseAloud.config.regionMappings[_baLocale]),_baLocale=_baLocale||0,_baHideOnLoad="undefined"!=typeof _baHideOnLoad&&_baHideOnLoad,_baHiddenMode="undefined"!=typeof _baHiddenMode&&_baHiddenMode,_baUseCookies="undefined"!=typeof _baUseCookies&&_baUseCookies,_baPanelMode=void 0!==_baPanelMode&&_baPanelMode,_baLocale){case 9:case 12:case 18:case"se":case"no":case"fi":_baUseCookies=!0}BrowseAloud.config.isPAC="undefined"!=typeof _ba_is_ext&&_ba_is_ext,BrowseAloud.config.domainPAC="undefined"==typeof _ba_domain?"":_ba_domain,BrowseAloud.config.validLangTag=!1,debug.log("_baMode",_baMode),debug.log("_baLocale",_baLocale),debug.log("_ba_region",_ba_region),debug.log("_baHideOnLoad",_baHideOnLoad),debug.log("_baHiddenMode",_baHiddenMode),debug.log("_baUseCookies",_baUseCookies),debug.log("_baPanelMode",_baPanelMode),debug.log("isPAC",BrowseAloud.config.isPAC,BrowseAloud.config.domainPAC)},updateCookies:function(){BrowseAloud.cookies.get(BrowseAloud.cookies.COOKIE_X)<BrowseAloud.config.dragLimit&&BrowseAloud.cookies.clear(BrowseAloud.cookies.COOKIE_X,"/",location.hostname),BrowseAloud.cookies.get(BrowseAloud.cookies.COOKIE_Y)<BrowseAloud.config.dragLimit&&BrowseAloud.cookies.clear(BrowseAloud.cookies.COOKIE_Y,"/",location.hostname)},prereqsComplete:function(){BrowseAloud.script.init(),BrowseAloud.events.init(),BrowseAloud.config.isPAC&&BrowseAloud.extension.init(),BrowseAloud.script.injectCSS(BrowseAloud.config.resourcesPath+"/modules/"+BrowseAloud.config.version+"/css/browsealoud.css?v="+BrowseAloud.config.version),BrowseAloud.script.injectCSS(location.protocol+"//fonts.googleapis.com/css?family=Open+Sans:400,700"),"MSIE"===BrowseAloud.browsers.browser&&BrowseAloud.browsers.version<8?BrowseAloud.notifications.display("ie7_incompatible"):_baPanelMode?BrowseAloud.panel.init():BrowseAloud.toolbar.init()},getReferrerPath:function(){var a,b=document.URL,c="";return a=b.indexOf("?")>-1?b.substring(0,document.URL.lastIndexOf("?")):b,c+=location.hostname,location.port&&(c+=":"+location.port),c+=a.substring(a.indexOf("/",8),a.lastIndexOf("/"))},getUrlInfo:function(a){var b,c;if(void 0!==BrowseAloudUrl)return this.settings.jsFileHit="undefined"!=typeof domUrl?domUrl:"",void BrowseAloud.toolbar.init();if(""!==BrowseAloud.config.domainPAC)this.settings.jsFilesList=[],this.settings.jsFilesList.push(BrowseAloud.config.domainPAC),this.settings.jsFilesList.push(0===BrowseAloud.config.domainPAC.indexOf("www")?BrowseAloud.config.domainPAC.substring(location.hostname.indexOf(".")+1):"www."+BrowseAloud.config.domainPAC);else if(BrowseAloud.util.isPDFViewer()&&document.URL.indexOf("dom=")>-1)c=document.URL.substring(document.URL.indexOf("dom=")+4),this.settings.jsFilesList=[],this.settings.jsFilesList.push(c),this.settings.jsFilesList.push(0===c.indexOf("www")?c.substring(location.hostname.indexOf(".")+1):"www."+c);else if(1===this.settings.jsFilesList.length){var d=BrowseAloud.config.isSecure?8:7,e=document.URL.substring(d,document.URL.indexOf("/",d)),f=e.split("."),g=f.length-1;for(document.getElementsByTagName("script");g>1;)b=f.slice(-1*g).join("."),this.settings.jsFilesList.push(b),g--;this.settings.jsFilesList.push(0===location.hostname.indexOf("www")?location.hostname.substring(location.hostname.indexOf(".")+1):"www."+location.hostname)}if(this.settings.jsFilesList.length>a){var h=location.protocol+"//"+BrowseAloud.config.assetPath+"/js/urlinfo/"+this.settings.jsFilesList[a]+".js";if(h+="?"+Date.now(),window.XDomainRequest){var i=new XDomainRequest,j=location.protocol+"//"+BrowseAloud.config.assetPath+"/js/urlinfo/"+this.settings.jsFilesList[a]+".js";i.onprogress=function(){},i.onerror=function(){},i.onload=function(){i.status?200===i.status?(BrowseAloud.util.isBookmarklet()&&BrowseAloud.configToolbar.init(),BrowseAloud.start.settings.jsFileHit=BrowseAloud.start.settings.jsFilesList[a],BrowseAloud.script.injectScript(j,BrowseAloud.start.processUrlFile)):(404===i.status||403===i.status)&&a<BrowseAloud.start.settings.jsFilesList.length-1?BrowseAloud.start.getUrlInfo(a+1):debug.info("ba not registered"):i.responseText.indexOf("BrowseAloudUrl")>-1?(BrowseAloud.start.settings.jsFileHit=BrowseAloud.start.settings.jsFilesList[a],BrowseAloud.script.injectScript(j,BrowseAloud.start.processUrlFile)):debug.info("ba not registered")},i.open("GET",j),i.send()}else $jq.ajax({type:"GET",url:h}).done(function(b){var c=b.indexOf("{"),d=b.lastIndexOf("}")-c;b=b.substr(c,d+1);var e=JSON.parse(b);e.version&&e.version;BrowseAloudUrl=e,BrowseAloud.util.isBookmarklet()&&BrowseAloud.configToolbar.init(),BrowseAloud.start.settings.jsFileHit=BrowseAloud.start.settings.jsFilesList[a],BrowseAloud.start.processUrlFile()}).fail(function(b,c,d){debug.log(b,c,d),(404===b.status||403===b.status)&&a<BrowseAloud.start.settings.jsFilesList.length-1?BrowseAloud.start.getUrlInfo(a+1):debug.info("ba not registered")})}else debug.info("ba not registered")},processUrlFile:function(){if(BrowseAloud.start.settings.validExpiry=new Date(BrowseAloudUrl.expirydate)>=new Date,BrowseAloud.start.settings.validExpiry){BrowseAloud.config.toolbarTheme=BrowseAloudUrl.toolbartheme&&1===BrowseAloudUrl.toolbartheme?"light":"dark";var a,b,c,d,e=BrowseAloudUrl.folderrules,f=BrowseAloudUrl.speechrules,g=BrowseAloudUrl.subdomains||!BrowseAloudUrl.subdomains&&location.host===BrowseAloud.start.settings.jsFileHit||BrowseAloud.util.isPDFViewer();if(void 0!==_baPanelMode&&_baPanelMode&&!g)return void(_baPanelMode=!1);if(BrowseAloudUrl.restrictfolders)for(BrowseAloud.start.settings.validFolder=!1,a=0;a<e.length;a++)if(b=new RegExp(e[a].p.replace(/\*/g,"(.+)").replace(/[\-\[\]\/\{}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")),document.URL.match(b)&&e[a].e){BrowseAloud.start.settings.validFolder=!0;break}if(!BrowseAloud.start.settings.validExpiry||!BrowseAloud.start.settings.validFolder||!g)return void debug.info("ba not registered");if(!BrowseAloudUrl.baplus)return void debug.info("ba not enabled");try{""===_ba_region?0!==_baLocale?BrowseAloud.start.settings.pageLanguage=_baLocale:BrowseAloud.start.settings.pageLanguage=BrowseAloudUrl.lang:BrowseAloud.start.settings.pageLanguage=BrowseAloud.config.regionMappings[_ba_region]}catch(a){}if(f.length>0){var h="";for(c=0;c<f.length;c++)if(h=f[c].p.toLowerCase(),h=h.replace(/\*/g,"(.+)"),h=h.replace(/[\-\[\]\/\{}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),d=new RegExp(h),document.URL.toLowerCase().match(d)){BrowseAloud.start.settings.pageLanguage=f[c].t,BrowseAloud.start.settings.chosenVoice=f[c].v;break}}BrowseAloud.config.languageId=BrowseAloud.start.settings.pageLanguage;BrowseAloud.util.isMobileDevice()&&(BrowseAloudUrl.launchpadposition===BrowseAloud.panel.launchpadPositions.topLeft&&(BrowseAloudUrl.launchpadposition=BrowseAloud.panel.launchpadPositions.bottomLeft),BrowseAloudUrl.launchpadposition===BrowseAloud.panel.launchpadPositions.topRight&&(BrowseAloudUrl.launchpadposition=BrowseAloud.panel.launchpadPositions.bottomRight)),BrowseAloud.config.availableMobile=void 0===BrowseAloudUrl.availablemobile||BrowseAloudUrl.availablemobile,!BrowseAloud.util.isBookmarklet()&&BrowseAloud.util.isEnglishLang(BrowseAloud.config.languageId)?(BrowseAloudLocale.panel_try_now="Listen with browsealoud",BrowseAloud.start.prereqsComplete()):void 0!==BrowseAloud.config.languageId&&BrowseAloud.script.injectScript(location.protocol+"//"+BrowseAloud.config.assetPath+"/js/locales/"+BrowseAloud.config.languageId+".min.js?v="+BrowseAloud.config.version,BrowseAloud.start.prereqsComplete)}else debug.info("ba expired",BrowseAloudUrl.expirydate)}};var debug=function(){function a(){return BrowseAloud.config.isDebug&&window.console&&console.log}function b(){return BrowseAloud.config.isDebug&&window.console&&console.info}function c(){return BrowseAloud.config.isDebug&&window.console&&console.warn}function d(){return BrowseAloud.config.isDebug&&window.console&&console.error}function e(){return BrowseAloud.config.isDebug&&window.console&&console.trace}function f(){return BrowseAloud.config.isDebug&&window.console&&console.time}function g(){return BrowseAloud.config.isDebug&&window.console&&console.timeEnd}function h(){return BrowseAloud.config.isDebug&&window.console&&console.group}function i(){return BrowseAloud.config.isDebug&&window.console&&console.groupCollapsed}function j(){return BrowseAloud.config.isDebug&&window.console&&console.groupEnd}return{log:function(){if(a()){var b=Array.prototype.slice.call(arguments);console.log.apply?console.log.apply(console,b):console.log(b)}},info:function(){if(b()){var a=Array.prototype.slice.call(arguments);console.info.apply?console.info.apply(console,a):console.info(a)}},warn:function(){if(c()){var a=Array.prototype.slice.call(arguments);console.warn.apply?console.warn.apply(console,a):console.warn(a)}},error:function(){if(d()){var a=Array.prototype.slice.call(arguments);console.error.apply?console.error.apply(console,a):console.error(a)}},trace:function(){if(e()){var a=Array.prototype.slice.call(arguments);console.trace.apply?console.trace.apply(console,a):console.trace(a)}},time:function(){if(f()){var a=Array.prototype.slice.call(arguments);console.time.apply?console.time.apply(console,a):console.time(a)}},timeEnd:function(){if(g()){var a=Array.prototype.slice.call(arguments);console.timeEnd.apply?console.timeEnd.apply(console,a):console.timeEnd(a)}},group:function(){if(h()){var a=Array.prototype.slice.call(arguments);console.group.apply?console.group.apply(console,a):console.group(a)}},groupCollapsed:function(){if(i()){var a=Array.prototype.slice.call(arguments);console.groupCollapsed.apply?console.groupCollapsed.apply(console,a):console.groupCollapsed(a)}},groupEnd:function(){if(j()){var a=Array.prototype.slice.call(arguments);console.groupEnd.apply?console.groupEnd.apply(console,a):console.groupEnd(a)}}}}();BrowseAloud.config=BrowseAloud.config||{version:"",applicationPath:_baApplicationServer,assetPath:_baS3Bucket,strServerBabm:_strServerBabm,speechServerUrl:_speechServerUrl,speechServerBackupUrl:_speechServerBackupUrl,resourcesPath:location.protocol+"//"+_baS3Bucket,isSecure:"https:"===location.protocol,pdfViewerDomain:_baPdfServer,gtmContainerId:_baGTMContainerId,isMobile:null,maxMobileWidth:768,isDebug:document.URL.indexOf("badebug")>0,translationLangs:[],languages:[],l10n:{},regionMappings:{uk:0,en:0,"en-gb":0,us:1,"en-us":1,"es-mx":2,"es-co":110,es:3,"es-es":3,fr:4,"fr-fr":4,"fr-ca":5,de:6,it:7,nl:8,se:9,sv:9,au:10,"en-au":10,"pt-br":11,no:12,pl:13,fl:14,cy:15,ie:16,"en-ie":16,sc:17,"en-sc":17,fi:18,pt:19,af:50,ar:52,zh:62,cs:64,da:65,el:71,hu:77,id:79,jp:81,ko:85,ro:95,ru:96,sk:98,th:103,tr:104,"en-in":130,hi:75,"en-cy":109,eu:55,gl:69}},BrowseAloud.browsers=BrowseAloud.browsers||{isAndroid:!1,isIOS:!1,init:function(){var a,b=navigator.appName,c=navigator.userAgent,d=c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),e=c.match(/(msie)\/?\s*(\.?\d+(\.\d+)*)/i),f=c.match(/trident\/([\.\d]+)/i),g=c.match(/(windows|macintosh|android|ipad|ipod|iphone|linux|cros)/i),h=null!==g&&"Android"===g[1]&&-1===c.indexOf("Mobile");if(d&&null!==(a=c.match(/version\/([\.\d]+)/i))&&(d[2]=a[1]),d=d?[d[1],document.documentMode?document.documentMode:parseInt(d[2])]:[b,document.documentMode?document.documentMode:parseInt(navigator.appVersion),"-?"],d[2]=!0,(e||f)&&(d[0]="MSIE",d[2]=f&&parseInt(f[1],10)>=5),c.indexOf("Edge")>-1&&(d[0]="Edge",d[1]=c.match(/(edge)\/?\s*(\.?\d+(\.\d+)*)/i)[2]),this.browser=d[0],this.version=d[1],this.validBrowserMode=d[2],this.os=g[1],this.isTablet=h,"iPhone"===this.os&&this.version>100){var i=c.toLowerCase().indexOf(") version/"),j=c.toLowerCase().indexOf(" mobile/");this.version=parseInt(c.substr(i+10,j-i),10)}this.isAndroid=c.toLowerCase().indexOf("android")>0,this.isAndroidDefaultBrowser=c.toLowerCase().indexOf(") version/")>0,"MSIE"===this.browser&&this.version<=9?(this.isIE8=this.version<=8,BrowseAloud.config.imgExtension=".png"):this.isIE8=!1,"MSIE"===this.browser?this.isIE9=9===this.version:this.isIE9=!1,"iPhone"!==this.os&&"iPad"!==this.os&&"iPod"!==this.os||(this.isIOS=!0),this.deviceWidth=window.screen.width,this.supportsFixedPos=!0,("Safari"===this.browser||this.isIOS)&&(BrowseAloud.config.imgExtension=".png")}},BrowseAloud.cookies=BrowseAloud.cookies||{COOKIE_BA:"__ba_plus",COOKIE_SECURE:"__ba_allow_secure",COOKIE_LAUNCH:"__ba_launch_audio_alert",COOKIE_TOUCH:"__ba_touch",COOKIE_X:"rwebooks-x",COOKIE_Y:"rwebooks-y",COOKIE_SETTING:"__ba_settings",COOKIE_TRANS:"__ba_trans_ok",COOKIE_SECURE_TRANS:"__ba_sec_trans_ok",COOKIE_LANG_WARN:"__ba_lang_warn",get:function(a){var b=null;return b=this._get(a),debug.log("get",a,b),b},_get:function(a){var b,c,d;return b=document.cookie.indexOf(a+"="),d=b+a.length+1,b||a===document.cookie.substring(0,a.length)?-1===b?null:(c=document.cookie.indexOf(";",d),-1===c&&(c=document.cookie.length),unescape(document.cookie.substring(d,c))):null},set:function(a,b,c,d,e){var f=new Date;f.setTime(f.getTime()+36e5*(BrowseAloud.config.isPAC?1:8760));var g=";expires="+f.toGMTString(),h=a+"="+escape(b)+g+(c?";path="+c:"")+(d?";domain="+d:"")+(e?";secure":"");debug.log("set",h),document.cookie=h},clear:function(a,b,c){debug.log("delete",a),this.get(a)&&(document.cookie=a+"="+(b?";path="+b:"")+(c?";domain="+c:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT")}},BrowseAloud.jquery=BrowseAloud.jquery||{callback:null,init:function(a){this.callback=a,void 0===$jq?BrowseAloud.script.injectScript(BrowseAloud.config.resourcesPath+"/modules/"+_ba_cv+"/ba-library.min.js",this.setJQuery):this.setJQuery()},setJQuery:function(){void 0===$jq&&($jq=jQueryBA.noConflict(!0)),void 0===$jq.ui?BrowseAloud.script.injectScript(BrowseAloud.config.resourcesPath+"/modules/"+_ba_cv+"/ba-library-ui.min.js",BrowseAloud.jquery.callback):BrowseAloud.jquery.callback()}},BrowseAloud.script=BrowseAloud.script||{init:function(){$jq.ajaxSetup({cache:!0}),this.injectGoogleTagManager()},injectScript:function(a,b){debug.log("injectScript",a);var c=document.createElement("script"),d=!1;c.setAttribute("src",a),b&&(c.onreadystatechange=c.onload=function(){d||b(),d=!0}),document.getElementsByTagName("body").length>0?document.getElementsByTagName("body")[0].appendChild(c):document.getElementsByTagName("html")[0].appendChild(c)},injectCSS:function(a){debug.log("injectCSS",a),0===$jq("link[href='"+a+"']").length&&$jq("body").append($jq("<link />").attr({rel:"stylesheet",type:"text/css",href:a}))},injectGoogleTagManager:function(){if(void 0===BrowseAloudUrl.disable_ga||!BrowseAloudUrl.disable_ga){var a="(function (w, d, s, l, i) {w[l] = w[l] || []; w[l].push({'gtm.start':new Date().getTime(), event: 'gtm.js'}); var f = d.getElementsByTagName(s)[0],j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src ='https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);})(window, document, 'script', 'baDataLayer', '"+BrowseAloud.config.gtmContainerId+"');",b=$jq("<script />").attr("type","text/javascript");b.text(a),$jq("body").append(b)}}},BrowseAloud.util=BrowseAloud.util||{getEnumDesc:function(a,b){if(BrowseAloud.browsers.isIE8||!Object.keys){var c=[];if("object"==typeof a&&null!==a)for(var d in a)c.push(d);return c[b]}return Object.getOwnPropertyNames(a)[b]},stripHtmlAttr:function(a){if(null!==a)return a=a.replace(/<(a|img)/g,"&lt;$1"),a=a.replace(/<\/(a|img)>/g,"&lt;/$1&gt;"),a=a.replace(/<\s*(\w+).*?>/g,"<$1>"),a=a.replace(/&lt;(a|img)/g,"<$1"),a=a.replace(/&lt;\/(a|img)&gt;/g,"</$1>")},htmlEncode:function(a){return $jq("<div/>").text(a).html()},htmlDecode:function(a){return $jq("<div/>").html(a).text()},isMobileDevice:function(){if(null===BrowseAloud.config.isMobile){var a=BrowseAloud.browsers.isIOS,b=BrowseAloud.browsers.isAndroid,c=BrowseAloud.browsers.os,d=BrowseAloud.browsers.deviceWidth,e=BrowseAloud.config.maxMobileWidth;return debug.log("isIOS",a),debug.log("isAndroid",b),debug.log("os",c),debug.log("deviceWidth",d),debug.log("maxMobileWidth",e),BrowseAloud.config.isMobile="iPhone"===c||(a||b)&&d<=e,debug.log("isMobile",BrowseAloud.config.isMobile),BrowseAloud.config.isMobile}return BrowseAloud.config.isMobile},cssImportant:function(a){var b=a.attr("style");void 0!==b&&-1===b.indexOf("!important")&&a.attr("style",b.replace(/;/g," !important;"))},setFocusOn:function(a){$jq(a).focus(),debug.log("focus was set on",a)},isEnglishLang:function(a){var b=!1;switch(a){case 0:case 1:case 10:case 16:case 17:case 109:case 130:b=!0}return b},isWelshVoice:function(){return $rw_getVoice().indexOf("Welsh")>-1},getVoice:function(){if(document.URL.indexOf("&v=")>-1){var a=document.URL.indexOf("&v=")+3,b=document.URL.indexOf("&",a),c=document.URL.substring(a,b>-1?b:document.URL.length-1);return decodeURIComponent(c)}return BrowseAloud.start.settings.chosenVoice?BrowseAloud.start.settings.chosenVoice:""!==BrowseAloudUrl.voice?BrowseAloudUrl.voice:""!==BrowseAloudLocale.voice?BrowseAloudLocale.voice:""!==this.defaultVoice?this.defaultVoice:void 0},isPDFViewer:function(){return $jq("body").hasClass("thpdfviewer")},isBookmarklet:function(){return void 0===_ba_loader},isInteger:function(a){return"number"==typeof a&&isFinite(a)&&Math.floor(a)===a},removeA:function(a){for(var b,c,d=arguments,e=d.length;e>1&&a.length;)for(b=d[--e];-1!==(c=a.indexOf(b));)a.splice(c,1);return a},normaliseLangTag:function(a){if(null!==a&&""!==a){a=a.replace("_","-");for(var b=0;b<BrowseAloud.config.languages.length;b++)if(el=BrowseAloud.config.languages[b],el.bacode===a)return a;switch(a){case"en-us":return"us";case"nb-no":return"no"}if("en-us"===a)return"us";var c=a.indexOf("-");c>=0&&(a=a.substring(0,c))}return a},setPageLangTag:function(a,b){if(null!==a){var c;c="string"==typeof a?a:a.bacode||a.glang,void 0!==c&&("us"===c&&(c="en-us"),$jq("html").attr("lang",c).attr("data-ba-lang",b))}},getPageLangTag:function(a){var b=$jq("html"),c=a?b.attr("lang"):b.data("ba-lang")||b.attr("lang");return void 0!==c?c.toLowerCase():""},endsWith:function(a,b,c){("number"!=typeof c||!isFinite(c)||Math.floor(c)!==c||c>a.length)&&(c=a.length),c-=b.length;var d=a.lastIndexOf(b,c);return-1!==d&&d===c},startsWith:function(a,b,c){return a.substr(c||0,b.length)===b}},BrowseAloud.events=BrowseAloud.events||{timer:null,timerRunning:!1,resizing:!1,windowSize:{},startTimer:function(){BrowseAloud.events.timerRunning=!0,this.timer=setTimeout(function(){BrowseAloud.events.stopTimer()},250)},stopTimer:function(){this.timerRunning=!1,clearTimeout(this.timer)},init:function(){this.windowSize={width:BrowseAloud.window.getWidth(),height:BrowseAloud.window.getHeight()},$jq(window).on("resize",function(){if(this.resizing=!0,!BrowseAloud.events.timerRunning&&(BrowseAloud.events.startTimer(),BrowseAloud.events.resizing=!1,setTimeout(function(){var a={width:BrowseAloud.events.windowSize.width-BrowseAloud.window.getWidth(),height:BrowseAloud.events.windowSize.height-BrowseAloud.window.getHeight()};BrowseAloud.events.windowSize={width:BrowseAloud.window.getWidth(),height:BrowseAloud.window.getHeight()},$panel&&BrowseAloud.panel.setPos(!0,!0,a),BrowseAloud.toolbar&&BrowseAloud.toolbar.settings.isVisible&&(BrowseAloud.toolbar.setPos(!0,!0,a),BrowseAloud.panes.resetPositions()),BrowseAloud.events.resizing=!1},100),!BrowseAloud.util.isMobileDevice()))try{$jq("#_browsealoud_").draggable("option","containment",BrowseAloud.toolbar.getDragContainment())}catch(a){}}),$jq(window).on("scroll",function(){if(!BrowseAloud.events.resizing&&"iPhone"===BrowseAloud.browsers.os&&BrowseAloud.browsers.version<=7&&(BrowseAloud.events.resizing||(BrowseAloud.panel.setPos(),BrowseAloud.toolbar.setPos())),!BrowseAloud.util.isMobileDevice())try{$jq("#_browsealoud_").draggable("option","containment",BrowseAloud.toolbar.getDragContainment())}catch(a){}})},handleArrowKey:function(a){var b=$jq(document.activeElement);switch(a){case 37:b.prev()&&b.prev().focus();break;case 39:b.next()&&b.next().focus()}}},BrowseAloud.panel=BrowseAloud.panel||{prefix:"_ba_",fixedCornerMode:!1,windowInnerHeight:window.innerHeight,pos:{},launchpadPositions:{topRight:0,topLeft:1,bottomLeft:2,bottomRight:3},launchpadThemes:{orange:0,grey:1,white:2},userToolbarInitiated:!1,init:function(){var a=BrowseAloud.util.isMobileDevice();if(!a||a&&BrowseAloud.config.availableMobile){var b,c,d,e,f,g,h,i,j,k=$jq("#__ba_panel"),l="javascript:;",m="BrowseAloud.panel.toggleBar(true,event);return false;",n=this.prefix+"logo",o=this.prefix+"_button",p="orange",q=BrowseAloudUrl.launchpadimage||0;if(b="on"===BrowseAloud.cookies.get(BrowseAloud.cookies.COOKIE_BA),BrowseAloudUrl.panelwizardused){switch(this.fixedCornerMode=BrowseAloudUrl.panelwizardused,BrowseAloudUrl.launchpadtheme){case 1:p="grey";break;case 2:p="white"}c=BrowseAloud.util.getEnumDesc(this.launchpadPositions,BrowseAloudUrl.launchpadposition),d=BrowseAloud.util.getEnumDesc(this.launchpadThemes,BrowseAloudUrl.launchpadtheme),e=$jq("<div />",{id:this.prefix+"corner",class:d}),h=$jq("<a />",{href:"javascript:;",onclick:m,title:BrowseAloudLocale.panel_try_now}),j=$jq("<img />",{src:BrowseAloud.config.resourcesPath+"/modules/"+BrowseAloud.config.version+"/images/launchpads/"+q+"/"+p+"-fg.gif",alt:""}),j.appendTo(h),h.appendTo(e),e.appendTo(k),k.attr({class:c+" _launchpad"}),a&&BrowseAloud.browsers.supportsFixedPos&&k.addClass("ba-fixed"),this.setPos(!0),$panel=k}else""===_baMode?(k.css({width:"120px",height:"52px"}),g=$jq("<a />",{class:n,href:l,onclick:m,title:BrowseAloudLocale.panel_try_now}),f=$jq("<div />",{id:o}),j=$jq("<img />",{src:BrowseAloud.config.resourcesPath+"/modules/"+BrowseAloud.config.version+"/images/launchpads/orange-120x52.png",alt:""}),j.appendTo(f),f.appendTo(g),g.appendTo(k),$logo=g):"logo"===_baMode.toLowerCase()?(g=$jq("<a />",{class:n,href:l,onclick:m,title:BrowseAloudLocale.panel_try_now}),f=$jq("<div />",{id:o,class:"logo"}),j=$jq("<img />",{src:BrowseAloud.config.resourcesPath+"/modules/"+BrowseAloud.config.version+"/images/launchpads/orange-48x48.png",alt:""}),j.appendTo(f),f.appendTo(g),g.appendTo(k),$logo=g):0===_baMode.toLowerCase().indexOf("http")?(g=$jq("<a />",{class:n,href:l,onclick:m,title:BrowseAloudLocale.panel_try_now}),j=$jq("<img />",{src:_baMode,alt:BrowseAloudLocale.panel_try_now}),j.appendTo(g),g.appendTo(k),$logo=g):(h=$jq("<a />",{id:this.prefix+"_link",href:l,onclick:m}),i=$jq("<div />",{id:this.prefix+"_button_link"}),0===_baMode.trim().length&&h.attr("aria-hidden","true"),h.html(_baMode),h.appendTo(i),i.appendTo(k),$buttonlink=i),k.addClass("_ba_manual");a||!BrowseAloudUrl.panelwizardused&&_baHiddenMode&&($panel&&$panel.children(":first").addClass("__ba_hidden"),$logo&&$logo.children(":first").addClass("__ba_hidden"),$buttonlink&&$buttonlink.children(":first").addClass("__ba_hidden")),(b||b&&a&&BrowseAloudUrl.panelwizardused)&&this.toggleBar(!1),_baPanelMode=!1}},setPos:function(a,b,c){var d=$jq("#__ba_panel"),e=BrowseAloud.util.isMobileDevice(),f=e?0:BrowseAloud.config.dragLimit-3,g=BrowseAloudUrl?BrowseAloudUrl.launchpadposition:0,h=BrowseAloud.window.getHeight(),i=(window.pageYOffset,e?3:7),j=7;if(b&&!e){var k=d.position();g===this.launchpadPositions.topRight?f=k.left-c.width:g===this.launchpadPositions.bottomLeft?j=k.top-c.height:g===this.launchpadPositions.bottomRight&&(f=k.left-c.width,j=k.top-c.height)}else g!==this.launchpadPositions.bottomLeft&&g!==this.launchpadPositions.bottomRight||(j=h-(72+i)),e&&(j-=i),"iPhone"===BrowseAloud.browsers.os&&window.innerHeight-this.windowInnerHeight>20&&(j+=60),g===this.launchpadPositions.topRight||g===this.launchpadPositions.bottomRight?(f=BrowseAloud.window.getWidth()-(72+i),e&&(f-=2*i)):f=i;this.pos={top:j,left:f},d.css({top:j,left:f})},toggleBar:function(a,b){BrowseAloud.panel.userToolbarInitiated=a,BrowseAloud.panel.clickedWhenHidden(b)||(0===$jq("#_browsealoud_").length?BrowseAloud.script.injectScript(_baSrcPath+BrowseAloud.config.version+"/"+_baSrcFile):$jq("#_browsealoud_").is(":visible")?BrowseAloud.toolbar.hide():BrowseAloud.toolbar.show())},clickedWhenHidden:function(a){var b=!1;if(a){var c=$jq(a.target);b=c.hasClass("__ba_hidden")||c.parent().hasClass("__ba_hidden")}return b}};var browsealoud=browsealoud||{toggleBar:function(){debug.trace("Legacy browsealoud.toggleBar()"),(!BrowseAloud.config.isMobile||BrowseAloud.config.isMobile&&BrowseAloud.config.availableMobile)&&BrowseAloud.panel.toggleBar(!0)}};BrowseAloud.window=BrowseAloud.window||{getWidth:function(){return Math.min($jq(window).width(),window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)},getHeight:function(){return Math.min($jq(window).height(),window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)},getHeightFull:function(){return Math.max($jq("body").height(),$jq(document).height())},getZoomLevel:function(){var a=document.documentElement.clientWidth/window.innerWidth;return isNaN(a)?1:a},getDevicePixelRatio:function(){if(void 0!==window.devicePixelRatio)return window.devicePixelRatio;if(window.matchMedia){var a=function(a,b){return"(-webkit-min-device-pixel-ratio: "+a+"),(min--moz-device-pixel-ratio: "+a+"),(-o-min-device-pixel-ratio: "+b+"),(min-resolution: "+a+"dppx)"};if(window.matchMedia(a("1.5","3/2")).matches)return 1.5;if(window.matchMedia(a("2","2/1")).matches)return 2;if(window.matchMedia(a("0.75","3/4")).matches)return.7}return 1}};var _baPanelMode=!0,_ba_region="",BrowseAloudUrl={},BrowseAloudLocale={},_ba_loader=function(){return{version:"",applicationPath:_baApplicationServer,assetPath:_baResourceServer,resourcesPath:location.protocol+"//"+_baApplicationServer,isSecure:"https:"===location.protocol,callback:null,settings:{isReady:!1,jsFilesList:[location.hostname],jsFileHit:"",validExpiry:!1,validFolder:!0,pageLanguage:0,chosenVoice:""},init:function(){if(debug.log("_baInitialised",_baInitialised),!_baInitialised){_baInitialised=!0;if(null===document.getElementById("__ba_panel")){var a=document.getElementsByTagName("script");if(a=a[a.length-1],"HEAD"!==a.parentNode.nodeName){var b=document.createElement("div");b.id="__ba_panel",a.parentNode.insertBefore(b,a)}else document.write('<div id="__ba_panel"></div>')}BrowseAloud.browsers.init(),BrowseAloud.jquery.init(function(){_ba_loader.loadUrlInfo()})}},loadUrlInfo:function(){_ba_loader.getVersion(function(a){_ba_loader.version=a;for(var b=document.getElementsByTagName("script"),c=0;c<b.length;c++)null!==b[c].getAttribute("src")&&b[c].getAttribute("src").indexOf("/modules/browsealoud")>-1&&(hasBA=!0);if(!_ba_loader.hasBA){if(""===_ba_loader.version)_ba_loader.version=_ba_cv,debug.info("latest version",_ba_cv);else if(_ba_loader.version!==_ba_cv){debug.info("%cbrowsealoud v"+_ba_loader.version+", latest is v"+_ba_cv,"color:yellow; background:blue;")}BrowseAloud.start.init(_ba_loader.version)}})},load:function(a){var b=document.createElement("script");b.type="text/javascript",b.src=a,b.onerror=function(){debug.error("cannot find",a,"load",_ba_cv),_ba_loader.load(_baSrcPath+_ba_cv+"/"+_baSrcFile+"?v="+_ba_cv)},document.getElementsByTagName("body")[0].appendChild(b)},getVersion:function(a){try{this.getUrlInfo(0,function(b){var c=b.indexOf("{"),d=b.lastIndexOf("}")-c;b=b.substr(c,d+1);var e=JSON.parse(b),f=e.version?e.version:"";BrowseAloudUrl=e,a(f)})}catch(b){debug.error("getVersion",b),a("")}},getUrlInfo:function(a,b){var c,d;if(null===_ba_loader.callback&&(_ba_loader.callback=b),1===this.settings.jsFilesList.length){for(var e=this.isSecure?8:7,f=document.URL.substring(e,document.URL.indexOf("/",e)),g=f.split("."),h=g.length-1,i=document.getElementsByTagName("script");h>1;)d=g.slice(-1*h).join("."),this.settings.jsFilesList.push(d),h--;for(this.settings.jsFilesList.push(0===location.hostname.indexOf("www")?location.hostname.substring(location.hostname.indexOf(".")+1):"www."+location.hostname),c=0;c<i.length;c++){var j=i[c].src;j.indexOf("Bookmarklet")>-1&&j.indexOf("opts=")>-1&&this.settings.jsFilesList.splice(0,0,"www."+j.substring(j.indexOf("opts=")+5))}}this.makeRequests(a)},makeRequests:function(a){if(this.settings.jsFilesList.length>a){var b=window.XDomainRequest?new XDomainRequest:new XMLHttpRequest,c=location.protocol+"//"+this.assetPath+"/js/urlinfo/"+this.settings.jsFilesList[a]+".js";"Safari"===BrowseAloud.browsers.browser&&(c+="?"+Date.now()),b.onprogress=function(){},b.onerror=function(){path=_baSrcPath+_ba_cv+"/"+_baSrcFile+"?v="+_ba_cv,_ba_loader.load(path)},b.onload=function(){b.status?200===b.status?(BrowseAloud.start.settings.jsFileHit=BrowseAloud.start.settings.jsFilesList[0],_ba_loader.callback(b.response)):(404===b.status||403===b.status)&&a<_ba_loader.settings.jsFilesList.length-1&&_ba_loader.getUrlInfo(a+1,_ba_loader.callback):b.responseText.indexOf("BrowseAloudUrl")>-1&&_ba_loader.callback(b.responseText)},b.open("GET",c),b.send()}}}}();_ba_loader.init();