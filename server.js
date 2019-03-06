const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/post/:slug', (req, res) => {
    return app.render(req, res, '/post', { slug: req.params.slug });
  });

  server.get('/user/confirm/:token', (req, res) => {
    return app.render(req, res, '/confirm', { token: req.params.token });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
