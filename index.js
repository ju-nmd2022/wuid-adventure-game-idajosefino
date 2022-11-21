function fullscreenchanged(event) {
    if (document.fullscreenElement) {
      console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
    // } else {
    //   console.log('Leaving fullscreen mode.');
    // 
}
  };
  
  const el = document.getElementById('fullscreen-div');
  
  el.addEventListener('fullscreenchange', fullscreenchanged);
  
  document.getElementById('toggle-fullscreen').addEventListener('click', (event) => {
    if (document.fullscreenElement) {
    //   exitFullscreen is only available on the Document object.
      document.exitFullscreen();
    } else {
      el.requestFullscreen();
    }
  })
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/fullscreenchange_event 