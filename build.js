#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  console.log('🚀 Starting Vite build...');
  
  // Try multiple possible paths for vite
  const possibleVitePaths = [
    join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js'),
    join(__dirname, 'node_modules', '.bin', 'vite'),
    'npx vite',
    './node_modules/.bin/vite'
  ];
  
  let buildCommand = null;
  
  // Check which vite path exists
  for (const vitePath of possibleVitePaths) {
    if (vitePath.includes('npx')) {
      buildCommand = 'npx vite build';
      console.log('📦 Using npx vite build');
      break;
    } else if (existsSync(vitePath)) {
      if (vitePath.endsWith('.js')) {
        buildCommand = `node "${vitePath}" build`;
      } else {
        buildCommand = `"${vitePath}" build`;
      }
      console.log(`📁 Found vite at: ${vitePath}`);
      break;
    }
  }
  
  if (!buildCommand) {
    console.log('🔄 Fallback to npx vite build');
    buildCommand = 'npx vite build';
  }
  
  console.log(`🔨 Running: ${buildCommand}`);
  
  execSync(buildCommand, {
    stdio: 'inherit',
    cwd: __dirname
  });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}