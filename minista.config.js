import {
	defineConfig,
	pluginBeautify,
	pluginBundle,
	pluginImage,
	pluginIsland,
	pluginMdx,
	pluginSearch,
	pluginSprite,
	pluginSsg,
	pluginSvg
} from 'minista'
import path from 'path'
// import type { PreRenderedAsset } from 'rolldown'
import { normalizePath } from 'vite'

// Раздельный вывод ассетов по директориям (аналог v3 assets.outDir / fonts.outDir / images.outDir)
const assetFileNames = assetInfo => {
	const name = assetInfo.name ?? ''
	const originalNames = assetInfo.originalFileNames ?? []
	const isSprite = originalNames.some(file =>
		normalizePath(file).includes('/.minista/sprite/')
	)
	if (name.endsWith('.css')) return 'assets/[name][extname]'
	if (isSprite) return 'assets/images/[name][extname]'
	if (/\.(png|jpe?g|gif|bmp|svg|webp|avif)$/.test(name))
		return 'assets/images/[name][extname]'
	if (/\.(woff2?|ttf|otf|eot)$/.test(name))
		return 'assets/fonts/[name][extname]'
	return 'assets/[name][extname]'
}

export default defineConfig(({ command, isSsrBuild }) => {
	const isBuild = command === 'build' && !isSsrBuild

	return {
		// root, base — без изменений (Vite)
		root: '',
		base: '/',

		// public → publicDir
		publicDir: 'public',

		plugins: [
			pluginSsg(),

			// assets.images → pluginImage
			pluginImage({
				optimize: {
					name: '[name]-[width]x[height]',
					remoteName: 'remote-[index]',
					layout: 'constrained',
					breakpoints: [
						320, 400, 640, 800, 1024, 1280, 1440, 1920, 2560, 2880, 3840
					],
					resolution: [1, 2],
					format: 'inherit',
					formatOptions: {},
					quality: undefined,
					aspect: undefined,
					background: undefined,
					fit: 'cover',
					position: 'centre'
				}
			}),

			// assets.svgr → pluginSvg
			pluginSvg(),

			// assets.icons → pluginSprite (svgstoreOptions → svgo removeAttrs)
			pluginSprite({
				plugins: [
					{
						name: 'removeAttrs',
						params: {
							attrs: ['fill', 'stroke']
						}
					}
				]
			}),

			// assets.bundle → pluginBundle
			pluginBundle({ outName: 'bundle' }),

			// assets.partial → pluginIsland
			pluginIsland({
				outName: 'hydrate-[index]',
				rootAttrName: 'partial-hydration',
				rootDOMElement: 'div',
				rootStyle: { display: 'contents' }
			}),

			// markdown → pluginMdx
			pluginMdx({
				remarkPlugins: [],
				rehypePlugins: []
			}),

			// search → pluginSearch
			pluginSearch({
				include: ['**/*'],
				exclude: ['/404'],
				baseUrl: '',
				trimTitle: '',
				targetSelector: '[data-search]',
				hit: {
					minLength: 3,
					number: false,
					english: true,
					hiragana: false,
					katakana: true,
					kanji: true
				}
			}),

			// beautify → pluginBeautify
			pluginBeautify({
				useHtml: true,
				useAssets: false,
				htmlOptions: {
					indent_size: 2,
					max_preserve_newlines: 0,
					indent_inner_html: true,
					extra_liners: [],
					inline: [
						'span',
						'strong',
						'b',
						'small',
						'del',
						's',
						'code',
						'br',
						'wbr'
					]
				},
				cssOptions: {
					indent_size: 2,
					space_around_combinator: true
				},
				jsOptions: {
					indent_size: 2
				}
			})
		],

		// out → build.outDir (только для обычного билда, не SSR)
		build: {
			outDir: isBuild ? 'dist' : undefined,
			rollupOptions: {
				output: {
					// assets.outName: '[name]' — убираем хэши
					assetFileNames,
					chunkFileNames: 'assets/[name].js',
					entryFileNames: 'assets/[name].js'
				}
			}
		},

		// resolve.alias — без изменений
		resolve: {
			alias: [
				{
					find: '@/',
					replacement: path.resolve('src') + '/'
				}
			]
		},

		// css — без изменений (Vite)
		css: {
			modules: {
				scopeBehaviour: 'local',
				globalModulePaths: [],
				generateScopedName: undefined,
				hashPrefix: '',
				localsConvention: 'camelCaseOnly'
			},
			preprocessorOptions: {
				scss: {
					additionalData: `
          @use '@/styles/helpers' as *;
          `
				},
				less: {},
				stylus: {}
			}
		}

		// delivery → упразднён в v4 (pluginArchive если нужны архивы)
		// vite: {} → больше не нужен, всё на верхнем уровне
	}
})
