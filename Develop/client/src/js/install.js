const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installBtn.style.visibility = "visible";
  butInstall.addEventListener("click", async (event) => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
      return;
    }
    event.prompt();
    installBtn.setAttribute("disabled", true);
    installBtn.textContent = "Installed!";
  });
});
// TODO (Might have to move outside od ()) Implement a click event handler on the `butInstall` element

// TODO Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  textHeader.textContent = "Successfully installed!";
  console.log("👍", "appinstalled", event);
});
