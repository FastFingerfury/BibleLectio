import{m as K,f as Y,Q,S as M}from"./index-CvJx664O.js";const f=[{id:"John.8.12",ref:"John 8:12",n:12,parts:[["Then spake Jesus again unto them, saying, "],["I am the light of the world: he that followeth me shall not walk in darkness…",1]]},{id:"John.3.16",ref:"John 3:16",n:16,parts:[["For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."]]},{id:"Jer.29.11",ref:"Jeremiah 29:11",n:11,parts:[["For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end."]]},{id:"Phil.4.13",ref:"Philippians 4:13",n:13,parts:[["I can do all things through Christ which strengtheneth me."]]},{id:"Rom.8.28",ref:"Romans 8:28",n:28,parts:[["And we know that all things work together for good to them that love God, to them who are the called according to his purpose."]]},{id:"Prov.3.5",ref:"Proverbs 3:5",n:5,parts:[["Trust in the LORD with all thine heart; and lean not unto thine own understanding."]]},{id:"Isa.41.10",ref:"Isaiah 41:10",n:10,parts:[["Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness."]]},{id:"Josh.1.9",ref:"Joshua 1:9",n:9,parts:[["Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest."]]},{id:"Rom.12.2",ref:"Romans 12:2",n:2,parts:[["And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."]]},{id:"Ps.23.1",ref:"Psalm 23:1",n:1,parts:[["The LORD is my shepherd; I shall not want."]]},{id:"Matt.11.28",ref:"Matthew 11:28",n:28,parts:[["Come unto me, all ye that labour and are heavy laden, and I will give you rest.",1]]}],U=6e3,C="#eab308",I="#f2eee6",_=a=>Math.min(1,Math.sqrt(110/a.parts.reduce((e,s)=>e+s[0].length,0))).toFixed(3),P=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;");function w(a){let e=`<span class="a-w a-vn" data-k="#n">${a.n}</span>`;for(const[s,t]of a.parts)for(const i of s.match(/\S+\s*/g))e+=`<span class="a-w${t?" g":""}" data-k="${P(i.toLowerCase().replace(/[^a-z]/g,""))}">${P(i)}</span>`;return e}function L(a,e){const s=a.parts.some(t=>t[1]);return`<a href="${e}r/KJV/${a.id}">${a.ref}</a> · King James Version${s?"<br>Jesus’s words in gold":""}`}const $=(a,e,s)=>a.animate(e,{fill:"both",...s}).finished.catch(()=>{});function V(a,e,s){const t=a.cloneNode(!1);return t.style.cssText=`position:absolute;visibility:hidden;left:0;top:0;width:${s}px;margin:0;min-height:0;--fit:${_(e)}`,t.innerHTML=w(e),a.parentNode.appendChild(t),t}function Z(a,e){const s=a.getBoundingClientRect().width,t=Math.max(...f.map(i=>{const o=V(a,i,s),l=o.getBoundingClientRect().height;return o.remove(),l}));a.style.minHeight=`${Math.ceil(Math.max(t,e))}px`}async function X(a,e,s,t,i){const o=[...a.querySelectorAll(".a-w")];if(i){a.style.setProperty("--fit",_(s)),a.innerHTML=w(s),e.innerHTML=L(s,t);return}const l=a.getBoundingClientRect(),n=o.map(p=>p.getBoundingClientRect()),d=V(a,s,l.width),u=d.getBoundingClientRect(),r=[...d.querySelectorAll(".a-w")],c=new Set,b=[];o.forEach((p,v)=>{if(!p.dataset.k)return;const m=r.findIndex((y,B)=>!c.has(B)&&y.dataset.k===p.dataset.k);m>=0&&(c.add(m),b.push([v,m]))});const W=new Set(b.map(p=>p[0])),x=[];o.forEach((p,v)=>{W.has(v)||x.push($(p,[{opacity:1,filter:"blur(0)"},{opacity:0,filter:"blur(6px)",transform:"translateY(-10px)"}],{duration:450,delay:v%9*18,easing:"ease-in"}))}),b.forEach(([p,v])=>{const m=n[p],y=r[v].getBoundingClientRect(),B=y.left-u.left-(m.left-l.left),N=y.top-u.top-(m.top-l.top),A=o[p].classList.contains("g")?C:o[p].classList.contains("a-vn")?null:I,z=r[v].classList.contains("g")?C:r[v].classList.contains("a-vn")?null:I,S=`translate(${B}px,${N}px) scale(${y.height/m.height})`,G=A?[{transform:"none",color:A},{transform:S,color:z}]:[{transform:"none"},{transform:S}];x.push($(o[p],G,{duration:900,delay:250,easing:"cubic-bezier(.65,0,.25,1)"}))}),e.style.opacity="0",await Promise.all(x),d.remove(),a.style.setProperty("--fit",_(s)),a.innerHTML=w(s);const F=new Set(b.map(p=>p[1]));a.querySelectorAll(".a-w").forEach((p,v)=>{F.has(v)||$(p,[{opacity:0,filter:"blur(6px)",transform:"translateY(12px)"},{opacity:1,filter:"blur(0)",transform:"none"}],{duration:600,delay:40+v*22,easing:"cubic-bezier(.2,.8,.2,1)"})}),e.innerHTML=L(s,t),e.style.opacity="1"}function aa(a,e){const s=a.querySelector(".a-verse"),t=a.querySelector(".a-ref"),i=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let o=0;const l=s.getBoundingClientRect().height,n=()=>{if(a.clientWidth===o)return;o=a.clientWidth,s.classList.remove("is-turning"),s.style.width="",s.style.minHeight="";const c=s.getBoundingClientRect();s.style.width=`${c.width}px`,s.classList.add("is-turning"),Z(s,l)};s.style.setProperty("--fit",_(f[0])),s.innerHTML=w(f[0]),n(),new ResizeObserver(n).observe(a),t.classList.add("is-turning"),t.innerHTML=L(f[0],e);let d=0,u=!1;a.addEventListener("pointerenter",()=>u=!0),a.addEventListener("pointerleave",()=>u=!1);const r=async()=>{if(u||document.hidden){setTimeout(r,500);return}d=(d+1)%f.length,await X(s,t,f[d],e,i),setTimeout(r,U)};setTimeout(r,0)}const j=[{key:"dial",slug:"cross-dial",name:"The cross dial",line:"Everything for a verse, under your finger.",about:"the cross dial"},{key:"voices",slug:"who-is-speaking",name:"Who is speaking",line:"Every speaker in a colour of their own.",about:"who is speaking"},{key:"write",slug:"write-in-it",name:"Write in it",line:"Notes under any verse with Apple Pencil.",about:"writing in it"},{key:"library",slug:"library",name:"Your library",line:"The verses that stop you, in folders.",about:"your library"},{key:"words",slug:"your-words",name:"Your words",line:"A dictionary of your own, in the Bible.",about:"your words"},{key:"map",slug:"map",name:"The map",line:"1,335 Bible places on a painted map.",about:"the map"}],h=a=>j.find(e=>e.key===a),O=K(Y("reading").mark,"currentColor",' aria-hidden="true"'),E='<svg class="f-ink" viewBox="0 0 60 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2.04,4.75 Q4.81,4.83 6.00,4.81 T8.30,4.77 10.51,4.72 12.67,4.67 14.82,4.62 16.97,4.57 19.11,4.51 21.25,4.44 23.39,4.38 25.53,4.30 27.67,4.23 29.80,4.15 31.94,4.06 34.08,3.98 36.22,3.89 38.37,3.80 40.51,3.70 42.66,3.60 44.82,3.51 46.97,3.42 49.10,3.30 51.22,3.11 53.37,2.89 56.13,2.58 58.01,2.37 58.40,2.44 58.75,2.63 59.01,2.92 59.17,3.28 59.21,3.67 59.12,4.05 58.92,4.39 58.62,4.64 58.25,4.78 57.86,4.80 57.48,4.69 57.16,4.46 56.92,4.15 56.80,3.77 56.80,3.38 56.93,3.01 57.17,2.70 57.50,2.48 57.88,2.38 58.27,2.41 58.64,2.56 58.93,2.81 59.13,3.15 59.21,3.54 59.17,3.93 59.00,4.28 58.73,4.57 58.38,4.75 58.19,4.81 56.52,5.11 53.78,5.64 51.62,6.08 49.43,6.48 47.25,6.81 45.10,7.08 42.95,7.33 40.79,7.56 38.63,7.78 36.47,7.97 34.30,8.14 32.13,8.29 29.96,8.40 27.79,8.48 25.62,8.53 23.45,8.55 21.28,8.54 19.11,8.50 16.95,8.44 14.78,8.36 12.61,8.25 10.43,8.12 8.22,7.97 5.92,7.81 3.35,7.69 1.79,7.62 1.45,7.53 1.15,7.36 0.90,7.12 0.71,6.83 0.59,6.51 0.56,6.16 0.61,5.82 0.74,5.50 0.95,5.22 1.22,4.99 1.53,4.84 1.87,4.77 Z"/></svg>',H='<svg class="f-nav__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';function sa({base:a,app:e,here:s,feature:t=null}){const i=n=>n===s?" is-here":"",o=n=>n===s?E:"",l=j.map(n=>`<a${n.key===t?' class="is-here"':""} href="${a}${n.slug}/"><b>${n.name}${n.key===t?E:""}</b><span>${n.line}</span></a>`).join("");return`<header class="a-top">
      <a class="a-brand" href="${a}">${O}BibleLectio</a>
      <nav class="f-nav" aria-label="BibleLectio">
        <a class="f-nav__link${i("home")}" href="${a}">Home${o("home")}</a>
        <button class="f-nav__link f-nav__menu${i("features")}" type="button" aria-expanded="false">Features${H}${o("features")}</button>
        <a class="f-nav__link${i("bible")}" href="${a}kjv/">Bible${o("bible")}</a>
        <a class="f-nav__link${i("topics")}" href="${a}topics/">Topics${o("topics")}</a>
        <a class="a-mini" href="${e}">Open the app</a>
        <button class="f-nav__burger" type="button" aria-label="Menu" aria-expanded="false"><i></i><i></i></button>
        <div class="f-menu">
          <a class="f-menu__top${i("home")}" href="${a}"><b>Home${o("home")}</b></a>
          <button class="f-menu__top f-menu__fold${i("features")}" type="button" aria-expanded="false"><b>Features${H}${o("features")}</b></button>
          <div class="f-menu__six"><div><small>Features</small>${l}</div></div>
          <a class="f-menu__top${i("bible")}" href="${a}kjv/"><b>Bible${o("bible")}</b><span>The King James Version, all 66 books.</span></a>
          <a class="f-menu__top${i("topics")}" href="${a}topics/"><b>Topics${o("topics")}</b><span>Bible verses for 69 topics, from worry to marriage.</span></a>
        </div>
      </nav>
    </header>`}function ea({base:a,app:e}){return`<footer class="f-foot">
      <div class="f-foot__about"><a class="a-brand" href="${a}">${O}BibleLectio</a><p>A Bible app for reading and studying God's Word, on your phone, your iPad and your computer.</p></div>
      <nav class="f-foot__links" aria-label="More of BibleLectio"><a href="${a}">Home</a><a href="${a}kjv/">Bible</a><a href="${a}topics/">Topics</a><a href="${a}#questions">Questions people ask</a><a href="${e}">Open the app</a></nav>
    </footer>`}function ta(a){a.addEventListener("click",e=>{var o;const s=a.querySelector(".living");if(!s)return;const t=e.target.closest(".f-menu__fold");if(t){t.setAttribute("aria-expanded",String(t.getAttribute("aria-expanded")!=="true"));return}if(e.target.closest(".f-nav__burger, .f-nav__menu")){const l=!s.classList.contains("f--menu"),n=s.querySelector(".a-top");n&&s.style.setProperty("--menu-top",`${Math.max(0,n.getBoundingClientRect().bottom)}px`),s.classList.toggle("f--menu",l),s.querySelectorAll(".f-nav__burger, .f-nav__menu").forEach(d=>d.setAttribute("aria-expanded",String(l))),(o=s.querySelector(".f-menu__fold"))==null||o.setAttribute("aria-expanded","false")}else(e.target.closest(".f-menu a")||!e.target.closest(".f-menu"))&&(s.classList.remove("f--menu"),s.querySelectorAll(".f-nav__burger, .f-nav__menu").forEach(l=>l.setAttribute("aria-expanded","false")))})}const g=a=>String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),ia=`
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <symbol id="i-plus" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol>
  <symbol id="i-book" viewBox="0 0 24 24"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></symbol>
  <symbol id="i-brain" viewBox="0 0 24 24"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></symbol>
  <symbol id="i-link" viewBox="0 0 24 24"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></symbol>
  <symbol id="i-colour" viewBox="0 0 24 24"><path d="M6.5 15.5 12 3.5l5.5 12"/><path d="M8.6 11h6.8"/><rect x="3" y="18.5" width="6" height="3" rx="1.5" fill="#F2555A" stroke="none"/><rect x="15" y="18.5" width="6" height="3" rx="1.5" fill="#4D9EF5" stroke="none"/><rect x="7.5" y="18.5" width="4.5" height="3" fill="#E8C84A" stroke="none"/><rect x="12" y="18.5" width="4.5" height="3" fill="#5CC96B" stroke="none"/></symbol>
  <symbol id="i-bookmark" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></symbol>
  <symbol id="i-underline" viewBox="0 0 24 24"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20" stroke="#e6a13c"/></symbol>
  <symbol id="i-many" viewBox="0 0 24 24"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/><path d="M12 7v6"/><path d="M15 10H9"/></symbol>
  <symbol id="i-send" viewBox="0 0 24 24"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></symbol>
  <symbol id="i-dict" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></symbol>
  <symbol id="i-linked" viewBox="0 0 24 24"><path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/></symbol>
  <symbol id="i-copy" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></symbol>
  <symbol id="i-share" viewBox="0 0 24 24"><path d="M12 2v13"/><path d="m16 6-4-4-4 4"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/></symbol>
  <symbol id="i-pen" viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></symbol>
  <symbol id="i-marker" viewBox="0 0 24 24"><path d="m9 11-6 6v3h9l3-3"/><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"/></symbol>
  <symbol id="i-eraser" viewBox="0 0 24 24"><path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"/><path d="m5.082 11.09 8.828 8.828"/></symbol>
  <symbol id="i-undo" viewBox="0 0 24 24"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/></symbol>
  <symbol id="i-folder" viewBox="0 0 24 24"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></symbol>
