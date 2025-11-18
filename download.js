// download.js

// Dictionary mapping button text to file path
const downloadMap = {
  //
  //"Home": "files/home.txt",
  //"About": "files/about.txt",
  //"Services": "files/services.txt",
  //"Contact": "files/contact.txt",
  //"Blog": "files/blog.txt",
  //"Portfolio": "files/portfolio.txt",
  //"FAQ": "files/faq.txt",
  //"Support": "files/support.txt"
  // Template :
   "Temurin" : "https://adoptium.net/download?link=https%3A%2F%2Fgithub.com%2Fadoptium%2Ftemurin25-binaries%2Freleases%2Fdownload%2Fjdk-25.0.1%252B8%2FOpenJDK25U-jdk_x64_windows_hotspot_25.0.1_8.msi&vendor=Adoptium"
  
};

// Attach event listeners to buttons
window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('#buttons button');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const file = downloadMap[btn.textContent];
      if (!file) return; // no file assigned

      // Attempt to download
      const link = document.createElement('a');
      link.href = file;
      link.download = ''; // ensures it downloads instead of opening
      document.body.appendChild(link); // required for Firefox
      link.click();
      document.body.removeChild(link);
    });
  });
});
