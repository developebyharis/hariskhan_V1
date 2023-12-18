import data from "/data.js";

const appContainer = document.getElementById("app");

function app() {
  const socialsBtn = data.socials.map((social) => {
    return `
      <a href="${social.link}" target="_blank">
        <button class="bg-gray-100 px-3 py-1 hover:bg-gray-200 focus:outline outline-blue-400 rounded-full sm:px-4">${social.name}</button>
      </a>
    `;
  });

  const projectCont = data.projects.map((project, index) => {
    return `
      <div class="project-container view-btn cursor-pointer relative group pb-[9px] border-zinc-200 border bg-gray-50 hover:bg-blue-100 rounded-lg">
        <div class="p-4">
          <img src="${project.image}" alt="${project.name}" class="w-[3.6rem] h-[3.4rem] rounded-2xl">
        </div>
        <div class="p-4 text-left mt-[-5.5rem] ml-[4.5rem]">
          <h1 class="text-md font-medium uppercase">${project.name}</h1>
          <p class="text-gray-700 truncate-lines">${project.desc}</p>
        </div>
        <div class="button flex justify-end items-start absolute inset-2">
          <button class="bg-blue-50 border border-zinc-300 hover:bg-gray-200 px-3 rounded-full view-btn">View</button>
        </div>
      </div>
    `;
  });

  return `
    <div class="justify-center items-center lg:px-[8rem] lg:pt-[6rem] md:pt-[6rem] md:px-[8rem] pb-12 h-full">
      <div class="portfolio p-6 sm:ml-auto">
        <div class="desc justify-center pb-5 sm:justify-start">
          <h1 class="text-gray-800 text-left text-xl lg:text-left lg:text-3xl md:text-3xl">${data.about[0].desc}</h1>
        </div>
        <div class="socialLinks flex relative space-x-2 px-2 py-3 mb-4 overflow-x-auto">
          ${socialsBtn.join("")}
        </div>
        <div class="projects grid grid-cols-1 pt-14 md:grid-cols-2 lg:grid-cols-2 gap-4">
          ${projectCont.join("")}
        </div>
      </div>
    </div>
  `;
}

const appHTML = app(data);
appContainer.innerHTML = appHTML;

function projectDetail(project) {
    const techStackCont = project.detail.techStack.frontend.map((tech) => {
      return `<p class="border border-zinc-200 rounded-lg px-4 py-2">${tech}</p>`;
    });
    
  
    return `
    <div class=" pl-4 mt-4 cursor-pointer relative group pb-[9px] border-zinc-200 border rounded-lg">
    <div class="pt-4 ">
      <img src="${project.image}" alt="${project.name}" class="w-[4.6rem] h-[4.4rem] rounded-2xl">
    </div>
    <div class="pt-4 text-left mt-[-5rem] ml-[5.5rem]">
      <h1 class="text-2xl font-medium uppercase">${project.name}</h1>
      <p class="text-gray-700 truncate-lines">${project.desc}</p>
    </div>
    <div class="button flex justify-end items-start absolute inset-2">
      <button class="bg-gray-50 border border-zinc-300 px-3 rounded-full view-btn">close</button>
    </div>
    <h2 class="text-lg text-left pb-5 pt-10">Tech:</h2>
    <h1 class="text-xs text-left pb-2 ml-3">Frontend:</h1>
    <div class="flex space-x-3  ml-3 overflow-x-auto">
    ${techStackCont.join("")}
    </div>
  </div>
      
               `;
  }
  
  
  

// Event listener for the "View" button
document.addEventListener("click", (event) => {
  const viewBtn = event.target.closest(".view-btn");
  if (viewBtn) {
    const projectContainer = viewBtn.closest(".project-container");
    const projectIndex = Array.from(projectContainer.parentElement.children).indexOf(projectContainer);
    appContainer.innerHTML = projectDetail(data.projects[projectIndex]);
  }
});
