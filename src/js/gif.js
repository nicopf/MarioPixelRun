window.onload = function () {
   document.getElementById('m-gif').style.backgroundImage =
      'url(../src/assets/images/MarioRun.gif?' + new Date().getTime() + ')';

   setTimeout(function () {
      document.getElementById('d-gif').style.backgroundImage =
         'url(../src/assets/images/DustLarger.gif?' +
         new Date().getTime() +
         ')';
   }, 3000);
};
