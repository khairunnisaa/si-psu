(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Sux9:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class a{}var u=e("pMnS"),o=e("iInd");class r{}var i=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](1,212992,null,0,o.q,[o.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(n,l){n(l,1,0)},null)}function s(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ngx-psu-kawasan-permukiman",[],null,null,null,c,i)),t["\u0275did"](1,49152,null,0,r,[],null,null)],null,null)}var d=t["\u0275ccf"]("ngx-psu-kawasan-permukiman",r,s,{},{},[]),m=e("jXVt"),p=e("tKwJ"),f=e("+ImT"),g=e("Qq3i"),v=e("CG3O");class k{constructor(){}ngOnInit(){this.renderValue=this.value.toString()}onClick(){switch(console.log("rowData === ",this.rowData),this.rowData.no){case 1:this.url="../../pages/beranda";break;case 2:this.url="Monday";break;case 3:this.url="Tuesday"}}}var b=e("u78h");class y{constructor(n){this.service=n,this.settings={actions:!1,add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"No.",type:"number",filter:!1},nama_tpu:{title:"Nama Tempat Pemakaman Umum (TPU)",type:"custom",filter:!1,valuePrepareFunction:(n,l)=>(console.log("row cell === ",l,n),n),renderComponent:k},luas_tpu:{title:"Luas TPU",type:"string",filter:!1},daya_tampung_tpu:{title:"Daya Tampung",type:"string",filter:!1},kecamatan:{title:"Kecamatan",type:"string",filter:!1},kelurahan:{title:"Kelurahan / Desa",type:"string",filter:!1},RT:{title:"RT",type:"string",filter:!1},RW:{title:"RT",type:"string",filter:!1}}};const l=this.service.getData();this.source=new v.a(l)}onDeleteConfirm(n){window.confirm("Are you sure you want to delete?")?n.confirm.resolve():n.confirm.reject()}}var h=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"nb-card",[],[[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,m.kb,m.B)),t["\u0275did"](1,49152,null,0,p.nb,[],null,null),(n()(),t["\u0275eld"](2,0,null,0,2,"nb-card-header",[],null,null,null,m.mb,m.D)),t["\u0275did"](3,49152,null,0,p.qb,[],null,null),(n()(),t["\u0275ted"](-1,0,[" Tabel PSU Kawasan Permukiman "])),(n()(),t["\u0275eld"](5,0,null,1,3,"nb-card-body",[],null,null,null,m.jb,m.A)),t["\u0275did"](6,49152,null,0,p.mb,[],null,null),(n()(),t["\u0275eld"](7,0,null,0,1,"ng2-smart-table",[],null,[[null,"deleteConfirm"]],function(n,l,e){var t=!0;return"deleteConfirm"===l&&(t=!1!==n.component.onDeleteConfirm(e)&&t),t},f.b,f.a)),t["\u0275did"](8,573440,null,0,g.a,[],{source:[0,"source"],settings:[1,"settings"]},{deleteConfirm:"deleteConfirm"})],function(n,l){var e=l.component;n(l,8,0,e.source,e.settings)},function(n,l){n(l,0,1,[t["\u0275nov"](l,1).tiny,t["\u0275nov"](l,1).small,t["\u0275nov"](l,1).medium,t["\u0275nov"](l,1).large,t["\u0275nov"](l,1).giant,t["\u0275nov"](l,1).primary,t["\u0275nov"](l,1).info,t["\u0275nov"](l,1).success,t["\u0275nov"](l,1).warning,t["\u0275nov"](l,1).danger,t["\u0275nov"](l,1).hasAccent,t["\u0275nov"](l,1).primaryAccent,t["\u0275nov"](l,1).infoAccent,t["\u0275nov"](l,1).successAccent,t["\u0275nov"](l,1).warningAccent,t["\u0275nov"](l,1).dangerAccent])})}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ngx-kelola-data-permukiman",[],null,null,null,C,h)),t["\u0275did"](1,49152,null,0,y,[b.a],null,null)],null,null)}var _=t["\u0275ccf"]("ngx-kelola-data-permukiman",y,w,{},{},[]),R=e("SVse"),D=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var a=!0;return"click"===l&&(a=!1!==t["\u0275nov"](n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&a),a},null,null)),t["\u0275did"](1,671744,null,0,o.o,[o.l,o.a,R.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),t["\u0275eld"](2,0,null,null,1,"span",[],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onClick()&&t),t},null,null)),(n()(),t["\u0275ted"](3,null,["",""]))],function(n,l){n(l,1,0,t["\u0275inlineInterpolate"](1,"",l.component.url,""))},function(n,l){var e=l.component;n(l,0,0,t["\u0275nov"](l,1).target,t["\u0275nov"](l,1).href),n(l,3,0,e.renderValue)})}function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ngx-detail-permukiman",[],null,null,null,F,D)),t["\u0275did"](1,114688,null,0,k,[],null,null)],function(n,l){n(l,1,0)},null)}var M=t["\u0275ccf"]("ngx-detail-permukiman",k,T,{value:"value",rowData:"rowData"},{},[]),A=e("s7LF"),L=e("IP0z"),N=e("/HVE"),B=e("IheW"),K=e("TYxm");class P{}var I=e("VDLQ"),S=e("NrAT"),x=e("m1S1"),z=e("WBAi"),V=e("mbdJ"),j=e("6t6V");e.d(l,"PsuKawasanPermukimanModuleNgFactory",function(){return O});var O=t["\u0275cmf"](a,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,d,_,M]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[t.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,A["\u0275angular_packages_forms_forms_o"],A["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](6144,p.Wb,null,[L.b]),t["\u0275mpd"](6144,p.Je,null,[N.a]),t["\u0275mpd"](4608,p.se,p.se,[]),t["\u0275mpd"](4608,p.he,p.he,[]),t["\u0275mpd"](4608,p.re,p.re,[]),t["\u0275mpd"](4608,p.fe,p.fe,[]),t["\u0275mpd"](4608,p.ge,p.ge,[p.he,p.se,p.re,p.fe]),t["\u0275mpd"](4608,A.FormBuilder,A.FormBuilder,[]),t["\u0275mpd"](4608,B.l,B.r,[R.DOCUMENT,t.PLATFORM_ID,B.p]),t["\u0275mpd"](4608,B.s,B.s,[B.l,B.q]),t["\u0275mpd"](5120,B.a,function(n){return[n]},[B.s]),t["\u0275mpd"](4608,B.o,B.o,[]),t["\u0275mpd"](6144,B.m,null,[B.o]),t["\u0275mpd"](4608,B.k,B.k,[B.m]),t["\u0275mpd"](6144,B.b,null,[B.k]),t["\u0275mpd"](4608,B.g,B.n,[B.b,t.Injector]),t["\u0275mpd"](4608,B.c,B.c,[B.g]),t["\u0275mpd"](4608,K.i,K.i,[]),t["\u0275mpd"](4608,K.k,K.k,[B.c]),t["\u0275mpd"](4608,K.c,K.c,[K.i,K.k]),t["\u0275mpd"](1073742336,o.p,o.p,[[2,o.u],[2,o.l]]),t["\u0275mpd"](1073742336,P,P,[]),t["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),t["\u0275mpd"](1073742336,A["\u0275angular_packages_forms_forms_d"],A["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,A.FormsModule,A.FormsModule,[]),t["\u0275mpd"](1073742336,p.Ge,p.Ge,[]),t["\u0275mpd"](1073742336,p.lc,p.lc,[p.kc]),t["\u0275mpd"](1073742336,p.rb,p.rb,[]),t["\u0275mpd"](1073742336,p.nc,p.nc,[]),t["\u0275mpd"](1073742336,p.N,p.N,[]),t["\u0275mpd"](1073742336,p.Rc,p.Rc,[]),t["\u0275mpd"](1073742336,p.Md,p.Md,[]),t["\u0275mpd"](1073742336,p.ne,p.ne,[]),t["\u0275mpd"](1073742336,A.ReactiveFormsModule,A.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,B.e,B.e,[]),t["\u0275mpd"](1073742336,B.d,B.d,[]),t["\u0275mpd"](1073742336,K.j,K.j,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,S.a,S.a,[]),t["\u0275mpd"](1073742336,x.a,x.a,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,V.a,V.a,[]),t["\u0275mpd"](1073742336,j.a,j.a,[]),t["\u0275mpd"](1073742336,a,a,[]),t["\u0275mpd"](1024,o.j,function(){return[[{path:"",component:r,children:[{path:"kelola-data-permukiman",component:y}]}]]},[]),t["\u0275mpd"](256,B.p,"XSRF-TOKEN",[]),t["\u0275mpd"](256,B.q,"X-XSRF-TOKEN",[])])})}}]);