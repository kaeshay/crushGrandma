/* global AFRAME, THREE */

AFRAME.registerComponent('custom-controls', {
  schema: {
    hand: {default: ''},
    model: {default: ''}
  },

  init: function () {
    var self = this;
    var el = this.el;

    el.addEventListener('controllerconnected', this.onControllerConnected);
    el.addEventListener('controllerdisconnected', this.onControllerDisconnected);
    this.loader = new THREE.GLTFLoader();
  },

  /**
   * Update handler. More like the `init` handler since the only property is the hand, and
   * that won't be changing much.
   */
  update: function (previousHand) {
    var controlConfiguration;
    var el = this.el;
    var hand = this.data.hand;


    // Get common configuration to abstract different vendor controls.
    controlConfiguration = {
      hand: hand,
      model: false,
      orientationOffset: {x: 0, y: 0, z: hand === 'left' ? 90 : -90}
    };

    // Set model.
        el.setAttribute('vive-controls', controlConfiguration);
        el.setAttribute('oculus-touch-controls', controlConfiguration);
        el.setAttribute('windows-motion-controls', controlConfiguration);
        el.setAttribute('gltf-model', this.data.model);
  },

});
