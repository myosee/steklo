var modal = document.querySelector('.modal-container');
var closeButton = document.querySelector('.close');
var modalTriggers = document.querySelectorAll('.open');

var openModal = function() {
    modal.classList.add('is-open')
   }
   var closeModal = function() {
    modal.classList.remove('is-open')
   }
   modalTriggers.forEach(function(item) { 
    item.addEventListener('click', openModal);
   })
   closeButton.addEventListener('click', closeModal)


$(() => {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});