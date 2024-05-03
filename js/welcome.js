
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar'); // Get the sidebar element
    sidebar.style.display = 'none'; // Hide the sidebar
}

const linkdinButton = document.getElementById('linkdIn');


//on the welcome page - going to register page  
function login(){
  window.location.href = 'register.html';
}



document.cookie = "Demo@gmail.com";
document.cookie = "Demo@gmail.com; expires= 5 may 2024 12:00:00 UTC";
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";




const cookieStorage = {
  getItem: (item) => {
      const cookies = document.cookie
          .split(';')
          .map(cookie => cookie.split('='))
          .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[item];
  },
  setItem: (item, value) => {
      document.cookie = `${item}=${value};`
  }
}

const storageType = cookieStorage;
const consentPropertyName = 'jdc_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {

  const acceptFn = event => {
      saveToStorage(storageType);
      consentPopup.classList.add('hidden');
  }
  const consentPopup = document.getElementById('consent-popup');
  const acceptBtn = document.getElementById('accept');
  acceptBtn.addEventListener('click', acceptFn);

  if (shouldShowPopup(storageType)) {
      setTimeout(() => {
          consentPopup.classList.remove('hidden');
      }, 2000);
  }

};