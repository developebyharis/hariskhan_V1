document.addEventListener("DOMContentLoaded", () => {


    const chatbotContainer = document.getElementById("chatbot");

    function chatbot() {
        return `
<div class="absolute right-2 bottom-2 md:right-4 md:bottom-6 lg:right-4 lg:bottom-7 xl:right-7 xl:bottom-9 p-4">
    <div class="chatbotContainer ">
        <button id="animated-icon" class="animate__animated shadow-2xl bg-black px-[10px] py-[5px] rounded-full  animate__bounce">
            <iconify-icon class="text-4xl mt-[4px] text-white" icon="fluent:bot-20-regular"></iconify-icon>
        </button>
        <div class="chatbox hidden shadow-xl rounded-xl" id="chatbox">
            <div class="chatContainer w-[15rem] border border rounded-xl border-zinc-500 bg-white">
                <div class="chatHeader flex items-center border-b-[1px] p-2 border-zinc-500">
                    <div class="ring-container mt-[-2.1rem]">
                        <div class="ringring"></div>
                        <div class="circle border-2 border-white"></div>
                    </div>
                    <div class="avatar-container outline w-[35px] h-[35px] outline-green-600 outline-offset-2 outline-2 bg-black ">

                        <iconify-icon class="text-3xl ml-[2.3px] mt-[1.3px] text-white" icon="fluent:bot-20-regular"></iconify-icon>

                    </div>
                    <div class="info-container ml-4">
                        <h1 class="text-sm font-semibold">Haris Khan</h1>
                        <p class="text-xs">Software Engineer</p>
                    </div>
                    <button class="close" id="chatboxClose">
                        <iconify-icon class="text-2xl mt-[-15px]" icon="material-symbols:close"></iconify-icon>

                    </button>
                </div>
                <div class="chatSection  overflow-y-auto h-[10rem] space-y-[5px] relative pt-4 flex-grow">

                </div>
                <div class=" relative chatInput pt-4 ">
                    <div class="inputcontainer rounded-lg border-t-[1px] border-zinc-500 pt-[6px] px-1 flex">
                        <input type="text" autocomplete="off" id="userInput" class="rounded-lg focus:outline-none w-full px-3" placeholder="Ask..">
                        <button class="focus:outline-none" id="sendChat">
                            <iconify-icon class="bg-black hover:bg-gray-900 text-white rounded-full p-2 text-xl" icon="material-symbols:send-outline"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    const chatbotHTML = chatbot();
    chatbotContainer.innerHTML = chatbotHTML;

    const chatInput = document.getElementById("userInput");
    const chatboxContainer = document.getElementById("chatbox");
    const chatboxBtn = document.getElementById("animated-icon");
    const closeChatbox = document.getElementById("chatboxClose");
    const chatSection = document.querySelector(".chatSection");
    const sendChat = document.getElementById("sendChat");

    const userInput = ["Hello", "Name", "who are you?", "Experience", "Projects"];
    const botInput = ["hey there", "My name is Harois Khan.", "I am a Software Engineer based in Peshawar PK.", "How are you", "I have 2+ years of experience", "I built four projects"];

    
    sendChat.addEventListener('click', () => {
        sendInput();
    });

    chatInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendInput();
        }
    });
    // Display two default inputs when the page loads
    output("How much experience do you have?", "I have over 2+ years of experience.");

    function sendInput() {
        let input = chatInput.value.trim();
        if (input !== '') {
            const matchedIndex = userInput.findIndex(phrase => input.toLowerCase().includes(phrase.toLowerCase()));
            if (matchedIndex !== -1) {
                const botResponse = botInput[matchedIndex];
                output(input, botResponse);
            } else {
                output(input, "I'm not sure how to respond to that.");
            }
            chatInput.value = "";
        }
    }

    function output(userInput, botResponse) {
        const userChatHTML = addUserChat(userInput);
        const botChatHTML = addBotChat(botResponse);
        chatSection.innerHTML += userChatHTML + botChatHTML;
        chatSection.scrollTop = chatSection.scrollHeight;
    }

    function addUserChat(user) {
        return `
        <div class="humanChat space-y-[3px] flex flex-col mx-[8px] ml-[3rem] items-end">
            <div class="chat bg-black text-white rounded-lg py-1  ">
                <p class="text-sm text-right mx-3">${user}</p>
            </div>
        </div>`;
    }

    function addBotChat(bot) {
        return `
        <div class="botchat space-y-[3px] flex flex-col mx-[8px] mr-[3rem] items-start">
            <div class="chat bg-gray-400 rounded-lg py-1">
                <p class="text-sm text-left mx-3">${bot}</p>
            </div>
        </div>`;
    }


    function toggleChatbox() {
        chatboxContainer.classList.toggle("hidden");
        chatboxBtn.classList.toggle("hidden");
    }

    closeChatbox.addEventListener("click", () => {
        chatboxBtn.classList.remove("hidden");
        chatboxContainer.classList.add("hidden");
    });

    chatboxBtn.addEventListener("click", () => {
        addBounceAnimation();
        toggleChatbox();
    });

    function addBounceAnimation() {
        const iconElement = document.getElementById("animated-icon");
        iconElement.classList.add("animate__bounce");
        setTimeout(() => {
            iconElement.classList.remove("animate__bounce");
        }, 1000); // Adjust the duration accordingly
    }

    setInterval(addBounceAnimation, 4000);
});