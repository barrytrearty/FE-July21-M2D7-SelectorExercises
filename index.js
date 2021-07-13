// JS Exercises

const navbar = document.getElementsByTagName("nav")[0];
const mainTitle = document.getElementsByTagName("h1")[0];
const jumbotron = document.getElementsByClassName("jumbotron")[0];
const magnifyingGlass = document.querySelector("a.text-muted svg");
const blogPostsParagraphs = document.querySelectorAll(
  ".blog-post p:nth-child(3)"
);
const newerButton = document.querySelectorAll("nav.blog-pagination .btn")[1];
const olderButton = document.querySelectorAll("nav.blog-pagination .btn")[0];
const blogMain = document.getElementsByClassName("blog-main")[0];

console.log(olderButton);

// console.log(blogPosts);

const jumbotronHeadingColumnContainer = document.querySelector(
  ".jumbotron div:first-child"
);

const elsewhereLinks = document.querySelectorAll("div.p-4 li");
console.log(elsewhereLinks);

// EX11) Write a function to add a new link into the navbar

const addNewLink = function (name) {
  let newLink = document.createElement("a");
  newLink.classList.add("p-2", "text-muted");
  newLink.innerText = name;
  newLink.href = "#";
  navbar.appendChild(newLink);
};

addNewLink("New");
// EX12) Write a function to change the color of the main title

const changeTitle = function (newColor) {
  mainTitle.style.color = newColor;
};

changeTitle("pink");

// EX13) Write a function to change the background of the jumbotron

console.log(jumbotronHeadingColumnContainer);

const changeJumbotronBg = function (newColor) {
  jumbotron.classList.remove("bg-dark");
  jumbotron.style.backgroundColor = newColor;
};

changeJumbotronBg("green");

// EX14) Write a function to remove all the links under "Elsewhere"

// EX15) Write a function to change the column size for heading in jumbotron

const headingColumnSize = function (colNumber) {
  jumbotronHeadingColumnContainer.classList.remove("col-md-6");
  jumbotronHeadingColumnContainer.classList.add(colNumber);
};

headingColumnSize("col-6");

// EX16) Write a function to remove the "Search" magnifying glass icon

const removeMagnifyingGlass = function () {
  magnifyingGlass.remove();
};

removeMagnifyingGlass();

// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post

const trimStartOfBlogPostParagraphs = function () {
  for (post of blogPostsParagraphs) {
    // let trimmed = post.innerText.slice(50);
    // post.innerText = trimmed;
    post.innerText = post.innerText.slice(50);
  }
};

trimStartOfBlogPostParagraphs();

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)

const addNewBlogPost = function () {
  let newPost = document.createElement("div");
  newPost.innerHTML = ` <h2 class="blog-post-title">New blog post</h2>
  <p>
    Cum sociis natoque penatibus et magnis
    <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
    vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
    consectetur purus sit amet fermentum.
  </p>`;
  newPost.classList.add("blog-post");
  blogMain.appendChild(newPost);
};

newerButton.classList.remove("disabled");
newerButton.onclick = addNewBlogPost;

// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post

const removeLastBlogPost = function () {
  let lastBlogPost = document.querySelector(".blog-post:last-of-type");
  console.log(lastBlogPost);
  lastBlogPost.remove();
};

olderButton.onclick = removeLastBlogPost;

// EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name

const authorNames = document.querySelectorAll("p.blog-post-meta a");
console.log(authorNames);

const addAlertToAuthorNames = function () {
  for (author of authorNames) {
    let alertName = author.innerText;
    author.addEventListener("mouseover", function () {
      alert(`${alertName}`);
    });
  }
};

addAlertToAuthorNames();
