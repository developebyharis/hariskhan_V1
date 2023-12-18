import data from "/data.js";
const appContainer = document.getElementById("app");

function app() {
   
  const socialsBtn = data.socials.map((social) => {
    return `
      <a href="${social.link}" target="_blanck">
        <button class="bg-gray-100 px-3 py-1 hover:bg-gray-200 focus:outline outline-blue-400 rounded-full sm:px-4">${social.name}</button>
      </a>
    `;
  });

  const projectCont = data.projects.map((project) => {

    return `
      <a href="#" class="relative group pb-[9px] border-zinc-200 border bg-gray-50 hover:bg-blue-100 rounded-lg">
        <div class="p-4 ">
          <img src="${project.image}" alt="${project.name}" class="w-[3.6rem] h-[3.4rem] rounded-2xl">
        </div>
        <div class="p-4 text-left mt-[-5.5rem] ml-[4.5rem]">
          <h1 class="text-md font-medium uppercase	">${project.name}</h1>
          <p class="text-gray-700 truncate-lines">${project.desc}</p>
        </div>
        <div class="button flex justify-end items-start absolute inset-2">
          <button class="bg-blue-50 border border-zinc-300 hover:bg-gray-200 px-3 rounded-full">View</button>
        </div>
      </a>
    `;
  });
  
  

  return `
    <div class="justify-center items-center lg:px-[8rem] lg:pt-[6rem] md:pt-[6rem] md:px-[8rem] pb-12 h-full">
      <div class="portfolio p-6 sm:ml-auto">
        <div class="desc justify-center pb-5 sm:justify-start">
          <h1 class=" text-gray-800 text-left text-xl lg:text-left lg:text-3xl md:text-3xl">${data.about[0].desc}</h1>
        </div>
        <div class="socialLinks flex  relative space-x-2 px-2 py-3 mb-4 overflow-x-auto">
        ${socialsBtn.join("")}
        </div>
        <div class="projects grid  grid-cols-1 pt-14 md:grid-cols-2 lg:grid-cols-2 gap-4">
          ${projectCont.join("")}
        </div>
      </div>
    </div>
  `;
}


 

const appHTML = app(data);
appContainer.innerHTML = appHTML;



    