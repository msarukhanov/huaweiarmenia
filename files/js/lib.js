/**
 * Created by Mark Sarukhanov on 11.07.2016.
 */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function (a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                return -1
            }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)return d;
            if (1 !== (k = b.nodeType) && 9 !== k)return [];
            if (p && !e) {
                if (f = _.exec(a))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return I.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return I.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }

        c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                m()
            })), c.attributes = ib(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)return kb(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0
                    }
                }), contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: nb(function () {
                    return [0]
                }), last: nb(function (a, b) {
                    return [b - 1]
                }), eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = lb(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = mb(b);
        function pb() {
        }

        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                return a === b
            }, h, !0), l = rb(function (a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [rb(sb(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                }
                m.push(c)
            }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }

        return h = fb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function (a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b))return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b))return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
            }));
            for (b = 0; c > b; b++)n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
                if (e && n(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + Math.random()
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)return c;
                    if (c = M.get(f, d), void 0 !== c)return c;
                    if (c = P(f, d, void 0), void 0 !== c)return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]);
            if (b)if (c)for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                while (j--)f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                j = 0;
                while (e = f[j++])fb.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }

    var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {letterSpacing: "0", fontWeight: "400"}, Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a)return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--)if (b = Eb[e] + c, b in a)return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Jb(this, !0)
        }, hide: function () {
            return Jb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }

    n.Tween = Kb, Kb.prototype = {
        constructor: Kb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function Sb() {
        return setTimeout(function () {
            Lb = void 0
        }), Lb = n.now()
    }

    function Tb(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], Nb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d])continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m))"inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m)n.style(a, b, m[b])
            });
            for (d in m)g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts))return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xb, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function (a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = l.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function sc(a, b, c, d) {
        var e = {}, f = a === oc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c)f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = ic.exec(e))f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? e : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)return v;
            i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;

    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b))n.each(b, function (b, e) {
            c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Bc(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(yc, "\r\n")}
                }) : {name: b.name, value: c.replace(yc, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {0: 200, 1223: 204}, Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function () {
        for (var a in Dc)Dc[a]()
    }), k.cors = !!Fc && "withCredentials" in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Fc && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Gc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Ic = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Ic)return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;

    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Jc;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
                return a || Jc
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Lc = a.jQuery, Mc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (T, P, u) {
    'use strict';
    function O(a) {
        return function () {
            var b = arguments[0], d;
            d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.3/" + (a ? a + "/" : "") + b;
            for (b = 1; b < arguments.length; b++) {
                d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
                var c = encodeURIComponent, e;
                e = arguments[b];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                d += c(e)
            }
            return Error(d)
        }
    }

    function za(a) {
        if (null == a || Ya(a))return !1;
        if (M(a) || y(a) || H && a instanceof H)return !0;
        var b = "length" in Object(a) && a.length;
        return R(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item)
    }

    function q(a, b, d) {
        var c, e;
        if (a)if (D(a))for (c in a)"prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a); else if (M(a) || za(a)) {
            var f = "object" !== typeof a;
            c = 0;
            for (e = a.length; c < e; c++)(f || c in a) && b.call(d, a[c], c, a)
        } else if (a.forEach && a.forEach !== q)a.forEach(b, d, a); else if (oc(a))for (c in a)b.call(d, a[c], c, a); else if ("function" === typeof a.hasOwnProperty)for (c in a)a.hasOwnProperty(c) &&
        b.call(d, a[c], c, a); else for (c in a)va.call(a, c) && b.call(d, a[c], c, a);
        return a
    }

    function pc(a, b, d) {
        for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++)b.call(d, a[c[e]], c[e]);
        return c
    }

    function qc(a) {
        return function (b, d) {
            a(d, b)
        }
    }

    function Wd() {
        return ++qb
    }

    function Ob(a, b, d) {
        for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g = b[e];
            if (J(g) || D(g))for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                var m = h[k], n = g[m];
                d && J(n) ? fa(n) ? a[m] = new Date(n.valueOf()) : Za(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) :
                    Pb(n) ? a[m] = n.clone() : (J(a[m]) || (a[m] = M(n) ? [] : {}), Ob(a[m], [n], !0)) : a[m] = n
            }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a
    }

    function S(a) {
        return Ob(a, Aa.call(arguments, 1), !1)
    }

    function Xd(a) {
        return Ob(a, Aa.call(arguments, 1), !0)
    }

    function Y(a) {
        return parseInt(a, 10)
    }

    function Qb(a, b) {
        return S(Object.create(a), b)
    }

    function E() {
    }

    function $a(a) {
        return a
    }

    function da(a) {
        return function () {
            return a
        }
    }

    function rc(a) {
        return D(a.toString) && a.toString !== ka
    }

    function z(a) {
        return "undefined" === typeof a
    }

    function A(a) {
        return "undefined" !== typeof a
    }

    function J(a) {
        return null !== a && "object" === typeof a
    }

    function oc(a) {
        return null !== a && "object" === typeof a && !sc(a)
    }

    function y(a) {
        return "string" === typeof a
    }

    function R(a) {
        return "number" === typeof a
    }

    function fa(a) {
        return "[object Date]" === ka.call(a)
    }

    function D(a) {
        return "function" === typeof a
    }

    function Za(a) {
        return "[object RegExp]" === ka.call(a)
    }

    function Ya(a) {
        return a && a.window === a
    }

    function ab(a) {
        return a && a.$evalAsync && a.$watch
    }

    function Oa(a) {
        return "boolean" === typeof a
    }

    function Yd(a) {
        return a && R(a.length) &&
            Zd.test(ka.call(a))
    }

    function Pb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function $d(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++)b[a[d]] = !0;
        return b
    }

    function oa(a) {
        return N(a.nodeName || a[0] && a[0].nodeName)
    }

    function bb(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d
    }

    function pa(a, b) {
        function d(a, b) {
            var d = b.$$hashKey, e;
            if (M(a)) {
                e = 0;
                for (var f = a.length; e < f; e++)b.push(c(a[e]))
            } else if (oc(a))for (e in a)b[e] = c(a[e]); else if (a && "function" === typeof a.hasOwnProperty)for (e in a)a.hasOwnProperty(e) &&
            (b[e] = c(a[e])); else for (e in a)va.call(a, e) && (b[e] = c(a[e]));
            d ? b.$$hashKey = d : delete b.$$hashKey;
            return b
        }

        function c(a) {
            if (!J(a))return a;
            var b = f.indexOf(a);
            if (-1 !== b)return g[b];
            if (Ya(a) || ab(a))throw Ba("cpws");
            var b = !1, c = e(a);
            c === u && (c = M(a) ? [] : Object.create(sc(a)), b = !0);
            f.push(a);
            g.push(c);
            return b ? d(a, c) : c
        }

        function e(a) {
            switch (ka.call(a)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new a.constructor(c(a.buffer));
                case "[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        (new Uint8Array(b)).set(new Uint8Array(a));
                        return b
                    }
                    return a.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new a.constructor(a.valueOf());
                case "[object RegExp]":
                    return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;
                case "[object Blob]":
                    return new a.constructor([a], {type: a.type})
            }
            if (D(a.cloneNode))return a.cloneNode(!0)
        }

        var f = [],
            g = [];
        if (b) {
            if (Yd(b) || "[object ArrayBuffer]" === ka.call(b))throw Ba("cpta");
            if (a === b)throw Ba("cpi");
            M(b) ? b.length = 0 : q(b, function (a, c) {
                "$$hashKey" !== c && delete b[c]
            });
            f.push(a);
            g.push(b);
            return d(a, b)
        }
        return c(a)
    }

    function ia(a, b) {
        if (M(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++)b[d] = a[d]
        } else if (J(a))for (d in b = b || {}, a)if ("$" !== d.charAt(0) || "$" !== d.charAt(1))b[d] = a[d];
        return b || a
    }

    function na(a, b) {
        if (a === b)return !0;
        if (null === a || null === b)return !1;
        if (a !== a && b !== b)return !0;
        var d = typeof a, c;
        if (d == typeof b &&
            "object" == d)if (M(a)) {
            if (!M(b))return !1;
            if ((d = a.length) == b.length) {
                for (c = 0; c < d; c++)if (!na(a[c], b[c]))return !1;
                return !0
            }
        } else {
            if (fa(a))return fa(b) ? na(a.getTime(), b.getTime()) : !1;
            if (Za(a))return Za(b) ? a.toString() == b.toString() : !1;
            if (ab(a) || ab(b) || Ya(a) || Ya(b) || M(b) || fa(b) || Za(b))return !1;
            d = V();
            for (c in a)if ("$" !== c.charAt(0) && !D(a[c])) {
                if (!na(a[c], b[c]))return !1;
                d[c] = !0
            }
            for (c in b)if (!(c in d) && "$" !== c.charAt(0) && A(b[c]) && !D(b[c]))return !1;
            return !0
        }
        return !1
    }

    function cb(a, b, d) {
        return a.concat(Aa.call(b,
            d))
    }

    function tc(a, b) {
        var d = 2 < arguments.length ? Aa.call(arguments, 2) : [];
        return !D(b) || b instanceof RegExp ? b : d.length ? function () {
            return arguments.length ? b.apply(a, cb(d, arguments, 0)) : b.apply(a, d)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function ae(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = u : Ya(b) ? d = "$WINDOW" : b && P === b ? d = "$DOCUMENT" : ab(b) && (d = "$SCOPE");
        return d
    }

    function db(a, b) {
        if (z(a))return u;
        R(b) || (b = b ? 2 : null);
        return JSON.stringify(a, ae, b)
    }

    function uc(a) {
        return y(a) ?
            JSON.parse(a) : a
    }

    function vc(a, b) {
        a = a.replace(be, "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
        return isNaN(d) ? b : d
    }

    function Rb(a, b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        b = vc(b, c);
        d *= b - c;
        a = new Date(a.getTime());
        a.setMinutes(a.getMinutes() + d);
        return a
    }

    function wa(a) {
        a = H(a).clone();
        try {
            a.empty()
        } catch (b) {
        }
        var d = H("<div>").append(a).html();
        try {
            return a[0].nodeType === Pa ? N(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + N(b)
            })
        } catch (c) {
            return N(d)
        }
    }

    function wc(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }

    function xc(a) {
        var b = {};
        q((a || "").split("&"), function (a) {
            var c, e, f;
            a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = wc(e), A(e) && (f = A(f) ? wc(f) : !0, va.call(b, e) ? M(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
        });
        return b
    }

    function Sb(a) {
        var b = [];
        q(a, function (a, c) {
            M(a) ? q(a, function (a) {
                b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)))
            }) : b.push(ja(c, !0) + (!0 === a ? "" : "=" + ja(a, !0)))
        });
        return b.length ? b.join("&") : ""
    }

    function rb(a) {
        return ja(a, !0).replace(/%26/gi, "&").replace(/%3D/gi,
            "=").replace(/%2B/gi, "+")
    }

    function ja(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ce(a, b) {
        var d, c, e = Qa.length;
        for (c = 0; c < e; ++c)if (d = Qa[c] + b, y(d = a.getAttribute(d)))return d;
        return null
    }

    function de(a, b) {
        var d, c, e = {};
        q(Qa, function (b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
        });
        q(Qa, function (b) {
            b += "app";
            var e;
            !d && (e = a.querySelector("[" + b.replace(":",
                    "\\:") + "]")) && (d = e, c = e.getAttribute(b))
        });
        d && (e.strictDi = null !== ce(d, "strict-di"), b(d, c ? [c] : [], e))
    }

    function yc(a, b, d) {
        J(d) || (d = {});
        d = S({strictDi: !1}, d);
        var c = function () {
            a = H(a);
            if (a.injector()) {
                var c = a[0] === P ? "document" : wa(a);
                throw Ba("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            b = b || [];
            b.unshift(["$provide", function (b) {
                b.value("$rootElement", a)
            }]);
            d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            b.unshift("ng");
            c = eb(b, d.strictDi);
            c.invoke(["$rootScope",
                "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                    a.$apply(function () {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }]);
            return c
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        T && e.test(T.name) && (d.debugInfoEnabled = !0, T.name = T.name.replace(e, ""));
        if (T && !f.test(T.name))return c();
        T.name = T.name.replace(f, "");
        ea.resumeBootstrap = function (a) {
            q(a, function (a) {
                b.push(a)
            });
            return c()
        };
        D(ea.resumeDeferredBootstrap) && ea.resumeDeferredBootstrap()
    }

    function ee() {
        T.name = "NG_ENABLE_DEBUG_INFO!" + T.name;
        T.location.reload()
    }

    function fe(a) {
        a = ea.element(a).injector();
        if (!a)throw Ba("test");
        return a.get("$$testability")
    }

    function zc(a, b) {
        b = b || "_";
        return a.replace(ge, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function he() {
        var a;
        if (!Ac) {
            var b = sb();
            ($ = z(b) ? T.jQuery : b ? T[b] : u) && $.fn.on ? (H = $, S($.fn, {
                scope: Ra.scope,
                isolateScope: Ra.isolateScope,
                controller: Ra.controller,
                injector: Ra.injector,
                inheritedData: Ra.inheritedData
            }), a = $.cleanData, $.cleanData = function (b) {
                for (var c, e = 0, f; null != (f = b[e]); e++)(c = $._data(f, "events")) && c.$destroy &&
                $(f).triggerHandler("$destroy");
                a(b)
            }) : H = U;
            ea.element = H;
            Ac = !0
        }
    }

    function tb(a, b, d) {
        if (!a)throw Ba("areq", b || "?", d || "required");
        return a
    }

    function Sa(a, b, d) {
        d && M(a) && (a = a[a.length - 1]);
        tb(D(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
        return a
    }

    function Ta(a, b) {
        if ("hasOwnProperty" === a)throw Ba("badname", b);
    }

    function Bc(a, b, d) {
        if (!b)return a;
        b = b.split(".");
        for (var c, e = a, f = b.length, g = 0; g < f; g++)c = b[g], a && (a = (e = a)[c]);
        return !d && D(a) ? tc(e, a) : a
    }

    function ub(a) {
        for (var b =
            a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++)if (c || a[e] !== b)c || (c = H(Aa.call(a, 0, e))), c.push(b);
        return c || a
    }

    function V() {
        return Object.create(null)
    }

    function ie(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var d = O("$injector"), c = O("ng");
        a = b(a, "angular", Object);
        a.$$minErr = a.$$minErr || O;
        return b(a, "module", function () {
            var a = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f)throw c("badname", "module");
                g && a.hasOwnProperty(f) && (a[f] = null);
                return b(a, f, function () {
                    function a(b, d, e, f) {
                        f || (f = c);
                        return function () {
                            f[e ||
                            "push"]([b, d, arguments]);
                            return L
                        }
                    }

                    function b(a, d) {
                        return function (b, e) {
                            e && D(e) && (e.$$moduleName = f);
                            c.push([a, d, arguments]);
                            return L
                        }
                    }

                    if (!g)throw d("nomod", f);
                    var c = [], e = [], p = [], F = a("$injector", "invoke", "push", e), L = {
                        _invokeQueue: c,
                        _configBlocks: e,
                        _runBlocks: p,
                        requires: g,
                        name: f,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator"),
                        animation: b("$animateProvider",
                            "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        component: b("$compileProvider", "component"),
                        config: F,
                        run: function (a) {
                            p.push(a);
                            return this
                        }
                    };
                    h && F(h);
                    return L
                })
            }
        })
    }

    function je(a) {
        S(a, {
            bootstrap: yc,
            copy: pa,
            extend: S,
            merge: Xd,
            equals: na,
            element: H,
            forEach: q,
            injector: eb,
            noop: E,
            bind: tc,
            toJson: db,
            fromJson: uc,
            identity: $a,
            isUndefined: z,
            isDefined: A,
            isString: y,
            isFunction: D,
            isObject: J,
            isNumber: R,
            isElement: Pb,
            isArray: M,
            version: ke,
            isDate: fa,
            lowercase: N,
            uppercase: vb,
            callbacks: {counter: 0},
            getTestability: fe,
            $$minErr: O,
            $$csp: Ga,
            reloadWithDebugInfo: ee
        });
        Tb = ie(T);
        Tb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: le});
            a.provider("$compile", Cc).directive({
                a: me,
                input: Dc,
                textarea: Dc,
                form: ne,
                script: oe,
                select: pe,
                style: qe,
                option: re,
                ngBind: se,
                ngBindHtml: te,
                ngBindTemplate: ue,
                ngClass: ve,
                ngClassEven: we,
                ngClassOdd: xe,
                ngCloak: ye,
                ngController: ze,
                ngForm: Ae,
                ngHide: Be,
                ngIf: Ce,
                ngInclude: De,
                ngInit: Ee,
                ngNonBindable: Fe,
                ngPluralize: Ge,
                ngRepeat: He,
                ngShow: Ie,
                ngStyle: Je,
                ngSwitch: Ke,
                ngSwitchWhen: Le,
                ngSwitchDefault: Me,
                ngOptions: Ne,
                ngTransclude: Oe,
                ngModel: Pe,
                ngList: Qe,
                ngChange: Re,
                pattern: Ec,
                ngPattern: Ec,
                required: Fc,
                ngRequired: Fc,
                minlength: Gc,
                ngMinlength: Gc,
                maxlength: Hc,
                ngMaxlength: Hc,
                ngValue: Se,
                ngModelOptions: Te
            }).directive({ngInclude: Ue}).directive(wb).directive(Ic);
            a.provider({
                $anchorScroll: Ve,
                $animate: We,
                $animateCss: Xe,
                $$animateJs: Ye,
                $$animateQueue: Ze,
                $$AnimateRunner: $e,
                $$animateAsyncRun: af,
                $browser: bf,
                $cacheFactory: cf,
                $controller: df,
                $document: ef,
                $exceptionHandler: ff,
                $filter: Jc,
                $$forceReflow: gf,
                $interpolate: hf,
                $interval: jf,
                $http: kf,
                $httpParamSerializer: lf,
                $httpParamSerializerJQLike: mf,
                $httpBackend: nf,
                $xhrFactory: of,
                $location: pf,
                $log: qf,
                $parse: rf,
                $rootScope: sf,
                $q: tf,
                $$q: uf,
                $sce: vf,
                $sceDelegate: wf,
                $sniffer: xf,
                $templateCache: yf,
                $templateRequest: zf,
                $$testability: Af,
                $timeout: Bf,
                $window: Cf,
                $$rAF: Df,
                $$jqLite: Ef,
                $$HashMap: Ff,
                $$cookieReader: Gf
            })
        }])
    }

    function fb(a) {
        return a.replace(Hf, function (a, d, c, e) {
            return e ? c.toUpperCase() :
                c
        }).replace(If, "Moz$1")
    }

    function Kc(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a
    }

    function Lc(a, b) {
        var d, c, e = b.createDocumentFragment(), f = [];
        if (Ub.test(a)) {
            d = d || e.appendChild(b.createElement("div"));
            c = (Jf.exec(a) || ["", ""])[1].toLowerCase();
            c = ha[c] || ha._default;
            d.innerHTML = c[1] + a.replace(Kf, "<$1></$2>") + c[2];
            for (c = c[0]; c--;)d = d.lastChild;
            f = cb(f, d.childNodes);
            d = e.firstChild;
            d.textContent = ""
        } else f.push(b.createTextNode(a));
        e.textContent = "";
        e.innerHTML = "";
        q(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function Mc(a,
                b) {
        var d = a.parentNode;
        d && d.replaceChild(b, a);
        b.appendChild(a)
    }

    function U(a) {
        if (a instanceof U)return a;
        var b;
        y(a) && (a = W(a), b = !0);
        if (!(this instanceof U)) {
            if (b && "<" != a.charAt(0))throw Vb("nosel");
            return new U(a)
        }
        if (b) {
            b = P;
            var d;
            a = (d = Lf.exec(a)) ? [b.createElement(d[1])] : (d = Lc(a, b)) ? d.childNodes : []
        }
        Nc(this, a)
    }

    function Wb(a) {
        return a.cloneNode(!0)
    }

    function xb(a, b) {
        b || gb(a);
        if (a.querySelectorAll)for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++)gb(d[c])
    }

    function Oc(a, b, d, c) {
        if (A(c))throw Vb("offargs");
        var e = (c = yb(a)) && c.events, f = c && c.handle;
        if (f)if (b) {
            var g = function (b) {
                var c = e[b];
                A(d) && bb(c || [], d);
                A(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b])
            };
            q(b.split(" "), function (a) {
                g(a);
                zb[a] && g(zb[a])
            })
        } else for (b in e)"$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b]
    }

    function gb(a, b) {
        var d = a.ng339, c = d && hb[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Oc(a)), delete hb[d], a.ng339 = u))
    }

    function yb(a, b) {
        var d = a.ng339, d = d && hb[d];
        b && !d && (a.ng339 = d = ++Mf,
            d = hb[d] = {events: {}, data: {}, handle: u});
        return d
    }

    function Xb(a, b, d) {
        if (Kc(a)) {
            var c = A(d), e = !c && b && !J(b), f = !b;
            a = (a = yb(a, !e)) && a.data;
            if (c)a[b] = d; else {
                if (f)return a;
                if (e)return a && a[b];
                S(a, b)
            }
        }
    }

    function Ab(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }

    function Bb(a, b) {
        b && a.setAttribute && q(b.split(" "), function (b) {
            a.setAttribute("class", W((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + W(b) + " ", " ")))
        })
    }

    function Cb(a,
                b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(b.split(" "), function (a) {
                a = W(a);
                -1 === d.indexOf(" " + a + " ") && (d += a + " ")
            });
            a.setAttribute("class", W(d))
        }
    }

    function Nc(a, b) {
        if (b)if (b.nodeType)a[a.length++] = b; else {
            var d = b.length;
            if ("number" === typeof d && b.window !== b) {
                if (d)for (var c = 0; c < d; c++)a[a.length++] = b[c]
            } else a[a.length++] = b
        }
    }

    function Pc(a, b) {
        return Db(a, "$" + (b || "ngController") + "Controller")
    }

    function Db(a, b, d) {
        9 == a.nodeType && (a = a.documentElement);
        for (b =
                 M(b) ? b : [b]; a;) {
            for (var c = 0, e = b.length; c < e; c++)if (A(d = H.data(a, b[c])))return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function Qc(a) {
        for (xb(a, !0); a.firstChild;)a.removeChild(a.firstChild)
    }

    function Yb(a, b) {
        b || xb(a);
        var d = a.parentNode;
        d && d.removeChild(a)
    }

    function Nf(a, b) {
        b = b || T;
        if ("complete" === b.document.readyState)b.setTimeout(a); else H(b).on("load", a)
    }

    function Rc(a, b) {
        var d = Eb[b.toLowerCase()];
        return d && Sc[oa(a)] && d
    }

    function Of(a, b) {
        var d = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f = b[d || c.type], g = f ? f.length : 0;
            if (g) {
                if (z(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                var k = f.specialHandlerWrapper || Pf;
                1 < g && (f = ia(f));
                for (var l = 0; l < g; l++)c.isImmediatePropagationStopped() || k(a, c, f[l])
            }
        };
        d.elem = a;
        return d
    }

    function Pf(a, b, d) {
        d.call(a, b)
    }

    function Qf(a, b,
                d) {
        var c = b.relatedTarget;
        c && (c === a || Rf.call(a, c)) || d.call(a, b)
    }

    function Ef() {
        this.$get = function () {
            return S(U, {
                hasClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Ab(a, b)
                }, addClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Cb(a, b)
                }, removeClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Bb(a, b)
                }
            })
        }
    }

    function Ha(a, b) {
        var d = a && a.$$hashKey;
        if (d)return "function" === typeof d && (d = a.$$hashKey()), d;
        d = typeof a;
        return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Wd)() : d + ":" + a
    }

    function Ua(a, b) {
        if (b) {
            var d = 0;
            this.nextUid =
                function () {
                    return ++d
                }
        }
        q(a, this.put, this)
    }

    function Tc(a) {
        a = a.toString().replace(Sf, "");
        return a.match(Tf) || a.match(Uf)
    }

    function Vf(a) {
        return (a = Tc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function eb(a, b) {
        function d(a) {
            return function (b, c) {
                if (J(b))q(b, qc(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            Ta(a, "service");
            if (D(b) || M(b))b = p.instantiate(b);
            if (!b.$get)throw Ia("pget", a);
            return n[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = x.invoke(b, this);
                if (z(c))throw Ia("undef", a);
                return c
            }
        }

        function f(a, b, d) {
            return c(a, {$get: !1 !== d ? e(a, b) : b})
        }

        function g(a) {
            tb(z(a) || M(a), "modulesToLoad", "not an array");
            var b = [], c;
            q(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], f = p.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }

                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        y(a) ? (c = Tb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : D(a) ? b.push(p.invoke(a)) : M(a) ? b.push(p.invoke(a)) : Sa(a, "module")
                    } catch (e) {
                        throw M(a) && (a = a[a.length - 1]), e.message && e.stack &&
                        -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ia("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k)throw Ia("cdep", b + " <- " + l.join(" <- "));
                    return a[b]
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e)
                } catch (f) {
                    throw a[b] === k && delete a[b], f;
                } finally {
                    l.shift()
                }
            }

            function e(a, c, f) {
                var g = [];
                a = eb.$$annotate(a, b, f);
                for (var h = 0, k = a.length; h < k; h++) {
                    var l = a[h];
                    if ("string" !== typeof l)throw Ia("itkn", l);
                    g.push(c && c.hasOwnProperty(l) ? c[l] :
                        d(l, f))
                }
                return g
            }

            return {
                invoke: function (a, b, c, d) {
                    "string" === typeof c && (d = c, c = null);
                    c = e(a, c, d);
                    M(a) && (a = a[a.length - 1]);
                    d = 11 >= Da ? !1 : "function" === typeof a && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a));
                    return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))) : a.apply(b, c)
                }, instantiate: function (a, b, c) {
                    var d = M(a) ? a[a.length - 1] : a;
                    a = e(a, b, c);
                    a.unshift(null);
                    return new (Function.prototype.bind.apply(d, a))
                }, get: d, annotate: eb.$$annotate, has: function (b) {
                    return n.hasOwnProperty(b +
                            "Provider") || a.hasOwnProperty(b)
                }
            }
        }

        b = !0 === b;
        var k = {}, l = [], m = new Ua([], !0), n = {
            $provide: {
                provider: d(c),
                factory: d(f),
                service: d(function (a, b) {
                    return f(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }),
                value: d(function (a, b) {
                    return f(a, da(b), !1)
                }),
                constant: d(function (a, b) {
                    Ta(a, "constant");
                    n[a] = b;
                    F[a] = b
                }),
                decorator: function (a, b) {
                    var c = p.get(a + "Provider"), d = c.$get;
                    c.$get = function () {
                        var a = x.invoke(d, c);
                        return x.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, p = n.$injector = h(n, function (a, b) {
            ea.isString(b) && l.push(b);
            throw Ia("unpr", l.join(" <- "));
        }), F = {}, L = h(F, function (a, b) {
            var c = p.get(a + "Provider", b);
            return x.invoke(c.$get, c, u, a)
        }), x = L;
        n.$injectorProvider = {$get: da(L)};
        var r = g(a), x = L.get("$injector");
        x.strictDi = b;
        q(r, function (a) {
            a && x.invoke(a)
        });
        return x
    }

    function Ve() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === oa(a))return b = a, !0
                });
                return b
            }

            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    D(c) ? c = c() : Pb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : R(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g(a) {
                a = y(a) ? a : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }

            var h = b.document;
            a && c.$watch(function () {
                return d.hash()
            }, function (a, b) {
                a === b && "" === a || Nf(function () {
                    c.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function ib(a, b) {
        if (!a && !b)return "";
        if (!a)return b;
        if (!b)return a;
        M(a) && (a = a.join(" "));
        M(b) && (b = b.join(" "));
        return a + " " + b
    }

    function Wf(a) {
        y(a) && (a = a.split(" "));
        var b = V();
        q(a, function (a) {
            a.length && (b[a] = !0)
        });
        return b
    }

    function Ja(a) {
        return J(a) ? a : {}
    }

    function Xf(a, b, d, c) {
        function e(a) {
            try {
                a.apply(null, Aa.call(arguments, 1))
            } finally {
                if (L--, 0 === L)for (; x.length;)try {
                    x.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function f() {
            t = null;
            g();
            h()
        }

        function g() {
            r = G();
            r = z(r) ? null : r;
            na(r, I) && (r = I);
            I = r
        }

        function h() {
            if (v !== k.url() || w !== r)v = k.url(), w = r, q(C, function (a) {
                a(k.url(),
                    r)
            })
        }

        var k = this, l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, F = {};
        k.isMock = !1;
        var L = 0, x = [];
        k.$$completeOutstandingRequest = e;
        k.$$incOutstandingRequestCount = function () {
            L++
        };
        k.notifyWhenNoOutstandingRequests = function (a) {
            0 === L ? a() : x.push(a)
        };
        var r, w, v = l.href, Q = b.find("base"), t = null, G = c.history ? function () {
            try {
                return m.state
            } catch (a) {
            }
        } : E;
        g();
        w = r;
        k.url = function (b, d, e) {
            z(e) && (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = w === e;
                if (v === b && (!c.history || f))return k;
                var h = v && Ka(v) === Ka(b);
                v = b;
                w = e;
                if (!c.history || h && f) {
                    if (!h || t)t = b;
                    d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b;
                    l.href !== b && (t = b)
                } else m[d ? "replaceState" : "pushState"](e, "", b), g(), w = r;
                return k
            }
            return t || l.href.replace(/%27/g, "'")
        };
        k.state = function () {
            return r
        };
        var C = [], K = !1, I = null;
        k.onUrlChange = function (b) {
            if (!K) {
                if (c.history)H(a).on("popstate", f);
                H(a).on("hashchange", f);
                K = !0
            }
            C.push(b);
            return b
        };
        k.$$applicationDestroyed = function () {
            H(a).off("hashchange popstate", f)
        };
        k.$$checkUrlChange = h;
        k.baseHref = function () {
            var a = Q.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        k.defer = function (a, b) {
            var c;
            L++;
            c = n(function () {
                delete F[c];
                e(a)
            }, b || 0);
            F[c] = !0;
            return c
        };
        k.defer.cancel = function (a) {
            return F[a] ? (delete F[a], p(a), e(E), !0) : !1
        }
    }

    function bf() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
            return new Xf(a, c, b, d)
        }]
    }

    function cf() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n =
                        null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in b)throw O("$cacheFactory")("iid", a);
                var g = 0, h = S({}, c, {id: a}), k = V(), l = c && c.capacity || Number.MAX_VALUE, m = V(), n = null, p = null;
                return b[a] = {
                    put: function (a, b) {
                        if (!z(b)) {
                            if (l < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = {key: a});
                                e(c)
                            }
                            a in k || g++;
                            k[a] = b;
                            g > l && this.remove(p.key);
                            return b
                        }
                    }, get: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            e(b)
                        }
                        return k[a]
                    }, remove: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            b == n && (n = b.p);
                            b == p && (p =
                                b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        a in k && (delete k[a], g--)
                    }, removeAll: function () {
                        k = V();
                        g = 0;
                        m = V();
                        n = p = null
                    }, destroy: function () {
                        m = h = k = null;
                        delete b[a]
                    }, info: function () {
                        return S({}, h, {size: g})
                    }
                }
            }

            var b = {};
            a.info = function () {
                var a = {};
                q(b, function (b, e) {
                    a[e] = b.info()
                });
                return a
            };
            a.get = function (a) {
                return b[a]
            };
            return a
        }
    }

    function yf() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function Cc(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
            q(a, function (a, f) {
                if (a in m)e[f] =
                    m[a]; else {
                    var g = a.match(d);
                    if (!g)throw ga("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[f] = {mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f};
                    g[4] && (m[a] = e[f])
                }
            });
            return e
        }

        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== N(b))throw ga("baddir", a);
            if (a !== a.trim())throw ga("baddir", a);
        }

        var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = $d("ngSrc,ngSrcset,src,srcset"), k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/,
            m = V();
        this.directive = function L(b, d) {
            Ta(b, "directive");
            y(b) ? (c(b), tb(d, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
                var d = [];
                q(e[b], function (e, f) {
                    try {
                        var g = a.invoke(e);
                        D(g) ? g = {compile: da(g)} : !g.compile && g.link && (g.compile = da(g.link));
                        g.priority = g.priority || 0;
                        g.index = f;
                        g.name = g.name || b;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "EA";
                        g.$$moduleName = e.$$moduleName;
                        d.push(g)
                    } catch (h) {
                        c(h)
                    }
                });
                return d
            }])),
                e[b].push(d)) : q(b, qc(L));
            return this
        };
        this.component = function (a, b) {
            function c(a) {
                function e(b) {
                    return D(b) || M(b) ? function (c, d) {
                        return a.invoke(b, this, {$element: c, $attrs: d})
                    } : b
                }

                var f = b.template || b.templateUrl ? b.template : "";
                return {
                    controller: d,
                    controllerAs: Uc(b.controller) || b.controllerAs || "$ctrl",
                    template: e(f),
                    templateUrl: e(b.templateUrl),
                    transclude: b.transclude,
                    scope: {},
                    bindToController: b.bindings || {},
                    restrict: "E",
                    require: b.require
                }
            }

            var d = b.controller || E;
            q(b, function (a, b) {
                "$" === b.charAt(0) && (c[b] =
                    a, d[b] = a)
            });
            c.$inject = ["$injector"];
            return this.directive(a, c)
        };
        this.aHrefSanitizationWhitelist = function (a) {
            return A(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return A(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
        };
        var n = !0;
        this.debugInfoEnabled = function (a) {
            return A(a) ? (n = a, this) : n
        };
        var p = 10;
        this.onChangesTtl = function (a) {
            return arguments.length ? (p = a, this) : p
        };
        this.$get = ["$injector", "$interpolate",
            "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, m, v, Q, t, G, C, K) {
                function I() {
                    try {
                        if (!--pa)throw $ = u, ga("infchng", p);
                        t.$apply(function () {
                            for (var a = 0, b = $.length; a < b; ++a)$[a]();
                            $ = u
                        })
                    } finally {
                        pa++
                    }
                }

                function qa(a, b) {
                    if (b) {
                        var c = Object.keys(b), d, e, f;
                        d = 0;
                        for (e = c.length; d < e; d++)f = c[d], this[f] = b[f]
                    } else this.$attr = {};
                    this.$$element = a
                }

                function Ca(a, b, c) {
                    la.innerHTML = "<span " + b + ">";
                    b = la.firstChild.attributes;
                    var d = b[0];
                    b.removeNamedItem(d.name);
                    d.value = c;
                    a.attributes.setNamedItem(d)
                }

                function B(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {
                    }
                }

                function ba(a, b, c, d, e) {
                    a instanceof H || (a = H(a));
                    for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
                        var k = a[g];
                        k.nodeType === Pa && k.nodeValue.match(f) && Mc(k, a[g] = P.createElement("span"))
                    }
                    var l = xa(a, b, a, c, d, e);
                    ba.$$addScopeClass(a);
                    var m = null;
                    return function (b, c, d) {
                        tb(b, "scope");
                        e && e.needsNewScope && (b = b.$parent.$new());
                        d = d || {};
                        var f = d.parentBoundTranscludeFn, g = d.transcludeControllers;
                        d = d.futureParentElement;
                        f && f.$$boundTransclude &&
                        (f = f.$$boundTransclude);
                        m || (m = (d = d && d[0]) ? "foreignobject" !== oa(d) && ka.call(d).match(/SVG/) ? "svg" : "html" : "html");
                        d = "html" !== m ? H(ca(m, H("<div>").append(a).html())) : c ? Ra.clone.call(a) : a;
                        if (g)for (var h in g)d.data("$" + h + "Controller", g[h].instance);
                        ba.$$addScopeInfo(d, b);
                        c && c(d, b);
                        l && l(b, d, d, f);
                        return d
                    }
                }

                function xa(a, b, c, d, e, f) {
                    function g(a, c, d, e) {
                        var f, k, l, m, n, p, G;
                        if (r)for (G = Array(c.length), m = 0; m < h.length; m += 3)f = h[m], G[f] = c[f]; else G = c;
                        m = 0;
                        for (n = h.length; m < n;)k = G[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ?
                            (l = a.$new(), ba.$$addScopeInfo(H(k), l)) : l = a, p = c.transcludeOnThisElement ? s(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? s(a, b) : null, c(f, l, k, d, p)) : f && f(a, k.childNodes, u, e)
                    }

                    for (var h = [], k, l, m, n, r, p = 0; p < a.length; p++) {
                        k = new qa;
                        l = A(a[p], [], k, 0 === p ? d : u, e);
                        (f = l.length ? ra(l, a[p], k, b, c, null, [], [], f) : null) && f.scope && ba.$$addScopeClass(k.$$element);
                        k = f && f.terminal || !(m = a[p].childNodes) || !m.length ? null : xa(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                        if (f || k)h.push(p, f, k),
                            n = !0, r = r || f;
                        f = null
                    }
                    return n ? g : null
                }

                function s(a, b, c) {
                    function d(e, f, g, h, k) {
                        e || (e = a.$new(!1, k), e.$$transcluded = !0);
                        return b(e, f, {parentBoundTranscludeFn: c, transcludeControllers: g, futureParentElement: h})
                    }

                    var e = d.$$slots = V(), f;
                    for (f in b.$$slots)e[f] = b.$$slots[f] ? s(a, b.$$slots[f], c) : null;
                    return d
                }

                function A(a, b, c, d, e) {
                    var h = c.$attr, k;
                    switch (a.nodeType) {
                        case 1:
                            Fa(b, ya(oa(a)), "E", d, e);
                            for (var l, m, n, r = a.attributes, p = 0, G = r && r.length; p < G; p++) {
                                var v = !1, C = !1;
                                l = r[p];
                                k = l.name;
                                m = W(l.value);
                                l = ya(k);
                                if (n = za.test(l))k =
                                    k.replace(Vc, "").substr(8).replace(/_(.)/g, function (a, b) {
                                        return b.toUpperCase()
                                    });
                                (l = l.match(Ba)) && R(l[1]) && (v = k, C = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
                                l = ya(k.toLowerCase());
                                h[l] = k;
                                if (n || !c.hasOwnProperty(l))c[l] = m, Rc(a, l) && (c[l] = !0);
                                fa(a, b, m, l, n);
                                Fa(b, l, "A", d, e, v, C)
                            }
                            a = a.className;
                            J(a) && (a = a.animVal);
                            if (y(a) && "" !== a)for (; k = g.exec(a);)l = ya(k[2]), Fa(b, l, "C", d, e) && (c[l] = W(k[3])), a = a.substr(k.index + k[0].length);
                            break;
                        case Pa:
                            if (11 === Da)for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType ===
                            Pa;)a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                            Y(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                if (k = f.exec(a.nodeValue))l = ya(k[1]), Fa(b, l, "M", d, e) && (c[l] = W(k[2]))
                            } catch (w) {
                            }
                    }
                    b.sort(Z);
                    return b
                }

                function Wc(a, b, c) {
                    var d = [], e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a)throw ga("uterdir", b, c);
                            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                            d.push(a);
                            a = a.nextSibling
                        } while (0 < e)
                    } else d.push(a);
                    return H(d)
                }

                function O(a, b, c) {
                    return function (d, e, f, g, h) {
                        e = Wc(e[0],
                            b, c);
                        return a(d, e, f, g, h)
                    }
                }

                function Zb(a, b, c, d, e, f) {
                    var g;
                    return a ? ba(b, c, d, e, f) : function () {
                        g || (g = ba(b, c, d, e, f), b = c = f = null);
                        return g.apply(this, arguments)
                    }
                }

                function ra(a, b, d, e, f, g, h, k, l) {
                    function m(a, b, c, d) {
                        if (a) {
                            c && (a = O(a, c, d));
                            a.require = B.require;
                            a.directiveName = L;
                            if (C === B || B.$$isolateScope)a = ia(a, {isolateScope: !0});
                            h.push(a)
                        }
                        if (b) {
                            c && (b = O(b, c, d));
                            b.require = B.require;
                            b.directiveName = L;
                            if (C === B || B.$$isolateScope)b = ia(b, {isolateScope: !0});
                            k.push(b)
                        }
                    }

                    function n(a, c, e, f, g) {
                        function l(a, b, c, d) {
                            var e;
                            ab(a) || (d = c, c = b, b = a, a = u);
                            Ca && (e = K);
                            c || (c = Ca ? t.parent() : t);
                            if (d) {
                                var f = g.$$slots[d];
                                if (f)return f(a, b, e, c, s);
                                if (z(f))throw ga("noslot", d, wa(t));
                            } else return g(a, b, e, c, s)
                        }

                        var m, r, p, B, I, K, x, t;
                        b === e ? (f = d, t = d.$$element) : (t = H(e), f = new qa(t, d));
                        I = c;
                        C ? B = c.$new(!0) : G && (I = c.$parent);
                        g && (x = l, x.$$boundTransclude = g, x.isSlotFilled = function (a) {
                            return !!g.$$slots[a]
                        });
                        v && (K = T(t, f, x, v, B, c, C));
                        C && (ba.$$addScopeInfo(t, B, !0, !(w && (w === C || w === C.$$originalDirective))), ba.$$addScopeClass(t, !0), B.$$isolateBindings = C.$$isolateBindings,
                        (p = ha(c, f, B, B.$$isolateBindings, C)) && B.$on("$destroy", p));
                        for (r in K) {
                            p = v[r];
                            var Va = K[r], Q = p.$$bindings.bindToController;
                            Va.identifier && Q && (m = ha(I, f, Va.instance, Q, p));
                            var L = Va();
                            L !== Va.instance && (Va.instance = L, t.data("$" + p.name + "Controller", L), m && m(), m = ha(I, f, Va.instance, Q, p))
                        }
                        q(v, function (a, b) {
                            var c = a.require;
                            a.bindToController && !M(c) && J(c) && S(K[b].instance, jb(b, c, t, K))
                        });
                        q(K, function (a) {
                            var b = a.instance;
                            D(b.$onInit) && b.$onInit();
                            D(b.$onDestroy) && I.$on("$destroy", function () {
                                b.$onDestroy()
                            })
                        });
                        m =
                            0;
                        for (r = h.length; m < r; m++)p = h[m], ja(p, p.isolateScope ? B : c, t, f, p.require && jb(p.directiveName, p.require, t, K), x);
                        var s = c;
                        C && (C.template || null === C.templateUrl) && (s = B);
                        a && a(s, e.childNodes, u, g);
                        for (m = k.length - 1; 0 <= m; m--)p = k[m], ja(p, p.isolateScope ? B : c, t, f, p.require && jb(p.directiveName, p.require, t, K), x);
                        q(K, function (a) {
                            a = a.instance;
                            D(a.$postLink) && a.$postLink()
                        })
                    }

                    l = l || {};
                    for (var p = -Number.MAX_VALUE, G = l.newScopeDirective, v = l.controllerDirectives, C = l.newIsolateScopeDirective, w = l.templateDirective, I = l.nonTlbTranscludeDirective,
                             K = !1, x = !1, Ca = l.hasElementTranscludeDirective, t = d.$$element = H(b), B, L, Q, s = e, xa, Ea = !1, E = !1, y, ra = 0, N = a.length; ra < N; ra++) {
                        B = a[ra];
                        var R = B.$$start, Fa = B.$$end;
                        R && (t = Wc(b, R, Fa));
                        Q = u;
                        if (p > B.priority)break;
                        if (y = B.scope)B.templateUrl || (J(y) ? (X("new/isolated scope", C || G, B, t), C = B) : X("new/isolated scope", C, B, t)), G = G || B;
                        L = B.name;
                        if (!Ea && (B.replace && (B.templateUrl || B.template) || B.transclude && !B.$$tlb)) {
                            for (y = ra + 1; Ea = a[y++];)if (Ea.transclude && !Ea.$$tlb || Ea.replace && (Ea.templateUrl || Ea.template)) {
                                E = !0;
                                break
                            }
                            Ea = !0
                        }
                        !B.templateUrl &&
                        B.controller && (y = B.controller, v = v || V(), X("'" + L + "' controller", v[L], B, t), v[L] = B);
                        if (y = B.transclude)if (K = !0, B.$$tlb || (X("transclusion", I, B, t), I = B), "element" == y)Ca = !0, p = B.priority, Q = t, t = d.$$element = H(ba.$$createComment(L, d[L])), b = t[0], da(f, Aa.call(Q, 0), b), Q[0].$$parentNode = Q[0].parentNode, s = Zb(E, Q, e, p, g && g.name, {nonTlbTranscludeDirective: I}); else {
                            var P = V();
                            Q = H(Wb(b)).contents();
                            if (J(y)) {
                                Q = [];
                                var Z = V(), Y = V();
                                q(y, function (a, b) {
                                    var c = "?" === a.charAt(0);
                                    a = c ? a.substring(1) : a;
                                    Z[a] = b;
                                    P[b] = null;
                                    Y[b] = c
                                });
                                q(t.contents(),
                                    function (a) {
                                        var b = Z[ya(oa(a))];
                                        b ? (Y[b] = !0, P[b] = P[b] || [], P[b].push(a)) : Q.push(a)
                                    });
                                q(Y, function (a, b) {
                                    if (!a)throw ga("reqslot", b);
                                });
                                for (var $ in P)P[$] && (P[$] = Zb(E, P[$], e))
                            }
                            t.empty();
                            s = Zb(E, Q, e, u, u, {needsNewScope: B.$$isolateScope || B.$$newScope});
                            s.$$slots = P
                        }
                        if (B.template)if (x = !0, X("template", w, B, t), w = B, y = D(B.template) ? B.template(t, d) : B.template, y = ua(y), B.replace) {
                            g = B;
                            Q = Ub.test(y) ? Xc(ca(B.templateNamespace, W(y))) : [];
                            b = Q[0];
                            if (1 != Q.length || 1 !== b.nodeType)throw ga("tplrt", L, "");
                            da(f, t, b);
                            N = {$attr: {}};
                            y = A(b, [], N);
                            var ea = a.splice(ra + 1, a.length - (ra + 1));
                            (C || G) && Yc(y, C, G);
                            a = a.concat(y).concat(ea);
                            U(d, N);
                            N = a.length
                        } else t.html(y);
                        if (B.templateUrl)x = !0, X("template", w, B, t), w = B, B.replace && (g = B), n = aa(a.splice(ra, a.length - ra), t, d, f, K && s, h, k, {
                            controllerDirectives: v,
                            newScopeDirective: G !== B && G,
                            newIsolateScopeDirective: C,
                            templateDirective: w,
                            nonTlbTranscludeDirective: I
                        }), N = a.length; else if (B.compile)try {
                            xa = B.compile(t, d, s), D(xa) ? m(null, xa, R, Fa) : xa && m(xa.pre, xa.post, R, Fa)
                        } catch (fa) {
                            c(fa, wa(t))
                        }
                        B.terminal && (n.terminal = !0, p = Math.max(p, B.priority))
                    }
                    n.scope = G && !0 === G.scope;
                    n.transcludeOnThisElement = K;
                    n.templateOnThisElement = x;
                    n.transclude = s;
                    l.hasElementTranscludeDirective = Ca;
                    return n
                }

                function jb(a, b, c, d) {
                    var e;
                    if (y(b)) {
                        var f = b.match(k);
                        b = b.substring(f[0].length);
                        var g = f[1] || f[3], f = "?" === f[2];
                        "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                        if (!e) {
                            var h = "$" + b + "Controller";
                            e = g ? c.inheritedData(h) : c.data(h)
                        }
                        if (!e && !f)throw ga("ctreq", b, a);
                    } else if (M(b))for (e = [], g = 0, f = b.length; g < f; g++)e[g] = jb(a, b[g], c, d); else J(b) && (e =
                    {}, q(b, function (b, f) {
                        e[f] = jb(a, b, c, d)
                    }));
                    return e || null
                }

                function T(a, b, c, d, e, f, g) {
                    var h = V(), k;
                    for (k in d) {
                        var l = d[k], m = {
                            $scope: l === g || l.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        }, n = l.controller;
                        "@" == n && (n = b[l.name]);
                        m = Q(n, m, !0, l.controllerAs);
                        h[l.name] = m;
                        a.data("$" + l.name + "Controller", m.instance)
                    }
                    return h
                }

                function Yc(a, b, c) {
                    for (var d = 0, e = a.length; d < e; d++)a[d] = Qb(a[d], {$$isolateScope: b, $$newScope: c})
                }

                function Fa(b, f, g, h, k, l, m) {
                    if (f === k)return null;
                    k = null;
                    if (e.hasOwnProperty(f)) {
                        var n;
                        f =
                            a.get(f + "Directive");
                        for (var p = 0, G = f.length; p < G; p++)try {
                            if (n = f[p], (z(h) || h > n.priority) && -1 != n.restrict.indexOf(g)) {
                                l && (n = Qb(n, {$$start: l, $$end: m}));
                                if (!n.$$bindings) {
                                    var v = n, C = n, w = n.name, B = {isolateScope: null, bindToController: null};
                                    J(C.scope) && (!0 === C.bindToController ? (B.bindToController = d(C.scope, w, !0), B.isolateScope = {}) : B.isolateScope = d(C.scope, w, !1));
                                    J(C.bindToController) && (B.bindToController = d(C.bindToController, w, !0));
                                    if (J(B.bindToController)) {
                                        var I = C.controller, K = C.controllerAs;
                                        if (!I)throw ga("noctrl",
                                            w);
                                        if (!Uc(I, K))throw ga("noident", w);
                                    }
                                    var x = v.$$bindings = B;
                                    J(x.isolateScope) && (n.$$isolateBindings = x.isolateScope)
                                }
                                b.push(n);
                                k = n
                            }
                        } catch (t) {
                            c(t)
                        }
                    }
                    return k
                }

                function R(b) {
                    if (e.hasOwnProperty(b))for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++)if (b = c[d], b.multiElement)return !0;
                    return !1
                }

                function U(a, b) {
                    var c = b.$attr, d = a.$attr, e = a.$$element;
                    q(a, function (d, e) {
                        "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    });
                    q(b, function (b, f) {
                        "class" == f ? (B(e, b), a["class"] = (a["class"] ?
                            a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function aa(a, b, c, d, e, f, g, h) {
                    var k = [], l, n, p = b[0], r = a.shift(), G = Qb(r, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: r
                    }), v = D(r.templateUrl) ? r.templateUrl(b, c) : r.templateUrl, C = r.templateNamespace;
                    b.empty();
                    m(v).then(function (m) {
                        var w, I;
                        m = ua(m);
                        if (r.replace) {
                            m = Ub.test(m) ? Xc(ca(C, W(m))) : [];
                            w = m[0];
                            if (1 != m.length || 1 !==
                                w.nodeType)throw ga("tplrt", r.name, v);
                            m = {$attr: {}};
                            da(d, b, w);
                            var K = A(w, [], m);
                            J(r.scope) && Yc(K, !0);
                            a = K.concat(a);
                            U(c, m)
                        } else w = p, b.html(m);
                        a.unshift(G);
                        l = ra(a, w, c, e, b, r, f, g, h);
                        q(d, function (a, c) {
                            a == w && (d[c] = b[0])
                        });
                        for (n = xa(b[0].childNodes, e); k.length;) {
                            m = k.shift();
                            I = k.shift();
                            var x = k.shift(), t = k.shift(), K = b[0];
                            if (!m.$$destroyed) {
                                if (I !== p) {
                                    var qa = I.className;
                                    h.hasElementTranscludeDirective && r.replace || (K = Wb(w));
                                    da(x, H(I), K);
                                    B(H(K), qa)
                                }
                                I = l.transcludeOnThisElement ? s(m, l.transclude, t) : t;
                                l(n, m, K, d, I)
                            }
                        }
                        k =
                            null
                    });
                    return function (a, b, c, d, e) {
                        a = e;
                        b.$$destroyed || (k ? k.push(b, c, d, a) : (l.transcludeOnThisElement && (a = s(b, l.transclude, e)), l(n, b, c, d, a)))
                    }
                }

                function Z(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function X(a, b, c, d) {
                    function e(a) {
                        return a ? " (module: " + a + ")" : ""
                    }

                    if (b)throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, wa(d));
                }

                function Y(a, c) {
                    var d = b(c, !0);
                    d && a.push({
                        priority: 0, compile: function (a) {
                            a = a.parent();
                            var b = !!a.length;
                            b && ba.$$addBindingClass(a);
                            return function (a, c) {
                                var e = c.parent();
                                b || ba.$$addBindingClass(e);
                                ba.$$addBindingInfo(e, d.expressions);
                                a.$watch(d, function (a) {
                                    c[0].nodeValue = a
                                })
                            }
                        }
                    })
                }

                function ca(a, b) {
                    a = N(a || "html");
                    switch (a) {
                        case "svg":
                        case "math":
                            var c = P.createElement("div");
                            c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                            return c.childNodes[0].childNodes;
                        default:
                            return b
                    }
                }

                function ea(a, b) {
                    if ("srcdoc" == b)return G.HTML;
                    var c = oa(a);
                    if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return G.RESOURCE_URL
                }

                function fa(a, c, d, e, f) {
                    var g = ea(a, e);
                    f = h[e] || f;
                    var k = b(d, !0, g, f);
                    if (k) {
                        if ("multiple" === e && "select" === oa(a))throw ga("selmulti", wa(a));
                        c.push({
                            priority: 100, compile: function () {
                                return {
                                    pre: function (a, c, h) {
                                        c = h.$$observers || (h.$$observers = V());
                                        if (l.test(e))throw ga("nodomevents");
                                        var m = h[e];
                                        m !== d && (k = m && b(m, !0, g, f), d = m);
                                        k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                                            "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function da(a, b,
                            c) {
                    var d = b[0], e = b.length, f = d.parentNode, g, h;
                    if (a)for (g = 0, h = a.length; g < h; g++)if (a[g] == d) {
                        a[g++] = c;
                        h = g + e - 1;
                        for (var k = a.length; g < k; g++, h++)h < k ? a[g] = a[h] : delete a[g];
                        a.length -= e - 1;
                        a.context === d && (a.context = c);
                        break
                    }
                    f && f.replaceChild(c, d);
                    a = P.createDocumentFragment();
                    for (g = 0; g < e; g++)a.appendChild(b[g]);
                    H.hasData(d) && (H.data(c, H.data(d)), H(d).off("$destroy"));
                    H.cleanData(a.querySelectorAll("*"));
                    for (g = 1; g < e; g++)delete b[g];
                    b[0] = c;
                    b.length = 1
                }

                function ia(a, b) {
                    return S(function () {
                            return a.apply(null, arguments)
                        },
                        a, b)
                }

                function ja(a, b, d, e, f, g) {
                    try {
                        a(b, d, e, f, g)
                    } catch (h) {
                        c(h, wa(d))
                    }
                }

                function ha(a, c, d, e, f) {
                    function g(b, c, e) {
                        D(d.$onChanges) && c !== e && ($ || (a.$$postDigest(I), $ = []), l || (l = {}, $.push(h)), l[b] && (e = l[b].previousValue), l[b] = {
                            previousValue: e,
                            currentValue: c
                        })
                    }

                    function h() {
                        d.$onChanges(l);
                        l = u
                    }

                    var k = [], l;
                    q(e, function (e, h) {
                        var l = e.attrName, m = e.optional, n, r, p, G;
                        switch (e.mode) {
                            case "@":
                                m || va.call(c, l) || (d[h] = c[l] = void 0);
                                c.$observe(l, function (a) {
                                    y(a) && (g(h, a, d[h]), d[h] = a)
                                });
                                c.$$observers[l].$$scope = a;
                                n = c[l];
                                y(n) ?
                                    d[h] = b(n)(a) : Oa(n) && (d[h] = n);
                                break;
                            case "=":
                                if (!va.call(c, l)) {
                                    if (m)break;
                                    c[l] = void 0
                                }
                                if (m && !c[l])break;
                                r = v(c[l]);
                                G = r.literal ? na : function (a, b) {
                                    return a === b || a !== a && b !== b
                                };
                                p = r.assign || function () {
                                        n = d[h] = r(a);
                                        throw ga("nonassign", c[l], l, f.name);
                                    };
                                n = d[h] = r(a);
                                m = function (b) {
                                    G(b, d[h]) || (G(b, n) ? p(a, b = d[h]) : d[h] = b);
                                    return n = b
                                };
                                m.$stateful = !0;
                                m = e.collection ? a.$watchCollection(c[l], m) : a.$watch(v(c[l], m), null, r.literal);
                                k.push(m);
                                break;
                            case "<":
                                if (!va.call(c, l)) {
                                    if (m)break;
                                    c[l] = void 0
                                }
                                if (m && !c[l])break;
                                r = v(c[l]);
                                d[h] = r(a);
                                m = a.$watch(r, function (a) {
                                    g(h, a, d[h]);
                                    d[h] = a
                                }, r.literal);
                                k.push(m);
                                break;
                            case "&":
                                r = c.hasOwnProperty(l) ? v(c[l]) : E;
                                if (r === E && m)break;
                                d[h] = function (b) {
                                    return r(a, b)
                                }
                        }
                    });
                    return k.length && function () {
                            for (var a = 0, b = k.length; a < b; ++a)k[a]()
                        }
                }

                var ma = /^\w/, la = P.createElement("div"), pa = p, $;
                qa.prototype = {
                    $normalize: ya, $addClass: function (a) {
                        a && 0 < a.length && C.addClass(this.$$element, a)
                    }, $removeClass: function (a) {
                        a && 0 < a.length && C.removeClass(this.$$element, a)
                    }, $updateClass: function (a, b) {
                        var c = Zc(a, b);
                        c &&
                        c.length && C.addClass(this.$$element, c);
                        (c = Zc(b, a)) && c.length && C.removeClass(this.$$element, c)
                    }, $set: function (a, b, d, e) {
                        var f = Rc(this.$$element[0], a), g = $c[a], h = a;
                        f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
                        this[a] = b;
                        e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = zc(a, "-"));
                        f = oa(this.$$element);
                        if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a)this[a] = b = K(b, "src" === a); else if ("img" === f && "srcset" === a) {
                            for (var f = "", g = W(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ?
                                k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++)var m = 2 * l, f = f + K(W(g[m]), !0), f = f + (" " + W(g[m + 1]));
                            g = W(g[2 * l]).split(/\s/);
                            f += K(W(g[0]), !0);
                            2 === g.length && (f += " " + W(g[1]));
                            this[a] = b = f
                        }
                        !1 !== d && (null === b || z(b) ? this.$$element.removeAttr(e) : ma.test(e) ? this.$$element.attr(e, b) : Ca(this.$$element[0], e, b));
                        (a = this.$$observers) && q(a[h], function (a) {
                            try {
                                a(b)
                            } catch (d) {
                                c(d)
                            }
                        })
                    }, $observe: function (a, b) {
                        var c = this, d = c.$$observers || (c.$$observers = V()), e = d[a] || (d[a] = []);
                        e.push(b);
                        t.$evalAsync(function () {
                            e.$$inter || !c.hasOwnProperty(a) || z(c[a]) || b(c[a])
                        });
                        return function () {
                            bb(e, b)
                        }
                    }
                };
                var sa = b.startSymbol(), ta = b.endSymbol(), ua = "{{" == sa && "}}" == ta ? $a : function (a) {
                    return a.replace(/\{\{/g, sa).replace(/}}/g, ta)
                }, za = /^ngAttr[A-Z]/, Ba = /^(.+)Start$/;
                ba.$$addBindingInfo = n ? function (a, b) {
                    var c = a.data("$binding") || [];
                    M(b) ? c = c.concat(b) : c.push(b);
                    a.data("$binding", c)
                } : E;
                ba.$$addBindingClass = n ? function (a) {
                    B(a, "ng-binding")
                } : E;
                ba.$$addScopeInfo = n ? function (a, b, c, d) {
                    a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope",
                        b)
                } : E;
                ba.$$addScopeClass = n ? function (a, b) {
                    B(a, b ? "ng-isolate-scope" : "ng-scope")
                } : E;
                ba.$$createComment = function (a, b) {
                    var c = "";
                    n && (c = " " + (a || "") + ": " + (b || "") + " ");
                    return P.createComment(c)
                };
                return ba
            }]
    }

    function ya(a) {
        return fb(a.replace(Vc, ""))
    }

    function Zc(a, b) {
        var d = "", c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
        a:for (; f < c.length; f++) {
            for (var g = c[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            d += (0 < d.length ? " " : "") + g
        }
        return d
    }

    function Xc(a) {
        a = H(a);
        var b = a.length;
        if (1 >= b)return a;
        for (; b--;)8 === a[b].nodeType &&
        Yf.call(a, b, 1);
        return a
    }

    function Uc(a, b) {
        if (b && y(b))return b;
        if (y(a)) {
            var d = ad.exec(a);
            if (d)return d[3]
        }
    }

    function df() {
        var a = {}, b = !1;
        this.has = function (b) {
            return a.hasOwnProperty(b)
        };
        this.register = function (b, c) {
            Ta(b, "controller");
            J(b) ? S(a, b) : a[b] = c
        };
        this.allowGlobals = function () {
            b = !0
        };
        this.$get = ["$injector", "$window", function (d, c) {
            function e(a, b, c, d) {
                if (!a || !J(a.$scope))throw O("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (f, g, h, k) {
                var l, m, n;
                h = !0 === h;
                k && y(k) && (n = k);
                if (y(f)) {
                    k = f.match(ad);
                    if (!k)throw Zf("ctrlfmt", f);
                    m = k[1];
                    n = n || k[3];
                    f = a.hasOwnProperty(m) ? a[m] : Bc(g.$scope, m, !0) || (b ? Bc(c, m, !0) : u);
                    Sa(f, m, !0)
                }
                if (h)return h = (M(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), S(function () {
                    var a = d.invoke(f, l, g, m);
                    a !== l && (J(a) || D(a)) && (l = a, n && e(g, n, l, m || f.name));
                    return l
                }, {instance: l, identifier: n});
                l = d.instantiate(f, g, m);
                n && e(g, n, l, m || f.name);
                return l
            }
        }]
    }

    function ef() {
        this.$get = ["$window", function (a) {
            return H(a.document)
        }]
    }

    function ff() {
        this.$get = ["$log", function (a) {
            return function (b,
                             d) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function $b(a) {
        return J(a) ? fa(a) ? a.toISOString() : db(a) : a
    }

    function lf() {
        this.$get = function () {
            return function (a) {
                if (!a)return "";
                var b = [];
                pc(a, function (a, c) {
                    null === a || z(a) || (M(a) ? q(a, function (a) {
                        b.push(ja(c) + "=" + ja($b(a)))
                    }) : b.push(ja(c) + "=" + ja($b(a))))
                });
                return b.join("&")
            }
        }
    }

    function mf() {
        this.$get = function () {
            return function (a) {
                function b(a, e, f) {
                    null === a || z(a) || (M(a) ? q(a, function (a, c) {
                        b(a, e + "[" + (J(a) ? c : "") + "]")
                    }) : J(a) && !fa(a) ? pc(a, function (a, c) {
                        b(a, e + (f ? "" : "[") + c + (f ?
                                "" : "]"))
                    }) : d.push(ja(e) + "=" + ja($b(a))))
                }

                if (!a)return "";
                var d = [];
                b(a, "", !0);
                return d.join("&")
            }
        }
    }

    function ac(a, b) {
        if (y(a)) {
            var d = a.replace($f, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(bd)) || (c = (c = d.match(ag)) && bg[c[0]].test(d));
                c && (a = uc(d))
            }
        }
        return a
    }

    function cd(a) {
        var b = V(), d;
        y(a) ? q(a.split("\n"), function (a) {
            d = a.indexOf(":");
            var e = N(W(a.substr(0, d)));
            a = W(a.substr(d + 1));
            e && (b[e] = b[e] ? b[e] + ", " + a : a)
        }) : J(a) && q(a, function (a, d) {
            var f = N(d), g = W(a);
            f && (b[f] = b[f] ? b[f] + ", " + g : g)
        });
        return b
    }

    function dd(a) {
        var b;
        return function (d) {
            b || (b = cd(a));
            return d ? (d = b[N(d)], void 0 === d && (d = null), d) : b
        }
    }

    function ed(a, b, d, c) {
        if (D(c))return c(a, b, d);
        q(c, function (c) {
            a = c(a, b, d)
        });
        return a
    }

    function kf() {
        var a = this.defaults = {
            transformResponse: [ac],
            transformRequest: [function (a) {
                return J(a) && "[object File]" !== ka.call(a) && "[object Blob]" !== ka.call(a) && "[object FormData]" !== ka.call(a) ? db(a) : a
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: ia(bc), put: ia(bc), patch: ia(bc)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer"
        }, b = !1;
        this.useApplyAsync = function (a) {
            return A(a) ? (b = !!a, this) : b
        };
        var d = !0;
        this.useLegacyPromiseExtensions = function (a) {
            return A(a) ? (d = !!a, this) : d
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
            function m(b) {
                function c(a) {
                    var b = S({}, a);
                    b.data = ed(a.data, a.headers, a.status, f.transformResponse);
                    a = a.status;
                    return 200 <= a && 300 > a ? b : k.reject(b)
                }

                function e(a,
                           b) {
                    var c, d = {};
                    q(a, function (a, e) {
                        D(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                    });
                    return d
                }

                if (!J(b))throw O("$http")("badreq", b);
                if (!y(b.url))throw O("$http")("badreq", b.url);
                var f = S({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                f.headers = function (b) {
                    var c = a.headers, d = S({}, b.headers), f, g, h, c = S({}, c.common, c[N(b.method)]);
                    a:for (f in c) {
                        g = N(f);
                        for (h in d)if (N(h) === g)continue a;
                        d[f] = c[f]
                    }
                    return e(d, ia(b))
                }(b);
                f.method = vb(f.method);
                f.paramSerializer = y(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
                var g = [function (b) {
                    var d = b.headers, e = ed(b.data, dd(d), u, b.transformRequest);
                    z(e) && q(d, function (a, b) {
                        "content-type" === N(b) && delete d[b]
                    });
                    z(b.withCredentials) && !z(a.withCredentials) && (b.withCredentials = a.withCredentials);
                    return n(b, e).then(c, c)
                }, u], h = k.when(f);
                for (q(L, function (a) {
                    (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && g.push(a.response, a.responseError)
                }); g.length;) {
                    b =
                        g.shift();
                    var m = g.shift(), h = h.then(b, m)
                }
                d ? (h.success = function (a) {
                    Sa(a, "fn");
                    h.then(function (b) {
                        a(b.data, b.status, b.headers, f)
                    });
                    return h
                }, h.error = function (a) {
                    Sa(a, "fn");
                    h.then(null, function (b) {
                        a(b.data, b.status, b.headers, f)
                    });
                    return h
                }) : (h.success = fd("success"), h.error = fd("error"));
                return h
            }

            function n(c, d) {
                function g(a, c, d, e) {
                    function f() {
                        l(c, a, d, e)
                    }

                    K && (200 <= a && 300 > a ? K.put(L, [a, c, cd(d), e]) : K.remove(L));
                    b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
                }

                function l(a, b, d, e) {
                    b = -1 <= b ? b : 0;
                    (200 <= b && 300 > b ? G.resolve :
                        G.reject)({data: a, status: b, headers: dd(d), config: c, statusText: e})
                }

                function n(a) {
                    l(a.data, a.status, ia(a.headers()), a.statusText)
                }

                function t() {
                    var a = m.pendingRequests.indexOf(c);
                    -1 !== a && m.pendingRequests.splice(a, 1)
                }

                var G = k.defer(), C = G.promise, K, I, qa = c.headers, L = p(c.url, c.paramSerializer(c.params));
                m.pendingRequests.push(c);
                C.then(t, t);
                !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (K = J(c.cache) ? c.cache : J(a.cache) ? a.cache : F);
                K && (I = K.get(L), A(I) ? I && D(I.then) ? I.then(n, n) : M(I) ?
                    l(I[1], I[0], ia(I[2]), I[3]) : l(I, 200, {}, "OK") : K.put(L, C));
                z(I) && ((I = gd(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : u) && (qa[c.xsrfHeaderName || a.xsrfHeaderName] = I), e(c.method, L, d, g, qa, c.timeout, c.withCredentials, c.responseType));
                return C
            }

            function p(a, b) {
                0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
                return a
            }

            var F = g("$http");
            a.paramSerializer = y(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var L = [];
            q(c, function (a) {
                L.unshift(y(a) ? l.get(a) : l.invoke(a))
            });
            m.pendingRequests = [];
            (function (a) {
                q(arguments,
                    function (a) {
                        m[a] = function (b, c) {
                            return m(S({}, c || {}, {method: a, url: b}))
                        }
                    })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                q(arguments, function (a) {
                    m[a] = function (b, c, d) {
                        return m(S({}, d || {}, {method: a, url: b, data: c}))
                    }
                })
            })("post", "put", "patch");
            m.defaults = a;
            return m
        }]
    }

    function of() {
        this.$get = function () {
            return function () {
                return new T.XMLHttpRequest
            }
        }
    }

    function nf() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, d, c) {
            return cg(a, c, a.defer, b.angular.callbacks, d[0])
        }]
    }

    function cg(a, b, d,
                c, e) {
        function f(a, b, d) {
            var f = e.createElement("script"), m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function (a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, F = "unknown";
                a && ("load" !== a.type || c[b].called || (a = {type: "error"}), F = a.type, g = "error" === a.type ? 404 : 200);
                d && d(g, F)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }

        return function (e, h, k, l, m, n, p, F) {
            function L() {
                w && w();
                v && v.abort()
            }

            function x(b, c, e, f, g) {
                A(t) && d.cancel(t);
                w = v = null;
                b(c, e, f, g);
                a.$$completeOutstandingRequest(E)
            }

            a.$$incOutstandingRequestCount();
            h = h || a.url();
            if ("jsonp" == N(e)) {
                var r = "_" + (c.counter++).toString(36);
                c[r] = function (a) {
                    c[r].data = a;
                    c[r].called = !0
                };
                var w = f(h.replace("JSON_CALLBACK", "angular.callbacks." + r), r, function (a, b) {
                    x(l, a, c[r].data, "", b);
                    c[r] = E
                })
            } else {
                var v = b(e, h);
                v.open(e, h, !0);
                q(m, function (a, b) {
                    A(a) && v.setRequestHeader(b, a)
                });
                v.onload = function () {
                    var a = v.statusText || "", b = "response" in v ? v.response : v.responseText,
                        c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 : "file" == sa(h).protocol ? 404 : 0);
                    x(l, c, b, v.getAllResponseHeaders(), a)
                };
                e = function () {
                    x(l, -1, null, null, "")
                };
                v.onerror = e;
                v.onabort = e;
                p && (v.withCredentials = !0);
                if (F)try {
                    v.responseType = F
                } catch (Q) {
                    if ("json" !== F)throw Q;
                }
                v.send(z(k) ? null : k)
            }
            if (0 < n)var t = d(L, n); else n && D(n.then) && n.then(L)
        }
    }

    function hf() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.$get = ["$parse", "$exceptionHandler",
            "$sce", function (d, c, e) {
                function f(a) {
                    return "\\\\\\" + a
                }

                function g(c) {
                    return c.replace(n, a).replace(p, b)
                }

                function h(a, b, c, d) {
                    var e;
                    return e = a.$watch(function (a) {
                        e();
                        return d(a)
                    }, b, c)
                }

                function k(f, k, n, r) {
                    function p(a) {
                        try {
                            var b = a;
                            a = n ? e.getTrusted(n, b) : e.valueOf(b);
                            var d;
                            if (r && !A(a))d = a; else if (null == a)d = ""; else {
                                switch (typeof a) {
                                    case "string":
                                        break;
                                    case "number":
                                        a = "" + a;
                                        break;
                                    default:
                                        a = db(a)
                                }
                                d = a
                            }
                            return d
                        } catch (g) {
                            c(La.interr(f, g))
                        }
                    }

                    if (!f.length || -1 === f.indexOf(a)) {
                        var v;
                        k || (k = g(f), v = da(k), v.exp = f, v.expressions =
                            [], v.$$watchDelegate = h);
                        return v
                    }
                    r = !!r;
                    var q, t, G = 0, C = [], K = [];
                    v = f.length;
                    for (var I = [], qa = []; G < v;)if (-1 != (q = f.indexOf(a, G)) && -1 != (t = f.indexOf(b, q + l)))G !== q && I.push(g(f.substring(G, q))), G = f.substring(q + l, t), C.push(G), K.push(d(G, p)), G = t + m, qa.push(I.length), I.push(""); else {
                        G !== v && I.push(g(f.substring(G)));
                        break
                    }
                    n && 1 < I.length && La.throwNoconcat(f);
                    if (!k || C.length) {
                        var Ca = function (a) {
                            for (var b = 0, c = C.length; b < c; b++) {
                                if (r && z(a[b]))return;
                                I[qa[b]] = a[b]
                            }
                            return I.join("")
                        };
                        return S(function (a) {
                            var b = 0, d = C.length,
                                e = Array(d);
                            try {
                                for (; b < d; b++)e[b] = K[b](a);
                                return Ca(e)
                            } catch (g) {
                                c(La.interr(f, g))
                            }
                        }, {
                            exp: f, expressions: C, $$watchDelegate: function (a, b) {
                                var c;
                                return a.$watchGroup(K, function (d, e) {
                                    var f = Ca(d);
                                    D(b) && b.call(this, f, d !== e ? c : f, a);
                                    c = f
                                })
                            }
                        })
                    }
                }

                var l = a.length, m = b.length, n = new RegExp(a.replace(/./g, f), "g"), p = new RegExp(b.replace(/./g, f), "g");
                k.startSymbol = function () {
                    return a
                };
                k.endSymbol = function () {
                    return b
                };
                return k
            }]
    }

    function jf() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
            function f(f,
                       k, l, m) {
                function n() {
                    p ? f.apply(null, F) : f(r)
                }

                var p = 4 < arguments.length, F = p ? Aa.call(arguments, 4) : [], q = b.setInterval, x = b.clearInterval, r = 0, w = A(m) && !m, v = (w ? c : d).defer(), Q = v.promise;
                l = A(l) ? l : 0;
                Q.$$intervalId = q(function () {
                    w ? e.defer(n) : a.$evalAsync(n);
                    v.notify(r++);
                    0 < l && r >= l && (v.resolve(r), x(Q.$$intervalId), delete g[Q.$$intervalId]);
                    w || a.$apply()
                }, k);
                g[Q.$$intervalId] = v;
                return Q
            }

            var g = {};
            f.cancel = function (a) {
                return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId),
                    delete g[a.$$intervalId], !0) : !1
            };
            return f
        }]
    }

    function cc(a) {
        a = a.split("/");
        for (var b = a.length; b--;)a[b] = rb(a[b]);
        return a.join("/")
    }

    function hd(a, b) {
        var d = sa(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = Y(d.port) || dg[d.protocol] || null
    }

    function id(a, b) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = sa(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = xc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path =
            "/" + b.$$path)
    }

    function la(a, b) {
        if (0 === b.indexOf(a))return b.substr(a.length)
    }

    function Ka(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function kb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function dc(a, b, d) {
        this.$$html5 = !0;
        d = d || "";
        hd(a, this);
        this.$$parse = function (a) {
            var d = la(b, a);
            if (!y(d))throw Fb("ipthprfx", a, b);
            id(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Sb(this.$$search), d = this.$$hash ? "#" + rb(this.$$hash) : "";
            this.$$url = cc(this.$$path) + (a ? "?" + a : "") +
                d;
            this.$$absUrl = b + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            A(f = la(a, c)) ? (g = f, g = A(f = la(d, f)) ? b + (la("/", f) || f) : a + g) : A(f = la(b, c)) ? g = b + f : b == c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g
        }
    }

    function ec(a, b, d) {
        hd(a, this);
        this.$$parse = function (c) {
            var e = la(a, c) || la(b, c), f;
            z(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", z(e) && (a = c, this.replace())) : (f = la(d, e), z(f) && (f = e));
            id(f, this);
            c = this.$$path;
            var e = a, g = /^\/[A-Z]:(\/.*)/;
            0 === f.indexOf(e) &&
            (f = f.replace(e, ""));
            g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
            this.$$path = c;
            this.$$compose()
        };
        this.$$compose = function () {
            var b = Sb(this.$$search), e = this.$$hash ? "#" + rb(this.$$hash) : "";
            this.$$url = cc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "")
        };
        this.$$parseLinkUrl = function (b, d) {
            return Ka(a) == Ka(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function jd(a, b, d) {
        this.$$html5 = !0;
        ec.apply(this, arguments);
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            a == Ka(c) ?
                f = c : (g = la(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function () {
            var b = Sb(this.$$search), e = this.$$hash ? "#" + rb(this.$$hash) : "";
            this.$$url = cc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + d + this.$$url
        }
    }

    function Gb(a) {
        return function () {
            return this[a]
        }
    }

    function kd(a, b) {
        return function (d) {
            if (z(d))return this[a];
            this[a] = b(d);
            this.$$compose();
            return this
        }
    }

    function pf() {
        var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (b) {
            return A(b) ? (a = b, this) :
                a
        };
        this.html5Mode = function (a) {
            return Oa(a) ? (b.enabled = a, this) : J(a) ? (Oa(a.enabled) && (b.enabled = a.enabled), Oa(a.requireBase) && (b.requireBase = a.requireBase), Oa(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
            function h(a, b, d) {
                var e = l.url(), f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state()
                } catch (g) {
                    throw l.url(e), l.$$state = f, g;
                }
            }

            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state,
                    b)
            }

            var l, m;
            m = c.baseHref();
            var n = c.url(), p;
            if (b.enabled) {
                if (!m && b.requireBase)throw Fb("nobase");
                p = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
                m = e.history ? dc : jd
            } else p = Ka(n), m = ec;
            var F = p.substr(0, Ka(p).lastIndexOf("/") + 1);
            l = new m(p, F, "#" + a);
            l.$$parseLinkUrl(n, n);
            l.$$state = c.state();
            var q = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = H(a.target); "a" !== oa(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var h = e.prop("href"), k = e.attr("href") || e.attr("xlink:href");
                    J(h) && "[object SVGAnimatedString]" === h.toString() && (h = sa(h.animVal).href);
                    q.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            kb(l.absUrl()) != kb(n) && c.url(l.absUrl(), !0);
            var x = !0;
            c.onUrlChange(function (a, b) {
                z(la(F, a)) ? g.location.href = a : (d.$evalAsync(function () {
                    var c = l.absUrl(), e = l.$$state, f;
                    a = kb(a);
                    l.$$parse(a);
                    l.$$state = b;
                    f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() === a && (f ? (l.$$parse(c), l.$$state = e, h(c, !1, e)) : (x = !1, k(c, e)))
                }), d.$$phase || d.$digest())
            });
            d.$watch(function () {
                var a = kb(c.url()), b = kb(l.absUrl()), f = c.state(), g = l.$$replace, m = a !== b || l.$$html5 && e.history && f !== l.$$state;
                if (x || m)x = !1, d.$evalAsync(function () {
                    var b = l.absUrl(), c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null :
                        l.$$state), k(a, f)))
                });
                l.$$replace = !1
            });
            return l
        }]
    }

    function qf() {
        var a = !0, b = this;
        this.debugEnabled = function (b) {
            return A(b) ? (a = b, this) : a
        };
        this.$get = ["$window", function (d) {
            function c(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = d.console || {}, e = b[a] || b.log || E;
                a = !1;
                try {
                    a = !!e.apply
                } catch (k) {
                }
                return a ? function () {
                    var a = [];
                    q(arguments, function (b) {
                        a.push(c(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Wa(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)throw ca("isecfld", b);
        return a
    }

    function eg(a) {
        return a + ""
    }

    function ta(a, b) {
        if (a) {
            if (a.constructor === a)throw ca("isecfn", b);
            if (a.window === a)throw ca("isecwindow", b);
            if (a.children &&
                (a.nodeName || a.prop && a.attr && a.find))throw ca("isecdom", b);
            if (a === Object)throw ca("isecobj", b);
        }
        return a
    }

    function ld(a, b) {
        if (a) {
            if (a.constructor === a)throw ca("isecfn", b);
            if (a === fg || a === gg || a === hg)throw ca("isecff", b);
        }
    }

    function Hb(a, b) {
        if (a && (a === (0).constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor))throw ca("isecaf", b);
    }

    function ig(a, b) {
        return "undefined" !== typeof a ? a : b
    }

    function md(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
    }

    function aa(a, b) {
        var d, c;
        switch (a.type) {
            case s.Program:
                d = !0;
                q(a.body, function (a) {
                    aa(a.expression, b);
                    d = d && a.expression.constant
                });
                a.constant = d;
                break;
            case s.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case s.UnaryExpression:
                aa(a.argument, b);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case s.BinaryExpression:
                aa(a.left, b);
                aa(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case s.LogicalExpression:
                aa(a.left,
                    b);
                aa(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case s.ConditionalExpression:
                aa(a.test, b);
                aa(a.alternate, b);
                aa(a.consequent, b);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case s.Identifier:
                a.constant = !1;
                a.toWatch = [a];
                break;
            case s.MemberExpression:
                aa(a.object, b);
                a.computed && aa(a.property, b);
                a.constant = a.object.constant && (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case s.CallExpression:
                d =
                    a.filter ? !b(a.callee.name).$stateful : !1;
                c = [];
                q(a.arguments, function (a) {
                    aa(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
                break;
            case s.AssignmentExpression:
                aa(a.left, b);
                aa(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case s.ArrayExpression:
                d = !0;
                c = [];
                q(a.elements, function (a) {
                    aa(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case s.ObjectExpression:
                d = !0;
                c = [];
                q(a.properties, function (a) {
                    aa(a.value, b);
                    d = d && a.value.constant;
                    a.value.constant || c.push.apply(c, a.value.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case s.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case s.LocalsExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function nd(a) {
        if (1 == a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : u
        }
    }

    function od(a) {
        return a.type === s.Identifier || a.type === s.MemberExpression
    }

    function pd(a) {
        if (1 === a.body.length && od(a.body[0].expression))return {
            type: s.AssignmentExpression,
            left: a.body[0].expression, right: {type: s.NGValueParameter}, operator: "="
        }
    }

    function qd(a) {
        return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression)
    }

    function rd(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function sd(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function Ib(a) {
        return "constructor" == a
    }

    function fc(a) {
        return D(a.valueOf) ? a.valueOf() : jg.call(a)
    }

    function rf() {
        var a = V(), b = V(), d = {
            "true": !0,
            "false": !1, "null": null, undefined: u
        };
        this.addLiteral = function (a, b) {
            d[a] = b
        };
        this.$get = ["$filter", function (c) {
            function e(d, e, g) {
                var p, t, G;
                g = g || x;
                switch (typeof d) {
                    case "string":
                        G = d = d.trim();
                        var C = g ? b : a;
                        p = C[G];
                        if (!p) {
                            ":" === d.charAt(0) && ":" === d.charAt(1) && (t = !0, d = d.substring(2));
                            p = g ? L : F;
                            var K = new gc(p);
                            p = (new hc(K, c, p)).parse(d);
                            p.constant ? p.$$watchDelegate = m : t ? p.$$watchDelegate = p.literal ? l : k : p.inputs && (p.$$watchDelegate = h);
                            g && (p = f(p));
                            C[G] = p
                        }
                        return n(p, e);
                    case "function":
                        return n(d, e);
                    default:
                        return n(E,
                            e)
                }
            }

            function f(a) {
                function b(c, d, e, f) {
                    var g = x;
                    x = !0;
                    try {
                        return a(c, d, e, f)
                    } finally {
                        x = g
                    }
                }

                if (!a)return a;
                b.$$watchDelegate = a.$$watchDelegate;
                b.assign = f(a.assign);
                b.constant = a.constant;
                b.literal = a.literal;
                for (var c = 0; a.inputs && c < a.inputs.length; ++c)a.inputs[c] = f(a.inputs[c]);
                b.inputs = a.inputs;
                return b
            }

            function g(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function h(a, b, c, d, e) {
                var f = d.inputs, h;
                if (1 === f.length) {
                    var k = g, f = f[0];
                    return a.$watch(function (a) {
                        var b =
                            f(a);
                        g(b, k) || (h = d(a, u, u, [b]), k = b && fc(b));
                        return h
                    }, b, c, e)
                }
                for (var l = [], m = [], n = 0, p = f.length; n < p; n++)l[n] = g, m[n] = null;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, e = f.length; c < e; c++) {
                        var k = f[c](a);
                        if (b || (b = !g(k, l[c])))m[c] = k, l[c] = k && fc(k)
                    }
                    b && (h = d(a, u, u, m));
                    return h
                }, b, c, e)
            }

            function k(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a;
                    D(b) && b.apply(this, arguments);
                    A(a) && d.$$postDigest(function () {
                        A(f) && e()
                    })
                }, c)
            }

            function l(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    q(a, function (a) {
                        A(a) ||
                        (b = !1)
                    });
                    return b
                }

                var f, g;
                return f = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    g = a;
                    D(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function () {
                        e(g) && f()
                    })
                }, c)
            }

            function m(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c)
            }

            function n(a, b) {
                if (!b)return a;
                var c = a.$$watchDelegate, d = !1, c = c !== l && c !== k ? function (c, e, f, g) {
                    f = d && g ? g[0] : a(c, e, f, g);
                    return b(f, c, e)
                } : function (c, d, e, f) {
                    e = a(c, d, e, f);
                    c = b(e, c, d);
                    return A(e) ? c : e
                };
                a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate :
                b.$stateful || (c.$$watchDelegate = h, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);
                return c
            }

            var p = Ga().noUnsafeEval, F = {csp: p, expensiveChecks: !1, literals: pa(d)}, L = {
                csp: p,
                expensiveChecks: !0,
                literals: pa(d)
            }, x = !1;
            e.$$runningExpensiveChecks = function () {
                return x
            };
            return e
        }]
    }

    function tf() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return td(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function uf() {
        this.$get = ["$browser", "$exceptionHandler", function (a, b) {
            return td(function (b) {
                a.defer(b)
            }, b)
        }]
    }

    function td(a,
                b) {
        function d() {
            this.$$state = {status: 0}
        }

        function c(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function e(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
                var a, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = u;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    a = e[f][c.status];
                    try {
                        D(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), b(h)
                    }
                }
            }))
        }

        function f() {
            this.promise = new d
        }

        var g = O("$q", TypeError);
        S(d.prototype, {
            then: function (a, b, c) {
                if (z(a) && z(b) &&
                    z(c))return this;
                var d = new f;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && e(this.$$state);
                return d.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a, b) {
                return this.then(function (b) {
                    return k(b, !0, a)
                }, function (b) {
                    return k(b, !1, a)
                }, b)
            }
        });
        S(f.prototype, {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a))
            }, $$resolve: function (a) {
                function d(a) {
                    k || (k = !0, h.$$resolve(a))
                }

                function f(a) {
                    k || (k = !0, h.$$reject(a))
                }

                var g, h = this, k = !1;
                try {
                    if (J(a) || D(a))g = a && a.then;
                    D(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state))
                } catch (l) {
                    f(l), b(l)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                e(this.promise.$$state)
            }, notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status &&
                d && d.length && a(function () {
                    for (var a, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        a = d[f][3];
                        try {
                            e.notify(D(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var h = function (a, b) {
            var c = new f;
            b ? c.resolve(a) : c.reject(a);
            return c.promise
        }, k = function (a, b, c) {
            var d = null;
            try {
                D(c) && (d = c())
            } catch (e) {
                return h(e, !1)
            }
            return d && D(d.then) ? d.then(function () {
                return h(a, b)
            }, function (a) {
                return h(a, !1)
            }) : h(a, b)
        }, l = function (a, b, c, d) {
            var e = new f;
            e.resolve(a);
            return e.promise.then(b, c, d)
        }, m = function (a) {
            if (!D(a))throw g("norslvr", a);
            var b = new f;
            a(function (a) {
                    b.resolve(a)
                },
                function (a) {
                    b.reject(a)
                });
            return b.promise
        };
        m.prototype = d.prototype;
        m.defer = function () {
            var a = new f;
            a.resolve = c(a, a.resolve);
            a.reject = c(a, a.reject);
            a.notify = c(a, a.notify);
            return a
        };
        m.reject = function (a) {
            var b = new f;
            b.reject(a);
            return b.promise
        };
        m.when = l;
        m.resolve = l;
        m.all = function (a) {
            var b = new f, c = 0, d = M(a) ? [] : {};
            q(a, function (a, e) {
                c++;
                l(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return m
    }

    function Df() {
        this.$get =
            ["$window", "$timeout", function (a, b) {
                var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function (a) {
                    var b = d(a);
                    return function () {
                        c(b)
                    }
                } : function (a) {
                    var c = b(a, 16.66, !1);
                    return function () {
                        b.cancel(c)
                    }
                };
                f.supported = e;
                return f
            }]
    }

    function sf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount =
                    0;
                this.$id = ++qb;
                this.$$ChildScope = null
            }

            b.prototype = a;
            return b
        }

        var b = 10, d = O("$rootScope"), c = null, e = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }

            function l(a) {
                9 === Da && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function m() {
                this.$id = ++qb;
                this.$$phase =
                    this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }

            function n(a) {
                if (w.$$phase)throw d("inprog", w.$$phase);
                w.$$phase = a
            }

            function p(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function F(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function s() {
            }

            function x() {
                for (; t.length;)try {
                    t.shift()()
                } catch (a) {
                    f(a)
                }
                e =
                    null
            }

            function r() {
                null === e && (e = h.defer(function () {
                    w.$apply(x)
                }))
            }

            m.prototype = {
                constructor: m, $new: function (b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (b || c != this) && d.$on("$destroy", k);
                    return d
                }, $watch: function (a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate)return f.$$watchDelegate(this, b, d, f,
                        a);
                    var h = this, k = h.$$watchers, l = {fn: b, last: s, get: f, exp: e || a, eq: !!d};
                    c = null;
                    D(b) || (l.fn = E);
                    k || (k = h.$$watchers = []);
                    k.unshift(l);
                    p(this, 1);
                    return function () {
                        0 <= bb(k, l) && p(h, -1);
                        c = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1, b(e, e, g)) : b(e, d, g)
                    }

                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                    if (!a.length) {
                        var l = !0;
                        g.$evalAsync(function () {
                            l && b(e, e, g)
                        });
                        return function () {
                            l = !1
                        }
                    }
                    if (1 === a.length)return this.$watch(a[0], function (a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    q(a, function (a,
                                   b) {
                        var k = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(k)
                    });
                    return function () {
                        for (; f.length;)f.shift()()
                    }
                }, $watchCollection: function (a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!z(e)) {
                            if (J(e))if (za(e))for (f !== n && (f = n, v = f.length = 0, l++), a = e.length, v !== a && (l++, f.length = v = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
                                f !== p && (f = p = {}, v = 0, l++);
                                a = 0;
                                for (b in e)va.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (v++, f[b] = g, l++));
                                if (v >
                                    a)for (b in l++, f)va.call(e, b) || (v--, delete f[b])
                            } else f !== e && (f = e, l++);
                            return l
                        }
                    }

                    c.$stateful = !0;
                    var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), n = [], p = {}, r = !0, v = 0;
                    return this.$watch(m, function () {
                        r ? (r = !1, b(e, e, d)) : b(e, h, d);
                        if (k)if (J(e))if (za(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++)h[a] = e[a]
                        } else for (a in h = {}, e)va.call(e, a) && (h[a] = e[a]); else h = e
                    })
                }, $digest: function () {
                    var a, g, k, l, m, p, r, q, t = b, F, A = [], z, y;
                    n("$digest");
                    h.$$checkUrlChange();
                    this === w && null !== e && (h.defer.cancel(e), x());
                    c = null;
                    do {
                        q = !1;
                        for (F = this; v.length;) {
                            try {
                                y = v.shift(), y.scope.$eval(y.expression, y.locals)
                            } catch (E) {
                                f(E)
                            }
                            c = null
                        }
                        a:do {
                            if (p = F.$$watchers)for (r = p.length; r--;)try {
                                if (a = p[r])if (m = a.get, (g = m(F)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k)))q = !0, c = a, a.last = a.eq ? pa(g, null) : g, l = a.fn, l(g, k === s ? g : k, F), 5 > t && (z = 4 - t, A[z] || (A[z] = []), A[z].push({
                                    msg: D(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: g,
                                    oldVal: k
                                })); else if (a === c) {
                                    q = !1;
                                    break a
                                }
                            } catch (H) {
                                f(H)
                            }
                            if (!(p = F.$$watchersCount &&
                                    F.$$childHead || F !== this && F.$$nextSibling))for (; F !== this && !(p = F.$$nextSibling);)F = F.$parent
                        } while (F = p);
                        if ((q || v.length) && !t--)throw w.$$phase = null, d("infdig", b, A);
                    } while (q || v.length);
                    for (w.$$phase = null; u.length;)try {
                        u.shift()()
                    } catch (J) {
                        f(J)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === w && h.$$applicationDestroyed();
                        p(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount)F(this, this.$$listenerCount[b], b);
                        a && a.$$childHead ==
                        this && (a.$$childHead = this.$$nextSibling);
                        a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = E;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return E
                        };
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        l(this)
                    }
                }, $eval: function (a, b) {
                    return g(a)(this, b)
                }, $evalAsync: function (a, b) {
                    w.$$phase ||
                    v.length || h.defer(function () {
                        v.length && w.$digest()
                    });
                    v.push({scope: this, expression: g(a), locals: b})
                }, $$postDigest: function (a) {
                    u.push(a)
                }, $apply: function (a) {
                    try {
                        n("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            w.$$phase = null
                        }
                    } catch (b) {
                        f(b)
                    } finally {
                        try {
                            w.$digest()
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && t.push(b);
                    a = g(a);
                    r()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] =
                        0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, F(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var c = [], d, e = this, g = !1, h = {
                        name: a, targetScope: e, stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = cb([h], arguments, 1), l, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        l = 0;
                        for (m = d.length; l < m; l++)if (d[l])try {
                            d[l].apply(null, k)
                        } catch (n) {
                            f(n)
                        } else d.splice(l, 1), l--, m--;
                        if (g)return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope = null;
                    return h
                }, $broadcast: function (a, b) {
                    var c = this, d = this, e = {
                        name: a, targetScope: this, preventDefault: function () {
                            e.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a])return e;
                    for (var g = cb([e], arguments, 1), h, k; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++)if (d[h])try {
                            d[h].apply(null, g)
                        } catch (l) {
                            f(l)
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
                    }
                    e.currentScope =
                        null;
                    return e
                }
            };
            var w = new m, v = w.$$asyncQueue = [], u = w.$$postDigestQueue = [], t = w.$$applyAsyncQueue = [];
            return w
        }]
    }

    function le() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return A(b) ? (a = b, this) : a
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return A(a) ? (b = a, this) : b
        };
        this.$get = function () {
            return function (d, c) {
                var e = c ? b : a, f;
                f = sa(d).href;
                return "" === f || f.match(e) ? d : "unsafe:" + f
            }
        }
    }

    function kg(a) {
        if ("self" === a)return a;
        if (y(a)) {
            if (-1 < a.indexOf("***"))throw ua("iwcard", a);
            a = ud(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + a + "$")
        }
        if (Za(a))return new RegExp("^" + a.source + "$");
        throw ua("imatcher");
    }

    function vd(a) {
        var b = [];
        A(a) && q(a, function (a) {
            b.push(kg(a))
        });
        return b
    }

    function wf() {
        this.SCE_CONTEXTS = ma;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function (b) {
            arguments.length && (a = vd(b));
            return a
        };
        this.resourceUrlBlacklist = function (a) {
            arguments.length && (b = vd(a));
            return b
        };
        this.$get = ["$injector",
            function (d) {
                function c(a, b) {
                    return "self" === a ? gd(b) : !!a.exec(b.href)
                }

                function e(a) {
                    var b = function (a) {
                        this.$$unwrapTrustedValue = function () {
                            return a
                        }
                    };
                    a && (b.prototype = new a);
                    b.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    };
                    b.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    };
                    return b
                }

                var f = function (a) {
                    throw ua("unsafe");
                };
                d.has("$sanitize") && (f = d.get("$sanitize"));
                var g = e(), h = {};
                h[ma.HTML] = e(g);
                h[ma.CSS] = e(g);
                h[ma.URL] = e(g);
                h[ma.JS] = e(g);
                h[ma.RESOURCE_URL] =
                    e(h[ma.URL]);
                return {
                    trustAs: function (a, b) {
                        var c = h.hasOwnProperty(a) ? h[a] : null;
                        if (!c)throw ua("icontext", a, b);
                        if (null === b || z(b) || "" === b)return b;
                        if ("string" !== typeof b)throw ua("itype", a);
                        return new c(b)
                    }, getTrusted: function (d, e) {
                        if (null === e || z(e) || "" === e)return e;
                        var g = h.hasOwnProperty(d) ? h[d] : null;
                        if (g && e instanceof g)return e.$$unwrapTrustedValue();
                        if (d === ma.RESOURCE_URL) {
                            var g = sa(e.toString()), n, p, q = !1;
                            n = 0;
                            for (p = a.length; n < p; n++)if (c(a[n], g)) {
                                q = !0;
                                break
                            }
                            if (q)for (n = 0, p = b.length; n < p; n++)if (c(b[n],
                                    g)) {
                                q = !1;
                                break
                            }
                            if (q)return e;
                            throw ua("insecurl", e.toString());
                        }
                        if (d === ma.HTML)return f(e);
                        throw ua("unsafe");
                    }, valueOf: function (a) {
                        return a instanceof g ? a.$$unwrapTrustedValue() : a
                    }
                }
            }]
    }

    function vf() {
        var a = !0;
        this.enabled = function (b) {
            arguments.length && (a = !!b);
            return a
        };
        this.$get = ["$parse", "$sceDelegate", function (b, d) {
            if (a && 8 > Da)throw ua("iequirks");
            var c = ia(ma);
            c.isEnabled = function () {
                return a
            };
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs = c.getTrusted = function (a, b) {
                return b
            },
                c.valueOf = $a);
            c.parseAs = function (a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function (b) {
                    return c.getTrusted(a, b)
                })
            };
            var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
            q(ma, function (a, b) {
                var d = N(b);
                c[fb("parse_as_" + d)] = function (b) {
                    return e(a, b)
                };
                c[fb("get_trusted_" + d)] = function (b) {
                    return f(a, b)
                };
                c[fb("trust_as_" + d)] = function (b) {
                    return g(a, b)
                }
            });
            return c
        }]
    }

    function xf() {
        this.$get = ["$window", "$document", function (a, b) {
            var d = {}, c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
                e = Y((/android (\d+)/.exec(N((a.navigator || {}).userAgent)) || [])[1]), f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, h, k = /^(Moz|webkit|ms)(?=[A-Z])/, l = g.body && g.body.style, m = !1, n = !1;
            if (l) {
                for (var p in l)if (m = k.exec(p)) {
                    h = m[0];
                    h = h.substr(0, 1).toUpperCase() + h.substr(1);
                    break
                }
                h || (h = "WebkitOpacity" in l && "webkit");
                m = !!("transition" in l || h + "Transition" in l);
                n = !!("animation" in l || h + "Animation" in l);
                !e || m && n || (m = y(l.webkitTransition), n = y(l.webkitAnimation))
            }
            return {
                history: !(!c || 4 > e || f), hasEvent: function (a) {
                    if ("input" ===
                        a && 11 >= Da)return !1;
                    if (z(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b
                    }
                    return d[a]
                }, csp: Ga(), vendorPrefix: h, transitions: m, animations: n, android: e
            }
        }]
    }

    function zf() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
            function f(g, h) {
                f.totalPendingRequests++;
                y(g) && b.get(g) || (g = e.getTrustedResourceUrl(g));
                var k = d.defaults && d.defaults.transformResponse;
                M(k) ? k = k.filter(function (a) {
                    return a !== ac
                }) : k === ac && (k = null);
                return d.get(g,
                    S({cache: b, transformResponse: k}, a))["finally"](function () {
                    f.totalPendingRequests--
                }).then(function (a) {
                    b.put(g, a.data);
                    return a.data
                }, function (a) {
                    if (!h)throw lg("tpload", g, a.status, a.statusText);
                    return c.reject(a)
                })
            }

            f.totalPendingRequests = 0;
            return f
        }]
    }

    function Af() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
            return {
                findBindings: function (a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    q(a, function (a) {
                        var c = ea.element(a).data("$binding");
                        c && q(c, function (c) {
                            d ? (new RegExp("(^|\\s)" +
                                ud(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                }, findModels: function (a, b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length)return k
                    }
                }, getLocation: function () {
                    return d.url()
                }, setLocation: function (b) {
                    b !== d.url() && (d.url(b), a.$digest())
                }, whenStable: function (a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function Bf() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler",
            function (a, b, d, c, e) {
                function f(f, k, l) {
                    D(f) || (l = k, k = f, f = E);
                    var m = Aa.call(arguments, 3), n = A(l) && !l, p = (n ? c : d).defer(), q = p.promise, s;
                    s = b.defer(function () {
                        try {
                            p.resolve(f.apply(null, m))
                        } catch (b) {
                            p.reject(b), e(b)
                        } finally {
                            delete g[q.$$timeoutId]
                        }
                        n || a.$apply()
                    }, k);
                    q.$$timeoutId = s;
                    g[s] = p;
                    return q
                }

                var g = {};
                f.cancel = function (a) {
                    return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                };
                return f
            }]
    }

    function sa(a) {
        Da && (Z.setAttribute("href", a), a =
            Z.href);
        Z.setAttribute("href", a);
        return {
            href: Z.href,
            protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "",
            host: Z.host,
            search: Z.search ? Z.search.replace(/^\?/, "") : "",
            hash: Z.hash ? Z.hash.replace(/^#/, "") : "",
            hostname: Z.hostname,
            port: Z.port,
            pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname
        }
    }

    function gd(a) {
        a = y(a) ? sa(a) : a;
        return a.protocol === wd.protocol && a.host === wd.host
    }

    function Cf() {
        this.$get = da(T)
    }

    function xd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var d = a[0] || {},
            c = {}, e = "";
        return function () {
            var a, g, h, k, l;
            a = d.cookie || "";
            if (a !== e)for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++)g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), z(c[l]) && (c[l] = b(g.substring(k + 1))));
            return c
        }
    }

    function Gf() {
        this.$get = xd
    }

    function Jc(a) {
        function b(d, c) {
            if (J(d)) {
                var e = {};
                q(d, function (a, c) {
                    e[c] = b(c, a)
                });
                return e
            }
            return a.factory(d + "Filter", c)
        }

        this.register = b;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        b("currency", yd);
        b("date", zd);
        b("filter", mg);
        b("json", ng);
        b("limitTo", og);
        b("lowercase", pg);
        b("number", Ad);
        b("orderBy", Bd);
        b("uppercase", qg)
    }

    function mg() {
        return function (a, b, d) {
            if (!za(a)) {
                if (null == a)return a;
                throw O("filter")("notarray", a);
            }
            var c;
            switch (ic(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    c = !0;
                case "object":
                    b = rg(b, d, c);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }

    function rg(a, b, d) {
        var c = J(a) && "$" in a;
        !0 === b ? b = na : D(b) || (b = function (a, b) {
            if (z(a))return !1;
            if (null === a || null === b)return a ===
                b;
            if (J(b) || J(a) && !rc(a))return !1;
            a = N("" + a);
            b = N("" + b);
            return -1 !== a.indexOf(b)
        });
        return function (e) {
            return c && !J(e) ? Ma(e, a.$, b, !1) : Ma(e, a, b, d)
        }
    }

    function Ma(a, b, d, c, e) {
        var f = ic(a), g = ic(b);
        if ("string" === g && "!" === b.charAt(0))return !Ma(a, b.substring(1), d, c);
        if (M(a))return a.some(function (a) {
            return Ma(a, b, d, c)
        });
        switch (f) {
            case "object":
                var h;
                if (c) {
                    for (h in a)if ("$" !== h.charAt(0) && Ma(a[h], b, d, !0))return !0;
                    return e ? !1 : Ma(a, b, d, !1)
                }
                if ("object" === g) {
                    for (h in b)if (e = b[h], !D(e) && !z(e) && (f = "$" === h, !Ma(f ? a : a[h],
                            e, d, f, f)))return !1;
                    return !0
                }
                return d(a, b);
            case "function":
                return !1;
            default:
                return d(a, b)
        }
    }

    function ic(a) {
        return null === a ? "null" : typeof a
    }

    function yd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, e) {
            z(c) && (c = b.CURRENCY_SYM);
            z(e) && (e = b.PATTERNS[1].maxFrac);
            return null == a ? a : Cd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c)
        }
    }

    function Ad(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Cd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function sg(a) {
        var b = 0, d, c, e, f, g;
        -1 <
        (c = a.indexOf(Dd)) && (a = a.replace(Dd, ""));
        0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);
        for (e = 0; a.charAt(e) == jc; e++);
        if (e == (g = a.length))d = [0], c = 1; else {
            for (g--; a.charAt(g) == jc;)g--;
            c -= e;
            d = [];
            for (f = 0; e <= g; e++, f++)d[f] = +a.charAt(e)
        }
        c > Ed && (d = d.splice(0, Ed - 1), b = c - 1, c = 1);
        return {d: d, e: b, i: c}
    }

    function tg(a, b, d, c) {
        var e = a.d, f = e.length - a.i;
        b = z(b) ? Math.min(Math.max(d, f), c) : +b;
        d = b + a.i;
        c = e[d];
        if (0 < d) {
            e.splice(Math.max(a.i, d));
            for (var g = d; g < e.length; g++)e[g] = 0
        } else for (f =
                        Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++)e[g] = 0;
        if (5 <= c)if (0 > d - 1) {
            for (c = 0; c > d; c--)e.unshift(0), a.i++;
            e.unshift(1);
            a.i++
        } else e[d - 1]++;
        for (; f < Math.max(0, b); f++)e.push(0);
        if (b = e.reduceRight(function (a, b, c, d) {
                b += a;
                d[c] = b % 10;
                return Math.floor(b / 10)
            }, 0))e.unshift(b), a.i++
    }

    function Cd(a, b, d, c, e) {
        if (!y(a) && !R(a) || isNaN(a))return "";
        var f = !isFinite(a), g = !1, h = Math.abs(a) + "", k = "";
        if (f)k = "\u221e"; else {
            g = sg(h);
            tg(g, e, b.minFrac, b.maxFrac);
            k = g.d;
            h = g.i;
            e = g.e;
            f = [];
            for (g = k.reduce(function (a,
                                        b) {
                return a && !b
            }, !0); 0 > h;)k.unshift(0), h++;
            0 < h ? f = k.splice(h) : (f = k, k = [0]);
            h = [];
            for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize).join("")); k.length > b.gSize;)h.unshift(k.splice(-b.gSize).join(""));
            k.length && h.unshift(k.join(""));
            k = h.join(d);
            f.length && (k += c + f.join(""));
            e && (k += "e+" + e)
        }
        return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf
    }

    function Jb(a, b, d, c) {
        var e = "";
        if (0 > a || c && 0 >= a)c ? a = -a + 1 : (a = -a, e = "-");
        for (a = "" + a; a.length < b;)a = jc + a;
        d && (a = a.substr(a.length - b));
        return e + a
    }

    function X(a, b, d, c, e) {
        d =
            d || 0;
        return function (f) {
            f = f["get" + a]();
            if (0 < d || f > -d)f += d;
            0 === f && -12 == d && (f = 12);
            return Jb(f, b, c, e)
        }
    }

    function lb(a, b, d) {
        return function (c, e) {
            var f = c["get" + a](), g = vb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
            return e[g][f]
        }
    }

    function Fd(a) {
        var b = (new Date(a, 0, 1)).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Gd(a) {
        return function (b) {
            var d = Fd(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
            b = 1 + Math.round(b / 6048E5);
            return Jb(b, a)
        }
    }

    function kc(a, b) {
        return 0 >= a.getFullYear() ?
            b.ERAS[0] : b.ERAS[1]
    }

    function zd(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = Y(b[9] + b[10]), g = Y(b[9] + b[11]));
                h.call(a, Y(b[1]), Y(b[2]) - 1, Y(b[3]));
                f = Y(b[4] || 0) - f;
                g = Y(b[5] || 0) - g;
                h = Y(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, f, g, h, b)
            }
            return a
        }

        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, f) {
            var g = "", h =
                [], k, l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            y(c) && (c = ug.test(c) ? Y(c) : b(c));
            R(c) && (c = new Date(c));
            if (!fa(c) || !isFinite(c.getTime()))return c;
            for (; d;)(l = vg.exec(d)) ? (h = cb(h, l, 1), d = h.pop()) : (h.push(d), d = null);
            var m = c.getTimezoneOffset();
            f && (m = vc(f, m), c = Rb(c, f, !0));
            q(h, function (b) {
                k = wg[b];
                g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function ng() {
        return function (a, b) {
            z(b) && (b = 2);
            return db(a, b)
        }
    }

    function og() {
        return function (a, b, d) {
            b = Infinity ===
            Math.abs(Number(b)) ? Number(b) : Y(b);
            if (isNaN(b))return a;
            R(a) && (a = a.toString());
            if (!M(a) && !y(a))return a;
            d = !d || isNaN(d) ? 0 : Y(d);
            d = 0 > d ? Math.max(0, a.length + d) : d;
            return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d)
        }
    }

    function Bd(a) {
        function b(b, d) {
            d = d ? -1 : 1;
            return b.map(function (b) {
                var c = 1, h = $a;
                if (D(b))h = b; else if (y(b)) {
                    if ("+" == b.charAt(0) || "-" == b.charAt(0))c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);
                    if ("" !== b && (h = a(b), h.constant))var k = h(), h = function (a) {
                        return a[k]
                    }
                }
                return {
                    get: h,
                    descending: c * d
                }
            })
        }

        function d(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        return function (a, e, f) {
            if (null == a)return a;
            if (!za(a))throw O("orderBy")("notarray", a);
            M(e) || (e = [e]);
            0 === e.length && (e = ["+"]);
            var g = b(e, f);
            g.push({
                get: function () {
                    return {}
                }, descending: f ? -1 : 1
            });
            a = Array.prototype.map.call(a, function (a, b) {
                return {
                    value: a, predicateValues: g.map(function (c) {
                        var e = c.get(a);
                        c = typeof e;
                        if (null === e)c = "string", e = "null"; else if ("string" === c)e = e.toLowerCase(); else if ("object" ===
                            c)a:{
                            if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e)))break a;
                            if (rc(e) && (e = e.toString(), d(e)))break a;
                            e = b
                        }
                        return {value: e, type: c}
                    })
                }
            });
            a.sort(function (a, b) {
                for (var c = 0, d = 0, e = g.length; d < e; ++d) {
                    var c = a.predicateValues[d], f = b.predicateValues[d], q = 0;
                    c.type === f.type ? c.value !== f.value && (q = c.value < f.value ? -1 : 1) : q = c.type < f.type ? -1 : 1;
                    if (c = q * g[d].descending)break
                }
                return c
            });
            return a = a.map(function (a) {
                return a.value
            })
        }
    }

    function Na(a) {
        D(a) && (a = {link: a});
        a.restrict = a.restrict || "AC";
        return da(a)
    }

    function Hd(a,
                b, d, c, e) {
        var f = this, g = [];
        f.$error = {};
        f.$$success = {};
        f.$pending = u;
        f.$name = e(b.name || b.ngForm || "")(d);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        f.$$parentForm = Kb;
        f.$rollbackViewValue = function () {
            q(g, function (a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function () {
            q(g, function (a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function (a) {
            Ta(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a);
            a.$$parentForm = f
        };
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] =
                a;
            a.$name = b
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            q(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            });
            q(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            q(f.$$success, function (b, c) {
                f.$setValidity(c, null, a)
            });
            bb(g, a);
            a.$$parentForm = Kb
        };
        Id({
            ctrl: this, $element: a, set: function (a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (bb(d, c), 0 === d.length && delete a[b])
            }, $animate: c
        });
        f.$setDirty = function () {
            c.removeClass(a, Xa);
            c.addClass(a,
                Lb);
            f.$dirty = !0;
            f.$pristine = !1;
            f.$$parentForm.$setDirty()
        };
        f.$setPristine = function () {
            c.setClass(a, Xa, Lb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            q(g, function (a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function () {
            q(g, function (a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function () {
            c.addClass(a, "ng-submitted");
            f.$submitted = !0;
            f.$$parentForm.$setSubmitted()
        }
    }

    function lc(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function mb(a, b, d, c, e, f) {
        var g = N(b[0].type);
        if (!e.android) {
            var h =
                !1;
            b.on("compositionstart", function () {
                h = !0
            });
            b.on("compositionend", function () {
                h = !1;
                l()
            })
        }
        var k, l = function (a) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim || (e = W(e));
                (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input"))b.on("input", l); else {
            var m = function (a, b, c) {
                k || (k = f.defer(function () {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b ||
                m(a, this, this.value)
            });
            if (e.hasEvent("paste"))b.on("paste cut", m)
        }
        b.on("change", l);
        if (Jd[g] && c.$$hasNativeValidators && g === d.type)b.on("keydown wheel mousedown", function (a) {
            if (!k) {
                var b = this.validity, c = b.badInput, d = b.typeMismatch;
                k = f.defer(function () {
                    k = null;
                    b.badInput === c && b.typeMismatch === d || l(a)
                })
            }
        });
        c.$render = function () {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function Mb(a, b) {
        return function (d, c) {
            var e, f;
            if (fa(d))return d;
            if (y(d)) {
                '"' == d.charAt(0) && '"' == d.charAt(d.length -
                    1) && (d = d.substring(1, d.length - 1));
                if (xg.test(d))return new Date(d);
                a.lastIndex = 0;
                if (e = a.exec(d))return e.shift(), f = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1E3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, q(e, function (a, c) {
                    c < b.length && (f[b[c]] = +a)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function nb(a, b, d, c) {
        return function (e, f, g, h, k, l, m) {
            function n(a) {
                return a && !(a.getTime &&
                    a.getTime() !== a.getTime())
            }

            function p(a) {
                return A(a) && !fa(a) ? d(a) || u : a
            }

            Kd(e, f, g, h);
            mb(e, f, g, h, k, l);
            var q = h && h.$options && h.$options.timezone, s;
            h.$$parserName = a;
            h.$parsers.push(function (a) {
                return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, s), q && (a = Rb(a, q)), a) : u
            });
            h.$formatters.push(function (a) {
                if (a && !fa(a))throw ob("datefmt", a);
                if (n(a))return (s = a) && q && (s = Rb(s, q, !0)), m("date")(a, c, q);
                s = null;
                return ""
            });
            if (A(g.min) || g.ngMin) {
                var x;
                h.$validators.min = function (a) {
                    return !n(a) || z(x) || d(a) >= x
                };
                g.$observe("min", function (a) {
                    x =
                        p(a);
                    h.$validate()
                })
            }
            if (A(g.max) || g.ngMax) {
                var r;
                h.$validators.max = function (a) {
                    return !n(a) || z(r) || d(a) <= r
                };
                g.$observe("max", function (a) {
                    r = p(a);
                    h.$validate()
                })
            }
        }
    }

    function Kd(a, b, d, c) {
        (c.$$hasNativeValidators = J(b[0].validity)) && c.$parsers.push(function (a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? u : a
        })
    }

    function Ld(a, b, d, c, e) {
        if (A(c)) {
            a = a(c);
            if (!a.constant)throw ob("constexpr", d, c);
            return a(b)
        }
        return e
    }

    function mc(a, b) {
        a = "ngClass" + a;
        return ["$animate", function (d) {
            function c(a, b) {
                var c =
                    [], d = 0;
                a:for (; d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++)if (e == b[m])continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                var b = [];
                return M(a) ? (q(a, function (a) {
                    b = b.concat(e(a))
                }), b) : y(a) ? a.split(" ") : J(a) ? (q(a, function (a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }

            return {
                restrict: "AC", link: function (f, g, h) {
                    function k(a, b) {
                        var c = g.data("$classCounts") || V(), d = [];
                        q(a, function (a) {
                            if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }

                    function l(a) {
                        if (!0 === b || f.$index %
                            2 === b) {
                            var l = e(a || []);
                            if (!m) {
                                var q = k(l, 1);
                                h.$addClass(q)
                            } else if (!na(a, m)) {
                                var s = e(m), q = c(l, s), l = c(s, l), q = k(q, 1), l = k(l, -1);
                                q && q.length && d.addClass(g, q);
                                l && l.length && d.removeClass(g, l)
                            }
                        }
                        m = ia(a)
                    }

                    var m;
                    f.$watch(h[a], l, !0);
                    h.$observe("class", function (b) {
                        l(f.$eval(h[a]))
                    });
                    "ngClass" !== a && f.$watch("$index", function (c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var l = e(f.$eval(h[a]));
                            g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }

    function Id(a) {
        function b(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b &&
            f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function d(a, c) {
            a = a ? "-" + zc(a, "-") : "";
            b(pb + a, !0 === c);
            b(Md + a, !1 === c)
        }

        var c = a.ctrl, e = a.$element, f = {}, g = a.set, h = a.unset, k = a.$animate;
        f[Md] = !(f[pb] = e.hasClass(pb));
        c.$setValidity = function (a, e, f) {
            z(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Nd(c.$pending) && (c.$pending = u));
            Oa(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));
            c.$pending ? (b(Od, !0), c.$valid = c.$invalid =
                u, d("", null)) : (b(Od, !1), c.$valid = Nd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));
            e = c.$pending && c.$pending[a] ? u : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
            d(a, e);
            c.$$parentForm.$setValidity(a, e, c)
        }
    }

    function Nd(a) {
        if (a)for (var b in a)if (a.hasOwnProperty(b))return !1;
        return !0
    }

    var yg = /^\/(.+)\/([a-z]*)$/, va = Object.prototype.hasOwnProperty, N = function (a) {
            return y(a) ? a.toLowerCase() : a
        }, vb = function (a) {
            return y(a) ? a.toUpperCase() : a
        }, Da, H, $, Aa = [].slice, Yf = [].splice, zg = [].push, ka = Object.prototype.toString, sc = Object.getPrototypeOf,
        Ba = O("ng"), ea = T.angular || (T.angular = {}), Tb, qb = 0;
    Da = P.documentMode;
    E.$inject = [];
    $a.$inject = [];
    var M = Array.isArray, Zd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, W = function (a) {
        return y(a) ? a.trim() : a
    }, ud = function (a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, Ga = function () {
        if (!A(Ga.rules)) {
            var a = P.querySelector("[ng-csp]") || P.querySelector("[data-ng-csp]");
            if (a) {
                var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                Ga.rules = {
                    noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                    noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                }
            } else {
                a = Ga;
                try {
                    new Function(""), b = !1
                } catch (d) {
                    b = !0
                }
                a.rules = {noUnsafeEval: b, noInlineStyle: !1}
            }
        }
        return Ga.rules
    }, sb = function () {
        if (A(sb.name_))return sb.name_;
        var a, b, d = Qa.length, c, e;
        for (b = 0; b < d; ++b)if (c = Qa[b], a = P.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
            e = a.getAttribute(c + "jq");
            break
        }
        return sb.name_ = e
    }, be = /:/g, Qa = ["ng-", "data-ng-", "ng:", "x-ng-"], ge = /[A-Z]/g, Ac = !1, Pa = 3, ke = {
        full: "1.5.3",
        major: 1, minor: 5, dot: 3, codeName: "diplohaplontic-meiosis"
    };
    U.expando = "ng339";
    var hb = U.cache = {}, Mf = 1;
    U._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var Hf = /([\:\-\_]+(.))/g, If = /^moz([A-Z])/, zb = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Vb = O("jqLite"), Lf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Ub = /<|&#?\w+;/, Jf = /<([\w:-]+)/, Kf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ha = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2,
            "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ha.optgroup = ha.option;
    ha.tbody = ha.tfoot = ha.colgroup = ha.caption = ha.thead;
    ha.th = ha.td;
    var Rf = Node.prototype.contains || function (a) {
            return !!(this.compareDocumentPosition(a) & 16)
        }, Ra = U.prototype = {
        ready: function (a) {
            function b() {
                d || (d = !0, a())
            }

            var d = !1;
            "complete" === P.readyState ? setTimeout(b) : (this.on("DOMContentLoaded", b), U(T).on("load", b))
        }, toString: function () {
            var a =
                [];
            q(this, function (b) {
                a.push("" + b)
            });
            return "[" + a.join(", ") + "]"
        }, eq: function (a) {
            return 0 <= a ? H(this[a]) : H(this[this.length + a])
        }, length: 0, push: zg, sort: [].sort, splice: [].splice
    }, Eb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function (a) {
        Eb[N(a)] = a
    });
    var Sc = {};
    q("input select option textarea button form details".split(" "), function (a) {
        Sc[a] = !0
    });
    var $c = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    q({
        data: Xb, removeData: gb,
        hasData: function (a) {
            for (var b in hb[a.ng339])return !0;
            return !1
        }, cleanData: function (a) {
            for (var b = 0, d = a.length; b < d; b++)gb(a[b])
        }
    }, function (a, b) {
        U[b] = a
    });
    q({
        data: Xb, inheritedData: Db, scope: function (a) {
            return H.data(a, "$scope") || Db(a.parentNode || a, ["$isolateScope", "$scope"])
        }, isolateScope: function (a) {
            return H.data(a, "$isolateScope") || H.data(a, "$isolateScopeNoTemplate")
        }, controller: Pc, injector: function (a) {
            return Db(a, "$injector")
        }, removeAttr: function (a, b) {
            a.removeAttribute(b)
        }, hasClass: Ab, css: function (a,
                                        b, d) {
            b = fb(b);
            if (A(d))a.style[b] = d; else return a.style[b]
        }, attr: function (a, b, d) {
            var c = a.nodeType;
            if (c !== Pa && 2 !== c && 8 !== c)if (c = N(b), Eb[c])if (A(d))d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c)); else return a[b] || (a.attributes.getNamedItem(b) || E).specified ? c : u; else if (A(d))a.setAttribute(b, d); else if (a.getAttribute)return a = a.getAttribute(b, 2), null === a ? u : a
        }, prop: function (a, b, d) {
            if (A(d))a[b] = d; else return a[b]
        }, text: function () {
            function a(a, d) {
                if (z(d)) {
                    var c = a.nodeType;
                    return 1 === c || c ===
                    Pa ? a.textContent : ""
                }
                a.textContent = d
            }

            a.$dv = "";
            return a
        }(), val: function (a, b) {
            if (z(b)) {
                if (a.multiple && "select" === oa(a)) {
                    var d = [];
                    q(a.options, function (a) {
                        a.selected && d.push(a.value || a.text)
                    });
                    return 0 === d.length ? null : d
                }
                return a.value
            }
            a.value = b
        }, html: function (a, b) {
            if (z(b))return a.innerHTML;
            xb(a, !0);
            a.innerHTML = b
        }, empty: Qc
    }, function (a, b) {
        U.prototype[b] = function (b, c) {
            var e, f, g = this.length;
            if (a !== Qc && z(2 == a.length && a !== Ab && a !== Pc ? b : c)) {
                if (J(b)) {
                    for (e = 0; e < g; e++)if (a === Xb)a(this[e], b); else for (f in b)a(this[e],
                        f, b[f]);
                    return this
                }
                e = a.$dv;
                g = z(e) ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = a(this[f], b, c);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++)a(this[e], b, c);
            return this
        }
    });
    q({
        removeData: gb, on: function (a, b, d, c) {
            if (A(c))throw Vb("onargs");
            if (Kc(a)) {
                c = yb(a, !0);
                var e = c.events, f = c.handle;
                f || (f = c.handle = Of(a, e));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, h = function (b, c, g) {
                    var h = e[b];
                    h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));
                    h.push(d)
                }; g--;)b = c[g], zb[b] ? (h(zb[b], Qf),
                    h(b, u, !0)) : h(b)
            }
        }, off: Oc, one: function (a, b, d) {
            a = H(a);
            a.on(b, function e() {
                a.off(b, d);
                a.off(b, e)
            });
            a.on(b, d)
        }, replaceWith: function (a, b) {
            var d, c = a.parentNode;
            xb(a);
            q(new U(b), function (b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b
            })
        }, children: function (a) {
            var b = [];
            q(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            });
            return b
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new U(b);
                for (var d = 0, c = b.length; d < c; d++)a.appendChild(b[d])
            }
        },
        prepend: function (a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                q(new U(b), function (b) {
                    a.insertBefore(b, d)
                })
            }
        }, wrap: function (a, b) {
            Mc(a, H(b).eq(0).clone()[0])
        }, remove: Yb, detach: function (a) {
            Yb(a, !0)
        }, after: function (a, b) {
            var d = a, c = a.parentNode;
            b = new U(b);
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e];
                c.insertBefore(g, d.nextSibling);
                d = g
            }
        }, addClass: Cb, removeClass: Bb, toggleClass: function (a, b, d) {
            b && q(b.split(" "), function (b) {
                var e = d;
                z(e) && (e = !Ab(a, b));
                (e ? Cb : Bb)(a, b)
            })
        }, parent: function (a) {
            return (a = a.parentNode) &&
            11 !== a.nodeType ? a : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        }, clone: Wb, triggerHandler: function (a, b, d) {
            var c, e, f = b.type || b, g = yb(a);
            if (g = (g = g && g.events) && g[f])c = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: E, type: f, target: a
            }, b.type && (c = S(c, b)), b = ia(g), e = d ? [c].concat(d) : [c], q(b, function (b) {
                c.isImmediatePropagationStopped() || b.apply(a, e)
            })
        }
    }, function (a, b) {
        U.prototype[b] = function (b, c, e) {
            for (var f, g = 0, h = this.length; g < h; g++)z(f) ? (f = a(this[g], b, c, e), A(f) && (f = H(f))) : Nc(f, a(this[g], b, c, e));
            return A(f) ? f : this
        };
        U.prototype.bind = U.prototype.on;
        U.prototype.unbind = U.prototype.off
    });
    Ua.prototype = {
        put: function (a, b) {
            this[Ha(a, this.nextUid)] = b
        }, get: function (a) {
            return this[Ha(a, this.nextUid)]
        }, remove: function (a) {
            var b =
                this[a = Ha(a, this.nextUid)];
            delete this[a];
            return b
        }
    };
    var Ff = [function () {
        this.$get = [function () {
            return Ua
        }]
    }], Tf = /^([^\(]+?)=>/, Uf = /^[^\(]*\(\s*([^\)]*)\)/m, Ag = /,/, Bg = /^\s*(_?)(\S+?)\1\s*$/, Sf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Ia = O("$injector");
    eb.$$annotate = function (a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b)throw y(d) && d || (d = a.name || Vf(a)), Ia("strictdi", d);
                    b = Tc(a);
                    q(b[1].split(Ag), function (a) {
                        a.replace(Bg, function (a, b, d) {
                            c.push(d)
                        })
                    })
                }
                a.$inject = c
            }
        } else M(a) ?
            (b = a.length - 1, Sa(a[b], "fn"), c = a.slice(0, b)) : Sa(a, "fn", !0);
        return c
    };
    var Pd = O("$animate"), Ye = function () {
        this.$get = E
    }, Ze = function () {
        var a = new Ua, b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
            function e(a, b, c) {
                var d = !1;
                b && (b = y(b) ? b.split(" ") : M(b) ? b : [], q(b, function (b) {
                    b && (d = !0, a[b] = c)
                }));
                return d
            }

            function f() {
                q(b, function (b) {
                    var c = a.get(b);
                    if (c) {
                        var d = Wf(b.attr("class")), e = "", f = "";
                        q(c, function (a, b) {
                            a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
                        });
                        q(b, function (a) {
                            e && Cb(a,
                                e);
                            f && Bb(a, f)
                        });
                        a.remove(b)
                    }
                });
                b.length = 0
            }

            return {
                enabled: E, on: E, off: E, pin: E, push: function (g, h, k, l) {
                    l && l();
                    k = k || {};
                    k.from && g.css(k.from);
                    k.to && g.css(k.to);
                    if (k.addClass || k.removeClass)if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l)a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
                    g = new d;
                    g.complete();
                    return g
                }
            }
        }]
    }, We = ["$provide", function (a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null);
        this.register = function (d, c) {
            if (d && "." !== d.charAt(0))throw Pd("notcsel",
                d);
            var e = d + "-animation";
            b.$$registeredAnimations[d.substr(1)] = e;
            a.factory(e, c)
        };
        this.classNameFilter = function (a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Pd("nongcls", "ng-animate");
            return this.$$classNameFilter
        };
        this.$get = ["$$animateQueue", function (a) {
            function b(a, c, d) {
                if (d) {
                    var h;
                    a:{
                        for (h = 0; h < d.length; h++) {
                            var k = d[h];
                            if (1 === k.nodeType) {
                                h = k;
                                break a
                            }
                        }
                        h = void 0
                    }
                    !h || h.parentNode || h.previousElementSibling ||
                    (d = null)
                }
                d ? d.after(a) : c.prepend(a)
            }

            return {
                on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
                    a.end && a.end()
                }, enter: function (e, f, g, h) {
                    f = f && H(f);
                    g = g && H(g);
                    f = f || g.parent();
                    b(e, f, g);
                    return a.push(e, "enter", Ja(h))
                }, move: function (e, f, g, h) {
                    f = f && H(f);
                    g = g && H(g);
                    f = f || g.parent();
                    b(e, f, g);
                    return a.push(e, "move", Ja(h))
                }, leave: function (b, c) {
                    return a.push(b, "leave", Ja(c), function () {
                        b.remove()
                    })
                }, addClass: function (b, c, g) {
                    g = Ja(g);
                    g.addClass = ib(g.addclass, c);
                    return a.push(b, "addClass", g)
                }, removeClass: function (b,
                                          c, g) {
                    g = Ja(g);
                    g.removeClass = ib(g.removeClass, c);
                    return a.push(b, "removeClass", g)
                }, setClass: function (b, c, g, h) {
                    h = Ja(h);
                    h.addClass = ib(h.addClass, c);
                    h.removeClass = ib(h.removeClass, g);
                    return a.push(b, "setClass", h)
                }, animate: function (b, c, g, h, k) {
                    k = Ja(k);
                    k.from = k.from ? S(k.from, c) : c;
                    k.to = k.to ? S(k.to, g) : g;
                    k.tempClasses = ib(k.tempClasses, h || "ng-inline-animate");
                    return a.push(b, "animate", k)
                }
            }
        }]
    }], af = function () {
        this.$get = ["$$rAF", function (a) {
            function b(b) {
                d.push(b);
                1 < d.length || a(function () {
                    for (var a = 0; a < d.length; a++)d[a]();
                    d = []
                })
            }

            var d = [];
            return function () {
                var a = !1;
                b(function () {
                    a = !0
                });
                return function (d) {
                    a ? d() : b(d)
                }
            }
        }]
    }, $e = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (a, b, d, c, e) {
            function f(a) {
                this.setHost(a);
                var b = d();
                this._doneCallbacks = [];
                this._tick = function (a) {
                    var d = c[0];
                    d && d.hidden ? e(a, 0, !1) : b(a)
                };
                this._state = 0
            }

            f.chain = function (a, b) {
                function c() {
                    if (d === a.length)b(!0); else a[d](function (a) {
                        !1 === a ? b(!1) : (d++, c())
                    })
                }

                var d = 0;
                c()
            };
            f.all = function (a, b) {
                function c(f) {
                    e = e && f;
                    ++d ===
                    a.length && b(e)
                }

                var d = 0, e = !0;
                q(a, function (a) {
                    a.done(c)
                })
            };
            f.prototype = {
                setHost: function (a) {
                    this.host = a || {}
                }, done: function (a) {
                    2 === this._state ? a() : this._doneCallbacks.push(a)
                }, progress: E, getPromise: function () {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function (a, c) {
                            b.done(function (b) {
                                !1 === b ? c() : a()
                            })
                        })
                    }
                    return this.promise
                }, then: function (a, b) {
                    return this.getPromise().then(a, b)
                }, "catch": function (a) {
                    return this.getPromise()["catch"](a)
                }, "finally": function (a) {
                    return this.getPromise()["finally"](a)
                }, pause: function () {
                    this.host.pause &&
                    this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end && this.host.end();
                    this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel();
                    this._resolve(!1)
                }, complete: function (a) {
                    var b = this;
                    0 === b._state && (b._state = 1, b._tick(function () {
                        b._resolve(a)
                    }))
                }, _resolve: function (a) {
                    2 !== this._state && (q(this._doneCallbacks, function (b) {
                        b(a)
                    }), this._doneCallbacks.length = 0, this._state = 2)
                }
            };
            return f
        }]
    }, Xe = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner",
            function (a, b, d) {
                return function (b, e) {
                    function f() {
                        a(function () {
                            g.addClass && (b.addClass(g.addClass), g.addClass = null);
                            g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                            g.to && (b.css(g.to), g.to = null);
                            h || k.complete();
                            h = !0
                        });
                        return k
                    }

                    var g = e || {};
                    g.$$prepared || (g = pa(g));
                    g.cleanupStyles && (g.from = g.to = null);
                    g.from && (b.css(g.from), g.from = null);
                    var h, k = new d;
                    return {start: f, end: f}
                }
            }]
    }, ga = O("$compile");
    Cc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Vc = /^((?:x|data)[\:\-_])/i, Zf = O("$controller"),
        ad = /^(\S+)(\s+as\s+([\w$]+))?$/, gf = function () {
            this.$get = ["$document", function (a) {
                return function (b) {
                    b ? !b.nodeType && b instanceof H && (b = b[0]) : b = a[0].body;
                    return b.offsetWidth + 1
                }
            }]
        }, bd = "application/json", bc = {"Content-Type": bd + ";charset=utf-8"}, ag = /^\[|^\{(?!\{)/, bg = {
            "[": /]$/,
            "{": /}$/
        }, $f = /^\)\]\}',?\n/, Cg = O("$http"), fd = function (a) {
            return function () {
                throw Cg("legacy", a);
            }
        }, La = ea.$interpolateMinErr = O("$interpolate");
    La.throwNoconcat = function (a) {
        throw La("noconcat", a);
    };
    La.interr = function (a, b) {
        return La("interr",
            a, b.toString())
    };
    var Dg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, dg = {http: 80, https: 443, ftp: 21}, Fb = O("$location"), Eg = {
        $$html5: !1, $$replace: !1, absUrl: Gb("$$absUrl"), url: function (a) {
            if (z(a))return this.$$url;
            var b = Dg.exec(a);
            (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
            (b[2] || b[1] || "" === a) && this.search(b[3] || "");
            this.hash(b[5] || "");
            return this
        }, protocol: Gb("$$protocol"), host: Gb("$$host"), port: Gb("$$port"), path: kd("$$path", function (a) {
            a = null !== a ? a.toString() : "";
            return "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a,
                              b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (y(a) || R(a))a = a.toString(), this.$$search = xc(a); else if (J(a))a = pa(a, {}), q(a, function (b, c) {
                        null == b && delete a[c]
                    }), this.$$search = a; else throw Fb("isrcharg");
                    break;
                default:
                    z(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            this.$$compose();
            return this
        }, hash: kd("$$hash", function (a) {
            return null !== a ? a.toString() : ""
        }), replace: function () {
            this.$$replace = !0;
            return this
        }
    };
    q([jd, ec, dc], function (a) {
        a.prototype = Object.create(Eg);
        a.prototype.state =
            function (b) {
                if (!arguments.length)return this.$$state;
                if (a !== dc || !this.$$html5)throw Fb("nostate");
                this.$$state = z(b) ? null : b;
                return this
            }
    });
    var ca = O("$parse"), fg = Function.prototype.call, gg = Function.prototype.apply, hg = Function.prototype.bind, Nb = V();
    q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Nb[a] = !0
    });
    var Fg = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, gc = function (a) {
        this.options = a
    };
    gc.prototype = {
        constructor: gc, lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens =
                     []; this.index < this.text.length;)if (a = this.text.charAt(this.index), '"' === a || "'" === a)this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(a))this.readIdent(); else if (this.is(a, "(){}[].,;:?"))this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a))this.index++; else {
                var b = a + this.peek(), d = b + this.peek(2), c = Nb[b], e = Nb[d];
                Nb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index +=
                    a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, b) {
            return -1 !== b.indexOf(a)
        }, peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isExpOperator: function (a) {
            return "-" ===
                a || "+" === a || this.isNumber(a)
        }, throwError: function (a, b, d) {
            d = d || this.index;
            b = A(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
            throw ca("lexerr", a, b, this.text);
        }, readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = N(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d))a += d; else {
                    var c = this.peek();
                    if ("e" == d && this.isExpOperator(c))a += d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) ||
                        c && this.isNumber(c) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b))break;
                this.index++
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, e = !1; this.index < this.text.length;) {
                var f =
                    this.text.charAt(this.index), c = c + f;
                if (e)"u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Fg[f] || f, e = !1; else if ("\\" === f)e = !0; else {
                    if (f === a) {
                        this.index++;
                        this.tokens.push({index: b, text: c, constant: !0, value: d});
                        return
                    }
                    d += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var s = function (a, b) {
        this.lexer = a;
        this.options = b
    };
    s.Program = "Program";
    s.ExpressionStatement =
        "ExpressionStatement";
    s.AssignmentExpression = "AssignmentExpression";
    s.ConditionalExpression = "ConditionalExpression";
    s.LogicalExpression = "LogicalExpression";
    s.BinaryExpression = "BinaryExpression";
    s.UnaryExpression = "UnaryExpression";
    s.CallExpression = "CallExpression";
    s.MemberExpression = "MemberExpression";
    s.Identifier = "Identifier";
    s.Literal = "Literal";
    s.ArrayExpression = "ArrayExpression";
    s.Property = "Property";
    s.ObjectExpression = "ObjectExpression";
    s.ThisExpression = "ThisExpression";
    s.LocalsExpression = "LocalsExpression";
    s.NGValueParameter = "NGValueParameter";
    s.prototype = {
        ast: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a
        }, program: function () {
            for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))return {
                type: s.Program,
                body: a
            }
        }, expressionStatement: function () {
            return {type: s.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var a =
                this.expression(); this.expect("|");)a = this.filter(a);
            return a
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var a = this.ternary();
            this.expect("=") && (a = {type: s.AssignmentExpression, left: a, right: this.assignment(), operator: "="});
            return a
        }, ternary: function () {
            var a = this.logicalOR(), b, d;
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: s.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a
        }, logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");)a =
            {type: s.LogicalExpression, operator: "||", left: a, right: this.logicalAND()};
            return a
        }, logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");)a = {
                type: s.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        }, equality: function () {
            for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");)a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a
        }, relational: function () {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");)a = {
                type: s.BinaryExpression,
                operator: b.text, left: a, right: this.additive()
            };
            return a
        }, additive: function () {
            for (var a = this.multiplicative(), b; b = this.expect("+", "-");)a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a
        }, multiplicative: function () {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%");)a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a
        }, unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: s.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } :
                this.primary()
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = pa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                type: s.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression",
                this.peek());
            for (var b; b = this.expect("(", "[", ".");)"(" === b.text ? (a = {
                type: s.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: s.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: s.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        }, filter: function (a) {
            a = [a];
            for (var b = {
                type: s.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":");)a.push(this.expression());
            return b
        }, parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text) {
                do a.push(this.expression()); while (this.expect(","))
            }
            return a
        }, identifier: function () {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier", a);
            return {type: s.Identifier, name: a.text}
        }, constant: function () {
            return {type: s.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]"))break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {type: s.ArrayExpression, elements: a}
        }, object: function () {
            var a = [], b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}"))break;
                    b = {type: s.Property, kind: "init"};
                    this.peek().constant ? b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());
                    this.consume(":");
                    b.value = this.expression();
                    a.push(b)
                } while (this.expect(","))
            }
            this.consume("}");
            return {type: s.ObjectExpression, properties: a}
        }, throwError: function (a, b) {
            throw ca("syntax", b.text, a, b.index + 1, this.text,
                this.text.substring(b.index));
        }, consume: function (a) {
            if (0 === this.tokens.length)throw ca("ueoe", this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return b
        }, peekToken: function () {
            if (0 === this.tokens.length)throw ca("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, b, d, c) {
            return this.peekAhead(0, a, b, d, c)
        }, peekAhead: function (a, b, d, c, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === d || f === c || f === e || !(b || d || c || e))return a
            }
            return !1
        },
        expect: function (a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
        }, selfReferential: {"this": {type: s.ThisExpression}, $locals: {type: s.LocalsExpression}}
    };
    rd.prototype = {
        compile: function (a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            };
            aa(c, d.$filter);
            var e = "", f;
            this.stage = "assign";
            if (f = pd(c))this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" +
                this.generateFunction("assign", "s,v,l");
            f = nd(c.body);
            d.stage = "inputs";
            q(f, function (a, b) {
                var c = "fn" + b;
                d.state[c] = {vars: [], body: [], own: {}};
                d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e);
                d.return_(e);
                d.state.inputs.push(c);
                a.watchId = b
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(c);
            e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
            e = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject",
                "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e))(this.$filter, Wa, ta, ld, eg, Hb, ig, md, a);
            this.state = this.stage = u;
            e.literal = qd(c);
            e.constant = c.constant;
            return e
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var a = [], b = this.state.inputs, d = this;
            q(b, function (b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"))
            });
            b.length && a.push("fn.inputs=[" + b.join(",") + "];");
            return a.join("")
        }, generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) +
                "};"
        }, filterPrefix: function () {
            var a = [], b = this;
            q(this.state.filters, function (d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")")
            });
            return a.length ? "var " + a.join(",") + ";" : ""
        }, varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        }, body: function (a) {
            return this.state[a].body.join("")
        }, recurse: function (a, b, d, c, e, f) {
            var g, h, k = this, l, m;
            c = c || E;
            if (!f && A(a.watchId))b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d,
                c, e, !0)); else switch (a.type) {
                case s.Program:
                    q(a.body, function (b, c) {
                        k.recurse(b.expression, u, u, function (a) {
                            h = a
                        });
                        c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
                    });
                    break;
                case s.Literal:
                    m = this.escape(a.value);
                    this.assign(b, m);
                    c(m);
                    break;
                case s.UnaryExpression:
                    this.recurse(a.argument, u, u, function (a) {
                        h = a
                    });
                    m = a.operator + "(" + this.ifDefined(h, 0) + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.BinaryExpression:
                    this.recurse(a.left, u, u, function (a) {
                        g = a
                    });
                    this.recurse(a.right, u, u, function (a) {
                        h = a
                    });
                    m = "+" ===
                    a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.LogicalExpression:
                    b = b || this.nextId();
                    k.recurse(a.left, b);
                    k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                    c(b);
                    break;
                case s.ConditionalExpression:
                    b = b || this.nextId();
                    k.recurse(a.test, b);
                    k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                    c(b);
                    break;
                case s.Identifier:
                    b = b || this.nextId();
                    d && (d.context = "inputs" === k.stage ?
                        "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
                    Wa(a.name);
                    k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                        k.if_("inputs" === k.stage || "s", function () {
                            e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                            k.assign(b, k.nonComputedMember("s", a.name))
                        })
                    }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
                    (k.state.expensiveChecks || Ib(a.name)) && k.addEnsureSafeObject(b);
                    c(b);
                    break;
                case s.MemberExpression:
                    g = d && (d.context = this.nextId()) || this.nextId();
                    b = b || this.nextId();
                    k.recurse(a.object, g, u, function () {
                        k.if_(k.notNull(g), function () {
                            e && 1 !== e && k.addEnsureSafeAssignContext(g);
                            if (a.computed)h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h); else {
                                Wa(a.property.name);
                                e &&
                                1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));
                                m = k.nonComputedMember(g, a.property.name);
                                if (k.state.expensiveChecks || Ib(a.property.name))m = k.ensureSafeObject(m);
                                k.assign(b, m);
                                d && (d.computed = !1, d.name = a.property.name)
                            }
                        }, function () {
                            k.assign(b, "undefined")
                        });
                        c(b)
                    }, !!e);
                    break;
                case s.CallExpression:
                    b = b || this.nextId();
                    a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function (a) {
                        var b = k.nextId();
                        k.recurse(a, b);
                        l.push(b)
                    }), m = h + "(" +
                        l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
                        k.if_(k.notNull(h), function () {
                            k.addEnsureSafeFunction(h);
                            q(a.arguments, function (a) {
                                k.recurse(a, k.nextId(), u, function (a) {
                                    l.push(k.ensureSafeObject(a))
                                })
                            });
                            g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
                            m = k.ensureSafeObject(m);
                            k.assign(b, m)
                        }, function () {
                            k.assign(b, "undefined")
                        });
                        c(b)
                    }));
                    break;
                case s.AssignmentExpression:
                    h =
                        this.nextId();
                    g = {};
                    if (!od(a.left))throw ca("lval");
                    this.recurse(a.left, u, g, function () {
                        k.if_(k.notNull(g.context), function () {
                            k.recurse(a.right, h);
                            k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
                            k.addEnsureSafeAssignContext(g.context);
                            m = k.member(g.context, g.name, g.computed) + a.operator + h;
                            k.assign(b, m);
                            c(b || m)
                        })
                    }, 1);
                    break;
                case s.ArrayExpression:
                    l = [];
                    q(a.elements, function (a) {
                        k.recurse(a, k.nextId(), u, function (a) {
                            l.push(a)
                        })
                    });
                    m = "[" + l.join(",") + "]";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.ObjectExpression:
                    l =
                        [];
                    q(a.properties, function (a) {
                        k.recurse(a.value, k.nextId(), u, function (b) {
                            l.push(k.escape(a.key.type === s.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
                        })
                    });
                    m = "{" + l.join(",") + "}";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.ThisExpression:
                    this.assign(b, "s");
                    c("s");
                    break;
                case s.LocalsExpression:
                    this.assign(b, "l");
                    c("l");
                    break;
                case s.NGValueParameter:
                    this.assign(b, "v"), c("v")
            }
        }, getHasOwnProperty: function (a, b) {
            var d = a + "." + b, c = this.current().own;
            c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " +
                a + ")"));
            return c[d]
        }, assign: function (a, b) {
            if (a)return this.current().body.push(a, "=", b, ";"), a
        }, filter: function (a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
            return this.state.filters[a]
        }, ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        }, plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        }, return_: function (a) {
            this.current().body.push("return ", a, ";")
        }, if_: function (a, b, d) {
            if (!0 === a)b(); else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"), d(), c.push("}"))
            }
        }, not: function (a) {
            return "!(" + a + ")"
        }, notNull: function (a) {
            return a + "!=null"
        }, nonComputedMember: function (a, b) {
            return a + "." + b
        }, computedMember: function (a, b) {
            return a + "[" + b + "]"
        }, member: function (a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        }, addEnsureSafeObject: function (a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        }, addEnsureSafeMemberName: function (a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        }, addEnsureSafeFunction: function (a) {
            this.current().body.push(this.ensureSafeFunction(a),
                ";")
        }, addEnsureSafeAssignContext: function (a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        }, ensureSafeObject: function (a) {
            return "ensureSafeObject(" + a + ",text)"
        }, ensureSafeMemberName: function (a) {
            return "ensureSafeMemberName(" + a + ",text)"
        }, ensureSafeFunction: function (a) {
            return "ensureSafeFunction(" + a + ",text)"
        }, getStringValue: function (a) {
            this.assign(a, "getStringValue(" + a + ")")
        }, ensureSafeAssignContext: function (a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        }, lazyRecurse: function (a, b, d, c, e, f) {
            var g =
                this;
            return function () {
                g.recurse(a, b, d, c, e, f)
            }
        }, lazyAssign: function (a, b) {
            var d = this;
            return function () {
                d.assign(a, b)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (a) {
            if (y(a))return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (R(a))return a.toString();
            if (!0 === a)return "true";
            if (!1 === a)return "false";
            if (null === a)return "null";
            if ("undefined" === typeof a)return "undefined";
            throw ca("esc");
        }, nextId: function (a,
                             b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d
        }, current: function () {
            return this.state[this.state.computing]
        }
    };
    sd.prototype = {
        compile: function (a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.expression = a;
            this.expensiveChecks = b;
            aa(c, d.$filter);
            var e, f;
            if (e = pd(c))f = this.recurse(e);
            e = nd(c.body);
            var g;
            e && (g = [], q(e, function (a, b) {
                var c = d.recurse(a);
                a.input = c;
                g.push(c);
                a.watchId = b
            }));
            var h = [];
            q(c.body, function (a) {
                h.push(d.recurse(a.expression))
            });
            e = 0 === c.body.length ? E : 1 ===
            c.body.length ? h[0] : function (a, b) {
                var c;
                q(h, function (d) {
                    c = d(a, b)
                });
                return c
            };
            f && (e.assign = function (a, b, c) {
                return f(a, c, b)
            });
            g && (e.inputs = g);
            e.literal = qd(c);
            e.constant = c.constant;
            return e
        }, recurse: function (a, b, d) {
            var c, e, f = this, g;
            if (a.input)return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case s.Literal:
                    return this.value(a.value, b);
                case s.UnaryExpression:
                    return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
                case s.BinaryExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right),
                        this["binary" + a.operator](c, e, b);
                case s.LogicalExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
                case s.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case s.Identifier:
                    return Wa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Ib(a.name), b, d, f.expression);
                case s.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (Wa(a.property.name, f.expression),
                        e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
                case s.CallExpression:
                    return g = [], q(a.arguments, function (a) {
                        g.push(f.recurse(a))
                    }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
                        for (var n = [], p = 0; p < g.length; ++p)n.push(g[p](a, c, d, f));
                        a = e.apply(u, n, f);
                        return b ? {context: u, name: u, value: a} : a
                    } : function (a, c, d, m) {
                        var n =
                            e(a, c, d, m), p;
                        if (null != n.value) {
                            ta(n.context, f.expression);
                            ld(n.value, f.expression);
                            p = [];
                            for (var q = 0; q < g.length; ++q)p.push(ta(g[q](a, c, d, m), f.expression));
                            p = ta(n.value.apply(n.context, p), f.expression)
                        }
                        return b ? {value: p} : p
                    };
                case s.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
                        var n = c(a, d, g, m);
                        a = e(a, d, g, m);
                        ta(n.value, f.expression);
                        Hb(n.context);
                        n.context[n.name] = a;
                        return b ? {value: a} : a
                    };
                case s.ArrayExpression:
                    return g = [], q(a.elements, function (a) {
                        g.push(f.recurse(a))
                    }),
                        function (a, c, d, e) {
                            for (var f = [], p = 0; p < g.length; ++p)f.push(g[p](a, c, d, e));
                            return b ? {value: f} : f
                        };
                case s.ObjectExpression:
                    return g = [], q(a.properties, function (a) {
                        g.push({
                            key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
                            value: f.recurse(a.value)
                        })
                    }), function (a, c, d, e) {
                        for (var f = {}, p = 0; p < g.length; ++p)f[g[p].key] = g[p].value(a, c, d, e);
                        return b ? {value: f} : f
                    };
                case s.ThisExpression:
                    return function (a) {
                        return b ? {value: a} : a
                    };
                case s.LocalsExpression:
                    return function (a, c) {
                        return b ? {value: c} : c
                    };
                case s.NGValueParameter:
                    return function (a,
                                     c, d) {
                        return b ? {value: d} : d
                    }
            }
        }, "unary+": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = A(d) ? +d : 0;
                return b ? {value: d} : d
            }
        }, "unary-": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = A(d) ? -d : 0;
                return b ? {value: d} : d
            }
        }, "unary!": function (a, b) {
            return function (d, c, e, f) {
                d = !a(d, c, e, f);
                return b ? {value: d} : d
            }
        }, "binary+": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = md(h, c);
                return d ? {value: h} : h
            }
        }, "binary-": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = (A(h) ? h : 0) - (A(c) ? c : 0);
                return d ? {value: h} : h
            }
        }, "binary*": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) * b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary/": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) / b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary%": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) % b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary===": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) === b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary!==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c,
                        e, f, g) !== b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) == b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary!=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) != b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary<": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) < b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary>": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) > b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary<=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f,
                        g) <= b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary>=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) >= b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary&&": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) && b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary||": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) || b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "ternary?:": function (a, b, d, c) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
                return c ? {value: e} : e
            }
        }, value: function (a, b) {
            return function () {
                return b ? {
                    context: u,
                    name: u, value: a
                } : a
            }
        }, identifier: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                f = g && a in g ? g : f;
                c && 1 !== c && f && !f[a] && (f[a] = {});
                g = f ? f[a] : u;
                b && ta(g, e);
                return d ? {context: f, name: a, value: g} : g
            }
        }, computedMember: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                var l = a(f, g, h, k), m, n;
                null != l && (m = b(f, g, h, k), m += "", Wa(m, e), c && 1 !== c && (Hb(l), l && !l[m] && (l[m] = {})), n = l[m], ta(n, e));
                return d ? {context: l, name: m, value: n} : n
            }
        }, nonComputedMember: function (a, b, d, c, e, f) {
            return function (g, h, k, l) {
                g = a(g, h, k, l);
                e && 1 !== e && (Hb(g), g && !g[b] &&
                (g[b] = {}));
                h = null != g ? g[b] : u;
                (d || Ib(b)) && ta(h, f);
                return c ? {context: g, name: b, value: h} : h
            }
        }, inputs: function (a, b) {
            return function (d, c, e, f) {
                return f ? f[b] : a(d, c, e)
            }
        }
    };
    var hc = function (a, b, d) {
        this.lexer = a;
        this.$filter = b;
        this.options = d;
        this.ast = new s(a, d);
        this.astCompiler = d.csp ? new sd(this.ast, b) : new rd(this.ast, b)
    };
    hc.prototype = {
        constructor: hc, parse: function (a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var jg = Object.prototype.valueOf, ua = O("$sce"), ma = {
        HTML: "html", CSS: "css", URL: "url",
        RESOURCE_URL: "resourceUrl", JS: "js"
    }, lg = O("$compile"), Z = P.createElement("a"), wd = sa(T.location.href);
    xd.$inject = ["$document"];
    Jc.$inject = ["$provide"];
    var Ed = 22, Dd = ".", jc = "0";
    yd.$inject = ["$locale"];
    Ad.$inject = ["$locale"];
    var wg = {
            yyyy: X("FullYear", 4, 0, !1, !0),
            yy: X("FullYear", 2, 0, !0, !0),
            y: X("FullYear", 1, 0, !1, !0),
            MMMM: lb("Month"),
            MMM: lb("Month", !0),
            MM: X("Month", 2, 1),
            M: X("Month", 1, 1),
            LLLL: lb("Month", !1, !0),
            dd: X("Date", 2),
            d: X("Date", 1),
            HH: X("Hours", 2),
            H: X("Hours", 1),
            hh: X("Hours", 2, -12),
            h: X("Hours", 1, -12),
            mm: X("Minutes", 2),
            m: X("Minutes", 1),
            ss: X("Seconds", 2),
            s: X("Seconds", 1),
            sss: X("Milliseconds", 3),
            EEEE: lb("Day"),
            EEE: lb("Day", !0),
            a: function (a, b) {
                return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
            },
            Z: function (a, b, d) {
                a = -1 * d;
                return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2))
            },
            ww: Gd(2),
            w: Gd(1),
            G: kc,
            GG: kc,
            GGG: kc,
            GGGG: function (a, b) {
                return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
            }
        }, vg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        ug = /^\-?\d+$/;
    zd.$inject = ["$locale"];
    var pg = da(N), qg = da(vb);
    Bd.$inject = ["$parse"];
    var me = da({
        restrict: "E", compile: function (a, b) {
            if (!b.href && !b.xlinkHref)return function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var e = "[object SVGAnimatedString]" === ka.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(e) || a.preventDefault()
                    })
                }
            }
        }
    }), wb = {};
    q(Eb, function (a, b) {
        function d(a, d, e) {
            a.$watch(e[c], function (a) {
                e.$set(b, !!a)
            })
        }

        if ("multiple" != a) {
            var c = ya("ng-" + b), e = d;
            "checked" === a && (e = function (a,
                                              b, e) {
                e.ngModel !== e[c] && d(a, b, e)
            });
            wb[c] = function () {
                return {restrict: "A", priority: 100, link: e}
            }
        }
    });
    q($c, function (a, b) {
        wb[b] = function () {
            return {
                priority: 100, link: function (a, c, e) {
                    if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(yg))) {
                        e.$set("ngPattern", new RegExp(c[1], c[2]));
                        return
                    }
                    a.$watch(e[b], function (a) {
                        e.$set(b, a)
                    })
                }
            }
        }
    });
    q(["src", "srcset", "href"], function (a) {
        var b = ya("ng-" + a);
        wb[b] = function () {
            return {
                priority: 99, link: function (d, c, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" ===
                    ka.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
                    e.$observe(b, function (b) {
                        b ? (e.$set(g, b), Da && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
                    })
                }
            }
        }
    });
    var Kb = {
        $addControl: E, $$renameControl: function (a, b) {
            a.$name = b
        }, $removeControl: E, $setValidity: E, $setDirty: E, $setPristine: E, $setSubmitted: E
    };
    Hd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Qd = function (a) {
            return ["$timeout", "$parse", function (b, d) {
                function c(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || E
                }

                return {
                    name: "form",
                    restrict: a ? "EAC" : "E", require: ["form", "^^?form"], controller: Hd, compile: function (d, f) {
                        d.addClass(Xa).addClass(pb);
                        var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                        return {
                            pre: function (a, d, e, f) {
                                var n = f[0];
                                if (!("action" in e)) {
                                    var p = function (b) {
                                        a.$apply(function () {
                                            n.$commitViewValue();
                                            n.$setSubmitted()
                                        });
                                        b.preventDefault()
                                    };
                                    d[0].addEventListener("submit", p, !1);
                                    d.on("$destroy", function () {
                                        b(function () {
                                            d[0].removeEventListener("submit", p, !1)
                                        }, 0, !1)
                                    })
                                }
                                (f[1] || n.$$parentForm).$addControl(n);
                                var q = g ? c(n.$name) : E;
                                g &&
                                (q(a, n), e.$observe(g, function (b) {
                                    n.$name !== b && (q(a, u), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n))
                                }));
                                d.on("$destroy", function () {
                                    n.$$parentForm.$removeControl(n);
                                    q(a, u);
                                    S(n, Kb)
                                })
                            }
                        }
                    }
                }
            }]
        }, ne = Qd(), Ae = Qd(!0), xg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, Gg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, Hg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Ig = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Rd = /^(\d{4,})-(\d{2})-(\d{2})$/, Sd = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, nc = /^(\d{4,})-W(\d\d)$/, Td = /^(\d{4,})-(\d\d)$/, Ud = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Jd = V();
    q(["date", "datetime-local", "month", "time", "week"], function (a) {
        Jd[a] = !0
    });
    var Vd = {
        text: function (a, b, d, c, e, f) {
            mb(a, b, d, c, e, f);
            lc(c)
        },
        date: nb("date", Rd, Mb(Rd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": nb("datetimelocal", Sd, Mb(Sd, "yyyy MM dd HH mm ss sss".split(" ")),
            "yyyy-MM-ddTHH:mm:ss.sss"),
        time: nb("time", Ud, Mb(Ud, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: nb("week", nc, function (a, b) {
            if (fa(a))return a;
            if (y(a)) {
                nc.lastIndex = 0;
                var d = nc.exec(a);
                if (d) {
                    var c = +d[1], e = +d[2], f = d = 0, g = 0, h = 0, k = Fd(c), e = 7 * (e - 1);
                    b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
                    return new Date(c, 0, k.getDate() + e, d, f, g, h)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: nb("month", Td, Mb(Td, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (a, b, d, c, e, f) {
            Kd(a, b, d, c);
            mb(a, b, d, c, e, f);
            c.$$parserName =
                "number";
            c.$parsers.push(function (a) {
                return c.$isEmpty(a) ? null : Ig.test(a) ? parseFloat(a) : u
            });
            c.$formatters.push(function (a) {
                if (!c.$isEmpty(a)) {
                    if (!R(a))throw ob("numfmt", a);
                    a = a.toString()
                }
                return a
            });
            if (A(d.min) || d.ngMin) {
                var g;
                c.$validators.min = function (a) {
                    return c.$isEmpty(a) || z(g) || a >= g
                };
                d.$observe("min", function (a) {
                    A(a) && !R(a) && (a = parseFloat(a, 10));
                    g = R(a) && !isNaN(a) ? a : u;
                    c.$validate()
                })
            }
            if (A(d.max) || d.ngMax) {
                var h;
                c.$validators.max = function (a) {
                    return c.$isEmpty(a) || z(h) || a <= h
                };
                d.$observe("max", function (a) {
                    A(a) && !R(a) && (a = parseFloat(a, 10));
                    h = R(a) && !isNaN(a) ? a : u;
                    c.$validate()
                })
            }
        },
        url: function (a, b, d, c, e, f) {
            mb(a, b, d, c, e, f);
            lc(c);
            c.$$parserName = "url";
            c.$validators.url = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Gg.test(d)
            }
        },
        email: function (a, b, d, c, e, f) {
            mb(a, b, d, c, e, f);
            lc(c);
            c.$$parserName = "email";
            c.$validators.email = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || Hg.test(d)
            }
        },
        radio: function (a, b, d, c) {
            z(d.name) && b.attr("name", ++qb);
            b.on("click", function (a) {
                b[0].checked && c.$setViewValue(d.value, a && a.type)
            });
            c.$render =
                function () {
                    b[0].checked = d.value == c.$viewValue
                };
            d.$observe("value", c.$render)
        },
        checkbox: function (a, b, d, c, e, f, g, h) {
            var k = Ld(h, a, "ngTrueValue", d.ngTrueValue, !0), l = Ld(h, a, "ngFalseValue", d.ngFalseValue, !1);
            b.on("click", function (a) {
                c.$setViewValue(b[0].checked, a && a.type)
            });
            c.$render = function () {
                b[0].checked = c.$viewValue
            };
            c.$isEmpty = function (a) {
                return !1 === a
            };
            c.$formatters.push(function (a) {
                return na(a, k)
            });
            c.$parsers.push(function (a) {
                return a ? k : l
            })
        },
        hidden: E,
        button: E,
        submit: E,
        reset: E,
        file: E
    }, Dc = ["$browser",
        "$sniffer", "$filter", "$parse", function (a, b, d, c) {
            return {
                restrict: "E", require: ["?ngModel"], link: {
                    pre: function (e, f, g, h) {
                        h[0] && (Vd[N(g.type)] || Vd.text)(e, f, g, h[0], b, a, d, c)
                    }
                }
            }
        }], Jg = /^(true|false|\d+)$/, Se = function () {
        return {
            restrict: "A", priority: 100, compile: function (a, b) {
                return Jg.test(b.ngValue) ? function (a, b, e) {
                    e.$set("value", a.$eval(e.ngValue))
                } : function (a, b, e) {
                    a.$watch(e.ngValue, function (a) {
                        e.$set("value", a)
                    })
                }
            }
        }
    }, se = ["$compile", function (a) {
        return {
            restrict: "AC", compile: function (b) {
                a.$$addBindingClass(b);
                return function (b, c, e) {
                    a.$$addBindingInfo(c, e.ngBind);
                    c = c[0];
                    b.$watch(e.ngBind, function (a) {
                        c.textContent = z(a) ? "" : a
                    })
                }
            }
        }
    }], ue = ["$interpolate", "$compile", function (a, b) {
        return {
            compile: function (d) {
                b.$$addBindingClass(d);
                return function (c, d, f) {
                    c = a(d.attr(f.$attr.ngBindTemplate));
                    b.$$addBindingInfo(d, c.expressions);
                    d = d[0];
                    f.$observe("ngBindTemplate", function (a) {
                        d.textContent = z(a) ? "" : a
                    })
                }
            }
        }
    }], te = ["$sce", "$parse", "$compile", function (a, b, d) {
        return {
            restrict: "A", compile: function (c, e) {
                var f = b(e.ngBindHtml), g =
                    b(e.ngBindHtml, function (a) {
                        return (a || "").toString()
                    });
                d.$$addBindingClass(c);
                return function (b, c, e) {
                    d.$$addBindingInfo(c, e.ngBindHtml);
                    b.$watch(g, function () {
                        c.html(a.getTrustedHtml(f(b)) || "")
                    })
                }
            }
        }
    }], Re = da({
        restrict: "A", require: "ngModel", link: function (a, b, d, c) {
            c.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange)
            })
        }
    }), ve = mc("", !0), xe = mc("Odd", 0), we = mc("Even", 1), ye = Na({
        compile: function (a, b) {
            b.$set("ngCloak", u);
            a.removeClass("ng-cloak")
        }
    }), ze = [function () {
        return {
            restrict: "A", scope: !0, controller: "@",
            priority: 500
        }
    }], Ic = {}, Kg = {blur: !0, focus: !0};
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = ya("ng-" + a);
        Ic[b] = ["$parse", "$rootScope", function (d, c) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = d(f[b], null, !0);
                    return function (b, d) {
                        d.on(a, function (d) {
                            var e = function () {
                                g(b, {$event: d})
                            };
                            Kg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var Ce = ["$animate", "$compile", function (a,
                                                b) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (d, c, e, f, g) {
                    var h, k, l;
                    d.$watch(e.ngIf, function (d) {
                        d ? k || g(function (d, f) {
                            k = f;
                            d[d.length++] = b.$$createComment("end ngIf", e.ngIf);
                            h = {clone: d};
                            a.enter(d, c.parent(), c)
                        }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = ub(h.clone), a.leave(l).then(function () {
                            l = null
                        }), h = null))
                    })
                }
            }
        }], De = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
            return {
                restrict: "ECA", priority: 400, terminal: !0,
                transclude: "element", controller: ea.noop, compile: function (c, e) {
                    var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
                    return function (c, e, m, n, p) {
                        var q = 0, s, x, r, w = function () {
                            x && (x.remove(), x = null);
                            s && (s.$destroy(), s = null);
                            r && (d.leave(r).then(function () {
                                x = null
                            }), x = r, r = null)
                        };
                        c.$watch(f, function (f) {
                            var m = function () {
                                !A(h) || h && !c.$eval(h) || b()
                            }, t = ++q;
                            f ? (a(f, !0).then(function (a) {
                                if (!c.$$destroyed && t === q) {
                                    var b = c.$new();
                                    n.template = a;
                                    a = p(b, function (a) {
                                        w();
                                        d.enter(a, null, e).then(m)
                                    });
                                    s = b;
                                    r = a;
                                    s.$emit("$includeContentLoaded",
                                        f);
                                    c.$eval(g)
                                }
                            }, function () {
                                c.$$destroyed || t !== q || (w(), c.$emit("$includeContentError", f))
                            }), c.$emit("$includeContentRequested", f)) : (w(), n.template = null)
                        })
                    }
                }
            }
        }], Ue = ["$compile", function (a) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (b, d, c, e) {
                    ka.call(d[0]).match(/SVG/) ? (d.empty(), a(Lc(e.template, P).childNodes)(b, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(e.template), a(d.contents())(b))
                }
            }
        }], Ee = Na({
            priority: 450, compile: function () {
                return {
                    pre: function (a, b, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        Qe = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, c) {
                    var e = b.attr(d.$attr.ngList) || ", ", f = "false" !== d.ngTrim, g = f ? W(e) : e;
                    c.$parsers.push(function (a) {
                        if (!z(a)) {
                            var b = [];
                            a && q(a.split(g), function (a) {
                                a && b.push(f ? W(a) : a)
                            });
                            return b
                        }
                    });
                    c.$formatters.push(function (a) {
                        return M(a) ? a.join(e) : u
                    });
                    c.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, pb = "ng-valid", Md = "ng-invalid", Xa = "ng-pristine", Lb = "ng-dirty", Od = "ng-pending", ob = O("ngModel"), Lg = ["$scope", "$exceptionHandler", "$attrs",
            "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
                this.$modelValue = this.$viewValue = Number.NaN;
                this.$$rawModelValue = u;
                this.$validators = {};
                this.$asyncValidators = {};
                this.$parsers = [];
                this.$formatters = [];
                this.$viewChangeListeners = [];
                this.$untouched = !0;
                this.$touched = !1;
                this.$pristine = !0;
                this.$dirty = !1;
                this.$valid = !0;
                this.$invalid = !1;
                this.$error = {};
                this.$$success = {};
                this.$pending = u;
                this.$name = l(d.name || "", !1)(a);
                this.$$parentForm = Kb;
                var m = e(d.ngModel),
                    n = m.assign, p = m, s = n, y = null, x, r = this;
                this.$$setOptions = function (a) {
                    if ((r.$options = a) && a.getterSetter) {
                        var b = e(d.ngModel + "()"), f = e(d.ngModel + "($$$p)");
                        p = function (a) {
                            var c = m(a);
                            D(c) && (c = b(a));
                            return c
                        };
                        s = function (a, b) {
                            D(m(a)) ? f(a, {$$$p: b}) : n(a, b)
                        }
                    } else if (!m.assign)throw ob("nonassign", d.ngModel, wa(c));
                };
                this.$render = E;
                this.$isEmpty = function (a) {
                    return z(a) || "" === a || null === a || a !== a
                };
                this.$$updateEmptyClasses = function (a) {
                    r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c,
                        "ng-empty"), f.addClass(c, "ng-not-empty"))
                };
                var w = 0;
                Id({
                    ctrl: this, $element: c, set: function (a, b) {
                        a[b] = !0
                    }, unset: function (a, b) {
                        delete a[b]
                    }, $animate: f
                });
                this.$setPristine = function () {
                    r.$dirty = !1;
                    r.$pristine = !0;
                    f.removeClass(c, Lb);
                    f.addClass(c, Xa)
                };
                this.$setDirty = function () {
                    r.$dirty = !0;
                    r.$pristine = !1;
                    f.removeClass(c, Xa);
                    f.addClass(c, Lb);
                    r.$$parentForm.$setDirty()
                };
                this.$setUntouched = function () {
                    r.$touched = !1;
                    r.$untouched = !0;
                    f.setClass(c, "ng-untouched", "ng-touched")
                };
                this.$setTouched = function () {
                    r.$touched = !0;
                    r.$untouched = !1;
                    f.setClass(c, "ng-touched", "ng-untouched")
                };
                this.$rollbackViewValue = function () {
                    g.cancel(y);
                    r.$viewValue = r.$$lastCommittedViewValue;
                    r.$render()
                };
                this.$validate = function () {
                    if (!R(r.$modelValue) || !isNaN(r.$modelValue)) {
                        var a = r.$$rawModelValue, b = r.$valid, c = r.$modelValue, d = r.$options && r.$options.allowInvalid;
                        r.$$runValidators(a, r.$$lastCommittedViewValue, function (e) {
                            d || b === e || (r.$modelValue = e ? a : u, r.$modelValue !== c && r.$$writeModelToScope())
                        })
                    }
                };
                this.$$runValidators = function (a, b, c) {
                    function d() {
                        var c =
                            !0;
                        q(r.$validators, function (d, e) {
                            var g = d(a, b);
                            c = c && g;
                            f(e, g)
                        });
                        return c ? !0 : (q(r.$asyncValidators, function (a, b) {
                            f(b, null)
                        }), !1)
                    }

                    function e() {
                        var c = [], d = !0;
                        q(r.$asyncValidators, function (e, g) {
                            var h = e(a, b);
                            if (!h || !D(h.then))throw ob("nopromise", h);
                            f(g, u);
                            c.push(h.then(function () {
                                f(g, !0)
                            }, function () {
                                d = !1;
                                f(g, !1)
                            }))
                        });
                        c.length ? k.all(c).then(function () {
                            g(d)
                        }, E) : g(!0)
                    }

                    function f(a, b) {
                        h === w && r.$setValidity(a, b)
                    }

                    function g(a) {
                        h === w && c(a)
                    }

                    w++;
                    var h = w;
                    (function () {
                        var a = r.$$parserName || "parse";
                        if (z(x))f(a, null);
                        else return x || (q(r.$validators, function (a, b) {
                            f(b, null)
                        }), q(r.$asyncValidators, function (a, b) {
                            f(b, null)
                        })), f(a, x), x;
                        return !0
                    })() ? d() ? e() : g(!1) : g(!1)
                };
                this.$commitViewValue = function () {
                    var a = r.$viewValue;
                    g.cancel(y);
                    if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators)r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate()
                };
                this.$$parseAndValidate = function () {
                    var b = r.$$lastCommittedViewValue;
                    if (x = z(b) ? u : !0)for (var c = 0; c < r.$parsers.length; c++)if (b =
                            r.$parsers[c](b), z(b)) {
                        x = !1;
                        break
                    }
                    R(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));
                    var d = r.$modelValue, e = r.$options && r.$options.allowInvalid;
                    r.$$rawModelValue = b;
                    e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());
                    r.$$runValidators(b, r.$$lastCommittedViewValue, function (a) {
                        e || (r.$modelValue = a ? b : u, r.$modelValue !== d && r.$$writeModelToScope())
                    })
                };
                this.$$writeModelToScope = function () {
                    s(a, r.$modelValue);
                    q(r.$viewChangeListeners, function (a) {
                        try {
                            a()
                        } catch (c) {
                            b(c)
                        }
                    })
                };
                this.$setViewValue =
                    function (a, b) {
                        r.$viewValue = a;
                        r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b)
                    };
                this.$$debounceViewValueCommit = function (b) {
                    var c = 0, d = r.$options;
                    d && A(d.debounce) && (d = d.debounce, R(d) ? c = d : R(d[b]) ? c = d[b] : R(d["default"]) && (c = d["default"]));
                    g.cancel(y);
                    c ? y = g(function () {
                        r.$commitViewValue()
                    }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function () {
                        r.$commitViewValue()
                    })
                };
                a.$watch(function () {
                    var b = p(a);
                    if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
                        r.$modelValue = r.$$rawModelValue =
                            b;
                        x = u;
                        for (var c = r.$formatters, d = c.length, e = b; d--;)e = c[d](e);
                        r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(), r.$$runValidators(b, e, E))
                    }
                    return b
                })
            }], Pe = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Lg,
                priority: 1,
                compile: function (b) {
                    b.addClass(Xa).addClass("ng-untouched").addClass(pb);
                    return {
                        pre: function (a, b, e, f) {
                            var g = f[0];
                            b = f[1] || g.$$parentForm;
                            g.$$setOptions(f[2] && f[2].$options);
                            b.$addControl(g);
                            e.$observe("name", function (a) {
                                g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                            });
                            a.$on("$destroy", function () {
                                g.$$parentForm.$removeControl(g)
                            })
                        }, post: function (b, c, e, f) {
                            var g = f[0];
                            if (g.$options && g.$options.updateOn)c.on(g.$options.updateOn, function (a) {
                                g.$$debounceViewValueCommit(a && a.type)
                            });
                            c.on("blur", function () {
                                g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched))
                            })
                        }
                    }
                }
            }
        }], Mg = /(\s+|^)default(\s+|$)/, Te = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a,
                                                                          b) {
                    var d = this;
                    this.$options = pa(a.$eval(b.ngModelOptions));
                    A(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = W(this.$options.updateOn.replace(Mg, function () {
                        d.$options.updateOnDefault = !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, Fe = Na({
            terminal: !0,
            priority: 1E3
        }), Ng = O("ngOptions"), Og = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Ne = ["$compile", "$parse", function (a, b) {
            function d(a, c, d) {
                function e(a, b, c, d, f) {
                    this.selectValue = a;
                    this.viewValue = b;
                    this.label = c;
                    this.group = d;
                    this.disabled = f
                }

                function l(a) {
                    var b;
                    if (!p && za(a))b = a; else {
                        b = [];
                        for (var c in a)a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }

                var m = a.match(Og);
                if (!m)throw Ng("iexp", a, wa(c));
                var n = m[5] || m[7], p = m[6];
                a = / as /.test(m[0]) && m[1];
                var q = m[9];
                c = b(m[2] ? m[1] : n);
                var s = a && b(a) || c, x = q && b(q), r = q ? function (a, b) {
                    return x(d, b)
                } : function (a) {
                    return Ha(a)
                }, w = function (a,
                                 b) {
                    return r(a, y(a, b))
                }, v = b(m[2] || m[1]), u = b(m[3] || ""), t = b(m[4] || ""), G = b(m[8]), C = {}, y = p ? function (a, b) {
                    C[p] = b;
                    C[n] = a;
                    return C
                } : function (a) {
                    C[n] = a;
                    return C
                };
                return {
                    trackBy: q, getTrackByValue: w, getWatchables: b(G, function (a) {
                        var b = [];
                        a = a || [];
                        for (var c = l(a), e = c.length, f = 0; f < e; f++) {
                            var g = a === c ? f : c[f], k = a[g], g = y(k, g), k = r(k, g);
                            b.push(k);
                            if (m[2] || m[1])k = v(d, g), b.push(k);
                            m[4] && (g = t(d, g), b.push(g))
                        }
                        return b
                    }), getOptions: function () {
                        for (var a = [], b = {}, c = G(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
                            var n = c === f ? m : f[m], p =
                                y(c[n], n), x = s(d, p), n = r(x, p), C = v(d, p), A = u(d, p), p = t(d, p), x = new e(n, x, C, A, p);
                            a.push(x);
                            b[n] = x
                        }
                        return {
                            items: a, selectValueMap: b, getOptionFromViewValue: function (a) {
                                return b[w(a)]
                            }, getViewValueFromOption: function (a) {
                                return q ? ea.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }

            var c = P.createElement("option"), e = P.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (a, b, c, d) {
                        d[0].registerOption = E
                    }, post: function (b, g, h, k) {
                        function l(a, b) {
                            a.element = b;
                            b.disabled = a.disabled;
                            a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                            a.value !== b.value && (b.value = a.selectValue)
                        }

                        function m(a, b, c, d) {
                            b && N(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));
                            return c
                        }

                        function n(a) {
                            for (var b; a;)b = a.nextSibling, Yb(a), a = b
                        }

                        function p(a) {
                            var b = w && w[0], c = G && G[0];
                            if (b || c)for (; a && (a === b || a === c || 8 === a.nodeType || "option" === oa(a) && "" === a.value);)a = a.nextSibling;
                            return a
                        }

                        function s() {
                            var a = C && u.readValue();
                            C = z.getOptions();
                            var b = {}, d = g[0].firstChild;
                            t && g.prepend(w);
                            d = p(d);
                            C.items.forEach(function (a) {
                                var f, h;
                                A(a.group) ? (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, f.label = a.group, f = b[a.group] = {
                                    groupElement: f,
                                    currentOptionElement: f.firstChild
                                }), h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement = h.nextSibling) : (h = m(g[0], d, "option", c), l(a, h), d = h.nextSibling)
                            });
                            Object.keys(b).forEach(function (a) {
                                n(b[a].currentOptionElement)
                            });
                            n(d);
                            x.$render();
                            if (!x.$isEmpty(a)) {
                                var f = u.readValue();
                                (z.trackBy || r ? na(a, f) : a === f) || (x.$setViewValue(f),
                                    x.$render())
                            }
                        }

                        var u = k[0], x = k[1], r = h.multiple, w;
                        k = 0;
                        for (var v = g.children(), y = v.length; k < y; k++)if ("" === v[k].value) {
                            w = v.eq(k);
                            break
                        }
                        var t = !!w, G = H(c.cloneNode(!1));
                        G.val("?");
                        var C, z = d(h.ngOptions, g, b);
                        r ? (x.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        }, u.writeValue = function (a) {
                            C.items.forEach(function (a) {
                                a.element.selected = !1
                            });
                            a && a.forEach(function (a) {
                                (a = C.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0)
                            })
                        }, u.readValue = function () {
                            var a = g.val() || [], b = [];
                            q(a, function (a) {
                                (a = C.selectValueMap[a]) && !a.disabled && b.push(C.getViewValueFromOption(a))
                            });
                            return b
                        }, z.trackBy && b.$watchCollection(function () {
                            if (M(x.$viewValue))return x.$viewValue.map(function (a) {
                                return z.getTrackByValue(a)
                            })
                        }, function () {
                            x.$render()
                        })) : (u.writeValue = function (a) {
                            var b = C.getOptionFromViewValue(a);
                            b && !b.disabled ? (g[0].value !== b.selectValue && (G.remove(), t || w.remove(), g[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || t ? (G.remove(), t || g.prepend(w), g.val(""), w.prop("selected",
                                !0), w.attr("selected", !0)) : (t || w.remove(), g.prepend(G), g.val("?"), G.prop("selected", !0), G.attr("selected", !0))
                        }, u.readValue = function () {
                            var a = C.selectValueMap[g.val()];
                            return a && !a.disabled ? (t || w.remove(), G.remove(), C.getViewValueFromOption(a)) : null
                        }, z.trackBy && b.$watch(function () {
                            return z.getTrackByValue(x.$viewValue)
                        }, function () {
                            x.$render()
                        }));
                        t ? (w.remove(), a(w)(b), w.removeClass("ng-scope")) : w = H(c.cloneNode(!1));
                        s();
                        b.$watchCollection(z.getWatchables, s)
                    }
                }
            }
        }], Ge = ["$locale", "$interpolate", "$log", function (a,
                                                               b, d) {
            var c = /{}/g, e = /^when(Minus)?(.+)$/;
            return {
                link: function (f, g, h) {
                    function k(a) {
                        g.text(a || "")
                    }

                    var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), n = h.offset || 0, p = f.$eval(m) || {}, s = {}, u = b.startSymbol(), x = b.endSymbol(), r = u + l + "-" + n + x, w = ea.noop, v;
                    q(h, function (a, b) {
                        var c = e.exec(b);
                        c && (c = (c[1] ? "-" : "") + N(c[2]), p[c] = g.attr(h.$attr[b]))
                    });
                    q(p, function (a, d) {
                        s[d] = b(a.replace(c, r))
                    });
                    f.$watch(l, function (b) {
                        var c = parseFloat(b), e = isNaN(c);
                        e || c in p || (c = a.pluralCat(c - n));
                        c === v || e && R(v) && isNaN(v) || (w(), e = s[c], z(e) ?
                            (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), w = E, k()) : w = f.$watch(e, k), v = c)
                    })
                }
            }
        }], He = ["$parse", "$animate", "$compile", function (a, b, d) {
            var c = O("ngRepeat"), e = function (a, b, c, d, e, m, n) {
                a[c] = d;
                e && (a[e] = m);
                a.$index = b;
                a.$first = 0 === b;
                a.$last = b === n - 1;
                a.$middle = !(a.$first || a.$last);
                a.$odd = !(a.$even = 0 === (b & 1))
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (f, g) {
                    var h = g.ngRepeat, k = d.$$createComment("end ngRepeat", h), l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!l)throw c("iexp", h);
                    var m = l[1], n = l[2], p = l[3], s = l[4], l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!l)throw c("iidexp", m);
                    var y = l[3] || l[1], x = l[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident", p);
                    var r, w, v, z, t = {$id: Ha};
                    s ? r = a(s) : (v = function (a, b) {
                        return Ha(b)
                    }, z = function (a) {
                        return a
                    });
                    return function (a, d, f, g, l) {
                        r && (w = function (b, c, d) {
                            x && (t[x] = b);
                            t[y] = c;
                            t.$index =
                                d;
                            return r(a, t)
                        });
                        var m = V();
                        a.$watchCollection(n, function (f) {
                            var g, n, r = d[0], s, t = V(), A, E, H, D, I, F, J;
                            p && (a[p] = f);
                            if (za(f))I = f, n = w || v; else for (J in n = w || z, I = [], f)va.call(f, J) && "$" !== J.charAt(0) && I.push(J);
                            A = I.length;
                            J = Array(A);
                            for (g = 0; g < A; g++)if (E = f === I ? g : I[g], H = f[E], D = n(E, H, g), m[D])F = m[D], delete m[D], t[D] = F, J[g] = F; else {
                                if (t[D])throw q(J, function (a) {
                                    a && a.scope && (m[a.id] = a)
                                }), c("dupes", h, D, H);
                                J[g] = {id: D, scope: u, clone: u};
                                t[D] = !0
                            }
                            for (s in m) {
                                F = m[s];
                                D = ub(F.clone);
                                b.leave(D);
                                if (D[0].parentNode)for (g = 0, n = D.length; g <
                                n; g++)D[g].$$NG_REMOVED = !0;
                                F.scope.$destroy()
                            }
                            for (g = 0; g < A; g++)if (E = f === I ? g : I[g], H = f[E], F = J[g], F.scope) {
                                s = r;
                                do s = s.nextSibling; while (s && s.$$NG_REMOVED);
                                F.clone[0] != s && b.move(ub(F.clone), null, r);
                                r = F.clone[F.clone.length - 1];
                                e(F.scope, g, y, H, x, E, A)
                            } else l(function (a, c) {
                                F.scope = c;
                                var d = k.cloneNode(!1);
                                a[a.length++] = d;
                                b.enter(a, null, r);
                                r = d;
                                F.clone = a;
                                t[F.id] = F;
                                e(F.scope, g, y, H, x, E, A)
                            });
                            m = t
                        })
                    }
                }
            }
        }], Ie = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngShow, function (b) {
                        a[b ?
                            "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], Be = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], Je = Na(function (a, b, d) {
            a.$watch(d.ngStyle, function (a, d) {
                d && a !== d && q(d, function (a, c) {
                    b.css(c, "")
                });
                a && b.css(a)
            }, !0)
        }), Ke = ["$animate", "$compile", function (a, b) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }],
                link: function (d, c, e, f) {
                    var g = [], h = [], k = [], l = [], m = function (a, b) {
                        return function () {
                            a.splice(b, 1)
                        }
                    };
                    d.$watch(e.ngSwitch || e.on, function (c) {
                        var d, e;
                        d = 0;
                        for (e = k.length; d < e; ++d)a.cancel(k[d]);
                        d = k.length = 0;
                        for (e = l.length; d < e; ++d) {
                            var s = ub(h[d].clone);
                            l[d].$destroy();
                            (k[d] = a.leave(s)).then(m(k, d))
                        }
                        h.length = 0;
                        l.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && q(g, function (c) {
                            c.transclude(function (d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.$$createComment("end ngSwitchWhen");
                                h.push({clone: d});
                                a.enter(d, f.parent(),
                                    f)
                            })
                        })
                    })
                }
            }
        }], Le = Na({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];
                c.cases["!" + d.ngSwitchWhen].push({transclude: e, element: b})
            }
        }), Me = Na({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["?"] = c.cases["?"] || [];
                c.cases["?"].push({transclude: e, element: b})
            }
        }), Pg = O("ngTransclude"), Oe = Na({
            restrict: "EAC", link: function (a, b, d, c, e) {
                d.ngTransclude ===
                d.$attr.ngTransclude && (d.ngTransclude = "");
                if (!e)throw Pg("orphan", wa(b));
                e(function (a) {
                    a.length && (b.empty(), b.append(a))
                }, null, d.ngTransclude || d.ngTranscludeSlot)
            }
        }), oe = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, d) {
                    "text/ng-template" == d.type && a.put(d.id, b[0].text)
                }
            }
        }], Qg = {$setViewValue: E, $render: E}, Rg = ["$element", "$scope", function (a, b) {
            var d = this, c = new Ua;
            d.ngModelCtrl = Qg;
            d.unknownOption = H(P.createElement("option"));
            d.renderUnknownOption = function (b) {
                b = "? " + Ha(b) +
                    " ?";
                d.unknownOption.val(b);
                a.prepend(d.unknownOption);
                a.val(b)
            };
            b.$on("$destroy", function () {
                d.renderUnknownOption = E
            });
            d.removeUnknownOption = function () {
                d.unknownOption.parent() && d.unknownOption.remove()
            };
            d.readValue = function () {
                d.removeUnknownOption();
                return a.val()
            };
            d.writeValue = function (b) {
                d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b)
            };
            d.addOption = function (a, b) {
                if (8 !==
                    b[0].nodeType) {
                    Ta(a, '"option value"');
                    "" === a && (d.emptyOption = b);
                    var g = c.get(a) || 0;
                    c.put(a, g + 1);
                    d.ngModelCtrl.$render();
                    b[0].hasAttribute("selected") && (b[0].selected = !0)
                }
            };
            d.removeOption = function (a) {
                var b = c.get(a);
                b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = u)) : c.put(a, b - 1))
            };
            d.hasOption = function (a) {
                return !!c.get(a)
            };
            d.registerOption = function (a, b, c, h, k) {
                if (h) {
                    var l;
                    c.$observe("value", function (a) {
                        A(l) && d.removeOption(l);
                        l = a;
                        d.addOption(a, b)
                    })
                } else k ? a.$watch(k, function (a, e) {
                    c.$set("value", a);
                    e !==
                    a && d.removeOption(e);
                    d.addOption(a, b)
                }) : d.addOption(c.value, b);
                b.on("$destroy", function () {
                    d.removeOption(c.value);
                    d.ngModelCtrl.$render()
                })
            }
        }], pe = function () {
            return {
                restrict: "E", require: ["select", "?ngModel"], controller: Rg, priority: 1, link: {
                    pre: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            f.ngModelCtrl = e;
                            b.on("change", function () {
                                a.$apply(function () {
                                    e.$setViewValue(f.readValue())
                                })
                            });
                            if (d.multiple) {
                                f.readValue = function () {
                                    var a = [];
                                    q(b.find("option"), function (b) {
                                        b.selected && a.push(b.value)
                                    });
                                    return a
                                };
                                f.writeValue = function (a) {
                                    var c = new Ua(a);
                                    q(b.find("option"), function (a) {
                                        a.selected = A(c.get(a.value))
                                    })
                                };
                                var g, h = NaN;
                                a.$watch(function () {
                                    h !== e.$viewValue || na(g, e.$viewValue) || (g = ia(e.$viewValue), e.$render());
                                    h = e.$viewValue
                                });
                                e.$isEmpty = function (a) {
                                    return !a || 0 === a.length
                                }
                            }
                        }
                    }, post: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            e.$render = function () {
                                f.writeValue(e.$viewValue)
                            }
                        }
                    }
                }
            }
        }, re = ["$interpolate", function (a) {
            return {
                restrict: "E", priority: 100, compile: function (b, d) {
                    if (A(d.value))var c = a(d.value, !0); else {
                        var e =
                            a(b.text(), !0);
                        e || d.$set("value", b.text())
                    }
                    return function (a, b, d) {
                        var k = b.parent();
                        (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e)
                    }
                }
            }
        }], qe = da({restrict: "E", terminal: !1}), Fc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    c && (d.required = !0, c.$validators.required = function (a, b) {
                        return !d.required || !c.$isEmpty(b)
                    }, d.$observe("required", function () {
                        c.$validate()
                    }))
                }
            }
        }, Ec = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a,
                                                                    b, d, c) {
                    if (c) {
                        var e, f = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            y(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test)throw O("ngPattern")("noregexp", f, a, wa(b));
                            e = a || u;
                            c.$validate()
                        });
                        c.$validators.pattern = function (a, b) {
                            return c.$isEmpty(b) || z(e) || e.test(b)
                        }
                    }
                }
            }
        }, Hc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = -1;
                        d.$observe("maxlength", function (a) {
                            a = Y(a);
                            e = isNaN(a) ? -1 : a;
                            c.$validate()
                        });
                        c.$validators.maxlength = function (a, b) {
                            return 0 > e || c.$isEmpty(b) ||
                                b.length <= e
                        }
                    }
                }
            }
        }, Gc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = 0;
                        d.$observe("minlength", function (a) {
                            e = Y(a) || 0;
                            c.$validate()
                        });
                        c.$validators.minlength = function (a, b) {
                            return c.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    T.angular.bootstrap ? T.console && console.log("WARNING: Tried to load angular more than once.") : (he(), je(ea), ea.module("ngLocale", [], ["$provide", function (a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        }

        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM",
                    "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5,
                    6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-\u00a4",
                    negSuf: "",
                    posPre: "\u00a4",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (a,
                                 c) {
                var e = a | 0, f = c;
                u === f && (f = Math.min(b(a), 3));
                Math.pow(10, f);
                return 1 == e && 0 == f ? "one" : "other"
            }
        })
    }]), H(P).ready(function () {
        de(P, yc)
    }))
})(window, document);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {
        }

        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {
    var Carousel = {
        init: function (options, el) {
            var base = this;
            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);
            base.userOptions = options;
            base.loadContent();
        }, loadContent: function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }
            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        }, logIn: function () {
            var base = this;
            base.$elem.data({
                "owl-originalStyles": base.$elem.attr("style"),
                "owl-originalClasses": base.$elem.attr("class")
            });
            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        }, setVars: function () {
            var base = this;
            if (base.$elem.children().length === 0) {
                return false;
            }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        }, onStartup: function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();
            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();
            base.$elem.find(".owl-wrapper").css("display", "block");
            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        }, eachMoveUpdate: function () {
            var base = this;
            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();
            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        }, updateVars: function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        }, reload: function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        }, watchVisibility: function () {
            var base = this;
            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        }, wrapItems: function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        }, baseClass: function () {
            var base = this, hasBaseClass = base.$elem.hasClass(base.options.baseClass), hasThemeClass = base.$elem.hasClass(base.options.theme);
            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }
            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        }, updateItems: function () {
            var base = this, width, i;
            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }
            width = $(base.options.responsiveBaseWidth).width();
            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                base.options.itemsCustom.sort(function (a, b) {
                    return a[0] - b[0];
                });
                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }
            } else {
                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }
                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }
                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }
                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }
                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        }, response: function () {
            var base = this, smallDelay, lastWindowWidth;
            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();
            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        }, updatePosition: function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        }, appendItemsSizes: function () {
            var base = this, roundPages = 0, lastItem = base.itemsAmount - base.options.items;
            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this.css({"width": base.itemWidth}).data("owl-item", Number(index));
                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        }, appendWrapperSizes: function () {
            var base = this, width = base.$owlItems.length * base.itemWidth;
            base.$owlWrapper.css({"width": width * 2, "left": 0});
            base.appendItemsSizes();
        }, calculateAll: function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        }, calculateWidth: function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        }, max: function () {
            var base = this, maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        }, min: function () {
            return 0;
        }, loops: function () {
            var base = this, prev = 0, elWidth = 0, i, item, roundPageNum;
            base.positionsInArray = [0];
            base.pagesInArray = [];
            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);
                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        }, buildControls: function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        }, buildButtons: function () {
            var base = this, buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);
            base.buttonPrev = $("<div/>", {"class": "owl-prev", "html": base.options.navigationText[0] || ""});
            base.buttonNext = $("<div/>", {"class": "owl-next", "html": base.options.navigationText[1] || ""});
            buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);
            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });
            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        }, buildPagination: function () {
            var base = this;
            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);
            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        }, updatePagination: function () {
            var base = this, counter, lastPage, lastItem, i, paginationButton, paginationButtonInner;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.html("");
            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;
            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {"class": "owl-page"});
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);
                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);
                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        }, checkPagination: function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper.find(".owl-page").removeClass("active");
                    $(this).addClass("active");
                }
            });
        }, checkNavigation: function () {
            var base = this;
            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        }, updateControls: function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        }, destroyControls: function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        }, next: function (speed) {
            var base = this;
            if (base.isTransition) {
                return false;
            }
            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        }, prev: function (speed) {
            var base = this;
            if (base.isTransition) {
                return false;
            }
            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        }, goTo: function (position, speed, drag) {
            var base = this, goToPixel;
            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];
            if (base.browser.support3d === true) {
                base.isCss3Finish = false;
                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);
                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        }, jumpTo: function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        }, afterGo: function () {
            var base = this;
            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);
            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();
                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        }, stop: function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        }, checkAp: function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        }, play: function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        }, swapSpeed: function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        }, addCssSpeed: function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        }, removeTransition: function () {
            return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", "transition": ""};
        }, doTranslate: function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        }, transition3d: function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        }, css2move: function (value) {
            var base = this;
            base.$owlWrapper.css({"left": value});
        }, css2slide: function (value, speed) {
            var base = this;
            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({"left": value}, {
                duration: speed || base.options.slideSpeed,
                complete: function () {
                    base.isCssFinish = true;
                }
            });
        }, checkBrowser: function () {
            var base = this, translate3D = "translate3d(0px, 0px, 0px)", tempElem = document.createElement("div"), regex, asSupport, support3d, isTouch;
            tempElem.style.cssText = "  -moz-transform:" + translate3D + "; -ms-transform:" + translate3D + "; -o-transform:" + translate3D + "; -webkit-transform:" + translate3D + "; transform:" + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);
            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;
            base.browser = {"support3d": support3d, "isTouch": isTouch};
        }, moveEvents: function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        }, eventTypes: function () {
            var base = this, types = ["s", "e", "x"];
            base.ev_types = {};
            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
            }
            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        }, disabledEvents: function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) {
                event.preventDefault();
            });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        }, gestures: function () {
            var base = this, locals = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            base.isCssFinish = true;
            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {x: event.touches[0].pageX, y: event.touches[0].pageY};
                }
                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {x: event.pageX, y: event.pageY};
                    }
                    if (event.pageX === undefined) {
                        return {x: event.clientX, y: event.clientY};
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event, position;
                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }
                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }
                base.newPosX = 0;
                base.newRelativeX = 0;
                $(this).css(base.removeTransition());
                position = $(this).position();
                locals.relativePos = position.left;
                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;
                swapEvents("on");
                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event, minSwipe, maxSwipe;
                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;
                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }
                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }
                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }
                minSwipe = function () {
                    return base.newRelativeX / 5;
                };
                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };
                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event, newPosition, handlers, owlStopEvent;
                ev.target = ev.target || ev.srcElement;
                locals.dragging = false;
                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }
                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }
                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }

            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        }, getNewPosition: function () {
            var base = this, newPosition = base.closestItem();
            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        }, closestItem: function () {
            var base = this, array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray, goal = base.newPosX, closest = null;
            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        }, moveDirection: function () {
            var base = this, direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        }, customEvents: function () {
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        }, stopOnHover: function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        }, lazyLoad: function () {
            var base = this, i, $item, itemNumber, $lazyImg, follow;
            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);
                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }
                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");
                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    $lazyImg.each(function () {
                        base.lazyPreload($item, $(this));
                    });
                }
            }
        }, lazyPreload: function ($item, $lazyImg) {
            var base = this, iterations = 0, isBackgroundImg;
            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }
            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        }, autoHeight: function () {
            var base = this, $currentimg = $(base.$owlItems[base.currentItem]).find("img"), iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) {
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", "");
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        }, completeImg: function (img) {
            var naturalWidthType;
            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        }, onVisibleItems: function () {
            var base = this, i;
            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);
                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        }, transitionTypes: function (className) {
            var base = this;
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        }, singleItemTransition: function () {
            var base = this, outClass = base.outClass, inClass = base.inClass, $currentItem = base.$owlItems.eq(base.currentItem), $prevItem = base.$owlItems.eq(base.prevItem), prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem], origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2, animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
            base.isTransition = true;
            base.$owlWrapper.addClass('owl-origin').css({
                "-webkit-transform-origin": origin + "px",
                "-moz-perspective-origin": origin + "px",
                "perspective-origin": origin + "px"
            });
            function transStyles(prevPos) {
                return {"position": "relative", "left": prevPos + "px"};
            }

            $prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function () {
                base.endPrev = true;
                $prevItem.off(animEnd);
                base.clearTransStyle($prevItem, outClass);
            });
            $currentItem.addClass(inClass).on(animEnd, function () {
                base.endCurrent = true;
                $currentItem.off(animEnd);
                base.clearTransStyle($currentItem, inClass);
            });
        }, clearTransStyle: function (item, classToRemove) {
            var base = this;
            item.css({"position": "", "left": ""}).removeClass(classToRemove);
            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        }, owlStatus: function () {
            var base = this;
            base.owl = {
                "userOptions": base.userOptions,
                "baseElement": base.$elem,
                "userItems": base.$userItems,
                "owlItems": base.$owlItems,
                "currentItem": base.currentItem,
                "prevItem": base.prevItem,
                "visibleItems": base.visibleItems,
                "isTouch": base.browser.isTouch,
                "browser": base.browser,
                "dragDirection": base.dragDirection
            };
        }, clearEvents: function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        }, unWrap: function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem.attr({
                style: base.$elem.data("owl-originalStyles") || "",
                class: base.$elem.data("owl-originalClasses")
            });
        }, destroy: function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        }, reinit: function (newOptions) {
            var base = this, options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        }, addItem: function (htmlString, targetPosition) {
            var base = this, position;
            if (!htmlString) {
                return false;
            }
            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }
            base.setVars();
        }, removeItem: function (targetPosition) {
            var base = this, position;
            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }
    };
    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };
    $.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        autoPlay: false,
        stopOnHover: false,
        navigation: false,
        navigationText: ["prev", "next"],
        rewindNav: true,
        scrollPerPage: false,
        pagination: true,
        paginationNumbers: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",
        autoHeight: false,
        jsonPath: false,
        jsonSuccess: false,
        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: true,
        addClassActive: false,
        transitionStyle: false,
        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
    };
}(jQuery, window, document));
/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (r, d, C) {
    'use strict';
    function x(s, h, g) {
        return {
            restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (a, c, b, f, y) {
                function k() {
                    n && (g.cancel(n), n = null);
                    l && (l.$destroy(), l = null);
                    m && (n = g.leave(m), n.then(function () {
                        n = null
                    }), m = null)
                }

                function z() {
                    var b = s.current && s.current.locals;
                    if (d.isDefined(b && b.$template)) {
                        var b = a.$new(), f = s.current;
                        m = y(b, function (b) {
                            g.enter(b, null, m || c).then(function () {
                                !d.isDefined(u) || u && !a.$eval(u) || h()
                            });
                            k()
                        });
                        l = f.scope = b;
                        l.$emit("$viewContentLoaded");
                        l.$eval(v)
                    } else k()
                }

                var l, m, n, u = b.autoscroll, v = b.onload || "";
                a.$on("$routeChangeSuccess", z);
                z()
            }
        }
    }

    function A(d, h, g) {
        return {
            restrict: "ECA", priority: -400, link: function (a, c) {
                var b = g.current, f = b.locals;
                c.html(f.$template);
                var y = d(c.contents());
                if (b.controller) {
                    f.$scope = a;
                    var k = h(b.controller, f);
                    b.controllerAs && (a[b.controllerAs] = k);
                    c.data("$ngControllerController", k);
                    c.children().data("$ngControllerController", k)
                }
                a[b.resolveAs || "$resolve"] = f;
                y(a)
            }
        }
    }

    r = d.module("ngRoute", ["ng"]).provider("$route", function () {
        function s(a,
                   c) {
            return d.extend(Object.create(a), c)
        }

        function h(a, d) {
            var b = d.caseInsensitiveMatch, f = {originalPath: a, regexp: a}, g = f.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g, function (a, d, b, c) {
                a = "?" === c || "*?" === c ? "?" : null;
                c = "*" === c || "*?" === c ? "*" : null;
                g.push({name: b, optional: !!a});
                d = d || "";
                return "" + (a ? "" : d) + "(?:" + (a ? d : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
            }).replace(/([\/$\*])/g, "\\$1");
            f.regexp = new RegExp("^" + a + "$", b ? "i" : "");
            return f
        }

        var g = {};
        this.when = function (a, c) {
            var b =
                d.copy(c);
            d.isUndefined(b.reloadOnSearch) && (b.reloadOnSearch = !0);
            d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);
            g[a] = d.extend(b, a && h(a, b));
            if (a) {
                var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                g[f] = d.extend({redirectTo: a}, h(f, b))
            }
            return this
        };
        this.caseInsensitiveMatch = !1;
        this.otherwise = function (a) {
            "string" === typeof a && (a = {redirectTo: a});
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest",
            "$sce", function (a, c, b, f, h, k, r) {
                function l(b) {
                    var e = t.current;
                    (x = (p = n()) && e && p.$$route === e.$$route && d.equals(p.pathParams, e.pathParams) && !p.reloadOnSearch && !v) || !e && !p || a.$broadcast("$routeChangeStart", p, e).defaultPrevented && b && b.preventDefault()
                }

                function m() {
                    var w = t.current, e = p;
                    if (x)w.params = e.params, d.copy(w.params, b), a.$broadcast("$routeUpdate", w); else if (e || w)v = !1, (t.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? c.path(u(e.redirectTo, e.params)).search(e.params).replace() : c.url(e.redirectTo(e.pathParams,
                        c.path(), c.search())).replace()), f.when(e).then(function () {
                        if (e) {
                            var a = d.extend({}, e.resolve), b, c;
                            d.forEach(a, function (b, e) {
                                a[e] = d.isString(b) ? h.get(b) : h.invoke(b, null, null, e)
                            });
                            d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(c = e.templateUrl) && (d.isFunction(c) && (c = c(e.params)), d.isDefined(c) && (e.loadedTemplateUrl = r.valueOf(c), b = k(c)));
                            d.isDefined(b) && (a.$template = b);
                            return f.all(a)
                        }
                    }).then(function (c) {
                        e == t.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast("$routeChangeSuccess",
                            e, w))
                    }, function (b) {
                        e == t.current && a.$broadcast("$routeChangeError", e, w, b)
                    })
                }

                function n() {
                    var a, b;
                    d.forEach(g, function (f, g) {
                        var q;
                        if (q = !b) {
                            var h = c.path();
                            q = f.keys;
                            var l = {};
                            if (f.regexp)if (h = f.regexp.exec(h)) {
                                for (var k = 1, n = h.length; k < n; ++k) {
                                    var m = q[k - 1], p = h[k];
                                    m && p && (l[m.name] = p)
                                }
                                q = l
                            } else q = null; else q = null;
                            q = a = q
                        }
                        q && (b = s(f, {params: d.extend({}, c.search(), a), pathParams: a}), b.$$route = f)
                    });
                    return b || g[null] && s(g[null], {params: {}, pathParams: {}})
                }

                function u(a, b) {
                    var c = [];
                    d.forEach((a || "").split(":"), function (a,
                                                              d) {
                        if (0 === d)c.push(a); else {
                            var f = a.match(/(\w+)(?:[?*])?(.*)/), g = f[1];
                            c.push(b[g]);
                            c.push(f[2] || "");
                            delete b[g]
                        }
                    });
                    return c.join("")
                }

                var v = !1, p, x, t = {
                    routes: g, reload: function () {
                        v = !0;
                        var b = {
                            defaultPrevented: !1, preventDefault: function () {
                                this.defaultPrevented = !0;
                                v = !1
                            }
                        };
                        a.$evalAsync(function () {
                            l(b);
                            b.defaultPrevented || m()
                        })
                    }, updateParams: function (a) {
                        if (this.current && this.current.$$route)a = d.extend({}, this.current.params, a), c.path(u(this.current.$$route.originalPath, a)), c.search(a); else throw B("norout");
                    }
                };
                a.$on("$locationChangeStart", l);
                a.$on("$locationChangeSuccess", m);
                return t
            }]
    }).run(["$route", d.noop]);
    var B = d.$$minErr("ngRoute");
    r.provider("$routeParams", function () {
        this.$get = function () {
            return {}
        }
    });
    r.directive("ngView", x);
    r.directive("ngView", A);
    x.$inject = ["$route", "$anchorScroll", "$animate"];
    A.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map
