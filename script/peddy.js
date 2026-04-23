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
     buttonContainer.classList.add('flex', 'items-center','gap-2','font-bold','border-teal-600','border','px-11','py-3','rounded-xl'
        ,'text-gray-700','hover:bg-teal-100','transition',
     );
     buttonContainer.innerHTML = `<img src = ${items.category_icon} class="w-8 h-8" />
    <button onclick="loadPets('${items.category}')">${items.category}</button>

     `
     ;

     categoryContainer.append(buttonContainer)

 });
     
}

const loadPets = (id) => {
    // alert(id)

    fetch (`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(res=>res.json())
    .then(data=>detailsVideo(data.data))
    .catch(error=> console.log(error))

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
    videoContainer.innerHTML="";

    if(pets.length==0){
    videoContainer.classList.remove('grid');
    videoContainer.innerHTML=
   
    
    `
    <div class="bg-gray-300 border rounded-2xl">
    <div class="w-30px flex justify-center pt-20">
    <img class=w-200"" src="assets/error.webp">
   </div>  
     <h1 class="font-bold flex justify-center text-2xl py-4">No Information Available</h1>  
     <p class="text-gray-700 flex justify-center pb-20">It is a long established fact that a reader will be distracted by the readable content of a <br> page when looking at 
its layout.The point of using Lorem Ipsum is that it has a.</p>
     <div/>
   `

    }
    else{
            videoContainer.classList.add('grid');
    }
    // console.log(pets)
    pets.forEach(pets=>{
        // console.log(pets)

         const card = document.createElement('div')
         card.classList = 'card bg-base-100 w-75 shadow-sm'
         card.innerHTML =`
          <figure class="px-3 pt-3  overflow-hidden">
    <img class="rounded-xl  w-80 h-48   object-cover"
      src=${pets.image}
      alt=""
      class="" />
  </figure>
  <div class="card-body">
    <h2 class="font-bold text-xl">${pets.pet_name}</h2>
   <div>
   <div class="flex items-center gap-2">
   <img class="w-5 text-gray-500 rounded-full  " src ="https://img.icons8.com/?size=100&id=ETI89AT9Xeqo&format=png&color=000000"/>
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
   <div class="flex gap-2 pb-5 border-b border-gray-300">
   <img class="w-5 text-gray-500" src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"/>
   <p class="text-gray-500  border-blue-700">Price:199$</p>
  
   
   </div>
   <div class="flex gap-7 mt-5">
   <button onclick="loadBtn('${pets.petId}')" class="btn w-15 rounded-xl hover::  "><img class="w-5" src="https://img.icons8.com/?size=100&id=u8MTpAq972MG&format=png&color=000000"/></button>
    <button class="btn w-18 rounded-xl text-cyan-500 font-bold">Adopt</button>
     <button class="btn w-18 rounded-xl text-cyan-500 font-bold">Details</button>
     </div>

   </div>
  </div> `


    videoContainer.append(card)
    });
}

loadBtn=(id)=>{
//    alert(id)

   fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
   .then(res=>res.json())
   .then(data=>loadPicture(data.petData))
   .catch(error=>console.log(error))
}

loadPicture=(petData)=>{
    //    console.log(petData)

     const imageContainer = document.getElementById('images')
     const petArray = [petData]

     petArray.forEach(pet => {
        const card = document.createElement('div')
        card.innerHTML=`
        <img class="rounded-lg  p-1 mt-4 border-2 border-gray-300" src="${pet.image}"/>

      
        
        `
          imageContainer.append(card)
     });
    

}







loadVideos()
loadCategories()