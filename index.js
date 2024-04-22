const dataLoad = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
       .then(res => res.json())
       .then(data =>{
          console.log(data.data)
        const apps = data.data.tools
        displayApps(apps)
       })
}

const displayApps = (apps) =>{
    const cardContainer = document.getElementById('card-container')
    apps.forEach(app => {
        // console.log(app)
        const appCard = document.createElement('div')
        appCard.classList = `card w-96 bg-base-100 shadow-xl`
        appCard.innerHTML= `
        <figure class="px-10 pt-10">
        <img src="${app.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body">
            <h2 class="text-2xl pb-4 font-semibold text-black">Features</h2>
            <ol class="pb-4 text-[#585858]">
                <li>1. <span>${app.features[0]}</span></li>
                <li>2. <span>${app.features[1]}</span></li>
                <li>3. <span>${app.features[2]}</span></li>
            </ol>
            <hr>
            <div class="pt-4">
                <h1 class="text-2xl text-black font-semibold pb-4">${app.name}</h1>
                <div  class="text-[text-[#585858] flex justify-between gap-2">
                    <img src="./Vector.png" alt="">
                    <p class="font-medium">${app.published_in}</p>
                </div>
            </div>
        </div>
        `;
        appCard.addEventListener('click', () => {
            handleShowDatails(app.id);my_modal_4.showModal()
        })
        cardContainer.appendChild(appCard)
    })
}

const handleShowDatails = async(id) => {
    // console.log('clickde', id)
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json();
    // console.log(data)
    const app = data.data;
    showAppDatails(app)
}

const showAppDatails = (app) => {
    console.log(app)
    const showDetailsContainer = document.getElementById('show-details-container')
    showDetailsContainer.innerHTML = '';
    const div = document.createElement('div')
    div.classList = `flex justify-between gap-10`
    div.innerHTML = `
        <div class="bg-[#EB57570D] flex-1 border-2 p-8 border-[#EB57570D] rounded-2xl">
        <h1 class="text-2xl text-black font-semibold">${app?.description}</h1>
        <div class="flex justify-around pt-5">
            <div class="text-[#03A30A] font-bold text-center">
                <p>${app.pricing[0].price}</p>
                <p>${app.pricing[0].plan}</p>
            </div>
            <div class="text-[#F28927] font-extrabold text-center">
                <p>${app.pricing[1].price}</p>
                <p>${app.pricing[1].plan}</p>
            </div>
            <div class="text-[#EB5757] font-extrabold text-center">
                <p>${app.pricing[2].price}</p>
                <p>${app.pricing[2].plan}</p>
            </div>
        </div>
        <div class="pt-6 flex justify-between gap-16">
            <div class="">
                <h2 class="text-2xl pb-4 font-semibold text-black">Features</h2>
                <ol class="pb-4 text-[#585858]">
                    <li>. <span>Natural language processing</span></li>
                    <li>. <span>Contextual understanding</span></li>
                    <li>. <span>Text generation</span></li>
            </ol>
            </div>
            <div>
                <h2 class="text-2xl pb-4 font-semibold text-black">Features</h2>
                <P class="pb-4 text-[#585858]">${app.integrations}</p>
            </div>
        </div>
        </div>
        <div class="text-center flex-1">
            <img src="${app.image_link[0]}" alt="">
            <h1 class="text-2xl text-black font-semibold pb-4">${app.input_output_examples[0].input}</h1>
            <p class="text-[#585858]">${app.input_output_examples[0].output}</p>
        </div>
    `;
    showDetailsContainer.appendChild(div)

    my_modal_4.showModal()
}

dataLoad()