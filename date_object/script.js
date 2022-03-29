const agora = new Date();

agora // semana, mes, dia, ano, hh, mm, ss gmt
agora.getDate()
agora.getDay() // dia da semana em numeros ex: 5 = fri
agora.getMonth()
agora.getFullYear()
agora.getHours()
agora.getMinutes()
agora.getTime() // ms desde 1970
agora.getUTCHours() // padrao da UTC

const futuro = new Date('dec 24 2022 23:59');

function transformaDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformaDias(agora.getTime());
const diasFuturos = transformaDias(futuro.getTime())

console.log(diasFuturos - diasAgora)