/*
 AngularJS v1.5.3
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (A, e, B) {
    'use strict';
    function C(a) {
        var c = [];
        v(c, e.noop).chars(a);
        return c.join("")
    }

    function h(a, c) {
        var b = {}, d = a.split(","), l;
        for (l = 0; l < d.length; l++)b[c ? e.lowercase(d[l]) : d[l]] = !0;
        return b
    }

    function D(a, c) {
        null === a || a === B ? a = "" : "string" !== typeof a && (a = "" + a);
        g.innerHTML = a;
        var b = 5;
        do {
            if (0 === b)throw w("uinput");
            b--;
            11 >= document.documentMode && n(g);
            a = g.innerHTML;
            g.innerHTML = a
        } while (a !== g.innerHTML);
        for (b = g.firstChild; b;) {
            switch (b.nodeType) {
                case 1:
                    c.start(b.nodeName.toLowerCase(), E(b.attributes));
                    break;
                case 3:
                    c.chars(b.textContent)
            }
            var d;
            if (!(d = b.firstChild) && (1 == b.nodeType && c.end(b.nodeName.toLowerCase()), d = b.nextSibling, !d))for (; null == d;) {
                b = b.parentNode;
                if (b === g)break;
                d = b.nextSibling;
                1 == b.nodeType && c.end(b.nodeName.toLowerCase())
            }
            b = d
        }
        for (; b = g.firstChild;)g.removeChild(b)
    }

    function E(a) {
        for (var c = {}, b = 0, d = a.length; b < d; b++) {
            var l = a[b];
            c[l.name] = l.value
        }
        return c
    }

    function x(a) {
        return a.replace(/&/g, "&amp;").replace(F, function (a) {
            var b = a.charCodeAt(0);
            a = a.charCodeAt(1);
            return "&#" + (1024 * (b - 55296) +
                (a - 56320) + 65536) + ";"
        }).replace(G, function (a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function v(a, c) {
        var b = !1, d = e.bind(a, a.push);
        return {
            start: function (a, f) {
                a = e.lowercase(a);
                !b && H[a] && (b = a);
                b || !0 !== t[a] || (d("<"), d(a), e.forEach(f, function (b, f) {
                    var g = e.lowercase(f), h = "img" === a && "src" === g || "background" === g;
                    !0 !== I[g] || !0 === y[g] && !c(b, h) || (d(" "), d(f), d('="'), d(x(b)), d('"'))
                }), d(">"))
            }, end: function (a) {
                a = e.lowercase(a);
                b || !0 !== t[a] || !0 === z[a] || (d("</"), d(a), d(">"));
                a ==
                b && (b = !1)
            }, chars: function (a) {
                b || d(x(a))
            }
        }
    }

    function n(a) {
        if (a.nodeType === Node.ELEMENT_NODE)for (var c = a.attributes, b = 0, d = c.length; b < d; b++) {
            var e = c[b], f = e.name.toLowerCase();
            if ("xmlns:ns1" === f || 0 === f.indexOf("ns1:"))a.removeAttributeNode(e), b--, d--
        }
        (c = a.firstChild) && n(c);
        (c = a.nextSibling) && n(c)
    }

    var w = e.$$minErr("$sanitize"), F = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, G = /([^\#-~ |!])/g, z = h("area,br,col,hr,img,wbr"), q = h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), k = h("rp,rt"), u = e.extend({}, k, q), q = e.extend({},
        q, h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")), k = e.extend({}, k, h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), J = h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
        H = h("script,style"), t = e.extend({}, z, q, k, u), y = h("background,cite,href,longdesc,src,xlink:href"), u = h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"), k = h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
        !0), I = e.extend({}, y, k, u), g;
    (function (a) {
        if (a.document && a.document.implementation)a = a.document.implementation.createHTMLDocument("inert"); else throw w("noinert");
        var c = (a.documentElement || a.getDocumentElement()).getElementsByTagName("body");
        1 === c.length ? g = c[0] : (c = a.createElement("html"), g = a.createElement("body"), c.appendChild(g), a.appendChild(c))
    })(A);
    e.module("ngSanitize", []).provider("$sanitize", function () {
        var a = !1;
        this.$get = ["$$sanitizeUri", function (c) {
            a && e.extend(t, J);
            return function (a) {
                var d =
                    [];
                D(a, v(d, function (a, b) {
                    return !/^unsafe:/.test(c(a, b))
                }));
                return d.join("")
            }
        }];
        this.enableSvg = function (c) {
            return e.isDefined(c) ? (a = c, this) : a
        }
    });
    e.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
        var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i, b = /^mailto:/i, d = e.$$minErr("linky"), g = e.isString;
        return function (f, h, m) {
            function k(a) {
                a && p.push(C(a))
            }

            function q(a, b) {
                var c;
                p.push("<a ");
                e.isFunction(m) && (m = m(a));
                if (e.isObject(m))for (c in m)p.push(c +
                    '="' + m[c] + '" '); else m = {};
                !e.isDefined(h) || "target" in m || p.push('target="', h, '" ');
                p.push('href="', a.replace(/"/g, "&quot;"), '">');
                k(b);
                p.push("</a>")
            }

            if (null == f || "" === f)return f;
            if (!g(f))throw d("notstring", f);
            for (var r = f, p = [], s, n; f = r.match(c);)s = f[0], f[2] || f[4] || (s = (f[3] ? "http://" : "mailto:") + s), n = f.index, k(r.substr(0, n)), q(s, f[0].replace(b, "")), r = r.substring(n + f[0].length);
            k(r);
            return a(p.join(""))
        }
    }])
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
/*!
 * angular-translate - v2.5.2 - 2014-12-10
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2014 ; Licensed MIT
 */