</svg>`,D={dial:(a,{dial:e})=>`
<div class="a-scr${a("dial")}" data-screen="dial">
  <div class="a-app"><span class="a-app__time">9:41</span><span class="a-app__pill">John 8</span>
    <div class="a-app__text">
      <p><span class="n">11</span>She said, No man, Lord. And Jesus said unto her, <span style="color:var(--gold)">Neither do I condemn thee: go, and sin no more.</span></p>
      <p><span class="n">12</span>Then spake Jesus again unto them, saying, <span style="color:var(--gold)">I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.</span></p>
      <p><span class="n">13</span>The Pharisees therefore said unto him, Thou bearest record of thyself; thy record is not true.</p>
      <p><span class="n">14</span>Jesus answered and said unto them, <span style="color:var(--gold)">Though I bear record of myself, yet my record is true: for I know whence I came, and whither I go…</span></p>
    </div>
    <div class="a-app__foot"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-clock"/></svg><span>Psalms 23</span><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-book"/></svg></div>
  </div>
  <div class="a-sdial" data-state="${e}"><div class="a-sdial__dim"></div><div class="a-sdial__hub">
    <svg class="a-sdial__arcs" viewBox="-80 -80 160 160"><g class="a-arc-book"><path pathLength="1" d="M0 66A66 66 0 0 1-57.16 33"/><path pathLength="1" d="M0 66A66 66 0 0 0 57.16 33"/></g><g class="a-arc-brain"><path pathLength="1" d="M0-66A66 66 0 0 0-57.16-33"/><path pathLength="1" d="M0-66A66 66 0 0 1 57.16-33"/></g><g class="a-arc-link"><path pathLength="1" d="M-66 0A66 66 0 0 1-33-57.16"/><path pathLength="1" d="M-66 0A66 66 0 0 0-33 57.16"/></g><g class="a-arc-colour"><path pathLength="1" d="M66 0A66 66 0 0 0 33-57.16"/><path pathLength="1" d="M66 0A66 66 0 0 1 33 57.16"/></g></svg>
    <span class="a-sp a-sp--brain"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-brain"/></svg><span class="a-sdial__name">Add verse</span></span></span>
    <span class="a-sp a-sp--link"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-link"/></svg><span class="a-sdial__name">Link verse</span></span></span>
    <span class="a-sp a-sp--colour"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-colour"/></svg><span class="a-sdial__name">Colour</span></span></span>
    <span class="a-sp a-sp--book"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-bookmark"/></svg><span class="a-sdial__name">Bookmark verse</span></span></span>
    <span class="a-sp a-sp--send"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-send"/></svg><span class="a-sdial__name">Send verse to</span></span></span>
    <span class="a-sp a-sp--dict"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-dict"/></svg><span class="a-sdial__name">Dictionary</span></span></span>
    <span class="a-sp a-sp--pin"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-pin"/></svg><span class="a-sdial__name">Pin verse</span></span></span>
    <span class="a-sp a-sp--linked"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-linked"/></svg><span class="a-sdial__name">Linked</span></span></span>
    <span class="a-sp a-sp--share"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-share"/></svg><span class="a-sdial__name">Share verse</span></span></span>
    <span class="a-sp a-sp--copy"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-copy"/></svg><span class="a-sdial__name">Copy verse</span></span></span>
    <span class="a-sp a-sp--under"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-underline"/></svg><span class="a-sdial__name">Underline</span></span></span>
    <span class="a-sp a-sp--many"><i></i><span class="a-sdial__c"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-many"/></svg><span class="a-sdial__name">Many bookmarks</span></span></span>
    <span class="a-sdial__press"></span>
  </div></div>
