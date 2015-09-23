/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(t){t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in i)if(void 0!==e.style[t])return i[t]}();return t&&{end:t}}()})}(window.jQuery),!function(t){var e=function(e,i){this.options=i,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,i=t.Event("show");this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(t("body").addClass("modal-open"),this.isShown=!0,this.escape(),this.backdrop(function(){var i=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),i&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1).focus(),e.enforceFocus(),i?e.$element.one(t.support.transition.end,function(){e.$element.trigger("shown")}):e.$element.trigger("shown")}))},hide:function(e){e&&e.preventDefault();e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,t("body").removeClass("modal-open"),this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]!==t.target&&!e.$element.has(t.target).length&&e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,i=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(i),e.hideModal()})},hideModal:function(){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&i;this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(document.body),"static"!=this.options.backdrop&&this.$backdrop.click(t.proxy(this.hide,this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),n?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,t.proxy(this.removeBackdrop,this)):this.removeBackdrop()):e&&e()}},t.fn.modal=function(i){return this.each(function(){var n=t(this),o=n.data("modal"),s=t.extend({},t.fn.modal.defaults,n.data(),"object"==typeof i&&i);o||n.data("modal",o=new e(this,s)),"string"==typeof i?o[i]():s.show&&o.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t(function(){t("body").on("click.modal.data-api",'[data-toggle="modal"]',function(e){var i=t(this),n=i.attr("href"),o=t(i.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,"")),s=o.data("modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},o.data(),i.data());e.preventDefault(),o.modal(s).one("hide",function(){i.focus()})})})}(window.jQuery),!function(t){function e(){t(n).each(function(){i(t(this)).removeClass("open")})}function i(e){var i,n=e.attr("data-target");return n||(n=e.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),i=t(n),i.length||(i=e.parent()),i}var n="[data-toggle=dropdown]",o=function(e){var i=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){i.parent().removeClass("open")})};o.prototype={constructor:o,toggle:function(){var n,o,s=t(this);if(!s.is(".disabled, :disabled"))return n=i(s),o=n.hasClass("open"),e(),o||(n.toggleClass("open"),s.focus()),!1},keydown:function(e){var n,o,s,a,r;if(/(38|40|27)/.test(e.keyCode)&&(n=t(this),e.preventDefault(),e.stopPropagation(),!n.is(".disabled, :disabled"))){if(s=i(n),a=s.hasClass("open"),!a||a&&27==e.keyCode)return n.click();o=t("[role=menu] li:not(.divider) a",s),o.length&&(r=o.index(o.filter(":focus")),38==e.keyCode&&r>0&&r--,40==e.keyCode&&r<o.length-1&&r++,~r||(r=0),o.eq(r).focus())}}},t.fn.dropdown=function(e){return this.each(function(){var i=t(this),n=i.data("dropdown");n||i.data("dropdown",n=new o(this)),"string"==typeof e&&n[e].call(i)})},t.fn.dropdown.Constructor=o,t(function(){t("html").on("click.dropdown.data-api touchstart.dropdown.data-api",e),t("body").on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",n,o.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",n+", [role=menu]",o.prototype.keydown)})}(window.jQuery),!function(t){function e(e,i){var n,o=t.proxy(this.process,this),s=t(t(e).is("body")?window:e);this.options=t.extend({},t.fn.scrollspy.defaults,i),this.$scrollElement=s.on("scroll.scroll-spy.data-api",o),this.selector=(this.options.target||(n=t(e).attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()}e.prototype={constructor:e,refresh:function(){var e,i=this;this.offsets=t([]),this.targets=t([]),e=this.$body.find(this.selector).map(function(){var e=t(this),i=e.data("target")||e.attr("href"),n=/^#\w/.test(i)&&t(i);return n&&n.length&&[[n.position().top,i]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=i-this.$scrollElement.height(),o=this.offsets,s=this.targets,a=this.activeTarget;if(e>=n)return a!=(t=s.last()[0])&&this.activate(t);for(t=o.length;t--;)a!=s[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(s[t])},activate:function(e){var i,n;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),n=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(n).parent("li").addClass("active"),i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate")}},t.fn.scrollspy=function(i){return this.each(function(){var n=t(this),o=n.data("scrollspy"),s="object"==typeof i&&i;o||n.data("scrollspy",o=new e(this,s)),"string"==typeof i&&o[i]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),!function(t){var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,i,n,o=this.element,s=o.closest("ul:not(.dropdown-menu)"),a=o.attr("data-target");a||(a=o.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,"")),o.parent("li").hasClass("active")||(e=s.find(".active a").last()[0],n=t.Event("show",{relatedTarget:e}),o.trigger(n),n.isDefaultPrevented()||(i=t(a),this.activate(o.parent("li"),s),this.activate(i,i.parent(),function(){o.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,i,n){function o(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),n&&n()}var s=i.find("> .active"),a=n&&t.support.transition&&s.hasClass("fade");a?s.one(t.support.transition.end,o):o(),s.removeClass("in")}},t.fn.tab=function(i){return this.each(function(){var n=t(this),o=n.data("tab");o||n.data("tab",o=new e(this)),"string"==typeof i&&o[i]()})},t.fn.tab.Constructor=e,t(function(){t("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})})}(window.jQuery),!function(t){var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,i,n){var o,s;this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.enabled=!0,"click"==this.options.trigger?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=this.options.trigger&&(o="hover"==this.options.trigger?"mouseenter":"focus",s="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(o+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.leave,this))),this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,e,this.$element.data()),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);return i.options.delay&&i.options.delay.show?(clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show),void 0):i.show()},leave:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),i.options.delay&&i.options.delay.hide?(i.hoverState="out",void(this.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide))):i.hide()},show:function(){var t,e,i,n,o,s,a;if(this.hasContent()&&this.enabled){switch(t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,e=/in/.test(s),t.remove().css({top:0,left:0,display:"block"}).appendTo(e?this.$element:document.body),i=this.getPosition(e),n=t[0].offsetWidth,o=t[0].offsetHeight,e?s.split(" ")[1]:s){case"bottom":a={top:i.top+i.height,left:i.left+i.width/2-n/2};break;case"top":a={top:i.top-o,left:i.left+i.width/2-n/2};break;case"left":a={top:i.top+i.height/2-o/2,left:i.left-n};break;case"right":a={top:i.top+i.height/2-o/2,left:i.left+i.width}}t.css(a).addClass(s).addClass("in")}},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){i.off(t.support.transition.end).remove()},500);i.one(t.support.transition.end,function(){clearTimeout(e),i.remove()})}var i=this.tip();return i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():i.remove(),this},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(e){return t.extend({},e?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},t.fn.tooltip=function(i){return this.each(function(){var n=t(this),o=n.data("tooltip"),s="object"==typeof i&&i;o||n.data("tooltip",o=new e(this,s)),"string"==typeof i&&o[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!0}}(window.jQuery),!function(t){var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content > *")[this.options.html?"html":"text"](i),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,i=this.options;return t=e.attr("data-content")||("function"==typeof i.content?i.content.call(e[0]):i.content)},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),t.fn.popover=function(i){return this.each(function(){var n=t(this),o=n.data("popover"),s="object"==typeof i&&i;o||n.data("popover",o=new e(this,s)),"string"==typeof i&&o[i]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(t){var e=function(e,i){this.options=t.extend({},t.fn.affix.defaults,i),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,i=t(document).height(),n=this.$window.scrollTop(),o=this.$element.offset(),s=this.options.offset,a=s.bottom,r=s.top,h="affix affix-top affix-bottom";"object"!=typeof s&&(a=r=s),"function"==typeof r&&(r=s.top()),"function"==typeof a&&(a=s.bottom()),e=null!=this.unpin&&n+this.unpin<=o.top?!1:null!=a&&o.top+this.$element.height()>=i-a?"bottom":null!=r&&r>=n?"top":!1,this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?o.top-n:null,this.$element.removeClass(h).addClass("affix"+(e?"-"+e:"")))}},t.fn.affix=function(i){return this.each(function(){var n=t(this),o=n.data("affix"),s="object"==typeof i&&i;o||n.data("affix",o=new e(this,s)),"string"==typeof i&&o[i]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),i=e.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.affix(i)})})}(window.jQuery),!function(t){var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.prototype.close=function(e){function i(){n.trigger("closed").remove()}var n,o=t(this),s=o.attr("data-target");s||(s=o.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,"")),n=t(s),e&&e.preventDefault(),n.length||(n=o.hasClass("alert")?o:o.parent()),n.trigger(e=t.Event("close")),e.isDefaultPrevented()||(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.on(t.support.transition.end,i):i())},t.fn.alert=function(e){return this.each(function(){var n=t(this),o=n.data("alert");o||n.data("alert",o=new i(this)),"string"==typeof e&&o[e].call(n)})},t.fn.alert.Constructor=i,t(function(){t("body").on("click.alert.data-api",e,i.prototype.close)})}(window.jQuery),!function(t){var e=function(e,i){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,i)};e.prototype.setState=function(t){var e="disabled",i=this.$element,n=i.data(),o=i.is("input")?"val":"html";t+="Text",n.resetText||i.data("resetText",i[o]()),i[o](n[t]||this.options[t]),setTimeout(function(){"loadingText"==t?i.addClass(e).attr(e,e):i.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")},t.fn.button=function(i){return this.each(function(){var n=t(this),o=n.data("button"),s="object"==typeof i&&i;o||n.data("button",o=new e(this,s)),"toggle"==i?o.toggle():i&&o.setState(i)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t(function(){t("body").on("click.button.data-api","[data-toggle^=button]",function(e){var i=t(e.target);i.hasClass("btn")||(i=i.closest(".btn")),i.button("toggle")})})}(window.jQuery),!function(t){var e=function(e,i){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,i),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){var e,i,n,o;if(!this.transitioning){if(e=this.dimension(),i=t.camelCase(["scroll",e].join("-")),n=this.$parent&&this.$parent.find("> .accordion-group > .in"),n&&n.length){if(o=n.data("collapse"),o&&o.transitioning)return;n.collapse("hide"),o||n.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][i])}},hide:function(){var e;this.transitioning||(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(e,i,n){var o=this,s=function(){"show"==i.type&&o.reset(),o.transitioning=0,o.$element.trigger(n)};this.$element.trigger(i),i.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,s):s())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},t.fn.collapse=function(i){return this.each(function(){var n=t(this),o=n.data("collapse"),s="object"==typeof i&&i;o||n.data("collapse",o=new e(this,s)),"string"==typeof i&&o[i]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t(function(){t("body").on("click.collapse.data-api","[data-toggle=collapse]",function(e){var i,n=t(this),o=n.attr("data-target")||e.preventDefault()||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),s=t(o).data("collapse")?"toggle":n.data();n[t(o).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(o).collapse(s)})})}(window.jQuery),!function(t){var e=function(e,i){this.$element=t(e),this.options=i,this.options.slide&&this.slide(this.options.slide),"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},to:function(e){var i=this.$element.find(".item.active"),n=i.parent().children(),o=n.index(i),s=this;if(!(e>n.length-1||0>e))return this.sliding?this.$element.one("slid",function(){s.to(e)}):o==e?this.pause().cycle():this.slide(e>o?"next":"prev",t(n[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(e,i){var n=this.$element.find(".item.active"),o=i||n[e](),s=this.interval,a="next"==e?"left":"right",r="next"==e?"first":"last",h=this,l=t.Event("slide",{relatedTarget:o[0]});if(this.sliding=!0,s&&this.pause(),o=o.length?o:this.$element.find(".item")[r](),!o.hasClass("active")){if(t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(l),l.isDefaultPrevented())return;o.addClass(e),o[0].offsetWidth,n.addClass(a),o.addClass(a),this.$element.one(t.support.transition.end,function(){o.removeClass([e,a].join(" ")).addClass("active"),n.removeClass(["active",a].join(" ")),h.sliding=!1,setTimeout(function(){h.$element.trigger("slid")},0)})}else{if(this.$element.trigger(l),l.isDefaultPrevented())return;n.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}}},t.fn.carousel=function(i){return this.each(function(){var n=t(this),o=n.data("carousel"),s=t.extend({},t.fn.carousel.defaults,"object"==typeof i&&i),a="string"==typeof i?i:s.slide;o||n.data("carousel",o=new e(this,s)),"number"==typeof i?o.to(i):a?o[a]():s.interval&&o.cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t(function(){t("body").on("click.carousel.data-api","[data-slide]",function(e){var i,n=t(this),o=t(n.attr("data-target")||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")),s=!o.data("modal")&&t.extend({},o.data(),n.data());o.carousel(s),e.preventDefault()})})}(window.jQuery),!function(t){var e=function(e,i){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,i),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=t(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var e=t.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:e.top+e.height,left:e.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var e;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(e=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source,e?this.process(e):this)},process:function(e){var i=this;return e=t.grep(e,function(t){return i.matcher(t)}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,i=[],n=[],o=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?n.push(e):o.push(e):i.push(e);return i.concat(n,o)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(e){var i=this;return e=t(e).map(function(e,n){return e=t(i.options.item).attr("data-value",n),e.find("a").html(i.highlighter(n)),e[0]}),e.first().addClass("active"),this.$menu.html(e),this},next:function(){var e=this.$menu.find(".active").removeClass("active"),i=e.next();i.length||(i=t(this.$menu.find("li")[0])),i.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active"),e=t.prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),(t.browser.chrome||t.browser.webkit||t.browser.msie)&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this))},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=!~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},blur:function(){var t=this;setTimeout(function(){t.hide()},150)},click:function(t){t.stopPropagation(),t.preventDefault(),this.select()},mouseenter:function(e){this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")}},t.fn.typeahead=function(i){return this.each(function(){var n=t(this),o=n.data("typeahead"),s="object"==typeof i&&i;o||n.data("typeahead",o=new e(this,s)),"string"==typeof i&&o[i]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t(function(){t("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var i=t(this);i.data("typeahead")||(e.preventDefault(),i.typeahead(i.data()))})})}(window.jQuery);