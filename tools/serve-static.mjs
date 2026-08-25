import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const toolsDirectory = dirname(fileURLToPath(import.meta.url));
const archiveRoot = resolve(toolsDirectory, '..');
const port = Number.parseInt(process.argv[2] ?? '8124', 10);
const baseSegment = (process.argv[3] ?? '').replace(/^\/+|\/+$/g, '');
const basePath = baseSegment ? `/${baseSegment}` : '';

if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid port: ${process.argv[2]}`);
}

const contentTypes = new Map([
    ['.css', 'text/css; charset=utf-8'],
    ['.flac', 'audio/flac'],
    ['.glb', 'model/gltf-binary'],
    ['.gltf', 'model/gltf+json'],
    ['.html', 'text/html; charset=utf-8'],
    ['.ico', 'image/x-icon'],
    ['.jpeg', 'image/jpeg'],
    ['.jpg', 'image/jpeg'],
    ['.js', 'text/javascript; charset=utf-8'],
    ['.json', 'application/json; charset=utf-8'],
    ['.mp3', 'audio/mpeg'],
    ['.mtl', 'text/plain; charset=utf-8'],
    ['.obj', 'text/plain; charset=utf-8'],
    ['.ogg', 'audio/ogg'],
    ['.png', 'image/png'],
    ['.svg', 'image/svg+xml'],
    ['.track', 'application/octet-stream'],
    ['.ttf', 'font/ttf'],
    ['.wasm', 'application/wasm'],
    ['.wav', 'audio/wav'],
    ['.woff', 'font/woff'],
    ['.woff2', 'font/woff2']
]);

const server = createServer((request, response) => {
    let pathname;
    try {
        pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    } catch {
        response.writeHead(400).end('Bad request');
        return;
    }

    if (basePath) {
        if (pathname !== basePath && !pathname.startsWith(`${basePath}/`)) {
            response.writeHead(404).end('Not found');
            return;
        }
        pathname = pathname.slice(basePath.length) || '/';
    }

    let filePath = resolve(archiveRoot, `.${pathname}`);
    if (filePath !== archiveRoot && !filePath.startsWith(`${archiveRoot}${sep}`)) {
        response.writeHead(403).end('Forbidden');
        return;
    }

    try {
        if (statSync(filePath).isDirectory()) {
            filePath = join(filePath, 'index.html');
        }
        const metadata = statSync(filePath);
        response.writeHead(200, {
            'Cache-Control': 'no-store',
            'Content-Length': metadata.size,
            'Content-Type': contentTypes.get(extname(filePath).toLowerCase()) ?? 'application/octet-stream'
        });
        if (request.method === 'HEAD') {
            response.end();
            return;
        }
        createReadStream(filePath).pipe(response);
    } catch {
        response.writeHead(404).end('Not found');
    }
});

server.listen(port, '127.0.0.1', () => {
    console.log(`PolyTrack archive test server: http://127.0.0.1:${port}${basePath || '/'}`);
});
