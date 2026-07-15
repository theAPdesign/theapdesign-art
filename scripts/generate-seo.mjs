import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  blogCategories,
  getPostsByCategory,
  getPublishedBlogPosts,
  siteUrl,
} from '../src/blog-data.js';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = resolve(rootDir, 'public');
const blogDir = resolve(rootDir, 'blog');
const defaultImage = `${siteUrl}/og-image.svg`;
const generatedAt = '2026-07-15';

const baseTemplate = await readFile(resolve(rootDir, 'index.html'), 'utf8');
const analyticsBlock = (baseTemplate.match(/<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-W219ZBJWH0"><\/script>[\s\S]*?<\/script>/) || [''])[0];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function absoluteUrl(path) {
  if (path.startsWith('http')) return path;
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

function scriptTag(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function renderDocument({ title, description, canonical, ogType = 'website', image = defaultImage, robots = 'index, follow', jsonLd = [], body = '' }) {
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="${robots}" />
    <meta name="theme-color" content="#faf8f5" />
    <link rel="icon" href="/ap-logo.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/ap-logo.svg" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" type="application/rss+xml" title="The AP Design Blog RSS" href="${siteUrl}/blog/rss.xml" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:site_name" content="The AP Design" />
    <meta property="og:image" content="${absoluteUrl(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${absoluteUrl(image)}" />
    ${jsonLd.map(scriptTag).join('\n    ')}
    ${analyticsBlock}
  </head>
  <body>
    <div id="root">${body}</div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`;
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The AP Design',
    url: siteUrl,
    logo: `${siteUrl}/ap-logo.svg`,
  };
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The AP Design',
    url: siteUrl,
  };
}

function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function blogSchema(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The AP Design Blog',
    url: `${siteUrl}/blog`,
    description: 'The AP Design ürün, tasarım ve mobil deneyim notları.',
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: post.canonicalUrl,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { '@type': 'Organization', name: post.author },
    })),
  };
}

function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.socialImage || post.coverImage || '/og-image.svg'),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The AP Design',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/ap-logo.svg`,
      },
    },
    mainEntityOfPage: post.canonicalUrl,
    url: post.canonicalUrl,
  };
}

function renderBlogListBody(posts) {
  return `<main>
  <header>
    <p>Blog</p>
    <h1>Ürün, tasarım ve mobil deneyim notları.</h1>
    <p>AP Design’da geliştirdiğimiz uygulamalardan, kullanıcı deneyimi kararlarından ve mobil ürün üretim sürecinden kısa, okunabilir yazılar.</p>
  </header>
  <section aria-labelledby="blog-posts-title">
    <h2 id="blog-posts-title">Son yazılar</h2>
    ${posts.map((post) => `<article>
      <h3><a href="/blog/${post.slug}">${escapeHtml(post.title)}</a></h3>
      <p>${escapeHtml(post.description)}</p>
      <p><a href="/blog/kategori/${post.category}">${escapeHtml(blogCategories[post.category]?.title || post.category)}</a></p>
      <time datetime="${post.publishedAt}">${formatDate(post.publishedAt)}</time>
      <p>${escapeHtml(post.readingTime)} okuma</p>
    </article>`).join('\n    ')}
  </section>
</main>`;
}

