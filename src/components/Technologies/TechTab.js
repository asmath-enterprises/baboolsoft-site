//component with props
Vue.component("tech-tab", {
  // camelCase in JavaScript
  props: ["tabid", "hreflink", "content", "control"],
  template: `<li class="nav-item">
                  <a class="nav-link" active id="tabid" data-toggle="tab" :href="hreflink" role="tab" :aria-controls="control"
                    aria-selected="true">{{content}}</a>
                </li>`,
});
