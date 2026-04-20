#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  console.log('🚀 Starting Vite build...');
  
  // Use execSync to run vite directly with node
  const vitePath = join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
  
  execSync(`node "${vitePath}" build`, {
    stdio: 'inherit',
    cwd: __dirname
  });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}