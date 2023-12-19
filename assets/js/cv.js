import data from "/data.js";

const cvContainer = document.getElementById("cv");

function cvPage() {

    const experiencCont = data.about[0].experience.map((exp) => {
        return `
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <div class="col-span-1 sm:col-span-1">
                    <p class="data text-gray-600">${exp.startingDate} - ${exp.endingDate}</p>
                </div>
                <div class="col-span-1 sm:col-span-3">
                    <a href="${exp.link}">
                        <p class="desc hover:underline underline-offset-4">${exp.position} at ${exp.company}<iconify-icon icon="material-symbols:arrow-insert" rotate="90deg"></iconify-icon></p>
                    </a>
                    <p class="text-sm">${exp.city}, ${exp.country}</p>
                </div>
            </div>
        `;
    });
    
    
    const projectCont = data.projects.map((project) => {
        const projectImages = project.detail.images.map((img) => {
            return `<img src="${img}" class="rounded-xl w-[10rem] h-[6rem]" alt="">`;
        });
        const techStack = project.detail.techStack;

        const allTechStack = [
            ...techStack.frontend,
            ...techStack.backend,
            ...techStack.database
        ].flatMap(stack => `<p class=""><span class="px-1">•</span>${stack.tech}</p>`).join('');
        
        console.log(allTechStack);
        
    
        return `
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <div class="col-span-1 sm:col-span-1">
                    <p class="data text-gray-600">${project.status === "completed" ? project.completedYear : project.status}</p>
                </div>
                <div class="col-span-1 sm:col-span-3">
                    <a href="${project.link}">
                        <p class="desc hover:underline underline-offset-4">${project.name}<iconify-icon icon="material-symbols:arrow-insert" rotate="90deg"></iconify-icon></p>
                    </a>
                    <p class="text-sm pt-1">${project.cv_desc}</p>
                    <div class="flex pt-4 overflow-x-auto space-x-1"> ${allTechStack}</div>
                    <div class="images pt-4 overflow-x-auto space-x-4 flex">
                        ${projectImages.join("")}
                    </div>
                </div>
                    
                </div>
        `;
    });
    
    return `
<div class="cvContainer text-left lg:pt-12">
    <div class="aboutMe">
        <div class="img absolute">
            <img src="${data.about[0].image}" class="w-[6rem] h-auto rounded-full" alt="${data.about[0].name}">
        </div>
        <div class="info text-left  pl-[7rem]">
            <h1 class="font-medium text-2xl">${data.about[0].name}</h1>
            <p class="text-gray-700 pb-1">${data.about[0].profession} in ${data.about[0].live}</p>
            <a href="#" class="bg-gray-200 px-3 py-1 text-xs rounded-full">hariskhan.vercel.app</a>
        </div>
    </div>
    <div class="about pt-[4rem] text-left">
        <h1 class="text-sm text-gray-700">About:</h1>
        <p class="text-sm text-gray-700 pl-2 md:pl-2 lg:pl-0 pt-2">${data.about[0].desc}</p>
    </div>
    <div class="exp pt-[3rem]">
        <h1 class="text-gray-700 ">Work Experience</h1>
        <div class="expData pt-6 text-md pt-6 pl-2 md:pl-2 lg:pl-0 space-y-10 text-gray-700">
            ${experiencCont.join("")}
        </div>
    </div>
    <div class="project pt-[3rem]">
        <h1 class="text-gray-700 ">Projects</h1>
        <div class="projectData pt-6 pl-2 md:pl-2 lg:pl-0 text-md space-y-10 text-gray-700">
            ${projectCont.join("")}
        </div>
    </div>
</div>

`;
}

const cvHTML = cvPage(data);
console.log(cvHTML);
cvContainer.innerHTML = cvHTML;