</div>`,voices:a=>`
<div class="a-scr${a("voices")}" data-screen="voices">
  <div class="a-app"><span class="a-app__time">9:41</span><span class="a-app__pill">Matthew 16</span>
    <div class="a-chips2"><span><i style="background:var(--gold)"></i>Jesus</span><span><i style="background:var(--teal)"></i>Peter</span></div>
    <div class="a-app__text">
      <p><span class="n">15</span>He saith unto them, <span class="a-vj">But whom say ye that I am?</span></p>
      <p><span class="n">16</span>And Simon Peter answered and said, <span class="a-vp">Thou art the Christ, the Son of the living God.</span></p>
      <p><span class="n">17</span>And Jesus answered and said unto him, <span class="a-vj">Blessed art thou, Simon Barjona: for flesh and blood hath not revealed it unto thee, but my Father which is in heaven.</span></p>
      <p><span class="n">18</span><span class="a-vj">And I say also unto thee, That thou art Peter, and upon this rock I will build my church…</span></p>
    </div>
    <div class="a-app__foot"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-clock"/></svg><span>John 8</span><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-book"/></svg></div>
  </div>
</div>`,write:a=>`
<div class="a-scr${a("write")}" data-screen="write">
  <div class="a-app"><span class="a-app__time">9:41</span><span class="a-app__pill">Psalms 23</span>
    <div class="a-app__text" style="padding-right:56px">
      <p><span class="n">1</span>The LORD is my shepherd; I shall not want.</p>
      <div><p class="a-ink">He leads. I follow.</p><p class="a-ink">→ John 10:11</p></div>
      <p><span class="n">2</span>He maketh me to lie down in green pastures: he leadeth me beside the still waters.</p>
      <p><span class="n">3</span>He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.</p>
    </div>
    <div class="a-tools"><span class="on"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-pen"/></svg></span><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-marker"/></svg><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-eraser"/></svg><i style="background:var(--orange)"></i><i style="background:#4d9ef5"></i><i style="background:#5cc96b"></i><i style="background:#ece7dd"></i><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-undo"/></svg></div>
    <div class="a-app__foot"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-clock"/></svg><span>John 10</span><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-book"/></svg></div>
  </div>
