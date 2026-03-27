import pkg from 'postcss-pxtorem'
const { postcssPxToRem } = pkg

export default ({ env }) => {
	const isProd = env === 'production'
	const plugins = []

	if (isProd) {
		plugins.push(
			postcssPxToRem({
				propList: ['*'],
				MediaQuery: true
			})
		)
	}

	return {
		plugins
	}
}
