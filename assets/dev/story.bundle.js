! function() {
    "use strict";

    function a(c) {
        return void 0 === this || Object.getPrototypeOf(this) !== a.prototype ? new a(c) : (y = this, y.version = "3.3.2", y.tools = new x, y.isSupported() ? (y.tools.extend(y.defaults, c || {}), y.defaults.container = b(y.defaults), y.store = {
            elements: {},
            containers: []
        }, y.sequences = {}, y.history = [], y.uid = 0, y.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), y)
    }

    function b(a) {
        if (a && a.container) {
            if ("string" == typeof a.container) return window.document.documentElement.querySelector(a.container);
            if (y.tools.isNode(a.container)) return a.container;
            console.log('ScrollReveal: invalid container "' + a.container + '" provided.'), console.log("ScrollReveal: falling back to default container.")
        }
        return y.defaults.container
    }

    function c(a, b) {
        return "string" == typeof a ? Array.prototype.slice.call(b.querySelectorAll(a)) : y.tools.isNode(a) ? [a] : y.tools.isNodeList(a) ? Array.prototype.slice.call(a) : []
    }

    function d() {
        return ++y.uid
    }

    function e(a, b, c) {
        b.container && (b.container = c), a.config ? a.config = y.tools.extendClone(a.config, b) : a.config = y.tools.extendClone(y.defaults, b), "top" === a.config.origin || "bottom" === a.config.origin ? a.config.axis = "Y" : a.config.axis = "X"
    }

    function f(a) {
        var b = window.getComputedStyle(a.domEl);
        a.styles || (a.styles = {
            transition: {},
            transform: {},
            computed: {}
        }, a.styles.inline = a.domEl.getAttribute("style") || "", a.styles.inline += "; visibility: visible; ", a.styles.computed.opacity = b.opacity, b.transition && "all 0s ease 0s" !== b.transition ? a.styles.computed.transition = b.transition + ", " : a.styles.computed.transition = ""), a.styles.transition.instant = g(a, 0), a.styles.transition.delayed = g(a, a.config.delay), a.styles.transform.initial = " -webkit-transform:", a.styles.transform.target = " -webkit-transform:", h(a), a.styles.transform.initial += "transform:", a.styles.transform.target += "transform:", h(a)
    }

    function g(a, b) {
        var c = a.config;
        return "-webkit-transition: " + a.styles.computed.transition + "-webkit-transform " + c.duration / 1e3 + "s " + c.easing + " " + b / 1e3 + "s, opacity " + c.duration / 1e3 + "s " + c.easing + " " + b / 1e3 + "s; transition: " + a.styles.computed.transition + "transform " + c.duration / 1e3 + "s " + c.easing + " " + b / 1e3 + "s, opacity " + c.duration / 1e3 + "s " + c.easing + " " + b / 1e3 + "s; "
    }

    function h(a) {
        var b, c = a.config,
            d = a.styles.transform;
        b = "top" === c.origin || "left" === c.origin ? /^-/.test(c.distance) ? c.distance.substr(1) : "-" + c.distance : c.distance, parseInt(c.distance) && (d.initial += " translate" + c.axis + "(" + b + ")", d.target += " translate" + c.axis + "(0)"), c.scale && (d.initial += " scale(" + c.scale + ")", d.target += " scale(1)"), c.rotate.x && (d.initial += " rotateX(" + c.rotate.x + "deg)", d.target += " rotateX(0)"), c.rotate.y && (d.initial += " rotateY(" + c.rotate.y + "deg)", d.target += " rotateY(0)"), c.rotate.z && (d.initial += " rotateZ(" + c.rotate.z + "deg)", d.target += " rotateZ(0)"), d.initial += "; opacity: " + c.opacity + ";", d.target += "; opacity: " + a.styles.computed.opacity + ";"
    }

    function i(a) {
        var b = a.config.container;
        b && y.store.containers.indexOf(b) === -1 && y.store.containers.push(a.config.container), y.store.elements[a.id] = a
    }

    function j(a, b, c) {
        var d = {
            target: a,
            config: b,
            interval: c
        };
        y.history.push(d)
    }

    function k() {
        if (y.isSupported()) {
            n();
            for (var a = 0; a < y.store.containers.length; a++) y.store.containers[a].addEventListener("scroll", l), y.store.containers[a].addEventListener("resize", l);
            y.initialized || (window.addEventListener("scroll", l), window.addEventListener("resize", l), y.initialized = !0)
        }
        return y
    }

    function l() {
        z(n)
    }

    function m() {
        var a, b, c, d;
        y.tools.forOwn(y.sequences, function(e) {
            d = y.sequences[e], a = !1;
            for (var f = 0; f < d.elemIds.length; f++) c = d.elemIds[f], b = y.store.elements[c], w(b) && !a && (a = !0);
            d.active = a
        })
    }

    function n() {
        var a, b;
        m(), y.tools.forOwn(y.store.elements, function(c) {
            b = y.store.elements[c], a = r(b), q(b) ? (b.config.beforeReveal(b.domEl), a ? b.domEl.setAttribute("style", b.styles.inline + b.styles.transform.target + b.styles.transition.delayed) : b.domEl.setAttribute("style", b.styles.inline + b.styles.transform.target + b.styles.transition.instant), p("reveal", b, a), b.revealing = !0, b.seen = !0, b.sequence && o(b, a)) : s(b) && (b.config.beforeReset(b.domEl), b.domEl.setAttribute("style", b.styles.inline + b.styles.transform.initial + b.styles.transition.instant), p("reset", b), b.revealing = !1)
        })
    }

    function o(a, b) {
        var c = 0,
            d = 0,
            e = y.sequences[a.sequence.id];
        e.blocked = !0, b && "onload" === a.config.useDelay && (d = a.config.delay), a.sequence.timer && (c = Math.abs(a.sequence.timer.started - new Date), window.clearTimeout(a.sequence.timer)), a.sequence.timer = {
            started: new Date
        }, a.sequence.timer.clock = window.setTimeout(function() {
            e.blocked = !1, a.sequence.timer = null, l()
        }, Math.abs(e.interval) + d - c)
    }

    function p(a, b, c) {
        var d = 0,
            e = 0,
            f = "after";
        switch (a) {
            case "reveal":
                e = b.config.duration, c && (e += b.config.delay), f += "Reveal";
                break;
            case "reset":
                e = b.config.duration, f += "Reset"
        }
        b.timer && (d = Math.abs(b.timer.started - new Date), window.clearTimeout(b.timer.clock)), b.timer = {
            started: new Date
        }, b.timer.clock = window.setTimeout(function() {
            b.config[f](b.domEl), b.timer = null
        }, e - d)
    }

    function q(a) {
        if (a.sequence) {
            var b = y.sequences[a.sequence.id];
            return b.active && !b.blocked && !a.revealing && !a.disabled
        }
        return w(a) && !a.revealing && !a.disabled
    }

    function r(a) {
        var b = a.config.useDelay;
        return "always" === b || "onload" === b && !y.initialized || "once" === b && !a.seen
    }

    function s(a) {
        if (a.sequence) {
            return !y.sequences[a.sequence.id].active && a.config.reset && a.revealing && !a.disabled
        }
        return !w(a) && a.config.reset && a.revealing && !a.disabled
    }

    function t(a) {
        return {
            width: a.clientWidth,
            height: a.clientHeight
        }
    }

    function u(a) {
        if (a && a !== window.document.documentElement) {
            var b = v(a);
            return {
                x: a.scrollLeft + b.left,
                y: a.scrollTop + b.top
            }
        }
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }

    function v(a) {
        var b = 0,
            c = 0,
            d = a.offsetHeight,
            e = a.offsetWidth;
        do {
            isNaN(a.offsetTop) || (b += a.offsetTop), isNaN(a.offsetLeft) || (c += a.offsetLeft), a = a.offsetParent
        } while (a);
        return {
            top: b,
            left: c,
            height: d,
            width: e
        }
    }

    function w(a) {
        function b() {
            var b = j + h * g,
                c = k + i * g,
                d = l - h * g,
                n = m - i * g,
                o = f.y + a.config.viewOffset.top,
                p = f.x + a.config.viewOffset.left,
                q = f.y - a.config.viewOffset.bottom + e.height,
                r = f.x - a.config.viewOffset.right + e.width;
            return b < q && d > o && c > p && n < r
        }

        function c() {
            return "fixed" === window.getComputedStyle(a.domEl).position
        }
        var d = v(a.domEl),
            e = t(a.config.container),
            f = u(a.config.container),
            g = a.config.viewFactor,
            h = d.height,
            i = d.width,
            j = d.top,
            k = d.left,
            l = j + h,
            m = k + i;
        return b() || c()
    }

    function x() {}
    var y, z;
    a.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        beforeReveal: function(a) {},
        beforeReset: function(a) {},
        afterReveal: function(a) {},
        afterReset: function(a) {}
    }, a.prototype.isSupported = function() {
        var a = document.documentElement.style;
        return "WebkitTransition" in a && "WebkitTransform" in a || "transition" in a && "transform" in a
    }, a.prototype.reveal = function(a, g, h, l) {
        var m, n, o, p, q, r;
        if (void 0 !== g && "number" == typeof g ? (h = g, g = {}) : void 0 !== g && null !== g || (g = {}), m = b(g), n = c(a, m), !n.length) return console.log('ScrollReveal: reveal on "' + a + '" failed, no elements found.'), y;
        h && "number" == typeof h && (r = d(), q = y.sequences[r] = {
            id: r,
            interval: h,
            elemIds: [],
            active: !1
        });
        for (var s = 0; s < n.length; s++) p = n[s].getAttribute("data-sr-id"), p ? o = y.store.elements[p] : (o = {
            id: d(),
            domEl: n[s],
            seen: !1,
            revealing: !1
        }, o.domEl.setAttribute("data-sr-id", o.id)), q && (o.sequence = {
            id: q.id,
            index: q.elemIds.length
        }, q.elemIds.push(o.id)), e(o, g, m), f(o), i(o), y.tools.isMobile() && !o.config.mobile || !y.isSupported() ? (o.domEl.setAttribute("style", o.styles.inline), o.disabled = !0) : o.revealing || o.domEl.setAttribute("style", o.styles.inline + o.styles.transform.initial);
        return !l && y.isSupported() && (j(a, g, h), y.initTimeout && window.clearTimeout(y.initTimeout), y.initTimeout = window.setTimeout(k, 0)), y
    }, a.prototype.sync = function() {
        if (y.history.length && y.isSupported()) {
            for (var a = 0; a < y.history.length; a++) {
                var b = y.history[a];
                y.reveal(b.target, b.config, b.interval, !0)
            }
            k()
        } else console.log("ScrollReveal: sync failed, no reveals found.");
        return y
    }, x.prototype.isObject = function(a) {
        return null !== a && "object" == typeof a && a.constructor === Object
    }, x.prototype.isNode = function(a) {
        return "object" == typeof window.Node ? a instanceof window.Node : a && "object" == typeof a && "number" == typeof a.nodeType && "string" == typeof a.nodeName
    }, x.prototype.isNodeList = function(a) {
        var b = Object.prototype.toString.call(a),
            c = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == typeof window.NodeList ? a instanceof window.NodeList : a && "object" == typeof a && c.test(b) && "number" == typeof a.length && (0 === a.length || this.isNode(a[0]))
    }, x.prototype.forOwn = function(a, b) {
        if (!this.isObject(a)) throw new TypeError('Expected "object", but received "' + typeof a + '".');
        for (var c in a) a.hasOwnProperty(c) && b(c)
    }, x.prototype.extend = function(a, b) {
        return this.forOwn(b, function(c) {
            this.isObject(b[c]) ? (a[c] && this.isObject(a[c]) || (a[c] = {}), this.extend(a[c], b[c])) : a[c] = b[c]
        }.bind(this)), a
    }, x.prototype.extendClone = function(a, b) {
        return this.extend(this.extend({}, a), b)
    }, x.prototype.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }, z = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1e3 / 60)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return a
    }) : "undefined" != typeof module && module.exports ? module.exports = a : window.ScrollReveal = a
}(),
function(a) {
    "use strict";
    a.fn.fitVids = function(b) {
        var c = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var d = document.head || document.getElementsByTagName("head")[0],
                e = document.createElement("div");
            e.innerHTML = '<p>x</p><style id="fit-vids-style">' + ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}" + "</style>", d.appendChild(e.childNodes[1])
        }
        return b && a.extend(c, b), this.each(function() {
            var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = a(this).find(b.join(","));
            d = d.not("object object"), d.each(function() {
                var b = a(this);
                if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                        d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                        e = c / d;
                    if (.5 == e && (e = 9 / 16), !b.attr("id")) {
                        var f = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", f)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto),
function() {
    var a = [].indexOf || function(a) {
            for (var b = 0, c = this.length; b < c; b++)
                if (b in this && this[b] === a) return b;
            return -1
        },
        b = [].slice;
    ! function(a, b) {
        "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(c) {
            return b(c, a)
        }) : b(a.jQuery, a)
    }(this, function(c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
        return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
            horizontal: {},
            vertical: {}
        }, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function() {
            function a(a) {
                var b = this;
                this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
                    x: a.scrollLeft(),
                    y: a.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, a.data(j, this.id), k[this.id] = this, a.bind(p, function() {
                    var a;
                    if (!b.didScroll && !l) return b.didScroll = !0, a = function() {
                        return b.doScroll(), b.didScroll = !1
                    }, d.setTimeout(a, c[t].settings.scrollThrottle)
                }), a.bind(o, function() {
                    var a;
                    if (!b.didResize) return b.didResize = !0, a = function() {
                        return c[t]("refresh"), b.didResize = !1
                    }, d.setTimeout(a, c[t].settings.resizeThrottle)
                })
            }
            return a.prototype.doScroll = function() {
                var a, b = this;
                return a = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function(a, d) {
                    var e, f, g;
                    return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function(a, b) {
                        var c, e;
                        return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
                    }), g.sort(function(a, b) {
                        return a.offset - b.offset
                    }), f || g.reverse(), c.each(g, function(a, b) {
                        if (b.options.continuous || a === g.length - 1) return b.trigger([e])
                    })
                }), this.oldScroll = {
                    x: a.horizontal.newScroll,
                    y: a.vertical.newScroll
                }
            }, a.prototype.refresh = function() {
                var a, b, d, e = this;
                return d = c.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
                    horizontal: {
                        contextOffset: d ? 0 : b.left,
                        contextScroll: d ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: d ? 0 : b.top,
                        contextScroll: d ? 0 : this.oldScroll.y,
                        contextDimension: d ? c[t]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, c.each(a, function(a, b) {
                    return c.each(e.waypoints[a], function(a, d) {
                        var e, f, g, h, i;
                        if (e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, (!d.options.onlyOnScroll || null == g) && d.enabled) return null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
                    })
                })
            }, a.prototype.checkEmpty = function() {
                if (c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([o, p].join(" ")), delete k[this.id]
            }, a
        }(), g = function() {
            function a(a, b, d) {
                var e, f;
                d = c.extend({}, c.fn[s].defaults, d), "bottom-in-view" === d.offset && (d.offset = function() {
                    var a;
                    return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
                }), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = a.data(r)) ? f : [], e.push(this.id), a.data(r, e)
            }
            return a.prototype.trigger = function(a) {
                if (this.enabled) return null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0
            }, a.prototype.disable = function() {
                return this.enabled = !1
            }, a.prototype.enable = function() {
                return this.context.refresh(), this.enabled = !0
            }, a.prototype.destroy = function() {
                return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, a.getWaypointsByElement = function(a) {
                var b, d;
                return (d = c(a).data(r)) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function(a) {
                    return b[a]
                })) : []
            }, a
        }(), n = {
            init: function(a, b) {
                return null == b && (b = {}), null == b.handler && (b.handler = a), this.each(function() {
                    var a, d, e, h;
                    return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e.data(j)], d || (d = new f(e)), new g(a, d, b)
                }), c[t]("refresh"), this
            },
            disable: function() {
                return n._invoke(this, "disable")
            },
            enable: function() {
                return n._invoke(this, "enable")
            },
            destroy: function() {
                return n._invoke(this, "destroy")
            },
            prev: function(a, b) {
                return n._traverse.call(this, a, b, function(a, b, c) {
                    if (b > 0) return a.push(c[b - 1])
                })
            },
            next: function(a, b) {
                return n._traverse.call(this, a, b, function(a, b, c) {
                    if (b < c.length - 1) return a.push(c[b + 1])
                })
            },
            _traverse: function(a, b, e) {
                var f, g;
                return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function() {
                    var b;
                    return b = c.inArray(this, g[a]), e(f, b, g[a])
                }), this.pushStack(f)
            },
            _invoke: function(a, b) {
                return a.each(function() {
                    var a;
                    return a = g.getWaypointsByElement(this), c.each(a, function(a, c) {
                        return c[b](), !0
                    })
                }), this
            }
        }, c.fn[s] = function() {
            var a, d;
            return d = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [null, d]) : d ? c.error("The " + d + " method does not exist in jQuery Waypoints.") : c.error("jQuery Waypoints needs a callback function or handler option.")
        }, c.fn[s].defaults = {
            context: d,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, m = {
            refresh: function() {
                return c.each(k, function(a, b) {
                    return b.refresh()
                })
            },
            viewportHeight: function() {
                var a;
                return null != (a = d.innerHeight) ? a : e.height()
            },
            aggregate: function(a) {
                var b, d, e;
                return b = h, a && (b = null != (e = k[c(a).data(j)]) ? e.waypoints : void 0), b ? (d = {
                    horizontal: [],
                    vertical: []
                }, c.each(d, function(a, e) {
                    return c.each(b[a], function(a, b) {
                        return e.push(b)
                    }), e.sort(function(a, b) {
                        return a.offset - b.offset
                    }), d[a] = c.map(e, function(a) {
                        return a.element
                    }), d[a] = c.unique(d[a])
                }), d) : []
            },
            above: function(a) {
                return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                    return b.offset <= a.oldScroll.y
                })
            },
            below: function(a) {
                return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
                    return b.offset > a.oldScroll.y
                })
            },
            left: function(a) {
                return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                    return b.offset <= a.oldScroll.x
                })
            },
            right: function(a) {
                return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
                    return b.offset > a.oldScroll.x
                })
            },
            enable: function() {
                return m._invoke("enable")
            },
            disable: function() {
                return m._invoke("disable")
            },
            destroy: function() {
                return m._invoke("destroy")
            },
            extendFn: function(a, b) {
                return n[a] = b
            },
            _invoke: function(a) {
                var b;
                return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function(b, c) {
                    return c[a](), !0
                })
            },
            _filter: function(a, b, d) {
                var e, f;
                return (e = k[c(a).data(j)]) ? (f = [], c.each(e.waypoints[b], function(a, b) {
                    if (d(e, b)) return f.push(b)
                }), f.sort(function(a, b) {
                    return a.offset - b.offset
                }), c.map(f, function(a) {
                    return a.element
                })) : []
            }
        }, c[t] = function() {
            var a, c;
            return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
        }, c[t].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, $(e).on('load', function() {
            return c[t]("refresh");
        });
    })
}.call(this), fotoramaVersion = "4.6.2",
    function(a, b, c, d, e) {
        "use strict";

        function f(a) {
            var b = "bez_" + d.makeArray(arguments).join("_").replace(".", "p");
            if ("function" != typeof d.easing[b]) {
                var c = function(a, b) {
                    var c = [null, null],
                        d = [null, null],
                        e = [null, null],
                        f = function(f, g) {
                            return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g]))
                        },
                        g = function(a) {
                            return e[0] + a * (2 * d[0] + 3 * c[0] * a)
                        },
                        h = function(a) {
                            for (var b, c = a, d = 0; ++d < 14 && (b = f(c, 0) - a, !(Math.abs(b) < .001));) c -= b / g(c);
                            return c
                        };
                    return function(a) {
                        return f(h(a), 1)
                    }
                };
                d.easing[b] = function(b, d, e, f, g) {
                    return f * c([a[0], a[1]], [a[2], a[3]])(d / g) + e
                }
            }
            return b
        }

        function g() {}

        function h(a, b, c) {
            return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a))
        }

        function i(a) {
            return a.match(/ma/) && a.match(/-?\d+(?!d)/g)[a.match(/3d/) ? 12 : 4]
        }

        function j(a) {
            return Ib ? +i(a.css("transform")) : +a.css("left").replace("px", "")
        }

        function k(a) {
            var b = {};
            return Ib ? b.transform = "translate3d(" + a + "px,0,0)" : b.left = a, b
        }

        function l(a) {
            return {
                "transition-duration": a + "ms"
            }
        }

        function m(a, b) {
            return isNaN(a) ? b : a
        }

        function n(a, b) {
            return m(+String(a).replace(b || "px", ""))
        }

        function o(a) {
            return /%$/.test(a) ? n(a, "%") : e
        }

        function p(a, b) {
            return m(o(a) / 100 * b, n(a))
        }

        function q(a) {
            return (!isNaN(n(a)) || !isNaN(n(a, "%"))) && a
        }

        function r(a, b, c, d) {
            return (a - (d || 0)) * (b + (c || 0))
        }

        function s(a, b, c, d) {
            return -Math.round(a / (b + (c || 0)) - (d || 0))
        }

        function t(a) {
            var b = a.data();
            if (!b.tEnd) {
                T(a[0], {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                }[ub.prefixed("transition")], function(a) {
                    b.tProp && a.propertyName.match(b.tProp) && b.onEndFn()
                }), b.tEnd = !0
            }
        }

        function u(a, b, c, d) {
            var e, f = a.data();
            f && (f.onEndFn = function() {
                e || (e = !0, clearTimeout(f.tT), c())
            }, f.tProp = b, clearTimeout(f.tT), f.tT = setTimeout(function() {
                f.onEndFn()
            }, 1.5 * d), t(a))
        }

        function v(a, b) {
            if (a.length) {
                var c = a.data();
                Ib ? (a.css(l(0)), c.onEndFn = g, clearTimeout(c.tT)) : a.stop();
                var d = w(b, function() {
                    return j(a)
                });
                return a.css(k(d)), d
            }
        }

        function w() {
            for (var a, b = 0, c = arguments.length; c > b && "number" != typeof(a = b ? arguments[b]() : arguments[b]); b++);
            return a
        }

        function x(a, b) {
            return Math.round(a + (b - a) / 1.5)
        }

        function y() {
            return y.p = y.p || ("https:" === c.protocol ? "https://" : "http://"), y.p
        }

        function z(a) {
            var c = b.createElement("a");
            return c.href = a, c
        }

        function A(a, b) {
            if ("string" != typeof a) return a;
            a = z(a);
            var c, d;
            if (a.host.match(/youtube\.com/) && a.search) {
                if (c = a.search.split("v=")[1]) {
                    var e = c.indexOf("&"); - 1 !== e && (c = c.substring(0, e)), d = "youtube"
                }
            } else a.host.match(/youtube\.com|youtu\.be/) ? (c = a.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), d = "youtube") : a.host.match(/vimeo\.com/) && (d = "vimeo", c = a.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
            return c && d || !b || (c = a.href, d = "custom"), !!c && {
                id: c,
                type: d,
                s: a.search.replace(/^\?/, ""),
                p: y()
            }
        }

        function B(a, b, c) {
            var e, f, g = a.video;
            return "youtube" === g.type ? (f = y() + "img.youtube.com/vi/" + g.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), a.thumbsReady = !0) : "vimeo" === g.type ? d.ajax({
                url: y() + "vimeo.com/api/v2/video/" + g.id + ".json",
                dataType: "jsonp",
                success: function(d) {
                    a.thumbsReady = !0, C(b, {
                        img: d[0].thumbnail_large,
                        thumb: d[0].thumbnail_small
                    }, a.i, c)
                }
            }) : a.thumbsReady = !0, {
                img: e,
                thumb: f
            }
        }

        function C(a, b, c, e) {
            for (var f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (h.i === c && h.thumbsReady) {
                    var i = {
                        videoReady: !0
                    };
                    i[Xb] = i[Zb] = i[Yb] = !1, e.splice(f, 1, d.extend({}, h, i, b));
                    break
                }
            }
        }

        function D(a) {
            function b(a, b, e) {
                var f = a.children("img").eq(0),
                    g = a.attr("href"),
                    h = a.attr("src"),
                    i = f.attr("src"),
                    j = b.video,
                    k = !!e && A(g, j === !0);
                k ? g = !1 : k = j, c(a, f, d.extend(b, {
                    video: k,
                    img: b.img || g || h || i,
                    thumb: b.thumb || i || h || g
                }))
            }

            function c(a, b, c) {
                var e = c.thumb && c.img !== c.thumb,
                    f = n(c.width || a.attr("width")),
                    g = n(c.height || a.attr("height"));
                d.extend(c, {
                    width: f,
                    height: g,
                    thumbratio: S(c.thumbratio || n(c.thumbwidth || b && b.attr("width") || e || f) / n(c.thumbheight || b && b.attr("height") || e || g))
                })
            }
            var e = [];
            return a.children().each(function() {
                var a = d(this),
                    f = R(d.extend(a.data(), {
                        id: a.attr("id")
                    }));
                if (a.is("a, img")) b(a, f, !0);
                else {
                    if (a.is(":empty")) return;
                    c(a, null, d.extend(f, {
                        html: this,
                        _html: a.html()
                    }))
                }
                e.push(f)
            }), e
        }

        function E(a) {
            return 0 === a.offsetWidth && 0 === a.offsetHeight
        }

        function F(a) {
            return !d.contains(b.documentElement, a)
        }

        function G(a, b, c, d) {
            return G.i || (G.i = 1, G.ii = [!0]), d = d || G.i, void 0 === G.ii[d] && (G.ii[d] = !0), a() ? b() : G.ii[d] && setTimeout(function() {
                G.ii[d] && G(a, b, c, d)
            }, c || 100), G.i++
        }

        function H(a) {
            c.replace(c.protocol + "//" + c.host + c.pathname.replace(/^\/?/, "/") + c.search + "#" + a)
        }

        function I(a, b, c, d) {
            var e = a.data(),
                f = e.measures;
            if (f && (!e.l || e.l.W !== f.width || e.l.H !== f.height || e.l.r !== f.ratio || e.l.w !== b.w || e.l.h !== b.h || e.l.m !== c || e.l.p !== d)) {
                var g = f.width,
                    i = f.height,
                    j = b.w / b.h,
                    k = f.ratio >= j,
                    l = "scaledown" === c,
                    m = "contain" === c,
                    n = "cover" === c,
                    o = $(d);
                k && (l || m) || !k && n ? (g = h(b.w, 0, l ? g : 1 / 0), i = g / f.ratio) : (k && n || !k && (l || m)) && (i = h(b.h, 0, l ? i : 1 / 0), g = i * f.ratio), a.css({
                    width: Math.ceil(g),
                    height: Math.ceil(i),
                    left: Math.floor(p(o.x, b.w - g)),
                    top: Math.floor(p(o.y, b.h - i))
                }), e.l = {
                    W: f.width,
                    H: f.height,
                    r: f.ratio,
                    w: b.w,
                    h: b.h,
                    m: c,
                    p: d
                }
            }
            return !0
        }

        function J(a, b) {
            var c = a[0];
            c.styleSheet ? c.styleSheet.cssText = b : a.html(b)
        }

        function K(a, b, c) {
            return b !== c && (b >= a ? "left" : a >= c ? "right" : "left right")
        }

        function L(a, b, c, d) {
            if (!c) return !1;
            if (!isNaN(a)) return a - (d ? 0 : 1);
            for (var e, f = 0, g = b.length; g > f; f++) {
                if (b[f].id === a) {
                    e = f;
                    break
                }
            }
            return e
        }

        function M(a, b, c) {
            c = c || {}, a.each(function() {
                var a, e = d(this),
                    f = e.data();
                f.clickOn || (f.clickOn = !0, d.extend(ca(e, {
                    onStart: function(b) {
                        a = b, (c.onStart || g).call(this, b)
                    },
                    onMove: c.onMove || g,
                    onTouchEnd: c.onTouchEnd || g,
                    onEnd: function(c) {
                        c.moved || b.call(this, a)
                    }
                }), {
                    noMove: !0
                }))
            })
        }

        function N(a, b) {
            return '<div class="' + a + '">' + (b || "") + "</div>"
        }

        function O(a) {
            for (var b = a.length; b;) {
                var c = Math.floor(Math.random() * b--),
                    d = a[b];
                a[b] = a[c], a[c] = d
            }
            return a
        }

        function P(a) {
            return "[object Array]" == Object.prototype.toString.call(a) && d.map(a, function(a) {
                return d.extend({}, a)
            })
        }

        function Q(a, b, c) {
            a.scrollLeft(b || 0).scrollTop(c || 0)
        }

        function R(a) {
            if (a) {
                var b = {};
                return d.each(a, function(a, c) {
                    b[a.toLowerCase()] = c
                }), b
            }
        }

        function S(a) {
            if (a) {
                var b = +a;
                return isNaN(b) ? (b = a.split("/"), +b[0] / +b[1] || e) : b
            }
        }

        function T(a, b, c, d) {
            b && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent("on" + b, c))
        }

        function U(a) {
            return !!a.getAttribute("disabled")
        }

        function V(a) {
            return {
                tabindex: -1 * a + "",
                disabled: a
            }
        }

        function W(a, b) {
            T(a, "keyup", function(c) {
                U(a) || 13 == c.keyCode && b.call(a, c)
            })
        }

        function X(a, b) {
            T(a, "focus", a.onfocusin = function(c) {
                b.call(a, c)
            }, !0)
        }

        function Y(a, b) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1, b && a.stopPropagation && a.stopPropagation()
        }

        function Z(a) {
            return a ? ">" : "<"
        }

        function $(a) {
            return a = (a + "").split(/\s+/), {
                x: q(a[0]) || bc,
                y: q(a[1]) || bc
            }
        }

        function _(a, b) {
            var c = a.data(),
                e = Math.round(b.pos),
                f = function() {
                    c.sliding = !1, (b.onEnd || g)()
                };
            void 0 !== b.overPos && b.overPos !== b.pos && (e = b.overPos, f = function() {
                _(a, d.extend({}, b, {
                    overPos: b.pos,
                    time: Math.max(Qb, b.time / 2)
                }))
            });
            var h = d.extend(k(e), b.width && {
                width: b.width
            });
            c.sliding = !0, Ib ? (a.css(d.extend(l(b.time), h)), b.time > 10 ? u(a, "transform", f, b.time) : f()) : a.stop().animate(h, b.time, _b, f)
        }

        function aa(a, b, c, e, f, h) {
            var i = void 0 !== h;
            if (i || (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))) {
                a = a || d(a), b = b || d(b);
                var j = a[0],
                    k = b[0],
                    l = "crossfade" === e.method,
                    m = function() {
                        if (!m.done) {
                            m.done = !0;
                            var a = (i || f.shift()) && f.shift();
                            a && aa.apply(this, a), (e.onEnd || g)(!!a)
                        }
                    },
                    n = e.time / (h || 1);
                c.removeClass(Ra + " " + Qa), a.stop().addClass(Ra), b.stop().addClass(Qa), l && k && a.fadeTo(0, 0), a.fadeTo(l ? n : 0, 1, l && m), b.fadeTo(n, 0, m), j && l || k || m()
            }
        }

        function ba(a) {
            var b = (a.touches || [])[0] || a;
            a._x = b.pageX, a._y = b.clientY, a._now = d.now()
        }

        function ca(a, c) {
            function e(a) {
                return m = d(a.target), u.checked = p = q = s = !1, k || u.flow || a.touches && a.touches.length > 1 || a.which > 1 || ec && ec.type !== a.type && gc || (p = c.select && m.is(c.select, t)) ? p : (o = "touchstart" === a.type, q = m.is("a, a *", t), n = u.control, r = u.noMove || u.noSwipe || n ? 16 : u.snap ? 0 : 4, ba(a), l = ec = a, fc = a.type.replace(/down|start/, "move").replace(/Down/, "Move"), (c.onStart || g).call(t, a, {
                    control: n,
                    $target: m
                }), k = u.flow = !0, void((!o || u.go) && Y(a)))
            }

            function f(a) {
                if (a.touches && a.touches.length > 1 || Nb && !a.isPrimary || fc !== a.type || !k) return k && h(), void(c.onTouchEnd || g)();
                ba(a);
                var b = Math.abs(a._x - l._x),
                    d = Math.abs(a._y - l._y),
                    e = b - d,
                    f = (u.go || u.x || e >= 0) && !u.noSwipe,
                    i = 0 > e;
                o && !u.checked ? (k = f) && Y(a) : (Y(a), (c.onMove || g).call(t, a, {
                    touch: o
                })), !s && Math.sqrt(Math.pow(b, 2) + Math.pow(d, 2)) > r && (s = !0), u.checked = u.checked || f || i
            }

            function h(a) {
                (c.onTouchEnd || g)();
                var b = k;
                u.control = k = !1, b && (u.flow = !1), !b || q && !u.checked || (a && Y(a), gc = !0, clearTimeout(hc), hc = setTimeout(function() {
                    gc = !1
                }, 1e3), (c.onEnd || g).call(t, {
                    moved: s,
                    $target: m,
                    control: n,
                    touch: o,
                    startEvent: l,
                    aborted: !a || "MSPointerCancel" === a.type
                }))
            }

            function i() {
                u.flow || setTimeout(function() {
                    u.flow = !0
                }, 10)
            }

            function j() {
                u.flow && setTimeout(function() {
                    u.flow = !1
                }, Pb)
            }
            var k, l, m, n, o, p, q, r, s, t = a[0],
                u = {};
            return Nb ? (T(t, "MSPointerDown", e), T(b, "MSPointerMove", f), T(b, "MSPointerCancel", h), T(b, "MSPointerUp", h)) : (T(t, "touchstart", e), T(t, "touchmove", f), T(t, "touchend", h), T(b, "touchstart", i), T(b, "touchend", j), T(b, "touchcancel", j), Eb.on("scroll", j), a.on("mousedown", e), Fb.on("mousemove", f).on("mouseup", h)), a.on("click", "a", function(a) {
                u.checked && Y(a)
            }), u
        }

        function da(a, b) {
            function c(c, d) {
                A = !0, j = l = c._x, q = c._now, p = [
                    [q, j]
                ], m = n = D.noMove || d ? 0 : v(a, (b.getPos || g)()), (b.onStart || g).call(B, c)
            }

            function e(a, b) {
                s = D.min, t = D.max, u = D.snap, w = a.altKey, A = z = !1, (y = b.control) || C.sliding || c(a)
            }

            function f(d, e) {
                D.noSwipe || (A || c(d), l = d._x, p.push([d._now, l]), n = m - (j - l), o = K(n, s, t), s >= n ? n = x(n, s) : n >= t && (n = x(n, t)), D.noMove || (a.css(k(n)), z || (z = !0, e.touch || Nb || a.addClass(eb)), (b.onMove || g).call(B, d, {
                    pos: n,
                    edge: o
                })))
            }

            function i(e) {
                if (!D.noSwipe || !e.moved) {
                    A || c(e.startEvent, !0), e.touch || Nb || a.removeClass(eb), r = d.now();
                    for (var f, i, j, k, o, q, v, x, y, z = r - Pb, C = null, E = Qb, F = b.friction, G = p.length - 1; G >= 0; G--) {
                        if (f = p[G][0], i = Math.abs(f - z), null === C || j > i) C = f, k = p[G][1];
                        else if (C === z || i > j) break;
                        j = i
                    }
                    v = h(n, s, t);
                    var H = k - l,
                        I = H >= 0,
                        J = r - C,
                        K = J > Pb,
                        L = !K && n !== m && v === n;
                    u && (v = h(Math[L ? I ? "floor" : "ceil" : "round"](n / u) * u, s, t), s = t = v), L && (u || v === n) && (y = -(H / J), E *= h(Math.abs(y), b.timeLow, b.timeHigh), o = Math.round(n + y * E / F), u || (v = o), (!I && o > t || I && s > o) && (q = I ? s : t, x = o - q, u || (v = q), x = h(v + .03 * x, q - 50, q + 50), E = Math.abs((n - x) / (y / F)))), E *= w ? 10 : 1, (b.onEnd || g).call(B, d.extend(e, {
                        moved: e.moved || K && u,
                        pos: n,
                        newPos: v,
                        overPos: x,
                        time: E
                    }))
                }
            }
            var j, l, m, n, o, p, q, r, s, t, u, w, y, z, A, B = a[0],
                C = a.data(),
                D = {};
            return D = d.extend(ca(b.$wrap, d.extend({}, b, {
                onStart: e,
                onMove: f,
                onEnd: i
            })), D)
        }

        function ea(a, b) {
            var c, e, f, h = a[0],
                i = {
                    prevent: {}
                };
            return T(h, Ob, function(a) {
                var h = a.wheelDeltaY || -1 * a.deltaY || 0,
                    j = a.wheelDeltaX || -1 * a.deltaX || 0,
                    k = Math.abs(j) && !Math.abs(h),
                    l = Z(0 > j),
                    m = e === l,
                    n = d.now(),
                    o = Pb > n - f;
                e = l, f = n, k && i.ok && (!i.prevent[l] || c) && (Y(a, !0), c && m && o || (b.shift && (c = !0, clearTimeout(i.t), i.t = setTimeout(function() {
                    c = !1
                }, Rb)), (b.onEnd || g)(a, b.shift ? l : j)))
            }), i
        }

        function fa() {
            d.each(d.Fotorama.instances, function(a, b) {
                b.index = a
            })
        }

        function ga(a) {
            d.Fotorama.instances.push(a), fa()
        }

        function ha(a) {
            d.Fotorama.instances.splice(a.index, 1), fa()
        }
        var ia = "fotorama",
            ja = "fullscreen",
            ka = ia + "__wrap",
            la = ka + "--css2",
            ma = ka + "--css3",
            na = ka + "--video",
            oa = ka + "--fade",
            pa = ka + "--slide",
            qa = ka + "--no-controls",
            ra = ka + "--no-shadows",
            sa = ka + "--pan-y",
            ta = ka + "--rtl",
            ua = ka + "--only-active",
            va = ka + "--no-captions",
            wa = ka + "--toggle-arrows",
            xa = ia + "__stage",
            ya = xa + "__frame",
            za = ya + "--video",
            Aa = xa + "__shaft",
            Ba = ia + "__grab",
            Ca = ia + "__pointer",
            Da = ia + "__arr",
            Ea = Da + "--disabled",
            Fa = Da + "--prev",
            Ga = Da + "--next",
            Ha = ia + "__nav",
            Ia = Ha + "-wrap",
            Ja = Ha + "__shaft",
            Ka = Ha + "--dots",
            La = Ha + "--thumbs",
            Ma = Ha + "__frame",
            Na = Ma + "--dot",
            Oa = Ma + "--thumb",
            Pa = ia + "__fade",
            Qa = Pa + "-front",
            Ra = Pa + "-rear",
            Sa = ia + "__shadow",
            Ta = Sa + "s",
            Ua = Ta + "--left",
            Va = Ta + "--right",
            Wa = ia + "__active",
            Xa = ia + "__select",
            Ya = ia + "--hidden",
            Za = ia + "--fullscreen",
            $a = ia + "__fullscreen-icon",
            _a = ia + "__error",
            ab = ia + "__loading",
            bb = ia + "__loaded",
            cb = bb + "--full",
            db = bb + "--img",
            eb = ia + "__grabbing",
            fb = ia + "__img",
            gb = fb + "--full",
            hb = ia + "__dot",
            ib = ia + "__thumb",
            jb = ib + "-border",
            kb = ia + "__html",
            lb = ia + "__video",
            mb = lb + "-play",
            nb = lb + "-close",
            ob = ia + "__caption",
            pb = ia + "__caption__wrap",
            qb = ia + "__spinner",
            rb = '" tabindex="0" role="button',
            sb = d && d.fn.jquery.split(".");
        if (!sb || sb[0] < 1 || 1 == sb[0] && sb[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
        var tb = {},
            ub = function(a, b, c) {
                function d(a) {
                    q.cssText = a
                }

                function e(a, b) {
                    return typeof a === b
                }

                function f(a, b) {
                    return !!~("" + a).indexOf(b)
                }

                function g(a, b) {
                    for (var d in a) {
                        var e = a[d];
                        if (!f(e, "-") && q[e] !== c) return "pfx" != b || e
                    }
                    return !1
                }

                function h(a, b, d) {
                    for (var f in a) {
                        var g = b[a[f]];
                        if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
                    }
                    return !1
                }

                function i(a, b, c) {
                    var d = a.charAt(0).toUpperCase() + a.slice(1),
                        f = (a + " " + t.join(d + " ") + d).split(" ");
                    return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + u.join(d + " ") + d).split(" "), h(f, b, c))
                }
                var j, k, l = "2.6.2",
                    m = {},
                    n = b.documentElement,
                    o = "modernizr",
                    p = b.createElement(o),
                    q = p.style,
                    r = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
                    s = "Webkit Moz O ms",
                    t = s.split(" "),
                    u = s.toLowerCase().split(" "),
                    v = {},
                    w = [],
                    x = w.slice,
                    y = function(a, c, d, e) {
                        var f, g, h, i, j = b.createElement("div"),
                            k = b.body,
                            l = k || b.createElement("body");
                        if (parseInt(d, 10))
                            for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : o + (d + 1), j.appendChild(h);
                        return f = ["&#173;", '<style id="s', o, '">', a, "</style>"].join(""), j.id = o, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = n.style.overflow, n.style.overflow = "hidden", n.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), n.style.overflow = i), !!g
                    },
                    z = {}.hasOwnProperty;
                k = e(z, "undefined") || e(z.call, "undefined") ? function(a, b) {
                    return b in a && e(a.constructor.prototype[b], "undefined")
                } : function(a, b) {
                    return z.call(a, b)
                }, Function.prototype.bind || (Function.prototype.bind = function(a) {
                    var b = this;
                    if ("function" != typeof b) throw new TypeError;
                    var c = x.call(arguments, 1),
                        d = function() {
                            if (this instanceof d) {
                                var e = function() {};
                                e.prototype = b.prototype;
                                var f = new e,
                                    g = b.apply(f, c.concat(x.call(arguments)));
                                return Object(g) === g ? g : f
                            }
                            return b.apply(a, c.concat(x.call(arguments)))
                        };
                    return d
                }), v.csstransforms3d = function() {
                    return !!i("perspective")
                };
                for (var A in v) k(v, A) && (j = A.toLowerCase(), m[j] = v[A](), w.push((m[j] ? "" : "no-") + j));
                return m.addTest = function(a, b) {
                    if ("object" == typeof a)
                        for (var d in a) k(a, d) && m.addTest(d, a[d]);
                    else {
                        if (a = a.toLowerCase(), m[a] !== c) return m;
                        b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (n.className += " " + (b ? "" : "no-") + a), m[a] = b
                    }
                    return m
                }, d(""), p = null, m._version = l, m._prefixes = r, m._domPrefixes = u, m._cssomPrefixes = t, m.testProp = function(a) {
                    return g([a])
                }, m.testAllProps = i, m.testStyles = y, m.prefixed = function(a, b, c) {
                    return b ? i(a, b, c) : i(a, "pfx")
                }, m
            }(0, b),
            vb = {
                ok: !1,
                is: function() {
                    return !1
                },
                request: function() {},
                cancel: function() {},
                event: "",
                prefix: ""
            },
            wb = "webkit moz o ms khtml".split(" ");
        if (void 0 !== b.cancelFullScreen) vb.ok = !0;
        else
            for (var xb = 0, yb = wb.length; yb > xb; xb++)
                if (vb.prefix = wb[xb], void 0 !== b[vb.prefix + "CancelFullScreen"]) {
                    vb.ok = !0;
                    break
                }
        vb.ok && (vb.event = vb.prefix + "fullscreenchange", vb.is = function() {
            switch (this.prefix) {
                case "":
                    return b.fullScreen;
                case "webkit":
                    return b.webkitIsFullScreen;
                default:
                    return b[this.prefix + "FullScreen"]
            }
        }, vb.request = function(a) {
            return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
        }, vb.cancel = function() {
            return "" === this.prefix ? b.cancelFullScreen() : b[this.prefix + "CancelFullScreen"]()
        });
        var zb, Ab = {
                lines: 12,
                length: 5,
                width: 2,
                radius: 7,
                corners: 1,
                rotate: 15,
                color: "rgba(128, 128, 128, .75)",
                hwaccel: !0
            },
            Bb = {
                top: "auto",
                left: "auto",
                className: ""
            };
        ! function(a, b) {
            zb = b()
        }(0, function() {
            function a(a, c) {
                var d, e = b.createElement(a || "div");
                for (d in c) e[d] = c[d];
                return e
            }

            function c(a) {
                for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
                return a
            }

            function d(a, b, c, d) {
                var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
                    f = .01 + c / d * 100,
                    g = Math.max(1 - (1 - a) / b * (100 - f), a),
                    h = m.substring(0, m.indexOf("Animation")).toLowerCase(),
                    i = h && "-" + h + "-" || "";
                return o[e] || (p.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", p.cssRules.length), o[e] = 1), e
            }

            function f(a, b) {
                var c, d, f = a.style;
                for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < n.length; d++)
                    if (c = n[d] + b, f[c] !== e) return c;
                return f[b] !== e ? b : void 0
            }

            function g(a, b) {
                for (var c in b) a.style[f(a, c) || c] = b[c];
                return a
            }

            function h(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b];
                    for (var d in c) a[d] === e && (a[d] = c[d])
                }
                return a
            }

            function i(a) {
                for (var b = {
                        x: a.offsetLeft,
                        y: a.offsetTop
                    }; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
                return b
            }

            function j(a, b) {
                return "string" == typeof a ? a : a[b % a.length]
            }

            function k(a) {
                return void 0 === this ? new k(a) : void(this.opts = h(a || {}, k.defaults, q))
            }

            function l() {
                function b(b, c) {
                    return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
                }
                p.addRule(".spin-vml", "behavior:url(#default#VML)"), k.prototype.lines = function(a, d) {
                    function e() {
                        return g(b("group", {
                            coordsize: k + " " + k,
                            coordorigin: -i + " " + -i
                        }), {
                            width: k,
                            height: k
                        })
                    }

                    function f(a, f, h) {
                        c(m, c(g(e(), {
                            rotation: 360 / d.lines * a + "deg",
                            left: ~~f
                        }), c(g(b("roundrect", {
                            arcsize: d.corners
                        }), {
                            width: i,
                            height: d.width,
                            left: d.radius,
                            top: -d.width >> 1,
                            filter: h
                        }), b("fill", {
                            color: j(d.color, a),
                            opacity: d.opacity
                        }), b("stroke", {
                            opacity: 0
                        }))))
                    }
                    var h, i = d.length + d.width,
                        k = 2 * i,
                        l = 2 * -(d.width + d.length) + "px",
                        m = g(e(), {
                            position: "absolute",
                            top: l,
                            left: l
                        });
                    if (d.shadow)
                        for (h = 1; h <= d.lines; h++) f(h, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                    for (h = 1; h <= d.lines; h++) f(h);
                    return c(a, m)
                }, k.prototype.opacity = function(a, b, c, d) {
                    var e = a.firstChild;
                    d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, (e = e && e.firstChild) && (e.opacity = c))
                }
            }
            var m, n = ["webkit", "Moz", "ms", "O"],
                o = {},
                p = function() {
                    var d = a("style", {
                        type: "text/css"
                    });
                    return c(b.getElementsByTagName("head")[0], d), d.sheet || d.styleSheet
                }(),
                q = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    rotate: 0,
                    corners: 1,
                    color: "#000",
                    direction: 1,
                    speed: 1,
                    trail: 100,
                    opacity: .25,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "auto",
                    left: "auto",
                    position: "relative"
                };
            k.defaults = {}, h(k.prototype, {
                spin: function(b) {
                    this.stop();
                    var c, d, e = this,
                        f = e.opts,
                        h = e.el = g(a(0, {
                            className: f.className
                        }), {
                            position: f.position,
                            width: 0,
                            zIndex: f.zIndex
                        }),
                        j = f.radius + f.length + f.width;
                    if (b && (b.insertBefore(h, b.firstChild || null), d = i(b), c = i(h), g(h, {
                            left: ("auto" == f.left ? d.x - c.x + (b.offsetWidth >> 1) : parseInt(f.left, 10) + j) + "px",
                            top: ("auto" == f.top ? d.y - c.y + (b.offsetHeight >> 1) : parseInt(f.top, 10) + j) + "px"
                        })), h.setAttribute("role", "progressbar"), e.lines(h, e.opts), !m) {
                        var k, l = 0,
                            n = (f.lines - 1) * (1 - f.direction) / 2,
                            o = f.fps,
                            p = o / f.speed,
                            q = (1 - f.opacity) / (p * f.trail / 100),
                            r = p / f.lines;
                        ! function a() {
                            l++;
                            for (var b = 0; b < f.lines; b++) k = Math.max(1 - (l + (f.lines - b) * r) % p * q, f.opacity), e.opacity(h, b * f.direction + n, k, f);
                            e.timeout = e.el && setTimeout(a, ~~(1e3 / o))
                        }()
                    }
                    return e
                },
                stop: function() {
                    var a = this.el;
                    return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = e), this
                },
                lines: function(b, e) {
                    function f(b, c) {
                        return g(a(), {
                            position: "absolute",
                            width: e.length + e.width + "px",
                            height: e.width + "px",
                            background: b,
                            boxShadow: c,
                            transformOrigin: "left",
                            transform: "rotate(" + ~~(360 / e.lines * i + e.rotate) + "deg) translate(" + e.radius + "px,0)",
                            borderRadius: (e.corners * e.width >> 1) + "px"
                        })
                    }
                    for (var h, i = 0, k = (e.lines - 1) * (1 - e.direction) / 2; i < e.lines; i++) h = g(a(), {
                        position: "absolute",
                        top: 1 + ~(e.width / 2) + "px",
                        transform: e.hwaccel ? "translate3d(0,0,0)" : "",
                        opacity: e.opacity,
                        animation: m && d(e.opacity, e.trail, k + i * e.direction, e.lines) + " " + 1 / e.speed + "s linear infinite"
                    }), e.shadow && c(h, g(f("#000", "0 0 4px #000"), {
                        top: "2px"
                    })), c(b, c(h, f(j(e.color, i), "0 0 1px rgba(0,0,0,.1)")));
                    return b
                },
                opacity: function(a, b, c) {
                    b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
                }
            });
            var r = g(a("group"), {
                behavior: "url(#default#VML)"
            });
            return !f(r, "transform") && r.adj ? l() : m = f(r, "animation"), k
        });
        var Cb, Db, Eb = d(a),
            Fb = d(b),
            Gb = "quirks" === c.hash.replace("#", ""),
            Hb = ub.csstransforms3d,
            Ib = Hb && !Gb,
            Jb = Hb || "CSS1Compat" === b.compatMode,
            Kb = vb.ok,
            Lb = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
            Mb = !Ib || Lb,
            Nb = navigator.msPointerEnabled,
            Ob = "onwheel" in b.createElement("div") ? "wheel" : b.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll",
            Pb = 250,
            Qb = 300,
            Rb = 1400,
            Sb = 5e3,
            Tb = 2,
            Ub = 64,
            Vb = 500,
            Wb = 333,
            Xb = "$stageFrame",
            Yb = "$navDotFrame",
            Zb = "$navThumbFrame",
            $b = "auto",
            _b = f([.1, 0, .25, 1]),
            ac = 99999,
            bc = "50%",
            cc = {
                width: null,
                minwidth: null,
                maxwidth: "100%",
                height: null,
                minheight: null,
                maxheight: null,
                ratio: null,
                margin: Tb,
                glimpse: 0,
                fit: "contain",
                position: bc,
                thumbposition: bc,
                nav: "dots",
                navposition: "bottom",
                navwidth: null,
                thumbwidth: Ub,
                thumbheight: Ub,
                thumbmargin: Tb,
                thumbborderwidth: Tb,
                thumbfit: "cover",
                allowfullscreen: !1,
                transition: "slide",
                clicktransition: null,
                transitionduration: Qb,
                captions: !0,
                hash: !1,
                startindex: 0,
                loop: !1,
                autoplay: !1,
                stopautoplayontouch: !0,
                keyboard: !1,
                arrows: !0,
                click: !0,
                swipe: !0,
                trackpad: !1,
                enableifsingleframe: !1,
                controlsonstart: !0,
                shuffle: !1,
                direction: "ltr",
                shadows: !0,
                spinner: null
            },
            dc = {
                left: !0,
                right: !0,
                down: !1,
                up: !1,
                space: !1,
                home: !1,
                end: !1
            };
        G.stop = function(a) {
            G.ii[a] = !1
        };
        var ec, fc, gc, hc;
        jQuery.Fotorama = function(a, e) {
            function f() {
                d.each(yc, function(a, b) {
                    if (!b.i) {
                        b.i = md++;
                        var c = A(b.video, !0);
                        if (c) {
                            var d = {};
                            b.video = c, b.img || b.thumb ? b.thumbsReady = !0 : d = B(b, yc, id), C(yc, {
                                img: d.img,
                                thumb: d.thumb
                            }, b.i, id)
                        }
                    }
                })
            }

            function g(a) {
                return Zc[a] || id.fullScreen
            }

            function i(a) {
                var b = "keydown." + ia,
                    c = ia + jd,
                    d = "keydown." + c,
                    f = "resize." + c + " orientationchange." + c;
                a ? (Fb.on(d, function(a) {
                    var b, c;
                    Cc && 27 === a.keyCode ? (b = !0, mc(Cc, !0, !0)) : (id.fullScreen || e.keyboard && !id.index) && (27 === a.keyCode ? (b = !0, id.cancelFullScreen()) : a.shiftKey && 32 === a.keyCode && g("space") || 37 === a.keyCode && g("left") || 38 === a.keyCode && g("up") ? c = "<" : 32 === a.keyCode && g("space") || 39 === a.keyCode && g("right") || 40 === a.keyCode && g("down") ? c = ">" : 36 === a.keyCode && g("home") ? c = "<<" : 35 === a.keyCode && g("end") && (c = ">>")), (b || c) && Y(a), c && id.show({
                        index: c,
                        slow: a.altKey,
                        user: !0
                    })
                }), id.index || Fb.off(b).on(b, "textarea, input, select", function(a) {
                    !Db.hasClass(ja) && a.stopPropagation()
                }), Eb.on(f, id.resize)) : (Fb.off(d), Eb.off(f))
            }

            function j(b) {
                b !== j.f && (b ? (a.html("").addClass(ia + " " + kd).append(qd).before(od).before(pd), ga(id)) : (qd.detach(), od.detach(), pd.detach(), a.html(nd.urtext).removeClass(kd), ha(id)), i(b), j.f = b)
            }

            function m() {
                yc = id.data = yc || P(e.data) || D(a), zc = id.size = yc.length, !xc.ok && e.shuffle && O(yc), f(), Jd = y(Jd), zc && j(!0)
            }

            function o() {
                var a = 2 > zc && !e.enableifsingleframe || Cc;
                Md.noMove = a || Sc, Md.noSwipe = a || !e.swipe, !Wc && sd.toggleClass(Ba, !e.click && !Md.noMove && !Md.noSwipe), Nb && qd.toggleClass(sa, !Md.noSwipe)
            }

            function t(a) {
                a === !0 && (a = ""), e.autoplay = Math.max(+a || Sb, 1.5 * Vc)
            }

            function u() {
                function a(a, c) {
                    b[a ? "add" : "remove"].push(c)
                }
                id.options = e = R(e), Sc = "crossfade" === e.transition || "dissolve" === e.transition, Mc = e.loop && (zc > 2 || Sc && (!Wc || "slide" !== Wc)), Vc = +e.transitionduration || Qb, Yc = "rtl" === e.direction, Zc = d.extend({}, e.keyboard && dc, e.keyboard);
                var b = {
                    add: [],
                    remove: []
                };
                zc > 1 || e.enableifsingleframe ? (Nc = e.nav, Pc = "top" === e.navposition, b.remove.push(Xa), wd.toggle(!!e.arrows)) : (Nc = !1, wd.hide()), Ra(), Bc = new zb(d.extend(Ab, e.spinner, Bb, {
                    direction: Yc ? -1 : 1
                })), Gb(), Hb(), e.autoplay && t(e.autoplay), Tc = n(e.thumbwidth) || Ub, Uc = n(e.thumbheight) || Ub, Nd.ok = Pd.ok = e.trackpad && !Mb, o(), ec(e, [Ld]), Oc = "thumbs" === Nc, Oc ? (lb(zc, "navThumb"), Ac = Bd, hd = Zb, J(od, d.Fotorama.jst.style({
                    w: Tc,
                    h: Uc,
                    b: e.thumbborderwidth,
                    m: e.thumbmargin,
                    s: jd,
                    q: !Jb
                })), yd.addClass(La).removeClass(Ka)) : "dots" === Nc ? (lb(zc, "navDot"), Ac = Ad, hd = Yb, yd.addClass(Ka).removeClass(La)) : (Nc = !1, yd.removeClass(La + " " + Ka)), Nc && (Pc ? xd.insertBefore(rd) : xd.insertAfter(rd), wb.nav = !1, wb(Ac, zd, "nav")), Qc = e.allowfullscreen, Qc ? (Dd.prependTo(rd), Rc = Kb && "native" === Qc) : (Dd.detach(), Rc = !1), a(Sc, oa), a(!Sc, pa), a(!e.captions, va), a(Yc, ta), a("always" !== e.arrows, wa), Xc = e.shadows && !Mb, a(!Xc, ra), qd.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")), Kd = d.extend({}, e)
            }

            function x(a) {
                return 0 > a ? (zc + a % zc) % zc : a >= zc ? a % zc : a
            }

            function y(a) {
                return h(a, 0, zc - 1)
            }

            function z(a) {
                return Mc ? x(a) : y(a)
            }

            function E(a) {
                return !!(a > 0 || Mc) && a - 1
            }

            function U(a) {
                return !!(zc - 1 > a || Mc) && a + 1
            }

            function $() {
                Md.min = Mc ? -1 / 0 : -r(zc - 1, Ld.w, e.margin, Fc), Md.max = Mc ? 1 / 0 : -r(0, Ld.w, e.margin, Fc), Md.snap = Ld.w + e.margin
            }

            function ba() {
                Od.min = Math.min(0, Ld.nw - zd.width()), Od.max = 0, zd.toggleClass(Ba, !(Od.noMove = Od.min === Od.max))
            }

            function ca(a, b, c) {
                if ("number" == typeof a) {
                    a = new Array(a);
                    var e = !0
                }
                return d.each(a, function(a, d) {
                    if (e && (d = a), "number" == typeof d) {
                        var f = yc[x(d)];
                        if (f) {
                            var g = "$" + b + "Frame",
                                h = f[g];
                            c.call(this, a, d, f, h, g, h && h.data())
                        }
                    }
                })
            }

            function fa(a, b, c, d) {
                (!$c || "*" === $c && d === Lc) && (a = q(e.width) || q(a) || Vb, b = q(e.height) || q(b) || Wb, id.resize({
                    width: a,
                    ratio: e.ratio || c || a / b
                }, 0, d !== Lc && "*"))
            }

            function Pa(a, b, c, f, g, h) {
                ca(a, b, function(a, i, j, k, l, m) {
                    function n(a) {
                        var b = x(i);
                        fc(a, {
                            index: b,
                            src: w,
                            frame: yc[b]
                        })
                    }

                    function o() {
                        t.remove(), d.Fotorama.cache[w] = "error", j.html && "stage" === b || !y || y === w ? (!w || j.html || r ? "stage" === b && (k.trigger("f:load").removeClass(ab + " " + _a).addClass(bb), n("load"), fa()) : (k.trigger("f:error").removeClass(ab).addClass(_a), n("error")), m.state = "error", !(zc > 1 && yc[i] === j) || j.html || j.deleted || j.video || r || (j.deleted = !0, id.splice(i, 1))) : (j[v] = w = y, Pa([i], b, c, f, g, !0))
                    }

                    function p() {
                        d.Fotorama.measures[w] = u.measures = d.Fotorama.measures[w] || {
                            width: s.width,
                            height: s.height,
                            ratio: s.width / s.height
                        }, fa(u.measures.width, u.measures.height, u.measures.ratio, i), t.off("load error").addClass(fb + (r ? " " + gb : "")).prependTo(k), I(t, (d.isFunction(c) ? c() : c) || Ld, f || j.fit || e.fit, g || j.position || e.position), d.Fotorama.cache[w] = m.state = "loaded", setTimeout(function() {
                            k.trigger("f:load").removeClass(ab + " " + _a).addClass(bb + " " + (r ? cb : db)), "stage" === b ? n("load") : (j.thumbratio === $b || !j.thumbratio && e.thumbratio === $b) && (j.thumbratio = u.measures.ratio, vc())
                        }, 0)
                    }

                    function q() {
                        var a = 10;
                        G(function() {
                            return !fd || !a-- && !Mb
                        }, function() {
                            p()
                        })
                    }
                    if (k) {
                        var r = id.fullScreen && j.full && j.full !== j.img && !m.$full && "stage" === b;
                        if (!m.$img || h || r) {
                            var s = new Image,
                                t = d(s),
                                u = t.data();
                            m[r ? "$full" : "$img"] = t;
                            var v = "stage" === b ? r ? "full" : "img" : "thumb",
                                w = j[v],
                                y = r ? null : j["stage" === b ? "thumb" : "img"];
                            if ("navThumb" === b && (k = m.$wrap), !w) return void o();
                            d.Fotorama.cache[w] ? function a() {
                                "error" === d.Fotorama.cache[w] ? o() : "loaded" === d.Fotorama.cache[w] ? setTimeout(q, 0) : setTimeout(a, 100)
                            }() : (d.Fotorama.cache[w] = "*", t.on("load", q).on("error", o)), m.state = "", s.src = w
                        }
                    }
                })
            }

            function Qa(a) {
                Id.append(Bc.spin().el).appendTo(a)
            }

            function Ra() {
                Id.detach(), Bc && Bc.stop()
            }

            function Sa() {
                var a = Dc[Xb];
                a && !a.data().state && (Qa(a), a.on("f:load f:error", function() {
                    a.off("f:load f:error"), Ra()
                }))
            }

            function eb(a) {
                W(a, sc), X(a, function() {
                    setTimeout(function() {
                        Q(yd)
                    }, 0), Rb({
                        time: Vc,
                        guessIndex: d(this).data().eq,
                        minMax: Od
                    })
                })
            }

            function lb(a, b) {
                ca(a, b, function(a, c, e, f, g, h) {
                    if (!f) {
                        f = e[g] = qd[g].clone(), h = f.data(), h.data = e;
                        var i = f[0];
                        "stage" === b ? (e.html && d('<div class="' + kb + '"></div>').append(e._html ? d(e.html).removeAttr("id").html(e._html) : e.html).appendTo(f), e.caption && d(N(ob, N(pb, e.caption))).appendTo(f), e.video && f.addClass(za).append(Fd.clone()), X(i, function() {
                            setTimeout(function() {
                                Q(rd)
                            }, 0), pc({
                                index: h.eq,
                                user: !0
                            })
                        }), td = td.add(f)) : "navDot" === b ? (eb(i), Ad = Ad.add(f)) : "navThumb" === b && (eb(i), h.$wrap = f.children(":first"), Bd = Bd.add(f), e.video && h.$wrap.append(Fd.clone()))
                    }
                })
            }

            function sb(a, b, c, d) {
                return a && a.length && I(a, b, c, d)
            }

            function tb(a) {
                ca(a, "stage", function(a, b, c, f, g, h) {
                    if (f) {
                        var i = x(b),
                            j = c.fit || e.fit,
                            k = c.position || e.position;
                        h.eq = i, Rd[Xb][i] = f.css(d.extend({
                            left: Sc ? 0 : r(b, Ld.w, e.margin, Fc)
                        }, Sc && l(0))), F(f[0]) && (f.appendTo(sd), mc(c.$video)), sb(h.$img, Ld, j, k), sb(h.$full, Ld, j, k)
                    }
                })
            }

            function ub(a, b) {
                if ("thumbs" === Nc && !isNaN(a)) {
                    var c = -a,
                        f = -a + Ld.nw;
                    Bd.each(function() {
                        var a = d(this),
                            g = a.data(),
                            h = g.eq,
                            i = function() {
                                return {
                                    h: Uc,
                                    w: g.w
                                }
                            },
                            j = i(),
                            k = yc[h] || {},
                            l = k.thumbfit || e.thumbfit,
                            m = k.thumbposition || e.thumbposition;
                        j.w = g.w, g.l + g.w < c || g.l > f || sb(g.$img, j, l, m) || b && Pa([h], "navThumb", i, l, m)
                    })
                }
            }

            function wb(a, b, c) {
                if (!wb[c]) {
                    var f = "nav" === c && Oc,
                        g = 0;
                    b.append(a.filter(function() {
                        for (var a, b = d(this), c = b.data(), e = 0, f = yc.length; f > e; e++)
                            if (c.data === yc[e]) {
                                a = !0, c.eq = e;
                                break
                            }
                        return a || b.remove() && !1
                    }).sort(function(a, b) {
                        return d(a).data().eq - d(b).data().eq
                    }).each(function() {
                        if (f) {
                            var a = d(this),
                                b = a.data(),
                                c = Math.round(Uc * b.data.thumbratio) || Tc;
                            b.l = g, b.w = c, a.css({
                                width: c
                            }), g += c + e.thumbmargin
                        }
                    })), wb[c] = !0
                }
            }

            function xb(a) {
                return a - Sd > Ld.w / 3
            }

            function yb(a) {
                return !(Mc || Jd + a && Jd - zc + a || Cc)
            }

            function Gb() {
                var a = yb(0),
                    b = yb(1);
                ud.toggleClass(Ea, a).attr(V(a)), vd.toggleClass(Ea, b).attr(V(b))
            }

            function Hb() {
                Nd.ok && (Nd.prevent = {
                    "<": yb(0),
                    ">": yb(1)
                })
            }

            function Lb(a) {
                var b, c, d = a.data();
                return Oc ? (b = d.l, c = d.w) : (b = a.position().left, c = a.width()), {
                    c: b + c / 2,
                    min: -b + 10 * e.thumbmargin,
                    max: -b + Ld.w - c - 10 * e.thumbmargin
                }
            }

            function Ob(a) {
                var b = Dc[hd].data();
                _(Cd, {
                    time: 1.2 * a,
                    pos: b.l,
                    width: b.w - 2 * e.thumbborderwidth
                })
            }

            function Rb(a) {
                var b = yc[a.guessIndex][hd];
                if (b) {
                    var c = Od.min !== Od.max,
                        d = a.minMax || c && Lb(Dc[hd]),
                        e = c && (a.keep && Rb.l ? Rb.l : h((a.coo || Ld.nw / 2) - Lb(b).c, d.min, d.max)),
                        f = c && h(e, Od.min, Od.max);
                    _(zd, {
                        time: 1.1 * a.time,
                        pos: f || 0,
                        onEnd: function() {
                            ub(f, !0)
                        }
                    }), lc(yd, K(f, Od.min, Od.max)), Rb.l = e
                }
            }

            function Tb() {
                _b(hd), Qd[hd].push(Dc[hd].addClass(Wa))
            }

            function _b(a) {
                for (var b = Qd[a]; b.length;) b.shift().removeClass(Wa)
            }

            function bc(a) {
                var b = Rd[a];
                d.each(Ec, function(a, c) {
                    delete b[x(c)]
                }), d.each(b, function(a, c) {
                    delete b[a], c.detach()
                })
            }

            function cc(a) {
                Fc = Gc = Jd;
                var b = Dc[Xb];
                b && (_b(Xb), Qd[Xb].push(b.addClass(Wa)), a || id.show.onEnd(!0), v(sd, 0, !0), bc(Xb), tb(Ec), $(), ba())
            }

            function ec(a, b) {
                a && d.each(b, function(b, c) {
                    c && d.extend(c, {
                        width: a.width || c.width,
                        height: a.height,
                        minwidth: a.minwidth,
                        maxwidth: a.maxwidth,
                        minheight: a.minheight,
                        maxheight: a.maxheight,
                        ratio: S(a.ratio)
                    })
                })
            }

            function fc(b, c) {
                a.trigger(ia + ":" + b, [id, c])
            }

            function gc() {
                clearTimeout(hc.t), fd = 1, e.stopautoplayontouch ? id.stopAutoplay() : cd = !0
            }

            function hc() {
                e.stopautoplayontouch || (ic(), jc()), hc.t = setTimeout(function() {
                    fd = 0
                }, Qb + Pb)
            }

            function ic() {
                cd = !(!Cc && !dd)
            }

            function jc() {
                if (clearTimeout(jc.t), G.stop(jc.w), !e.autoplay || cd) return void(id.autoplay && (id.autoplay = !1, fc("stopautoplay")));
                id.autoplay || (id.autoplay = !0, fc("startautoplay"));
                var a = Jd,
                    b = Dc[Xb].data();
                jc.w = G(function() {
                    return b.state || a !== Jd
                }, function() {
                    jc.t = setTimeout(function() {
                        if (!cd && a === Jd) {
                            var b = Kc,
                                c = yc[b][Xb].data();
                            jc.w = G(function() {
                                return c.state || b !== Kc
                            }, function() {
                                cd || b !== Kc || id.show(Mc ? Z(!Yc) : Kc)
                            })
                        }
                    }, e.autoplay)
                })
            }

            function kc() {
                id.fullScreen && (id.fullScreen = !1, Kb && vb.cancel(ld), Db.removeClass(ja), Cb.removeClass(ja), a.removeClass(Za).insertAfter(pd), Ld = d.extend({}, ed), mc(Cc, !0, !0), rc("x", !1), id.resize(), Pa(Ec, "stage"), Q(Eb, ad, _c), fc("fullscreenexit"))
            }

            function lc(a, b) {
                Xc && (a.removeClass(Ua + " " + Va), b && !Cc && a.addClass(b.replace(/^|\s/g, " " + Ta + "--")))
            }

            function mc(a, b, c) {
                b && (qd.removeClass(na), Cc = !1, o()), a && a !== Cc && (a.remove(), fc("unloadvideo")), c && (ic(), jc())
            }

            function nc(a) {
                qd.toggleClass(qa, a)
            }

            function oc(a) {
                if (!Md.flow) {
                    var b = a ? a.pageX : oc.x,
                        c = b && !yb(xb(b)) && e.click;
                    oc.p !== c && rd.toggleClass(Ca, c) && (oc.p = c, oc.x = b)
                }
            }

            function pc(a) {
                clearTimeout(pc.t), e.clicktransition && e.clicktransition !== e.transition ? setTimeout(function() {
                    var b = e.transition;
                    id.setOptions({
                        transition: e.clicktransition
                    }), Wc = b, pc.t = setTimeout(function() {
                        id.show(a)
                    }, 10)
                }, 0) : id.show(a)
            }

            function qc(a, b) {
                var c = a.target;
                d(c).hasClass(mb) ? id.playVideo() : c === Ed ? id.toggleFullScreen() : Cc ? c === Hd && mc(Cc, !0, !0) : b ? nc() : e.click && pc({
                    index: a.shiftKey || Z(xb(a._x)),
                    slow: a.altKey,
                    user: !0
                })
            }

            function rc(a, b) {
                Md[a] = Od[a] = b
            }

            function sc(a) {
                pc({
                    index: d(this).data().eq,
                    slow: a.altKey,
                    user: !0,
                    coo: a._x - yd.offset().left
                })
            }

            function tc(a) {
                pc({
                    index: wd.index(this) ? ">" : "<",
                    slow: a.altKey,
                    user: !0
                })
            }

            function uc(a) {
                X(a, function() {
                    setTimeout(function() {
                        Q(rd)
                    }, 0), nc(!1)
                })
            }

            function vc() {
                if (m(), u(), !vc.i) {
                    vc.i = !0;
                    var a = e.startindex;
                    (a || e.hash && c.hash) && (Lc = L(a || c.hash.replace(/^#/, ""), yc, 0 === id.index || a, a)), Jd = Fc = Gc = Hc = Lc = z(Lc) || 0
                }
                if (zc) {
                    if (wc()) return;
                    Cc && mc(Cc, !0), Ec = [], bc(Xb), vc.ok = !0, id.show({
                        index: Jd,
                        time: 0
                    }), id.resize()
                } else id.destroy()
            }

            function wc() {
                return !wc.f === Yc ? (wc.f = Yc, Jd = zc - 1 - Jd, id.reverse(), !0) : void 0
            }

            function xc() {
                xc.ok || (xc.ok = !0, fc("ready"))
            }
            Cb = d("html"), Db = d("body");
            var yc, zc, Ac, Bc, Cc, Dc, Ec, Fc, Gc, Hc, Ic, Jc, Kc, Lc, Mc, Nc, Oc, Pc, Qc, Rc, Sc, Tc, Uc, Vc, Wc, Xc, Yc, Zc, $c, _c, ad, bd, cd, dd, ed, fd, gd, hd, id = this,
                jd = d.now(),
                kd = ia + jd,
                ld = a[0],
                md = 1,
                nd = a.data(),
                od = d("<style></style>"),
                pd = d(N(Ya)),
                qd = d(N(ka)),
                rd = d(N(xa)).appendTo(qd),
                sd = (rd[0], d(N(Aa)).appendTo(rd)),
                td = d(),
                ud = d(N(Da + " " + Fa + rb)),
                vd = d(N(Da + " " + Ga + rb)),
                wd = ud.add(vd).appendTo(rd),
                xd = d(N(Ia)),
                yd = d(N(Ha)).appendTo(xd),
                zd = d(N(Ja)).appendTo(yd),
                Ad = d(),
                Bd = d(),
                Cd = (sd.data(), zd.data(), d(N(jb)).appendTo(zd)),
                Dd = d(N($a + rb)),
                Ed = Dd[0],
                Fd = d(N(mb)),
                Gd = d(N(nb)).appendTo(rd),
                Hd = Gd[0],
                Id = d(N(qb)),
                Jd = !1,
                Kd = {},
                Ld = {},
                Md = {},
                Nd = {},
                Od = {},
                Pd = {},
                Qd = {},
                Rd = {},
                Sd = 0,
                Td = [];
            qd[Xb] = d(N(ya)), qd[Zb] = d(N(Ma + " " + Oa + rb, N(ib))), qd[Yb] = d(N(Ma + " " + Na + rb, N(hb))), Qd[Xb] = [], Qd[Zb] = [], Qd[Yb] = [], Rd[Xb] = {}, qd.addClass(Ib ? ma : la).toggleClass(qa, !e.controlsonstart), nd.fotorama = this, id.startAutoplay = function(a) {
                return id.autoplay ? this : (cd = dd = !1, t(a || e.autoplay), jc(), this)
            }, id.stopAutoplay = function() {
                return id.autoplay && (cd = dd = !0, jc()), this
            }, id.show = function(a) {
                var b;
                "object" != typeof a ? (b = a, a = {}) : b = a.index, b = ">" === b ? Gc + 1 : "<" === b ? Gc - 1 : "<<" === b ? 0 : ">>" === b ? zc - 1 : b, b = isNaN(b) ? L(b, yc, !0) : b, b = void 0 === b ? Jd || 0 : b, id.activeIndex = Jd = z(b), Ic = E(Jd), Jc = U(Jd), Kc = x(Jd + (Yc ? -1 : 1)), Ec = [Jd, Ic, Jc], Gc = Mc ? b : Jd;
                var c = Math.abs(Hc - Gc),
                    d = w(a.time, function() {
                        return Math.min(Vc * (1 + (c - 1) / 12), 2 * Vc)
                    }),
                    f = a.overPos;
                a.slow && (d *= 10);
                var g = Dc;
                id.activeFrame = Dc = yc[Jd];
                var i = g === Dc && !a.user;
                mc(Cc, Dc.i !== yc[x(Fc)].i), lb(Ec, "stage"), tb(Mb ? [Gc] : [Gc, E(Gc), U(Gc)]), rc("go", !0), i || fc("show", {
                    user: a.user,
                    time: d
                }), cd = !0;
                var j = id.show.onEnd = function(b) {
                    if (!j.ok) {
                        if (j.ok = !0, b || cc(!0), i || fc("showend", {
                                user: a.user
                            }), !b && Wc && Wc !== e.transition) return id.setOptions({
                            transition: Wc
                        }), void(Wc = !1);
                        Sa(), Pa(Ec, "stage"), rc("go", !1), Hb(), oc(), ic(), jc()
                    }
                };
                if (Sc) {
                    aa(Dc[Xb], Jd !== Hc ? yc[Hc][Xb] : null, td, {
                        time: d,
                        method: e.transition,
                        onEnd: j
                    }, Td)
                } else _(sd, {
                    pos: -r(Gc, Ld.w, e.margin, Fc),
                    overPos: f,
                    time: d,
                    onEnd: j
                });
                if (Gb(), Nc) {
                    Tb();
                    var k = y(Jd + h(Gc - Hc, -1, 1));
                    Rb({
                        time: d,
                        coo: k !== Jd && a.coo,
                        guessIndex: void 0 !== a.coo ? k : Jd,
                        keep: i
                    }), Oc && Ob(d)
                }
                return bd = void 0 !== Hc && Hc !== Jd, Hc = Jd, e.hash && bd && !id.eq && H(Dc.id || Jd + 1), this
            }, id.requestFullScreen = function() {
                return Qc && !id.fullScreen && (_c = Eb.scrollTop(), ad = Eb.scrollLeft(), Q(Eb), rc("x", !0), ed = d.extend({}, Ld), a.addClass(Za).appendTo(Db.addClass(ja)), Cb.addClass(ja), mc(Cc, !0, !0), id.fullScreen = !0, Rc && vb.request(ld), id.resize(), Pa(Ec, "stage"), Sa(), fc("fullscreenenter")), this
            }, id.cancelFullScreen = function() {
                return Rc && vb.is() ? vb.cancel(b) : kc(), this
            }, id.toggleFullScreen = function() {
                return id[(id.fullScreen ? "cancel" : "request") + "FullScreen"]()
            }, T(b, vb.event, function() {
                !yc || vb.is() || Cc || kc()
            }), id.resize = function(a) {
                if (!yc) return this;
                var b = arguments[1] || 0,
                    c = arguments[2];
                ec(id.fullScreen ? {
                    width: "100%",
                    maxwidth: null,
                    minwidth: null,
                    height: "100%",
                    maxheight: null,
                    minheight: null
                } : R(a), [Ld, c || id.fullScreen || e]);
                var d = Ld.width,
                    f = Ld.height,
                    g = Ld.ratio,
                    i = Eb.height() - (Nc ? yd.height() : 0);
                return q(d) && (qd.addClass(ua).css({
                    width: d,
                    minWidth: Ld.minwidth || 0,
                    maxWidth: Ld.maxwidth || ac
                }), d = Ld.W = Ld.w = qd.width(), Ld.nw = Nc && p(e.navwidth, d) || d, e.glimpse && (Ld.w -= Math.round(2 * (p(e.glimpse, d) || 0))), sd.css({
                    width: Ld.w,
                    marginLeft: (Ld.W - Ld.w) / 2
                }), f = p(f, i), (f = f || g && d / g) && (d = Math.round(d), f = Ld.h = Math.round(h(f, p(Ld.minheight, i), p(Ld.maxheight, i))), rd.stop().animate({
                    width: d,
                    height: f
                }, b, function() {
                    qd.removeClass(ua)
                }), cc(), Nc && (yd.stop().animate({
                    width: Ld.nw
                }, b), Rb({
                    guessIndex: Jd,
                    time: b,
                    keep: !0
                }), Oc && wb.nav && Ob(b)), $c = c || !0, xc())), Sd = rd.offset().left, this
            }, id.setOptions = function(a) {
                return d.extend(e, a), vc(), this
            }, id.shuffle = function() {
                return yc && O(yc) && vc(), this
            }, id.destroy = function() {
                return id.cancelFullScreen(), id.stopAutoplay(), yc = id.data = null, j(), Ec = [], bc(Xb), vc.ok = !1, this
            }, id.playVideo = function() {
                var a = Dc,
                    b = a.video,
                    c = Jd;
                return "object" == typeof b && a.videoReady && (Rc && id.fullScreen && id.cancelFullScreen(), G(function() {
                    return !vb.is() || c !== Jd
                }, function() {
                    c === Jd && (a.$video = a.$video || d(d.Fotorama.jst.video(b)), a.$video.appendTo(a[Xb]), qd.addClass(na), Cc = a.$video, o(), wd.blur(), Dd.blur(), fc("loadvideo"))
                })), this
            }, id.stopVideo = function() {
                return mc(Cc, !0, !0), this
            }, rd.on("mousemove", oc), Md = da(sd, {
                onStart: gc,
                onMove: function(a, b) {
                    lc(rd, b.edge)
                },
                onTouchEnd: hc,
                onEnd: function(a) {
                    lc(rd);
                    var b = (Nb && !gd || a.touch) && e.arrows && "always" !== e.arrows;
                    if (a.moved || b && a.pos !== a.newPos && !a.control) {
                        var c = s(a.newPos, Ld.w, e.margin, Fc);
                        id.show({
                            index: c,
                            time: Sc ? Vc : a.time,
                            overPos: a.overPos,
                            user: !0
                        })
                    } else a.aborted || a.control || qc(a.startEvent, b)
                },
                timeLow: 1,
                timeHigh: 1,
                friction: 2,
                select: "." + Xa + ", ." + Xa + " *",
                $wrap: rd
            }), Od = da(zd, {
                onStart: gc,
                onMove: function(a, b) {
                    lc(yd, b.edge)
                },
                onTouchEnd: hc,
                onEnd: function(a) {
                    function b() {
                        Rb.l = a.newPos, ic(), jc(), ub(a.newPos, !0)
                    }
                    if (a.moved) a.pos !== a.newPos ? (cd = !0, _(zd, {
                        time: a.time,
                        pos: a.newPos,
                        overPos: a.overPos,
                        onEnd: b
                    }), ub(a.newPos), Xc && lc(yd, K(a.newPos, Od.min, Od.max))) : b();
                    else {
                        var c = a.$target.closest("." + Ma, zd)[0];
                        c && sc.call(c, a.startEvent)
                    }
                },
                timeLow: .5,
                timeHigh: 2,
                friction: 5,
                $wrap: yd
            }), Nd = ea(rd, {
                shift: !0,
                onEnd: function(a, b) {
                    gc(), hc(), id.show({
                        index: b,
                        slow: a.altKey
                    })
                }
            }), Pd = ea(yd, {
                onEnd: function(a, b) {
                    gc(), hc();
                    var c = v(zd) + .25 * b;
                    zd.css(k(h(c, Od.min, Od.max))), Xc && lc(yd, K(c, Od.min, Od.max)), Pd.prevent = {
                        "<": c >= Od.max,
                        ">": c <= Od.min
                    }, clearTimeout(Pd.t), Pd.t = setTimeout(function() {
                        Rb.l = c, ub(c, !0)
                    }, Pb), ub(c)
                }
            }), qd.hover(function() {
                setTimeout(function() {
                    fd || nc(!(gd = !0))
                }, 0)
            }, function() {
                gd && nc(!(gd = !1))
            }), M(wd, function(a) {
                Y(a), tc.call(this, a)
            }, {
                onStart: function() {
                    gc(), Md.control = !0
                },
                onTouchEnd: hc
            }), wd.each(function() {
                W(this, function(a) {
                    tc.call(this, a)
                }), uc(this)
            }), W(Ed, id.toggleFullScreen), uc(Ed), d.each("load push pop shift unshift reverse sort splice".split(" "), function(a, b) {
                id[b] = function() {
                    return yc = yc || [], "load" !== b ? Array.prototype[b].apply(yc, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (yc = P(arguments[0])), vc(), id
                }
            }), vc()
        }, d.fn.fotorama = function(b) {
            return this.each(function() {
                var c = this,
                    e = d(this),
                    f = e.data(),
                    g = f.fotorama;
                g ? g.setOptions(b, !0) : G(function() {
                    return !E(c)
                }, function() {
                    f.urtext = e.html(), new d.Fotorama(e, d.extend({}, cc, a.fotoramaDefaults, b, f))
                })
            })
        }, d.Fotorama.instances = [], d.Fotorama.cache = {}, d.Fotorama.measures = {}, d = d || {}, d.Fotorama = d.Fotorama || {}, d.Fotorama.jst = d.Fotorama.jst || {}, d.Fotorama.jst.style = function(a) {
            var b, c = "";
            return tb.escape, c += ".fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (b = a.m) ? "" : b) + "px;\nheight:" + (null == (b = a.h) ? "" : b) + "px}\n.fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__thumb-border{\nheight:" + (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? "" : b) + "px;\nborder-width:" + (null == (b = a.b) ? "" : b) + "px;\nmargin-top:" + (null == (b = a.m) ? "" : b) + "px}"
        }, d.Fotorama.jst.video = function(a) {
            function b() {
                c += d.call(arguments, "")
            }
            var c = "",
                d = (tb.escape, Array.prototype.join);
            return c += '<div class="fotorama__video"><iframe src="', b(("youtube" == a.type ? a.p + "youtube.com/embed/" + a.id + "?autoplay=1" : "vimeo" == a.type ? a.p + "player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" : a.id) + (a.s && "custom" != a.type ? "&" + a.s : "")), c += '" frameborder="0" allowfullscreen></iframe></div>\n'
        }, d(function() {
            d("." + ia + ':not([data-auto="false"])').fotorama()
        })
    }(window, document, location, "undefined" != typeof jQuery && jQuery),
    function(a) {
        var b = function(b, c, d, e) {
                if (a(b).length > 0) {
                    var f = a(b).offset().top;
                    c = e ? c : 0, a("html:not(:animated),body:not(:animated)").animate({
                        scrollTop: f - d
                    }, c)
                }
            },
            c = function() {
                return window.location.hash
            },
            d = {
                classes: {
                    loading: "sn-loading",
                    failed: "sn-failed",
                    success: "sn-active"
                },
                defaults: {
                    sections: "h2",
                    subSections: !1,
                    sectionElem: "section",
                    className: "scroll-nav",
                    showHeadline: !0,
                    headlineText: "Scroll To",
                    showTopLink: !0,
                    topLinkText: "Top",
                    fixedMargin: 40,
                    scrollOffset: 40,
                    animated: !0,
                    speed: 500,
                    insertLocation: "insertBefore",
                    arrowKeys: !1,
                    onInit: null,
                    onRender: null,
                    onDestroy: null
                },
                _set_body_class: function(b) {
                    var c = a("body");
                    "loading" === b ? c.addClass(d.classes.loading) : "success" === b ? c.removeClass(d.classes.loading).addClass(d.classes.success) : c.removeClass(d.classes.loading).addClass(d.classes.failed)
                },
                _find_sections: function(b) {
                    var c = d.settings.sections,
                        e = [];
                    if (d.settings.showTopLink) {
                        var f = b.children().first();
                        f.is(c) || e.push(f.nextUntil(c).andSelf())
                    }
                    b.find(c).each(function() {
                        e.push(a(this).nextUntil(c).andSelf())
                    }), d.sections = {
                        raw: e
                    }
                },
                _setup_sections: function(b) {
                    var c = [];
                    a(b).each(function(b) {
                        var e = [],
                            f = a(this),
                            g = "scrollNav-" + (b + 1),
                            h = function() {
                                return 0 === b
                            },
                            i = function() {
                                return !f.eq(0).is(d.settings.sections)
                            },
                            j = d.settings.showTopLink && h() && i() ? d.settings.topLinkText : f.filter(d.settings.sections).text();
                        if (f.wrapAll("<" + d.settings.sectionElem + ' id="' + g + '" class="' + d.settings.className + '__section" />'), d.settings.subSections) {
                            var k = f.filter(d.settings.subSections);
                            k.length > 0 && k.each(function(b) {
                                var c = g + "-" + (b + 1),
                                    h = a(this).text();
                                f.filter(a(this).nextUntil(k).andSelf()).wrapAll('<div id="' + c + '" class="' + d.settings.className + '__sub-section" />'), e.push({
                                    id: c,
                                    text: h
                                })
                            })
                        }
                        c.push({
                            id: g,
                            text: j,
                            sub_sections: e
                        })
                    }), d.sections.data = c
                },
                _tear_down_sections: function(b) {
                    a(b).each(function() {
                        var b = this.sub_sections;
                        a("#" + this.id).children().unwrap(), b.length > 0 && a(b).each(function() {
                            a("#" + this.id).children().unwrap()
                        })
                    })
                },
                _setup_nav: function(b) {
                    var c = a("<span />", {
                            class: d.settings.className + "__heading",
                            text: d.settings.headlineText
                        }),
                        e = a("<div />", {
                            class: d.settings.className + "__wrapper"
                        }),
                        f = a("<nav />", {
                            class: d.settings.className,
                            role: "navigation"
                        }),
                        g = a("<ol />", {
                            class: d.settings.className + "__list"
                        });
                    a.each(b, function(b) {
                        var c, e = 0 === b ? a("<li />", {
                                class: d.settings.className + "__item active"
                            }) : a("<li />", {
                                class: d.settings.className + "__item"
                            }),
                            f = a("<a />", {
                                href: "#" + this.id,
                                class: d.settings.className + "__link",
                                text: this.text
                            });
                        this.sub_sections.length > 0 && (e.addClass("is-parent-item"), c = a("<ol />", {
                            class: d.settings.className + "__sub-list"
                        }), a.each(this.sub_sections, function() {
                            var b = a("<li />", {
                                    class: d.settings.className + "__sub-item"
                                }),
                                e = a("<a />", {
                                    href: "#" + this.id,
                                    class: d.settings.className + "__sub-link",
                                    text: this.text
                                });
                            c.append(b.append(e))
                        })), g.append(e.append(f).append(c))
                    }), d.settings.showHeadline ? f.append(e.append(c).append(g)) : f.append(e.append(g)), d.nav = f
                },
                _insert_nav: function() {
                    var a = d.settings.insertLocation,
                        b = d.settings.insertTarget;
                    d.nav[a](b)
                },
                _setup_pos: function() {
                    var b = d.nav,
                        c = a(window).height(),
                        e = b.offset().top;
                    a.each(d.sections.data, function() {
                        var b = a("#" + this.id),
                            c = b.height();
                        this.top_offset = b.offset().top, this.bottom_offset = this.top_offset + c
                    }), d.dims = {
                        vp_height: c,
                        nav_offset: e
                    }
                },
                _check_pos: function() {
                    var b = d.nav,
                        c = a(window).scrollTop(),
                        e = c + d.settings.scrollOffset,
                        f = c + d.dims.vp_height - d.settings.scrollOffset,
                        g = [];
                    c > d.dims.nav_offset - d.settings.fixedMargin ? b.addClass("fixed") : b.removeClass("fixed"), a.each(d.sections.data, function() {
                        (this.top_offset >= e && this.top_offset <= f || this.bottom_offset > e && this.bottom_offset < f || this.top_offset < e && this.bottom_offset > f) && g.push(this)
                    }), b.find("." + d.settings.className + "__item").removeClass("active").removeClass("in-view"), a.each(g, function(a) {
                        0 === a ? b.find('a[href="#' + this.id + '"]').parents("." + d.settings.className + "__item").addClass("active").addClass("in-view") : b.find('a[href="#' + this.id + '"]').parents("." + d.settings.className + "__item").addClass("in-view"), a++, d.sections.active = g
                    })
                },
                _init_scroll_listener: function() {
                    a(window).on("scroll.scrollNav", function() {
                        d._check_pos()
                    })
                },
                _rm_scroll_listeners: function() {
                    a(window).off("scroll.scrollNav")
                },
                _init_resize_listener: function() {
                    a(window).on("resize.scrollNav", function() {
                        d._setup_pos(), d._check_pos()
                    })
                },
                _rm_resize_listener: function() {
                    a(window).off("resize.scrollNav")
                },
                _init_click_listener: function() {
                    a("." + d.settings.className).find("a").on("click.scrollNav", function(c) {
                        c.preventDefault(), b(a(this).attr("href"), d.settings.speed, d.settings.scrollOffset, d.settings.animated)
                    })
                },
                _rm_click_listener: function() {
                    a("." + d.settings.className).find("a").off("click.scrollNav")
                },
                _init_keyboard_listener: function(c) {
                    d.settings.arrowKeys && a(document).on("keydown.scrollNav", function(a) {
                        if (34 === a.keyCode || 33 === a.keyCode) {
                            var e = function(a) {
                                    var b = 0,
                                        e = c.length;
                                    for (b; b < e; b++)
                                        if (c[b].id === d.sections.active[0].id) {
                                            var f = 34 === a ? b + 1 : b - 1,
                                                g = void 0 === c[f] ? void 0 : c[f].id;
                                            return g
                                        }
                                },
                                f = e(a.keyCode);
                            if (void 0 !== f) {
                                a.preventDefault();
                                b("#" + f, d.settings.speed, d.settings.scrollOffset, d.settings.animated)
                            }
                        }
                    })
                },
                _rm_keyboard_listener: function() {
                    a(document).off("keydown.scrollNav")
                },
                init: function(e) {
                    return this.each(function() {
                        var f = a(this);
                        d.settings = a.extend({}, d.defaults, e), d.settings.insertTarget = d.settings.insertTarget ? a(d.settings.insertTarget) : f, f.length > 0 ? (d.settings.onInit && d.settings.onInit.call(this), d._set_body_class("loading"), d._find_sections(f), f.find(d.settings.sections).length > 0 ? (d._setup_sections(d.sections.raw), d._setup_nav(d.sections.data), d.settings.insertTarget.length > 0 ? (d._insert_nav(), d._setup_pos(), d._check_pos(), d._init_scroll_listener(), d._init_resize_listener(), d._init_click_listener(), d._init_keyboard_listener(d.sections.data), d._set_body_class("success"), b(c()), d.settings.onRender && d.settings.onRender.call(this)) : (console.log('Build failed, scrollNav could not find "' + d.settings.insertTarget + '"'), d._set_body_class("failed"))) : (console.log('Build failed, scrollNav could not find any "' + d.settings.sections + 's" inside of "' + f.selector + '"'), d._set_body_class("failed"))) : (console.log('Build failed, scrollNav could not find "' + f.selector + '"'), d._set_body_class("failed"))
                    })
                },
                destroy: function() {
                    return this.each(function() {
                        d._rm_scroll_listeners(), d._rm_resize_listener(), d._rm_click_listener(), d._rm_keyboard_listener(), a("body").removeClass("sn-loading sn-active sn-failed"), a("." + d.settings.className).remove(), d._tear_down_sections(d.sections.data), d.settings.onDestroy && d.settings.onDestroy.call(this), d.settings = [], d.sections = void 0
                    })
                }
            };
        a.fn.scrollNav = function() {
            var b, c = arguments[0];
            if (d[c]) c = d[c], b = Array.prototype.slice.call(arguments, 1);
            else {
                if ("object" != typeof c && c) return a.error("Method " + c + " does not exist in the scrollNav plugin"), this;
                c = d.init, b = arguments
            }
            return c.apply(this, b)
        }
    }(jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        var b, c, d;
        d = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }, c = {
            align: "center",
            autoResize: !1,
            comparator: null,
            container: a("body"),
            ignoreInactiveItems: !0,
            itemWidth: 0,
            fillEmptySpace: !1,
            flexibleWidth: 0,
            direction: void 0,
            offset: 2,
            onLayoutChanged: void 0,
            outerOffset: 0,
            resizeDelay: 50,
            possibleFilters: []
        }, b = function() {
            function b(b, e) {
                this.handler = b, this.columns = this.containerWidth = this.resizeTimer = null, this.activeItemCount = 0, this.itemHeightsDirty = !0, this.placeholders = [], a.extend(!0, this, c, e), this.update = d(this.update, this), this.onResize = d(this.onResize, this), this.onRefresh = d(this.onRefresh, this), this.getItemWidth = d(this.getItemWidth, this), this.layout = d(this.layout, this), this.layoutFull = d(this.layoutFull, this), this.layoutColumns = d(this.layoutColumns, this), this.filter = d(this.filter, this), this.clear = d(this.clear, this), this.getActiveItems = d(this.getActiveItems, this), this.refreshPlaceholders = d(this.refreshPlaceholders, this), this.sortElements = d(this.sortElements, this);
                for (var f, g, h, i = 0, j = 0, k = 0, l = {}; b.length > i; i++)
                    if (g = b.eq(i), "object" == typeof(f = g.data("filterClass")) && f.length > 0)
                        for (j = 0; f.length > j; j++) h = a.trim(f[j]).toLowerCase(), h in l || (l[h] = []), l[h].push(g[0]);
                for (var m = this.possibleFilters; m.length > k; k++) {
                    var n = a.trim(m[k]).toLowerCase();
                    n in l || (l[n] = [])
                }
                this.filterClasses = l, this.autoResize && a(window).bind("resize.wookmark", this.onResize), this.container.bind("refreshWookmark", this.onRefresh)
            }
            return b.prototype.update = function(b) {
                this.itemHeightsDirty = !0, a.extend(!0, this, b)
            }, b.prototype.onResize = function() {
                clearTimeout(this.resizeTimer), this.itemHeightsDirty = 0 !== this.flexibleWidth, this.resizeTimer = setTimeout(this.layout, this.resizeDelay)
            }, b.prototype.onRefresh = function() {
                this.itemHeightsDirty = !0, this.layout()
            }, b.prototype.filter = function(b, c) {
                var d, e, f, g, h, i = [],
                    j = a();
                if (b = b || [], c = c || "or", b.length) {
                    for (e = 0; b.length > e; e++)(h = a.trim(b[e].toLowerCase())) in this.filterClasses && i.push(this.filterClasses[h]);
                    if (d = i.length, "or" == c || 1 == d)
                        for (e = 0; d > e; e++) j = j.add(i[e]);
                    else if ("and" == c) {
                        var k, l, m, n = i[0],
                            o = !0;
                        for (e = 1; d > e; e++) i[e].length < n.length && (n = i[e]);
                        for (n = n || [], e = 0; n.length > e; e++) {
                            for (l = n[e], o = !0, f = 0; i.length > f && o; f++)
                                if (m = i[f], n != m) {
                                    for (g = 0, k = !1; m.length > g && !k; g++) k = m[g] == l;
                                    o &= k
                                }
                            o && j.push(n[e])
                        }
                    }
                    this.handler.not(j).addClass("inactive")
                } else j = this.handler;
                j.removeClass("inactive"), this.columns = null, this.layout()
            }, b.prototype.refreshPlaceholders = function(b, c) {
                for (var d, e, f, g, h, i, j = this.placeholders.length, k = this.columns.length, l = this.container.innerHeight(); k > j; j++) d = a('<div class="wookmark-placeholder"/>').appendTo(this.container), this.placeholders.push(d);
                for (i = this.offset + 2 * parseInt(this.placeholders[0].css("borderWidth"), 10), j = 0; this.placeholders.length > j; j++)
                    if (d = this.placeholders[j], f = this.columns[j], j >= k || !f[f.length - 1]) d.css("display", "none");
                    else {
                        if (!(e = f[f.length - 1])) continue;
                        h = e.data("wookmark-top") + e.data("wookmark-height") + this.offset, g = l - h - i, d.css({
                            position: "absolute",
                            display: g > 0 ? "block" : "none",
                            left: j * b + c,
                            top: h,
                            width: b - i,
                            height: g
                        })
                    }
            }, b.prototype.getActiveItems = function() {
                return this.ignoreInactiveItems ? this.handler.not(".inactive") : this.handler
            }, b.prototype.getItemWidth = function() {
                var a = this.itemWidth,
                    b = this.container.width() - 2 * this.outerOffset,
                    c = this.handler.eq(0),
                    d = this.flexibleWidth;
                if (void 0 === this.itemWidth || 0 === this.itemWidth && !this.flexibleWidth ? a = c.outerWidth() : "string" == typeof this.itemWidth && this.itemWidth.indexOf("%") >= 0 && (a = parseFloat(this.itemWidth) / 100 * b), d) {
                    "string" == typeof d && d.indexOf("%") >= 0 && (d = parseFloat(d) / 100 * b);
                    var e = ~~(.5 + (b + this.offset) / (d + this.offset)),
                        f = Math.min(d, ~~((b - (e - 1) * this.offset) / e));
                    a = Math.max(a, f), this.handler.css("width", a)
                }
                return a
            }, b.prototype.layout = function(a) {
                if (this.container.is(":visible")) {
                    var b, c = this.getItemWidth() + this.offset,
                        d = this.container.width(),
                        e = d - 2 * this.outerOffset,
                        f = ~~((e + this.offset) / c),
                        g = 0,
                        h = 0,
                        i = 0,
                        j = this.getActiveItems(),
                        k = j.length;
                    if (this.itemHeightsDirty || !this.container.data("itemHeightsInitialized")) {
                        for (; k > i; i++) b = j.eq(i), b.data("wookmark-height", b.outerHeight());
                        this.itemHeightsDirty = !1, this.container.data("itemHeightsInitialized", !0)
                    }
                    f = Math.max(1, Math.min(f, k)), g = this.outerOffset, "center" == this.align && (g += ~~(e - (f * c - this.offset) + .5 >> 1)), this.direction = this.direction || ("right" == this.align ? "right" : "left"), h = a || null === this.columns || this.columns.length != f || this.activeItemCount != k ? this.layoutFull(c, f, g) : this.layoutColumns(c, g), this.activeItemCount = k, this.container.css("height", h), this.fillEmptySpace && this.refreshPlaceholders(c, g), void 0 !== this.onLayoutChanged && "function" == typeof this.onLayoutChanged && this.onLayoutChanged()
                }
            }, b.prototype.sortElements = function(a) {
                return "function" == typeof this.comparator ? a.sort(this.comparator) : a
            }, b.prototype.layoutFull = function(b, c, d) {
                var e, f, g = 0,
                    h = 0,
                    i = a.makeArray(this.getActiveItems()),
                    j = i.length,
                    k = null,
                    l = null,
                    m = {
                        position: "absolute"
                    },
                    n = [],
                    o = "left" == this.align;
                for (this.columns = [], i = this.sortElements(i); c > n.length;) n.push(this.outerOffset), this.columns.push([]);
                for (; j > g; g++) {
                    for (e = a(i[g]), k = n[0], l = 0, h = 0; c > h; h++) k > n[h] && (k = n[h], l = h);
                    f = d, (l > 0 || !o) && (f += l * b), m[this.direction] = f, m.top = k, e.css(m).data("wookmark-top", k), n[l] += e.data("wookmark-height") + this.offset, this.columns[l].push(e)
                }
                return Math.max.apply(Math, n)
            }, b.prototype.layoutColumns = function(a, b) {
                for (var c, d, e, f, g, h = [], i = 0, j = 0; this.columns.length > i; i++) {
                    for (h.push(this.outerOffset), d = this.columns[i], g = i * a + b, c = h[i], j = 0; d.length > j; j++) e = d[j], f = {
                        top: c
                    }, f[this.direction] = g, e.css(f).data("wookmark-top", c), c += e.data("wookmark-height") + this.offset;
                    h[i] = c
                }
                return Math.max.apply(Math, h)
            }, b.prototype.clear = function() {
                clearTimeout(this.resizeTimer), a(window).unbind("resize.wookmark", this.onResize), this.container.unbind("refreshWookmark", this.onRefresh)
            }, b
        }(), a.fn.wookmark = function(a) {
            return this.wookmarkInstance ? this.wookmarkInstance.update(a || {}) : this.wookmarkInstance = new b(this, a || {}), this.wookmarkInstance.layout(!0), this.show()
        }
    }),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && b(e[d], c) === -1 && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c)) !== -1 && f[e].splice(d, 1);
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f = this.getListenersAsObject(a);
            for (e in f)
                if (f.hasOwnProperty(e))
                    for (d = f[e].length; d--;) c = f[e][d], c.once === !0 && this.removeListener(a, c.listener), c.listener.apply(this, b || []) === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, a.noConflict = function() {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(window, function(a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" === m.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0, d = a.length; c < d; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a) {
            this.src = a, n[a] = this
        }
        var j = a.jQuery,
            k = a.console,
            l = void 0 !== k,
            m = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0, b = this.elements.length; a < b; a++) {
                var c = this.elements[a];
                "IMG" === c.nodeName && this.addImage(c);
                var d = c.nodeType;
                if (d && (1 === d || 9 === d || 11 === d))
                    for (var e = c.querySelectorAll("img"), f = 0, g = e.length; f < g; f++) {
                        var h = e[f];
                        this.addImage(h)
                    }
            }
        }, g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.check = function() {
            function a(a, e) {
                return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
            }
            var b = this,
                c = 0,
                d = this.images.length;
            if (this.hasAnyBroken = !1, !d) return void this.complete();
            for (var e = 0; e < d; e++) {
                var f = this.images[e];
                f.on("confirm", a), f.check()
            }
        }, g.prototype.progress = function(a) {
            this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
            var b = this;
            setTimeout(function() {
                b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
            })
        }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var b = this;
            setTimeout(function() {
                if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                    var c = b.hasAnyBroken ? "reject" : "resolve";
                    b.jqDeferred[c](b)
                }
            })
        }, j && (j.fn.imagesLoaded = function(a, b) {
            return new g(this, a, b).jqDeferred.promise(j(this))
        }), h.prototype = new b, h.prototype.check = function() {
            var a = n[this.img.src] || new i(this.img.src);
            if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var b = this;
            a.on("confirm", function(a, c) {
                return b.confirm(a.isLoaded, c), !0
            }), a.check()
        }, h.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("confirm", this, b)
        };
        var n = {};
        return i.prototype = new b, i.prototype.check = function() {
            if (!this.isChecked) {
                var a = new Image;
                c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
            }
        }, i.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, i.prototype.onload = function(a) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(a)
        }, i.prototype.onerror = function(a) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
        }, i.prototype.confirm = function(a, b) {
            this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
        }, i.prototype.unbindProxyEvents = function(a) {
            c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
        }, g
    }),
    function(a) {
        a.fn.slabText = function(b) {
            var c = {
                fontRatio: .78,
                forceNewCharCount: !0,
                wrapAmpersand: !0,
                headerBreakpoint: null,
                viewportBreakpoint: null,
                noResizeEvent: !1,
                resizeThrottleTime: 300,
                maxFontSize: 999,
                postTweak: !0,
                precision: 3,
                minCharsPerLine: 0
            };
            return a("body").addClass("slabtexted"), this.each(function() {
                b && a.extend(c, b);
                var d = a(this),
                    e = a("span.slabtext", d).length,
                    f = e ? [] : String(a.trim(d.text())).replace(/\s{2,}/g, " ").split(" "),
                    g = null,
                    h = null,
                    i = c.fontRatio,
                    j = c.forceNewCharCount,
                    k = c.headerBreakpoint,
                    l = c.viewportBreakpoint,
                    m = c.postTweak,
                    n = c.precision,
                    o = c.resizeThrottleTime,
                    p = c.minCharsPerLine,
                    q = null,
                    r = a(window).width(),
                    s = d.find("a:first").attr("href") || d.attr("href"),
                    t = s ? d.find("a:first").attr("title") : "";
                if (!(!e && p && f.join(" ").length < p)) {
                    var u = function() {
                            var a = jQuery('<div style="display:none;font-size:1em;margin:0;padding:0;height:auto;line-height:1;border:0;">&nbsp;</div>').appendTo(d),
                                b = a.height();
                            return a.remove(), b
                        },
                        v = function() {
                            var b, o = d.width();
                            if (0 !== o) {
                                if (d.removeClass("slabtextdone slabtextinactive"), l && l > r || k && k > o) return void d.addClass("slabtextinactive");
                                if (b = u(), e || !j && b == g) g = b;
                                else {
                                    g = b;
                                    var q, v, w, x = Math.min(60, Math.floor(o / (g * i))),
                                        y = 0,
                                        z = [],
                                        A = "",
                                        B = "",
                                        C = "";
                                    if (x != h) {
                                        for (h = x; y < f.length;) {
                                            for (B = ""; B.length < h && (A = B, B += f[y] + " ", !(++y >= f.length)););
                                            p && (q = f.slice(y).join(" "), q.length < p && (B += q, A = B, y = f.length + 2)), v = h - A.length, w = B.length - h, v < w && A.length >= (p || 2) ? (C = A, y--) : C = B, C = a("<div/>").text(C).html(), c.wrapAmpersand && (C = C.replace(/&amp;/g, '<span class="amp">&amp;</span>')), C = a.trim(C), z.push('<span class="slabtext">' + C + "</span>")
                                        }
                                        d.html(z.join(" ")), s && d.wrapInner('<a href="' + s + '" ' + (t ? 'title="' + t + '" ' : "") + "/>")
                                    }
                                }
                                a("span.slabtext", d).each(function() {
                                    var b, d, e, f = a(this),
                                        h = f.text(),
                                        i = h.split(" ").length > 1;
                                    m && f.css({
                                        "word-spacing": 0,
                                        "letter-spacing": 0
                                    }), d = o / f.width(), e = parseFloat(this.style.fontSize) || g, f.css("font-size", Math.min((e * d).toFixed(n), c.maxFontSize) + "px"), (b = !!m && o - f.width()) && f.css((i ? "word" : "letter") + "-spacing", (b / (i ? h.split(" ").length - 1 : h.length)).toFixed(n) + "px")
                                }), d.addClass("slabtextdone")
                            }
                        };
                    v(), c.noResizeEvent || a(window).resize(function() {
                        a(window).width() != r && (r = a(window).width(), clearTimeout(q), q = setTimeout(v, o))
                    })
                }
            })
        }
    }(jQuery),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function(a) {
        function b(a) {
            return h.raw ? a : encodeURIComponent(a)
        }

        function c(a) {
            return h.raw ? a : decodeURIComponent(a)
        }

        function d(a) {
            return b(h.json ? JSON.stringify(a) : String(a))
        }

        function e(a) {
            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a
            } catch (b) {}
        }

        function f(b, c) {
            var d = h.raw ? b : e(b);
            return a.isFunction(c) ? c(d) : d
        }
        var g = /\+/g,
            h = a.cookie = function(e, g, i) {
                if (void 0 !== g && !a.isFunction(g)) {
                    if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                        var j = i.expires,
                            k = i.expires = new Date;
                        k.setTime(+k + 864e5 * j)
                    }
                    return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; n < o; n++) {
                    var p = m[n].split("="),
                        q = c(p.shift()),
                        r = p.join("=");
                    if (e && e === q) {
                        l = f(r, g);
                        break
                    }
                    e || void 0 === (r = f(r)) || (l[q] = r)
                }
                return l
            };
        h.defaults = {}, a.removeCookie = function(b, c) {
            return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({}, c, {
                expires: -1
            })), !a.cookie(b))
        }
    }),
    function(a) {
        a.fn.parallax = function(b) {
            function c(b) {
                var c = a(window).scrollTop(),
                    f = b.offset().top;
                if (!(f + b.parent().outerHeight() <= c || f >= c + d)) {
                    var g = Math.round((f - c) * e.speed);
                    b.css({
                        transform: "translate3d(0px," + g + "px, 0px)"
                    })
                }
            }
            var d = a(window).height(),
                e = a.extend({
                    speed: .1
                }, b);
            return this.each(function() {
                var b = a(this);
                c(b), a(document).scroll(function() {
                    c(b)
                })
            })
        }
    }(jQuery),
    function(a, b, c, d) {
        "use strict";

        function e(b, c) {
            this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
        }
        var f = "photosetGrid",
            g = {
                width: "100%",
                gutter: "0px",
                highresLinks: !1,
                lowresWidth: 500,
                rel: "",
                onInit: function() {},
                onComplete: function() {}
            };
        e.prototype = {
            init: function() {
                this.options.onInit(), this._setupRows(this.element, this.options), this._setupColumns(this.element, this.options)
            },
            _callback: function(a) {
                this.options.onComplete(a)
            },
            _setupRows: function(b, c) {
                if (c.layout) this.layout = c.layout;
                else if (a(b).attr("data-layout")) this.layout = a(b).attr("data-layout");
                else {
                    for (var d = "", e = 1, f = 0; f < a(b).find("img").length; f++) d += e.toString();
                    this.layout = d
                }
                this.rows = this.layout.split("");
                for (var g in this.rows) this.rows[g] = parseInt(this.rows[g], 10);
                var h = a(b).find("img"),
                    i = 0;
                a.each(this.rows, function(a, b) {
                    var c = i,
                        d = i + b;
                    h.slice(c, d).wrapAll('<div class="photoset-row cols-' + b + '"></div>'), i = d
                }), a(b).find(".photoset-row:not(:last-child)").css({
                    "margin-bottom": c.gutter
                })
            },
            _setupColumns: function(c, d) {
                var e = this,
                    f = function(e) {
                        function f() {
                            var b = a(c).width().toString();
                            b !== a(c).attr("data-width") && (g.each(function() {
                                var b = a(this).find("img:eq(0)");
                                a(this).find("img").each(function() {
                                    var c = a(this);
                                    c.attr("height") < b.attr("height") && (b = a(this)), parseInt(c.css("width"), 10) > d.lowresWidth && c.attr("data-highres") && c.attr("src", c.attr("data-highres"))
                                });
                                var c = b.attr("height") * parseInt(b.css("width"), 10) / b.attr("width"),
                                    e = Math.floor(.025 * c);
                                a(this).height(c - e), a(this).find("img").each(function() {
                                    var b = a(this).attr("height") * parseInt(a(this).css("width"), 10) / a(this).attr("width"),
                                        d = .5 * (c - b) + "px";
                                    a(this).css({
                                        "margin-top": d
                                    })
                                })
                            }), a(c).attr("data-width", b))
                        }
                        var g = a(c).find(".photoset-row"),
                            h = a(c).find("img");
                        d.highresLinks ? (h.each(function() {
                            var b;
                            b = a(this).attr("data-highres") ? a(this).attr("data-highres") : a(this).attr("src"), a(this).wrapAll('<a href="' + b + '" class="photoset-cell highres-link" />')
                        }), d.rel && h.parent().attr("rel", d.rel)) : h.each(function() {
                            a(this).wrapAll('<div class="photoset-cell" />')
                        });
                        var i = a(c).find(".photoset-cell"),
                            j = a(c).find(".cols-1 .photoset-cell"),
                            k = a(c).find(".cols-2 .photoset-cell"),
                            l = a(c).find(".cols-3 .photoset-cell"),
                            m = a(c).find(".cols-4 .photoset-cell"),
                            n = a(c).find(".cols-5 .photoset-cell");
                        a(c).css({
                            width: d.width
                        }), g.css({
                            clear: "left",
                            display: "block",
                            overflow: "hidden"
                        }), i.css({
                            float: "left",
                            display: "block",
                            "line-height": "0",
                            "-webkit-box-sizing": "border-box",
                            "-moz-box-sizing": "border-box",
                            "box-sizing": "border-box"
                        }), h.css({
                            width: "100%",
                            height: "auto"
                        }), e && h.each(function() {
                            a(this).attr("height", a(this).height()), a(this).attr("width", a(this).width())
                        }), j.css({
                            width: "100%"
                        }), k.css({
                            width: "50%"
                        }), l.css({
                            width: "33.3%"
                        }), m.css({
                            width: "25%"
                        }), n.css({
                            width: "20%"
                        });
                        var o = parseInt(d.gutter, 10);
                        a(c).find(".photoset-cell:not(:last-child)").css({
                            "padding-right": o / 2 + "px"
                        }), a(c).find(".photoset-cell:not(:first-child)").css({
                            "padding-left": o / 2 + "px"
                        }), f(), a(b).on("resize", function() {
                            f()
                        })
                    },
                    g = !0,
                    h = !0;
                a(c).find("img").each(function() {
                    h = h & !!a(this).attr("height") & !!a(this).attr("width")
                }), g = !h, g ? a(c).imagesLoaded(function() {
                    f(g), e._callback(c)
                }) : (f(g), e._callback(c))
            }
        }, a.fn[f] = function(b) {
            return this.each(function() {
                a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
            })
        };
        var h = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        a.fn.imagesLoaded = function(b) {
            function c() {
                var c = a(m),
                    d = a(n);
                i && (n.length ? i.reject(k, c, d) : i.resolve(k)), a.isFunction(b) && b.call(g, k, c, d)
            }

            function e(a) {
                f(a.target, "error" === a.type)
            }

            function f(b, d) {
                b.src !== h && a.inArray(b, l) === -1 && (l.push(b), d ? n.push(b) : m.push(b), a.data(b, "imagesLoaded", {
                    isBroken: d,
                    src: b.src
                }), j && i.notifyWith(a(b), [d, k, a(m), a(n)]), k.length === l.length && (setTimeout(c), k.unbind(".imagesLoaded", e)))
            }
            var g = this,
                i = a.isFunction(a.Deferred) ? a.Deferred() : 0,
                j = a.isFunction(i.notify),
                k = g.find("img").add(g.filter("img")),
                l = [],
                m = [],
                n = [];
            return a.isPlainObject(b) && a.each(b, function(a, c) {
                "callback" === a ? b = c : i && i[a](c)
            }), k.length ? k.bind("load.imagesLoaded error.imagesLoaded", e).each(function(b, c) {
                var e = c.src,
                    g = a.data(c, "imagesLoaded");
                return g && g.src === e ? void f(c, g.isBroken) : c.complete && c.naturalWidth !== d ? void f(c, 0 === c.naturalWidth || 0 === c.naturalHeight) : void((c.readyState || c.complete) && (c.src = h, c.src = e))
            }) : c(), i ? i.promise(g) : g
        };
        var i, j, k, l = a.event,
            m = {
                _: 0
            },
            n = 0;
        i = l.special.throttledresize = {
            setup: function() {
                a(this).on("resize", i.handler)
            },
            teardown: function() {
                a(this).off("resize", i.handler)
            },
            handler: function(b, c) {
                var d = this,
                    e = arguments;
                j = !0, k || (setInterval(function() {
                    n++, (n > i.threshold && j || c) && (b.type = "throttledresize", l.dispatch.apply(d, e), j = !1, n = 0), n > 9 && (a(m).stop(), k = !1, n = 0)
                }, 30), k = !0)
            },
            threshold: 0
        }
    }(jQuery, window, document),
    function(a, b, c) {
        function d(a, b, c) {
            for (var e, f = 0; e = a[f]; f++) g.matchesSelector(e, b.selector) && -1 == b.firedElems.indexOf(e) && (b.firedElems.push(e), c.push({
                callback: b.callback,
                elem: e
            })), 0 < e.childNodes.length && d(e.childNodes, b, c)
        }

        function e(a) {
            for (var b, c = 0; b = a[c]; c++) b.callback.call(b.elem)
        }

        function f(a) {
            a.arrive = i.bindEvent, g.addMethod(a, "unbindArrive", i.unbindEvent), g.addMethod(a, "unbindArrive", i.unbindEventWithSelectorOrCallback), g.addMethod(a, "unbindArrive", i.unbindEventWithSelectorAndCallback), a.leave = j.bindEvent, g.addMethod(a, "unbindLeave", j.unbindEvent), g.addMethod(a, "unbindLeave", j.unbindEventWithSelectorOrCallback), g.addMethod(a, "unbindLeave", j.unbindEventWithSelectorAndCallback)
        }
        var g = function() {
                var a = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
                return {
                    matchesSelector: function(b, c) {
                        return b instanceof HTMLElement && a.call(b, c)
                    },
                    addMethod: function(a, b, c) {
                        var d = a[b];
                        a[b] = function() {
                            return c.length == arguments.length ? c.apply(this, arguments) : "function" == typeof d ? d.apply(this, arguments) : void 0
                        }
                    }
                }
            }(),
            h = function() {
                var a = function() {
                    this._eventsBucket = [], this._beforeRemoving = this._beforeAdding = null
                };
                return a.prototype.addEvent = function(a, b, c, d) {
                    return a = {
                        target: a,
                        selector: b,
                        options: c,
                        callback: d,
                        firedElems: []
                    }, this._beforeAdding && this._beforeAdding(a), this._eventsBucket.push(a), a
                }, a.prototype.removeEvent = function(a) {
                    for (var b, c = this._eventsBucket.length - 1; b = this._eventsBucket[c]; c--) a(b) && (this._beforeRemoving && this._beforeRemoving(b), this._eventsBucket.splice(c, 1))
                }, a.prototype.beforeAdding = function(a) {
                    this._beforeAdding = a
                }, a.prototype.beforeRemoving = function(a) {
                    this._beforeRemoving = a
                }, a
            }();
        c = function(b, c, d) {
            function e(a) {
                return "number" != typeof a.length && (a = [a]), a
            }
            var f = new h;
            return f.beforeAdding(function(c) {
                var e, f = c.target;
                f !== a.document && f !== a || (f = document.getElementsByTagName("html")[0]), e = new MutationObserver(function(a) {
                    d.call(this, a, c)
                });
                var g = b(c.options);
                e.observe(f, g), c.observer = e
            }), f.beforeRemoving(function(a) {
                a.observer.disconnect()
            }), this.bindEvent = function(a, b, d) {
                void 0 === d && (d = b, b = c);
                for (var g = e(this), h = 0; h < g.length; h++) f.addEvent(g[h], a, b, d)
            }, this.unbindEvent = function() {
                var a = e(this);
                f.removeEvent(function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (b.target === a[c]) return !0;
                    return !1
                })
            }, this.unbindEventWithSelectorOrCallback = function(a) {
                var b = e(this);
                f.removeEvent("function" == typeof a ? function(c) {
                    for (var d = 0; d < b.length; d++)
                        if (c.target === b[d] && c.callback === a) return !0;
                    return !1
                } : function(c) {
                    for (var d = 0; d < b.length; d++)
                        if (c.target === b[d] && c.selector === a) return !0;
                    return !1
                })
            }, this.unbindEventWithSelectorAndCallback = function(a, b) {
                var c = e(this);
                f.removeEvent(function(d) {
                    for (var e = 0; e < c.length; e++)
                        if (d.target === c[e] && d.selector === a && d.callback === b) return !0;
                    return !1
                })
            }, this
        };
        var i = new c(function(a) {
                var b = {
                    attributes: !1,
                    childList: !0,
                    subtree: !0
                };
                return a.fireOnAttributesModification && (b.attributes = !0), b
            }, {
                fireOnAttributesModification: !1
            }, function(a, b) {
                a.forEach(function(a) {
                    var c = a.addedNodes,
                        f = a.target,
                        h = [];
                    null !== c && 0 < c.length ? d(c, b, h) : "attributes" === a.type && g.matchesSelector(f, b.selector) && -1 == b.firedElems.indexOf(f) && (b.firedElems.push(f), h.push({
                        callback: b.callback,
                        elem: f
                    })), e(h)
                })
            }),
            j = new c(function(a) {
                return {
                    childList: !0,
                    subtree: !0
                }
            }, {}, function(a, b) {
                a.forEach(function(a) {
                    a = a.removedNodes;
                    var c = [];
                    null !== a && 0 < a.length && d(a, b, c), e(c)
                })
            });
        b && f(b.fn), f(HTMLElement.prototype), f(NodeList.prototype), f(HTMLCollection.prototype), f(HTMLDocument.prototype), f(Window.prototype)
    }(this, "undefined" == typeof jQuery ? null : jQuery), jQuery(document).ready(function() {
        window.blockFotoramaData = !0;
        var a = function() {
            jQuery("body").removeClass("aesop-chapter-menu-open")
        };
        jQuery(".aesop-toggle-chapter-menu").click(function(a) {
            a.preventDefault(), jQuery("body").toggleClass("aesop-chapter-menu-open")
        }), jQuery(".aesop-close-chapter-menu").click(function(b) {
            b.preventDefault(), a()
        }), jQuery(document).on("click", ".aesop-chapter-menu-open article", function(b) {
            b.preventDefault(), a()
        }), jQuery(document).on("click", ".scroll-nav__link", function() {
            a()
        })
    });
