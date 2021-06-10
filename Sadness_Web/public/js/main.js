console.log("Si miras esto eres un nerd mooooi fuerte");
var pincture_index = 0;
var intervalID = setInterval(calculate_sadness, 1000);
var interval_picture = setInterval(random_images, 4000);
var image_list =
  [
    "1.jpeg",
    "2.jpg",
    "3.jpeg",
    "4.jpeg",
    "5.jpg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
  ]



function calculate_sadness() {
  //Generate the dates of the arrivals
  var fecha_actual = new Date();
  var fecha_erica = new Date(2020, 4, 2, 11, 30, 30, 30);
  //cumpleanos = new Date(1995,11,17,3,24,0); December 17, 1995 03:24:00"
  var fecha_silvia = new Date(2021, 10, 1, 1, 0, 0, 0);

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

  // document.getElementById("erica").innerHTML = output_erica;
  document.getElementById("silvia").innerHTML = output_silvia;

}
function random_images() {
  document.getElementById("silvi_wapi").src ="public/img/"+  image_list[pincture_index++];
  if (pincture_index >= image_list.length)
    pincture_index = image_list.length - 1;
}
