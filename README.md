Example repository for an issue against the architect/architect repo.

Steps to reproduce:

- `npm i -g @architect/architect`
- clone repo
- `arc sandbox`

Expected results:

- visiting `localhost:3333/some-other-route` returns `This is some-other-route`
- visiting `localhost:3333/index.html` displays the content of `public/index.html`
- visiting `localhost:3333/elmo-shrug.gif` displays a GIF of Elmo shrugging

Actual results:

- ✅ visiting `localhost:3333/some-other-route` returns `This is some-other-route`
- 💣 visiting `localhost:3333/index.html` returns an error: `Requested function is missing or not defined, or unknown error`
- 💣 visiting `localhost:3333/elmo-shrug.gif` returns an error: `Requested function is missing or not defined, or unknown error`