</div>`,library:a=>`
<div class="a-scr${a("library")}" data-screen="library">
  <div class="a-app"><span class="a-app__time">9:41</span><svg class="a-ico a-lib__brain" viewBox="0 0 24 24"><use href="#i-brain"/></svg>
    <div class="a-lib">
      <div class="a-lib__folder"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-folder"/></svg>Light<span class="pin"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-pin"/></svg></span></div>
      <div class="a-lib__open"><div class="a-lib__row"><svg class="a-ico" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>John 8:12 <small>KJV</small></div><p>Then spake Jesus again unto them, saying, I am the light of the world: he that followeth me shall not walk in darkness…</p><em>+ Add links</em></div>
      <div class="a-lib__row"><svg class="a-ico" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>Psalms 119:105</div>
      <div class="a-lib__row"><svg class="a-ico" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>John 1:5</div>
      <div class="a-lib__row"><svg class="a-ico" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>Matthew 5:14</div>
      <div class="a-lib__folder" style="margin-top:10px"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-folder"/></svg>Comfort</div>
      <div class="a-lib__row"><svg class="a-ico" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>Psalms 23:1</div>
      <div class="a-lib__row"><svg class="a-ico" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>Matthew 11:28</div>
    </div>
    <div class="a-app__foot"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-clock"/></svg><svg class="a-ico" viewBox="0 0 24 24" style="margin-left:auto"><use href="#i-book"/></svg></div>
  </div>
