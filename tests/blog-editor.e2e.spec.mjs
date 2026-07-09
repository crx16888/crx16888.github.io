import { test, expect } from "@playwright/test";

test("blog editor saves a private local post", async ({ page }) => {
  await page.goto("http://127.0.0.1:4173/blog.html");
  await page.getByLabel("Write a new blog post").click();
  await page.getByPlaceholder("写一个标题").fill("本地私密测试");
  await page.getByPlaceholder("开始写...").fill("这是一篇只保存在当前浏览器的博客。");
  await page.getByRole("button", { name: "保存" }).click();

  await expect(page.getByText("本地私密测试")).toBeVisible();
  await expect(page.getByText("仅我可见").first()).toBeVisible();

  const savedPosts = await page.evaluate(() => JSON.parse(localStorage.getItem("rx-blog-posts") || "[]"));
  expect(savedPosts).toHaveLength(1);
  expect(savedPosts[0]).toMatchObject({
    title: "本地私密测试",
    visibility: "private"
  });
});
