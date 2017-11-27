const app = require('./app');

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Corpse app listening on ${PORT}`);
});
