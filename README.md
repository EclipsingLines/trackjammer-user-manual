# TrackJammer user manual

Source of the TrackJammer user manual, published at
<https://eclipsinglines.github.io/trackjammer-user-manual/>.

It is a [Jekyll](https://jekyllrb.com/) site using the
[Just the Docs](https://just-the-docs.com/) theme. Pages are Markdown files in the
section folders; the interactive Launchpad diagrams are Liquid includes in `_includes/`
with a small script in `assets/js/launchpad.js` (every diagram also works without JavaScript).
Writers: see the component guide before adding diagrams.

## Build locally

You need Ruby 3.x and Bundler.

```sh
bundle install
bundle exec jekyll serve      # http://localhost:4000/trackjammer-user-manual/
```

On Ruby 3 `jekyll serve` may ask for the `webrick` gem: run `bundle add webrick`
(do not commit that change unless you want it for everyone).

## Deploy

Pushing to `main` builds and deploys through `.github/workflows/pages.yml`.
Pull requests only run a test build (`.github/workflows/ci.yml`).

## License

MIT, see [LICENSE](LICENSE).
