import chatData from "/botData.js";

export function chatbot() {
  document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("userInput");
    const chatboxContainer = document.getElementById("chatbox");
    const chatboxBtn = document.getElementById("animated-icon");
    const closeChatbox = document.getElementById("chatboxClose");
    const chatSection = document.querySelector(".chatSection");
    const sendChat = document.getElementById("sendChat");

    sendChat.addEventListener("click", () => {
      sendInput();
    });

    // Assuming you have an input element with the id "userInput" in your chatbot HTML

    chatInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        sendInput();
      }
    });

    // Display two default inputs when the page loads
    output(
      "How much experience do you have?",
      "I have over 2+ years of experience."
    );

    function sendInput() {
      let input = chatInput.value.trim();
      if (input !== "") {
        // Display user input immediately
        const userChatHTML = addUserChat(input);
        chatSection.innerHTML += userChatHTML;
        chatSection.scrollTop = chatSection.scrollHeight;

        // Check for an exact match in the chatData array
        const exactMatchIndex = chatData.findIndex(
          (entry) => input.toLowerCase() === entry.keyword.toLowerCase()
        );

        // If there's an exact match, use the corresponding response
        if (exactMatchIndex !== -1) {
          const botResponse = chatData[exactMatchIndex].response;
          showLoadingIcon();
          setTimeout(() => {
            hideLoadingIcon();
            appendBotResponse(input, botResponse);
          }, 2000); // 2-second delay
        } else {
          // If no exact match, check for partial matches
          const partialMatchIndex = chatData.findIndex((entry) =>
            input.toLowerCase().includes(entry.keyword.toLowerCase())
          );

          if (partialMatchIndex !== -1) {
            const botResponse = chatData[partialMatchIndex].response;
            showLoadingIcon();
            setTimeout(() => {
              hideLoadingIcon();
              appendBotResponse(input, botResponse);
            }, 2000); // 2-second delay
          } else {
            // If no match, display a default response after the delay
            showLoadingIcon();
            setTimeout(() => {
              hideLoadingIcon();
              appendBotResponse(input, "I'm not sure how to respond to that.");
            }, 1000); // 1-second delay
          }
        }
        chatInput.value = "";
      }
    }

    function appendBotResponse(userInput, botResponse) {
      const botChatHTML = addBotChat(botResponse);
      chatSection.innerHTML += botChatHTML;
      chatSection.scrollTop = chatSection.scrollHeight;
    }

    function showLoadingIcon() {
      const loadingIconHTML = `
      <div class="space-y-[3px] loading-icon  flex flex-col mx-[9px] mr-[3rem] items-start">
          <div class="chat bg-gray-400 rounded-xl py-1">
              <p class="text-sm text-left w-5 ml-3 overflow-y-auto mx-2 botLongText"><iconify-icon icon="svg-spinners:3-dots-bounce"></iconify-icon></p>
          </div>
      </div>`;

      chatSection.innerHTML += loadingIconHTML;
      chatSection.scrollTop = chatSection.scrollHeight;
    }

    function output(userInput, botResponse) {
      // Assuming addUserChat and addBotChat are functions that generate HTML for user and bot messages
      const userChatHTML = addUserChat(userInput);
      const botChatHTML = addBotChat(botResponse);
      // Appending both user and loading icon HTML to the chat section
      chatSection.innerHTML += userChatHTML + botChatHTML;
      // Scrolling to the bottom of the chat section
      chatSection.scrollTop = chatSection.scrollHeight;
    }

    function hideLoadingIcon() {
      const loadingIcon = document.querySelector(".loading-icon");
      if (loadingIcon) {
        loadingIcon.remove();
      }
    }

    function addUserChat(user) {
      const userWithLinks = convertLinks(user);

      return `
        <div class="humanChat space-y-[3px] flex flex-col mx-[9px] ml-[3rem] items-end">
            <div class="chat bg-black text-white rounded-lg py-1 ">
                <p class="text-sm text-left overflow-y-auto mx-2">${userWithLinks}</p>
            </div>
        </div>`;
    }

    function addBotChat(bot) {
      const botWithLinks = convertLinks(bot);

      return `
        <div class="botchat space-y-[3px]  flex flex-col mx-[9px] mr-[3rem] items-start">
            <div class="chat bg-gray-400 rounded-lg py-1">
                <p class="text-sm text-left overflow-y-auto mx-2 botLongText">${botWithLinks}</p>
            </div>
        </div>`;
    }

    function convertLinks(text) {
      const urlRegex = /(https?:\/\/\S+|www\.\S+)/gi;

      return text.replace(urlRegex, (url) => {
        let displayText = url;
        if (url.startsWith("www.")) {
          url = "https://" + url;
        }

        // Find the relevant chatData object based on the URL
        const matchedData = chatData.find((data) => {
          return url.startsWith("https://")
            ? url.includes(data.keyword)
            : url.includes("www.") && url.includes(data.keyword);
        });

        if (matchedData) {
          displayText = matchedData.linkName;
        }
        return `<a href="${url}" target="_blank" class="underline underline-offset-2" rel="noopener noreferrer">${displayText}</a>`;
      });
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

  // Call this function again when needed (e.g., after closing project detail)
  return `
    <div class="absolute right-2 bottom-2 md:right-4 md:bottom-6 lg:right-4 lg:bottom-7 xl:right-7 xl:bottom-9 p-4">
        <div class="chatbotContainer ">
            <button id="animated-icon" class="animate__animated shadow-2xl bg-black px-[10px] py-[5px] rounded-full  animate__bounce">
                <iconify-icon class="text-3xl mt-[4px] text-white" icon="fluent:chat-12-regular"></iconify-icon>
            </button>
            <div class="chatbox hidden shadow-xl rounded-xl" id="chatbox">
                <div class="chatContainer w-[15rem] border border rounded-xl border-zinc-500 bg-white">
                    <div class="chatHeader flex items-center border-b-[1px] p-2 border-zinc-500">
                        <div class="ring-container mt-[-2.2rem]">
                            <div class="ringring"></div>
                            <div class="circle border-2 border-white"></div>
                        </div>
                        <div class="avatar-container w-[35px] h-[35px] ">
                        <img class="rounded-full" src="/assets/images/haris.jpg" alt="Haris Khan">
                        </div>
                        <div class="info-container ml-3">
                            <h1 class="text-sm font-semibold">Haris Khan</h1>
                            <p class="text-xs">Software Engineer</p>
                        </div>
                        <button class="close" id="chatboxClose">
                            <iconify-icon class="text-2xl mt-[-15px]" icon="material-symbols:close"></iconify-icon>

                        </button>
                    </div>
                    <div class="chatSection overflow-y-auto h-[10rem] space-y-[5px] relative pt-4 flex-grow">

                    
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
  </div>`;
}
