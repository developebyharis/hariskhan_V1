import data from "/data.js";

document.addEventListener("DOMContentLoaded", () => {
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
      <div class="project-container view-btn cursor-pointer relative group pb-[9px] hover:border-zinc-400 border-zinc-200 border bg-gray-50 hover:bg-gray-100 rounded-lg">
        <div class="p-4">
          <img src="${project.image}" alt="${project.name}" class="w-[3.3rem] h-[3.2rem] object-cover rounded-2xl">
          
        </div>
        <div class="p-4 text-left mt-[-5.5rem] ml-[4.5rem]">
          <h1 class="text-md font-medium uppercase">${project.name}</h1>
          <p class="text-gray-700 truncate-lines">${project.desc}</p>
        </div>
        <div class="button flex justify-end items-start absolute inset-2">
          <button class="bg-gray-50 border border-zinc-400 hover:border-zinc-600 hover:bg-gray-100 px-3 rounded-full view-btn">View</button>
        </div>
      </div>
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
      <div class="chatbot" id="chatbot">
      </div>
    </div>
  `;
  }

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
      return `<img src="${image}" id="i" class="rounded-xl max-w-[30rem] w-auto h-[20rem] object-cover" alt="">`;
    });

    const features = project.detail.documentation.features.map((desc) => {
      return `<p class="text-left textColor text-sm">${desc}</p>`;
    });
    const problems = project.detail.documentation.problems.map((desc) => {
      return `<p class="text-left textColor texy-sm">${desc}</p>`;
    });

    return `
    <div class="lg:p-2 md:p-2 sm:p-2 overflow-y-auto h-screen" id="projectDetail">
      <div class="pl-2 sm:pl-3 md:pl-5 lg:pl-5 mt-4 relative group pb-[9px] rounded-lg">
        <div class="pt-4">
        <img src="${project.image}" alt="${
      project.name
    }" class="w-[4.1rem] h-[4rem] object-cover rounded-2xl">
        </div>
        <div class="pt-4 text-left mt-[-5rem] pr-2 ml-[5.5rem]">
          <h1 class="text-2xl textColor font-medium uppercase">${
            project.name
          }</h1>
          <p class=" textColor truncate-lines">${project.desc}</p>
        </div>
        <div class="button flex justify-end items-start absolute inset-2">
          <button class="bg-red-200 hover:bg-red-500 border border-red-400 hover:border-red-700 px-3 rounded-full close-btn">close</button>
        </div>
        <div class="techStack relative">
          <h2 class="text-left textColor text-lg font-semibold pb-3 pt-10">Tech:</h2>
          ${
            frontendTechStack.length > 0
              ? `
            <h1 class="text-xs text-left textColor pb-2 ml-3">Frontend:</h1>
            <div class="flex space-x-3 ml-3 overflow-x-auto">
              ${frontendTechStack.join("")}
            </div>`
              : ""
          }
          ${
            backendTechStack.length > 0
              ? `
            <h1 class="text-xs text-left pb-2 textColor ml-3 pt-2">Backend:</h1>
            <div class="flex space-x-3 ml-3 overflow-x-auto">
              ${backendTechStack.join("")}
            </div>`
              : ""
          }
          ${
            databaseTechStack.length > 0
              ? `
            <h1 class="text-xs text-left pb-2 textColor ml-3 pt-2">Database:</h1>
            <div class="flex space-x-3 ml-3 overflow-x-auto">
              ${databaseTechStack.join("")}
            </div>`
              : ""
          }
        </div>
        <div class="images flex relative pt-[4rem] ">
          <div class="projectImages flex px-4 cursor-grab space-x-7 overflow-x-auto">
            ${projectImages.join("")}
          </div>
        </div>
        <div class="doc pt-12 space-y-8">
        <div class="problem space-y-4">
        <h1 class="text-left text-lg textColor font-semibold">Problem:</h1>
        <p class="text-left textColor text-md">Here is some info related to the project</p>
        ${problems.join("")}
        </div>
        <div class="feature space-y-4">
        <h1 class="text-left text-lg textColor font-semibold">Features:</h1>
        <p class="text-left text-md textColor">Here is some info related to the project</p>
        ${features.join("")}
        </div>
      <div class="links py-5 text-left relative">
      <a href="${
        project.link
      }" target="_blank"><button class="bg-gray-100 hover:bg-gray-200 hover:border-gray-600 border border-gray-400 cursor-pointer rounded-lg hover:bg-gray-200 px-5 py-1">Visit</button></a>
      </div>
    </div>
   `;
  }

  document.addEventListener("click", (event) => {
    const viewBtn = event.target.closest(".view-btn");
    const closeBtn = event.target.closest(".close-btn");
    if (viewBtn) {
      const projectContainer = viewBtn.closest(".project-container");
      const projectIndex = Array.from(
        projectContainer.parentElement.children
      ).indexOf(projectContainer);
      appContainer.innerHTML = projectDetail(data.projects[projectIndex]);
      setProjectDetailBackgroundColor(data.projects[projectIndex]);
    } else if (closeBtn) {
      const appHTML = app(data);
      appContainer.innerHTML = appHTML;
      window.location.reload(); // Reload the window
    }
  });

  const appHTML = app(data);
  appContainer.innerHTML = appHTML;

  function setProjectDetailBackgroundColor(project) {
    const imageElement = new Image();
    imageElement.src = project.image;

    imageElement.onload = () => {
      const rgb = getAverageRGB(imageElement);
      const projectBackground = document.getElementById("projectDetail");
     let DynamicBgColor = projectBackground.style.backgroundColor = `rgb(${rgb.r},${rgb.g},${rgb.b})`;

      // Set the text color based on background brightness for elements with the class "textColor"
      const textElements = document.querySelectorAll(".textColor");
      textElements.forEach((textElement) => {
        textElement.style.color = isBackgroundLight(rgb) ? "black" : "white";
      });

      function isBackgroundLight(color) {
        const brightness =
          (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
        // Adjust the brightness threshold as needed
        return brightness > 128; // You can adjust this threshold based on your preference
      }

      // Set the CSS variable value based on the project background color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      metaThemeColor.content = DynamicBgColor;

    // Set the text color based on background brightness
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
    width = canvas.width =
      imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

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

    // Adjust the color to make it lighter (you can change these values)
    var lightnessFactor = 5;
    rgb.r = Math.min(255, rgb.r + lightnessFactor);
    rgb.g = Math.min(255, rgb.g + lightnessFactor);
    rgb.b = Math.min(255, rgb.b + lightnessFactor);

    return rgb;
  }
});
