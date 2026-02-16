sap.ui.define([
    "com/nexus/asset/controller/BaseController"
], (BaseController) => {
    "use strict";

    return BaseController.extend("com.nexus.asset.controller.Detail", {
        onInit() {
            var oRouter = this.getRouter();
            if (oRouter) {
                oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
            }
        },
        onRouteMatched: function () {
            this.setBusyOff();
        }
    });
});