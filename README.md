# lwng-modal
Lightweight Angular Bootstrap Modal

Looking for an ultra lightweight Bootstrap modal handler in Angular? Here, you got it. 
I was looking for the same thing - bootstrap-ui was too large, and I found most of the alternatives awkward implementations. Anyways, pull this into your project through bower, and see how easy and fast this one is.

##Bower
    bower install lwng-modal --save

##Usage:

###DIALOG


     betterbrandModal.dialog({
        title:"My modal!!", 
        template:"<div class='modal-body'><h1>Hello there </h1></div><div class='modal-footer'><button ng-click='modal.resolve(\"This resolved nicely!!\")'>Resolve</button><button ng-click='modal.resolve(\"end22222!!\")'>Resolve2</button><button ng-click='modal.reject(\"This didn't end well!!\")'>Reject</button></div>"
     },$scope).then(
        function(result){
         console.log('SUCCESS RESOLVE',result)
        },
        function(){
         console.log('SUCCESS REJECT')
        }
     );

###CONFIRM

     betterbrandModal.confirm({
      title:"Delete confirm",
      message:"Are you sure you want to delete?"
     }).then(
      function(resolved){},
      function(rejected){}
     );

###ALERT

     betterbrandModal.alert({
      title:"Alert",
      message:"Welcome to our site!"
     }).then(
      function(resolved){},
      function(rejected){}
     );


