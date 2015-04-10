'use strict';

angular.module('lwng.modal',[])
    .factory('lwngModal', ['$q','$compile','$rootScope',function ($q, $compile, $rootScope) {

        var modalContainer = document.body.appendChild(document.createElement('div'));

        var modals = [];

        var hide = function(id){
            var modal = modals[id];
            $(modal.container).modal('hide');
        };

        var addModalContainer  = function(){
            var container =$('<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">{{modal.config.title}}</h4></div></div></div></div>');
            $(modalContainer).append(container);

            return container;
        };

        var dialog = function (config, scope) {
            //config: .template  .templateUrl
            modals.push({});

            var modal = modals[modals.length-1];

            modal.id = modals.length-1;
            modal.deferred = $q.defer();
            modal.config = config;
            modal.container = addModalContainer();

            modal.resolve = function(result){
                modal.deferred.resolve(result);
                hide(modal.id);
            };
            modal.reject = function(result){
                modal.deferred.reject(result);
                hide(modal.id);
            };

            scope.modal = modal;

            var modalContent = $(modal.container).find('.modal-content');
            modalContent.append(config.template);

            $compile(modalContent)(scope);

            $(modal.container).modal('show');
            $(modal.container).on('hidden.bs.modal', function (e) {
                $(modal.container).remove();
                modal=null;
            });

            return modal.deferred.promise;
        };

        var confirm = function (config){
            config.template = '<div class="modal-body">'+config.message+'</div><div class="modal-footer"><button class="btn btn-success" ng-click="modal.resolve(true)">Yes</button><button class="btn btn-default" ng-click="modal.reject()">No</button></div>';
            return dialog(config,$rootScope.$new(true));
        };
        var alert = function (config){
            if (!config.title) config.title = 'Alert';
            config.template = '<div class="modal-body">'+config.message+'</div><div class="modal-footer"><button class="btn btn-success" ng-click="modal.resolve(true)">Ok</button></div>';
            return dialog(config,$rootScope.$new(true));
        };

        return {
            dialog: dialog,
            confirm: confirm,
            alert: alert
        }
    }]);
