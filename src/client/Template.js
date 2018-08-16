/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */

const Html = ({ body, title, state }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>Home | Razorthink</title>
    <base href="/" />
    <link rel="shortcut icon" href="./images/favicon.ico" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link href="https://fonts.googleapis.com/css?family=Muli:200,300,400,600,700,800,900" rel="stylesheet" />
    <link href="./app.css" rel="stylesheet" />
  </head>
  <body>
    <div id="app">${body}</div>
    <script>
      window.REDUX_DATA = ${JSON.stringify(state)}
    </script>
  </body>
</html>
`;

export default Html;
