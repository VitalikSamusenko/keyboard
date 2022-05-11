import '../assets/styles/style.scss';

const body = document.querySelector('body');

function createElement(parent, el, className) {
  let elem = document.createElement(el);
  elem.className = className;
  parent.appendChild(elem);
  return elem;
}

const container = createElement(body, 'div', 'container');

const h1 = createElement(container, 'h1', 'title');
h1.textContent = 'Virtual keyboard';

const textWrapper = createElement(container, 'div', 'text-wrapper');

const switchLang = createElement(textWrapper, 'div', 'text-wrapper__lang');
switchLang.textContent = 'Change Language: Shift + Alt';

const madeFor = createElement(textWrapper, 'div', 'text-wrapper__made');
madeFor.textContent = 'Made for: Windows';

const textArea = createElement(container, 'textarea', 'textarea');

const keyboardWrapper = createElement(container, 'div', 'keyboard-wrapper');

const RU = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];
const EN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];

const shiftedRU = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];

const shiftedEN = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\'', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];

const capsedRU = [
  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];

const capsedEN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];

const capsShiftRU = [
  ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];
const capsShiftEN = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&#9650;', 'Shift'],
  ['Ctrl', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']
];

const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];

let currentLang = RU;

function createButtons(arr) {
  keyboardWrapper.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const keyboardRow = createElement(keyboardWrapper, 'div', 'keyboard__row');
    for (let j = 0; j < arr[i].length; j += 1) {
      const keyboardButton = createElement(keyboardRow, 'div', 'keyboard__button');
      keyboardButton.innerHTML = arr[i][j];
      keyboardButton.dataset.code = keyCode[i][j];
      if (arr[i][j] === 'Tab')keyboardButton.classList.add('keyboard__button_tab');
      else if (arr[i][j] === 'CapsLock')keyboardButton.classList.add('keyboard__button_caps');
      else if (arr[i][j] === 'Shift')keyboardButton.classList.add('keyboard__button_shift');
      else if (arr[i][j] === 'Ctrl')keyboardButton.classList.add('keyboard__button_ctrl');
      else if (arr[i][j] === 'Alt')keyboardButton.classList.add('keyboard__button_alt');
      else if (arr[i][j] === 'Enter')keyboardButton.classList.add('keyboard__button_enter');
      else if (arr[i][j] === 'Backspace')keyboardButton.classList.add('keyboard__button_backspace');
      else if (arr[i][j] === 'Del')keyboardButton.classList.add('keyboard__button_del');
      else if (arr[i][j] === ' ')keyboardButton.classList.add('keyboard__button_space');
      else if (arr[i][j] === 'Win')keyboardButton.classList.add('keyboard__button_win');
      else if (arr[i][j] === '&#9650;')keyboardButton.classList.add('keyboard__button_arrUp');
      else if (arr[i][j] === '&#9668;')keyboardButton.classList.add('keyboard__button_arrLeft');
      else if (arr[i][j] === '&#9660;')keyboardButton.classList.add('keyboard__button_arrDown');
      else if (arr[i][j] === '&#9658;')keyboardButton.classList.add('keyboard__button_arrRight');
      else keyboardButton.classList.add('keyboard__button_letter');
    }
  }
}
createButtons(currentLang);

const kb = document.querySelectorAll('.keyboard__button');

function changeKeyboard(arr) {
  let numOfButton = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      kb[numOfButton].innerHTML = arr[i][j];
      numOfButton += 1;
    }
  }
}

// localstorage
if (localStorage.getItem('currentLang') === null) {
  currentLang = RU;
  localStorage.setItem('currentLang', JSON.stringify(currentLang));
} else {
  if (localStorage.getItem('currentLang') === JSON.stringify(RU)) {
    changeKeyboard(RU);
    currentLang = RU;
  } if (localStorage.getItem('currentLang') === JSON.stringify(EN)) {
    changeKeyboard(EN);
    currentLang = EN;
  }
}

function getCursorPosition() {
  let CaretPos = 0;

  if (document.selection) {
    textArea.focus();

    let Sel = document.selection.createRange();

    Sel.moveStart('character', -textArea.value.length);

    CaretPos = Sel.text.length;
  } else if (textArea.selectionStart || textArea.selectionStart === '0') {
    CaretPos = textArea.selectionStart;
  }
  return CaretPos;
}
let cursorPos = 0;
textArea.addEventListener('click', () => {
  cursorPos = getCursorPosition();
});
function insertInCurPos(substr) {
  let array = textArea.textContent.split('');
  array.splice(cursorPos, 0, substr);
  textArea.textContent = array.join('');
}

