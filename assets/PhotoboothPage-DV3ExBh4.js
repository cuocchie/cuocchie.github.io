import{a as e,c as t,i as n,n as r,o as i,s as a,t as o}from"./index-Mq2NiAOo.js";import{i as s,n as c,r as l,t as u}from"./download-DYk0lWWA.js";var d=t(),f=1280,p=11500,m=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),h=e=>(e=m(e),e*e*(3-2*e));function g(e,t=!1){let n=t?p:Number.isFinite(e)?m(e,0,p):0;return{printing:h((n-700)/4500),drop:18*h((n-5050)/450),final:h((n-5700)/1700)}}function _(e,t,n,r,i=.5){if(![e,t,n,r].every(e=>Number.isFinite(e)&&e>0)||!Number.isFinite(i))throw Error(`Invalid photo geometry`);let a=Math.max(n/e,r/t),o=n/a,s=r/a;return{sx:(e-o)/2,sy:Math.max(0,Math.min(t-s,t*i-s/2)),sw:o,sh:s}}function v(e,{boothImage:t,photos:n}){function r(t,n,r,i,a,o,s){e.beginPath(),e.roundRect(t,n,r,i,a),o&&(e.fillStyle=o,e.fill()),s&&(e.strokeStyle=s,e.lineWidth=1.5,e.stroke())}function a(t,n,r,i=24,a=`#49372e`,o=`Arial`,s=`center`,c=!1){e.fillStyle=a,e.font=`${c?`italic `:``}${i}px "${o}"`,e.textAlign=s,e.fillText(t,n,r)}function o(t,n,r,i,o,s,c=8,l=`#68554b`){e.font=`${o}px "Arial"`;let u=t.split(/\s+/),d=[],f=``;for(let t of u){let n=f?f+` `+t:t;e.measureText(n).width>i&&f?(d.push(f),f=t):f=n}return f&&d.push(f),d.slice(0,c).forEach((e,t)=>a(e,n,r+t*s,o,l)),d.length*s}function s(t,n,r,i,o,s=`#793e45`,c=`Cormorant Garamond`,l=!0){for(e.font=`${l?`italic `:``}${o}px "${c}"`;e.measureText(t).width>i&&o>18;)o--,e.font=`${l?`italic `:``}${o}px "${c}"`;a(t,n,r,o,s,c,`center`,l)}function c(t,n,r,i,a,o=0){let{sx:s,sy:c,sw:l,sh:u}=_(t.width,t.height,i,a,[.48,.5,.4,.3][o]);e.drawImage(t,s,c,l,u,n,r,i,a)}function l(t,i,o){let s=(o-26)*.67,l=4*(s+10)+63;e.save(),e.shadowColor=`#31291e33`,e.shadowBlur=18,e.shadowOffsetY=9,r(t,i,o,l,2,`#fffcf5`),e.restore();for(let e=0;e<4;e++)c(n[e],t+13,i+13+e*(s+10),o-26,s,e);return a(`Ngọc Anh & Trọng Đạt`,t+o/2,i+l-30,22,`#793e45`,`Cormorant Garamond`,`center`,!0),a(`A LOVE IN BLOOM`,t+o/2,i+l-12,8,`#94806c`,`Arial`),l}function u(){t&&e.drawImage(t,0,0,720,f)}function d(t,n,c,d=!1){e.clearRect(0,0,720,f),e.fillStyle=`#f5eee4`,e.fillRect(0,0,720,f);for(let t=0;t<f;t+=7)e.fillStyle=t%14==0?`#90734e03`:`#fff8ee08`,e.fillRect(0,t,720,1);let p={...i(c),place:c.venueName,city:c.city},{final:m,printing:h,drop:_}=g(t,d);m<1&&(e.save(),e.globalAlpha=1-m,u(),a(`A LITTLE NOTE, JUST FOR YOU`,360,93,13,`#92796c`,`Arial`),s(n.guest,360,159,580,59),a(`Chúng mình có một lời hẹn…`,360,214,26,`#795e50`,`Cormorant Garamond`,`center`,!0),e.save(),e.beginPath(),e.rect(182,315,356,890),e.clip(),l(235,-388.32000000000005+h*703.32+_,250),e.restore(),e.restore()),m>0&&(e.save(),e.globalAlpha=m,a(`THE WEDDING OF`,360,68,13,`#886b5c`,`Arial`),a(`Ngọc Anh & Trọng Đạt`,360,123,53,`#793e45`,`Cormorant Garamond`,`center`,!0),e.save(),e.translate(48,209),l(0,0,242),e.restore(),r(320,194,356,706,3,`#fffaf2`,`#cdb8a1`),a(`TRÂN TRỌNG KÍNH MỜI`,498,242,12,`#947064`,`Arial`),s(n.guest,498,293,310,43),o(n.message,498,344,291,20,31,7),e.fillStyle=`#d1b69f`,e.fillRect(465,565,66,1),a(p.weekday,498,611,20),a(p.date,498,662,47,`#793e45`,`Cormorant Garamond`),a(`Lễ thành hôn ${p.ceremonyTime}`,498,706,17),a(`Khai tiệc lúc ${p.receptionTime}`,498,736,17),o(p.place,498,788,305,23,31,2),a(p.city,498,854,19,`#806558`),a(`Hẹn bạn trong ngày chung đôi.`,360,1028,33,`#793e45`,`Cormorant Garamond`,`center`,!0),a(`Có bạn, niềm vui sẽ trọn vẹn hơn.`,360,1071,21),e.beginPath(),e.arc(360,1150,31,0,Math.PI*2),e.strokeStyle=`#b58d83`,e.stroke(),a(`N & Đ`,360,1157,24,`#793e45`,`Cormorant Garamond`,`center`,!0),e.restore())}return{render:d}}var y=s.photobooth;function b(e,t){return new Promise((n,r)=>{let i=new Image,a=()=>{i.onload=i.onerror=null,t.removeEventListener(`abort`,o)},o=()=>{a(),i.src=``,r(new DOMException(`Aborted`,`AbortError`))};t.aborted?o():(t.addEventListener(`abort`,o,{once:!0}),i.onload=()=>{a(),n(i)},i.onerror=()=>{a(),r(Error(`Không tải được ảnh thiệp. Hãy tải lại trang để thử lại.`))},i.src=e)})}async function x(e){let[t,...n]=await Promise.all([y[`photobooth-machine`],y[`booth-64295`],y[`booth-64322`],y[`booth-64314`],y[`booth-63519`]].map(t=>b(t,e)));return await l(),{boothImage:t,photos:n}}function S(e){if(window.MediaRecorder&&e.captureStream)return[`video/mp4;codecs=avc1.42E01E`,`video/mp4`,`video/webm;codecs=vp9`,`video/webm;codecs=vp8`,`video/webm`].find(e=>MediaRecorder.isTypeSupported(e))}async function C(e,t,n,r){let i=S(e);if(!i)throw Error(`Trình duyệt này chưa hỗ trợ xuất video. Bạn vẫn có thể tải ảnh thiệp.`);if(n.aborted)throw new DOMException(`Aborted`,`AbortError`);let a,o,s=0,c,l,u,d=[],f=e=>{l=e,cancelAnimationFrame(s),u?.(),o?.state===`recording`&&o.stop()},m=()=>f(new DOMException(`Aborted`,`AbortError`)),h=()=>{document.hidden&&f(Error(`Đã dừng vì trang chuyển sang nền. Hãy giữ trang mở và tạo lại video.`))};n.addEventListener(`abort`,m,{once:!0}),document.addEventListener(`visibilitychange`,h);try{if(navigator.wakeLock)try{c=await navigator.wakeLock.request(`screen`)}catch{}if(n.aborted)throw new DOMException(`Aborted`,`AbortError`);if(document.hidden)throw Error(`Hãy giữ trang mở để tạo video.`);t(0),a=e.captureStream(30),o=new MediaRecorder(a,{mimeType:i,videoBitsPerSecond:45e5});let f=new Promise(e=>{o.ondataavailable=e=>{e.data.size&&d.push(e.data)},o.onstop=()=>{cancelAnimationFrame(s),u?.(),e()},o.onerror=()=>{l=Error(`Không thể ghi video trên trình duyệt này.`),cancelAnimationFrame(s),u?.(),e()}});if(o.start(250),await new Promise(e=>{u=e;let n=performance.now(),i=a=>{if(l){e();return}let o=a-n;t(Math.min(o,p)),r(Math.min(99,Math.round(o/(p+700)*100))),o<12200?s=requestAnimationFrame(i):e()};s=requestAnimationFrame(i)}),o.state===`recording`&&o.stop(),await f,l)throw l;let m=new Blob(d,{type:o.mimeType||i});if(!m.size)throw Error(`Video trống, vui lòng thử lại.`);return r(100),m}finally{cancelAnimationFrame(s),n.removeEventListener(`abort`,m),document.removeEventListener(`visibilitychange`,h),o?.state===`recording`&&o.stop(),a?.getTracks().forEach(e=>e.stop()),c&&await c.release().catch(()=>{})}}function w(){try{let e=JSON.parse(localStorage.getItem(`photobooth-config`)||`null`);if(e&&typeof e.guest==`string`&&(e.side===`bride`||e.side===`groom`)&&typeof e.message==`string`)return{guest:e.guest.slice(0,55),side:e.side,message:e.message.slice(0,220)}}catch{}return{...n}}function T(t){let r=o(),a=(0,d.useRef)(null),s=(0,d.useRef)(null),c=(0,d.useRef)(0),l=(0,d.useRef)(null),f=(0,d.useRef)(!1),[m,h]=(0,d.useState)(()=>t?.invitation||w()),g=(0,d.useRef)(m);g.current=m;let _=t?.event||r[m.side],y=(0,d.useRef)(_);y.current=_;let[b,S]=(0,d.useState)(!1),[T,E]=(0,d.useState)(!1),[D,O]=(0,d.useState)(!1),[k,A]=(0,d.useState)(!1),[j,M]=(0,d.useState)(0),[N,P]=(0,d.useState)(`Đang tải ảnh và font tiếng Việt…`),[F,I]=(0,d.useState)(``),[L,R]=(0,d.useState)(null),[z,B]=(0,d.useState)(null),[V,H]=(0,d.useState)(null),U=(0,d.useRef)(matchMedia(`(prefers-reduced-motion: reduce)`).matches),W=(0,d.useCallback)(e=>{let t=g.current;s.current?.render(e,t,y.current)},[]),G=(0,d.useCallback)(()=>{cancelAnimationFrame(c.current),W(p),O(!1),P(t?``:`Lời mời dành riêng cho bạn.`)},[W,t]);(0,d.useEffect)(()=>{f.current=!0;let e=new AbortController,t=a.current.getContext(`2d`);return t?(x(e.signal).then(n=>{e.signal.aborted||(s.current=v(t,n),W(0),S(!0),P(`Ảnh đã sẵn sàng. Chạm Mở lời mời để nhận dải ảnh.`))}).catch(t=>{e.signal.aborted||(I(t.message),P(`Chưa chuẩn bị được thiệp. Hãy tải lại trang để thử lại.`))}),()=>{f.current=!1,e.abort(),cancelAnimationFrame(c.current),l.current?.abort(),s.current=null}):(I(`Trình duyệt chưa hỗ trợ canvas.`),()=>{f.current=!1})},[W]),(0,d.useEffect)(()=>{let e=matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>{U.current=e.matches,e.matches&&!l.current&&G()};return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[G]),(0,d.useEffect)(()=>{if(!L){B(null);return}let e=URL.createObjectURL(L);return B(e),()=>URL.revokeObjectURL(e)},[L]),(0,d.useEffect)(()=>{if(!b||!T||D||k)return;let e=!1;return a.current?.toBlob(t=>{!e&&f.current&&H(t)},`image/png`),()=>{e=!0}},[b,T,D,k]);let K=(0,d.useCallback)(()=>{if(!s.current||l.current)return;if(cancelAnimationFrame(c.current),H(null),E(!0),I(``),U.current){G();return}O(!0);let e=performance.now(),n=r=>{let i=r-e;W(Math.min(i,p)),i<11500?c.current=requestAnimationFrame(n):(O(!1),P(t?``:`Thiệp đã mở. Bạn có thể tải ảnh hoặc tạo video để lưu và chia sẻ.`))};W(0),c.current=requestAnimationFrame(n)},[W,G,t]),q=e=>{if(t||l.current)return;let r={...e,guest:e.guest.trim().slice(0,55)||n.guest,message:e.message.trim().slice(0,220)||n.message};g.current=r,h(r),R(null),H(null),M(0);try{localStorage.setItem(`photobooth-config`,JSON.stringify(r))}catch{}K()},J=async()=>{if(s.current&&!l.current){E(!0),G();try{let e=await new Promise(e=>a.current.toBlob(e,`image/png`));e?(u(e,`NgocAnh-TrongDat-Thiep.png`),P(`Đã tạo ảnh thiệp 720 × 1280.`)):P(`Chưa tạo được ảnh, hãy thử lại.`)}catch{P(`Chưa tạo được ảnh, hãy thử lại.`)}}},Y=async()=>{if(!V||k)return;let e=new File([V],`NgocAnh-TrongDat-Thiep.png`,{type:`image/png`});try{navigator.share&&navigator.canShare?.({files:[e]})?(await navigator.share({files:[e]}),f.current&&P(`Đã mở bảng chia sẻ. Chọn Instagram hoặc Facebook rồi chọn Story.`)):P(`Trình duyệt chưa chia sẻ được ảnh. Hãy lưu ảnh và đăng Story từ ứng dụng.`)}catch(e){e instanceof Error&&e.name!==`AbortError`&&f.current&&P(`Chưa chia sẻ được ảnh. Hãy lưu ảnh và đăng Story từ ứng dụng.`)}},X=async()=>{if(!s.current||l.current)return;cancelAnimationFrame(c.current),O(!1),E(!0),R(null),M(0),A(!0);let e=new AbortController;l.current=e;try{let t=await C(a.current,W,e.signal,e=>{f.current&&(M(e),P(`Đang tạo video… ${e}%. Giữ trang này mở.`))});f.current&&(R(t),P(`Video đã sẵn sàng (${t.type.includes(`mp4`)?`MP4`:`WebM`}). Bấm Tải video hoặc Chia sẻ video.`))}catch(e){f.current&&(P(e instanceof Error?e.message:`Không thể tạo video.`),M(0))}finally{l.current=null,f.current&&(A(!1),W(p))}},Z=()=>`NgocAnh-TrongDat-${i(_).shortDate.replace(`/`,`-`)}.${L?.type.includes(`mp4`)?`mp4`:`webm`}`;return{canvas:a,config:m,ready:b,opened:T,playing:D,exporting:k,progress:j,status:N,error:F,videoURL:z,imageReady:!!V,play:K,skip:G,png:J,shareImage:Y,applyConfig:q,exportVideo:X,downloadVideo:()=>{L&&u(L,Z())},shareVideo:async()=>{if(!L)return;let e=new File([L],Z(),{type:L.type});try{navigator.share&&navigator.canShare?.({files:[e]})?(await navigator.share({files:[e]}),f.current&&P(`Đã chuyển video đến bảng chia sẻ. Bạn chọn ứng dụng và nơi đăng.`)):P(`Máy này chưa hỗ trợ chia sẻ file. Bấm Tải video, rồi chọn video từ thư viện ảnh để đăng.`)}catch(e){e instanceof Error&&e.name!==`AbortError`&&f.current&&P(`Chưa chia sẻ được. Hãy tải video rồi đăng từ thư viện ảnh.`)}},event:_,summary:e(_)}}var E=r();function D({config:e,disabled:t,apply:n}){let[r,o]=(0,d.useState)(e);return(0,E.jsxs)(`details`,{open:!0,children:[(0,E.jsx)(`summary`,{children:`THỬ CÁ NHÂN HÓA THIỆP`}),(0,E.jsxs)(`form`,{id:`config`,onSubmit:e=>{e.preventDefault(),n(r)},children:[(0,E.jsxs)(`label`,{children:[`Tên / cách gọi khách`,(0,E.jsx)(`input`,{id:`guest`,maxLength:55,value:r.guest,disabled:t,onChange:e=>o({...r,guest:e.target.value})})]}),(0,E.jsxs)(`label`,{children:[`Buổi tiệc`,(0,E.jsx)(`select`,{id:`side`,value:r.side,disabled:t,onChange:e=>o({...r,side:e.target.value}),children:[`bride`,`groom`].map(e=>(0,E.jsxs)(`option`,{value:e,children:[a[e].label,` · `,i(a[e]).shortDate,` ·`,` `,a[e].venueName,`, `,a[e].city]},e))})]}),(0,E.jsxs)(`label`,{children:[`Lời mời riêng`,(0,E.jsx)(`textarea`,{id:`message`,maxLength:220,value:r.message,disabled:t,onChange:e=>o({...r,message:e.target.value})})]}),(0,E.jsx)(`button`,{type:`submit`,disabled:t,style:{marginTop:14},children:`Áp dụng & xem thiệp`})]}),(0,E.jsx)(`p`,{className:`helper`,children:`Bản mẫu lưu tùy chỉnh trên thiết bị này. Chưa kết nối danh sách khách hoặc hệ thống xác nhận tham dự.`})]})}var O=8,k=24,A=4,j=1.3,M=.06,N=2.6,P=1.6,F=[`#120f17`,`#2a0f0a`,`#9a3412`,`#f97316`,`#fed7aa`],I={linear:0,radial:1},L=.2,R=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,z=`#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRamp[8];
uniform int uCount;
uniform int uType;
uniform vec2 uDir;
uniform float uExtent;
uniform float uBands;
uniform float uSoftness;
uniform float uFlow;
uniform float uScale;
uniform float uSilk;
uniform vec4 uStir[24];
uniform float uStirWeight[24];
uniform vec4 uTwirl[4];
uniform vec2 uSeed;
uniform float uContrast;
uniform float uSaturation;
uniform float uSettle;
uniform float uReveal;
in vec2 vUv;
out vec4 outColor;

vec2 hash2(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy) * 2.0 - 1.0;
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash2(i), f);
  float b = dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 drift(vec2 p, float t) {
  vec2 w1 = vec2(
    noise(p * 0.85 + vec2(t * 0.11, t * 0.07)),
    noise(p * 0.85 + vec2(4.1, 1.7) - vec2(t * 0.08, t * 0.12))
  );
  vec2 w2 = vec2(
    noise(p * 1.55 + w1 * 1.8 + vec2(1.3, 7.1) + t * 0.05),
    noise(p * 1.55 + w1 * 1.8 + vec2(6.4, 2.2) - t * 0.06)
  );
  return (w1 - 0.5) * 1.1 + (w2 - 0.5) * 0.55;
}

vec2 warp(vec2 p) {
  vec2 q = p / uScale;
  if (uType == 1) {
    float turn = uTime * 0.35;
    q = mat2(cos(turn), sin(turn), -sin(turn), cos(turn)) * q;
  } else {
    q += vec2(-uDir.y, uDir.x) * uTime * 0.45;
  }
  return p + drift(q + uSeed, uTime) * uFlow * uScale * uSettle;
}

float coord(vec2 p) {
  vec2 w = warp(p);
  return uType == 1 ? 1.0 - length(w) * 1.1 : dot(w, uDir) / uExtent + 0.5;
}

vec3 labToRgb(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  for (int i = 0; i < 24; i++) {
    float w = uStirWeight[i];
    if (w <= 0.0) continue;
    vec2 d = p - uStir[i].xy;
    p -= uStir[i].zw * w * exp(-dot(d, d) / 0.045);
  }
  for (int i = 0; i < 4; i++) {
    float angle = uTwirl[i].z;
    if (angle == 0.0) continue;
    vec2 d = p - uTwirl[i].xy;
    float a = angle * exp(-dot(d, d) / (uTwirl[i].w * uTwirl[i].w));
    float c = cos(a);
    float s = sin(a);
    p = uTwirl[i].xy + mat2(c, -s, s, c) * d;
  }
  float raw = coord(p);
  float s = raw;
  if (uBands > 1.0) {
    s *= uBands;
    float cycle = floor(s);
    s = fract(s);
    if (mod(cycle, 2.0) > 0.5) s = 1.0 - s;
  }
  s = clamp(s, 0.0, 1.0);
  float scaled = s * float(uCount - 1);
  int index = int(min(floor(scaled), float(uCount - 2)));
  float f = scaled - float(index);
  float edge = max(uSoftness * 0.5, fwidth(scaled) * 0.75);
  float shaped = smoothstep(0.5 - edge, 0.5 + edge, f);
  vec3 from = uRamp[0];
  vec3 to = uRamp[1];
  for (int i = 0; i < 7; i++) {
    if (i == index) {
      from = uRamp[i];
      to = uRamp[i + 1];
    }
  }
  vec3 lab = mix(from, to, shaped);
  if (uSilk > 0.0) {
    vec2 grad = vec2(coord(p + vec2(0.004, 0.0)) - raw, coord(p + vec2(0.0, 0.004)) - raw) / 0.004;
    vec2 slope = grad * sin(3.14159265 * clamp(raw, 0.0, 1.0) * uBands) * uSilk * 4.0;
    vec3 normal = normalize(vec3(-slope, 1.0));
    vec3 light = normalize(vec3(-uDir.y, uDir.x, 1.2));
    float diffuse = dot(normal, light) - light.z;
    lab = uRamp[0] + (lab - uRamp[0]) * (1.0 + (diffuse * 0.35 + max(diffuse, 0.0) * diffuse * 0.6) * uSilk);
  }
  lab = mix(uRamp[0], lab, smoothstep(0.0, 1.0, uReveal * 1.5 - length(vUv - 0.5) * 0.6));
  lab.x = (lab.x - 0.55) * uContrast + 0.55;
  lab.yz *= uSaturation;
  outColor = vec4(encode(labToRgb(lab)), 1.0);
}`,B=`#version 300 es
precision highp float;
uniform sampler2D uField;
uniform float uGrain;
uniform float uGrainSize;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

float clump(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec3 color = texture(uField, vUv).rgb;
  vec2 pixel = gl_FragCoord.xy + uFrame * vec2(17.0, 59.0);
  float fine = hash(pixel) + hash(pixel + 7.13) - 1.0;
  float coarse = (clump(pixel / max(uGrainSize, 1.0)) - 0.5) * 2.0;
  float grain = mix(fine, coarse, clamp(uGrainSize - 1.0, 0.0, 1.0) * 0.8);
  float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
  color += grain * uGrain * (0.45 + 2.2 * luma * (1.0 - luma));
  outColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`,V=(e,t,n)=>Math.min(n,Math.max(t,e)),H=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,U=([e,t,n])=>{let r=H(e),i=H(t),a=H(n),o=Math.cbrt(.4122214708*r+.5363325363*i+.0514459929*a),s=Math.cbrt(.2119034982*r+.6806995451*i+.1073969566*a),c=Math.cbrt(.0883024619*r+.2817188376*i+.6299787005*a);return[.2104542553*o+.793617785*s-.0040720468*c,1.9779984951*o-2.428592205*s+.4505937099*c,.0259040371*o+.7827717662*s-.808675766*c]},W=(e,t,n)=>{let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null},G=(e,t)=>{let n=W(e,e.VERTEX_SHADER,R),r=W(e,e.FRAGMENT_SHADER,t),i=e.createProgram();if(!n||!r||!i)return null;if(e.attachShader(i,n),e.attachShader(i,r),e.linkProgram(i),e.deleteShader(n),e.deleteShader(r),!e.getProgramParameter(i,e.LINK_STATUS))return e.deleteProgram(i),null;let a={},o=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let t=0;t<o;t++){let n=e.getActiveUniform(i,t);if(!n)continue;let r=n.name.replace(/\[0\]$/,``);a[r]=e.getUniformLocation(i,r)}return{program:i,uniforms:a}},K=({colors:e=F,type:t=`linear`,angle:n=55,bands:r=1,speed:i=1,flow:a=.8,scale:o=1,softness:s=1,silk:c=.35,grainAmount:l=.08,grainSize:u=1.2,grainAnimated:f=!0,contrast:p=1,saturation:m=1,variation:h=0,interactive:g=!0,stir:_=1,clickSwirl:v=!0,intro:y=!0,lightMode:b=!1,dpr:x,className:S=``,style:C,...w})=>{let T=(0,d.useRef)(null),D=(0,d.useRef)(null),R=(0,d.useRef)(null),H=(Array.isArray(e)&&e.length?e:F).slice(0,O),W={colors:H.length>1?H:[H[0],H[0]],type:I[t]??0,angle:n,bands:V(r,1,8),speed:Math.max(0,i),flow:V(a,0,3),scale:V(o,.25,3),softness:V(s,0,1),silk:V(c,0,1),grainAmount:V(l,0,.5),grainSize:V(u,.5,4),grainAnimated:f,contrast:V(p,.2,2),saturation:V(m,0,2),variation:Math.max(0,h),interactive:g,stir:V(_,0,2),clickSwirl:v,intro:y,lightMode:b,dpr:x},K=(0,d.useRef)(W);return K.current=W,(0,d.useEffect)(()=>{let e=T.current,t=D.current,n=t?.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!e||!t||!n)return;let r=G(n,z),i=G(n,B);if(!r||!i)return;let a=r.uniforms,o=i.uniforms,s=n.createVertexArray(),c=n.createTexture();n.bindTexture(n.TEXTURE_2D,c),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let l=n.createFramebuffer(),u={width:0,height:0},d=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:!0}),f=new Map,p=e=>{let t=String(e),n=f.get(t);if(n)return n;let r=[0,0,0];if(d){d.clearRect(0,0,1,1),d.fillStyle=`#000000`,d.fillStyle=t,d.fillRect(0,0,1,1);let[e,n,i]=d.getImageData(0,0,1,1).data;r=[e/255,n/255,i/255]}return f.set(t,r),r},m=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1,h={width:1,height:1,ratio:1},g=new Float32Array(24),_=new Float32Array(96),v=new Float32Array(k),y=new Float32Array(16),b=[],x=[],S={x:.5,y:.5,sx:.5,sy:.5,vx:0,inside:!1,fresh:!0},C=``,w=0,E=K.current.intro&&!m?0:1,O=0,F=0,I=0,H=0,W=!0,q=()=>{let e=K.current,t=`${e.colors.join(`,`)}|${e.lightMode}`;if(t===C)return;C=t;let n=e.colors.map(e=>U(p(e)));if(!e.lightMode)n.forEach((e,t)=>g.set(e,t*3));else{let e=n.map(([e])=>Math.abs(e-n[0][0])<.1),t=n.filter((t,n)=>!e[n]).reverse();n.forEach((n,r)=>{let[i,a,o]=e[r]?[1,0,0]:t.shift();g.set([i+(1-i)*L,a*.8,o*.8],r*3)})}},J=()=>{let e=K.current,d=h.width/h.height;q(),n.bindVertexArray(s),n.disable(n.BLEND),n.bindFramebuffer(n.FRAMEBUFFER,l),n.viewport(0,0,u.width,u.height),n.useProgram(r.program),n.uniform1f(a.uAspect,d),n.uniform1f(a.uTime,w),n.uniform3fv(a.uRamp,g),n.uniform1i(a.uCount,e.colors.length);let f=e.angle*Math.PI/180;n.uniform1i(a.uType,e.type),n.uniform2f(a.uDir,Math.sin(f),Math.cos(f)),n.uniform1f(a.uExtent,d*Math.abs(Math.sin(f))+Math.abs(Math.cos(f))),n.uniform1f(a.uBands,e.bands),n.uniform1f(a.uSoftness,e.softness),n.uniform1f(a.uFlow,e.flow),n.uniform1f(a.uScale,e.scale),n.uniform1f(a.uSilk,e.silk),n.uniform4fv(a.uStir,_),n.uniform1fv(a.uStirWeight,v),n.uniform4fv(a.uTwirl,y),n.uniform2f(a.uSeed,e.variation*3.17,e.variation*1.91),n.uniform1f(a.uContrast,e.contrast),n.uniform1f(a.uSaturation,e.saturation),n.uniform1f(a.uSettle,E*E*(3-2*E)),n.uniform1f(a.uReveal,E),n.drawArrays(n.TRIANGLES,0,3),n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,t.width,t.height),n.useProgram(i.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,c),n.uniform1i(o.uField,0),n.uniform1f(o.uGrain,e.grainAmount),n.uniform1f(o.uGrainSize,e.grainSize*h.ratio),n.uniform1f(o.uFrame,O),n.drawArrays(n.TRIANGLES,0,3)},Y=()=>{let r=K.current;h.width=Math.max(1,e.clientWidth),h.height=Math.max(1,e.clientHeight),h.ratio=Math.min(r.dpr||window.devicePixelRatio||1,2),t.width=Math.max(1,Math.round(h.width*h.ratio)),t.height=Math.max(1,Math.round(h.height*h.ratio));let i=Math.max(1,Math.round(t.width/2)),a=Math.max(1,Math.round(t.height/2));(i!==u.width||a!==u.height)&&(u.width=i,u.height=a,n.bindTexture(n.TEXTURE_2D,c),n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,i,a,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindFramebuffer(n.FRAMEBUFFER,l),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,c,0),n.bindFramebuffer(n.FRAMEBUFFER,null)),J(),$()},X=(e,t)=>{let n=K.current,r=1-Math.exp(-e/.06),i=S.sx,a=S.sy;S.sx+=(S.x-S.sx)*r,S.sy+=(S.y-S.sy)*r;let o=(S.sx-i)/e*t,s=(S.sy-a)/e;S.vx=o;let c=b[0];if(b.forEach(t=>{t.done&&(t.age+=e)}),n.interactive&&S.inside&&Math.hypot(o,s)>.02&&!m){(!c||c.done)&&(b.unshift({x:0,y:0,vx:0,vy:0,age:0,grow:0,done:!1}),b.length>k&&b.pop());let n=b[0];n.x=(S.sx-.5)*t,n.y=S.sy-.5,n.vx=o,n.vy=s,n.grow=Math.min(1,n.grow+e/M),n.done=n.grow>=1}else c&&(c.done=!0);for(;b.length&&b[b.length-1].age>j;)b.pop();for(let e=0;e<k;e++){let t=b[e];if(!t){v[e]=0;continue}let r=1-t.age/j,i=Math.min(1,2.2/Math.max(Math.hypot(t.vx,t.vy),.001));_.set([t.x,t.y,t.vx*i,t.vy*i],e*4),v[e]=r*r*t.grow*n.stir*.05}for(x.forEach(t=>{t.age+=e});x.length&&x[x.length-1].age>N;)x.pop();for(let e=0;e<A;e++){let t=x[e];if(!t){y[e*4+2]=0;continue}let n=t.age/N,r=Math.min(1,t.age/.18)*(1-n)*(1-n);y.set([t.x,t.y,t.direction*2.4*r,.16+.1*Math.min(1,t.age/.5)],e*4)}},Z=0,Q=e=>{if(I=0,!W||document.hidden)return;if(Z&&e-Z<1e3/30){I=requestAnimationFrame(Q);return}Z=e;let t=K.current,n=H?V((e-H)/1e3,.001,.05):1/60;H=e,m||(w+=n*t.speed*.16),E<1&&(E=Math.min(1,E+n/P)),F+=n,t.grainAnimated&&!m&&F>1/24&&(F=0,O=(O+1)%97),X(n,h.width/h.height),J(),!m&&(t.speed>0||t.grainAnimated)||E<1||b.length>0||x.length>0?I=requestAnimationFrame(Q):H=0};function $(){!I&&W&&!document.hidden&&(I=requestAnimationFrame(Q))}let ee=t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/Math.max(1,n.width),i=1-(t.clientY-n.top)/Math.max(1,n.height);S.inside=r>=0&&r<=1&&i>=0&&i<=1,S.x=r,S.y=i,(S.fresh||!S.inside)&&(S.sx=r,S.sy=i,S.fresh=!1)},te=e=>{ee(e),(S.inside||b.length)&&$()},ne=e=>{ee(e);let t=K.current;S.inside&&t.clickSwirl&&!m&&(x.unshift({x:(S.x-.5)*(h.width/h.height),y:S.y-.5,age:0,direction:S.vx<0?1:-1}),x.length>A&&x.pop(),$())},re=()=>{S.inside=!1},ie=()=>{H=0,$()},ae=new ResizeObserver(Y);ae.observe(e);let oe=new IntersectionObserver(e=>{W=e.some(e=>e.isIntersecting),W&&(H=0,$())});return oe.observe(e),window.addEventListener(`pointermove`,te,{passive:!0}),window.addEventListener(`pointerdown`,ne,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,re),document.addEventListener(`visibilitychange`,ie),Y(),R.current=$,()=>{cancelAnimationFrame(I),R.current=null,ae.disconnect(),oe.disconnect(),window.removeEventListener(`pointermove`,te),window.removeEventListener(`pointerdown`,ne),document.documentElement.removeEventListener(`pointerleave`,re),document.removeEventListener(`visibilitychange`,ie),n.deleteTexture(c),n.deleteFramebuffer(l),n.deleteVertexArray(s),n.deleteProgram(r.program),n.deleteProgram(i.program),n.getExtension(`WEBGL_lose_context`)?.loseContext()}},[]),(0,d.useEffect)(()=>{R.current?.()}),(0,E.jsx)(`div`,{ref:T,className:`grainient-container${S?` ${S}`:``}`,style:C,...w,children:(0,E.jsx)(`canvas`,{ref:D,className:`grainient-canvas`,"aria-hidden":`true`})})};function q({payload:e}){let t=T(e);(0,d.useEffect)(()=>{document.title=`Thiệp mời · Ngọc Anh & Trọng Đạt`;let e=document.createElement(`meta`);return e.name=`robots`,e.content=`noindex,nofollow`,document.head.append(e),()=>e.remove()},[]);let n=!t.ready||t.exporting,r=()=>window.open(t.event.mapsUrl||`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${t.event.venueName} ${t.event.city}`)}`,`_blank`,`noopener,noreferrer`),i=(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(`div`,{className:`stage`,"aria-hidden":!t.opened,children:[(0,E.jsx)(`canvas`,{ref:t.canvas,id:`scene`,width:720,height:f,"aria-label":`Thiệp mời ${t.config.guest}. ${t.summary} ${t.config.message}`}),(0,E.jsx)(`button`,{className:`skip`,id:`skip`,hidden:!t.playing,onClick:t.skip,children:`Xem ngay →`})]}),(0,E.jsxs)(`div`,{className:`cover`,id:`cover`,hidden:t.opened,children:[!t.opened&&(0,E.jsx)(K,{className:`cover-grainient`,"aria-hidden":`true`,colors:[`#f7f0e7`,`#f2e7da`,`#e8c9bd`,`#f7f0e7`],type:`linear`,angle:135,speed:.12,flow:.35,silk:.15,grainAmount:.025,grainAnimated:!1,contrast:.9,saturation:.8,interactive:!1,clickSwirl:!1,intro:!1,dpr:1}),(0,E.jsxs)(`div`,{className:`cover-content`,children:[(0,E.jsx)(`div`,{className:`seal`,"aria-hidden":`true`,children:`N & Đ`}),(0,E.jsx)(`div`,{className:`eyebrow cover-salutation`,children:`Trân trọng kính mời`}),(0,E.jsx)(`h1`,{id:`guest-cover`,children:t.config.guest}),(0,E.jsxs)(`p`,{className:`cover-invitation`,children:[`Tới dự bữa tiệc chung vui`,(0,E.jsx)(`br`,{}),`cùng gia đình chúng tôi`]}),(0,E.jsxs)(`p`,{className:`cover-vow`,children:[(0,E.jsx)(`span`,{className:`cover-vow-kicker`,children:`Chọn nhau`}),(0,E.jsx)(`span`,{className:`cover-vow-highlight`,children:`trọn đời`})]}),(0,E.jsxs)(`button`,{className:`primary cover-open`,id:`open`,disabled:n,onClick:t.play,children:[(0,E.jsx)(`span`,{className:`cover-open-label`,children:t.ready?`Mở thiệp →`:t.error?`Tải lại trang để thử lại`:`Đang chuẩn bị ảnh…`}),t.ready&&(0,E.jsxs)(`span`,{className:`cover-hearts`,"aria-hidden":`true`,children:[(0,E.jsx)(`span`,{}),(0,E.jsx)(`span`,{}),(0,E.jsx)(`span`,{})]})]})]})]})]});return e?(0,E.jsxs)(`main`,{className:`invitation-layout`,children:[i,t.opened&&!t.playing&&(0,E.jsxs)(`section`,{id:`invitation-actions`,className:`invitation-actions`,"aria-label":`Lưu và chia sẻ thiệp`,children:[(0,E.jsxs)(`div`,{className:`invitation-action-grid`,children:[(0,E.jsx)(`button`,{id:`png`,disabled:n,onClick:t.png,children:`Lưu ảnh thiệp`}),(0,E.jsx)(`button`,{id:`share-image`,disabled:n||!t.imageReady,onClick:t.shareImage,children:`Chia sẻ ảnh`}),(0,E.jsx)(`button`,{id:`export`,className:`primary`,disabled:n,onClick:t.exportVideo,children:t.exporting?`Đang tạo video…`:`Tạo video thiệp`}),(0,E.jsx)(`button`,{id:`replay`,disabled:n,onClick:t.play,children:`Xem lại`})]}),t.exporting&&(0,E.jsx)(`div`,{className:`progress`,role:`progressbar`,"aria-label":`Tiến độ tạo video`,"aria-valuenow":t.progress,"aria-valuemin":0,"aria-valuemax":100,children:(0,E.jsx)(`i`,{style:{width:`${t.progress}%`}})}),t.videoURL&&(0,E.jsxs)(`div`,{className:`invitation-action-grid`,children:[(0,E.jsx)(`button`,{id:`download`,onClick:t.downloadVideo,children:`Lưu video`}),(0,E.jsx)(`button`,{id:`share`,onClick:t.shareVideo,children:`Chia sẻ video`})]}),(0,E.jsx)(`p`,{className:`status`,id:`status`,role:`status`,"aria-live":`polite`,children:t.status}),(0,E.jsx)(`p`,{className:`invitation-share-hint`,children:`Chọn Instagram hoặc Facebook trong bảng chia sẻ để đăng Story.`}),(0,E.jsxs)(`div`,{className:`invitation-story`,children:[(0,E.jsx)(`p`,{children:`Mời bạn ghé xem vài khoảnh khắc chúng mình đã đi cùng nhau.`}),(0,E.jsx)(`a`,{id:`story-link`,href:`/`,children:`Xem câu chuyện của chúng mình →`})]})]}),t.error&&(0,E.jsx)(`p`,{id:`error`,role:`alert`,children:t.error})]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(`header`,{className:`top`,children:[(0,E.jsx)(`span`,{className:`brand`,children:`Ngọc Anh & Trọng Đạt`}),(0,E.jsx)(`span`,{className:`badge`,children:`A LITTLE LOVE NOTE`})]}),(0,E.jsxs)(`main`,{className:`layout`,children:[(0,E.jsx)(`div`,{children:i}),(0,E.jsxs)(`section`,{className:`panel`,children:[(0,E.jsx)(`div`,{className:`eyebrow`,children:`Our wedding photobooth`}),(0,E.jsxs)(`h2`,{children:[`Giữ một tấm ảnh.`,(0,E.jsx)(`br`,{}),`Hẹn một ngày vui.`]}),(0,E.jsx)(`p`,{id:`event-summary`,children:t.summary}),(0,E.jsxs)(`p`,{id:`invitation-text`,children:[`Gửi `,t.config.guest,`: `,t.config.message]}),(0,E.jsxs)(`div`,{className:`actions`,children:[(0,E.jsx)(`button`,{id:`replay`,disabled:n,onClick:t.play,children:`Xem lại`}),(0,E.jsx)(`button`,{id:`png`,disabled:n,onClick:t.png,children:`Tải ảnh thiệp`}),(0,E.jsx)(`button`,{className:`primary`,id:`export`,disabled:n,onClick:t.exportVideo,children:`Tạo video thiệp`})]}),(0,E.jsx)(`div`,{className:`progress`,children:(0,E.jsx)(`i`,{id:`bar`,style:{width:`${t.progress}%`}})}),(0,E.jsx)(`p`,{className:`status`,id:`status`,role:`status`,"aria-live":`polite`,children:t.status}),t.videoURL&&(0,E.jsx)(`video`,{id:`video-preview`,className:`export-preview`,src:t.videoURL,controls:!0,playsInline:!0}),(0,E.jsxs)(`div`,{className:`actions`,children:[(0,E.jsx)(`button`,{id:`download`,disabled:!t.videoURL||t.exporting,onClick:t.downloadVideo,children:`Tải video`}),(0,E.jsx)(`button`,{id:`share`,disabled:!t.videoURL||t.exporting,onClick:t.shareVideo,children:`Chia sẻ video`})]}),(0,E.jsxs)(`div`,{className:`tools`,children:[(0,E.jsx)(`button`,{id:`calendar`,disabled:t.exporting,onClick:()=>c(t.event),children:`Lưu lịch`}),(0,E.jsx)(`button`,{id:`map`,disabled:t.exporting,onClick:r,children:`Xem đường đi`})]}),!e&&(0,E.jsx)(D,{config:t.config,disabled:n,apply:t.applyConfig}),(0,E.jsx)(`p`,{className:`helper`,children:`Video tạo trực tiếp trên máy, không có âm thanh. MP4 nếu trình duyệt hỗ trợ; nếu không sẽ xuất WebM. Chia sẻ mở bảng chọn của điện thoại khi được hỗ trợ; bạn chọn ứng dụng và tự đăng Story.`}),(0,E.jsx)(`p`,{id:`error`,role:`alert`,children:t.error})]})]}),(0,E.jsx)(`footer`,{className:`footer`,children:`A LOVE IN BLOOM · 2026`})]})}export{q as default};