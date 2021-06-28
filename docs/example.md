# Basic example on how to use the api

## Example

<b>Helper Function:</b> <a href="./docs/Backend-Frontend.md">functions</a>

<b>in your index.html file</b> add the following script to it

```
main.js and

index.js

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello</h1>

    <div>
      <p id="map"></p>

      <form id="add_project">
        <input type="text" name="fn" id="fn" placeholder="fn" />
        <input type="text" name="ln" id="ln" placeholder="ln" />
        <input type="email" name="email" id="email" placeholder="email" />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
        <input type="text" name="id" id="id" placeholder="id" />
        <input type="submit" value="submit" />
      </form>
    </div>
    <!-- using  axios as http client -->
    <!--- axios cdn  ---->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <!--- index.js your own functions ---->
    <script type="module" src="./js/index.js"></script>
    <!--- main.js helper functions ---->
    <script src="./js/main.js"></script>
  </body>
</html>
```
