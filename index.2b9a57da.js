let n="";n=n=>{const e=document.querySelector(".gallery"),s=n.map((n=>{const{webformatURL:s,largeImageURL:a,tags:i,likes:l,views:o,comments:r,downloads:t}=imgParams;return e.innerHTML=`\n          <div class="photo-card">\n            <a class="gallery__item" href="${a}">\n              <img class="gallery__image" src="${s}" alt="${i}" loading="lazy" />\n            </a>\n            <div class="info">\n              <p class="info-item">\n                <b>Likes: ${l}</b>\n              </p>\n              <p class="info-item">\n                <b>Views: ${o}</b>\n              </p>\n              <p class="info-item">\n                <b>Comments: ${r}</b>\n              </p>\n              <p class="info-item">\n                <b>Downloads: ${t}</b>\n              </p>\n            </div>\n          </div>\n\n        `})).join("");e.innerHTML=s};document.querySelector(".searchQuery");
//# sourceMappingURL=index.2b9a57da.js.map
