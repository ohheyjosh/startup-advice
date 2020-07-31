import './newtab.css';
document.querySelector('#options').addEventListener('click', () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});

chrome.storage.sync.get({ theme: 'light' }, (options) => {
  document.querySelector('body').classList.add(options.theme);
});

const h1 = document.querySelector('h1');

const tips = [
  'Take risks.',
  'Get a domain. Email with it.',
  'Keep your web design simple.',
  "Don't be cheap. Quality over quantity.",
  'Hire some designers.',
  'Be a master of your own destiny.',
  "Do it now. Don't procrastinate.",
  "Don't look for cofounders at startup events.",
  "Don't give up.",
  'Stop complaining. Get it done.',
  'Email your mentors.',
  'Never stop learning.',
  'Keep personal life and work life separate.',
  'Be humble. Keep a cool head all the time.',
  'Lead from the front.',
  'Sales cure everything.',
  'Hire people who are smarter than you.',
  'Be patient.',
  'Choose your investors wisely.',
  'Just sell.',
  "Don't ever give up. (Unless it's time to give up.)",
  'Keep your communications professional.',
  "Don't let mentors change your ideas.",
  "Ask. Don't tell.",
  'Just launch.',
  'Limit the number of details to perfect.',
  'Talk to people.',
  'Being an entrepreneur is like suicide: requires guts and everything to lose. Do it anyway.',
  'Stop making excuses. Just do it.',
  'Brand yourself.',
  'Fix your mistakes.',
  "Don't be an idiot.",
  "Don't be afraid to use Google.",
  'Be a leader.',
  'Know how to scale.',
  'Pay your debts.',
  'Solve the problem.',
  'Stop messing around. Start up.',
  'Keep trying.',
  'Never underestimate your competitors.',
  'Make something useful.',
  "Don't recruit employees with bad attitudes.",
  'Nothing is impossible.',
  'Have developers.',
  "Don't trust all the advice.",
];

h1.innerHTML = tips[Math.floor(Math.random() * tips.length)];