//# sourceMappingURL=ai-core.min.js.map

/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////             /////    /////
/////             /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
         /////    /////
         /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////

/**
 * ScrollReveal
 * ------------
 * Version : 3.3.2
 * Website : scrollrevealjs.org
 * Repo    : github.com/jlmakes/scrollreveal.js
 * Author  : Julian Lloyd (@jlmakes)
 */

;(function () {
  'use strict'

  var sr
  var _requestAnimationFrame

  function ScrollReveal (config) {
    // Support instantiation without the `new` keyword.
    if (typeof this === 'undefined' || Object.getPrototypeOf(this) !== ScrollReveal.prototype) {
      return new ScrollReveal(config)
    }

    sr = this // Save reference to instance.
    sr.version = '3.3.2'
    sr.tools = new Tools() // *required utilities

    if (sr.isSupported()) {
      sr.tools.extend(sr.defaults, config || {})

      sr.defaults.container = _resolveContainer(sr.defaults)

      sr.store = {
        elements: {},
        containers: []
      }

      sr.sequences = {}
      sr.history = []
      sr.uid = 0
      sr.initialized = false
    } else if (typeof console !== 'undefined' && console !== null) {
      // Note: IE9 only supports console if devtools are open.
      console.log('ScrollReveal is not supported in this browser.')
    }

    return sr
  }

  /**
   * Configuration
   * -------------
   * This object signature can be passed directly to the ScrollReveal constructor,
   * or as the second argument of the `reveal()` method.
   */

  ScrollReveal.prototype.defaults = {
    // 'bottom', 'left', 'top', 'right'
    origin: 'bottom',

    // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
    distance: '20px',

    // Time in milliseconds.
    duration: 500,
    delay: 0,

    // Starting angles in degrees, will transition from these values to 0 in all axes.
    rotate: { x: 0, y: 0, z: 0 },

    // Starting opacity value, before transitioning to the computed opacity.
    opacity: 0,

    // Starting scale value, will transition from this value to 1
    scale: 0.9,

    // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',

    // `<html>` is the default reveal container. You can pass either:
    // DOM Node, e.g. document.querySelector('.fooContainer')
    // Selector, e.g. '.fooContainer'
    container: window.document.documentElement,

    // true/false to control reveal animations on mobile.
    mobile: true,

    // true:  reveals occur every time elements become visible
    // false: reveals occur once as elements become visible
    reset: false,

    // 'always' — delay for all reveal animations
    // 'once'   — delay only the first time reveals occur
    // 'onload' - delay only for animations triggered by first load
    useDelay: 'always',

    // Change when an element is considered in the viewport. The default value
    // of 0.20 means 20% of an element must be visible for its reveal to occur.
    viewFactor: 0.2,

    // Pixel values that alter the container boundaries.
    // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
    // --
    // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },

    // Callbacks that fire for each triggered element reveal, and reset.
    beforeReveal: function (domEl) {},
    beforeReset: function (domEl) {},

    // Callbacks that fire for each completed element reveal, and reset.
    afterReveal: function (domEl) {},
    afterReset: function (domEl) {}
  }

  /**
   * Check if client supports CSS Transform and CSS Transition.
   * @return {boolean}
   */
  ScrollReveal.prototype.isSupported = function () {
    var style = document.documentElement.style
    return 'WebkitTransition' in style && 'WebkitTransform' in style ||
      'transition' in style && 'transform' in style
  }

  /**
   * Creates a reveal set, a group of elements that will animate when they
   * become visible. If [interval] is provided, a new sequence is created
   * that will ensure elements reveal in the order they appear in the DOM.
   *
   * @param {Node|NodeList|string} [target]   The node, node list or selector to use for animation.
   * @param {Object}               [config]   Override the defaults for this reveal set.
   * @param {number}               [interval] Time between sequenced element animations (milliseconds).
   * @param {boolean}              [sync]     Used internally when updating reveals for async content.
   *
   * @return {Object} The current ScrollReveal instance.
   */
  ScrollReveal.prototype.reveal = function (target, config, interval, sync) {
    var container
    var elements
    var elem
    var elemId
    var sequence
    var sequenceId

    // No custom configuration was passed, but a sequence interval instead.
    // let’s shuffle things around to make sure everything works.
    if (config !== undefined && typeof config === 'number') {
      interval = config
      config = {}
    } else if (config === undefined || config === null) {
      config = {}
    }

    container = _resolveContainer(config)
    elements = _getRevealElements(target, container)

    if (!elements.length) {
      console.log('ScrollReveal: reveal on "' + target + '" failed, no elements found.')
      return sr
    }

    // Prepare a new sequence if an interval is passed.
    if (interval && typeof interval === 'number') {
      sequenceId = _nextUid()

      sequence = sr.sequences[sequenceId] = {
        id: sequenceId,
        interval: interval,
        elemIds: [],
        active: false
      }
    }

    // Begin main loop to configure ScrollReveal elements.
    for (var i = 0; i < elements.length; i++) {
      // Check if the element has already been configured and grab it from the store.
      elemId = elements[i].getAttribute('data-sr-id')
      if (elemId) {
        elem = sr.store.elements[elemId]
      } else {
        // Otherwise, let’s do some basic setup.
        elem = {
          id: _nextUid(),
          domEl: elements[i],
          seen: false,
          revealing: false
        }
        elem.domEl.setAttribute('data-sr-id', elem.id)
      }

      // Sequence only setup
      if (sequence) {
        elem.sequence = {
          id: sequence.id,
          index: sequence.elemIds.length
        }

        sequence.elemIds.push(elem.id)
      }

      // New or existing element, it’s time to update its configuration, styles,
      // and send the updates to our store.
      _configure(elem, config, container)
      _style(elem)
      _updateStore(elem)

      // We need to make sure elements are set to visibility: visible, even when
      // on mobile and `config.mobile === false`, or if unsupported.
      if (sr.tools.isMobile() && !elem.config.mobile || !sr.isSupported()) {
        elem.domEl.setAttribute('style', elem.styles.inline)
        elem.disabled = true
      } else if (!elem.revealing) {
        // Otherwise, proceed normally.
        elem.domEl.setAttribute('style',
          elem.styles.inline +
          elem.styles.transform.initial
        )
      }
    }

    // Each `reveal()` is recorded so that when calling `sync()` while working
    // with asynchronously loaded content, it can re-trace your steps but with
    // all your new elements now in the DOM.

    // Since `reveal()` is called internally by `sync()`, we don’t want to
    // record or intiialize each reveal during syncing.
    if (!sync && sr.isSupported()) {
      _record(target, config, interval)

      // We push initialization to the event queue using setTimeout, so that we can
      // give ScrollReveal room to process all reveal calls before putting things into motion.
      // --
      // Philip Roberts - What the heck is the event loop anyway? (JSConf EU 2014)
      // https://www.youtube.com/watch?v=8aGhZQkoFbQ
      if (sr.initTimeout) {
        window.clearTimeout(sr.initTimeout)
      }
      sr.initTimeout = window.setTimeout(_init, 0)
    }

    return sr
  }

  /**
   * Re-runs `reveal()` for each record stored in history, effectively capturing
   * any content loaded asynchronously that matches existing reveal set targets.
   * @return {Object} The current ScrollReveal instance.
   */
  ScrollReveal.prototype.sync = function () {
    if (sr.history.length && sr.isSupported()) {
      for (var i = 0; i < sr.history.length; i++) {
        var record = sr.history[i]
        sr.reveal(record.target, record.config, record.interval, true)
      }
      _init()
    } else {
      console.log('ScrollReveal: sync failed, no reveals found.')
    }
    return sr
  }

  /**
   * Private Methods
   * ---------------
   */

  function _resolveContainer (config) {
    if (config && config.container) {
      if (typeof config.container === 'string') {
        return window.document.documentElement.querySelector(config.container)
      } else if (sr.tools.isNode(config.container)) {
        return config.container
      } else {
        console.log('ScrollReveal: invalid container "' + config.container + '" provided.')
        console.log('ScrollReveal: falling back to default container.')
      }
    }
    return sr.defaults.container
  }

  /**
   * check to see if a node or node list was passed in as the target,
   * otherwise query the container using target as a selector.
   *
   * @param {Node|NodeList|string} [target]    client input for reveal target.
   * @param {Node}                 [container] parent element for selector queries.
   *
   * @return {array} elements to be revealed.
   */
  function _getRevealElements (target, container) {
    if (typeof target === 'string') {
      return Array.prototype.slice.call(container.querySelectorAll(target))
    } else if (sr.tools.isNode(target)) {
      return [target]
    } else if (sr.tools.isNodeList(target)) {
      return Array.prototype.slice.call(target)
    }
    return []
  }

  /**
   * A consistent way of creating unique IDs.
   * @returns {number}
   */
  function _nextUid () {
    return ++sr.uid
  }

  function _configure (elem, config, container) {
    // If a container was passed as a part of the config object,
    // let’s overwrite it with the resolved container passed in.
    if (config.container) config.container = container
    // If the element hasn’t already been configured, let’s use a clone of the
    // defaults extended by the configuration passed as the second argument.
    if (!elem.config) {
      elem.config = sr.tools.extendClone(sr.defaults, config)
    } else {
      // Otherwise, let’s use a clone of the existing element configuration extended
      // by the configuration passed as the second argument.
      elem.config = sr.tools.extendClone(elem.config, config)
    }

    // Infer CSS Transform axis from origin string.
    if (elem.config.origin === 'top' || elem.config.origin === 'bottom') {
      elem.config.axis = 'Y'
    } else {
      elem.config.axis = 'X'
    }
  }

  function _style (elem) {
    var computed = window.getComputedStyle(elem.domEl)

    if (!elem.styles) {
      elem.styles = {
        transition: {},
        transform: {},
        computed: {}
      }

      // Capture any existing inline styles, and add our visibility override.
      // --
      // See section 4.2. in the Documentation:
      // https://github.com/jlmakes/scrollreveal.js#42-improve-user-experience
      elem.styles.inline = elem.domEl.getAttribute('style') || ''
      elem.styles.inline += '; visibility: visible; '

      // grab the elements existing opacity.
      elem.styles.computed.opacity = computed.opacity

      // grab the elements existing transitions.
      if (!computed.transition || computed.transition === 'all 0s ease 0s') {
        elem.styles.computed.transition = ''
      } else {
        elem.styles.computed.transition = computed.transition + ', '
      }
    }

    // Create transition styles
    elem.styles.transition.instant = _generateTransition(elem, 0)
    elem.styles.transition.delayed = _generateTransition(elem, elem.config.delay)

    // Generate transform styles, first with the webkit prefix.
    elem.styles.transform.initial = ' -webkit-transform:'
    elem.styles.transform.target = ' -webkit-transform:'
    _generateTransform(elem)

    // And again without any prefix.
    elem.styles.transform.initial += 'transform:'
    elem.styles.transform.target += 'transform:'
    _generateTransform(elem)
  }

  function _generateTransition (elem, delay) {
    var config = elem.config

    return '-webkit-transition: ' + elem.styles.computed.transition +
      '-webkit-transform ' + config.duration / 1000 + 's ' +
      config.easing + ' ' +
      delay / 1000 + 's, opacity ' +
      config.duration / 1000 + 's ' +
      config.easing + ' ' +
      delay / 1000 + 's; ' +

      'transition: ' + elem.styles.computed.transition +
      'transform ' + config.duration / 1000 + 's ' +
      config.easing + ' ' +
      delay / 1000 + 's, opacity ' +
      config.duration / 1000 + 's ' +
      config.easing + ' ' +
      delay / 1000 + 's; '
  }

  function _generateTransform (elem) {
    var config = elem.config
    var cssDistance
    var transform = elem.styles.transform

    // Let’s make sure our our pixel distances are negative for top and left.
    // e.g. origin = 'top' and distance = '25px' starts at `top: -25px` in CSS.
    if (config.origin === 'top' || config.origin === 'left') {
      cssDistance = /^-/.test(config.distance)
        ? config.distance.substr(1)
        : '-' + config.distance
    } else {
      cssDistance = config.distance
    }

    if (parseInt(config.distance)) {
      transform.initial += ' translate' + config.axis + '(' + cssDistance + ')'
      transform.target += ' translate' + config.axis + '(0)'
    }
    if (config.scale) {
      transform.initial += ' scale(' + config.scale + ')'
      transform.target += ' scale(1)'
    }
    if (config.rotate.x) {
      transform.initial += ' rotateX(' + config.rotate.x + 'deg)'
      transform.target += ' rotateX(0)'
    }
    if (config.rotate.y) {
      transform.initial += ' rotateY(' + config.rotate.y + 'deg)'
      transform.target += ' rotateY(0)'
    }
    if (config.rotate.z) {
      transform.initial += ' rotateZ(' + config.rotate.z + 'deg)'
      transform.target += ' rotateZ(0)'
    }
    transform.initial += '; opacity: ' + config.opacity + ';'
    transform.target += '; opacity: ' + elem.styles.computed.opacity + ';'
  }

  function _updateStore (elem) {
    var container = elem.config.container

    // If this element’s container isn’t already in the store, let’s add it.
    if (container && sr.store.containers.indexOf(container) === -1) {
      sr.store.containers.push(elem.config.container)
    }

    // Update the element stored with our new element.
    sr.store.elements[elem.id] = elem
  }

  function _record (target, config, interval) {
    // Save the `reveal()` arguments that triggered this `_record()` call, so we
    // can re-trace our steps when calling the `sync()` method.
    var record = {
      target: target,
      config: config,
      interval: interval
    }
    sr.history.push(record)
  }

  function _init () {
    if (sr.isSupported()) {
      // Initial animate call triggers valid reveal animations on first load.
      // Subsequent animate calls are made inside the event handler.
      _animate()

      // Then we loop through all container nodes in the store and bind event
      // listeners to each.
      for (var i = 0; i < sr.store.containers.length; i++) {
        sr.store.containers[i].addEventListener('scroll', _handler)
        sr.store.containers[i].addEventListener('resize', _handler)
      }

      // Let’s also do a one-time binding of window event listeners.
      if (!sr.initialized) {
        window.addEventListener('scroll', _handler)
        window.addEventListener('resize', _handler)
        sr.initialized = true
      }
    }
    return sr
  }

  function _handler () {
    _requestAnimationFrame(_animate)
  }

  function _setActiveSequences () {
    var active
    var elem
    var elemId
    var sequence

    // Loop through all sequences
    sr.tools.forOwn(sr.sequences, function (sequenceId) {
      sequence = sr.sequences[sequenceId]
      active = false

      // For each sequenced elemenet, let’s check visibility and if
      // any are visible, set it’s sequence to active.
      for (var i = 0; i < sequence.elemIds.length; i++) {
        elemId = sequence.elemIds[i]
        elem = sr.store.elements[elemId]
        if (_isElemVisible(elem) && !active) {
          active = true
        }
      }

      sequence.active = active
    })
  }

  function _animate () {
    var delayed
    var elem

    _setActiveSequences()

    // Loop through all elements in the store
    sr.tools.forOwn(sr.store.elements, function (elemId) {
      elem = sr.store.elements[elemId]
      delayed = _shouldUseDelay(elem)

      // Let’s see if we should revealand if so,
      // trigger the `beforeReveal` callback and
      // determine whether or not to use delay.
      if (_shouldReveal(elem)) {
        elem.config.beforeReveal(elem.domEl)
        if (delayed) {
          elem.domEl.setAttribute('style',
            elem.styles.inline +
            elem.styles.transform.target +
            elem.styles.transition.delayed
          )
        } else {
          elem.domEl.setAttribute('style',
            elem.styles.inline +
            elem.styles.transform.target +
            elem.styles.transition.instant
          )
        }

        // Let’s queue the `afterReveal` callback
        // and mark the element as seen and revealing.
        _queueCallback('reveal', elem, delayed)
        elem.revealing = true
        elem.seen = true

        if (elem.sequence) {
          _queueNextInSequence(elem, delayed)
        }
      } else if (_shouldReset(elem)) {
        //Otherwise reset our element and
        // trigger the `beforeReset` callback.
        elem.config.beforeReset(elem.domEl)
        elem.domEl.setAttribute('style',
          elem.styles.inline +
          elem.styles.transform.initial +
          elem.styles.transition.instant
        )
        // And queue the `afterReset` callback.
        _queueCallback('reset', elem)
        elem.revealing = false
      }
    })
  }

  function _queueNextInSequence (elem, delayed) {
    var elapsed = 0
    var delay = 0
    var sequence = sr.sequences[elem.sequence.id]

    // We’re processing a sequenced element, so let's block other elements in this sequence.
    sequence.blocked = true

    // Since we’re triggering animations a part of a sequence after animations on first load,
    // we need to check for that condition and explicitly add the delay to our timer.
    if (delayed && elem.config.useDelay === 'onload') {
      delay = elem.config.delay
    }

    // If a sequence timer is already running, capture the elapsed time and clear it.
    if (elem.sequence.timer) {
      elapsed = Math.abs(elem.sequence.timer.started - new Date())
      window.clearTimeout(elem.sequence.timer)
    }

    // Start a new timer.
    elem.sequence.timer = { started: new Date() }
    elem.sequence.timer.clock = window.setTimeout(function () {
      // Sequence interval has passed, so unblock the sequence and re-run the handler.
      sequence.blocked = false
      elem.sequence.timer = null
      _handler()
    }, Math.abs(sequence.interval) + delay - elapsed)
  }

  function _queueCallback (type, elem, delayed) {
    var elapsed = 0
    var duration = 0
    var callback = 'after'

    // Check which callback we’re working with.
    switch (type) {
      case 'reveal':
        duration = elem.config.duration
        if (delayed) {
          duration += elem.config.delay
        }
        callback += 'Reveal'
        break

      case 'reset':
        duration = elem.config.duration
        callback += 'Reset'
        break
    }

    // If a timer is already running, capture the elapsed time and clear it.
    if (elem.timer) {
      elapsed = Math.abs(elem.timer.started - new Date())
      window.clearTimeout(elem.timer.clock)
    }

    // Start a new timer.
    elem.timer = { started: new Date() }
    elem.timer.clock = window.setTimeout(function () {
      // The timer completed, so let’s fire the callback and null the timer.
      elem.config[callback](elem.domEl)
      elem.timer = null
    }, duration - elapsed)
  }

  function _shouldReveal (elem) {
    if (elem.sequence) {
      var sequence = sr.sequences[elem.sequence.id]
      return sequence.active &&
        !sequence.blocked &&
        !elem.revealing &&
        !elem.disabled
    }
    return _isElemVisible(elem) &&
      !elem.revealing &&
      !elem.disabled
  }

  function _shouldUseDelay (elem) {
    var config = elem.config.useDelay
    return config === 'always' ||
      (config === 'onload' && !sr.initialized) ||
      (config === 'once' && !elem.seen)
  }

  function _shouldReset (elem) {
    if (elem.sequence) {
      var sequence = sr.sequences[elem.sequence.id]
      return !sequence.active &&
        elem.config.reset &&
        elem.revealing &&
        !elem.disabled
    }
    return !_isElemVisible(elem) &&
      elem.config.reset &&
      elem.revealing &&
      !elem.disabled
  }

  function _getContainer (container) {
    return {
      width: container.clientWidth,
      height: container.clientHeight
    }
  }

  function _getScrolled (container) {
    // Return the container scroll values, plus the its offset.
    if (container && container !== window.document.documentElement) {
      var offset = _getOffset(container)
      return {
        x: container.scrollLeft + offset.left,
        y: container.scrollTop + offset.top
      }
    } else {
      // Otherwise, default to the window object’s scroll values.
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      }
    }
  }

  function _getOffset (domEl) {
    var offsetTop = 0
    var offsetLeft = 0

      // Grab the element’s dimensions.
    var offsetHeight = domEl.offsetHeight
    var offsetWidth = domEl.offsetWidth

    // Now calculate the distance between the element and its parent, then
    // again for the parent to its parent, and again etc... until we have the
    // total distance of the element to the document’s top and left origin.
    do {
      if (!isNaN(domEl.offsetTop)) {
        offsetTop += domEl.offsetTop
      }
      if (!isNaN(domEl.offsetLeft)) {
        offsetLeft += domEl.offsetLeft
      }
      domEl = domEl.offsetParent
    } while (domEl)

    return {
      top: offsetTop,
      left: offsetLeft,
      height: offsetHeight,
      width: offsetWidth
    }
  }

  function _isElemVisible (elem) {
    var offset = _getOffset(elem.domEl)
    var container = _getContainer(elem.config.container)
    var scrolled = _getScrolled(elem.config.container)
    var vF = elem.config.viewFactor

      // Define the element geometry.
    var elemHeight = offset.height
    var elemWidth = offset.width
    var elemTop = offset.top
    var elemLeft = offset.left
    var elemBottom = elemTop + elemHeight
    var elemRight = elemLeft + elemWidth

    return confirmBounds() || isPositionFixed()

    function confirmBounds () {
      // Define the element’s functional boundaries using its view factor.
      var top = elemTop + elemHeight * vF
      var left = elemLeft + elemWidth * vF
      var bottom = elemBottom - elemHeight * vF
      var right = elemRight - elemWidth * vF

      // Define the container functional boundaries using its view offset.
      var viewTop = scrolled.y + elem.config.viewOffset.top
      var viewLeft = scrolled.x + elem.config.viewOffset.left
      var viewBottom = scrolled.y - elem.config.viewOffset.bottom + container.height
      var viewRight = scrolled.x - elem.config.viewOffset.right + container.width

      return top < viewBottom &&
        bottom > viewTop &&
        left > viewLeft &&
        right < viewRight
    }

    function isPositionFixed () {
      return (window.getComputedStyle(elem.domEl).position === 'fixed')
    }
  }

  /**
   * Utilities
   * ---------
   */

  function Tools () {}

  Tools.prototype.isObject = function (object) {
    return object !== null && typeof object === 'object' && object.constructor === Object
  }

  Tools.prototype.isNode = function (object) {
    return typeof window.Node === 'object'
      ? object instanceof window.Node
      : object && typeof object === 'object' &&
        typeof object.nodeType === 'number' &&
        typeof object.nodeName === 'string'
  }

  Tools.prototype.isNodeList = function (object) {
    var prototypeToString = Object.prototype.toString.call(object)
    var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/

    return typeof window.NodeList === 'object'
      ? object instanceof window.NodeList
      : object && typeof object === 'object' &&
        regex.test(prototypeToString) &&
        typeof object.length === 'number' &&
        (object.length === 0 || this.isNode(object[0]))
  }

  Tools.prototype.forOwn = function (object, callback) {
    if (!this.isObject(object)) {
      throw new TypeError('Expected "object", but received "' + typeof object + '".')
    } else {
      for (var property in object) {
        if (object.hasOwnProperty(property)) {
          callback(property)
        }
      }
    }
  }

  Tools.prototype.extend = function (target, source) {
    this.forOwn(source, function (property) {
      if (this.isObject(source[property])) {
        if (!target[property] || !this.isObject(target[property])) {
          target[property] = {}
        }
        this.extend(target[property], source[property])
      } else {
        target[property] = source[property]
      }
    }.bind(this))
    return target
  }

  Tools.prototype.extendClone = function (target, source) {
    return this.extend(this.extend({}, target), source)
  }

  Tools.prototype.isMobile = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }

  /**
   * Polyfills
   * --------
   */

  _requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }

  /**
   * Module Wrapper
   * --------------
   */
  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function () {
      return ScrollReveal
    })
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollReveal
  } else {
    window.ScrollReveal = ScrollReveal
  }
}())
