var raw = "emissionsRawCombined.vg.json";
vegaEmbed("#rawEmissions", raw).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var capita = "emissionsCapitaCombined.vg.json";
vegaEmbed("#capitaEmissions", capita).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var change = "emissionsChange.vg.json";
vegaEmbed("#changeEmissions", change).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var project = "emissionsProjections.vg.json";
vegaEmbed("#projectEmissions", project).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
