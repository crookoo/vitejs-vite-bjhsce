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
      document.getElementById('navbar').classList.add('shrink');
    } else {
      document.getElementById('navbar').classList.remove('shrink');
    }
  }

  /*const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseover', function () {
      dropdownToggle.classList.add('show');
      dropdownToggle.setAttribute('aria-expanded', 'true');
      dropdownMenu.classList.add('show');
      dropdownMenu.setAttribute('data-bs-popper', 'none');
    });
    dropdown.addEventListener('click', function () {
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
});
