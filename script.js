const modified = new Date(document.lastModified);
const element = document.getElementById("last-updated");

if (!isNaN(modified.getTime())) {
    element.dateTime = modified.toISOString().split("T")[0];
    element.textContent = modified.toLocaleDateString("en-SG", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
}