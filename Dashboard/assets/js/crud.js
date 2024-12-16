// Data array to simulate a database
let authors = [
  {
    id: 1,
    name: "Ardhie Firdaus",
    function: "Introduction to HTML",
    status: "Online",
    employed: "2024-06-01",
  },
  {
    id: 2,
    name: "Firdaus Ardhie",
    function: "Introduction to CSS",
    status: "Online",
    employed: "2024-10-23",
  },
  {
    id: 3,
    name: "Arnathea",
    function: "Introduction to JavaScript",
    status: "Offline",
    employed: "2024-14-11",
  },

  // Add more dummy data if necessary
];

// Load authors into the table
function loadAuthors() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = ""; // Clear the table

  authors.forEach((author) => {
    const row = `
      <tr>
        <td>
          <div class="d-flex px-2 py-1">
            <div class="d-flex flex-column justify-content-center">
              <h6 class="mb-0 text-sm">${author.name}</h6>
            </div>
          </div>
        </td>
        <td>
          <p class="text-xs font-weight-bold mb-0">${author.function}</p>
          <p class="text-xs text-secondary mb-0">Course</p>
        </td>
        <td class="align-middle text-center text-sm">
          <span class="badge badge-sm ${
            author.status === "Online"
              ? "bg-gradient-success"
              : "bg-gradient-secondary"
          }">${author.status}</span>
        </td>
        <td class="align-middle text-center">
          <span class="text-secondary text-xs font-weight-bold">${
            author.employed
          }</span>
        </td>
        <td class="align-middle">
          <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-id="${
            author.id
          }" onclick="openEditModal(${author.id})">
            Edit
          </a>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Open the Add Modal
document
  .getElementById("addAuthorForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const newAuthor = {
      id: authors.length + 1, // Incremental ID for simplicity
      name: document.getElementById("addAuthorName").value,
      function: document.getElementById("addAuthorFunction").value,
      status: document.getElementById("addAuthorStatus").value,
      employed: document.getElementById("addAuthorEmployed").value,
    };

    authors.push(newAuthor); // Add new author to the list
    loadAuthors(); // Reload the table
    $("#addAuthorModal").modal("hide"); // Hide modal
    document.getElementById("addAuthorForm").reset(); // Reset form
  });

// Open the Edit Modal
function openEditModal(id) {
  const author = authors.find((author) => author.id === id);

  document.getElementById("editAuthorId").value = author.id;
  document.getElementById("editAuthorName").value = author.name;
  document.getElementById("editAuthorFunction").value = author.function;
  document.getElementById("editAuthorStatus").value = author.status;
  document.getElementById("editAuthorEmployed").value = author.employed;

  $("#editAuthorModal").modal("show");
}

// Save the edited author
document
  .getElementById("editAuthorForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("editAuthorId").value;
    const updatedAuthor = {
      id: parseInt(id),
      name: document.getElementById("editAuthorName").value,
      function: document.getElementById("editAuthorFunction").value,
      status: document.getElementById("editAuthorStatus").value,
      employed: document.getElementById("editAuthorEmployed").value,
    };

    const authorIndex = authors.findIndex(
      (author) => author.id === parseInt(id)
    );
    authors[authorIndex] = updatedAuthor;

    loadAuthors(); // Reload the table
    $("#editAuthorModal").modal("hide"); // Hide modal
  });

// Load initial authors on page load
document.addEventListener("DOMContentLoaded", loadAuthors);
