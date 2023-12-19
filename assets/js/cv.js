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
            return `<img src="${img}" class="rounded-xl w-auto object-cover h-[7rem]" alt="">`;
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
        <p class="data text-gray-400">${project.status === "completed" ? project.completedYear : project.status}</p>
    </div>
    <div class="col-span-1 sm:col-span-3">
        <a href="${project.link}">
            <p class="desc hover:underline underline-offset-4">${project.name}<iconify-icon icon="material-symbols:arrow-insert" rotate="90deg"></iconify-icon></p>
        </a>
        <p class="text-sm pt-1">${project.cv_desc}</p>
        <div class="flex py-2 overflow-x-auto space-x-1"> ${allTechStack}</div>
        <div class="images overflow-x-auto space-x-4 flex">
            ${projectImages.join("")}
        </div>
    </div>

</div>
`;
    });
    const awardsCont = data.about[0].awards.map((award) => {
        return `
<div class="grid grid-cols-1 sm:grid-cols-4 gap-1">
    <div class="col-span-1 sm:col-span-1">
        <p class="data text-gray-600">${award.year}</p>
    </div>
    <div class="col-span-1 sm:col-span-3">
        <a href="${award.link}">
            <p class="desc hover:underline underline-offset-4">${award.name}<iconify-icon icon="material-symbols:arrow-insert" rotate="90deg"></iconify-icon></p>
        </a>
        <p class="text-sm">${award.purpose}</p>
    </div>
</div>
`;
    });
    const educationCont = data.about[0].education.map((edu) => {
        return `
<div class="grid grid-cols-1 sm:grid-cols-4 gap-1">
    <div class="col-span-1 sm:col-span-1">
        <p class="data text-gray-600">${edu.starting_year} - ${edu.ending_year}</p>
    </div>
    <div class="col-span-1 sm:col-span-3">
        <a href="${edu.link}">
            <p class="desc hover:underline underline-offset-4"> ${edu.degree} at ${edu.school}<iconify-icon icon="material-symbols:arrow-insert" rotate="90deg"></iconify-icon></p>
        </a>
        <p class="text-sm">${edu.location}</p>
    </div>
</div>
`;
    });
    const contactCont = data.socials.filter((contact) => !contact.download_link).map((contact) => {
        return `
<div class="grid grid-cols-1 sm:grid-cols-4 gap-1">
    <div class="col-span-1 sm:col-span-1">
        <p class="data text-gray-500">${contact.name}</p>
    </div>
    <div class="col-span-1 sm:col-span-3">
        <a href="${contact.link}">
            <p class="desc hover:underline underline-offset-4"> ${contact.username}<iconify-icon icon="material-symbols:arrow-insert" rotate="90deg"></iconify-icon></p>
        </a>
    </div>
</div>
`;
    });

    return `
<div class="cvContainer text-left lg:pt-3">
    <div class="aboutMe">
        <div class="img absolute">
            <img src="${data.about[0].image}" class="w-[6rem] h-auto rounded-full" alt="${data.about[0].name}">
            ${data.about[0].status === 'work' ? `<div class="ring-container absolute mt-[-3rem] right-10">
            <div class="ringring"></div>
            <div class="circle"></div>
        </div>` : ''}
            
        </div>
        
        <div class="info text-left  pl-[7rem]">
            <h1 class="font-medium text-2xl">${data.about[0].name}</h1>
            <p class="text-gray-700 pb-1">${data.about[0].profession} in ${data.about[0].live}</p>
            <a href="https://hariskhan.vercel.app/" class="bg-gray-200 px-3 py-1 text-xs rounded-full">hariskhan.vercel.app</a>
            <a href="/assets/Muhammad Haris Khan (6).pdf" download="/assets/Muhammad Haris Khan (6).pdf" id="downloadLink" class="bg-gray-200 px-3 py-1 text-xs rounded-full">
                <iconify-icon icon="bi:download"></iconify-icon>
            </a>
            <span id="downloadCompleteIcon" style="display: none;" class="bg-gray-200 px-3 py-1 text-xs rounded-full">
                <iconify-icon icon="material-symbols:done"></iconify-icon>
            </span>
        </div>
    </div>
    <div class="about pt-[4rem] text-left">
        <h1 class="text-sm text-gray-700">About:</h1>
        <p class="text-sm text-gray-700 pl-2 md:pl-2 lg:pl-0 pt-2">${data.about[0].desc}</p>
    </div>
    
            
        ${experiencCont.length > 0 ? `<div class="exp pt-[4rem]">
        <h1 class="text-gray-700 ">Work Experience</h1>
        <div class="expData pt-6 text-md pt-6 pl-2 md:pl-2 lg:pl-0 space-y-10 text-gray-700">
        ${experiencCont.join("")}  </div>
        </div>` : '' }
       
    <div class="project pt-[4rem]">
        <h1 class="text-gray-700 ">Projects</h1>
        <div class="projectData pt-6 pl-2 md:pl-2 lg:pl-0 text-md space-y-10 text-gray-700">
            ${projectCont.join("")}
        </div>
    </div>
    <div class="exp pt-[4rem]">
        <h1 class="text-gray-700 ">Awards</h1>
        <div class="expData pt-6 text-md pt-6 pl-2 md:pl-2 lg:pl-0 space-y-10 text-gray-700">
            ${awardsCont.join("")}
        </div>
    </div>
    <div class="exp pt-[4rem]">
        <h1 class="text-gray-700 ">Education</h1>
        <div class="expData pt-6 text-md pt-6 pl-2 md:pl-2 lg:pl-0 space-y-10 text-gray-700">
            ${educationCont.join("")}
        </div>
    </div>
    <div class="exp pt-[4rem] pb-10">
        <h1 class="text-gray-700 ">Contact</h1>
        <div class="expData pt-6 text-md pt-6 pl-2 md:pl-2 lg:pl-0 space-y-4 text-gray-700">
            ${contactCont.join("")}
        </div>
    </div>
</div>

`;
}


const cvHTML = cvPage(data);
cvContainer.innerHTML = cvHTML;

const downloadLink = document.getElementById('downloadLink');
const downloadCompleteIcon = document.getElementById('downloadCompleteIcon');

downloadLink.addEventListener('click', () => {
    downloadCompleteIcon.style.display = 'none';
    setTimeout(() => {
        downloadLink.style.display = 'none';
        downloadCompleteIcon.style.display = 'inline';
    }, 2000);
});