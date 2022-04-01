import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitClick);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
  promise
  .then(logSuccess)
  .catch(logError)
  .finally(() => console.log('Я буду выполнен в любом случае'));
};

const logSuccess = ({position, delay}) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const logError = ({position, delay}) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

function onSubmitClick(event) {
  event.preventDefault();

  const firstDelay = event.currentTarget.elements.delay;
  const delayStep = event.currentTarget.elements.step;
  const amount = event.currentTarget.elements.amount;
  let firstDelayValue = Number(firstDelay.value);

  for (let i = 0; i <= Number(amount.value); i++) {
    createPromise(i, firstDelayValue)
    firstDelayValue += Number(delayStep.value);
  }
};
