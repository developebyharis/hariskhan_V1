import data from "/data.js";

const projectDetailContainer = document.getElementById("projectDetail");

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
    <div class="pl-2 sm:pl-3 md:pl-5 lg:pl-5  mt-4 relative group pb-[9px] rounded-lg">
      <div class="pt-4">
        <img src="${project.image}" alt="${
    project.name
  }" class="w-[4.1rem] h-[4rem] object-cover rounded-2xl">
      </div>
      <div class="pt-4 text-left mt-[-5rem] pr-2 ml-[5.5rem]">
        <h1 class="text-2xl textColor font-medium uppercase">${
          project.name
        }</h1>
        <p class="textColor truncate-lines">${project.desc}</p>
      </div>
      <a href="index.html">
      <div class="button flex justify-end items-start absolute inset-2">
        <button class="  borderColorCont  px-3 rounded-full close-btn">close</button>
      </div></a>
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
      <div class="doc pt-12 space-y-8 pr-2">
        <div class="problem space-y-4">
          <h1 class="text-left text-lg textColor font-semibold">Problem:</h1>
          <p class="text-left textColor text-md">Here is some info related to the project</p>
          ${problems.join("")}
        </div>
        <div class="feature space-y-4 pr-2">
          <h1 class="text-left text-lg textColor font-semibold">Features:</h1>
          <p class="text-left text-md textColor">Here is some info related to the project</p>
          ${features.join("")}
        </div>
        <div class="links py-5 text-left relative">
          <a href="${project.link}" target="_blank">
            <button class=" borderColorCont cursor-pointer rounded-full px-8 py-2">Visit</button>
          </a>
        </div>
      </div>
    </div>
  `;
}

function setProjectDetailBackgroundColor(project) {
  const imageElement = new Image();
  // Ensure the image URL is correct and accessible
  imageElement.src = project.image;

  imageElement.onload = () => {
    const rgb = getAverageRGB(imageElement);
    // Set the background color directly
    const extractedColor = `rgb(${rgb.r},${rgb.g},${rgb.b})`;
    document.body.style.backgroundColor = extractedColor;

   
    // Set the text color based on background brightness for elements with the class "textColor"
    const textElements = document.querySelectorAll(".textColor");
    textElements.forEach((textElement) => {
      textElement.style.color = isBackgroundLight(rgb) ? "black" : "white";
    });

    const borderColorCont = document.querySelectorAll(".borderColorCont");

    borderColorCont.forEach((element) => {
      element.classList.add(
        "border",
        "border-black",
        "text-white",
        "text-black",
        "border-white"
      ); // Add all three classes

      // Dynamically remove "border-black" or "border-white" based on background color
      if (isBackgroundLight(rgb)) {
        element.classList.remove("border-white", "text-white");
      } else {
        element.classList.remove("border-black", "text-black");
      }
    });

    function isBackgroundLight(color) {
      const brightness = (color.r * 299 + color.g * 587 + color.b * 114) / 1000;
      // Adjust the brightness threshold as needed
      return brightness > 150; // You can adjust this threshold based on your preference
    }

    // Set the CSS variable value based on the project background color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    metaThemeColor.content = extractedColor;
  };

  imageElement.onerror = (error) => {
    console.error("Error loading image:", error);
  };
}

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const project = data.projects.find((p) => p.name === name);

if (!project) {
  projectDetailContainer.innerHTML = `<p>No project found with the name ${name}</p>`;
} else {
  const projectDetailHTML = projectDetail(project);
  projectDetailContainer.innerHTML = projectDetailHTML;
  setProjectDetailBackgroundColor(project);
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
