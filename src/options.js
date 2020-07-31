import './options.css';

const save = () => {
  const selectedTheme = document.querySelector('#theme').value;
  chrome.storage.sync.set(
    {
      theme: selectedTheme,
    },
    () => {
      const status = document.querySelector('#status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 2000);
    }
  );
};

const restore = () => {
  // get default options if no others set
  chrome.storage.sync.get(
    {
      theme,
    },
    (options) => {
      document.querySelector('#theme').value = options.theme;
    }
  );
};

document.addEventListener('DOMContentLoaded', restore);
document.querySelector('#save').addEventListener('click', save);
