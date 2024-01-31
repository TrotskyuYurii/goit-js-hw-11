import{i as l,S as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const d=document.querySelector("form"),f=document.getElementById("searchImageText"),m=document.querySelector(".container-image");let s;d.addEventListener("submit",e=>{e.preventDefault();const i=document.getElementById("searchImage").value;if(i.trim()===""){l.error({title:"Error",message:"Please enter what you want to find!",position:"topRight"});return}else c(),p(i).then(t=>{s=t,s.length===0?(c(),l.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):(c(),b(s),console.log(s))}).catch(t=>{console.log(t)})});function p(e){const i="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&per_page=9";return fetch(i).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{throw console.log(t),t})}function c(){f.classList.toggle("isHidden")}function g(e){return`<div class="photo-card">
  <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes:</b> ${e.likes}
    </p>
    <p class="info-item">
      <b>Views:</b> ${e.views}
    </p>
    <p class="info-item">
      <b>Comments:</b> ${e.comments}
    </p>
    <p class="info-item">
      <b>Downloads:</b> ${e.downloads}
    </p>
  </div>
</div>`}function h(e){return e.map(g).join("")}function y(e){const r=h(e);m.innerHTML=r,console.log("render")}function b(e){y(e);let r={captionsData:"alt",captionDelay:250,captions:!0},i=new u(".gallery a",r);i.on("show.simplelightbox",function(){}),i.refresh()}
//# sourceMappingURL=commonHelpers.js.map
