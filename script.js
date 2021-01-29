const hamburger = document.querySelector('.hamburger');
const modalContainer = document.querySelector('.mob__modal__container');
const modal = document.querySelector('.mob__modal');


function toggleModal() {
   hamburger.addEventListener('click', openModal);

   function openModal(e) {
      e.currentTarget.src = 'icon-close.svg';
      modalContainer.classList.add('open');
      modalContainer.addEventListener('click', closeModal);
      
   }
   
   function closeModal(e) {
      if (e.target.closest('.mob__modal')) {
       return;
      } else {
         hamburger.src = 'icon-hamburger.svg';
         modalContainer.classList.remove('open');
         modalContainer.removeEventListener('click', closeModal);
      }
   } 
   }
   

toggleModal();