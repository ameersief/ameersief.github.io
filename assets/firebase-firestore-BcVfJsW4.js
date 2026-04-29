import{L as Wi,I as Pe,_ as Hi,g as te,F as Yi,a as le,b as Ji,c as Xi,d as Zi,i as ws,p as eo,e as to,f as no,h as ro,j as so,M as io,k as oo,E as ao,X as uo,l as co,m as dn,W as It,n as lo,S as Ar,o as ho,C as fo,r as wr,q as mo}from"./firebase-core-kffZKNeW.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}j.UNAUTHENTICATED=new j(null),j.GOOGLE_CREDENTIALS=new j("google-credentials-uid"),j.FIRST_PARTY=new j("first-party-uid"),j.MOCK_USER=new j("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke="12.12.0";function _o(r){Ke=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new Wi("@firebase/firestore");function Oe(){return Ce.logLevel}function g(r,...e){if(Ce.logLevel<=le.DEBUG){const t=e.map(xn);Ce.debug(`Firestore (${Ke}): ${r}`,...t)}}function de(r,...e){if(Ce.logLevel<=le.ERROR){const t=e.map(xn);Ce.error(`Firestore (${Ke}): ${r}`,...t)}}function be(r,...e){if(Ce.logLevel<=le.WARN){const t=e.map(xn);Ce.warn(`Firestore (${Ke}): ${r}`,...t)}}function xn(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,vs(r,n,t)}function vs(r,e,t){let n=`FIRESTORE (${Ke}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw de(n),new Error(n)}function S(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||vs(e,s,n)}function A(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Yi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class po{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(j.UNAUTHENTICATED)))}shutdown(){}}class go{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class yo{constructor(e){this.t=e,this.currentUser=j.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){S(this.o===void 0,42304);let n=this.i;const s=u=>this.i!==n?(n=this.i,t(u)):Promise.resolve();let i=new he;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new he,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},a=u=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new he)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(S(typeof n.accessToken=="string",31837,{l:n}),new Rs(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return S(e===null||typeof e=="string",2055,{h:e}),new j(e)}}class Eo{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=j.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class To{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Eo(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(j.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Io{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Hi(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){S(this.o===void 0,3512);const n=i=>{i.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vr(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(S(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new vr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Ao(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function R(r,e){return r<e?-1:r>e?1:0}function En(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return fn(s)===fn(i)?R(s,i):fn(s)?1:-1}return R(r.length,e.length)}const wo=55296,vo=57343;function fn(r){const e=r.charCodeAt(0);return e>=wo&&e<=vo}function Be(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="__name__";class se{constructor(e,t,n){t===void 0?t=0:t>e.length&&E(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&E(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return se.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof se?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=se.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return R(e.length,t.length)}static compareSegments(e,t){const n=se.isNumericId(e),s=se.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?se.extractNumericId(e).compare(se.extractNumericId(t)):En(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Pe.fromString(e.substring(4,e.length-2))}}class C extends se{construct(e,t,n){return new C(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new p(f.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new C(t)}static emptyPath(){return new C([])}}const Ro=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $ extends se{construct(e,t,n){return new $(e,t,n)}static isValidIdentifier(e){return Ro.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rr}static keyField(){return new $([Rr])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new p(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new p(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new p(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $(t)}static emptyPath(){return new $([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.path=e}static fromPath(e){return new y(C.fromString(e))}static fromName(e){return new y(C.fromString(e).popFirst(5))}static empty(){return new y(C.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&C.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return C.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new y(new C(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(r,e,t){if(!t)throw new p(f.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Vo(r,e,t,n){if(e===!0&&n===!0)throw new p(f.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Vr(r){if(!y.isDocumentKey(r))throw new p(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Pr(r){if(y.isDocumentKey(r))throw new p(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ps(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function zt(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":E(12329,{type:typeof r})}function z(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new p(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zt(r);throw new p(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Po(r,e){if(e<=0)throw new p(f.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,e){const t={typeString:r};return e&&(t.value=e),t}function _t(r,e){if(!Ps(r))throw new p(f.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new p(f.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=-62135596800,Cr=1e6;class b{static now(){return b.fromMillis(Date.now())}static fromDate(e){return b.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Cr);return new b(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sr)throw new p(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cr}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:b._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_t(e,b._jsonSchema))return new b(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sr;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}b._jsonSchemaVersion="firestore/timestamp/1.0",b._jsonSchema={type:M("string",b._jsonSchemaVersion),seconds:M("number"),nanoseconds:M("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static fromTimestamp(e){return new I(e)}static min(){return new I(new b(0,0))}static max(){return new I(new b(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=-1;function So(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=I.fromTimestamp(n===1e9?new b(t+1,0):new b(t,n));return new ge(s,y.empty(),e)}function Co(r){return new ge(r.readTime,r.key,at)}class ge{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ge(I.min(),y.empty(),at)}static max(){return new ge(I.max(),y.empty(),at)}}function bo(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=y.comparator(r.documentKey,e.documentKey),t!==0?t:R(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Do{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(r){if(r.code!==f.FAILED_PRECONDITION||r.message!==No)throw r;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new m(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof m?t:m.resolve(t)}catch(t){return m.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):m.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):m.reject(t)}static resolve(e){return new m(((t,n)=>{t(e)}))}static reject(e){return new m(((t,n)=>{n(e)}))}static waitFor(e){return new m(((t,n)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(u=>n(u)))})),o=!0,i===s&&t()}))}static or(e){let t=m.resolve(!1);for(const n of e)t=t.next((s=>s?m.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new m(((n,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next((l=>{o[c]=l,++a,a===i&&n(o)}),(l=>s(l)))}}))}static doWhile(e,t){return new m(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}function ko(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function He(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Gt.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=-1;function Qt(r){return r==null}function Nt(r){return r===0&&1/r==-1/0}function xo(r){return typeof r=="number"&&Number.isInteger(r)&&!Nt(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="";function Oo(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=br(e)),e=Lo(r.get(t),e);return br(e)}function Lo(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case Ss:t+="";break;default:t+=i}}return t}function br(r){return r+Ss+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function we(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Cs(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.comparator=e,this.root=t||B.EMPTY}insert(e,t){return new N(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,B.BLACK,null,null))}remove(e){return new N(this.comparator,this.root.remove(e,this.comparator).copy(null,null,B.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new At(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new At(this.root,e,this.comparator,!1)}getReverseIterator(){return new At(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new At(this.root,e,this.comparator,!0)}}class At{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class B{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??B.RED,this.left=s??B.EMPTY,this.right=i??B.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new B(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return B.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return B.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw E(43730,{key:this.key,value:this.value});if(this.right.isRed())throw E(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw E(27949);return e+(this.isRed()?0:1)}}B.EMPTY=null,B.RED=!0,B.BLACK=!1;B.EMPTY=new class{constructor(){this.size=0}get key(){throw E(57766)}get value(){throw E(16141)}get color(){throw E(16727)}get left(){throw E(29726)}get right(){throw E(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new B(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.comparator=e,this.data=new N(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Dr(this.data.getIterator())}getIteratorFrom(e){return new Dr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof U)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new U(this.comparator);return t.data=e,t}}class Dr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.fields=e,e.sort($.comparator)}static empty(){return new X([])}unionWith(e){let t=new U($.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new X(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Be(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bs("Invalid base64 string: "+i):i}})(e);return new G(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new G(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}G.EMPTY_BYTE_STRING=new G("");const Mo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ye(r){if(S(!!r,39018),typeof r=="string"){let e=0;const t=Mo.exec(r);if(S(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:k(r.seconds),nanos:k(r.nanos)}}function k(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ee(r){return typeof r=="string"?G.fromBase64String(r):G.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="server_timestamp",Ds="__type__",ks="__previous_value__",xs="__local_write_time__";function Mn(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Ds])==null?void 0:n.stringValue)===Ns}function jt(r){const e=r.mapValue.fields[ks];return Mn(e)?jt(e):e}function ut(r){const e=ye(r.mapValue.fields[xs].timestampValue);return new b(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t,n,s,i,o,a,u,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=l,this.apiKey=h}}const Dt="(default)";class ct{constructor(e,t){this.projectId=e,this.database=t||Dt}static empty(){return new ct("","")}get isDefaultDatabase(){return this.database===Dt}isEqual(e){return e instanceof ct&&e.projectId===this.projectId&&e.database===this.database}}function Uo(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new p(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ct(r.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="__type__",qo="__max__",wt={mapValue:{}},Ls="__vector__",kt="value";function Te(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Mn(r)?4:$o(r)?9007199254740991:Bo(r)?10:11:E(28295,{value:r})}function ue(r,e){if(r===e)return!0;const t=Te(r);if(t!==Te(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ut(r).isEqual(ut(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ye(s.timestampValue),a=ye(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,i){return Ee(s.bytesValue).isEqual(Ee(i.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,i){return k(s.geoPointValue.latitude)===k(i.geoPointValue.latitude)&&k(s.geoPointValue.longitude)===k(i.geoPointValue.longitude)})(r,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return k(s.integerValue)===k(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=k(s.doubleValue),a=k(i.doubleValue);return o===a?Nt(o)===Nt(a):isNaN(o)&&isNaN(a)}return!1})(r,e);case 9:return Be(r.arrayValue.values||[],e.arrayValue.values||[],ue);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Nr(o)!==Nr(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ue(o[u],a[u])))return!1;return!0})(r,e);default:return E(52216,{left:r})}}function lt(r,e){return(r.values||[]).find((t=>ue(t,e)))!==void 0}function $e(r,e){if(r===e)return 0;const t=Te(r),n=Te(e);if(t!==n)return R(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return R(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=k(i.integerValue||i.doubleValue),u=k(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1})(r,e);case 3:return kr(r.timestampValue,e.timestampValue);case 4:return kr(ut(r),ut(e));case 5:return En(r.stringValue,e.stringValue);case 6:return(function(i,o){const a=Ee(i),u=Ee(o);return a.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=R(a[c],u[c]);if(l!==0)return l}return R(a.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=R(k(i.latitude),k(o.latitude));return a!==0?a:R(k(i.longitude),k(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return xr(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var d,_,T,v;const a=i.fields||{},u=o.fields||{},c=(d=a[kt])==null?void 0:d.arrayValue,l=(_=u[kt])==null?void 0:_.arrayValue,h=R(((T=c==null?void 0:c.values)==null?void 0:T.length)||0,((v=l==null?void 0:l.values)==null?void 0:v.length)||0);return h!==0?h:xr(c,l)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===wt.mapValue&&o===wt.mapValue)return 0;if(i===wt.mapValue)return 1;if(o===wt.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const d=En(u[h],l[h]);if(d!==0)return d;const _=$e(a[u[h]],c[l[h]]);if(_!==0)return _}return R(u.length,l.length)})(r.mapValue,e.mapValue);default:throw E(23264,{he:t})}}function kr(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return R(r,e);const t=ye(r),n=ye(e),s=R(t.seconds,n.seconds);return s!==0?s:R(t.nanos,n.nanos)}function xr(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=$e(t[s],n[s]);if(i)return i}return R(t.length,n.length)}function ze(r){return Tn(r)}function Tn(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=ye(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ee(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return y.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=Tn(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${Tn(t.fields[o])}`;return s+"}"})(r.mapValue):E(61005,{value:r})}function Vt(r){switch(Te(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jt(r);return e?16+Vt(e):16;case 5:return 2*r.stringValue.length;case 6:return Ee(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Vt(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return we(n.fields,((i,o)=>{s+=i.length+Vt(o)})),s})(r.mapValue);default:throw E(13486,{value:r})}}function Or(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function In(r){return!!r&&"integerValue"in r}function Fn(r){return!!r&&"arrayValue"in r}function Lr(r){return!!r&&"nullValue"in r}function Mr(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Pt(r){return!!r&&"mapValue"in r}function Bo(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Os])==null?void 0:n.stringValue)===Ls}function rt(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return we(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=rt(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rt(r.arrayValue.values[t]);return e}return{...r}}function $o(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===qo}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.value=e}static empty(){return new H({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Pt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rt(t)}setAll(e){let t=$.emptyPath(),n={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=rt(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());Pt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ue(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Pt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){we(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new H(rt(this.value))}}function Ms(r){const e=[];return we(r.fields,((t,n)=>{const s=new $([t]);if(Pt(n)){const i=Ms(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new X(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t,n,s,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new K(e,0,I.min(),I.min(),I.min(),H.empty(),0)}static newFoundDocument(e,t,n,s){return new K(e,1,t,I.min(),n,s,0)}static newNoDocument(e,t){return new K(e,2,t,I.min(),I.min(),H.empty(),0)}static newUnknownDocument(e,t){return new K(e,3,t,I.min(),I.min(),H.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=H.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=H.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof K&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new K(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){this.position=e,this.inclusive=t}}function Fr(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=y.comparator(y.fromName(o.referenceValue),t.key):n=$e(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ur(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ue(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t="asc"){this.field=e,this.dir=t}}function zo(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{}class L extends Fs{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Qo(e,t,n):t==="array-contains"?new Wo(e,n):t==="in"?new Ho(e,n):t==="not-in"?new Yo(e,n):t==="array-contains-any"?new Jo(e,n):new L(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new jo(e,n):new Ko(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison($e(t,this.value)):t!==null&&Te(this.value)===Te(t)&&this.matchesComparison($e(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends Fs{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ne(e,t)}matches(e){return Us(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Us(r){return r.op==="and"}function qs(r){return Go(r)&&Us(r)}function Go(r){for(const e of r.filters)if(e instanceof ne)return!1;return!0}function An(r){if(r instanceof L)return r.field.canonicalString()+r.op.toString()+ze(r.value);if(qs(r))return r.filters.map((e=>An(e))).join(",");{const e=r.filters.map((t=>An(t))).join(",");return`${r.op}(${e})`}}function Bs(r,e){return r instanceof L?(function(n,s){return s instanceof L&&n.op===s.op&&n.field.isEqual(s.field)&&ue(n.value,s.value)})(r,e):r instanceof ne?(function(n,s){return s instanceof ne&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,a)=>i&&Bs(o,s.filters[a])),!0):!1})(r,e):void E(19439)}function $s(r){return r instanceof L?(function(t){return`${t.field.canonicalString()} ${t.op} ${ze(t.value)}`})(r):r instanceof ne?(function(t){return t.op.toString()+" {"+t.getFilters().map($s).join(" ,")+"}"})(r):"Filter"}class Qo extends L{constructor(e,t,n){super(e,t,n),this.key=y.fromName(n.referenceValue)}matches(e){const t=y.comparator(e.key,this.key);return this.matchesComparison(t)}}class jo extends L{constructor(e,t){super(e,"in",t),this.keys=zs("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ko extends L{constructor(e,t){super(e,"not-in",t),this.keys=zs("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zs(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>y.fromName(n.referenceValue)))}class Wo extends L{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fn(t)&&lt(t.arrayValue,this.value)}}class Ho extends L{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&lt(this.value.arrayValue,t)}}class Yo extends L{constructor(e,t){super(e,"not-in",t)}matches(e){if(lt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!lt(this.value.arrayValue,t)}}class Jo extends L{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fn(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>lt(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function qr(r,e=null,t=[],n=[],s=null,i=null,o=null){return new Xo(r,e,t,n,s,i,o)}function Un(r){const e=A(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>An(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Qt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>ze(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>ze(n))).join(",")),e.Te=t}return e.Te}function qn(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!zo(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Bs(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ur(r.startAt,e.startAt)&&Ur(r.endAt,e.endAt)}function wn(r){return y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Zo(r,e,t,n,s,i,o,a){return new Ye(r,e,t,n,s,i,o,a)}function Kt(r){return new Ye(r)}function Br(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ea(r){return y.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Gs(r){return r.collectionGroup!==null}function st(r){const e=A(r);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new U($.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new ht(i,n))})),t.has($.keyField().canonicalString())||e.Ee.push(new ht($.keyField(),n))}return e.Ee}function ie(r){const e=A(r);return e.Ie||(e.Ie=ta(e,st(r))),e.Ie}function ta(r,e){if(r.limitType==="F")return qr(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ht(s.field,i)}));const t=r.endAt?new xt(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new xt(r.startAt.position,r.startAt.inclusive):null;return qr(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function vn(r,e){const t=r.filters.concat([e]);return new Ye(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function na(r,e){const t=r.explicitOrderBy.concat([e]);return new Ye(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function Ot(r,e,t){return new Ye(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Wt(r,e){return qn(ie(r),ie(e))&&r.limitType===e.limitType}function Qs(r){return`${Un(ie(r))}|lt:${r.limitType}`}function Le(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>$s(s))).join(", ")}]`),Qt(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>ze(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>ze(s))).join(",")),`Target(${n})`})(ie(r))}; limitType=${r.limitType})`}function Ht(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of st(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,a,u){const c=Fr(o,a,u);return o.inclusive?c<=0:c<0})(n.startAt,st(n),s)||n.endAt&&!(function(o,a,u){const c=Fr(o,a,u);return o.inclusive?c>=0:c>0})(n.endAt,st(n),s))})(r,e)}function ra(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function js(r){return(e,t)=>{let n=!1;for(const s of st(r)){const i=sa(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function sa(r,e,t){const n=r.field.isKeyField()?y.comparator(e.key,t.key):(function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?$e(u,c):E(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return E(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){we(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return Cs(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new N(y.comparator);function fe(){return ia}const Ks=new N(y.comparator);function et(...r){let e=Ks;for(const t of r)e=e.insert(t.key,t);return e}function Ws(r){let e=Ks;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ve(){return it()}function Hs(){return it()}function it(){return new De((r=>r.toString()),((r,e)=>r.isEqual(e)))}const oa=new N(y.comparator),aa=new U(y.comparator);function V(...r){let e=aa;for(const t of r)e=e.add(t);return e}const ua=new U(R);function ca(){return ua}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nt(e)?"-0":e}}function Ys(r){return{integerValue:""+r}}function la(r,e){return xo(e)?Ys(e):Bn(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this._=void 0}}function ha(r,e,t){return r instanceof dt?(function(s,i){const o={fields:{[Ds]:{stringValue:Ns},[xs]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mn(i)&&(i=jt(i)),i&&(o.fields[ks]=i),{mapValue:o}})(t,e):r instanceof ft?Xs(r,e):r instanceof mt?Zs(r,e):(function(s,i){const o=Js(s,i),a=$r(o)+$r(s.Ae);return In(o)&&In(s.Ae)?Ys(a):Bn(s.serializer,a)})(r,e)}function da(r,e,t){return r instanceof ft?Xs(r,e):r instanceof mt?Zs(r,e):t}function Js(r,e){return r instanceof Lt?(function(n){return In(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(e)?e:{integerValue:0}:null}class dt extends Yt{}class ft extends Yt{constructor(e){super(),this.elements=e}}function Xs(r,e){const t=ei(e);for(const n of r.elements)t.some((s=>ue(s,n)))||t.push(n);return{arrayValue:{values:t}}}class mt extends Yt{constructor(e){super(),this.elements=e}}function Zs(r,e){let t=ei(e);for(const n of r.elements)t=t.filter((s=>!ue(s,n)));return{arrayValue:{values:t}}}class Lt extends Yt{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $r(r){return k(r.integerValue||r.doubleValue)}function ei(r){return Fn(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.field=e,this.transform=t}}function ma(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof ft&&s instanceof ft||n instanceof mt&&s instanceof mt?Be(n.elements,s.elements,ue):n instanceof Lt&&s instanceof Lt?ue(n.Ae,s.Ae):n instanceof dt&&s instanceof dt})(r.transform,e.transform)}class _a{constructor(e,t){this.version=e,this.transformResults=t}}class Y{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Y}static exists(e){return new Y(void 0,e)}static updateTime(e){return new Y(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function St(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Jt{}function ti(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Xt(r.key,Y.none()):new pt(r.key,r.data,Y.none());{const t=r.data,n=H.empty();let s=new U($.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new ve(r.key,n,new X(s.toArray()),Y.none())}}function pa(r,e,t){r instanceof pt?(function(s,i,o){const a=s.value.clone(),u=Gr(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(r,e,t):r instanceof ve?(function(s,i,o){if(!St(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Gr(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ni(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ot(r,e,t,n){return r instanceof pt?(function(i,o,a,u){if(!St(i.precondition,o))return a;const c=i.value.clone(),l=Qr(i.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null})(r,e,t,n):r instanceof ve?(function(i,o,a,u){if(!St(i.precondition,o))return a;const c=Qr(i.fieldTransforms,u,o),l=o.data;return l.setAll(ni(i)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((h=>h.field)))})(r,e,t,n):(function(i,o,a){return St(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(r,e,t)}function ga(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=Js(n.transform,s||null);i!=null&&(t===null&&(t=H.empty()),t.set(n.field,i))}return t||null}function zr(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Be(n,s,((i,o)=>ma(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class pt extends Jt{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ve extends Jt{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ni(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function Gr(r,e,t){const n=new Map;S(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,da(o,a,t[s]))}return n}function Qr(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,ha(i,o,e))}return n}class Xt extends Jt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ya extends Jt{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&pa(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=ot(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=ot(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Hs();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=ti(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(I.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),V())}isEqual(e){return this.batchId===e.batchId&&Be(this.mutations,e.mutations,((t,n)=>zr(t,n)))&&Be(this.baseMutations,e.baseMutations,((t,n)=>zr(t,n)))}}class $n{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){S(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=(function(){return oa})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new $n(e,t,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,P;function Aa(r){switch(r){case f.OK:return E(64938);case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0;default:return E(15467,{code:r})}}function ri(r){if(r===void 0)return de("GRPC error has no .code"),f.UNKNOWN;switch(r){case O.OK:return f.OK;case O.CANCELLED:return f.CANCELLED;case O.UNKNOWN:return f.UNKNOWN;case O.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case O.INTERNAL:return f.INTERNAL;case O.UNAVAILABLE:return f.UNAVAILABLE;case O.UNAUTHENTICATED:return f.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case O.NOT_FOUND:return f.NOT_FOUND;case O.ALREADY_EXISTS:return f.ALREADY_EXISTS;case O.PERMISSION_DENIED:return f.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case O.ABORTED:return f.ABORTED;case O.OUT_OF_RANGE:return f.OUT_OF_RANGE;case O.UNIMPLEMENTED:return f.UNIMPLEMENTED;case O.DATA_LOSS:return f.DATA_LOSS;default:return E(39323,{code:r})}}(P=O||(O={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Pe([4294967295,4294967295],0);function jr(r){const e=wa().encode(r),t=new io;return t.update(e),new Uint8Array(t.digest())}function Kr(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Pe([t,n],0),new Pe([s,i],0)]}class zn{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tt(`Invalid padding: ${t}`);if(n<0)throw new tt(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new tt(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new tt(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Pe.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(Pe.fromNumber(n)));return s.compare(va)===1&&(s=new Pe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=jr(e),[n,s]=Kr(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zn(i,s,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const t=jr(e),[n,s]=Kr(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class tt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,gt.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Zt(I.min(),s,new N(R),fe(),V())}}class gt{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new gt(n,t,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,n,s){this.be=e,this.removedTargetIds=t,this.key=n,this.De=s}}class si{constructor(e,t){this.targetId=e,this.Ce=t}}class ii{constructor(e,t,n=G.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Wr{constructor(){this.ve=0,this.Fe=Hr(),this.Me=G.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=V(),t=V(),n=V();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:E(38017,{changeType:i})}})),new gt(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Hr()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,S(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ra{constructor(e){this.Ge=e,this.ze=new Map,this.je=fe(),this.Je=vt(),this.He=vt(),this.Ze=new N(R)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:E(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(wn(i))if(n===0){const o=new y(i.path);this.et(t,o,K.newNoDocument(o,I.min()))}else S(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const a=this.ut(e),u=a?this.ct(a,e,o):1;if(u!==0){this.it(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,c)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Ee(n).toUint8Array()}catch(u){if(u instanceof bs)return be("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new zn(o,s,i)}catch(u){return be(u instanceof tt?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.ge===0?null:a}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const a=this.ot(o);if(a){if(i.current&&wn(a.target)){const u=new y(a.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,K.newNoDocument(u,e))}i.Be&&(t.set(o,i.ke()),i.qe())}}));let n=V();this.He.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new Zt(e,t,this.Ze,this.je,n);return this.je=fe(),this.Je=vt(),this.He=vt(),this.Ze=new N(R),s}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.It(e,t)?s.Ke(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Wr,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new U(R),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new U(R),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||g("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wr),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function vt(){return new N(y.comparator)}function Hr(){return new N(y.comparator)}const Va={asc:"ASCENDING",desc:"DESCENDING"},Pa={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sa={and:"AND",or:"OR"};class Ca{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Rn(r,e){return r.useProto3Json||Qt(e)?e:{value:e}}function Mt(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oi(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function ba(r,e){return Mt(r,e.toTimestamp())}function oe(r){return S(!!r,49232),I.fromTimestamp((function(t){const n=ye(t);return new b(n.seconds,n.nanos)})(r))}function Gn(r,e){return Vn(r,e).canonicalString()}function Vn(r,e){const t=(function(s){return new C(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function ai(r){const e=C.fromString(r);return S(di(e),10190,{key:e.toString()}),e}function Pn(r,e){return Gn(r.databaseId,e.path)}function mn(r,e){const t=ai(e);if(t.get(1)!==r.databaseId.projectId)throw new p(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new p(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new y(ci(t))}function ui(r,e){return Gn(r.databaseId,e)}function Na(r){const e=ai(r);return e.length===4?C.emptyPath():ci(e)}function Sn(r){return new C(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ci(r){return S(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Yr(r,e,t){return{name:Pn(r,e),fields:t.value.mapValue.fields}}function Da(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:E(39313,{state:c})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(c,l){return c.useProto3Json?(S(l===void 0||typeof l=="string",58123),G.fromBase64String(l||"")):(S(l===void 0||l instanceof Buffer||l instanceof Uint8Array,16193),G.fromUint8Array(l||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(c){const l=c.code===void 0?f.UNKNOWN:ri(c.code);return new p(l,c.message||"")})(o);t=new ii(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=mn(r,n.document.name),i=oe(n.document.updateTime),o=n.document.createTime?oe(n.document.createTime):I.min(),a=new H({mapValue:{fields:n.document.fields}}),u=K.newFoundDocument(s,i,o,a),c=n.targetIds||[],l=n.removedTargetIds||[];t=new Ct(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=mn(r,n.document),i=n.readTime?oe(n.readTime):I.min(),o=K.newNoDocument(s,i),a=n.removedTargetIds||[];t=new Ct([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=mn(r,n.document),i=n.removedTargetIds||[];t=new Ct([],i,s,null)}else{if(!("filter"in e))return E(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Ia(s,i),a=n.targetId;t=new si(a,o)}}return t}function ka(r,e){let t;if(e instanceof pt)t={update:Yr(r,e.key,e.value)};else if(e instanceof Xt)t={delete:Pn(r,e.key)};else if(e instanceof ve)t={update:Yr(r,e.key,e.data),updateMask:$a(e.fieldMask)};else{if(!(e instanceof ya))return E(16599,{dt:e.type});t={verify:Pn(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof dt)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ft)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof mt)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lt)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw E(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ba(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:E(27497)})(r,e.precondition)),t}function xa(r,e){return r&&r.length>0?(S(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?oe(s.updateTime):oe(i);return o.isEqual(I.min())&&(o=oe(i)),new _a(o,s.transformResults||[])})(t,e)))):[]}function Oa(r,e){return{documents:[ui(r,e.path)]}}function La(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=ui(r,s);const i=(function(c){if(c.length!==0)return hi(ne.create(c,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(c){if(c.length!==0)return c.map((l=>(function(d){return{field:Me(d.field),direction:Ua(d.dir)}})(l)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Rn(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{ft:t,parent:s}}function Ma(r){let e=Na(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){S(n===1,65062);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=(function(h){const d=li(h);return d instanceof ne&&qs(d)?d.getFilters():[d]})(t.where));let o=[];t.orderBy&&(o=(function(h){return h.map((d=>(function(T){return new ht(Fe(T.field),(function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(T.direction))})(d)))})(t.orderBy));let a=null;t.limit&&(a=(function(h){let d;return d=typeof h=="object"?h.value:h,Qt(d)?null:d})(t.limit));let u=null;t.startAt&&(u=(function(h){const d=!!h.before,_=h.values||[];return new xt(_,d)})(t.startAt));let c=null;return t.endAt&&(c=(function(h){const d=!h.before,_=h.values||[];return new xt(_,d)})(t.endAt)),Zo(e,s,o,i,a,"F",u,c)}function Fa(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return E(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function li(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Fe(t.unaryFilter.field);return L.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Fe(t.unaryFilter.field);return L.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fe(t.unaryFilter.field);return L.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fe(t.unaryFilter.field);return L.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return E(61313);default:return E(60726)}})(r):r.fieldFilter!==void 0?(function(t){return L.create(Fe(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return E(58110);default:return E(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ne.create(t.compositeFilter.filters.map((n=>li(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return E(1026)}})(t.compositeFilter.op))})(r):E(30097,{filter:r})}function Ua(r){return Va[r]}function qa(r){return Pa[r]}function Ba(r){return Sa[r]}function Me(r){return{fieldPath:r.canonicalString()}}function Fe(r){return $.fromServerFormat(r.fieldPath)}function hi(r){return r instanceof L?(function(t){if(t.op==="=="){if(Mr(t.value))return{unaryFilter:{field:Me(t.field),op:"IS_NAN"}};if(Lr(t.value))return{unaryFilter:{field:Me(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Mr(t.value))return{unaryFilter:{field:Me(t.field),op:"IS_NOT_NAN"}};if(Lr(t.value))return{unaryFilter:{field:Me(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Me(t.field),op:qa(t.op),value:t.value}}})(r):r instanceof ne?(function(t){const n=t.getFilters().map((s=>hi(s)));return n.length===1?n[0]:{compositeFilter:{op:Ba(t.op),filters:n}}})(r):E(54877,{filter:r})}function $a(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function di(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function fi(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t,n,s,i=I.min(),o=I.min(),a=G.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new me(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new me(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.yt=e}}function Ga(r){const e=Ma({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ot(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.bn=new ja}addToCollectionParentIndex(e,t){return this.bn.add(t),m.resolve()}getCollectionParents(e,t){return m.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return m.resolve()}deleteFieldIndex(e,t){return m.resolve()}deleteAllFieldIndexes(e){return m.resolve()}createTargetIndexes(e,t){return m.resolve()}getDocumentsMatchingTarget(e,t){return m.resolve(null)}getIndexType(e,t){return m.resolve(0)}getFieldIndexes(e,t){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,t){return m.resolve(ge.min())}getMinOffsetFromCollectionGroup(e,t){return m.resolve(ge.min())}updateCollectionGroup(e,t,n){return m.resolve()}updateIndexEntries(e,t){return m.resolve()}}class ja{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new U(C.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new U(C.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mi=41943040;class W{static withCacheSize(e){return new W(e,W.DEFAULT_COLLECTION_PERCENTILE,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */W.DEFAULT_COLLECTION_PERCENTILE=10,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,W.DEFAULT=new W(mi,W.DEFAULT_COLLECTION_PERCENTILE,W.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),W.DISABLED=new W(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ge(0)}static ar(){return new Ge(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="LruGarbageCollector",Ka=1048576;function Zr([r,e],[t,n]){const s=R(r,t);return s===0?R(e,n):s}class Wa{constructor(e){this.Pr=e,this.buffer=new U(Zr),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Zr(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ha{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){g(Xr,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){He(t)?g(Xr,"Ignoring IndexedDB error during garbage collection: ",t):await We(t)}await this.Ar(3e5)}))}}class Ya{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return m.resolve(Gt.ce);const n=new Wa(t);return this.Vr.forEachTarget(e,(s=>n.Ir(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>n.Ir(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(g("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Jr)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jr):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,s,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((h=>(h>this.params.maximumSequenceNumbersToCollect?(g("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s)))).next((h=>(n=h,a=Date.now(),this.removeTargets(e,n,t)))).next((h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((h=>(c=Date.now(),Oe()<=le.DEBUG&&g("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h}))))}}function Ja(r,e){return new Ya(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.changes=new De((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,K.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?m.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&ot(n.mutation,s,X.empty(),b.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,V()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=V()){const s=Ve();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=et();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Ve();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,V())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,s){let i=fe();const o=it(),a=(function(){return it()})();return t.forEach(((u,c)=>{const l=n.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof ve)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),ot(l.mutation,c,l.mutation.getFieldMask(),b.now())):o.set(c.key,X.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((c,l)=>o.set(c,l))),t.forEach(((c,l)=>a.set(c,new Za(l,o.get(c)??null)))),a)))}recalculateAndSaveOverlays(e,t){const n=it();let s=new N(((o,a)=>o-a)),i=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((u=>{const c=t.get(u);if(c===null)return;let l=n.get(u)||X.empty();l=a.applyToLocalView(c,l),n.set(u,l);const h=(s.get(a.batchId)||V()).add(u);s=s.insert(a.batchId,h)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Hs();l.forEach((d=>{if(!i.has(d)){const _=ti(t.get(d),n.get(d));_!==null&&h.set(d,_),i=i.add(d)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return m.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return ea(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gs(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):m.resolve(Ve());let a=at,u=i;return o.next((c=>m.forEach(c,((l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next((d=>{u=u.insert(l,d)}))))).next((()=>this.populateOverlays(e,c,i))).next((()=>this.computeViews(e,u,c,V()))).next((l=>({batchId:a,changes:Ws(l)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new y(t)).next((n=>{let s=et();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=et();return this.indexManager.getCollectionParents(e,i).next((a=>m.forEach(a,(u=>{const c=(function(h,d){return new Ye(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next((l=>{l.forEach(((h,d)=>{o=o.insert(h,d)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>{i.forEach(((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,K.newInvalidDocument(l)))}));let a=et();return o.forEach(((u,c)=>{const l=i.get(u);l!==void 0&&ot(l.mutation,c,X.empty(),b.now()),Ht(t,c)&&(a=a.insert(u,c))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return m.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:oe(s.createTime)}})(t)),m.resolve()}getNamedQuery(e,t){return m.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:Ga(s.bundledQuery),readTime:oe(s.readTime)}})(t)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.overlays=new N(y.comparator),this.Lr=new Map}getOverlay(e,t){return m.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ve();return m.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.St(e,t,i)})),m.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(n)),m.resolve()}getOverlaysForCollection(e,t,n){const s=Ve(),i=t.length+1,o=new y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return m.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new N(((c,l)=>c-l));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let l=i.get(c.largestBatchId);l===null&&(l=Ve(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Ve(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((c,l)=>a.set(c,l))),!(a.size()>=s)););return m.resolve(a)}St(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ta(t,n));let i=this.Lr.get(t);i===void 0&&(i=V(),this.Lr.set(t,i)),this.Lr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this.sessionToken=G.EMPTY_BYTE_STRING}getSessionToken(e){return m.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,m.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.kr=new U(q.qr),this.Kr=new U(q.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new q(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new q(e,t))}Qr(e,t){e.forEach((n=>this.removeReference(n,t)))}Gr(e){const t=new y(new C([])),n=new q(t,e),s=new q(t,e+1),i=[];return this.Kr.forEachInRange([n,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new y(new C([])),n=new q(t,e),s=new q(t,e+1);let i=V();return this.Kr.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new q(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class q{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return y.comparator(e.key,t.key)||R(e.Jr,t.Jr)}static Ur(e,t){return R(e.Jr,t.Jr)||y.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new U(q.qr)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ea(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.Hr=this.Hr.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,t){return m.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?Ln:this.Yn-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new q(t,0),s=new q(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([n,s],(o=>{const a=this.Zr(o.Jr);i.push(a)})),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new U(R);return t.forEach((s=>{const i=new q(s,0),o=new q(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(a=>{n=n.add(a.Jr)}))})),m.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;y.isDocumentKey(i)||(i=i.child(""));const o=new q(new y(i),0);let a=new U(R);return this.Hr.forEachWhile((u=>{const c=u.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Jr)),!0)}),o),m.resolve(this.Yr(a))}Yr(e){const t=[];return e.forEach((n=>{const s=this.Zr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){S(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return m.forEach(t.mutations,(s=>{const i=new q(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=n}))}nr(e){}containsKey(e,t){const n=new q(t,0),s=this.Hr.firstAfterOrEqual(n);return m.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.ti=e,this.docs=(function(){return new N(y.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return m.resolve(n?n.document.mutableCopy():K.newInvalidDocument(t))}getEntries(e,t){let n=fe();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():K.newInvalidDocument(s))})),m.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=fe();const o=t.path,a=new y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||bo(Co(l),n)<=0||(s.has(l.key)||Ht(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(e,t,n,s){E(9500)}ni(e,t){return m.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new ou(this)}getSize(e){return m.resolve(this.size)}}class ou extends Xa{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(n)})),m.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.persistence=e,this.ri=new De((t=>Un(t)),qn),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.ii=0,this.si=new Qn,this.targetCount=0,this.oi=Ge._r()}forEachTarget(e,t){return this.ri.forEach(((n,s)=>t(s))),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),m.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ge(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,m.resolve()}updateTargetData(e,t){return this.lr(t),m.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.ri.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),m.waitFor(i).next((()=>s))}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return m.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),m.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),m.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),m.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return m.resolve(n)}containsKey(e,t){return m.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){this._i={},this.overlays={},this.ai=new Gt(0),this.ui=!1,this.ui=!0,this.ci=new ru,this.referenceDelegate=e(this),this.li=new au(this),this.indexManager=new Qa,this.remoteDocumentCache=(function(s){return new iu(s)})((n=>this.referenceDelegate.hi(n))),this.serializer=new za(t),this.Pi=new tu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new su(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);const s=new uu(this.ai.next());return this.referenceDelegate.Ti(),n(s).next((i=>this.referenceDelegate.Ei(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ii(e,t){return m.or(Object.values(this._i).map((n=>()=>n.containsKey(e,t))))}}class uu extends Do{constructor(e){super(),this.currentSequenceNumber=e}}class jn{constructor(e){this.persistence=e,this.Ri=new Qn,this.Ai=null}static Vi(e){return new jn(e)}get di(){if(this.Ai)return this.Ai;throw E(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),m.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),m.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),m.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.di,(n=>{const s=y.fromPath(n);return this.mi(e,s).next((i=>{i||t.removeEntry(s,I.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return m.or([()=>m.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Ft{constructor(e,t){this.persistence=e,this.fi=new De((n=>Oo(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Ja(this,t)}static Vi(e,t){return new Ft(e,t)}Ti(){}Ei(e){return m.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}pr(e){let t=0;return this.mr(e,(n=>{t++})).next((()=>t))}mr(e,t){return m.forEach(this.fi,((n,s)=>this.wr(e,n,s).next((i=>i?m.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((a=>{a||(n++,i.removeEntry(o,I.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),m.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),m.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),m.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),m.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vt(e.data.value)),t}wr(e,t,n){return m.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return m.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=s}static Is(e,t){let n=V(),s=V();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Kn(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return ro()?8:ko(so())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new cu;return this.ys(e,t,o).next((a=>{if(i.result=a,this.As)return this.ws(e,t,o,a.size)}))})).next((()=>i.result))}ws(e,t,n,s){return n.documentReadCount<this.Vs?(Oe()<=le.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",Le(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),m.resolve()):(Oe()<=le.DEBUG&&g("QueryEngine","Query:",Le(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Oe()<=le.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",Le(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ie(t))):m.resolve())}gs(e,t){if(Br(t))return m.resolve(null);let n=ie(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ot(t,null,"F"),n=ie(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const o=V(...i);return this.fs.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,n).next((u=>{const c=this.Ss(t,a);return this.bs(t,c,o,u.readTime)?this.gs(e,Ot(t,null,"F")):this.Ds(e,c,t,u)}))))})))))}ps(e,t,n,s){return Br(t)||s.isEqual(I.min())?m.resolve(null):this.fs.getDocuments(e,n).next((i=>{const o=this.Ss(t,i);return this.bs(t,o,n,s)?m.resolve(null):(Oe()<=le.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Le(t)),this.Ds(e,o,t,So(s,at)).next((a=>a)))}))}Ss(e,t){let n=new U(js(e));return t.forEach(((s,i)=>{Ht(e,i)&&(n=n.add(i))})),n}bs(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,n){return Oe()<=le.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",Le(t)),this.fs.getDocumentsMatchingQuery(e,t,ge.min(),n)}Ds(e,t,n,s){return this.fs.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="LocalStore",hu=3e8;class du{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new N(R),this.Fs=new De((i=>Un(i)),qn),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eu(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function fu(r,e,t,n){return new du(r,e,t,n)}async function pi(r,e){const t=A(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let u=V();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(n,u).next((c=>({Ns:c,removedBatchIds:o,addedBatchIds:a})))}))}))}function mu(r,e){const t=A(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(a,u,c,l){const h=c.batch,d=h.keys();let _=m.resolve();return d.forEach((T=>{_=_.next((()=>l.getEntry(u,T))).next((v=>{const w=c.docVersions.get(T);S(w!==null,48541),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,c),v.isValidDocument()&&(v.setReadTime(c.commitVersion),l.addEntry(v)))}))})),_.next((()=>a.mutationQueue.removeMutationBatch(u,h)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let u=V();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function gi(r){const e=A(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function _u(r,e){const t=A(r),n=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const a=[];e.targetChanges.forEach(((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.li.removeMatchingKeys(i,l.removedDocuments,h).next((()=>t.li.addMatchingKeys(i,l.addedDocuments,h))));let _=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?_=_.withResumeToken(G.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,n)),s=s.insert(h,_),(function(v,w,F){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=hu?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(d,_,l)&&a.push(t.li.updateTargetData(i,_))}));let u=fe(),c=V();if(e.documentUpdates.forEach((l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))})),a.push(pu(i,o,e.documentUpdates).next((l=>{u=l.Bs,c=l.Ls}))),!n.isEqual(I.min())){const l=t.li.getLastRemoteSnapshotVersion(i).next((h=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(l)}return m.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,c))).next((()=>u))})).then((i=>(t.vs=s,i)))}function pu(r,e,t){let n=V(),s=V();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=fe();return t.forEach(((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(I.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):g(Wn,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)})),{Bs:o,Ls:s}}))}function gu(r,e){const t=A(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Ln),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function yu(r,e){const t=A(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.li.getTargetData(n,e).next((i=>i?(s=i,m.resolve(s)):t.li.allocateTargetId(n).next((o=>(s=new me(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n}))}async function Cn(r,e,t){const n=A(r),s=n.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!He(o))throw o;g(Wn,`Failed to update sequence numbers for target ${e}: ${o}`)}n.vs=n.vs.remove(e),n.Fs.delete(s.target)}function es(r,e,t){const n=A(r);let s=I.min(),i=V();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,c,l){const h=A(u),d=h.Fs.get(l);return d!==void 0?m.resolve(h.vs.get(d)):h.li.getTargetData(c,l)})(n,o,ie(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?s:I.min(),t?i:V()))).next((a=>(Eu(n,ra(e),a),{documents:a,ks:i})))))}function Eu(r,e,t){let n=r.Ms.get(e)||I.min();t.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Ms.set(e,n)}class ts{constructor(){this.activeTargetIds=ca()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tu{constructor(){this.vo=new ts,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ts,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="ConnectivityMonitor";class rs{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){g(ns,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){g(ns,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt=null;function bn(){return Rt===null?Rt=(function(){return 268435456+Math.round(2147483648*Math.random())})():Rt++,"0x"+Rt.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="RestConnection",Au={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class wu{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===Dt?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,i){const o=bn(),a=this.Qo(e,t.toUriEncodedString());g(_n,`Sending RPC '${e}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:c}=new URL(a),l=ws(c);return this.zo(e,a,u,n,l).then((h=>(g(_n,`Received RPC '${e}' ${o}: `,h),h)),(h=>{throw be(_n,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",n),h}))}jo(e,t,n,s,i,o){return this.Wo(e,t,n,s,i)}Go(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ke})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const n=Au[e];let s=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="WebChannelConnection",Ze=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ue extends wu{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ue.c_){const e=oo();Ze(e,ao.STAT_EVENT,(t=>{t.stat===Ar.PROXY?g(Q,"STAT_EVENT: detected buffering proxy"):t.stat===Ar.NOPROXY&&g(Q,"STAT_EVENT: detected no buffering proxy")})),Ue.c_=!0}}zo(e,t,n,s,i){const o=bn();return new Promise(((a,u)=>{const c=new uo;c.setWithCredentials(!0),c.listenOnce(co.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case dn.NO_ERROR:const h=c.getResponseJson();g(Q,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),a(h);break;case dn.TIMEOUT:g(Q,`RPC '${e}' ${o} timed out`),u(new p(f.DEADLINE_EXCEEDED,"Request time out"));break;case dn.HTTP_ERROR:const d=c.getStatus();if(g(Q,`RPC '${e}' ${o} failed with status:`,d,"response text:",c.getResponseText()),d>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const v=(function(F){const x=F.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(x)>=0?x:f.UNKNOWN})(T.status);u(new p(v,T.message))}else u(new p(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new p(f.UNAVAILABLE,"Connection failed."));break;default:E(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{g(Q,`RPC '${e}' ${o} completed.`)}}));const l=JSON.stringify(s);g(Q,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",l,n,15)}))}T_(e,t,n){const s=bn(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=i.join("");g(Q,`Creating RPC '${e}' stream ${s}: ${c}`,a);const l=o.createWebChannel(c,a);this.E_(l);let h=!1,d=!1;const _=new vu({Jo:T=>{d?g(Q,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(h||(g(Q,`Opening RPC '${e}' stream ${s} transport.`),l.open(),h=!0),g(Q,`RPC '${e}' stream ${s} sending:`,T),l.send(T))},Ho:()=>l.close()});return Ze(l,It.EventType.OPEN,(()=>{d||(g(Q,`RPC '${e}' stream ${s} transport opened.`),_.i_())})),Ze(l,It.EventType.CLOSE,(()=>{d||(d=!0,g(Q,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.I_(l))})),Ze(l,It.EventType.ERROR,(T=>{d||(d=!0,be(Q,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),_.o_(new p(f.UNAVAILABLE,"The operation could not be completed")))})),Ze(l,It.EventType.MESSAGE,(T=>{var v;if(!d){const w=T.data[0];S(!!w,16349);const F=w,x=(F==null?void 0:F.error)||((v=F[0])==null?void 0:v.error);if(x){g(Q,`RPC '${e}' stream ${s} received error:`,x);const J=x.status;let Xe=(function(hn){const Ir=O[hn];if(Ir!==void 0)return ri(Ir)})(J),Re=x.message;J==="NOT_FOUND"&&Re.includes("database")&&Re.includes("does not exist")&&Re.includes(this.databaseId.database)&&be(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Xe===void 0&&(Xe=f.INTERNAL,Re="Unknown error status: "+J+" with message "+x.message),d=!0,_.o_(new p(Xe,Re)),l.close()}else g(Q,`RPC '${e}' stream ${s} received:`,w),_.__(w)}})),Ue.u_(),setTimeout((()=>{_.s_()}),0),_}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return lo()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(r){return new Ue(r)}function pn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(r){return new Ca(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.c_=!1;class yi{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&g("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="PersistentStream";class Ei{constructor(e,t,n,s,i,o,a,u){this.Ci=e,this.S_=n,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new yi(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(de(t.toString()),de("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===t&&this.G_(n,s)}),(n=>{e((()=>{const s=new p(f.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return g(ss,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(g(ss,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vu extends Ei{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Da(this.serializer,e),n=(function(i){if(!("targetChange"in i))return I.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?oe(o.readTime):I.min()})(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=Sn(this.serializer),t.addTarget=(function(i,o){let a;const u=o.target;if(a=wn(u)?{documents:Oa(i,u)}:{query:La(i,u).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oi(i,o.resumeToken);const c=Rn(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(I.min())>0){a.readTime=Mt(i,o.snapshotVersion.toTimestamp());const c=Rn(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a})(this.serializer,e);const n=Fa(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=Sn(this.serializer),t.removeTarget=e,this.q_(t)}}class Pu extends Ei{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return S(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,S(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){S(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=xa(e.writeResults,e.commitTime),n=oe(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Sn(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>ka(this.serializer,n)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{}class Cu extends Su{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new p(f.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Vn(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(f.UNKNOWN,i.toString())}))}jo(e,t,n,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.jo(e,Vn(t,n),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new p(f.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function bu(r,e,t,n){return new Cu(r,e,t,n)}class Nu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(de(t),this.aa=!1):g("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="RemoteStore";class Du{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{n.enqueueAndForget((async()=>{ke(this)&&(g(Ne,"Restarting streams for network reachability change."),await(async function(u){const c=A(u);c.Ia.add(4),await yt(c),c.Va.set("Unknown"),c.Ia.delete(4),await tn(c)})(this))}))})),this.Va=new Nu(n,s)}}async function tn(r){if(ke(r))for(const e of r.Ra)await e(!0)}async function yt(r){for(const e of r.Ra)await e(!1)}function Ti(r,e){const t=A(r);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Xn(t)?Jn(t):Je(t).O_()&&Yn(t,e))}function Hn(r,e){const t=A(r),n=Je(t);t.Ea.delete(e),n.O_()&&Ii(t,e),t.Ea.size===0&&(n.O_()?n.L_():ke(t)&&t.Va.set("Unknown"))}function Yn(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(I.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Je(r).Z_(e)}function Ii(r,e){r.da.$e(e),Je(r).X_(e)}function Jn(r){r.da=new Ra({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ea.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Je(r).start(),r.Va.ua()}function Xn(r){return ke(r)&&!Je(r).x_()&&r.Ea.size>0}function ke(r){return A(r).Ia.size===0}function Ai(r){r.da=void 0}async function ku(r){r.Va.set("Online")}async function xu(r){r.Ea.forEach(((e,t)=>{Yn(r,e)}))}async function Ou(r,e){Ai(r),Xn(r)?(r.Va.ha(e),Jn(r)):r.Va.set("Unknown")}async function Lu(r,e,t){if(r.Va.set("Online"),e instanceof ii&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ea.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ea.delete(a),s.da.removeTarget(a))})(r,e)}catch(n){g(Ne,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ut(r,n)}else if(e instanceof Ct?r.da.Xe(e):e instanceof si?r.da.st(e):r.da.tt(e),!t.isEqual(I.min()))try{const n=await gi(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach(((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=i.Ea.get(c);l&&i.Ea.set(c,l.withResumeToken(u.resumeToken,o))}})),a.targetMismatches.forEach(((u,c)=>{const l=i.Ea.get(u);if(!l)return;i.Ea.set(u,l.withResumeToken(G.EMPTY_BYTE_STRING,l.snapshotVersion)),Ii(i,u);const h=new me(l.target,u,c,l.sequenceNumber);Yn(i,h)})),i.remoteSyncer.applyRemoteEvent(a)})(r,t)}catch(n){g(Ne,"Failed to raise snapshot:",n),await Ut(r,n)}}async function Ut(r,e,t){if(!He(e))throw e;r.Ia.add(1),await yt(r),r.Va.set("Offline"),t||(t=()=>gi(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{g(Ne,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await tn(r)}))}function wi(r,e){return e().catch((t=>Ut(r,t,e)))}async function nn(r){const e=A(r),t=Ie(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ln;for(;Mu(e);)try{const s=await gu(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,Fu(e,s)}catch(s){await Ut(e,s)}vi(e)&&Ri(e)}function Mu(r){return ke(r)&&r.Ta.length<10}function Fu(r,e){r.Ta.push(e);const t=Ie(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function vi(r){return ke(r)&&!Ie(r).x_()&&r.Ta.length>0}function Ri(r){Ie(r).start()}async function Uu(r){Ie(r).ra()}async function qu(r){const e=Ie(r);for(const t of r.Ta)e.ea(t.mutations)}async function Bu(r,e,t){const n=r.Ta.shift(),s=$n.from(n,e,t);await wi(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await nn(r)}async function $u(r,e){e&&Ie(r).Y_&&await(async function(n,s){if((function(o){return Aa(o)&&o!==f.ABORTED})(s.code)){const i=n.Ta.shift();Ie(n).B_(),await wi(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await nn(n)}})(r,e),vi(r)&&Ri(r)}async function is(r,e){const t=A(r);t.asyncQueue.verifyOperationInProgress(),g(Ne,"RemoteStore received new credentials");const n=ke(t);t.Ia.add(3),await yt(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await tn(t)}async function zu(r,e){const t=A(r);e?(t.Ia.delete(2),await tn(t)):e||(t.Ia.add(2),await yt(t),t.Va.set("Unknown"))}function Je(r){return r.ma||(r.ma=(function(t,n,s){const i=A(t);return i.sa(),new Vu(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:ku.bind(null,r),Yo:xu.bind(null,r),t_:Ou.bind(null,r),H_:Lu.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),Xn(r)?Jn(r):r.Va.set("Unknown")):(await r.ma.stop(),Ai(r))}))),r.ma}function Ie(r){return r.fa||(r.fa=(function(t,n,s){const i=A(t);return i.sa(),new Pu(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Uu.bind(null,r),t_:$u.bind(null,r),ta:qu.bind(null,r),na:Bu.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await nn(r)):(await r.fa.stop(),r.Ta.length>0&&(g(Ne,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new he,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new Zn(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function er(r,e){if(de("AsyncQueue",`${e}: ${r}`),He(r))return new p(f.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{static emptySet(e){return new qe(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||y.comparator(t.key,n.key):(t,n)=>y.comparator(t.key,n.key),this.keyedMap=et(),this.sortedSet=new N(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new qe;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.ga=new N(y.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):E(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Qe{constructor(e,t,n,s,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Qe(e,t,qe.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class Qu{constructor(){this.queries=as(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=A(t),i=s.queries;s.queries=as(),i.forEach(((o,a)=>{for(const u of a.Sa)u.onError(n)}))})(this,new p(f.ABORTED,"Firestore shutting down"))}}function as(){return new De((r=>Qs(r)),Wt)}async function tr(r,e){const t=A(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(n=2):(i=new Gu,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=er(o,`Initialization of query '${Le(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&rr(t)}async function nr(r,e){const t=A(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function ju(r,e){const t=A(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.Sa)a.Fa(s)&&(n=!0);o.wa=s}}n&&rr(t)}function Ku(r,e,t){const n=A(r),s=n.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);n.queries.delete(e)}function rr(r){r.Ca.forEach((e=>{e.next()}))}var Nn,us;(us=Nn||(Nn={})).Ma="default",us.Cache="cache";class sr{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new Qe(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Qe.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Nn.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.key=e}}class Pi{constructor(e){this.key=e}}class Wu{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=V(),this.mutatedKeys=V(),this.eu=js(e),this.tu=new qe(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new os,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((l,h)=>{const d=s.get(l),_=Ht(this.query,h)?h:null,T=!!d&&this.mutatedKeys.has(d.key),v=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let w=!1;d&&_?d.data.isEqual(_.data)?T!==v&&(n.track({type:3,doc:_}),w=!0):this.su(d,_)||(n.track({type:2,doc:_}),w=!0,(u&&this.eu(_,u)>0||c&&this.eu(_,c)<0)&&(a=!0)):!d&&_?(n.track({type:0,doc:_}),w=!0):d&&!_&&(n.track({type:1,doc:d}),w=!0,(u||c)&&(a=!0)),w&&(_?(o=o.add(_),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),n.track({type:1,doc:l})}return{tu:o,iu:n,bs:a,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((l,h)=>(function(_,T){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E(20277,{Vt:w})}};return v(_)-v(T)})(l.type,h.type)||this.eu(l.doc,h.doc))),this.ou(n),s=s??!1;const a=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new Qe(this.query,e.tu,i,o,e.mutatedKeys,u===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new os,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=V(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))}));const t=[];return e.forEach((n=>{this.Ya.has(n)||t.push(new Pi(n))})),this.Ya.forEach((n=>{e.has(n)||t.push(new Vi(n))})),t}cu(e){this.Za=e.ks,this.Ya=V();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Qe.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ir="SyncEngine";class Hu{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Yu{constructor(e){this.key=e,this.hu=!1}}class Ju{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new De((a=>Qs(a)),Wt),this.Eu=new Map,this.Iu=new Set,this.Ru=new N(y.comparator),this.Au=new Map,this.Vu=new Qn,this.du={},this.mu=new Map,this.fu=Ge.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Xu(r,e,t=!0){const n=ki(r);let s;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Si(n,e,t,!0),s}async function Zu(r,e){const t=ki(r);await Si(t,e,!0,!1)}async function Si(r,e,t,n){const s=await yu(r.localStore,ie(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await ec(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Ti(r.remoteStore,s),a}async function ec(r,e,t,n,s){r.pu=(h,d,_)=>(async function(v,w,F,x){let J=w.view.ru(F);J.bs&&(J=await es(v.localStore,w.query,!1).then((({documents:hn})=>w.view.ru(hn,J))));const Xe=x&&x.targetChanges.get(w.targetId),Re=x&&x.targetMismatches.get(w.targetId)!=null,ln=w.view.applyChanges(J,v.isPrimaryClient,Xe,Re);return ls(v,w.targetId,ln.au),ln.snapshot})(r,h,d,_);const i=await es(r.localStore,e,!0),o=new Wu(e,i.ks),a=o.ru(i.documents),u=gt.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(a,r.isPrimaryClient,u);ls(r,t,c.au);const l=new Hu(e,t,o);return r.Tu.set(e,l),r.Eu.has(t)?r.Eu.get(t).push(e):r.Eu.set(t,[e]),c.snapshot}async function tc(r,e,t){const n=A(r),s=n.Tu.get(e),i=n.Eu.get(s.targetId);if(i.length>1)return n.Eu.set(s.targetId,i.filter((o=>!Wt(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Cn(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Hn(n.remoteStore,s.targetId),Dn(n,s.targetId)})).catch(We)):(Dn(n,s.targetId),await Cn(n.localStore,s.targetId,!0))}async function nc(r,e){const t=A(r),n=t.Tu.get(e),s=t.Eu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Hn(t.remoteStore,n.targetId))}async function rc(r,e,t){const n=lc(r);try{const s=await(function(o,a){const u=A(o),c=b.now(),l=a.reduce(((_,T)=>_.add(T.key)),V());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let T=fe(),v=V();return u.xs.getEntries(_,l).next((w=>{T=w,T.forEach(((F,x)=>{x.isValidDocument()||(v=v.add(F))}))})).next((()=>u.localDocuments.getOverlayedDocuments(_,T))).next((w=>{h=w;const F=[];for(const x of a){const J=ga(x,h.get(x.key).overlayedDocument);J!=null&&F.push(new ve(x.key,J,Ms(J.value.mapValue),Y.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,F,a)})).next((w=>{d=w;const F=w.applyToLocalDocumentSet(h,v);return u.documentOverlayCache.saveOverlays(_,w.batchId,F)}))})).then((()=>({batchId:d.batchId,changes:Ws(h)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,a,u){let c=o.du[o.currentUser.toKey()];c||(c=new N(R)),c=c.insert(a,u),o.du[o.currentUser.toKey()]=c})(n,s.batchId,t),await Et(n,s.changes),await nn(n.remoteStore)}catch(s){const i=er(s,"Failed to persist write");t.reject(i)}}async function Ci(r,e){const t=A(r);try{const n=await _u(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Au.get(i);o&&(S(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?S(o.hu,14607):s.removedDocuments.size>0&&(S(o.hu,42227),o.hu=!1))})),await Et(t,n,e)}catch(n){await We(n)}}function cs(r,e,t){const n=A(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const u=A(o);u.onlineState=a;let c=!1;u.queries.forEach(((l,h)=>{for(const d of h.Sa)d.va(a)&&(c=!0)})),c&&rr(u)})(n.eventManager,e),s.length&&n.Pu.H_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function sc(r,e,t){const n=A(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),i=s&&s.key;if(i){let o=new N(y.comparator);o=o.insert(i,K.newNoDocument(i,I.min()));const a=V().add(i),u=new Zt(I.min(),new Map,new N(R),o,a);await Ci(n,u),n.Ru=n.Ru.remove(i),n.Au.delete(e),or(n)}else await Cn(n.localStore,e,!1).then((()=>Dn(n,e,t))).catch(We)}async function ic(r,e){const t=A(r),n=e.batch.batchId;try{const s=await mu(t.localStore,e);Ni(t,n,null),bi(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Et(t,s)}catch(s){await We(s)}}async function oc(r,e,t){const n=A(r);try{const s=await(function(o,a){const u=A(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next((h=>(S(h!==null,37113),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h)))).next((()=>u.mutationQueue.performConsistencyCheck(c))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l))).next((()=>u.localDocuments.getDocuments(c,l)))}))})(n.localStore,e);Ni(n,e,t),bi(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Et(n,s)}catch(s){await We(s)}}function bi(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Ni(r,e,t){const n=A(r);let s=n.du[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.du[n.currentUser.toKey()]=s}}function Dn(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Eu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Eu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((n=>{r.Vu.containsKey(n)||Di(r,n)}))}function Di(r,e){r.Iu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(Hn(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),or(r))}function ls(r,e,t){for(const n of t)n instanceof Vi?(r.Vu.addReference(n.key,e),ac(r,n)):n instanceof Pi?(g(ir,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,e),r.Vu.containsKey(n.key)||Di(r,n.key)):E(19791,{wu:n})}function ac(r,e){const t=e.key,n=t.path.canonicalString();r.Ru.get(t)||r.Iu.has(n)||(g(ir,"New document in limbo: "+t),r.Iu.add(n),or(r))}function or(r){for(;r.Iu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new y(C.fromString(e)),n=r.fu.next();r.Au.set(n,new Yu(t)),r.Ru=r.Ru.insert(t,n),Ti(r.remoteStore,new me(ie(Kt(t.path)),n,"TargetPurposeLimboResolution",Gt.ce))}}async function Et(r,e,t){const n=A(r),s=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((a,u)=>{o.push(n.pu(u,e,t).then((c=>{var l;if((c||t)&&n.isPrimaryClient){const h=c?!c.fromCache:(l=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:l.current;n.sharedClientState.updateQueryState(u.targetId,h?"current":"not-current")}if(c){s.push(c);const h=Kn.Is(u.targetId,c);i.push(h)}})))})),await Promise.all(o),n.Pu.H_(s),await(async function(u,c){const l=A(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",(h=>m.forEach(c,(d=>m.forEach(d.Ts,(_=>l.persistence.referenceDelegate.addReference(h,d.targetId,_))).next((()=>m.forEach(d.Es,(_=>l.persistence.referenceDelegate.removeReference(h,d.targetId,_)))))))))}catch(h){if(!He(h))throw h;g(Wn,"Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const _=l.vs.get(d),T=_.snapshotVersion,v=_.withLastLimboFreeSnapshotVersion(T);l.vs=l.vs.insert(d,v)}}})(n.localStore,i))}async function uc(r,e){const t=A(r);if(!t.currentUser.isEqual(e)){g(ir,"User change. New user:",e.toKey());const n=await pi(t.localStore,e);t.currentUser=e,(function(i,o){i.mu.forEach((a=>{a.forEach((u=>{u.reject(new p(f.CANCELLED,o))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Et(t,n.Ns)}}function cc(r,e){const t=A(r),n=t.Au.get(e);if(n&&n.hu)return V().add(n.key);{let s=V();const i=t.Eu.get(e);if(!i)return s;for(const o of i){const a=t.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function ki(r){const e=A(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ci.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cc.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sc.bind(null,e),e.Pu.H_=ju.bind(null,e.eventManager),e.Pu.yu=Ku.bind(null,e.eventManager),e}function lc(r){const e=A(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ic.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oc.bind(null,e),e}class qt{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=en(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return fu(this.persistence,new lu,e.initialUser,this.serializer)}Cu(e){return new _i(jn.Vi,this.serializer)}Du(e){return new Tu}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qt.provider={build:()=>new qt};class hc extends qt{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){S(this.persistence.referenceDelegate instanceof Ft,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ha(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?W.withCacheSize(this.cacheSizeBytes):W.DEFAULT;return new _i((n=>Ft.Vi(n,t)),this.serializer)}}class kn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>cs(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=uc.bind(null,this.syncEngine),await zu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Qu})()}createDatastore(e){const t=en(e.databaseInfo.databaseId),n=Ru(e.databaseInfo);return bu(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,a){return new Du(n,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>cs(this.syncEngine,t,0)),(function(){return rs.v()?new rs:new Iu})())}createSyncEngine(e,t){return(function(s,i,o,a,u,c,l){const h=new Ju(s,i,o,a,u,c);return l&&(h.gu=!0),h})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=A(s);g(Ne,"RemoteStore shutting down."),i.Ia.add(5),await yt(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}kn.provider={build:()=>new kn};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):de("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="FirestoreClient";class dc{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=j.UNAUTHENTICATED,this.clientId=On.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{g(Ae,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(g(Ae,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new he;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=er(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function gn(r,e){r.asyncQueue.verifyOperationInProgress(),g(Ae,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await pi(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function hs(r,e){r.asyncQueue.verifyOperationInProgress();const t=await fc(r);g(Ae,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>is(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>is(e.remoteStore,s))),r._onlineComponents=e}async function fc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){g(Ae,"Using user provided OfflineComponentProvider");try{await gn(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===f.FAILED_PRECONDITION||s.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;be("Error using user provided cache. Falling back to memory cache: "+t),await gn(r,new qt)}}else g(Ae,"Using default OfflineComponentProvider"),await gn(r,new hc(void 0));return r._offlineComponents}async function xi(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(g(Ae,"Using user provided OnlineComponentProvider"),await hs(r,r._uninitializedComponentsProvider._online)):(g(Ae,"Using default OnlineComponentProvider"),await hs(r,new kn))),r._onlineComponents}function mc(r){return xi(r).then((e=>e.syncEngine))}async function Bt(r){const e=await xi(r),t=e.eventManager;return t.onListen=Xu.bind(null,e.syncEngine),t.onUnlisten=tc.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Zu.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nc.bind(null,e.syncEngine),t}function _c(r,e,t,n){const s=new ar(n),i=new sr(e,s,t);return r.asyncQueue.enqueueAndForget((async()=>tr(await Bt(r),i))),()=>{s.Nu(),r.asyncQueue.enqueueAndForget((async()=>nr(await Bt(r),i)))}}function Oi(r,e,t={}){const n=new he;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,c){const l=new ar({next:d=>{l.Nu(),o.enqueueAndForget((()=>nr(i,h)));const _=d.docs.has(a);!_&&d.fromCache?c.reject(new p(f.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&d.fromCache&&u&&u.source==="server"?c.reject(new p(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new sr(Kt(a.path),l,{includeMetadataChanges:!0,qa:!0});return tr(i,h)})(await Bt(r),r.asyncQueue,e,t,n))),n.promise}function Li(r,e,t={}){const n=new he;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,c){const l=new ar({next:d=>{l.Nu(),o.enqueueAndForget((()=>nr(i,h))),d.fromCache&&u.source==="server"?c.reject(new p(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new sr(a,l,{includeMetadataChanges:!0,qa:!0});return tr(i,h)})(await Bt(r),r.asyncQueue,e,t,n))),n.promise}function pc(r,e){const t=new he;return r.asyncQueue.enqueueAndForget((async()=>rc(await mc(r),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="ComponentProvider",ds=new Map;function yc(r,e,t,n,s){return new Fo(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Mi(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="firestore.googleapis.com",fs=!0;class ms{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new p(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fi,this.ssl=fs}else this.host=e.host,this.ssl=e.ssl??fs;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mi;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ka)throw new p(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Vo("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mi(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new p(f.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new p(f.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new p(f.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rn{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ms({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new p(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new p(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ms(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new po;switch(n.type){case"firstParty":return new To(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new p(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=ds.get(t);n&&(g(gc,"Removing Datastore"),ds.delete(t),n.terminate())})(this),Promise.resolve()}}function Ec(r,e,t,n={}){var c;r=z(r,rn);const s=ws(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},a=`${e}:${t}`;s&&eo(`https://${a}`),i.host!==Fi&&i.host!==a&&be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:n};if(!to(u,o)&&(r._setSettings(u),n.mockUserToken)){let l,h;if(typeof n.mockUserToken=="string")l=n.mockUserToken,h=j.MOCK_USER;else{l=no(n.mockUserToken,(c=r._app)==null?void 0:c.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new p(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new j(d)}r._authCredentials=new go(new Rs(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ce(this.firestore,e,this._query)}}class D{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new D(this.firestore,e,this._key)}toJSON(){return{type:D._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(_t(t,D._jsonSchema))return new D(e,n||null,new y(C.fromString(t.referencePath)))}}D._jsonSchemaVersion="firestore/documentReference/1.0",D._jsonSchema={type:M("string",D._jsonSchemaVersion),referencePath:M("string")};class _e extends ce{constructor(e,t,n){super(e,t,Kt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new D(this.firestore,null,new y(e))}withConverter(e){return new _e(this.firestore,e,this._path)}}function Oc(r,e,...t){if(r=te(r),Vs("collection","path",e),r instanceof rn){const n=C.fromString(e,...t);return Pr(n),new _e(r,null,n)}{if(!(r instanceof D||r instanceof _e))throw new p(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(C.fromString(e,...t));return Pr(n),new _e(r.firestore,null,n)}}function Tc(r,e,...t){if(r=te(r),arguments.length===1&&(e=On.newId()),Vs("doc","path",e),r instanceof rn){const n=C.fromString(e,...t);return Vr(n),new D(r,null,new y(n))}{if(!(r instanceof D||r instanceof _e))throw new p(f.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(C.fromString(e,...t));return Vr(n),new D(r.firestore,r instanceof _e?r.converter:null,new y(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="AsyncQueue";class ps{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new yi(this,"async_queue_retry"),this._c=()=>{const n=pn();n&&g(_s,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=pn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=pn();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new he;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!He(e))throw e;g(_s,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,de("INTERNAL UNHANDLED ERROR: ",gs(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Zn.createAndSchedule(this,e,t,n,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&E(47125,{Pc:gs(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function gs(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class re extends rn{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new ps,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ps(e),this._firestoreClient=void 0,await e}}}function Lc(r,e){const t=typeof r=="object"?r:Ji(),n=typeof r=="string"?r:e||Dt,s=Xi(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Zi("firestore");i&&Ec(s,...i)}return s}function xe(r){if(r._terminated)throw new p(f.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ic(r),r._firestoreClient}function Ic(r){var n,s,i,o;const e=r._freezeSettings(),t=yc(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new dc(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Z(G.fromBase64String(e))}catch(t){throw new p(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Z(G.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Z._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_t(e,Z._jsonSchema))return Z.fromBase64String(e.bytes)}}Z._jsonSchemaVersion="firestore/bytes/1.0",Z._jsonSchema={type:M("string",Z._jsonSchemaVersion),bytes:M("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ae._jsonSchemaVersion}}static fromJSON(e){if(_t(e,ae._jsonSchema))return new ae(e.latitude,e.longitude)}}ae._jsonSchemaVersion="firestore/geoPoint/1.0",ae._jsonSchema={type:M("string",ae._jsonSchemaVersion),latitude:M("number"),longitude:M("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ee._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_t(e,ee._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ee(e.vectorValues);throw new p(f.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ee._jsonSchemaVersion="firestore/vectorValue/1.0",ee._jsonSchema={type:M("string",ee._jsonSchemaVersion),vectorValues:M("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=/^__.*__$/;class wc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ve(e,this.data,this.fieldMask,t,this.fieldTransforms):new pt(e,this.data,t,this.fieldTransforms)}}class Ui{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ve(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function qi(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E(40011,{dataSource:r})}}class cr{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new cr({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return $t(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(qi(this.dataSource)&&Ac.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class vc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||en(e)}I(e,t,n,s=!1){return new cr({dataSource:e,methodName:t,targetDoc:n,path:$.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function on(r){const e=r._freezeSettings(),t=en(r._databaseId);return new vc(r._databaseId,!!e.ignoreUndefinedProperties,t)}function lr(r,e,t,n,s,i={}){const o=r.I(i.merge||i.mergeFields?2:0,e,t,s);dr("Data must be an object, but it was:",o,n);const a=Bi(n,o);let u,c;if(i.merge)u=new X(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=je(e,h,t);if(!o.contains(d))throw new p(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Gi(l,d)||l.push(d)}u=new X(l),c=o.fieldTransforms.filter((h=>u.covers(h.field)))}else u=null,c=o.fieldTransforms;return new wc(new H(a),u,c)}class an extends sn{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof an}}class hr extends sn{_toFieldTransform(e){return new fa(e.path,new dt)}isEqual(e){return e instanceof hr}}function Rc(r,e,t,n){const s=r.I(1,e,t);dr("Data must be an object, but it was:",s,n);const i=[],o=H.empty();we(n,((u,c)=>{const l=zi(e,u,t);c=te(c);const h=s.fc(l);if(c instanceof an)i.push(l);else{const d=Tt(c,h);d!=null&&(i.push(l),o.set(l,d))}}));const a=new X(i);return new Ui(o,a,s.fieldTransforms)}function Vc(r,e,t,n,s,i){const o=r.I(1,e,t),a=[je(e,n,t)],u=[s];if(i.length%2!=0)throw new p(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(je(e,i[d])),u.push(i[d+1]);const c=[],l=H.empty();for(let d=a.length-1;d>=0;--d)if(!Gi(c,a[d])){const _=a[d];let T=u[d];T=te(T);const v=o.fc(_);if(T instanceof an)c.push(_);else{const w=Tt(T,v);w!=null&&(c.push(_),l.set(_,w))}}const h=new X(c);return new Ui(l,h,o.fieldTransforms)}function Pc(r,e,t,n=!1){return Tt(t,r.I(n?4:3,e))}function Tt(r,e){if($i(r=te(r)))return dr("Unsupported field value:",e,r),Bi(r,e);if(r instanceof sn)return(function(n,s){if(!qi(s.dataSource))throw s.yc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(n,s){const i=[];let o=0;for(const a of n){let u=Tt(a,s.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}})(r,e)}return(function(n,s){if((n=te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return la(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=b.fromDate(n);return{timestampValue:Mt(s.serializer,i)}}if(n instanceof b){const i=new b(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Mt(s.serializer,i)}}if(n instanceof ae)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Z)return{bytesValue:oi(s.serializer,n._byteString)};if(n instanceof D){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gn(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ee)return(function(o,a){const u=o instanceof ee?o.toArray():o;return{mapValue:{fields:{[Os]:{stringValue:Ls},[kt]:{arrayValue:{values:u.map((l=>{if(typeof l!="number")throw a.yc("VectorValues must only contain numeric values.");return Bn(a.serializer,l)}))}}}}}})(n,s);if(fi(n))return n._toProto(s.serializer);throw s.yc(`Unsupported field value: ${zt(n)}`)})(r,e)}function Bi(r,e){const t={};return Cs(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):we(r,((n,s)=>{const i=Tt(s,e.dc(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function $i(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof b||r instanceof ae||r instanceof Z||r instanceof D||r instanceof sn||r instanceof ee||fi(r))}function dr(r,e,t){if(!$i(t)||!Ps(t)){const n=zt(t);throw n==="an object"?e.yc(r+" a custom object"):e.yc(r+" "+n)}}function je(r,e,t){if((e=te(e))instanceof ur)return e._internalPath;if(typeof e=="string")return zi(r,e);throw $t("Field path arguments must be of type string or ",r,!1,void 0,t)}const Sc=new RegExp("[~\\*/\\[\\]]");function zi(r,e,t){if(e.search(Sc)>=0)throw $t(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ur(...e.split("."))._internalPath}catch{throw $t(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function $t(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new p(f.INVALID_ARGUMENT,a+r+u)}function Gi(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{convertValue(e,t="none"){switch(Te(e)){case 0:return null;case 1:return e.booleanValue;case 2:return k(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ee(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw E(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return we(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[kt].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>k(o.doubleValue)));return new ee(t)}convertGeoPoint(e){return new ae(k(e.latitude),k(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=jt(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ut(e));default:return null}}convertTimestamp(e){const t=ye(e);return new b(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=C.fromString(e);S(di(n),9688,{name:e});const s=new ct(n.get(1),n.get(3)),i=new y(n.popFirst(5));return s.isEqual(t)||de(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Cc{constructor(e){super(),this.firestore=e}convertBytes(e){return new Z(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new D(this.firestore,null,t)}}function Mc(){return new hr("serverTimestamp")}const ys="@firebase/firestore",Es="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new D(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(je("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bc extends Qi{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new p(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fr{}class mr extends fr{}function Fc(r,e,...t){let n=[];e instanceof fr&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((u=>u instanceof pr)).length,a=i.filter((u=>u instanceof _r)).length;if(o>1||o>0&&a>0)throw new p(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class _r extends mr{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new _r(e,t,n)}_apply(e){const t=this._parse(e);return Ki(e._query,t),new ce(e.firestore,e.converter,vn(e._query,t))}_parse(e){const t=on(e.firestore);return(function(i,o,a,u,c,l,h){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new p(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){As(h,l);const T=[];for(const v of h)T.push(Is(u,i,v));d={arrayValue:{values:T}}}else d=Is(u,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||As(h,l),d=Pc(a,o,h,l==="in"||l==="not-in");return L.create(c,l,d)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class pr extends fr{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pr(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)Ki(o,u),o=vn(o,u)})(e._query,t),new ce(e.firestore,e.converter,vn(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gr extends mr{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gr(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new p(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new p(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ht(i,o)})(e._query,this._field,this._direction);return new ce(e.firestore,e.converter,na(e._query,t))}}function Uc(r,e="asc"){const t=e,n=je("orderBy",r);return gr._create(n,t)}class yr extends mr{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new yr(e,t,n)}_apply(e){return new ce(e.firestore,e.converter,Ot(e._query,this._limit,this._limitType))}}function qc(r){return Po("limit",r),yr._create("limit",r,"F")}function Is(r,e,t){if(typeof(t=te(t))=="string"){if(t==="")throw new p(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gs(e)&&t.indexOf("/")!==-1)throw new p(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(C.fromString(t));if(!y.isDocumentKey(n))throw new p(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Or(r,new y(n))}if(t instanceof D)return Or(r,t._key);throw new p(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zt(t)}.`)}function As(r,e){if(!Array.isArray(r)||r.length===0)throw new p(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ki(r,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new p(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Er(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class nt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Se extends Qi{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bt(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(je("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new p(f.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Se._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Se._jsonSchemaVersion="firestore/documentSnapshot/1.0",Se._jsonSchema={type:M("string",Se._jsonSchemaVersion),bundleSource:M("string","DocumentSnapshot"),bundleName:M("string"),bundle:M("string")};class bt extends Se{data(e={}){return super.data(e)}}class pe{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new nt(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new bt(this._firestore,this._userDataWriter,n.key,n,new nt(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const u=new bt(s._firestore,s._userDataWriter,a.doc.key,a.doc,new nt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const u=new bt(s._firestore,s._userDataWriter,a.doc.key,a.doc,new nt(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Nc(a.type),doc:u,oldIndex:c,newIndex:l}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new p(f.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pe._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=On.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Nc(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E(61501,{type:r})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe._jsonSchemaVersion="firestore/querySnapshot/1.0",pe._jsonSchema={type:M("string",pe._jsonSchemaVersion),bundleSource:M("string","QuerySnapshot"),bundleName:M("string"),bundle:M("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=on(e)}set(e,t,n){this._verifyNotCommitted();const s=yn(e,this._firestore),i=Er(s.converter,t,n),o=lr(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,Y.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=yn(e,this._firestore);let o;return o=typeof(t=te(t))=="string"||t instanceof ur?Vc(this._dataReader,"WriteBatch.update",i._key,t,n,s):Rc(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Y.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=yn(e,this._firestore);return this._mutations=this._mutations.concat(new Xt(t._key,Y.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function yn(r,e){if((r=te(r)).firestore!==e)throw new p(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(r){r=z(r,D);const e=z(r.firestore,re),t=xe(e);return Oi(t,r._key).then((n=>Tr(e,r,n)))}function $c(r){r=z(r,D);const e=z(r.firestore,re),t=xe(e);return Oi(t,r._key,{source:"server"}).then((n=>Tr(e,r,n)))}function zc(r){r=z(r,ce);const e=z(r.firestore,re),t=xe(e),n=new un(e);return ji(r._query),Li(t,r._query).then((s=>new pe(e,n,r,s)))}function Gc(r){r=z(r,ce);const e=z(r.firestore,re),t=xe(e),n=new un(e);return Li(t,r._query,{source:"server"}).then((s=>new pe(e,n,r,s)))}function Qc(r,e,t){r=z(r,D);const n=z(r.firestore,re),s=Er(r.converter,e,t),i=on(n);return cn(n,[lr(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Y.none())])}function jc(r){return cn(z(r.firestore,re),[new Xt(r._key,Y.none())])}function Kc(r,e){const t=z(r.firestore,re),n=Tc(r),s=Er(r.converter,e),i=on(r.firestore);return cn(t,[lr(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Y.exists(!1))]).then((()=>n))}function Wc(r,...e){var c,l,h;r=te(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Ts(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Ts(e[n])){const d=e[n];e[n]=(c=d.next)==null?void 0:c.bind(d),e[n+1]=(l=d.error)==null?void 0:l.bind(d),e[n+2]=(h=d.complete)==null?void 0:h.bind(d)}let i,o,a;if(r instanceof D)o=z(r.firestore,re),a=Kt(r._key.path),i={next:d=>{e[n]&&e[n](Tr(o,r,d))},error:e[n+1],complete:e[n+2]};else{const d=z(r,ce);o=z(d.firestore,re),a=d._query;const _=new un(o);i={next:T=>{e[n]&&e[n](new pe(o,_,d,T))},error:e[n+1],complete:e[n+2]},ji(r._query)}const u=xe(o);return _c(u,a,s,i)}function cn(r,e){const t=xe(r);return pc(t,e)}function Tr(r,e,t){const n=t.docs.get(e._key),s=new un(r);return new Se(r,s,e._key,n,new nt(t.hasPendingWrites,t.fromCache),e.converter)}function Hc(r){return r=z(r,re),xe(r),new Dc(r,(e=>cn(r,e)))}(function(e,t=!0){_o(mo),ho(new fo("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new re(new yo(n.getProvider("auth-internal")),new Io(o,n.getProvider("app-check-internal")),Uo(o,s),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),wr(ys,Es,e),wr(ys,Es,"esm2020")})();export{Wc as a,Kc as b,Oc as c,Tc as d,zc as e,$c as f,Gc as g,Bc as h,Lc as i,Qc as j,jc as k,qc as l,Uc as o,Fc as q,Mc as s,Hc as w};
