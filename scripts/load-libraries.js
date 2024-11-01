function loadScript(src, callback) 
{
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}

const ROOT = "./scripts"

// Bootstrap, jQuery, Popper.js
loadScript(`${ROOT}/jquery-3.5.1.slim.min.js`, function () {
  loadScript(`${ROOT}/popper.min.js`, function () {
    loadScript(`${ROOT}/bootstrap.min.js`, function () {
      console.log('All libraries loaded');
    });
  });
});