(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/EwV":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=t("vOnD").c.p.withConfig({displayName:"DisplayResults__StyledResult",componentId:"sc-jszw04-0"})(["color:white;"]);a.a=function(e){var a=e.result,t=e.isRoundDuct;return!!a&&a.map((function(e){return l.a.createElement(i,{style:e.isAboveAcceptable?{color:"red"}:null,key:Math.random()},t?"φ":"",e.diameter,"   -  ",e.pressureDrop," Pa/m  - ",e.speed," m/s")}))}},"1R5F":function(e,a,t){"use strict";t.r(a);var n=t("dI71"),l=t("q1tI"),i=t.n(l),o=t("BFkE"),r=t("OuFy"),s=t("jKCB"),c=t("afQ7"),p=t("lJO2"),d=t("EGan"),m=t("vOnD"),u=t("bJEb"),w=t("/EwV"),y=Object(m.c)(r.a).withConfig({displayName:"HeatingCalc__StyledEntries",componentId:"sc-1vgs6ad-0"})(["grid-template-columns:1.5fr 1fr;div:nth-of-type(3){grid-column:1 / -1;}","{grid-template-columns:1fr 1fr 1.3fr;div:nth-of-type(3){grid-column:auto;}}"],(function(e){return e.theme.mediaQ.tablet})),h=Object(m.c)(r.a).withConfig({displayName:"HeatingCalc__StyledPower",componentId:"sc-1vgs6ad-1"})(["grid-template-columns:1fr 1fr;"]),g=Object(m.c)(r.a).withConfig({displayName:"HeatingCalc__StyledFlow",componentId:"sc-1vgs6ad-2"})(["grid-template-columns:1fr 1fr;"]),k=m.c.div.withConfig({displayName:"HeatingCalc__StyledWrapper",componentId:"sc-1vgs6ad-3"})(["display:grid;padding:0;","{grid-template-columns:1fr 1fr;grid-column-gap:2rem;> div:nth-of-type(1),> div:nth-of-type(4){grid-column:1/ -1;}}"],(function(e){return e.theme.mediaQ.tablet})),f=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={mediumType:4.2,mediumTemp:80,pipeType:.15,power:"",deltaTemp:20,flowCMPH:"",flowLPS:"",result:"",hasResult:!1,validationMsg:"",lastHandler:""},a.handleMediumTypeChange=function(e){var t,n=e.target.id,l=e.target.value,i=a.state,o=i.lastHandler,r=i.deltaTemp,s=i.power,c=i.mediumTemp,p=i.flowCMPH;if("power"===o||"deltaTemp"===o)if(a.validateDeltaTempPower(r,s)){var d=u.k(u.h(r,s,l,c),3),m=d/3600*1e3;a.setState({flowCMPH:d,flowLPS:m}),a.calculateResults(n,l)}else{var w;a.setState(((w={})[n]=l,w))}else a.validateFlow(p)?a.calculateResults(n,l):a.setState(((t={})[n]=l,t))},a.handleMediumTempChange=function(e){var t=e.target.id,n=e.target.value;n=u.m(n,150,0);var l,i=a.state,o=i.lastHandler,r=i.deltaTemp,s=i.power,c=i.flowCMPH,p=i.mediumType;if("power"===o||"deltaTemp"===o)if(a.validateDeltaTempPower(r,s)){var d=u.k(u.h(r,s,p,n),3),m=d/3600*1e3;a.setState({flowCMPH:d,flowLPS:m}),a.calculateResults(t,n)}else{var w;a.setState(((w={})[t]=n,w))}else a.validateFlow(c)?a.calculateResults(t,n):a.setState(((l={})[t]=n,l))},a.handlePipeTypeChange=function(e){var t,n,l=e.target.id,i=e.target.value,o=a.state,r=o.lastHandler,s=o.deltaTemp,c=o.power,p=o.flowCMPH;"power"===r||"deltaTemp"===r?a.validateDeltaTempPower(s,c)?a.calculateResults(l,i):a.setState(((t={})[l]=i,t)):a.validateFlow(p)?a.calculateResults(l,i):a.setState(((n={})[l]=i,n))},a.handlePowerChange=function(e){var t=e.target.id,n=e.target.value,l=a.state,i=l.deltaTemp,o=l.mediumType,r=l.mediumTemp;if(a.validateDeltaTempPower(i,n)){var s=u.k(u.h(i,n,o,r),3),c=u.k(s/3600*1e3,3);a.setState({flowCMPH:s,flowLPS:c,lastHandler:t}),a.calculateResults(t,n)}else{var p;a.setState(((p={})[t]=n,p))}},a.handleDeltaTempChange=function(e){var t=e.target.id,n=e.target.value,l=a.state,i=l.power,o=l.mediumType,r=l.mediumTemp;if(a.validateDeltaTempPower(n,i)){var s=u.k(u.h(n,i,o,r),3),c=u.k(s/3600*1e3,3);a.setState({flowCMPH:s,flowLPS:c,lastHandler:t}),a.calculateResults(t,n)}else{var p;a.setState(((p={})[t]=n,p))}},a.handleFlowCMPHChange=function(e){var t=e.target.id,n=e.target.value,l=u.k(n/3600*1e3,3);a.setState({power:"",flowCMPH:n,flowLPS:l,lastHandler:t}),a.validateFlow(n)&&a.calculateResults(t,n)},a.handleFlowLPSChange=function(e){var t=e.target.id,n=e.target.value,l=u.k(3.6*n,3);a.setState({power:"",flowCMPH:l,flowLPS:n,lastHandler:t}),a.validateFlow(n)&&a.calculateResults(t,n)},a.calculateResults=function(e,t){a.setState((function(a){var n,l,i=Object.assign({},a,((n={})[e]=t,n)),o=i.pipeType,r=i.flowCMPH,s=i.mediumTemp,c=i.mediumType,p=u.a(160,o,r,s,c);return(l={})[e]=t,l.result=p,l.validationMsg="",l.hasResult=!0,l}))},a.validateFlow=function(e){return!(e<=0)||(a.setState({validationMsg:"Wprowadź przepływ większy od 0",hasResult:!1}),!1)},a.validateDeltaTempPower=function(e,t){return!(e<=0||e>101||t<=0)||(a.setState({validationMsg:"Podaj moc w KW i różnicę temp. w zakresie 1 - 100 K",hasResult:!1}),!1)},a}return Object(n.a)(a,e),a.prototype.render=function(){var e=this.state,a=e.mediumType,t=e.mediumTemp,n=e.flowCMPH,l=e.flowLPS,o=e.power,m=e.deltaTemp,u=e.pipeType,f=e.result,z=e.hasResult,v=e.validationMsg,C=e.lastHandler;return i.a.createElement(k,null,i.a.createElement(y,{title:"Dane wejściowe"},i.a.createElement(p.a,{id:"mediumType",label:"Rodzaj czynnika",data:d.a,onChange:this.handleMediumTypeChange,value:a}),i.a.createElement(s.a,{id:"mediumTemp",labelVal:"Temp. czynnika °C",value:t,onChange:this.handleMediumTempChange}),i.a.createElement(p.a,{id:"pipeType",label:"Rodzaj rury",data:d.b,onChange:this.handlePipeTypeChange,value:u})),i.a.createElement(h,{title:"Dobór na podstawie mocy"},i.a.createElement(s.a,{id:"power",labelVal:"Moc w kW",value:o,onChange:this.handlePowerChange}),i.a.createElement(s.a,{id:"deltaTemp",value:m,labelVal:"Różnica temp. °C",onChange:this.handleDeltaTempChange})),i.a.createElement(g,{title:"Dobór na podstawie przepływu"},i.a.createElement(s.a,{onChange:this.handleFlowCMPHChange,value:n,id:"flowCMPH",labelVal:"Przepływ w m3/h"}),i.a.createElement(s.a,{onChange:this.handleFlowLPSChange,value:l,id:"flowLPS",labelVal:"Przepływ w dm3/s"})),z&&i.a.createElement(r.a,{title:"Wyniki"},f?i.a.createElement("div",null,"power"==C||"deltaTemp"==C?i.a.createElement(c.a,null,"Dla ",i.a.createElement("span",null,o," kW"),i.a.createElement("span",null,"Δt ",m," °C")," ",i.a.createElement("span",null,"V=",n," m3/h")," ","dobrano następujące średnice:"):i.a.createElement(c.a,null,"Dla"," ",i.a.createElement("span",null,n," m3/h ~ ",l," dm3/s"," ")," ","dobrano następujące średnice:"),i.a.createElement(w.a,{result:f})):i.a.createElement("p",null,"Zbyt duży przepływ dla wybranego typoszeregu rur")),v&&i.a.createElement(r.a,{title:"Komunikat"},v))},a}(i.a.Component),z=t("sMQP"),v=t("Sj/W"),C=t("lw//"),b=t.n(C),P=t("SVaj"),E=t.n(P),j=t("VJGm"),S=t.n(j),T=t("bGqs"),O=t("qWAW"),R=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={isInfoOpen:!1,isPipesDimsOpen:!1,isTipsOpen:!1},a.handleClick=function(e){var t=!a.state[e.target.id],n={isInfoOpen:!1,isPipesDimsOpen:!1,isKnowledgeOpen:!1};n[e.target.id]=t,a.setState(n)},a.handleCloseClick=function(){a.setState({isInfoOpen:!1,isPipesDimsOpen:!1,isKnowledgeOpen:!1})},a}return Object(n.a)(a,e),a.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(z.a,{id:"isInfoOpen",onClick:this.handleClick,text:"Instrukcja"}),i.a.createElement(z.a,{id:"isPipesDimsOpen",onClick:this.handleClick,text:"Typoszereg"}),i.a.createElement(z.a,{id:"isKnowledgeOpen",onClick:this.handleClick,text:"Wiedza"}),i.a.createElement(v.a,{onClick:this.handleCloseClick,isOpen:this.state.isInfoOpen,imgPath:b.a},i.a.createElement("p",null,"Wprowadź przepływ w m3/h lub w dm3/s aby program automatycznie dobrał średnicę i policzył spadek jednostkowy."),i.a.createElement("p",null,"Możesz także wprowadzić moc i różnicę temperatur - program obliczy automatycznie przepływ i dobierze średnicę"),i.a.createElement("p",null,"Pamiętaj, że możesz zmienić temperaturę czynnika oraz jego rodzaj (woda, glikol propylenowy, etylenowy)"),i.a.createElement("p",null,"Dobór rur na podstawie kryterium jednostkowego spadku ciśnienia."),i.a.createElement("p",null,"Opór jednostkowy w Pa/m obliczany jest na podstawie wzoru Darcy-Weisbecha. Chropowatość bezwzględna do wyboru wg użytkownika."),i.a.createElement("p",null,"Po podaniu mocy i różnicy temperatur pole przepływ wypełnia się samo."),i.a.createElement("p",null,"Pole przepływ w m3/h lub dm3/s można wypełniać wedle uznania. Po wpisaniu jednej wartości, druga wartość zostanie automatycznie przeliczona.")),i.a.createElement(v.a,{onClick:this.handleCloseClick,isOpen:this.state.isPipesDimsOpen,imgPath:E.a},i.a.createElement("h3",null,"Rury stalowe"),i.a.createElement(T.a,{pipes:O.g}),i.a.createElement("h3",null,"Rury PP PN20"),i.a.createElement(T.a,{pipes:O.e}),i.a.createElement("h3",null,"Rury PP PN16"),i.a.createElement(T.a,{pipes:O.d}),i.a.createElement("h3",null,"Rury PEX"),i.a.createElement(T.a,{pipes:O.c})),i.a.createElement(v.a,{onClick:this.handleCloseClick,isOpen:this.state.isKnowledgeOpen,imgPath:S.a},i.a.createElement("p",null,"Domyślne kryterium jednostkowego spadku ciśnienia wynosi dP = 160 Pa/m"),i.a.createElement("p",null,"Roztwory glikolu mają większą lepkość niż czysta woda, co wpływa na wspólczynnik tarcia (mniejsze straty ciśnienia)."),i.a.createElement("p",null,"Im większa temperatura wody czy glikolu, tym mniejsza lepkość i tym samym mniejszy współczynnik tarcia (mniejsze straty ciśnienia)."),i.a.createElement("p",null,i.a.createElement("b",null,"Glikol propylenowy")," uznawany jest za związek nieszkodliwy dla zdrowia, lub o bardzo niskiej szkodliwości. Nie stwierdzono by powodował uczulenia, nie wykazuje rakotwórczości i nie jest mutagenny. Kontakt z nierozcieńczonym glikolem propylenowym może wywołać podrażnienia oczu i skóry, jednak niegroźne i łatwo ustępujące, zwykle wraz z ustaniem kontaktu. W ciele jest szybko przekształcany w kwas mlekowy (w sposób podobny do przekształcania w mięśniach cukru w energię). W środowisku łatwo ulega biodegradacji"),i.a.createElement("p",null,i.a.createElement("b",null,"Glikol etylenowy")," jest substancją szkodliwą, depresyjnie działającą na ośrodkowy układ nerwowy. Działa drażniąco na błony śluzowe nosa i spojówki. Organizm wchłania go poprzez drogi oddechowe, skórę oraz z przewodu pokarmowego. Drogą pokarmową glikol początkowo powoduje objawy podobne do upojenia alkoholem, po czym (po kilku bądź kilkunastu godzinach) doprowadza do kwasicy metabolicznej. W przypadku podgrzewania glikolu powstająca para może prowadzić do utraty przytomności, natomiast w małych stężeniach powoduje podrażnienie nosa i gardła oraz bóle głowy. Warto zatem przy pracy z glikolem zachować szczególną ostrożność.")))},a}(l.Component),D=t("9Sd5"),H=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement(D.a,null,i.a.createElement(f,null),i.a.createElement(R,null)))},a}(i.a.Component);a.default=H},EGan:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return l})),t.d(a,"c",(function(){return i}));var n={"Woda ":4.2,"Glik. etyl. 35% (-20°C)":3.63,"Glik. etyl. 40% (-25°C)":3.54,"Glik. prop. 37% (-20°C)":3.77,"Glik. prop. 42% (-25°C)":3.7},l={"Rury stalowe k=0,15 mm":.15,"Rury stalowe k=0,10 mm":.1,"Rury PP PN16 k=0,007 mm":.007001,"Rury PP PN20 k=0,007 mm":.007002,"Rury Pex k=0,007 mm":.007003,"Rury żeliwne nowe k=0,25 mm":.25},i={"Budynki mieszkalne":"1","Budynki biurowe i administracyjne":"2","Hotele ":"3","Domy towarowe":"4","Szpitale ":"5","Szkoły ":"6"}},afQ7:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=t("vOnD").c.p.withConfig({displayName:"ResultSubHeader__StyledP",componentId:"sc-1lpi7hc-0"})(["margin:0 0 1rem 0;font-size:1.6rem;line-height:2.5rem;color:",";span{margin:0 1rem 0 1rem;padding:0 0.6rem 0 0.6rem;border-left:2px solid ",";border-right:2px solid ",";}"],(function(e){return e.theme.grayextralight}),(function(e){return e.theme.primarygreen}),(function(e){return e.theme.primarygreen}));a.a=function(e){var a=e.children;return l.a.createElement(i,null,a)}},lJO2:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),i=t("vOnD"),o=i.c.select.withConfig({displayName:"InputSelect__SelectStyled",componentId:"sc-u83cuf-0"})(["font-size:1.5rem;display:block;margin:0.5em 0;padding:0.3em 0.8em;border:1px solid gray;border-radius:10px;height:35px;outline:none;width:100%;:focus{border-color:green;}"]),r=i.c.label.withConfig({displayName:"InputSelect__InputLabel",componentId:"sc-u83cuf-1"})(["color:white;display:block;font-size:1.4rem;white-space:nowrap;"]);a.a=function(e){var a=e.data,t=e.id,n=e.label,i=e.onChange,s=e.value,c=Object.values(a),p=Object.keys(a);return l.a.createElement("div",null,l.a.createElement(r,{htmlFor:t},n),l.a.createElement(o,{value:s,id:t,onChange:i},c.map((function(e,a){return l.a.createElement("option",{key:e,value:e},p[a])}))))}}}]);
//# sourceMappingURL=component---src-pages-heating-js-9e2d933ee0c06f2e59b2.js.map