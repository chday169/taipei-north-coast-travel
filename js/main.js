// 按讚功能
let likeCount = 0;
function likePost() {
  likeCount++;
  document.getElementById("likeCount").innerText = likeCount;
}

// 模擬瀏覽人數
let visitorCount = Math.floor(Math.random() * 1000);
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("visitorCount").innerText = visitorCount;
});

// 讀者回饋功能
function submitFeedback() {
  let comment = document.getElementById("commentBox").value;
  let feedbackList = document.getElementById("feedbackList");
  let newComment = document.createElement("p");
  newComment.innerText = comment;
  feedbackList.appendChild(newComment);
  document.getElementById("commentBox").value = "";
}
