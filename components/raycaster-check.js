AFRAME.registerComponent('raycaster-check', {
  dependencies: ['raycaster'],
  schema: {
    target: { type: "selector"}
  },
    
  init: function () { 
      this.el.addEventListener('raycaster-intersected', function () {
          console.log('over door');
      });
      this.el.addEventListener('raycaster-intersected-cleared', function () {
          console.log('out of door');
      });
  }
});

//AFRAME.registerComponent('intersect-color-change',{
//    init:function(){
//        var el= this.el;
////        var material= el.getAttribute('material');
////        var initialOpacity=material.opacity;
//        el.addEventListener('raycaster-intersected', function(){
//            console.log("hi");
////            var raycasterEl=evt.detail.el;
////            el.setAttribute('material','opacity',1.0);
//        });
//        el.addEventListener('raycaster-intersected-cleared',function(){
////            el.setAttribute('material','color',initialColor);
////            el.setAttribute('material','opacity',initialOpacity)
//            ;});
//    }});