const buttons = document.querySelectorAll('.keyboard__button');
const buttonsLetter = document.querySelectorAll('.keyboard__button_letter');
buttonsLetter.forEach(b => b.addEventListener('click', () => {
  insertInCurPos(b.textContent);
  cursorPos += 1;
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
}));

const buttonSpace = document.querySelector('.keyboard__button_space');
buttonSpace.addEventListener('click', () => {
  insertInCurPos(' ');
  cursorPos += 1;
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
});

const buttonTab = document.querySelector('.keyboard__button_tab');
buttonTab.addEventListener('click', () => {
  insertInCurPos('\t');
  cursorPos += 1;
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
});
const buttonEnter = document.querySelector('.keyboard__button_enter');
buttonEnter.addEventListener('click', () => {
  insertInCurPos('\n');
  cursorPos += 1;
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
});

let isCaps = false;
let isShift = false;
function createEventListenersFoKeyboard() {
  document.addEventListener('keydown', (event) => {
    if (event.key.length === 1) {
      for (let i = 0; i < keyCode.length; i += 1) {
        for (let j = 0; j < keyCode[i].length; j += 1) {
          if (keyCode[i][j] === event.code) {
            if (currentLang === RU && !isCaps && !isShift) {
              insertInCurPos(RU[i][j]);
              cursorPos += 1;
              textArea.focus();
              textArea.setSelectionRange(cursorPos, cursorPos);
            } else if (currentLang === RU && isCaps && !isShift) {
              insertInCurPos(capsedRU[i][j]);
              cursorPos += 1;
              textArea.focus();
              textArea.setSelectionRange(cursorPos, cursorPos);
            } else if (currentLang === EN && !isCaps && !isShift) {
              insertInCurPos(EN[i][j]);
              cursorPos += 1;
              textArea.focus();
              textArea.setSelectionRange(cursorPos, cursorPos);
            } else if (currentLang === EN && isCaps && !isShift) {
              insertInCurPos(capsedEN[i][j]);
              cursorPos += 1;
              textArea.focus();
              textArea.setSelectionRange(cursorPos, cursorPos);
            } else if (currentLang === EN && !isCaps && isShift) {
              insertInCurPos(shiftedEN[i][j]);
              cursorPos += 1;
              textArea.focus();
              textArea.setSelectionRange(cursorPos, cursorPos);
            } else if (currentLang === RU && !isCaps && isShift) {
              insertInCurPos(shiftedRU[i][j]);
              cursorPos += 1;
              textArea.focus();
              textArea.setSelectionRange(cursorPos, cursorPos);
            } else if (currentLang === RU && isCaps && isShift) {
              insertInCurPos(capsShiftRU[i][j]);
              cursorPos += 1;
              textArea.focus();
              textArea.setSelectionRange(cursorPos, cursorPos);
            } else if (currentLang === EN && isCaps && isShift) {
              insertInCurPos(capsShiftEN[i][j]);
              cursorPos += 1;
              textArea.focus();
              textArea.setSelectionRange(cursorPos, cursorPos);
            }
          }
        }
      }
    }
    if (event.key === 'Tab') {
      insertInCurPos('\t');
      cursorPos += 1;
      textArea.focus();
      textArea.setSelectionRange(cursorPos, cursorPos);
    }
    if (event.key === 'Enter') {
      insertInCurPos('\n');
      cursorPos += 1;
      textArea.focus();
      textArea.setSelectionRange(cursorPos, cursorPos);
    }
    event.stopPropagation();
    event.preventDefault();
    buttons.forEach(button => {
      if (event.code === button.dataset.code && event.key !== 'CapsLock') {
        button.classList.add('active');
      }
      if (event.key === 'CapsLock' && button.textContent === 'CapsLock') {
        button.classList.toggle('active');
      }
    });
  });
  document.addEventListener('keyup', (event) => {
    event.stopPropagation();
    event.preventDefault();
    buttons.forEach(button => {
      if (event.code === button.dataset.code && event.key !== 'CapsLock') {
        button.classList.remove('active');
      }
    });
  });
}

createEventListenersFoKeyboard();
const buttonCaps = document.querySelector('.keyboard__button_caps ');
// Shift
let qwe = 0;
document.addEventListener('keydown', (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (event.key === 'Shift' && qwe === 0) {
    qwe += 1;
    if (currentLang === RU && !isCaps) {
      changeKeyboard(shiftedRU);
    } else if (currentLang === RU && isCaps) {
      changeKeyboard(capsShiftRU);
    }
    if (currentLang === EN && !isCaps) {
      changeKeyboard(shiftedEN);
    } else if (currentLang === EN && isCaps) {
      changeKeyboard(capsShiftEN);
    }
    isShift = true;
  }
});

