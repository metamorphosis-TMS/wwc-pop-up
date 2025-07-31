function showPopup() {
  document.getElementById("popupOverlay").style.display = "block";
}
function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

// Auto-trigger after 5 seconds
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showPopup, 5000);
  });
} else {
  setTimeout(showPopup, 5000);
}

// Close when clicking outside
window.onclick = function(event) {
  const overlay = document.getElementById("popupOverlay");
  if (event.target === overlay) {
    closePopup();
  }
}
