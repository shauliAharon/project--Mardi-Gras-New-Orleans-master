let OpenSceen_ar = [
  {
    backgroundImag: "../images/openScreen/1.jpg",
    headline: "Mardi Gras New Orleans Costume parade",
    text: `The parades in New Orleans are organized by social clubs known as
    krewes most follow the same parade schedule and route each year.`,
  },

  {
    backgroundImag: "../images/openScreen/2.jpg",
    headline: "Mardi Gras history",
    text: `The origins of Mardi Gras can be traced to medieval Europe, passing through Rome and Venice in the 17th and 18th centuries to the French House of the Bourbons. `,
  },
  {
    backgroundImag: "../images/openScreen/3.jpg",
    headline: "Mardi Gras New Orleans bars",
    text: `free-flowing drinks and great New Orleans food close by ­­ `,
  },
  {
    backgroundImag: "../images/openScreen/4.jpg",
    headline: "Mardi Gras New Orleans sreet",
    text: ` It’s also the perfect opportunity to see some of New Orleans biggest attractions, eat at great restaurants, and get to know the city. `,
  },
  {
    backgroundImag: "../images/openScreen/5.jpg",
    headline: "Mardi Gras attractions",
    text: `Get caught up in the unique traditions and history behind the "Greatest Free Show on Earth” at these attractions, museums and restaurants. `,
  },
];

function startSlide() {
  timerIndex = setInterval(changeSlidePic, 3000);
}

function changeSlidePic() {
  counter++;
  if (counter <= 5) {
    openSceenImg.src = "../images/openScreen/" + counter + ".jpg";
    openScreenH3.innerHTML = OpenSceen_ar[counter - 1].headline;
    openScreenP.innerHTML = OpenSceen_ar[counter - 1].text;
  } else {
    counter = 1;
    openSceenImg.src = "../images/openScreen/" + counter + ".jpg";
    openScreenH3.innerHTML = OpenSceen_ar[counter].headline;
    openScreenP.innerHTML = OpenSceen_ar[counter].text;
  }
}
