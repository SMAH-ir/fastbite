const backToTopBtn = document.querySelector('.back-to-top')

if (backToTopBtn) {
     window.addEventListener('scroll', () => {
          backToTopBtn.classList.toggle('is-visible', window.scrollY > 500)
     }, { passive: true })

     backToTopBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0 })
     })
}