angular.module("pascalprecht.translate", ["ng"]).run(["$translate", function (a) {
    var b = a.storageKey(), c = a.storage(), d = function () {
        var d = a.preferredLanguage();
        angular.isString(d) ? a.use(d) : c.put(b, a.use())
    };
    c ? c.get(b) ? a.use(c.get(b))["catch"](d) : d() : angular.isString(a.preferredLanguage()) && a.use(a.preferredLanguage())
}]), angular.module("pascalprecht.translate").provider("$translate", ["$STORAGE_KEY", function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = {}, r = [], s = a, t = [], u = !1, v = "translate-cloak", w = !1, x = ".", y = "2.5.2", z = function () {
        var a, b, c = window.navigator, d = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
        if (angular.isArray(c.languages))for (a = 0; a < c.languages.length; a++)if (b = c.languages[a], b && b.length)return b;
        for (a = 0; a < d.length; a++)if (b = c[d[a]], b && b.length)return b;
        return null
    };
    z.displayName = "angular-translate/service: getFirstBrowserLanguage";
    var A = function () {
        return (z() || "").split("-").join("_")
    };
    A.displayName = "angular-translate/service: getLocale";
    var B = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
        return -1
    }, C = function () {
        return this.replace(/^\s+|\s+$/g, "")
    }, D = function (a) {
        for (var b = [], d = angular.lowercase(a), e = 0, f = r.length; f > e; e++)b.push(angular.lowercase(r[e]));
        if (B(b, d) > -1)return a;
        if (c) {
            var g;
            for (var h in c) {
                var i = !1, j = Object.prototype.hasOwnProperty.call(c, h) && angular.lowercase(h) === angular.lowercase(a);
                if ("*" === h.slice(-1) && (i = h.slice(0, -1) === a.slice(0, h.length - 1)), (j || i) && (g = c[h], B(b, angular.lowercase(g)) > -1))return g
            }
        }
        var k = a.split("_");
        return k.length > 1 && B(b, angular.lowercase(k[0])) > -1 ? k[0] : a
    }, E = function (a, b) {
        if (!a && !b)return q;
        if (a && !b) {
            if (angular.isString(a))return q[a]
        } else angular.isObject(q[a]) || (q[a] = {}), angular.extend(q[a], F(b));
        return this
    };
    this.translations = E, this.cloakClassName = function (a) {
        return a ? (v = a, this) : v
    };
    var F = function (a, b, c, d) {
        var e, f, g, h;
        b || (b = []), c || (c = {});
        for (e in a)Object.prototype.hasOwnProperty.call(a, e) && (h = a[e], angular.isObject(h) ? F(h, b.concat(e), c, e) : (f = b.length ? "" + b.join(x) + x + e : e, b.length && e === d && (g = "" + b.join(x), c[g] = "@:" + f), c[f] = h));
        return c
    };
    this.addInterpolation = function (a) {
        return t.push(a), this
    }, this.useMessageFormatInterpolation = function () {
        return this.useInterpolation("$translateMessageFormatInterpolation")
    }, this.useInterpolation = function (a) {
        return k = a, this
    }, this.useSanitizeValueStrategy = function (a) {
        return u = a, this
    }, this.preferredLanguage = function (a) {
        return G(a), this
    };
    var G = function (a) {
        return a && (b = a), b
    };
    this.translationNotFoundIndicator = function (a) {
        return this.translationNotFoundIndicatorLeft(a), this.translationNotFoundIndicatorRight(a), this
    }, this.translationNotFoundIndicatorLeft = function (a) {
        return a ? (n = a, this) : n
    }, this.translationNotFoundIndicatorRight = function (a) {
        return a ? (o = a, this) : o
    }, this.fallbackLanguage = function (a) {
        return H(a), this
    };
    var H = function (a) {
        return a ? (angular.isString(a) ? (e = !0, d = [a]) : angular.isArray(a) && (e = !1, d = a), angular.isString(b) && B(d, b) < 0 && d.push(b), this) : e ? d[0] : d
    };
    this.use = function (a) {
        if (a) {
            if (!q[a] && !l)throw new Error("$translateProvider couldn't find translationTable for langKey: '" + a + "'");
            return f = a, this
        }
        return f
    };
    var I = function (a) {
        return a ? void(s = a) : i ? i + s : s
    };
    this.storageKey = I, this.useUrlLoader = function (a, b) {
        return this.useLoader("$translateUrlLoader", angular.extend({url: a}, b))
    }, this.useStaticFilesLoader = function (a) {
        return this.useLoader("$translateStaticFilesLoader", a)
    }, this.useLoader = function (a, b) {
        return l = a, m = b || {}, this
    }, this.useLocalStorage = function () {
        return this.useStorage("$translateLocalStorage")
    }, this.useCookieStorage = function () {
        return this.useStorage("$translateCookieStorage")
    }, this.useStorage = function (a) {
        return h = a, this
    }, this.storagePrefix = function (a) {
        return a ? (i = a, this) : a
    }, this.useMissingTranslationHandlerLog = function () {
        return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
    }, this.useMissingTranslationHandler = function (a) {
        return j = a, this
    }, this.usePostCompiling = function (a) {
        return w = !!a, this
    }, this.determinePreferredLanguage = function (a) {
        var c = a && angular.isFunction(a) ? a() : A();
        return b = r.length ? D(c) : c, this
    }, this.registerAvailableLanguageKeys = function (a, b) {
        return a ? (r = a, b && (c = b), this) : r
    }, this.useLoaderCache = function (a) {
        return a === !1 ? p = void 0 : a === !0 ? p = !0 : "undefined" == typeof a ? p = "$translationCache" : a && (p = a), this
    }, this.$get = ["$log", "$injector", "$rootScope", "$q", function (a, c, i, r) {
        var x, z, A, J = c.get(k || "$translateDefaultInterpolation"), K = !1, L = {}, M = {}, N = function (a, c, e) {
            if (angular.isArray(a)) {
                var g = function (a) {
                    for (var b = {}, d = [], f = function (a) {
                        var d = r.defer(), f = function (c) {
                            b[a] = c, d.resolve([a, c])
                        };
                        return N(a, c, e).then(f, f), d.promise
                    }, g = 0, h = a.length; h > g; g++)d.push(f(a[g]));
                    return r.all(d).then(function () {
                        return b
                    })
                };
                return g(a)
            }
            var i = r.defer();
            a && (a = C.apply(a));
            var j = function () {
                var a = b ? M[b] : M[f];
                if (z = 0, h && !a) {
                    var c = x.get(s);
                    if (a = M[c], d && d.length) {
                        var e = B(d, c);
                        z = 0 === e ? 1 : 0, B(d, b) < 0 && d.push(b)
                    }
                }
                return a
            }();
            return j ? j.then(function () {
                Z(a, c, e).then(i.resolve, i.reject)
            }, i.reject) : Z(a, c, e).then(i.resolve, i.reject), i.promise
        }, O = function (a) {
            return n && (a = [n, a].join(" ")), o && (a = [a, o].join(" ")), a
        }, P = function (a) {
            f = a, i.$emit("$translateChangeSuccess", {language: a}), h && x.put(N.storageKey(), f), J.setLocale(f), angular.forEach(L, function (a, b) {
                L[b].setLocale(f)
            }), i.$emit("$translateChangeEnd", {language: a})
        }, Q = function (a) {
            if (!a)throw"No language key specified for loading.";
            var b = r.defer();
            i.$emit("$translateLoadingStart", {language: a}), K = !0;
            var d = p;
            "string" == typeof d && (d = c.get(d));
            var e = angular.extend({}, m, {key: a, $http: angular.extend({}, {cache: d}, m.$http)});
            return c.get(l)(e).then(function (c) {
                var d = {};
                i.$emit("$translateLoadingSuccess", {language: a}), angular.isArray(c) ? angular.forEach(c, function (a) {
                    angular.extend(d, F(a))
                }) : angular.extend(d, F(c)), K = !1, b.resolve({
                    key: a,
                    table: d
                }), i.$emit("$translateLoadingEnd", {language: a})
            }, function (a) {
                i.$emit("$translateLoadingError", {language: a}), b.reject(a), i.$emit("$translateLoadingEnd", {language: a})
            }), b.promise
        };
        if (h && (x = c.get(h), !x.get || !x.put))throw new Error("Couldn't use storage '" + h + "', missing get() or put() method!");
        angular.isFunction(J.useSanitizeValueStrategy) && J.useSanitizeValueStrategy(u), t.length && angular.forEach(t, function (a) {
            var d = c.get(a);
            d.setLocale(b || f), angular.isFunction(d.useSanitizeValueStrategy) && d.useSanitizeValueStrategy(u), L[d.getInterpolationIdentifier()] = d
        });
        var R = function (a) {
            var b = r.defer();
            return Object.prototype.hasOwnProperty.call(q, a) ? b.resolve(q[a]) : M[a] ? M[a].then(function (a) {
                E(a.key, a.table), b.resolve(a.table)
            }, b.reject) : b.reject(), b.promise
        }, S = function (a, b, c, d) {
            var e = r.defer();
            return R(a).then(function (g) {
                Object.prototype.hasOwnProperty.call(g, b) ? (d.setLocale(a), e.resolve(d.interpolate(g[b], c)), d.setLocale(f)) : e.reject()
            }, e.reject), e.promise
        }, T = function (a, b, c, d) {
            var e, g = q[a];
            return g && Object.prototype.hasOwnProperty.call(g, b) && (d.setLocale(a), e = d.interpolate(g[b], c), d.setLocale(f)), e
        }, U = function (a) {
            if (j) {
                var b = c.get(j)(a, f);
                return void 0 !== b ? b : a
            }
            return a
        }, V = function (a, b, c, e) {
            var f = r.defer();
            if (a < d.length) {
                var g = d[a];
                S(g, b, c, e).then(f.resolve, function () {
                    V(a + 1, b, c, e).then(f.resolve)
                })
            } else f.resolve(U(b));
            return f.promise
        }, W = function (a, b, c, e) {
            var f;
            if (a < d.length) {
                var g = d[a];
                f = T(g, b, c, e), f || (f = W(a + 1, b, c, e))
            }
            return f
        }, X = function (a, b, c) {
            return V(A > 0 ? A : z, a, b, c)
        }, Y = function (a, b, c) {
            return W(A > 0 ? A : z, a, b, c)
        }, Z = function (a, b, c) {
            var e = r.defer(), g = f ? q[f] : q, h = c ? L[c] : J;
            if (g && Object.prototype.hasOwnProperty.call(g, a)) {
                var i = g[a];
                "@:" === i.substr(0, 2) ? N(i.substr(2), b, c).then(e.resolve, e.reject) : e.resolve(h.interpolate(i, b))
            } else {
                var k;
                j && !K && (k = U(a)), f && d && d.length ? X(a, b, h).then(function (a) {
                    e.resolve(a)
                }, function (a) {
                    e.reject(O(a))
                }) : j && !K && k ? e.resolve(k) : e.reject(O(a))
            }
            return e.promise
        }, $ = function (a, b, c) {
            var e, g = f ? q[f] : q, h = c ? L[c] : J;
            if (g && Object.prototype.hasOwnProperty.call(g, a)) {
                var i = g[a];
                e = "@:" === i.substr(0, 2) ? $(i.substr(2), b, c) : h.interpolate(i, b)
            } else {
                var k;
                j && !K && (k = U(a)), f && d && d.length ? (z = 0, e = Y(a, b, h)) : e = j && !K && k ? k : O(a)
            }
            return e
        };
        if (N.preferredLanguage = function (a) {
                return a && G(a), b
            }, N.cloakClassName = function () {
                return v
            }, N.fallbackLanguage = function (a) {
                if (void 0 !== a && null !== a) {
                    if (H(a), l && d && d.length)for (var b = 0, c = d.length; c > b; b++)M[d[b]] || (M[d[b]] = Q(d[b]));
                    N.use(N.use())
                }
                return e ? d[0] : d
            }, N.useFallbackLanguage = function (a) {
                if (void 0 !== a && null !== a)if (a) {
                    var b = B(d, a);
                    b > -1 && (A = b)
                } else A = 0
            }, N.proposedLanguage = function () {
                return g
            }, N.storage = function () {
                return x
            }, N.use = function (a) {
                if (!a)return f;
                var b = r.defer();
                i.$emit("$translateChangeStart", {language: a});
                var c = D(a);
                return c && (a = c), q[a] || !l || M[a] ? (b.resolve(a), P(a)) : (g = a, M[a] = Q(a).then(function (c) {
                    return E(c.key, c.table), b.resolve(c.key), P(c.key), g === a && (g = void 0), c
                }, function (a) {
                    g === a && (g = void 0), i.$emit("$translateChangeError", {language: a}), b.reject(a), i.$emit("$translateChangeEnd", {language: a})
                })), b.promise
            }, N.storageKey = function () {
                return I()
            }, N.isPostCompilingEnabled = function () {
                return w
            }, N.refresh = function (a) {
                function b() {
                    e.resolve(), i.$emit("$translateRefreshEnd", {language: a})
                }

                function c() {
                    e.reject(), i.$emit("$translateRefreshEnd", {language: a})
                }

                if (!l)throw new Error("Couldn't refresh translation table, no loader registered!");
                var e = r.defer();
                if (i.$emit("$translateRefreshStart", {language: a}), a)q[a] ? Q(a).then(function (c) {
                    E(c.key, c.table), a === f && P(f), b()
                }, c) : c(); else {
                    var g = [], h = {};
                    if (d && d.length)for (var j = 0, k = d.length; k > j; j++)g.push(Q(d[j])), h[d[j]] = !0;
                    f && !h[f] && g.push(Q(f)), r.all(g).then(function (a) {
                        angular.forEach(a, function (a) {
                            q[a.key] && delete q[a.key], E(a.key, a.table)
                        }), f && P(f), b()
                    })
                }
                return e.promise
            }, N.instant = function (a, c, e) {
                if (null === a || angular.isUndefined(a))return a;
                if (angular.isArray(a)) {
                    for (var g = {}, h = 0, i = a.length; i > h; h++)g[a[h]] = N.instant(a[h], c, e);
                    return g
                }
                if (angular.isString(a) && a.length < 1)return a;
                a && (a = C.apply(a));
                var k, l = [];
                b && l.push(b), f && l.push(f), d && d.length && (l = l.concat(d));
                for (var m = 0, n = l.length; n > m; m++) {
                    var o = l[m];
                    if (q[o] && "undefined" != typeof q[o][a] && (k = $(a, c, e)), "undefined" != typeof k)break
                }
                return k || "" === k || (k = J.interpolate(a, c), j && !K && (k = U(a))), k
            }, N.versionInfo = function () {
                return y
            }, N.loaderCache = function () {
                return p
            }, l && (angular.equals(q, {}) && N.use(N.use()), d && d.length))for (var _ = function (a) {
            return E(a.key, a.table), i.$emit("$translateChangeEnd", {language: a.key}), a
        }, ab = 0, bb = d.length; bb > ab; ab++)M[d[ab]] = Q(d[ab]).then(_);
        return N
    }]
}]), angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", ["$interpolate", function (a) {
    var b, c = {}, d = "default", e = null, f = {
        escaped: function (a) {
            var b = {};
            for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = angular.element("<div></div>").text(a[c]).html());
            return b
        }
    }, g = function (a) {
        var b;
        return b = angular.isFunction(f[e]) ? f[e](a) : a
    };
    return c.setLocale = function (a) {
        b = a
    }, c.getInterpolationIdentifier = function () {
        return d
    }, c.useSanitizeValueStrategy = function (a) {
        return e = a, this
    }, c.interpolate = function (b, c) {
        return e && (c = g(c)), a(b)(c || {})
    }, c
}]), angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope", function (a, b, c, d, e, f) {
    return {
        restrict: "AE", scope: !0, compile: function (b, g) {
            var h = g.translateValues ? g.translateValues : void 0, i = g.translateInterpolation ? g.translateInterpolation : void 0, j = b[0].outerHTML.match(/translate-value-+/i), k = "^(.*)(" + c.startSymbol() + ".*" + c.endSymbol() + ")(.*)", l = "^(.*)" + c.startSymbol() + "(.*)" + c.endSymbol() + "(.*)";
            return function (b, m, n) {
                b.interpolateParams = {}, b.preText = "", b.postText = "";
                var o = {}, p = function (a) {
                    if (angular.equals(a, "") || !angular.isDefined(a)) {
                        var d = m.text().match(k);
                        angular.isArray(d) ? (b.preText = d[1], b.postText = d[3], o.translate = c(d[2])(b.$parent), watcherMatches = m.text().match(l), angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length && b.$watch(watcherMatches[2], function (a) {
                            o.translate = a, u()
                        })) : o.translate = m.text().replace(/^\s+|\s+$/g, "")
                    } else o.translate = a;
                    u()
                }, q = function (a) {
                    n.$observe(a, function (b) {
                        o[a] = b, u()
                    })
                };
                n.$observe("translate", function (a) {
                    p(a)
                });
                for (var r in n)n.hasOwnProperty(r) && "translateAttr" === r.substr(0, 13) && q(r);
                if (n.$observe("translateDefault", function (a) {
                        b.defaultText = a
                    }), h && n.$observe("translateValues", function (a) {
                        a && b.$parent.$watch(function () {
                            angular.extend(b.interpolateParams, e(a)(b.$parent))
                        })
                    }), j) {
                    var s = function (a) {
                        n.$observe(a, function (c) {
                            var d = angular.lowercase(a.substr(14, 1)) + a.substr(15);
                            b.interpolateParams[d] = c
                        })
                    };
                    for (var t in n)Object.prototype.hasOwnProperty.call(n, t) && "translateValue" === t.substr(0, 14) && "translateValues" !== t && s(t)
                }
                var u = function () {
                    for (var a in o)o.hasOwnProperty(a) && o[a] && v(a, o[a], b, b.interpolateParams)
                }, v = function (b, c, d, e) {
                    a(c, e, i).then(function (a) {
                        w(a, d, !0, b)
                    }, function (a) {
                        w(a, d, !1, b)
                    })
                }, w = function (b, c, e, f) {
                    if ("translate" === f) {
                        e || "undefined" == typeof c.defaultText || (b = c.defaultText), m.html(c.preText + b + c.postText);
                        var h = a.isPostCompilingEnabled(), i = "undefined" != typeof g.translateCompile, j = i && "false" !== g.translateCompile;
                        (h && !i || j) && d(m.contents())(c)
                    } else {
                        e || "undefined" == typeof c.defaultText || (b = c.defaultText);
                        var k = n.$attr[f].substr(15);
                        m.attr(k, b)
                    }
                };
                b.$watch("interpolateParams", u, !0);
                var x = f.$on("$translateChangeSuccess", u);
                m.text().length && p(""), u(), b.$on("$destroy", x)
            }
        }
    }
}]), angular.module("pascalprecht.translate").directive("translateCloak", ["$rootScope", "$translate", function (a, b) {
    return {
        compile: function (c) {
            var d = function () {
                c.addClass(b.cloakClassName())
            }, e = function () {
                c.removeClass(b.cloakClassName())
            }, f = a.$on("$translateChangeEnd", function () {
                e(), f(), f = null
            });
            return d(), function (a, c, f) {
                f.translateCloak && f.translateCloak.length && f.$observe("translateCloak", function (a) {
                    b(a).then(e, d)
                })
            }
        }
    }
}]), angular.module("pascalprecht.translate").filter("translate", ["$parse", "$translate", function (a, b) {
    var c = function (c, d, e) {
        return angular.isObject(d) || (d = a(d)(this)), b.instant(c, d, e)
    };
    return c.$stateful = !0, c
}]);
angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", ["$q", "$http", function (a, b) {
    return function (c) {
        if (!c || !angular.isString(c.prefix) || !angular.isString(c.suffix))throw new Error("Couldn't load static files, no prefix or suffix specified!");
        var d = a.defer();
        return b(angular.extend({
            url: [c.prefix, c.key, c.suffix].join(""),
            method: "GET",
            params: ""
        }, c.$http)).success(function (a) {
            d.resolve(a)
        }).error(function () {
            d.reject(c.key)
        }), d.promise
    }
}]);

