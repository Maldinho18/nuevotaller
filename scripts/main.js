import { dataSeries } from './dataSeries.js';
var datasTbody = document.getElementById('series');
var totalCreditElm = document.getElementById("total-credits");
renderCoursesInTable(dataSeries);
totalCreditElm.innerHTML = "".concat(getTotalCredits(dataSeries));
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><a href=\"#\" onclick=\"showDetail(").concat(serie.id, ")\">").concat(serie.name, "</a></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        datasTbody.appendChild(trElement);
    });
}
function getTotalCredits(series) {
    var promedioSerie = 0;
    series.forEach(function (serie) { return promedioSerie = promedioSerie + serie.seasons; });
    return promedioSerie / series.length;
}