document.addEventListener('keyup', (event) => {
  qwe = 0;
  if (event.key === 'Shift') {
    if (currentLang === RU && isCaps) {
      changeKeyboard(capsedRU);
    }
    if (currentLang === EN && isCaps) {
      changeKeyboard(capsedEN);
    }
    if (currentLang === RU && !isCaps) {
      changeKeyboard(RU);
    }
    if (currentLang === EN && !isCaps) {
      changeKeyboard(EN);
    }
    isShift = false;
  }
});

// Capslock
document.addEventListener('keydown', (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (event.key === 'CapsLock') {
    qwe += 1;
    if (currentLang === RU) {
      if (!isCaps && !isShift) {
        changeKeyboard(capsedRU);
        isCaps = true;
      } else if (isCaps && !isShift) {
        changeKeyboard(RU);
        isCaps = false;
      } else if (!isCaps && isShift) {
        changeKeyboard(capsShiftRU);
        isCaps = true;
      } else if (isCaps && isShift) {
        changeKeyboard(shiftedRU);
        isCaps = false;
      }
    } else if (currentLang === EN) {
      if (!isCaps && !isShift) {
        changeKeyboard(capsedEN);
        isCaps = true;
      } else if (isCaps && !isShift) {
        changeKeyboard(EN);
        isCaps = false;
      } else if (!isCaps && isShift) {
        changeKeyboard(capsShiftEN);
        isCaps = true;
      } else if (isCaps && isShift) {
        changeKeyboard(shiftedEN);
        isCaps = false;
      }
    }
  }
});

// Shift on virtual keyboard
const buttonsShift = document.querySelectorAll('.keyboard__button_shift');
let shiftIsActive = 0;
buttonsShift.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('active');
    const buttonsAlt = document.querySelectorAll('.keyboard__button_alt');
    function changeLanguage() {
      if (currentLang === RU && !isCaps) {
        currentLang = EN;
        changeKeyboard(currentLang);
        localStorage.setItem('currentLang', JSON.stringify(currentLang));
      } else if (currentLang === EN && !isCaps) {
        currentLang = RU;
        changeKeyboard(currentLang);
        localStorage.setItem('currentLang', JSON.stringify(currentLang));
      } else if (currentLang === EN && isCaps) {
        currentLang = RU;
        changeKeyboard(capsedRU);
        localStorage.setItem('currentLang', JSON.stringify(currentLang));
      } else if (currentLang === RU) {
        currentLang = EN;
        changeKeyboard(capsedEN);
        localStorage.setItem('currentLang', JSON.stringify(currentLang));
      }
      button.classList.remove('active');
      buttonsAlt.forEach(buttonA =>{
        buttonA.removeEventListener('click', changeLanguage);
      });
      shiftIsActive = 0;
      isShift = false;
    }
    buttonsAlt.forEach(buttonA =>{
      buttonA.addEventListener('click', changeLanguage);
    });
  });
});

buttonsShift.forEach(button => {
  button.addEventListener('click', () => {
    function changeCaps() {
      if (isCaps && currentLang === RU) {
        changeKeyboard(capsedRU);
      } else if (isCaps && currentLang === EN) {
        changeKeyboard(capsedEN);
      } else if (!isCaps && currentLang === RU) {
        changeKeyboard(RU);
      } else if (!isCaps && currentLang === EN) {
        changeKeyboard(EN);
      }
      button.classList.remove('active');
      buttonsLetter.forEach(buttonL => {
        buttonL.removeEventListener('click', changeCaps);
      });
      shiftIsActive = 0;
      isShift = false;
    }
    button.classList.add('active');
    if (currentLang === RU && !isCaps) {
      changeKeyboard(shiftedRU);
    } else if (currentLang === EN && !isCaps) {
      changeKeyboard(shiftedEN);
    } else if (currentLang === RU && isCaps) {
      changeKeyboard(capsShiftRU);
    } else if (currentLang === EN && isCaps) {
      changeKeyboard(capsShiftEN);
    }
    buttonsLetter.forEach(buttonL => {
      buttonL.addEventListener('click', changeCaps);
    });
    isShift = true;
    shiftIsActive += 1;
    if (shiftIsActive % 2 === 0) {
      changeCaps();
    }
  });
});

