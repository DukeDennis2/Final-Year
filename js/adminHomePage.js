function hideSidebar() {
    const sidebar = document.querySelector('.sidebar'); // Get the sidebar element
    sidebar.style.display = 'none'; // Hide the sidebar
  }

  //navigate from adminNbaData.html to the admin home page 
document.getElementById("data").addEventListener("click", function() {
  window.location.href = 'adminNbaData.html'; // Redirects to the desired page
});