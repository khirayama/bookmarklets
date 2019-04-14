javascript: (function() {
  function execCopy(string) {
    const el = document.createElement('div');
    el.appendChild(document.createElement('pre')).textContent = string;
    el.style.position = 'fixed';
    el.style.left = '-100%';
    document.body.appendChild(el);
    document.getSelection().selectAllChildren(el);
    const result = document.execCommand('copy');
    document.body.removeChild(el);
    return result;
  }
  const text = `[${document.title}](${location.href})`;
  execCopy(text);
})();
