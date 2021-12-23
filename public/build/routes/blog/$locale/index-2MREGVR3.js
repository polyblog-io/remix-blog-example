import {
  Link,
  require_main
} from "/build/_shared/chunk-YKANULPL.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    init_react();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/regenerator-runtime/runtime.js
var require_runtime = __commonJS({
  "node_modules/regenerator-runtime/runtime.js"(exports, module) {
    init_react();
    var runtime = function(exports2) {
      "use strict";
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined2;
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define2(obj, key, value) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }
      try {
        define2({}, "");
      } catch (err) {
        define2 = function(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self2, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        generator._invoke = makeInvokeMethod(innerFn, self2, context);
        return generator;
      }
      exports2.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var IteratorPrototype = {};
      define2(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define2(Gp, "constructor", GeneratorFunctionPrototype);
      define2(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define2(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          define2(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      exports2.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      exports2.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define2(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports2.awrap = function(arg) {
        return { __await: arg };
      };
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function(value2) {
                invoke("next", value2, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
            return PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        this._invoke = enqueue;
      }
      defineIteratorMethods(AsyncIterator.prototype);
      define2(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      });
      exports2.AsyncIterator = AsyncIterator;
      exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0)
          PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
        return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self2, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
            return doneResult();
          }
          context.method = method;
          context.arg = arg;
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                  continue;
                return delegateResult;
              }
            }
            if (context.method === "next") {
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self2, context);
            if (record.type === "normal") {
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined2) {
          context.delegate = null;
          if (context.method === "throw") {
            if (delegate.iterator["return"]) {
              context.method = "return";
              context.arg = undefined2;
              maybeInvokeDelegate(delegate, context);
              if (context.method === "throw") {
                return ContinueSentinel;
              }
            }
            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        if (info.done) {
          context[delegate.resultName] = info.value;
          context.next = delegate.nextLoc;
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined2;
          }
        } else {
          return info;
        }
        context.delegate = null;
        return ContinueSentinel;
      }
      defineIteratorMethods(Gp);
      define2(Gp, toStringTagSymbol, "Generator");
      define2(Gp, iteratorSymbol, function() {
        return this;
      });
      define2(Gp, "toString", function() {
        return "[object Generator]";
      });
      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      exports2.keys = function(object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key2 = keys.pop();
            if (key2 in object) {
              next.value = key2;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next2() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next2.value = iterable[i];
                  next2.done = false;
                  return next2;
                }
              }
              next2.value = undefined2;
              next2.done = true;
              return next2;
            };
            return next.next = next;
          }
        }
        return { next: doneResult };
      }
      exports2.values = values;
      function doneResult() {
        return { value: undefined2, done: true };
      }
      Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined2;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined2;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined2;
              }
            }
          }
        },
        stop: function() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        },
        dispatchException: function(exception) {
          if (this.done) {
            throw exception;
          }
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            if (caught) {
              context.method = "next";
              context.arg = undefined2;
            }
            return !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          return this.complete(record);
        },
        complete: function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
          return ContinueSentinel;
        },
        finish: function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc
          };
          if (this.method === "next") {
            this.arg = undefined2;
          }
          return ContinueSentinel;
        }
      };
      return exports2;
    }(typeof module === "object" ? module.exports : {});
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
    init_react();
    module.exports = require_runtime();
  }
});

