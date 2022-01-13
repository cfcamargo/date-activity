function setarDataEHora() {
  const campDate = document.querySelector('#date')

  let now = new Date()

  function formatarComZero(num) {
    return num >= 10 ? num : `0${num}`
  }

  let diaSemana = now.getDay()

  switch (diaSemana) {
    case 0:
      diaSemana = 'Domingo'
      break
    case 1:
      diaSemana = 'Segunda'
      break
    case 2:
      diaSemana = 'Terça'
      break
    case 3:
      diaSemana = 'Quarta'
      break
    case 4:
      diaSemana = 'Quinta'
      break
    case 5:
      diaSemana = 'Sexta'
      break
    case 6:
      diaSemana = 'Sabado'
  }

  const data = formatarComZero(now.getDate())

  console.log(data)

  const mesesAno = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  const mes = mesesAno[now.getMonth()]
  console.log(mes)

  const ano = now.getFullYear()

  campDate.innerHTML = `Hoje é ${diaSemana}, ${data} de ${mes} de ${ano}`

  // agora hora

  const campHours = document.getElementById('hours')

  const horas = formatarComZero(now.getHours())

  const minutos = formatarComZero(now.getMinutes())

  const segundos = formatarComZero(now.getSeconds())

  campHours.innerHTML = `${horas}:${minutos}:${segundos}`
}
setarDataEHora()

setInterval(() => {
    setarDataEHora()
}, 1000)
