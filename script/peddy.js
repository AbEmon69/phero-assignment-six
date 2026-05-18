





const loadCategories=()=>{ 


     fetch (`https://openapi.programming-hero.com/api/peddy/categories`)
     .then(res => res.json())
     .then(data => displayDetails(data.categories))
     .catch(error => console.log(error))

  
}

const displayDetails=(categories)=>{
    // console.log(categories);
    const categoryContainer = document.getElementById('animals')
 categories.forEach(items => {
   

   const buttonContainer = document.createElement('div')
     buttonContainer.classList.add('flex','items-center','text-center','justify-center','border','w-[110px]','border-gray-400','gap-2',
        'rounded-xl','hover:bg-teal-100','shadow','w-[160px]','p-4',
     );
     buttonContainer.innerHTML = `<img src = ${items.category_icon} class="w-7 h-7" />
    <button class ="font-bold     " onclick="loadPets('${items.category}')">${items.category}</button>

     `
     ;
    
     categoryContainer.append(buttonContainer)

 });
 

     
}

const loadPets = (id) => {

   // for spinner show
     
    // alert(id)
 
    // for 2 second time 
    document.getElementById('spinner').classList.remove('hidden')
    setTimeout(()=>{

      //for hidden spinner
      document.getElementById('spinner').classList.add('hidden')
      
      fetch (`https://openapi.programming-hero.com/api/peddy/category/${id}`)
      .then(res=>res.json())
      .then(data=>
        detailsVideo(data.data))
      .catch(error=> console.log(error))
      


    },2000)
    
}


sortPriceBtn=(data)=>{
   data.sort((a , b)=> b.price-a.price)
   detailsVideo(data)
}




