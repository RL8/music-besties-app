// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"iUuJv":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "47f455d51fcc916e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fILKw":[function(require,module,exports,__globalThis) {
// Import feature flags first
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vueFeatureFlags = require("./vue-feature-flags");
// Then import Vue and other dependencies
var _vue = require("vue");
var _appVue = require("./App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
var _router = require("./router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _stylesCss = require("./styles.css");
const app = (0, _vue.createApp)((0, _appVueDefault.default));
app.use((0, _routerDefault.default));
app.mount('#app');

},{"./vue-feature-flags":"8Oyvw","vue":"1pgRQ","./App.vue":"6xZ9X","./styles.css":"lW6qc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./router":"jP3Ou"}],"8Oyvw":[function(require,module,exports,__globalThis) {
// Define Vue feature flags for better tree-shaking
var _vue = require("vue");
// Development settings
window.__VUE_OPTIONS_API__ = true;
window.__VUE_PROD_DEVTOOLS__ = true;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

},{"vue":"1pgRQ"}],"1pgRQ":[function(require,module,exports,__globalThis) {
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compile", ()=>compile);
var _runtimeDom = require("@vue/runtime-dom");
parcelHelpers.exportAll(_runtimeDom, exports);
function initDev() {
    (0, _runtimeDom.initCustomFormatter)();
}
initDev();
const compile = ()=>{
    (0, _runtimeDom.warn)(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
};

},{"@vue/runtime-dom":"jqTl0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jqTl0":[function(require,module,exports,__globalThis) {
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup);
parcelHelpers.export(exports, "VueElement", ()=>VueElement);
parcelHelpers.export(exports, "createApp", ()=>createApp);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "initDirectivesForSSR", ()=>initDirectivesForSSR);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars);
parcelHelpers.export(exports, "useHost", ()=>useHost);
parcelHelpers.export(exports, "useShadowRoot", ()=>useShadowRoot);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect);
parcelHelpers.export(exports, "vModelText", ()=>vModelText);
parcelHelpers.export(exports, "vShow", ()=>vShow);
parcelHelpers.export(exports, "withKeys", ()=>withKeys);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers);
var _runtimeCore = require("@vue/runtime-core");
parcelHelpers.exportAll(_runtimeCore, exports);
var _shared = require("@vue/shared");
let policy = void 0;
const tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
        createHTML: (val)=>val
    });
} catch (e) {
    (0, _runtimeCore.warn)(`Error creating trusted types policy: ${e}`);
}
const unsafeToTrustedHTML = policy ? (val)=>policy.createHTML(val) : (val)=>val;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, namespace, is, props)=>{
        const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, {
            is
        }) : doc.createElement(tag);
        if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text),
    createComment: (text)=>doc.createComment(text),
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode,
    nextSibling: (node)=>node.nextSibling,
    querySelector: (selector)=>doc.querySelector(selector),
    setScopeId (el, id) {
        el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, namespace, start, end) {
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end || start.nextSibling)) while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
            const template = templateContainer.content;
            if (namespace === "svg" || namespace === "mathml") {
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
const TRANSITION = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = /* @__PURE__ */ (0, _shared.extend)({}, (0, _runtimeCore.BaseTransitionPropsValidators), DOMTransitionPropsValidators);
const decorate$1 = (t)=>{
    t.displayName = "Transition";
    t.props = TransitionPropsValidators;
    return t;
};
const Transition = /* @__PURE__ */ decorate$1((props, { slots })=>(0, _runtimeCore.h)((0, _runtimeCore.BaseTransition), resolveTransitionProps(props), slots));
const callHook = (hook, args = [])=>{
    if ((0, _shared.isArray)(hook)) hook.forEach((h2)=>h2(...args));
    else if (hook) hook(...args);
};
const hasExplicitCallback = (hook)=>{
    return hook ? (0, _shared.isArray)(hook) ? hook.some((h2)=>h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done, isCancelled)=>{
        el._enterCancelled = isCancelled;
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done);
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return (0, _shared.extend)(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            el._isLeaving = true;
            const resolve = ()=>finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            if (!el._enterCancelled) {
                forceReflow();
                addTransitionClass(el, leaveActiveClass);
            } else {
                addTransitionClass(el, leaveActiveClass);
                forceReflow();
            }
            nextFrame(()=>{
                if (!el._isLeaving) return;
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false, void 0, true);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true, void 0, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if ((0, _shared.isObject)(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = (0, _shared.toNumber)(val);
    (0, _runtimeCore.assertNumber)(res, "<transition> explicit duration");
    return res;
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c));
    (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c));
    const _vtc = el[vtcKey];
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el[vtcKey] = void 0;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout != null) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + "end";
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key)=>(styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>toMs(d) + toMs(delays[i])));
}
function toMs(s) {
    if (s === "auto") return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
    return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
    const transitionClasses = el[vtcKey];
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(" ");
    if (value == null) el.removeAttribute("class");
    else if (isSVG) el.setAttribute("class", value);
    else el.className = value;
}
const vShowOriginalDisplay = Symbol("_vod");
const vShowHidden = Symbol("_vsh");
const vShow = {
    beforeMount (el, { value }, { transition }) {
        el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value }, { transition }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value, oldValue }, { transition }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value }) {
        setDisplay(el, value);
    }
};
vShow.name = "show";
function setDisplay(el, value) {
    el.style.display = value ? el[vShowOriginalDisplay] : "none";
    el[vShowHidden] = !value;
}
function initVShowForSSR() {
    vShow.getSSRProps = ({ value })=>{
        if (!value) return {
            style: {
                display: "none"
            }
        };
    };
}
const CSS_VAR_TEXT = Symbol("CSS_VAR_TEXT");
function useCssVars(getter) {
    const instance = (0, _runtimeCore.getCurrentInstance)();
    if (!instance) {
        (0, _runtimeCore.warn)(`useCssVars is called without current active component instance.`);
        return;
    }
    const updateTeleports = instance.ut = (vars = getter(instance.proxy))=>{
        Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node)=>setVarsOnNode(node, vars));
    };
    instance.getCssVars = ()=>getter(instance.proxy);
    const setVars = ()=>{
        const vars = getter(instance.proxy);
        if (instance.ce) setVarsOnNode(instance.ce, vars);
        else setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
    };
    (0, _runtimeCore.onBeforeUpdate)(()=>{
        (0, _runtimeCore.queuePostFlushCb)(setVars);
    });
    (0, _runtimeCore.onMounted)(()=>{
        (0, _runtimeCore.watch)(setVars, (0, _shared.NOOP), {
            flush: "post"
        });
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        (0, _runtimeCore.onUnmounted)(()=>ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === (0, _runtimeCore.Fragment)) vnode.children.forEach((c)=>setVarsOnVNode(c, vars));
    else if (vnode.type === (0, _runtimeCore.Static)) {
        let { el, anchor } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        let cssText = "";
        for(const key in vars){
            style.setProperty(`--${key}`, vars[key]);
            cssText += `--${key}: ${vars[key]};`;
        }
        style[CSS_VAR_TEXT] = cssText;
    }
}
const displayRE = /(^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = (0, _shared.isString)(next);
    let hasControlledDisplay = false;
    if (next && !isCssString) {
        if (prev) {
            if (!(0, _shared.isString)(prev)) {
                for(const key in prev)if (next[key] == null) setStyle(style, key, "");
            } else for (const prevStyle of prev.split(";")){
                const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
                if (next[key] == null) setStyle(style, key, "");
            }
        }
        for(const key in next){
            if (key === "display") hasControlledDisplay = true;
            setStyle(style, key, next[key]);
        }
    } else {
        if (isCssString) {
            if (prev !== next) {
                const cssVarText = style[CSS_VAR_TEXT];
                if (cssVarText) next += ";" + cssVarText;
                style.cssText = next;
                hasControlledDisplay = displayRE.test(next);
            }
        } else if (prev) el.removeAttribute("style");
    }
    if (vShowOriginalDisplay in el) {
        el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
        if (el[vShowHidden]) style.display = "none";
    }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0, _shared.isArray)(val)) val.forEach((v)=>setStyle(style, name, v));
    else {
        if (val == null) val = "";
        if (semicolonRE.test(val)) (0, _runtimeCore.warn)(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
        if (name.startsWith("--")) style.setProperty(name, val);
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) style.setProperty((0, _shared.hyphenate)(prefixed), val.replace(importantRE, ""), "important");
            else style[prefixed] = val;
        }
    }
}
const prefixes = [
    "Webkit",
    "Moz",
    "ms"
];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = (0, _runtimeCore.camelize)(rawName);
    if (name !== "filter" && name in style) return prefixCache[rawName] = name;
    name = (0, _shared.capitalize)(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = (0, _shared.isSpecialBooleanAttr)(key)) {
    if (isSVG && key.startsWith("xlink:")) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else if (value == null || isBoolean && !(0, _shared.includeBooleanAttr)(value)) el.removeAttribute(key);
    else el.setAttribute(key, isBoolean ? "" : (0, _shared.isSymbol)(value) ? String(value) : value);
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
    if (key === "innerHTML" || key === "textContent") {
        if (value != null) el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
        return;
    }
    const tag = el.tagName;
    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
    !tag.includes("-")) {
        const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
        const newValue = value == null ? // #11647: value should be set as empty string for null and undefined,
        // but <input type="checkbox"> should be set as 'on'.
        el.type === "checkbox" ? "on" : "" : String(value);
        if (oldValue !== newValue || !("_value" in el)) el.value = newValue;
        if (value == null) el.removeAttribute(key);
        el._value = value;
        return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
        const type = typeof el[key];
        if (type === "boolean") value = (0, _shared.includeBooleanAttr)(value);
        else if (value == null && type === "string") {
            value = "";
            needRemove = true;
        } else if (type === "number") {
            value = 0;
            needRemove = true;
        }
    }
    try {
        el[key] = value;
    } catch (e) {
        if (!needRemove) (0, _runtimeCore.warn)(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
    }
    needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[veiKey] || (el[veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) existingInvoker.value = sanitizeEventValue(nextValue, rawName);
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(sanitizeEventValue(nextValue, rawName), instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ":" ? name.slice(3) : (0, _shared.hyphenate)(name.slice(2));
    return [
        event,
        options
    ];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = ()=>cachedNow || (p.then(()=>cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= invoker.attached) return;
        (0, _runtimeCore.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5, [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function sanitizeEventValue(value, propName) {
    if ((0, _shared.isFunction)(value) || (0, _shared.isArray)(value)) return value;
    (0, _runtimeCore.warn)(`Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`);
    return 0, _shared.NOOP;
}
function patchStopImmediatePropagation(e, value) {
    if ((0, _shared.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e2)=>!e2._stopped && fn && fn(e2));
    } else return value;
}
const isNativeOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
    key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, parentComponent)=>{
    const isSVG = namespace === "svg";
    if (key === "class") patchClass(el, nextValue, isSVG);
    else if (key === "style") patchStyle(el, prevValue, nextValue);
    else if ((0, _shared.isOn)(key)) {
        if (!(0, _shared.isModelListener)(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue);
        if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    } else if (// #11081 force set props for possible async custom element
    el._isVueCE && (/[A-Z]/.test(key) || !(0, _shared.isString)(nextValue))) patchDOMProp(el, (0, _shared.camelize)(key), nextValue, parentComponent, key);
    else {
        if (key === "true-value") el._trueValue = nextValue;
        else if (key === "false-value") el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        if (key === "innerHTML" || key === "textContent") return true;
        if (key in el && isNativeOn(key) && (0, _shared.isFunction)(value)) return true;
        return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") return false;
    if (key === "form") return false;
    if (key === "list" && el.tagName === "INPUT") return false;
    if (key === "type" && el.tagName === "TEXTAREA") return false;
    if (key === "width" || key === "height") {
        const tag = el.tagName;
        if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
    }
    if (isNativeOn(key) && (0, _shared.isString)(value)) return false;
    return key in el;
}
const REMOVAL = {};
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineCustomElement(options, extraOptions, _createApp) {
    const Comp = (0, _runtimeCore.defineComponent)(options, extraOptions);
    if ((0, _shared.isPlainObject)(Comp)) (0, _shared.extend)(Comp, extraOptions);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, _createApp);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */ const defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ (options, extraOptions)=>{
    return /* @__PURE__ */ defineCustomElement(options, extraOptions, createSSRApp);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {}, _createApp = createApp){
        super();
        this._def = _def;
        this._props = _props;
        this._createApp = _createApp;
        this._isVueCE = true;
        /**
     * @internal
     */ this._instance = null;
        /**
     * @internal
     */ this._app = null;
        /**
     * @internal
     */ this._nonce = this._def.nonce;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        this._styleChildren = /* @__PURE__ */ new WeakSet();
        this._ob = null;
        if (this.shadowRoot && _createApp !== createApp) this._root = this.shadowRoot;
        else {
            if (0, this.shadowRoot) (0, _runtimeCore.warn)(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
            if (_def.shadowRoot !== false) {
                this.attachShadow({
                    mode: "open"
                });
                this._root = this.shadowRoot;
            } else this._root = this;
        }
        if (!this._def.__asyncLoader) this._resolveProps(this._def);
    }
    connectedCallback() {
        if (!this.isConnected) return;
        if (!this.shadowRoot) this._parseSlots();
        this._connected = true;
        let parent = this;
        while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
            this._parent = parent;
            break;
        }
        if (!this._instance) {
            if (this._resolved) {
                this._setParent();
                this._update();
            } else if (parent && parent._pendingResolve) this._pendingResolve = parent._pendingResolve.then(()=>{
                this._pendingResolve = void 0;
                this._resolveDef();
            });
            else this._resolveDef();
        }
    }
    _setParent(parent = this._parent) {
        if (parent) {
            this._instance.parent = parent._instance;
            this._instance.provides = parent._instance.provides;
        }
    }
    disconnectedCallback() {
        this._connected = false;
        (0, _runtimeCore.nextTick)(()=>{
            if (!this._connected) {
                if (this._ob) {
                    this._ob.disconnect();
                    this._ob = null;
                }
                this._app && this._app.unmount();
                if (this._instance) this._instance.ce = void 0;
                this._app = this._instance = null;
            }
        });
    }
    /**
   * resolve inner component definition (handle possible async component)
   */ _resolveDef() {
        if (this._pendingResolve) return;
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        this._ob = new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        });
        this._ob.observe(this, {
            attributes: true
        });
        const resolve = (def, isAsync = false)=>{
            this._resolved = true;
            this._pendingResolve = void 0;
            const { props, styles } = def;
            let numberProps;
            if (props && !(0, _shared.isArray)(props)) for(const key in props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    if (key in this._props) this._props[key] = (0, _shared.toNumber)(this._props[key]);
                    (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[(0, _shared.camelize)(key)] = true;
                }
            }
            this._numberProps = numberProps;
            if (isAsync) this._resolveProps(def);
            if (this.shadowRoot) this._applyStyles(styles);
            else if (styles) (0, _runtimeCore.warn)("Custom element style injection is not supported when using shadowRoot: false");
            this._mount(def);
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) this._pendingResolve = asyncDef().then((def)=>resolve(this._def = def, true));
        else resolve(this._def);
    }
    _mount(def) {
        if (!def.name) def.name = "VueElement";
        this._app = this._createApp(def);
        if (def.configureApp) def.configureApp(this._app);
        this._app._ceVNode = this._createVNode();
        this._app.mount(this._root);
        const exposed = this._instance && this._instance.exposed;
        if (!exposed) return;
        for(const key in exposed)if (!(0, _shared.hasOwn)(this, key)) Object.defineProperty(this, key, {
            // unwrap ref to be consistent with public instance behavior
            get: ()=>(0, _runtimeCore.unref)(exposed[key])
        });
        else (0, _runtimeCore.warn)(`Exposed property "${key}" already exists on custom element.`);
    }
    _resolveProps(def) {
        const { props } = def;
        const declaredPropKeys = (0, _shared.isArray)(props) ? props : Object.keys(props || {});
        for (const key of Object.keys(this))if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key]);
        for (const key of declaredPropKeys.map((0, _shared.camelize)))Object.defineProperty(this, key, {
            get () {
                return this._getProp(key);
            },
            set (val) {
                this._setProp(key, val, true, true);
            }
        });
    }
    _setAttr(key) {
        if (key.startsWith("data-v-")) return;
        const has = this.hasAttribute(key);
        let value = has ? this.getAttribute(key) : REMOVAL;
        const camelKey = (0, _shared.camelize)(key);
        if (has && this._numberProps && this._numberProps[camelKey]) value = (0, _shared.toNumber)(value);
        this._setProp(camelKey, value, false, true);
    }
    /**
   * @internal
   */ _getProp(key) {
        return this._props[key];
    }
    /**
   * @internal
   */ _setProp(key, val, shouldReflect = true, shouldUpdate = false) {
        if (val !== this._props[key]) {
            if (val === REMOVAL) delete this._props[key];
            else {
                this._props[key] = val;
                if (key === "key" && this._app) this._app._ceVNode.key = val;
            }
            if (shouldUpdate && this._instance) this._update();
            if (shouldReflect) {
                const ob = this._ob;
                ob && ob.disconnect();
                if (val === true) this.setAttribute((0, _shared.hyphenate)(key), "");
                else if (typeof val === "string" || typeof val === "number") this.setAttribute((0, _shared.hyphenate)(key), val + "");
                else if (!val) this.removeAttribute((0, _shared.hyphenate)(key));
                ob && ob.observe(this, {
                    attributes: true
                });
            }
        }
    }
    _update() {
        render(this._createVNode(), this._root);
    }
    _createVNode() {
        const baseProps = {};
        if (!this.shadowRoot) baseProps.onVnodeMounted = baseProps.onVnodeUpdated = this._renderSlots.bind(this);
        const vnode = (0, _runtimeCore.createVNode)(this._def, (0, _shared.extend)(baseProps, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.ce = this;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                if (this._styles) {
                    this._styles.forEach((s)=>this._root.removeChild(s));
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                this._instance = null;
                this._update();
            };
            const dispatch = (event, args)=>{
                this.dispatchEvent(new CustomEvent(event, (0, _shared.isPlainObject)(args[0]) ? (0, _shared.extend)({
                    detail: args
                }, args[0]) : {
                    detail: args
                }));
            };
            instance.emit = (event, ...args)=>{
                dispatch(event, args);
                if ((0, _shared.hyphenate)(event) !== event) dispatch((0, _shared.hyphenate)(event), args);
            };
            this._setParent();
        };
        return vnode;
    }
    _applyStyles(styles, owner) {
        if (!styles) return;
        if (owner) {
            if (owner === this._def || this._styleChildren.has(owner)) return;
            this._styleChildren.add(owner);
        }
        const nonce = this._nonce;
        for(let i = styles.length - 1; i >= 0; i--){
            const s = document.createElement("style");
            if (nonce) s.setAttribute("nonce", nonce);
            s.textContent = styles[i];
            this.shadowRoot.prepend(s);
            if (owner) {
                if (owner.__hmrId) {
                    if (!this._childStyles) this._childStyles = /* @__PURE__ */ new Map();
                    let entry = this._childStyles.get(owner.__hmrId);
                    if (!entry) this._childStyles.set(owner.__hmrId, entry = []);
                    entry.push(s);
                }
            } else (this._styles || (this._styles = [])).push(s);
        }
    }
    /**
   * Only called when shadowRoot is false
   */ _parseSlots() {
        const slots = this._slots = {};
        let n;
        while(n = this.firstChild){
            const slotName = n.nodeType === 1 && n.getAttribute("slot") || "default";
            (slots[slotName] || (slots[slotName] = [])).push(n);
            this.removeChild(n);
        }
    }
    /**
   * Only called when shadowRoot is false
   */ _renderSlots() {
        const outlets = (this._teleportTarget || this).querySelectorAll("slot");
        const scopeId = this._instance.type.__scopeId;
        for(let i = 0; i < outlets.length; i++){
            const o = outlets[i];
            const slotName = o.getAttribute("name") || "default";
            const content = this._slots[slotName];
            const parent = o.parentNode;
            if (content) for (const n of content){
                if (scopeId && n.nodeType === 1) {
                    const id = scopeId + "-s";
                    const walker = document.createTreeWalker(n, 1);
                    n.setAttribute(id, "");
                    let child;
                    while(child = walker.nextNode())child.setAttribute(id, "");
                }
                parent.insertBefore(n, o);
            }
            else while(o.firstChild)parent.insertBefore(o.firstChild, o);
            parent.removeChild(o);
        }
    }
    /**
   * @internal
   */ _injectChildStyle(comp) {
        this._applyStyles(comp.styles, comp);
    }
    /**
   * @internal
   */ _removeChildStyle(comp) {
        this._styleChildren.delete(comp);
        if (this._childStyles && comp.__hmrId) {
            const oldStyles = this._childStyles.get(comp.__hmrId);
            if (oldStyles) {
                oldStyles.forEach((s)=>this._root.removeChild(s));
                oldStyles.length = 0;
            }
        }
    }
}
function useHost(caller) {
    const instance = (0, _runtimeCore.getCurrentInstance)();
    const el = instance && instance.ce;
    if (el) return el;
    else if (true) {
        if (!instance) (0, _runtimeCore.warn)(`${caller || "useHost"} called without an active component instance.`);
        else (0, _runtimeCore.warn)(`${caller || "useHost"} can only be used in components defined via defineCustomElement.`);
    }
    return null;
}
function useShadowRoot() {
    const el = useHost("useShadowRoot");
    return el && el.shadowRoot;
}
function useCssModule(name = "$style") {
    {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        if (!instance) {
            (0, _runtimeCore.warn)(`useCssModule must be called inside setup()`);
            return 0, _shared.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS modules injected.`);
            return 0, _shared.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS module named "${name}".`);
            return 0, _shared.EMPTY_OBJ;
        }
        return mod;
    }
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const decorate = (t)=>{
    delete t.props.mode;
    return t;
};
const TransitionGroupImpl = /* @__PURE__ */ decorate({
    name: "TransitionGroup",
    props: /* @__PURE__ */ (0, _shared.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots }) {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        const state = (0, _runtimeCore.useTransitionState)();
        let prevChildren;
        let children;
        (0, _runtimeCore.onUpdated)(()=>{
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = "";
                const cb = el[moveCbKey] = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener("transitionend", cb);
                        el[moveCbKey] = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener("transitionend", cb);
            });
        });
        return ()=>{
            const rawProps = (0, _runtimeCore.toRaw)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || (0, _runtimeCore.Fragment);
            prevChildren = [];
            if (children) for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.el && child.el instanceof Element) {
                    prevChildren.push(child);
                    (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                    positionMap.set(child, child.el.getBoundingClientRect());
                }
            }
            children = slots.default ? (0, _runtimeCore.getTransitionRawChildren)(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                else if (child.type !== (0, _runtimeCore.Text)) (0, _runtimeCore.warn)(`<TransitionGroup> children must be keyed.`);
            }
            return (0, _runtimeCore.createVNode)(tag, null, children);
        };
    }
});
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el[moveCbKey]) el[moveCbKey]();
    if (el[enterCbKey]) el[enterCbKey]();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    const _vtc = el[vtcKey];
    if (_vtc) _vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c));
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return (0, _shared.isArray)(fn) ? (value)=>(0, _shared.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
    }
}
const assignKey = Symbol("_assign");
const vModelText = {
    created (el, { modifiers: { lazy, trim, number } }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        addEventListener(el, lazy ? "change" : "input", (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            if (castToNumber) domValue = (0, _shared.looseToNumber)(domValue);
            el[assignKey](domValue);
        });
        if (trim) addEventListener(el, "change", ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            addEventListener(el, "change", onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value }) {
        el.value = value == null ? "" : value;
    },
    beforeUpdate (el, { value, oldValue, modifiers: { lazy, trim, number } }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (el.composing) return;
        const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? (0, _shared.looseToNumber)(el.value) : el.value;
        const newValue = value == null ? "" : value;
        if (elValue === newValue) return;
        if (document.activeElement === el && el.type !== "range") {
            if (lazy && value === oldValue) return;
            if (trim && el.value.trim() === newValue) return;
        }
        el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el[assignKey];
            if ((0, _shared.isArray)(modelValue)) {
                const index = (0, _shared.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if ((0, _shared.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    let checked;
    if ((0, _shared.isArray)(value)) checked = (0, _shared.looseIndexOf)(value, vnode.props.value) > -1;
    else if ((0, _shared.isSet)(value)) checked = value.has(vnode.props.value);
    else {
        if (value === oldValue) return;
        checked = (0, _shared.looseEqual)(value, getCheckboxValue(el, true));
    }
    if (el.checked !== checked) el.checked = checked;
}
const vModelRadio = {
    created (el, { value }, vnode) {
        el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            el[assignKey](getValue(el));
        });
    },
    beforeUpdate (el, { value, oldValue }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value, modifiers: { number } }, vnode) {
        const isSetModel = (0, _shared.isSet)(value);
        addEventListener(el, "change", ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected).map((o)=>number ? (0, _shared.looseToNumber)(getValue(o)) : getValue(o));
            el[assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
            el._assigning = true;
            (0, _runtimeCore.nextTick)(()=>{
                el._assigning = false;
            });
        });
        el[assignKey] = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el[assignKey] = getModelAssigner(vnode);
    },
    updated (el, { value }) {
        if (!el._assigning) setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    const isArrayValue = (0, _shared.isArray)(value);
    if (isMultiple && !isArrayValue && !(0, _shared.isSet)(value)) {
        (0, _runtimeCore.warn)(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (isArrayValue) {
                const optionType = typeof optionValue;
                if (optionType === "string" || optionType === "number") option.selected = value.some((v)=>String(v) === String(optionValue));
                else option.selected = (0, _shared.looseIndexOf)(value, optionValue) > -1;
            } else option.selected = value.has(optionValue);
        } else if ((0, _shared.looseEqual)(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
function getValue(el) {
    return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "created");
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "updated");
    }
};
function resolveDynamicModel(tagName, type) {
    switch(tagName){
        case "SELECT":
            return vModelSelect;
        case "TEXTAREA":
            return vModelText;
        default:
            switch(type){
                case "checkbox":
                    return vModelCheckbox;
                case "radio":
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value })=>({
            value
        });
    vModelRadio.getSSRProps = ({ value }, vnode)=>{
        if (vnode.props && (0, _shared.looseEqual)(vnode.props.value, value)) return {
            checked: true
        };
    };
    vModelCheckbox.getSSRProps = ({ value }, vnode)=>{
        if ((0, _shared.isArray)(value)) {
            if (vnode.props && (0, _shared.looseIndexOf)(value, vnode.props.value) > -1) return {
                checked: true
            };
        } else if ((0, _shared.isSet)(value)) {
            if (vnode.props && value.has(vnode.props.value)) return {
                checked: true
            };
        } else if (value) return {
            checked: true
        };
    };
    vModelDynamic.getSSRProps = (binding, vnode)=>{
        if (typeof vnode.type !== "string") return;
        const modelToUse = resolveDynamicModel(// resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) return modelToUse.getSSRProps(binding, vnode);
    };
}
const systemModifiers = [
    "ctrl",
    "shift",
    "alt",
    "meta"
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation(),
    prevent: (e)=>e.preventDefault(),
    self: (e)=>e.target !== e.currentTarget,
    ctrl: (e)=>!e.ctrlKey,
    shift: (e)=>!e.shiftKey,
    alt: (e)=>!e.altKey,
    meta: (e)=>!e.metaKey,
    left: (e)=>"button" in e && e.button !== 0,
    middle: (e)=>"button" in e && e.button !== 1,
    right: (e)=>"button" in e && e.button !== 2,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers)=>{
    const cache = fn._withMods || (fn._withMods = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    });
};
const keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
};
const withKeys = (fn, modifiers)=>{
    const cache = fn._withKeys || (fn._withKeys = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event)=>{
        if (!("key" in event)) return;
        const eventKey = (0, _shared.hyphenate)(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey)) return fn(event);
    });
};
const rendererOptions = /* @__PURE__ */ (0, _shared.extend)({
    patchProp
}, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = (0, _runtimeCore.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : (0, _runtimeCore.createHydrationRenderer)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!(0, _shared.isFunction)(component) && !component.render && !component.template) component.template = container.innerHTML;
        if (container.nodeType === 1) container.textContent = "";
        const proxy = mount(container, false, resolveRootNamespace(container));
        if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, resolveRootNamespace(container));
    };
    return app;
};
function resolveRootNamespace(container) {
    if (container instanceof SVGElement) return "svg";
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
        value: (tag)=>(0, _shared.isHTMLTag)(tag) || (0, _shared.isSVGTag)(tag) || (0, _shared.isMathMLTag)(tag),
        writable: false
    });
}
function injectCompilerOptionsCheck(app) {
    if ((0, _runtimeCore.isRuntimeOnly)()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, "isCustomElement", {
            get () {
                return isCustomElement;
            },
            set () {
                (0, _runtimeCore.warn)(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
        Object.defineProperty(app.config, "compilerOptions", {
            get () {
                (0, _runtimeCore.warn)(msg);
                return compilerOptions;
            },
            set () {
                (0, _runtimeCore.warn)(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if ((0, _shared.isString)(container)) {
        const res = document.querySelector(container);
        if (!res) (0, _runtimeCore.warn)(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if ((0, window.ShadowRoot) && container instanceof window.ShadowRoot && container.mode === "closed") (0, _runtimeCore.warn)(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
let ssrDirectiveInitialized = false;
const initDirectivesForSSR = ()=>{
    if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
    }
};

},{"@vue/runtime-core":"9q8Vb","@vue/shared":"9cuv0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9q8Vb":[function(require,module,exports,__globalThis) {
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>(0, _reactivity.EffectScope));
parcelHelpers.export(exports, "ReactiveEffect", ()=>(0, _reactivity.ReactiveEffect));
parcelHelpers.export(exports, "TrackOpTypes", ()=>(0, _reactivity.TrackOpTypes));
parcelHelpers.export(exports, "TriggerOpTypes", ()=>(0, _reactivity.TriggerOpTypes));
parcelHelpers.export(exports, "customRef", ()=>(0, _reactivity.customRef));
parcelHelpers.export(exports, "effect", ()=>(0, _reactivity.effect));
parcelHelpers.export(exports, "effectScope", ()=>(0, _reactivity.effectScope));
parcelHelpers.export(exports, "getCurrentScope", ()=>(0, _reactivity.getCurrentScope));
parcelHelpers.export(exports, "getCurrentWatcher", ()=>(0, _reactivity.getCurrentWatcher));
parcelHelpers.export(exports, "isProxy", ()=>(0, _reactivity.isProxy));
parcelHelpers.export(exports, "isReactive", ()=>(0, _reactivity.isReactive));
parcelHelpers.export(exports, "isReadonly", ()=>(0, _reactivity.isReadonly));
parcelHelpers.export(exports, "isRef", ()=>(0, _reactivity.isRef));
parcelHelpers.export(exports, "isShallow", ()=>(0, _reactivity.isShallow));
parcelHelpers.export(exports, "markRaw", ()=>(0, _reactivity.markRaw));
parcelHelpers.export(exports, "onScopeDispose", ()=>(0, _reactivity.onScopeDispose));
parcelHelpers.export(exports, "onWatcherCleanup", ()=>(0, _reactivity.onWatcherCleanup));
parcelHelpers.export(exports, "proxyRefs", ()=>(0, _reactivity.proxyRefs));
parcelHelpers.export(exports, "reactive", ()=>(0, _reactivity.reactive));
parcelHelpers.export(exports, "readonly", ()=>(0, _reactivity.readonly));
parcelHelpers.export(exports, "ref", ()=>(0, _reactivity.ref));
parcelHelpers.export(exports, "shallowReactive", ()=>(0, _reactivity.shallowReactive));
parcelHelpers.export(exports, "shallowReadonly", ()=>(0, _reactivity.shallowReadonly));
parcelHelpers.export(exports, "shallowRef", ()=>(0, _reactivity.shallowRef));
parcelHelpers.export(exports, "stop", ()=>(0, _reactivity.stop));
parcelHelpers.export(exports, "toRaw", ()=>(0, _reactivity.toRaw));
parcelHelpers.export(exports, "toRef", ()=>(0, _reactivity.toRef));
parcelHelpers.export(exports, "toRefs", ()=>(0, _reactivity.toRefs));
parcelHelpers.export(exports, "toValue", ()=>(0, _reactivity.toValue));
parcelHelpers.export(exports, "triggerRef", ()=>(0, _reactivity.triggerRef));
parcelHelpers.export(exports, "unref", ()=>(0, _reactivity.unref));
parcelHelpers.export(exports, "camelize", ()=>(0, _shared.camelize));
parcelHelpers.export(exports, "capitalize", ()=>(0, _shared.capitalize));
parcelHelpers.export(exports, "normalizeClass", ()=>(0, _shared.normalizeClass));
parcelHelpers.export(exports, "normalizeProps", ()=>(0, _shared.normalizeProps));
parcelHelpers.export(exports, "normalizeStyle", ()=>(0, _shared.normalizeStyle));
parcelHelpers.export(exports, "toDisplayString", ()=>(0, _shared.toDisplayString));
parcelHelpers.export(exports, "toHandlerKey", ()=>(0, _shared.toHandlerKey));
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition);
parcelHelpers.export(exports, "BaseTransitionPropsValidators", ()=>BaseTransitionPropsValidators);
parcelHelpers.export(exports, "Comment", ()=>Comment);
parcelHelpers.export(exports, "DeprecationTypes", ()=>DeprecationTypes);
parcelHelpers.export(exports, "ErrorCodes", ()=>ErrorCodes);
parcelHelpers.export(exports, "ErrorTypeStrings", ()=>ErrorTypeStrings);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive);
parcelHelpers.export(exports, "Static", ()=>Static);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "Teleport", ()=>Teleport);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "assertNumber", ()=>assertNumber);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "createBlock", ()=>createBlock);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer);
parcelHelpers.export(exports, "createPropsRestProxy", ()=>createPropsRestProxy);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer);
parcelHelpers.export(exports, "createSlots", ()=>createSlots);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode);
parcelHelpers.export(exports, "createVNode", ()=>createVNode);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose);
parcelHelpers.export(exports, "defineModel", ()=>defineModel);
parcelHelpers.export(exports, "defineOptions", ()=>defineOptions);
parcelHelpers.export(exports, "defineProps", ()=>defineProps);
parcelHelpers.export(exports, "defineSlots", ()=>defineSlots);
parcelHelpers.export(exports, "devtools", ()=>devtools);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "handleError", ()=>handleError);
parcelHelpers.export(exports, "hasInjectionContext", ()=>hasInjectionContext);
parcelHelpers.export(exports, "hydrateOnIdle", ()=>hydrateOnIdle);
parcelHelpers.export(exports, "hydrateOnInteraction", ()=>hydrateOnInteraction);
parcelHelpers.export(exports, "hydrateOnMediaQuery", ()=>hydrateOnMediaQuery);
parcelHelpers.export(exports, "hydrateOnVisible", ()=>hydrateOnVisible);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter);
parcelHelpers.export(exports, "inject", ()=>inject);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly);
parcelHelpers.export(exports, "isVNode", ()=>isVNode);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults);
parcelHelpers.export(exports, "mergeModels", ()=>mergeModels);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "onActivated", ()=>onActivated);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured);
parcelHelpers.export(exports, "onMounted", ()=>onMounted);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated);
parcelHelpers.export(exports, "openBlock", ()=>openBlock);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId);
parcelHelpers.export(exports, "provide", ()=>provide);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler);
parcelHelpers.export(exports, "renderList", ()=>renderList);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs);
parcelHelpers.export(exports, "useId", ()=>useId);
parcelHelpers.export(exports, "useModel", ()=>useModel);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext);
parcelHelpers.export(exports, "useSlots", ()=>useSlots);
parcelHelpers.export(exports, "useTemplateRef", ()=>useTemplateRef);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState);
parcelHelpers.export(exports, "version", ()=>version);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "watch", ()=>watch);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext);
parcelHelpers.export(exports, "withCtx", ()=>withCtx);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives);
parcelHelpers.export(exports, "withMemo", ()=>withMemo);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId);
var _reactivity = require("@vue/reactivity");
var _shared = require("@vue/shared");
const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
let isWarning = false;
function warn$1(msg, ...args) {
    if (isWarning) return;
    isWarning = true;
    (0, _reactivity.pauseTracking)();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11, [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a)=>{
            var _a, _b;
            return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(({ vnode })=>`at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`
`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    (0, _reactivity.resetTracking)();
    isWarning = false;
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) return [];
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `
`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
function formatProp(key, value, raw) {
    if ((0, _shared.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if ((0, _reactivity.isRef)(value)) {
        value = formatProp(key, (0, _reactivity.toRaw)(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if ((0, _shared.isFunction)(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = (0, _reactivity.toRaw)(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
function assertNumber(val, type) {
    if (val === void 0) return;
    else if (typeof val !== "number") warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) warn$1(`${type} is NaN - the duration expression might be incorrect.`);
}
const ErrorCodes = {
    "SETUP_FUNCTION": 0,
    "0": "SETUP_FUNCTION",
    "RENDER_FUNCTION": 1,
    "1": "RENDER_FUNCTION",
    "NATIVE_EVENT_HANDLER": 5,
    "5": "NATIVE_EVENT_HANDLER",
    "COMPONENT_EVENT_HANDLER": 6,
    "6": "COMPONENT_EVENT_HANDLER",
    "VNODE_HOOK": 7,
    "7": "VNODE_HOOK",
    "DIRECTIVE_HOOK": 8,
    "8": "DIRECTIVE_HOOK",
    "TRANSITION_HOOK": 9,
    "9": "TRANSITION_HOOK",
    "APP_ERROR_HANDLER": 10,
    "10": "APP_ERROR_HANDLER",
    "APP_WARN_HANDLER": 11,
    "11": "APP_WARN_HANDLER",
    "FUNCTION_REF": 12,
    "12": "FUNCTION_REF",
    "ASYNC_COMPONENT_LOADER": 13,
    "13": "ASYNC_COMPONENT_LOADER",
    "SCHEDULER": 14,
    "14": "SCHEDULER",
    "COMPONENT_UPDATE": 15,
    "15": "COMPONENT_UPDATE",
    "APP_UNMOUNT_CLEANUP": 16,
    "16": "APP_UNMOUNT_CLEANUP"
};
const ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush",
    [15]: "component update",
    [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
    try {
        return args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if ((0, _shared.isFunction)(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && (0, _shared.isPromise)(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    if ((0, _shared.isArray)(fn)) {
        const values = [];
        for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
        return values;
    } else warn$1(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`);
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || (0, _shared.EMPTY_OBJ);
    if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = (0, ErrorTypeStrings$1[type]);
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        if (errorHandler) {
            (0, _reactivity.pauseTracking)();
            callWithErrorHandling(errorHandler, null, 10, [
                err,
                exposedInstance,
                errorInfo
            ]);
            (0, _reactivity.resetTracking)();
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
    {
        const info = ErrorTypeStrings$1[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        if (throwInDev) throw err;
        else console.error(err);
    }
}
const queue = [];
let flushIndex = -1;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJob = queue[middle];
        const middleJobId = getId(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.flags & 2) start = middle + 1;
        else end = middle;
    }
    return start;
}
function queueJob(job) {
    if (!(job.flags & 1)) {
        const jobId = getId(job);
        const lastJob = queue[queue.length - 1];
        if (!lastJob || // fast path when the job id is larger than the tail
        !(job.flags & 2) && jobId >= getId(lastJob)) queue.push(job);
        else queue.splice(findInsertionIndex(jobId), 0, job);
        job.flags |= 1;
        queueFlush();
    }
}
function queueFlush() {
    if (!currentFlushPromise) currentFlushPromise = resolvedPromise.then(flushJobs);
}
function queuePostFlushCb(cb) {
    if (!(0, _shared.isArray)(cb)) {
        if (activePostFlushCbs && cb.id === -1) activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
        else if (!(cb.flags & 1)) {
            pendingPostFlushCbs.push(cb);
            cb.flags |= 1;
        }
    } else pendingPostFlushCbs.push(...cb);
    queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
    seen = seen || /* @__PURE__ */ new Map();
    for(; i < queue.length; i++){
        const cb = queue[i];
        if (cb && cb.flags & 2) {
            if (instance && cb.id !== instance.uid) continue;
            if (checkRecursiveUpdates(seen, cb)) continue;
            queue.splice(i, 1);
            i--;
            if (cb.flags & 4) cb.flags &= -2;
            cb();
            if (!(cb.flags & 4)) cb.flags &= -2;
        }
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ].sort((a, b)=>getId(a) - getId(b));
        pendingPostFlushCbs.length = 0;
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || /* @__PURE__ */ new Map();
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            const cb = activePostFlushCbs[postFlushIndex];
            if (checkRecursiveUpdates(seen, cb)) continue;
            if (cb.flags & 4) cb.flags &= -2;
            if (!(cb.flags & 8)) cb();
            cb.flags &= -2;
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
    seen = seen || /* @__PURE__ */ new Map();
    const check = (job)=>checkRecursiveUpdates(seen, job);
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && !(job.flags & 8)) {
                if (check(job)) continue;
                if (job.flags & 4) job.flags &= -2;
                callWithErrorHandling(job, job.i, job.i ? 15 : 14);
                if (!(job.flags & 4)) job.flags &= -2;
            }
        }
    } finally{
        for(; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job) job.flags &= -2;
        }
        flushIndex = -1;
        queue.length = 0;
        flushPostFlushCbs(seen);
        currentFlushPromise = null;
        if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    const count = seen.get(fn) || 0;
    if (count > RECURSION_LIMIT) {
        const instance = fn.i;
        const componentName = instance && getComponentName(instance.type);
        handleError(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
        return true;
    }
    seen.set(fn, count + 1);
    return false;
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Map();
(0, _shared.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
};
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) return false;
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: /* @__PURE__ */ new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [
        ...record.instances
    ];
    for(let i = 0; i < instances.length; i++){
        const instance = instances[i];
        const oldComp = normalizeClassComponent(instance.type);
        let dirtyInstances = hmrDirtyComponents.get(oldComp);
        if (!dirtyInstances) {
            if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
            hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
        }
        dirtyInstances.add(instance);
        instance.appContext.propsCache.delete(instance.type);
        instance.appContext.emitsCache.delete(instance.type);
        instance.appContext.optionsCache.delete(instance.type);
        if (instance.ceReload) {
            dirtyInstances.add(instance);
            instance.ceReload(newComp.styles);
            dirtyInstances.delete(instance);
        } else if (instance.parent) queueJob(()=>{
            isHmrUpdating = true;
            instance.parent.update();
            isHmrUpdating = false;
            dirtyInstances.delete(instance);
        });
        else if (instance.appContext.reload) instance.appContext.reload();
        else if (typeof window !== "undefined") window.location.reload();
        else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
        if (instance.root.ce && instance !== instance.root) instance.root.ce._removeChildStyle(oldComp);
    }
    queuePostFlushCb(()=>{
        hmrDirtyComponents.clear();
    });
}
function updateComponentDef(oldComp, newComp) {
    (0, _shared.extend)(oldComp, newComp);
    for(const key in oldComp)if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
        }
    };
}
let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
    if (devtools$1) devtools$1.emit(event, ...args);
    else if (!devtoolsNotInstalled) buffer.push({
        event,
        args
    });
}
function setDevtoolsHook$1(hook, target) {
    var _a, _b;
    devtools$1 = hook;
    if (devtools$1) {
        devtools$1.enabled = true;
        buffer.forEach(({ event, args })=>devtools$1.emit(event, ...args));
        buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            setDevtoolsHook$1(newHook, target);
        });
        setTimeout(()=>{
            if (!devtools$1) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3e3);
    } else {
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit$1("app:init" /* APP_INIT */ , app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit$1("app:unmount" /* APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
const devtoolsComponentRemoved = (component)=>{
    if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !devtools$1.cleanupBuffer(component)) _devtoolsComponentRemoved(component);
};
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit$1("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
function pushScopeId(id) {
    currentScopeId = id;
}
function popScopeId() {
    currentScopeId = null;
}
const withScopeId = (_id)=>withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn;
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
            res = fn(...args);
        } finally{
            setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) setBlockTracking(1);
        }
        devtoolsComponentUpdated(ctx);
        return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
function validateDirectiveName(name) {
    if ((0, _shared.isBuiltInDirective)(name)) warn$1("Do not use built-in directive ids as custom directive id: " + name);
}
function withDirectives(vnode, directives) {
    if (currentRenderingInstance === null) {
        warn$1(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = getComponentPublicInstance(currentRenderingInstance);
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = (0, _shared.EMPTY_OBJ)] = directives[i];
        if (dir) {
            if ((0, _shared.isFunction)(dir)) dir = {
                mounted: dir,
                updated: dir
            };
            if (dir.deep) (0, _reactivity.traverse)(value);
            bindings.push({
                dir,
                instance,
                value,
                oldValue: void 0,
                arg,
                modifiers
            });
        }
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            (0, _reactivity.pauseTracking)();
            callWithAsyncErrorHandling(hook, instance, 8, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            (0, _reactivity.resetTracking)();
        }
    }
}
const TeleportEndKey = Symbol("_vte");
const isTeleport = (type)=>type.__isTeleport;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === "");
const isTeleportDeferred = (props)=>props && (props.defer || props.defer === "");
const isTargetSVG = (target)=>typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target)=>typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if ((0, _shared.isString)(targetSelector)) {
        if (!select) {
            warn$1(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target && !isTeleportDisabled(props)) warn$1(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn$1(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    name: "Teleport",
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const mount = (container2, anchor2)=>{
                if (shapeFlag & 16) {
                    if (parentComponent && parentComponent.isCE) parentComponent.ce._teleportTarget = container2;
                    mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                }
            };
            const mountToTarget = ()=>{
                const target = n2.target = resolveTarget(n2.props, querySelector);
                const targetAnchor = prepareAnchor(target, n2, createText, insert);
                if (target) {
                    if (namespace !== "svg" && isTargetSVG(target)) namespace = "svg";
                    else if (namespace !== "mathml" && isTargetMathML(target)) namespace = "mathml";
                    if (!disabled) {
                        mount(target, targetAnchor);
                        updateCssVars(n2, false);
                    }
                } else if (!disabled) warn$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
            };
            if (disabled) {
                mount(container, mainAnchor);
                updateCssVars(n2, true);
            }
            if (isTeleportDeferred(n2.props)) queuePostRenderEffect(()=>{
                mountToTarget();
                n2.el.__isMounted = true;
            }, parentSuspense);
            else mountToTarget();
        } else {
            if (isTeleportDeferred(n2.props) && !n1.el.__isMounted) {
                queuePostRenderEffect(()=>{
                    TeleportImpl.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                    delete n1.el.__isMounted;
                }, parentSuspense);
                return;
            }
            n2.el = n1.el;
            n2.targetStart = n1.targetStart;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
            else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
            if (dynamicChildren) {
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
                else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
            } else {
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0);
                    else warn$1("Invalid Teleport target on update:", target, `(${typeof target})`);
                } else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
            }
            updateCssVars(n2, disabled);
        }
    },
    remove (vnode, parentComponent, parentSuspense, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetStart, targetAnchor, target, props } = vnode;
        if (target) {
            hostRemove(targetStart);
            hostRemove(targetAnchor);
        }
        doRemove && hostRemove(anchor);
        if (shapeFlag & 16) {
            const shouldRemove = doRemove || !isTeleportDisabled(props);
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
    if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) insert(el, container, parentAnchor);
    if (!isReorder || isTeleportDisabled(props)) {
        if (shapeFlag & 16) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2);
    }
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector, insert, createText } }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        const disabled = isTeleportDisabled(vnode.props);
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16) {
            if (disabled) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetStart = targetNode;
                vnode.targetAnchor = targetNode && nextSibling(targetNode);
            } else {
                vnode.anchor = nextSibling(node);
                let targetAnchor = targetNode;
                while(targetAnchor){
                    if (targetAnchor && targetAnchor.nodeType === 8) {
                        if (targetAnchor.data === "teleport start anchor") vnode.targetStart = targetAnchor;
                        else if (targetAnchor.data === "teleport anchor") {
                            vnode.targetAnchor = targetAnchor;
                            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                            break;
                        }
                    }
                    targetAnchor = nextSibling(targetAnchor);
                }
                if (!vnode.targetAnchor) prepareAnchor(target, vnode, createText, insert);
                hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
        updateCssVars(vnode, disabled);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
    const ctx = vnode.ctx;
    if (ctx && ctx.ut) {
        let node, anchor;
        if (isDisabled) {
            node = vnode.el;
            anchor = vnode.anchor;
        } else {
            node = vnode.targetStart;
            anchor = vnode.targetAnchor;
        }
        while(node && node !== anchor){
            if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
            node = node.nextSibling;
        }
        ctx.ut();
    }
}
function prepareAnchor(target, vnode, createText, insert) {
    const targetStart = vnode.targetStart = createText("");
    const targetAnchor = vnode.targetAnchor = createText("");
    targetStart[TeleportEndKey] = targetAnchor;
    if (target) {
        insert(targetStart, target);
        insert(targetAnchor, target);
    }
    return targetAnchor;
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey = Symbol("_enterCb");
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionPropsValidators = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
};
const recursiveGetSubtree = (instance)=>{
    const subTree = instance.subTree;
    return subTree.component ? recursiveGetSubtree(subTree.component) : subTree;
};
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: BaseTransitionPropsValidators,
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            const child = findNonCommentChild(children);
            const rawProps = (0, _reactivity.toRaw)(props);
            const { mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") warn$1(`invalid <transition> mode: ${mode}`);
            if (state.isLeaving) return emptyPlaceholder(child);
            const innerChild = getInnerChild$1(child);
            if (!innerChild) return emptyPlaceholder(child);
            let enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance, // #11061, ensure enterHooks is fresh after clone
            (hooks)=>enterHooks = hooks);
            if (innerChild.type !== Comment) setTransitionHooks(innerChild, enterHooks);
            let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
            if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild) && recursiveGetSubtree(instance).type !== Comment) {
                let leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                setTransitionHooks(oldInnerChild, leavingHooks);
                if (mode === "out-in" && innerChild.type !== Comment) {
                    state.isLeaving = true;
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        if (!(instance.job.flags & 8)) instance.update();
                        delete leavingHooks.afterLeave;
                        oldInnerChild = void 0;
                    };
                    return emptyPlaceholder(child);
                } else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    el[leaveCbKey] = ()=>{
                        earlyRemove();
                        el[leaveCbKey] = void 0;
                        delete enterHooks.delayedLeave;
                        oldInnerChild = void 0;
                    };
                    enterHooks.delayedLeave = ()=>{
                        delayedLeave();
                        delete enterHooks.delayedLeave;
                        oldInnerChild = void 0;
                    };
                };
                else oldInnerChild = void 0;
            } else if (oldInnerChild) oldInnerChild = void 0;
            return child;
        };
    }
};
function findNonCommentChild(children) {
    let child = children[0];
    if (children.length > 1) {
        let hasFound = false;
        for (const c of children)if (c.type !== Comment) {
            if (hasFound) {
                warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                break;
            }
            child = c;
            hasFound = true;
        }
    }
    return child;
}
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance, postClone) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9, args);
    };
    const callAsyncHook = (hook, args)=>{
        const done = args[1];
        callHook(hook, args);
        if ((0, _shared.isArray)(hook)) {
            if (hook.every((hook2)=>hook2.length <= 1)) done();
        } else if (hook.length <= 1) done();
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            if (el[leaveCbKey]) el[leaveCbKey](true);
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
            callHook(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el[enterCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el[enterCbKey] = void 0;
            };
            if (hook) callAsyncHook(hook, [
                el,
                done
            ]);
            else done();
        },
        leave (el, remove) {
            const key2 = String(vnode.key);
            if (el[enterCbKey]) el[enterCbKey](true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el[leaveCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el[leaveCbKey] = void 0;
                if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
            };
            leavingVNodesCache[key2] = vnode;
            if (onLeave) callAsyncHook(onLeave, [
                el,
                done
            ]);
            else done();
        },
        clone (vnode2) {
            const hooks2 = resolveTransitionHooks(vnode2, props, state, instance, postClone);
            if (postClone) postClone(hooks2);
            return hooks2;
        }
    };
    return hooks;
}
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getInnerChild$1(vnode) {
    if (!isKeepAlive(vnode)) {
        if (isTeleport(vnode.type) && vnode.children) return findNonCommentChild(vnode.children);
        return vnode;
    }
    if (0, vnode.component) return vnode.component.subTree;
    const { shapeFlag, children } = vnode;
    if (children) {
        if (shapeFlag & 16) return children[0];
        if (shapeFlag & 32 && (0, _shared.isFunction)(children.default)) return children.default();
    }
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
        vnode.transition = hooks;
        setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        let child = children[i];
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === Fragment) {
            if (child.patchFlag & 128) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        } else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, {
            key
        }) : child);
    }
    if (keyedFragmentCount > 1) for(let i = 0; i < ret.length; i++)ret[i].patchFlag = -2;
    return ret;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
    return (0, _shared.isFunction)(options) ? // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (()=>(0, _shared.extend)({
            name: options.name
        }, extraOptions, {
            setup: options
        }))() : options;
}
function useId() {
    const i = getCurrentInstance();
    if (i) return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
    else warn$1(`useId() is called when there is no active component instance to be associated with.`);
    return "";
}
function markAsyncBoundary(instance) {
    instance.ids = [
        instance.ids[0] + instance.ids[2]++ + "-",
        0,
        0
    ];
}
const knownTemplateRefs = /* @__PURE__ */ new WeakSet();
function useTemplateRef(key) {
    const i = getCurrentInstance();
    const r = (0, _reactivity.shallowRef)(null);
    if (i) {
        const refs = i.refs === (0, _shared.EMPTY_OBJ) ? i.refs = {} : i.refs;
        let desc;
        if ((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable) warn$1(`useTemplateRef('${key}') already exists.`);
        else Object.defineProperty(refs, key, {
            enumerable: true,
            get: ()=>r.value,
            set: (val)=>r.value = val
        });
    } else warn$1(`useTemplateRef() is called when there is no active component instance to be associated with.`);
    const ret = (0, _reactivity.readonly)(r);
    knownTemplateRefs.add(ret);
    return ret;
}
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if ((0, _shared.isArray)(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && ((0, _shared.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
        if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
        return;
    }
    const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (!owner) {
        warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === (0, _shared.EMPTY_OBJ) ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    const rawSetupState = (0, _reactivity.toRaw)(setupState);
    const canSetSetupRef = setupState === (0, _shared.EMPTY_OBJ) ? ()=>false : (key)=>{
        if ((0, _shared.hasOwn)(rawSetupState, key) && !(0, _reactivity.isRef)(rawSetupState[key])) warn$1(`Template ref "${key}" used on a non-ref value. It will not work in the production build.`);
        if (knownTemplateRefs.has(rawSetupState[key])) return false;
        return (0, _shared.hasOwn)(rawSetupState, key);
    };
    if (oldRef != null && oldRef !== ref) {
        if ((0, _shared.isString)(oldRef)) {
            refs[oldRef] = null;
            if (canSetSetupRef(oldRef)) setupState[oldRef] = null;
        } else if ((0, _reactivity.isRef)(oldRef)) oldRef.value = null;
    }
    if ((0, _shared.isFunction)(ref)) callWithErrorHandling(ref, owner, 12, [
        value,
        refs
    ]);
    else {
        const _isString = (0, _shared.isString)(ref);
        const _isRef = (0, _reactivity.isRef)(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? canSetSetupRef(ref) ? setupState[ref] : refs[ref] : ref.value;
                    if (isUnmount) (0, _shared.isArray)(existing) && (0, _shared.remove)(existing, refValue);
                    else {
                        if (!(0, _shared.isArray)(existing)) {
                            if (_isString) {
                                refs[ref] = [
                                    refValue
                                ];
                                if (canSetSetupRef(ref)) setupState[ref] = refs[ref];
                            } else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if (canSetSetupRef(ref)) setupState[ref] = value;
                } else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
    }
}
let hasLoggedMismatchError = false;
const logMismatchError = ()=>{
    if (hasLoggedMismatchError) return;
    console.error("Hydration completed but contains mismatches.");
    hasLoggedMismatchError = true;
};
const isSVGContainer = (container)=>container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container)=>container.namespaceURI.includes("MathML");
const getContainerType = (container)=>{
    if (container.nodeType !== 1) return void 0;
    if (isSVGContainer(container)) return "svg";
    if (isMathMLContainer(container)) return "mathml";
    return void 0;
};
const isComment = (node)=>node.nodeType === 8;
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const isFragmentStart = isComment(node) && node.data === "[";
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type, ref, shapeFlag, patchFlag } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        (0, _shared.def)(node, "__vnode", vnode, true);
        (0, _shared.def)(node, "__vueParentComponent", parentComponent, true);
        if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch(type){
            case Text:
                if (domType !== 3) {
                    if (vnode.children === "") {
                        insert(vnode.el = createText(""), parentNode(node), node);
                        nextNode = node;
                    } else nextNode = onMismatch();
                } else {
                    if (node.data !== vnode.children) {
                        warn$1(`Hydration text mismatch in`, node.parentNode, `
  - rendered on server: ${JSON.stringify(node.data)}
  - expected on client: ${JSON.stringify(vnode.children)}`);
                        logMismatchError();
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (isTemplateNode(node)) {
                    nextNode = nextSibling(node);
                    replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
                } else if (domType !== 8 || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (isFragmentStart) {
                    node = nextSibling(node);
                    domType = node.nodeType;
                }
                if (domType === 1 || domType === 3) {
                    nextNode = node;
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return isFragmentStart ? nextSibling(nextNode) : nextNode;
                } else onMismatch();
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) {
                    if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6) {
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    if (isFragmentStart) nextNode = locateClosingAnchor(node);
                    else if (isComment(node) && node.data === "teleport start") nextNode = locateClosingAnchor(node, node.data, "teleport end");
                    else nextNode = nextSibling(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, getContainerType(container), optimized);
                    if (isAsyncWrapper(vnode) && !vnode.type.__asyncResolved) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64) {
                    if (domType !== 8) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
        const forcePatch = type === "input" || type === "option";
        {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
            let needCallTransitionHooks = false;
            if (isTemplateNode(el)) {
                needCallTransitionHooks = needTransition(null, // no need check parentSuspense in hydration
                transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
                const content = el.content.firstChild;
                if (needCallTransitionHooks) transition.beforeEnter(content);
                replaceNode(content, el, parentComponent);
                vnode.el = el = content;
            }
            if (shapeFlag & 16 && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while(next){
                    if (!isMismatchAllowed(el, 1 /* CHILDREN */ )) {
                        if (!hasWarned) {
                            warn$1(`Hydration children mismatch on`, el, `
Server rendered element contains more child nodes than client vdom.`);
                            hasWarned = true;
                        }
                        logMismatchError();
                    }
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8) {
                let clientText = vnode.children;
                if (clientText[0] === "\n" && (el.tagName === "PRE" || el.tagName === "TEXTAREA")) clientText = clientText.slice(1);
                if (el.textContent !== clientText) {
                    if (!isMismatchAllowed(el, 0 /* TEXT */ )) {
                        warn$1(`Hydration text content mismatch on`, el, `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`);
                        logMismatchError();
                    }
                    el.textContent = vnode.children;
                }
            }
            if (props) {
                const isCustomElement = el.tagName.includes("-");
                for(const key in props){
                    if (// #11189 skip if this node has directives that have created hooks
                    // as it could have mutated the DOM in any possible way
                    !(dirs && dirs.some((d)=>d.dir.created)) && propHasMismatch(el, key, props[key], vnode, parentComponent)) logMismatchError();
                    if (forcePatch && (key.endsWith("value") || key === "indeterminate") || (0, _shared.isOn)(key) && !(0, _shared.isReservedProp)(key) || // force hydrate v-bind with .prop modifiers
                    key[0] === "." || isCustomElement) patchProp(el, key, null, props[key], void 0, parentComponent);
                }
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            const isText = vnode.type === Text;
            if (node) {
                if (isText && !optimized) {
                    if (i + 1 < l && normalizeVNode(children[i + 1]).type === Text) {
                        insert(createText(node.data.slice(vnode.children.length)), container, nextSibling(node));
                        node.data = vnode.children;
                    }
                }
                node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            } else if (isText && !vnode.children) insert(vnode.el = createText(""), container);
            else {
                if (!isMismatchAllowed(container, 1 /* CHILDREN */ )) {
                    if (!hasWarned) {
                        warn$1(`Hydration children mismatch on`, container, `
Server rendered element contains fewer child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    logMismatchError();
                }
                patch(null, vnode, container, null, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
        else {
            logMismatchError();
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        if (!isMismatchAllowed(node.parentElement, 1 /* CHILDREN */ )) {
            warn$1(`Hydration node mismatch:
- rendered on server:`, node, node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``, `
- expected on client:`, vnode.type);
            logMismatchError();
        }
        vnode.el = null;
        if (isFragment) {
            const end = locateClosingAnchor(node);
            while(true){
                const next2 = nextSibling(node);
                if (next2 && next2 !== end) remove(next2);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
        if (parentComponent) {
            parentComponent.vnode.el = vnode.el;
            updateHOCHostEl(parentComponent, vnode.el);
        }
        return next;
    };
    const locateClosingAnchor = (node, open = "[", close = "]")=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === open) match++;
                if (node.data === close) {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    const replaceNode = (newNode, oldNode, parentComponent)=>{
        const parentNode2 = oldNode.parentNode;
        if (parentNode2) parentNode2.replaceChild(newNode, oldNode);
        let parent = parentComponent;
        while(parent){
            if (parent.vnode.el === oldNode) parent.vnode.el = parent.subTree.el = newNode;
            parent = parent.parent;
        }
    };
    const isTemplateNode = (node)=>{
        return node.nodeType === 1 && node.tagName === "TEMPLATE";
    };
    return [
        hydrate,
        hydrateNode
    ];
}
function propHasMismatch(el, key, clientValue, vnode, instance) {
    let mismatchType;
    let mismatchKey;
    let actual;
    let expected;
    if (key === "class") {
        actual = el.getAttribute("class");
        expected = (0, _shared.normalizeClass)(clientValue);
        if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) {
            mismatchType = 2 /* CLASS */ ;
            mismatchKey = `class`;
        }
    } else if (key === "style") {
        actual = el.getAttribute("style") || "";
        expected = (0, _shared.isString)(clientValue) ? clientValue : (0, _shared.stringifyStyle)((0, _shared.normalizeStyle)(clientValue));
        const actualMap = toStyleMap(actual);
        const expectedMap = toStyleMap(expected);
        if (vnode.dirs) {
            for (const { dir, value } of vnode.dirs)if (dir.name === "show" && !value) expectedMap.set("display", "none");
        }
        if (instance) resolveCssVars(instance, vnode, expectedMap);
        if (!isMapEqual(actualMap, expectedMap)) {
            mismatchType = 3 /* STYLE */ ;
            mismatchKey = "style";
        }
    } else if (el instanceof SVGElement && (0, _shared.isKnownSvgAttr)(key) || el instanceof HTMLElement && ((0, _shared.isBooleanAttr)(key) || (0, _shared.isKnownHtmlAttr)(key))) {
        if ((0, _shared.isBooleanAttr)(key)) {
            actual = el.hasAttribute(key);
            expected = (0, _shared.includeBooleanAttr)(clientValue);
        } else if (clientValue == null) {
            actual = el.hasAttribute(key);
            expected = false;
        } else {
            if (el.hasAttribute(key)) actual = el.getAttribute(key);
            else if (key === "value" && el.tagName === "TEXTAREA") actual = el.value;
            else actual = false;
            expected = (0, _shared.isRenderableAttrValue)(clientValue) ? String(clientValue) : false;
        }
        if (actual !== expected) {
            mismatchType = 4 /* ATTRIBUTE */ ;
            mismatchKey = key;
        }
    }
    if (mismatchType != null && !isMismatchAllowed(el, mismatchType)) {
        const format = (v1)=>v1 === false ? `(not rendered)` : `${mismatchKey}="${v1}"`;
        const preSegment = `Hydration ${MismatchTypeString[mismatchType]} mismatch on`;
        const postSegment = `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
        warn$1(preSegment, el, postSegment);
        return true;
    }
    return false;
}
function toClassSet(str) {
    return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const s of a){
        if (!b.has(s)) return false;
    }
    return true;
}
function toStyleMap(str) {
    const styleMap = /* @__PURE__ */ new Map();
    for (const item of str.split(";")){
        let [key, value] = item.split(":");
        key = key.trim();
        value = value && value.trim();
        if (key && value) styleMap.set(key, value);
    }
    return styleMap;
}
function isMapEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const [key, value] of a){
        if (value !== b.get(key)) return false;
    }
    return true;
}
function resolveCssVars(instance, vnode, expectedMap) {
    const root = instance.subTree;
    if (instance.getCssVars && (vnode === root || root && root.type === Fragment && root.children.includes(vnode))) {
        const cssVars = instance.getCssVars();
        for(const key in cssVars)expectedMap.set(`--${(0, _shared.getEscapedCssVarName)(key, false)}`, String(cssVars[key]));
    }
    if (vnode === root && instance.parent) resolveCssVars(instance.parent, instance.vnode, expectedMap);
}
const allowMismatchAttr = "data-allow-mismatch";
const MismatchTypeString = {
    [0 /* TEXT */ ]: "text",
    [1 /* CHILDREN */ ]: "children",
    [2 /* CLASS */ ]: "class",
    [3 /* STYLE */ ]: "style",
    [4 /* ATTRIBUTE */ ]: "attribute"
};
function isMismatchAllowed(el, allowedType) {
    if (allowedType === 0 /* TEXT */  || allowedType === 1 /* CHILDREN */ ) while(el && !el.hasAttribute(allowMismatchAttr))el = el.parentElement;
    const allowedAttr = el && el.getAttribute(allowMismatchAttr);
    if (allowedAttr == null) return false;
    else if (allowedAttr === "") return true;
    else {
        const list = allowedAttr.split(",");
        if (allowedType === 0 /* TEXT */  && list.includes("children")) return true;
        return allowedAttr.split(",").includes(MismatchTypeString[allowedType]);
    }
}
const requestIdleCallback = (0, _shared.getGlobalThis)().requestIdleCallback || ((cb)=>setTimeout(cb, 1));
const cancelIdleCallback = (0, _shared.getGlobalThis)().cancelIdleCallback || ((id)=>clearTimeout(id));
const hydrateOnIdle = (timeout = 1e4)=>(hydrate)=>{
        const id = requestIdleCallback(hydrate, {
            timeout
        });
        return ()=>cancelIdleCallback(id);
    };
function elementIsVisibleInViewport(el) {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth);
}
const hydrateOnVisible = (opts)=>(hydrate, forEach)=>{
        const ob = new IntersectionObserver((entries)=>{
            for (const e of entries){
                if (!e.isIntersecting) continue;
                ob.disconnect();
                hydrate();
                break;
            }
        }, opts);
        forEach((el)=>{
            if (!(el instanceof Element)) return;
            if (elementIsVisibleInViewport(el)) {
                hydrate();
                ob.disconnect();
                return false;
            }
            ob.observe(el);
        });
        return ()=>ob.disconnect();
    };
const hydrateOnMediaQuery = (query)=>(hydrate)=>{
        if (query) {
            const mql = matchMedia(query);
            if (mql.matches) hydrate();
            else {
                mql.addEventListener("change", hydrate, {
                    once: true
                });
                return ()=>mql.removeEventListener("change", hydrate);
            }
        }
    };
const hydrateOnInteraction = (interactions = [])=>(hydrate, forEach)=>{
        if ((0, _shared.isString)(interactions)) interactions = [
            interactions
        ];
        let hasHydrated = false;
        const doHydrate = (e)=>{
            if (!hasHydrated) {
                hasHydrated = true;
                teardown();
                hydrate();
                e.target.dispatchEvent(new e.constructor(e.type, e));
            }
        };
        const teardown = ()=>{
            forEach((el)=>{
                for (const i of interactions)el.removeEventListener(i, doHydrate);
            });
        };
        forEach((el)=>{
            for (const i of interactions)el.addEventListener(i, doHydrate, {
                once: true
            });
        });
        return teardown;
    };
function forEachElement(node, cb) {
    if (isComment(node) && node.data === "[") {
        let depth = 1;
        let next = node.nextSibling;
        while(next){
            if (next.nodeType === 1) {
                const result = cb(next);
                if (result === false) break;
            } else if (isComment(next)) {
                if (next.data === "]") {
                    if (--depth === 0) break;
                } else if (next.data === "[") depth++;
            }
            next = next.nextSibling;
        }
    } else cb(node);
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
    if ((0, _shared.isFunction)(source)) source = {
        loader: source
    };
    const { loader, loadingComponent, errorComponent, delay = 200, hydrate: hydrateStrategy, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry());
                const userFail = ()=>reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            if (comp && !(0, _shared.isObject)(comp) && !(0, _shared.isFunction)(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        __asyncHydrate (el, instance, hydrate) {
            const doHydrate = hydrateStrategy ? ()=>{
                const teardown = hydrateStrategy(hydrate, (cb)=>forEachElement(el, cb));
                if (teardown) (instance.bum || (instance.bum = [])).push(teardown);
            } : hydrate;
            if (resolvedComp) doHydrate();
            else load().then(()=>!instance.isUnmounted && doHydrate());
        },
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            markAsyncBoundary(instance);
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance);
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13, !errorComponent);
            };
            if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance);
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null;
            });
            const loaded = (0, _reactivity.ref)(false);
            const error = (0, _reactivity.ref)();
            const delayed = (0, _reactivity.ref)(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) instance.parent.update();
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, parent) {
    const { ref: ref2, props, children, ce } = parent.vnode;
    const vnode = createVNode(comp, props, children);
    vnode.ref = ref2;
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const sharedContext = instance.ctx;
        if (!sharedContext.renderer) return ()=>{
            const children = slots.default && slots.default();
            return children && children.length === 1 ? children[0] : children;
        };
        const cache = /* @__PURE__ */ new Map();
        const keys = /* @__PURE__ */ new Set();
        let current = null;
        instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (vnode, container, anchor, namespace, optimized)=>{
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance2.isDeactivated = false;
                if (instance2.a) (0, _shared.invokeArrayFns)(instance2.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
            }, parentSuspense);
            devtoolsComponentAdded(instance2);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance2 = vnode.component;
            invalidateMount(instance2.m);
            invalidateMount(instance2.a);
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance2.da) (0, _shared.invokeArrayFns)(instance2.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                instance2.isDeactivated = true;
            }, parentSuspense);
            devtoolsComponentAdded(instance2);
        };
        function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && !filter(name)) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (cached && (!current || !isSameVNodeType(cached, current))) unmount(cached);
            else if (current) resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        watch(()=>[
                props.include,
                props.exclude
            ], ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name));
            exclude && pruneCache((name)=>!matches(exclude, name));
        }, // prune post-render after `current` has been updated
        {
            flush: "post",
            deep: true
        });
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            if (pendingCacheKey != null) {
                if (isSuspense(instance.subTree.type)) queuePostRenderEffect(()=>{
                    cache.set(pendingCacheKey, getInnerChild(instance.subTree));
                }, instance.subTree.suspense);
                else cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                    resetShapeFlag(vnode);
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return current = null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn$1(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            if (vnode.type === Comment) {
                current = null;
                return vnode;
            }
            const comp = vnode.type;
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include, exclude, max } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                vnode.shapeFlag &= -257;
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128) rawVNode.ssContent = vnode;
            }
            pendingCacheKey = key;
            if (cachedVNode) {
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) setTransitionHooks(vnode, vnode.transition);
                vnode.shapeFlag |= 512;
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if ((0, _shared.isArray)(pattern)) return pattern.some((p)=>matches(p, name));
    else if ((0, _shared.isString)(pattern)) return pattern.split(",").includes(name);
    else if ((0, _shared.isRegExp)(pattern)) {
        pattern.lastIndex = 0;
        return pattern.test(name);
    }
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        (0, _shared.remove)(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    vnode.shapeFlag &= -257;
    vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            (0, _reactivity.pauseTracking)();
            const reset = setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            reset();
            (0, _reactivity.resetTracking)();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = (0, _shared.toHandlerKey)(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
        warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + ` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>{
        if (!isInSSRComponentSetup || lifecycle === "sp") injectHook(lifecycle, (...args)=>hook(...args), target);
    };
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
    if ((0, _shared.isString)(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else return component || NULL_DYNAMIC_COMPONENT;
}
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === (0, _shared.camelize)(name) || selfName === (0, _shared.capitalize)((0, _shared.camelize)(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) return Component;
        if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
            warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else warn$1(`resolve${(0, _shared.capitalize)(type.slice(0, -1))} can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[(0, _shared.camelize)(name)] || registry[(0, _shared.capitalize)((0, _shared.camelize)(name))]);
}
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    const sourceIsArray = (0, _shared.isArray)(source);
    if (sourceIsArray || (0, _shared.isString)(source)) {
        const sourceIsReactiveArray = sourceIsArray && (0, _reactivity.isReactive)(source);
        let needsWrap = false;
        if (sourceIsReactiveArray) {
            needsWrap = !(0, _reactivity.isShallow)(source);
            source = (0, _reactivity.shallowReadArray)(source);
        }
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(needsWrap ? (0, _reactivity.toReactive)(source[i]) : source[i], i, void 0, cached && cached[i]);
    } else if (typeof source === "number") {
        if (!Number.isInteger(source)) warn$1(`The v-for range expect an integer value but got ${source}.`);
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    } else if ((0, _shared.isObject)(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, void 0, cached && cached[i]));
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        if ((0, _shared.isArray)(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) slots[slot.name] = slot.key ? (...args)=>{
            const res = slot.fn(...args);
            if (res) res.key = slot.key;
            return res;
        } : slot.fn;
    }
    return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
        if (name !== "default") props.name = name;
        return openBlock(), createBlock(Fragment, null, [
            createVNode("slot", props, fallback && fallback())
        ], 64);
    }
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
        slot = ()=>[];
    }
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const slotKey = props.key || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    validSlotContent && validSlotContent.key;
    const rendered = createBlock(Fragment, {
        key: (slotKey && !(0, _shared.isSymbol)(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
        (!validSlotContent && fallback ? "_fb" : "")
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + "-s"
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (!(0, _shared.isObject)(obj)) {
        warn$1(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : (0, _shared.toHandlerKey)(key)] = obj[key];
    return ret;
}
const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getComponentPublicInstance(i);
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/* @__PURE__ */ (0, _shared.extend)(/* @__PURE__ */ Object.create(null), {
    $: (i)=>i,
    $el: (i)=>i.vnode.el,
    $data: (i)=>i.data,
    $props: (i)=>(0, _reactivity.shallowReadonly)(i.props),
    $attrs: (i)=>(0, _reactivity.shallowReadonly)(i.attrs),
    $slots: (i)=>(0, _reactivity.shallowReadonly)(i.slots),
    $refs: (i)=>(0, _reactivity.shallowReadonly)(i.refs),
    $parent: (i)=>getPublicInstance(i.parent),
    $root: (i)=>getPublicInstance(i.root),
    $host: (i)=>i.ce,
    $emit: (i)=>i.emit,
    $options: (i)=>__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i)=>i.f || (i.f = ()=>{
            queueJob(i.update);
        }),
    $nextTick: (i)=>i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i)=>__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : (0, _shared.NOOP)
});
const isReservedPrefix = (key)=>key === "_" || key === "$";
const hasSetupBinding = (state, key)=>state !== (0, _shared.EMPTY_OBJ) && !state.__isScriptSetup && (0, _shared.hasOwn)(state, key);
const PublicInstanceProxyHandlers = {
    get ({ _: instance }, key) {
        if (key === "__v_skip") return true;
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        if (key === "__isVue") return true;
        let normalizedProps;
        if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) switch(n){
                case 1 /* SETUP */ :
                    return setupState[key];
                case 2 /* DATA */ :
                    return data[key];
                case 4 /* CONTEXT */ :
                    return ctx[key];
                case 3 /* PROPS */ :
                    return props[key];
            }
            else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        if (publicGetter) {
            if (key === "$attrs") {
                (0, _reactivity.track)(instance.attrs, "get", "");
                markAttrsAccessed();
            } else if (key === "$slots") (0, _reactivity.track)(instance, "get", key);
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (// global properties
        globalProperties = appContext.config.globalProperties, (0, _shared.hasOwn)(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!(0, _shared.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf("__v") !== 0)) {
            if (data !== (0, _shared.EMPTY_OBJ) && isReservedPrefix(key[0]) && (0, _shared.hasOwn)(data, key)) warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
        }
    },
    set ({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
        } else if ((0, setupState.__isScriptSetup) && (0, _shared.hasOwn)(setupState, key)) {
            warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
            return false;
        } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
            data[key] = value;
            return true;
        } else if ((0, _shared.hasOwn)(instance.props, key)) {
            warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
            return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
            warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key) || (0, _shared.hasOwn)(ctx, key) || (0, _shared.hasOwn)(publicPropertiesMap, key) || (0, _shared.hasOwn)(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) target._.accessCache[key] = 0;
        else if ((0, _shared.hasOwn)(descriptor, "value")) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ (0, _shared.extend)({}, PublicInstanceProxyHandlers, {
    get (target, key) {
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== "_" && !(0, _shared.isGloballyAllowed)(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: (0, _shared.NOOP)
        });
    });
    return target;
}
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key],
            set: (0, _shared.NOOP)
        });
    });
}
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys((0, _reactivity.toRaw)(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key],
                set: (0, _shared.NOOP)
            });
        }
    });
}
const warnRuntimeUsage = (method)=>warn$1(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
function defineOptions(options) {
    warnRuntimeUsage(`defineOptions`);
}
function defineSlots() {
    warnRuntimeUsage(`defineSlots`);
    return null;
}
function defineModel() {
    warnRuntimeUsage("defineModel");
}
function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn$1(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
    return (0, _shared.isArray)(props) ? props.reduce((normalized, p)=>(normalized[p] = null, normalized), {}) : props;
}
function mergeDefaults(raw, defaults) {
    const props = normalizePropsOrEmits(raw);
    for(const key in defaults){
        if (key.startsWith("__skip")) continue;
        let opt = props[key];
        if (opt) {
            if ((0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt)) opt = props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) opt = props[key] = {
            default: defaults[key]
        };
        else warn$1(`props default key "${key}" has no corresponding declaration.`);
        if (opt && defaults[`__skip_${key}`]) opt.skipFactory = true;
    }
    return props;
}
function mergeModels(a, b) {
    if (!a || !b) return a || b;
    if ((0, _shared.isArray)(a) && (0, _shared.isArray)(b)) return a.concat(b);
    return (0, _shared.extend)({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn$1(`withAsyncContext called without active current instance. This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if ((0, _shared.isPromise)(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc");
    const { // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, // public API
    expose, inheritAttrs, // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    if (methods) for(const key in methods){
        const methodHandler = methods[key];
        if ((0, _shared.isFunction)(methodHandler)) {
            Object.defineProperty(ctx, key, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key);
        } else warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!(0, _shared.isFunction)(dataOptions)) warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if ((0, _shared.isPromise)(data)) warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
        if (!(0, _shared.isObject)(data)) warn$1(`data() should return an object.`);
        else {
            instance.data = (0, _reactivity.reactive)(data);
            for(const key in data){
                checkDuplicateProperties("Data" /* DATA */ , key);
                if (!isReservedPrefix(key[0])) Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key],
                    set: (0, _shared.NOOP)
                });
            }
        }
    }
    shouldCacheAccess = true;
    if (computedOptions) for(const key in computedOptions){
        const opt = computedOptions[key];
        const get = (0, _shared.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0, _shared.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : (0, _shared.NOOP);
        if (get === (0, _shared.NOOP)) warn$1(`Computed property "${key}" has no getter.`);
        const set = !(0, _shared.isFunction)(opt) && (0, _shared.isFunction)(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn$1(`Write operation failed: computed property "${key}" is readonly.`);
        };
        const c = computed({
            get,
            set
        });
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value,
            set: (v1)=>c.value = v1
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key);
    }
    if (watchOptions) for(const key in watchOptions)createWatcher(watchOptions[key], ctx, publicThis, key);
    if (provideOptions) {
        const provides = (0, _shared.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            provide(key, provides[key]);
        });
    }
    if (created) callHook(created, instance, "c");
    function registerLifecycleHook(register, hook) {
        if ((0, _shared.isArray)(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis)));
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if ((0, _shared.isArray)(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key],
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {};
    }
    if (render && instance.render === (0, _shared.NOOP)) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
    if (serverPrefetch) markAsyncBoundary(instance);
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = (0, _shared.NOOP)) {
    if ((0, _shared.isArray)(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if ((0, _shared.isObject)(opt)) {
            if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if ((0, _reactivity.isRef)(injected)) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>injected.value,
            set: (v1)=>injected.value = v1
        });
        else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling((0, _shared.isArray)(hook) ? hook.map((h)=>h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    let getter = key.includes(".") ? createPathGetter(publicThis, key) : ()=>publicThis[key];
    if ((0, _shared.isString)(raw)) {
        const handler = ctx[raw];
        if ((0, _shared.isFunction)(handler)) watch(getter, handler);
        else warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if ((0, _shared.isFunction)(raw)) watch(getter, raw.bind(publicThis));
    else if ((0, _shared.isObject)(raw)) {
        if ((0, _shared.isArray)(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key));
        else {
            const handler = (0, _shared.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if ((0, _shared.isFunction)(handler)) watch(getter, handler, raw);
            else warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else warn$1(`Invalid watch option: "${key}"`, raw);
}
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true));
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    if ((0, _shared.isObject)(base)) cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true));
    for(const key in from)if (asMixin && key === "expose") warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return (0, _shared.extend)((0, _shared.isFunction)(to) ? to.call(this, this) : to, (0, _shared.isFunction)(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if ((0, _shared.isArray)(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? (0, _shared.extend)(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
        if ((0, _shared.isArray)(to) && (0, _shared.isArray)(from)) return [
            .../* @__PURE__ */ new Set([
                ...to,
                ...from
            ])
        ];
        return (0, _shared.extend)(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
    } else return from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = (0, _shared.extend)(/* @__PURE__ */ Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray(to[key], from[key]);
    return merged;
}
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: (0, _shared.NO),
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
    };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!(0, _shared.isFunction)(rootComponent)) rootComponent = (0, _shared.extend)({}, rootComponent);
        if (rootProps != null && !(0, _shared.isObject)(rootProps)) {
            warn$1(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = /* @__PURE__ */ new WeakSet();
        const pluginCleanupFns = [];
        let isMounted = false;
        const app = context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn$1(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn$1(`Plugin has already been applied to target app.`);
                else if (plugin && (0, _shared.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if ((0, _shared.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn$1(`A plugin must either be a function or an object with an "install" function.`);
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                    else warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                } else warn$1("Mixins are only available in builds supporting Options API");
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (0, context.components[name]) warn$1(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (0, context.directives[name]) warn$1(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, namespace) {
                if (!isMounted) {
                    if (0, rootContainer.__vue_app__) warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
                    const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
                    vnode.appContext = context;
                    if (namespace === true) namespace = "svg";
                    else if (namespace === false) namespace = void 0;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, namespace);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, namespace);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return getComponentPublicInstance(vnode.component);
                } else warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            onUnmount (cleanupFn) {
                if (typeof cleanupFn !== "function") warn$1(`Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`);
                pluginCleanupFns.push(cleanupFn);
            },
            unmount () {
                if (isMounted) {
                    callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn$1(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
                context.provides[key] = value;
                return app;
            },
            runWithContext (fn) {
                const lastApp = currentApp;
                currentApp = app;
                try {
                    return fn();
                } finally{
                    currentApp = lastApp;
                }
            }
        };
        return app;
    };
}
let currentApp = null;
function provide(key, value) {
    if (!currentInstance) warn$1(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
        const provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
        if (provides && key in provides) return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && (0, _shared.isFunction)(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
        else warn$1(`injection "${String(key)}" not found.`);
    } else warn$1(`inject() can only be used inside setup() or functional components.`);
}
function hasInjectionContext() {
    return !!(currentInstance || currentRenderingInstance || currentApp);
}
const internalObjectProto = {};
const createInternalObject = ()=>Object.create(internalObjectProto);
const isInternalObject = (obj)=>Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = createInternalObject();
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = void 0;
    validateProps(rawProps || {}, props, instance);
    if (isStateful) instance.props = isSSR ? props : (0, _reactivity.shallowReactive)(props);
    else if (!instance.type.props) instance.props = attrs;
    else instance.props = props;
    instance.attrs = attrs;
}
function isInHmrContext(instance) {
    while(instance){
        if (instance.type.__hmrId) return true;
        instance = instance.parent;
    }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = (0, _reactivity.toRaw)(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
        if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                if (isEmitListener(instance.emitsOptions, key)) continue;
                const value = rawProps[key];
                if (options) {
                    if ((0, _shared.hasOwn)(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = (0, _shared.camelize)(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || // for camelCase
        !(0, _shared.hasOwn)(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = (0, _shared.hyphenate)(key)) === key || !(0, _shared.hasOwn)(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && // for camelCase
                (rawPrevProps[key] !== void 0 || // for kebab-case
                rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            } else delete props[key];
        }
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !(0, _shared.hasOwn)(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    if (hasAttrsChanged) (0, _reactivity.trigger)(instance.attrs, "set", "");
    validateProps(rawProps || {}, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        if ((0, _shared.isReservedProp)(key)) continue;
        const value = rawProps[key];
        let camelKey;
        if (options && (0, _shared.hasOwn)(options, camelKey = (0, _shared.camelize)(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0, _reactivity.toRaw)(props);
        const castValues = rawCastValues || (0, _shared.EMPTY_OBJ);
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !(0, _shared.hasOwn)(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0, _shared.hasOwn)(opt, "default");
        if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && (0, _shared.isFunction)(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    const reset = setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    reset();
                }
            } else value = defaultValue;
            if (instance.ce) instance.ce._setProp(key, value);
        }
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === "" || value === (0, _shared.hyphenate)(key))) value = true;
        }
    }
    return value;
}
const mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = __VUE_OPTIONS_API__ && asMixin ? mixinPropsCache : appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendProps = (raw2)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw2, appContext, true);
            (0, _shared.extend)(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        if ((0, _shared.isObject)(comp)) cache.set(comp, (0, _shared.EMPTY_ARR));
        return 0, _shared.EMPTY_ARR;
    }
    if ((0, _shared.isArray)(raw)) for(let i = 0; i < raw.length; i++){
        if (!(0, _shared.isString)(raw[i])) warn$1(`props must be strings when using array syntax.`, raw[i]);
        const normalizedKey = (0, _shared.camelize)(raw[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = (0, _shared.EMPTY_OBJ);
    }
    else if (raw) {
        if (!(0, _shared.isObject)(raw)) warn$1(`invalid props options`, raw);
        for(const key in raw){
            const normalizedKey = (0, _shared.camelize)(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey] = (0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt) ? {
                    type: opt
                } : (0, _shared.extend)({}, opt);
                const propType = prop.type;
                let shouldCast = false;
                let shouldCastTrue = true;
                if ((0, _shared.isArray)(propType)) for(let index = 0; index < propType.length; ++index){
                    const type = propType[index];
                    const typeName = (0, _shared.isFunction)(type) && type.name;
                    if (typeName === "Boolean") {
                        shouldCast = true;
                        break;
                    } else if (typeName === "String") shouldCastTrue = false;
                }
                else shouldCast = (0, _shared.isFunction)(propType) && propType.name === "Boolean";
                prop[0 /* shouldCast */ ] = shouldCast;
                prop[1 /* shouldCastTrue */ ] = shouldCastTrue;
                if (shouldCast || (0, _shared.hasOwn)(prop, "default")) needCastKeys.push(normalizedKey);
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    if ((0, _shared.isObject)(comp)) cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== "$" && !(0, _shared.isReservedProp)(key)) return true;
    else warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
function getType(ctor) {
    if (ctor === null) return "null";
    if (typeof ctor === "function") return ctor.name || "";
    else if (typeof ctor === "object") {
        const name = ctor.constructor && ctor.constructor.name;
        return name || "";
    }
    return "";
}
function validateProps(rawProps, props, instance) {
    const resolvedValues = (0, _reactivity.toRaw)(props);
    const options = instance.propsOptions[0];
    const camelizePropsKey = Object.keys(rawProps).map((key)=>(0, _shared.camelize)(key));
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, (0, _reactivity.shallowReadonly)(resolvedValues), !camelizePropsKey.includes(key));
    }
}
function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } = prop;
    if (required && isAbsent) {
        warn$1('Missing required prop: "' + name + '"');
        return;
    }
    if (value == null && !required) return;
    if (type != null && type !== true && !skipCheck) {
        let isValid = false;
        const types = (0, _shared.isArray)(type) ? type : [
            type
        ];
        const expectedTypes = [];
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            warn$1(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    if (validator && !validator(value, props)) warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /* @__PURE__ */ (0, _shared.makeMap)("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (expectedType === "null") valid = value === null;
    else if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = (0, _shared.isObject)(value);
    else if (expectedType === "Array") valid = (0, _shared.isArray)(value);
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map((0, _shared.capitalize)).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = (0, _shared.toRawType)(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
function styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
function isExplicable(type) {
    const explicitTypes = [
        "string",
        "number",
        "boolean"
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem);
}
function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
const isInternalKey = (key)=>key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value)=>(0, _shared.isArray)(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ];
const normalizeSlot = (key, rawSlot, ctx)=>{
    if (rawSlot._n) return rawSlot;
    const normalized = withCtx((...args)=>{
        if (currentInstance && (!ctx || ctx.root === currentInstance.root)) warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if ((0, _shared.isFunction)(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized;
};
const assignSlots = (slots, children, optimized)=>{
    for(const key in children)if (optimized || key !== "_") slots[key] = children[key];
};
const initSlots = (instance, children, optimized)=>{
    const slots = instance.slots = createInternalObject();
    if (instance.vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            assignSlots(slots, children, optimized);
            if (optimized) (0, _shared.def)(slots, "_", type, true);
        } else normalizeObjectSlots(children, slots);
    } else if (children) normalizeVNodeSlots(instance, children);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = (0, _shared.EMPTY_OBJ);
    if (vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            if (isHmrUpdating) {
                assignSlots(slots, children, optimized);
                (0, _reactivity.trigger)(instance, "set", "$slots");
            } else if (optimized && type === 1) needDeletionCheck = false;
            else assignSlots(slots, children, optimized);
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
    }
};
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== void 0) return supported;
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    return supported;
}
function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== "boolean") {
        needWarn.push(`__VUE_OPTIONS_API__`);
        (0, _shared.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
        needWarn.push(`__VUE_PROD_DEVTOOLS__`);
        (0, _shared.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") {
        needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
        (0, _shared.getGlobalThis)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }
    if (0, needWarn.length) {
        const multi = needWarn.length > 1;
        console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
    return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
    initFeatureFlags();
    const target = (0, _shared.getGlobalThis)();
    target.__VUE__ = true;
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = (0, _shared.NOOP), insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch(type){
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
                else patchStaticNode(n1, n2, container, namespace);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
        else n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, namespace)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
    };
    const patchStaticNode = (n1, n2, container, namespace)=>{
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        if (n2.type === "svg") namespace = "svg";
        else if (n2.type === "math") namespace = "mathml";
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { props, shapeFlag, transition, dirs } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
        if (shapeFlag & 8) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props) {
            for(const key in props)if (key !== "value" && !(0, _shared.isReservedProp)(key)) hostPatchProp(el, key, null, props[key], namespace, parentComponent);
            if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        (0, _shared.def)(el, "__vnode", vnode, true);
        (0, _shared.def)(el, "__vueParentComponent", parentComponent, true);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        const needCallTransitionHooks = needTransition(parentSuspense, transition);
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        el.__vnode = n2;
        let { patchFlag, dynamicChildren, dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || (0, _shared.EMPTY_OBJ);
        const newProps = n2.props || (0, _shared.EMPTY_OBJ);
        let vnodeHook;
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        parentComponent && toggleRecurse(parentComponent, true);
        if (isHmrUpdating) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) hostSetElementText(el, "");
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
            traverseStaticChildren(n1, n2);
        } else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
        if (patchFlag > 0) {
            if (patchFlag & 16) patchProps(el, oldProps, newProps, parentComponent, namespace);
            else {
                if (patchFlag & 2) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
                }
                if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
                if (patchFlag & 8) {
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
                    }
                }
            }
            if (patchFlag & 1) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) patchProps(el, oldProps, newProps, parentComponent, namespace);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
        }
    };
    const patchProps = (el, oldProps, newProps, parentComponent, namespace)=>{
        if (oldProps !== newProps) {
            if (oldProps !== (0, _shared.EMPTY_OBJ)) {
                for(const key in oldProps)if (!(0, _shared.isReservedProp)(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
            }
            for(const key in newProps){
                if ((0, _shared.isReservedProp)(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
            if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (// #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(// #10007
            // such fragment like `<></>` will be compiled into
            // a fragment which doesn't have a children.
            // In this case fallback to an empty array
            n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
            traverseStaticChildren(n1, n2);
        } else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (0, instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance, false, optimized);
        endMeasure(instance, `init`);
        if (instance.asyncDep) {
            if (isHmrUpdating) initialVNode.el = null;
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
            }
        } else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                instance.next = n2;
                instance.update();
            }
        } else {
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent, root, type } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                if (bm) (0, _shared.invokeArrayFns)(bm);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode && type.__asyncHydrate) type.__asyncHydrate(el, instance, hydrateSubTree);
                    else hydrateSubTree();
                } else {
                    if (root.ce) root.ce._injectChildStyle(type);
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                if (m) queuePostRenderEffect(m, parentSuspense);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                initialVNode = container = anchor = null;
            } else {
                let { next, bu, u, parent, vnode } = instance;
                {
                    const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
                    if (nonHydratedAsyncRoot) {
                        if (next) {
                            next.el = vnode.el;
                            updateComponentPreRender(instance, next, optimized);
                        }
                        nonHydratedAsyncRoot.asyncDep.then(()=>{
                            if (!instance.isUnmounted) componentUpdateFn();
                        });
                        return;
                    }
                }
                let originNext = next;
                let vnodeHook;
                pushWarningContext(next || instance.vnode);
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                if (bu) (0, _shared.invokeArrayFns)(bu);
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                toggleRecurse(instance, true);
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, namespace);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) updateHOCHostEl(instance, nextTree.el);
                if (u) queuePostRenderEffect(u, parentSuspense);
                if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        instance.scope.on();
        const effect = instance.effect = new (0, _reactivity.ReactiveEffect)(componentUpdateFn);
        instance.scope.off();
        const update = instance.update = effect.run.bind(effect);
        const job = instance.job = effect.runIfDirty.bind(effect);
        job.i = instance;
        job.id = instance.uid;
        effect.scheduler = ()=>queueJob(job);
        toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>(0, _shared.invokeArrayFns)(instance.rtc, e) : void 0;
        effect.onTrigger = instance.rtg ? (e)=>(0, _shared.invokeArrayFns)(instance.rtg, e) : void 0;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        (0, _reactivity.pauseTracking)();
        flushPreFlushCbs(instance);
        (0, _reactivity.resetTracking)();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        if (patchFlag > 0) {
            if (patchFlag & 128) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256) {
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            }
        }
        if (shapeFlag & 8) {
            if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16) {
            if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            if (prevShapeFlag & 8) hostSetElementText(container, "");
            if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        c1 = c1 || (0, _shared.EMPTY_ARR);
        c2 = c2 || (0, _shared.EMPTY_ARR);
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
        if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1;
        let e2 = l2 - 1;
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            i++;
        }
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i;
            const s2 = i;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    patched++;
                }
            }
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : (0, _shared.EMPTY_ARR);
            j = increasingNewIndexSequence.length - 1;
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (moved) {
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
        if (needTransition2) {
            if (moveType === 0) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el), parentSuspense);
            } else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove2 = ()=>hostInsert(el, container, anchor);
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove2();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove2, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs, cacheIndex } = vnode;
        if (patchFlag === -2) optimized = false;
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (cacheIndex != null) parentComponent.renderCache[cacheIndex] = void 0;
        if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
            else if (dynamicChildren && // #5154
            // when v-once is used inside a block, setBlockTracking(-1) marks the
            // parent block with hasOnce: true
            // so that it doesn't take the fast path during unmount - otherwise
            // components nested in v-once are never unmounted.
            !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
            (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) vnode.children.forEach((child)=>{
                if (child.type === Comment) hostRemove(child.el);
                else remove(child);
            });
            else removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = ()=>leave(el, performRemove);
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (0, instance.type.__hmrId) unregisterHMR(instance);
        const { bum, scope, job, subTree, um, m, a } = instance;
        invalidateMount(m);
        invalidateMount(a);
        if (bum) (0, _shared.invokeArrayFns)(bum);
        scope.stop();
        if (job) {
            job.flags |= 8;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128) return vnode.suspense.next();
        const el = hostNextSibling(vnode.anchor || vnode.el);
        const teleportEnd = el && el[TeleportEndKey];
        return teleportEnd ? hostNextSibling(teleportEnd) : el;
    };
    let isFlushing = false;
    const render = (vnode, container, namespace)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, namespace);
        container._vnode = vnode;
        if (!isFlushing) {
            isFlushing = true;
            flushPreFlushCbs();
            flushPostFlushCbs();
            isFlushing = false;
        }
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, job }, allowed) {
    if (allowed) {
        effect.flags |= 32;
        job.flags |= 4;
    } else {
        effect.flags &= -33;
        job.flags &= -5;
    }
}
function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0, _shared.isArray)(ch1) && (0, _shared.isArray)(ch2)) for(let i = 0; i < ch1.length; i++){
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) c2.el = c1.el;
        if (c2.type === Comment && !c2.el) c2.el = c1.el;
    }
}
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v1, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v1 = result.length - 1;
            while(u < v1){
                c = u + v1 >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v1 = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v1 = result[u - 1];
    while(u-- > 0){
        result[u] = v1;
        v1 = p[v1];
    }
    return result;
}
function locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
        if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
        else return locateNonHydratedAsyncRoot(subComponent);
    }
}
function invalidateMount(hooks) {
    if (hooks) for(let i = 0; i < hooks.length; i++)hooks[i].flags |= 8;
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, (0, _shared.extend)({}, options, {
        flush: "post"
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, (0, _shared.extend)({}, options, {
        flush: "sync"
    }));
}
function watch(source, cb, options) {
    if (!(0, _shared.isFunction)(cb)) warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, options = (0, _shared.EMPTY_OBJ)) {
    const { immediate, deep, flush, once } = options;
    if (!cb) {
        if (immediate !== void 0) warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
        if (deep !== void 0) warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
        if (once !== void 0) warn$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    const baseWatchOptions = (0, _shared.extend)({}, options);
    baseWatchOptions.onWarn = warn$1;
    const runsImmediately = cb && immediate || !cb && flush !== "post";
    let ssrCleanup;
    if (isInSSRComponentSetup) {
        if (flush === "sync") {
            const ctx = useSSRContext();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        } else if (!runsImmediately) {
            const watchStopHandle = ()=>{};
            watchStopHandle.stop = (0, _shared.NOOP);
            watchStopHandle.resume = (0, _shared.NOOP);
            watchStopHandle.pause = (0, _shared.NOOP);
            return watchStopHandle;
        }
    }
    const instance = currentInstance;
    baseWatchOptions.call = (fn, type, args)=>callWithAsyncErrorHandling(fn, instance, type, args);
    let isPre = false;
    if (flush === "post") baseWatchOptions.scheduler = (job)=>{
        queuePostRenderEffect(job, instance && instance.suspense);
    };
    else if (flush !== "sync") {
        isPre = true;
        baseWatchOptions.scheduler = (job, isFirstRun)=>{
            if (isFirstRun) job();
            else queueJob(job);
        };
    }
    baseWatchOptions.augmentJob = (job)=>{
        if (cb) job.flags |= 4;
        if (isPre) {
            job.flags |= 2;
            if (instance) {
                job.id = instance.uid;
                job.i = instance;
            }
        }
    };
    const watchHandle = (0, _reactivity.watch)(source, cb, baseWatchOptions);
    if (isInSSRComponentSetup) {
        if (ssrCleanup) ssrCleanup.push(watchHandle);
        else if (runsImmediately) watchHandle();
    }
    return watchHandle;
}
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = (0, _shared.isString)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : ()=>publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if ((0, _shared.isFunction)(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const reset = setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function useModel(props, name, options = (0, _shared.EMPTY_OBJ)) {
    const i = getCurrentInstance();
    if (!i) {
        warn$1(`useModel() called without active instance.`);
        return (0, _reactivity.ref)();
    }
    const camelizedName = (0, _shared.camelize)(name);
    if (!i.propsOptions[0][camelizedName]) {
        warn$1(`useModel() called with prop "${name}" which is not declared.`);
        return (0, _reactivity.ref)();
    }
    const hyphenatedName = (0, _shared.hyphenate)(name);
    const modifiers = getModelModifiers(props, camelizedName);
    const res = (0, _reactivity.customRef)((track, trigger)=>{
        let localValue;
        let prevSetValue = (0, _shared.EMPTY_OBJ);
        let prevEmittedValue;
        watchSyncEffect(()=>{
            const propValue = props[camelizedName];
            if ((0, _shared.hasChanged)(localValue, propValue)) {
                localValue = propValue;
                trigger();
            }
        });
        return {
            get () {
                track();
                return options.get ? options.get(localValue) : localValue;
            },
            set (value) {
                const emittedValue = options.set ? options.set(value) : value;
                if (!(0, _shared.hasChanged)(emittedValue, localValue) && !(prevSetValue !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasChanged)(value, prevSetValue))) return;
                const rawProps = i.vnode.props;
                if (!(rawProps && // check if parent has passed v-model
                (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps))) {
                    localValue = value;
                    trigger();
                }
                i.emit(`update:${name}`, emittedValue);
                if ((0, _shared.hasChanged)(value, emittedValue) && (0, _shared.hasChanged)(value, prevSetValue) && !(0, _shared.hasChanged)(emittedValue, prevEmittedValue)) trigger();
                prevSetValue = value;
                prevEmittedValue = emittedValue;
            }
        };
    });
    res[Symbol.iterator] = ()=>{
        let i2 = 0;
        return {
            next () {
                if (i2 < 2) return {
                    value: i2++ ? modifiers || (0, _shared.EMPTY_OBJ) : res,
                    done: false
                };
                else return {
                    done: true
                };
            }
        };
    };
    return res;
}
const getModelModifiers = (props, modelName)=>{
    return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${(0, _shared.camelize)(modelName)}Modifiers`] || props[`${(0, _shared.hyphenate)(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || (0, _shared.EMPTY_OBJ);
    {
        const { emitsOptions, propsOptions: [propsOptions] } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !((0, _shared.toHandlerKey)((0, _shared.camelize)(event)) in propsOptions)) warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${(0, _shared.toHandlerKey)((0, _shared.camelize)(event))}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if ((0, _shared.isFunction)(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    const modifiers = isModelListener && getModelModifiers(props, event.slice(7));
    if (modifiers) {
        if (modifiers.trim) args = rawArgs.map((a)=>(0, _shared.isString)(a) ? a.trim() : a);
        if (modifiers.number) args = rawArgs.map((0, _shared.looseToNumber));
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[(0, _shared.toHandlerKey)(lowerCaseEvent)]) warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${(0, _shared.hyphenate)(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = (0, _shared.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
    props[handlerName = (0, _shared.toHandlerKey)((0, _shared.camelize)(event))];
    if (!handler && isModelListener) handler = props[handlerName = (0, _shared.toHandlerKey)((0, _shared.hyphenate)(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) return cached;
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendEmits = (raw2)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                (0, _shared.extend)(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        if ((0, _shared.isObject)(comp)) cache.set(comp, null);
        return null;
    }
    if ((0, _shared.isArray)(raw)) raw.forEach((key)=>normalized[key] = null);
    else (0, _shared.extend)(normalized, raw);
    if ((0, _shared.isObject)(comp)) cache.set(comp, normalized);
    return normalized;
}
function isEmitListener(options, key) {
    if (!options || !(0, _shared.isOn)(key)) return false;
    key = key.slice(2).replace(/Once$/, "");
    return (0, _shared.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0, _shared.hasOwn)(options, (0, _shared.hyphenate)(key)) || (0, _shared.hasOwn)(options, key);
}
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, props, data, setupState, ctx, inheritAttrs } = instance;
    const prev = setCurrentRenderingInstance(instance);
    let result;
    let fallthroughAttrs;
    accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            const thisProxy = (0, setupState.__isScriptSetup) ? new Proxy(proxyToUse, {
                get (target, key, receiver) {
                    warn$1(`Property '${String(key)}' was accessed via 'this'. Avoid using 'this' in templates.`);
                    return Reflect.get(target, key, receiver);
                }
            }) : proxyToUse;
            result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, (0, _reactivity.shallowReadonly)(props), setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            const render2 = Component;
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render2.length > 1 ? render2((0, _reactivity.shallowReadonly)(props), {
                get attrs () {
                    markAttrsAccessed();
                    return (0, _reactivity.shallowReadonly)(attrs);
                },
                slots,
                emit
            }) : render2((0, _reactivity.shallowReadonly)(props), null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1);
        result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) [root, setRoot] = getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & 7) {
                if (propsOptions && keys.some((0, _shared.isModelListener))) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                root = cloneVNode(root, fallthroughAttrs, false, true);
            } else if (!accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if ((0, _shared.isOn)(key)) {
                        if (!(0, _shared.isModelListener)(key)) eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`);
                if (eventAttrs.length) warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
            }
        }
    }
    if (vnode.dirs) {
        if (!isElementRoot(root)) warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
        root = cloneVNode(root, null, false, true);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
        if (!isElementRoot(root)) warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
        setTransitionHooks(root, vnode.transition);
    }
    if (setRoot) setRoot(root);
    else result = root;
    setCurrentRenderingInstance(prev);
    return result;
}
const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren, false);
    if (!childRoot) return [
        vnode,
        void 0
    ];
    else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) return getChildRoot(childRoot);
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children, recurse = true) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) {
            if (child.type !== Comment || child.children === "v-if") {
                if (singleRoot) return;
                else {
                    singleRoot = child;
                    if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) return filterSingleRoot(singleRoot.children);
                }
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === "class" || key === "style" || (0, _shared.isOn)(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!(0, _shared.isModelListener)(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) return true;
        if (patchFlag & 16) {
            if (!prevProps) return !!nextProps;
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
    while(parent){
        const root = parent.subTree;
        if (root.suspense && root.suspense.activeBranch === vnode) root.el = vnode.el;
        if (root === vnode) {
            (vnode = parent.vnode).el = el;
            parent = parent.parent;
        } else break;
    }
}
const isSuspense = (type)=>type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
        else {
            if (parentSuspense && parentSuspense.deps > 0 && !n1.suspense.isInFallback) {
                n2.suspense = n1.suspense;
                n2.suspense.vnode = n2;
                n2.el = n1.el;
                return;
            }
            patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if ((0, _shared.isFunction)(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
    if (suspense.deps > 0) {
        triggerEvent(vnode, "onPending");
        triggerEvent(vnode, "onFallback");
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        namespace, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else suspense.resolve(false, true);
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                if (!isHydrating) {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            }
        } else {
            suspense.pendingId = suspenseId++;
            if (isHydrating) {
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            suspense.deps = 0;
            suspense.effects.length = 0;
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
                suspense.resolve(true);
            } else {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        if (newBranch.shapeFlag & 512) suspense.pendingId = newBranch.component.suspenseId;
        else suspense.pendingId = suspenseId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) suspense.resolve();
        else {
            const { timeout, pendingId } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    if (!hasWarned) {
        hasWarned = true;
        console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    let parentSuspenseId;
    const isSuspensible = isVNodeSuspensible(vnode);
    if (isSuspensible) {
        if (parentSuspense && parentSuspense.pendingBranch) {
            parentSuspenseId = parentSuspense.pendingId;
            parentSuspense.deps++;
        }
    }
    const timeout = vnode.props ? (0, _shared.toNumber)(vnode.props.timeout) : void 0;
    assertNumber(timeout, `Suspense timeout`);
    const initialAnchor = anchor;
    const suspense = {
        vnode,
        parent: parentSuspense,
        parentComponent,
        namespace,
        container,
        hiddenContainer,
        deps: 0,
        pendingId: suspenseId++,
        timeout: typeof timeout === "number" ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !isHydrating,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false, sync = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2 } = suspense;
            let delayEnter = false;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) {
                        move(pendingBranch, container2, anchor === initialAnchor ? next(activeBranch) : anchor, 0);
                        queuePostFlushCb(effects);
                    }
                };
                if (activeBranch) {
                    if (parentNode(activeBranch.el) === container2) anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent2, suspense, true);
                }
                if (!delayEnter) move(pendingBranch, container2, anchor, 0);
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            if (!hasUnresolvedAncestor && !delayEnter) queuePostFlushCb(effects);
            suspense.effects = [];
            if (isSuspensible) {
                if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                    parentSuspense.deps--;
                    if (parentSuspense.deps === 0 && !sync) parentSuspense.resolve();
                }
            }
            triggerEvent(vnode2, "onResolve");
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
            triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, // fallback tree will not have suspense context
                namespace2, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            unmount(activeBranch, parentComponent2, null, // no suspense so unmount hooks fire now
            true);
            if (!delayEnter) mountFallback();
        },
        move (container2, anchor2, type) {
            suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
            suspense.container = container2;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect, optimized2) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0);
            }).then((asyncSetupResult)=>{
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                instance.asyncResolved = true;
                const { vnode: vnode2 } = instance;
                pushWarningContext(vnode2);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) vnode2.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode2, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, namespace, optimized2);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode2.el);
                popWarningContext();
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense2, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, // eslint-disable-next-line no-restricted-globals
    document.createElement("div"), null, namespace, slotScopeIds, optimized, rendererInternals, true);
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve(false, true);
    return result;
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if ((0, _shared.isFunction)(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if ((0, _shared.isArray)(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild && s.filter((child)=>child !== NULL_DYNAMIC_COMPONENT).length > 0) warn$1(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s);
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0, _shared.isArray)(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    let el = branch.el;
    while(!el && branch.component){
        branch = branch.component.subTree;
        el = branch.el;
    }
    vnode.el = el;
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function isVNodeSuspensible(vnode) {
    const suspensible = vnode.props && vnode.props.suspensible;
    return suspensible != null && suspensible !== false;
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
    isBlockTreeEnabled += value;
    if (value < 0 && currentBlock && inVOnce) currentBlock.hasOnce = true;
}
function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || (0, _shared.EMPTY_ARR) : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && n1.component) {
        const dirtyInstances = hmrDirtyComponents.get(n2.type);
        if (dirtyInstances && dirtyInstances.has(n1.component)) {
            n1.shapeFlag &= -257;
            n2.shapeFlag &= -513;
            return false;
        }
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const normalizeKey = ({ key })=>key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for })=>{
    if (typeof ref === "number") ref = "" + ref;
    return ref != null ? (0, _shared.isString)(ref) || (0, _reactivity.isRef)(ref) || (0, _shared.isFunction)(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        if (shapeFlag & 128) type.normalize(vnode);
    } else if (children) vnode.shapeFlag |= (0, _shared.isString)(children) ? 8 : 16;
    if (vnode.key !== vnode.key) warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn$1(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment;
    }
    if (isVNode(type)) {
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
            else currentBlock.push(cloned);
        }
        cloned.patchFlag = -2;
        return cloned;
    }
    if (isClassComponent(type)) type = type.__vccOpts;
    if (props) {
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !(0, _shared.isString)(klass)) props.class = (0, _shared.normalizeClass)(klass);
        if ((0, _shared.isObject)(style)) {
            if ((0, _reactivity.isProxy)(style) && !(0, _shared.isArray)(style)) style = (0, _shared.extend)({}, style);
            props.style = (0, _shared.normalizeStyle)(style);
        }
    }
    const shapeFlag = (0, _shared.isString)(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : (0, _shared.isObject)(type) ? 4 : (0, _shared.isFunction)(type) ? 2 : 0;
    if (shapeFlag & 4 && (0, _reactivity.isProxy)(type)) {
        type = (0, _reactivity.toRaw)(type);
        warn$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return (0, _reactivity.isProxy)(props) || isInternalObject(props) ? (0, _shared.extend)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
    const { props, ref, patchFlag, children, transition } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? (0, _shared.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 && (0, _shared.isArray)(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetStart: vnode.targetStart,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
    };
    if (transition && cloneTransition) setTransitionHooks(cloned, transition.clone(cloned));
    return cloned;
}
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if ((0, _shared.isArray)(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") return createVNode(Comment);
    else if ((0, _shared.isArray)(child)) return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (isVNode(child)) return cloneIfMounted(child);
    else return createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) children = null;
    else if ((0, _shared.isArray)(children)) type = 16;
    else if (typeof children === "object") {
        if (shapeFlag & 65) {
            const slot = children.default;
            if (slot) {
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !isInternalObject(children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 && currentRenderingInstance) {
                if (currentRenderingInstance.slots._ === 1) children._ = 1;
                else {
                    children._ = 2;
                    vnode.patchFlag |= 1024;
                }
            }
        }
    } else if ((0, _shared.isFunction)(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32;
    } else {
        children = String(children);
        if (shapeFlag & 64) {
            type = 16;
            children = [
                createTextVNode(children)
            ];
        } else type = 8;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === "class") {
                if (ret.class !== toMerge.class) ret.class = (0, _shared.normalizeClass)([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === "style") ret.style = (0, _shared.normalizeStyle)([
                ret.style,
                toMerge.style
            ]);
            else if ((0, _shared.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !((0, _shared.isArray)(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== "") ret[key] = toMerge[key];
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
        vnode,
        prevVNode
    ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        // to be immediately set
        next: null,
        subTree: null,
        // will be set synchronously right after creation
        effect: null,
        update: null,
        // will be set synchronously right after creation
        job: null,
        scope: new (0, _reactivity.EffectScope)(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        ids: parent ? parent.ids : [
            "",
            0,
            0
        ],
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: (0, _shared.EMPTY_OBJ),
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: (0, _shared.EMPTY_OBJ),
        data: (0, _shared.EMPTY_OBJ),
        props: (0, _shared.EMPTY_OBJ),
        attrs: (0, _shared.EMPTY_OBJ),
        slots: (0, _shared.EMPTY_OBJ),
        refs: (0, _shared.EMPTY_OBJ),
        setupState: (0, _shared.EMPTY_OBJ),
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
    const g = (0, _shared.getGlobalThis)();
    const registerGlobalSetter = (key, setter)=>{
        let setters;
        if (!(setters = g[key])) setters = g[key] = [];
        setters.push(setter);
        return (v1)=>{
            if (setters.length > 1) setters.forEach((set)=>set(v1));
            else setters[0](v1);
        };
    };
    internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v1)=>currentInstance = v1);
    setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v1)=>isInSSRComponentSetup = v1);
}const setCurrentInstance = (instance)=>{
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return ()=>{
        instance.scope.off();
        internalSetCurrentInstance(prev);
    };
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ (0, _shared.makeMap)("slot,component");
function validateComponentName(name, { isNativeTag }) {
    if (isBuiltInTag(name) || isNativeTag(name)) warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
    isSSR && setInSSRSetupState(isSSR);
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children, optimized);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    exposePropsOnRenderContext(instance);
    const { setup } = Component;
    if (setup) {
        (0, _reactivity.pauseTracking)();
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        const reset = setCurrentInstance(instance);
        const setupResult = callWithErrorHandling(setup, instance, 0, [
            (0, _reactivity.shallowReadonly)(instance.props),
            setupContext
        ]);
        const isAsyncSetup = (0, _shared.isPromise)(setupResult);
        (0, _reactivity.resetTracking)();
        reset();
        if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) markAsyncBoundary(instance);
        if (isAsyncSetup) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0);
            });
            else {
                instance.asyncDep = setupResult;
                if (!instance.suspense) {
                    const name = (_a = Component.name) != null ? _a : "Anonymous";
                    warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
                }
            }
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if ((0, _shared.isFunction)(setupResult)) {
        if (instance.type.__ssrInlineRender) instance.ssrRender = setupResult;
        else instance.render = setupResult;
    } else if ((0, _shared.isObject)(setupResult)) {
        if (isVNode(setupResult)) warn$1(`setup() should not return VNodes directly - return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = (0, _reactivity.proxyRefs)(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== void 0) warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
const isRuntimeOnly = ()=>!compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
        if (!isSSR && compile && !Component.render) {
            const template = Component.template || __VUE_OPTIONS_API__ && resolveMergedOptions(instance).template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = (0, _shared.extend)((0, _shared.extend)({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || (0, _shared.NOOP);
        if (installWithProxy) installWithProxy(instance);
    }
    if (__VUE_OPTIONS_API__ && true) {
        const reset = setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        try {
            applyOptions(instance);
        } finally{
            (0, _reactivity.resetTracking)();
            reset();
        }
    }
    if (!Component.render && instance.render === (0, _shared.NOOP) && !isSSR) {
        if (!compile && Component.template) warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
        else warn$1(`Component is missing template or render function: `, Component);
    }
}
const attrsProxyHandlers = {
    get (target, key) {
        markAttrsAccessed();
        (0, _reactivity.track)(target, "get", "");
        return target[key];
    },
    set () {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
    },
    deleteProperty () {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
    }
};
function getSlotsProxy(instance) {
    return new Proxy(instance.slots, {
        get (target, key) {
            (0, _reactivity.track)(instance, "get", "$slots");
            return target[key];
        }
    });
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn$1(`expose() should be called only once per setup().`);
        if (exposed != null) {
            let exposedType = typeof exposed;
            if (exposedType === "object") {
                if ((0, _shared.isArray)(exposed)) exposedType = "array";
                else if ((0, _reactivity.isRef)(exposed)) exposedType = "ref";
            }
            if (exposedType !== "object") warn$1(`expose() should be passed a plain object, received ${exposedType}.`);
        }
        instance.exposed = exposed || {};
    };
    {
        let attrsProxy;
        let slotsProxy;
        return Object.freeze({
            get attrs () {
                return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
            },
            get slots () {
                return slotsProxy || (slotsProxy = getSlotsProxy(instance));
            },
            get emit () {
                return (event, ...args)=>instance.emit(event, ...args);
            },
            expose
        });
    }
}
function getComponentPublicInstance(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy((0, _reactivity.proxyRefs)((0, _reactivity.markRaw)(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        },
        has (target, key) {
            return key in target || key in publicPropertiesMap;
        }
    }));
    else return instance.proxy;
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
    return (0, _shared.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return (0, _shared.isFunction)(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions)=>{
    const c = (0, _reactivity.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
    {
        const i = getCurrentInstance();
        if (i && i.appContext.config.warnRecursiveComputed) c._warnRecursive = true;
    }
    return c;
};
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0, _shared.isObject)(propsOrChildren) && !(0, _shared.isArray)(propsOrChildren)) {
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            return createVNode(type, propsOrChildren);
        } else return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
function initCustomFormatter() {
    if (typeof window === "undefined") return;
    const vueStyle = {
        style: "color:#3ba776"
    };
    const numberStyle = {
        style: "color:#1677ff"
    };
    const stringStyle = {
        style: "color:#f5222d"
    };
    const keywordStyle = {
        style: "color:#eb2f96"
    };
    const formatter = {
        __vue_custom_formatter: true,
        header (obj) {
            if (!(0, _shared.isObject)(obj)) return null;
            if (obj.__isVue) return [
                "div",
                vueStyle,
                `VueInstance`
            ];
            else if ((0, _reactivity.isRef)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    genRefFlag(obj)
                ],
                "<",
                // avoid debugger accessing value affecting behavior
                formatValue("_value" in obj ? obj._value : obj),
                `>`
            ];
            else if ((0, _reactivity.isReactive)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    (0, _reactivity.isShallow)(obj) ? "ShallowReactive" : "Reactive"
                ],
                "<",
                formatValue(obj),
                `>${(0, _reactivity.isReadonly)(obj) ? ` (readonly)` : ``}`
            ];
            else if ((0, _reactivity.isReadonly)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    (0, _reactivity.isShallow)(obj) ? "ShallowReadonly" : "Readonly"
                ],
                "<",
                formatValue(obj),
                ">"
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                "div",
                {},
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", (0, _reactivity.toRaw)(instance.props)));
        if (instance.setupState !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("setup", instance.setupState));
        if (instance.data !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("data", (0, _reactivity.toRaw)(instance.data)));
        const computed = extractKeys(instance, "computed");
        if (computed) blocks.push(createInstanceBlock("computed", computed));
        const injected = extractKeys(instance, "inject");
        if (injected) blocks.push(createInstanceBlock("injected", injected));
        blocks.push([
            "div",
            {},
            [
                "span",
                {
                    style: keywordStyle.style + ";opacity:0.66"
                },
                "$ (internal): "
            ],
            [
                "object",
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = (0, _shared.extend)({}, target);
        if (!Object.keys(target).length) return [
            "span",
            {}
        ];
        return [
            "div",
            {
                style: "line-height:1.25em;margin-bottom:0.6em"
            },
            [
                "div",
                {
                    style: "color:#476582"
                },
                type
            ],
            [
                "div",
                {
                    style: "padding-left:1.25em"
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        "div",
                        {},
                        [
                            "span",
                            keywordStyle,
                            key + ": "
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v1, asRaw = true) {
        if (typeof v1 === "number") return [
            "span",
            numberStyle,
            v1
        ];
        else if (typeof v1 === "string") return [
            "span",
            stringStyle,
            JSON.stringify(v1)
        ];
        else if (typeof v1 === "boolean") return [
            "span",
            keywordStyle,
            v1
        ];
        else if ((0, _shared.isObject)(v1)) return [
            "object",
            {
                object: asRaw ? (0, _reactivity.toRaw)(v1) : v1
            }
        ];
        else return [
            "span",
            stringStyle,
            String(v1)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ((0, _shared.isFunction)(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((0, _shared.isArray)(opts) && opts.includes(key) || (0, _shared.isObject)(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type))) return true;
    }
    function genRefFlag(v1) {
        if ((0, _reactivity.isShallow)(v1)) return `ShallowRef`;
        if (v1.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    ret.memo = memo.slice();
    ret.cacheIndex = index;
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if ((0, _shared.hasChanged)(prev[i], memo[i])) return false;
    }
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
const version = "3.5.13";
const warn = warn$1;
const ErrorTypeStrings = ErrorTypeStrings$1;
const devtools = devtools$1;
const setDevtoolsHook = setDevtoolsHook$1;
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode: isVNode,
    normalizeVNode,
    getComponentPublicInstance,
    ensureValidVNode,
    pushWarningContext,
    popWarningContext
};
const ssrUtils = _ssrUtils;
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;

},{"@vue/reactivity":"es54k","@vue/shared":"9cuv0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"es54k":[function(require,module,exports,__globalThis) {
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ARRAY_ITERATE_KEY", ()=>ARRAY_ITERATE_KEY);
parcelHelpers.export(exports, "EffectFlags", ()=>EffectFlags);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY);
parcelHelpers.export(exports, "MAP_KEY_ITERATE_KEY", ()=>MAP_KEY_ITERATE_KEY);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect);
parcelHelpers.export(exports, "ReactiveFlags", ()=>ReactiveFlags);
parcelHelpers.export(exports, "TrackOpTypes", ()=>TrackOpTypes);
parcelHelpers.export(exports, "TriggerOpTypes", ()=>TriggerOpTypes);
parcelHelpers.export(exports, "WatchErrorCodes", ()=>WatchErrorCodes);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "customRef", ()=>customRef);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "effectScope", ()=>effectScope);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope);
parcelHelpers.export(exports, "getCurrentWatcher", ()=>getCurrentWatcher);
parcelHelpers.export(exports, "isProxy", ()=>isProxy);
parcelHelpers.export(exports, "isReactive", ()=>isReactive);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "isShallow", ()=>isShallow);
parcelHelpers.export(exports, "markRaw", ()=>markRaw);
parcelHelpers.export(exports, "onEffectCleanup", ()=>onEffectCleanup);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose);
parcelHelpers.export(exports, "onWatcherCleanup", ()=>onWatcherCleanup);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "reactiveReadArray", ()=>reactiveReadArray);
parcelHelpers.export(exports, "readonly", ()=>readonly);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive);
parcelHelpers.export(exports, "shallowReadArray", ()=>shallowReadArray);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "toRaw", ()=>toRaw);
parcelHelpers.export(exports, "toReactive", ()=>toReactive);
parcelHelpers.export(exports, "toReadonly", ()=>toReadonly);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "toValue", ()=>toValue);
parcelHelpers.export(exports, "track", ()=>track);
parcelHelpers.export(exports, "traverse", ()=>traverse);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef);
parcelHelpers.export(exports, "unref", ()=>unref);
parcelHelpers.export(exports, "watch", ()=>watch);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.detached = detached;
        /**
     * @internal
     */ this._active = true;
        /**
     * @internal
     */ this.effects = [];
        /**
     * @internal
     */ this.cleanups = [];
        this._isPaused = false;
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = true;
            let i, l;
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].pause();
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].pause();
        }
    }
    /**
   * Resumes the effect scope, including all child scopes and effects.
   */ resume() {
        if (this._active) {
            if (this._isPaused) {
                this._isPaused = false;
                let i, l;
                if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].resume();
                for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].resume();
            }
        }
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else warn(`cannot run an inactive effect scope.`);
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        activeEffectScope = this;
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this._active) {
            this._active = false;
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            this.effects.length = 0;
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            this.cleanups.length = 0;
            if (this.scopes) {
                for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !fromParent) {
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = void 0;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else if (!failSilently) warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
}
let activeSub;
const EffectFlags = {
    "ACTIVE": 1,
    "1": "ACTIVE",
    "RUNNING": 2,
    "2": "RUNNING",
    "TRACKING": 4,
    "4": "TRACKING",
    "NOTIFIED": 8,
    "8": "NOTIFIED",
    "DIRTY": 16,
    "16": "DIRTY",
    "ALLOW_RECURSE": 32,
    "32": "ALLOW_RECURSE",
    "PAUSED": 64,
    "64": "PAUSED"
};
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
    constructor(fn){
        this.fn = fn;
        /**
     * @internal
     */ this.deps = void 0;
        /**
     * @internal
     */ this.depsTail = void 0;
        /**
     * @internal
     */ this.flags = 5;
        /**
     * @internal
     */ this.next = void 0;
        /**
     * @internal
     */ this.cleanup = void 0;
        this.scheduler = void 0;
        if (activeEffectScope && activeEffectScope.active) activeEffectScope.effects.push(this);
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        if (this.flags & 64) {
            this.flags &= -65;
            if (pausedQueueEffects.has(this)) {
                pausedQueueEffects.delete(this);
                this.trigger();
            }
        }
    }
    /**
   * @internal
   */ notify() {
        if (this.flags & 2 && !(this.flags & 32)) return;
        if (!(this.flags & 8)) batch(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2;
        cleanupEffect(this);
        prepareDeps(this);
        const prevEffect = activeSub;
        const prevShouldTrack = shouldTrack;
        activeSub = this;
        shouldTrack = true;
        try {
            return this.fn();
        } finally{
            if (activeSub !== this) warn("Active effect was not restored correctly - this is likely a Vue internal bug.");
            cleanupDeps(this);
            activeSub = prevEffect;
            shouldTrack = prevShouldTrack;
            this.flags &= -3;
        }
    }
    stop() {
        if (this.flags & 1) {
            for(let link = this.deps; link; link = link.nextDep)removeSub(link);
            this.deps = this.depsTail = void 0;
            cleanupEffect(this);
            this.onStop && this.onStop();
            this.flags &= -2;
        }
    }
    trigger() {
        if (this.flags & 64) pausedQueueEffects.add(this);
        else if (this.scheduler) this.scheduler();
        else this.runIfDirty();
    }
    /**
   * @internal
   */ runIfDirty() {
        if (isDirty(this)) this.run();
    }
    get dirty() {
        return isDirty(this);
    }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
    sub.flags |= 8;
    if (isComputed) {
        sub.next = batchedComputed;
        batchedComputed = sub;
        return;
    }
    sub.next = batchedSub;
    batchedSub = sub;
}
function startBatch() {
    batchDepth++;
}
function endBatch() {
    if (--batchDepth > 0) return;
    if (batchedComputed) {
        let e = batchedComputed;
        batchedComputed = void 0;
        while(e){
            const next = e.next;
            e.next = void 0;
            e.flags &= -9;
            e = next;
        }
    }
    let error;
    while(batchedSub){
        let e = batchedSub;
        batchedSub = void 0;
        while(e){
            const next = e.next;
            e.next = void 0;
            e.flags &= -9;
            if (e.flags & 1) try {
                e.trigger();
            } catch (err) {
                if (!error) error = err;
            }
            e = next;
        }
    }
    if (error) throw error;
}
function prepareDeps(sub) {
    for(let link = sub.deps; link; link = link.nextDep){
        link.version = -1;
        link.prevActiveLink = link.dep.activeLink;
        link.dep.activeLink = link;
    }
}
function cleanupDeps(sub) {
    let head;
    let tail = sub.depsTail;
    let link = tail;
    while(link){
        const prev = link.prevDep;
        if (link.version === -1) {
            if (link === tail) tail = prev;
            removeSub(link);
            removeDep(link);
        } else head = link;
        link.dep.activeLink = link.prevActiveLink;
        link.prevActiveLink = void 0;
        link = prev;
    }
    sub.deps = head;
    sub.depsTail = tail;
}
function isDirty(sub) {
    for(let link = sub.deps; link; link = link.nextDep){
        if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) return true;
    }
    if (sub._dirty) return true;
    return false;
}
function refreshComputed(computed) {
    if (computed.flags & 4 && !(computed.flags & 16)) return;
    computed.flags &= -17;
    if (computed.globalVersion === globalVersion) return;
    computed.globalVersion = globalVersion;
    const dep = computed.dep;
    computed.flags |= 2;
    if (dep.version > 0 && !computed.isSSR && computed.deps && !isDirty(computed)) {
        computed.flags &= -3;
        return;
    }
    const prevSub = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = computed;
    shouldTrack = true;
    try {
        prepareDeps(computed);
        const value = computed.fn(computed._value);
        if (dep.version === 0 || (0, _shared.hasChanged)(value, computed._value)) {
            computed._value = value;
            dep.version++;
        }
    } catch (err) {
        dep.version++;
        throw err;
    } finally{
        activeSub = prevSub;
        shouldTrack = prevShouldTrack;
        cleanupDeps(computed);
        computed.flags &= -3;
    }
}
function removeSub(link, soft = false) {
    const { dep, prevSub, nextSub } = link;
    if (prevSub) {
        prevSub.nextSub = nextSub;
        link.prevSub = void 0;
    }
    if (nextSub) {
        nextSub.prevSub = prevSub;
        link.nextSub = void 0;
    }
    if (dep.subsHead === link) dep.subsHead = nextSub;
    if (dep.subs === link) {
        dep.subs = prevSub;
        if (!prevSub && dep.computed) {
            dep.computed.flags &= -5;
            for(let l = dep.computed.deps; l; l = l.nextDep)removeSub(l, true);
        }
    }
    if (!soft && !--dep.sc && dep.map) dep.map.delete(dep.key);
}
function removeDep(link) {
    const { prevDep, nextDep } = link;
    if (prevDep) {
        prevDep.nextDep = nextDep;
        link.prevDep = void 0;
    }
    if (nextDep) {
        nextDep.prevDep = prevDep;
        link.nextDep = void 0;
    }
}
function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) fn = fn.effect.fn;
    const e = new ReactiveEffect(fn);
    if (options) (0, _shared.extend)(e, options);
    try {
        e.run();
    } catch (err) {
        e.stop();
        throw err;
    }
    const runner = e.run.bind(e);
    runner.effect = e;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function onEffectCleanup(fn, failSilently = false) {
    if (activeSub instanceof ReactiveEffect) activeSub.cleanup = fn;
    else if (!failSilently) warn(`onEffectCleanup() was called when there was no active effect to associate with.`);
}
function cleanupEffect(e) {
    const { cleanup } = e;
    e.cleanup = void 0;
    if (cleanup) {
        const prevSub = activeSub;
        activeSub = void 0;
        try {
            cleanup();
        } finally{
            activeSub = prevSub;
        }
    }
}
let globalVersion = 0;
class Link {
    constructor(sub, dep){
        this.sub = sub;
        this.dep = dep;
        this.version = dep.version;
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
}
class Dep {
    constructor(computed){
        this.computed = computed;
        this.version = 0;
        /**
     * Link between this dep and the current active effect
     */ this.activeLink = void 0;
        /**
     * Doubly linked list representing the subscribing effects (tail)
     */ this.subs = void 0;
        /**
     * For object property deps cleanup
     */ this.map = void 0;
        this.key = void 0;
        /**
     * Subscriber counter
     */ this.sc = 0;
        this.subsHead = void 0;
    }
    track(debugInfo) {
        if (!activeSub || !shouldTrack || activeSub === this.computed) return;
        let link = this.activeLink;
        if (link === void 0 || link.sub !== activeSub) {
            link = this.activeLink = new Link(activeSub, this);
            if (!activeSub.deps) activeSub.deps = activeSub.depsTail = link;
            else {
                link.prevDep = activeSub.depsTail;
                activeSub.depsTail.nextDep = link;
                activeSub.depsTail = link;
            }
            addSub(link);
        } else if (link.version === -1) {
            link.version = this.version;
            if (link.nextDep) {
                const next = link.nextDep;
                next.prevDep = link.prevDep;
                if (link.prevDep) link.prevDep.nextDep = next;
                link.prevDep = activeSub.depsTail;
                link.nextDep = void 0;
                activeSub.depsTail.nextDep = link;
                activeSub.depsTail = link;
                if (activeSub.deps === link) activeSub.deps = next;
            }
        }
        if (0, activeSub.onTrack) activeSub.onTrack((0, _shared.extend)({
            effect: activeSub
        }, debugInfo));
        return link;
    }
    trigger(debugInfo) {
        this.version++;
        globalVersion++;
        this.notify(debugInfo);
    }
    notify(debugInfo) {
        startBatch();
        try {
            for(let head = this.subsHead; head; head = head.nextSub)if (head.sub.onTrigger && !(head.sub.flags & 8)) head.sub.onTrigger((0, _shared.extend)({
                effect: head.sub
            }, debugInfo));
            for(let link = this.subs; link; link = link.prevSub)if (link.sub.notify()) link.sub.dep.notify();
        } finally{
            endBatch();
        }
    }
}
function addSub(link) {
    link.dep.sc++;
    if (link.sub.flags & 4) {
        const computed = link.dep.computed;
        if (computed && !link.dep.subs) {
            computed.flags |= 20;
            for(let l = computed.deps; l; l = l.nextDep)addSub(l);
        }
        const currentTail = link.dep.subs;
        if (currentTail !== link) {
            link.prevSub = currentTail;
            if (currentTail) currentTail.nextSub = link;
        }
        if (link.dep.subsHead === void 0) link.dep.subsHead = link;
        link.dep.subs = link;
    }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("Object iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map keys iterate");
const ARRAY_ITERATE_KEY = Symbol("Array iterate");
function track(target, type, key) {
    if (shouldTrack && activeSub) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, dep = new Dep());
            dep.map = depsMap;
            dep.key = key;
        }
        dep.track({
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        globalVersion++;
        return;
    }
    const run = (dep)=>{
        if (dep) dep.trigger({
            target,
            type,
            key,
            newValue,
            oldValue,
            oldTarget
        });
    };
    startBatch();
    if (type === "clear") depsMap.forEach(run);
    else {
        const targetIsArray = (0, _shared.isArray)(target);
        const isArrayIndex = targetIsArray && (0, _shared.isIntegerKey)(key);
        if (targetIsArray && key === "length") {
            const newLength = Number(newValue);
            depsMap.forEach((dep, key2)=>{
                if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !(0, _shared.isSymbol)(key2) && key2 >= newLength) run(dep);
            });
        } else {
            if (key !== void 0 || depsMap.has(void 0)) run(depsMap.get(key));
            if (isArrayIndex) run(depsMap.get(ARRAY_ITERATE_KEY));
            switch(type){
                case "add":
                    if (!targetIsArray) {
                        run(depsMap.get(ITERATE_KEY));
                        if ((0, _shared.isMap)(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
                    } else if (isArrayIndex) run(depsMap.get("length"));
                    break;
                case "delete":
                    if (!targetIsArray) {
                        run(depsMap.get(ITERATE_KEY));
                        if ((0, _shared.isMap)(target)) run(depsMap.get(MAP_KEY_ITERATE_KEY));
                    }
                    break;
                case "set":
                    if ((0, _shared.isMap)(target)) run(depsMap.get(ITERATE_KEY));
                    break;
            }
        }
    }
    endBatch();
}
function getDepFromReactive(object, key) {
    const depMap = targetMap.get(object);
    return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
    const raw = toRaw(array);
    if (raw === array) return raw;
    track(raw, "iterate", ARRAY_ITERATE_KEY);
    return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
    track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
    return arr;
}
const arrayInstrumentations = {
    __proto__: null,
    [Symbol.iterator] () {
        return iterator(this, Symbol.iterator, toReactive);
    },
    concat (...args) {
        return reactiveReadArray(this).concat(...args.map((x)=>(0, _shared.isArray)(x) ? reactiveReadArray(x) : x));
    },
    entries () {
        return iterator(this, "entries", (value)=>{
            value[1] = toReactive(value[1]);
            return value;
        });
    },
    every (fn, thisArg) {
        return apply(this, "every", fn, thisArg, void 0, arguments);
    },
    filter (fn, thisArg) {
        return apply(this, "filter", fn, thisArg, (v)=>v.map(toReactive), arguments);
    },
    find (fn, thisArg) {
        return apply(this, "find", fn, thisArg, toReactive, arguments);
    },
    findIndex (fn, thisArg) {
        return apply(this, "findIndex", fn, thisArg, void 0, arguments);
    },
    findLast (fn, thisArg) {
        return apply(this, "findLast", fn, thisArg, toReactive, arguments);
    },
    findLastIndex (fn, thisArg) {
        return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
    },
    // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
    forEach (fn, thisArg) {
        return apply(this, "forEach", fn, thisArg, void 0, arguments);
    },
    includes (...args) {
        return searchProxy(this, "includes", args);
    },
    indexOf (...args) {
        return searchProxy(this, "indexOf", args);
    },
    join (separator) {
        return reactiveReadArray(this).join(separator);
    },
    // keys() iterator only reads `length`, no optimisation required
    lastIndexOf (...args) {
        return searchProxy(this, "lastIndexOf", args);
    },
    map (fn, thisArg) {
        return apply(this, "map", fn, thisArg, void 0, arguments);
    },
    pop () {
        return noTracking(this, "pop");
    },
    push (...args) {
        return noTracking(this, "push", args);
    },
    reduce (fn, ...args) {
        return reduce(this, "reduce", fn, args);
    },
    reduceRight (fn, ...args) {
        return reduce(this, "reduceRight", fn, args);
    },
    shift () {
        return noTracking(this, "shift");
    },
    // slice could use ARRAY_ITERATE but also seems to beg for range tracking
    some (fn, thisArg) {
        return apply(this, "some", fn, thisArg, void 0, arguments);
    },
    splice (...args) {
        return noTracking(this, "splice", args);
    },
    toReversed () {
        return reactiveReadArray(this).toReversed();
    },
    toSorted (comparer) {
        return reactiveReadArray(this).toSorted(comparer);
    },
    toSpliced (...args) {
        return reactiveReadArray(this).toSpliced(...args);
    },
    unshift (...args) {
        return noTracking(this, "unshift", args);
    },
    values () {
        return iterator(this, "values", toReactive);
    }
};
function iterator(self, method, wrapValue) {
    const arr = shallowReadArray(self);
    const iter = arr[method]();
    if (arr !== self && !isShallow(self)) {
        iter._next = iter.next;
        iter.next = ()=>{
            const result = iter._next();
            if (result.value) result.value = wrapValue(result.value);
            return result;
        };
    }
    return iter;
}
const arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
    const arr = shallowReadArray(self);
    const needsWrap = arr !== self && !isShallow(self);
    const methodFn = arr[method];
    if (methodFn !== arrayProto[method]) {
        const result2 = methodFn.apply(self, args);
        return needsWrap ? toReactive(result2) : result2;
    }
    let wrappedFn = fn;
    if (arr !== self) {
        if (needsWrap) wrappedFn = function(item, index) {
            return fn.call(this, toReactive(item), index, self);
        };
        else if (fn.length > 2) wrappedFn = function(item, index) {
            return fn.call(this, item, index, self);
        };
    }
    const result = methodFn.call(arr, wrappedFn, thisArg);
    return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
    const arr = shallowReadArray(self);
    let wrappedFn = fn;
    if (arr !== self) {
        if (!isShallow(self)) wrappedFn = function(acc, item, index) {
            return fn.call(this, acc, toReactive(item), index, self);
        };
        else if (fn.length > 3) wrappedFn = function(acc, item, index) {
            return fn.call(this, acc, item, index, self);
        };
    }
    return arr[method](wrappedFn, ...args);
}
function searchProxy(self, method, args) {
    const arr = toRaw(self);
    track(arr, "iterate", ARRAY_ITERATE_KEY);
    const res = arr[method](...args);
    if ((res === -1 || res === false) && isProxy(args[0])) {
        args[0] = toRaw(args[0]);
        return arr[method](...args);
    }
    return res;
}
function noTracking(self, method, args = []) {
    pauseTracking();
    startBatch();
    const res = toRaw(self)[method].apply(self, args);
    endBatch();
    resetTracking();
    return res;
}
const isNonTrackableKeys = /* @__PURE__ */ (0, _shared.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter((0, _shared.isSymbol)));
function hasOwnProperty(key) {
    if (!(0, _shared.isSymbol)(key)) key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
    constructor(_isReadonly = false, _isShallow = false){
        this._isReadonly = _isReadonly;
        this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
        if (key === "__v_skip") return target["__v_skip"];
        const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_isShallow") return isShallow2;
        else if (key === "__v_raw") {
            if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the receiver is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
            return;
        }
        const targetIsArray = (0, _shared.isArray)(target);
        if (!isReadonly2) {
            let fn;
            if (targetIsArray && (fn = arrayInstrumentations[key])) return fn;
            if (key === "hasOwnProperty") return hasOwnProperty;
        }
        const res = Reflect.get(target, key, // if this is a proxy wrapping a ref, return methods using the raw ref
        // as receiver so that we don't have to call `toRaw` on the ref in all
        // its class methods
        isRef(target) ? target : receiver);
        if ((0, _shared.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly2) track(target, "get", key);
        if (isShallow2) return res;
        if (isRef(res)) return targetIsArray && (0, _shared.isIntegerKey)(key) ? res : res.value;
        if ((0, _shared.isObject)(res)) return isReadonly2 ? readonly(res) : reactive(res);
        return res;
    }
}
class MutableReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(false, isShallow2);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._isShallow) {
            const isOldValueReadonly = isReadonly(oldValue);
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!(0, _shared.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                if (isOldValueReadonly) return false;
                else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = (0, _shared.isArray)(target) && (0, _shared.isIntegerKey)(key) ? Number(key) < target.length : (0, _shared.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, isRef(target) ? target : receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = (0, _shared.hasOwn)(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!(0, _shared.isSymbol)(key) || !builtInSymbols.has(key)) track(target, "has", key);
        return result;
    }
    ownKeys(target) {
        track(target, "iterate", (0, _shared.isArray)(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
    }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(true, isShallow2);
    }
    set(target, key) {
        warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
    deleteProperty(target, key) {
        warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value)=>value;
const getProto = (v)=>Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = (0, _shared.isMap)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            warn(`${(0, _shared.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function createInstrumentations(readonly, shallow) {
    const instrumentations = {
        get (key) {
            const target = this["__v_raw"];
            const rawTarget = toRaw(target);
            const rawKey = toRaw(key);
            if (!readonly) {
                if ((0, _shared.hasChanged)(key, rawKey)) track(rawTarget, "get", key);
                track(rawTarget, "get", rawKey);
            }
            const { has } = getProto(rawTarget);
            const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
            if (has.call(rawTarget, key)) return wrap(target.get(key));
            else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
            else if (target !== rawTarget) target.get(key);
        },
        get size () {
            const target = this["__v_raw"];
            !readonly && track(toRaw(target), "iterate", ITERATE_KEY);
            return Reflect.get(target, "size", target);
        },
        has (key) {
            const target = this["__v_raw"];
            const rawTarget = toRaw(target);
            const rawKey = toRaw(key);
            if (!readonly) {
                if ((0, _shared.hasChanged)(key, rawKey)) track(rawTarget, "has", key);
                track(rawTarget, "has", rawKey);
            }
            return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        },
        forEach (callback, thisArg) {
            const observed = this;
            const target = observed["__v_raw"];
            const rawTarget = toRaw(target);
            const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
            !readonly && track(rawTarget, "iterate", ITERATE_KEY);
            return target.forEach((value, key)=>{
                return callback.call(thisArg, wrap(value), wrap(key), observed);
            });
        }
    };
    (0, _shared.extend)(instrumentations, readonly ? {
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear")
    } : {
        add (value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) value = toRaw(value);
            const target = toRaw(this);
            const proto = getProto(target);
            const hadKey = proto.has.call(target, value);
            if (!hadKey) {
                target.add(value);
                trigger(target, "add", value, value);
            }
            return this;
        },
        set (key, value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) value = toRaw(value);
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
                key = toRaw(key);
                hadKey = has.call(target, key);
            } else checkIdentityKeys(target, has, key);
            const oldValue = get.call(target, key);
            target.set(key, value);
            if (!hadKey) trigger(target, "add", key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set", key, value, oldValue);
            return this;
        },
        delete (key) {
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
                key = toRaw(key);
                hadKey = has.call(target, key);
            } else checkIdentityKeys(target, has, key);
            const oldValue = get ? get.call(target, key) : void 0;
            const result = target.delete(key);
            if (hadKey) trigger(target, "delete", key, void 0, oldValue);
            return result;
        },
        clear () {
            const target = toRaw(this);
            const hadItems = target.size !== 0;
            const oldTarget = (0, _shared.isMap)(target) ? new Map(target) : new Set(target);
            const result = target.clear();
            if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
            return result;
        }
    });
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        instrumentations[method] = createIterableMethod(method, readonly, shallow);
    });
    return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = createInstrumentations(isReadonly2, shallow);
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_raw") return target;
        return Reflect.get((0, _shared.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0, _shared.toRawType)(target);
        warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap((0, _shared.toRawType)(value));
}
function reactive(target) {
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, _shared.isObject)(target)) {
        warn(`value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw"]);
    return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    if (!(0, _shared.hasOwn)(value, "__v_skip") && Object.isExtensible(value)) (0, _shared.def)(value, "__v_skip", true);
    return value;
}
const toReactive = (value)=>(0, _shared.isObject)(value) ? reactive(value) : value;
const toReadonly = (value)=>(0, _shared.isObject)(value) ? readonly(value) : value;
function isRef(r) {
    return r ? r["__v_isRef"] === true : false;
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, isShallow2){
        this.dep = new Dep();
        this["__v_isRef"] = true;
        this["__v_isShallow"] = false;
        this._rawValue = isShallow2 ? value : toRaw(value);
        this._value = isShallow2 ? value : toReactive(value);
        this["__v_isShallow"] = isShallow2;
    }
    get value() {
        this.dep.track({
            target: this,
            type: "get",
            key: "value"
        });
        return this._value;
    }
    set value(newValue) {
        const oldValue = this._rawValue;
        const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
        newValue = useDirectValue ? newValue : toRaw(newValue);
        if ((0, _shared.hasChanged)(newValue, oldValue)) {
            this._rawValue = newValue;
            this._value = useDirectValue ? newValue : toReactive(newValue);
            this.dep.trigger({
                target: this,
                type: "set",
                key: "value",
                newValue,
                oldValue
            });
        }
    }
}
function triggerRef(ref2) {
    if (ref2.dep) ref2.dep.trigger({
        target: ref2,
        type: "set",
        key: "value",
        newValue: ref2._value
    });
}
function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
    return (0, _shared.isFunction)(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this["__v_isRef"] = true;
        this._value = void 0;
        const dep = this.dep = new Dep();
        const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._value = this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = (0, _shared.isArray)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = propertyToRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this["__v_isRef"] = true;
        this._value = void 0;
    }
    get value() {
        const val = this._object[this._key];
        return this._value = val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
    get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
    }
}
class GetterRefImpl {
    constructor(_getter){
        this._getter = _getter;
        this["__v_isRef"] = true;
        this["__v_isReadonly"] = true;
        this._value = void 0;
    }
    get value() {
        return this._value = this._getter();
    }
}
function toRef(source, key, defaultValue) {
    if (isRef(source)) return source;
    else if ((0, _shared.isFunction)(source)) return new GetterRefImpl(source);
    else if ((0, _shared.isObject)(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
    else return ref(source);
}
function propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
    constructor(fn, setter, isSSR){
        this.fn = fn;
        this.setter = setter;
        /**
     * @internal
     */ this._value = void 0;
        /**
     * @internal
     */ this.dep = new Dep(this);
        /**
     * @internal
     */ this.__v_isRef = true;
        // TODO isolatedDeclarations "__v_isReadonly"
        // A computed is also a subscriber that tracks other deps
        /**
     * @internal
     */ this.deps = void 0;
        /**
     * @internal
     */ this.depsTail = void 0;
        /**
     * @internal
     */ this.flags = 16;
        /**
     * @internal
     */ this.globalVersion = globalVersion - 1;
        /**
     * @internal
     */ this.next = void 0;
        // for backwards compat
        this.effect = this;
        this["__v_isReadonly"] = !setter;
        this.isSSR = isSSR;
    }
    /**
   * @internal
   */ notify() {
        this.flags |= 16;
        if (!(this.flags & 8) && // avoid infinite self recursion
        activeSub !== this) {
            batch(this, true);
            return true;
        }
    }
    get value() {
        const link = this.dep.track({
            target: this,
            type: "get",
            key: "value"
        });
        refreshComputed(this);
        if (link) link.version = this.dep.version;
        return this._value;
    }
    set value(newValue) {
        if (this.setter) this.setter(newValue);
        else warn("Write operation failed: computed value is readonly");
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    if ((0, _shared.isFunction)(getterOrOptions)) getter = getterOrOptions;
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.onTrack = debugOptions.onTrack;
        cRef.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
const TrackOpTypes = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const TriggerOpTypes = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const ReactiveFlags = {
    "SKIP": "__v_skip",
    "IS_REACTIVE": "__v_isReactive",
    "IS_READONLY": "__v_isReadonly",
    "IS_SHALLOW": "__v_isShallow",
    "RAW": "__v_raw",
    "IS_REF": "__v_isRef"
};
const WatchErrorCodes = {
    "WATCH_GETTER": 2,
    "2": "WATCH_GETTER",
    "WATCH_CALLBACK": 3,
    "3": "WATCH_CALLBACK",
    "WATCH_CLEANUP": 4,
    "4": "WATCH_CLEANUP"
};
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function getCurrentWatcher() {
    return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
    if (owner) {
        let cleanups = cleanupMap.get(owner);
        if (!cleanups) cleanupMap.set(owner, cleanups = []);
        cleanups.push(cleanupFn);
    } else if (!failSilently) warn(`onWatcherCleanup() was called when there was no active watcher to associate with.`);
}
function watch(source, cb, options = (0, _shared.EMPTY_OBJ)) {
    const { immediate, deep, once, scheduler, augmentJob, call } = options;
    const warnInvalidSource = (s)=>{
        (options.onWarn || warn)(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const reactiveGetter = (source2)=>{
        if (deep) return source2;
        if (isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
        return traverse(source2);
    };
    let effect;
    let getter;
    let cleanup;
    let boundCleanup;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
        getter = ()=>source.value;
        forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
        getter = ()=>reactiveGetter(source);
        forceTrigger = true;
    } else if ((0, _shared.isArray)(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>isReactive(s) || isShallow(s));
        getter = ()=>source.map((s)=>{
                if (isRef(s)) return s.value;
                else if (isReactive(s)) return reactiveGetter(s);
                else if ((0, _shared.isFunction)(s)) return call ? call(s, 2) : s();
                else warnInvalidSource(s);
            });
    } else if ((0, _shared.isFunction)(source)) {
        if (cb) getter = call ? ()=>call(source, 2) : source;
        else getter = ()=>{
            if (cleanup) {
                pauseTracking();
                try {
                    cleanup();
                } finally{
                    resetTracking();
                }
            }
            const currentEffect = activeWatcher;
            activeWatcher = effect;
            try {
                return call ? call(source, 3, [
                    boundCleanup
                ]) : source(boundCleanup);
            } finally{
                activeWatcher = currentEffect;
            }
        };
    } else {
        getter = (0, _shared.NOOP);
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        const depth = deep === true ? Infinity : deep;
        getter = ()=>traverse(baseGetter(), depth);
    }
    const scope = getCurrentScope();
    const watchHandle = ()=>{
        effect.stop();
        if (scope && scope.active) (0, _shared.remove)(scope.effects, effect);
    };
    if (once && cb) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            watchHandle();
        };
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = (immediateFirstRun)=>{
        if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) return;
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i)=>(0, _shared.hasChanged)(v, oldValue[i])) : (0, _shared.hasChanged)(newValue, oldValue))) {
                if (cleanup) cleanup();
                const currentWatcher = activeWatcher;
                activeWatcher = effect;
                try {
                    const args = [
                        newValue,
                        // pass undefined as the old value when it's changed for the first time
                        oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                        boundCleanup
                    ];
                    call ? call(cb, 3, args) : // @ts-expect-error
                    cb(...args);
                    oldValue = newValue;
                } finally{
                    activeWatcher = currentWatcher;
                }
            }
        } else effect.run();
    };
    if (augmentJob) augmentJob(job);
    effect = new ReactiveEffect(getter);
    effect.scheduler = scheduler ? ()=>scheduler(job, false) : job;
    boundCleanup = (fn)=>onWatcherCleanup(fn, false, effect);
    cleanup = effect.onStop = ()=>{
        const cleanups = cleanupMap.get(effect);
        if (cleanups) {
            if (call) call(cleanups, 4);
            else for (const cleanup2 of cleanups)cleanup2();
            cleanupMap.delete(effect);
        }
    };
    effect.onTrack = options.onTrack;
    effect.onTrigger = options.onTrigger;
    if (cb) {
        if (immediate) job(true);
        else oldValue = effect.run();
    } else if (scheduler) scheduler(job.bind(null, true), true);
    else effect.run();
    watchHandle.pause = effect.pause.bind(effect);
    watchHandle.resume = effect.resume.bind(effect);
    watchHandle.stop = watchHandle;
    return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !(0, _shared.isObject)(value) || value["__v_skip"]) return value;
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    depth--;
    if (isRef(value)) traverse(value.value, depth, seen);
    else if ((0, _shared.isArray)(value)) for(let i = 0; i < value.length; i++)traverse(value[i], depth, seen);
    else if ((0, _shared.isSet)(value) || (0, _shared.isMap)(value)) value.forEach((v)=>{
        traverse(v, depth, seen);
    });
    else if ((0, _shared.isPlainObject)(value)) {
        for(const key in value)traverse(value[key], depth, seen);
        for (const key of Object.getOwnPropertySymbols(value))if (Object.prototype.propertyIsEnumerable.call(value, key)) traverse(value[key], depth, seen);
    }
    return value;
}

},{"@vue/shared":"9cuv0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9cuv0":[function(require,module,exports,__globalThis) {
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ /*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ);
parcelHelpers.export(exports, "NO", ()=>NO);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames);
parcelHelpers.export(exports, "PatchFlags", ()=>PatchFlags);
parcelHelpers.export(exports, "ShapeFlags", ()=>ShapeFlags);
parcelHelpers.export(exports, "SlotFlags", ()=>SlotFlags);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "cssVarNameEscapeSymbolsRE", ()=>cssVarNameEscapeSymbolsRE);
parcelHelpers.export(exports, "def", ()=>def);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "genCacheKey", ()=>genCacheKey);
parcelHelpers.export(exports, "genPropsAccessExp", ()=>genPropsAccessExp);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame);
parcelHelpers.export(exports, "getEscapedCssVarName", ()=>getEscapedCssVarName);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr);
parcelHelpers.export(exports, "isBuiltInDirective", ()=>isBuiltInDirective);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isGloballyAllowed", ()=>isGloballyAllowed);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr);
parcelHelpers.export(exports, "isKnownMathMLAttr", ()=>isKnownMathMLAttr);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr);
parcelHelpers.export(exports, "isMap", ()=>isMap);
parcelHelpers.export(exports, "isMathMLTag", ()=>isMathMLTag);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isOn", ()=>isOn);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
parcelHelpers.export(exports, "isRegExp", ()=>isRegExp);
parcelHelpers.export(exports, "isRenderableAttrValue", ()=>isRenderableAttrValue);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
parcelHelpers.export(exports, "isSet", ()=>isSet);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf);
parcelHelpers.export(exports, "looseToNumber", ()=>looseToNumber);
parcelHelpers.export(exports, "makeMap", ()=>makeMap);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle);
parcelHelpers.export(exports, "objectToString", ()=>objectToString);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toRawType", ()=>toRawType);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString);
var global = arguments[3];
function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(","))map[key] = 1;
    return (val)=>val in map;
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
const NO = ()=>false;
const isOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>toTypeString(val) === "[object Date]";
const isRegExp = (val)=>toTypeString(val) === "[object RegExp]";
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str)=>{
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
});
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](...arg);
};
const def = (obj, key, value, writable = false)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable,
        value
    });
};
const looseToNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const toNumber = (val)=>{
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function genCacheKey(source, options) {
    return source + JSON.stringify(options, (_, val)=>typeof val === "function" ? val.toString() : val);
}
const PatchFlags = {
    "TEXT": 1,
    "1": "TEXT",
    "CLASS": 2,
    "2": "CLASS",
    "STYLE": 4,
    "4": "STYLE",
    "PROPS": 8,
    "8": "PROPS",
    "FULL_PROPS": 16,
    "16": "FULL_PROPS",
    "NEED_HYDRATION": 32,
    "32": "NEED_HYDRATION",
    "STABLE_FRAGMENT": 64,
    "64": "STABLE_FRAGMENT",
    "KEYED_FRAGMENT": 128,
    "128": "KEYED_FRAGMENT",
    "UNKEYED_FRAGMENT": 256,
    "256": "UNKEYED_FRAGMENT",
    "NEED_PATCH": 512,
    "512": "NEED_PATCH",
    "DYNAMIC_SLOTS": 1024,
    "1024": "DYNAMIC_SLOTS",
    "DEV_ROOT_FRAGMENT": 2048,
    "2048": "DEV_ROOT_FRAGMENT",
    "CACHED": -1,
    "-1": "CACHED",
    "BAIL": -2,
    "-2": "BAIL"
};
const PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
};
const ShapeFlags = {
    "ELEMENT": 1,
    "1": "ELEMENT",
    "FUNCTIONAL_COMPONENT": 2,
    "2": "FUNCTIONAL_COMPONENT",
    "STATEFUL_COMPONENT": 4,
    "4": "STATEFUL_COMPONENT",
    "TEXT_CHILDREN": 8,
    "8": "TEXT_CHILDREN",
    "ARRAY_CHILDREN": 16,
    "16": "ARRAY_CHILDREN",
    "SLOTS_CHILDREN": 32,
    "32": "SLOTS_CHILDREN",
    "TELEPORT": 64,
    "64": "TELEPORT",
    "SUSPENSE": 128,
    "128": "SUSPENSE",
    "COMPONENT_SHOULD_KEEP_ALIVE": 256,
    "256": "COMPONENT_SHOULD_KEEP_ALIVE",
    "COMPONENT_KEPT_ALIVE": 512,
    "512": "COMPONENT_KEPT_ALIVE",
    "COMPONENT": 6,
    "6": "COMPONENT"
};
const SlotFlags = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
};
const slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    start = Math.max(0, Math.min(start, source.length));
    end = Math.max(0, Math.min(end, source.length));
    if (start > end) return "";
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value) || isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    if (!styles) return "";
    if (isString(styles)) return styles;
    let ret = "";
    for(const key in styles){
        const value = styles[key];
        if (isString(value) || typeof value === "number") {
            const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
    return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
const isKnownMathMLAttr = /* @__PURE__ */ makeMap(`accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`);
function isRenderableAttrValue(value) {
    if (value == null) return false;
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
}
const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function getEscapedCssVarName(key, doubleEscape) {
    return key.replace(cssVarNameEscapeSymbolsRE, (s)=>doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`);
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) return a === b;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
const isRef = (val)=>{
    return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    if (isRef(val)) return replacer(_key, val.value);
    else if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val2], i)=>{
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
        }, {})
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ].map((v)=>stringifySymbol(v))
    };
    else if (isSymbol(val)) return stringifySymbol(val);
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
const stringifySymbol = (v, i = "")=>{
    var _a;
    return(// Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6xZ9X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("29158dae54139136");
    if (script.__esModule) script = script.default;
    script.render = require("8a4954974a3e2a08").render;
    require("7e9898e9b122e745").default(script);
    script.__scopeId = 'data-v-d2b101';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\App.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = 'd2b101-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('d2b101-hmr', script)) __VUE_HMR_RUNTIME__.reload('d2b101-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"29158dae54139136":"43p6y","8a4954974a3e2a08":"lDUoD","7e9898e9b122e745":"1asbb","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"43p6y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _vueRouter = require("vue-router");
var _dashboardCardVue = require("./components/DashboardCard.vue");
var _dashboardCardVueDefault = parcelHelpers.interopDefault(_dashboardCardVue);
var _editRankingsTabsVue = require("./components/EditRankingsTabs.vue");
var _editRankingsTabsVueDefault = parcelHelpers.interopDefault(_editRankingsTabsVue);
var _modalDialogVue = require("./components/ModalDialog.vue");
var _modalDialogVueDefault = parcelHelpers.interopDefault(_modalDialogVue);
var _sidebarPanelVue = require("./components/SidebarPanel.vue");
var _sidebarPanelVueDefault = parcelHelpers.interopDefault(_sidebarPanelVue);
var _leftSidebarVue = require("./components/LeftSidebar.vue");
var _leftSidebarVueDefault = parcelHelpers.interopDefault(_leftSidebarVue);
var _aboutViewVue = require("./components/AboutView.vue"); // Import AboutView component
var _aboutViewVueDefault = parcelHelpers.interopDefault(_aboutViewVue);
var _profileViewVue = require("./components/ProfileView.vue"); // Import ProfileView component
var _profileViewVueDefault = parcelHelpers.interopDefault(_profileViewVue);
var _settingsViewVue = require("./components/SettingsView.vue"); // Import SettingsView component
var _settingsViewVueDefault = parcelHelpers.interopDefault(_settingsViewVue);
var _termsViewVue = require("./components/TermsView.vue"); // Import TermsView component
var _termsViewVueDefault = parcelHelpers.interopDefault(_termsViewVue);
var _data = require("./data");
exports.default = {
    name: 'App',
    components: {
        DashboardCard: (0, _dashboardCardVueDefault.default),
        EditRankingsTabs: (0, _editRankingsTabsVueDefault.default),
        ModalDialog: (0, _modalDialogVueDefault.default),
        SidebarPanel: (0, _sidebarPanelVueDefault.default),
        LeftSidebar: (0, _leftSidebarVueDefault.default),
        AboutView: (0, _aboutViewVueDefault.default),
        ProfileView: (0, _profileViewVueDefault.default),
        SettingsView: (0, _settingsViewVueDefault.default),
        TermsView: (0, _termsViewVueDefault.default // Register TermsView component
        )
    },
    setup () {
        // Router
        const route = (0, _vueRouter.useRoute)();
        // State
        const savedData = (0, _vue.reactive)({});
        const currentSelectionOrders = (0, _vue.reactive)({});
        const activeTabId = (0, _vue.ref)('eras');
        const currentScreen = (0, _vue.ref)('dashboard');
        const isSaveModalVisible = (0, _vue.ref)(false);
        const isSidebarVisible = (0, _vue.ref)(false);
        const currentSidebarTabId = (0, _vue.ref)(null);
        const currentSidebarView = (0, _vue.ref)('rankings');
        const isLeftSidebarVisible = (0, _vue.ref)(false);
        // State-based navigation
        const appViews = (0, _vue.reactive)({
            current: '',
            params: {},
            history: []
        });
        // Determine if we should show router view or app screens
        const isRouterView = (0, _vue.computed)(()=>{
            return route.path !== '/';
        });
        // Determine if we should show state-based view
        const isStateView = (0, _vue.computed)(()=>{
            return appViews.current !== '' && !isRouterView.value;
        });
        // Computed properties
        const dashboardItems = (0, _vue.computed)(()=>{
            const items = [];
            // Add Eras item
            items.push({
                id: 'eras',
                name: 'Eras',
                totalCount: (0, _data.eraNamesInOrder).length,
                selectedCount: savedData['eras']?.length || 0,
                emoji: (0, _data.eraEmojis)['eras'],
                rating: 0,
                rank: -1
            });
            // Add individual era items
            (0, _data.erasWithSongs).forEach((era)=>{
                const eraData = savedData[era.id];
                const selectedCount = eraData?.selection?.length || 0;
                const rating = eraData?.rating || 0;
                let rank = -1;
                if (savedData['eras']) {
                    const eraRankIndex = savedData['eras'].indexOf(era.name);
                    if (eraRankIndex !== -1) rank = eraRankIndex + 1;
                }
                items.push({
                    id: era.id,
                    name: era.name,
                    totalCount: era.songs.length,
                    selectedCount: selectedCount,
                    emoji: era.emoji,
                    rating: rating,
                    rank: rank
                });
            });
            return items;
        });
        // Methods
        function deepCopy(obj) {
            return JSON.parse(JSON.stringify(obj));
        }
        function loadRankings() {
            try {
                const dataStr = localStorage.getItem((0, _data.LOCAL_STORAGE_KEY));
                Object.assign(savedData, dataStr ? JSON.parse(dataStr) : {});
                if (!savedData['eras']) savedData['eras'] = [];
                (0, _data.erasWithSongs).forEach((era)=>{
                    if (!savedData[era.id]) savedData[era.id] = {
                        selection: [],
                        rating: 0,
                        comment: ''
                    };
                    else if (savedData[era.id].selection === undefined) savedData[era.id] = {
                        selection: [],
                        rating: savedData[era.id].rating || 0,
                        comment: savedData[era.id].comment || ''
                    };
                });
                console.log("Data loaded:", savedData);
            } catch (e) {
                console.error("Failed to load data:", e);
                Object.assign(savedData, {
                    eras: []
                });
                (0, _data.erasWithSongs).forEach((era)=>{
                    savedData[era.id] = {
                        selection: [],
                        rating: 0,
                        comment: ''
                    };
                });
            }
        }
        function saveRankings() {
            try {
                Object.keys(currentSelectionOrders).forEach((tabId)=>{
                    if (tabId === 'eras') savedData['eras'] = deepCopy(currentSelectionOrders['eras']);
                    else if (savedData[tabId]) savedData[tabId].selection = deepCopy(currentSelectionOrders[tabId] || []);
                });
                localStorage.setItem((0, _data.LOCAL_STORAGE_KEY), JSON.stringify(savedData));
                console.log("Rankings saved:", savedData);
                return true;
            } catch (e) {
                console.error("Failed to save rankings:", e);
                alert("Error saving rankings!");
                return false;
            }
        }
        function saveReview(tabId, rating, comment) {
            if (tabId === 'eras' || !savedData[tabId]) return false;
            try {
                savedData[tabId].rating = rating;
                savedData[tabId].comment = comment;
                localStorage.setItem((0, _data.LOCAL_STORAGE_KEY), JSON.stringify(savedData));
                console.log(`Review saved for ${tabId}:`, {
                    rating,
                    comment
                });
                return true;
            } catch (e) {
                console.error("Failed to save review:", e);
                alert("Error saving review!");
                return false;
            }
        }
        function showScreen(screen) {
            currentScreen.value = screen;
            if (screen === 'edit') {
                // Initialize selection orders for editing
                currentSelectionOrders['eras'] = deepCopy(savedData['eras'] || []);
                (0, _data.erasWithSongs).forEach((era)=>{
                    if (savedData[era.id]) currentSelectionOrders[era.id] = deepCopy(savedData[era.id].selection || []);
                });
            }
        }
        function showSaveConfirmModal() {
            isSaveModalVisible.value = true;
        }
        function hideSaveConfirmModal() {
            isSaveModalVisible.value = false;
        }
        function saveAndExit() {
            if (saveRankings()) {
                hideSaveConfirmModal();
                showScreen('dashboard');
            }
        }
        function switchTab(tabId) {
            activeTabId.value = tabId;
        }
        function openSidebar(tabId) {
            // Close left sidebar if open
            isLeftSidebarVisible.value = false;
            currentSidebarTabId.value = tabId;
            currentSidebarView.value = 'rankings';
            isSidebarVisible.value = true;
            console.log(`Right sidebar opened with tab: ${tabId}`);
        }
        function closeSidebar() {
            isSidebarVisible.value = false;
            console.log('Right sidebar closed');
        }
        function switchSidebarTab(tabId) {
            // Extract the view from the tab ID (e.g., 'sidebar-panel-rankings' -> 'rankings')
            if (tabId.startsWith('sidebar-panel-')) {
                currentSidebarView.value = tabId.replace('sidebar-panel-', '');
                console.log('Switching sidebar tab to:', currentSidebarView.value);
            } else console.warn('Invalid tab ID format:', tabId);
        }
        function toggleLeftSidebar() {
            // Close right sidebar if open
            if (isSidebarVisible.value) isSidebarVisible.value = false;
            isLeftSidebarVisible.value = !isLeftSidebarVisible.value;
            console.log(`Left sidebar ${isLeftSidebarVisible.value ? 'opened' : 'closed'}`);
        }
        function closeLeftSidebar() {
            isLeftSidebarVisible.value = false;
            console.log('Left sidebar closed');
        }
        // State-based navigation functions
        function navigateToView(view, params = {}) {
            console.log(`State navigation: ${view}`, params);
            // Special handling for home navigation
            if (view === 'home') {
                // Clear state view to show dashboard
                appViews.current = '';
                appViews.params = {};
                // Close sidebars
                isLeftSidebarVisible.value = false;
                isSidebarVisible.value = false;
                console.log('Navigated to home dashboard');
                return;
            }
            // Save current view to history if we're already in a view
            if (appViews.current !== '') appViews.history.push({
                view: appViews.current,
                params: {
                    ...appViews.params
                }
            });
            // Update to new view
            appViews.current = view;
            appViews.params = params;
            // Close sidebars
            isLeftSidebarVisible.value = false;
            isSidebarVisible.value = false;
            console.log(`Navigated to view: ${view}`, params);
        }
        function goBackView() {
            if (appViews.history.length > 0) {
                const previous = appViews.history.pop();
                appViews.current = previous.view;
                appViews.params = previous.params;
                console.log(`Navigated back to: ${previous.view}`, previous.params);
                return true;
            } else {
                // If no history, go to dashboard
                appViews.current = '';
                appViews.params = {};
                return false;
            }
        }
        // Initialize
        (0, _vue.onMounted)(()=>{
            // Load saved rankings
            loadRankings();
        });
        return {
            savedData,
            currentSelectionOrders,
            activeTabId,
            currentScreen,
            isSaveModalVisible,
            isSidebarVisible,
            currentSidebarTabId,
            currentSidebarView,
            dashboardItems,
            isRouterView,
            isStateView,
            isLeftSidebarVisible,
            appViews,
            showScreen,
            showSaveConfirmModal,
            hideSaveConfirmModal,
            saveAndExit,
            switchTab,
            openSidebar,
            closeSidebar,
            switchSidebarTab,
            saveReview,
            toggleLeftSidebar,
            closeLeftSidebar,
            navigateToView,
            goBackView
        };
    }
};

},{"vue":"1pgRQ","./components/DashboardCard.vue":"gMwCf","./components/EditRankingsTabs.vue":"lRjvq","./components/ModalDialog.vue":"aOn2i","./components/SidebarPanel.vue":"9GW91","./components/LeftSidebar.vue":"iCnxv","./data":"5s9fq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","vue-router":"hZZ91","./components/AboutView.vue":"aMXIv","./components/ProfileView.vue":"j9uNz","./components/SettingsView.vue":"kJwRF","./components/TermsView.vue":"3dAHO"}],"gMwCf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("92ebd4a9e65cd796");
    if (script.__esModule) script = script.default;
    script.render = require("e1b49ed98ef84865").render;
    require("7caf51ac753c1ee6").default(script);
    script.__scopeId = 'data-v-6df1c7';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\DashboardCard.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = '6df1c7-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('6df1c7-hmr', script)) __VUE_HMR_RUNTIME__.reload('6df1c7-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"92ebd4a9e65cd796":"g4gdG","e1b49ed98ef84865":"l7DbF","7caf51ac753c1ee6":"gNOLE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"g4gdG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    name: 'DashboardCard',
    props: {
        tabId: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        totalCount: {
            type: Number,
            required: true
        },
        selectedCount: {
            type: Number,
            default: 0
        },
        rating: {
            type: Number,
            default: 0
        },
        rank: {
            type: Number,
            default: -1
        },
        emoji: {
            type: String,
            default: ''
        }
    },
    emits: [
        'open-sidebar'
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l7DbF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    key: 0,
    class: "absolute top-1 left-1 chip-rank-indicator"
};
const _hoisted_2 = {
    class: "font-semibold text-gray-800 mb-1"
};
const _hoisted_3 = {
    key: 0,
    class: "ml-1"
};
const _hoisted_4 = {
    key: 1,
    class: "dashboard-stars"
};
const _hoisted_5 = {
    key: 0
};
const _hoisted_6 = {
    key: 1,
    class: "text-gray-300"
};
const _hoisted_7 = {
    class: "text-xs text-gray-500 mt-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        class: "dashboard-grid-card",
        onClick: _cache[0] || (_cache[0] = ($event)=>_ctx.$emit('open-sidebar', $props.tabId))
    }, [
        $props.rank > 0 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, (0, _vue.toDisplayString)($props.rank), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true),
        (0, _vue.createElementVNode)("h3", _hoisted_2, [
            (0, _vue.createTextVNode)((0, _vue.toDisplayString)($props.title) + " ", 1 /* TEXT */ ),
            $props.emoji ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_3, (0, _vue.toDisplayString)($props.emoji), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true)
        ]),
        $props.tabId !== 'eras' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_4, [
            $props.rating > 0 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_5, (0, _vue.toDisplayString)("\u2605".repeat($props.rating)) + (0, _vue.toDisplayString)("\u2606".repeat(5 - $props.rating)), 1 /* TEXT */ )) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_6, "\u2606\u2606\u2606\u2606\u2606"))
        ])) : (0, _vue.createCommentVNode)("v-if", true),
        (0, _vue.createElementVNode)("p", _hoisted_7, (0, _vue.toDisplayString)($props.selectedCount) + "/" + (0, _vue.toDisplayString)($props.totalCount) + " selected ", 1 /* TEXT */ )
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('6df1c7-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gNOLE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lRjvq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("a90ac608d411aca");
    if (script.__esModule) script = script.default;
    script.render = require("b5159bb67b094081").render;
    require("c549bdf0c264dae3").default(script);
    script.__scopeId = 'data-v-a836a9';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\EditRankingsTabs.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = 'a836a9-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('a836a9-hmr', script)) __VUE_HMR_RUNTIME__.reload('a836a9-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"a90ac608d411aca":"j3Vr5","b5159bb67b094081":"guTqg","c549bdf0c264dae3":"5atPw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j3Vr5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _data = require("../data");
exports.default = {
    name: 'EditRankingsTabs',
    props: {
        activeTabId: {
            type: String,
            required: true
        },
        currentSelectionOrders: {
            type: Object,
            required: true
        },
        savedData: {
            type: Object,
            required: true
        }
    },
    emits: [
        'switch-tab',
        'update:activeTabId'
    ],
    setup (props, { emit }) {
        // DOM references
        const tabButtonsContainer = (0, _vue.ref)(null);
        const tabPanelsContainer = (0, _vue.ref)(null);
        const tabs = (0, _vue.computed)(()=>{
            const result = [
                {
                    id: 'eras',
                    name: 'Eras',
                    emoji: (0, _data.eraEmojis)['eras']
                }
            ];
            (0, _data.erasWithSongs).forEach((era)=>{
                result.push({
                    id: era.id,
                    name: era.name,
                    emoji: era.emoji
                });
            });
            return result;
        });
        const currentItems = (0, _vue.computed)({
            get: ()=>{
                if (!props.currentSelectionOrders[props.activeTabId]) props.currentSelectionOrders[props.activeTabId] = [];
                return props.currentSelectionOrders[props.activeTabId];
            },
            set: (value)=>{
                props.currentSelectionOrders[props.activeTabId] = value;
            }
        });
        const allItems = (0, _vue.computed)(()=>{
            if (props.activeTabId === 'eras') return [
                ...(0, _data.eraNamesInOrder)
            ];
            else {
                const era = (0, _data.erasWithSongs).find((e)=>e.id === props.activeTabId);
                if (era) return [
                    ...era.songs
                ];
            }
            return [];
        });
        const sortedItems = (0, _vue.computed)(()=>{
            return getSortedItemsForTab(props.activeTabId);
        });
        function getSortedItemsForTab(tabId) {
            // Get all items for the specified tab
            let items = [];
            if (tabId === 'eras') items = [
                ...(0, _data.eraNamesInOrder)
            ];
            else {
                const era = (0, _data.erasWithSongs).find((e)=>e.id === tabId);
                if (era) items = [
                    ...era.songs
                ];
            }
            // Get current selections for this tab
            const currentSelections = props.currentSelectionOrders[tabId] || [];
            // Sort items so that ranked items come first, in order of rank
            items.sort((a, b)=>{
                const aRanked = currentSelections.includes(a);
                const bRanked = currentSelections.includes(b);
                if (aRanked && bRanked) // Both items are ranked, sort by rank number
                return currentSelections.indexOf(a) - currentSelections.indexOf(b);
                else if (aRanked) // Only a is ranked, it should come first
                return -1;
                else if (bRanked) // Only b is ranked, it should come first
                return 1;
                else // Neither is ranked, maintain original order
                return 0;
            });
            return items;
        }
        function isItemRanked(item) {
            const currentSelections = props.currentSelectionOrders[props.activeTabId] || [];
            return currentSelections.includes(item);
        }
        function getRankNumber(item) {
            const currentSelections = props.currentSelectionOrders[props.activeTabId] || [];
            return currentSelections.indexOf(item) + 1;
        }
        function getItemClass(item) {
            if (isItemRanked(item)) return 'bg-blue-100 text-blue-800 border border-blue-200';
            else return 'bg-white border border-gray-200 text-gray-700';
        }
        function toggleItemRank(item) {
            if (!props.currentSelectionOrders[props.activeTabId]) props.currentSelectionOrders[props.activeTabId] = [];
            const currentSelections = props.currentSelectionOrders[props.activeTabId];
            const index = currentSelections.indexOf(item);
            if (index !== -1) // Item is already ranked, remove it
            currentSelections.splice(index, 1);
            else if (currentSelections.length < (0, _data.MAX_SELECTION)) // Item is not ranked and we haven't reached the max selection
            currentSelections.push(item);
            // Update tab button count
            updateTabButtonCount(props.activeTabId);
        }
        function getTabButtonClass(tabId) {
            return tabId === props.activeTabId ? 'active border-blue-500 bg-blue-50 text-blue-600 font-semibold' : 'border-transparent text-gray-500';
        }
        function getTabItemCount(tabId) {
            if (tabId === 'eras') return (0, _data.eraNamesInOrder).length;
            else {
                const era = (0, _data.erasWithSongs).find((e)=>e.id === tabId);
                return era ? era.songs.length : 0;
            }
        }
        function switchTab(tabId) {
            if (props.activeTabId === tabId) return;
            emit('switch-tab', tabId);
            emit('update:activeTabId', tabId);
        }
        function updateTabButtonCount(tabId) {
        // This is now handled reactively by the template
        }
        function handleChipKeyDown(event, item) {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault();
                toggleItemRank(item);
            }
        }
        // Watch for activeTabId changes to ensure proper UI updates
        (0, _vue.watch)(()=>props.activeTabId, (newTabId)=>{
        // This would be where we'd do any additional processing when tabs change
        });
        return {
            tabButtonsContainer,
            tabPanelsContainer,
            tabs,
            sortedItems,
            maxSelection: (0, _data.MAX_SELECTION),
            isItemRanked,
            getRankNumber,
            getItemClass,
            toggleItemRank,
            getTabButtonClass,
            getTabItemCount,
            switchTab,
            getSortedItemsForTab,
            handleChipKeyDown
        };
    }
};

},{"vue":"1pgRQ","../data":"5s9fq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5s9fq":[function(require,module,exports,__globalThis) {
// Configuration Constants
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MAX_SELECTION", ()=>MAX_SELECTION);
parcelHelpers.export(exports, "LOCAL_STORAGE_KEY", ()=>LOCAL_STORAGE_KEY);
parcelHelpers.export(exports, "eraNamesInOrder", ()=>eraNamesInOrder);
parcelHelpers.export(exports, "eraEmojis", ()=>eraEmojis);
parcelHelpers.export(exports, "songEmojis", ()=>songEmojis);
parcelHelpers.export(exports, "erasWithSongs", ()=>erasWithSongs);
parcelHelpers.export(exports, "originalSongLists", ()=>originalSongLists);
const MAX_SELECTION = 13;
const LOCAL_STORAGE_KEY = 'music-besties-data';
const eraNamesInOrder = [
    'Taylor Swift',
    'Fearless',
    'Speak Now',
    'Red',
    '1989',
    'Reputation',
    'Lover',
    'Folklore',
    'Evermore',
    'Midnights',
    'The Tortured Poets Department'
];
const eraEmojis = {
    'eras': "\uD83C\uDF1F",
    'taylor-swift': "\uD83E\uDD20",
    'fearless': "\uD83D\uDC9B",
    'speak-now': "\uD83D\uDC9C",
    'red': "\u2764\uFE0F",
    '1989': "\uD83C\uDF0A",
    'reputation': "\uD83D\uDC0D",
    'lover': "\uD83D\uDC96",
    'folklore': "\uD83C\uDF32",
    'evermore': "\uD83C\uDF42",
    'midnights': "\u2728",
    'ttpd': "\uD83E\uDD0D"
};
const songEmojis = {};
const erasWithSongs = [
    {
        id: 'taylor-swift',
        name: 'Taylor Swift',
        emoji: "\uD83E\uDD20",
        songs: [
            'Tim McGraw',
            'Picture to Burn',
            'Teardrops on My Guitar',
            'A Place in This World',
            'Cold as You',
            'The Outside',
            'Tied Together with a Smile',
            'Stay Beautiful',
            'Should\'ve Said No',
            'Mary\'s Song (Oh My My My)',
            'Our Song',
            'I\'m Only Me When I\'m with You',
            'Invisible',
            'A Perfectly Good Heart'
        ]
    },
    {
        id: 'fearless',
        name: 'Fearless',
        emoji: "\uD83D\uDC9B",
        songs: [
            'Fearless',
            'Fifteen',
            'Love Story',
            'Hey Stephen',
            'White Horse',
            'You Belong with Me',
            'Breathe',
            'Tell Me Why',
            'You\'re Not Sorry',
            'The Way I Loved You',
            'Forever & Always',
            'The Best Day',
            'Change',
            'Jump Then Fall',
            'Untouchable',
            'Come In with the Rain',
            'Superstar',
            'The Other Side of the Door',
            'Today Was a Fairytale',
            'You All Over Me',
            'Mr. Perfectly Fine',
            'We Were Happy',
            'That\'s When',
            'Don\'t You',
            'Bye Bye Baby'
        ]
    },
    {
        id: 'speak-now',
        name: 'Speak Now',
        emoji: "\uD83D\uDC9C",
        songs: [
            'Mine',
            'Sparks Fly',
            'Back to December',
            'Speak Now',
            'Dear John',
            'Mean',
            'The Story of Us',
            'Never Grow Up',
            'Enchanted',
            'Better Than Revenge',
            'Innocent',
            'Haunted',
            'Last Kiss',
            'Long Live',
            'Ours',
            'Superman',
            'Electric Touch',
            'When Emma Falls in Love',
            'I Can See You',
            'Castles Crumbling',
            'Foolish One',
            'Timeless'
        ]
    },
    {
        id: 'red',
        name: 'Red',
        emoji: "\u2764\uFE0F",
        songs: [
            'State of Grace',
            'Red',
            'Treacherous',
            'I Knew You Were Trouble',
            'All Too Well',
            '22',
            'I Almost Do',
            'We Are Never Ever Getting Back Together',
            'Stay Stay Stay',
            'The Last Time',
            'Holy Ground',
            'Sad Beautiful Tragic',
            'The Lucky One',
            'Everything Has Changed',
            'Starlight',
            'Begin Again',
            'The Moment I Knew',
            'Come Back... Be Here',
            'Girl at Home',
            'Ronan',
            'Better Man',
            'Nothing New',
            'Babe',
            'Message In A Bottle',
            'I Bet You Think About Me',
            'Forever Winter',
            'Run',
            'The Very First Night',
            'All Too Well (10 Minute Version)'
        ]
    },
    {
        id: '1989',
        name: '1989',
        emoji: "\uD83C\uDF0A",
        songs: [
            'Welcome to New York',
            'Blank Space',
            'Style',
            'Out of the Woods',
            'All You Had to Do Was Stay',
            'Shake It Off',
            'I Wish You Would',
            'Bad Blood',
            'Wildest Dreams',
            'How You Get the Girl',
            'This Love',
            'I Know Places',
            'Clean',
            'Wonderland',
            'You Are in Love',
            'New Romantics',
            'Sweeter Than Fiction',
            'Is It Over Now?',
            'Say Don\'t Go',
            'Now That We Don\'t Talk',
            'Suburban Legends',
            'Slut!'
        ]
    },
    {
        id: 'reputation',
        name: 'Reputation',
        emoji: "\uD83D\uDC0D",
        songs: [
            '...Ready for It?',
            'End Game',
            'I Did Something Bad',
            'Don\'t Blame Me',
            'Delicate',
            'Look What You Made Me Do',
            'So It Goes...',
            'Gorgeous',
            'Getaway Car',
            'King of My Heart',
            'Dancing with Our Hands Tied',
            'Dress',
            'This Is Why We Can\'t Have Nice Things',
            'Call It What You Want',
            'New Year\'s Day'
        ]
    },
    {
        id: 'lover',
        name: 'Lover',
        emoji: "\uD83D\uDC96",
        songs: [
            'I Forgot That You Existed',
            'Cruel Summer',
            'Lover',
            'The Man',
            'The Archer',
            'I Think He Knows',
            'Miss Americana & the Heartbreak Prince',
            'Paper Rings',
            'Cornelia Street',
            'Death by a Thousand Cuts',
            'London Boy',
            'Soon You\'ll Get Better',
            'False God',
            'You Need to Calm Down',
            'Afterglow',
            'ME!',
            'It\'s Nice to Have a Friend',
            'Daylight',
            'All of the Girls You Loved Before'
        ]
    },
    {
        id: 'folklore',
        name: 'Folklore',
        emoji: "\uD83C\uDF32",
        songs: [
            'The 1',
            'Cardigan',
            'The Last Great American Dynasty',
            'Exile',
            'My Tears Ricochet',
            'Mirrorball',
            'Seven',
            'August',
            'This Is Me Trying',
            'Illicit Affairs',
            'Invisible String',
            'Mad Woman',
            'Epiphany',
            'Betty',
            'Peace',
            'Hoax',
            'The Lakes'
        ]
    },
    {
        id: 'evermore',
        name: 'Evermore',
        emoji: "\uD83C\uDF42",
        songs: [
            'Willow',
            'Champagne Problems',
            'Gold Rush',
            '\'Tis the Damn Season',
            'Tolerate It',
            'No Body, No Crime',
            'Happiness',
            'Dorothea',
            'Coney Island',
            'Ivy',
            'Cowboy like Me',
            'Long Story Short',
            'Marjorie',
            'Closure',
            'Evermore',
            'Right Where You Left Me',
            'It\'s Time to Go'
        ]
    },
    {
        id: 'midnights',
        name: 'Midnights',
        emoji: "\u2728",
        songs: [
            'Lavender Haze',
            'Maroon',
            'Anti-Hero',
            'Snow on the Beach',
            'You\'re on Your Own, Kid',
            'Midnight Rain',
            'Question...?',
            'Vigilante Shit',
            'Bejeweled',
            'Labyrinth',
            'Karma',
            'Sweet Nothing',
            'Mastermind',
            'The Great War',
            'Bigger Than the Whole Sky',
            'Paris',
            'High Infidelity',
            'Glitch',
            'Would\'ve, Could\'ve, Should\'ve',
            'Dear Reader',
            'Hits Different',
            'You\'re Losing Me'
        ]
    },
    {
        id: 'ttpd',
        name: 'The Tortured Poets Department',
        emoji: "\uD83E\uDD0D",
        songs: [
            'Fortnight',
            'The Tortured Poets Department',
            'My Boy Only Breaks His Favorite Toys',
            'Down Bad',
            'So Long, London',
            'But Daddy I Love Him',
            'Fresh Out The Slammer',
            'Florida!!!',
            'Guilty as Sin?',
            'Who\'s Afraid of Little Old Me?',
            'I Can Fix Him (No Really I Can)',
            'loml',
            'I Can Do It With a Broken Heart',
            'The Smallest Man Who Ever Lived',
            'The Alchemy',
            'Clara Bow',
            'The Black Dog',
            'imgonnagetyouback',
            'The Albatross',
            'Chloe or Sam or Sophia or Marcus',
            'How Did It End?',
            'So High School',
            'I Hate It Here',
            'thanK you aIMee',
            'I Look in People\'s Windows',
            'The Prophecy',
            'Cassandra',
            'Peter',
            'The Bolter',
            'Robin',
            'The Manuscript'
        ]
    }
];
const originalSongLists = {
    'taylor-swift': erasWithSongs.find((era)=>era.id === 'taylor-swift').songs,
    'fearless': erasWithSongs.find((era)=>era.id === 'fearless').songs,
    'speak-now': erasWithSongs.find((era)=>era.id === 'speak-now').songs,
    'red': erasWithSongs.find((era)=>era.id === 'red').songs,
    '1989': erasWithSongs.find((era)=>era.id === '1989').songs,
    'reputation': erasWithSongs.find((era)=>era.id === 'reputation').songs,
    'lover': erasWithSongs.find((era)=>era.id === 'lover').songs,
    'folklore': erasWithSongs.find((era)=>era.id === 'folklore').songs,
    'evermore': erasWithSongs.find((era)=>era.id === 'evermore').songs,
    'midnights': erasWithSongs.find((era)=>era.id === 'midnights').songs,
    'ttpd': erasWithSongs.find((era)=>era.id === 'ttpd').songs
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"guTqg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "flex flex-col flex-grow"
};
const _hoisted_2 = {
    class: "flex overflow-x-auto py-2 px-4 border-b border-gray-200 bg-white sticky top-14 z-10",
    ref: "tabButtonsContainer"
};
const _hoisted_3 = [
    "onClick",
    "id",
    "aria-controls",
    "aria-selected"
];
const _hoisted_4 = {
    key: 0,
    class: "ml-1"
};
const _hoisted_5 = {
    class: "tab-count text-xs text-gray-400 mt-1"
};
const _hoisted_6 = {
    class: "flex-grow overflow-y-auto p-4 bg-gray-50",
    ref: "tabPanelsContainer"
};
const _hoisted_7 = [
    "id",
    "aria-labelledby"
];
const _hoisted_8 = {
    class: "text-lg font-semibold text-gray-700 mb-4"
};
const _hoisted_9 = [
    "data-tab-id"
];
const _hoisted_10 = [
    "onClick",
    "aria-checked",
    "onKeydown"
];
const _hoisted_11 = {
    key: 0,
    class: "chip-rank-indicator mr-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createCommentVNode)(" Tabs "),
        (0, _vue.createElementVNode)("div", _hoisted_2, [
            ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($setup.tabs, (tab)=>{
                return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("button", {
                    key: tab.id,
                    onClick: ($event)=>$setup.switchTab(tab.id),
                    class: (0, _vue.normalizeClass)([
                        "tab-button flex flex-col items-center whitespace-nowrap py-2 px-2 border-b-2 font-medium text-sm",
                        $setup.getTabButtonClass(tab.id)
                    ]),
                    id: `tab-button-${tab.id}`,
                    role: "tab",
                    "aria-controls": `panel-${tab.id}`,
                    "aria-selected": tab.id === $props.activeTabId ? 'true' : 'false'
                }, [
                    (0, _vue.createElementVNode)("span", null, (0, _vue.toDisplayString)(tab.name), 1 /* TEXT */ ),
                    tab.emoji ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_4, (0, _vue.toDisplayString)(tab.emoji), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true),
                    (0, _vue.createElementVNode)("span", _hoisted_5, (0, _vue.toDisplayString)(($props.currentSelectionOrders[tab.id] || []).length) + " of " + (0, _vue.toDisplayString)($setup.getTabItemCount(tab.id)), 1 /* TEXT */ )
                ], 10 /* CLASS, PROPS */ , _hoisted_3);
            }), 128 /* KEYED_FRAGMENT */ ))
        ], 512 /* NEED_PATCH */ ),
        (0, _vue.createCommentVNode)(" Tab Content "),
        (0, _vue.createElementVNode)("div", _hoisted_6, [
            ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($setup.tabs, (tab)=>{
                return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
                    key: `panel-${tab.id}`,
                    id: `panel-${tab.id}`,
                    class: (0, _vue.normalizeClass)([
                        "tab-panel",
                        {
                            'hidden': tab.id !== $props.activeTabId
                        }
                    ]),
                    role: "tabpanel",
                    "aria-labelledby": `tab-button-${tab.id}`
                }, [
                    (0, _vue.createElementVNode)("h2", _hoisted_8, (0, _vue.toDisplayString)(tab.id === 'eras' ? 'Select up to 3 Eras:' : `Select up to 3 Songs from ${tab.name}:`), 1 /* TEXT */ ),
                    (0, _vue.createElementVNode)("div", {
                        class: "chip-container flex flex-wrap gap-3 mb-6",
                        "data-tab-id": tab.id
                    }, [
                        ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($setup.getSortedItemsForTab(tab.id), (item)=>{
                            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("button", {
                                key: `${tab.id}-${item}`,
                                onClick: ($event)=>$setup.toggleItemRank(item),
                                class: (0, _vue.normalizeClass)([
                                    "chip py-1 px-3 rounded-full text-sm",
                                    $setup.getItemClass(item)
                                ]),
                                role: "checkbox",
                                "aria-checked": $setup.isItemRanked(item) ? 'true' : 'false',
                                tabindex: "0",
                                onKeydown: ($event)=>$setup.handleChipKeyDown($event, item)
                            }, [
                                $setup.isItemRanked(item) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_11, (0, _vue.toDisplayString)($setup.getRankNumber(item)), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true),
                                (0, _vue.createTextVNode)(" " + (0, _vue.toDisplayString)(item), 1 /* TEXT */ )
                            ], 42 /* CLASS, PROPS, NEED_HYDRATION */ , _hoisted_10);
                        }), 128 /* KEYED_FRAGMENT */ ))
                    ], 8 /* PROPS */ , _hoisted_9)
                ], 10 /* CLASS, PROPS */ , _hoisted_7);
            }), 128 /* KEYED_FRAGMENT */ ))
        ], 512 /* NEED_PATCH */ )
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('a836a9-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5atPw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aOn2i":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("fe96cb4b446ace67");
    if (script.__esModule) script = script.default;
    script.render = require("fdeaf718cc019f1c").render;
    require("17c7941e52714a60").default(script);
    script.__scopeId = 'data-v-e45d69';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\ModalDialog.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = 'e45d69-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('e45d69-hmr', script)) __VUE_HMR_RUNTIME__.reload('e45d69-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"fe96cb4b446ace67":"bgBuK","fdeaf718cc019f1c":"5ohFC","17c7941e52714a60":"dhBIp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bgBuK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    name: 'ModalDialog',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'Confirm'
        },
        message: {
            type: String,
            default: 'Are you sure?'
        }
    },
    emits: [
        'cancel',
        'confirm'
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5ohFC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    key: 0,
    class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
};
const _hoisted_2 = {
    class: "bg-white rounded-lg shadow-xl max-w-sm w-full overflow-hidden"
};
const _hoisted_3 = {
    class: "p-4 border-b border-gray-200"
};
const _hoisted_4 = {
    class: "text-lg font-semibold text-gray-800"
};
const _hoisted_5 = {
    class: "p-4"
};
const _hoisted_6 = {
    class: "text-gray-600"
};
const _hoisted_7 = {
    class: "flex border-t border-gray-200 p-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.visible ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createElementVNode)("div", _hoisted_2, [
            (0, _vue.createElementVNode)("div", _hoisted_3, [
                (0, _vue.createElementVNode)("h3", _hoisted_4, (0, _vue.toDisplayString)($props.title), 1 /* TEXT */ )
            ]),
            (0, _vue.createElementVNode)("div", _hoisted_5, [
                (0, _vue.createElementVNode)("p", _hoisted_6, (0, _vue.toDisplayString)($props.message), 1 /* TEXT */ )
            ]),
            (0, _vue.createElementVNode)("div", _hoisted_7, [
                (0, _vue.createElementVNode)("button", {
                    onClick: _cache[0] || (_cache[0] = ($event)=>_ctx.$emit('cancel')),
                    class: "flex-1 py-2 text-gray-600 font-medium hover:bg-gray-50 active:bg-gray-100 rounded transition-colors"
                }, " Cancel "),
                (0, _vue.createElementVNode)("button", {
                    onClick: _cache[1] || (_cache[1] = ($event)=>_ctx.$emit('confirm')),
                    class: "flex-1 py-2 text-blue-600 font-medium hover:bg-blue-50 active:bg-blue-100 rounded transition-colors"
                }, " Confirm ")
            ])
        ])
    ])) : (0, _vue.createCommentVNode)("v-if", true);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('e45d69-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dhBIp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9GW91":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1573bb170bc0f9d0");
    if (script.__esModule) script = script.default;
    script.render = require("d4927963047c7063").render;
    script.__cssModules = require("34cd282b94f3efc8").default;
    require("6a376fc5b0b557d5").default(script);
    script.__scopeId = 'data-v-3be628';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\SidebarPanel.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = '3be628-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('3be628-hmr', script)) __VUE_HMR_RUNTIME__.reload('3be628-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"1573bb170bc0f9d0":"f5rHy","d4927963047c7063":"2XtTa","34cd282b94f3efc8":"j2UvV","6a376fc5b0b557d5":"bQqw5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f5rHy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _data = require("../data");
exports.default = {
    name: 'SidebarPanel',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        currentTabId: {
            type: String,
            default: null
        },
        currentView: {
            type: String,
            default: 'rankings'
        },
        savedData: {
            type: Object,
            required: true
        }
    },
    emits: [
        'close',
        'switch-tab',
        'save-review'
    ],
    setup (props, { emit }) {
        const rating = (0, _vue.ref)(0);
        const comment = (0, _vue.ref)('');
        const showSavedMessage = (0, _vue.ref)(false);
        const sidebarTabs = [
            {
                id: 'sidebar-panel-rankings',
                name: 'Rankings'
            },
            {
                id: 'sidebar-panel-review',
                name: 'Review'
            }
        ];
        const tabTitle = (0, _vue.computed)(()=>{
            if (props.currentTabId === 'eras') return 'Eras';
            else if (props.currentTabId) {
                const era = (0, _data.erasWithSongs).find((e)=>e.id === props.currentTabId);
                return era ? era.name : 'Unknown';
            }
            return '';
        });
        const tabEmoji = (0, _vue.computed)(()=>{
            if (props.currentTabId === 'eras') return (0, _data.eraEmojis)['eras'];
            else if (props.currentTabId) {
                const era = (0, _data.erasWithSongs).find((e)=>e.id === props.currentTabId);
                return era ? era.emoji : '';
            }
            return '';
        });
        const eraRankings = (0, _vue.computed)(()=>{
            return props.savedData['eras'] || [];
        });
        const songRankings = (0, _vue.computed)(()=>{
            if (props.currentTabId && props.currentTabId !== 'eras') return props.savedData[props.currentTabId]?.selection || [];
            return [];
        });
        function getEraEmoji(eraName) {
            const era = (0, _data.erasWithSongs).find((e)=>e.name === eraName);
            return era ? era.emoji : '';
        }
        function getSongEmoji(songName) {
            return (0, _data.songEmojis)[songName] || '';
        }
        function handleTabClick(tab) {
            console.log(`Tab clicked: ${tab.name}`);
            emit('switch-tab', tab.id);
        }
        // Watch for changes in currentTabId to update rating and comment
        (0, _vue.watch)(()=>props.currentTabId, (newTabId)=>{
            if (newTabId && newTabId !== 'eras' && props.savedData[newTabId]) {
                rating.value = props.savedData[newTabId].rating || 0;
                comment.value = props.savedData[newTabId].comment || '';
            } else {
                rating.value = 0;
                comment.value = '';
            }
            showSavedMessage.value = false;
        });
        // Watch for changes in visibility to reset saved message
        (0, _vue.watch)(()=>props.visible, (newVisible)=>{
            if (newVisible) showSavedMessage.value = false;
        });
        function submitReview() {
            if (props.currentTabId && props.currentTabId !== 'eras') {
                emit('save-review', props.currentTabId, rating.value, comment.value);
                showSavedMessage.value = true;
                setTimeout(()=>{
                    showSavedMessage.value = false;
                }, 3000);
            }
        }
        return {
            rating,
            comment,
            showSavedMessage,
            sidebarTabs,
            tabTitle,
            tabEmoji,
            eraRankings,
            songRankings,
            submitReview,
            getEraEmoji,
            getSongEmoji,
            handleTabClick
        };
    }
};

},{"vue":"1pgRQ","../data":"5s9fq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2XtTa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "flex justify-between items-center p-4 border-b border-gray-200 rounded-t-xl bg-gradient-to-r from-blue-50 to-white"
};
const _hoisted_2 = {
    class: "text-lg font-semibold text-gray-800"
};
const _hoisted_3 = {
    key: 0,
    class: "ml-1"
};
const _hoisted_4 = {
    class: "flex border-b border-gray-200 bg-gray-50"
};
const _hoisted_5 = [
    "onClick"
];
const _hoisted_6 = {
    class: "flex-grow overflow-y-auto p-4 rounded-b-xl"
};
const _hoisted_7 = {
    key: 0
};
const _hoisted_8 = {
    key: 0
};
const _hoisted_9 = {
    key: 0,
    class: "space-y-2"
};
const _hoisted_10 = {
    class: "chip-rank-indicator mr-2"
};
const _hoisted_11 = {
    key: 0,
    class: "ml-1"
};
const _hoisted_12 = {
    key: 1,
    class: "text-sm text-gray-400 italic"
};
const _hoisted_13 = {
    key: 1
};
const _hoisted_14 = {
    key: 0,
    class: "space-y-2"
};
const _hoisted_15 = {
    class: "chip-rank-indicator mr-2"
};
const _hoisted_16 = {
    key: 0,
    class: "ml-1"
};
const _hoisted_17 = {
    key: 1,
    class: "text-sm text-gray-400 italic"
};
const _hoisted_18 = {
    key: 0
};
const _hoisted_19 = {
    class: "mb-4"
};
const _hoisted_20 = {
    class: "flex text-2xl text-gray-300"
};
const _hoisted_21 = [
    "onClick"
];
const _hoisted_22 = {
    class: "mb-4"
};
const _hoisted_23 = {
    key: 0,
    class: "mt-3 p-2 bg-green-100 text-green-800 text-sm rounded"
};
const _hoisted_24 = {
    key: 1,
    class: "text-sm text-gray-400 italic"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createBlock)((0, _vue.Transition), {
        name: "backdrop",
        appear: ""
    }, {
        default: (0, _vue.withCtx)(()=>[
                $props.visible ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
                    key: 0,
                    class: "fixed inset-0 bg-black bg-opacity-50 z-40",
                    onClick: _cache[4] || (_cache[4] = ($event)=>_ctx.$emit('close'))
                }, [
                    (0, _vue.createVNode)((0, _vue.Transition), {
                        name: "floating-panel",
                        appear: ""
                    }, {
                        default: (0, _vue.withCtx)(()=>[
                                (0, _vue.createElementVNode)("div", {
                                    class: (0, _vue.normalizeClass)([
                                        "absolute right-4 top-4 bottom-4 w-full max-w-xs bg-white rounded-xl shadow-2xl flex flex-col h-[calc(100%-2rem)] transform transition-transform duration-300",
                                        $props.visible ? 'translate-x-0' : 'translate-x-full'
                                    ]),
                                    onClick: _cache[3] || (_cache[3] = (0, _vue.withModifiers)(()=>{}, [
                                        "stop"
                                    ]))
                                }, [
                                    (0, _vue.createElementVNode)("div", _hoisted_1, [
                                        (0, _vue.createElementVNode)("h2", _hoisted_2, [
                                            (0, _vue.createTextVNode)((0, _vue.toDisplayString)($setup.tabTitle) + " ", 1 /* TEXT */ ),
                                            $setup.tabEmoji ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_3, (0, _vue.toDisplayString)($setup.tabEmoji), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true)
                                        ]),
                                        (0, _vue.createElementVNode)("button", {
                                            onClick: _cache[0] || (_cache[0] = ($event)=>_ctx.$emit('close')),
                                            class: "text-gray-500 p-2 rounded-full hover:bg-white/50 active:bg-white/80 transition-colors"
                                        }, _cache[5] || (_cache[5] = [
                                            (0, _vue.createElementVNode)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                class: "h-5 w-5",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor"
                                            }, [
                                                (0, _vue.createElementVNode)("path", {
                                                    "fill-rule": "evenodd",
                                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                                    "clip-rule": "evenodd"
                                                })
                                            ], -1 /* HOISTED */ )
                                        ]))
                                    ]),
                                    (0, _vue.createCommentVNode)(" Sidebar Tabs "),
                                    (0, _vue.createElementVNode)("div", _hoisted_4, [
                                        ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($setup.sidebarTabs, (tab)=>{
                                            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("button", {
                                                key: tab.id,
                                                onClick: ($event)=>$setup.handleTabClick(tab),
                                                class: (0, _vue.normalizeClass)([
                                                    "flex-1 py-3 text-sm font-medium",
                                                    tab.id === 'sidebar-panel-' + $props.currentView ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                                                ])
                                            }, (0, _vue.toDisplayString)(tab.name), 11 /* TEXT, CLASS, PROPS */ , _hoisted_5);
                                        }), 128 /* KEYED_FRAGMENT */ ))
                                    ]),
                                    (0, _vue.createCommentVNode)(" Sidebar Content "),
                                    (0, _vue.createElementVNode)("div", _hoisted_6, [
                                        (0, _vue.createCommentVNode)(" Rankings View "),
                                        $props.currentView === 'rankings' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_7, [
                                            $props.currentTabId === 'eras' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_8, [
                                                _cache[6] || (_cache[6] = (0, _vue.createElementVNode)("h3", {
                                                    class: "font-medium text-gray-700 mb-3"
                                                }, "Era Rankings", -1 /* HOISTED */ )),
                                                $setup.eraRankings.length > 0 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_9, [
                                                    ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($setup.eraRankings, (era, index)=>{
                                                        return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
                                                            key: era,
                                                            class: "sidebar-chip"
                                                        }, [
                                                            (0, _vue.createElementVNode)("div", _hoisted_10, (0, _vue.toDisplayString)(index + 1), 1 /* TEXT */ ),
                                                            (0, _vue.createTextVNode)(" " + (0, _vue.toDisplayString)(era) + " ", 1 /* TEXT */ ),
                                                            $setup.getEraEmoji(era) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_11, (0, _vue.toDisplayString)($setup.getEraEmoji(era)), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true)
                                                        ]);
                                                    }), 128 /* KEYED_FRAGMENT */ ))
                                                ])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("p", _hoisted_12, "No rankings yet"))
                                            ])) : $props.currentTabId && $setup.songRankings ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_13, [
                                                _cache[7] || (_cache[7] = (0, _vue.createElementVNode)("h3", {
                                                    class: "font-medium text-gray-700 mb-3"
                                                }, "Song Rankings", -1 /* HOISTED */ )),
                                                $setup.songRankings.length > 0 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_14, [
                                                    ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($setup.songRankings, (song, index)=>{
                                                        return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
                                                            key: song,
                                                            class: "sidebar-chip"
                                                        }, [
                                                            (0, _vue.createElementVNode)("div", _hoisted_15, (0, _vue.toDisplayString)(index + 1), 1 /* TEXT */ ),
                                                            (0, _vue.createTextVNode)(" " + (0, _vue.toDisplayString)(song) + " ", 1 /* TEXT */ ),
                                                            $setup.getSongEmoji(song) ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("span", _hoisted_16, (0, _vue.toDisplayString)($setup.getSongEmoji(song)), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true)
                                                        ]);
                                                    }), 128 /* KEYED_FRAGMENT */ ))
                                                ])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("p", _hoisted_17, "No rankings yet"))
                                            ])) : (0, _vue.createCommentVNode)("v-if", true)
                                        ])) : $props.currentView === 'review' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), {
                                            key: 1
                                        }, [
                                            (0, _vue.createCommentVNode)(" Review View "),
                                            (0, _vue.createElementVNode)("div", null, [
                                                $props.currentTabId && $props.currentTabId !== 'eras' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_18, [
                                                    _cache[10] || (_cache[10] = (0, _vue.createElementVNode)("h3", {
                                                        class: "font-medium text-gray-700 mb-3"
                                                    }, "Your Review", -1 /* HOISTED */ )),
                                                    (0, _vue.createElementVNode)("div", _hoisted_19, [
                                                        _cache[8] || (_cache[8] = (0, _vue.createElementVNode)("label", {
                                                            class: "block text-sm font-medium text-gray-700 mb-1"
                                                        }, "Rating", -1 /* HOISTED */ )),
                                                        (0, _vue.createElementVNode)("div", _hoisted_20, [
                                                            ((0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)(5, (i)=>{
                                                                return (0, _vue.createElementVNode)("button", {
                                                                    key: i,
                                                                    onClick: ($event)=>$setup.rating = i,
                                                                    class: (0, _vue.normalizeClass)([
                                                                        "focus:outline-none",
                                                                        i <= $setup.rating ? 'text-amber-400' : ''
                                                                    ])
                                                                }, " \u2605 ", 10 /* CLASS, PROPS */ , _hoisted_21);
                                                            }), 64 /* STABLE_FRAGMENT */ ))
                                                        ])
                                                    ]),
                                                    (0, _vue.createElementVNode)("div", _hoisted_22, [
                                                        _cache[9] || (_cache[9] = (0, _vue.createElementVNode)("label", {
                                                            class: "block text-sm font-medium text-gray-700 mb-1"
                                                        }, "Comments", -1 /* HOISTED */ )),
                                                        (0, _vue.withDirectives)((0, _vue.createElementVNode)("textarea", {
                                                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event)=>$setup.comment = $event),
                                                            class: "w-full border border-gray-300 rounded-lg p-2 text-sm",
                                                            rows: "4",
                                                            placeholder: "Write your thoughts..."
                                                        }, null, 512 /* NEED_PATCH */ ), [
                                                            [
                                                                (0, _vue.vModelText),
                                                                $setup.comment
                                                            ]
                                                        ])
                                                    ]),
                                                    (0, _vue.createElementVNode)("button", {
                                                        onClick: _cache[2] || (_cache[2] = (...args)=>$setup.submitReview && $setup.submitReview(...args)),
                                                        class: "w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow active:bg-blue-700 transition-colors"
                                                    }, " Save Review "),
                                                    $setup.showSavedMessage ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_23, " Review saved! ")) : (0, _vue.createCommentVNode)("v-if", true)
                                                ])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_24, " Reviews are only available for individual eras "))
                                            ])
                                        ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */ )) : (0, _vue.createCommentVNode)("v-if", true)
                                    ])
                                ], 2 /* CLASS */ )
                            ]),
                        _: 1 /* STABLE */ 
                    })
                ])) : (0, _vue.createCommentVNode)("v-if", true)
            ]),
        _: 1 /* STABLE */ 
    });
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('3be628-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j2UvV":[function() {},{}],"bQqw5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iCnxv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8a0d2e96daf43201");
    if (script.__esModule) script = script.default;
    script.render = require("527071988f58c279").render;
    require("c11c17ee9dd5aae8").default(script);
    script.__scopeId = 'data-v-927e70';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\LeftSidebar.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = '927e70-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('927e70-hmr', script)) __VUE_HMR_RUNTIME__.reload('927e70-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"8a0d2e96daf43201":"5KwwA","527071988f58c279":"hWeUK","c11c17ee9dd5aae8":"elhLK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5KwwA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    name: 'LeftSidebar',
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    emits: [
        'close',
        'navigate'
    ],
    methods: {
        handleStateClick (label, state) {
            console.log(`Clicked on ${label} link`);
            this.$emit('navigate', state);
            this.$emit('close');
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hWeUK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "flex justify-between items-center p-4 border-b border-gray-200"
};
const _hoisted_2 = {
    class: "flex-grow overflow-y-auto"
};
const _hoisted_3 = {
    class: "py-2"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.visible ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 0,
        class: "fixed inset-0 bg-black bg-opacity-50 z-40",
        onClick: _cache[7] || (_cache[7] = ($event)=>_ctx.$emit('close'))
    }, [
        (0, _vue.createElementVNode)("div", {
            class: (0, _vue.normalizeClass)([
                "absolute left-0 top-0 bottom-0 w-4/5 max-w-xs bg-white shadow-xl flex flex-col h-full transform transition-transform duration-300",
                $props.visible ? 'translate-x-0' : '-translate-x-full'
            ]),
            onClick: _cache[6] || (_cache[6] = (0, _vue.withModifiers)(()=>{}, [
                "stop"
            ]))
        }, [
            (0, _vue.createElementVNode)("div", _hoisted_1, [
                _cache[9] || (_cache[9] = (0, _vue.createElementVNode)("h2", {
                    class: "text-lg font-semibold text-gray-800"
                }, "Navigation", -1 /* HOISTED */ )),
                (0, _vue.createElementVNode)("button", {
                    onClick: _cache[0] || (_cache[0] = ($event)=>_ctx.$emit('close')),
                    class: "text-gray-500 p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                }, _cache[8] || (_cache[8] = [
                    (0, _vue.createElementVNode)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                    }, [
                        (0, _vue.createElementVNode)("path", {
                            "fill-rule": "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            "clip-rule": "evenodd"
                        })
                    ], -1 /* HOISTED */ )
                ]))
            ]),
            (0, _vue.createCommentVNode)(" Navigation Links "),
            (0, _vue.createElementVNode)("div", _hoisted_2, [
                (0, _vue.createElementVNode)("nav", _hoisted_3, [
                    (0, _vue.createCommentVNode)(" Home link "),
                    (0, _vue.createElementVNode)("a", {
                        onClick: _cache[1] || (_cache[1] = (0, _vue.withModifiers)(($event)=>$options.handleStateClick('Home', 'home'), [
                            "prevent"
                        ])),
                        class: "flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    }, _cache[10] || (_cache[10] = [
                        (0, _vue.createElementVNode)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6 mr-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }, [
                            (0, _vue.createElementVNode)("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        ], -1 /* HOISTED */ ),
                        (0, _vue.createElementVNode)("span", {
                            class: "font-medium"
                        }, "Home", -1 /* HOISTED */ )
                    ])),
                    (0, _vue.createCommentVNode)(" Profile link "),
                    (0, _vue.createElementVNode)("a", {
                        onClick: _cache[2] || (_cache[2] = (0, _vue.withModifiers)(($event)=>$options.handleStateClick('Profile', 'profile'), [
                            "prevent"
                        ])),
                        class: "flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    }, _cache[11] || (_cache[11] = [
                        (0, _vue.createElementVNode)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6 mr-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }, [
                            (0, _vue.createElementVNode)("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            })
                        ], -1 /* HOISTED */ ),
                        (0, _vue.createElementVNode)("span", {
                            class: "font-medium"
                        }, "Profile", -1 /* HOISTED */ )
                    ])),
                    (0, _vue.createCommentVNode)(" Settings link "),
                    (0, _vue.createElementVNode)("a", {
                        onClick: _cache[3] || (_cache[3] = (0, _vue.withModifiers)(($event)=>$options.handleStateClick('Settings', 'settings'), [
                            "prevent"
                        ])),
                        class: "flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    }, _cache[12] || (_cache[12] = [
                        (0, _vue.createElementVNode)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6 mr-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }, [
                            (0, _vue.createElementVNode)("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            }),
                            (0, _vue.createElementVNode)("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            })
                        ], -1 /* HOISTED */ ),
                        (0, _vue.createElementVNode)("span", {
                            class: "font-medium"
                        }, "Settings", -1 /* HOISTED */ )
                    ])),
                    (0, _vue.createCommentVNode)(" About link "),
                    (0, _vue.createElementVNode)("a", {
                        onClick: _cache[4] || (_cache[4] = (0, _vue.withModifiers)(($event)=>$options.handleStateClick('About', 'about'), [
                            "prevent"
                        ])),
                        class: "flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    }, _cache[13] || (_cache[13] = [
                        (0, _vue.createElementVNode)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6 mr-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }, [
                            (0, _vue.createElementVNode)("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            })
                        ], -1 /* HOISTED */ ),
                        (0, _vue.createElementVNode)("span", {
                            class: "font-medium"
                        }, "About", -1 /* HOISTED */ )
                    ])),
                    (0, _vue.createCommentVNode)(" Terms link "),
                    (0, _vue.createElementVNode)("a", {
                        onClick: _cache[5] || (_cache[5] = (0, _vue.withModifiers)(($event)=>$options.handleStateClick('Terms', 'terms'), [
                            "prevent"
                        ])),
                        class: "flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    }, _cache[14] || (_cache[14] = [
                        (0, _vue.createElementVNode)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6 mr-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }, [
                            (0, _vue.createElementVNode)("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            })
                        ], -1 /* HOISTED */ ),
                        (0, _vue.createElementVNode)("span", {
                            class: "font-medium"
                        }, "Terms", -1 /* HOISTED */ )
                    ]))
                ])
            ]),
            (0, _vue.createCommentVNode)(" Footer "),
            _cache[15] || (_cache[15] = (0, _vue.createElementVNode)("div", {
                class: "p-4 border-t border-gray-200"
            }, [
                (0, _vue.createElementVNode)("p", {
                    class: "text-xs text-gray-500 text-center"
                }, " Music Besties v1.0.0 ")
            ], -1 /* HOISTED */ ))
        ], 2 /* CLASS */ )
    ])) : (0, _vue.createCommentVNode)("v-if", true);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('927e70-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"elhLK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hZZ91":[function(require,module,exports,__globalThis) {
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationFailureType", ()=>NavigationFailureType);
parcelHelpers.export(exports, "RouterLink", ()=>RouterLink);
parcelHelpers.export(exports, "RouterView", ()=>RouterView);
parcelHelpers.export(exports, "START_LOCATION", ()=>START_LOCATION_NORMALIZED);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
parcelHelpers.export(exports, "createRouterMatcher", ()=>createRouterMatcher);
parcelHelpers.export(exports, "createWebHashHistory", ()=>createWebHashHistory);
parcelHelpers.export(exports, "createWebHistory", ()=>createWebHistory);
parcelHelpers.export(exports, "isNavigationFailure", ()=>isNavigationFailure);
parcelHelpers.export(exports, "loadRouteLocation", ()=>loadRouteLocation);
parcelHelpers.export(exports, "matchedRouteKey", ()=>matchedRouteKey);
parcelHelpers.export(exports, "onBeforeRouteLeave", ()=>onBeforeRouteLeave);
parcelHelpers.export(exports, "onBeforeRouteUpdate", ()=>onBeforeRouteUpdate);
parcelHelpers.export(exports, "parseQuery", ()=>parseQuery);
parcelHelpers.export(exports, "routeLocationKey", ()=>routeLocationKey);
parcelHelpers.export(exports, "routerKey", ()=>routerKey);
parcelHelpers.export(exports, "routerViewLocationKey", ()=>routerViewLocationKey);
parcelHelpers.export(exports, "stringifyQuery", ()=>stringifyQuery);
parcelHelpers.export(exports, "useLink", ()=>useLink);
parcelHelpers.export(exports, "useRoute", ()=>useRoute);
parcelHelpers.export(exports, "useRouter", ()=>useRouter);
parcelHelpers.export(exports, "viewDepthKey", ()=>viewDepthKey);
var _vue = require("vue");
var _devtoolsApi = require("@vue/devtools-api");
const isBrowser = typeof document !== 'undefined';
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @internal
 *
 * @param component
 */ function isRouteComponent(component) {
    return typeof component === 'object' || 'displayName' in component || 'props' in component || '__vccOpts' in component;
}
function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === 'Module' || // support CF with dynamic imports that do not
    // add the Module string tag
    obj.default && isRouteComponent(obj.default);
}
const assign = Object.assign;
function applyToParams(fn, params) {
    const newParams = {};
    for(const key in params){
        const value = params[key];
        newParams[key] = isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
}
const noop = ()=>{};
/**
 * Typesafe alternative to Array.isArray
 * https://github.com/microsoft/TypeScript/pull/48228
 */ const isArray = Array.isArray;
function warn(msg) {
    // avoid using ...args as it breaks in older Edge builds
    const args = Array.from(arguments).slice(1);
    console.warn.apply(console, [
        '[Vue Router warn]: ' + msg
    ].concat(args));
}
/**
 * Encoding Rules (␣ = Space)
 * - Path: ␣ " < > # ? { }
 * - Query: ␣ " < > # & =
 * - Hash: ␣ " < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */ // const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const PLUS_RE = /\+/g; // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query, but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */ const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
const ENC_SPACE_RE = /%20/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */ function commonEncode(text) {
    return encodeURI('' + text).replace(ENC_PIPE_RE, '|').replace(ENC_BRACKET_OPEN_RE, '[').replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeQueryValue(text) {
    return commonEncode(text)// Encode the space as +, encode the + to differentiate it from the space
    .replace(PLUS_RE, '%2B').replace(ENC_SPACE_RE, '+').replace(HASH_RE, '%23').replace(AMPERSAND_RE, '%26').replace(ENC_BACKTICK_RE, '`').replace(ENC_CURLY_OPEN_RE, '{').replace(ENC_CURLY_CLOSE_RE, '}').replace(ENC_CARET_RE, '^');
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */ function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeParam(text) {
    return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */ function decode(text) {
    try {
        return decodeURIComponent('' + text);
    } catch (err) {
        warn(`Error decoding "${text}". Using original value`);
    }
    return '' + text;
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path)=>path.replace(TRAILING_SLASH_RE, '');
/**
 * Transforms a URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */ function parseURL(parseQuery, location1, currentLocation = '/') {
    let path, query = {}, searchString = '', hash = '';
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    // TODO: move to new URL()
    const hashPos = location1.indexOf('#');
    let searchPos = location1.indexOf('?');
    // the hash appears before the search, so it's not part of the search string
    if (hashPos < searchPos && hashPos >= 0) searchPos = -1;
    if (searchPos > -1) {
        path = location1.slice(0, searchPos);
        searchString = location1.slice(searchPos + 1, hashPos > -1 ? hashPos : location1.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location1.slice(0, hashPos);
        // keep the # character
        hash = location1.slice(hashPos, location1.length);
    }
    // no search and no query
    path = resolveRelativePath(path != null ? path : location1, currentLocation);
    // empty path means a relative query or hash `?foo=f`, `#thing`
    return {
        fullPath: path + (searchString && '?') + searchString + hash,
        path,
        query,
        hash: decode(hash)
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */ function stringifyURL(stringifyQuery, location1) {
    const query = location1.query ? stringifyQuery(location1.query) : '';
    return location1.path + (query && '?') + query + (location1.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */ function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
    return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */ function isSameRouteLocation(stringifyQuery, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */ function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for(const key in a){
        if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
    }
    return true;
}
function isSameRouteLocationParamsValue(a, b) {
    return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */ function isEquivalentArray(a, b) {
    return isArray(b) ? a.length === b.length && a.every((value, i)=>value === b[i]) : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */ function resolveRelativePath(to, from) {
    if (to.startsWith('/')) return to;
    if (!from.startsWith('/')) {
        warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
        return to;
    }
    if (!to) return from;
    const fromSegments = from.split('/');
    const toSegments = to.split('/');
    const lastToSegment = toSegments[toSegments.length - 1];
    // make . and ./ the same (../ === .., ../../ === ../..)
    // this is the same behavior as new URL()
    if (lastToSegment === '..' || lastToSegment === '.') toSegments.push('');
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for(toPosition = 0; toPosition < toSegments.length; toPosition++){
        segment = toSegments[toPosition];
        // we stay on the same position
        if (segment === '.') continue;
        // go up in the from array
        if (segment === '..') // we can't go below zero, but we still need to increment toPosition
        {
            if (position > 1) position--;
        } else break;
    }
    return fromSegments.slice(0, position).join('/') + '/' + toSegments.slice(toPosition).join('/');
}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */ const START_LOCATION_NORMALIZED = {
    path: '/',
    // TODO: could we use a symbol in the future?
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined
};
var NavigationType;
(function(NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */ const START = '';
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */ function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector('base');
            base = baseEl && baseEl.getAttribute('href') || '/';
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, '');
        } else base = '/';
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== '/' && base[0] !== '#') base = '/' + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location1) {
    return base.replace(BEFORE_HASH_RE, '#') + location1;
}
function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        behavior: offset.behavior,
        left: elRect.left - docRect.left - (offset.left || 0),
        top: elRect.top - docRect.top - (offset.top || 0)
    };
}
const computeScrollPosition = ()=>({
        left: window.scrollX,
        top: window.scrollY
    });
function scrollToPosition(position) {
    let scrollToOptions;
    if ('el' in position) {
        const positionEl = position.el;
        const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
        /**
         * `id`s can accept pretty much any characters, including CSS combinators
         * like `>` or `~`. It's still possible to retrieve elements using
         * `document.getElementById('~')` but it needs to be escaped when using
         * `document.querySelector('#\\~')` for it to be valid. The only
         * requirements for `id`s are them to be unique on the page and to not be
         * empty (`id=""`). Because of that, when passing an id selector, it should
         * be properly escaped for it to work with `querySelector`. We could check
         * for the id selector to be simple (no CSS combinators `+ >~`) but that
         * would make things inconsistent since they are valid characters for an
         * `id` but would need to be escaped when using `querySelector`, breaking
         * their usage and ending up in no selector returned. Selectors need to be
         * escaped:
         *
         * - `#1-thing` becomes `#\31 -thing`
         * - `#with~symbols` becomes `#with\\~symbols`
         *
         * - More information about  the topic can be found at
         *   https://mathiasbynens.be/notes/html5-id-class.
         * - Practical example: https://mathiasbynens.be/demo/html5-id
         */ if (typeof position.el === 'string') {
            if (!isIdSelector || !document.getElementById(position.el.slice(1))) try {
                const foundEl = document.querySelector(position.el);
                if (isIdSelector && foundEl) {
                    warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
                    // return to avoid other warnings
                    return;
                }
            } catch (err) {
                warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
                // return to avoid other warnings
                return;
            }
        }
        const el = typeof positionEl === 'string' ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
        if (!el) {
            warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
            return;
        }
        scrollToOptions = getElementPosition(el, position);
    } else scrollToOptions = position;
    if ('scrollBehavior' in document.documentElement.style) window.scrollTo(scrollToOptions);
    else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.scrollX, scrollToOptions.top != null ? scrollToOptions.top : window.scrollY);
}
function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    // consume it so it's not used again
    scrollPositions.delete(key);
    return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */ // export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }
let createBaseLocation = ()=>location.protocol + '//' + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param base - The base path
 * @param location - The window.location object
 */ function createCurrentLocation(base, location1) {
    const { pathname, search, hash } = location1;
    // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
    const hashPos = base.indexOf('#');
    if (hashPos > -1) {
        let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
        let pathFromHash = hash.slice(slicePos);
        // prepend the starting slash to hash so the url starts with /#
        if (pathFromHash[0] !== '/') pathFromHash = '/' + pathFromHash;
        return stripBase(pathFromHash, '');
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state })=>{
        const to = createCurrentLocation(base, location);
        const from = currentLocation.value;
        const fromState = historyState.value;
        let delta = 0;
        if (state) {
            currentLocation.value = to;
            historyState.value = state;
            // ignore the popstate and reset the pauseState
            if (pauseState && pauseState === from) {
                pauseState = null;
                return;
            }
            delta = fromState ? state.position - fromState.position : 0;
        } else replace(to);
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach((listener)=>{
            listener(currentLocation.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
            });
        });
    };
    function pauseListeners() {
        pauseState = currentLocation.value;
    }
    function listen(callback) {
        // set up the listener and prepare teardown callbacks
        listeners.push(callback);
        const teardown = ()=>{
            const index = listeners.indexOf(callback);
            if (index > -1) listeners.splice(index, 1);
        };
        teardowns.push(teardown);
        return teardown;
    }
    function beforeUnloadListener() {
        const { history: history1 } = window;
        if (!history1.state) return;
        history1.replaceState(assign({}, history1.state, {
            scroll: computeScrollPosition()
        }), '');
    }
    function destroy() {
        for (const teardown of teardowns)teardown();
        teardowns = [];
        window.removeEventListener('popstate', popStateHandler);
        window.removeEventListener('beforeunload', beforeUnloadListener);
    }
    // set up the listeners and prepare teardown callbacks
    window.addEventListener('popstate', popStateHandler);
    // TODO: could we use 'pagehide' or 'visibilitychange' instead?
    // https://developer.chrome.com/blog/page-lifecycle-api/
    window.addEventListener('beforeunload', beforeUnloadListener, {
        passive: true
    });
    return {
        pauseListeners,
        listen,
        destroy
    };
}
/**
 * Creates a state object
 */ function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null
    };
}
function useHistoryStateNavigation(base) {
    const { history: history1, location: location1 } = window;
    // private variables
    const currentLocation = {
        value: createCurrentLocation(base, location1)
    };
    const historyState = {
        value: history1.state
    };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        // the length is off by one, we need to decrease it
        position: history1.length - 1,
        replaced: true,
        // don't add a scroll as the user may have an anchor, and we want
        // scrollBehavior to be triggered without a saved position
        scroll: null
    }, true);
    function changeLocation(to, state, replace) {
        /**
         * if a base tag is provided, and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/router/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */ const hashIndex = base.indexOf('#');
        const url = hashIndex > -1 ? (location1.host && document.querySelector('base') ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history1[replace ? 'replaceState' : 'pushState'](state, '', url);
            historyState.value = state;
        } catch (err) {
            warn('Error with push/replace State', err);
            // Force the navigation, this also resets the call count
            location1[replace ? 'replace' : 'assign'](url);
        }
    }
    function replace(to, data) {
        const state = assign({}, history1.state, buildState(historyState.value.back, // keep back and forward entries but override current position
        to, historyState.value.forward, true), data, {
            position: historyState.value.position
        });
        changeLocation(to, state, true);
        currentLocation.value = to;
    }
    function push(to, data) {
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = assign({}, // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        historyState.value, history1.state, {
            forward: to,
            scroll: computeScrollPosition()
        });
        if (!history1.state) warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n` + `history.replaceState(history.state, '', url)\n\n` + `You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`);
        changeLocation(currentState.current, currentState, true);
        const state = assign({}, buildState(currentLocation.value, to, null), {
            position: currentState.position + 1
        }, data);
        changeLocation(to, state, false);
        currentLocation.value = to;
    }
    return {
        location: currentLocation,
        state: historyState,
        push,
        replace
    };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */ function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
        if (!triggerListeners) historyListeners.pauseListeners();
        history.go(delta);
    }
    const routerHistory = assign({
        // it's overridden right after
        location: '',
        base,
        go,
        createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: ()=>historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, 'state', {
        enumerable: true,
        get: ()=>historyNavigation.state.value
    });
    return routerHistory;
}
/**
 * Creates an in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */ function createMemoryHistory(base = '') {
    let listeners = [];
    let queue = [
        [
            START,
            {}
        ]
    ];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location1, state = {}) {
        position++;
        if (position !== queue.length) // we are in the middle, we remove everything from here in the queue
        queue.splice(position);
        queue.push([
            location1,
            state
        ]);
    }
    function triggerListeners(to, from, { direction, delta }) {
        const info = {
            direction,
            delta,
            type: NavigationType.pop
        };
        for (const callback of listeners)callback(to, from, info);
    }
    const routerHistory = {
        // rewritten by Object.defineProperty
        location: START,
        // rewritten by Object.defineProperty
        state: {},
        base,
        createHref: createHref.bind(null, base),
        replace (to, state) {
            // remove current entry and decrement position
            queue.splice(position--, 1);
            setLocation(to, state);
        },
        push (to, state) {
            setLocation(to, state);
        },
        listen (callback) {
            listeners.push(callback);
            return ()=>{
                const index = listeners.indexOf(callback);
                if (index > -1) listeners.splice(index, 1);
            };
        },
        destroy () {
            listeners = [];
            queue = [
                [
                    START,
                    {}
                ]
            ];
            position = 0;
        },
        go (delta, shouldTrigger = true) {
            const from = this.location;
            const direction = // we are considering delta === 0 going forward, but in abstract mode
            // using 0 for the delta doesn't make sense like it does in html5 where
            // it reloads the page
            delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
            position = Math.max(0, Math.min(position + delta, queue.length - 1));
            if (shouldTrigger) triggerListeners(this.location, from, {
                direction,
                delta
            });
        }
    };
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: ()=>queue[position][0]
    });
    Object.defineProperty(routerHistory, 'state', {
        enumerable: true,
        get: ()=>queue[position][1]
    });
    return routerHistory;
}
/**
 * Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
 * handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
 * in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
 * calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
 * after the `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */ function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    // for `file://`, directly use the pathname and ignore the base
    // location.pathname contains an initial `/` even at the root: `https://example.com`
    base = location.host ? base || location.pathname + location.search : '';
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes('#')) base += '#';
    if (!base.endsWith('#/') && !base.endsWith('#')) warn(`A hash base must end with a "#":\n"${base}" should be "${base.replace(/#.*$/, '#')}".`);
    return createWebHistory(base);
}
function isRouteLocation(route) {
    return typeof route === 'string' || route && typeof route === 'object';
}
function isRouteName(name) {
    return typeof name === 'string' || typeof name === 'symbol';
}
const NavigationFailureSymbol = Symbol('navigation failure');
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */ var NavigationFailureType;
(function(NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */ NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */ NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */ NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
// DEV only debug messages
const ErrorTypeMessages = {
    [1 /* ErrorTypes.MATCHER_NOT_FOUND */ ] ({ location: location1, currentLocation }) {
        return `No match for\n ${JSON.stringify(location1)}${currentLocation ? '\nwhile being at\n' + JSON.stringify(currentLocation) : ''}`;
    },
    [2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ ] ({ from, to }) {
        return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4 /* ErrorTypes.NAVIGATION_ABORTED */ ] ({ from, to }) {
        return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8 /* ErrorTypes.NAVIGATION_CANCELLED */ ] ({ from, to }) {
        return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16 /* ErrorTypes.NAVIGATION_DUPLICATED */ ] ({ from, to }) {
        return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
};
/**
 * Creates a typed NavigationFailure object.
 * @internal
 * @param type - NavigationFailureType
 * @param params - { from, to }
 */ function createRouterError(type, params) {
    return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
    }, params);
}
function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = [
    'params',
    'query',
    'hash'
];
function stringifyRoute(to) {
    if (typeof to === 'string') return to;
    if (to.path != null) return to.path;
    const location1 = {};
    for (const key of propertiesToLog)if (key in to) location1[key] = to[key];
    return JSON.stringify(location1, null, 2);
}
// default pattern for a param: non-greedy everything but /
const BASE_PARAM_PATTERN = '[^/]+?';
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */ function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    const score = [];
    // the regexp as a string
    let pattern = options.start ? '^' : '';
    // extracted keys
    const keys = [];
    for (const segment of segments){
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [
            90 /* PathScore.Root */ 
        ];
        // allow trailing slash
        if (options.strict && !segment.length) pattern += '/';
        for(let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++){
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub-segment /:a-other-:b
            let subSegmentScore = 40 /* PathScore.Segment */  + (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive */  : 0);
            if (token.type === 0 /* TokenType.Static */ ) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex) pattern += '/';
                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                subSegmentScore += 40 /* PathScore.Static */ ;
            } else if (token.type === 1 /* TokenType.Param */ ) {
                const { value, repeatable, optional, regexp } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* PathScore.BonusCustomRegExp */ ;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    } catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex) subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
                // or /:p?-:p2
                optional && segment.length < 2 ? `(?:/${subPattern})` : '/' + subPattern;
                if (optional) subPattern += '?';
                pattern += subPattern;
                subSegmentScore += 20 /* PathScore.Dynamic */ ;
                if (optional) subSegmentScore += -8 /* PathScore.BonusOptional */ ;
                if (repeatable) subSegmentScore += -20 /* PathScore.BonusRepeatable */ ;
                if (re === '.*') subSegmentScore += -50 /* PathScore.BonusWildcard */ ;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* PathScore.BonusStrict */ ;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict) pattern += '/?';
    if (options.end) pattern += '$';
    else if (options.strict && !pattern.endsWith('/')) pattern += '(?:/|$)';
    const re = new RegExp(pattern, options.sensitive ? '' : 'i');
    function parse(path) {
        const match = path.match(re);
        const params = {};
        if (!match) return null;
        for(let i = 1; i < match.length; i++){
            const value = match[i] || '';
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split('/') : value;
        }
        return params;
    }
    function stringify(params) {
        let path = '';
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments){
            if (!avoidDuplicatedSlash || !path.endsWith('/')) path += '/';
            avoidDuplicatedSlash = false;
            for (const token of segment){
                if (token.type === 0 /* TokenType.Static */ ) path += token.value;
                else if (token.type === 1 /* TokenType.Param */ ) {
                    const { value, repeatable, optional } = token;
                    const param = value in params ? params[value] : '';
                    if (isArray(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    const text = isArray(param) ? param.join('/') : param;
                    if (!text) {
                        if (optional) // if we have more than one optional param like /:a?-static we don't need to care about the optional param
                        {
                            if (segment.length < 2) {
                                // remove the last slash as we could be at the end
                                if (path.endsWith('/')) path = path.slice(0, -1);
                                else avoidDuplicatedSlash = true;
                            }
                        } else throw new Error(`Missing required param "${value}"`);
                    }
                    path += text;
                }
            }
        }
        // avoid empty path when we have multiple optional params
        return path || '/';
    }
    return {
        re,
        score,
        keys,
        parse,
        stringify
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */ function compareScoreArray(a, b) {
    let i = 0;
    while(i < a.length && i < b.length){
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff) return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) return a.length === 1 && a[0] === 80 /* PathScore.Segment */  ? -1 : 1;
    else if (a.length > b.length) return b.length === 1 && b[0] === 80 /* PathScore.Segment */  ? 1 : -1;
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */ function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while(i < aScore.length && i < bScore.length){
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp) return comp;
        i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
        if (isLastScoreNegative(aScore)) return 1;
        if (isLastScoreNegative(bScore)) return -1;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
// this is the ternary version
// return aScore.length < bScore.length
//   ? 1
//   : aScore.length > bScore.length
//   ? -1
//   : 0
}
/**
 * This allows detecting splats at the end of a path: /home/:id(.*)*
 *
 * @param score - score to check
 * @returns true if the last entry is negative
 */ function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
    type: 0 /* TokenType.Static */ ,
    value: ''
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
    if (!path) return [
        []
    ];
    if (path === '/') return [
        [
            ROOT_TOKEN
        ]
    ];
    if (!path.startsWith('/')) throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".`);
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* TokenizerState.Static */ ;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment) tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = '';
    // custom regexp for a param
    let customRe = '';
    function consumeBuffer() {
        if (!buffer) return;
        if (state === 0 /* TokenizerState.Static */ ) segment.push({
            type: 0 /* TokenType.Static */ ,
            value: buffer
        });
        else if (state === 1 /* TokenizerState.Param */  || state === 2 /* TokenizerState.ParamRegExp */  || state === 3 /* TokenizerState.ParamRegExpEnd */ ) {
            if (segment.length > 1 && (char === '*' || char === '+')) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* TokenType.Param */ ,
                value: buffer,
                regexp: customRe,
                repeatable: char === '*' || char === '+',
                optional: char === '*' || char === '?'
            });
        } else crash('Invalid state to consume buffer');
        buffer = '';
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while(i < path.length){
        char = path[i++];
        if (char === '\\' && state !== 2 /* TokenizerState.ParamRegExp */ ) {
            previousState = state;
            state = 4 /* TokenizerState.EscapeNext */ ;
            continue;
        }
        switch(state){
            case 0 /* TokenizerState.Static */ :
                if (char === '/') {
                    if (buffer) consumeBuffer();
                    finalizeSegment();
                } else if (char === ':') {
                    consumeBuffer();
                    state = 1 /* TokenizerState.Param */ ;
                } else addCharToBuffer();
                break;
            case 4 /* TokenizerState.EscapeNext */ :
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* TokenizerState.Param */ :
                if (char === '(') state = 2 /* TokenizerState.ParamRegExp */ ;
                else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
                else {
                    consumeBuffer();
                    state = 0 /* TokenizerState.Static */ ;
                    // go back one character if we were not modifying
                    if (char !== '*' && char !== '?' && char !== '+') i--;
                }
                break;
            case 2 /* TokenizerState.ParamRegExp */ :
                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                // it already works by escaping the closing )
                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                // is this really something people need since you can also write
                // /prefix_:p()_suffix
                if (char === ')') {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == '\\') customRe = customRe.slice(0, -1) + char;
                    else state = 3 /* TokenizerState.ParamRegExpEnd */ ;
                } else customRe += char;
                break;
            case 3 /* TokenizerState.ParamRegExpEnd */ :
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* TokenizerState.Static */ ;
                // go back one character if we were not modifying
                if (char !== '*' && char !== '?' && char !== '+') i--;
                customRe = '';
                break;
            default:
                crash('Unknown state');
                break;
        }
    }
    if (state === 2 /* TokenizerState.ParamRegExp */ ) crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    {
        const existingKeys = new Set();
        for (const key of parser.keys){
            if (existingKeys.has(key.name)) warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
            existingKeys.add(key.name);
        }
    }
    const matcher = assign(parser, {
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: []
    });
    if (parent) // both are aliases or both are not aliases
    // we don't want to mix them because the order is used when
    // passing originalRecord in Matcher.addRoute
    {
        if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
    }
    return matcher;
}
/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */ function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({
        strict: false,
        end: true,
        sensitive: false
    }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        // used later on to remove by name
        const isRootAdd = !originalRecord;
        const mainNormalizedRecord = normalizeRouteRecord(record);
        checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = mergeOptions(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord
        ];
        if ('alias' in record) {
            const aliases = typeof record.alias === 'string' ? [
                record.alias
            ] : record.alias;
            for (const alias of aliases)normalizedRecords.push(// we need to normalize again to ensure the `mods` property
            // being non enumerable
            normalizeRouteRecord(assign({}, mainNormalizedRecord, {
                // this allows us to hold a copy of the `components` option
                // so that async components cache is hold on the original record
                components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
                path: alias,
                // we might be the child of an alias
                aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            })));
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords){
            const { path } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== '/') {
                const parentPath = parent.record.path;
                const connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
            }
            if (normalizedRecord.path === '*') throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.');
            // create the object beforehand, so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            if (parent && path[0] === '/') checkMissingParamsInAbsolutePath(matcher, parent);
            // if we are an alias we must tell the original record that we exist,
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
                checkSameParams(originalRecord, matcher);
            } else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher)) {
                    checkSameNameAsAncestor(record, parent);
                    removeRoute(record.name);
                }
            }
            // Avoid adding a record that doesn't display anything. This allows passing through records without a component to
            // not be reached and pass through the catch all route
            if (isMatchable(matcher)) insertMatcher(matcher);
            if (mainNormalizedRecord.children) {
                const children = mainNormalizedRecord.children;
                for(let i = 0; i < children.length; i++)addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
            }
            // if there was no original record, then the first one was not an alias and all
            // other aliases (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
        // TODO: add normalized records for more flexibility
        // if (parent && isAliasRecord(originalRecord)) {
        //   parent.children.push(originalRecord)
        // }
        }
        return originalMatcher ? ()=>{
            // since other matchers are aliases, they should be removed by the original matcher
            removeRoute(originalMatcher);
        } : noop;
    }
    function removeRoute(matcherRef) {
        if (isRouteName(matcherRef)) {
            const matcher = matcherMap.get(matcherRef);
            if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
            }
        } else {
            const index = matchers.indexOf(matcherRef);
            if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
            }
        }
    }
    function getRoutes() {
        return matchers;
    }
    function insertMatcher(matcher) {
        const index = findInsertionIndex(matcher, matchers);
        matchers.splice(index, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location1, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ('name' in location1 && location1.name) {
            matcher = matcherMap.get(location1.name);
            if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */ , {
                location: location1
            });
            {
                const invalidParams = Object.keys(location1.params || {}).filter((paramName)=>!matcher.keys.find((k)=>k.name === paramName));
                if (invalidParams.length) warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
            }
            name = matcher.record.name;
            params = assign(// paramsFromLocation is a new object
            paramsFromLocation(currentLocation.params, // only keep params that exist in the resolved location
            // only keep optional params coming from a parent record
            matcher.keys.filter((k)=>!k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k)=>k.optional) : []).map((k)=>k.name)), // discard any existing params in the current location that do not exist here
            // #1497 this ensures better active/exact matching
            location1.params && paramsFromLocation(location1.params, matcher.keys.map((k)=>k.name)));
            // throws if cannot be stringified
            path = matcher.stringify(params);
        } else if (location1.path != null) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location1.path;
            if (!path.startsWith('/')) warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`);
            matcher = matchers.find((m)=>m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // we know the matcher works because we tested the regexp
                params = matcher.parse(path);
                name = matcher.record.name;
            }
        // location is a relative path
        } else {
            // match by name or path of current route
            matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m)=>m.re.test(currentLocation.path));
            if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */ , {
                location: location1,
                currentLocation
            });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = assign({}, currentLocation.params, location1.params);
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while(parentMatcher){
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched)
        };
    }
    // add initial routes
    routes.forEach((route)=>addRoute(route));
    function clearRoutes() {
        matchers.length = 0;
        matcherMap.clear();
    }
    return {
        addRoute,
        resolve,
        removeRoute,
        clearRoutes,
        getRoutes,
        getRecordMatcher
    };
}
function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys)if (key in params) newParams[key] = params[key];
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */ function normalizeRouteRecord(record) {
    const normalized = {
        path: record.path,
        redirect: record.redirect,
        name: record.name,
        meta: record.meta || {},
        aliasOf: record.aliasOf,
        beforeEnter: record.beforeEnter,
        props: normalizeRecordProps(record),
        children: record.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        // must be declared afterwards
        // mods: {},
        components: 'components' in record ? record.components || null : record.component && {
            default: record.component
        }
    };
    // mods contain modules and shouldn't be copied,
    // logged or anything. It's just used for internal
    // advanced use cases like data loaders
    Object.defineProperty(normalized, 'mods', {
        value: {}
    });
    return normalized;
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */ function normalizeRecordProps(record) {
    const propsObject = {};
    // props does not exist on redirect records, but we can set false directly
    const props = record.props || false;
    if ('component' in record) propsObject.default = props;
    else // NOTE: we could also allow a function to be applied to every component.
    // Would need user feedback for use cases
    for(const name in record.components)propsObject[name] = typeof props === 'object' ? props[name] : props;
    return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */ function isAliasRecord(record) {
    while(record){
        if (record.record.aliasOf) return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */ function mergeMetaFields(matched) {
    return matched.reduce((meta, record)=>assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
    const options = {};
    for(const key in defaults)options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    return options;
}
function isSameParam(a, b) {
    return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */ function checkSameParams(a, b) {
    for (const key of a.keys){
        if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
    }
    for (const key of b.keys){
        if (!key.optional && !a.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
    }
}
/**
 * A route with a name and a child with an empty path without a name should warn when adding the route
 *
 * @param mainNormalizedRecord - RouteRecordNormalized
 * @param parent - RouteRecordMatcher
 */ function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
    if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function checkSameNameAsAncestor(record, parent) {
    for(let ancestor = parent; ancestor; ancestor = ancestor.parent){
        if (ancestor.record.name === record.name) throw new Error(`A route named "${String(record.name)}" has been added as a ${parent === ancestor ? 'child' : 'descendant'} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
    }
}
function checkMissingParamsInAbsolutePath(record, parent) {
    for (const key of parent.keys){
        if (!record.keys.find(isSameParam.bind(null, key))) return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
    }
}
/**
 * Performs a binary search to find the correct insertion index for a new matcher.
 *
 * Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
 * with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
 *
 * @param matcher - new matcher to be inserted
 * @param matchers - existing matchers
 */ function findInsertionIndex(matcher, matchers) {
    // First phase: binary search based on score
    let lower = 0;
    let upper = matchers.length;
    while(lower !== upper){
        const mid = lower + upper >> 1;
        const sortOrder = comparePathParserScore(matcher, matchers[mid]);
        if (sortOrder < 0) upper = mid;
        else lower = mid + 1;
    }
    // Second phase: check for an ancestor with the same score
    const insertionAncestor = getInsertionAncestor(matcher);
    if (insertionAncestor) {
        upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
        if (upper < 0) // This should never happen
        warn(`Finding ancestor route "${insertionAncestor.record.path}" failed for "${matcher.record.path}"`);
    }
    return upper;
}
function getInsertionAncestor(matcher) {
    let ancestor = matcher;
    while(ancestor = ancestor.parent){
        if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
    }
    return;
}
/**
 * Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
 * a component, or name, or redirect, are just used to group other routes.
 * @param matcher
 * @param matcher.record record of the matcher
 * @returns
 */ function isMatchable({ record }) {
    return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */ function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?') return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for(let i = 0; i < searchParams.length; ++i){
        // pre decode the + into space
        const searchParam = searchParams[i].replace(PLUS_RE, ' ');
        // allow the = character
        const eqPos = searchParam.indexOf('=');
        const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
        const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!isArray(currentValue)) currentValue = query[key] = [
                currentValue
            ];
            currentValue.push(value);
        } else query[key] = value;
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */ function stringifyQuery(query) {
    let search = '';
    for(let key in query){
        const value = query[key];
        key = encodeQueryKey(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined) search += (search.length ? '&' : '') + key;
            continue;
        }
        // keep null values
        const values = isArray(value) ? value.map((v)=>v && encodeQueryValue(v)) : [
            value && encodeQueryValue(value)
        ];
        values.forEach((value)=>{
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? '&' : '') + key;
                if (value != null) search += '=' + value;
            }
        });
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */ function normalizeQuery(query) {
    const normalizedQuery = {};
    for(const key in query){
        const value = query[key];
        if (value !== undefined) normalizedQuery[key] = isArray(value) ? value.map((v)=>v == null ? null : '' + v) : value == null ? value : '' + value;
    }
    return normalizedQuery;
}
/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */ const matchedRouteKey = Symbol('router view location matched');
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */ const viewDepthKey = Symbol('router view depth');
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */ const routerKey = Symbol('router');
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */ const routeLocationKey = Symbol('route location');
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */ const routerViewLocationKey = Symbol('router view location');
/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */ function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return ()=>{
            const i = handlers.indexOf(handler);
            if (i > -1) handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: ()=>handlers.slice(),
        reset
    };
}
function registerGuard(record, name, guard) {
    const removeFromList = ()=>{
        record[name].delete(guard);
    };
    (0, _vue.onUnmounted)(removeFromList);
    (0, _vue.onDeactivated)(removeFromList);
    (0, _vue.onActivated)(()=>{
        record[name].add(guard);
    });
    record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */ function onBeforeRouteLeave(leaveGuard) {
    if (!(0, _vue.getCurrentInstance)()) {
        warn('getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function');
        return;
    }
    const activeRecord = (0, _vue.inject)(matchedRouteKey, // to avoid warning
    {}).value;
    if (!activeRecord) {
        warn('No active route record was found when calling `onBeforeRouteLeave()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?');
        return;
    }
    registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */ function onBeforeRouteUpdate(updateGuard) {
    if (!(0, _vue.getCurrentInstance)()) {
        warn('getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function');
        return;
    }
    const activeRecord = (0, _vue.inject)(matchedRouteKey, // to avoid warning
    {}).value;
    if (!activeRecord) {
        warn('No active route record was found when calling `onBeforeRouteUpdate()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?');
        return;
    }
    registerGuard(activeRecord, 'updateGuards', updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name, runWithContext = (fn)=>fn()) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray = record && // name is defined if record is because of the function overload
    (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return ()=>new Promise((resolve, reject)=>{
            const next = (valid)=>{
                if (valid === false) reject(createRouterError(4 /* ErrorTypes.NAVIGATION_ABORTED */ , {
                    from,
                    to
                }));
                else if (valid instanceof Error) reject(valid);
                else if (isRouteLocation(valid)) reject(createRouterError(2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ , {
                    from: to,
                    to: valid
                }));
                else {
                    if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
                    record.enterCallbacks[name] === enterCallbackArray && typeof valid === 'function') enterCallbackArray.push(valid);
                    resolve();
                }
            };
            // wrapping with Promise.resolve allows it to work with both async and sync guards
            const guardReturn = runWithContext(()=>guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from)));
            let guardCall = Promise.resolve(guardReturn);
            if (guard.length < 3) guardCall = guardCall.then(next);
            if (guard.length > 2) {
                const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ''}:\n${guard.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
                if (typeof guardReturn === 'object' && 'then' in guardReturn) guardCall = guardCall.then((resolvedValue)=>{
                    // @ts-expect-error: _called is added at canOnlyBeCalledOnce
                    if (!next._called) {
                        warn(message);
                        return Promise.reject(new Error('Invalid navigation guard'));
                    }
                    return resolvedValue;
                });
                else if (guardReturn !== undefined) // @ts-expect-error: _called is added at canOnlyBeCalledOnce
                {
                    if (!next._called) {
                        warn(message);
                        reject(new Error('Invalid navigation guard'));
                        return;
                    }
                }
            }
            guardCall.catch((err)=>reject(err));
        });
}
function canOnlyBeCalledOnce(next, to, from) {
    let called = 0;
    return function() {
        if (called++ === 1) warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
        // @ts-expect-error: we put it in the original one because it's easier to check
        next._called = true;
        if (called === 1) next.apply(null, arguments);
    };
}
function extractComponentsGuards(matched, guardType, to, from, runWithContext = (fn)=>fn()) {
    const guards = [];
    for (const record of matched){
        if (!record.components && !record.children.length) warn(`Record with path "${record.path}" is either missing a "component(s)"` + ` or "children" property.`);
        for(const name in record.components){
            let rawComponent = record.components[name];
            if (!rawComponent || typeof rawComponent !== 'object' && typeof rawComponent !== 'function') {
                warn(`Component "${name}" in record with path "${record.path}" is not` + ` a valid component. Received "${String(rawComponent)}".`);
                // throw to ensure we stop here but warn to ensure the message isn't
                // missed by the user
                throw new Error('Invalid route component');
            } else if ('then' in rawComponent) {
                // warn if user wrote import('/component.vue') instead of () =>
                // import('./component.vue')
                warn(`Component "${name}" in record with path "${record.path}" is a ` + `Promise instead of a function that returns a Promise. Did you ` + `write "import('./MyPage.vue')" instead of ` + `"() => import('./MyPage.vue')" ? This will break in ` + `production if not fixed.`);
                const promise = rawComponent;
                rawComponent = ()=>promise;
            } else if (rawComponent.__asyncLoader && // warn only once per component
            !rawComponent.__warnedDefineAsync) {
                rawComponent.__warnedDefineAsync = true;
                warn(`Component "${name}" in record with path "${record.path}" is defined ` + `using "defineAsyncComponent()". ` + `Write "() => import('./MyPage.vue')" instead of ` + `"defineAsyncComponent(() => import('./MyPage.vue'))".`);
            }
            // skip update and leave guards if the route component is not mounted
            if (guardType !== 'beforeRouteEnter' && !record.instances[name]) continue;
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                const options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard && guards.push(guardToPromiseFn(guard, to, from, record, name, runWithContext));
            } else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                if (!('catch' in componentPromise)) {
                    warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
                    componentPromise = Promise.resolve(componentPromise);
                }
                guards.push(()=>componentPromise.then((resolved)=>{
                        if (!resolved) throw new Error(`Couldn't resolve component "${name}" at "${record.path}"`);
                        const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
                        // keep the resolved module for plugins like data loaders
                        record.mods[name] = resolved;
                        // replace the function with the resolved component
                        // cannot be null or undefined because we went into the for loop
                        record.components[name] = resolvedComponent;
                        // __vccOpts is added by vue-class-component and contain the regular options
                        const options = resolvedComponent.__vccOpts || resolvedComponent;
                        const guard = options[guardType];
                        return guard && guardToPromiseFn(guard, to, from, record, name, runWithContext)();
                    }));
            }
        }
    }
    return guards;
}
/**
 * Ensures a route is loaded, so it can be passed as o prop to `<RouterView>`.
 *
 * @param route - resolved route to load
 */ function loadRouteLocation(route) {
    return route.matched.every((record)=>record.redirect) ? Promise.reject(new Error('Cannot load a route that redirects.')) : Promise.all(route.matched.map((record)=>record.components && Promise.all(Object.keys(record.components).reduce((promises, name)=>{
            const rawComponent = record.components[name];
            if (typeof rawComponent === 'function' && !('displayName' in rawComponent)) promises.push(rawComponent().then((resolved)=>{
                if (!resolved) return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
                const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
                // keep the resolved module for plugins like data loaders
                record.mods[name] = resolved;
                // replace the function with the resolved component
                // cannot be null or undefined because we went into the for loop
                record.components[name] = resolvedComponent;
                return;
            }));
            return promises;
        }, [])))).then(()=>route);
}
// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
/**
 * Returns the internal behavior of a {@link RouterLink} without the rendering part.
 *
 * @param props - a `to` location and an optional `replace` flag
 */ function useLink(props) {
    const router = (0, _vue.inject)(routerKey);
    const currentRoute = (0, _vue.inject)(routeLocationKey);
    let hasPrevious = false;
    let previousTo = null;
    const route = (0, _vue.computed)(()=>{
        const to = (0, _vue.unref)(props.to);
        if (!hasPrevious || to !== previousTo) {
            if (!isRouteLocation(to)) {
                if (hasPrevious) warn(`Invalid value for prop "to" in useLink()\n- to:`, to, `\n- previous to:`, previousTo, `\n- props:`, props);
                else warn(`Invalid value for prop "to" in useLink()\n- to:`, to, `\n- props:`, props);
            }
            previousTo = to;
            hasPrevious = true;
        }
        return router.resolve(to);
    });
    const activeRecordIndex = (0, _vue.computed)(()=>{
        const { matched } = route.value;
        const { length } = matched;
        const routeMatched = matched[length - 1];
        const currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length) return -1;
        const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1) return index;
        // possible parent record
        const parentRecordPath = getOriginalPath(matched[length - 2]);
        return(// we are dealing with nested routes
        length > 1 && // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
        currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index);
    });
    const isActive = (0, _vue.computed)(()=>activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = (0, _vue.computed)(()=>activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e)) {
            const p = router[(0, _vue.unref)(props.replace) ? 'replace' : 'push']((0, _vue.unref)(props.to)).catch(noop);
            if (props.viewTransition && typeof document !== 'undefined' && 'startViewTransition' in document) document.startViewTransition(()=>p);
            return p;
        }
        return Promise.resolve();
    }
    // devtools only
    if (isBrowser) {
        const instance = (0, _vue.getCurrentInstance)();
        if (instance) {
            const linkContextDevtools = {
                route: route.value,
                isActive: isActive.value,
                isExactActive: isExactActive.value,
                error: null
            };
            // @ts-expect-error: this is internal
            instance.__vrl_devtools = instance.__vrl_devtools || [];
            // @ts-expect-error: this is internal
            instance.__vrl_devtools.push(linkContextDevtools);
            (0, _vue.watchEffect)(()=>{
                linkContextDevtools.route = route.value;
                linkContextDevtools.isActive = isActive.value;
                linkContextDevtools.isExactActive = isExactActive.value;
                linkContextDevtools.error = isRouteLocation((0, _vue.unref)(props.to)) ? null : 'Invalid "to" value';
            }, {
                flush: 'post'
            });
        }
    }
    /**
     * NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
     */ return {
        route,
        href: (0, _vue.computed)(()=>route.value.href),
        isActive,
        isExactActive,
        navigate
    };
}
function preferSingleVNode(vnodes) {
    return vnodes.length === 1 ? vnodes[0] : vnodes;
}
const RouterLinkImpl = /*#__PURE__*/ (0, _vue.defineComponent)({
    name: 'RouterLink',
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [
                String,
                Object
            ],
            required: true
        },
        replace: Boolean,
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: 'page'
        },
        viewTransition: Boolean
    },
    useLink,
    setup (props, { slots }) {
        const link = (0, _vue.reactive)(useLink(props));
        const { options } = (0, _vue.inject)(routerKey);
        const elClass = (0, _vue.computed)(()=>({
                [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
                // [getLinkClass(
                //   props.inactiveClass,
                //   options.linkInactiveClass,
                //   'router-link-inactive'
                // )]: !link.isExactActive,
                [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive
            }));
        return ()=>{
            const children = slots.default && preferSingleVNode(slots.default(link));
            return props.custom ? children : (0, _vue.h)('a', {
                'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
                href: link.href,
                // this would override user added attrs but Vue will still add
                // the listener, so we end up triggering both
                onClick: link.navigate,
                class: elClass.value
            }, children);
        };
    }
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */ const RouterLink = RouterLinkImpl;
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented) return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0) return;
    // don't redirect if `target="_blank"`
    // @ts-expect-error getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-expect-error getAttribute exists
        const target = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(target)) return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault) e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for(const key in inner){
        const innerValue = inner[key];
        const outerValue = outer[key];
        if (typeof innerValue === 'string') {
            if (innerValue !== outerValue) return false;
        } else {
            if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i)=>value !== outerValue[i])) return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */ function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */ const getLinkClass = (propClass, globalClass, defaultClass)=>propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /*#__PURE__*/ (0, _vue.defineComponent)({
    name: 'RouterView',
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: 'default'
        },
        route: Object
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: {
        MODE: 3
    },
    setup (props, { attrs, slots }) {
        warnDeprecatedUsage();
        const injectedRoute = (0, _vue.inject)(routerViewLocationKey);
        const routeToDisplay = (0, _vue.computed)(()=>props.route || injectedRoute.value);
        const injectedDepth = (0, _vue.inject)(viewDepthKey, 0);
        // The depth changes based on empty components option, which allows passthrough routes e.g. routes with children
        // that are used to reuse the `path` property
        const depth = (0, _vue.computed)(()=>{
            let initialDepth = (0, _vue.unref)(injectedDepth);
            const { matched } = routeToDisplay.value;
            let matchedRoute;
            while((matchedRoute = matched[initialDepth]) && !matchedRoute.components)initialDepth++;
            return initialDepth;
        });
        const matchedRouteRef = (0, _vue.computed)(()=>routeToDisplay.value.matched[depth.value]);
        (0, _vue.provide)(viewDepthKey, (0, _vue.computed)(()=>depth.value + 1));
        (0, _vue.provide)(matchedRouteKey, matchedRouteRef);
        (0, _vue.provide)(routerViewLocationKey, routeToDisplay);
        const viewRef = (0, _vue.ref)();
        // watch at the same time the component instance, the route record we are
        // rendering, and the name
        (0, _vue.watch)(()=>[
                viewRef.value,
                matchedRouteRef.value,
                props.name
            ], ([instance, to, name], [oldInstance, from, oldName])=>{
            // copy reused instances
            if (to) {
                // this will update the instance for new instances as well as reused
                // instances when navigating to a new route
                to.instances[name] = instance;
                // the component instance is reused for a different route or name, so
                // we copy any saved update or leave guards. With async setup, the
                // mounting component will mount before the matchedRoute changes,
                // making instance === oldInstance, so we check if guards have been
                // added before. This works because we remove guards when
                // unmounting/deactivating components
                if (from && from !== to && instance && instance === oldInstance) {
                    if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
                    if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
                }
            }
            // trigger beforeRouteEnter next callbacks
            if (instance && to && // if there is no instance but to and from are the same this might be
            // the first visit
            (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback)=>callback(instance));
        }, {
            flush: 'post'
        });
        return ()=>{
            const route = routeToDisplay.value;
            // we need the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name;
            const matchedRoute = matchedRouteRef.value;
            const ViewComponent = matchedRoute && matchedRoute.components[currentName];
            if (!ViewComponent) return normalizeSlot(slots.default, {
                Component: ViewComponent,
                route
            });
            // props from route configuration
            const routePropsOption = matchedRoute.props[currentName];
            const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === 'function' ? routePropsOption(route) : routePropsOption : null;
            const onVnodeUnmounted = (vnode)=>{
                // remove the instance reference to prevent leak
                if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
            };
            const component = (0, _vue.h)(ViewComponent, assign({}, routeProps, attrs, {
                onVnodeUnmounted,
                ref: viewRef
            }));
            if (isBrowser && component.ref) {
                // TODO: can display if it's an alias, its props
                const info = {
                    depth: depth.value,
                    name: matchedRoute.name,
                    path: matchedRoute.path,
                    meta: matchedRoute.meta
                };
                const internalInstances = isArray(component.ref) ? component.ref.map((r)=>r.i) : [
                    component.ref.i
                ];
                internalInstances.forEach((instance)=>{
                    // @ts-expect-error
                    instance.__vrv_devtools = info;
                });
            }
            return(// pass the vnode to the slot as a prop.
            // h and <component :is="..."> both accept vnodes
            normalizeSlot(slots.default, {
                Component: component,
                route
            }) || component);
        };
    }
});
function normalizeSlot(slot, data) {
    if (!slot) return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */ const RouterView = RouterViewImpl;
// warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3
function warnDeprecatedUsage() {
    const instance = (0, _vue.getCurrentInstance)();
    const parentName = instance.parent && instance.parent.type.name;
    const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
    if (parentName && (parentName === 'KeepAlive' || parentName.includes('Transition')) && typeof parentSubTreeType === 'object' && parentSubTreeType.name === 'RouterView') {
        const comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
        warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` + `Use slot props instead:\n\n` + `<router-view v-slot="{ Component }">\n` + `  <${comp}>\n` + `    <component :is="Component" />\n` + `  </${comp}>\n` + `</router-view>`);
    }
}
/**
 * Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
 *
 * @param routeLocation - routeLocation to format
 * @param tooltip - optional tooltip
 * @returns a copy of the routeLocation
 */ function formatRouteLocation(routeLocation, tooltip) {
    const copy = assign({}, routeLocation, {
        // remove variables that can contain vue instances
        matched: routeLocation.matched.map((matched)=>omit(matched, [
                'instances',
                'children',
                'aliasOf'
            ]))
    });
    return {
        _custom: {
            type: null,
            readOnly: true,
            display: routeLocation.fullPath,
            tooltip,
            value: copy
        }
    };
}
function formatDisplay(display) {
    return {
        _custom: {
            display
        }
    };
}
// to support multiple router instances
let routerId = 0;
function addDevtools(app, router, matcher) {
    // Take over router.beforeEach and afterEach
    // make sure we are not registering the devtool twice
    if (router.__hasDevtools) return;
    router.__hasDevtools = true;
    // increment to support multiple router instances
    const id = routerId++;
    (0, _devtoolsApi.setupDevtoolsPlugin)({
        id: 'org.vuejs.router' + (id ? '.' + id : ''),
        label: 'Vue Router',
        packageName: 'vue-router',
        homepage: 'https://router.vuejs.org',
        logo: 'https://router.vuejs.org/logo.png',
        componentStateTypes: [
            'Routing'
        ],
        app
    }, (api)=>{
        if (typeof api.now !== 'function') console.warn('[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.');
        // display state added by the router
        api.on.inspectComponent((payload, ctx)=>{
            if (payload.instanceData) payload.instanceData.state.push({
                type: 'Routing',
                key: '$route',
                editable: false,
                value: formatRouteLocation(router.currentRoute.value, 'Current Route')
            });
        });
        // mark router-link as active and display tags on router views
        api.on.visitComponentTree(({ treeNode: node, componentInstance })=>{
            if (componentInstance.__vrv_devtools) {
                const info = componentInstance.__vrv_devtools;
                node.tags.push({
                    label: (info.name ? `${info.name.toString()}: ` : '') + info.path,
                    textColor: 0,
                    tooltip: 'This component is rendered by &lt;router-view&gt;',
                    backgroundColor: PINK_500
                });
            }
            // if multiple useLink are used
            if (isArray(componentInstance.__vrl_devtools)) {
                componentInstance.__devtoolsApi = api;
                componentInstance.__vrl_devtools.forEach((devtoolsData)=>{
                    let label = devtoolsData.route.path;
                    let backgroundColor = ORANGE_400;
                    let tooltip = '';
                    let textColor = 0;
                    if (devtoolsData.error) {
                        label = devtoolsData.error;
                        backgroundColor = RED_100;
                        textColor = RED_700;
                    } else if (devtoolsData.isExactActive) {
                        backgroundColor = LIME_500;
                        tooltip = 'This is exactly active';
                    } else if (devtoolsData.isActive) {
                        backgroundColor = BLUE_600;
                        tooltip = 'This link is active';
                    }
                    node.tags.push({
                        label,
                        textColor,
                        tooltip,
                        backgroundColor
                    });
                });
            }
        });
        (0, _vue.watch)(router.currentRoute, ()=>{
            // refresh active state
            refreshRoutesView();
            api.notifyComponentUpdate();
            api.sendInspectorTree(routerInspectorId);
            api.sendInspectorState(routerInspectorId);
        });
        const navigationsLayerId = 'router:navigations:' + id;
        api.addTimelineLayer({
            id: navigationsLayerId,
            label: `Router${id ? ' ' + id : ''} Navigations`,
            color: 0x40a8c4
        });
        // const errorsLayerId = 'router:errors'
        // api.addTimelineLayer({
        //   id: errorsLayerId,
        //   label: 'Router Errors',
        //   color: 0xea5455,
        // })
        router.onError((error, to)=>{
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: 'Error during Navigation',
                    subtitle: to.fullPath,
                    logType: 'error',
                    time: api.now(),
                    data: {
                        error
                    },
                    groupId: to.meta.__navigationId
                }
            });
        });
        // attached to `meta` and used to group events
        let navigationId = 0;
        router.beforeEach((to, from)=>{
            const data = {
                guard: formatDisplay('beforeEach'),
                from: formatRouteLocation(from, 'Current Location during this navigation'),
                to: formatRouteLocation(to, 'Target location')
            };
            // Used to group navigations together, hide from devtools
            Object.defineProperty(to.meta, '__navigationId', {
                value: navigationId++
            });
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    time: api.now(),
                    title: 'Start of navigation',
                    subtitle: to.fullPath,
                    data,
                    groupId: to.meta.__navigationId
                }
            });
        });
        router.afterEach((to, from, failure)=>{
            const data = {
                guard: formatDisplay('afterEach')
            };
            if (failure) {
                data.failure = {
                    _custom: {
                        type: Error,
                        readOnly: true,
                        display: failure ? failure.message : '',
                        tooltip: 'Navigation Failure',
                        value: failure
                    }
                };
                data.status = formatDisplay("\u274C");
            } else data.status = formatDisplay("\u2705");
            // we set here to have the right order
            data.from = formatRouteLocation(from, 'Current Location during this navigation');
            data.to = formatRouteLocation(to, 'Target location');
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: 'End of navigation',
                    subtitle: to.fullPath,
                    time: api.now(),
                    data,
                    logType: failure ? 'warning' : 'default',
                    groupId: to.meta.__navigationId
                }
            });
        });
        /**
         * Inspector of Existing routes
         */ const routerInspectorId = 'router-inspector:' + id;
        api.addInspector({
            id: routerInspectorId,
            label: 'Routes' + (id ? ' ' + id : ''),
            icon: 'book',
            treeFilterPlaceholder: 'Search routes'
        });
        function refreshRoutesView() {
            // the routes view isn't active
            if (!activeRoutesPayload) return;
            const payload = activeRoutesPayload;
            // children routes will appear as nested
            let routes = matcher.getRoutes().filter((route)=>!route.parent || // these routes have a parent with no component which will not appear in the view
                // therefore we still need to include them
                !route.parent.record.components);
            // reset match state to false
            routes.forEach(resetMatchStateOnRouteRecord);
            // apply a match state if there is a payload
            if (payload.filter) routes = routes.filter((route)=>// save matches state based on the payload
                isRouteMatching(route, payload.filter.toLowerCase()));
            // mark active routes
            routes.forEach((route)=>markRouteRecordActive(route, router.currentRoute.value));
            payload.rootNodes = routes.map(formatRouteRecordForInspector);
        }
        let activeRoutesPayload;
        api.on.getInspectorTree((payload)=>{
            activeRoutesPayload = payload;
            if (payload.app === app && payload.inspectorId === routerInspectorId) refreshRoutesView();
        });
        /**
         * Display information about the currently selected route record
         */ api.on.getInspectorState((payload)=>{
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                const routes = matcher.getRoutes();
                const route = routes.find((route)=>route.record.__vd_id === payload.nodeId);
                if (route) payload.state = {
                    options: formatRouteRecordMatcherForStateInspector(route)
                };
            }
        });
        api.sendInspectorTree(routerInspectorId);
        api.sendInspectorState(routerInspectorId);
    });
}
function modifierForKey(key) {
    if (key.optional) return key.repeatable ? '*' : '?';
    else return key.repeatable ? '+' : '';
}
function formatRouteRecordMatcherForStateInspector(route) {
    const { record } = route;
    const fields = [
        {
            editable: false,
            key: 'path',
            value: record.path
        }
    ];
    if (record.name != null) fields.push({
        editable: false,
        key: 'name',
        value: record.name
    });
    fields.push({
        editable: false,
        key: 'regexp',
        value: route.re
    });
    if (route.keys.length) fields.push({
        editable: false,
        key: 'keys',
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.keys.map((key)=>`${key.name}${modifierForKey(key)}`).join(' '),
                tooltip: 'Param keys',
                value: route.keys
            }
        }
    });
    if (record.redirect != null) fields.push({
        editable: false,
        key: 'redirect',
        value: record.redirect
    });
    if (route.alias.length) fields.push({
        editable: false,
        key: 'aliases',
        value: route.alias.map((alias)=>alias.record.path)
    });
    if (Object.keys(route.record.meta).length) fields.push({
        editable: false,
        key: 'meta',
        value: route.record.meta
    });
    fields.push({
        key: 'score',
        editable: false,
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.score.map((score)=>score.join(', ')).join(' | '),
                tooltip: 'Score used to sort routes',
                value: route.score
            }
        }
    });
    return fields;
}
/**
 * Extracted from tailwind palette
 */ const PINK_500 = 0xec4899;
const BLUE_600 = 0x2563eb;
const LIME_500 = 0x84cc16;
const CYAN_400 = 0x22d3ee;
const ORANGE_400 = 0xfb923c;
// const GRAY_100 = 0xf4f4f5
const DARK = 0x666666;
const RED_100 = 0xfee2e2;
const RED_700 = 0xb91c1c;
function formatRouteRecordForInspector(route) {
    const tags = [];
    const { record } = route;
    if (record.name != null) tags.push({
        label: String(record.name),
        textColor: 0,
        backgroundColor: CYAN_400
    });
    if (record.aliasOf) tags.push({
        label: 'alias',
        textColor: 0,
        backgroundColor: ORANGE_400
    });
    if (route.__vd_match) tags.push({
        label: 'matches',
        textColor: 0,
        backgroundColor: PINK_500
    });
    if (route.__vd_exactActive) tags.push({
        label: 'exact',
        textColor: 0,
        backgroundColor: LIME_500
    });
    if (route.__vd_active) tags.push({
        label: 'active',
        textColor: 0,
        backgroundColor: BLUE_600
    });
    if (record.redirect) tags.push({
        label: typeof record.redirect === 'string' ? `redirect: ${record.redirect}` : 'redirects',
        textColor: 0xffffff,
        backgroundColor: DARK
    });
    // add an id to be able to select it. Using the `path` is not possible because
    // empty path children would collide with their parents
    let id = record.__vd_id;
    if (id == null) {
        id = String(routeRecordId++);
        record.__vd_id = id;
    }
    return {
        id,
        label: record.path,
        tags,
        children: route.children.map(formatRouteRecordForInspector)
    };
}
//  incremental id for route records and inspector state
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
    // no route will be active if matched is empty
    // reset the matching state
    const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
    route.__vd_exactActive = route.__vd_active = isExactActive;
    if (!isExactActive) route.__vd_active = currentRoute.matched.some((match)=>isSameRouteRecord(match, route.record));
    route.children.forEach((childRoute)=>markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
    route.__vd_match = false;
    route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
    const found = String(route.re).match(EXTRACT_REGEXP_RE);
    route.__vd_match = false;
    if (!found || found.length < 3) return false;
    // use a regexp without $ at the end to match nested routes better
    const nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);
    if (nonEndingRE.test(filter)) {
        // mark children as matches
        route.children.forEach((child)=>isRouteMatching(child, filter));
        // exception case: `/`
        if (route.record.path !== '/' || filter === '/') {
            route.__vd_match = route.re.test(filter);
            return true;
        }
        // hide the / route
        return false;
    }
    const path = route.record.path.toLowerCase();
    const decodedPath = decode(path);
    // also allow partial matching on the path
    if (!filter.startsWith('/') && (decodedPath.includes(filter) || path.includes(filter))) return true;
    if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
    if (route.record.name && String(route.record.name).includes(filter)) return true;
    return route.children.some((child)=>isRouteMatching(child, filter));
}
function omit(obj, keys) {
    const ret = {};
    for(const key in obj)if (!keys.includes(key)) // @ts-expect-error
    ret[key] = obj[key];
    return ret;
}
/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */ function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    if (!routerHistory) throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = (0, _vue.shallowRef)(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) history.scrollRestoration = 'manual';
    const normalizeParams = applyToParams.bind(null, (paramValue)=>'' + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            if (!parent) warn(`Parent route "${String(parentOrRoute)}" not found when adding child route`, route);
            record = route;
        } else record = parentOrRoute;
        return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
        const recordMatcher = matcher.getRecordMatcher(name);
        if (recordMatcher) matcher.removeRoute(recordMatcher);
        else warn(`Cannot remove non-existent route "${String(name)}"`);
    }
    function getRoutes() {
        return matcher.getRoutes().map((routeMatcher)=>routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const resolve: Router['resolve'] = (rawLocation: RouteLocationRaw, currentLocation) => {
        // const objectLocation = routerLocationAsObject(rawLocation)
        // we create a copy to modify it later
        currentLocation = assign({}, currentLocation || currentRoute.value);
        if (typeof rawLocation === 'string') {
            const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            const matchedRoute = matcher.resolve({
                path: locationNormalized.path
            }, currentLocation);
            const href = routerHistory.createHref(locationNormalized.fullPath);
            if (href.startsWith('//')) warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
            else if (!matchedRoute.matched.length) warn(`No match found for location with path "${rawLocation}"`);
            // locationNormalized is always a new object
            return assign(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                hash: decode(locationNormalized.hash),
                redirectedFrom: undefined,
                href
            });
        }
        if (!isRouteLocation(rawLocation)) {
            warn(`router.resolve() was passed an invalid location. This will fail in production.\n- Location:`, rawLocation);
            return resolve({});
        }
        let matcherLocation;
        // path could be relative in object as well
        if (rawLocation.path != null) {
            if ('params' in rawLocation && !('name' in rawLocation) && // @ts-expect-error: the type is never
            Object.keys(rawLocation.params).length) warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
            matcherLocation = assign({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
            });
        } else {
            // remove any nullish param
            const targetParams = assign({}, rawLocation.params);
            for(const key in targetParams)if (targetParams[key] == null) delete targetParams[key];
            // pass encoded values to the matcher, so it can produce encoded path and fullPath
            matcherLocation = assign({}, rawLocation, {
                params: encodeParams(targetParams)
            });
            // current location params are decoded, we need to encode them in case the
            // matcher merges the params
            currentLocation.params = encodeParams(currentLocation.params);
        }
        const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = rawLocation.hash || '';
        if (hash && !hash.startsWith('#')) warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
        // the matcher might have merged current location params, so
        // we need to run the decoding again
        matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
        const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
            hash: encodeHash(hash),
            path: matchedRoute.path
        }));
        const href = routerHistory.createHref(fullPath);
        if (href.startsWith('//')) warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute.matched.length) warn(`No match found for location with path "${rawLocation.path != null ? rawLocation.path : rawLocation}"`);
        return assign({
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: // if the user is using a custom query lib like qs, we might have
            // nested objects, so we keep the query as is, meaning it can contain
            // numbers at `$route.query`, but at the point, the user will have to
            // use their own type anyway.
            // https://github.com/vuejs/router/issues/328#issuecomment-649481567
            stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
        }, matchedRoute, {
            redirectedFrom: undefined,
            href
        });
    }
    function locationAsObject(to) {
        return typeof to === 'string' ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
        if (pendingLocation !== to) return createRouterError(8 /* ErrorTypes.NAVIGATION_CANCELLED */ , {
            from,
            to
        });
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push(assign(locationAsObject(to), {
            replace: true
        }));
    }
    function handleRedirectRecord(to) {
        const lastMatched = to.matched[to.matched.length - 1];
        if (lastMatched && lastMatched.redirect) {
            const { redirect } = lastMatched;
            let newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
            if (typeof newTargetLocation === 'string') {
                newTargetLocation = newTargetLocation.includes('?') || newTargetLocation.includes('#') ? newTargetLocation = locationAsObject(newTargetLocation) : {
                    path: newTargetLocation
                };
                // @ts-expect-error: force empty params when a string is passed to let
                // the router parse them again
                newTargetLocation.params = {};
            }
            if (newTargetLocation.path == null && !('name' in newTargetLocation)) {
                warn(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
                throw new Error('Invalid redirect');
            }
            return assign({
                query: to.query,
                hash: to.hash,
                // avoid transferring params if the redirect has a path
                params: newTargetLocation.path != null ? {} : to.params
            }, newTargetLocation);
        }
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = pendingLocation = resolve(to);
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const shouldRedirect = handleRedirectRecord(targetLocation);
        if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
            state: typeof shouldRedirect === 'object' ? assign({}, data, shouldRedirect.state) : data,
            force,
            replace
        }), // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation);
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
            failure = createRouterError(16 /* ErrorTypes.NAVIGATION_DUPLICATED */ , {
                to: toLocation,
                from
            });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a push
            true, // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error)=>isNavigationFailure(error) ? isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ ) ? error : markAsReady(error) // also returns the error
             : triggerError(error, toLocation, from)).then((failure)=>{
            if (failure) {
                if (isNavigationFailure(failure, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ )) {
                    if (// we are redirecting to the same location we were already at
                    isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) && // and we have done it a couple of times
                    redirectedFrom && // @ts-expect-error: added only in dev
                    (redirectedFrom._count = redirectedFrom._count ? redirectedFrom._count + 1 : 1) > 30) {
                        warn(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.\n Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
                        return Promise.reject(new Error('Infinite redirect in navigation guard'));
                    }
                    return pushWithRedirect(// keep options
                    assign({
                        // preserve an existing replacement but allow the redirect to override it
                        replace
                    }, locationAsObject(failure.to), {
                        state: typeof failure.to === 'object' ? assign({}, data, failure.to.state) : data,
                        force
                    }), // preserve the original redirectedFrom if any
                    redirectedFrom || toLocation);
                }
            } else // if we fail we don't finalize the navigation
            failure = finalizeNavigation(toLocation, from, true, replace, data);
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */ function checkCanceledNavigationAndReject(to, from) {
        const error = checkCanceledNavigation(to, from);
        return error ? Promise.reject(error) : Promise.resolve();
    }
    function runWithContext(fn) {
        const app = installedApps.values().next().value;
        // support Vue < 3.3
        return app && typeof app.runWithContext === 'function' ? app.runWithContext(fn) : fn();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
        let guards;
        const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
        // leavingRecords is already reversed
        for (const record of leavingRecords)record.leaveGuards.forEach((guard)=>{
            guards.push(guardToPromiseFn(guard, to, from));
        });
        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeRouteLeave guards
        return runGuardQueue(guards).then(()=>{
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list())guards.push(guardToPromiseFn(guard, to, from));
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        }).then(()=>{
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
            for (const record of updatingRecords)record.updateGuards.forEach((guard)=>{
                guards.push(guardToPromiseFn(guard, to, from));
            });
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // check the route beforeEnter
            guards = [];
            for (const record of enteringRecords)// do not trigger beforeEnter on reused views
            if (record.beforeEnter) {
                if (isArray(record.beforeEnter)) for (const beforeEnter of record.beforeEnter)guards.push(guardToPromiseFn(beforeEnter, to, from));
                else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // clear existing enterCallbacks, these are added by extractComponentsGuards
            to.matched.forEach((record)=>record.enterCallbacks = {});
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from, runWithContext);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list())guards.push(guardToPromiseFn(guard, to, from));
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })// catch any navigation canceled
        .catch((err)=>isNavigationFailure(err, 8 /* ErrorTypes.NAVIGATION_CANCELLED */ ) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        afterGuards.list().forEach((guard)=>runWithContext(()=>guard(to, from, failure)));
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */ function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        const error = checkCanceledNavigation(toLocation, from);
        if (error) return error;
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
                scroll: isFirstNavigation && state && state.scroll
            }, data));
            else routerHistory.push(toLocation.fullPath, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    let removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
        // avoid setting up listeners twice due to an invalid first navigation
        if (removeHistoryListener) return;
        removeHistoryListener = routerHistory.listen((to, _from, info)=>{
            if (!router.listening) return;
            // cannot be a redirect route because it was in history
            const toLocation = resolve(to);
            // due to dynamic routing, and to hash history with manual navigation
            // (manually changing the url or calling history.hash = '#/somewhere'),
            // there could be a redirect record in history
            const shouldRedirect = handleRedirectRecord(toLocation);
            if (shouldRedirect) {
                pushWithRedirect(assign(shouldRedirect, {
                    replace: true,
                    force: true
                }), toLocation).catch(noop);
                return;
            }
            pendingLocation = toLocation;
            const from = currentRoute.value;
            // TODO: should be moved to web history?
            if (isBrowser) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
            navigate(toLocation, from).catch((error)=>{
                if (isNavigationFailure(error, 12 /* ErrorTypes.NAVIGATION_CANCELLED */ )) return error;
                if (isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ )) {
                    // Here we could call if (info.delta) routerHistory.go(-info.delta,
                    // false) but this is bug prone as we have no way to wait the
                    // navigation to be finished before calling pushWithRedirect. Using
                    // a setTimeout of 16ms seems to work but there is no guarantee for
                    // it to work on every browser. So instead we do not restore the
                    // history entry and trigger a new navigation as requested by the
                    // navigation guard.
                    // the error is already handled by router.push we just want to avoid
                    // logging the error
                    pushWithRedirect(assign(locationAsObject(error.to), {
                        force: true
                    }), toLocation).then((failure)=>{
                        // manual change in hash history #916 ending up in the URL not
                        // changing, but it was changed by the manual url change, so we
                        // need to manually change it ourselves
                        if (isNavigationFailure(failure, 20 /* ErrorTypes.NAVIGATION_DUPLICATED */ ) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
                    }).catch(noop);
                    // avoid the then branch
                    return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta) routerHistory.go(-info.delta, false);
                // unrecognized error, transfer to the global handler
                return triggerError(error, toLocation, from);
            }).then((failure)=>{
                failure = failure || finalizeNavigation(// after navigation, all matched components are resolved
                toLocation, from, false);
                // revert the navigation
                if (failure) {
                    if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
                    // entry while a different route is displayed
                    !isNavigationFailure(failure, 8 /* ErrorTypes.NAVIGATION_CANCELLED */ )) routerHistory.go(-info.delta, false);
                    else if (info.type === NavigationType.pop && isNavigationFailure(failure, 20 /* ErrorTypes.NAVIGATION_DUPLICATED */ )) // manual change in hash history #916
                    // it's like a push but lacks the information of the direction
                    routerHistory.go(-1, false);
                }
                triggerAfterEach(toLocation, from, failure);
            })// avoid warnings in the console about uncaught rejections, they are logged by triggerErrors
            .catch(noop);
        });
    }
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorListeners = useCallbacks();
    let ready;
    /**
     * Trigger errorListeners added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */ function triggerError(error, to, from) {
        markAsReady(error);
        const list = errorListeners.list();
        if (list.length) list.forEach((handler)=>handler(error, to, from));
        else {
            warn('uncaught error during route navigation:');
            console.error(error);
        }
        // reject the error no matter there were error listeners or not
        return Promise.reject(error);
    }
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
        return new Promise((resolve, reject)=>{
            readyHandlers.add([
                resolve,
                reject
            ]);
        });
    }
    function markAsReady(err) {
        if (!ready) {
            // still not ready if an error happened
            ready = !err;
            setupListeners();
            readyHandlers.list().forEach(([resolve, reject])=>err ? reject(err) : resolve());
            readyHandlers.reset();
        }
        return err;
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        const { scrollBehavior } = options;
        if (!isBrowser || !scrollBehavior) return Promise.resolve();
        const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
        return (0, _vue.nextTick)().then(()=>scrollBehavior(to, from, scrollPosition)).then((position)=>position && scrollToPosition(position)).catch((err)=>triggerError(err, to, from));
    }
    const go = (delta)=>routerHistory.go(delta);
    let started;
    const installedApps = new Set();
    const router = {
        currentRoute,
        listening: true,
        addRoute,
        removeRoute,
        clearRoutes: matcher.clearRoutes,
        hasRoute,
        getRoutes,
        resolve,
        options,
        push,
        replace,
        go,
        back: ()=>go(-1),
        forward: ()=>go(1),
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
        onError: errorListeners.add,
        isReady,
        install (app) {
            const router = this;
            app.component('RouterLink', RouterLink);
            app.component('RouterView', RouterView);
            app.config.globalProperties.$router = router;
            Object.defineProperty(app.config.globalProperties, '$route', {
                enumerable: true,
                get: ()=>(0, _vue.unref)(currentRoute)
            });
            // this initial navigation is only necessary on client, on server it doesn't
            // make sense because it will create an extra unnecessary navigation and could
            // lead to problems
            if (isBrowser && // used for the initial navigation client side to avoid pushing
            // multiple times when the router is used in multiple apps
            !started && currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch((err)=>{
                    warn('Unexpected error when starting the router:', err);
                });
            }
            const reactiveRoute = {};
            for(const key in START_LOCATION_NORMALIZED)Object.defineProperty(reactiveRoute, key, {
                get: ()=>currentRoute.value[key],
                enumerable: true
            });
            app.provide(routerKey, router);
            app.provide(routeLocationKey, (0, _vue.shallowReactive)(reactiveRoute));
            app.provide(routerViewLocationKey, currentRoute);
            const unmountApp = app.unmount;
            installedApps.add(app);
            app.unmount = function() {
                installedApps.delete(app);
                // the router is not attached to an app anymore
                if (installedApps.size < 1) {
                    // invalidate the current navigation
                    pendingLocation = START_LOCATION_NORMALIZED;
                    removeHistoryListener && removeHistoryListener();
                    removeHistoryListener = null;
                    currentRoute.value = START_LOCATION_NORMALIZED;
                    started = false;
                    ready = false;
                }
                unmountApp();
            };
            // TODO: this probably needs to be updated so it can be used by vue-termui
            if (isBrowser) addDevtools(app, router, matcher);
        }
    };
    // TODO: type this as NavigationGuardReturn or similar instead of any
    function runGuardQueue(guards) {
        return guards.reduce((promise, guard)=>promise.then(()=>runWithContext(guard)), Promise.resolve());
    }
    return router;
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for(let i = 0; i < len; i++){
        const recordFrom = from.matched[i];
        if (recordFrom) {
            if (to.matched.find((record)=>isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
            else leavingRecords.push(recordFrom);
        }
        const recordTo = to.matched[i];
        if (recordTo) // the type doesn't matter because we are comparing per reference
        {
            if (!from.matched.find((record)=>isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
        }
    }
    return [
        leavingRecords,
        updatingRecords,
        enteringRecords
    ];
}
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */ function useRouter() {
    return (0, _vue.inject)(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */ function useRoute(_name) {
    return (0, _vue.inject)(routeLocationKey);
}

},{"vue":"1pgRQ","@vue/devtools-api":"evZMn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"evZMn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupDevtoolsPlugin", ()=>setupDevtoolsPlugin);
var _envJs = require("./env.js");
var _constJs = require("./const.js");
var _proxyJs = require("./proxy.js");
var _indexJs = require("./api/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _pluginJs = require("./plugin.js");
parcelHelpers.exportAll(_pluginJs, exports);
var _timeJs = require("./time.js");
parcelHelpers.exportAll(_timeJs, exports);
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = (0, _envJs.getTarget)();
    const hook = (0, _envJs.getDevtoolsGlobalHook)();
    const enableProxy = (0, _envJs.isProxyAvailable) && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) hook.emit((0, _constJs.HOOK_SETUP), pluginDescriptor, setupFn);
    else {
        const proxy = enableProxy ? new (0, _proxyJs.ApiProxy)(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy
        });
        if (proxy) setupFn(proxy.proxiedTarget);
    }
}

},{"./env.js":"6g2Ft","./const.js":"7IHkl","./proxy.js":"7hxah","./api/index.js":false,"./plugin.js":false,"./time.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6g2Ft":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevtoolsGlobalHook", ()=>getDevtoolsGlobalHook);
parcelHelpers.export(exports, "getTarget", ()=>getTarget);
parcelHelpers.export(exports, "isProxyAvailable", ()=>isProxyAvailable);
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-expect-error navigator and windows are not available in all environments
    return typeof navigator !== 'undefined' && typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : {};
}
const isProxyAvailable = typeof Proxy === 'function';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7IHkl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HOOK_SETUP", ()=>HOOK_SETUP);
parcelHelpers.export(exports, "HOOK_PLUGIN_SETTINGS_SET", ()=>HOOK_PLUGIN_SETTINGS_SET);
const HOOK_SETUP = 'devtools-plugin:setup';
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7hxah":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApiProxy", ()=>ApiProxy);
var _constJs = require("./const.js");
var _timeJs = require("./time.js");
class ApiProxy {
    constructor(plugin, hook){
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) for(const id in plugin.settings){
            const item = plugin.settings[id];
            defaultSettings[id] = item.defaultValue;
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        } catch (e) {
        // noop
        }
        this.fallbacks = {
            getSettings () {
                return currentSettings;
            },
            setSettings (value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                } catch (e) {
                // noop
                }
                currentSettings = value;
            },
            now () {
                return (0, _timeJs.now)();
            }
        };
        if (hook) hook.on((0, _constJs.HOOK_PLUGIN_SETTINGS_SET), (pluginId, value)=>{
            if (pluginId === this.plugin.id) this.fallbacks.setSettings(value);
        });
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop)=>{
                if (this.target) return this.target.on[prop];
                else return (...args)=>{
                    this.onQueue.push({
                        method: prop,
                        args
                    });
                };
            }
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop)=>{
                if (this.target) return this.target[prop];
                else if (prop === 'on') return this.proxiedOn;
                else if (Object.keys(this.fallbacks).includes(prop)) return (...args)=>{
                    this.targetQueue.push({
                        method: prop,
                        args,
                        resolve: ()=>{}
                    });
                    return this.fallbacks[prop](...args);
                };
                else return (...args)=>{
                    return new Promise((resolve)=>{
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve
                        });
                    });
                };
            }
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue)this.target.on[item.method](...item.args);
        for (const item of this.targetQueue)item.resolve(await this.target[item.method](...item.args));
    }
}

},{"./const.js":"7IHkl","./time.js":"kHF7t","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kHF7t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPerformanceSupported", ()=>isPerformanceSupported);
parcelHelpers.export(exports, "now", ()=>now);
let supported;
let perf;
function isPerformanceSupported() {
    var _a;
    if (supported !== undefined) return supported;
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    } else if (typeof globalThis !== 'undefined' && ((_a = globalThis.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
        supported = true;
        perf = globalThis.perf_hooks.performance;
    } else supported = false;
    return supported;
}
function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aMXIv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("80cd5c950cae9476");
    if (script.__esModule) script = script.default;
    script.render = require("f26c5a1054f28109").render;
    require("651ba902a35be308").default(script);
    script.__scopeId = 'data-v-bc93d5';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\AboutView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = 'bc93d5-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('bc93d5-hmr', script)) __VUE_HMR_RUNTIME__.reload('bc93d5-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"80cd5c950cae9476":"5gasP","f26c5a1054f28109":"7dHFK","651ba902a35be308":"eUMLe","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5gasP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    name: 'AboutView',
    props: {
        params: {
            type: Object,
            default: ()=>({})
        }
    },
    setup (props, { emit }) {
        const appVersion = '1.0.0';
        const lastUpdated = 'May 6, 2025';
        function goBack() {
            emit('go-back');
        }
        return {
            appVersion,
            lastUpdated,
            goBack
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7dHFK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "p-4 sm:p-6"
};
const _hoisted_2 = {
    class: "flex justify-between items-center mb-6"
};
const _hoisted_3 = {
    class: "bg-white rounded-lg shadow p-4 mb-6"
};
const _hoisted_4 = {
    class: "grid grid-cols-2 gap-2 text-sm"
};
const _hoisted_5 = {
    class: "text-gray-700"
};
const _hoisted_6 = {
    class: "text-gray-700"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createElementVNode)("div", _hoisted_2, [
            _cache[1] || (_cache[1] = (0, _vue.createElementVNode)("h1", {
                class: "text-2xl font-bold text-gray-800"
            }, "About", -1 /* HOISTED */ )),
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[0] || (_cache[0] = (...args)=>$setup.goBack && $setup.goBack(...args)),
                class: "text-blue-500 font-medium"
            }, " Back to Home ")
        ]),
        _cache[7] || (_cache[7] = (0, _vue.createStaticVNode)("<div class=\"bg-white rounded-lg shadow p-4 mb-6\"><h2 class=\"text-lg font-semibold text-gray-700 mb-4\">Music Besties</h2><p class=\"text-gray-600 mb-4\"> Music Besties is a web application that allows you to rank and organize your favorite music. Create personalized rankings of songs, albums, and musical eras to share your music taste with friends. </p><div class=\"border-t border-gray-200 pt-4 mt-4\"><h3 class=\"font-medium text-gray-700 mb-2\">Features</h3><ul class=\"list-disc pl-5 text-gray-600 space-y-1\"><li>Rank songs across different musical eras</li><li>Create personalized top lists of your favorite music</li><li>Rate albums and leave reviews</li><li>Track your music preferences over time</li><li>Share your rankings with friends</li></ul></div></div><div class=\"bg-white rounded-lg shadow p-4 mb-6\"><h2 class=\"text-lg font-semibold text-gray-700 mb-4\">How It Works</h2><ol class=\"list-decimal pl-5 text-gray-600 space-y-2\"><li><strong>Browse Music:</strong> Explore songs organized by era, album, or artist </li><li><strong>Create Rankings:</strong> Drag and drop songs to create your personal rankings </li><li><strong>Rate &amp; Review:</strong> Add ratings and comments to share your thoughts </li><li><strong>Save &amp; Share:</strong> Your rankings are saved automatically and can be shared </li></ol></div>", 2)),
        (0, _vue.createElementVNode)("div", _hoisted_3, [
            _cache[6] || (_cache[6] = (0, _vue.createElementVNode)("h2", {
                class: "text-lg font-semibold text-gray-700 mb-4"
            }, "Version Information", -1 /* HOISTED */ )),
            (0, _vue.createElementVNode)("div", _hoisted_4, [
                _cache[2] || (_cache[2] = (0, _vue.createElementVNode)("div", {
                    class: "text-gray-500"
                }, "App Version:", -1 /* HOISTED */ )),
                (0, _vue.createElementVNode)("div", _hoisted_5, (0, _vue.toDisplayString)($setup.appVersion), 1 /* TEXT */ ),
                _cache[3] || (_cache[3] = (0, _vue.createElementVNode)("div", {
                    class: "text-gray-500"
                }, "Last Updated:", -1 /* HOISTED */ )),
                (0, _vue.createElementVNode)("div", _hoisted_6, (0, _vue.toDisplayString)($setup.lastUpdated), 1 /* TEXT */ ),
                _cache[4] || (_cache[4] = (0, _vue.createElementVNode)("div", {
                    class: "text-gray-500"
                }, "Created By:", -1 /* HOISTED */ )),
                _cache[5] || (_cache[5] = (0, _vue.createElementVNode)("div", {
                    class: "text-gray-700"
                }, "Music Besties Team", -1 /* HOISTED */ ))
            ])
        ]),
        _cache[8] || (_cache[8] = (0, _vue.createStaticVNode)("<div class=\"bg-white rounded-lg shadow p-4\"><h2 class=\"text-lg font-semibold text-gray-700 mb-4\">Contact</h2><p class=\"text-gray-600 mb-4\"> Have questions, feedback, or suggestions? We&#39;d love to hear from you! </p><div class=\"grid grid-cols-2 gap-2 text-sm\"><div class=\"text-gray-500\">Email:</div><div class=\"text-gray-700\">support@musicbesties.example.com</div><div class=\"text-gray-500\">Twitter:</div><div class=\"text-gray-700\">@MusicBesties</div></div></div>", 1))
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('bc93d5-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eUMLe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j9uNz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("59b9a75b36ea2050");
    if (script.__esModule) script = script.default;
    script.render = require("ff44a1f4c2c12dac").render;
    require("9fd6f3c2ff7f3c7a").default(script);
    script.__scopeId = 'data-v-a21ce9';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\ProfileView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = 'a21ce9-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('a21ce9-hmr', script)) __VUE_HMR_RUNTIME__.reload('a21ce9-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"59b9a75b36ea2050":"1LmwA","ff44a1f4c2c12dac":"4QIHw","9fd6f3c2ff7f3c7a":"2cuvF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1LmwA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    name: 'ProfileView',
    props: {
        params: {
            type: Object,
            default: ()=>({})
        }
    },
    setup (props, { emit }) {
        function goBack() {
            emit('go-back');
        }
        return {
            goBack
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4QIHw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "p-4 sm:p-6"
};
const _hoisted_2 = {
    class: "flex justify-between items-center mb-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createElementVNode)("div", _hoisted_2, [
            _cache[1] || (_cache[1] = (0, _vue.createElementVNode)("h1", {
                class: "text-2xl font-bold text-gray-800"
            }, "Profile", -1 /* HOISTED */ )),
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[0] || (_cache[0] = (...args)=>$setup.goBack && $setup.goBack(...args)),
                class: "text-blue-500 font-medium"
            }, " Back to Home ")
        ]),
        _cache[2] || (_cache[2] = (0, _vue.createStaticVNode)("<div class=\"bg-white rounded-lg shadow p-4 mb-6\"><div class=\"flex items-center mb-6\"><div class=\"bg-blue-100 rounded-full p-4 mr-4\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12 text-blue-500\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"></path></svg></div><div><h2 class=\"text-xl font-semibold text-gray-800\">Music Lover</h2><p class=\"text-gray-500\">Member since May 2025</p></div></div><div class=\"border-t border-gray-200 pt-4\"><h3 class=\"font-medium text-gray-700 mb-3\">Account Information</h3><div class=\"grid grid-cols-2 gap-4 text-sm\"><div class=\"text-gray-500\">Username:</div><div class=\"text-gray-700\">music_lover_123</div><div class=\"text-gray-500\">Email:</div><div class=\"text-gray-700\">user@example.com</div><div class=\"text-gray-500\">Subscription:</div><div class=\"text-gray-700\">Free Tier</div></div></div></div><div class=\"bg-white rounded-lg shadow p-4 mb-6\"><h2 class=\"text-lg font-semibold text-gray-700 mb-4\">Statistics</h2><div class=\"grid grid-cols-2 gap-4 mb-4\"><div class=\"bg-blue-50 p-3 rounded-lg\"><div class=\"text-sm text-gray-500\">Rankings Created</div><div class=\"text-2xl font-bold text-blue-600\">12</div></div><div class=\"bg-purple-50 p-3 rounded-lg\"><div class=\"text-sm text-gray-500\">Reviews Written</div><div class=\"text-2xl font-bold text-purple-600\">8</div></div><div class=\"bg-green-50 p-3 rounded-lg\"><div class=\"text-sm text-gray-500\">Songs Ranked</div><div class=\"text-2xl font-bold text-green-600\">47</div></div><div class=\"bg-amber-50 p-3 rounded-lg\"><div class=\"text-sm text-gray-500\">Favorite Era</div><div class=\"text-2xl font-bold text-amber-600\">Midnights</div></div></div></div><div class=\"bg-white rounded-lg shadow p-4\"><h2 class=\"text-lg font-semibold text-gray-700 mb-4\">Preferences</h2><div class=\"space-y-4\"><div class=\"flex items-center justify-between\"><div><div class=\"font-medium text-gray-700\">Dark Mode</div><div class=\"text-sm text-gray-500\">Use dark theme throughout the app</div></div><div class=\"relative inline-block w-12 h-6 rounded-full bg-gray-200\"><div class=\"absolute left-1 top-1 w-4 h-4 rounded-full bg-white\"></div></div></div><div class=\"flex items-center justify-between\"><div><div class=\"font-medium text-gray-700\">Email Notifications</div><div class=\"text-sm text-gray-500\">Receive updates about new features</div></div><div class=\"relative inline-block w-12 h-6 rounded-full bg-blue-500\"><div class=\"absolute right-1 top-1 w-4 h-4 rounded-full bg-white\"></div></div></div></div></div>", 3))
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('a21ce9-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2cuvF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kJwRF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9d795f0c81af41f0");
    if (script.__esModule) script = script.default;
    script.render = require("7b4d78088e842f8").render;
    require("b313c7a464df26f6").default(script);
    script.__scopeId = 'data-v-37be05';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\SettingsView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = '37be05-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('37be05-hmr', script)) __VUE_HMR_RUNTIME__.reload('37be05-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"9d795f0c81af41f0":"12tKq","7b4d78088e842f8":"1Utjr","b313c7a464df26f6":"dqFVL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"12tKq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    name: 'SettingsView',
    props: {
        params: {
            type: Object,
            default: ()=>({})
        }
    },
    setup (props, { emit }) {
        function goBack() {
            emit('go-back');
        }
        return {
            goBack
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1Utjr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "p-4 sm:p-6"
};
const _hoisted_2 = {
    class: "flex justify-between items-center mb-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createElementVNode)("div", _hoisted_2, [
            _cache[1] || (_cache[1] = (0, _vue.createElementVNode)("h1", {
                class: "text-2xl font-bold text-gray-800"
            }, "Settings", -1 /* HOISTED */ )),
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[0] || (_cache[0] = (...args)=>$setup.goBack && $setup.goBack(...args)),
                class: "text-blue-500 font-medium"
            }, " Back to Home ")
        ]),
        _cache[2] || (_cache[2] = (0, _vue.createStaticVNode)('<div class="bg-white rounded-lg shadow p-4 mb-6"><h2 class="text-lg font-semibold text-gray-700 mb-4">Account Settings</h2><div class="space-y-4"><div><label class="block text-sm font-medium text-gray-700 mb-1">Username</label><input type="text" value="music_lover_123" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Email Address</label><input type="email" value="user@example.com" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Password</label><input type="password" value="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></div><button class="mt-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"> Save Changes </button></div></div><div class="bg-white rounded-lg shadow p-4 mb-6"><h2 class="text-lg font-semibold text-gray-700 mb-4">Appearance</h2><div class="space-y-4"><div class="flex items-center justify-between"><div><div class="font-medium text-gray-700">Dark Mode</div><div class="text-sm text-gray-500">Use dark theme throughout the app</div></div><div class="relative inline-block w-12 h-6 rounded-full bg-gray-200"><div class="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></div></div></div><div class="flex items-center justify-between"><div><div class="font-medium text-gray-700">High Contrast</div><div class="text-sm text-gray-500">Increase contrast for better readability</div></div><div class="relative inline-block w-12 h-6 rounded-full bg-gray-200"><div class="absolute left-1 top-1 w-4 h-4 rounded-full bg-white"></div></div></div><div><label class="block text-sm font-medium text-gray-700 mb-1">Text Size</label><select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"><option>Small</option><option selected>Medium</option><option>Large</option><option>Extra Large</option></select></div></div></div><div class="bg-white rounded-lg shadow p-4 mb-6"><h2 class="text-lg font-semibold text-gray-700 mb-4">Notifications</h2><div class="space-y-4"><div class="flex items-center justify-between"><div><div class="font-medium text-gray-700">Email Notifications</div><div class="text-sm text-gray-500">Receive updates about new features</div></div><div class="relative inline-block w-12 h-6 rounded-full bg-blue-500"><div class="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div></div></div><div class="flex items-center justify-between"><div><div class="font-medium text-gray-700">New Rankings</div><div class="text-sm text-gray-500">Get notified about new ranking templates</div></div><div class="relative inline-block w-12 h-6 rounded-full bg-blue-500"><div class="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div></div></div></div></div><div class="bg-white rounded-lg shadow p-4"><h2 class="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2><div class="space-y-4"><div><div class="font-medium text-gray-700 mb-1">Clear All Data</div><div class="text-sm text-gray-500 mb-2">This will remove all your rankings and preferences</div><button class="px-4 py-2 bg-red-100 text-red-600 font-medium rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"> Clear Data </button></div><div class="pt-2 border-t border-gray-200"><div class="font-medium text-gray-700 mb-1">Delete Account</div><div class="text-sm text-gray-500 mb-2">Once deleted, your account cannot be recovered</div><button class="px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"> Delete Account </button></div></div></div>', 4))
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('37be05-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dqFVL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3dAHO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("d8e78199e7ce5393");
    if (script.__esModule) script = script.default;
    script.render = require("940f28d976769c0b").render;
    require("bb4aae6af7475f76").default(script);
    script.__scopeId = 'data-v-a6b814';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\components\\TermsView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = 'a6b814-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('a6b814-hmr', script)) __VUE_HMR_RUNTIME__.reload('a6b814-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"d8e78199e7ce5393":"gwp4I","940f28d976769c0b":"a8zSH","bb4aae6af7475f76":"kgdGZ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gwp4I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    name: 'TermsView',
    props: {
        params: {
            type: Object,
            default: ()=>({})
        }
    },
    setup (props, { emit }) {
        function goBack() {
            emit('go-back');
        }
        return {
            goBack
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a8zSH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "p-4 sm:p-6"
};
const _hoisted_2 = {
    class: "flex justify-between items-center mb-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createElementVNode)("div", _hoisted_2, [
            _cache[1] || (_cache[1] = (0, _vue.createElementVNode)("h1", {
                class: "text-2xl font-bold text-gray-800"
            }, "Terms & Privacy", -1 /* HOISTED */ )),
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[0] || (_cache[0] = (...args)=>$setup.goBack && $setup.goBack(...args)),
                class: "text-blue-500 font-medium"
            }, " Back to Home ")
        ]),
        _cache[2] || (_cache[2] = (0, _vue.createStaticVNode)("<div class=\"bg-white rounded-lg shadow p-4 mb-6\"><h2 class=\"text-lg font-semibold text-gray-700 mb-4\">Terms of Service</h2><p class=\"text-gray-600 mb-4\"> Welcome to Music Besties. By accessing or using our service, you agree to be bound by these Terms of Service. </p><div class=\"space-y-4 text-gray-600\"><div><h3 class=\"font-medium text-gray-700 mb-1\">1. Acceptance of Terms</h3><p> By accessing or using Music Besties, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service. </p></div><div><h3 class=\"font-medium text-gray-700 mb-1\">2. Description of Service</h3><p> Music Besties provides a platform for users to create, save, and share rankings of music. We reserve the right to modify or discontinue the service at any time. </p></div><div><h3 class=\"font-medium text-gray-700 mb-1\">3. User Accounts</h3><p> When you create an account with us, you must provide accurate information. You are responsible for maintaining the security of your account. </p></div><div><h3 class=\"font-medium text-gray-700 mb-1\">4. Content</h3><p> Users may submit content to the service. You retain ownership of your content, but grant us a license to use, modify, and display it in connection with the service. </p></div><div><h3 class=\"font-medium text-gray-700 mb-1\">5. Prohibited Activities</h3><p> You may not use the service for any illegal purposes or to violate any laws. You may not interfere with the proper working of the service. </p></div></div></div><div class=\"bg-white rounded-lg shadow p-4 mb-6\"><h2 class=\"text-lg font-semibold text-gray-700 mb-4\">Privacy Policy</h2><p class=\"text-gray-600 mb-4\"> This Privacy Policy describes how we collect, use, and share your personal information when you use our service. </p><div class=\"space-y-4 text-gray-600\"><div><h3 class=\"font-medium text-gray-700 mb-1\">1. Information We Collect</h3><p> We collect information you provide directly to us, such as your name, email address, and any content you submit. We also collect information automatically when you use the service. </p></div><div><h3 class=\"font-medium text-gray-700 mb-1\">2. How We Use Your Information</h3><p> We use the information we collect to provide, maintain, and improve our service, to communicate with you, and to protect our service and users. </p></div><div><h3 class=\"font-medium text-gray-700 mb-1\">3. Sharing Your Information</h3><p> We may share your information with third-party vendors who need access to your information to provide services to us. We may also share information in response to legal requests. </p></div><div><h3 class=\"font-medium text-gray-700 mb-1\">4. Your Choices</h3><p> You can access and update certain information about you from within your account settings. You can also request that we delete your account. </p></div><div><h3 class=\"font-medium text-gray-700 mb-1\">5. Changes to This Policy</h3><p> We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. </p></div></div></div><div class=\"bg-white rounded-lg shadow p-4\"><h2 class=\"text-lg font-semibold text-gray-700 mb-4\">Contact Us</h2><p class=\"text-gray-600 mb-4\"> If you have any questions about these Terms or Privacy Policy, please contact us: </p><div class=\"grid grid-cols-2 gap-2 text-sm\"><div class=\"text-gray-500\">Email:</div><div class=\"text-gray-700\">legal@musicbesties.example.com</div><div class=\"text-gray-500\">Address:</div><div class=\"text-gray-700\">123 Music Street, Melody City, MC 12345</div></div></div>", 3))
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('a6b814-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kgdGZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lDUoD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "max-w-xl mx-auto bg-white min-h-screen shadow-lg relative overflow-hidden"
};
const _hoisted_2 = {
    class: "sticky top-0 z-10 bg-white border-b border-gray-200"
};
const _hoisted_3 = {
    class: "flex items-center p-4"
};
const _hoisted_4 = {
    class: "p-4 sm:p-6"
};
const _hoisted_5 = {
    class: "flex justify-between items-center mb-6"
};
const _hoisted_6 = {
    class: "flex items-center"
};
const _hoisted_7 = {
    class: "grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6"
};
const _hoisted_8 = {
    class: "flex flex-col min-h-screen"
};
const _hoisted_9 = {
    class: "flex justify-between items-center p-4 border-b border-gray-200 bg-white sticky top-0 z-10"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_router_view = (0, _vue.resolveComponent)("router-view");
    const _component_dashboard_card = (0, _vue.resolveComponent)("dashboard-card");
    const _component_edit_rankings_tabs = (0, _vue.resolveComponent)("edit-rankings-tabs");
    const _component_about_view = (0, _vue.resolveComponent)("about-view");
    const _component_profile_view = (0, _vue.resolveComponent)("profile-view");
    const _component_settings_view = (0, _vue.resolveComponent)("settings-view");
    const _component_terms_view = (0, _vue.resolveComponent)("terms-view");
    const _component_modal_dialog = (0, _vue.resolveComponent)("modal-dialog");
    const _component_sidebar_panel = (0, _vue.resolveComponent)("sidebar-panel");
    const _component_left_sidebar = (0, _vue.resolveComponent)("left-sidebar");
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createCommentVNode)(" Router View for new pages "),
        $setup.isRouterView ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_router_view, {
            key: 0
        }, {
            default: (0, _vue.withCtx)(()=>[
                    (0, _vue.createElementVNode)("div", _hoisted_2, [
                        (0, _vue.createElementVNode)("div", _hoisted_3, [
                            (0, _vue.createElementVNode)("button", {
                                onClick: _cache[0] || (_cache[0] = (...args)=>$setup.toggleLeftSidebar && $setup.toggleLeftSidebar(...args)),
                                class: "mr-3 text-gray-700 p-1 rounded-md active:bg-gray-100 transition-colors no-hover-highlight"
                            }, _cache[6] || (_cache[6] = [
                                (0, _vue.createElementVNode)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                }, [
                                    (0, _vue.createElementVNode)("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                                ], -1 /* HOISTED */ )
                            ])),
                            _cache[7] || (_cache[7] = (0, _vue.createElementVNode)("h1", {
                                class: "text-xl font-semibold text-gray-800"
                            }, "Music Besties", -1 /* HOISTED */ ))
                        ])
                    ])
                ]),
            _: 1 /* STABLE */ 
        })) : (0, _vue.createCommentVNode)("v-if", true),
        (0, _vue.createCommentVNode)(" Dashboard View "),
        (0, _vue.withDirectives)((0, _vue.createElementVNode)("div", _hoisted_4, [
            (0, _vue.createElementVNode)("div", _hoisted_5, [
                (0, _vue.createElementVNode)("div", _hoisted_6, [
                    (0, _vue.createElementVNode)("button", {
                        onClick: _cache[1] || (_cache[1] = (...args)=>$setup.toggleLeftSidebar && $setup.toggleLeftSidebar(...args)),
                        class: "mr-3 text-gray-700 p-1 rounded-md active:bg-gray-100 transition-colors no-hover-highlight"
                    }, _cache[8] || (_cache[8] = [
                        (0, _vue.createElementVNode)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            class: "h-6 w-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor"
                        }, [
                            (0, _vue.createElementVNode)("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M4 6h16M4 12h16M4 18h16"
                            })
                        ], -1 /* HOISTED */ )
                    ])),
                    _cache[9] || (_cache[9] = (0, _vue.createElementVNode)("h1", {
                        class: "text-2xl font-bold text-gray-800"
                    }, "My Rankings", -1 /* HOISTED */ ))
                ]),
                (0, _vue.createElementVNode)("button", {
                    onClick: _cache[2] || (_cache[2] = ($event)=>$setup.showScreen('edit')),
                    class: "bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow active:bg-blue-700 transition-colors text-sm no-hover-highlight"
                }, " Edit ")
            ]),
            (0, _vue.createElementVNode)("div", _hoisted_7, [
                ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($setup.dashboardItems, (era, index)=>{
                    return (0, _vue.openBlock)(), (0, _vue.createBlock)(_component_dashboard_card, {
                        key: era.id || index,
                        "tab-id": era.id,
                        title: era.name,
                        "total-count": era.totalCount,
                        "selected-count": era.selectedCount,
                        rating: era.rating,
                        rank: era.rank,
                        emoji: era.emoji,
                        onOpenSidebar: $setup.openSidebar
                    }, null, 8 /* PROPS */ , [
                        "tab-id",
                        "title",
                        "total-count",
                        "selected-count",
                        "rating",
                        "rank",
                        "emoji",
                        "onOpenSidebar"
                    ]);
                }), 128 /* KEYED_FRAGMENT */ ))
            ]),
            _cache[10] || (_cache[10] = (0, _vue.createElementVNode)("p", {
                class: "text-xs text-gray-400 mt-8 text-center px-4 pb-4"
            }, " This app is unofficial and not affiliated with Taylor Swift or TAS Rights Management, LLC. ", -1 /* HOISTED */ ))
        ], 512 /* NEED_PATCH */ ), [
            [
                (0, _vue.vShow),
                $setup.currentScreen === 'dashboard' && !$setup.isRouterView && !$setup.isStateView
            ]
        ]),
        (0, _vue.createCommentVNode)(" Edit Rankings View "),
        (0, _vue.withDirectives)((0, _vue.createElementVNode)("div", _hoisted_8, [
            (0, _vue.createElementVNode)("div", _hoisted_9, [
                (0, _vue.createElementVNode)("button", {
                    onClick: _cache[3] || (_cache[3] = ($event)=>$setup.showScreen('dashboard')),
                    class: "text-red-600 font-medium px-3 py-1 rounded active:bg-red-100 transition-colors no-hover-highlight"
                }, "Cancel"),
                _cache[11] || (_cache[11] = (0, _vue.createElementVNode)("h2", {
                    class: "text-lg font-semibold text-gray-700"
                }, "Edit Rankings", -1 /* HOISTED */ )),
                (0, _vue.createElementVNode)("button", {
                    onClick: _cache[4] || (_cache[4] = (...args)=>$setup.showSaveConfirmModal && $setup.showSaveConfirmModal(...args)),
                    class: "bg-green-500 text-white font-semibold px-4 py-1 rounded-md shadow active:bg-green-700 transition-colors no-hover-highlight"
                }, "Save")
            ]),
            (0, _vue.createVNode)(_component_edit_rankings_tabs, {
                "active-tab-id": $setup.activeTabId,
                "current-selection-orders": $setup.currentSelectionOrders,
                "saved-data": $setup.savedData,
                onSwitchTab: $setup.switchTab,
                "onUpdate:activeTabId": _cache[5] || (_cache[5] = ($event)=>$setup.activeTabId = $event)
            }, null, 8 /* PROPS */ , [
                "active-tab-id",
                "current-selection-orders",
                "saved-data",
                "onSwitchTab"
            ])
        ], 512 /* NEED_PATCH */ ), [
            [
                (0, _vue.vShow),
                $setup.currentScreen === 'edit' && !$setup.isRouterView && !$setup.isStateView
            ]
        ]),
        (0, _vue.createCommentVNode)(" State-based Views "),
        $setup.isStateView ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), {
            key: 1
        }, [
            (0, _vue.createCommentVNode)(" About View "),
            $setup.appViews.current === 'about' ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_about_view, {
                key: 0,
                params: $setup.appViews.params,
                onGoBack: $setup.goBackView
            }, null, 8 /* PROPS */ , [
                "params",
                "onGoBack"
            ])) : (0, _vue.createCommentVNode)("v-if", true),
            (0, _vue.createCommentVNode)(" Profile View "),
            $setup.appViews.current === 'profile' ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_profile_view, {
                key: 1,
                params: $setup.appViews.params,
                onGoBack: $setup.goBackView
            }, null, 8 /* PROPS */ , [
                "params",
                "onGoBack"
            ])) : (0, _vue.createCommentVNode)("v-if", true),
            (0, _vue.createCommentVNode)(" Settings View "),
            $setup.appViews.current === 'settings' ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_settings_view, {
                key: 2,
                params: $setup.appViews.params,
                onGoBack: $setup.goBackView
            }, null, 8 /* PROPS */ , [
                "params",
                "onGoBack"
            ])) : (0, _vue.createCommentVNode)("v-if", true),
            (0, _vue.createCommentVNode)(" Terms View "),
            $setup.appViews.current === 'terms' ? ((0, _vue.openBlock)(), (0, _vue.createBlock)(_component_terms_view, {
                key: 3,
                params: $setup.appViews.params,
                onGoBack: $setup.goBackView
            }, null, 8 /* PROPS */ , [
                "params",
                "onGoBack"
            ])) : (0, _vue.createCommentVNode)("v-if", true)
        ], 64 /* STABLE_FRAGMENT */ )) : (0, _vue.createCommentVNode)("v-if", true),
        (0, _vue.createCommentVNode)(" Save Confirmation Modal "),
        (0, _vue.createVNode)(_component_modal_dialog, {
            visible: $setup.isSaveModalVisible,
            title: "Confirm Save",
            message: "Are you sure you want to save these rankings?",
            onCancel: $setup.hideSaveConfirmModal,
            onConfirm: $setup.saveAndExit
        }, null, 8 /* PROPS */ , [
            "visible",
            "onCancel",
            "onConfirm"
        ]),
        (0, _vue.createCommentVNode)(" Sidebar "),
        (0, _vue.createVNode)(_component_sidebar_panel, {
            visible: $setup.isSidebarVisible,
            "current-tab-id": $setup.currentSidebarTabId,
            "current-view": $setup.currentSidebarView,
            "saved-data": $setup.savedData,
            onClose: $setup.closeSidebar,
            onSwitchTab: $setup.switchSidebarTab,
            onSaveReview: $setup.saveReview
        }, null, 8 /* PROPS */ , [
            "visible",
            "current-tab-id",
            "current-view",
            "saved-data",
            "onClose",
            "onSwitchTab",
            "onSaveReview"
        ]),
        (0, _vue.createCommentVNode)(" Left Sidebar Navigation "),
        (0, _vue.createVNode)(_component_left_sidebar, {
            visible: $setup.isLeftSidebarVisible,
            onClose: $setup.closeLeftSidebar,
            onNavigate: $setup.navigateToView
        }, null, 8 /* PROPS */ , [
            "visible",
            "onClose",
            "onNavigate"
        ])
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('d2b101-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1asbb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lW6qc":[function() {},{}],"jP3Ou":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueRouter = require("vue-router");
// Define routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>require("1c3b7170d785adbe")
    },
    {
        path: '/profile',
        name: 'profile',
        component: ()=>require("95a0d9c2c7164b87"),
        meta: {
            title: 'User Profile'
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: ()=>require("564734eed233f006"),
        meta: {
            title: 'Application Settings'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: ()=>require("35fb32102366b40a"),
        meta: {
            title: 'About Music Besties'
        }
    },
    {
        path: '/terms',
        name: 'terms',
        component: ()=>require("814762e08d54b50c"),
        meta: {
            title: 'Terms & Privacy'
        }
    }
];
// Create router instance
const router = (0, _vueRouter.createRouter)({
    history: (0, _vueRouter.createWebHashHistory)(),
    routes
});
// Update document title based on route meta
router.afterEach((to)=>{
    document.title = to.meta.title ? `${to.meta.title} | Music Besties` : 'Music Besties';
});
exports.default = router;

},{"vue-router":"hZZ91","1c3b7170d785adbe":"N15MV","95a0d9c2c7164b87":"bt9Sm","564734eed233f006":"ltZ0r","35fb32102366b40a":"ip6b1","814762e08d54b50c":"iEhQv","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"N15MV":[function(require,module,exports,__globalThis) {
module.exports = Promise.resolve(module.bundle.root("6xZ9X"));

},{"6xZ9X":"6xZ9X"}],"bt9Sm":[function(require,module,exports,__globalThis) {
module.exports = import("./ProfileView.86d2d1f9.js").then(()=>module.bundle.root('j7IuZ'));

},{"j7IuZ":"j7IuZ"}],"ltZ0r":[function(require,module,exports,__globalThis) {
module.exports = import("./SettingsView.021185e1.js").then(()=>module.bundle.root('hMJHF'));

},{"hMJHF":"hMJHF"}],"ip6b1":[function(require,module,exports,__globalThis) {
module.exports = import("./AboutView.84987c96.js").then(()=>module.bundle.root('l8Hpn'));

},{"l8Hpn":"l8Hpn"}],"iEhQv":[function(require,module,exports,__globalThis) {
module.exports = import("./TermsPrivacyView.50160c71.js").then(()=>module.bundle.root('5VQik'));

},{"5VQik":"5VQik"}]},["iUuJv","fILKw"], "fILKw", "parcelRequireb26a", {})

//# sourceMappingURL=music-besties-skeleton.1fcc916e.js.map
