/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/login/login/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
