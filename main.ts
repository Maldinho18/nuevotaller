import { Serie } from './serie.js';

import { dataSeries } from './dataSeries.js';

declare global {
  interface Window {
    showDetail: (id: number) => void;
    closeModal: () => void;
  }
}

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

function showDetail(id: number): void {
  const selectSerie = dataSeries.find(serie => serie.id === id)
  if (selectSerie){

    console.log(selectSerie.image);

    const serieTitle = document.getElementById('serie-title')!;
    const serieImage = document.getElementById('serie-image') as HTMLImageElement;
    const serieDescripcion = document.getElementById('serie-description')!;
    const serieChannel = document.getElementById('serie-channel')!;

    serieTitle.innerText = selectSerie.name;
    serieImage.src = selectSerie.image;
    serieDescripcion.innerText = selectSerie.description;
    serieChannel.innerHTML = `<a href="${selectSerie.url}" target="_blank">${selectSerie.channel}</a>`;

    const modal = document.getElementById('serie-detail')!;
    modal.style.display = 'block';
  }

}

function closeModal(): void {
  const modal = document.getElementById('serie-detail')!;
  modal.style.display = 'none';
}

window.showDetail = showDetail;
window.closeModal = closeModal;