// node_modules/@babel/runtime/helpers/asyncToGenerator.js
var require_asyncToGenerator = __commonJS({
  "node_modules/@babel/runtime/helpers/asyncToGenerator.js"(exports, module) {
    init_react();
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/b64-lite/dist/b64-lite.js
var require_b64_lite = __commonJS({
  "node_modules/b64-lite/dist/b64-lite.js"(exports) {
    init_react();
    exports.atob = function(o) {
      return window.atob(o);
    }, exports.btoa = function(o) {
      return window.btoa(o);
    }, exports.toBase64 = function(o) {
      if (typeof o == "string")
        return window.btoa(unescape(encodeURIComponent(o)));
      for (var t = new Uint8Array(o), n = "", e = 0; e < t.byteLength; e++)
        n += String.fromCharCode(t[e]);
      return window.btoa(n);
    }, exports.fromBase64 = function(o) {
      return decodeURIComponent(escape(window.atob(o)));
    }, exports.toBuffer = function(o) {
      for (var t = window.atob(o), n = new Uint8Array(t.length), e = 0; e < t.length; e++)
        n[e] = t.charCodeAt(e);
      return n;
    };
  }
});

// node_modules/b64-lite/dist/b64-lite.main.js
var require_b64_lite_main = __commonJS({
  "node_modules/b64-lite/dist/b64-lite.main.js"(exports, module) {
    init_react();
    module.exports = require_b64_lite();
  }
});

// node_modules/whatwg-fetch/dist/fetch.umd.js
var require_fetch_umd = __commonJS({
  "node_modules/whatwg-fetch/dist/fetch.umd.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : factory(global.WHATWGFetch = {});
    })(exports, function(exports2) {
      "use strict";
      var global = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
      var support = {
        searchParams: "URLSearchParams" in global,
        iterable: "Symbol" in global && "iterator" in Symbol,
        blob: "FileReader" in global && "Blob" in global && function() {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: "FormData" in global,
        arrayBuffer: "ArrayBuffer" in global
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
          throw new TypeError('Invalid character in header field name: "' + name + '"');
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function() {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function(value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this.bodyUsed = this.bodyUsed;
          this._bodyInit = body;
          if (!body) {
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };
        if (support.blob) {
          this.blob = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              }
              if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength));
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function() {
            return this.text().then(decode);
          };
        }
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        if (!(this instanceof Request)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || "same-origin";
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
        if (this.method === "GET" || this.method === "HEAD") {
          if (options.cache === "no-store" || options.cache === "no-cache") {
            var reParamSearch = /([?&])_=[^&]*/;
            if (reParamSearch.test(this.url)) {
              this.url = this.url.replace(reParamSearch, "$1_=" + new Date().getTime());
            } else {
              var reQueryString = /\?/;
              this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
            }
          }
        }
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split("\r").map(function(header) {
          return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
        }).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!(this instanceof Response)) {
          throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        }
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, { status: 0, statusText: "" });
        response.type = "error";
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, { status, headers: { location: url } });
      };
      exports2.DOMException = global.DOMException;
      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch(input, init) {
        return new Promise(function(resolve, reject) {
          var request = new Request(input, init);
          if (request.signal && request.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            setTimeout(function() {
              resolve(new Response(body, options));
            }, 0);
          };
          xhr.onerror = function() {
            setTimeout(function() {
              reject(new TypeError("Network request failed"));
            }, 0);
          };
          xhr.ontimeout = function() {
            setTimeout(function() {
              reject(new TypeError("Network request failed"));
            }, 0);
          };
          xhr.onabort = function() {
            setTimeout(function() {
              reject(new exports2.DOMException("Aborted", "AbortError"));
            }, 0);
          };
          function fixUrl(url) {
            try {
              return url === "" && global.location.href ? global.location.href : url;
            } catch (e) {
              return url;
            }
          }
          xhr.open(request.method, fixUrl(request.url), true);
          if (request.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr) {
            if (support.blob) {
              xhr.responseType = "blob";
            } else if (support.arrayBuffer && request.headers.get("Content-Type") && request.headers.get("Content-Type").indexOf("application/octet-stream") !== -1) {
              xhr.responseType = "arraybuffer";
            }
          }
          if (init && typeof init.headers === "object" && !(init.headers instanceof Headers)) {
            Object.getOwnPropertyNames(init.headers).forEach(function(name) {
              xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
            });
          } else {
            request.headers.forEach(function(value, name) {
              xhr.setRequestHeader(name, value);
            });
          }
          if (request.signal) {
            request.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                request.signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
        });
      }
      fetch.polyfill = true;
      if (!global.fetch) {
        global.fetch = fetch;
        global.Headers = Headers;
        global.Request = Request;
        global.Response = Response;
      }
      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/isomorphic-fetch/fetch-npm-browserify.js
var require_fetch_npm_browserify = __commonJS({
  "node_modules/isomorphic-fetch/fetch-npm-browserify.js"(exports, module) {
    init_react();
    require_fetch_umd();
    module.exports = self.fetch.bind(self);
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    init_react();
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/ClientError.js
var require_ClientError = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/ClientError.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _typeof2 = _interopRequireDefault(require_typeof());
    function ClientError(source) {
      var _this = this;
      if (source && (0, _typeof2["default"])(source) === "object") {
        Object.keys(source).forEach(function(key) {
          _this[key] = source[key];
        });
        if (typeof navigator !== "undefined" && !navigator.onLine) {
          this.message = "No Internet connection";
        } else if (source.message === "Failed to fetch") {
          this.message = "A network error occurred";
        } else if (source.message) {
          this.message = source.message;
        } else {
          if (source.status) {
            this.message += source.status;
            if (source.body) {
              this.message += " ";
            }
          }
          if (source.body) {
            if ((0, _typeof2["default"])(source.body) === "object") {
              if (source.body.string) {
                this.message += source.body.string;
              } else {
                this.message += JSON.stringify(source.body);
              }
            } else {
              this.message += source.body;
            }
          }
        }
      } else if (source && typeof source === "string") {
        this.message = source;
      } else {
        this.message = "";
      }
      this.name = "ClientError";
    }
    ClientError.prototype = Error.prototype;
    ClientError.prototype.toString = function() {
      return this.message;
    };
    var _default = ClientError;
    exports["default"] = _default;
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/failure.js
var require_failure = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/failure.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = failure;
    var _ClientError = _interopRequireDefault(require_ClientError());
    function failure(response) {
      throw new _ClientError["default"](response);
    }
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/getPolyblogUrl.js
var require_getPolyblogUrl = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/getPolyblogUrl.js"(exports, module) {
    init_react();
    "use strict";
    function getPolyblogUrl() {
      return "https://www.polyblog.io";
    }
    module.exports = getPolyblogUrl;
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/httpWithoutHeaders.js
var require_httpWithoutHeaders = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/httpWithoutHeaders.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = httpWithoutHeaders;
    var _isomorphicFetch = _interopRequireDefault(require_fetch_npm_browserify());
    var _failure = _interopRequireDefault(require_failure());
    function httpWithoutHeaders(url, customFailure) {
      return (0, _isomorphicFetch["default"])(url).then(function(response) {
        if (!response.ok) {
          return response.json().then(function(error) {
            throw error;
          });
        } else {
          return response.json();
        }
      })["catch"](customFailure || _failure["default"]);
    }
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/accessToken.js
var require_accessToken = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/accessToken.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getAccessToken = getAccessToken;
    exports.getAccessTokenPayload = getAccessTokenPayload;
    exports.isAccessTokenExpired = isAccessTokenExpired;
    exports.setAccessToken = setAccessToken;
    exports.setAccessTokenCallback = setAccessTokenCallback;
    exports.setAccessTokenForPolyblogClient = exports.setAccessTokenCallbackForPolyblogClient = void 0;
    var _b64Lite = require_b64_lite_main();
    var accessToken = null;
    var callback = null;
    function getAccessTokenPayload() {
      var payload;
      if (accessToken) {
        try {
          payload = JSON.parse((0, _b64Lite.atob)(accessToken.split(".")[1]));
        } catch (error) {
          console.error(error);
        }
      }
      return payload;
    }
    function isAccessTokenExpired() {
      var isExpired = true;
      try {
        var payload = getAccessTokenPayload();
        var now = Math.floor(Date.now() / 1e3);
        if (payload.exp > now) {
          isExpired = false;
        }
      } catch (error) {
        console.error(error);
      }
      return isExpired;
    }
    function getAccessToken() {
      return accessToken;
    }
    function setAccessToken(accessToken_) {
      var newAccessToken = accessToken_;
      if (accessToken !== newAccessToken) {
        accessToken = newAccessToken;
        if (callback) {
          callback(newAccessToken);
        }
      }
    }
    function setAccessTokenCallback(callback_) {
      callback = callback_;
    }
    var setAccessTokenForPolyblogClient = setAccessToken;
    exports.setAccessTokenForPolyblogClient = setAccessTokenForPolyblogClient;
    var setAccessTokenCallbackForPolyblogClient = setAccessTokenCallback;
    exports.setAccessTokenCallbackForPolyblogClient = setAccessTokenCallbackForPolyblogClient;
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/refreshToken.js
var require_refreshToken = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/refreshToken.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRefreshToken = getRefreshToken;
    exports.isRefreshTokenExpired = isRefreshTokenExpired;
    exports.setRefreshToken = setRefreshToken;
    exports.setRefreshTokenForPolyblogClient = void 0;
    var _b64Lite = require_b64_lite_main();
    var refreshToken = null;
    function isRefreshTokenExpired() {
      var isExpired = true;
      try {
        var payload = JSON.parse((0, _b64Lite.atob)(refreshToken.split(".")[1]));
        var now = Math.floor(Date.now() / 1e3);
        if (payload.exp > now) {
          isExpired = false;
        }
      } catch (error) {
        console.error(error);
      }
      return isExpired;
    }
    function getRefreshToken() {
      return refreshToken;
    }
    function setRefreshToken(refreshToken_) {
      refreshToken = refreshToken_;
    }
    var setRefreshTokenForPolyblogClient = setRefreshToken;
    exports.setRefreshTokenForPolyblogClient = setRefreshTokenForPolyblogClient;
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/refreshAccessToken.js
var require_refreshAccessToken = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/refreshAccessToken.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = refreshAccessToken;
    var _regenerator = _interopRequireDefault(require_regenerator());
    var _asyncToGenerator2 = _interopRequireDefault(require_asyncToGenerator());
    var _b64Lite = require_b64_lite_main();
    var _isomorphicFetch = _interopRequireDefault(require_fetch_npm_browserify());
    var _accessToken = require_accessToken();
    var _refreshToken = require_refreshToken();
    var _getPolyblogUrl = _interopRequireDefault(require_getPolyblogUrl());
    function refreshAccessToken() {
      return _refreshAccessToken.apply(this, arguments);
    }
    function _refreshAccessToken() {
      _refreshAccessToken = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee() {
        var accessToken, refreshToken, url, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                accessToken = (0, _accessToken.getAccessToken)();
                if (!(accessToken && (0, _accessToken.isAccessTokenExpired)())) {
                  _context.next = 16;
                  break;
                }
                if (!(0, _refreshToken.isRefreshTokenExpired)()) {
                  _context.next = 7;
                  break;
                }
                if (typeof window !== "undefined") {
                  window.open("/logout");
                }
                throw new Error("refresh token has expired");
              case 7:
                refreshToken = (0, _refreshToken.getRefreshToken)();
                url = (0, _getPolyblogUrl["default"])() + "/api/refresh-access-token";
                _context.next = 11;
                return (0, _isomorphicFetch["default"])(url, {
                  method: "POST",
                  headers: {
                    Authorization: "Token " + (0, _b64Lite.btoa)(refreshToken)
                  }
                }).then(function(response) {
                  if (!response.ok) {
                    return response.json().then(function(error) {
                      throw error;
                    });
                  } else {
                    return response.json();
                  }
                })["catch"](console.log);
              case 11:
                result = _context.sent;
                accessToken = result.accessToken;
                refreshToken = result.refreshToken;
                (0, _accessToken.setAccessToken)(accessToken);
                (0, _refreshToken.setRefreshToken)(refreshToken);
              case 16:
                return _context.abrupt("return", accessToken);
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _refreshAccessToken.apply(this, arguments);
    }
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/http.js
var require_http = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/http.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = http;
    var _regenerator = _interopRequireDefault(require_regenerator());
    var _asyncToGenerator2 = _interopRequireDefault(require_asyncToGenerator());
    var _b64Lite = require_b64_lite_main();
    var _isomorphicFetch = _interopRequireDefault(require_fetch_npm_browserify());
    var _failure = _interopRequireDefault(require_failure());
    var _getPolyblogUrl = _interopRequireDefault(require_getPolyblogUrl());
    var _httpWithoutHeaders = _interopRequireDefault(require_httpWithoutHeaders());
    var _refreshAccessToken = _interopRequireDefault(require_refreshAccessToken());
    function http(_x, _x2) {
      return _http.apply(this, arguments);
    }
    function _http() {
      _http = (0, _asyncToGenerator2["default"])(/* @__PURE__ */ _regenerator["default"].mark(function _callee(config, customFailure) {
        var accessToken;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _refreshAccessToken["default"])();
              case 2:
                accessToken = _context.sent;
                if (!config.headers) {
                  config.headers = {};
                }
                config.headers.Accept = config.headers.Accept || "application/json";
                config.headers["Content-Type"] = config.headers["Content-Type"] || "application/json";
                config.headers.Authorization = config.headers.Authorization || "Token " + (0, _b64Lite.btoa)(accessToken || "");
                return _context.abrupt("return", (0, _isomorphicFetch["default"])((0, _getPolyblogUrl["default"])() + "/api/" + config.url, {
                  method: config.method,
                  headers: config.headers,
                  body: JSON.stringify(config.body)
                }).then(function(response) {
                  if (!response.ok) {
                    if (response.url.startsWith("https://s3.amazonaws.com")) {
                      return (0, _httpWithoutHeaders["default"])(response.url);
                    } else {
                      return response.json().then(function() {
                        var error = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        if (!error.status) {
                          error.status = response.status;
                        }
                        if (!error.message) {
                          error.message = response.statusText;
                        }
                        throw error;
                      });
                    }
                  } else {
                    return response.json();
                  }
                })["catch"](customFailure || _failure["default"]));
              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _http.apply(this, arguments);
    }
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/get.js
var require_get = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/get.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = get;
    var _http = _interopRequireDefault(require_http());
    function get(config, customFailure) {
      config.method = "GET";
      return (0, _http["default"])(config, customFailure);
    }
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/getArticleById.js
var require_getArticleById = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/getArticleById.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = getArticleById;
    var _get = _interopRequireDefault(require_get());
    function getArticleById(articleId) {
      var url = "articles/".concat(articleId);
      return (0, _get["default"])({
        url
      })["catch"](function(error) {
        throw new Error("Couldn't get article \n".concat(error));
      });
    }
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/getArticleBySlugAndByLocale.js
var require_getArticleBySlugAndByLocale = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/getArticleBySlugAndByLocale.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = getArticleBySlugAndByLocale;
    var _get = _interopRequireDefault(require_get());
    function getArticleBySlugAndByLocale(slug, locale) {
      var url = "articles/".concat(slug, "?locale=").concat(locale);
      return (0, _get["default"])({
        url
      })["catch"](function(error) {
        throw new Error("Couldn't get article \n".concat(error));
      });
    }
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/getArticles.js
var require_getArticles = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/getArticles.js"(exports) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = getArticles2;
    var _get = _interopRequireDefault(require_get());
    function getArticles2(parameters) {
      var url = "articles";
      url += "?" + new URLSearchParams(parameters).toString();
      return (0, _get["default"])({
        url
      })["catch"](function(error) {
        throw new Error("Couldn't get articles \n".concat(error));
      });
    }
  }
});

// node_modules/@polyblog/polyblog-js-client/dist/index.js
var require_dist = __commonJS({
  "node_modules/@polyblog/polyblog-js-client/dist/index.js"(exports, module) {
    init_react();
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    var _getArticleById = _interopRequireDefault(require_getArticleById());
    var _getArticleBySlugAndByLocale = _interopRequireDefault(require_getArticleBySlugAndByLocale());
    var _getArticles = _interopRequireDefault(require_getArticles());
    module.exports = {
      getArticleById: _getArticleById["default"],
      getArticleBySlugAndByLocale: _getArticleBySlugAndByLocale["default"],
      getArticles: _getArticles["default"]
    };
  }
});

// browser-route-module:C:\projects\waiterio\my-remix-blog\app\routes\blog\$locale\index.jsx?browser
init_react();

// app/routes/blog/$locale/index.jsx
init_react();
var import_polyblog_js_client = __toModule(require_dist());
var import_react = __toModule(require_react());
var import_react_router = __toModule(require_main());
var HomePage = () => {
  const { locale = "en" } = (0, import_react_router.useParams)();
  const [articles, setArticles] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    if (articles)
      return;
    const fetchArticles = async () => {
      let articles2 = await (0, import_polyblog_js_client.default)({
        organizationId: "c398463407b5c12f27f9aed4",
        project: "polyblog",
        locale,
        published: true,
        sortDirection: "DESC"
      });
      console.log({ articles: articles2 });
      setArticles(articles2);
    };
    fetchArticles();
  }, [articles, locale]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Blog"), /* @__PURE__ */ React.createElement("div", null, articles?.map(({
    _id,
    locale: locale2,
    slug,
    coverUrl,
    title,
    author,
    creationTime,
    subtitle
  }) => /* @__PURE__ */ React.createElement(Link, {
    to: {
      pathname: `/${locale2}/${slug}`
    },
    key: _id,
    className: "articleLink"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "article",
    key: _id
  }, /* @__PURE__ */ React.createElement("div", {
    className: "imgContainer"
  }, /* @__PURE__ */ React.createElement("img", {
    src: coverUrl,
    alt: title
  })), /* @__PURE__ */ React.createElement("div", {
    className: "articleBody"
  }, /* @__PURE__ */ React.createElement("span", null, author), " -", " ", /* @__PURE__ */ React.createElement("span", null, new Date(creationTime).toLocaleString(locale2, {
    dateStyle: "long"
  })), /* @__PURE__ */ React.createElement("h3", null, title), /* @__PURE__ */ React.createElement("p", null, subtitle)))))));
};
var locale_default = HomePage;
export {
  locale_default as default
};
//# sourceMappingURL=/build/routes/blog/$locale/index-2MREGVR3.js.map
