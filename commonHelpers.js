import{i as l,S as m}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const d=document.querySelector("form"),f=document.getElementById("searchImageText"),p=document.querySelector(".container-image");let c;d.addEventListener("submit",e=>{e.preventDefault();const s=document.getElementById("searchImage").value;if(s.trim()===""){l.info({message:"Please enter what you want to find!",position:"topRight"});return}else a(),g(s).then(t=>{c=t,c.length===0?(a(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u()):(a(),u(),b())}).catch(t=>{console.log(t)})});function g(e){const s="https://pixabay.com/api/?key="+"25736683-f5d7a17cce89782c978955728"+"&q="+encodeURIComponent(e)+"&image_type=photo&orientation=horizontal&safe_search=true&per_page=9";return fetch(s).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits).catch(t=>{throw console.log(t),t})}function a(){f.classList.toggle("isHidden")}function h(e){return`<div class="photo-card">
    <a href="${e.largeImageURL}" class="gallery-link">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" class="gallery-image" />
    </a>
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
  </div>`}function y(){return c.map(h).join("")}function u(){const e=y();p.innerHTML=e,console.log("render")}function b(){let e={captionsData:"alt",captionDelay:250,captions:!0},r=new m(".container-image a",e);r.on("show.simplelightbox",function(){}),r.refresh()}
//# sourceMappingURL=commonHelpers.js.map
