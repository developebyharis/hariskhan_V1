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

  const projectCont = data.projects.map((project) => {
    return `
      <a href="projectDetail.html?name=${project.name}">
      <div data-project-name="${project.name}" class="project-container border hover:border-zinc-400 border-zinc-200 cursor-pointer relative pb-[9px] borderColorCont rounded-2xl" >
        <div class="p-4">
          <img src="${project.image}" alt="${project.name}" class="w-[3.3rem] h-[3.2rem] object-cover shadow rounded-2xl">
          
        </div>
        <div class="p-4 text-left mt-[-5.5rem] ml-[4.5rem]">
          <h1 class=" textColor text-md font-medium uppercase">${project.name}</h1>
          <p class=" textColor text-gray-700 truncate-lines">${project.desc}</p>
        </div>
        <div class="button flex justify-end items-start absolute inset-2">
          <button class="borderColorCont px-3 rounded-full border hover:border-zinc-400 border-zinc-200 view-btn">View</button>
        </div>
      </div></a>
    `;
  });

  return `
    <div class="justify-center items-center pt-10 lg:px-[8rem] lg:pt-[6rem] md:pt-[6rem] md:px-[8rem] pb-12 h-full">
      <div class="portfolio p-6 sm:ml-auto">
        <div class="desc justify-center pb-5 sm:justify-start">
          <h1 class="text-gray-800 text-left text-xl lg:text-left lg:text-3xl md:text-3xl">${
            data.about[0].desc
          }</h1>
        </div>
        <div class="socialLinks flex relative space-x-2 px-2 py-3 mb-4 overflow-x-auto">
          ${socialsBtn.join("")}
        </div>
        <div class="projects grid grid-cols-1 pt-14 md:grid-cols-2 lg:grid-cols-2 gap-4">
          ${projectCont.join("")}
        </div>
      </div>
     <div id="chatbot"></div>


    </div>
  `;
}
const appHTML = app(data);
appContainer.innerHTML = appHTML;

const chatbotHTML = chatbot();
const chatbotContainer = document.getElementById("chatbot");
chatbotContainer.innerHTML = chatbotHTML;

