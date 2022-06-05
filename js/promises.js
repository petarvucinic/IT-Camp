// obecanje da ce se posao izvrsiti

myProm = new Promise((res, rej) => {
  done = true;
  for (let i = 0; i < 90000; i++) {}
  if (done) {
    res();
  } else {
    rej();
  }
});

myProm
  .then(() => {
    console.log("jedem hranu");
  })
  .catch(() => {
    console.log("izlazim iz lokala");
  });
