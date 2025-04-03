function openMap() {
    document.getElementById('mapDrawer').classList.add('open');
  }
  function closeMap() {
    document.getElementById('mapDrawer').classList.remove('open');
  }
  function toggleDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  }

  // Close dropdown when clicking outside
  window.addEventListener('click', function(e) {
    const dropdown = document.getElementById("profileDropdown");
    const profilePic = document.querySelector('.profil-pic');
    if (dropdown.style.display === "flex" && 
        !profilePic.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });