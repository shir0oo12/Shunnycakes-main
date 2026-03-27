  // Toggle button for extra shiets
        function toggleInterests() {
            const interests = document.getElementById("more-interests");
            if (interests.style.display === "none") {
                interests.style.display = "block";
            } else {
                interests.style.display = "none";
            }
        }

        // chat box thingy
        function sendMessage() {
            const chatBox = document.getElementById('chat-box');
            const userMessage = document.getElementById('userMessage').value;
            
            if (userMessage.trim() === "") return;

            //kuromi (built in chat right)
            const userChat = `
                <div class="message right">
                    <img src="yup.jpg" alt="Avatar" class="avatar">
                    <div class="text">
                        <p>${userMessage}</p>
                        <span class="time">${new Date().toLocaleTimeString()}</span>
                    </div>
                </div>
            `;
            chatBox.innerHTML += userChat;
            document.getElementById('userMessage').value = "";

            // response (my melody) 
            setTimeout(() => {
                const botResponse = `
                    <div class="message left">
                        <img src="yep.jpg" alt="Avatar" class="avatar">
                        <div class="text">
                            <p>woah :0</p>
                            <span class="time">${new Date().toLocaleTimeString()}</span>
                        </div>
                    </div>
                `;
                chatBox.innerHTML += botResponse;
                chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
            }, 1000);
        }
        