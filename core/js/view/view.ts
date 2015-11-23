﻿module IKUT {
    export enum VIEWTYPE_LIST {
        NONE, HOME, ALARMS, FRIENDS, PUSHES, STAR
    }
    export class View extends BaseView {
        private static _instance: View = new View();
        private static TAG: string = "View - ";
        private static _viewType: VIEWTYPE_LIST = VIEWTYPE_LIST.NONE;
        private static _bLoading: boolean = false;

        private _homeView: HomeView;
        private _menusView: MenusView;
        private _alarmsView: AlarmsView;

        constructor(options?: Backbone.ViewOptions<Backbone.Model>) {
            super(options);
            if (View._instance) {
                throw new Error("Error: Instantiation failed: Use View.getInstance() instead of new.");
            }
            View._instance = this;
            var self: View = View._instance;
            self.bDebug = true;
            //$(window).resize(_.debounce(that.customResize, Setting.getInstance().getResizeTimeout()));
        }
        public static setElement(options?: Backbone.ViewOptions<Backbone.Model>): void {
            View._instance.setElement(options.el);
        }
        public static getInstance(): View {
            return View._instance;
        }
        public static setViewType(viewType: VIEWTYPE_LIST): void {
            View._viewType = viewType;
        }

        public static setIsLoading(bLoading: boolean) {
            View._bLoading = bLoading;
        }

        public static getIsLoading(): boolean {
            return View._bLoading;
        }

        public render(args?: any): any {
            var self: View = this;
            if (self.bDebug) console.log(View.TAG + "render()");
            
            View.setIsLoading(true);
            

            switch (View._viewType) {
                case VIEWTYPE_LIST.HOME:
                    setTimeout(function () {
                        self._homeView = HomeViewFractory.create($('#wrapper-main')).render();
                    }, Setting.getViewTransitionDuration());
                    if (self._alarmsView) {
                        self._alarmsView.$el.animate({ left: -self.getWidth(), opacity: 0 }, Setting.getViewTransitionDuration(), function () {
                            self._alarmsView.destroy();
                            self._alarmsView = null;
                            
                        });
                    }
                    break;
                case VIEWTYPE_LIST.ALARMS:
                    setTimeout(function () {
                        self._alarmsView = AlarmsViewFractory.create($('#wrapper-main')).render();
                    }, Setting.getViewTransitionDuration());
                    if (self._homeView) {
                        self._homeView.$el.animate({ left: -self.getWidth(), opacity: 0 }, Setting.getViewTransitionDuration(), function () {
                            self._homeView.destroy();
                            self._homeView = null;
                           
                        });
                    }
                    break;
            }

            // render menusview if it's not rendered yet.
            if (!self._menusView) {
                self._menusView = MenusViewFractory.create($('#wrapper-menus')).render();
            }
            // set current menu
            self._menusView.setCurrentMenu(View._viewType);

            self.changeBackgroundGradient();
            self.addEventListener();
        }
        public static render(args?: any): any {
            View._instance.render(args);
        }

        public addEventListener(): any {
            var self: View = this;
            // logo redirect menu
            $('#wrapper-logo').off('click');
            $('#wrapper-logo').on('click', function () {
                window.location.href = Setting.getBaseUrl();
                //Router.navigate("home", { trigger: true, replace: true });
            });
        }

        public changeBackgroundGradient(): void {
            var self: View = this;
            switch (View._viewType) {
                case VIEWTYPE_LIST.HOME:
                    self.$el.css({
                        background: "linear-gradient(" + Setting.getBackgroundRedColor() + ", " + Setting.getBackgroundGreenColor() + " 70%, " + Setting.getBackgroundBlackColor() + " 95%), " + "url( " + Setting.getBackgroundImage() + ")"
                    });
                    break;
                case VIEWTYPE_LIST.ALARMS:
                    self.$el.css({
                        background: "linear-gradient(" + Setting.getBackgroundOrangeColor() + ", " + Setting.getBackgroundRedColor() + " 70%, " + Setting.getBackgroundBlackColor() + " 95%), " + "url( " + Setting.getBackgroundImage() + ")"
                    });
                    break;
                case VIEWTYPE_LIST.FRIENDS:
                    self.$el.css({
                        background: "linear-gradient(" + Setting.getBackgroundYellowColor() + ", " + Setting.getBackgroundOrangeColor() + " 70%, " + Setting.getBackgroundBlackColor() + " 95%), " + "url( " + Setting.getBackgroundImage() + ")"
                    });
                    break;
                case VIEWTYPE_LIST.PUSHES:
                    self.$el.css({
                        background: "linear-gradient(" + Setting.getBackgroundCyanColor() + ", " + Setting.getBackgroundYellowColor() + " 70%, " + Setting.getBackgroundBlackColor() + " 95%), " + "url( " + Setting.getBackgroundImage() + ")"
                    });
                    break;
                case VIEWTYPE_LIST.STAR:
                    self.$el.css({
                        background: "linear-gradient(" + Setting.getBackgroundGreenColor() + ", " + Setting.getBackgroundCyanColor() + " 70%, " + Setting.getBackgroundBlackColor() + " 95%), " + "url( " + Setting.getBackgroundImage() + ")"
                    });
                    break;
            }
        }
    }
} 