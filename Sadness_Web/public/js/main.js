console.log("Si miras esto eres un nerd mooooi fuerte");

function calculate_sadness() {
  //Generate the dates of the arrivals
  var fecha_actual = new Date();
  var fecha_erica = new Date(2020, 4, 2, 11, 30, 30, 30);
  var fecha_silvia = new Date(2020, 10, 2, 8, 30, 30, 30);

  // console.log(fecha_actual);
  // console.log(fecha_erica);

  dif_miliseconds_e = fecha_erica.getTime() - fecha_actual.getTime();
  var dias_e = dif_miliseconds_e / (1000 * 60 * 60 * 24);
  var horas_e = (dias_e % 1) * 24;
  var minutos_e = (horas_e % 1) * 60;
  var segundos_e = (minutos_e % 1) * 60;

  dif_miliseconds_s = fecha_silvia.getTime() - fecha_actual.getTime();
  var dias_s = dif_miliseconds_s / (1000 * 60 * 60 * 24);
  var horas_s = (dias_s % 1) * 24;
  var minutos_s = (horas_s % 1) * 60;
  var segundos_s = (minutos_s % 1) * 60;

  var output_erica = Math.round(dias_e) + " dias y " + Math.round(horas_e) + ":" + Math.round(minutos_e) + ":" + Math.round(segundos_e) + " horas";
  var output_silvia = Math.round(dias_s) + " dias " + Math.round(horas_s) + ":" + Math.round(minutos_s) + ":" + Math.round(segundos_s) + " horas";

  document.getElementById("erica").innerHTML = output_erica;
  document.getElementById("silvia").innerHTML = output_silvia;

}
var intervalID = setInterval(calculate_sadness, 1000);