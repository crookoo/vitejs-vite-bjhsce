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
    const offsetTop = 60;
    if (
      window.pageYOffset > offsetTop ||
      document.body.scrollTop > offsetTop ||
      document.documentElement.scrollTop > offsetTop
    ) {
      document.getElementById('header').classList.add('shrink');
    } else {
      document.getElementById('header').classList.remove('shrink');
    }
  }

  /*const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    let firstClick = true;

    dropdown.addEventListener('mouseover', function () {
      dropdownToggle.classList.add('show');
      dropdownToggle.setAttribute('aria-expanded', 'true');
      dropdownMenu.classList.add('show');
      dropdownMenu.setAttribute('data-bs-popper', 'none');
    });

    dropdown.addEventListener('mouseout', function () {
      dropdownToggle.classList.remove('show');
      dropdownToggle.setAttribute('aria-expanded', 'false');
      dropdownMenu.classList.remove('show');
      dropdownMenu.removeAttribute('data-bs-popper', 'none');
    });

  });*/

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
});
