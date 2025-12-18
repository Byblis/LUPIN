let clickCount = 0;
const door = document.getElementById('door');
const logo = document.getElementById('logo');

door.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 1) {
    door.classList.add('glow');
    new Audio('sounds/knock.mp3').play().catch(() => {});
  }

  if (clickCount === 2) {
    // ロゴふわっと消える
    logo.classList.add('fade-out');

    // ドア開く
    door.classList.add('open');

    // ページ遷移
    setTimeout(() => {
      document.body.classList.add('fade-out');
    }, 1300);

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2600);
  }
});



