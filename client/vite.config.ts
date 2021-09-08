import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import checker from 'vite-plugin-checker'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    checker({ typescript: true }),
    svgrPlugin(),
    tsconfigPaths(),
  ],
})
