const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const dim = document.querySelector('.dim');

const focusableEl = modal.querySelectorAll('a,button,input');
const firstEl = focusableEl[0];
const lastEl = focusableEl[focusableEl.length - 1];

function openModal() {
  console.log('모달 열림');
  modal.classList.add('active');
  document.documentElement.style.overflow = 'hidden';
  firstEl.focus();
}
function closeModal() {
  console.log('모달 닫힘');
  modal.classList.remove('active');
  document.documentElement.style.overflow = 'auto';
}

btnOpen.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
dim.addEventListener('click', closeModal);

function handleTab(e) {
  console.log(e);
}

firstEl.addEventListener('keyup', handleTab);
lastEl.addEventListener('keyup', handleTab);
