var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IKUT;
(function (IKUT) {
    var Controller = (function () {
        function Controller(args) {
            this.bDebug = true;
            this.bCharacterHasHairPin = false;
            this.bTicking = false;
            if (Controller._instance) {
                throw new Error("Error: Instantiation failed: Use Controller.getInstance() instead of new.");
            }
            Controller._instance = this;
        }
        Controller.getInstance = function () {
            return Controller._instance;
        };
        Controller.startTick = function () {
            var self = Controller.getInstance();
            if (!self.bTicking) {
                self.bTicking = true;
                if (IKUT.View.getViewType() != 6 /* POPUP */) {
                    console.log("CHECKING ALARM...");
                    // get alarms
                    var alarms = Controller.getUpcoming7DaysAlarms();
                    alarms.add(Controller.getGroupAlarms().models);
                    IKUT.Model.actualAlarms = alarms;
                    var active = IKUT.Model.actualAlarms.getActiveAlarm();
                    if (active) {
                        Router.navigate('popup/' + active.getcId(), { trigger: true, replace: true });
                    }
                }
                self.tickInterval = setInterval(function () {
                    if (IKUT.View.getViewType() != 6 /* POPUP */) {
                        console.log("CHECKING ALARM...");
                        // get alarms
                        var alarms = Controller.getUpcoming7DaysAlarms();
                        alarms.add(Controller.getGroupAlarms().models);
                        IKUT.Model.actualAlarms = alarms;
                        console.log(IKUT.Model.actualAlarms);
                        var active = IKUT.Model.actualAlarms.getActiveAlarm();
                        if (active) {
                            Router.navigate('popup/' + active.getcId(), { trigger: true, replace: true });
                        }
                    }
                }, 15000);
            }
        };
        Controller.setIsCharacterHasHairPin = function (has) {
            this._instance.bCharacterHasHairPin = has;
        };
        Controller.getIsCharacterHasHairPin = function () {
            return this._instance.bCharacterHasHairPin;
        };
        Controller.loadHomePage = function () {
            var self = Controller.getInstance();
            Controller.startTick();
            if (self.bDebug)
                console.log(Controller.TAG + "load home page.");
            IKUT.View.setViewType(1 /* HOME */);
            IKUT.View.render();
        };
        Controller.loadAlarmsPage = function () {
            var self = Controller.getInstance();
            if (self.bDebug)
                console.log(Controller.TAG + "load alarms page.");
            Controller.startTick();
            IKUT.View.setViewType(2 /* ALARMS */);
            IKUT.View.render();
        };
        Controller.loadFriendsPage = function () {
            var self = Controller.getInstance();
            if (self.bDebug)
                console.log(Controller.TAG + "load friends page.");
            Controller.startTick();
            IKUT.View.setViewType(3 /* FRIENDS */);
            IKUT.View.render();
        };
        Controller.loadPushesPage = function () {
            var self = Controller.getInstance();
            if (self.bDebug)
                console.log(Controller.TAG + "load pushes page.");
            Controller.startTick();
            IKUT.View.setViewType(4 /* PUSHES */);
            IKUT.View.render();
        };
        Controller.loadStarPage = function () {
            var self = Controller.getInstance();
            if (self.bDebug)
                console.log(Controller.TAG + "load star page.");
            Controller.startTick();
            IKUT.View.setViewType(5 /* STAR */);
            IKUT.View.render();
        };
        Controller.loadPopupPage = function (cid) {
            var self = Controller.getInstance();
            self.alarmCid = cid;
            console.log("self.alarmCid: " + self.alarmCid);
            if (self.bDebug)
                console.log(Controller.TAG + "load popup page.");
            Controller.startTick();
            IKUT.View.setViewType(6 /* POPUP */);
            IKUT.View.render();
        };
        Controller.getCurrentAlarm = function () {
            var self = Controller.getInstance();
            // get alarms
            var alarm = IKUT.Model.actualAlarms.getFromActualcId(self.alarmCid);
            return alarm;
        };
        Controller.getUpcoming7DaysAlarms = function () {
            return IKUT.Model.getAlarms().getUpcoming7DaysAlarmsForUser(IKUT.Model.getCurUser());
        };
        Controller.getDailyAlarms = function () {
            return IKUT.Model.getAlarms().getDailyAlarmsForUser(IKUT.Model.getCurUser());
        };
        Controller.getGroupAlarms = function () {
            return IKUT.Model.getAlarms().getGroupAlarmsForUser(IKUT.Model.getCurUser());
        };
        Controller._instance = new Controller();
        Controller.TAG = "Controller - ";
        return Controller;
    })();
    IKUT.Controller = Controller;
    var Router = (function (_super) {
        __extends(Router, _super);
        function Router(options) {
            if (Router._instance) {
                throw new Error("Error: Instantiation failed: Use Router.getInstance() instead of new.");
            }
            Router._instance = this;
            // Setup Router parameters
            this.routes = {
                "": "splash",
                "home": "home",
                "alarms": "alarms",
                "friends": "friends",
                "pushes": "pushes",
                "star": "star",
                "popup/:cid": "popup",
                "alarm/:id": "alarm",
            };
            _super.call(this, options);
        }
        Router.getInstance = function () {
            return Router._instance;
        };
        Router.prototype.splash = function () {
            console.log(Router.TAG + "we have loaded the splash page.");
            Router.navigate("home", { trigger: true, replace: true });
        };
        Router.prototype.home = function () {
            console.log(Router.TAG + "we have loaded the home page.");
            Controller.loadHomePage();
        };
        Router.prototype.alarms = function () {
            console.log(Router.TAG + "we have loaded the alarms page.");
            Controller.loadAlarmsPage();
        };
        Router.prototype.friends = function () {
            console.log(Router.TAG + "we have loaded the friends page.");
            Controller.loadFriendsPage();
        };
        Router.prototype.pushes = function () {
            console.log(Router.TAG + "we have loaded the pushes page.");
            Controller.loadPushesPage();
        };
        Router.prototype.star = function () {
            console.log(Router.TAG + "we have loaded the star page.");
            Controller.loadStarPage();
        };
        Router.prototype.popup = function (cid) {
            console.log(Router.TAG + "we have loaded the popup cid: " + cid + ".");
            Controller.loadPopupPage(cid);
        };
        Router.prototype.alarm = function (id) {
            console.log(Router.TAG + "we have loaded the menu id: " + id + ".");
        };
        Router.navigate = function (framgnet, option) {
            Router.getInstance().navigate(framgnet, option);
        };
        Router._instance = new Router();
        Router.TAG = "Router - ";
        return Router;
    })(Backbone.Router);
    IKUT.Router = Router;
})(IKUT || (IKUT = {}));
//# sourceMappingURL=controller.js.map