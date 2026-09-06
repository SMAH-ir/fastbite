const backToTopBtn = document.querySelector('.back-to-top')

if (backToTopBtn) {
     window.addEventListener('scroll', () => {
          if (window.scrollY > 500) {
               backToTopBtn.classList.add('is-visible')
          } else {
               backToTopBtn.classList.remove('is-visible')
          }
     })

     backToTopBtn.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
     })
}