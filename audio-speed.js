javascript:(() => {
  let rate = Number(prompt('speed', '1.45'));
  let els = document.querySelectorAll('audio, video');
  for (let i = 0; i < els.length; i++) {
    els[i].playbackRate = rate;
  }
})();
