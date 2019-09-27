webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatroomPage = class ChatroomPage {
    constructor(navCtrl, navParams, storage, speech, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.speech = speech;
        this.http = http;
        // stoplisten(){
        //   this.speech.stopListening().then(()=>{
        //     console.log("listtening stoped")
        //   });
        // }
        // async availableLang():Promise<Array<String>>{
        //   try{
        //     const langs= await this.speech.getSupportedLanguages();
        //     console.log(langs);
        //     return langs;
        //   }
        //   catch(e){
        //     console.log(e);
        //   }
        // }
        // async hasPermissions():Promise<boolean>{
        //   try{
        //     this.getPermissions();
        //     const hasPermission=this.speech.hasPermission();
        //     console.log("has Permissions");
        //     return hasPermission;
        //   }
        //   catch(e){
        //     console.log(e);
        //   }
        // }
        // async getPermissions():Promise<void>{
        //   try{
        //     const permissions= await this.speech.requestPermission();
        //     console.log(permissions);
        //   }
        //   catch(e){
        //     console.log(e);
        //   }
        // }
        this.messages = [];
        this.responds = [];
        this.getMessages();
    }
    listen() {
        this.speech.startListening()
            .subscribe((matches) => {
            this.textValue = matches[0];
        }, (onerror) => console.log('error:', onerror));
    }
    ngOnInit() {
        this.storage.clear();
        //speech callback
        /*this.speech.hasPermission()
          .then((hasPermission: boolean) => {
    
            if (!hasPermission) {
            this.speech.requestPermission()
              .then(
                () => console.log('Granted'),
                () => console.log('Denied')
              )
            }
    
         });*/
    }
    callFunction() {
        this.content.scrollToBottom(0);
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatroomPage');
        //this.scrollToBottom();
    }
    /*scrollToBottom(){
      this.feedContainer.nativeElement.scrollTop=this.feedContainer.nativeElement.scrollHeight;
    }*/
    getMessages() {
        this.storage.ready().then(() => {
            this.storage.forEach((v, k, i) => {
                if (k.slice(0, 8) === 'message-') {
                    this.messages.push(v);
                }
            });
        });
    }
    send(content) {
        if (content.value != "") {
            let headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            let options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
            let postReq = {
                name: content.value
            };
            this.http.post("http://127.0.0.1:8000/apilogin/", JSON.stringify(postReq), options)
                .subscribe(response => {
                console.log(response);
                console.log(JSON.stringify(content.value));
                console.log("valid account");
                this.storage.ready().then(() => {
                    let responds = {
                        id: this.genRandomId(),
                        content: response
                    };
                    this.storage.set('responds-' + responds.id, responds);
                    this.messages.push({ id: 'response', content: responds.content });
                    console.log(responds);
                });
            });
            console.log(JSON.stringify(postReq));
            this.storage.ready().then(() => {
                let message = {
                    id: this.genRandomId(),
                    content: content.value
                };
                this.storage.set('message-' + message.id, message);
                this.messages.push({ id: 'message', content: message.content });
                content.value = "";
            });
        }
        console.log(this.messages);
        console.log(this.responds);
    }
    genRandomId() {
        return Math.floor(Math.random() * 9999); // up to 4 digits random
    }
    createPost(formVal) {
        // let post={
        //   username:this.username,
        //   password:this.password
        // }
        //this.http.post("https://jsonplaceholder.typicode.com/users",JSON.stringify(formVal.value))
        this.http.post("http://127.0.0.1:8000/apilogin/", JSON.stringify(formVal.value))
            .subscribe(response => {
            console.log(response);
            console.log("valid account");
            console.log(JSON.stringify(formVal.value));
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], ChatroomPage.prototype, "content", void 0);
ChatroomPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-chatroom',template:/*ion-inline-start:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/chatroom/chatroom.html"*/'<!--\n  Generated template for the ChatroomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n    <!-- <ion-header>\n\n    <ion-navbar>\n        <ion-title  style="display:inline-block">Username</ion-title>\n    </ion-navbar>\n\n    </ion-header> -->\n\n\n\n<ion-content  >\n\n    <div class="message-wrap"  >\n\n        <div class="message">\n            <!--<ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>-->\n            <div class=" animated fadeInRight ">\n                <div class="msg-detail ">\n                    <!--<div class="msg-info">\n                        <p>\n                            March 16 at 1:27am\n                        </p>\n                    </div>-->\n\n                    <div class="msg-content">\n                        \n                        <p class="line-breaker ">\n                            Hi, I\'m Floki\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div class="animated fadeInRight ">\n                <div class="msg-detail ">\n                    <!--<div class="msg-info">\n                        <p>\n                            March 16 at 1:27am\n                        </p>\n                    </div>-->\n\n                    <div class="msg-content">\n                        \n                        <p class="line-breaker ">\n                            I\'ll be your assistant today , how can i help .\n                        </p>\n                    </div>\n                </div>\n            </div>\n\n            <div *ngIf="messages.length > 0">\n                <div *ngFor="let msg of messages;let last = last;let first=first" >\n                    <div>\n                        <div class="msg-detail ">\n                            <!--<div class="msg-info">\n                                <p>\n                                    March 16 at 1:27am\n                                </p>\n                            </div>-->\n                                <!-- <div [ngClass]="first?\'display\':\'hide\'" >\n                                    <img src="../../assets/imgs/Untitledd.jpg">\n                                </div> -->\n                            \n                                <div  [ngClass]="last?\'l\':(first?\'l2\':\'\')" class="msg-content left animated fadeInLeft" *ngIf="msg.id == \'message\'" >\n                                   \n                                    <p class="line-breaker ">\n                                        \n                                        {{msg.content}}\n                                        {{last ? callFunction() : \'\'}}\n                                    </p>\n                                </div>\n                                <div  class="msg-content  animated fadeInRight" [ngClass]="last?\'r\':(first?\'r2\':\'\')" *ngIf="msg.id == \'response\'" >\n                                   \n                                    <p class="line-breaker ">\n                                        \n                                        {{msg.content}}\n                                        {{last ? callFunction() : \'\'}}\n                                    </p>\n                                </div>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            \n\n            \n            \n                \n        </div>\n\n    </div>\n\n</ion-content>\n\n\n<ion-footer no-border >\n  <ion-grid class="input-wrap">\n      <ion-row>\n\n          <ion-col col-8>\n            <ion-textarea class="inputArea" #chatContent [(ngModel)]="textValue" placeholder="Text Input"></ion-textarea>\n          </ion-col>\n\n          <ion-col col-2>\n              <button class="send" ion-button clear icon-only item-right (click)="send(chatContent)">\n                  <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n              </button>\n          </ion-col>\n\n          <ion-col col-2>\n              <!--<button class="microphone" ion-button clear icon-only item-right (mousedown)="listen()" >\n                <ion-icon ios="ios-mic" md="md-mic"></ion-icon>\n              </button>-->\n              <button class="microphone" ion-button clear icon-only item-right  >\n                <ion-icon ios="ios-mic" md="md-mic"></ion-icon>\n              </button>\n          </ion-col>\n\n      </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/chatroom/chatroom.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], ChatroomPage);

//# sourceMappingURL=chatroom.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let IntroPage = class IntroPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isHidden = true;
        this.micIsHidden = true;
        this.parIsHidden = true;
        this.loginParIsHidden = true;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad IntroPage');
    }
    slideChanged() {
        let currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 1) {
            this.isHidden = false;
        }
        if (currentIndex == 2) {
            this.micIsHidden = false;
        }
    }
    next() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Slides */])
], IntroPage.prototype, "slides", void 0);
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/intro/intro.html"*/'<ion-slides pager="true" class="sliders" #slides (ionSlideDidChange)="slideChanged()">\n \n  <ion-slide >\n    <ion-row padding>\n      <a class="skip" (click)="next()"> Skip</a>\n      <ion-col class="firstSlideheader">\n        <h2>HI , I\'m Floki</h2>\n        <!-- <p> I\'ll Be Your <strong>Assistant</strong> Today</p> -->\n        <p>From Now On I\'ll Be Your <strong>Assistant</strong> ,</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <!-- <div>\n          <svg class="svgEdit" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n             viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n          <path style="fill:#51B4DB;" d="M40.079,354.432c-11.635,11.635-12.677,29.456-2.327,39.806c10.349,10.349,28.171,9.308,39.806-2.327\n            c11.635-11.635,5.48-22.26-4.87-32.609C62.339,348.952,51.714,342.797,40.079,354.432z"/>\n          <g transform="matrix(0.7071 0.7071 -0.7071 0.7071 238.28 -35.664)">\n            <rect x="135.31" y="224.59" style="fill:#E7EEEF;" width="53.759" height="90.42"/>\n            <rect x="135.31" y="224.59" style="opacity:0.15;enable-background:new    ;" width="53.759" height="90.42"/>\n          </g>\n          <polygon style="fill:#E7EEEF;" points="89.978,373.644 58.346,342.011 111.215,282.762 149.228,320.775 "/>\n          <polygon style="opacity:0.15;enable-background:new    ;" points="89.978,373.644 58.346,342.011 111.215,282.762 149.228,320.775 \n            "/>\n          <g>\n            <path style="fill:#E7EEEF;" d="M133.717,323.227l-24.955-24.955c-3.606-3.606-3.606-9.452,0-13.058l4.905-4.905\n              c3.606-3.606,9.452-3.606,13.058,0l24.955,24.955c3.606,3.606,3.606,9.452,0,13.058l-4.905,4.905\n              C143.17,326.833,137.323,326.833,133.717,323.227z"/>\n            <path style="fill:#E7EEEF;" d="M92.099,383.621c12.076-12.076,12.076-31.655,0-43.731s-31.655-12.076-43.731,0\n              s-4.606,24.185,7.47,36.261S80.023,395.697,92.099,383.621z"/>\n          </g>\n          <g>\n            <path style="fill:#51B4DB;" d="M26.835,339.769L26.835,339.769c0-5.84,4.734-10.575,10.575-10.575h23.708\n              c5.84,0,10.575,4.734,10.575,10.575l0,0c0,5.84-4.734,10.575-10.575,10.575H37.41C31.57,350.343,26.835,345.609,26.835,339.769z"/>\n            <path style="fill:#51B4DB;" d="M471.921,354.432c11.635,11.635,12.677,29.456,2.327,39.806\n              c-10.349,10.349-28.171,9.308-39.806-2.327s-5.48-22.26,4.87-32.609C449.661,348.952,460.286,342.797,471.921,354.432z"/>\n          </g>\n          <g transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 787.94 213.22)">\n            <rect x="322.93" y="224.59" style="fill:#E7EEEF;" width="53.759" height="90.42"/>\n            <rect x="322.93" y="224.59" style="opacity:0.15;enable-background:new    ;" width="53.759" height="90.42"/>\n          </g>\n          <polygon style="fill:#E7EEEF;" points="422.022,373.644 453.654,342.011 400.785,282.762 362.772,320.775 "/>\n          <polygon style="opacity:0.15;enable-background:new    ;" points="422.022,373.644 453.654,342.011 400.785,282.762 \n            362.772,320.775 "/>\n          <g>\n            <path style="fill:#E7EEEF;" d="M378.283,323.227l24.955-24.955c3.606-3.606,3.606-9.452,0-13.058l-4.905-4.905\n              c-3.606-3.606-9.452-3.606-13.058,0l-24.955,24.955c-3.606,3.606-3.606,9.452,0,13.058l4.905,4.905\n              C368.83,326.833,374.677,326.833,378.283,323.227z"/>\n            <path style="fill:#E7EEEF;" d="M419.901,383.621c-12.076-12.076-12.076-31.655,0-43.731s31.655-12.076,43.731,0\n              s4.606,24.185-7.47,36.261S431.977,395.697,419.901,383.621z"/>\n          </g>\n          <path style="fill:#51B4DB;" d="M485.165,339.769L485.165,339.769c0-5.84-4.734-10.575-10.575-10.575h-23.708\n            c-5.84,0-10.575,4.734-10.575,10.575l0,0c0,5.84,4.734,10.575,10.575,10.575h23.708\n            C480.431,350.343,485.165,345.609,485.165,339.769z"/>\n          <rect x="278.5" y="357.4" style="fill:#E7EEEF;" width="53.759" height="72.03"/>\n          <rect x="278.5" y="357.4" style="opacity:0.15;enable-background:new    ;" width="53.759" height="72.03"/>\n          <rect x="278.5" y="429.43" style="fill:#E7EEEF;" width="53.759" height="61.4"/>\n          <rect x="278.5" y="429.43" style="opacity:0.15;enable-background:new    ;" width="53.759" height="61.4"/>\n          <path style="fill:#E7EEEF;" d="M287.73,442.127h35.292c5.099,0,9.233-4.134,9.233-9.234v-6.937c0-5.1-4.134-9.233-9.233-9.233\n            H287.73c-5.099,0-9.233,4.134-9.233,9.233v6.937C278.497,437.993,282.631,442.127,287.73,442.127z"/>\n          <path style="fill:#51B4DB;" d="M279.844,512h51.064c5.512,0,9.775-4.834,9.085-10.303l-0.948-7.517\n            c-1.001-7.936-7.751-13.888-15.75-13.888h-35.839c-7.999,0-14.749,5.952-15.75,13.888l-0.948,7.517\n            C270.069,507.166,274.332,512,279.844,512z"/>\n          <rect x="179.74" y="357.4" style="fill:#E7EEEF;" width="53.759" height="72.03"/>\n          <rect x="179.74" y="357.4" style="opacity:0.15;enable-background:new    ;" width="53.759" height="72.03"/>\n          <rect x="179.74" y="429.43" style="fill:#E7EEEF;" width="53.759" height="61.4"/>\n          <rect x="179.74" y="429.43" style="opacity:0.15;enable-background:new    ;" width="53.759" height="61.4"/>\n          <g>\n            <path style="fill:#E7EEEF;" d="M224.27,442.127h-35.292c-5.1,0-9.233-4.134-9.233-9.234v-6.937c0-5.1,4.134-9.233,9.233-9.233\n              h35.292c5.1,0,9.233,4.134,9.233,9.233v6.937C233.503,437.993,229.369,442.127,224.27,442.127z"/>\n            <path style="fill:#E7EEEF;" d="M309.586,207.49H202.414c-23.101,0-41.827,18.727-41.827,41.827v90.8\n              c0,23.101,18.727,41.827,41.827,41.827h107.172c23.101,0,41.827-18.727,41.827-41.827v-90.8\n              C351.413,226.217,332.687,207.49,309.586,207.49z"/>\n          </g>\n          <g>\n            <path style="fill:#51B4DB;" d="M214.379,338.324c-1.196,0-2.409-0.287-3.537-0.891c-3.651-1.957-5.024-6.502-3.067-10.153\n              c2.31-4.31,3.531-9.173,3.531-14.063V295.1c0-12.317,5.069-24.355,13.909-33.027c8.698-8.533,20.062-13.142,32.047-12.932\n              c11.974-0.197,23.348,4.398,32.047,12.932c8.839,8.672,13.909,20.71,13.909,33.027v18.117c0,4.89,1.221,9.753,3.531,14.064\n              c1.956,3.651,0.583,8.197-3.068,10.153c-3.649,1.957-8.196,0.583-10.153-3.068c-3.473-6.482-5.309-13.795-5.309-21.148V295.1\n              c0-8.315-3.431-16.45-9.414-22.319c-5.835-5.724-13.456-8.787-21.398-8.64l-0.144,0.003l-0.143-0.003\n              c-7.95-0.159-15.564,2.916-21.398,8.64c-5.982,5.869-9.413,14.004-9.413,22.32v18.117c0,7.354-1.836,14.667-5.31,21.149\n              C219.644,336.889,217.055,338.324,214.379,338.324z"/>\n            <circle style="fill:#51B4DB;" cx="257.26" cy="295.1" r="15.325"/>\n            <path style="fill:#51B4DB;" d="M270.686,344.924h-26.848c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h26.848\n              c4.142,0,7.5,3.358,7.5,7.5S274.828,344.924,270.686,344.924z"/>\n            <path style="opacity:0.15;fill:#51B4DB;enable-background:new    ;" d="M220.801,340.118v-90.8c0-8.431,2.503-16.273,6.794-22.841\n              c36.959,2.675,74.204,0.131,110.616-7.644c-7.483-7.029-17.547-11.343-28.624-11.343H202.414\n              c-23.101,0-41.827,18.727-41.827,41.827v90.8c0,23.101,18.727,41.827,41.827,41.827h60.214\n              C239.527,381.945,220.801,363.218,220.801,340.118z"/>\n            <path style="fill:#51B4DB;" d="M232.156,512h-51.064c-5.512,0-9.775-4.834-9.085-10.303l0.948-7.517\n              c1.001-7.936,7.751-13.888,15.75-13.888h35.839c7.999,0,14.749,5.952,15.75,13.888l0.948,7.517\n              C241.931,507.166,237.668,512,232.156,512z"/>\n          </g>\n          <path style="fill:#E7EEEF;" d="M385.131,191.1L385.131,191.1c-83.639,29.04-174.624,29.04-258.262,0l0,0\n            c-12.855-4.463-21.473-16.578-21.473-30.186V61.47c0-13.608,8.618-25.723,21.473-30.186l0,0c83.638-29.04,174.624-29.04,258.262,0\n            l0,0c12.855,4.463,21.473,16.578,21.473,30.186v99.444C406.604,174.522,397.986,186.637,385.131,191.1z"/>\n          <g>\n            <path style="opacity:0.1;fill:#51B4DB;enable-background:new    ;" d="M168.606,191.1c-12.855-4.463-21.473-16.578-21.473-30.186\n              V61.47c0-13.608,8.618-25.723,21.473-30.186l0,0c35.153-12.205,71.605-19.26,108.263-21.205\n              c-50.561-2.684-101.514,4.371-150,21.205l0,0c-12.855,4.463-21.473,16.578-21.473,30.186v99.444\n              c0,13.608,8.618,25.723,21.473,30.186l0,0c48.485,16.834,99.439,23.889,150,21.205C240.211,210.36,203.759,203.305,168.606,191.1\n              L168.606,191.1z"/>\n            <path style="fill:#51B4DB;" d="M178.978,57.147l-11.11-30.509c-3.065-8.416,2.127-17.576,10.922-19.27l0,0\n              C204.171,2.479,230.149,0,256,0s51.829,2.479,77.21,7.367l0,0c8.795,1.694,13.987,10.854,10.922,19.27l-11.11,30.509\n              c-6.248,17.156-22.557,28.574-40.816,28.574h-72.413C201.535,85.721,185.225,74.303,178.978,57.147z"/>\n          </g>\n          <g>\n            <path style="fill:#485358;" d="M195.786,141.368c-4.142,0-7.5-3.358-7.5-7.5v-10.27c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5\n              v10.27C203.286,138.01,199.928,141.368,195.786,141.368z"/>\n            <path style="fill:#485358;" d="M316.214,141.368c-4.142,0-7.5-3.358-7.5-7.5v-10.27c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5\n              v10.27C323.714,138.01,320.356,141.368,316.214,141.368z"/>\n            <path style="fill:#485358;" d="M273.967,141.726c0,9.784-8.105,17.675-17.967,17.324c-9.394-0.334-16.703-8.34-16.703-17.739\n              v-12.193c0-2.61,2.116-4.727,4.727-4.727h25.217c2.611,0,4.727,2.116,4.727,4.727L273.967,141.726L273.967,141.726z"/>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          <g>\n          </g>\n          </svg>\n        </div> -->\n        <div class="robot"><svg version="1.1" xmlns="http://www.w3.org/2000/svg">\n          <g id="hover">\n            <ellipse id="shadow_2_" opacity="0.4" fill="#2C3332" cx="300" cy="703.375" rx="88.971" ry="30.625"></ellipse>\n          </g>\n          <g id="arms">\n            <g id="left">\n              <path id="arm_1_" fill="#BABEB7" d="M183.975,430.936c-50.27-21.595-96.437,29.654-96.132,54.383\n                c0.06,4.868,7.836,11.424,11.509,7.079c12.145-14.369,36.979-35.733,55.676-16.486\n                C156.498,477.423,189.086,433.132,183.975,430.936z"></path>\n              <g id="hand_1_">\n                <path id="shadow" fill="#BABEB7" d="M63.712,520.545l5.657-7.071c0,0-11.453-8.997-9.402-12.554\n                  c4.469-7.751,15.935-9.515,25.612-3.936c9.676,5.579,13.898,16.385,9.43,24.136c-1.736,3.013-7.363,0.091-7.363,0.091\n                  l-5.657,7.071l0.058,6.027c8.473,0.83,16.454-1.564,21.692-6.847c1.235-1.245,6.329-7.287,7.229-8.85\n                  c1.826-3.166-7.579-26.607-18.73-33.036c-8.361-4.82-31.172-5.074-31.172-5.074s-5.691,5.814-8.805,11.216\n                  c-5.77,10.006-2.253,23.271,7.678,32.486L63.712,520.545z"></path>\n                <path id="top" fill="#DCE0DA" d="M69.37,513.474c-5.443-5.817-7.202-13.631-3.746-19.625c4.469-7.751,15.935-9.514,25.612-3.935\n                  c9.676,5.578,13.899,16.385,9.43,24.135c-2.575,4.468-7.478,6.932-13.02,7.162l0.058,6.027\n                  c10.471,1.026,20.192-2.873,24.911-11.06c6.976-12.099,0.385-28.965-14.719-37.673c-15.104-8.708-33.002-5.957-39.977,6.142\n                  c-5.769,10.007-2.253,23.271,7.679,32.486L69.37,513.474z"></path>\n              </g>\n            </g>\n            <g id="right">\n              <path id="arm" fill="#DCE0DA" d="M416.025,430.936c50.27-21.595,96.437,29.654,96.131,54.383\n                c-0.059,4.868-7.836,11.424-11.509,7.079c-12.145-14.369-36.979-35.733-55.676-16.486\n                C443.502,477.423,410.914,433.132,416.025,430.936z"></path>\n              <g id="hand">\n                <path id="shadow_1_" fill="#BABEB7" d="M536.287,520.545l-5.656-7.071c0,0,11.453-8.997,9.402-12.554\n                  c-4.469-7.751-15.936-9.515-25.612-3.936s-13.898,16.385-9.43,24.136c1.736,3.013,7.362,0.091,7.362,0.091l5.657,7.071\n                  l-0.058,6.027c-8.474,0.83-16.455-1.564-21.692-6.847c-1.235-1.245-6.329-7.287-7.229-8.85\n                  c-1.826-3.166,7.578-26.607,18.73-33.036c8.361-4.82,31.172-5.074,31.172-5.074s5.691,5.814,8.805,11.216\n                  c5.77,10.006,2.253,23.271-7.678,32.486L536.287,520.545z"></path>\n                <path id="top_1_" fill="#DCE0DA" d="M530.631,513.474c5.443-5.817,7.201-13.631,3.745-19.625\n                  c-4.469-7.751-15.935-9.514-25.612-3.935c-9.676,5.578-13.898,16.385-9.43,24.135c2.575,4.468,7.479,6.932,13.02,7.162\n                  l-0.058,6.027c-10.472,1.026-20.192-2.873-24.911-11.06c-6.975-12.099-0.385-28.965,14.72-37.673s33.003-5.957,39.978,6.142\n                  c5.769,10.007,2.252,23.271-7.68,32.486L530.631,513.474z"></path>\n              </g>\n            </g>\n          </g>\n          <g id="body">\n            <g id="chassie">\n              <g id="base">\n                <path fill="#DCE0DA" d="M137.424,525.622c0-47.887,60.669-219.342,162.576-219.342c101.907,0,162.576,171.854,162.576,219.342\n                  c0,47.489-137.88,56.438-162.576,56.438C275.303,582.06,137.424,573.511,137.424,525.622z"></path>\n              </g>\n              <g id="highlight">\n                <defs>\n                  <path id="SVGID_1_" d="M137.424,525.622c0-47.887,60.669-219.342,162.576-219.342c101.907,0,162.576,171.854,162.576,219.342\n                    c0,47.489-137.88,56.438-162.576,56.438C275.303,582.06,137.424,573.511,137.424,525.622z"></path>\n                </defs>\n                <clipPath id="SVGID_2_">\n                  <use xlink:href="#SVGID_1_" overflow="visible"></use>\n                </clipPath>\n                <path clip-path="url(#SVGID_2_)" fill="#BABEB7" d="M455.667,419c0,0-38.299,61.503-156.983,61.503\n                  c-67.685,0-86.351,14.831-96.684,39.164S203.368,588,298.684,588s1.816,21.923,1.816,21.923s-198.833-42.589-198.833-43.589\n                  s54.333-215,54.333-215L455.667,419z"></path>\n              </g>\n            </g>\n            <g id="progress-indicator">\n              <g id="divet">\n                <path id="highlight-bottom" fill="#EAECE8" d="M425.182,524.775l-4.682-21.211c0,0-48.18,19.563-120.34,19.563\n                  s-120.82-19.079-120.82-19.079l-4.542,20.636c0,0,37.523,20.052,125.363,20.052S425.182,524.775,425.182,524.775z"></path>\n                <path id="divet-bottom" fill="#4C4C4C" d="M420.682,521.823l-4.514-16.654c0,0-46.447,17.959-116.014,17.959\n                  c-69.566,0-116.477-17.551-116.477-17.551l-4.379,16.159c0,0,36.174,18.597,120.856,18.597\n                  C384.837,540.333,420.682,521.823,420.682,521.823z"></path>\n                <polygon id="shadow-right_1_" fill="#BABEB7" points="416.168,505.169 420.5,503.564 425.182,524.775 420.682,521.823 			"></polygon>\n                <polygon id="shadow-left" fill="#8F918D" points="183.677,505.577 179.34,504.049 174.797,524.685 179.297,521.736 			"></polygon>\n                <path id="shadow-bottom" fill="#BABEB7" d="M204.738,530.305l-5.786,2.959c0,0-8.125-2.072-14.702-4.556\n                  s-9.453-4.023-9.453-4.023l4.5-2.948c0,0,4.039,2.192,11.313,4.463S204.738,530.305,204.738,530.305z"></path>\n              </g>\n              <g id="completed">\n                <path id="blue" fill="#84D3E8" d="M300.154,523.128c-69.566,0-116.477-17.551-116.477-17.551l-4.379,16.159\n                  c0,0,36.174,18.597,120.856,18.597c28.812,0,51.965-2.144,69.983-4.971l-1.808-18.073\n                  C349.822,520.518,326.67,523.128,300.154,523.128z"></path>\n                <path id="blue-shadow" fill="#6DADBC" d="M208.568,512.712c-15.682-3.741-24.93-7.135-24.93-7.135l-4.437,16.159\n                  c0,0,8.037,4.175,25.537,8.568C205.625,524.125,206,520.875,208.568,512.712z"></path>\n              </g>\n            </g>\n          </g>\n        \n          <g id="head">\n            <g id="face">\n              <path id="screen-shadow" fill="#9AB2B0" d="M418.268,235.276C377.932,233.144,327.52,232,300.003,232\n                c-27.517,0-77.766,1.144-118.102,3.276c-34.071,1.801-41.222,17.035-41.222,69.742s3.15,88.311,24.65,107.819\n                c35.831,32.511,101.258,47.829,134.673,47.829c33.832,0,99.06-15.318,134.891-47.829c21.5-19.508,24.758-55.112,24.758-107.819\n                S452.338,237.078,418.268,235.276z"></path>\n              <path id="screen" fill="#A4BCB9" d="M164.381,353.965c0,55.225,107.043,76.693,135.619,76.693\n                c28.576,0,135.618-21.469,135.618-76.693c0-100.027-60.717-123.293-135.618-123.293\n                C225.101,230.671,164.381,253.938,164.381,353.965z"></path>\n              <path id="case_x5F_shadow" fill="#EAECE8" d="M300,239c27.54,0,78.739,1.16,119.383,3.309c15.837,0.837,18.06,4.715,19.388,7.032\n                c5.026,8.771,5.671,29.167,5.671,45.955c0,49.954-0.156,81.738-16.287,96.374c-31.639,28.708-96.014,44.997-128.154,44.997\n                c-32.048,0-95.295-16.289-126.934-44.997c-16.039-14.552-17.176-46.356-17.176-96.374c0-16.825,0.638-37.258,5.614-46\n                c1.395-2.45,3.503-6.153,19.279-6.987C221.426,240.16,272.541,239,300,239 M300,210.5c-80.5,0-160.11,7.167-160.11,60.795\n                S141.095,385.151,162.971,405C199.429,438.08,266,453.666,300,453.666c34.424,0,100.792-15.586,137.25-48.666\n                c21.876-19.849,23.191-80.076,23.191-133.705S380.5,210.5,300,210.5z"></path>\n              <path id="case" fill="#DCE0DA" d="M300,248c27.54,0,78.739,1.16,119.383,3.309c15.837,0.837,18.06,4.715,19.388,7.032\n                c5.026,8.771,5.671,29.167,5.671,45.955c0,49.954-3.156,81.738-19.287,96.374c-31.639,28.708-93.014,43.997-125.154,43.997\n                c-32.048,0-93.295-15.289-124.934-43.997c-16.039-14.552-19.176-46.356-19.176-96.374c0-16.825,0.638-37.258,5.614-46\n                c1.395-2.45,3.503-6.153,19.279-6.987C221.426,249.16,272.541,248,300,248 M300,230c-27.999,0-79.126,1.164-120.167,3.333\n                c-34.667,1.833-41.943,17.333-41.943,70.962s3.205,89.856,25.081,109.705C199.429,447.08,266,462.666,300,462.666\n                c34.424,0,100.792-15.586,137.25-48.666c21.876-19.849,25.191-56.076,25.191-109.705s-7.441-69.129-42.108-70.962\n                C379.292,231.164,327.998,230,300,230L300,230z"></path>\n            </g>\n            <g id="eyes">\n              <ellipse id="left_1_" fill="#2C3332" cx="231" cy="316.667" rx="6.333" ry="17"></ellipse>\n              <ellipse id="right_1_" fill="#2C3332" cx="369" cy="316.667" rx="6.334" ry="17"></ellipse>\n            </g>\n            <g id="indicators">\n              <path id="mount" fill="#DCE0DA" d="M354.333,220.333c0-29.916-24.252-54.167-54.167-54.167c-29.916,0-54.167,24.251-54.167,54.167\n                c0,4.667,24.251,4.667,54.167,4.667C330.081,225,354.333,225,354.333,220.333z"></path>\n              <g id="leds">\n                <circle id="yellow" fill="#F0C419" cx="300.418" cy="207" r="8.084"></circle>\n                <circle id="red" fill="#E64C3C" cx="324.67" cy="206" r="8.084"></circle>\n                <circle id="green" fill="#4EBA64" cx="275.33" cy="206" r="8.083"></circle>\n              </g>\n            </g>\n          </g>\n        </svg></div>\n        \n      </ion-col>\n    </ion-row>\n  </ion-slide>\n \n  <ion-slide>\n      <a class="skip" (click)="next()"> Skip</a>\n      <div [ngClass]="{\'hidden\': isHidden}" class="fadeInLeft animated">\n        <p [ngClass]="{\'hidden\': isHidden}" class="fadeInLeft animated" padding>Just<strong> Login</strong> For The Best Experience Then We Are Ready To GO !</p>\n        <div class="login" >\n          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n            <path d="M442.899,177.639c-0.649,0-1.31-0.06-1.96-0.189c-0.63-0.131-1.26-0.32-1.87-0.57c-0.6-0.25-1.18-0.561-1.72-0.92\n              c-0.55-0.37-1.06-0.78-1.52-1.25c-0.46-0.46-0.88-0.97-1.25-1.521c-0.351-0.54-0.66-1.12-0.91-1.72c-0.25-0.61-0.45-1.24-0.57-1.87\n              c-0.13-0.649-0.2-1.31-0.2-1.96c0-0.649,0.07-1.31,0.2-1.95c0.12-0.64,0.32-1.27,0.57-1.87c0.25-0.609,0.56-1.189,0.91-1.729\n              c0.37-0.55,0.79-1.06,1.25-1.521c0.46-0.46,0.97-0.88,1.52-1.239c0.54-0.36,1.12-0.67,1.72-0.92c0.61-0.25,1.24-0.44,1.87-0.57\n              c1.29-0.26,2.62-0.26,3.91,0c0.641,0.13,1.271,0.32,1.87,0.57c0.61,0.25,1.19,0.56,1.73,0.92c0.55,0.359,1.06,0.779,1.52,1.239\n              c0.46,0.461,0.88,0.971,1.24,1.521c0.359,0.54,0.67,1.12,0.92,1.729c0.25,0.601,0.439,1.23,0.57,1.87\n              c0.13,0.641,0.199,1.301,0.199,1.95c0,0.65-0.069,1.311-0.199,1.96c-0.131,0.63-0.32,1.26-0.57,1.87c-0.25,0.6-0.561,1.18-0.92,1.72\n              c-0.36,0.551-0.78,1.061-1.24,1.521c-0.46,0.47-0.97,0.88-1.52,1.25c-0.54,0.359-1.12,0.67-1.73,0.92\n              c-0.6,0.25-1.229,0.439-1.87,0.57C444.21,177.579,443.55,177.639,442.899,177.639z"/>\n            <path style="fill:#0088BB;" d="M10,57.516v83.01c0,14.977,12.141,27.118,27.118,27.118h136.42V30.398H37.118\n              C22.141,30.398,10,42.539,10,57.516z"/>\n            <path style="fill:#E3E3E3;" d="M474.684,30.398H173.538v107.234h301.145c14.977,0,27.118-12.141,27.118-27.118V57.516\n              C501.802,42.539,489.66,30.398,474.684,30.398z"/>\n            <circle style="fill:#FFDE85;" cx="91.77" cy="83.36" r="37.18"/>\n            <path style="fill:#F27187;" d="M134.455,167.643H49.084v-30.065c0-9.412,7.63-17.042,17.042-17.042h51.287\n              c9.412,0,17.042,7.63,17.042,17.042L134.455,167.643L134.455,167.643z"/>\n            <circle class="circle1"style="fill:#54E3E3;" cx="229.63" cy="84.02" r="21.23"/>\n            <path class="circle1" d="M229.627,115.242c-17.22,0-31.229-14.009-31.229-31.228s14.009-31.228,31.229-31.228c17.219,0,31.228,14.009,31.228,31.228\n              S246.846,115.242,229.627,115.242z M229.627,72.787c-6.191,0-11.229,5.037-11.229,11.228s5.037,11.228,11.229,11.228\n              c6.19,0,11.228-5.037,11.228-11.228S235.817,72.787,229.627,72.787z"/>\n            <circle class="circle2"style="fill:#54E3E3;" cx="301.66" cy="84.02" r="21.23"/>\n            <path class="circle2" d="M301.655,115.242c-17.219,0-31.228-14.009-31.228-31.228s14.009-31.228,31.228-31.228s31.228,14.009,31.228,31.228\n              S318.874,115.242,301.655,115.242z M301.655,72.787c-6.19,0-11.228,5.037-11.228,11.228s5.037,11.228,11.228,11.228\n              s11.228-5.037,11.228-11.228S307.846,72.787,301.655,72.787z"/>\n            <circle class="circle3"style="fill:#54E3E3;" cx="373.68" cy="84.02" r="21.23"/>\n            <path class="circle3"d="M373.685,115.242c-17.219,0-31.228-14.009-31.228-31.228s14.009-31.228,31.228-31.228s31.228,14.009,31.228,31.228\n              S390.903,115.242,373.685,115.242z M373.685,72.787c-6.19,0-11.228,5.037-11.228,11.228s5.037,11.228,11.228,11.228\n              s11.228-5.037,11.228-11.228S379.875,72.787,373.685,72.787z"/>\n            <circle class="circle4"style="fill:#54E3E3;" cx="445.71" cy="84.02" r="21.23"/>\n            <path class="circle4"d="M445.714,115.242c-17.22,0-31.229-14.009-31.229-31.228s14.009-31.228,31.229-31.228c17.219,0,31.228,14.009,31.228,31.228\n              S462.933,115.242,445.714,115.242z M445.714,72.787c-6.191,0-11.229,5.037-11.229,11.228s5.037,11.228,11.229,11.228\n              c6.19,0,11.228-5.037,11.228-11.228S451.904,72.787,445.714,72.787z"/>\n            <path d="M488.649,350.79c-0.649,0-1.31-0.07-1.949-0.2c-0.641-0.13-1.271-0.32-1.87-0.57c-0.601-0.25-1.19-0.56-1.73-0.92\n              c-0.54-0.359-1.06-0.78-1.52-1.24s-0.88-0.97-1.24-1.52c-0.36-0.54-0.67-1.12-0.92-1.73c-0.25-0.6-0.44-1.229-0.57-1.869\n              c-0.13-0.641-0.2-1.301-0.2-1.95c0-0.65,0.07-1.311,0.2-1.96c0.13-0.63,0.32-1.261,0.57-1.87c0.25-0.601,0.56-1.18,0.92-1.72\n              c0.36-0.551,0.78-1.061,1.24-1.521s0.979-0.88,1.52-1.25c0.55-0.36,1.13-0.67,1.73-0.92s1.229-0.44,1.87-0.57\n              c1.29-0.26,2.619-0.26,3.909,0c0.641,0.13,1.271,0.32,1.87,0.57c0.601,0.25,1.181,0.56,1.73,0.92c0.54,0.37,1.05,0.79,1.52,1.25\n              c0.46,0.46,0.87,0.97,1.24,1.521c0.36,0.54,0.67,1.119,0.92,1.72c0.25,0.609,0.44,1.24,0.57,1.87c0.13,0.649,0.189,1.31,0.189,1.96\n              c0,0.649-0.06,1.31-0.189,1.95c-0.13,0.64-0.32,1.27-0.57,1.869c-0.25,0.61-0.56,1.19-0.92,1.73c-0.37,0.55-0.78,1.06-1.24,1.52\n              c-0.47,0.46-0.979,0.881-1.52,1.24c-0.55,0.36-1.13,0.67-1.73,0.92s-1.229,0.44-1.87,0.57\n              C489.96,350.72,489.31,350.79,488.649,350.79z"/>\n            <path style="fill:#0088BB;" d="M10,230.66v83.01c0,14.977,12.141,27.118,27.118,27.118h136.42V203.542H37.118\n              C22.141,203.542,10,215.682,10,230.66z"/>\n            <path style="fill:#E3E3E3;" d="M474.684,203.542H173.538v107.234h301.145c14.977,0,27.118-12.141,27.118-27.118V230.66\n              C501.802,215.682,489.66,203.542,474.684,203.542z"/>\n            <rect x="51.31" y="274.85" style="fill:#F27187;" width="78.915" height="65.942"/>\n            <path d="M90.769,314.604c-5.522,0-10-4.478-10-10v-5.809c0-5.522,4.478-10,10-10s10,4.478,10,10v5.809\n              C100.769,310.126,96.291,314.604,90.769,314.604z"/>\n            <circle class="circle5"style="fill:#54E3E3;" cx="229.63" cy="257.16" r="21.23"/>\n            <path class="circle5" d="M229.627,288.387c-17.22,0-31.229-14.009-31.229-31.229c0-17.219,14.009-31.228,31.229-31.228\n              c17.219,0,31.228,14.009,31.228,31.228C260.854,274.378,246.846,288.387,229.627,288.387z M229.627,245.93\n              c-6.191,0-11.229,5.037-11.229,11.228s5.037,11.229,11.229,11.229c6.19,0,11.228-5.037,11.228-11.229\n              C240.854,250.967,235.817,245.93,229.627,245.93z"/>\n            <circle class="circle6"style="fill:#54E3E3;" cx="301.66" cy="257.16" r="21.23"/>\n            <path class="circle6"d="M301.655,288.387c-17.219,0-31.228-14.009-31.228-31.229c0-17.219,14.009-31.228,31.228-31.228s31.228,14.009,31.228,31.228\n              C332.883,274.378,318.874,288.387,301.655,288.387z M301.655,245.93c-6.19,0-11.228,5.037-11.228,11.228s5.037,11.229,11.228,11.229\n              s11.228-5.037,11.228-11.229C312.883,250.967,307.846,245.93,301.655,245.93z"/>\n            <circle class="circle7"style="fill:#54E3E3;" cx="373.68" cy="257.16" r="21.23"/>\n            <path class="circle7"d="M373.685,288.387c-17.219,0-31.228-14.009-31.228-31.229c0-17.219,14.009-31.228,31.228-31.228s31.228,14.009,31.228,31.228\n              C404.912,274.378,390.903,288.387,373.685,288.387z M373.685,245.93c-6.19,0-11.228,5.037-11.228,11.228s5.037,11.229,11.228,11.229\n              s11.228-5.037,11.228-11.229C384.912,250.967,379.875,245.93,373.685,245.93z"/>\n            <rect class="rect"x="315.59" y="377.29" style="fill:#FFDE85;" width="186.41" height="104.31"/>\n            <path d="M404.884,177.643c5.522,0,10-4.478,10-10s-4.478-10-10-10H183.538v-10.012h291.146c20.467,0,37.118-16.651,37.118-37.118\n              V57.516c0-20.467-16.651-37.118-37.118-37.118H37.118l0,0C16.651,20.397,0,37.049,0,57.516v83.01\n              c0,20.467,16.651,37.118,37.118,37.118H404.884 M91.77,56.176c14.987,0,27.181,12.193,27.181,27.181s-12.193,27.18-27.181,27.18\n              s-27.181-12.192-27.181-27.18S76.782,56.176,91.77,56.176z M59.084,157.643L59.084,157.643v-20.065c0-3.883,3.159-7.042,7.042-7.042\n              h51.287c3.883,0,7.042,3.159,7.042,7.042v20.065L59.084,157.643L59.084,157.643z M491.802,57.516v52.998\n              c0,9.439-7.679,17.118-17.118,17.118H183.538V40.397h291.146C484.123,40.397,491.802,48.076,491.802,57.516z M163.538,157.643\n              L163.538,157.643h-19.083v-20.065c0-10.962-6.56-20.414-15.956-24.656c6.53-8.096,10.451-18.38,10.451-29.566\n              c0-19.075-11.385-35.53-27.711-42.959h52.299V157.643z M20,57.516c0-9.439,7.679-17.118,17.118-17.118H72.3\n              c-16.326,7.429-27.711,23.884-27.711,42.959c0,11.187,3.921,21.47,10.451,29.566c-9.397,4.242-15.956,13.694-15.956,24.656v20.065\n              h-1.966c-9.439,0-17.118-7.679-17.118-17.118C20,140.525,20,57.516,20,57.516z"/>\n            <path d="M450.638,350.788c5.522,0,10-4.478,10-10s-4.478-10-10-10h-267.1v-10.013h291.146c20.467,0,37.118-16.651,37.118-37.118\n              v-52.998c0-20.467-16.651-37.117-37.118-37.117l0,0H37.118C16.651,193.542,0,210.191,0,230.658v83.011\n              c0,20.467,16.651,37.118,37.118,37.118H450.638 M491.802,230.658v52.998c0,9.439-7.679,17.118-17.118,17.118H183.538v-87.233\n              h291.146C484.123,213.542,491.802,221.22,491.802,230.658z M120.227,264.846H61.312v-3.981c0-16.242,13.215-29.457,29.457-29.457\n              c16.243,0,29.458,13.215,29.458,29.457V264.846z M20,313.67v-83.011c0-9.438,7.679-17.117,17.118-17.117h39.285\n              c-20.285,6.17-35.091,25.047-35.091,47.322l0,0l0,0v69.924h-4.193C27.679,330.788,20,323.109,20,313.67z M120.227,330.788H61.312\n              v-45.942l0,0h58.915l0,0L120.227,330.788L120.227,330.788z M140.227,330.788v-69.924l0,0l0,0c0-22.275-14.806-41.152-35.092-47.322\n              h58.403v117.246l0,0H140.227z"/>\n            <path class="rect"d="M502,367.293H315.592c-5.522,0-10,4.478-10,10v104.31c0,5.522,4.478,10,10,10H502c5.522,0,10-4.478,10-10v-104.31\n              C512,371.771,507.522,367.293,502,367.293z M492,471.603H325.592v-84.31H492V471.603z"/>\n            <path class="arrow"d="M367.925,439.448h49.557l-5.529,3.803c-4.551,3.13-5.702,9.356-2.572,13.906c1.939,2.819,5.066,4.334,8.248,4.334\n              c1.953,0,3.927-0.571,5.658-1.762l32.046-22.042c2.713-1.866,4.333-4.947,4.333-8.239s-1.62-6.373-4.333-8.239l-32.046-22.043\n              c-4.55-3.128-10.774-1.979-13.906,2.572c-3.13,4.55-1.979,10.776,2.572,13.906l5.53,3.804h-49.558c-5.522,0-10,4.478-10,10\n              S362.402,439.448,367.925,439.448z"/>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n            <g>\n            </g>\n          </svg>\n        </div>\n     </div>\n  </ion-slide>\n \n  <ion-slide class="appImg" >\n    <div [ngClass]="{\'hidden\': micIsHidden}" class="fadeInLeft animated">\n      <p [ngClass]="{\'hidden\': micIsHidden}" class="fadeInLeft animated">Hold The <strong>Microphone</strong> Icon And Say Something Cool .</p>\n      <div class="input">\n          <div class="mic"  >\n            <svg width="250" height="350" xmlns="http://www.w3.org/2000/svg">\n\n              <g>\n               <title>background</title>\n               <rect fill="none" id="canvas_background" height="352" width="252" y="-1" x="-1"/>\n              </g>\n              <g>\n               <title>Layer 1</title>\n               <g id="svg_1">\n                <path id="svg_2" fill="#71D2E2" d="m73.199997,149.837067l0,-33.09211c0,-25.305717 19.822235,-45.744957 44.364029,-45.744957s44.364014,20.43924 44.364014,45.744957l0,0l0,33.09211l-88.728043,0z"/>\n                <path id="svg_3" fill="#71D2E2" d="m117.564026,249.600006c-24.541794,0 -44.364029,-20.43924 -44.364029,-45.744949l0,-28.71228l89.199997,0l0,28.71228c-0.471954,25.30571 -20.294174,45.744949 -44.835968,45.744949z"/>\n               </g>\n               <rect id="svg_4" fill="#FC8943" height="24.600003" width="91.199998" y="147.600003" x="74.199999"/>\n               <g id="svg_5">\n                <rect id="svg_6" fill="#FFC46A" height="15.866669" width="84.399999" y="308.733333" x="76.199999"/>\n                <rect id="svg_7" fill="#FFC46A" height="16.333336" width="48.730952" y="292.399997" x="93.783332"/>\n               </g>\n               <path id="svg_8" fill="#061935" d="m181.402863,153.880417l-12.472595,0l0,-36.21067c0,-26.585052 -22.546616,-47.669746 -49.890381,-47.669746s-50.370117,21.084694 -50.370117,47.669746l0,0l0,36.21067l-12.472595,0c-2.878296,0 -4.79715,1.833466 -4.79715,4.583633l0,44.002853c0,33.460495 27.823486,60.503922 62.362991,62.337357l0,22.001465l-13.911743,0c-5.276871,0 -9.594315,4.125244 -9.594315,9.167236l0,6.875458l-7.195724,0c-5.276871,0 -9.594299,4.125244 -9.594299,9.167236l0,6.417084c0,5.042023 4.317429,9.167267 9.594299,9.167267l70.997849,0c5.276886,0 9.594299,-4.125244 9.594299,-9.167267l0,-6.417084c0,-5.041992 -4.317413,-9.167236 -9.594299,-9.167236l-7.195724,0l0,-6.875458c0,-5.041992 -4.317429,-9.167236 -9.594299,-9.167236l-13.911743,0l0,-22.001465c34.539505,-1.833435 62.362991,-28.876862 62.842697,-62.337357l0,-44.002853c0,-2.291809 -2.39856,-4.583633 -4.79715,-4.583633l0,0zm-103.138794,-36.21067c0,-21.54306 18.229187,-38.502487 40.296082,-38.502487s40.296051,17.417793 40.296051,38.502487l0,26.58506l-80.592133,0l0,-26.58506zm0,35.752312l81.071869,0l0,14.667618l-81.071869,0l0,-14.667618zm0,23.376511l81.071869,0l0,22.459793c0,21.543045 -18.229172,38.502487 -40.296082,38.502487s-40.296082,-17.417801 -40.296082,-38.502487l0,-22.459778l-0.479706,0l0,-0.000015zm75.795013,135.217087l0,6.417053l-70.997864,0l0,-6.417053l70.997864,0zm-16.790039,-16.042694l0,6.875458l-37.417786,0l0,-6.875458l37.417786,0zm39.33667,-93.506058c-0.479706,30.251953 -26.864059,54.086838 -58.045563,53.628464c-31.181488,0.458374 -57.086121,-23.376511 -58.045547,-53.170105l0,-39.41922l7.675446,0l0,36.210678c0,26.585052 22.546616,47.669739 49.890396,47.669739c27.823471,0 49.890381,-21.543045 49.890381,-47.669739l0,-36.210678l7.675446,0l0.959442,38.960861z"/>\n               <g id="svg_9"/>\n               <g id="svg_10"/>\n               <g id="svg_11"/>\n               <g id="svg_12"/>\n               <g id="svg_13"/>\n               <g id="svg_14"/>\n               <g id="svg_15"/>\n               <g id="svg_16"/>\n               <g id="svg_17"/>\n               <g id="svg_18"/>\n               <g id="svg_19"/>\n               <g id="svg_20"/>\n               <g id="svg_21"/>\n               <g id="svg_22"/>\n               <g id="svg_23"/>\n               <!-- <line class="bar1" transform="rotate(31.012, 112.5, 34)" stroke-linecap="null" stroke-linejoin="null" id="svg_27" y2="17.499999" x2="99.000001" y1="50.5" x1="126" stroke-width="10" stroke="#061935" fill="none">\n                 \n                 <animate attributeName="x1"  from="126"  to="130" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="x2"  from="99.000001"  to="103.000001" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="y1"  from="50.5"  to="54.5" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="y2"  from="17.499999"  to="21.499999" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                </line>\n                \n                \n                \n                \n               <line class="bar2" transform="rotate(-20.5074, 47.5, 78)" stroke-linecap="null" stroke-linejoin="null" id="svg_28" y2="61.499999" x2="34.000001" y1="94.5" x1="61" stroke-width="10" stroke="#061935" fill="none">\n                 <animate attributeName="x1"  from="61"  to="65" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="x2"  from="34.000001"  to="38.000001" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="y1"  from="94.5"  to="98.5" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="y2"  from="61.499999"  to="65.499999" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                </line>\n               <line class="bar3" stroke-linecap="null" stroke-linejoin="null" id="svg_29" y2="30.499999" x2="64.000001" y1="63.5" x1="91" stroke-width="10" stroke="#061935" fill="none">\n                 <animate attributeName="x1"  from="91"  to="95" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="x2"  from="64.000001"  to="68.000001" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="y1"  from="63.5"  to="67.5" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                 <animate attributeName="y2"  from="30.499999"  to="34.499999" \n                         begin="0s" dur="2s"repeatCount="indefinite" />\n                </line> -->\n              </g>\n            </svg>\n            \n          </div>\n      </div>\n    </div>\n      <a class="skip"(click)="next()">Continue</a>\n  </ion-slide>\n   \n  \n  \n  \n \n \n</ion-slides>'/*ion-inline-end:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_signup__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatroom_chatroom__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let LoginPage = class LoginPage {
    constructor(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.username = "";
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    goSignup() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__signup_signup__["a" /* SignupPage */]);
    }
    goToChat() {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatroom_chatroom__["a" /* ChatroomPage */]);
    }
    createPost(formVal) {
        // let post={
        //   username:this.username,
        //   password:this.password
        // }
        //this.http.post("https://jsonplaceholder.typicode.com/users",JSON.stringify(formVal.value))
        this.http.post("http://127.0.0.1:8000/apilogin/", JSON.stringify(formVal.value))
            .subscribe(response => {
            console.log(response);
            console.log("valid account");
            console.log(JSON.stringify(formVal.value));
            this.goToChat();
        });
    }
};
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content  padding class="loginPage">\n  <ion-grid>\n    <!--<form #f="ngForm" (ngSubmit)="createPost(f)" >-->\n    <form #f="ngForm"  >\n\n\n      <ion-row class="email" >\n        <ion-col col-12>\n        <input type="text" ngModel name="un" #un="ngModel"\n        placeholder="Username" [(ngModel)]="username"\n        [class.invalid]="un.touched&&!un.valid" required>\n        <ion-icon name="ios-at-outline" [class.invalid]="un.touched&&!un.valid"> </ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row >\n        <ion-col col-12 class="password">\n        <input type="password" ngModel name="psw" #psw="ngModel" \n        placeholder="Password" [(ngModel)]="password"\n        [class.invalid]="psw.touched&&!psw.valid" required>\n        <ion-icon name="ios-eye-outline" [class.invalid]="psw.touched&&!psw.valid"> </ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <!--<button class="loginButton"ion-button ion-button round outline color="light" \n      [disabled]="!f.valid" >Login</button>-->\n      <button class="loginButton"ion-button ion-button round outline color="light" \n      [disabled]="!f.valid" (click)="goToChat()" >Login</button>\n   \n    </form>\n  </ion-grid>\n  \n    <a tappable (click)="goSignup()" >I don\'t have an account</a>\n    \n  \n</ion-content>\n'/*ion-inline-end:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let SignupPage = class SignupPage {
    constructor(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }
    goLogin() {
        this.navCtrl.pop();
    }
    createPost() {
        let post = {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            password: this.password,
            contrast: this.contrast
        };
        // this.http.post("https://jsonplaceholder.typicode.com/users",JSON.stringify(post))
        this.http.post("http://127.0.0.1:8000/data", JSON.stringify(post))
            .subscribe(response => {
            console.log(this.contrast);
            console.log(response);
        });
    }
};
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding class="signup">\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div class="svg">\n          \n            </div>\n          </ion-col>\n        </ion-row>\n        <form #f="ngForm">\n\n          <ion-row class="fullName" >\n            <ion-col col-12>\n            <input type="text" placeholder="Firstname" [(ngModel)]="firstname"\n            ngModel name="fn" #fn="ngModel" required [class.invalid]="fn.touched&&!fn.valid">\n            <ion-icon name="ios-person-outline" [class.invalid]="fn.touched&&!fn.valid"> </ion-icon>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class="email" >\n            <ion-col col-12>\n            <input type="text" placeholder="lastname" [(ngModel)]="lastname"\n            ngModel name="ln" #ln="ngModel" required [class.invalid]="ln.touched&&!ln.valid">\n            <ion-icon name="ios-person-outline" [class.invalid]="ln.touched&&!ln.valid"> </ion-icon>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class="email" >\n            <ion-col col-12>\n            <input type="text" placeholder="Username" [(ngModel)]="username"\n            ngModel name="un" #un="ngModel" required [class.invalid]="un.touched&&!un.valid">\n            <ion-icon name="ios-at-outline" [class.invalid]="un.touched&&!un.valid"> </ion-icon>\n            </ion-col>\n          </ion-row>\n\n          <ion-row >\n            <ion-col col-12 class="password">\n            <input type="password" placeholder="Password" [(ngModel)]="password"\n            ngModel name="pwd" #pwd="ngModel" required [class.invalid]="pwd.touched&&!pwd.valid">\n            <ion-icon name="ios-eye-outline" [class.invalid]="pwd.touched&&!pwd.valid"> </ion-icon>\n            </ion-col>\n          </ion-row>\n\n          <ion-range min="1" max="4" pin="true" [(ngModel)]="contrast" name="grade">\n              <ion-icon class="ionRangeEdit" range-left ios="ios-school" md="md-school"><span class="spanEdit">Grade</span></ion-icon>\n          </ion-range>\n            <button class="loginButton"ion-button round outline color="light"\n            (click)="createPost()" [disabled]="!f.valid" >Signup</button>\n        </form>\n      </ion-grid>\n    \n    <a tappable (click)="goLogin()">I have an account</a>\n    \n    \n</ion-content>\n'/*ion-inline-end:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chatroom/chatroom.module": [
		281,
		3
	],
	"../pages/intro/intro.module": [
		282,
		2
	],
	"../pages/login/login.module": [
		283,
		1
	],
	"../pages/signup/signup.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_speech_recognition__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chatroom_chatroom__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chatroom_chatroom__["a" /* ChatroomPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/chatroom/chatroom.module#ChatroomPageModule', name: 'ChatroomPage', segment: 'chatroom', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['sqlite', 'websql', 'indexeddb']
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chatroom_chatroom__["a" /* ChatroomPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_speech_recognition__["a" /* SpeechRecognition */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_intro_intro__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MyApp = class MyApp {
    constructor(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
};
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hiesenberg/Desktop/Ionic/Floki/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/hiesenberg/Desktop/Ionic/Floki/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomePage = class HomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
};
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/home/home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/logo.svg">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>'/*ion-inline-end:"/home/hiesenberg/Desktop/Ionic/Floki/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map