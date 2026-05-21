sap.ui.define([
    "sap/ui/core/UIComponent",
    "demo/mock/mocky/localService/mockserver"
], function (UIComponent, mockserver) {

    "use strict";

    return UIComponent.extend("demo.mock.mocky.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {

            // Start Mock Server
            mockserver.init();

            UIComponent.prototype.init.apply(this, arguments);
        }
    });
});