// caps at virtual keyboard

buttonCaps.addEventListener('click', () => {
  buttonCaps.classList.toggle('active');
  console.log(isShift);
  if (currentLang === RU) {
    if (!isCaps && !isShift) {
      changeKeyboard(capsedRU);
      isCaps = true;
    } else if (isCaps && !isShift) {
      changeKeyboard(RU);
      isCaps = false;
    } else if (!isCaps && isShift) {
      changeKeyboard(capsShiftRU);
      isCaps = true;
    } else if (isCaps && isShift) {
      changeKeyboard(shiftedRU);
      isCaps = false;
    }
  } else if (currentLang === EN) {
    if (!isCaps && !isShift) {
      changeKeyboard(capsedEN);
      isCaps = true;
    } else if (isCaps && !isShift) {
      changeKeyboard(EN);
      isCaps = false;
    } else if (!isCaps && isShift) {
      changeKeyboard(capsShiftEN);
      isCaps = true;
    } else if (isCaps && isShift) {
      changeKeyboard(shiftedEN);
      isCaps = false;
    }
  }
});

// switch lang at keyboard

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);
    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  () => {
    if (currentLang === RU && !isCaps) {
      currentLang = EN;
      changeKeyboard(currentLang);
      localStorage.setItem('currentLang', JSON.stringify(currentLang));
    } else if (currentLang === EN && !isCaps) {
      currentLang = RU;
      changeKeyboard(currentLang);
      localStorage.setItem('currentLang', JSON.stringify(currentLang));
    } else if (currentLang === EN && isCaps) {
      currentLang = RU;
      changeKeyboard(capsedRU);
      localStorage.setItem('currentLang', JSON.stringify(currentLang));
    } else if (currentLang === RU && isCaps) {
      currentLang = EN;
      changeKeyboard(capsedEN);
      localStorage.setItem('currentLang', JSON.stringify(currentLang));
    }
  },
  'ShiftLeft',
  'AltLeft'
);

// Backspace

const buttonBackspace = document.querySelector('.keyboard__button_backspace');

function backSpace() {
  if (cursorPos > 0) {
    let array = textArea.textContent.split('');
    cursorPos -= 1;
    array.splice(cursorPos, 1);
    textArea.textContent = array.join('');
  }
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
}

buttonBackspace.addEventListener('click', backSpace);

// delete
const buttonDel = document.querySelector('.keyboard__button_del');

function del() {
  if (cursorPos < textArea.textContent.length) {
    let array = textArea.textContent.split('');
    array.splice(cursorPos, 1);
    textArea.textContent = array.join('');
  }
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
}

buttonDel.addEventListener('click', del);

document.addEventListener('keydown', (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (event.key === 'Backspace') {
    backSpace();
  }
  if (event.key === 'Delete') {
    del();
  }
});

// arrow

const buttonArrowLeft = document.querySelector('.keyboard__button_arrLeft');
const buttonArrowRight = document.querySelector('.keyboard__button_arrRight');
const buttonArrowUp = document.querySelector('.keyboard__button_arrUp');
const buttonArrowDown = document.querySelector('.keyboard__button_arrDown');

function toLeft() {
  if (cursorPos > 0) {
    cursorPos -= 1;
  }
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
}

function toRight() {
  if (cursorPos < textArea.textContent.length) {
    cursorPos += 1;
  }
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
}

buttonArrowLeft.addEventListener('click', toLeft);
buttonArrowRight.addEventListener('click', toRight);

buttonArrowUp.addEventListener('click', () => {
  insertInCurPos('▲');
  cursorPos += 1;
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
});

buttonArrowDown.addEventListener('click', () => {
  insertInCurPos('▼');
  cursorPos += 1;
  textArea.focus();
  textArea.setSelectionRange(cursorPos, cursorPos);
});

document.addEventListener('keydown', (event) => {
  event.stopPropagation();
  event.preventDefault();
  if (event.code === 'ArrowLeft') {
    toLeft();
  }
  if (event.code === 'ArrowRight') {
    toRight();
  }
  if (event.code === 'ArrowUp') {
    insertInCurPos('▲');
    cursorPos += 1;
    textArea.focus();
    textArea.setSelectionRange(cursorPos, cursorPos);
  }
  if (event.code === 'ArrowDown') {
    insertInCurPos('▼');
    cursorPos += 1;
    textArea.focus();
    textArea.setSelectionRange(cursorPos, cursorPos);
  }
});
