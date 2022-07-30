//component
import "./components/footer/copyright.js";
import "./components/Technologies/TechTab.js";
import "./components/Technologies/TabContent.js";
import {
  portfolioData,
  CompanyInfoData,
  blogsData,
  CreativeServiceData,
  awardData,
} from "./service/data.js";

//vue instance
var app = new Vue({
  el: "#app",
  data() {
    return {
      CompanyInfo: CompanyInfoData,
      blogs: blogsData,
      portfolio: portfolioData,
      CreativeService: CreativeServiceData,
      awards: awardData,
    };
  },
});