</div>`,words:a=>`
<div class="a-scr${a("words")}" data-screen="words">
  <div class="a-app"><span class="a-app__time">9:41</span><span class="a-app__pill">John 8</span>
    <div class="a-app__text">
      <p><span class="n">12</span>Then spake Jesus again unto them, saying, <span style="color:var(--gold)">I am the <span class="a-mine">light</span> of the world: he that followeth me shall not walk in darkness…</span></p>
      <p style="margin-top:176px"><span class="n">13</span>The Pharisees therefore said unto him, Thou bearest record of thyself; thy record is not true.</p>
      <p><span class="n">14</span>Jesus answered and said unto them, <span style="color:var(--gold)">Though I bear record of myself, yet my record is true…</span></p>
    </div>
    <div class="a-dgc2" style="top:190px"><b>light</b><p>What shows the way, and what Jesus says he is.</p><small>in My Words · 4 verses</small><div class="vv"><span>Psalms 119:105</span><span>John 1:5</span><span>Matthew 5:14</span></div><div class="go"><span>+ Add this verse</span><span>Open in My Words</span></div></div>
    <div class="a-app__foot"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-clock"/></svg><span>Psalms 119</span><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-book"/></svg></div>
  </div>
</div>`,map:(a,{BASE:e})=>`
<div class="a-scr${a("map")}" data-screen="map">
  <div class="a-smap"><div class="a-smap__land" style="--map: url('${e}screens/levant.webp')"></div>
    <span class="a-smap__pin" style="left:144px;top:252px">Jerusalem</span>
    <span class="a-smap__pin" style="left:187px;top:170px">Damascus</span>
    <div class="a-smap__top"><span>‹ John 8</span><span><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-search"/></svg></span></div>
    <div class="a-smap__card"><b>Jerusalem</b><small>City · named in 955 verses</small><em>READ IN THE BIBLE</em></div>
  </div>
  <span class="a-app__time">9:41</span>
</div>`};function oa(a,{base:e,dial:s="rest",lit:t=a}={}){const i=o=>o===t?" is-on":"";return D[a](i,{dial:s,BASE:g(e)})}const na=({base:a})=>Object.keys(D).map(e=>oa(e,{base:a,lit:"dial"})).join(`

