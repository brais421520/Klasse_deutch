import $ from 'jquery'
import scrollToHandler from '../scrollToHandler'

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar')
  document.querySelectorAll('.nav-link')
      .forEach(e => e.addEventListener('click', scrollToHandler(e, $(navbar))))

})
