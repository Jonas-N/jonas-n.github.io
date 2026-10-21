# Jonas Nölle — academic homepage

Personal site for Jonas Nölle, postdoctoral researcher at the
[Centre for Language Evolution Studies](https://cles.umk.pl/), Nicolaus Copernicus
University in Toruń, and affiliate at the University of Glasgow.

Live site: **[jonas-n.github.io](https://jonas-n.github.io)**.

Built with [Jekyll](https://jekyllrb.com/) and hosted on **GitHub Pages** from the
repository `jonas-n.github.io` (user site, so the repository name has to stay
exactly that). A push to `main` rebuilds the site. Ruby is optional.

The CV and grant profile that this site was drafted from live in the parent
folder and are **not** part of this repository.

## Edit the content

| What | Where |
| --- | --- |
| Name, email, address, profile links, navigation | `_config.yml` |
| Papers | `_data/publications.yml` |
| Talks | `_data/talks.yml` |
| News on the home page | `_data/news.yml` |
| The three research strands (home and research pages) | `_data/strands.yml` |
| Jobs | `_data/positions.yml` |
| Degrees | `_data/education.yml` |
| Prose on Home, Research, CV | `index.html`, `research.html`, `cv.html` |
| Styles | `assets/css/style.css` |
| Hero graphic, list filters, copy button | `assets/js/site.js` |
| Portrait | `assets/img/jonas.jpg` |

Pages are written as HTML with Liquid rather than Markdown, so indented
`{% include %}` tags can never be rendered as code blocks again.

To add a paper, copy a block in `_data/publications.yml`, give it a new `slug`,
and set `type` to `article`, `chapter`, `proceedings`, `preprint`, `abstract`,
`thesis`, or `edited`. Set `featured: true` to show it on the home page, and
`status: Accepted` (or `In press`) to show a highlighted label. Bold your own
name with `**Nölle, J.**`. The publications page groups by `year` and builds
the filter buttons from the types it finds.

To add a talk, copy a block in `_data/talks.yml`. `type` is `invited`,
`conference`, or `poster`; `label` (for example `Keynote` or `Upcoming`) shows
a highlighted tag.

To add news, put a new item at the top of `_data/news.yml`. The home page shows
the newest seven.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Without Bundler, `gem install jekyll webrick` and then
`JEKYLL_NO_BUNDLER_REQUIRE=true jekyll serve` also works for a quick preview.

Then open <http://127.0.0.1:4000/>.

## Publishing

The site is the repository root on branch `main`. GitHub Pages serves it at
`https://jonas-n.github.io`. There is no custom domain. `baseurl` in
`_config.yml` stays empty.
