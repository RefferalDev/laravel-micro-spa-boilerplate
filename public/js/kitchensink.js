(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7uj8":function(t,e,a){"use strict";a.r(e);var i={name:"Charts",data:function(){return{chart:{labels:["12am-3am","3am-6pm","6am-9am","9am-12am","12pm-3pm","3pm-6pm","6pm-9pm","9am-12am"],datasets:[{name:"Some Data",type:"bar",values:this.randomize()},{name:"Another Set",type:"line",values:this.randomize()}]}}},methods:{randomize:function(){return[Math.ceil(100*Math.random()),Math.ceil(100*Math.random()),Math.ceil(100*Math.random()),Math.ceil(100*Math.random()),Math.ceil(100*Math.random()),Math.ceil(100*Math.random()),Math.ceil(100*Math.random()),Math.ceil(100*Math.random())]}}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-action",{on:{click:function(e){t.chart.datasets[0].values=t.randomize()}}},[t._v("Randomize")]),t._v(" "),a("v-action",{on:{click:function(e){t.chart.datasets[1].values=t.randomize()}}},[t._v("Randomize")]),t._v(" "),a("div",{staticClass:"card my-4"},[t._m(0),t._v(" "),a("div",{staticClass:"card-content bg-gray-900"},[a("v-chart",{attrs:{config:{title:"chartB",type:"axis-mixed",height:250,colors:["#7cd6fd","#743ee2"]}},model:{value:t.chart,callback:function(e){t.chart=e},expression:"chart"}})],1)]),t._v(" "),a("div",{staticClass:"card my-4"},[t._m(1),t._v(" "),a("div",{staticClass:"card-content bg-gray-900"},[a("v-chart",{attrs:{config:{title:"chartC",type:"pie",height:350,colors:["#7cd6fd","#743ee2"]}},model:{value:t.chart,callback:function(e){t.chart=e},expression:"chart"}})],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bg-gray-800"},[e("i",{staticClass:"fa fa-chart-bar"}),this._v(" ChartB\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bg-gray-800"},[e("i",{staticClass:"fa fa-chart-bar"}),this._v(" ChartC\n        ")])}],!1,null,null,null);e.default=s.exports},EHtH:function(t,e,a){"use strict";a.r(e);var i={name:"Forms",data:function(){return{form:{}}}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout relative px-6"},[a("h1",[t._v("Files")]),t._v(" "),a("div",{staticClass:"grid"},[a("div",{staticClass:"grid-item w-full md:w-1/2"},[a("v-input-file",{attrs:{label:"Image",help:"Choose an image.",placeholder:"Select",options:{accept:["image/*"]}},model:{value:t.form.file,callback:function(e){t.$set(t.form,"file",e)},expression:"form.file"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/2"},[a("v-input-file",{attrs:{label:"File (Archive)",help:"Choose an Archive.",placeholder:"Select Archive",options:{accept:["application/zip"]}},model:{value:t.form.file,callback:function(e){t.$set(t.form,"file",e)},expression:"form.file"}})],1)])])}),[],!1,null,null,null);e.default=s.exports},"IH+Y":function(t,e,a){"use strict";a.r(e);var i={name:"Badges",data:function(){return{}}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"page-title"},[t._v("Badges")]),t._v(" "),a("div",{staticClass:"card my-4 p-3"},[a("div",{staticClass:"badge badge-green"},[t._v("Green")]),t._v(" "),a("div",{staticClass:"badge badge-purple"},[t._v("Purple")]),t._v(" "),a("div",{staticClass:"badge badge-indigo"},[t._v("Indigo")]),t._v(" "),a("div",{staticClass:"badge badge-blue"},[t._v("Blue")]),t._v(" "),a("div",{staticClass:"badge badge-yellow"},[t._v("Gold")]),t._v(" "),a("div",{staticClass:"badge badge-red"},[t._v("Red")]),t._v(" "),a("div",{staticClass:"badge badge-gray"},[t._v("Gray")]),t._v(" "),a("div",{staticClass:"badge"},[t._v("Default")])])])}],!1,null,null,null);e.default=s.exports},M1s4:function(t,e,a){"use strict";a.r(e);var i={name:"Tabs",data:function(){return{loading:!0}},methods:{load:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading=e,setTimeout((function(){return t.loading=!1}),3e3)}},mounted:function(){var t=this;setTimeout((function(){return t.loading=!1}),3e3)}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout p-4"},[a("div",[a("h1",{staticClass:"page-title"},[t._v("Tabs")]),t._v(" "),a("hr"),t._v(" "),a("v-tabs",{staticClass:"mt-4",attrs:{vertical:!0,tabs:["step1","step2","step3"],value:"step1"},scopedSlots:t._u([{key:"title",fn:function(){return[a("i",{staticClass:"fa fa-sliders"}),t._v(" Settings\n            ")]},proxy:!0},{key:"step1_label",fn:function(){return[t._v("Description")]},proxy:!0},{key:"step1_content",fn:function(){return[a("p",[t._v("It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server. ")])]},proxy:!0},{key:"step2_label",fn:function(){return[t._v("Attributes")]},proxy:!0},{key:"step2_content",fn:function(){return[t._v("Attributes Content")]},proxy:!0},{key:"step3_label",fn:function(){return[t._v("Metadata")]},proxy:!0},{key:"step3_content",fn:function(){return[t._v("Metadata Content")]},proxy:!0}])}),t._v(" "),a("v-tabs",{staticClass:"mt-4",attrs:{vertical:!1,tabs:["step1","step2","step3"],value:"step2"},scopedSlots:t._u([{key:"title",fn:function(){return[a("i",{staticClass:"fa fa-sliders"}),t._v(" Control Panel\n            ")]},proxy:!0},{key:"step1_label",fn:function(){return[t._v("Content")]},proxy:!0},{key:"step1_content",fn:function(){return[t._v("Content")]},proxy:!0},{key:"step2_label",fn:function(){return[t._v("Attributes")]},proxy:!0},{key:"step2_content",fn:function(){return[a("div",{staticClass:"list-group"},[a("div",{staticClass:"list-group-item"},[t._v("\n                        Item 1\n                    ")]),t._v(" "),a("div",{staticClass:"list-group-item"},[t._v("\n                        Item 2\n                    ")])])]},proxy:!0},{key:"step3_label",fn:function(){return[t._v("Metadata")]},proxy:!0},{key:"step3_content",fn:function(){return[t._v("Metadata Content")]},proxy:!0}])})],1)])}),[],!1,null,null,null);e.default=s.exports},OlDB:function(t,e,a){"use strict";a.r(e);var i={name:"Collapse",data:function(){return{active:"toggle1",dropdown:!1}}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"page-title"},[t._v("Collapse")]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"p-3"},[a("v-collapse",{staticClass:"mb-3",attrs:{active:"toggle1"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                    Environment\n                ")]},proxy:!0},{key:"default",fn:function(){return[a("p",[t._v("It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server. ")]),t._v(" "),a("p",[t._v(" To make this a cinch, Laravel utilizes the DotEnv PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a .env.example file. If you install Laravel via Composer, this file will automatically be renamed to .env. Otherwise, you should rename the file manually. ")]),t._v(" "),a("p",[t._v(" Your .env file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed. ")]),t._v(" "),a("p",[t._v(" If you are developing with a team, you may wish to continue including a .env.example file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. You may also create a .env.testing file. This file will override the .env file when running PHPUnit tests or executing Artisan commands with the --env=testing option. ")])]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}}),t._v(" "),a("v-collapse",{attrs:{active:"toggle2"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                    Environment\n                ")]},proxy:!0},{key:"default",fn:function(){return[a("p",[t._v("It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server. ")]),t._v(" "),a("p",[t._v(" To make this a cinch, Laravel utilizes the DotEnv PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a .env.example file. If you install Laravel via Composer, this file will automatically be renamed to .env. Otherwise, you should rename the file manually. ")]),t._v(" "),a("p",[t._v(" Your .env file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed. ")]),t._v(" "),a("p",[t._v(" If you are developing with a team, you may wish to continue including a .env.example file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. You may also create a .env.testing file. This file will override the .env file when running PHPUnit tests or executing Artisan commands with the --env=testing option. ")])]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1)])])}),[],!1,null,null,null);e.default=s.exports},QICb:function(t,e,a){"use strict";a.r(e);var i={name:"Typography"},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout p-4"},[a("hgroup",[a("h1",[t._v("h1 I am most important.")]),t._v(" "),a("h2",[t._v("h2 Back in my quaint "),a("a",{attrs:{href:"#"}},[t._v("garden")])]),t._v(" "),a("h3",[t._v("h3 Jaunty "),a("a",{attrs:{href:"#"}},[t._v("zinnias")]),t._v(" vie with flaunting phlox.")]),t._v(" "),a("h4",[t._v("h4 Five or six big jet planes zoomed quickly by the new tower.")]),t._v(" "),a("h5",[t._v("h5 Expect skilled signwriters to use many jazzy, quaint old alphabets effectively.")]),t._v(" "),a("h6",[t._v("h6 Pack my box with five dozen liquor jugs.")])]),t._v(" "),a("hr"),t._v(" "),a("h1",{staticClass:"page-Title"},[t._v("Page Title")]),t._v(" "),a("p",{staticClass:"page-lead"},[t._v("Page Lead")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("It is often helpful to have different configuration values based on the environment where the application is running. For example, you may wish to use a different cache driver locally than you do on your production server. ")]),t._v(" "),a("p",[t._v(" To make this a cinch, Laravel utilizes the DotEnv PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a .env.example file. If you install Laravel via Composer, this file will automatically be renamed to .env. Otherwise, you should rename the file manually. ")]),t._v(" "),a("p",[t._v(" Your .env file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed. ")]),t._v(" "),a("p",[t._v(" If you are developing with a team, you may wish to continue including a .env.example file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. You may also create a .env.testing file. This file will override the .env file when running PHPUnit tests or executing Artisan commands with the --env=testing option. ")]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("I quickly explained that many big jobs involve few hazards")])]),t._v(" "),a("hr"),t._v(" "),a("address",[a("strong",[t._v("Apple")]),a("br"),t._v("\n        1 Infinite Loop"),a("br"),t._v("\n        Cupertino, CA 95014"),a("br"),t._v("\n        United States\n    ")]),t._v(" "),a("hr")])}],!1,null,null,null);e.default=s.exports},Xp5p:function(t,e,a){"use strict";a.r(e);var i={name:"Modals",data:function(){return{modal:!1,status:null,content:null}},mounted:function(){var t=this;setTimeout((function(){return t.modal=!0}),100)}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"btn",on:{click:function(e){t.modal=!0}}},[t._v("Open")]),t._v(" "),a("p",[t._v("Event: @"+t._s(t.status))]),t._v(" "),a("v-modal",{attrs:{fullscreen:"fullscreen"===t.modal},on:{opened:function(e){t.status="opened"},closed:function(e){t.status="closed"}},scopedSlots:t._u([{key:"title",fn:function(){return[a("div",[t._v(t._s("fullscreen"===t.modal?"Fullscreen":"Responsive")+" Modal")])]},proxy:!0},{key:"content",fn:function(){return[a("transition",{attrs:{name:"fadeInLeft",mode:"out-in"}},["more"===t.content?a("span",[a("h1",[t._v("h1 I am most important.")]),t._v(" "),a("h2",[t._v("h2 Back in my quaint "),a("a",{attrs:{href:"#"}},[t._v("garden")])]),t._v(" "),a("h3",[t._v("h3 Jaunty "),a("a",{attrs:{href:"#"}},[t._v("zinnias")]),t._v(" vie with flaunting phlox.")]),t._v(" "),a("h4",[t._v("h4 Five or six big jet planes zoomed quickly by the new tower.")]),t._v(" "),a("h5",[t._v("h5 Expect skilled signwriters to use many jazzy, quaint old alphabets effectively.")]),t._v(" "),a("h6",[t._v("h6 Pack my box with five dozen liquor jugs.")]),t._v(" "),a("p",[t._v("To make this a cinch, Laravel utilizes the DotEnv PHP library by Vance Lucas. In a fresh Laravel installation, the root directory of your application will contain a .env.example file. If you install Laravel via Composer, this file will automatically be renamed to .env. Otherwise, you should rename the file manually. ")]),t._v(" "),a("p",[t._v("Your .env file should not be committed to your application's source control, since each developer / server using your application could require a different environment configuration. Furthermore, this would be a security risk in the event an intruder gains access to your source control repository, since any sensitive credentials would get exposed. ")]),t._v(" "),a("p",[t._v("If you are developing with a team, you may wish to continue including a .env.example file with your application. By putting placeholder values in the example configuration file, other developers on your team can clearly see which environment variables are needed to run your application. You may also create a .env.testing file. This file will override the .env file when running PHPUnit tests or executing Artisan commands with the --env=testing option. ")])]):a("div",[a("h2",[t._v("Environment")]),t._v(" "),a("p",[t._v("It is often helpful to have different configuration. ")])])])]},proxy:!0},{key:"actions",fn:function(){return[a("v-action",{staticClass:"btn-green mr-1",attrs:{focus:!0},on:{click:function(e){t.modal=null}}},[a("i",{staticClass:"fa fa-check-circle"}),t._v(" Done\n            ")]),t._v(" "),a("button",{staticClass:"btn btn-xs ml-auto",on:{click:function(e){t.modal=!0}}},[a("i",{staticClass:"fa fa-window-restore"}),t._v(" Responsive")]),t._v(" "),a("button",{staticClass:"btn btn-xs mx-1",on:{click:function(e){t.modal="fullscreen"}}},[a("i",{staticClass:"fa fa-window-maximize"}),t._v(" Fullscreen")]),t._v(" "),a("button",{staticClass:"btn btn-xs ml-auto",on:{click:function(e){t.content="more"}}},[a("i",{staticClass:"fa fa-plus"}),t._v(" More")]),t._v(" "),a("button",{staticClass:"btn btn-xs ml-1",on:{click:function(e){t.content="less"}}},[a("i",{staticClass:"fa fa-minus"}),t._v(" Less")])]},proxy:!0}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}})],1)}),[],!1,null,null,null);e.default=s.exports},"e+HU":function(t,e,a){"use strict";a.r(e);var i={name:"Tabs",data:function(){return{}}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"page-title"},[t._v("Actions")]),t._v(" "),a("v-action",{staticClass:"btn-green"},[a("i",{staticClass:"fa fa-check-circle"}),t._v("\n        Green\n    ")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"my-4"},[a("v-action",{staticClass:"btn-green"},[t._v("Green")]),t._v(" "),a("v-action",{staticClass:"btn-purple"},[t._v("Purple")]),t._v(" "),a("v-action",{staticClass:"btn-indigo"},[t._v("Indigo")]),t._v(" "),a("v-action",{staticClass:"btn-blue"},[t._v("Blue")]),t._v(" "),a("v-action",{staticClass:"btn-yellow"},[t._v("Gold")]),t._v(" "),a("v-action",{staticClass:"btn-red"},[t._v("Red")]),t._v(" "),a("v-action",{staticClass:"btn-gray"},[t._v("Gray")]),t._v(" "),a("v-action",[t._v("Default")]),t._v(" "),a("hr"),t._v(" "),a("h3",{staticClass:"mb-1"},[t._v("Disabled")]),t._v(" "),a("v-action",{staticClass:"btn-green",attrs:{disabled:!0}},[t._v("Green")]),t._v(" "),a("v-action",{staticClass:"btn-purple",attrs:{disabled:!0}},[t._v("Purple")]),t._v(" "),a("v-action",{staticClass:"btn-indigo",attrs:{disabled:!0}},[t._v("Indigo")]),t._v(" "),a("v-action",{staticClass:"btn-blue",attrs:{disabled:!0}},[t._v("Blue")]),t._v(" "),a("v-action",{staticClass:"btn-yellow",attrs:{disabled:!0}},[t._v("Gold")]),t._v(" "),a("v-action",{staticClass:"btn-red",attrs:{disabled:!0}},[t._v("Red")]),t._v(" "),a("v-action",{staticClass:"btn-gray",attrs:{disabled:!0}},[t._v("Gray")]),t._v(" "),a("v-action",{attrs:{disabled:!0}},[t._v("Default")]),t._v(" "),a("hr"),t._v(" "),a("h3",{staticClass:"mb-1"},[t._v("Active")]),t._v(" "),a("v-action",{staticClass:"btn-green active"},[t._v("Green")]),t._v(" "),a("v-action",{staticClass:"btn-purple active"},[t._v("Purple")]),t._v(" "),a("v-action",{staticClass:"btn-indigo active"},[t._v("Indigo")]),t._v(" "),a("v-action",{staticClass:"btn-blue active"},[t._v("Blue")]),t._v(" "),a("v-action",{staticClass:"btn-yellow active"},[t._v("Gold")]),t._v(" "),a("v-action",{staticClass:"btn-red active"},[t._v("Red")]),t._v(" "),a("v-action",{staticClass:"btn-gray active"},[t._v("Gray")]),t._v(" "),a("v-action",{staticClass:"active"},[t._v("Default")]),t._v(" "),a("hr"),t._v(" "),a("h3",{staticClass:"mb-1"},[t._v("Loading")]),t._v(" "),a("v-action",{staticClass:"btn-green",attrs:{loading:!0}},[t._v("Green")]),t._v(" "),a("v-action",{staticClass:"btn-purple",attrs:{loading:!0}},[t._v("Purple")]),t._v(" "),a("v-action",{staticClass:"btn-indigo",attrs:{loading:!0}},[t._v("Indigo")]),t._v(" "),a("v-action",{staticClass:"btn-blue",attrs:{loading:!0}},[t._v("Blue")]),t._v(" "),a("v-action",{staticClass:"btn-yellow",attrs:{loading:!0}},[t._v("Gold")]),t._v(" "),a("v-action",{staticClass:"btn-red",attrs:{loading:!0}},[t._v("Red")]),t._v(" "),a("v-action",{staticClass:"btn-gray",attrs:{loading:!0}},[t._v("Gray")]),t._v(" "),a("v-action",{attrs:{loading:!0}},[t._v("Default")]),t._v(" "),a("hr"),t._v(" "),a("h3",{staticClass:"mb-1"},[t._v("Sizes")]),t._v(" "),a("v-action",{staticClass:"btn-red btn-xs"},[t._v("XS")]),t._v(" "),a("v-action",{staticClass:"btn-red btn-sm"},[t._v("SM")]),t._v(" "),a("v-action",{staticClass:"btn-red"},[t._v("Normal")]),t._v(" "),a("v-action",{staticClass:"btn-red btn-lg"},[t._v("LG")]),t._v(" "),a("v-action",{staticClass:"btn-red btn-xl"},[t._v("XL")]),t._v(" "),a("h3",{staticClass:"mb-1"},[t._v("Block")]),t._v(" "),a("v-action",{staticClass:"btn-block btn-green btn-xs mb-2"},[t._v("XS")]),t._v(" "),a("v-action",{staticClass:"btn-block btn-purple btn-sm mb-2"},[t._v("SM")]),t._v(" "),a("v-action",{staticClass:"btn-block btn-indigo mb-2"},[t._v("Normal")]),t._v(" "),a("v-action",{staticClass:"btn-block btn-blue btn-lg mb-2"},[t._v("LG")]),t._v(" "),a("v-action",{staticClass:"btn-block btn-yellow btn-xl mb-2"},[t._v("XL")])],1)],1)}),[],!1,null,null,null);e.default=s.exports},i6ED:function(t,e,a){"use strict";a.r(e);var i={name:"Forms",data:function(){return{form:{switch:!1,number:"8",email:"you@somewhere.com",text:"John Laravel",invalid:"This is invalid.",textarea:"asdadsa",select_many:[1,2],select:2}}}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Forms")]),t._v(" "),a("hr"),t._v(" "),a("h4",{staticClass:"my-2"},[t._v("Messages")]),t._v(" "),a("div",{staticClass:"grid"},[a("div",{staticClass:"grid-item w-full md:w-1/2"},[a("v-form-message",{attrs:{value:"Default..."}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/2"},[a("v-form-message",{attrs:{value:"Warning...",type:"warn"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/2"},[a("v-form-message",{attrs:{value:"Info...",type:"info"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/2"},[a("v-form-message",{attrs:{value:"Error...",type:"error"}})],1)]),t._v(" "),a("form",[a("h4",{staticClass:"my-2"},[t._v("States")]),t._v(" "),a("div",{staticClass:"grid"},[a("div",{staticClass:"grid-item w-full md:w-1/2"},[a("v-input",{attrs:{icon:"fa-warning",label:"Invalid",help:"I am invalid.",value:"This is text.",invalid:!0},model:{value:t.form.invalid,callback:function(e){t.$set(t.form,"invalid",e)},expression:"form.invalid"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/2"},[a("v-input",{attrs:{icon:"fa-edit",type:"text",label:"Disabled",help:"I am disabled.",value:"This is text.",disabled:!0}})],1)]),t._v(" "),a("hr"),t._v(" "),a("h4",{staticClass:"my-2"},[t._v("Types")]),t._v(" "),a("div",{staticClass:"grid items-start"},[a("div",{staticClass:"grid-item w-full md:w-1/4"},[a("v-input",{attrs:{icon:"fa-search",label:"Search",type:"search",help:"Search for something.",value:"This is text."},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/4"},[a("v-input",{attrs:{icon:"fa-edit",type:"text",label:"Text",help:"Enter some text."},model:{value:t.form.text,callback:function(e){t.$set(t.form,"text",e)},expression:"form.text"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/4"},[a("v-input",{attrs:{icon:"fa-send",type:"email",label:"Email",help:"Enter your email.",required:!0},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/4"},[a("v-input-number",{attrs:{icon:"fa-calculator",label:"Number",help:"Enter the amount.",options:{min:0,max:10,step:2}},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/4 py-4"},[a("v-input-switch",{attrs:{label:"Switch",help:"Toggle state."},model:{value:t.form.switch,callback:function(e){t.$set(t.form,"switch",e)},expression:"form.switch"}},[t._v("This is a switch.")])],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/4 py-4"},[a("v-input-switch",{attrs:{disabled:!0,label:"Switch Disabled",help:"Toggle state."},model:{value:t.form.switch,callback:function(e){t.$set(t.form,"switch",e)},expression:"form.switch"}},[t._v("This is a switch.")])],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/3"},[a("v-input-select",{attrs:{label:"Select",icon:"fa-edit",help:"Select state.",options:[{value:null,label:"All"},{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3"}]},model:{value:t.form.select,callback:function(e){t.$set(t.form,"select",e)},expression:"form.select"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/3"},[a("v-input-select",{attrs:{icon:"fa-edit",label:"Select Many",help:"Select state.",multiple:!0,options:[{value:null,label:"All"},{value:1,label:"Option1"},{value:2,label:"Option2"},{value:3,label:"Option3"}]},model:{value:t.form.select_many,callback:function(e){t.$set(t.form,"select_many",e)},expression:"form.select_many"}})],1),t._v(" "),a("div",{staticClass:"grid-item w-full md:w-1/3"})]),t._v(" "),a("v-input-textarea",{attrs:{label:"Textarea",help:"Enter multiple lines.",value:"This is text."},model:{value:t.form.textarea,callback:function(e){t.$set(t.form,"textarea",e)},expression:"form.textarea"}})],1)])}),[],!1,null,null,null);e.default=s.exports},lLkz:function(t,e,a){"use strict";a.r(e);var i={name:"Cards",data:function(){return{loading:!0}},methods:{load:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.loading=e,setTimeout((function(){return t.loading=!1}),1e3)}},mounted:function(){this.load()}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("h1",{staticClass:"page-title"},[t._v("Cards")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"card-content"},[a("v-async",{attrs:{message:"Async Loading..."},scopedSlots:t._u([{key:"default",fn:function(){return[a("h1",{staticClass:"page-Title"},[t._v("Page Title")]),t._v(" "),a("p",{staticClass:"page-lead"},[t._v("Page Lead")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("\n                            It is often helpful to have different configuration values based on the\n                            environment where the application is running. For example, you may wish\n                            to use a different cache driver locally than you do on your production server.\n                        ")])]},proxy:!0}]),model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1),t._v(" "),a("div",{staticClass:"card-actions"},[a("v-action",{staticClass:"btn btn-xs ml-auto btn-blue",attrs:{disabled:t.loading},on:{click:function(e){return t.load(!0)}}},[a("i",{staticClass:"fa fa-clock"}),t._v(" Load\n                ")])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header bg-gray-800"},[e("div",[e("i",{staticClass:"fa fa-header"}),this._v(" Header")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mt-4"},[a("div",{staticClass:"card-header bg-gray-800"},[a("div",[a("i",{staticClass:"fa fa-header"}),t._v(" ListGroup Card")])]),t._v(" "),a("div",{staticClass:"list-group rounded-none"},[a("div",{staticClass:"list-group-item"},[t._v("\n                    Item 1\n                ")]),t._v(" "),a("div",{staticClass:"list-group-item"},[t._v("\n                    Item 2\n                ")]),t._v(" "),a("div",{staticClass:"list-group-item"},[t._v("\n                    Item 3\n                ")]),t._v(" "),a("div",{staticClass:"list-group-item"},[t._v("\n                    Item 4\n                ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid"},[e("div",{staticClass:"grid-item w-full sm:w-1/2"},[e("div",{staticClass:"list-group mt-4"},[e("div",{staticClass:"list-group-item"},[this._v("\n                        Item 1\n                    ")]),this._v(" "),e("div",{staticClass:"list-group-item"},[this._v("\n                        Item 2\n                    ")])])]),this._v(" "),e("div",{staticClass:"grid-item w-full sm:w-1/2"},[e("div",{staticClass:"list-group mt-4"},[e("div",{staticClass:"list-group-item"},[this._v("\n                        Item 1\n                    ")]),this._v(" "),e("div",{staticClass:"list-group-item"},[this._v("\n                        Item 2\n                    ")])])])])}],!1,null,null,null);e.default=s.exports}}]);