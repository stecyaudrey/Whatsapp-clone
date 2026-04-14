// 1. Find the badge
const badge = document.getElementById("msg-badge");
const chatRow = document.querySelector(".chat-row");

// 2. Wait for the click
chatRow.onclick = function() {
  // 3. Make it disappear!
  badge.style.display = "none";
};
