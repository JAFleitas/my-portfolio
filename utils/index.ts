/* const hero = document.getElementById("icons");
const svgs = Array.from(hero.querySelectorAll("svg"));

const w = window.innerWidth;
const h = window.innerHeight - 300;

function animateBackgroundIcons() {
  const availableSvgs = svgs.filter((svg) => !svg.isAnimating);
  const svgToAnimate =
    availableSvgs[Math.floor(Math.random() * availableSvgs.length)];
  if (!svgToAnimate) return;

  svgToAnimate.addEventListener(
    "animationend",
    () => {
      svgToAnimate.classList.remove("animate-moving-background");
      svgToAnimate.removeAttribute("style");
      svgToAnimate.isAnimating = false;
    },
    { once: true }
  );

  svgToAnimate.setAttribute(
    "style",
    `top: ${Math.floor(Math.random() * h)}px;
				left: ${Math.floor(Math.random() * w)}px;`
  );

  svgToAnimate.classList.add("animate-moving-background");
  svgToAnimate.isAnimating = true;
}

setInterval(animateBackgroundIcons, 1000);
animateBackgroundIcons();
*/

// colores
// amarillo #fde047

export {};
