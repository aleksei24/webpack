enum SeatTheatre {
  Aisle = 5,
  Row,
  Balcony,
  Middle
}

const mySeat = SeatTheatre.Balcony

const myLogOutEight = document.querySelector('#log_eight') as HTMLObjectElement;
myLogOutEight.innerText = `Enums: ${mySeat}.`;
