# 🍡🍇🍑⭐️

My portfolio site, built with [next.js](https://github.com/zeit/next.js/) and [tachyons](https://github.com/tachyons-css/tachyons).

# Development

To run locally: 

```bash
npm run dev
```

# Deployment

## 1. Build the static site: 

```bash
npm run build
```

When successful, the results look like this:

```bash
> mayagao.com@1.0.0 build /Users/maya/dev/mayagao.com
> next build & next export
> using build directory: /Users/maya/dev/mayagao.com/.next
  copying "static" directory
  copying "static build" directory
> exporting path: /
> exporting path: /developer
...
```

## 2. Remove `/out` in .gitignore file.

```sh
# build output
dist
.next
out/ # remove this line
```

## 3. Run deploy script.

```sh
./deploy.sh
```

The `/out` folder should now be pushed into the `gh-pages` branch.
