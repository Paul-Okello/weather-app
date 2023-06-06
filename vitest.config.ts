import path from 'node:path';
import { defineConfig, defaultExclude } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      test: path.resolve(__dirname, '../test'), // Update the path to point outside the src folder
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: path.resolve(__dirname, '../test/setup.ts'), // Update the path to point outside the src folder
    exclude: [...defaultExclude],
    environmentMatchGlobs: [
      ['**/*.test.tsx', 'happy-dom'],
      ['**/*.component.test.ts', 'happy-dom'],
    ],
    coverage: {
      statements: 54.92,
      thresholdAutoUpdate: true,
      include: ['../src/**/*'], // Update the path to point outside the src folder
      exclude: [
        '../test/**', // Update the path to point outside the src folder
        'vite.*.ts',
        '**/*.d.ts',
        '**/*.test.*',
        '**/*.config.*',
        '**/snapshot-tests/**',
        '**/*.solution.tsx',
        '**/coverage/**',
      ],
      all: true,
    },
  },
});
