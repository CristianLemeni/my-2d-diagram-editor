(function() {

  'use strict';

  /*
   * Reference the App Module to attach a controller
   *
   * Dependency Injection Syntax and AngularJS
   * The notation that we have used is one of the two ways in which we can declare AngularJS controllers
   * (or services, directives, or filters). The style we have used, which is also the recommended way,
   * is the safe-style of Dependency Injection, or declaration.
   *
   * $scope is the glue between the view and controller within an AngularJS application. With the
   * introduction of the controller-as syntax, the need to explicitly use $scope has been greatly reduced.
   *
   * However we still need it for Eventing :)
   * $broadcast: Sends events from a parent scope downward to its children.
   * $emit: Sends events from a child upward to its parent.
   * $on: Listens for an event and responds.
   *
   * We'll use the controller-as syntax by declaring the controller to be 'MainController as main', which
   * means that we’ll reference the MainController as main within our Views (e.g., layout.html).
   */

  angular.module('my-2d-diagram-editor.main')
    .controller('MainController', ['$log', '$translate', '$scope', 'mainService', 'fabricService', 'fabricCanvas', 'fabricWindow',
      function($log, $translate, $scope, mainService, fabricService, fabricCanvas, fabricWindow) {

        $log.info('MainController as main');

        /*
         * Per common convention, I like to store a reference to the top-level this object (this has a habit
         * of changing context based on function level scope). I also like to name the reference to this, the
         * same name that I declare the controller-as (e.g., MainController as main).
         * This makes it easier to read and connect the dots as you jump between the HTML and the JavaScript.
         */

        var main = this;

        main.shapes = mainService.getShapes();
        main.containers = mainService.getContainers();

        main.init = function () {

          $log.info('MainController - init()');

          var canvas = fabricCanvas.getCanvas();

          var rectDefaults = angular.copy(fabricService.getRectDefaults());

          // $log.info('rectDefaults: ' + JSON.stringify(['e', rectDefaults], null, '\t'));

          rectDefaults.left = 100;
          rectDefaults.top = 100;
          rectDefaults.width = 100;
          rectDefaults.height = 100;

          // $log.info('canvas: ' + JSON.stringify(['e', canvas], null, '\t'));

          var object = new fabricWindow.Rect(rectDefaults);

          canvas.add(object);

          rectDefaults.left = 200;
          rectDefaults.top = 200;

          var object = new fabricWindow.Rect(rectDefaults);

          canvas.add(object);

          canvas.setActiveObject(object);
          canvas.renderAll();

          /*

           object.id = self.createId();

           self.addObjectToCanvas(object);

          var points = [100, 200, 100, 200];
          var options = { stroke: '#ccc' };
          var object = new fabricWindow.Line(points, options);

          canvas.add(object);

          canvas.renderAll();

          */

        };

        $scope.$on('canvas:created', main.init);

        main.newShape = function(name, fill) {
          $log.info('MainController.newShape()');
        };

        main.newContainer = function(name, fill) {
          $log.info('MainController.newContainer()');
        };

        main.fileNew = function() {
          $log.info('MainController.fileNew()');
        };

        main.editDelete = function() {
          $log.info('MainController.editDelete()');
        };

        main.toggleGrid = function() {
          $log.info('MainController.toggleGrid()');
        };

        main.setPointerMode = function() {
          $log.info('MainController.setPointerMode()');
        };

        main.setConnectorMode = function() {
          $log.info('MainController.setConnectorMode()');
        };

        main.toggleSnapToGrid = function() {
          $log.info('MainController.toggleSnapToGrid()');
        };

        main.switchLanguage = function(key) {
          $log.info('MainController.switchLanguage() - ' + key.toLocaleString());
          $translate.use(key);
        };

        //
        // Private methods
        //

        var removeGrid = function() {
          $log.info('MainController.removeGrid()');
        };

        var drawGrid = function() {
          $log.info('MainController.drawGrid()');
        };

      }]);
})();
