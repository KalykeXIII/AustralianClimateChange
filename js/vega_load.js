var raw = "emissionsRaw.vg.json";
vegaEmbed("#rawEmissions", raw).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var capita = "emissionsCapita.vg.json";
vegaEmbed("#capitaEmissions", capita).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