var app = angular.module('huaweiApp', ['ngRoute', 'ngSanitize', 'pascalprecht.translate']);
app.config(['$routeProvider', '$locationProvider', '$translateProvider', function ($routeProvider, $locationProvider, $translateProvider) {
    $translateProvider.useStaticFilesLoader({
            'prefix': '/locales/locale-', 'suffix': '.json'
        }
    );
    $routeProvider.when("/", {
            templateUrl: '/templates/home.html', controller: 'homeController'
        }
    );
    $routeProvider.when("/EBC5C5CA1C7BADE743477D22918D1072.txt", {
            templateUrl: '../EBC5C5CA1C7BADE743477D22918D1072.txt', controller: 'homeController'
        }
    );
    $routeProvider.when("/:lang/", {
            templateUrl: '/templates/home.html', controller: 'homeController'
        }
    );
    $routeProvider.when("/:lang/smartphones", {
            templateUrl: '/templates/smartphones.html', controller: 'smartphonesController'
        }
    );
    $routeProvider.when("/:lang/tablets", {
            templateUrl: '/templates/smartphones.html', controller: 'tabletsController'
        }
    );
    $routeProvider.when("/:lang/products/:product_slug", {
            templateUrl: '/templates/product.html', controller: 'productController'
        }
    );
    $routeProvider.when("/:lang/enterprises", {
            templateUrl: '/templates/enterprises.html', controller: 'enterprisesController'
        }
    );
    $routeProvider.when("/:lang/about-us", {
            templateUrl: '/templates/aboutus.html', controller: 'enterprisesController'
        }
    );
    $routeProvider.when("/:lang/our-partners", {
            templateUrl: '/templates/partners.html', controller: 'enterprisesController'
        }
    );
    $routeProvider.when("/:lang/our-projects", {
            templateUrl: '/templates/projects.html', controller: 'enterprisesController'
        }
    );
    $routeProvider.when("/:lang/contacts", {
            templateUrl: '/templates/contacts.html', controller: 'enterprisesController'
        }
    );
    $routeProvider.when("/:lang/contacts", {
            templateUrl: '/templates/contacts.html', controller: 'enterprisesController'
        }
    );
    $routeProvider.when("/:lang/blog", {
            templateUrl: '/templates/blog.html', controller: 'blogController'
        }
    );
    $routeProvider.when("/:lang/blog/:slug", {
            templateUrl: '/templates/article.html', controller: 'articleController'
        }
    );
    $locationProvider.html5Mode({
            enabled: true, requireBase: false
        }
    );
}

]);
app.run(['$rootScope', '$routeParams', '$route', '$location', '$timeout', '$translate', 'mainService', function ($rootScope, $routeParams, $route, $location, $timeout, $translate, mainService) {
    $rootScope.$on("$routeChangeSuccess", function (event, current) {
            $rootScope.currentRoute = location.pathname.slice(4);
            $(".header-nav-item").find('.dd-sub-menu').hide();
        }
    );
}

]);
app.controller('mainController', ['$http', '$routeParams', '$scope', '$rootScope', '$sce', '$location', function ($http, $routeParams, $scope, $rootScope, $sce, $location) {
    $scope.appStart = true;
    // console.log(location.hostname);
    // if(location.hostname!='huaweiarmenia.am') {
    //         $scope.appStart=true;
    //     }
    $(".header-nav-item").hover(
        function () {
            $(this).find('.dd-sub-menu').show(800);
        },
        function () {
            $(this).find('.dd-sub-menu').hide();
        }
    );
    $scope.productsSubmenu = [
        {
            title: "Huawei P9", description: "", img: "/img/main-products/p9.png", slug: "huawei-p9"
        },
        {
            title: "Huawei P9 Lite", description: "", img: "/img/main-products/p9-lite.png", slug: "p9-lite"
        },
        {
            title: "Honor 5X", description: "", img: "/img/main-products/honor-5x.png", slug: "honor-5x"
        }
    ];
    $scope.trustSrc = function (src) {
        return $sce.trustAsResourceUrl(src);
    }
    ;
    $rootScope.scrollToTop = function () {
        console.log('a');
        $('html, body').animate({
                scrollTop: 0
            }
            , 'fast');
        $('html, body').scrollTop(300);
    }
    ;
    $rootScope.leftMenu = {
        visible: false, opened: {
            products: false, abouts: false
        }
        , toggle: function (target) {
            $rootScope.leftMenu.opened['' + target] = !$rootScope.leftMenu.opened['' + target];
        }
        , open: function () {
            $rootScope.leftMenu.visible = true;
        }
        , close: function () {
            $rootScope.leftMenu.opened = {
                products: false, abouts: false
            };
            $rootScope.leftMenu.visible = false;
        }
        , goto: function (lang, route) {
            $rootScope.leftMenu.visible = false;
            $location.path("/" + lang + "/" + route);
        }
    }
}

]);
app.controller('homeController', ['$http', '$scope', '$rootScope', '$location', '$timeout', '$routeParams', '$translate', 'mainService', function ($http, $scope, $rootScope, $location, $timeout, $routeParams, $translate, mainService) {
    $rootScope.scrollToTop();
    $scope.videoLink = '';
    $scope.showVideo = false;
    mainService.init($routeParams);
    $scope.homeSlider = [
        {
            title: 'Ascend Honor 4C', img: '/img/slider/111.jpg', description: "", slug: "honor-5x"
        },
        {
            title: "Huawei P9", img: '/img/slider/222.jpg', description: "", slug: "huawei-p9"
        },
        {
            title: 'Huawei Y5II', img: '/img/slider/333.jpg', description: "", slug: "y6ii"
        }
    ];
    $scope.productsMain = [
        {
            title: "Huawei Y5 II", description: "", img: "/img/main-products/y5ii.png", slug: "y5ii"
        },
        {
            title: "Huawei P6S", description: "", img: "/img/main-products/p6s.png", slug: "p6s"
        },
        {
            title: "Huawei Y6 II", description: "", img: "/img/main-products/y6ii.png", slug: "y6ii"
        },
        {
            title: "Huawei P9", description: "", img: "/img/main-products/p9.png", slug: "huawei-p9"
        },
        {
            title: "Huawei P9 Lite", description: "", img: "/img/main-products/p9-lite.png", slug: "p9-lite"
        },
        {
            title: "Honor 5X", description: "", img: "/img/main-products/honor-5x.png", slug: "honor-5x"
        }
    ];
    $scope.mainVideos = [{
        title: 'Huawei P8',
        img: '/img/video/p9.png',
        text: 'Smartphone Huawei P8!',
        link: 'https://www.youtube.com/embed/'
    }];
    // $scope.videoLink = link;
    // $scope.openVideoMain = function (link) {
    //     $scope.showVideo = true;
    //     $scope.videoLink = link;
    // }
    // ;
    // $scope.closeVideo = function () {
    //     $scope.showVideo = false;
    //     $scope.videoLink = '';
    // };

    // var tag = document.createElement('script');
    // tag.src = "https://www.youtube.com/player_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    var winWidthMob = $(window).width() < 1024;
    window.onYouTubePlayerAPIReady = function () {

    };

    player = new YT.Player('ytplayer', {
        height: winWidthMob ? "100%" : 675,
        width: winWidthMob ? "100%" : 1200,
        playerVars: {
            autoplay: 0
        },
        videoId: 're8mFSniZ4k'
    });
    $(window).scroll(function () {
        $("iframe").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top - $("#ytplayer").height() - $("#block-footerLinks").height()) {
                player.playVideo();
            } else {
                player.pauseVideo();
            }
        });
    });

}]);
app.controller('smartphonesController', ['$http', '$scope', '$rootScope', '$location', '$timeout', '$routeParams', '$translate', 'mainService', function ($http, $scope, $rootScope, $location, $timeout, $routeParams, $translate, mainService) {
    $rootScope.scrollToTop();
    mainService.init($routeParams);
    $scope.menuActive = 'Smartphones';
    $http({url: "/api/getProducts", method: "POST", data: {type: 's'}}).success(function (products) {
        $scope.productsMain = products;
    });
}

]);
app.controller('tabletsController', ['$http', '$scope', '$rootScope', '$location', '$timeout', '$routeParams', '$translate', 'mainService', function ($http, $scope, $rootScope, $location, $timeout, $routeParams, $translate, mainService) {
    $rootScope.scrollToTop();
    mainService.init($routeParams);
    $scope.menuActive = 'Tablets';
    $http({url: "/api/getProducts", method: "POST", data: {type: 't'}}).success(function (products) {
        $scope.productsMain = products;
    });
}

]);
app.controller('productController', ['$http', '$scope', '$routeParams', '$rootScope', '$location', 'mainService', function ($http, $scope, $routeParams, $rootScope, $location, mainService) {
    $rootScope.scrollToTop();
    mainService.init($routeParams);
    $scope.isNarrow = $(window).width() > 770;
    $scope.productBottom = $scope.isNarrow ? 'overview' : 'none';
    $scope.currentBigImg = "";
    $scope.imgIndex = 0;
    $scope.toggleBottom = function (tab) {
        $scope.productBottom == tab ? $scope.productBottom = 'none' : $scope.productBottom = tab;
    };
    $http({
            url: "/api/getProduct",
            method: "POST",
            data: {lang: $rootScope.currentLang, slug: $routeParams.product_slug}
        }
    ).success(function (product) {
            if (!product.error) {
                $scope.product = product;

                $('head').append('<meta property="og:image" content="https://huaweiarmenia.herokuapp.com/img/' + product.slug + '/' + encodeURIComponent(product.img[0]) + '" />');

                if ($scope.product.img.length > 0) $scope.currentBigImg = $scope.product.img[$scope.imgIndex];
                $scope.toggleBigImg = function (index) {
                    $scope.imgIndex = index;
                    $scope.currentBigImg = $scope.product.img[index];
                    console.log($scope.imgIndex, $scope.currentBigImg);
                };
                $scope.prevImage = function () {
                    if ($scope.imgIndex > 1) $scope.imgIndex--;
                    else $scope.imgIndex = $scope.product.img.length - 1;
                    $scope.toggleBigImg($scope.imgIndex);
                };
                $scope.nextImage = function () {
                    if ($scope.imgIndex < $scope.product.img.length - 2) $scope.imgIndex++;
                    else $scope.imgIndex = 0;
                    $scope.toggleBigImg($scope.imgIndex);
                };
            }
            else {
                //$location.path("/"+$rootScope.currentLang+"/404")
            }
        }
    );

    var Share = {
            vkontakte: function (slug, ptitle, pimg, text) {
                url = 'http://vkontakte.ru/share.php?';
                url += 'url=' + encodeURIComponent(location.href);
                url += '&title=' + encodeURIComponent(ptitle);
                url += '&description=' + encodeURIComponent(text);
                url += '&image=' + 'https://huaweiarmenia.herokuapp.com/img/' + slug + '/' + encodeURIComponent(pimg);
                url += '&noparse=true';
                Share.popup(url);
            }
            , facebook: function (slug, ptitle, pimg, text) {
                url = 'http://www.facebook.com/sharer.php?s=100';
                url += '&title=' + encodeURIComponent(ptitle);
                url += '&u=' + encodeURIComponent(location.href);
                Share.popup(url);
            }
            , twitter: function (purl, ptitle) {
                url = 'http://twitter.com/share?';
                url += 'text=' + encodeURIComponent(ptitle.replace(/<\S[^><]*>/g, ''));
                url += '&url=' + encodeURIComponent(location.href);
                url += '&counturl=' + encodeURIComponent(purl);
                Share.popup(url);
            }
            , google: function (purl) {
                url = 'https://plus.google.com/share?';
                url += 'url=' + encodeURIComponent(location.href);
                Share.popup(url);
            }
            , popup: function (url) {
                window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
            }
        }
        ;
    $scope.shareIt = Share;
}

]);
app.controller('enterprisesController', ['$scope', '$routeParams', '$rootScope', 'mainService', function ($scope, $routeParams, $rootScope, mainService) {
    $rootScope.scrollToTop();
    mainService.init($routeParams);
    $scope.enterpriseLink = $rootScope.currentLang != 'hy' ? $rootScope.currentLang : 'ru';
}

]);
app.controller('blogController', ['$http', '$scope', '$routeParams', '$rootScope', 'mainService', function ($http, $scope, $routeParams, $rootScope, mainService) {
    $rootScope.scrollToTop();
    mainService.init($routeParams);
    $scope.enterpriseLink = $rootScope.currentLang != 'hy' ? $rootScope.currentLang : 'ru';
    $http({url: "/api/getArticles", method: "POST", data: {lang: $rootScope.currentLang}}
    ).success(function (articles) {
        $scope.news = articles;
    });

    var Share = {
            vkontakte: function (purl, ptitle, pimg, text) {
                url = 'http://vkontakte.ru/share.php?';
                url += 'url=' + 'http://' + location.hostname + $rootScope.preLink + '/news/article/' + encodeURIComponent(purl);
                url += '&title=' + encodeURIComponent(ptitle);
                url += '&description=' + encodeURIComponent(text);
                url += '&image=' + 'http://' + location.hostname + '/' + encodeURIComponent(pimg);
                url += '&noparse=true';
                Share.popup(url);
            }
            , facebook: function (purl, ptitle, pimg, text) {
                url = 'http://www.facebook.com/sharer.php?s=100';
                url += '&p[title]=' + encodeURIComponent(ptitle);
                url += '&p[summary]=' + encodeURIComponent(text);
                url += '&p[url]=' + 'http://' + location.hostname + $rootScope.preLink + '/news/article/' + encodeURIComponent(purl);
                url += '&p[images][0]=' + encodeURIComponent(pimg);
                Share.popup(url);
            }
            , twitter: function (purl, ptitle) {
                url = 'http://twitter.com/share?';
                url += 'text=' + encodeURIComponent(ptitle.replace(/<\S[^><]*>/g, ''));
                url += '&url=' + 'http://' + location.hostname + $rootScope.preLink + '/news/article/' + encodeURIComponent(purl);
                url += '&counturl=' + encodeURIComponent(purl);
                Share.popup(url);
            }
            , popup: function (url) {
                window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
            }
        }
        ;
    $scope.shareIt = Share;
}

]);
app.controller('articleController', ['$http', '$scope', '$routeParams', '$rootScope', 'mainService', function ($http, $scope, $routeParams, $rootScope, mainService) {
    $rootScope.scrollToTop();
    mainService.init($routeParams);
    $scope.enterpriseLink = $rootScope.currentLang != 'hy' ? $rootScope.currentLang : 'ru';
    $http({url: "/api/getArticle", method: "POST", data: {lang: $rootScope.currentLang, slug: $routeParams.slug}}
    ).success(function (product) {
            if (!product.error) {
                $scope.article = product;
                $scope.article.innerLink = '../../data/blog/' + $rootScope.currentLang + '-' + $routeParams.slug + '.html';
                console.log($scope.article.innerLink)
            }
            else {
                //$location.path("/"+$rootScope.currentLang+"/404")
            }
        }
    );
    var Share = {
            vkontakte: function (purl, ptitle, pimg, text) {
                url = 'http://vkontakte.ru/share.php?';
                url += 'url=' + 'http://' + location.host + $rootScope.preLink + '/news/article/' + encodeURIComponent(purl);
                url += '&title=' + encodeURIComponent(ptitle);
                url += '&description=' + encodeURIComponent(text);
                url += '&image=' + encodeURIComponent(pimg);
                url += '&noparse=true';
                Share.popup(url);
            }
            , facebook: function (slug, ptitle, pimg, text) {
                url = 'http://www.facebook.com/sharer.php?s=100';
                url += '&title=' + encodeURIComponent(ptitle);
                url += '&u=' + encodeURIComponent(location.href);
                Share.popup(url);
            }
            , twitter: function (purl, ptitle) {
                url = 'http://twitter.com/share?';
                url += 'text=' + encodeURIComponent(ptitle.replace(/<\S[^><]*>/g, ''));
                url += '&url=' + encodeURIComponent(location.href);
                url += '&counturl=' + encodeURIComponent(purl);
                Share.popup(url);
            }
            , google: function (purl) {
                url = 'https://plus.google.com/share?';
                url += 'url=' + encodeURIComponent(location.href);
                Share.popup(url);
            }
            , popup: function (url) {
                window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
            }
        }
        ;
    $scope.shareIt = Share;
}

]);
app.service('mainService', ['$rootScope', '$translate', '$location', '$route', function ($rootScope, $translate, $location, $route) {
    return {
        init: function (routeParams) {
            $rootScope.defaultLang = "hy";
            $rootScope.preLink = "/";
            if (!$rootScope.currentLang)$rootScope.currentLang = $rootScope.defaultLang;
            var tempLocale = routeParams.lang;
            console.log(tempLocale);
            if (routeParams.lang) {
                if (tempLocale != "en" && tempLocale != "ru" && tempLocale != "hy") {
                    $location.path("/" + $rootScope.defaultLang + $location.path());
                    $translate.use($rootScope.defaultLang);
                }
                else {
                    $rootScope.currentLang = routeParams.lang;
                    $translate.use($rootScope.currentLang);
                }
                $rootScope.preLink = '/' + $rootScope.currentLang;
                $rootScope.changeLang = function (lang) {
                    $rootScope.currentLang = lang;
                    $route.updateParams({
                            lang: $rootScope.currentLang
                        }
                    );
                }
                ;
            }
            else {
                $location.path("/" + $rootScope.defaultLang + $location.path());
                $translate.use($rootScope.defaultLang);
            }
        }
    }
}

]);
app.directive('homeslider', function ($timeout) {
        return {
            restrict: 'A', link: function (scope, el, attrs) {
                $timeout(function () {
                        if (scope.$last === true) {
                            var owl = $('.main-slider-list');
                            owl.owlCarousel({
                                    margin: 0,
                                    loop: true,
                                    dots: true,
                                    items: 1,
                                    navigation: true,
                                    navigationText: ["<div class=\"main-slider-arrow-left\"></div>", "<div class=\"main-slider-arrow-right\"></div>"],
                                    autoplay: true,
                                    autoplayTimeout: 5000,
                                    autoplayHoverPause: true,
                                    singleItem: true
                                }
                            );
                        }
                    }
                )
            }
        }
    }
);
app.directive('secondslider', function ($timeout) {
        return {
            restrict: 'A', link: function (scope, el, attrs) {
                $timeout(function () {
                        if (scope.$last === true) {
                            var owl = $('.products-slider-list');
                            owl.owlCarousel({
                                    margin: 0,
                                    loop: true,
                                    pagination: false,
                                    navigation: true,
                                    navigationText: ["<div class=\"main-slider-arrow-left\"></div>", "<div class=\"main-slider-arrow-right\"></div>"],
                                    autoplay: true,
                                    autoplayTimeout: 5000,
                                    autoplayHoverPause: true
                                }
                            );
                        }
                    }
                )
            }
        }
    }
);
app.directive('productsimgslider', function ($timeout) {
        return {
            restrict: 'A', link: function (scope, el, attrs) {
                $timeout(function () {
                        if (scope.$last === true) {
                            var owl = $('.more-views-list');

                            owl.owlCarousel({
                                margin: 0,
                                loop: true,
                                dots: false,
                                navigation: false
                            });

                            $(".prod-arrow-right").click(function () {
                                owl.trigger('owl.next');
                            });
                            $(".prod-arrow-left").click(function () {
                                owl.trigger('owl.prev');
                            });
                        }
                    }
                )
            }
        }
    }
);