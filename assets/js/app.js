import data from "/data.js";
import { chatbot } from "./chatbot.js";

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
      <div data-project-name="${project.name}" class="project-container cursor-pointer relative pb-[9px] borderColorCont rounded-2xl">
        <div class="p-4">
          <img src="${project.image}" alt="${project.name}" class="w-[3.3rem] h-[3.2rem] object-cover shadow rounded-2xl">
          
        </div>
        <div class="p-4 text-left mt-[-5.5rem] ml-[4.5rem]">
          <h1 class=" textColor text-md font-medium uppercase">${project.name}</h1>
          <p class=" textColor text-gray-700 truncate-lines">${project.desc}</p>
        </div>
        <div class="button flex justify-end items-start absolute inset-2">
          <button class="borderColorCont px-3 rounded-full view-btn">View</button>
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

// Iterate over each project and set the background color
data.projects.forEach((project) => {
  setProjectDetailBackgroundColor(project);
});

function setProjectDetailBackgroundColor(project) {
  const imageElement = new Image();
  // Ensure the image URL is correct and accessible
  imageElement.src = project.image;

  imageElement.onload = () => {
    const rgb = getAverageRGB(imageElement);
    // Set the background color directly
    const extractedColor = `rgb(${rgb.r},${rgb.g},${rgb.b})`;

    // Find the project container corresponding to the current project
    const projectContainer = document.querySelector(
      `.project-container[data-project-name="${project.name}"]`
    );

    if (projectContainer) {
      projectContainer.style.backgroundColor = extractedColor;
    }

    // Set the text color based on background brightness for elements with the class "textColor"
    const textElements = projectContainer.querySelectorAll(".textColor");
    textElements.forEach((textElement) => {
      textElement.style.color = isBackgroundLight(rgb) ? "black" : "white";
    });

    const buttons = projectContainer.querySelectorAll(".borderColorCont");
    buttons.forEach((button) => {
      // Add or remove classes based on background brightness
      if (isBackgroundLight(rgb)) {
        button.classList.add("border-black", "border", "text-back");
      } else {
        button.classList.add("border-white", "border", "text-white");
      }
    });

    function isBackgroundLight(color) {
      const brightness = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
      // Adjust the brightness threshold as needed
      return brightness > 150; // You can adjust this threshold based on your preference
    }
  };

  imageElement.onerror = (error) => {
    console.error("Error loading image:", error);
  };
}

function getAverageRGB(imgEl) {
  var blockSize = 5,
    defaultRGB = {
      r: 0,
      g: 0,
      b: 0,
    },
    canvas = document.createElement("canvas"),
    context = canvas.getContext && canvas.getContext("2d"),
    data,
    width,
    height,
    i = -4,
    length,
    rgb = {
      r: 0,
      g: 0,
      b: 0,
    },
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    console.error("Error getting image data:", e);
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
}
