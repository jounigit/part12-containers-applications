import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import macrosPlugin from 'vite-plugin-babel-macros'
import { resolve } from 'node:path'

const root = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), macrosPlugin()],
	resolve: {
		alias: {
			'@': resolve(root),
			'components': resolve(root, 'components')
		},
	},
})
