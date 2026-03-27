
    // Collect cards
    const cards = Array.from(document.querySelectorAll('.gallery-card'));
    const lightbox = document.getElementById('lightbox');
    const imgEl = document.getElementById('lightboxImg');
    const captionEl = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('closeBtn');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let current = 0;

    function openLightbox(index){
      current = index;
      const card = cards[current];
      const src = card.getAttribute('data-full') || card.querySelector('img').src;
      const cap = card.getAttribute('data-caption') || card.querySelector('.caption')?.textContent || card.querySelector('img')?.alt || '';
      imgEl.src = src;
      captionEl.textContent = cap;
      document.body.classList.add('noscroll');
      lightbox.classList.add('show');
    }

    function closeLightbox(){
      lightbox.classList.remove('show');
      document.body.classList.remove('noscroll');
      imgEl.src = '';
    }

    function next(){
      current = (current + 1) % cards.length;
      openLightbox(current);
    }
    function prev(){
      current = (current - 1 + cards.length) % cards.length;
      openLightbox(current);
    }

    // Click card to open
    cards.forEach((card, i)=>{
      card.addEventListener('click', ()=>openLightbox(i));
    });

    // Controls
    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', (e)=>{ e.stopPropagation(); next(); });
    prevBtn.addEventListener('click', (e)=>{ e.stopPropagation(); prev(); });

    // Click outside image to close
    lightbox.addEventListener('click', (e)=>{
      // close only if clicking the backdrop (not the image or buttons)
      if(e.target === lightbox){ closeLightbox(); }
    });

    // Keyboard support
    window.addEventListener('keydown', (e)=>{
      if(!lightbox.classList.contains('show')) return;
      if(e.key === 'Escape') closeLightbox();
      if(e.key === 'ArrowRight') next();
      if(e.key === 'ArrowLeft') prev();
    });

    // Touch swipe (mobile)
    let startX = 0;
    lightbox.addEventListener('touchstart', (e)=>{ startX = e.touches[0].clientX; }, {passive:true});
    lightbox.addEventListener('touchend', (e)=>{
      const endX = e.changedTouches[0].clientX;
      const dx = endX - startX;
      if(Math.abs(dx) > 50){
        dx < 0 ? next() : prev();
      }
    }, {passive:true});