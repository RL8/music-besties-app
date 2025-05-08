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
})({"dt7ck":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 54961;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "074e9d0550160c71";
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

},{}],"5VQik":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("1f7f7816c2c282f");
    if (script.__esModule) script = script.default;
    script.render = require("22658cc33cb02091").render;
    require("84dbb9cdc4cff15").default(script);
    script.__scopeId = 'data-v-2cbf48';
    script.__file = "C:\\Users\\Bravo\\CascadeProjects\\music-besties-skeleton\\src\\views\\TermsPrivacyView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = '2cbf48-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('2cbf48-hmr', script)) __VUE_HMR_RUNTIME__.reload('2cbf48-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"1f7f7816c2c282f":"isHI9","22658cc33cb02091":"9IoVk","84dbb9cdc4cff15":"blvQc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"isHI9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
exports.default = {
    name: 'TermsPrivacyView',
    setup () {
        // Active tab state (terms, privacy, cookies)
        const activeTab = (0, _vue.ref)('terms');
        return {
            activeTab
        };
    }
};

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9IoVk":[function(require,module,exports,__globalThis) {
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
    class: "flex border-b border-gray-200 mb-6"
};
const _hoisted_4 = {
    key: 0,
    class: "bg-white rounded-lg shadow p-4 mb-6"
};
const _hoisted_5 = {
    key: 1,
    class: "bg-white rounded-lg shadow p-4 mb-6"
};
const _hoisted_6 = {
    key: 2,
    class: "bg-white rounded-lg shadow p-4 mb-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createElementVNode)("div", _hoisted_2, [
            _cache[4] || (_cache[4] = (0, _vue.createElementVNode)("h1", {
                class: "text-2xl font-bold text-gray-800"
            }, "Terms & Privacy", -1 /* HOISTED */ )),
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[0] || (_cache[0] = ($event)=>_ctx.$router.push('/')),
                class: "text-blue-500 font-medium"
            }, " Back to Home ")
        ]),
        (0, _vue.createCommentVNode)(" Navigation Tabs "),
        (0, _vue.createElementVNode)("div", _hoisted_3, [
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[1] || (_cache[1] = ($event)=>$setup.activeTab = 'terms'),
                class: (0, _vue.normalizeClass)([
                    "py-2 px-4 font-medium text-sm transition-colors",
                    $setup.activeTab === 'terms' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'
                ])
            }, " Terms of Service ", 2 /* CLASS */ ),
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[2] || (_cache[2] = ($event)=>$setup.activeTab = 'privacy'),
                class: (0, _vue.normalizeClass)([
                    "py-2 px-4 font-medium text-sm transition-colors",
                    $setup.activeTab === 'privacy' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'
                ])
            }, " Privacy Policy ", 2 /* CLASS */ ),
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[3] || (_cache[3] = ($event)=>$setup.activeTab = 'cookies'),
                class: (0, _vue.normalizeClass)([
                    "py-2 px-4 font-medium text-sm transition-colors",
                    $setup.activeTab === 'cookies' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'
                ])
            }, " Cookie Policy ", 2 /* CLASS */ )
        ]),
        (0, _vue.createCommentVNode)(" Terms of Service Content "),
        $setup.activeTab === 'terms' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_4, _cache[5] || (_cache[5] = [
            (0, _vue.createStaticVNode)("<div class=\"mb-6\"><h2 class=\"text-lg font-semibold text-gray-700 mb-2\">Terms of Service</h2><p class=\"text-xs text-gray-500 mb-4\">Last updated: May 6, 2025</p><div class=\"prose prose-sm max-w-none text-gray-600\"><p> Welcome to Music Besties. By accessing or using our service, you agree to be bound by these Terms of Service. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">1. Acceptance of Terms</h3><p> By accessing or using the Music Besties application (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, you may not access the Service. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">2. Description of Service</h3><p> Music Besties is a web application that allows users to rank and review music. The Service may include features for creating, saving, and sharing music rankings and reviews. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">3. User Accounts</h3><p> When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">4. Intellectual Property</h3><p> The Service and its original content, features, and functionality are and will remain the exclusive property of Music Besties and its licensors. The Service is protected by copyright, trademark, and other laws. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">5. User Content</h3><p> Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material (&quot;Content&quot;). You are responsible for the Content that you post on or through the Service. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">6. Termination</h3><p> We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">7. Limitation of Liability</h3><p> In no event shall Music Besties, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">8. Changes to Terms</h3><p> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days&#39; notice prior to any new terms taking effect. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">9. Contact Us</h3><p> If you have any questions about these Terms, please contact us at terms@musicbesties.example.com. </p></div></div>", 1)
        ]))) : (0, _vue.createCommentVNode)("v-if", true),
        (0, _vue.createCommentVNode)(" Privacy Policy Content "),
        $setup.activeTab === 'privacy' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_5, _cache[6] || (_cache[6] = [
            (0, _vue.createStaticVNode)("<div class=\"mb-6\"><h2 class=\"text-lg font-semibold text-gray-700 mb-2\">Privacy Policy</h2><p class=\"text-xs text-gray-500 mb-4\">Last updated: May 6, 2025</p><div class=\"prose prose-sm max-w-none text-gray-600\"><p> Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">1. Information We Collect</h3><p> We collect information that you provide directly to us, such as when you create an account, update your profile, use interactive features, participate in contests, surveys, or other promotions, or communicate with us. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">2. How We Use Your Information</h3><p> We may use information about you for various purposes, including to: </p><ul class=\"list-disc pl-5 my-2\"><li>Provide, maintain, and improve our Service</li><li>Provide and deliver the products and services you request</li><li>Send you technical notices, updates, security alerts, and support messages</li><li>Respond to your comments, questions, and requests</li><li>Communicate with you about products, services, offers, promotions, and events</li><li>Monitor and analyze trends, usage, and activities in connection with our Service</li></ul><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">3. Sharing of Information</h3><p> We may share information about you as follows: </p><ul class=\"list-disc pl-5 my-2\"><li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li><li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li><li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Music Besties or others</li></ul><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">4. Data Storage</h3><p> We primarily store your information locally on your device using browser local storage. This means your data remains on your device and is not transmitted to our servers unless you explicitly choose to share it. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">5. Your Choices</h3><p> You can access and update certain information about you from within the Service. You can also request that we delete your account and associated data at any time by contacting us. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">6. Changes to this Policy</h3><p> We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">7. Contact Us</h3><p> If you have any questions about this Privacy Policy, please contact us at privacy@musicbesties.example.com. </p></div></div>", 1)
        ]))) : (0, _vue.createCommentVNode)("v-if", true),
        (0, _vue.createCommentVNode)(" Cookie Policy Content "),
        $setup.activeTab === 'cookies' ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_6, _cache[7] || (_cache[7] = [
            (0, _vue.createStaticVNode)("<div class=\"mb-6\"><h2 class=\"text-lg font-semibold text-gray-700 mb-2\">Cookie Policy</h2><p class=\"text-xs text-gray-500 mb-4\">Last updated: May 6, 2025</p><div class=\"prose prose-sm max-w-none text-gray-600\"><p> This Cookie Policy explains how Music Besties uses cookies and similar technologies to recognize you when you visit our website. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">1. What are cookies?</h3><p> Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">2. How we use cookies</h3><p> We use cookies for the following purposes: </p><ul class=\"list-disc pl-5 my-2\"><li>To enable certain functions of the Service</li><li>To provide analytics</li><li>To store your preferences</li><li>To enable advertisements delivery, including behavioral advertising</li></ul><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">3. Types of cookies we use</h3><p> We use both session and persistent cookies on the Service and we use different types of cookies to run the Service: </p><ul class=\"list-disc pl-5 my-2\"><li><strong>Essential cookies.</strong> These cookies are required for the operation of our website and enable you to use its features.</li><li><strong>Analytical/performance cookies.</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li><li><strong>Functionality cookies.</strong> These are used to recognize you when you return to our website.</li><li><strong>Targeting cookies.</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed.</li></ul><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">4. How to control cookies</h3><p> You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work. </p><h3 class=\"text-base font-medium text-gray-700 mt-4 mb-2\">5. Contact Us</h3><p> If you have any questions about our use of cookies, please contact us at cookies@musicbesties.example.com. </p></div></div>", 1)
        ]))) : (0, _vue.createCommentVNode)("v-if", true),
        _cache[8] || (_cache[8] = (0, _vue.createElementVNode)("p", {
            class: "text-xs text-gray-400 mt-8 text-center px-4 pb-4"
        }, " This app is unofficial and not affiliated with any music artists or rights management companies. ", -1 /* HOISTED */ ))
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('2cbf48-hmr', render);
});

},{"vue":"1pgRQ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"blvQc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["dt7ck"], null, "parcelRequireb26a", {})

//# sourceMappingURL=TermsPrivacyView.50160c71.js.map
