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
});
