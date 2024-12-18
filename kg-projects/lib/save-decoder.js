var LZString = {
    _f: String.fromCharCode,
    _keyStrBase64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _keyStrUriSafe: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
    _getBaseValue: function(r, e) {
        if (LZString._baseReverseDic || (LZString._baseReverseDic = {}), !LZString._baseReverseDic[r]) {
            LZString._baseReverseDic[r] = {};
            for (var n = 0; n < r.length; n++) LZString._baseReverseDic[r][r[n]] = n
        }
        return LZString._baseReverseDic[r][e]
    },
    compressToBase64: function(r) {
        if (null == r) return "";
        var e = LZString._compress(r, 6, function(r) {
            return LZString._keyStrBase64.charAt(r)
        });
        switch (e.length % 4) {
            default:
            case 0:
                return e;
            case 1:
                return e + "===";
            case 2:
                return e + "==";
            case 3:
                return e + "="
        }
    },
    decompressFromBase64: function(r) {
        return null == r ? "" : "" == r ? null : LZString._decompress(r.length, 32, function(e) {
            return LZString._getBaseValue(LZString._keyStrBase64, r.charAt(e))
        })
    },
    compressToUTF16: function(r) {
        return null == r ? "" : LZString._compress(r, 15, function(r) {
            return String.fromCharCode(r + 32)
        }) + " "
    },
    decompressFromUTF16: function(r) {
        return null == r ? "" : "" == r ? null : LZString._decompress(r.length, 16384, function(e) {
            return r.charCodeAt(e) - 32
        })
    },
    compressToUint8Array: function(r) {
        for (var e = LZString.compress(r), n = new Uint8Array(2 * e.length), o = 0, t = e.length; t > o; o++) {
            var i = e.charCodeAt(o);
            n[2 * o] = i >>> 8, n[2 * o + 1] = i % 256
        }
        return n
    },
    decompressFromUint8Array: function(r) {
        if (null === r || void 0 === r) return LZString.decompress(r);
        for (var e = new Array(r.length / 2), n = 0, o = e.length; o > n; n++) e[n] = 256 * r[2 * n] + r[2 * n + 1];
        var t = [];
        return e.forEach(function(r) {
            t.push(String.fromCharCode(r))
        }), LZString.decompress(t.join(""))
    },
    compressToEncodedURIComponent: function(r) {
        return null == r ? "" : LZString._compress(r, 6, function(r) {
            return LZString._keyStrUriSafe.charAt(r)
        })
    },
    decompressFromEncodedURIComponent: function(r) {
        return null == r ? "" : "" == r ? null : (r = r.replace(/ /g, "+"), LZString._decompress(r.length, 32, function(e) {
            return LZString._getBaseValue(LZString._keyStrUriSafe, r.charAt(e))
        }))
    },
    compress: function(r) {
        return LZString._compress(r, 16, function(r) {
            return String.fromCharCode(r)
        })
    },
    _compress: function(r, e, n) {
        if (null == r) return "";
        {
            var o, t, i, s = {},
                a = {},
                p = "",
                u = "",
                c = "",
                l = 2,
                f = 3,
                h = 2,
                g = [],
                d = 0,
                S = 0;
            LZString._f
        }
        for (i = 0; i < r.length; i += 1)
            if (p = r[i], Object.prototype.hasOwnProperty.call(s, p) || (s[p] = f++, a[p] = !0), u = c + p, Object.prototype.hasOwnProperty.call(s, u)) c = u;
            else {
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                    if (c.charCodeAt(0) < 256) {
                        for (o = 0; h > o; o++) d <<= 1, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++;
                        for (t = c.charCodeAt(0), o = 0; 8 > o; o++) d = d << 1 | 1 & t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t >>= 1
                    } else {
                        for (t = 1, o = 0; h > o; o++) d = d << 1 | t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t = 0;
                        for (t = c.charCodeAt(0), o = 0; 16 > o; o++) d = d << 1 | 1 & t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t >>= 1
                    }
                    l--, 0 == l && (l = Math.pow(2, h), h++), delete a[c]
                } else
                    for (t = s[c], o = 0; h > o; o++) d = d << 1 | 1 & t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t >>= 1;
                l--, 0 == l && (l = Math.pow(2, h), h++), s[u] = f++, c = String(p)
            } if ("" !== c) {
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (c.charCodeAt(0) < 256) {
                    for (o = 0; h > o; o++) d <<= 1, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++;
                    for (t = c.charCodeAt(0), o = 0; 8 > o; o++) d = d << 1 | 1 & t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t >>= 1
                } else {
                    for (t = 1, o = 0; h > o; o++) d = d << 1 | t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t = 0;
                    for (t = c.charCodeAt(0), o = 0; 16 > o; o++) d = d << 1 | 1 & t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t >>= 1
                }
                l--, 0 == l && (l = Math.pow(2, h), h++), delete a[c]
            } else
                for (t = s[c], o = 0; h > o; o++) d = d << 1 | 1 & t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t >>= 1;
            l--, 0 == l && (l = Math.pow(2, h), h++)
        }
        for (t = 2, o = 0; h > o; o++) d = d << 1 | 1 & t, S == e - 1 ? (S = 0, g.push(n(d)), d = 0) : S++, t >>= 1;
        for (;;) {
            if (d <<= 1, S == e - 1) {
                g.push(n(d));
                break
            }
            S++
        }
        return g.join("")
    },
    decompress: function(r) {
        return null == r ? "" : "" == r ? null : LZString._decompress(r.length, 32768, function(e) {
            return r.charCodeAt(e)
        })
    },
    _decompress: function(r, e, n) {
        var o, t, i, s, a, p, u, c, l = [],
            f = 4,
            h = 4,
            g = 3,
            d = "",
            S = [],
            m = LZString._f,
            v = {
                val: n(0),
                position: e,
                index: 1
            };
        for (t = 0; 3 > t; t += 1) l[t] = t;
        for (s = 0, p = Math.pow(2, 2), u = 1; u != p;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = e, v.val = n(v.index++)), s |= (a > 0 ? 1 : 0) * u, u <<= 1;
        switch (o = s) {
            case 0:
                for (s = 0, p = Math.pow(2, 8), u = 1; u != p;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = e, v.val = n(v.index++)), s |= (a > 0 ? 1 : 0) * u, u <<= 1;
                c = m(s);
                break;
            case 1:
                for (s = 0, p = Math.pow(2, 16), u = 1; u != p;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = e, v.val = n(v.index++)), s |= (a > 0 ? 1 : 0) * u, u <<= 1;
                c = m(s);
                break;
            case 2:
                return ""
        }
        for (l[3] = c, i = c, S.push(c);;) {
            if (v.index > r) return "";
            for (s = 0, p = Math.pow(2, g), u = 1; u != p;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = e, v.val = n(v.index++)), s |= (a > 0 ? 1 : 0) * u, u <<= 1;
            switch (c = s) {
                case 0:
                    for (s = 0, p = Math.pow(2, 8), u = 1; u != p;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = e, v.val = n(v.index++)), s |= (a > 0 ? 1 : 0) * u, u <<= 1;
                    l[h++] = m(s), c = h - 1, f--;
                    break;
                case 1:
                    for (s = 0, p = Math.pow(2, 16), u = 1; u != p;) a = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = e, v.val = n(v.index++)), s |= (a > 0 ? 1 : 0) * u, u <<= 1;
                    l[h++] = m(s), c = h - 1, f--;
                    break;
                case 2:
                    return S.join("")
            }
            if (0 == f && (f = Math.pow(2, g), g++), l[c]) d = l[c];
            else {
                if (c !== h) return null;
                d = i + i[0]
            }
            S.push(d), l[h++] = i + d[0], f--, i = d, 0 == f && (f = Math.pow(2, g), g++)
        }
    }
};
"undefined" != typeof module && null != module && (module.exports = LZString);