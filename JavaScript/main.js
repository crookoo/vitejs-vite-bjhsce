document.addEventListener('DOMContentLoaded', () => {
  const menu = new Mmenu('#menu', {
    navbar: {
      title: 'VSB - Akademie der Wirtschaft',
    },
    navbars: [
      {
        position: 'top',
        content: ['prev', 'title'],
      },
      {
        position: 'bottom',
        content: ["<a href='#/'>Impressum</a>", "<a href='#/'>Datenschutz</a>"],
      },
    ],
    setSelected: {
      hover: false,
    },
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const topBoxHeight = document.getElementById('topInfoBox') ? document.getElementById('topInfoBox').offsetHeight : 0;
    const headerHeight = document.getElementById('page-header').offsetHeight;
    const offsetAddition = 75;
    const offsetTop = topBoxHeight + headerHeight - offsetAddition;
    if (
      window.pageYOffset > offsetTop ||
      document.body.scrollTop > offsetTop ||
      document.documentElement.scrollTop > offsetTop
    ) {
      document.getElementById('page-header').classList.add('shrink');
    } else {
      document.getElementById('page-header').classList.remove('shrink');
    }
  }

  if (window.innerWidth >= 992) {
    document
      .querySelectorAll('.navbar .nav-item')
      .forEach(function (everyitem) {
        let firstClick = true;

        everyitem.addEventListener('mouseover', function (e) {
          let el_link = this.querySelector('a[data-bs-toggle]');

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add('show');
            el_link.setAttribute('aria-expanded', 'true');
            nextEl.classList.add('show');
            nextEl.setAttribute('data-bs-popper', 'none');
            firstClick = false;
          }
        });
        everyitem.addEventListener('mouseleave', function (e) {
          let el_link = this.querySelector('a[data-bs-toggle]');

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove('show');
            el_link.setAttribute('aria-expanded', 'false');
            nextEl.classList.remove('show');
            nextEl.removeAttribute('data-bs-popper', 'none');
            firstClick = true;
          }
        });

        everyitem.addEventListener('click', function () {
          let el_link = this.querySelector('a[data-bs-toggle]');

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            if (firstClick) {
              el_link.classList.add('show');
              el_link.setAttribute('aria-expanded', 'true');
              nextEl.classList.add('show');
              nextEl.setAttribute('data-bs-popper', 'none');
              firstClick = false;
            } else {
              el_link.classList.remove('show');
              el_link.setAttribute('aria-expanded', 'false');
              nextEl.classList.remove('show');
              nextEl.removeAttribute('data-bs-popper', 'none');
              firstClick = true;
            }
          }
        });
      });
  }

  window.onload = function () {
    document.getElementById('gsc-i-id1').placeholder = 'Suchwort eingeben ...';
  };

  const slider = new KeenSlider('#my-keen-slider', {
    mode: 'snap',
    loop: true,
    slides: {
      origin: 'center',
      perView: 1.35,
    },
    breakpoints: {
      '(min-width: 576px)': {
        slides: {
          origin: 'center',
          perView: 2.1,
        },
      },
      '(min-width: 768px)': {
        disabled: true,
      },
    },
  });

  const slider2 = new KeenSlider('#keen-slider-next-seminars', {
    mode: 'snap',
    loop: false,
    slides: {
      origin: 'center',
      perView: 1.35,
    },
    breakpoints: {
      '(min-width: 576px)': {
        slides: {
          origin: 'center',
          perView: 2.1,
        },
      },
      '(min-width: 768px)': {
        disabled: true,
      },
    },
  });
});
