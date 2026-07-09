import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../blog.html", import.meta.url), "utf8");

const requiredSnippets = [
  'id="blog-compose-button"',
  'aria-label="Write a new blog post"',
  'id="blog-compose-panel"',
  'name="visibility"',
  'value="private"',
  'value="public"',
  'localStorage.setItem(BLOG_STORAGE_KEY',
  'localStorage.getItem(BLOG_STORAGE_KEY',
  'blog-posts.json',
  'GITHUB_API_CONTENT_URL',
  'api.github.com/repos/crx16888/crx16888.github.io/contents/blog-posts.json',
  'name="githubToken"',
  'function commitPublicPost',
  'function loadPublishedPosts',
  'data-blog-posts',
  'id="blog-public-export"',
];

for (const snippet of requiredSnippets) {
  assert.ok(html.includes(snippet), `Missing expected blog editor snippet: ${snippet}`);
}

assert.match(
  html,
  /function\s+renderBlogPosts\s*\(/,
  "Blog page should render saved local posts."
);

assert.match(
  html,
  /function\s+downloadPublicPost\s*\(/,
  "Public posts should keep a fallback export path for repository publishing."
);

const publicPosts = JSON.parse(readFileSync(new URL("../blog-posts.json", import.meta.url), "utf8"));
assert.deepEqual(publicPosts, { posts: [] }, "Public posts should have a repository-backed JSON store.");
