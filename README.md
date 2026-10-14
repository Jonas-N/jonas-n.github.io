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
| Name, email, links, postal address | `_config.yml` |
| Papers | `_data/publications.yml` |
| Talks | `_data/talks.yml` |
| Jobs | `_data/positions.yml` |
| Degrees | `_data/education.yml` |
| Prose on Home, Research, CV | `index.md`, `research.md`, `cv.md` |
| Portrait | `assets/img/jonas.jpg` |

To add a paper, copy a block in `_data/publications.yml`, give it a new `slug`,
and set `type` to `article`, `chapter`, `proceedings`, `preprint`, `thesis`, or
`edited`. Set `featured: true` to show it on the home page. Bold your own name
with `**Nölle, J.**`.

To add a talk, copy a block in `_data/talks.yml`. `type` is `invited`,
`conference`, or `poster`. Keep newer years above older ones.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://127.0.0.1:4000/>.

## Publishing

The site is the repository root on branch `main`. GitHub Pages serves it at
`https://jonas-n.github.io`. There is no custom domain. `baseurl` in
`_config.yml` stays empty.
