export {};

// tslint:disable:no-console
console.log('Running....');

const testFunc = (): Promise<void> => {
  return new Promise(
    (resolve, reject): void => {
      resolve();
    }
  );
};

testFunc().then(() => {
  // tslint:disable:no-console
  console.log('YAY');
});
