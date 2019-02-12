const browserSync = require( 'browser-sync' )
const { resolve } = require( 'path' )

const bs = browserSync.create()
const serverPath = __dirname

const serverconfig = {
	server: {
		baseDir  : serverPath,
		directory: true,
	},
	files: [
		`${serverPath}/**/*`,
	],
	// port: 8600,
	open: false,
}


function init() {
	try {
		bs.init( serverconfig )
	} catch( e ) {
		init()
	}
}

init()


