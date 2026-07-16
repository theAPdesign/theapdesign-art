import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  blogCategories,
  canonicalPath,
  canonicalUrl,
  getAllPublishedBlogPosts,
  getBlogIndexPath,
  getCategoryPath,
  getPostsByCategory,
  getPublishedBlogPosts,
  getPostPath,
  getTranslatedPost,
  legacyBlogRedirects,
  siteUrl,
} from '../src/blog-data.js';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = resolve(rootDir, 'public');
const blogDir = resolve(rootDir, 'blog');
const defaultImage = `${siteUrl}/og-image.svg`;
const generatedAt = '2026-07-16';

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

function pageUrl(path) {
  return canonicalUrl(path);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-CA', { timeZone: 'Europe/Istanbul' });
}

function scriptTag(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function renderDocument({
  title,
  description,
  canonical,
  ogType = 'website',
  image = defaultImage,
  robots = 'index, follow',
  jsonLd = [],
  body = '',
  language = 'tr',
  alternateLinks = [],
  ogLocale,
}) {
  return `<!doctype html>
<html lang="${language}">
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
    <link rel="alternate" type="application/rss+xml" title="The AP Design Blog RSS" href="${siteUrl}${language === 'en' ? '/en/blog/rss.xml' : '/blog/rss.xml'}" />
${alternateLinks.length ? `    ${alternateLinks.map((link) => `<link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`).join('\n    ')}\n` : ''}    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:site_name" content="The AP Design" />
    <meta property="og:locale" content="${ogLocale || (language === 'en' ? 'en_US' : 'tr_TR')}" />
    <meta property="og:image" content="${absoluteUrl(image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${absoluteUrl(image)}" />
    <style>
      #root > main:not([class]) {
        min-height: 100vh;
        margin: 0;
        padding: clamp(2rem, 5vw, 4rem);
        background: radial-gradient(circle at 16% 12%, rgba(238, 210, 255, 0.65), transparent 32%), radial-gradient(circle at 84% 10%, rgba(204, 232, 255, 0.7), transparent 30%), #faf8f5;
        color: #111;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      #root > main:not([class]) header,
      #root > main:not([class]) section,
      #root > main:not([class]) article {
        max-width: 1120px;
        margin-inline: auto;
      }
      #root > main:not([class]) header {
        padding-block: clamp(3rem, 8vw, 7rem);
        text-align: center;
      }
      #root > main:not([class]) h1 {
        margin: 1rem auto;
        max-width: 880px;
        font-size: clamp(2.8rem, 7vw, 6.4rem);
        line-height: 0.95;
        letter-spacing: -0.04em;
      }
      #root > main:not([class]) h2 {
        margin-top: 0;
        font-size: clamp(2rem, 4vw, 3.8rem);
        line-height: 1;
      }
      #root > main:not([class]) p {
        color: rgba(17, 17, 17, 0.68);
        font-size: 1.05rem;
        line-height: 1.8;
      }
      #root > main:not([class]) article {
        margin-top: 1.5rem;
        border: 1px solid rgba(17, 17, 17, 0.08);
        border-radius: 2rem;
        background: rgba(255, 255, 255, 0.82);
        padding: clamp(1.25rem, 3vw, 2rem);
        box-shadow: 0 22px 70px rgba(60, 44, 125, 0.1);
      }
      #root > main:not([class]) a {
        color: #2563eb;
        font-weight: 800;
      }
    </style>
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
    url: pageUrl('/'),
    logo: `${siteUrl}/ap-logo.svg`,
  };
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The AP Design',
    url: pageUrl('/'),
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
  const language = posts[0]?.language || 'tr';
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The AP Design Blog',
    url: pageUrl(getBlogIndexPath(language)),
    description: language === 'en'
      ? 'The AP Design notes on products, design, and mobile experiences.'
      : 'The AP Design ürün, tasarım ve mobil deneyim notları.',
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: post.canonicalUrl,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { '@type': 'Organization', name: post.author },
      inLanguage: post.language,
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
      url: pageUrl('/'),
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
    inLanguage: post.language,
  };
}

function faqSchema(post) {
  if (!post.faq?.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

function alternateLinksForPost(post) {
  const translated = getTranslatedPost(post, post.language === 'en' ? 'tr' : 'en');
  if (!translated) return [];

  const trPost = post.language === 'tr' ? post : translated;
  const enPost = post.language === 'en' ? post : translated;

  return [
    { hreflang: 'tr', href: trPost.canonicalUrl },
    { hreflang: 'en', href: enPost.canonicalUrl },
    { hreflang: 'x-default', href: trPost.canonicalUrl },
  ];
}

function renderBlogListBody(posts, language = 'tr') {
  const featuredPost = posts[0];
  const remainingPosts = featuredPost ? posts.filter((post) => post.slug !== featuredPost.slug) : posts;
  const copy = language === 'en'
    ? {
      tag: 'Blog',
      title: 'Notes on products, design, and mobile experiences.',
      description: 'Short, readable posts from AP Design about the apps we build, user experience decisions, and mobile product craft.',
      featuredTitle: 'Featured post',
      sectionTitle: 'Latest posts',
      read: 'read',
      categoryPathPrefix: '/en/blog/category/',
    }
    : {
      tag: 'Blog',
      title: 'Ürün, tasarım ve mobil deneyim notları.',
      description: 'AP Design’da geliştirdiğimiz uygulamalardan, kullanıcı deneyimi kararlarından ve mobil ürün üretim sürecinden kısa, okunabilir yazılar.',
      featuredTitle: 'Öne çıkan yazı',
      sectionTitle: 'Son yazılar',
      read: 'okuma',
      categoryPathPrefix: '/blog/kategori/',
    };
  const featuredMarkup = featuredPost ? `<section aria-labelledby="blog-featured-title">
    <h2 id="blog-featured-title">${copy.featuredTitle}</h2>
    <article>
      <h3><a href="${getPostPath(featuredPost)}">${escapeHtml(featuredPost.title)}</a></h3>
      <p>${escapeHtml(featuredPost.description)}</p>
      <p><a href="${getCategoryPath(featuredPost.category, language)}">${escapeHtml(blogCategories[featuredPost.category]?.title || featuredPost.category)}</a></p>
      <time datetime="${featuredPost.publishedAt}">${formatDate(featuredPost.publishedAt)}</time>
      <p>${escapeHtml(featuredPost.readingTime)} ${copy.read}</p>
    </article>
  </section>` : '';
  const remainingMarkup = remainingPosts.length ? `<section aria-labelledby="blog-posts-title">
    <h2 id="blog-posts-title">${copy.sectionTitle}</h2>
    ${remainingPosts.map((post) => `<article>
      <h3><a href="${getPostPath(post)}">${escapeHtml(post.title)}</a></h3>
      <p>${escapeHtml(post.description)}</p>
      <p><a href="${getCategoryPath(post.category, language)}">${escapeHtml(blogCategories[post.category]?.title || post.category)}</a></p>
      <time datetime="${post.publishedAt}">${formatDate(post.publishedAt)}</time>
      <p>${escapeHtml(post.readingTime)} ${copy.read}</p>
    </article>`).join('\n    ')}
  </section>` : '';

  return `<main>
  <header>
    <p>${copy.tag}</p>
    <h1>${copy.title}</h1>
    <p>${copy.description}</p>
  </header>
  ${[featuredMarkup, remainingMarkup].filter(Boolean).join('\n  ')}
</main>`;
}

function renderPostBody(post) {
  const copy = post.language === 'en'
    ? {
      author: 'Author',
      published: 'Published',
      updated: 'Updated',
      read: 'read',
      relatedLinks: 'Related links',
      categoryPrefix: '/en/blog/category/',
      blogPath: '/en/blog',
    }
    : {
      author: 'Yazar',
      published: 'Yayın tarihi',
      updated: 'Güncelleme tarihi',
      read: 'okuma',
      relatedLinks: 'İlgili bağlantılar',
      categoryPrefix: '/blog/kategori/',
      blogPath: '/blog',
    };

  return `<main>
  <article>
    <header>
      <p><a href="${getCategoryPath(post.category, post.language)}">${escapeHtml(blogCategories[post.category]?.title || post.category)}</a></p>
      <h1>${escapeHtml(post.title)}</h1>
      <p>${escapeHtml(post.description)}</p>
      <p>${copy.author}: ${escapeHtml(post.author)}</p>
      <time datetime="${post.publishedAt}">${copy.published}: ${formatDate(post.publishedAt)}</time>
      <time datetime="${post.updatedAt}">${copy.updated}: ${formatDate(post.updatedAt)}</time>
      <p>${escapeHtml(post.readingTime)} ${copy.read}</p>
    </header>
    <figure>
      <img src="${post.coverImage}" alt="${escapeHtml(post.coverImageAlt)}" width="1200" height="630" />
    </figure>
    ${post.content.map((section) => `<section>${section.heading ? `
      <h2>${escapeHtml(section.heading)}</h2>` : ''}
      ${renderStaticBlocks(section.blocks, post)}
    </section>`).join('\n    ')}
    ${post.internalLinks.length ? `<aside>
      <h2>${copy.relatedLinks}</h2>
      ${post.internalLinks.map((link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`).join('\n      ')}
    </aside>` : ''}
  </article>
</main>`;
}

