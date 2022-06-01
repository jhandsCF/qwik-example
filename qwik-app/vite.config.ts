import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { resolve } from 'path';


export default defineConfig(() => {
  const pagesDir = resolve('pages');

  return {
    ssr: {target: 'webworker', noExternal: true},
    plugins: [
      qwikCity({
        pagesDir,
        layouts: {
          default: resolve('src', 'layouts', 'default', 'default.tsx'),
        },
      }),
      qwikVite(),
      
    ],
  };
});
