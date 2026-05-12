import { build } from 'esbuild';
import { writeFileSync } from 'fs';

try {
  // Bundle the analytics module
  await build({
    entryPoints: ['analytics.js'],
    bundle: true,
    format: 'iife',
    outfile: 'analytics.bundle.js',
    minify: true,
    platform: 'browser',
  });
  console.log('✓ Analytics bundle created successfully');
} catch (error) {
  console.error('✗ Failed to build analytics:', error);
  process.exit(1);
}
