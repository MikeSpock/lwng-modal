# lwng-modal
Lightweight Angular Bootstrap Modal




 Usage:

 ==DIALOG

 betterbrandModal.dialog({title:"My modal!!", template:"<div class='modal-body'><h1>Hello there </h1></div><div class='modal-footer'><button ng-click='modal.resolve(\"end1111!!\")'>Resolve1</button><button ng-click='modal.resolve(\"end22222!!\")'>Resolve2</button><button ng-click='modal.reject(\"end!!\")'>Reject</button></div>"},$scope).then(
 function(result){
 console.log('SUCCESS RESOLVE',result)
 },
 function(){
 console.log('SUCCESS REJECT')
 }
 );

== CONFIRM

 betterbrandModal.confirm({title:"Delete confirm",message:"Are you sure you want to delete?"}).then(
 function(resolved){},
 function(rejected){}
 );



