import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const serverDir = join(rootDir, "dist", "server");
const indexPath = join(serverDir, "index.js");
const previewPath = join(serverDir, "server.js");

const previewSource =
  "export { default, createServerEntry } from './index.js';\n";

try {
  await readFile(indexPath, "utf8");
  await mkdir(serverDir, { recursive: true });
  await writeFile(previewPath, previewSource, "utf8");
} catch (error) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    console.warn(
      `[ensure-preview-server] Skipped: missing build output at ${indexPath}`,
    );
    process.exit(0);
  }

  throw error;
}
