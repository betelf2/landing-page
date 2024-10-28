function loadScript(src, callback) 
{
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}
  
// Bootstrap, jQuery, Popper.js
loadScript('scripts/jquery-3.5.1.slim.min.js', function () {
  loadScript('scripts/popper.min.js', function () {
    loadScript('scripts/bootstrap.min.js', function () {
      console.log('All libraries loaded');
    });
  });
});