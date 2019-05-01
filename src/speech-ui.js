javascript: (() => {
  const text = String(window.document.getSelection());
  const inputStyle = 'border-radius: 2px; border: none; padding: 8px;';
  const buttonStyle =
    'border-radius: 2px; border: none; color: #666;  background: #fff; width: 80px; padding: 8px;';
  const height = window.parent.screen.height;
  const div = window.document.createElement('div');
  div.style.color = '#666';
  div.style.fontFamily = 'sans-serif';
  div.style.fontSize = '14px';
  div.style.position = 'fixed';
  div.style.top = '0';
  div.style.right = '0';
  div.style.width = '320px';
  div.style.height = height + 'px';
  div.style.background = 'rgba(0, 0, 0, .4)';
  div.style.padding = '24px';
  div.style.zIndex = '1000000';
  div.innerHTML = `<textarea class="textarea" style="width: 100%; height: calc(100% - 300px); ${inputStyle}">${text}</textarea><div style="height: 300px;">  <table style="width: 100%;">    <tr style="text-align: right;">      <th style="font-weight: normal; text-align:left; color: #fff; font-size: 14px; ">Lang</th>      <td><input type="text" value="ja-JP" class="lang-input" style="width: 80px; text-align: right; ${inputStyle}"></td>    </tr>    <tr style="text-align: right;">      <th style="font-weight: normal; text-align:left; color: #fff;">Rate(Speed)</th>      <td><input type="text" value="2.0" class="rate-input" style="width: 80px; text-align: right; ${inputStyle}"></td>    </tr>  </table>  <button class="start-button" style="${buttonStyle}">start</button>  <button class="reset-button" style="${buttonStyle}">reset</button>  <button class="close-button" style="${buttonStyle}">close</button></div>`;
  window.document.querySelector('body').appendChild(div);
  setTimeout(() => {
    let synthes = null;
    const textarea = div.querySelector('.textarea');
    const langInput = div.querySelector('.lang-input');
    const rateInput = div.querySelector('.rate-input');
    const startButton = div.querySelector('.start-button');
    const resetButton = div.querySelector('.reset-button');
    const closeButton = div.querySelector('.close-button');
    startButton.addEventListener('click', () => {
      if (synthes !== null && speechSynthesis.paused) {
        /* TODO: Should investigate to change lang and rate under paused. */
        speechSynthesis.resume(synthes);
        startButton.innerText = 'pause';
      } else if (synthes !== null && !speechSynthesis.paused) {
        speechSynthesis.pause();
        startButton.innerText = 'resume';
      } else {
        speechSynthesis.cancel();
        const targetText = textarea.value;
        const lang = langInput.value;
        const rate = Number(rateInput.value);
        synthes = new window.SpeechSynthesisUtterance(targetText);
        synthes.lang = lang;
        synthes.rate = rate;
        speechSynthesis.speak(synthes);
        startButton.innerText = 'pause';
      }
    });
    resetButton.addEventListener('click', () => {
      langInput.value = 'ja-JP';
      rateInput.value = '2.0';
      startButton.innerText = 'start';
      speechSynthesis.cancel(synthes);
      synthes = null;
    });
    closeButton.addEventListener('click', () => {
      speechSynthesis.cancel(synthes);
      div.parentNode.removeChild(div);
    });

    setTimeout(() => {
      startButton.click();
    }, 100);
  }, 200);
})();
