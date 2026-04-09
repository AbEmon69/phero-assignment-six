// this function is for all categories like dogs cats rabbits ...

// card demo ={
//   "status": true,
//   "message": "successfully fetched all the categories data",
//   "categories": [
//     {
//       "id": 1,
//       "category": "Cat",
//       "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//     },
//     {
//       "id": 2,
//       "category": "Dog",
//       "category_icon": "https://i.ibb.co.com/c8Yp1y7/dog.png"
//     },
//     {
//       "id": 3,
//       "category": "Rabbit",
//       "category_icon": "https://i.ibb.co.com/3hftmLC/rabbit.png"
//     },
//     {
//       "id": 4,
//       "category": "Bird",
//       "category_icon": "https://i.ibb.co.com/6HHZwfq/bird.png"
//     }
//   ]
// }




const loadCategories=()=>{
    fetch `https://openapi.programming-hero.com/api/peddy/categories`
    .then(res => res.json())
    .then(data => displayDetails(data.categories))
    .catch(error => console.log(error))
}

const displayDetails=(categories)=>{
    // console.log(categories);
    const categoryContainer = document.getElementById('animals')
 categories.forEach(items => {
    console.log(items)

   const buttonContainer = document.createElement('div')
     buttonContainer.classList.add('flex', 'items-center','gap-2','font-bold','border-teal-200','border','px-11','py-3','rounded-full'
        ,'text-gray-700','hover:bg-teal-100','transition'
     );
     buttonContainer.innerHTML = `<img src = ${items.category_icon} class="w-8 h-8" />
    <span>${items.category}</span>

     `
     ;

     categoryContainer.append(buttonContainer)

 });
     
}

 //  {
//   "status": true,
//   "message": "successfully fetched all the pets data",
//   "pets": [
//     {
//       "petId": 1,
//       "breed": "Golden Retriever",
//       "category": "Dog",
//       "date_of_birth": "2023-01-15",
//       "price": 1200,
//       "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//       "gender": "Male",
//       "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//       "vaccinated_status": "Fully",
//       "pet_name": "Sunny"
//     },




const loadVideos = ()=>{
    fetch`https://openapi.programming-hero.com/api/peddy/pets`
    .then(res=> res.json())
    .then(data=>detailsVideo(data.pets))
    .catch(error=>console.log(error))
}


const detailsVideo=(pets)=>{
    const videoContainer = document.getElementById('videos')
    // console.log(pets)
    pets.forEach(pets=>{
        // console.log(pets)

         const card = document.createElement('div')
         card.classList = 'card bg-base-100 w-96 shadow-sm'
         card.innerHTML =`
          <figure class="px-3 pt-10 w-full h-48 object-cover rounded-xl">
    <img class=""
      src=${pets.image}
      alt=""
      class="" />
  </figure>
  <div class="card-body">
    <h2 class="font-bold text-xl">${pets.pet_name}</h2>
   <div>
   <div class="flex items-center gap-2">
   <img class="w-5 text-gray-500 " src ="https://img.icons8.com/?size=100&id=ETI89AT9Xeqo&format=png&color=000000"/>
   <p class="text-gray-500">Breed: ${pets.breed}</p>
   </div>
   <div class="flex items-center gap-2">
   <img class="w-6 text-gray-500" src="https://img.icons8.com/?size=100&id=wSNPBOvl6qCE&format=png&color=000000" />
   <p class="text-gray-500">${pets.date_of_birth}</p>
   </div>
   <div class="flex gap-2">
   <img class="w-5 text-gray-500 py-1"  src="https://img.icons8.com/?size=100&id=QUuwkaxmcF9h&format=png&color=000000"/>
   <p class="text-gray-500">Gender: ${pets.gender}</p>
   </div>
   <div class="flex gap-2">
   <img class="w-5 text-gray-500" src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"/>
   <p class="text-gray-500">Price:199$</p>
   </div>
   </div>
  </div> `


    videoContainer.append(card)
    });
}













loadVideos()
loadCategories()