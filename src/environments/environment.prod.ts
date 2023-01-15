export const environment = {
  production: true,
  target: '$TARGET',
};

// TARGET=stage envsubst < dist/ng-config/main.js > dist/ng-config/temp_main.js && mv dist/ng-config/temp_main.js dist/ng-config/main.js
