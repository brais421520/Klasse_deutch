export default function scrollToHandler(element, collapse) {
  return function(e) {
    // Use smooth scroll if the link is to the same page
    if (e.target.href.indexOf(window.location.pathname) !== -1) {
      e.preventDefault()
      const section = document.getElementById(element.href.split('#')[1])
      const bodyRect = document.body.getBoundingClientRect().top;
      const position = section.getBoundingClientRect().top
      window.scrollTo({top: position - bodyRect - 75, behavior: 'smooth'})
      collapse.collapse && collapse.collapse('hide')
    }
  }
}