let dog = [{
    name: "Grogu",
    breed: "chihuahua",
    age: "1",
    likesTreats: true,
  },
  {
    name: "Chewbacca",
    breed: "poodle",
    age: "3",
    likesTreats: false,
  },
  {
    name: "Yoda",
    breed: "papillion",
    age: "2",
    likesTreats: true,
  }
  ]; 
  
  function onSubmitDog(event) {
    event.preventDefault();
  
    let nameInput = document.querySelector("#name_input"); 
    let breedInput = document.querySelector("#breed_input");
    let ageInput = document.querySelector("#age_input");
    let treatsCheckbox = document.querySelector("#treats_input");
  
    let name = nameInput.value;
    let breed = breedInput.value;
    let age = ageInput.value;
    let likesTreats = treatsCheckbox.checked;
  
    if (name === "" || breed === "" || age === "") {  
      alert("Please fill out all of the fields!");
      return;  
    }
    console.log(nameInput.value)
    let newDog = 
    {
      name: name,
      breed: breed,
      age: age,
      likesTreats: likesTreats,
    }
  dog.push(newDog)
  renderDogList();
  }
  
    function renderDogList() {
      let list = document.querySelector("#dog_list");
      list.innerHTML = "";  
  
      if (dog.length > 0) { 
      for (let i = 0; i < dog.length; i++) {
        let dogInfo = dog[i]
        let li = document.createElement("li")
        li.innerHTML = `${dogInfo.name}! A ${dogInfo.age} year old ${dogInfo.breed}.`
        list.append(li)
        if (dogInfo.likesTreats === true) {
          li.innerHTML = `${dogInfo.name}! A ${dogInfo.age} year old ${dogInfo.breed} who likes treats.`
        }
        let button = document.createElement("button")
        button.innerText = "Send Home"
        button.onclick = function () {
          removeDog(dog)
        }
        list.appendChild(button)
      }
      } else {
        list.innerHTML = "No Dogs!"
      }
      return
    }

    function removeDog(dog) {
      let dogIndex = dog.indexOf(dog);
      dog.splice(dogIndex, 1);
  
      renderDogList();
    }
  
    let button = document.querySelector("#submit_button");
    button.addEventListener("click", onSubmitDog);
  
    renderDogList();
  