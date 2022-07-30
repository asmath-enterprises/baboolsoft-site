//component with props
Vue.component("tech-tab-content", {
  // camelCase in JavaScript
  props: ["tabid", "labelledby", "content"],
  template: `<div class="tab-pane fade active show" :id="tabid" role="tabpanel" :aria-labelledby="labelledby">
                  <div class="tab-data-cont">
                    <div class="row justify-content-center">
                      <div class="col-lg-2 col-md-3 col-sm-4 col-6" v-for="item in content" :key="item.id">
                        <div class="icon-with-title">
                          <a href="javascript:void(0)">
                            <div class="iwt-icon"> <img :src="item.img" alt="Angular.JS"> </div>
                            <div class="iwt-content">
                              <p>{{item.name}}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`,
});
