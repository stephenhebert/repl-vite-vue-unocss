export const defaultFiles = {
    "/src/styles.css": {
        "code": "body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}"
    },
    "/src/App.vue": {
        "code": "<script setup lang=\"ts\">\nimport { ref } from \"vue\";\n\nconst data = ref<string>(\"world\");\n</script>\n\n<template>\n  <h1 class=\"bg-blue\">Hello {{ data }}</h1>\n</template>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>"
    },
    "/src/main.ts": {
        "code": "import 'uno.css'\nimport { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\"\n\ncreateApp(App).mount('#app')\n"
    },
    "/index.html": {
        "code": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script type=\"module\" src=\"/src/main.ts\"></script>\n  </body>\n</html>\n"
    },
    "/vite-env.d.ts": {
        "code": "/// <reference types=\"vite/client\" />"
    },
    "/vite.config.ts": {
        "code": "import { defineConfig } from 'vite'\nimport UnoCSS from 'unocss/vite'\nimport Vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [\n    UnoCSS(),\n    Vue()\n  ]\n})\n"
    },
    "/tsconfig.json": {
        "code": "{\n  \"compilerOptions\": {\n    \"target\": \"ESNext\",\n    \"useDefineForClassFields\": true,\n    \"module\": \"ESNext\",\n    \"moduleResolution\": \"Node\",\n    \"strict\": true,\n    \"jsx\": \"preserve\",\n    \"resolveJsonModule\": true,\n    \"isolatedModules\": true,\n    \"esModuleInterop\": true,\n    \"lib\": [\n      \"ESNext\",\n      \"DOM\"\n    ],\n    \"skipLibCheck\": true,\n    \"noEmit\": true\n  },\n  \"include\": [\n    \"src/**/*.ts\",\n    \"src/**/*.d.ts\",\n    \"src/**/*.tsx\",\n    \"src/**/*.vue\"\n  ],\n  \"references\": [\n    {\n      \"path\": \"./tsconfig.node.json\"\n    }\n  ]\n}"
    },
    "/tsconfig.node.json": {
        "code": "{\n  \"compilerOptions\": {\n    \"composite\": true,\n    \"module\": \"ESNext\",\n    \"moduleResolution\": \"Node\",\n    \"allowSyntheticDefaultImports\": true\n  },\n  \"include\": [\n    \"vite.config.ts\"\n  ]\n}"
    },
    "/package.json": {
        "code": "{\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"tsc && vite build\",\n    \"preview\": \"vite preview\"\n  },\n  \"dependencies\": {\n    \"vue\": \"^3.2.47\",\n    \"unocss\": \"^0.49.5\"\n  },\n  \"devDependencies\": {\n    \"@vitejs/plugin-vue\": \"^4.0.0\",\n    \"vite\": \"4.1.4\",\n    \"vue-tsc\": \"^1.2.0\",\n    \"typescript\": \"^4.9.5\",\n    \"esbuild-wasm\": \"^0.17.12\"\n  }\n}"
    }
}
