export const waitTwoSeconds = (payload, thunkAPI) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
