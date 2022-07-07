document.addEventListener('DOMContentLoaded', () => {
  const menu = new Mmenu('#menu', {
    navbar: {
      title: 'VSB Nordhessen',
    },
    theme: 'light',
    navbars: [
      {
        position: 'top',
        content: ['prev', 'title'],
      },
      {
        position: 'bottom',
        content: [
          "<a class='fa fa-envelope' href='#/'>Impressum</a>",
          "<a class='fa fa-twitter' href='#/'>Datenschutz</a>",
        ],
      },
    ],
  });

  const api = menu.API;
  document.querySelector('#open-button').addEventListener('click', () => {
    api.open();
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      document.getElementById('navbar').classList.add('shrink');
    } else {
      document.getElementById('navbar').classList.remove('shrink');
    }
  }
});
