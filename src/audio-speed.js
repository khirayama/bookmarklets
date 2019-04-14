javascript: (() => {
  const rate = Number(prompt('speed', '1.45'));
  const els = document.querySelectorAll('audio, video');
  for (let i = 0; i < els.length; i++) {
    els[i].playbackRate = rate;
  }
})();