`),la=({base:a,app:e,note:s=null})=>{const t=g(a),i=g(e);return`<div class="living a">
  <div class="a-wrap">
    ${s?`<p class="a-notice">${g(s)}</p>`:""}${sa({base:t,app:i,here:"home"})}
    <section class="a-hero">
      <div class="a-stage">
        <p class="a-verse"><span class="a-num">12</span>Then spake Jesus again unto them, saying, <span class="j">I am the <span class="a-held">light</span> of the world: he that followeth me shall not walk in darkness…</span></p>
        <p class="a-ref">John 8:12 · King James Version<br>Jesus's words in gold</p>
        <div class="a-dial" aria-hidden="true"><svg class="a-dial__arc" viewBox="-1 -1 2 2"><path pathLength="1" d="M0 1A1 1 0 0 1-.866.5"/><path pathLength="1" d="M0 1A1 1 0 0 0 .866.5"/></svg><div class="a-spoke" style="--a1:-90deg;--a2:-90deg;--o2:.3"><i></i><span class="a-c"><span class="a-c__in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></svg><span class="a-name a-name--1 a-name--above">Add verse</span></span></span></div><div class="a-spoke" style="--a1:180deg;--a2:210deg;--o2:.3"><i></i><span class="a-c"><span class="a-c__in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg><span class="a-name a-name--1">Link</span></span></span></div><div class="a-spoke" style="--a1:0deg;--a2:-30deg;--o2:.3"><i></i><span class="a-c"><span class="a-c__in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 15.5 12 3.5l5.5 12"/><path d="M8.6 11h6.8"/><rect x="3" y="18.5" width="6" height="3" rx="1.5" fill="#F2555A" stroke="none"/><rect x="15" y="18.5" width="6" height="3" rx="1.5" fill="#4D9EF5" stroke="none"/><rect x="7.5" y="18.5" width="4.5" height="3" fill="#E8C84A" stroke="none"/><rect x="12" y="18.5" width="4.5" height="3" fill="#5CC96B" stroke="none"/></svg><span class="a-name a-name--1">Colour</span></span></span></div><div class="a-spoke a-spoke--late" style="--a1:90deg;--a2:150deg;--o2:1"><span class="a-c"><span class="a-c__in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20" stroke="#e6a13c"/></svg></span></span></div><div class="a-spoke a-spoke--late" style="--a1:90deg;--a2:30deg;--o2:1"><span class="a-c"><span class="a-c__in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/><path d="M12 7v6"/><path d="M15 10H9"/></svg></span></span></div><div class="a-spoke a-spoke--hot" style="--a1:90deg;--a2:90deg;--o2:1"><i></i><span class="a-c"><span class="a-c__in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg><span class="a-name a-name--all a-name--far">Bookmark verse</span></span></span></div><span class="a-tap"></span></div>
      </div>
      <h1 class="a-h1">Built to be the best Bible app there is.</h1>
      <p class="a-sub">The ultimate way to read and study God's Word. On your phone, your iPad and your computer.</p>
      <div class="a-acts"><a class="a-btn a-btn--go" href="${i}">Open BibleLectio</a><span class="a-btn a-btn--soon">Coming to the App Store</span></div>
      <p class="a-note">Nothing to install, nothing to sign up for. Sign in only to carry your library to every device.</p>
    </section>
    <section class="a-look" data-mode="rest">
      <h2>What makes this Bible app different.</h2>
      <div class="a-look__stage">
        <div class="a-look__list a-feats">
            <button class="a-pill a-feat" type="button" data-feature="dial"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-plus"/></svg><span class="a-pill__name">The cross dial</span></button>
            <button class="a-pill a-feat" type="button" data-feature="voices"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-plus"/></svg><span class="a-pill__name">Who is speaking</span></button>
            <button class="a-pill a-feat" type="button" data-feature="write"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-plus"/></svg><span class="a-pill__name">Write in it</span></button>
            <button class="a-pill a-feat" type="button" data-feature="library"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-plus"/></svg><span class="a-pill__name">Your library</span></button>
            <button class="a-pill a-feat" type="button" data-feature="words"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-plus"/></svg><span class="a-pill__name">Your words</span></button>
            <button class="a-pill a-feat" type="button" data-feature="map"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-plus"/></svg><span class="a-pill__name">The map</span></button>
        </div>
        <div class="a-look__list a-opts" aria-label="Inside the cross dial">
            <button class="a-pill a-opt" type="button" data-state="brain" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-brain"/></svg><span class="a-pill__name">Add verse</span></button>
            <button class="a-pill a-opt" type="button" data-state="link" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-link"/></svg><span class="a-pill__name">Link verse</span></button>
            <button class="a-pill a-opt" type="button" data-state="colour" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-colour"/></svg><span class="a-pill__name">Colour</span></button>
            <button class="a-pill a-opt" type="button" data-state="book" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-bookmark"/></svg><span class="a-pill__name">Bookmark verse</span></button>
            <button class="a-pill a-three" type="button" data-group="brain" data-hot="brain" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-brain"/></svg><span class="a-pill__name">Add verse</span></button>
            <button class="a-pill a-three" type="button" data-group="brain" data-hot="send" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-send"/></svg><span class="a-pill__name">Send verse to</span></button>
            <button class="a-pill a-three" type="button" data-group="brain" data-hot="dict" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-dict"/></svg><span class="a-pill__name">Dictionary</span></button>
            <button class="a-pill a-three" type="button" data-group="link" data-hot="pin" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-pin"/></svg><span class="a-pill__name">Pin verse</span></button>
            <button class="a-pill a-three" type="button" data-group="link" data-hot="link" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-link"/></svg><span class="a-pill__name">Link verse</span></button>
            <button class="a-pill a-three" type="button" data-group="link" data-hot="linked" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-linked"/></svg><span class="a-pill__name">Linked</span></button>
            <button class="a-pill a-three" type="button" data-group="colour" data-hot="share" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-share"/></svg><span class="a-pill__name">Share verse</span></button>
            <button class="a-pill a-three" type="button" data-group="colour" data-hot="colour" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-colour"/></svg><span class="a-pill__name">Colour</span></button>
            <button class="a-pill a-three" type="button" data-group="colour" data-hot="copy" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-copy"/></svg><span class="a-pill__name">Copy verse</span></button>
            <button class="a-pill a-three" type="button" data-group="book" data-hot="under" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-underline"/></svg><span class="a-pill__name">Underline</span></button>
            <button class="a-pill a-three" type="button" data-group="book" data-hot="book" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-bookmark"/></svg><span class="a-pill__name">Bookmark verse</span></button>
            <button class="a-pill a-three" type="button" data-group="book" data-hot="many" aria-pressed="false"><svg class="a-ico" viewBox="0 0 24 24"><use href="#i-many"/></svg><span class="a-pill__name">Many bookmarks</span></button>
        </div>
        <div class="a-info">
          <div class="a-info__item" data-info="dial"><h3><span class="a-kick">The heart of BibleLectio</span>The cross dial.</h3><p>Hold any verse and everything you can do with it opens under your finger: save it to your library, link it to another verse, colour its words or bookmark it. Tap a circle to look inside.</p><a class="a-more" href="${t}${h("dial").slug}/">Learn more about ${h("dial").about} ›</a></div>
          <div class="a-info__item" data-info="voices"><h3>Who is speaking.</h3><p>Every speaker in the King James Bible in a colour of their own, the whole way through. God and Jesus in gold, angels in blue.</p><a class="a-more" href="${t}${h("voices").slug}/">Learn more about ${h("voices").about} ›</a></div>
          <div class="a-info__item" data-info="write"><h3>Write in it.</h3><p>Take notes right under any verse: write with an Apple Pencil, or tap and type, on iPad, iPhone or computer.</p><a class="a-more" href="${t}${h("write").slug}/">Learn more about ${h("write").about} ›</a></div>
          <div class="a-info__item" data-info="library"><h3>Your library.</h3><p>Save the verses that stop you into folders of your own, then pin and link them. Your library goes with you to every device.</p><a class="a-more" href="${t}${h("library").slug}/">Learn more about ${h("library").about} ›</a></div>
          <div class="a-info__item" data-info="words"><h3>Your words.</h3><p>Keep the words you are studying, each with its meaning from a real dictionary. Tap one in any verse to see what it means and the verses you keep it with.</p><a class="a-more" href="${t}${h("words").slug}/">Learn more about ${h("words").about} ›</a></div>
          <div class="a-info__item" data-info="map"><h3>The map.</h3><p>1,335 Bible places on a painted map of the Bible's world. Tap one to read every verse that names it.</p><a class="a-more" href="${t}${h("map").slug}/">Learn more about ${h("map").about} ›</a></div>
          <div class="a-info__item" data-info="c-brain"><h3>Add verse.</h3><p>Everything that goes into your library. Slide up to the brain and it opens in three. Tap one to see what it does.</p></div>
          <div class="a-info__item" data-info="c-link"><h3>Link verse.</h3><p>Everything that joins verses together. Slide left to the link and it opens in three. Tap one to see what it does.</p></div>
          <div class="a-info__item" data-info="c-colour"><h3>Colour.</h3><p>How the words look, and passing them on. Slide right to the colour and it opens in three. Tap one to see what it does.</p></div>
          <div class="a-info__item" data-info="c-book"><h3>Bookmark verse.</h3><p>Keeping your place, and marking the words. Slide down to the bookmark and it opens in three. Tap one to see what it does.</p></div>
          <div class="a-info__item" data-info="o-send"><h3>Send verse to.</h3><p>Choose the folder in your library the verse goes into.</p></div>
          <div class="a-info__item" data-info="o-brain"><h3>Add verse.</h3><p>One tap and the verse is in your library, in the folder you have open.</p></div>
          <div class="a-info__item" data-info="o-dict"><h3>Dictionary.</h3><p>The word under your finger goes into your Dictionary. Hold a few words and they become a new word of yours.</p></div>
          <div class="a-info__item" data-info="o-pin"><h3>Pin verse.</h3><p>Pins the verse at the top of your library, with the verses joined to it. You stay where you are in the Bible.</p></div>
          <div class="a-info__item" data-info="o-link"><h3>Link verse.</h3><p>Tap any other verse, in any book, and the two are joined. Tap as many as you like, then Done.</p></div>
          <div class="a-info__item" data-info="o-linked"><h3>Linked.</h3><p>Every verse joined to this one, listed under it with its words.</p></div>
          <div class="a-info__item" data-info="o-share"><h3>Share verse.</h3><p>Turns the verse into a card, ready to send to anyone.</p></div>
          <div class="a-info__item" data-info="o-colour"><h3>Colour.</h3><p>Give the word a colour of your own, in the whole Bible or just in this verse.</p></div>
          <div class="a-info__item" data-info="o-copy"><h3>Copy verse.</h3><p>The words, where they are from and which Bible, ready to paste anywhere.</p></div>
          <div class="a-info__item" data-info="o-under"><h3>Underline.</h3><p>Draws a line under the words you hold.</p></div>
          <div class="a-info__item" data-info="o-book"><h3>Bookmark verse.</h3><p>Keeps your place. The verse glows so you find it again.</p></div>
          <div class="a-info__item" data-info="o-many"><h3>Many bookmarks.</h3><p>A pen for bookmarks: tap verse after verse, or drag over a few to make them one.</p></div>
          <button class="a-back" type="button">‹ All features</button>
        </div>
        <div class="a-devroom"><div class="a-dev" aria-hidden="true"><div class="a-dev__screen">

          ${na({base:a})}
        </div></div></div>
      </div>
    </section>
    <section class="a-nums">
      <div><b>12</b><span>texts</span></div>
      <div><b>4</b><span>languages</span></div>
      <div><b>1,335</b><span>places on the map</span></div>
      <div><b>69</b><span>topics</span></div>
    </section>
    <section class="a-faq" id="questions">
      <h2>Questions people ask.</h2>
      ${Q.map(({q:l,a:n})=>`<details><summary>${g(l)}</summary><p>${g(n)}</p></details>`).join(`
      `)}
    </section>
    <section class="a-close">
      <h2>Start with the next verse <em>that stops you.</em></h2>
      <div class="a-acts"><a class="a-btn a-btn--go" href="${i}">Open BibleLectio</a><span class="a-btn a-btn--soon">Coming to the App Store</span></div>
      <p class="a-sib"><b>Learning a language?</b> LectioMemoria keeps the words you learn and studies them with you. <a href="https://lectiomemoria.com">lectiomemoria.com</a></p>
    </section>
    ${ea({base:t,app:i})}
  </div>
