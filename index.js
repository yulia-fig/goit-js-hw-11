import{a as l,S as u,i as a}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="55068921-c9c0644d1a9915f60fd1c8249";function d(s){return l.get("https://pixabay.com/api/",{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),m=new u(".gallery a");function p(s){const o=s.map(r=>`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
      <p>❤️ ${r.likes} | 👁 ${r.views}</p>
      <p>💬 Comments: ${r.comments}</p>
        <p>⬇ Downloads: ${r.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.add("show")}function g(){document.querySelector(".loader").classList.remove("show")}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.error({message:"Please enter a search query"});return}y(),h(),d(o).then(r=>{if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(r.hits)}).catch(()=>{a.error({message:"Something went wrong"})}).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
