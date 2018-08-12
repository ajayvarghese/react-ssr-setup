require( "babel-register" )( {
  presets: [ "env" ],
  // ignore: /\.css$/,
} );
require( "./src/server" );