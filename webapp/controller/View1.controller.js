sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("loginappusingsso.controller.View1", {
        onInit() {
            var oAccountModel = sap.ui.getCore().getModel("account");
            this.getView().setModel(oAccountModel,"account")


        }
    });
});