const loadVideos = ()=>{
    //  document.getElementById('spinner').classList.remove('hidden')
    setTimeout(function(){
            // document.getElementById('spinner').classList.add('hidden')
      let AllPet =[];
        fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(res=> res.json())
        .then(data=> {AllPet = data.pets; detailsVideo(AllPet)})
        .catch(error=>console.log(error));
        document.getElementById('Sort').addEventListener('click',function(){
           sortPriceBtn(AllPet)
          });
    },2000)
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
                                     
     pets.forEach(pets=>{
    
                                    
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
   ${pets.breed !== undefined ?` <div class="flex items-center gap-2">
   <img class="w-5 text-gray-500 rounded-full  " src ="https://img.icons8.com/?size=100&id=ETI89AT9Xeqo&format=png&color=000000"/>
    <p class="text-gray-500">Breed: ${pets.breed}</p>`:`
  <div class="flex items-center gap-2">
    <img class="w-5 text-gray-500 rounded-full  " src ="https://img.icons8.com/?size=100&id=ETI89AT9Xeqo&format=png&color=000000"/>
    <p class="text-gray-500">Breed: Not Available</p>`}

     </div>
  ${pets.date_of_birth !==null  && pets.date_of_birth !==undefined ?`<div class="flex items-center gap-1">
    <img class="w-6 text-gray-500 " src="https://img.icons8.com/?size=100&id=wSNPBOvl6qCE&format=png&color=000000"/><p class="text-gray-500">Birth : ${pets.date_of_birth}</p>`:` <div class="flex items-center gap-2">
  <img class="w-6 text-gray-500" src="https://img.icons8.com/?size=100&id=wSNPBOvl6qCE&format=png&color=000000" /><p class="text-gray-500">Birth : Not Available</p>`}                                   
                              
  </div>
  ${pets.gender !== null && pets.gender !== undefined  ?` <div class="flex gap-2">
    <img class="w-5 text-gray-500 py-1"  src="https://img.icons8.com/?size=100&id=QUuwkaxmcF9h&format=png&color=000000"/>
  <p class="text-gray-500">Gender : ${pets.gender}</p>`:` <div class="flex gap-2">
   <img class="w-5 text-gray-500 py-1"  src="https://img.icons8.com/?size=100&id=QUuwkaxmcF9h&format=png&color=000000"/>
   <p class="text-gray-500">Gender : Not Available</p>`}                                  
                                    
   </div>
 ${ pets.price !== null     && pets.price !== undefined ?` <div class="flex gap-2 pb-5 border-b border-gray-300">
      <img class="w-5 text-gray-500" src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"/>
      <p class="text-gray-500  border-blue-700">Price : ${pets.price}$</p>` : ` <div class="flex gap-2 pb-5 border-b border-gray-300">
         <img class="w-5 text-gray-500" src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"/>
      <p class="text-gray-500  border-blue-700">Price : Not Available</p>`}
                                    
                                    
                                     
        </div>
         <div class="flex gap-7 mt-5">
        <button onclick="loadBtn('${pets.petId}')" class="btn w-15 rounded-xl  "><img class="w-5" src="https://img.icons8.com/?size=100&id=u8MTpAq972MG&format=png&color=000000"/></button>
          <button class="btn w-18 rounded-xl  hover:bg-cyan-700 hover:text-white text-cyan-500 font-bold" onclick="loadAdoptDetails()">Adopt</button>
      <button class="btn w-18 rounded-xl hover:bg-cyan-700 hover:text-white text-cyan-500 font-bold" onclick="loadDetails(${pets.petId})">Details</button>
  </div>
                                      
  </div>
</div> `
                                    
                                    
 videoContainer.append(card)
 });
                   
}


// for adop button

const loadAdoptDetails=()=>{
   

  let count = 3;


const adoptButtonContainer =  document.getElementById('adopt-card-body')
adoptButtonContainer.innerHTML =`
<div class=" flex flex-col items-center">
<img class="   w-10 h-10" src='https://img.icons8.com/?size=100&id=cVpPwvEfF3Bn&format=png&color=000000'/>
<h1 class="text-3xl font-bold">Congrates</h1>
<h5 class=" py-3">Adoption Process is Start for your pets</h5>
<span id="countdown-number" class="font-mono font-bold text-6xl">3</span>
</div>

`


document.getElementById('CountDownModal').showModal()


const interval = setInterval(()=>{
 count--;
 if(count <=0){
  clearInterval(interval)
  document.getElementById('CountDownModal').close();
 }else{
  document.getElementById('countdown-number').innerText= count;
 }
}, 1000);

}




// this function is for details button showing modal pop pop

const loadDetails=(petId)=>{
//    console.log(petId)

   fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
   .then(res=>res.json())
   .then(data=>loadBtnDetails(data.petData))
   .catch(error=>console.log(error))
}
   const loadBtnDetails=(petData)=>{
    console.log(petData)

      const modalContainer = document.getElementById("modal-content")
      modalContainer.innerHTML=`
       <img class="w-full rounded-lg" src=${petData.image}/>
       <h1 class="font-bold py-2 text-lg">${petData.category}</h1>
       <div class="flex gap-4">
       ${petData.breed !== null && petData.breed !==undefined ?`<div class="flex gap-1">  <img class="w-5 h-5" src ="https://img.icons8.com/?size=100&id=ETI89AT9Xeqo&format=png&color=000000"/>
       <p class="text-gray-500">Breed: ${petData.breed}</p></div>`:`<div class="flex gap-1">    <img class="w-5 h-5" src ="https://img.icons8.com/?size=100&id=ETI89AT9Xeqo&format=png&color=000000"/>
       <p class="text-gray-500">Breed : Not Available</p></div>`}
       ${petData.date_of_birth !== null && petData.date_of_birth ?` <div class="flex gap-1">
        <img class="w-6 text-gray-500" src="https://img.icons8.com/?size=100&id=wSNPBOvl6qCE&format=png&color=000000" />
         <p class="text-gray-500">Birth: ${petData.date_of_birth}</p>
       </div>`:` <div class="flex gap-1">
        <img class="w-6 text-gray-500" src="https://img.icons8.com/?size=100&id=wSNPBOvl6qCE&format=png&color=000000" />
         <p class="text-gray-500">Birth : Not Available</p>
       </div>`}
    
 
     
      
       
      </div>
  
      ${petData.gender!==null && petData.gender!==undefined?` <div class="flex gap-4 items-center">
       <div class="py-2 flex gap-1">
           <img class="w-5 text-gray-400" src="https://img.icons8.com/?size=100&id=109041&format=png&color=000000"/>
            <p class="text-gray-500">Gender : ${petData.gender}</p>
       </div>`:` <div class="flex gap-4 items-center">
       <div class="py-2 flex gap-1">
           <img class="w-5 text-gray-400" src="https://img.icons8.com/?size=100&id=109041&format=png&color=000000"/>
            <p class="text-gray-500">Gender : Not Available</p>
       </div>`}
      
${petData.price !==null && petData.price !== undefined ? `  <div class=" items-center flex gap-1">

        <img class="w-4 h-4  text-gray-500" src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"/>
        <p class="text-gray-500  border-blue-700">Price : ${petData.price}</p>
       </div>` :`  <div class=" items-center flex gap-1">

        <img class="w-4 h-4  text-gray-500" src="https://img.icons8.com/?size=100&id=85801&format=png&color=000000"/>
        <p class="text-gray-500  border-blue-700">Price : Not Available</p>
       </div>`}
     
       </div>
       <div class="flex gap-1">
       <img class="w-5 h-5 text-gray-400" src="https://img.icons8.com/?size=100&id=109041&format=png&color=000000"/>
       <p class="text-gray-500">  Vaccinated status : ${petData.vaccinated_status}</P>
       </div>
       <hr class="border-t border-gray-300 my-5">
       <h1 class="font-bold text-lg py-2">Details Information</h1>
       <p class="text-gray-500">${petData.pet_details}</p>
    
      `



    // way-1
    //  document.getElementById("modalData").click()
     // way-2
       document.getElementById("customModal").showModal()
     

   }
 

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }


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




//  show spinner



// Page Load Spinner - 2 seconds
// window.addEventListener('load',function(){

//   setTimeout(function(){
//       const loader = document.getElementById('page-loader')
//       loader.style.opacity='0';
//       loader.style.transition = 'opacity 0.5s ease';
//       setTimeout(function(){
//          loader.style.display= 'none';
//       },500)

//     },2000)

// })


loadVideos()
loadCategories()