let clickCount = 0;
const door = document.getElementById('door');
const logo = document.getElementById('logo');

if (door) {
  door.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
      door.classList.add('glow');
      new Audio('sounds/knock.mp3').play().catch(() => {});
    }

    if (clickCount === 2) {
      if (logo) logo.classList.add('fade-out');
      door.classList.add('open');

      setTimeout(() => {
        document.body.classList.add('fade-out');
      }, 1300);

      setTimeout(() => {
        window.location.href = "home.html";
      }, 2600);
    }
  });
}


(() => {
  const layer = document.getElementById("lips-bg");
  if (!layer) return;

  const COUNT = 14; // 数：10〜16が上品
  const SRC = "images/lips-bg.png";

  for (let i = 0; i < COUNT; i++) {
    const img = document.createElement("img");
    img.className = "lip";
    img.src = SRC;
    img.alt = "";

    // ランダム設定
    const left = Math.random() * 100;           // vw
    const size = 20 + Math.random() * 20;       // px
    const duration = 12 + Math.random() * 10;   // sec
    const delay = Math.random() * 10;           // sec
    const drift = (-20 + Math.random() * 40);   // vw
    const rot = (-60 + Math.random() * 120);    // deg
    const opacity = 0.22 + Math.random() * 0.25;

    img.style.left = `${left}vw`;
    img.style.width = `${size}px`;
    img.style.animationDuration = `${duration}s`;
    img.style.animationDelay = `${-delay}s`;
    img.style.opacity = opacity.toFixed(2);
    img.style.setProperty("--drift", `${drift}vw`);
    img.style.setProperty("--rot", `${rot}deg`);

    layer.appendChild(img);
  }
})();



