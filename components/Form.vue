<template>
<div>
  <form onsubmit="return false">
    <input type="text" placeholder="input field">
    <input type="submit" v-on:click="sendForm" value="Add element">
    {{this.name}}
  </form>
  <seed-modal>
    <button slot="button" class="sd-btn blue">Open Modal</button>
    <div slot="header" class="header">      
        <span>Building Web Components</span>
        <button class="sd-icon clear close"><i class="material-icons blue-mate">close</i></button>
    </div>
    <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
    <div slot="footer" class="footer">
        <button class="sd-btn black close">Close</button>
        <button class="sd-btn blue-mate">Send</button>
    </div>
  </seed-modal>
</div>
</template>
<script>
import '@seed-catalog/modal';

export default {
  data () {
    return {
        name: 'Vue.js'
    }
  },
  methods: {
    sendForm: function (event) {
      // `this` inside methods points to the Vue instance
      this.name = 'React.js';
      console.log('Hello ' + this.name + '!');
      // `event` is the native DOM event
      if (event) {
        console.log(event.target.tagName)
      }
    }
  },
  /**
    * Called synchronously immediately after the instance has been initialized,
    * before data observation and event/watcher setup.
    **/
  beforeCreate() {
    console.log('*** form BEFORE_CREATE');
  },
  /**
    * Called synchronously after the instance is created. At this stage,
    * the instance has finished processing the options which means the following
    * have been set up: data observation, computed properties, methods, watch/event callbacks.
    * However, the mounting phase has not been started, and the $el property will not be available yet.
    **/
  created() {
    console.log('*** form CREATED');
  },
  /**
    * Called right before the mounting begins: the render function is about to be called for the first time.
    **/
  beforeMount() {
    console.log('*** form BEFORE_MOUNT');
  },
  /**
    * Called after the instance has been mounted, where element,
    * passed to app.mount is replaced by the newly created vm.$el.
    * If the root instance is mounted to an in-document element,
    * vm.$el will also be in-document when mounted is called.
    * Note that mounted does not guarantee that all child components
    * have also been mounted. If you want to wait until the entire view
    * has been rendered, you can use vm.$nextTick inside of
    **/
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      console.log('*** form MOUNTED');
    });
  },
  /**
    * Called when data changes, before the DOM is patched.
    * This is a good place to access the existing DOM before an update,
    * e.g. to remove manually added event listeners.
    **/
  beforeUpdate() {
    console.log('*** form BEFORE_UPDATE');
  },
  /**
    * Called after a data change causes the virtual DOM to be re-rendered and patched.
    **/
  updated() {
    console.log('*** form UPDATED');
  },
  /**
    * Called when a kept-alive component is activated.
    **/
  activated() {
    console.log('*** form ACTIVATED');
  },
  /**
    * Called when a kept-alive component is deactivated.
    **/
  desactivated() {
    console.log('*** form DESACTIVATED');
  },
  /**
    * Called right before a component instance is unmounted. At this stage the instance is still fully functional.
    **/
  beforeUnmount() {
    console.log('*** form BEFORE_UNMOUNT');
  },
  /**
    * Called after a component instance has been unmounted.
    * When this hook is called, all directives of the component
    * instance have been unbound, all event listeners have been removed,
    * and all child component instance have also been unmounted.
    **/
  unmounted() {
    console.log('*** form UNMOUNTED');
  },
  /**
    * Called when an error from any descendent component is captured.
    * The hook receives three arguments: the error, the component instance
    * that triggered the error, and a string containing information on
    * where the error was captured. The hook can return false to stop
    * the error from propagating further.
    **/
  errorCaptured() {
    console.log('*** form ERROR_CAPTURED');
  },
  /**
    * Called when virtual DOM re-render is tracked. The hook receives a debugger event as an argument.
    * This event tells you what operation tracked the component and the target object and key of that operation.
    **/
  renderTracked() {
    console.log('*** form RENDER_TRACKED');
  },
  /**
    * Called when virtual DOM re-render is triggered. Similarly to renderTracked,
    * receives a debugger event as an argument. This event tells you what operation
    * triggered the re-rendering and the target object and key of that operation.
    **/
  renderTriggered() {
    console.log('*** form RENDER_TRIGGERED');
  },
}
</script>
<style>
 form {
    padding: 20px;
 }

</style>
