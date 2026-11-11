# Pinkan Amalia Marzanda — Professional Portfolio

An English-language, single-page professional portfolio for a Bachelor of Pharmacy graduate from Universitas Diponegoro. It presents education, experience, research, competencies, recognition, and verified contact paths without claiming a pharmacist license.

## Technology

- HTML5
- Tailwind CSS via CDN
- Custom CSS
- Vanilla JavaScript
- Lucide icons via CDN
- Google Fonts (Cormorant Garamond and Inter)

No build step, backend, or package installation is required. Tailwind's CDN is convenient for this static portfolio, but Tailwind recommends compiling CSS for production. If the site needs a stricter production setup, migrate to a generated/minified stylesheet and pin or self-host the fonts and icon asset. The current project intentionally remains build-free.

## Project structure

```text
index.html
css/custom.css
js/main.js
assets/
  documents/cv-pinkan.pdf
  images/                 # Add the owner's real profile photo here
PRODUCT.md
DESIGN.md
README.md
```

## Run locally

From this directory, start any static HTTP server. For example, with Python:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. The PDF download, fonts, Tailwind CDN, and Lucide icons need a network connection; the page content and custom styles remain local.

## Update assets and content

- **Profile photo:** place the owner's real photo at `assets/images/profile.jpg`. The page shows a labeled placeholder until that file exists. Do not use another person's or a generated photograph as Pinkan.
- **Project images:** place real, owner-approved project images in `assets/images/projects/`, then add them in `index.html` with descriptive alt text and an appropriate caption.
- **CV:** the supplied CV is copied to `assets/documents/cv-pinkan.pdf` and linked from Contact. Replace that file with the approved current PDF while keeping the same filename, or update the link in `index.html`.
- **Social links and contact:** edit the verified URLs in the Contact section of `index.html`. The WhatsApp URL uses the international number form.
- **Content:** update the semantic sections in `index.html`; keep dates, titles, claims, and qualifications aligned with the owner's verified records.

## Deploy

**Suggested host: Cloudflare Pages**, if you are comfortable connecting a GitHub repository and managing the domain's DNS through Cloudflare. It supports plain static HTML, can serve the top-level `index.html`, and can deploy changes from a connected Git repository ([static HTML guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/), [Git integration guide](https://developers.cloudflare.com/pages/configuration/git-integration/)). For the apex domain `pinkanmarzanda.com`, Cloudflare's current Pages setup requires adding the domain as a Cloudflare zone and pointing its nameservers to Cloudflare ([custom domains guide](https://developers.cloudflare.com/pages/configuration/custom-domains/)).

**Alternative: GitHub Pages** if you prefer hosting directly from a GitHub repository and its settings. GitHub Pages supports custom domains and HTTPS ([custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), [HTTPS guide](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)).

No provider-specific configuration has been added. Connect a domain only after purchase and DNS decisions are confirmed. Before deployment, confirm domain ownership, review the factual notes below, and verify all links and downloaded CV contents.

The domain `pinkanmarzanda.com` is an intended domain, not a confirmed purchase. Hosting is undecided. No DNS settings or accounts have been created.

For professional email, choose a hosted mailbox after deciding on the domain and provider, then configure that provider's MX, SPF, DKIM, and DMARC records. The site currently displays the supplied Gmail address and does not create or imply a professional-domain mailbox.

## Owner review before publication

- Confirm that the Laboratory Teaching Assistant role really continues through December 2026; it is currently shown as ongoing because the supplied end date is in the future relative to November 2026.
- Confirm whether any honors classification such as Cum Laude is formally recorded. It is intentionally omitted.
- Confirm that the included PDF is the latest CV and approve it for public download.
- Verify the supplied degree date and all social/contact URLs before launch.
- No profile photograph or project media was provided. Add only real, approved assets.
- The thesis appears as a project summary; no thesis document or publication link was supplied, and no statistical results are claimed.
