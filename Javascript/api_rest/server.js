import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Listening at the port ${port}`);
  console.log(`CTRL + click in http://localhost:${port}`);
});