</div>`},J="biblelectio-played";let ra=0;function pa(a){a.style.setProperty("--fresh",String(++ra));const e=a.querySelector(".a-dial"),s=a.getBoundingClientRect(),t=a.querySelector(".a-held");if(!t)return;const i=t.getBoundingClientRect(),o=i.left+i.width/2-s.left,l=i.top+i.height/2-s.top,n=getComputedStyle(e),d=Math.min(Math.max(o,parseFloat(n.getPropertyValue("--room-l"))),a.offsetWidth-parseFloat(n.getPropertyValue("--room-r")));e.style.setProperty("--cx",d+"px"),e.style.setProperty("--cy",l+"px"),e.style.setProperty("--px",o-d+"px"),e.style.setProperty("--py","0px")}function k(a,e){e&&a.querySelectorAll(".a-info__item").forEach(s=>s.classList.toggle("is-on",s.dataset.info===e)),a.querySelector(".a-back").textContent=a.dataset.circle?"‹ The cross dial":"‹ All features"}function T(a,e){a.forEach(s=>{s.classList.toggle("is-lit",s===e),s.setAttribute("aria-pressed",String(s===e))})}function R(a,e){const s=a.querySelector(".a-sdial");clearTimeout(a.dialTimer),delete s.dataset.hot,T(a.querySelectorAll(".a-three"),null),e?a.dataset.circle=e:delete a.dataset.circle,s.dataset.state=e||"open",k(a,e?"c-"+e:"dial")}function q(a,e){clearTimeout(a.dialTimer);const s=a.querySelector(".a-sdial");if(s.dataset.state="rest",delete s.dataset.hot,delete a.dataset.circle,T(a.querySelectorAll(".a-opt, .a-three"),null),a.querySelectorAll(".a-scr").forEach(t=>t.classList.toggle("is-on",t.dataset.screen===(e||"dial"))),!e){a.dataset.mode="rest",delete a.dataset.feature,k(a,null);return}a.dataset.mode="focus",a.dataset.feature=e,k(a,e),e==="dial"&&(a.dialTimer=setTimeout(()=>{s.dataset.state="open"},900))}function ca(a,e=null){var d;document.title=M.title??M.name,document.body.classList.add("is-living"),a.innerHTML=ia+la({base:"/",app:M.app,note:e}),ta(a);const s=a.querySelector(".living"),t=s.querySelector(".a-stage"),i=()=>pa(t);i(),new ResizeObserver(i).observe(t),document.fonts&&document.fonts.addEventListener("loadingdone",i);let o=!1;try{o=sessionStorage.getItem(J)==="1"}catch{}o&&s.classList.add("is-playing","is-played");let l=!1;const n=()=>{if(!l){l=!0,i(),s.classList.add("is-playing");try{sessionStorage.setItem(J,"1")}catch{}setTimeout(()=>aa(t,"/"),o?3e3:9300)}};(((d=document.fonts)==null?void 0:d.ready)??Promise.resolve()).then(n),setTimeout(n,1500),s.addEventListener("click",u=>{const r=u.target.closest(".a-feat, .a-opt, .a-three, .a-back");if(!r)return;const c=r.closest(".a-look");r.matches(".a-feat")?q(c,r.dataset.feature):r.matches(".a-opt")?R(c,r.dataset.state):r.matches(".a-back")?c.dataset.circle?R(c,null):q(c,null):(T(c.querySelectorAll(".a-three"),r),c.querySelector(".a-sdial").dataset.hot=r.dataset.hot,k(c,"o-"+r.dataset.hot))})}export{ca as mountLiving};
