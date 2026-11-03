import assert from "node:assert/strict";
import test from "node:test";
import { readdir, readFile } from "node:fs/promises";

const directory = new URL("../assets/projects/", import.meta.url);

function privateMetadata(bytes, filename) {
  const found = [];
  if (/\.png$/i.test(filename)) {
    let offset = 8;
    while (offset < bytes.length) {
      const length = bytes.readUInt32BE(offset);
      const type = bytes.toString("ascii", offset + 4, offset + 8);
      assert.ok(offset + length + 12 <= bytes.length, "Truncated PNG chunk");
      if (["eXIf", "tEXt", "iTXt", "zTXt", "tIME"].includes(type)) {
        found.push(type);
      }
      offset += length + 12;
      if (type === "IEND") {
        assert.equal(offset, bytes.length, "Unexpected data after PNG image");
        break;
      }
    }
  } else {
    assert.equal(bytes.readUInt16BE(0), 0xffd8, "Invalid JPEG signature");
    let offset = 2;
    while (offset < bytes.length) {
      assert.equal(bytes[offset], 0xff, "Invalid JPEG header");
      while (bytes[offset] === 0xff) offset++;
      const marker = bytes[offset++];
      if (marker === 0xda || marker === 0xd9) break;
      const length = bytes.readUInt16BE(offset);
      assert.ok(length >= 2 && offset + length <= bytes.length);
      const prefix = bytes.toString("ascii", offset + 2, offset + 14);
      const colorOnly =
        (marker === 0xe0 && prefix.startsWith("JFIF\0")) ||
        (marker === 0xe2 && prefix.startsWith("ICC_PROFILE\0")) ||
        (marker === 0xee && prefix.startsWith("Adobe"));
      if (marker === 0xfe || (marker >= 0xe0 && marker <= 0xef && !colorOnly)) {
        found.push(`JPEG marker ${marker.toString(16)}`);
      }
      offset += length;
    }
  }
  return found;
}

for (const filename of await readdir(directory)) {
  if (!/\.(?:png|jpe?g)$/i.test(filename)) continue;
  test(`${filename} has no EXIF, XMP, comments, or capture metadata`, async () => {
    const bytes = await readFile(new URL(filename, directory));
    assert.deepEqual(
      privateMetadata(bytes, filename),
      [],
      "Strip private metadata before publishing this upload",
    );
  });
}
