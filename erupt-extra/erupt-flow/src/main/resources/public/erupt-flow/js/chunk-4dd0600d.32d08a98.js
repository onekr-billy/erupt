(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4dd0600d"],{"00ee":function(e,t,s){var i=s("b622"),r=i("toStringTag"),a={};a[r]="z",e.exports="[object z]"===String(a)},"0cb2":function(e,t,s){var i=s("e330"),r=s("7b0b"),a=Math.floor,n=i("".charAt),l=i("".replace),c=i("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,s,i,h,p){var u=s+e.length,f=i.length,g=d;return void 0!==h&&(h=r(h),g=o),l(p,g,(function(r,l){var o;switch(n(l,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,s);case"'":return c(t,u);case"<":o=h[c(l,1,-1)];break;default:var d=+l;if(0===d)return r;if(d>f){var p=a(d/10);return 0===p?r:p<=f?void 0===i[p-1]?n(l,1):i[p-1]+n(l,1):r}o=i[d-1]}return void 0===o?"":o}))}},"14d9":function(e,t,s){"use strict";var i=s("23e7"),r=s("7b0b"),a=s("07fa"),n=s("3a34"),l=s("3511"),c=s("d039"),o=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),d=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=o||!d();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=r(this),s=a(t),i=arguments.length;l(s+i);for(var c=0;c<i;c++)t[s]=arguments[c],s++;return n(t,s),s}})},3511:function(e,t){var s=TypeError,i=9007199254740991;e.exports=function(e){if(e>i)throw s("Maximum allowed index exceeded");return e}},"3a34":function(e,t,s){"use strict";var i=s("83ab"),r=s("e8b5"),a=TypeError,n=Object.getOwnPropertyDescriptor,l=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=l?function(e,t){if(r(e)&&!n(e,"length").writable)throw a("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},"44e7":function(e,t,s){var i=s("861d"),r=s("c6b6"),a=s("b622"),n=a("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==r(e))}},"46a4":function(e,t,s){},"577e":function(e,t,s){var i=s("f5df"),r=String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return r(e)}},"5b81":function(e,t,s){"use strict";var i=s("23e7"),r=s("c65b"),a=s("e330"),n=s("1d80"),l=s("1626"),c=s("7234"),o=s("44e7"),d=s("577e"),h=s("dc4a"),p=s("90d8"),u=s("0cb2"),f=s("b622"),g=s("c430"),v=f("replace"),m=TypeError,b=a("".indexOf),y=a("".replace),k=a("".slice),w=Math.max,x=function(e,t,s){return s>e.length?-1:""===t?s:b(e,t,s)};i({target:"String",proto:!0},{replaceAll:function(e,t){var s,i,a,f,_,S,C,A,D,O=n(this),I=0,N=0,E="";if(!c(e)){if(s=o(e),s&&(i=d(n(p(e))),!~b(i,"g")))throw m("`.replaceAll` does not allow non-global regexes");if(a=h(e,v),a)return r(a,e,O,t);if(g&&s)return y(d(O),e,t)}f=d(O),_=d(e),S=l(t),S||(t=d(t)),C=_.length,A=w(1,C),I=x(f,_,0);while(-1!==I)D=S?d(t(_,I,f)):u(_,f,I,[],void 0,t),E+=k(f,N,I)+D,N=I+C,I=x(f,_,I+A);return N<f.length&&(E+=k(f,N)),E}})},"6ea6":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"max-width":"350px"}},["DESIGN"===e.mode?t("div",[t("el-button",{attrs:{disabled:"",icon:"iconfont icon-map-site",type:"primary",size:"mini",round:""}},[e._v(" 选择角色")]),t("span",{staticClass:"placeholder"},[e._v(" "+e._s(e.placeholder))])],1):t("div",[!e.formDisable||e._value.length<=0?t("div",[t("el-button",{attrs:{disabled:e.formDisable,icon:"iconfont icon-map-site",type:"primary",size:"mini",round:""},on:{click:function(t){return e.$refs.orgPicker.show()}}},[e._v(" 选择角色")]),t("org-picker",{ref:"orgPicker",attrs:{type:"role",multiple:e.multiple,selected:e._value},on:{ok:e.selected}}),t("span",{staticClass:"placeholder"},[e._v(" "+e._s(e.placeholder))])],1):e._e(),t("div",{staticStyle:{"margin-top":"5px"}},e._l(e._value,(function(s,i){return t("el-tag",{staticStyle:{margin:"5px"},attrs:{closable:!e.formDisable},on:{close:function(t){return e.delDept(i)}}},[e._v(e._s(s.name))])})),1)])])},r=[],a=s("8f73"),n=s("709c"),l={mixins:[a["a"]],name:"RolePicker",components:{OrgPicker:n["a"]},props:{value:{type:Array,default:()=>[]},placeholder:{type:String,default:"请选择角色"},multiple:{type:Boolean,default:!1}},data(){return{showOrgSelect:!1}},methods:{selected(e){this.showOrgSelect=!1,this._value=e},delDept(e){this._value.splice(e,1)}}},c=l,o=(s("72b3"),s("2877")),d=Object(o["a"])(c,i,r,!1,null,"59dae895",null);t["default"]=d.exports},"709c":function(e,t,s){"use strict";var i=function(){var e=this,t=e._self._c;return t("w-dialog",{attrs:{border:!1,closeFree:"",width:"600px",title:e._title},on:{ok:e.selectOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("div",{staticClass:"picker"},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"candidate"},["role"!==e.type?t("div",[t("el-input",{staticStyle:{width:"95%"},attrs:{size:"small",clearable:"",placeholder:"搜索","prefix-icon":"el-icon-search"},on:{input:e.searchUser},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showUsers,expression:"!showUsers"}]},[t("ellipsis",{staticStyle:{height:"18px",color:"#8c8c8c",padding:"5px 0 0"},attrs:{hoverTip:"",row:1,content:e.deptStackStr}},[t("i",{staticClass:"el-icon-office-building",attrs:{slot:"pre"},slot:"pre"})]),t("div",{staticStyle:{"margin-top":"5px"}},[e.multiple?t("el-checkbox",{on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]):e._e(),t("span",{directives:[{name:"show",rawName:"v-show",value:e.deptStack.length>0,expression:"deptStack.length > 0"}],staticClass:"top-dept",on:{click:e.beforeNode}},[e._v("上一级")])],1)],1)],1):t("div",{staticClass:"role-header"},[t("div",[e._v("系统角色")])]),t("div",{staticClass:"org-items",style:"role"===e.type?"height: 350px":""},[t("el-empty",{directives:[{name:"show",rawName:"v-show",value:!e.nodes||0===e.nodes.length,expression:"!nodes || nodes.length === 0"}],attrs:{"image-size":100,description:"似乎没有数据"}}),e._l(e.nodes,(function(s,i){return t("div",{key:i,class:e.orgItemClass(s)},[s.type===e.type?t("el-checkbox",{on:{change:function(t){return e.selectChange(s)}},model:{value:s.selected,callback:function(t){e.$set(s,"selected",t)},expression:"org.selected"}}):e._e(),"dept"===s.type?t("div",{on:{click:function(t){return e.triggerCheckbox(s)}}},[t("i",{staticClass:"el-icon-folder-opened"}),t("span",{staticClass:"name",attrs:{title:s.name}},[e._v(e._s(s.name.substring(0,12)))]),t("span",{class:"next-dept"+(s.selected?"-disable":""),on:{click:function(t){t.stopPropagation(),!s.selected&&e.nextNode(s)}}},[t("i",{staticClass:"iconfont icon-map-site"}),e._v(" 下级 ")])]):"user"===s.type?t("div",{staticStyle:{display:"flex","align-items":"center"},on:{click:function(t){return e.triggerCheckbox(s)}}},[e.$isNotEmpty(s.avatar)?t("el-avatar",{attrs:{size:35,src:s.avatar}}):t("span",{staticClass:"avatar"},[e._v(e._s(e.getShortName(s.name)))]),t("span",{staticClass:"name",attrs:{title:s.name}},[e._v(e._s(s.name.substring(0,12)))])],1):t("div",{staticStyle:{display:"inline-block"},on:{click:function(t){return e.triggerCheckbox(s)}}},[t("i",{staticClass:"iconfont icon-bumen"}),t("span",{staticClass:"name",attrs:{title:s.name}},[e._v(e._s(s.name.substring(0,12)))])])],1)}))],2)]),t("div",{staticClass:"selected"},[t("div",{staticClass:"count"},[t("span",[e._v("已选 "+e._s(e.select.length)+" 项")]),t("span",{on:{click:e.clearSelected}},[e._v("清空")])]),t("div",{staticClass:"org-items",staticStyle:{height:"350px"}},[t("el-empty",{directives:[{name:"show",rawName:"v-show",value:0===e.select.length,expression:"select.length === 0"}],attrs:{"image-size":100,description:"请点击左侧列表选择数据"}}),e._l(e.select,(function(s,i){return t("div",{key:i,class:e.orgItemClass(s)},["dept"===s.type?t("div",[t("i",{staticClass:"el-icon-folder-opened"}),t("span",{staticClass:"name",staticStyle:{position:"static"}},[e._v(e._s(s.name))])]):"user"===s.type?t("div",{staticStyle:{display:"flex","align-items":"center"}},[e.$isNotEmpty(s.avatar)?t("el-avatar",{attrs:{size:35,src:s.avatar}}):t("span",{staticClass:"avatar"},[e._v(e._s(e.getShortName(s.name)))]),t("span",{staticClass:"name"},[e._v(e._s(s.name))])],1):t("div",[t("i",{staticClass:"iconfont icon-bumen"}),t("span",{staticClass:"name"},[e._v(e._s(s.name))])]),t("i",{staticClass:"el-icon-close",on:{click:function(t){return e.noSelected(i)}}})])}))],2)])])])},r=[],a=(s("5b81"),s("14d9"),s("0c6d"));function n(e){return Object(a["a"])({url:"/oa/org/tree",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/oa/org/tree/user",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/oa/role",method:"get",params:e})}var o={name:"OrgPicker",components:{},props:{title:{default:"请选择",type:String},type:{type:String,required:!0},multiple:{default:!1,type:Boolean},selected:{default:()=>[],type:Array}},data(){return{visible:!1,loading:!1,checkAll:!1,nowDeptId:null,isIndeterminate:!1,searchUsers:[],nodes:[],select:[],search:"",deptStack:[]}},computed:{_title(){return"user"===this.type?"请选择用户"+(this.multiple?"[多选]":"[单选]"):"dept"===this.type?"请选择部门"+(this.multiple?"[多选]":"[单选]"):"role"===this.type?"请选择角色"+(this.multiple?"[多选]":"[单选]"):"-"},deptStackStr(){return String(this.deptStack.map(e=>e.name)).replaceAll(","," > ")},showUsers(){return this.search||""!==this.search.trim()}},methods:{show(){this.visible=!0,this.init(),this.getDataList()},orgItemClass(e){return{"org-item":!0,"org-dept-item":"dept"===e.type,"org-user-item":"user"===e.type,"org-role-item":"role"===e.type}},getDataList(){if(this.loading=!0,"user"===this.type)return l({deptId:this.nowDeptId,keywords:this.search}).then(e=>{this.loading=!1,this.nodes=e.data,this.selectToLeft()}),"请选择用户";"dept"===this.type?n({deptId:this.nowDeptId,keywords:this.search}).then(e=>{this.loading=!1,this.nodes=e.data,this.selectToLeft()}):"role"===this.type&&c({deptId:this.nowDeptId,keywords:this.search}).then(e=>{this.loading=!1,this.nodes=e.data,this.selectToLeft()})},getShortName(e){return e?e.length>2?e.substring(1,3):e:"**"},searchUser(){},selectToLeft(){let e=""===this.search.trim()?this.nodes:this.searchUsers;e.forEach(e=>{for(let t=0;t<this.select.length;t++){if(this.select[t].id===e.id){e.selected=!0;break}e.selected=!1}})},triggerCheckbox(e){e.type==this.type&&(e.selected=!e.selected,this.selectChange(e))},selectChange(e){if(e.selected)this.multiple||(this.nodes.forEach(e=>{e.selected=!1}),this.select=[]),e.selected=!0,this.select.push(e);else{this.checkAll=!1;for(let t=0;t<this.select.length;t++)if(this.select[t].id===e.id){this.select.splice(t,1);break}}},noSelected(e){let t=this.nodes;for(let s=0;s<2;s++){for(let s=0;s<t.length;s++)if(t[s].id===this.select[e].id){t[s].selected=!1,this.checkAll=!1;break}t=this.searchUsers}this.select.splice(e,1)},handleCheckAllChange(){this.nodes.forEach(e=>{if(this.checkAll)e.selected||e.type!=this.type||(e.selected=!0,this.select.push(e));else{e.selected=!1;for(let t=0;t<this.select.length;t++)if(this.select[t].id===e.id){this.select.splice(t,1);break}}})},nextNode(e){this.nowDeptId=e.id,this.deptStack.push(e),this.getDataList()},beforeNode(){0!==this.deptStack.length&&(this.deptStack.length<2?this.nowDeptId=null:this.nowDeptId=this.deptStack[this.deptStack.length-2].id,this.deptStack.splice(this.deptStack.length-1,1),this.getDataList())},recover(){this.select=[],this.nodes.forEach(e=>e.selected=!1)},selectOk(){this.$emit("ok",Object.assign([],this.select.map(e=>(e.avatar=void 0,e)))),this.visible=!1,this.recover()},clearSelected(){this.$confirm("您确定要清空已选中的项?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.recover()})},close(){this.$emit("close"),this.recover()},init(){this.checkAll=!1,this.nowDeptId=null,this.deptStack=[],this.nodes=[],this.select=Object.assign([],this.selected),this.selectToLeft()}}},d=o,h=(s("96dd"),s("2877")),p=Object(h["a"])(d,i,r,!1,null,"100ea722",null);t["a"]=p.exports},"72b3":function(e,t,s){"use strict";s("46a4")},"8f73":function(e,t,s){"use strict";t["a"]={props:{mode:{type:String,default:"DESIGN"},formDisable:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},data(){return{}},watch:{_value(e,t){this.$emit("change",e)}},computed:{_value:{get(){return this.value},set(e){this.$emit("input",e)}}},methods:{_opValue(e){return"object"===typeof e?e.value:e},_opLabel(e){return"object"===typeof e?e.label:e}}}},"90d8":function(e,t,s){var i=s("c65b"),r=s("1a2d"),a=s("3a9b"),n=s("ad6d"),l=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in l||r(e,"flags")||!a(l,e)?t:i(n,e)}},"96dd":function(e,t,s){"use strict";s("d66a")},ad6d:function(e,t,s){"use strict";var i=s("825a");e.exports=function(){var e=i(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},d66a:function(e,t,s){},e8b5:function(e,t,s){var i=s("c6b6");e.exports=Array.isArray||function(e){return"Array"==i(e)}},f5df:function(e,t,s){var i=s("00ee"),r=s("1626"),a=s("c6b6"),n=s("b622"),l=n("toStringTag"),c=Object,o="Arguments"==a(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(s){}};e.exports=i?a:function(e){var t,s,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(s=d(t=c(e),l))?s:o?a(t):"Object"==(i=a(t))&&r(t.callee)?"Arguments":i}}}]);
//# sourceMappingURL=chunk-4dd0600d.32d08a98.js.map