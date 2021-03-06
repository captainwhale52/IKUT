var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var IKUT;
(function (IKUT) {
    (function (VIEWTYPE_LIST) {
        VIEWTYPE_LIST[VIEWTYPE_LIST["NONE"] = 0] = "NONE";
        VIEWTYPE_LIST[VIEWTYPE_LIST["HOME"] = 1] = "HOME";
        VIEWTYPE_LIST[VIEWTYPE_LIST["ALARMS"] = 2] = "ALARMS";
        VIEWTYPE_LIST[VIEWTYPE_LIST["FRIENDS"] = 3] = "FRIENDS";
        VIEWTYPE_LIST[VIEWTYPE_LIST["PUSHES"] = 4] = "PUSHES";
        VIEWTYPE_LIST[VIEWTYPE_LIST["STAR"] = 5] = "STAR";
        VIEWTYPE_LIST[VIEWTYPE_LIST["POPUP"] = 6] = "POPUP";
    })(IKUT.VIEWTYPE_LIST || (IKUT.VIEWTYPE_LIST = {}));
    var VIEWTYPE_LIST = IKUT.VIEWTYPE_LIST;
    var View = (function (_super) {
        __extends(View, _super);
        function View(options) {
            _super.call(this, options);
            if (View._instance) {
                throw new Error("Error: Instantiation failed: Use View.getInstance() instead of new.");
            }
            View._instance = this;
            var self = View._instance;
            self.bDebug = true;
            //$(window).resize(_.debounce(that.customResize, Setting.getInstance().getResizeTimeout()));
        }
        View.setElement = function (options) {
            View._instance.setElement(options.el);
        };
        View.getInstance = function () {
            return View._instance;
        };
        View.setViewType = function (viewType) {
            View._viewType = viewType;
        };
        View.getViewType = function () {
            return View._viewType;
        };
        View.setIsLoading = function (bLoading) {
            View._bLoading = bLoading;
        };
        View.getIsLoading = function () {
            return View._bLoading;
        };
        View.prototype.render = function (args) {
            var self = this;
            if (self.bDebug)
                console.log(View.TAG + "render()");
            View.setIsLoading(true);
            switch (View._viewType) {
                case 1 /* HOME */:
                    setTimeout(function () {
                        self._homeView = IKUT.HomeViewFractory.create($('#wrapper-main')).render();
                    }, IKUT.Setting.getViewTransitionDuration());
                    // remove other views
                    if (self._alarmsView) {
                        self._alarmsView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._alarmsView.destroy();
                            self._alarmsView = null;
                        });
                        if (self._alarmsView.sideView) {
                            self._alarmsView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._usersView) {
                        self._usersView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._usersView.destroy();
                            self._usersView = null;
                        });
                        if (self._usersView.sideView) {
                            self._usersView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._pushesView) {
                        self._pushesView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._pushesView.destroy();
                            self._pushesView = null;
                        });
                        if (self._pushesView.sideView) {
                            self._pushesView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._starView) {
                        self._starView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._starView.destroy();
                            self._starView = null;
                        });
                        if (self._starView.sideView) {
                            self._starView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._popupView) {
                        self._popupView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._popupView.destroy();
                            self._popupView = null;
                        });
                        if (self._popupView.sideView) {
                            self._popupView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    break;
                case 2 /* ALARMS */:
                    setTimeout(function () {
                        self._alarmsView = IKUT.AlarmsViewFractory.create($('#wrapper-main')).render();
                    }, IKUT.Setting.getViewTransitionDuration());
                    // remove other views
                    if (self._homeView) {
                        self._homeView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._homeView.destroy();
                            self._homeView = null;
                        });
                        if (self._homeView.sideView) {
                            self._homeView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._usersView) {
                        self._usersView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._usersView.destroy();
                            self._usersView = null;
                        });
                        if (self._usersView.sideView) {
                            self._usersView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._pushesView) {
                        self._pushesView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._pushesView.destroy();
                            self._pushesView = null;
                        });
                        if (self._pushesView.sideView) {
                            self._pushesView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._starView) {
                        self._starView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._starView.destroy();
                            self._starView = null;
                        });
                        if (self._starView.sideView) {
                            self._starView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._popupView) {
                        self._popupView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._popupView.destroy();
                            self._popupView = null;
                        });
                        if (self._popupView.sideView) {
                            self._popupView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    break;
                case 3 /* FRIENDS */:
                    setTimeout(function () {
                        self._usersView = IKUT.UsersViewFractory.create($('#wrapper-main')).render();
                    }, IKUT.Setting.getViewTransitionDuration());
                    // remove other views
                    if (self._alarmsView) {
                        self._alarmsView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._alarmsView.destroy();
                            self._alarmsView = null;
                        });
                        if (self._alarmsView.sideView) {
                            self._alarmsView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._homeView) {
                        self._homeView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._homeView.destroy();
                            self._homeView = null;
                        });
                        if (self._homeView.sideView) {
                            self._homeView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._pushesView) {
                        self._pushesView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._pushesView.destroy();
                            self._pushesView = null;
                        });
                        if (self._pushesView.sideView) {
                            self._pushesView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._starView) {
                        self._starView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._starView.destroy();
                            self._starView = null;
                        });
                        if (self._starView.sideView) {
                            self._starView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._popupView) {
                        self._popupView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._popupView.destroy();
                            self._popupView = null;
                        });
                        if (self._popupView.sideView) {
                            self._popupView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    break;
                case 4 /* PUSHES */:
                    setTimeout(function () {
                        self._pushesView = IKUT.PushesViewFractory.create($('#wrapper-main')).render();
                    }, IKUT.Setting.getViewTransitionDuration());
                    // remove other views
                    if (self._alarmsView) {
                        self._alarmsView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._alarmsView.destroy();
                            self._alarmsView = null;
                        });
                        if (self._alarmsView.sideView) {
                            self._alarmsView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._homeView) {
                        self._homeView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._homeView.destroy();
                            self._homeView = null;
                        });
                        if (self._homeView.sideView) {
                            self._homeView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._usersView) {
                        self._usersView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._usersView.destroy();
                            self._usersView = null;
                        });
                        if (self._usersView.sideView) {
                            self._usersView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._starView) {
                        self._starView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._starView.destroy();
                            self._starView = null;
                        });
                        if (self._starView.sideView) {
                            self._starView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._popupView) {
                        self._popupView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._popupView.destroy();
                            self._popupView = null;
                        });
                        if (self._popupView.sideView) {
                            self._popupView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    break;
                case 5 /* STAR */:
                    setTimeout(function () {
                        self._starView = IKUT.StarViewFractory.create($('#wrapper-main')).render();
                    }, IKUT.Setting.getViewTransitionDuration());
                    // remove other views
                    if (self._alarmsView) {
                        self._alarmsView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._alarmsView.destroy();
                            self._alarmsView = null;
                        });
                        if (self._alarmsView.sideView) {
                            self._alarmsView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._homeView) {
                        self._homeView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._homeView.destroy();
                            self._homeView = null;
                        });
                        if (self._homeView.sideView) {
                            self._homeView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._usersView) {
                        self._usersView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._usersView.destroy();
                            self._usersView = null;
                        });
                        if (self._usersView.sideView) {
                            self._usersView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._pushesView) {
                        self._pushesView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._pushesView.destroy();
                            self._pushesView = null;
                        });
                        if (self._pushesView.sideView) {
                            self._pushesView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    else if (self._popupView) {
                        self._popupView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                            self._popupView.destroy();
                            self._popupView = null;
                        });
                        if (self._popupView.sideView) {
                            self._popupView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                        }
                    }
                    break;
                case 6 /* POPUP */:
                    var popAlarm = IKUT.Controller.getCurrentAlarm();
                    console.log("-- popAlarm --");
                    console.log(popAlarm);
                    if (popAlarm) {
                        setTimeout(function () {
                            self._popupView = IKUT.PopupViewFractory.create($('#wrapper-main')).render(popAlarm);
                        }, IKUT.Setting.getViewTransitionDuration());
                        // remove other views
                        if (self._alarmsView) {
                            self._alarmsView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                                self._alarmsView.destroy();
                                self._alarmsView = null;
                            });
                            if (self._alarmsView.sideView) {
                                self._alarmsView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                            }
                        }
                        else if (self._homeView) {
                            self._homeView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                                self._homeView.destroy();
                                self._homeView = null;
                            });
                            if (self._homeView.sideView) {
                                self._homeView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                            }
                        }
                        else if (self._usersView) {
                            self._usersView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                                self._usersView.destroy();
                                self._usersView = null;
                            });
                            if (self._usersView.sideView) {
                                self._usersView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                            }
                        }
                        else if (self._pushesView) {
                            self._pushesView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                                self._pushesView.destroy();
                                self._pushesView = null;
                            });
                            if (self._pushesView.sideView) {
                                self._pushesView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                            }
                        }
                        else if (self._starView) {
                            self._starView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration(), function () {
                                self._starView.destroy();
                                self._starView = null;
                            });
                            if (self._starView.sideView) {
                                self._starView.sideView.$el.animate({ left: -self.getWidth(), opacity: 0 }, IKUT.Setting.getViewTransitionDuration());
                            }
                        }
                    }
                    break;
            }
            // render menusview if it's not rendered yet.
            if (!self._menusView) {
                self._menusView = IKUT.MenusViewFractory.create($('#wrapper-menus')).render();
            }
            // set current menu
            self._menusView.setCurrentMenu(View._viewType);
            self.changeBackgroundGradient();
            self.addEventListener();
            // adjust offset of menu
            //console.log($(document).innerWidth() - self.getWidth());
            $('#wrapper-menus').css({ right: $(document).innerWidth() - self.getWidth() });
        };
        View.render = function (args) {
            View._instance.render(args);
        };
        View.prototype.addEventListener = function () {
            var self = this;
            // logo redirect menu
            $('#wrapper-logo').off('click');
            $('#wrapper-logo').on('click', function () {
                window.location.href = IKUT.Setting.getBaseUrl();
                //Router.navigate("home", { trigger: true, replace: true });
            });
        };
        View.prototype.changeBackgroundGradient = function () {
            var self = this;
            switch (View._viewType) {
                case 1 /* HOME */:
                    self.$el.css({
                        background: "linear-gradient(" + IKUT.Setting.getBackgroundRedColor() + ", " + IKUT.Setting.getBackgroundGreenColor() + " 70%, " + IKUT.Setting.getBackgroundBlackColor() + " 95%), " + "url( " + IKUT.Setting.getBackgroundImage() + ")"
                    });
                    break;
                case 2 /* ALARMS */:
                    self.$el.css({
                        background: "linear-gradient(" + IKUT.Setting.getBackgroundOrangeColor() + ", " + IKUT.Setting.getBackgroundRedColor() + " 70%, " + IKUT.Setting.getBackgroundBlackColor() + " 95%), " + "url( " + IKUT.Setting.getBackgroundImage() + ")"
                    });
                    break;
                case 3 /* FRIENDS */:
                    self.$el.css({
                        background: "linear-gradient(" + IKUT.Setting.getBackgroundYellowColor() + ", " + IKUT.Setting.getBackgroundOrangeColor() + " 70%, " + IKUT.Setting.getBackgroundBlackColor() + " 95%), " + "url( " + IKUT.Setting.getBackgroundImage() + ")"
                    });
                    break;
                case 4 /* PUSHES */:
                    self.$el.css({
                        background: "linear-gradient(" + IKUT.Setting.getBackgroundCyanColor() + ", " + IKUT.Setting.getBackgroundYellowColor() + " 70%, " + IKUT.Setting.getBackgroundBlackColor() + " 95%), " + "url( " + IKUT.Setting.getBackgroundImage() + ")"
                    });
                    break;
                case 5 /* STAR */:
                    self.$el.css({
                        background: "linear-gradient(" + IKUT.Setting.getBackgroundGreenColor() + ", " + IKUT.Setting.getBackgroundCyanColor() + " 70%, " + IKUT.Setting.getBackgroundBlackColor() + " 95%), " + "url( " + IKUT.Setting.getBackgroundImage() + ")"
                    });
                    break;
                case 6 /* POPUP */:
                    self.$el.css({
                        background: "linear-gradient(" + IKUT.Setting.getBackgroundWhiteColor() + ", " + IKUT.Setting.getBackgroundWhiteColor() + " 70%, " + IKUT.Setting.getBackgroundBlackColor() + " 95%), " + "url( " + IKUT.Setting.getBackgroundImage() + ")"
                    });
                    break;
            }
        };
        View._instance = new View();
        View.TAG = "View - ";
        View._viewType = 0 /* NONE */;
        View._bLoading = false;
        return View;
    })(IKUT.BaseView);
    IKUT.View = View;
})(IKUT || (IKUT = {}));
//# sourceMappingURL=view.js.map