function renderStaticBlocks(blocks, post) {
  return blocks.map((block) => {
    if (block.type === 'paragraph') {
      return `<p>${escapeHtml(block.text)}</p>`;
    }

    if (block.type === 'list') {
      return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    }

    if (block.type === 'steps') {
      return `<ol>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol>`;
    }

    if (block.type === 'callout') {
      return `<aside><p>${escapeHtml(block.text)}</p></aside>`;
    }

    if (block.type === 'cta') {
      return `<aside><a href="${block.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(block.label)}</a></aside>`;
    }

    if (block.type === 'links') {
      return `<p>${block.links.map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`).join(' ')}</p>`;
    }

    if (block.type === 'faq') {
      return `<div>${post.faq.map((item) => `<section><h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p></section>`).join('')}</div>`;
    }

    return '';
  }).join('\n      ');
}

function renderCategoryBody(category, posts, language = 'tr') {
  const copy = language === 'en'
    ? { tag: 'Blog category', prefix: '/en/blog/' }
    : { tag: 'Blog kategorisi', prefix: '/blog/' };

  return `<main>
  <header>
    <p>${copy.tag}</p>
    <h1>${escapeHtml(category.title)}</h1>
    <p>${escapeHtml(category.description)}</p>
  </header>
  <section>
    ${posts.map((post) => `<article>
      <h2><a href="${getPostPath(post)}">${escapeHtml(post.title)}</a></h2>
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
    ['/en/blog/', generatedAt],
    ['/contact/', generatedAt],
    ['/del-it/', generatedAt],
    ['/del-it/gizlilik-politikasi/', generatedAt],
    ['/del-it/kullanim-sartlari/', generatedAt],
    ['/xox-taktik-arena/', generatedAt],
    ['/xox-taktik-arena/gizlilik-politikasi/', generatedAt],
    ['/xox-taktik-arena/kullanim-sartlari/', generatedAt],
    ['/blog/', generatedAt],
  ];
  const urls = [
    ...staticPages.map(([path, lastmod]) => ({ loc: pageUrl(path), lastmod })),
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
    <link>${pageUrl('/blog/')}</link>
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

function rssXmlForLanguage(posts, language = 'tr') {
  const latestUpdatedAt = posts
    .map((post) => new Date(post.updatedAt).getTime())
    .sort((a, b) => b - a)[0];
  const copy = language === 'en'
    ? {
      title: 'The AP Design Blog',
      link: pageUrl('/en/blog/'),
      description: 'Notes on products, design, and mobile experiences.',
      language: 'en',
    }
    : {
      title: 'The AP Design Blog',
      link: pageUrl('/blog/'),
      description: 'Ürün, tasarım ve mobil deneyim notları.',
      language: 'tr',
    };

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${copy.title}</title>
    <link>${copy.link}</link>
    <description>${copy.description}</description>
    <language>${copy.language}</language>
    <lastBuildDate>${new Date(latestUpdatedAt || Date.now()).toUTCString()}</lastBuildDate>
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

function redirectsTxt() {
  const staticPaths = [
    '/blog',
    '/en/blog',
    '/contact',
    '/del-it',
    '/del-it/gizlilik-politikasi',
    '/del-it/kullanim-sartlari',
    '/xox-taktik-arena',
    '/xox-taktik-arena/gizlilik-politikasi',
    '/xox-taktik-arena/kullanim-sartlari',
  ];
  const postPaths = getAllPublishedBlogPosts().map((post) => getPostPath(post).replace(/\/$/, ''));
  const categoryPaths = Object.keys(blogCategories)
    .map((slug) => getCategoryPath(slug, blogCategories[slug].language).replace(/\/$/, ''));
  const canonicalRedirects = [...staticPaths, ...postPaths, ...categoryPaths]
    .map((path) => ({ from: path, to: canonicalPath(path) }));

  return [...legacyBlogRedirects, ...canonicalRedirects]
    .map((redirect) => `${redirect.from} ${redirect.to} 301`)
    .join('\n');
}

async function main() {
  const trPosts = getPublishedBlogPosts('tr');
  const enPosts = getPublishedBlogPosts('en');
  const posts = getAllPublishedBlogPosts();
  validatePosts(posts);
  await rm(blogDir, { recursive: true, force: true });

  await writePage('blog', renderDocument({
    title: 'Blog | The AP Design',
    description: 'The AP Design blogunda mobil uygulama geliştirme, UI/UX tasarım, dijital ürünler, App Store süreçleri ve ürün hikayeleri üzerine yazılar.',
    canonical: pageUrl('/blog/'),
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      blogSchema(trPosts),
      breadcrumbSchema([
        { name: 'The AP Design', url: pageUrl('/') },
        { name: 'Blog', url: pageUrl('/blog/') },
      ]),
    ],
    body: renderBlogListBody(trPosts, 'tr'),
    language: 'tr',
  }));

  await writePage('en/blog', renderDocument({
    title: 'Blog | The AP Design',
    description: 'The AP Design blog features articles about mobile app development, UI/UX design, digital products, App Store processes, and product stories.',
    canonical: pageUrl('/en/blog/'),
    language: 'en',
    ogLocale: 'en_US',
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      blogSchema(enPosts),
      breadcrumbSchema([
        { name: 'The AP Design', url: pageUrl('/') },
        { name: 'Blog', url: pageUrl('/en/blog/') },
      ]),
    ],
    body: renderBlogListBody(enPosts, 'en'),
  }));

  await Promise.all(posts.map((post) => writePage(`${post.language === 'en' ? 'en/blog' : 'blog'}/${post.slug}`, renderDocument({
    title: post.seoTitle,
    description: post.seoDescription,
    canonical: post.canonicalUrl,
    ogType: 'article',
    image: post.socialImage,
    language: post.language,
    ogLocale: post.language === 'en' ? 'en_US' : 'tr_TR',
    alternateLinks: alternateLinksForPost(post),
    jsonLd: [
      articleSchema(post),
      faqSchema(post),
      breadcrumbSchema([
        { name: 'The AP Design', url: pageUrl('/') },
        { name: 'Blog', url: pageUrl(getBlogIndexPath(post.language)) },
        { name: post.title, url: post.canonicalUrl },
      ]),
    ].filter(Boolean),
    body: renderPostBody(post),
  }))));

  await Promise.all(Object.entries(blogCategories).map(([slug, category]) => {
    const categoryPosts = getPostsByCategory(slug, category.language);
    if (!categoryPosts.length) return Promise.resolve();
    const categoryPath = category.language === 'en' ? `en/blog/category/${slug}` : `blog/kategori/${slug}`;
    const categoryUrl = pageUrl(getCategoryPath(slug, category.language));

    return writePage(categoryPath, renderDocument({
      title: `${category.title} | The AP Design Blog`,
      description: category.description,
      canonical: categoryUrl,
      robots: categoryPosts.length >= 2 ? 'index, follow' : 'noindex, follow',
      language: category.language,
      ogLocale: category.language === 'en' ? 'en_US' : 'tr_TR',
      jsonLd: [
        breadcrumbSchema([
          { name: 'The AP Design', url: pageUrl('/') },
          { name: 'Blog', url: pageUrl(getBlogIndexPath(category.language)) },
          { name: category.title, url: categoryUrl },
        ]),
      ],
      body: renderCategoryBody(category, categoryPosts, category.language),
    }));
  }));

  await writeFile(resolve(publicDir, 'sitemap.xml'), sitemapXml(posts));
  await writeFile(resolve(publicDir, 'robots.txt'), robotsTxt());
  await writeFile(resolve(publicDir, '_redirects'), redirectsTxt());
  await mkdir(resolve(publicDir, 'blog'), { recursive: true });
  await writeFile(resolve(publicDir, 'blog/rss.xml'), rssXmlForLanguage(trPosts, 'tr'));
  await mkdir(resolve(publicDir, 'en/blog'), { recursive: true });
  await writeFile(resolve(publicDir, 'en/blog/rss.xml'), rssXmlForLanguage(enPosts, 'en'));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
