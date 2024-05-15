module.exports = {
    rules: {
      "__typename": {
        create: function (context) {
          return {
            ObjectExpression(node) {
              let hasTypenameProperty = false;
        
              node.properties.forEach((property) => {
                if (property.key.name === "__typename") {
                  hasTypenameProperty = true;
                }
              });
        
              if (!hasTypenameProperty) {
                context.report({
                  node,
                  message: "Где поле '__typename', едрить кудрить!?"
                });
              }
            }
          }
        }
      }
    }
  };
