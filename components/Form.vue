<template>
  <div>
    <form id="custom-form" @submit.prevent="validateForm">
      <div class="field">
        <label class="label">Name</label>
        <input
          type="text"
          placeholder="name"
          class="input"
          name="name"
          v-model="name"
        />
      </div>

      <div class="field">
        <label class="label">Email</label>
        <input
          type="email"
          placeholder="email"
          class="input"
          name="email"
          v-model="email"
        />
      </div>

      <div class="field has-text-right">
        <button type="submit" class="button is-danger">Submit</button>
      </div>

      <div class="field has-text-right">
        <button type="reset" class="button is-danger">Reset</button>
      </div>
    </form>
  </div>
</template>
<script>
import "@seed-catalog/modal";

export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    validateForm: function () {
      console.log({ name: this.name, email: this.email });
      if (this.name) {
        this.$emit("search-value", this.name);
      } else {
        alert("invalid form");
      }
    },
  },
  /**
   * Called synchronously immediately after the instance has been initialized,
   * before data observation and event/watcher setup.
   **/
  beforeCreate() {
    console.log("*** form BEFORE_CREATE");
  },
  /**
   * Called synchronously after the instance is created. At this stage,
   * the instance has finished processing the options which means the following
   * have been set up: data observation, computed properties, methods, watch/event callbacks.
   * However, the mounting phase has not been started, and the $el property will not be available yet.
   **/
  created() {
    console.log("*** form CREATED");
  },
  /**
   * Called right before the mounting begins: the render function is about to be called for the first time.
   **/
  beforeMount() {
    console.log("*** form BEFORE_MOUNT");
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
      console.log("*** form MOUNTED");
    });
  },
  /**
   * Called when data changes, before the DOM is patched.
   * This is a good place to access the existing DOM before an update,
   * e.g. to remove manually added event listeners.
   **/
  beforeUpdate() {
    console.log("*** form BEFORE_UPDATE");
  },
  /**
   * Called after a data change causes the virtual DOM to be re-rendered and patched.
   **/
  updated() {
    console.log("*** form UPDATED");
  },
  /**
   * Called when a kept-alive component is activated.
   **/
  activated() {
    console.log("*** form ACTIVATED");
  },
  /**
   * Called when a kept-alive component is deactivated.
   **/
  desactivated() {
    console.log("*** form DESACTIVATED");
  },
  /**
   * Called right before a component instance is unmounted. At this stage the instance is still fully functional.
   **/
  beforeUnmount() {
    console.log("*** form BEFORE_UNMOUNT");
  },
  /**
   * Called after a component instance has been unmounted.
   * When this hook is called, all directives of the component
   * instance have been unbound, all event listeners have been removed,
   * and all child component instance have also been unmounted.
   **/
  unmounted() {
    console.log("*** form UNMOUNTED");
  },
  /**
   * Called when an error from any descendent component is captured.
   * The hook receives three arguments: the error, the component instance
   * that triggered the error, and a string containing information on
   * where the error was captured. The hook can return false to stop
   * the error from propagating further.
   **/
  errorCaptured() {
    console.log("*** form ERROR_CAPTURED");
  },
  /**
   * Called when virtual DOM re-render is tracked. The hook receives a debugger event as an argument.
   * This event tells you what operation tracked the component and the target object and key of that operation.
   **/
  renderTracked() {
    console.log("*** form RENDER_TRACKED");
  },
  /**
   * Called when virtual DOM re-render is triggered. Similarly to renderTracked,
   * receives a debugger event as an argument. This event tells you what operation
   * triggered the re-rendering and the target object and key of that operation.
   **/
  renderTriggered() {
    console.log("*** form RENDER_TRIGGERED");
  },
};
</script>
<style>
form {
  padding: 20px;
}
</style>
