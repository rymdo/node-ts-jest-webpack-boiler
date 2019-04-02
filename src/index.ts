export {};

// tslint:disable:no-console
console.log('Running....');

const testFunc = () => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

testFunc().then(() => {
  // tslint:disable:no-console
  console.log('YAY');
});
