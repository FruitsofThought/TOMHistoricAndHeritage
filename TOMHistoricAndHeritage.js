"use strict";
define(['require', 'scene'],
  function(require, Scene) {

    class TOMHistoricAndHeritage extends Scene {
      constructor() {
          console.log("Going to Super Scene TOMHistoricAndHeritage");
          var config = {
            "id": "TOMHistoricAndHeritage",
            "groupid": "landscape",
            "languages": ['en-US', 'nl-NL'],
          };
          super(config);
        }
        // You must copy this, else we do not know where we are
      get path() {
        return require.toUrl("./").split('?')[0];
      }

      get legend() {
        var legend = [];
        legend['items'] = [];
        legend['items'].push({
          title: 'home.scenes.TOMArchitecturalStyles.stone_town.title',
          description: 'home.scenes.TOMArchitecturalStyles.stone_town.description',
          css: "background-color: rgb(0.843, 0.098, 0.110);",
          color: "rgb(215,25,28,255)",
          minzoom: 14,
          maxzoom: 22,
        });
        return legend;
      }
    };
    // Utility Functions (you can use them in your scenes maybe)
    //
    // TODO This is how multi-lingual labels can work
    function TOMlabels(feature) {
      console.log("Rendering Label");
      if (!feature.hasOwnProperty('name')) {
        return "No Name";
      };

      console.log("Rendering label for: " + feature["name"]);
      var language = Cookies.get('language');
      var lang = language.substr(0, 2);
      return "Hodor";
      return feature["name:" + lang] || feature["name"];
    }

    return new TOMHistoricAndHeritage();

  });
