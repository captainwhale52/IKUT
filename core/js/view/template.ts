﻿module IKUT {
    export class Template {
        private static _instance: Template = new Template();
        private baseUrl: string;
        constructor(args?: any) {
            if (Template._instance) {
                throw new Error("Error: Instantiation failed: Use Template.getInstance() instead of new.");
            }
            Template._instance = this;
        }
        public static getInstance(): Template {
            return Template._instance;
        }

        public static getSideViewTemplate(): string {
            var template = "";
            template += '<div id="wrapper-side">';

            template += '<div class="wrapper-button"></div>';

            //template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Details-</div></div>';

            template += '<div class="wrapper-detail"></div>';


            template += '</div>';
            return template;
        }

        public static getHomeViewTemplate(): string {
            var template = "";
            template += '<div id="wrapper-home">';

            template += '<% if (alarms.models.length > 0) { %>';

            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Upcoming Alarm ( <%= alarms.models[0].getFormattedDateDay() %> )-</div></div>';

            template += '<% } else { %>';

            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-No Upcoming Alarms-</div></div>';

            template += '<% } %>';

            template += '<% _.each(alarms.models, function (alarm) { %>';

            template += '<% if (alarm.getIsBeggingOfTheDay()) { %>';
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-<%= alarm.getFormattedDateDay() %>-</div></div>';
            template += '<% } %>';
            template += '<div class="wrapper-notification"></div>';
            template += '<% }); %>';

            template += '</div>';
            return template;
        }

        public static getHomeViewTemplate2(): string {
            var template = "";
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Upcoming Alarm-</div></div>';

            template += '<% _.each(alarms.models, function (alarm) { %>';

            template += '<% if (alarm.getIsBeggingOfTheDay()) { %>';
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-<%= alarm.getFormattedDateDay() %>-</div></div>';
            template += '<% } %>';
            template += '<div class="wrapper-notification"></div>';
            template += '<% }); %>';
            return template;
        }

        public static getFrameViewTemplate(): string {
            var template = "";
            template += '<div class="frame">';
            template +=     '<div class="frame-inner">';
            template +=         '<div class="frame-stroke-left"></div>';

            template +=         '<div class="frame-text-left col-xs-1"><span class="fa-stack"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa <%= icon %> fa-stack-1x"></i></span></div>';
            template +=         '<div class="frame-text-center col-xs-10 btn-detail" data-cid="<%= cid %>"><%= content %></div>';
            template +=         '<div class="frame-text-right col-xs-1 btn-detail" data-cid="<%= cid %>"><i class="fa fa-angle-right fa-1-7x"></i></div>';
            template +=         '<div class="clear"></div>';
            template +=         '<span class="frame-text-top"><%= header %></span>';
            template +=         '<div class="frame-stroke-right"></div>';
            
            template +=     '</div>';
            template += '</div>';
            return template;
        }

        public static getFrameViewTemplate2(): string {
            var template = "";
            template += '<div class="frame">';
            template +=     '<div class="frame-inner">';
            template +=         '<div class="frame-stroke-left"></div>';

            template +=         '<div class="frame-text-left col-xs-1"><span class="fa-stack"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa <%= icon %> fa-stack-1x"></i></span></div>';
            template +=         '<div class="frame-text-center col-xs-10 btn-detail" data-cid="<%= cid %>"><%= content %> <span class="badge"><i class="fa fa-star fa-1x"></i> <%= stars %></span></div>';
            template +=         '<div class="frame-text-right col-xs-1 btn-detail" data-cid="<%= cid %>"><i class="fa fa-angle-right fa-1-7x"></i></div>';
            template +=         '<div class="clear"></div>';
            template +=         '<span class="frame-text-top"><%= header %></span>';
            template +=         '<div class="frame-stroke-right"></div>';
            
            template +=     '</div>';
            template += '</div>';
            return template;
        }

        public static getDetailViewTemplate(): string {
            var template = "";
            template += '<div class="detail">';
            template += '<div class="detail-inner">';
            template += '<div class="detail-stroke-left"></div>';

            //template += '<div class="detail-text-left col-xs-1"><span class="fa-stack"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x"></i></span></div>';
            template += '<div class="detail-text-center col-xs-12"><%= content %></div>';            
            template += '<div class="clear"></div>';

            template += '<span class="detail-text-top"><%= header %></span>';
            template += '<div class="detail-stroke-right"></div>';

            template += '</div>';
            template += '</div>';
            return template;
        }

        public static getFrame2ViewTemplate(): string {
            var template = "";
            template += '<div class="frame2">';
            template += '<div class="frame2-inner">';
            template += '<div class="frame2-stroke-left"></div>';

            template += '<div class="frame2-text-left col-xs-1"><span class="fa-stack"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa <%= icon %> fa-stack-1x"></i></span></div>';
            template += '<div class="frame2-text-center col-xs-10 btn-detail" data-cid="<%= cid %>"><%= content %></div>';
            template += '<div class="frame2-text-right col-xs-1 btn-detail" data-cid="<%= cid %>"><i class="fa fa-angle-right fa-1-7x"></i></div>';
            template += '<div class="clear"></div>';

            template += '<span class="frame2-text-top"><%= header %></span>';
            template += '<div class="frame2-stroke-center"></div>';
            template += '<span class="frame2-text-top2"><%= days %></span>';
            
            template += '<div class="frame2-stroke-right"></div>';

            template += '</div>';
            template += '</div>';
            return template;
        }

        public static getFrame2ViewTemplate2(): string {
            var template = "";
            template += '<div class="frame2">';
            template += '<div class="frame2-inner">';
            template += '<div class="frame2-stroke-left"></div>';

            template += '<div class="frame2-text-left col-xs-1"><span class="fa-stack"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa <%= icon %> fa-stack-1x"></i></span></div>';
            template += '<div class="frame2-text-center col-xs-10 btn-detail" data-cid="<%= cid %>"><%= content %> <span class="badge"><i class="fa fa-users fa-1x"></i> <%= users %></span></div>';
            template += '<div class="frame2-text-right col-xs-1 btn-detail" data-cid="<%= cid %>"><i class="fa fa-angle-right fa-1-7x"></i></div>';
            template += '<div class="clear"></div>';

            template += '<span class="frame2-text-top"><%= header %></span>';
            template += '<div class="frame2-stroke-center"></div>';
            template += '<span class="frame2-text-top2"><%= days %></span>';

            template += '<div class="frame2-stroke-right"></div>';

            template += '</div>';
            template += '</div>';
            return template;
        }

        public static getButtonViewTemplate(): string {
            var template = "";
            template += '<div class="button">';
            template += '<div class="button-inner <%= behavior %>">';
            template += '<div class="button-text-left col-xs-1"><i class="fa <%= icon %> fa-1-5x"></i></div>';
            template += '<div class="button-text-center col-xs-10"><%= content %></div>';
            template += '<div class="button-text-right col-xs-1"></div>';
            template += '<div class="clear"></div>';

            template += '</div>';
            template += '</div>';
            return template;
        }

        public static getButtonViewTemplate2(): string {
            var template = "";
            template += '<div class="button">';
            template += '<div class="button-inner <%= behavior %>">';
            template += '<div class="button-text-left col-xs-1"></div>';
            template += '<div class="button-text-center col-xs-10"><%= content %></div>';
            template += '<div class="button-text-right col-xs-1"><i class="fa <%= icon %> fa-1-5x"></i></div>';
            template += '<div class="clear"></div>';

            template += '</div>';
            template += '</div>';
            return template;
        }

        public static getStarViewTemplate(): string {
            var template = "";
            template += '<div id="wrapper-star">';
            // add button
            template += '<div class="wrapper-connector clear uppercase"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Your Character-</div></div>';
            /////////////
            template += '<div class="frame">';
            template += '<div class="frame-inner">';
            template += '<div class="frame-stroke-left"></div>';

            template += '<div class="frame-text-center col-xs-12 iframe-content"><iframe src="<%= character %>" /></div>';
            template += '<div class="clear"></div>';
            template += '<span class="frame-text-top">CHARACTER</span>';
            template += '<div class="frame-stroke-right"></div>';

            template += '</div>';
            template += '</div>';
            ////////////
            template += '<div class="button">';
            template += '<div class="button-inner btn-shop">';
            template += '<div class="button-text-left col-xs-1"></div>';
            template += '<div class="button-text-center col-xs-10">SHOP ITEMS</div>';
            template += '<div class="button-text-right col-xs-1"><i class="fa fa-shopping-cart fa-1-5x"></i></div>';
            template += '<div class="clear"></div>';

            template += '</div>';
            template += '</div>';

            template += '<div class="button">';
            template += '<div class="button-inner btn-coupon">';
            template += '<div class="button-text-left col-xs-1"></div>';
            template += '<div class="button-text-center col-xs-10">SHOP COUPONS</div>';
            template += '<div class="button-text-right col-xs-1"><i class="fa fa-dollar fa-1-5x"></i></div>';
            template += '<div class="clear"></div>';

            template += '</div>';
            template += '</div>';

            ////////////

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Your Stars-</div></div>';
            /////////
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-star fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="stars" value="<%= stars %>" disabled/>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Username-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-user fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="username" value="<%= username %>"/ disabled>';
            template += '</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-First Name-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-odnoklassniki fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="firstname" value="<%= firstname %>"/>';
            template += '</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Last Name-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-odnoklassniki fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="lastname" value="<%= lastname %>"/>';
            template += '</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Change Password-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-key fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="password" class="form-control" id="password1" value="<%= password %>"/>';
            template += '</div>';
            template += '<div class="warn-password1 warn hidden">Please put a password.</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Password Confirm-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-key fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="password" class="form-control" id="password2" value="<%= password %>"/>';
            template += '</div>';
            template += '<div class="warn-password2 warn hidden">Please put same passwords.</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Save-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-save fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-save" id="btn-save">SAVE</div>';
            template += '</div>';
            template += '</div>';

            template += '</div>';
            return template;
        }

        public static getAlarmsViewTemplate(): string {
            var template = "";
            template += '<div id="wrapper-alarms">';
            // add button
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Add a New Daily Alarm-</div></div>';
            template += '<div class="wrapper-button"></div>';


            // notifications
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-List of Daily Alarms-</div></div>';


            template += '<% _.each(alarms.models, function (alarm) { %>';
            template +=     '<div class="wrapper-notification"></div>';
            template += '<% }); %>';

            template += '</div>';
            return template;
        }

        public static getPushesViewTemplate(): string {
            var template = "";
            template += '<div id="wrapper-pushes">';
            // add button
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Add a New Group Alarm-</div></div>';
            template += '<div class="wrapper-button"></div>';


            // notifications
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-List of Group Alarms-</div></div>';


            template += '<% _.each(alarms.models, function (alarm) { %>';
            template += '<div class="wrapper-notification"></div>';
            template += '<% }); %>';

            template += '</div>';
            return template;
        }

        public static getPushesViewTemplate2(): string {
            var template = "";
            // add button
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Add a New Group Alarm-</div></div>';
            template += '<div class="wrapper-button"></div>';


            // notifications
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-List of Group Alarms-</div></div>';


            template += '<% _.each(alarms.models, function (alarm) { %>';
            template += '<div class="wrapper-notification"></div>';
            template += '<% }); %>';

            return template;
        }

        public static getUsersViewTemplate(): string {
            var template = "";
            template += '<div id="wrapper-users">';
            // add button
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Add a Friend-</div></div>';
            template += '<div class="wrapper-button"></div>';


            // notifications
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-List of Friends-</div></div>';


            template += '<% _.each(users.models, function (user) { %>';
            template += '<div class="wrapper-user"></div>';
            template += '<% }); %>';

            template += '</div>';
            return template;
        }

        public static getUsersViewTemplate2(): string {
            var template = "";
            // add button
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Add a Friend-</div></div>';
            template += '<div class="wrapper-button"></div>';


            // notifications
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-List of Friends-</div></div>';


            template += '<% _.each(users.models, function (user) { %>';
            template += '<div class="wrapper-user"></div>';
            template += '<% }); %>';

            return template;
        }

        public static getAlarmsViewTemplate2(): string {
            var template = "";
            // add button
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Add a New Daily Alarm-</div></div>';
            template += '<div class="wrapper-button"></div>';


            // notifications
            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-List of Daily Alarms-</div></div>';


            template += '<% _.each(alarms.models, function (alarm) { %>';
            template += '<div class="wrapper-notification"></div>';
            template += '<% }); %>';

            return template;
        }

        

        public static getMenusViewTemplate(): string {
            var template = "";
            template += '<div class="wrapper-menu"></div>';
            template += '<div class="wrapper-menu"></div>';
            template += '<div class="wrapper-menu"></div>';
            template += '<div class="wrapper-menu"></div>';
            template += '<div class="wrapper-menu"></div>';
            return template;
        }

        public static getMenuViewTemplate(): string {
            var template = "";
            template += '<div class="menu">';

            template += '<div class="menu-inner">';

            template += '<i class="fa <%= icon %> fa-1x"></i>';

            template += '</div>';

            template += '</div>';
            return template;
        }

        public static getDarilyAlarmEditTemplate(): string {
            var template = "";
            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Time-</div></div>';
            template += '<div class="form-group">';
            template +=     '<div class="input-group date">';
            template +=         '<span class="input-group-addon">';
            template +=             '<i class="fa fa-clock-o fa-1-5x"></i>';
            template +=         '</span>';
            template +=         '<input type="text" class="form-control" id="time-start"/>';
            template +=     '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Name-</div></div>';
            template += '<div class="form-group">';
            template +=     '<div class="input-group">';
            template +=         '<span class="input-group-addon">';
            template +=          '<i class="fa fa-pencil-square fa-1-5x"></i>';
            template +=         '</span>';
            template +=     '<input type="text" class="form-control" id="name" value="<%= name %>"/>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Category-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon" id="category-icon">';
            template += '<i class="fa fa-tag fa-1-5x"></i>';
            template += '</span>';
            template += '<select class="selectpicker" id="category">';
            template += '<option value="0">Nothing Selected</option>';
            template += '<option value="1">Lesure</option>';
            template += '<option value="2">School</option>';
            template += '<option value="3">Work</option>';
            template += '<option value="4">Etc</option>';
            template += '</select>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Days-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-calendar-o fa-1-5x"></i>';
            template += '</span>';
            template += '<select class="selectpicker" id="days" multiple>';
            template += '<option value="0">Mo</option>';
            template += '<option value="1">Tu</option>';
            template += '<option value="2">We</option>';
            template += '<option value="3">Th</option>';
            template += '<option value="4">Fr</option>';
            template += '<option value="5">Sa</option>';
            template += '<option value="6">Su</option>';
            template += '</select>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Save-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-save fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-save" id="btn-save">SAVE</div>';
            template += '</div>';
            template += '</div>';



            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Delete-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-remove fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-delete" id="btn-delete">DELETE</div>';
            template += '</div>';
            template += '</div>';



            return template;
        }


        public static getDarilyAlarmEditTemplate2(): string {
            var template = "";
            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Time-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group date">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-clock-o fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="time-start"/>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Name-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-pencil-square fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="name" value="<%= name %>"/>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Category-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon" id="category-icon">';
            template += '<i class="fa fa-tag fa-1-5x"></i>';
            template += '</span>';
            template += '<select class="selectpicker" id="category">';
            template += '<option value="0">Nothing Selected</option>';
            template += '<option value="1">Lesure</option>';
            template += '<option value="2">School</option>';
            template += '<option value="3">Work</option>';
            template += '<option value="4">Etc</option>';
            template += '</select>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Days-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-calendar-o fa-1-5x"></i>';
            template += '</span>';
            template += '<select class="selectpicker" id="days" multiple>';
            template += '<option value="0">Mo</option>';
            template += '<option value="1">Tu</option>';
            template += '<option value="2">We</option>';
            template += '<option value="3">Th</option>';
            template += '<option value="4">Fr</option>';
            template += '<option value="5">Sa</option>';
            template += '<option value="6">Su</option>';
            template += '</select>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Create-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-save fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-save" id="btn-create">CREATE</div>';
            template += '</div>';
            template += '</div>';



            return template;
        }


        public static getUserEditTemplate(): string {
            var template = "";

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Username-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-user fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="username" value="<%= username %>"/ disabled>';
            template += '</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Name-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-odnoklassniki fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="name" value="<%= firstname %> <%= lastname %>"/ disabled>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Note-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-comment fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="description" value="<%= description %>"/>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Recent Group Alarm-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group date">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-history fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="recent" disabled />';
            template += '</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Friend Added-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group date">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-clock-o fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="created" value="<%= created %>" disabled />';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Save-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-save fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-save" id="btn-save">SAVE</div>';
            template += '</div>';
            template += '</div>';



            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Delete-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-remove fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-delete" id="btn-delete">DELETE</div>';
            template += '</div>';
            template += '</div>';



            return template;
        }

        public static getUserAddTemplate(): string {
            var template = "";

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Search Username-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-search fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="searchname" value=""/>';
            template += '</div>';
            template += '</div>';

            template += '<div id="wrapper-userlist" class="user-list hidden">';
            template += '<div id="userlist" class="user-list-inner">';
            
            template += '</div>';
            template += '</div>';

            return template;
        }

        public static getUserItemTemplate(): string {
            var template = "";

            template += '<% _.each(users.models, function (user) { %>';
            template += '<div class="user-item"><span class="col-xs-10 "><%= user.getUsername() %></span><i class="col-xs-2 fa fa-plus-square fa-1x btn-add" data-cid="<%= user.getId() %>"></i></div><div class="clear" />';
            template += '<% }); %>';

            return template;
        }



        public static getGroupAlarmEditTemplate(): string {
            var template = "";

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Date & Time-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group date">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-clock-o fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="datetime"/>';
            template += '</div>';
            template += '<div class="warn-datetime warn hidden">Please choose a future time.</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Name-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-pencil-square fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="name" value="<%= name %>"/>';
            template += '</div>';
            template += '<div class="warn-name warn hidden">Please put an event name.</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Stars-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-star fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="number" class="form-control no-right-border" id="stars" value="<%=  origstars %>"/>';
            template += '<span class="input-group-addon no-left-border">/ <%= stars %></span>';
            template += '</div>';
            template += '<div class="warn-stars warn hidden">Plase put right number of stars.</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Participants-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-users fa-1-5x"></i>';
            template += '</span>';
            template += '<select class="selectpicker" id="participants" multiple data-selected-text-format="count">';
            template += '<option value="<%= curUser.getcId() %>" disabled="disabled"><%= curUser.getFirstname() %> <%= curUser.getLastname() %></option>';
            template += '<% _.each(users.models, function (user) { %>';
            template += '<option value="<%= user.getcId() %>"><%= user.getFirstname() %> <%= user.getLastname() %></option>';
            template += '<% }); %>';
            template += '</select>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Category-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon" id="category-icon">';
            template += '<i class="fa fa-tag fa-1-5x"></i>';
            template += '</span>';
            template += '<select class="selectpicker" id="category">';
            template += '<option value="0">Nothing Selected</option>';
            template += '<option value="1">Lesure</option>';
            template += '<option value="2">School</option>';
            template += '<option value="3">Work</option>';
            template += '<option value="4">Etc</option>';
            template += '</select>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Save-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-save fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-save" id="btn-save">SAVE</div>';
            template += '</div>';
            template += '</div>';



            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Delete-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-remove fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-delete" id="btn-delete">DELETE</div>';
            template += '</div>';
            template += '</div>';



            return template;
        }


        public static getGroupAlarmEditTemplate2(): string {
            var template = "";

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Date & Time-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group date">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-clock-o fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="datetime"/>';
            template += '</div>';
            template += '<div class="warn-datetime warn hidden">Please choose a future time.</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Name-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-pencil-square fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="text" class="form-control" id="name" value="<%= name %>"/>';
            template += '</div>';
            template += '<div class="warn-name warn hidden">Please put an event name.</div>';
            template += '</div>';

            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Stars-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-star fa-1-5x"></i>';
            template += '</span>';
            template += '<input type="number" class="form-control no-right-border" id="stars" value="<%= origstars %>"/>';
            template += '<span class="input-group-addon no-left-border">/ <%= stars %></span>';
            template += '</div>';
            template += '<div class="warn-stars warn hidden">Plase put right number of stars.</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Participants-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-users fa-1-5x"></i>';
            template += '</span>';
            template += '<select class="selectpicker" id="participants" multiple data-selected-text-format="count">';
            template += '<option value="<%= curUser.getcId() %>" disabled="disabled"><%= curUser.getFirstname() %> <%= curUser.getLastname() %></option>';
            template += '<% _.each(users.models, function (user) { %>';
            template += '<option value="<%= user.getcId() %>"><%= user.getFirstname() %> <%= user.getLastname() %></option>';
            template += '<% }); %>';
            template += '</select>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Category-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon" id="category-icon">';
            template += '<i class="fa fa-tag fa-1-5x"></i>';
            template += '</span>';
            template += '<select class="selectpicker" id="category">';
            template += '<option value="0">Nothing Selected</option>';
            template += '<option value="1">Lesure</option>';
            template += '<option value="2">School</option>';
            template += '<option value="3">Work</option>';
            template += '<option value="4">Etc</option>';
            template += '</select>';
            template += '</div>';
            template += '</div>';


            template += '<div class="wrapper-edit-connector uppercase"><div class="edit-connector-vertical-line"><div class="edit-connector-line"></div></div><div class="edit-connector-content">-Save-</div></div>';
            template += '<div class="form-group">';
            template += '<div class="input-group">';
            template += '<span class="input-group-addon">';
            template += '<i class="fa fa-save fa-1-5x"></i>';
            template += '</span>';
            template += '<div class="form-control btn-save" id="btn-create">CREATE</div>';
            template += '</div>';
            template += '</div>';


            return template;
        }

        public static getPopupViewTemplate(): string {
            var template = "";

            template += '<div id="wrapper-popup">';
            ///////////////////////////////////////////

            template += '<div class="wrapper-connector clear"><div class="connector-vertical-line"><div class="connector-line"></div></div><div class="connector-content">-Current Alarm-</div></div>';
            template += '<div class="wrapper-detail">';



            

            template += '<div class="detail">';
            template += '<div class="detail-inner">';
            template += '<div class="detail-stroke-left"></div>';

            //template += '<div class="detail-text-left col-xs-1"><span class="fa-stack"><i class="fa fa-square-o fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x"></i></span></div>';
            template += '<div class="detail-text-center col-xs-12">';
            template += '<div class="upper-part">';

            template += '<div class="alarm-name"><%= alarmname %></div>';
            template += '<div class="alarm-time"><%= alarmtime %><span class="overtime"></span></div>';
            template += '<div class="alarm-date"><%= alarmdate %></div>';
            template += '<% if (users.models.length) { %>';
            template += '<div class="title-users">with</div>';
            template += '<% } %>';

            template += '<% _.each(users.models, function (user) { %>';
            template += '<div class="alarm-user"><%= user.getFirstname() %> <%= user.getLastname() %></div>';
            template += '<% }); %>';

            

            template += '</div>';
            
            template += '<div class="bottom-part">';

            template += '<div class="character-part"></div>';

            template += '<div class="button">';
            template += '<div class="button-inner">';
            template += '<div class="button-text-left col-xs-1  btn-claim"><i class="fa fa-hand-rock-o fa-1-5x"></i></div>';
            template += '<div class="button-text-center col-xs-10 btn-claim">CLAIM <span class="badge2"><i class="fa fa-star fa-1x"></i> <span id="alarmstars"><%= alarmstars %></span></span></div>';
            template += '<div class="button-text-right col-xs-1 btn-claim"><i class="fa fa-hand-rock-o fa-1-5x"></i></div>';
            template += '<div class="clear"></div>';

            

            template += '</div>';

            template += '</div>';
            template += '</div>';
            template += '<div class="clear"></div>';
            template += '</div>';
            template += '<span class="detail-text-top">CURRENT ALARM</span>';
            template += '<div class="detail-stroke-right"></div>';

            template += '</div>';
            template += '</div>';


            template += '</div>';
            ///////////////////////////////////////////
            template += '</div>';
            return template;
        }
    }
}