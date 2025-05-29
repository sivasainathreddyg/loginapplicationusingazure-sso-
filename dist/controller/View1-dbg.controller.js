sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("loginappusingsso.controller.View1", {
        onInit() {
            var b=1+3;
            console.log(b);
            var oAccountModel = sap.ui.getCore().getModel("account");
            this.getView().setModel(oAccountModel,"account")


        }
    });
});