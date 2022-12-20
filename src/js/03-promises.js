const form = document.querySelector('.form');
form.addEventListener('submit', submitForm);

function submitForm(evt) {
  evt.preventDefault();
  let position = 0;
  let delay = parseInt(evt.target.delay.value);
  const amount = evt.target.amount.value;
  const stepDelay = parseInt(evt.target.step.value);

  for (let i = 0; i < amount; i+=1) {
    position += 1;

    createPromise(position, delay, evt)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += stepDelay;
  }
  }


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  
  return promise;
}
