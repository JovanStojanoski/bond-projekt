

function createCardElementWithString(personalImage, address, fullName, id) {
  var cardHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${personalImage}" class="card-img-top" alt="SEDC">
      <div class="card-body">
        <h5 class="card-title">${fullName}</h5>
        <p class="card-text">${address}</p>
        <a href="developer.html?id=${id}" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `;

  return cardHTML;
}
// function createCardElementWithString(image, desc, name, id) {
//   var cardHTML = `
//     <div class="card" style="width: 18rem;">
//       <img src="${image}" class="card-img-top" alt="SEDC">
//       <div class="card-body">
//         <h5 class="card-title">${name}</h5>
//         <p class="card-text">${desc}</p>
//         <a href="mentor.html?id=${id}" class="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   `;

//   return cardHTML;
// }