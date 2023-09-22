((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_3",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aPA(d){return d},
aIc(d){var w=J.a7(d)
return new B.kx(A.at(w.h(d,"userUid")),A.ao(w.h(d,"uid")),A.ao(w.h(d,"photo")),A.at(w.h(d,"name")),C.fD.rp(w.h(d,"birthDate")),B.aSZ(D.v0,w.h(d,"gender")))},
aPq(d){var w=A.au(["userUid",d.a],x.g,x.b),v=new B.aru(w)
v.$2("uid",d.b)
v.$2("photo",d.c)
w.m(0,"name",d.d)
v.$2("birthDate",d.e.a04().xu())
v=D.v0.h(0,d.f)
v.toString
w.m(0,"gender",v)
return w},
dr:function dr(){},
arx:function arx(){},
qg:function qg(){},
Ls:function Ls(d,e,f){this.a=d
this.b=e
this.$ti=f},
kx:function kx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0o:function a0o(){},
aru:function aru(d){this.a=d},
a0r:function a0r(){},
aSZ(d,e){var w,v
if(e==null)throw A.c(A.bY("A value must be provided. Supported values: "+J.aFJ(d.gbc(d),", "),null))
for(w=d.geL(d),w=w.gap(w);w.B();){v=w.gK(w)
if(J.e(v.b,e))return v.a}w=A.bY("`"+A.i(e)+"` is not one of the supported values: "+J.aFJ(d.gbc(d),", "),null)
throw A.c(w)}},C,A,J,D
B=a.updateHolder(c[10],B)
C=c[2]
A=c[0]
J=c[1]
D=c[6]
B.dr.prototype={
gamX(){var w=C.e.bl(A.cZ(0,Date.now()-this.gv7().a).a,864e8),v=C.e.bl(w,365),u=w-v*365,t=C.e.bl(u,30)
return""+v+"Y "+t+"M "+(u-t*30)+"D"}}
B.arx.prototype={
ga0s(){return A.G($.oh())},
ge5(d){return A.G($.oh())},
gpg(){return A.G($.oh())},
gez(d){return A.G($.oh())},
gv7(){return A.G($.oh())},
gtk(){return A.G($.oh())},
dg(){return A.G($.oh())},
gbB(){return A.G($.oh())},
Jk(d,e,f,g,h,i){return this.gbB().$6$birthDate$gender$name$photo$uid$userUid(d,e,f,g,h,i)}}
B.qg.prototype={
$6$birthDate$gender$name$photo$uid$userUid(d,e,f,g,h,i){var w=this.a,v=i==null?w.ga0s():A.at(i),u=C.j===h?w.ge5(w):A.ao(h),t=C.j===g?w.gpg():A.ao(g),s=f==null?w.gez(w):A.at(f),r=d==null?w.gv7():x.f.a(d)
return this.b.$1(A.k(this).i("qg.1").a(w.Jk(r,e==null?w.gtk():x.a.a(e),s,t,u,v)))},
$0(){return this.$6$birthDate$gender$name$photo$uid$userUid(null,null,null,C.j,C.j,null)},
$1$uid(d){return this.$6$birthDate$gender$name$photo$uid$userUid(null,null,null,C.j,d,null)},
$1$photo(d){return this.$6$birthDate$gender$name$photo$uid$userUid(null,null,null,d,C.j,null)}}
B.Ls.prototype={
$6$birthDate$gender$name$photo$uid$userUid(d,e,f,g,h,i){var w=this,v=i==null?w.a.a:A.at(i),u=C.j===h?w.a.b:A.ao(h),t=C.j===g?w.a.c:A.ao(g),s=f==null?w.a.d:A.at(f),r=d==null?w.a.e:x.f.a(d),q=e==null?w.a.f:x.a.a(e)
return w.b.$1(new B.kx(v,u,t,s,r,q))},
$0(){return this.$6$birthDate$gender$name$photo$uid$userUid(null,null,null,C.j,C.j,null)},
$1$uid(d){return this.$6$birthDate$gender$name$photo$uid$userUid(null,null,null,C.j,d,null)},
$1$photo(d){return this.$6$birthDate$gender$name$photo$uid$userUid(null,null,null,d,C.j,null)}}
B.kx.prototype={
j(d){var w=this
return"Patient(userUid: "+w.a+", uid: "+A.i(w.b)+", photo: "+A.i(w.c)+", name: "+w.d+", birthDate: "+w.e.j(0)+", gender: "+w.f.j(0)+")"},
k(d,e){var w,v,u=this
if(e==null)return!1
if(u!==e)if(J.V(e)===A.p(u))if(e instanceof B.kx){w=e.a===u.a
if(w||w){w=e.b==u.b
if(w||w){w=e.c==u.c
if(w||w){w=e.d===u.d
if(w||w){w=e.e
v=u.e
if(w===v||w.k(0,v)){w=e.f===u.f
w=w||w}else w=!1}else w=!1}else w=!1}else w=!1}else w=!1}else w=!1
else w=!1
else w=!0
return w},
gD(d){var w=this
return A.R(A.p(w),w.a,w.b,w.c,w.d,w.e,w.f,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gbB(){return new B.Ls(this,D.Cy,x.h)},
dg(){return B.aPq(this)},
WC(d){return this.gbB().$1$uid(d)},
Jk(d,e,f,g,h,i){return this.gbB().$6$birthDate$gender$name$photo$uid$userUid(d,e,f,g,h,i)},
ga0s(){return this.a},
ge5(d){return this.b},
gpg(){return this.c},
gez(d){return this.d},
gv7(){return this.e},
gtk(){return this.f}}
B.a0o.prototype={
gbB(){return A.G($.oh())},
Jk(d,e,f,g,h,i){return this.gbB().$6$birthDate$gender$name$photo$uid$userUid(d,e,f,g,h,i)}}
B.a0r.prototype={}
var z=a.updateTypes(["0^(0^)<u?>"])
B.aru.prototype={
$2(d,e){if(e!=null)this.a.m(0,d,e)},
$S:18};(function installTearOffs(){var w=a.installStaticTearOff
w(B,"b7R",1,null,["$1$1","$1"],["aPA",function(d){return B.aPA(d,x.b)}],0,1)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.u,[B.a0r,B.arx,B.qg])
u(B.dr,B.a0r)
u(B.Ls,B.qg)
u(B.a0o,B.dr)
u(B.kx,B.a0o)
u(B.aru,A.l_)
w(B.a0r,B.arx)})()
A.Al(b.typeUniverse,JSON.parse('{"kx":{"dr":[]},"qg":{"qg.1":"2"},"Ls":{"qg":["1","kx"],"qg.1":"kx"},"a0o":{"dr":[]}}'))
var y={b:"It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods"}
var x={f:A.X("bM"),a:A.X("dZ"),g:A.X("l"),h:A.X("Ls<kx>"),b:A.X("@")};(function constants(){D.Cy=new A.dR(B.b7R(),A.X("dR<kx>"))
D.iY=y.b
D.v0=new A.c1([C.op,"male",C.oo,"female"],A.X("c1<dZ,l>"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bcX","oh",()=>A.a3(y.b))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_3",e:"endPart",h:b})})($__dart_deferred_initializers__,"ZS1jnQyIb5R0m1ui5hJL4od2iD4=");