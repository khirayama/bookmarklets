// eslint-disable-next-line no-unused-vars
function copyTextToClipboard(text) {
  const body = document.querySelector('body');
  const textarea = document.createElement('textarea');

  textarea.textContent = text;

  body.appendChild(textarea);
  textarea.select();

  const value = document.execCommand('copy');

  body.removeChild(textarea);

  return value;
}

// eslint-disable-next-line no-unused-vars
function selectText(selector = 'body') {
  const els = document.querySelector(selector).querySelectorAll('div,p,ul,li,span,a,dl,table');
  const elList = [].slice.call(els);
  const text = elList.map((el) => el.innerText).join('');

  copyTextToClipboard(text);
}
