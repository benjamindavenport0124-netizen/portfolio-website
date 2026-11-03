import assert from "node:assert/strict";
import test from "node:test";
import { resolveProjectPhotos } from "./photoMatching.js";
import { photoCatalog } from "./photoCatalog.js";
import { projects, projectBySlug } from "./projects.js";
import { readdir } from "node:fs/promises";

test("standard photo names select the cover and sort gallery numbers naturally", () => {
  const files = {
    "../assets/projects/whale-10.jpg": "ten",
    "../assets/projects/whale-2.PNG": "two",
    "../assets/projects/whale.jpg": "cover",
    "../assets/projects/whale-notes.png": "ignore",
    "../assets/projects/jarvis.png": "other",
  };
  assert.deepEqual(
    resolveProjectPhotos(files, "whale").map((photo) => photo.src),
    ["cover", "two", "ten"],
  );
  assert.deepEqual(resolveProjectPhotos(files, "whal"), []);
  assert.deepEqual(resolveProjectPhotos({}, "whale"), []);
});

test("registered uploads retain their chosen covers, captions, and filenames", async () => {
  const names = await readdir(new URL("../assets/projects/", import.meta.url));
  const files = Object.fromEntries(
    names
      .filter((name) => /\.(png|jpe?g|webp|avif)$/i.test(name))
      .map((name) => [`../assets/projects/${name}`, name]),
  );
  for (const filename of Object.keys(photoCatalog)) {
    assert.ok(
      names.some((name) => name.toLowerCase() === filename),
      `Missing registered photo: ${filename}`,
    );
  }
  const whale = resolveProjectPhotos(files, "whale", photoCatalog);
  assert.equal(whale[0].filename, "whale_modelV0.2.png");
  assert.ok(whale.some((photo) => photo.filename === "whalebreadboard.jpeg"));
  const jarvis = resolveProjectPhotos(files, "jarvis", photoCatalog);
  assert.equal(jarvis[0].filename, "jarvis_mainui.png");
  assert.ok(jarvis.length >= 5);
  for (const photo of [...whale, ...jarvis]) {
    assert.ok(
      photo.alt && photo.caption && photo.width > 0 && photo.height > 0,
    );
  }
});

test("every project and related-project link resolves to a real entry", () => {
  const slugs = projects.map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const project of projects) {
    assert.equal(projectBySlug[project.slug], project);
    assert.ok(project.title && project.summary && project.tags.length);
    assert.ok(project.workflow.length && project.sections.length);
    for (const slug of project.related) {
      assert.ok(
        projectBySlug[slug],
        `Unknown related project ${slug} in ${project.slug}`,
      );
    }
  }
});

test("unknown slugs never resolve to inherited Object properties", () => {
  for (const slug of [
    "missing",
    "constructor",
    "toString",
    "__proto__",
    "hasOwnProperty",
  ]) {
    assert.equal(projectBySlug[slug], undefined);
  }
});
