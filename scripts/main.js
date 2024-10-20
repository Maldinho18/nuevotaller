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
function showDetail(id) {
    var selectSerie = dataSeries.find(function (serie) { return serie.id === id; });
    if (selectSerie) {
        console.log(selectSerie.image);
        var serieTitle = document.getElementById('serie-title');
        var serieImage = document.getElementById('serie-image');
        var serieDescripcion = document.getElementById('serie-description');
        var serieChannel = document.getElementById('serie-channel');
        serieTitle.innerText = selectSerie.name;
        serieImage.src = selectSerie.image;
        serieDescripcion.innerText = selectSerie.description;
        serieChannel.innerHTML = "<a href=\"".concat(selectSerie.url, "\" target=\"_blank\">").concat(selectSerie.channel, "</a>");
        var modal = document.getElementById('serie-detail');
        modal.style.display = 'block';
    }
}
function closeModal() {
    var modal = document.getElementById('serie-detail');
    modal.style.display = 'none';
}
window.showDetail = showDetail;
window.closeModal = closeModal;