function renderPostBody(post) {
  return `<main>
  <article>
    <header>
      <p><a href="/blog/kategori/${post.category}">${escapeHtml(blogCategories[post.category]?.title || post.category)}</a></p>
      <h1>${escapeHtml(post.title)}</h1>
      <p>${escapeHtml(post.description)}</p>
      <p>Yazar: ${escapeHtml(post.author)}</p>
      <time datetime="${post.publishedAt}">Yayın tarihi: ${formatDate(post.publishedAt)}</time>
      <time datetime="${post.updatedAt}">Güncelleme tarihi: ${formatDate(post.updatedAt)}</time>
      <p>${escapeHtml(post.readingTime)} okuma</p>
    </header>
    <figure>
      <img src="${post.coverImage}" alt="${escapeHtml(post.coverImageAlt)}" width="1200" height="630" />
    </figure>
    ${post.content.map((section) => `<section>
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n      ')}
    </section>`).join('\n    ')}
    ${post.internalLinks.length ? `<aside>
      <h2>İlgili bağlantılar</h2>
      ${post.internalLinks.map((link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`).join('\n      ')}
    </aside>` : ''}
  </article>
</main>`;
}

function renderCategoryBody(category, posts) {
  return `<main>
  <header>
    <p>Blog kategorisi</p>
    <h1>${escapeHtml(category.title)}</h1>
    <p>${escapeHtml(category.description)}</p>
  </header>
  <section>
    ${posts.map((post) => `<article>
      <h2><a href="/blog/${post.slug}">${escapeHtml(post.title)}</a></h2>
      <p>${escapeHtml(post.description)}</p>
      <time datetime="${post.publishedAt}">${formatDate(post.publishedAt)}</time>
    </article>`).join('\n    ')}
  </section>
</main>`;
}

async function writePage(path, html) {
  const filePath = resolve(rootDir, path, 'index.html');
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, html);
}

function validatePosts(posts) {
  const required = ['title', 'slug', 'description', 'publishedAt', 'updatedAt', 'author', 'category', 'tags', 'coverImage', 'coverImageAlt', 'content', 'canonicalUrl', 'readingTime', 'seoTitle', 'seoDescription', 'socialImage'];
  const errors = [];

  posts.forEach((post) => {
    required.forEach((field) => {
      if (post[field] === undefined || post[field] === null || post[field] === '') {
        errors.push(`${post.slug || post.title || 'Bilinmeyen yazı'}: ${field} eksik`);
      }
    });

    if (Number.isNaN(new Date(post.publishedAt).getTime())) {
      errors.push(`${post.slug}: publishedAt geçerli tarih değil`);
    }

    if (Number.isNaN(new Date(post.updatedAt).getTime())) {
      errors.push(`${post.slug}: updatedAt geçerli tarih değil`);
    }
  });

  if (errors.length) {
    throw new Error(`Blog veri modeli hataları:\n${errors.join('\n')}`);
  }
}

function sitemapXml(posts) {
  const staticPages = [
    ['/', generatedAt],
    ['/contact', generatedAt],
    ['/del-it', generatedAt],
    ['/del-it/gizlilik-politikasi', generatedAt],
    ['/del-it/kullanim-sartlari', generatedAt],
    ['/xox-taktik-arena', generatedAt],
    ['/xox-taktik-arena/gizlilik-politikasi', generatedAt],
    ['/xox-taktik-arena/kullanim-sartlari', generatedAt],
    ['/blog', generatedAt],
  ];
  const urls = [
    ...staticPages.map(([path, lastmod]) => ({ loc: `${siteUrl}${path === '/' ? '/' : path}`, lastmod })),
    ...posts.map((post) => ({ loc: post.canonicalUrl, lastmod: formatDate(post.updatedAt) })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>
`;
}

function rssXml(posts) {
  const latestUpdatedAt = posts
    .map((post) => new Date(post.updatedAt).getTime())
    .sort((a, b) => b - a)[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>The AP Design Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Ürün, tasarım ve mobil deneyim notları.</description>
    <language>tr</language>
    <lastBuildDate>${new Date(latestUpdatedAt).toUTCString()}</lastBuildDate>
${posts.map((post) => `    <item>
      <title>${escapeHtml(post.title)}</title>
      <link>${post.canonicalUrl}</link>
      <guid isPermaLink="true">${post.canonicalUrl}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escapeHtml(post.description)}</description>
    </item>`).join('\n')}
  </channel>
</rss>
`;
}

function robotsTxt() {
  return `# As a condition of accessing this website, you agree to abide by the following
# content signals:
#
# (a)  If a Content-Signal = yes, you may collect content for the corresponding
#      use.
# (b)  If a Content-Signal = no, you may not collect content for the
#      corresponding use.
# (c)  If the website operator does not include a Content-Signal for a
#      corresponding use, the website operator neither grants nor restricts
#      permission via Content-Signal with respect to the corresponding use.
#
# The content signals and their meanings are:
#
# search:   building a search index and providing search results (e.g., returning
#           hyperlinks and short excerpts from your website's contents). Search does not
#           include providing AI-generated search summaries.
# ai-input: inputting content into one or more AI models (e.g., retrieval
#           augmented generation, grounding, or other real-time taking of content for
#           generative AI search answers).
# ai-train: training or fine-tuning AI models.
# use:      how AI systems may consume the content (immediate, reference, or full).
#
# ANY RESTRICTIONS EXPRESSED VIA CONTENT SIGNALS ARE EXPRESS RESERVATIONS OF
# RIGHTS UNDER ARTICLE 4 OF THE EUROPEAN UNION DIRECTIVE 2019/790 ON COPYRIGHT
# AND RELATED RIGHTS IN THE DIGITAL SINGLE MARKET.

# BEGIN Cloudflare Managed content

User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CloudflareBrowserRenderingCrawler
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: meta-externalagent
Disallow: /

# END Cloudflare Managed Content

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

async function main() {
  const posts = getPublishedBlogPosts();
  validatePosts(posts);
  await rm(blogDir, { recursive: true, force: true });

  await writePage('blog', renderDocument({
    title: 'Blog | The AP Design',
    description: 'The AP Design blogunda mobil uygulama geliştirme, UI/UX tasarım, dijital ürünler, App Store süreçleri ve ürün hikayeleri üzerine yazılar.',
    canonical: `${siteUrl}/blog`,
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      blogSchema(posts),
      breadcrumbSchema([
        { name: 'The AP Design', url: siteUrl },
        { name: 'Blog', url: `${siteUrl}/blog` },
      ]),
    ],
    body: renderBlogListBody(posts),
  }));

  await Promise.all(posts.map((post) => writePage(`blog/${post.slug}`, renderDocument({
    title: post.seoTitle,
    description: post.seoDescription,
    canonical: post.canonicalUrl,
    ogType: 'article',
    image: post.socialImage,
    jsonLd: [
      articleSchema(post),
      breadcrumbSchema([
        { name: 'The AP Design', url: siteUrl },
        { name: 'Blog', url: `${siteUrl}/blog` },
        { name: post.title, url: post.canonicalUrl },
      ]),
    ],
    body: renderPostBody(post),
  }))));

  await Promise.all(Object.entries(blogCategories).map(([slug, category]) => {
    const categoryPosts = getPostsByCategory(slug);
    if (!categoryPosts.length) return Promise.resolve();

    return writePage(`blog/kategori/${slug}`, renderDocument({
      title: `${category.title} | The AP Design Blog`,
      description: category.description,
      canonical: `${siteUrl}/blog/kategori/${slug}`,
      robots: categoryPosts.length >= 2 ? 'index, follow' : 'noindex, follow',
      jsonLd: [
        breadcrumbSchema([
          { name: 'The AP Design', url: siteUrl },
          { name: 'Blog', url: `${siteUrl}/blog` },
          { name: category.title, url: `${siteUrl}/blog/kategori/${slug}` },
        ]),
      ],
      body: renderCategoryBody(category, categoryPosts),
    }));
  }));

  await writeFile(resolve(publicDir, 'sitemap.xml'), sitemapXml(posts));
  await writeFile(resolve(publicDir, 'robots.txt'), robotsTxt());
  await mkdir(resolve(publicDir, 'blog'), { recursive: true });
  await writeFile(resolve(publicDir, 'blog/rss.xml'), rssXml(posts));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
