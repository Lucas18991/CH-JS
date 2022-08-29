const pago = new Promise((res, rej) => {
  rej = true;
});

pago
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("esto va siempre");
  });
