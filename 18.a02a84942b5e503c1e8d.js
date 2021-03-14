(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{XUkN:function(e,t,n){"use strict";n.r(t),n.d(t,"SignUpModule",function(){return j});var i=n("ofXK"),r=n("tyNb"),a=n("3Pt+"),o=n("qFsG"),s=n("kmnG"),l=n("Wp6s"),d=n("bSwM"),b=n("dNgK"),c=n("/1cH"),p=n("fXoL"),m=n("9Q/d"),u=n("xCwu"),g=n("t8So"),f=n("JX91"),h=n("lJxs"),y=n("3E0/"),S=n("TcFV"),T=n("iadO"),v=n("d3UM"),C=n("FKr1"),w=n("NFeN");function M(e,t){if(1&e&&(p.Tb(0,"mat-error",46),p.Ec(1),p.Sb()),2&e){const e=p.ec();p.Cb(1),p.Fc(null==e.displayMessage?null:e.displayMessage.firstName)}}function x(e,t){if(1&e&&(p.Tb(0,"mat-error",46),p.Ec(1),p.Sb()),2&e){const e=p.ec();p.Cb(1),p.Fc(null==e.displayMessage?null:e.displayMessage.lastName)}}function O(e,t){if(1&e&&(p.Tb(0,"mat-error",46),p.Ec(1),p.Sb()),2&e){const e=p.ec();p.Cb(1),p.Fc(null==e.displayMessage?null:e.displayMessage.userName)}}function _(e,t){1&e&&(p.Tb(0,"p",47),p.Ec(1," Username Not available "),p.Sb())}function N(e,t){if(1&e&&(p.Tb(0,"mat-error",46),p.Ec(1),p.Sb()),2&e){const e=p.ec();p.Cb(1),p.Fc(null==e.displayMessage?null:e.displayMessage.address)}}function P(e,t){if(1&e&&(p.Tb(0,"mat-error",46),p.Ec(1),p.Sb()),2&e){const e=p.ec();p.Cb(1),p.Fc(null==e.displayMessage?null:e.displayMessage.gender)}}function E(e,t){if(1&e&&(p.Tb(0,"mat-error",46),p.Ec(1),p.Sb()),2&e){const e=p.ec();p.Cb(1),p.Fc(null==e.displayMessage?null:e.displayMessage.email)}}function k(e,t){if(1&e&&(p.Tb(0,"mat-error",46),p.Ec(1),p.Sb()),2&e){const e=p.ec();p.Cb(1),p.Fc(null==e.displayMessage?null:e.displayMessage.password)}}function q(e,t){if(1&e&&(p.Tb(0,"mat-error",46),p.Ec(1),p.Sb()),2&e){const e=p.ec();p.Cb(1),p.Fc(null==e.displayMessage?null:e.displayMessage.confirmPassword)}}function I(e,t){1&e&&(p.Tb(0,"p",47),p.Ec(1," Password doesn't match "),p.Sb())}function F(e,t){1&e&&(p.Tb(0,"span"),p.Ec(1,"REGISTER"),p.Sb())}function D(e,t){1&e&&(p.Tb(0,"div",48),p.Ob(1,"div"),p.Ob(2,"div"),p.Sb())}let L=(()=>{class e{constructor(e,t,n,i){this.fb=e,this.router=t,this.snackbarService=n,this.authService=i,this.isLoading=!1,this.users=[],this.userName=!1,this.displayMessage={},this.options=[{name:"Software Designer"},{name:"Software Developer"},{name:"Frontend Developer"},{name:"Backend Developer"},{name:"Database Administrator"},{name:"Angular Developer"},{name:"PHP Developer"},{name:".NET Developer"},{name:"Python Developer"}],this.hide=!0,this.genericValidator=new m.a({email:{required:"This field is required.",pattern:"Please enter valid email address."},password:{required:"This field is required."},confirmPassword:{required:"This field is required."},firstName:{required:"This field is required."},lastName:{required:"This field is required."},userName:{required:"This field is required."},address:{required:"This field is required."},gender:{required:"This field is required."}})}ngOnInit(){this.initForm(),this.filteredOptions=this.signupForm.get("position").valueChanges.pipe(Object(f.a)(""),Object(h.a)(e=>"string"==typeof e?e:e.name),Object(h.a)(e=>e?this._filter(e):this.options.slice())),this.getListOfUsers()}displayFn(e){return e&&e.name?e.name:""}_filter(e){const t=e.toLowerCase();return this.options.filter(e=>0===e.name.toLowerCase().indexOf(t))}getListOfUsers(){this.authService.getAllUsers().pipe(Object(h.a)(e=>e.map(e=>Object.assign({key:e.payload.key},e.payload.val())))).subscribe(e=>{this.users=e})}initForm(){this.signupForm=this.fb.group({id:0,email:[null,[a.q.required,a.q.pattern(u.a.emailRegex)]],role:"user",firstName:[null,a.q.required],middleName:"",lastName:[null,a.q.required],userName:[null,a.q.required],address:[null,a.q.required],dob:"",phone:"",gender:[null,a.q.required],edu:null,about:"",position:[null],profilePic:"",password:[null,a.q.required],confirmPassword:[null,a.q.required]},{validator:this.passwordConfirming})}validation(){this.genericValidator.initValidationProcess(this.signupForm,this.formInputElements).subscribe({next:e=>this.displayMessage=e})}passwordConfirming(e){if(e.get("password").value!==e.get("confirmPassword").value)return{invalid:!0}}ngAfterViewInit(){this.signupForm.get("userName").valueChanges.subscribe(e=>{this.authService.getAllUsers().pipe(Object(h.a)(e=>e.map(e=>Object.assign({key:e.payload.key},e.payload.val())))).subscribe(t=>{let n=t.find(t=>t.content.userName===e);this.userName=void 0!==n})}),this.validation()}saveChanges(){this.isLoading=!0,void 0===this.users.find(e=>e.content.email===this.signupForm.value.email)?this.authService.addUser(this.signupForm.value).pipe(Object(y.a)(400)).subscribe(e=>{this.router.navigate(["/home"]),this.snackbarService.openFromComponent(g.a,{data:"User registered successfully.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.isLoading=!1,this.router.navigate(["/login"])}):(this.snackbarService.openFromComponent(g.a,{data:"User already registered.",duration:5e3,verticalPosition:"top",horizontalPosition:"right"}),this.isLoading=!1)}login(){setTimeout(()=>{this.router.navigate(["/login"])},400)}}return e.\u0275fac=function(t){return new(t||e)(p.Nb(a.d),p.Nb(r.b),p.Nb(b.b),p.Nb(S.a))},e.\u0275cmp=p.Hb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&p.Kc(a.e,!0,p.l),2&e){let e;p.pc(e=p.bc())&&(t.formInputElements=e)}},decls:118,vars:19,consts:[["id","home",1,"signup_page","pb-4"],[1,"row","m_0"],[1,"col-md-2"],[1,"col-md-8"],[1,"signup_card"],[1,"text-center"],["src","assets/logo/e-logo.png",1,"login_img"],[1,"row"],[1,"col-md-12","text-center","signup_form"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"col-md-4"],[1,"max-width"],[1,"input_label"],["formControlName","firstName","type","text","matInput","","placeholder","Enter your first name"],["class","font-danger",4,"ngIf"],["formControlName","middleName","type","text","matInput","","placeholder","Enter your middle name(optional)"],["formControlName","lastName","type","text","matInput","","placeholder","Enter your last name"],[1,"max-width","pt-3"],["formControlName","userName","type","text","matInput","","placeholder","Create your username"],["class","wrong_password",4,"ngIf"],["formControlName","address","type","text","matInput","","placeholder","Enter your address"],["datePickerFormat","MMMM Do YYYY","matInput","","formControlName","dob",3,"matDatepicker","click","focus"],["date",""],["formControlName","phone","type","text","matInput","","placeholder","Enter your phone no"],["formControlName","gender"],["value","Male"],["value","Female"],["value","Other"],["formControlName","edu","type","text","matInput","","placeholder","Enter your higher education level."],[1,"col-md-5"],["type","text","placeholder","Enter your position","matInput","","formControlName","position"],[1,"col-md-7"],["formControlName","edu","type","text","matInput","","placeholder","Select your profile picture."],["formControlName","email","type","email","matInput","","placeholder","Enter username"],["formControlName","password","type","password","matInput","","placeholder","Enter Your Password",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["formControlName","confirmPassword","type","password","matInput","","placeholder","Re-enter your password"],[1,"col-md-12",2,"padding","0 !important"],["formControlName","about","type","text","matInput","","placeholder","Write about yourself"],[1,"col-md","12","text-center","pt-3"],[1,"signup_btn","signup_btn-5",3,"disabled"],[4,"ngIf"],["class","spinner",4,"ngIf"],[1,"col-md-12","text-center","pt-4"],[1,"already"],["href","Javascript:;",1,"s_login",3,"click"],[1,"font-danger"],[1,"wrong_password"],[1,"spinner"]],template:function(e,t){if(1&e){const e=p.Ub();p.Tb(0,"header",0),p.Tb(1,"div",1),p.Ob(2,"div",2),p.Tb(3,"div",3),p.Tb(4,"mat-card",4),p.Tb(5,"div",5),p.Ob(6,"img",6),p.Sb(),p.Tb(7,"div",7),p.Tb(8,"div",8),p.Tb(9,"form",9),p.ac("ngSubmit",function(){return t.saveChanges()}),p.Tb(10,"div",7),p.Tb(11,"div",10),p.Tb(12,"mat-form-field",11),p.Tb(13,"mat-label",12),p.Ec(14,"First Name"),p.Sb(),p.Ob(15,"input",13),p.Dc(16,M,2,1,"mat-error",14),p.Sb(),p.Sb(),p.Tb(17,"div",10),p.Tb(18,"mat-form-field",11),p.Tb(19,"mat-label",12),p.Ec(20,"Middle Name"),p.Sb(),p.Ob(21,"input",15),p.Sb(),p.Sb(),p.Tb(22,"div",10),p.Tb(23,"mat-form-field",11),p.Tb(24,"mat-label",12),p.Ec(25,"Last Name"),p.Sb(),p.Ob(26,"input",16),p.Dc(27,x,2,1,"mat-error",14),p.Sb(),p.Sb(),p.Tb(28,"div",10),p.Tb(29,"mat-form-field",17),p.Tb(30,"mat-label",12),p.Ec(31,"User Name"),p.Sb(),p.Ob(32,"input",18),p.Dc(33,O,2,1,"mat-error",14),p.Sb(),p.Dc(34,_,2,0,"p",19),p.Sb(),p.Tb(35,"div",10),p.Tb(36,"mat-form-field",17),p.Tb(37,"mat-label",12),p.Ec(38,"Address"),p.Sb(),p.Ob(39,"input",20),p.Dc(40,N,2,1,"mat-error",14),p.Sb(),p.Sb(),p.Tb(41,"div",10),p.Tb(42,"mat-form-field",17),p.Tb(43,"mat-label",12),p.Ec(44,"Date of birth"),p.Sb(),p.Tb(45,"input",21),p.ac("click",function(){return p.uc(e),p.qc(47).open()})("focus",function(){return p.uc(e),p.qc(47).open()}),p.Sb(),p.Ob(46,"mat-datepicker",null,22),p.Sb(),p.Sb(),p.Tb(48,"div",10),p.Tb(49,"mat-form-field",17),p.Tb(50,"mat-label",12),p.Ec(51,"Phone No."),p.Sb(),p.Ob(52,"input",23),p.Sb(),p.Sb(),p.Tb(53,"div",10),p.Tb(54,"mat-form-field",17),p.Tb(55,"mat-label",12),p.Ec(56,"Gender"),p.Sb(),p.Tb(57,"mat-select",24),p.Tb(58,"mat-option",25),p.Ec(59,"Male"),p.Sb(),p.Tb(60,"mat-option",26),p.Ec(61,"Female"),p.Sb(),p.Tb(62,"mat-option",27),p.Ec(63,"Other"),p.Sb(),p.Sb(),p.Dc(64,P,2,1,"mat-error",14),p.Sb(),p.Sb(),p.Tb(65,"div",10),p.Tb(66,"mat-form-field",17),p.Tb(67,"mat-label",12),p.Ec(68,"Education"),p.Sb(),p.Ob(69,"input",28),p.Sb(),p.Sb(),p.Tb(70,"div",29),p.Tb(71,"mat-form-field",17),p.Tb(72,"mat-label",12),p.Ec(73,"Position"),p.Sb(),p.Ob(74,"input",30),p.Sb(),p.Sb(),p.Tb(75,"div",31),p.Tb(76,"mat-form-field",17),p.Tb(77,"mat-label",12),p.Ec(78,"Prifile Picture"),p.Sb(),p.Ob(79,"input",32),p.Sb(),p.Sb(),p.Tb(80,"div",10),p.Tb(81,"mat-form-field",17),p.Tb(82,"mat-label",12),p.Ec(83,"Email"),p.Sb(),p.Ob(84,"input",33),p.Dc(85,E,2,1,"mat-error",14),p.Sb(),p.Sb(),p.Tb(86,"div",10),p.Tb(87,"mat-form-field",17),p.Tb(88,"mat-label",12),p.Ec(89,"Password"),p.Sb(),p.Ob(90,"input",34),p.Tb(91,"span",35),p.ac("click",function(){return t.hide=!t.hide}),p.Tb(92,"mat-icon"),p.Ec(93),p.Sb(),p.Sb(),p.Dc(94,k,2,1,"mat-error",14),p.Sb(),p.Sb(),p.Tb(95,"div",10),p.Tb(96,"mat-form-field",17),p.Tb(97,"mat-label",12),p.Ec(98,"Confirm Password"),p.Sb(),p.Ob(99,"input",36),p.Dc(100,q,2,1,"mat-error",14),p.Sb(),p.Dc(101,I,2,0,"p",19),p.Sb(),p.Tb(102,"div",37),p.Tb(103,"mat-form-field",17),p.Tb(104,"mat-label",12),p.Ec(105,"About"),p.Sb(),p.Ob(106,"textarea",38),p.Sb(),p.Sb(),p.Sb(),p.Tb(107,"div",7),p.Tb(108,"div",39),p.Tb(109,"button",40),p.Dc(110,F,2,0,"span",41),p.Dc(111,D,3,0,"div",42),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(112,"div",43),p.Tb(113,"p",44),p.Ec(114,"Already have an account? "),p.Tb(115,"a",45),p.ac("click",function(){return t.login()}),p.Ec(116,"Login"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Ob(117,"div",2),p.Sb(),p.Sb()}if(2&e){const e=p.qc(47);p.Cb(9),p.lc("formGroup",t.signupForm),p.Cb(7),p.lc("ngIf",null==t.displayMessage?null:t.displayMessage.firstName),p.Cb(11),p.lc("ngIf",null==t.displayMessage?null:t.displayMessage.lastName),p.Cb(6),p.lc("ngIf",null==t.displayMessage?null:t.displayMessage.userName),p.Cb(1),p.lc("ngIf",!0===t.userName),p.Cb(6),p.lc("ngIf",null==t.displayMessage?null:t.displayMessage.address),p.Cb(5),p.lc("matDatepicker",e),p.Cb(19),p.lc("ngIf",null==t.displayMessage?null:t.displayMessage.gender),p.Cb(21),p.lc("ngIf",null==t.displayMessage?null:t.displayMessage.email),p.Cb(5),p.lc("type",t.hide?"password":"text"),p.Cb(1),p.Db("aria-label","Hide password")("aria-pressed",t.hide),p.Cb(2),p.Fc(t.hide?"visibility_off":"visibility"),p.Cb(1),p.lc("ngIf",null==t.displayMessage?null:t.displayMessage.password),p.Cb(6),p.lc("ngIf",null==t.displayMessage?null:t.displayMessage.confirmPassword),p.Cb(1),p.lc("ngIf",null==t.signupForm.errors?null:t.signupForm.errors.invalid),p.Cb(8),p.lc("disabled",t.signupForm.invalid||t.isLoading),p.Cb(1),p.lc("ngIf",!t.isLoading),p.Cb(1),p.lc("ngIf",t.isLoading)}},directives:[l.a,a.r,a.m,a.g,s.c,s.f,a.c,o.b,a.l,a.e,i.l,T.b,T.a,v.a,C.k,s.g,w.a,s.b],styles:[".signup_img[_ngcontent-%COMP%]{height:120px;border-radius:100%}.signup_card[_ngcontent-%COMP%]{background-image:url(lo.52202e5a6a813f126375.jpg);background-size:cover}.img[_ngcontent-%COMP%], .signup_card[_ngcontent-%COMP%]{background-repeat:no-repeat;justify-content:center}.img[_ngcontent-%COMP%]{height:100px;margin:0;background-image:url(e-logo.8ee22f6cab3aad6d7b87.png)}.signup_page[_ngcontent-%COMP%]{padding-top:100px;min-height:100vh;background:url(https://image.freepik.com/free-photo/shiny-lights_385-19321244.jpg);background-size:cover}@keyframes myanimation{25%{background-color:#4e4e47}50%{background-color:#375537}75%{background-color:#3a2828}to{background-color:#3d3535}75%{background-color:#525055}50%{background-color:#794871}25%{background-color:#210527}0%{background-color:#501818}}.input_label[_ngcontent-%COMP%]{color:#fff}.signup_btn[_ngcontent-%COMP%]{color:#000;cursor:pointer;display:block;font-size:16px;font-weight:400;line-height:45px;max-width:160px;margin:0 auto 2em;position:relative;text-transform:uppercase;vertical-align:middle;width:100%}@media (min-width:400px){.signup_btn[_ngcontent-%COMP%]{display:inline-block;margin-right:2.5em}.signup_btn[_ngcontent-%COMP%]:nth-of-type(2n){margin-right:0}}@media (min-width:600px){.signup_btn[_ngcontent-%COMP%]:nth-of-type(2n){margin-right:2.5em}.signup_btn[_ngcontent-%COMP%]:nth-of-type(5){margin-right:0}}.signup_btn-5[_ngcontent-%COMP%]{border:0 solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,0);outline:1px solid;outline-color:hsla(0,0%,100%,0);text-shadow:none;transition:all 1.25s cubic-bezier(.19,1,.22,1);outline-color:hsla(0,0%,100%,.5);outline-offset:0}.signup_btn-5[_ngcontent-%COMP%]:hover{border:1px solid;box-shadow:inset 0 0 20px hsla(0,0%,100%,.5),0 0 20px hsla(0,0%,100%,.2);outline-offset:15px;outline-color:hsla(0,0%,100%,0);text-shadow:1px 1px 2px #427388}.m_0[_ngcontent-%COMP%]{margin:0}.max-width[_ngcontent-%COMP%]{width:90%!important}.wrong_password[_ngcontent-%COMP%]{text-align:left!important;padding-left:10%!important;color:#f44336;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.already[_ngcontent-%COMP%]{color:#fff!important}.s_login[_ngcontent-%COMP%]{color:#0272f1!important;text-decoration:none}.s_login[_ngcontent-%COMP%]:hover{color:#00e676!important;text-decoration:none;transition:color .8s ease-in-out}.spinner[_ngcontent-%COMP%]{padding:0 auto;width:40px;height:40px;position:relative}.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-left:50px;position:absolute;width:100%;height:100%;border:10px solid transparent;border-top-color:#00e676;border-radius:50%;animation:spinnerOne 1.2s linear infinite}.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){border:10px solid transparent;border-bottom-color:#00e676;animation:spinnerTwo 1.2s linear infinite}@keyframes spinnerOne{0%{transform:rotate(0deg);border-width:10px}50%{transform:rotate(180deg);border-width:1px}to{transform:rotate(1turn);border-width:10px}}@keyframes spinnerTwo{0%{transform:rotate(0deg);border-width:1px}50%{transform:rotate(180deg);border-width:10px}to{transform:rotate(1turn);border-width:1px}}"]}),e})(),j=(()=>{class e{}return e.\u0275mod=p.Lb({type:e}),e.\u0275inj=p.Kb({factory:function(t){return new(t||e)},imports:[[i.c,r.d.forChild([{path:"",component:L}]),a.h,a.p,o.c,s.e,l.b,d.b,b.c,v.b,c.b,C.j,T.c,w.b]]}),e})()}}]);