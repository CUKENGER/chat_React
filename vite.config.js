import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		include: [
			'firebase/app',
			'firebase/compat/auth',
			'firebase/compat/firestore',
		],
	},
	plugins: [react()],
})
