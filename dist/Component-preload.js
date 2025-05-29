//@ui5-bundle loginappusingsso/Component-preload.js
sap.ui.require.preload({
	"loginappusingsso/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","loginappusingsso/model/models"],function(e,i,t){"use strict";return e.extend("loginappusingsso.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"loginappusingsso/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("loginappusingsso.controller.App",{onInit(){}})});
},
	"loginappusingsso/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("loginappusingsso.controller.View1",{onInit(){var e=1+3;console.log(e);var o=sap.ui.getCore().getModel("account");this.getView().setModel(o,"account")}})});
},
	"loginappusingsso/i18n/i18n.properties":'# This is the resource bundle for loginappusingsso\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"loginappusingsso/i18n/i18n_en.properties":'# This is the resource bundle for loginappusingsso\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"loginappusingsso/i18n/i18n_en_US.properties":'# This is the resource bundle for loginappusingsso\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"loginappusingsso/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"loginappusingsso","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.17.5","toolsId":"64b75470-7df3-4f37-a223-82447e30effb"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.136.1","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"loginappusingsso.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"loginappusingsso.view","async":true,"viewPath":"loginappusingsso.view"},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"id":"View1","name":"View1"}}},"rootView":{"viewName":"loginappusingsso.view.App","type":"XML","id":"App","async":true}},"sap.cloud":{"public":true,"service":"loginappusingsso"}}',
	"loginappusingsso/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"loginappusingsso/view/App.view.xml":'<mvc:View controllerName="loginappusingsso.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app"></App></mvc:View>',
	"loginappusingsso/view/View1.view.xml":'<mvc:View\n    controllerName="loginappusingsso.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"\n><Page\n        id="page"\n        title="{i18n>title}"\n    ><content><VBox><Text text="Hello, welcome to your first SAP UI5 app!" /><Button\n                    text="Click Me"\n                    press="onPressButton"\n                    type="Emphasized"\n                /><Text text="User Info:" /><Text text="Name: {account>/name}" /><Text text="Email: {account>/username}" /></VBox></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
