const rollup = require("rollup");


const inputOptions = {
    input: "./tmp_js/Main.js"
};



const outputOptions = {
    format: "umd", // required
    file: "rolluptest.js",
    dir :"./bin",
    name: "PACKAGE_NAME", // exposed name of the lib.
    globals: "window"
};

function build() {

    return new Promise(async resolve => {


        // create a bundle
        const bundle = await rollup.rollup(inputOptions);

        console.log(bundle.imports); // an array of external dependencies
        console.log(bundle.exports); // an array of names exported by the entry point
        console.log(bundle.modules); // an array of module objects

        // generate code and a sourcemap
        //const { code, map } = await bundle.generate(outputOptions);

        // or write the bundle to disk
        await bundle.write(outputOptions);

        resolve();

    });


}

exports.build = build;