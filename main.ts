import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

let datasTbody: HTMLElement = document.getElementById('series')!;
let totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

renderCoursesInTable(dataSeries);

totalCreditElm.innerHTML = `${getTotalCredits(dataSeries)}`


function renderCoursesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><a href="#" onclick="showDetail(${serie.id})">${serie.name}</a></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    datasTbody.appendChild(trElement);
  });
}

function getTotalCredits(series: Serie[]): number {
  let promedioSerie: number = 0;
  series.forEach((serie) => promedioSerie = promedioSerie + serie.seasons);
  return promedioSerie/series.length;
}
