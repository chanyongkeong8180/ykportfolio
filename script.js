const modified = new Date(document.lastModified);
const element = document.getElementById("last-updated");

if (element && !isNaN(modified.getTime())) {
    element.textContent = modified.toLocaleDateString("en-SG", {
      timeZone: "Asia/Singapore",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
}