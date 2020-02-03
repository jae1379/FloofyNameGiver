require( "dotenv" ).config();

const ComfyJS = require( "comfy.js" );
const fs = require( "fs" );
const adjectives = fs.readFileSync( "floofyadj.txt" ).toString().split( "\r\n" ).filter( x => x );
const nouns = fs.readFileSync( "floofynoun.txt" ).toString().split( "\r\n" ).filter( x => x );

function getRandomInt( num ) {
  return Math.floor( num * Math.random() );
}

const ComfyWeb = require( "webwebweb" );
ComfyWeb.APIs[ "/name" ] = ( qs ) => {
  var name = adjectives[ getRandomInt( adjectives.length ) ] + " " + nouns[ getRandomInt( nouns.length ) ];
  if( Math.random() < 0.25 ) {
    name = adjectives[ getRandomInt( adjectives.length ) ] + " " + name;
  }
  ComfyJS.Say( "/me @" + qs.user + " is a " + name );
  return { user: qs.user, name };
}
ComfyWeb.Run( 8023 );

ComfyJS.onCommand = ( user, command, message ) => {
  if( command === "name" ) {
    // var name = adjectives[ getRandomInt( adjectives.length ) ] + " " + nouns[ getRandomInt( nouns.length ) ];
    // if( Math.random() < 0.25 ) {
    //   name = adjectives[ getRandomInt( adjectives.length ) ] + " " + name;
    // }
    // ComfyJS.Say( "/me @" + user + " " + name );
  }
}
ComfyJS.Init( process.env.TWITCHUSER, process.env.OAUTH );
