const API_URL = "https://jsonplaceholder.typicode.com/comments";
const main = document.getElementById("main");
const commentCountSpan = document.getElementById("count");
const paginationDiv = document.getElementById("pagination");

let currentPage = 1;
const commentsPerPage = 10; // Change this value to set comments per page

// Get initial comments
getComments(API_URL);

async function getComments(url) {
    try {
        const response = await fetch(url);
        const comments = await response.json();
        displayComments(comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
    }
}

function displayComments(comments) {
    main.innerHTML = "";
    commentCountSpan.textContent = comments.length;

    const startIndex = (currentPage - 1) * commentsPerPage;
    const endIndex = startIndex + commentsPerPage;
    const displayedComments = comments.slice(startIndex, endIndex);

    displayedComments.forEach(comment => {
        const { name, email, body } = comment;

        const commentEl = document.createElement("div");
        commentEl.classList.add("comment");

        commentEl.innerHTML = `
      <h3>Name: ${name}</h3>
      <p>Email: ${email}</p>
      <p>Body: ${body}</p>
      <hr>
    `;

        main.appendChild(commentEl);
    });

    renderPagination(comments.length);
}

function renderPagination(totalComments) {
    const totalPages = Math.ceil(totalComments / commentsPerPage);
    paginationDiv.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", () => {
            currentPage = i;
            getComments(API_URL);
        });
        paginationDiv.appendChild(button);
    }
}