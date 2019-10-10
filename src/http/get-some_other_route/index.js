// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http(req) {
  return {
    headers: { "content-type": "text/html; charset=utf8" },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
</head>
<body>
    <p>This is some-other-route</p>
</body>
</html>
`
  };
};
