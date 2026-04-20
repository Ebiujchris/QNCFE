#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to vite executable
const nodeVitePath = join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');

console.log('Starting Vite build...');

// Try to run vite directly with node
const child = spawn('node', [nodeVitePath, 'build'], {
  stdio: 'inherit',
  cwd: __dirname
});

child.on('error', (error) => {
  console.error('Build failed:', error);
  process.exit(1);
});

child.on('close', (code) => {
  if (code !== 0) {
    console.error(`Build process exited with code ${code}`);
    process.exit(code);
  }
  console.log('Build completed successfully!');
});