document.addEventListener("DOMContentLoaded", () => {
  let numbers = document.querySelector("#numbers");
  const styleSheet = document.styleSheets[0];

  for (let i = 0; i <= 60; i++) {
    let dotNested1 = document.createElement("div");
    dotNested1.classList.add("dots");
    dotNested1.classList.add(`dot${i}`);

    let dotNested2 = document.createElement("div");
    dotNested2.classList.add("ddot");

    numbers.appendChild(dotNested1);
    dotNested1.appendChild(dotNested2);

    styleSheet.insertRule(
      `
        .dot${i}{
           transform: rotate(${i * 6}deg);
        }
        `,
      styleSheet.cssRules.length
    );
  }

  setInterval(setClock, 1000);

  function setClock() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const minutes = currentDate.getMinutes();
    const hours = currentDate.getHours();

    const secondHand = document.querySelector("[dataSecondHand]");
    const minuteHand = document.querySelector("[dataMinuteHand]");
    const hourHand = document.querySelector("[dataHourHand]");

    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
    hourHand.style.transform = `rotate(${hours * 30 + minutes * 0.5}deg)`;
  }

  setClock();
});
