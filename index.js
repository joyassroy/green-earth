const loadCategories=()=>{
    fetch('https://openapi.programming-hero.com/api/categories')
    .then(res=>res.json())
    .then(json=>displayCategories(json.categories));
}
const displayCategories=(data)=>{
    const categoriesContainer=document.getElementById("categories");
// category_name
    data.forEach(element => {
        console.log(element);
        const newElement=document.createElement('div');
        newElement.innerHTML=`
        <button class="bg-[#15803D] text-white text-[20px] font-light py-[8px] px-[10px] rounded-[4px] w-[100%] mb-[10px]">${element.category_name}</button>
        `;
        newElement.id=`category-${element.id}`;
        categoriesContainer.appendChild(newElement);
    });
   
}
loadCategories();

// category
// : 
// "Fruit Tree"
// description
// : 
// "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
// id
// : 
// 1
// image
// : 
// "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
// name
// : 
// "Mango Tree"
// price
// : 
// 500
const allPlants=()=>{
    fetch('https://openapi.programming-hero.com/api/plants')
    .then(res=>res.json())
    .then(json=>displayAllPlants(json.plants))
}
const displayAllPlants=(data)=>{
    // console.log(data);
    const allPlantsContainer=document.getElementById('all-plants-container');
    data.forEach(element=>{
        
        const newEl=document.createElement('div');
        newEl.innerHTML=`
            <div class="bg-white p-[16px] rounded-[8px] shadow-sm">
                    <img class="w-[330px] h-[330px]" src="${element.image}" alt="">
                    <h2 class="text-[14px] font-semibold mt-[12px]">${element.category}</h2>
                    <p class="text-[12px] mt-[8px]">${element.description}</p>
                    <div class="flex justify-between items-center mt-[8px]">
                        <button class="text-[12px] font-medium text-[#15803D] bg-[#DCFCE7] rounded-xl py-[4px] px-[12px]">${element.name}</button><button class="text-[14px] font-semibold">৳ ${element.price}</button>
                    </div>
                    <button type="button" class="btn btn-outline-primary mt-[12px] bg-[#15803D] text-white rounded-4xl w-[100%] ">Add to Cart</button>
                </div>
        `;
        allPlantsContainer.appendChild(newEl);
    });
}
allPlants();