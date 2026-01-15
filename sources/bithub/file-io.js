---
id: bithub.file-io
spdx-id: Apache-2.0
origin: https://github.com/bitcoreos/skills.md
hash: sha256:7a0a41254dd856a8ae1cada0b94b62e9c39d95e2870d03a0c9dce9424b78f6ac
version: 1.0.0
---
export async function readFile(path) {
  return Deno.readTextFile(path);
}
