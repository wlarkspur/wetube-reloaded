const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteComment = document.querySelectorAll("#deleteComment");
const videoComment = document.querySelectorAll("#videoComment");
const commentClick = document.querySelector("commentClick");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = `${text}`;
  const span2 = document.createElement("button");
  span2.innerText = "❌";
  span2.id = "deleteComment";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
    videoComments.prepend(newComment);
    span2.addEventListener("click", handleDeleteComment)
};

const handleSubmit = async (event) => {
  event.preventDefault(); 
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) {
    form.addEventListener("submit", handleSubmit);
    
}

const handleDeleteComment = async () => {
  const commentList = event.target.parentNode;
  const commentId = commentList.dataset.id;

  //const commentId = id;
  console.log(commentList);
  console.log(commentId);
  console.log(Event.target);

  await fetch(`/api/comments/${commentId}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  commentList.remove();
};

if (videoComment)
  videoComment.forEach((event) => {
    event.addEventListener("click", handleDeleteComment);
  });
