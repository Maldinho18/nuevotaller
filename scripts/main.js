import { dataSeries } from './dataSeries.js';
var datasTbody = document.getElementById('series');
var totalCreditElm = document.getElementById("total-credits");
//btnfilterByName.onclick = () => applyFilterByName();
renderCoursesInTable(dataSeries);
totalCreditElm.innerHTML = "".concat(getTotalCredits(dataSeries));
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        datasTbody.appendChild(trElement);
    });
}
/**
function applyFilterByName() {
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Serie[] = searchCourseByName(text, dataSeries);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, series: Serie[]) {
  return nameKey === '' ? dataSeries : series.filter( c =>
    c.name.match(nameKey));
}**/
function getTotalCredits(series) {
    var promedioSerie = 0;
    series.forEach(function (serie) { return promedioSerie = promedioSerie + serie.seasons; });
    return promedioSerie / series.length;
}
/**
function clearCoursesInTable() {
  while (datasTbody.hasChildNodes()) {
    if (datasTbody.firstChild != null) {
      datasTbody.removeChild(datasTbody.firstChild);
     
    }
  }
}**/ 
