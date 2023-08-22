!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).axios = t();
}(this, function() {
    "use strict";
    function e1(t) {
        return e1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, e1(t);
    }
    function t1(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function n1(e, t) {
        for(var n = 0; n < t.length; n++){
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
    }
    function r1(e, t, r) {
        return t && n1(e.prototype, t), r && n1(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
    }
    function o1(e2, t2) {
        return function(e) {
            if (Array.isArray(e)) return e;
        }(e2) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, o, i = [], a = !0, s = !1;
            try {
                for(n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
            } catch (e3) {
                s = !0, o = e3;
            } finally{
                try {
                    a || null == n.return || n.return();
                } finally{
                    if (s) throw o;
                }
            }
            return i;
        }(e2, t2) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return i1(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i1(e, t);
        }(e2, t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function i1(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
        return r;
    }
    function a1(e, t) {
        return function() {
            return e.apply(t, arguments);
        };
    }
    var s1, u1 = Object.prototype.toString, c1 = Object.getPrototypeOf, f1 = (s1 = Object.create(null), function(e) {
        var t = u1.call(e);
        return s1[t] || (s1[t] = t.slice(8, -1).toLowerCase());
    }), l1 = function(e) {
        return e = e.toLowerCase(), function(t) {
            return f1(t) === e;
        };
    }, d1 = function(t) {
        return function(n) {
            return e1(n) === t;
        };
    }, p1 = Array.isArray, h1 = d1("undefined");
    var m1 = l1("ArrayBuffer");
    var y1 = d1("string"), v = d1("function"), b = d1("number"), g = function(t) {
        return null !== t && "object" === e1(t);
    }, w = function(e) {
        if ("object" !== f1(e)) return !1;
        var t = c1(e);
        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e);
    }, E = l1("Date"), O = l1("File"), S = l1("Blob"), R = l1("FileList"), A = l1("URLSearchParams");
    function T(t, n) {
        var r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = i.allOwnKeys, s = void 0 !== a && a;
        if (null != t) {
            if ("object" !== e1(t) && (t = [
                t
            ]), p1(t)) for(r = 0, o = t.length; r < o; r++)n.call(null, t[r], r, t);
            else {
                var u, c = s ? Object.getOwnPropertyNames(t) : Object.keys(t), f = c.length;
                for(r = 0; r < f; r++)u = c[r], n.call(null, t[u], u, t);
            }
        }
    }
    function j(e, t) {
        t = t.toLowerCase();
        for(var n, r = Object.keys(e), o = r.length; o-- > 0;)if (t === (n = r[o]).toLowerCase()) return n;
        return null;
    }
    var N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global, C = function(e) {
        return !h1(e) && e !== N;
    };
    var x, P = (x = "undefined" != typeof Uint8Array && c1(Uint8Array), function(e) {
        return x && e instanceof x;
    }), k = l1("HTMLFormElement"), U = function(e4) {
        var t = Object.prototype.hasOwnProperty;
        return function(e, n) {
            return t.call(e, n);
        };
    }(), _ = l1("RegExp"), F = function(e, t) {
        var n2 = Object.getOwnPropertyDescriptors(e), r = {};
        T(n2, function(n, o) {
            !1 !== t(n, o, e) && (r[o] = n);
        }), Object.defineProperties(e, r);
    }, B = "abcdefghijklmnopqrstuvwxyz", L = "0123456789", D = {
        DIGIT: L,
        ALPHA: B,
        ALPHA_DIGIT: B + B.toUpperCase() + L
    };
    var I = l1("AsyncFunction"), q = {
        isArray: p1,
        isArrayBuffer: m1,
        isBuffer: function(e) {
            return null !== e && !h1(e) && null !== e.constructor && !h1(e.constructor) && v(e.constructor.isBuffer) && e.constructor.isBuffer(e);
        },
        isFormData: function(e) {
            var t;
            return e && ("function" == typeof FormData && e instanceof FormData || v(e.append) && ("formdata" === (t = f1(e)) || "object" === t && v(e.toString) && "[object FormData]" === e.toString()));
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && m1(e.buffer);
        },
        isString: y1,
        isNumber: b,
        isBoolean: function(e) {
            return !0 === e || !1 === e;
        },
        isObject: g,
        isPlainObject: w,
        isUndefined: h1,
        isDate: E,
        isFile: O,
        isBlob: S,
        isRegExp: _,
        isFunction: v,
        isStream: function(e) {
            return g(e) && v(e.pipe);
        },
        isURLSearchParams: A,
        isTypedArray: P,
        isFileList: R,
        forEach: T,
        merge: function e() {
            for(var t3 = C(this) && this || {}, n = t3.caseless, r = {}, o2 = function(t, o) {
                var i = n && j(r, o) || o;
                w(r[i]) && w(t) ? r[i] = e(r[i], t) : w(t) ? r[i] = e({}, t) : p1(t) ? r[i] = t.slice() : r[i] = t;
            }, i2 = 0, a = arguments.length; i2 < a; i2++)arguments[i2] && T(arguments[i2], o2);
            return r;
        },
        extend: function(e, t4, n) {
            var r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = r2.allOwnKeys;
            return T(t4, function(t, r) {
                n && v(t) ? e[r] = a1(t, n) : e[r] = t;
            }, {
                allOwnKeys: o
            }), e;
        },
        trim: function(e) {
            return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        },
        stripBOM: function(e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
        inherits: function(e, t, n, r) {
            e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), n && Object.assign(e.prototype, n);
        },
        toFlatObject: function(e, t, n, r) {
            var o, i, a, s = {};
            if (t = t || {}, null == e) return t;
            do {
                for(i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0;)a = o[i], r && !r(a, e, t) || s[a] || (t[a] = e[a], s[a] = !0);
                e = !1 !== n && c1(e);
            }while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
        },
        kindOf: f1,
        kindOfTest: l1,
        endsWith: function(e, t, n) {
            e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
            var r = e.indexOf(t, n);
            return -1 !== r && r === n;
        },
        toArray: function(e) {
            if (!e) return null;
            if (p1(e)) return e;
            var t = e.length;
            if (!b(t)) return null;
            for(var n = new Array(t); t-- > 0;)n[t] = e[t];
            return n;
        },
        forEachEntry: function(e, t) {
            for(var n, r = (e && e[Symbol.iterator]).call(e); (n = r.next()) && !n.done;){
                var o = n.value;
                t.call(e, o[0], o[1]);
            }
        },
        matchAll: function(e, t) {
            for(var n, r = []; null !== (n = e.exec(t));)r.push(n);
            return r;
        },
        isHTMLForm: k,
        hasOwnProperty: U,
        hasOwnProp: U,
        reduceDescriptors: F,
        freezeMethods: function(e) {
            F(e, function(t, n) {
                if (v(e) && -1 !== [
                    "arguments",
                    "caller",
                    "callee"
                ].indexOf(n)) return !1;
                var r = e[n];
                v(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = function() {
                    throw Error("Can not rewrite read-only method '" + n + "'");
                }));
            });
        },
        toObjectSet: function(e5, t) {
            var n = {}, r = function(e6) {
                e6.forEach(function(e) {
                    n[e] = !0;
                });
            };
            return p1(e5) ? r(e5) : r(String(e5).split(t)), n;
        },
        toCamelCase: function(e) {
            return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
                return t.toUpperCase() + n;
            });
        },
        noop: function() {},
        toFiniteNumber: function(e, t) {
            return e = +e, Number.isFinite(e) ? e : t;
        },
        findKey: j,
        global: N,
        isContextDefined: C,
        ALPHABET: D,
        generateString: function() {
            for(var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D.ALPHA_DIGIT, n = "", r = t.length; e--;)n += t[Math.random() * r | 0];
            return n;
        },
        isSpecCompliantForm: function(e) {
            return !!(e && v(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
        },
        toJSONObject: function(e7) {
            var t5 = new Array(10);
            return function e(n3, r) {
                if (g(n3)) {
                    if (t5.indexOf(n3) >= 0) return;
                    if (!("toJSON" in n3)) {
                        t5[r] = n3;
                        var o = p1(n3) ? [] : {};
                        return T(n3, function(t, n) {
                            var i = e(t, r + 1);
                            !h1(i) && (o[n] = i);
                        }), t5[r] = void 0, o;
                    }
                }
                return n3;
            }(e7, 0);
        },
        isAsyncFn: I,
        isThenable: function(e) {
            return e && (g(e) || v(e)) && v(e.then) && v(e.catch);
        }
    };
    function M(e, t, n, r, o) {
        Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
    }
    q.inherits(M, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: q.toJSONObject(this.config),
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            };
        }
    });
    var z = M.prototype, H = {};
    [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
    ].forEach(function(e) {
        H[e] = {
            value: e
        };
    }), Object.defineProperties(M, H), Object.defineProperty(z, "isAxiosError", {
        value: !0
    }), M.from = function(e8, t, n, r, o, i) {
        var a = Object.create(z);
        return q.toFlatObject(e8, a, function(e) {
            return e !== Error.prototype;
        }, function(e) {
            return "isAxiosError" !== e;
        }), M.call(a, e8.message, t, n, r, o), a.cause = e8, a.name = e8.name, i && Object.assign(a, i), a;
    };
    function J(e) {
        return q.isPlainObject(e) || q.isArray(e);
    }
    function W(e) {
        return q.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function K(e9, t6, n) {
        return e9 ? e9.concat(t6).map(function(e, t) {
            return e = W(e), !n && t ? "[" + e + "]" : e;
        }).join(n ? "." : "") : t6;
    }
    var V = q.toFlatObject(q, {}, null, function(e) {
        return /^is[A-Z]/.test(e);
    });
    function G(t7, n, r3) {
        if (!q.isObject(t7)) throw new TypeError("target must be an object");
        n = n || new FormData;
        var o3 = (r3 = q.toFlatObject(r3, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, function(e, t) {
            return !q.isUndefined(t[e]);
        })).metaTokens, i3 = r3.visitor || f, a = r3.dots, s = r3.indexes, u2 = (r3.Blob || "undefined" != typeof Blob && Blob) && q.isSpecCompliantForm(n);
        if (!q.isFunction(i3)) throw new TypeError("visitor must be a function");
        function c(e) {
            if (null === e) return "";
            if (q.isDate(e)) return e.toISOString();
            if (!u2 && q.isBlob(e)) throw new M("Blob is not supported. Use a Buffer instead.");
            return q.isArrayBuffer(e) || q.isTypedArray(e) ? u2 && "function" == typeof Blob ? new Blob([
                e
            ]) : Buffer.from(e) : e;
        }
        function f(t8, r, i) {
            var u = t8;
            if (t8 && !i && "object" === e1(t8)) {
                if (q.endsWith(r, "{}")) r = o3 ? r : r.slice(0, -2), t8 = JSON.stringify(t8);
                else if (q.isArray(t8) && function(e) {
                    return q.isArray(e) && !e.some(J);
                }(t8) || (q.isFileList(t8) || q.endsWith(r, "[]")) && (u = q.toArray(t8))) return r = W(r), u.forEach(function(e, t) {
                    !q.isUndefined(e) && null !== e && n.append(!0 === s ? K([
                        r
                    ], t, a) : null === s ? r : r + "[]", c(e));
                }), !1;
            }
            return !!J(t8) || (n.append(K(i, r, a), c(t8)), !1);
        }
        var l = [], d = Object.assign(V, {
            defaultVisitor: f,
            convertValue: c,
            isVisitable: J
        });
        if (!q.isObject(t7)) throw new TypeError("data must be an object");
        return function e(t9, r) {
            if (!q.isUndefined(t9)) {
                if (-1 !== l.indexOf(t9)) throw Error("Circular reference detected in " + r.join("."));
                l.push(t9), q.forEach(t9, function(t, o) {
                    !0 === (!(q.isUndefined(t) || null === t) && i3.call(n, t, q.isString(o) ? o.trim() : o, r, d)) && e(t, r ? r.concat(o) : [
                        o
                    ]);
                }), l.pop();
            }
        }(t7), n;
    }
    function $(e10) {
        var t = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(e10).replace(/[!'()~]|%20|%00/g, function(e) {
            return t[e];
        });
    }
    function X(e, t) {
        this._pairs = [], e && G(e, this, t);
    }
    var Q = X.prototype;
    function Z(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    function Y(e, t, n) {
        if (!t) return e;
        var r, o = n && n.encode || Z, i = n && n.serialize;
        if (r = i ? i(t, n) : q.isURLSearchParams(t) ? t.toString() : new X(t, n).toString(o)) {
            var a = e.indexOf("#");
            -1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + r;
        }
        return e;
    }
    Q.append = function(e, t) {
        this._pairs.push([
            e,
            t
        ]);
    }, Q.toString = function(e11) {
        var t10 = e11 ? function(t) {
            return e11.call(this, t, $);
        } : $;
        return this._pairs.map(function(e) {
            return t10(e[0]) + "=" + t10(e[1]);
        }, "").join("&");
    };
    var ee, te = function() {
        function e12() {
            t1(this, e12), this.handlers = [];
        }
        return r1(e12, [
            {
                key: "use",
                value: function(e, t, n) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1;
                }
            },
            {
                key: "eject",
                value: function(e) {
                    this.handlers[e] && (this.handlers[e] = null);
                }
            },
            {
                key: "clear",
                value: function() {
                    this.handlers && (this.handlers = []);
                }
            },
            {
                key: "forEach",
                value: function(e) {
                    q.forEach(this.handlers, function(t) {
                        null !== t && e(t);
                    });
                }
            }
        ]), e12;
    }(), ne = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    }, re = {
        isBrowser: !0,
        classes: {
            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : X,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null
        },
        isStandardBrowserEnv: ("undefined" == typeof navigator || "ReactNative" !== (ee = navigator.product) && "NativeScript" !== ee && "NS" !== ee) && "undefined" != typeof window && "undefined" != typeof document,
        isStandardBrowserWebWorkerEnv: "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        protocols: [
            "http",
            "https",
            "file",
            "blob",
            "url",
            "data"
        ]
    };
    function oe(e13) {
        function t11(e14, n5, r4, o4) {
            var i4 = e14[o4++], a = Number.isFinite(+i4), s = o4 >= e14.length;
            return i4 = !i4 && q.isArray(r4) ? r4.length : i4, s ? (q.hasOwnProp(r4, i4) ? r4[i4] = [
                r4[i4],
                n5
            ] : r4[i4] = n5, !a) : (r4[i4] && q.isObject(r4[i4]) || (r4[i4] = []), t11(e14, n5, r4[i4], o4) && q.isArray(r4[i4]) && (r4[i4] = function(e) {
                var t, n, r = {}, o = Object.keys(e), i = o.length;
                for(t = 0; t < i; t++)r[n = o[t]] = e[n];
                return r;
            }(r4[i4])), !a);
        }
        if (q.isFormData(e13) && q.isFunction(e13.entries)) {
            var n4 = {};
            return q.forEachEntry(e13, function(e15, r) {
                t11(function(e16) {
                    return q.matchAll(/\w+|\[(\w*)]/g, e16).map(function(e) {
                        return "[]" === e[0] ? "" : e[1] || e[0];
                    });
                }(e15), r, n4, 0);
            }), n4;
        }
        return null;
    }
    var ie = {
        "Content-Type": void 0
    };
    var ae = {
        transitional: ne,
        adapter: [
            "xhr",
            "http"
        ],
        transformRequest: [
            function(e17, t12) {
                var n6, r5 = t12.getContentType() || "", o = r5.indexOf("application/json") > -1, i = q.isObject(e17);
                if (i && q.isHTMLForm(e17) && (e17 = new FormData(e17)), q.isFormData(e17)) return o && o ? JSON.stringify(oe(e17)) : e17;
                if (q.isArrayBuffer(e17) || q.isBuffer(e17) || q.isStream(e17) || q.isFile(e17) || q.isBlob(e17)) return e17;
                if (q.isArrayBufferView(e17)) return e17.buffer;
                if (q.isURLSearchParams(e17)) return t12.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e17.toString();
                if (i) {
                    if (r5.indexOf("application/x-www-form-urlencoded") > -1) return (function(e18, t13) {
                        return G(e18, new re.classes.URLSearchParams, Object.assign({
                            visitor: function(e, t, n, r) {
                                return re.isNode && q.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
                            }
                        }, t13));
                    })(e17, this.formSerializer).toString();
                    if ((n6 = q.isFileList(e17)) || r5.indexOf("multipart/form-data") > -1) {
                        var a = this.env && this.env.FormData;
                        return G(n6 ? {
                            "files[]": e17
                        } : e17, a && new a, this.formSerializer);
                    }
                }
                return i || o ? (t12.setContentType("application/json", !1), function(e, t, n) {
                    if (q.isString(e)) try {
                        return (t || JSON.parse)(e), q.trim(e);
                    } catch (e19) {
                        if ("SyntaxError" !== e19.name) throw e19;
                    }
                    return (n || JSON.stringify)(e);
                }(e17)) : e17;
            }
        ],
        transformResponse: [
            function(e) {
                var t = this.transitional || ae.transitional, n = t && t.forcedJSONParsing, r = "json" === this.responseType;
                if (e && q.isString(e) && (n && !this.responseType || r)) {
                    var o = !(t && t.silentJSONParsing) && r;
                    try {
                        return JSON.parse(e);
                    } catch (e) {
                        if (o) {
                            if ("SyntaxError" === e.name) throw M.from(e, M.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e;
                        }
                    }
                }
                return e;
            }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: re.classes.FormData,
            Blob: re.classes.Blob
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300;
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    };
    q.forEach([
        "delete",
        "get",
        "head"
    ], function(e) {
        ae.headers[e] = {};
    }), q.forEach([
        "post",
        "put",
        "patch"
    ], function(e) {
        ae.headers[e] = q.merge(ie);
    });
    var se = ae, ue = q.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
    ]), ce = Symbol("internals");
    function fe(e) {
        return e && String(e).trim().toLowerCase();
    }
    function le(e) {
        return !1 === e || null == e ? e : q.isArray(e) ? e.map(le) : String(e);
    }
    function de(e, t, n, r, o) {
        return q.isFunction(r) ? r.call(this, t, n) : (o && (t = n), q.isString(t) ? q.isString(r) ? -1 !== t.indexOf(r) : q.isRegExp(r) ? r.test(t) : void 0 : void 0);
    }
    var pe = function(e20, n7) {
        function i5(e) {
            t1(this, i5), e && this.set(e);
        }
        return r1(i5, [
            {
                key: "set",
                value: function(e21, t14, n8) {
                    var r = this;
                    function o5(e, t, n) {
                        var o = fe(t);
                        if (!o) throw new Error("header name must be a non-empty string");
                        var i = q.findKey(r, o);
                        (!i || void 0 === r[i] || !0 === n || void 0 === n && !1 !== r[i]) && (r[i || t] = le(e));
                    }
                    var i6, a, s, u, c, f = function(e22, t) {
                        return q.forEach(e22, function(e, n) {
                            return o5(e, n, t);
                        });
                    };
                    return q.isPlainObject(e21) || e21 instanceof this.constructor ? f(e21, t14) : q.isString(e21) && (e21 = e21.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e21.trim()) ? f((c = {}, (i6 = e21) && i6.split("\n").forEach(function(e) {
                        u = e.indexOf(":"), a = e.substring(0, u).trim().toLowerCase(), s = e.substring(u + 1).trim(), !a || c[a] && ue[a] || ("set-cookie" === a ? c[a] ? c[a].push(s) : c[a] = [
                            s
                        ] : c[a] = c[a] ? c[a] + ", " + s : s);
                    }), c), t14) : null != e21 && o5(t14, e21, n8), this;
                }
            },
            {
                key: "get",
                value: function(e23, t15) {
                    if (e23 = fe(e23)) {
                        var n9 = q.findKey(this, e23);
                        if (n9) {
                            var r6 = this[n9];
                            if (!t15) return r6;
                            if (!0 === t15) return function(e) {
                                for(var t, n = Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; t = r.exec(e);)n[t[1]] = t[2];
                                return n;
                            }(r6);
                            if (q.isFunction(t15)) return t15.call(this, r6, n9);
                            if (q.isRegExp(t15)) return t15.exec(r6);
                            throw new TypeError("parser must be boolean|regexp|function");
                        }
                    }
                }
            },
            {
                key: "has",
                value: function(e, t) {
                    if (e = fe(e)) {
                        var n = q.findKey(this, e);
                        return !(!n || void 0 === this[n] || t && !de(0, this[n], n, t));
                    }
                    return !1;
                }
            },
            {
                key: "delete",
                value: function(e24, t) {
                    var n = this, r = !1;
                    function o6(e) {
                        if (e = fe(e)) {
                            var o = q.findKey(n, e);
                            !o || t && !de(0, n[o], o, t) || (delete n[o], r = !0);
                        }
                    }
                    return q.isArray(e24) ? e24.forEach(o6) : o6(e24), r;
                }
            },
            {
                key: "clear",
                value: function(e) {
                    for(var t = Object.keys(this), n = t.length, r = !1; n--;){
                        var o = t[n];
                        e && !de(0, this[o], o, e, !0) || (delete this[o], r = !0);
                    }
                    return r;
                }
            },
            {
                key: "normalize",
                value: function(e25) {
                    var t16 = this, n11 = {};
                    return q.forEach(this, function(r, o) {
                        var i = q.findKey(n11, o);
                        if (i) return t16[i] = le(r), void delete t16[o];
                        var a = e25 ? function(e) {
                            return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function(e, t, n) {
                                return t.toUpperCase() + n;
                            });
                        }(o) : String(o).trim();
                        a !== o && delete t16[o], t16[a] = le(r), n11[a] = !0;
                    }), this;
                }
            },
            {
                key: "concat",
                value: function() {
                    for(var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = this.constructor).concat.apply(e, [
                        this
                    ].concat(n));
                }
            },
            {
                key: "toJSON",
                value: function(e) {
                    var t = Object.create(null);
                    return q.forEach(this, function(n, r) {
                        null != n && !1 !== n && (t[r] = e && q.isArray(n) ? n.join(", ") : n);
                    }), t;
                }
            },
            {
                key: Symbol.iterator,
                value: function() {
                    return Object.entries(this.toJSON())[Symbol.iterator]();
                }
            },
            {
                key: "toString",
                value: function() {
                    return Object.entries(this.toJSON()).map(function(e) {
                        var t = o1(e, 2);
                        return t[0] + ": " + t[1];
                    }).join("\n");
                }
            },
            {
                key: Symbol.toStringTag,
                get: function() {
                    return "AxiosHeaders";
                }
            }
        ], [
            {
                key: "from",
                value: function(e) {
                    return e instanceof this ? e : new this(e);
                }
            },
            {
                key: "concat",
                value: function(e26) {
                    for(var t = new this(e26), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)r[o - 1] = arguments[o];
                    return r.forEach(function(e) {
                        return t.set(e);
                    }), t;
                }
            },
            {
                key: "accessor",
                value: function(e27) {
                    var t17 = (this[ce] = this[ce] = {
                        accessors: {}
                    }).accessors, n12 = this.prototype;
                    function r9(e28) {
                        var r10 = fe(e28);
                        t17[r10] || (!function(e29, t) {
                            var n13 = q.toCamelCase(" " + t);
                            [
                                "get",
                                "set",
                                "has"
                            ].forEach(function(r) {
                                Object.defineProperty(e29, r + n13, {
                                    value: function(e, n, o) {
                                        return this[r].call(this, t, e, n, o);
                                    },
                                    configurable: !0
                                });
                            });
                        }(n12, e28), t17[r10] = !0);
                    }
                    return q.isArray(e27) ? e27.forEach(r9) : r9(e27), this;
                }
            }
        ]), i5;
    }();
    pe.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization"
    ]), q.freezeMethods(pe.prototype), q.freezeMethods(pe);
    var he = pe;
    function me(e30, t) {
        var n = this || se, r = t || n, o = he.from(r.headers), i = r.data;
        return q.forEach(e30, function(e) {
            i = e.call(n, i, o.normalize(), t ? t.status : void 0);
        }), o.normalize(), i;
    }
    function ye(e) {
        return !(!e || !e.__CANCEL__);
    }
    function ve(e, t, n) {
        M.call(this, null == e ? "canceled" : e, M.ERR_CANCELED, t, n), this.name = "CanceledError";
    }
    q.inherits(ve, M, {
        __CANCEL__: !0
    });
    var be = re.isStandardBrowserEnv ? {
        write: function(e, t, n, r, o, i) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)), q.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), q.isString(r) && a.push("path=" + r), q.isString(o) && a.push("domain=" + o), !0 === i && a.push("secure"), document.cookie = a.join("; ");
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5);
        }
    } : {
        write: function() {},
        read: function() {
            return null;
        },
        remove: function() {}
    };
    function ge(e31, t18) {
        return e31 && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t18) ? function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        }(e31, t18) : t18;
    }
    var we = re.isStandardBrowserEnv ? function() {
        var e32, t19 = /(msie|trident)/i.test(navigator.userAgent), n14 = document.createElement("a");
        function r11(e) {
            var r = e;
            return t19 && (n14.setAttribute("href", r), r = n14.href), n14.setAttribute("href", r), {
                href: n14.href,
                protocol: n14.protocol ? n14.protocol.replace(/:$/, "") : "",
                host: n14.host,
                search: n14.search ? n14.search.replace(/^\?/, "") : "",
                hash: n14.hash ? n14.hash.replace(/^#/, "") : "",
                hostname: n14.hostname,
                port: n14.port,
                pathname: "/" === n14.pathname.charAt(0) ? n14.pathname : "/" + n14.pathname
            };
        }
        return e32 = r11(window.location.href), function(t) {
            var n = q.isString(t) ? r11(t) : t;
            return n.protocol === e32.protocol && n.host === e32.host;
        };
    }() : function() {
        return !0;
    };
    function Ee(e33, t20) {
        var n15 = 0, r12 = function(e, t) {
            e = e || 10;
            var n, r = new Array(e), o = new Array(e), i = 0, a = 0;
            return t = void 0 !== t ? t : 1e3, function(s) {
                var u = Date.now(), c = o[a];
                n || (n = u), r[i] = s, o[i] = u;
                for(var f = a, l = 0; f !== i;)l += r[f++], f %= e;
                if ((i = (i + 1) % e) === a && (a = (a + 1) % e), !(u - n < t)) {
                    var d = c && u - c;
                    return d ? Math.round(1e3 * l / d) : void 0;
                }
            };
        }(50, 250);
        return function(o) {
            var i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - n15, u = r12(s);
            n15 = i;
            var c = {
                loaded: i,
                total: a,
                progress: a ? i / a : void 0,
                bytes: s,
                rate: u || void 0,
                estimated: u && a && i <= a ? (a - i) / u : void 0,
                event: o
            };
            c[t20 ? "download" : "upload"] = !0, e33(c);
        };
    }
    var Oe = {
        http: null,
        xhr: "undefined" != typeof XMLHttpRequest && function(e34) {
            return new Promise(function(t21, n16) {
                var r13, o = e34.data, i = he.from(e34.headers).normalize(), a = e34.responseType;
                function s() {
                    e34.cancelToken && e34.cancelToken.unsubscribe(r13), e34.signal && e34.signal.removeEventListener("abort", r13);
                }
                q.isFormData(o) && (re.isStandardBrowserEnv || re.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
                var u = new XMLHttpRequest;
                if (e34.auth) {
                    var c = e34.auth.username || "", f = e34.auth.password ? unescape(encodeURIComponent(e34.auth.password)) : "";
                    i.set("Authorization", "Basic " + btoa(c + ":" + f));
                }
                var l = ge(e34.baseURL, e34.url);
                function d() {
                    if (u) {
                        var r14 = he.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
                        !function(e, t, n) {
                            var r = n.config.validateStatus;
                            n.status && r && !r(n.status) ? t(new M("Request failed with status code " + n.status, [
                                M.ERR_BAD_REQUEST,
                                M.ERR_BAD_RESPONSE
                            ][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n);
                        }(function(e) {
                            t21(e), s();
                        }, function(e) {
                            n16(e), s();
                        }, {
                            data: a && "text" !== a && "json" !== a ? u.response : u.responseText,
                            status: u.status,
                            statusText: u.statusText,
                            headers: r14,
                            config: e34,
                            request: u
                        }), u = null;
                    }
                }
                if (u.open(e34.method.toUpperCase(), Y(l, e34.params, e34.paramsSerializer), !0), u.timeout = e34.timeout, "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
                    u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(d);
                }, u.onabort = function() {
                    u && (n16(new M("Request aborted", M.ECONNABORTED, e34, u)), u = null);
                }, u.onerror = function() {
                    n16(new M("Network Error", M.ERR_NETWORK, e34, u)), u = null;
                }, u.ontimeout = function() {
                    var t = e34.timeout ? "timeout of " + e34.timeout + "ms exceeded" : "timeout exceeded", r = e34.transitional || ne;
                    e34.timeoutErrorMessage && (t = e34.timeoutErrorMessage), n16(new M(t, r.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, e34, u)), u = null;
                }, re.isStandardBrowserEnv) {
                    var p = (e34.withCredentials || we(l)) && e34.xsrfCookieName && be.read(e34.xsrfCookieName);
                    p && i.set(e34.xsrfHeaderName, p);
                }
                void 0 === o && i.setContentType(null), "setRequestHeader" in u && q.forEach(i.toJSON(), function(e, t) {
                    u.setRequestHeader(t, e);
                }), q.isUndefined(e34.withCredentials) || (u.withCredentials = !!e34.withCredentials), a && "json" !== a && (u.responseType = e34.responseType), "function" == typeof e34.onDownloadProgress && u.addEventListener("progress", Ee(e34.onDownloadProgress, !0)), "function" == typeof e34.onUploadProgress && u.upload && u.upload.addEventListener("progress", Ee(e34.onUploadProgress)), (e34.cancelToken || e34.signal) && (r13 = function(t) {
                    u && (n16(!t || t.type ? new ve(null, e34, u) : t), u.abort(), u = null);
                }, e34.cancelToken && e34.cancelToken.subscribe(r13), e34.signal && (e34.signal.aborted ? r13() : e34.signal.addEventListener("abort", r13)));
                var h, m = (h = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l)) && h[1] || "";
                m && -1 === re.protocols.indexOf(m) ? n16(new M("Unsupported protocol " + m + ":", M.ERR_BAD_REQUEST, e34)) : u.send(o || null);
            });
        }
    };
    q.forEach(Oe, function(e, t) {
        if (e) {
            try {
                Object.defineProperty(e, "name", {
                    value: t
                });
            } catch (e35) {}
            Object.defineProperty(e, "adapterName", {
                value: t
            });
        }
    });
    var Se = function(e) {
        for(var t, n, r = (e = q.isArray(e) ? e : [
            e
        ]).length, o = 0; o < r && (t = e[o], !(n = q.isString(t) ? Oe[t.toLowerCase()] : t)); o++);
        if (!n) {
            if (!1 === n) throw new M("Adapter ".concat(t, " is not supported by the environment"), "ERR_NOT_SUPPORT");
            throw new Error(q.hasOwnProp(Oe, t) ? "Adapter '".concat(t, "' is not available in the build") : "Unknown adapter '".concat(t, "'"));
        }
        if (!q.isFunction(n)) throw new TypeError("adapter is not a function");
        return n;
    };
    function Re(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ve(null, e);
    }
    function Ae(e) {
        return Re(e), e.headers = he.from(e.headers), e.data = me.call(e, e.transformRequest), -1 !== [
            "post",
            "put",
            "patch"
        ].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), Se(e.adapter || se.adapter)(e).then(function(t) {
            return Re(e), t.data = me.call(e, e.transformResponse, t), t.headers = he.from(t.headers), t;
        }, function(t) {
            return ye(t) || (Re(e), t && t.response && (t.response.data = me.call(e, e.transformResponse, t.response), t.response.headers = he.from(t.response.headers))), Promise.reject(t);
        });
    }
    var Te = function(e) {
        return e instanceof he ? e.toJSON() : e;
    };
    function je(e36, t22) {
        t22 = t22 || {};
        var n17 = {};
        function r16(e, t, n) {
            return q.isPlainObject(e) && q.isPlainObject(t) ? q.merge.call({
                caseless: n
            }, e, t) : q.isPlainObject(t) ? q.merge({}, t) : q.isArray(t) ? t.slice() : t;
        }
        function o7(e, t, n) {
            return q.isUndefined(t) ? q.isUndefined(e) ? void 0 : r16(void 0, e, n) : r16(e, t, n);
        }
        function i7(e, t) {
            if (!q.isUndefined(t)) return r16(void 0, t);
        }
        function a2(e, t) {
            return q.isUndefined(t) ? q.isUndefined(e) ? void 0 : r16(void 0, e) : r16(void 0, t);
        }
        function s(n, o, i) {
            return i in t22 ? r16(n, o) : i in e36 ? r16(void 0, n) : void 0;
        }
        var u = {
            url: i7,
            method: i7,
            data: i7,
            baseURL: a2,
            transformRequest: a2,
            transformResponse: a2,
            paramsSerializer: a2,
            timeout: a2,
            timeoutMessage: a2,
            withCredentials: a2,
            adapter: a2,
            responseType: a2,
            xsrfCookieName: a2,
            xsrfHeaderName: a2,
            onUploadProgress: a2,
            onDownloadProgress: a2,
            decompress: a2,
            maxContentLength: a2,
            maxBodyLength: a2,
            beforeRedirect: a2,
            transport: a2,
            httpAgent: a2,
            httpsAgent: a2,
            cancelToken: a2,
            socketPath: a2,
            responseEncoding: a2,
            validateStatus: s,
            headers: function(e, t) {
                return o7(Te(e), Te(t), !0);
            }
        };
        return q.forEach(Object.keys(Object.assign({}, e36, t22)), function(r) {
            var i = u[r] || o7, a = i(e36[r], t22[r], r);
            q.isUndefined(a) && i !== s || (n17[r] = a);
        }), n17;
    }
    var Ne = "1.4.0", Ce = {};
    [
        "object",
        "boolean",
        "number",
        "function",
        "string",
        "symbol"
    ].forEach(function(t, n) {
        Ce[t] = function(r) {
            return e1(r) === t || "a" + (n < 1 ? "n " : " ") + t;
        };
    });
    var xe = {};
    Ce.transitional = function(e37, t23, n18) {
        function r(e, t) {
            return "[Axios v1.4.0] Transitional option '" + e + "'" + t + (n18 ? ". " + n18 : "");
        }
        return function(n, o, i) {
            if (!1 === e37) throw new M(r(o, " has been removed" + (t23 ? " in " + t23 : "")), M.ERR_DEPRECATED);
            return t23 && !xe[o] && (xe[o] = !0, console.warn(r(o, " has been deprecated since v" + t23 + " and will be removed in the near future"))), !e37 || e37(n, o, i);
        };
    };
    var Pe = {
        assertOptions: function(t, n, r) {
            if ("object" !== e1(t)) throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
            for(var o = Object.keys(t), i = o.length; i-- > 0;){
                var a = o[i], s = n[a];
                if (s) {
                    var u = t[a], c = void 0 === u || s(u, a, t);
                    if (!0 !== c) throw new M("option " + a + " must be " + c, M.ERR_BAD_OPTION_VALUE);
                } else if (!0 !== r) throw new M("Unknown option " + a, M.ERR_BAD_OPTION);
            }
        },
        validators: Ce
    }, ke = Pe.validators, Ue = function() {
        function e38(n) {
            t1(this, e38), this.defaults = n, this.interceptors = {
                request: new te,
                response: new te
            };
        }
        return r1(e38, [
            {
                key: "request",
                value: function(e39, t) {
                    "string" == typeof e39 ? (t = t || {}).url = e39 : t = e39 || {};
                    var n, r = t = je(this.defaults, t), o = r.transitional, i = r.paramsSerializer, a = r.headers;
                    void 0 !== o && Pe.assertOptions(o, {
                        silentJSONParsing: ke.transitional(ke.boolean),
                        forcedJSONParsing: ke.transitional(ke.boolean),
                        clarifyTimeoutError: ke.transitional(ke.boolean)
                    }, !1), null != i && (q.isFunction(i) ? t.paramsSerializer = {
                        serialize: i
                    } : Pe.assertOptions(i, {
                        encode: ke.function,
                        serialize: ke.function
                    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase(), (n = a && q.merge(a.common, a[t.method])) && q.forEach([
                        "delete",
                        "get",
                        "head",
                        "post",
                        "put",
                        "patch",
                        "common"
                    ], function(e) {
                        delete a[e];
                    }), t.headers = he.concat(n, a);
                    var s = [], u = !0;
                    this.interceptors.request.forEach(function(e) {
                        "function" == typeof e.runWhen && !1 === e.runWhen(t) || (u = u && e.synchronous, s.unshift(e.fulfilled, e.rejected));
                    });
                    var c, f = [];
                    this.interceptors.response.forEach(function(e) {
                        f.push(e.fulfilled, e.rejected);
                    });
                    var l, d = 0;
                    if (!u) {
                        var p = [
                            Ae.bind(this),
                            void 0
                        ];
                        for(p.unshift.apply(p, s), p.push.apply(p, f), l = p.length, c = Promise.resolve(t); d < l;)c = c.then(p[d++], p[d++]);
                        return c;
                    }
                    l = s.length;
                    var h = t;
                    for(d = 0; d < l;){
                        var m = s[d++], y = s[d++];
                        try {
                            h = m(h);
                        } catch (e) {
                            y.call(this, e);
                            break;
                        }
                    }
                    try {
                        c = Ae.call(this, h);
                    } catch (e) {
                        return Promise.reject(e);
                    }
                    for(d = 0, l = f.length; d < l;)c = c.then(f[d++], f[d++]);
                    return c;
                }
            },
            {
                key: "getUri",
                value: function(e) {
                    return Y(ge((e = je(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
                }
            }
        ]), e38;
    }();
    q.forEach([
        "delete",
        "get",
        "head",
        "options"
    ], function(e) {
        Ue.prototype[e] = function(t, n) {
            return this.request(je(n || {}, {
                method: e,
                url: t,
                data: (n || {}).data
            }));
        };
    }), q.forEach([
        "post",
        "put",
        "patch"
    ], function(e) {
        function t24(t) {
            return function(n, r, o) {
                return this.request(je(o || {}, {
                    method: e,
                    headers: t ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: n,
                    data: r
                }));
            };
        }
        Ue.prototype[e] = t24(), Ue.prototype[e + "Form"] = t24(!0);
    });
    var _e = Ue, Fe = function() {
        function e40(n19) {
            if (t1(this, e40), "function" != typeof n19) throw new TypeError("executor must be a function.");
            var r;
            this.promise = new Promise(function(e) {
                r = e;
            });
            var o = this;
            this.promise.then(function(e) {
                if (o._listeners) {
                    for(var t = o._listeners.length; t-- > 0;)o._listeners[t](e);
                    o._listeners = null;
                }
            }), this.promise.then = function(e41) {
                var t, n = new Promise(function(e) {
                    o.subscribe(e), t = e;
                }).then(e41);
                return n.cancel = function() {
                    o.unsubscribe(t);
                }, n;
            }, n19(function(e, t, n) {
                o.reason || (o.reason = new ve(e, t, n), r(o.reason));
            });
        }
        return r1(e40, [
            {
                key: "throwIfRequested",
                value: function() {
                    if (this.reason) throw this.reason;
                }
            },
            {
                key: "subscribe",
                value: function(e) {
                    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [
                        e
                    ];
                }
            },
            {
                key: "unsubscribe",
                value: function(e) {
                    if (this._listeners) {
                        var t = this._listeners.indexOf(e);
                        -1 !== t && this._listeners.splice(t, 1);
                    }
                }
            }
        ], [
            {
                key: "source",
                value: function() {
                    var t;
                    return {
                        token: new e40(function(e) {
                            t = e;
                        }),
                        cancel: t
                    };
                }
            }
        ]), e40;
    }();
    var Be = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(Be).forEach(function(e) {
        var t = o1(e, 2), n = t[0], r = t[1];
        Be[r] = n;
    });
    var Le = Be;
    var De = function e(t) {
        var n20 = new _e(t), r = a1(_e.prototype.request, n20);
        return q.extend(r, _e.prototype, n20, {
            allOwnKeys: !0
        }), q.extend(r, n20, null, {
            allOwnKeys: !0
        }), r.create = function(n) {
            return e(je(t, n));
        }, r;
    }(se);
    return De.Axios = _e, De.CanceledError = ve, De.CancelToken = Fe, De.isCancel = ye, De.VERSION = Ne, De.toFormData = G, De.AxiosError = M, De.Cancel = De.CanceledError, De.all = function(e) {
        return Promise.all(e);
    }, De.spread = function(e) {
        return function(t) {
            return e.apply(null, t);
        };
    }, De.isAxiosError = function(e) {
        return q.isObject(e) && !0 === e.isAxiosError;
    }, De.mergeConfig = je, De.AxiosHeaders = he, De.formToJSON = function(e) {
        return oe(q.isHTMLForm(e) ? new FormData(e) : e);
    }, De.HttpStatusCode = Le, De.default = De, De;
});

//# sourceMappingURL=index.ad8217d2.js.map
