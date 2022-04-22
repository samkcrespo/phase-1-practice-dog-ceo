console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(imgUrl)
    .then((res) => res.json())
    .then((json) => displayDogs(json.message));

  fetch(breedUrl)
    .then((res) => res.json())
    .then((json) => displayBreeds(json.message));
});

const displayDogs = (arrayOfDogs) => {
  const imgContainer = document.querySelector("#dog-image-container");
  arrayOfDogs.forEach((dog) => {
    const image = document.createElement("img");
    image.src = dog;

    imgContainer.appendChild(image);
  });
};

const displayBreeds = (objOfBreeds) => {
  const breedContainer = document.querySelector("#dog-breeds");
  breedContainer.innerText = "";
  const arrayOfBreeds = Object.keys(objOfBreeds);
  console.log(arrayOfBreeds);
  arrayOfBreeds.forEach((breed) => {
    const li = document.createElement("li");
    li.innerText = breed;
    breedContainer.append(li);

    li.addEventListener("click", () => {
      li.style.color = "purple";
    });
  });

  const dropDown = document.querySelector("#breed-dropdown");
  dropDown.addEventListener("change", (e) => {
    const currentLetter = e.target.value;
    const filterDogArray = arrayOfBreeds.filter((breed) => {
      return breed[0] === currentLetter;
    });
    breedContainer.innerText = "";
    filterDogArray.forEach((dog) => {
      const li = document.createElement("li");
      li.textContent = dog;
      breedContainer.append(li);
    });
  });
};
