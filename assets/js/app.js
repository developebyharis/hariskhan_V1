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
  const frontendTechStack = project.detail.techStack.frontend.map((stack) => {
    return `<p class="border ${stack.color} rounded-full px-2">${stack.tech}</p>`;
  });
  const backendTechStack = project.detail.techStack.backend.map((stack) => {
    return `<p class="border ${stack.color} rounded-full px-2">${stack.tech}</p>`;
  });
  const databaseTechStack = project.detail.techStack.database.map((stack) => {
    return `<p class="border ${stack.color} rounded-full px-2">${stack.tech}</p>`;
  });

  const projectImages = project.detail.images.map((image) => {
    return `<img src="${image}" class="rounded-xl w-[40rem] h-auto" alt="">`;
  });
  const description = project.detail.documentation.info.map((desc) => {
    return `<p class="text-left  text-sm">${desc}</p>`;
});
const features = project.detail.documentation.features.map((desc) => {
  return `<p class="text-left  text-sm">${desc}</p>`;
});
const problems = project.detail.documentation.problems.map((desc) => {
  return `<p class="text-left tex--sm">${desc}</p>`;
});

console.log("project:",description);

  return `
    <div class="lg:p-9 md:p-9 sm:p-9 ">
      <div class="pl-2 sm:pl-6 md:pl-9 lg:pl-9 mt-4 relative group pb-[9px] border-zinc-200 border rounded-lg">
        <div class="pt-4">
          <img src="${project.image}" alt="${project.name}" class="w-[4.6rem] h-[4.4rem] rounded-2xl">
        </div>
        <div class="pt-4 text-left mt-[-5.5rem] pr-2 ml-[5.5rem]">
          <h1 class="text-2xl font-medium uppercase">${project.name}</h1>
          <p class="text-gray-700 truncate-lines">${project.desc}</p>
        </div>
        <div class="button flex justify-end items-start absolute inset-2">
          <button class="bg-gray-50 border border-zinc-300 px-3 rounded-full close-btn">close</button>
        </div>
        <div class="techStack relative">
          <h2 class="text-left text-lg font-semibold pb-3 pt-10">Tech:</h2>
          ${frontendTechStack.length > 0 ? `
            <h1 class="text-xs text-left pb-2 ml-3">Frontend:</h1>
            <div class="flex space-x-3 ml-3 overflow-x-auto">
              ${frontendTechStack.join("")}
            </div>` : ''}
          ${backendTechStack.length > 0 ? `
            <h1 class="text-xs text-left pb-2 ml-3 pt-2">Backend:</h1>
            <div class="flex space-x-3 ml-3 overflow-x-auto">
              ${backendTechStack.join("")}
            </div>` : ''}
          ${databaseTechStack.length > 0 ? `
            <h1 class="text-xs text-left pb-2 ml-3 pt-2">Database:</h1>
            <div class="flex space-x-3 ml-3 overflow-x-auto">
              ${databaseTechStack.join("")}
            </div>` : ''}
        </div>
        <div class="images flex relative pt-[4rem] ">
          <div class="projectImages flex px-4 cursor-grab space-x-7 overflow-x-auto">
            ${projectImages.join("")}
          </div>
        </div>
        <div class="doc pt-12 space-y-8">
        <div class="info">
        <h1 class="text-left text-lg font-semibold">About:</h1>
        <p class="text-left text-md">Here is some info related to the project</p>
        ${description.join("")}
        </div>
        <div class="info">
        <h1 class="text-left text-lg font-semibold">Problem:</h1>
        <p class="text-left text-md">Here is some info related to the project</p>
        ${problems.join("")}
        </div>
        <div class="info">
        <h1 class="text-left text-lg font-semibold">Features:</h1>
        <p class="text-left text-md">Here is some info related to the project</p>
        ${features.join("")}
        </div>
      <div class="links py-5 text-left relative">
      <a href="${project.link}"><button class="bg-gray-200 border border-gray-700 cursor-pointer rounded-lg hover:bg-gray-200 px-5 py-1">Visit</button></a>
      </div>
    </div>
   `;
}




document.addEventListener("click", (event) => {
  const viewBtn = event.target.closest(".view-btn");
  const closeBtn = event.target.closest(".close-btn");
  if(viewBtn) {
    const projectContainer = viewBtn.closest(".project-container");
    const projectIndex = Array.from(projectContainer.parentElement.children).indexOf(projectContainer);
    appContainer.innerHTML = projectDetail(data.projects[projectIndex]);

  } else if (closeBtn) {

    const appHTML = app(data);
    appContainer.innerHTML = appHTML;

  }
})




