javascript: (() => {
  const contents = [
    // Id
    document
      .querySelector('#question-title')
      .innerText.split('.')[0]
      .trim(),
    // Name
    document
      .querySelector('#question-title')
      .innerText.split('.')[1]
      .trim(),
    // URL
    location.href,
    // Difficulty
    document.querySelector('div[diff]').innerText.trim(),
    // Topics
    Array.from(document.querySelectorAll('a[href*="/tag/"]'))
      .map((el) => el.innerText)
      .join(' / '),
    // Solution
    document.querySelector('div[data-key=solution]').dataset.disabled !== 'true' ? 'Yes' : 'No'
  ];

  function execCopy(string) {
    const tmp = document.createElement('div');
    const pre = document.createElement('pre');
    pre.style.webkitUserSelect = 'auto';
    pre.style.userSelect = 'auto';
    tmp.appendChild(pre).textContent = string;
    const s = tmp.style;
    s.position = 'fixed';
    s.right = '200%';
    document.body.appendChild(tmp);
    document.getSelection().selectAllChildren(tmp);
    const result = document.execCommand('copy');
    document.body.removeChild(tmp);
    return result;
  }
  execCopy(contents.join(','));
})();
