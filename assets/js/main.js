const theTimer = () => {
  const getTimeFromSegundos = (segundos) => {
    const data = new Date(segundos * 100); // tem que ser sempre 0 pra dar certo kkk
    const milissegundos = data.getMilliseconds();
    return (
      data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" }) +
      `.${milissegundos / 100}`
    );
    // declarando o timeZone para ser 00 no horário, já que é contado a partir da criação
  };

  const timer = document.querySelector(".timer");

  let segundos = 0;
  let timerRelogio = 0;

  const iniciarRelogio = () => {
    clearInterval(timerRelogio);
    timerRelogio = setInterval(() => {
      segundos += 1;
      timer.innerHTML = getTimeFromSegundos(segundos);
      // se eu colocosse para adicionar o html apenas dos segundos,
      // lá no html apareceria apenas o número, e não 00:00:01 (que vem do getTimeFromSegundos)
    }, 100);
  };

  const pausarRelogio = () => {
    clearInterval(timerRelogio);
    timer.innerHTML = getTimeFromSegundos(segundos);
  };

  const zerarRelogio = () => {
    clearInterval(timerRelogio);
    segundos = 0;
    timer.innerHTML = getTimeFromSegundos(segundos);
  };

  document.addEventListener("click", (e) => {
    const elemento = e.target;
    elemento.classList.contains("iniciar")
      ? iniciarRelogio()
      : elemento.classList.contains("pausar")
      ? pausarRelogio()
      : elemento.classList.contains("zerar") && zerarRelogio();
  });
};

theTimer();
