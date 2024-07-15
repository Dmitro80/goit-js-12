import{s as u,i as l}from"./assets/vendor-5c957d73.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="44774560-6cc9e3fc3beea571d43e1a675";function d(i){return fetch(`${p}?key=${m}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function f(i){return i.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:a,downloads:c})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${t}" alt="${n}" width="360" height="152" />
            <ul class="description">
              <li class="description-items">
                <span class="accent">Likes </span>${e}
              </li>
              <li class="description-items">
                <span class="accent">Views </span>${r}
              </li>
              <li class="description-items">
                <span class="accent">Comments </span>${a}
              </li>
              <li class="description-items">
                <span class="accent">Downloads </span>${c}
              </li>
            </ul>
          </a>
        </li>`).join("")}const s={form:document.querySelector(".search-form"),input:document.querySelector(".search-input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},g=new u(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});s.form.addEventListener("submit",h);function h(i){i.preventDefault(),s.gallery.innerHTML="";const t=s.input.value.trim();if(t==="")return l.error({message:"Search field can not be empty!",position:"topRight",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#B51B1B",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"});s.loader.classList.remove("visually-hidden"),d(t).then(o=>{s.input.value="",o.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"}):(s.gallery.innerHTML=f(o.hits),g.refresh())}).catch(o=>{console.log(o),l.error({message:`Something went wrong... Error: ${o}`,position:"topCenter",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"})}).finally(()=>s.loader.classList.add("visually-hidden"))}
//# sourceMappingURL=commonHelpers.js.map
