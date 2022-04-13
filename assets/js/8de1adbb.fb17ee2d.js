"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1812],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(t),k=r,u=s["".concat(p,".").concat(k)]||s[k]||m[k]||i;return t?a.createElement(u,o(o({ref:n},c),{},{components:t})):a.createElement(u,o({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},334:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return k}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t.p+"assets/images/demo1-d33e575e33ee6fe5f4a72fb7832f41c1.png",l=t.p+"assets/images/demo2-e24df74bdbfa9639fbf461330a58b03e.png",p=t.p+"assets/images/demo3-f4a16dfaae533c454f21a7f15d1e9a8d.gif",d=["components"],c={id:"customDraw",title:"\u81ea\u5b9a\u4e49\u7ed8\u5236"},m=void 0,s={unversionedId:"design/graphics/customDraw",id:"design/graphics/customDraw",title:"\u81ea\u5b9a\u4e49\u7ed8\u5236",description:"\u6982\u8ff0",source:"@site/docs/design/graphics/customDraw.mdx",sourceDirName:"design/graphics",slug:"/design/graphics/customDraw",permalink:"/docs/design/graphics/customDraw",editUrl:"https://github.com/milklabdev/jetpack-compose-book/tree/master/docs/design/graphics/customDraw.mdx",tags:[],version:"current",frontMatter:{id:"customDraw",title:"\u81ea\u5b9a\u4e49\u7ed8\u5236"},sidebar:"docs",previous:{title:"\u56fe\u5f62\uff08Graphics\uff09",permalink:"/docs/category/\u56fe\u5f62graphics"},next:{title:"\u8d44\u6e90",permalink:"/docs/resources"}},k=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[],level:2},{value:"\u4ece Canvas Composable \u5f00\u59cb",id:"\u4ece-canvas-composable-\u5f00\u59cb",children:[{value:"\u7b80\u5355\u793a\u4f8b",id:"\u7b80\u5355\u793a\u4f8b",children:[],level:3}],level:2},{value:"DrawModifier",id:"drawmodifier",children:[{value:"drawWithContent",id:"drawwithcontent",children:[],level:3},{value:"drawBehind",id:"drawbehind",children:[],level:3},{value:"drawWithContent\u4e0edrawBehind\u7684\u6bd4\u8f83\u793a\u4f8b",id:"drawwithcontent\u4e0edrawbehind\u7684\u6bd4\u8f83\u793a\u4f8b",children:[],level:3},{value:"drawWithCache",id:"drawwithcache",children:[],level:3},{value:"drawWithCache \u793a\u4f8b",id:"drawwithcache-\u793a\u4f8b",children:[],level:3}],level:2},{value:"\u4e0e\u539f\u751f\u517c\u5bb9",id:"\u4e0e\u539f\u751f\u517c\u5bb9",children:[{value:"\u81ea\u5b9a\u4e49\u7ed8\u5236\u80fd\u529b\u7684\u8fdb\u9636",id:"\u81ea\u5b9a\u4e49\u7ed8\u5236\u80fd\u529b\u7684\u8fdb\u9636",children:[],level:3}],level:2}],u={toc:k};function w(e){var n=e.components,t=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"Jetpack Compose \u4f5c\u4e3a\u4e00\u6b3e UI \u6846\u67b6\uff0c\u81ea\u5b9a\u4e49\u7ed8\u5236\u90e8\u5206\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\u3002\u901a\u8fc7\u5b98\u65b9\u6240\u63d0\u4f9b\u7684\u57fa\u7840 API\uff0c \u5141\u8bb8\u5f00\u53d1\u8005\u5b9e\u73b0\u5404\u79cd\u573a\u666f\u4e0b\u7684\u7ed8\u5236\u5b9a\u5236\u9700\u6c42\u3002\u5982\u679c\u4f60\u5bf9 Android \u539f\u751f Canvas \u5df2\u7ecf\u4e86\u5982\u6307\u638c\u7684\u8bdd\uff0c\u90a3\u4e48\u8fc1\u79fb\u81f3 Jetpack Compose \u57fa\u672c\u6ca1\u6709\u4efb\u4f55\u6210\u672c\u3002\u5373\u4f7f\u4f60\u4e0d\u66fe\u4e86\u89e3 Android \u539f\u751f Canvas \u4e5f\u4e0d\u8981\u62c5\u5fc3\uff0c\u9605\u8bfb\u8fd9\u7bc7\u6587\u7ae0\u4f60\u540c\u6837\u4e5f\u53ef\u4ee5\u638c\u63e1\u5982\u4f55\u5728 Jetpack Compose \u5b8c\u6210\u81ea\u5b9a\u4e49\u7ed8\u5236\u3002"),(0,i.kt)("h2",{id:"\u4ece-canvas-composable-\u5f00\u59cb"},"\u4ece Canvas Composable \u5f00\u59cb"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Canvas Composable")," \u662f\u5b98\u65b9\u63d0\u4f9b\u7684\u4e00\u4e2a\u4e13\u95e8\u7528\u6765\u81ea\u5b9a\u4e49\u7ed8\u5236\u7684\u72ec\u7acb\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u4e0d\u5305\u542b\u4efb\u4f55\u5b50\u5143\u7d20\uff0c\u7c7b\u4f3c\u4e8e\u4f20\u7edfView\u7cfb\u7edf\u4e2d\u7684\u4e00\u4e2a\u72ec\u7acbView\uff08\u4e0d\u662fViewGroup\uff0c\u4e0d\u5305\u542b\u5b50View\uff09\u3002\u4f5c\u4e3a\u4e00\u4e2a\u201d\u72ec\u7acbView\u201c\uff0c\u6211\u4eec\u540c\u6837\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Layout Modifier")," \u6765\u5b9a\u5236\u6d4b\u91cf\u5e03\u5c40\u8fc7\u7a0b\uff0c\u6709\u5173\u4e8e\u6d4b\u91cf\u5e03\u5c40\u7684\u5b9a\u5236\u53ef\u4ee5\u62d3\u5c55\u9605\u8bfb ",(0,i.kt)("a",{parentName:"p",href:"../../layout/custom_layout"},"\u81ea\u5b9a\u4e49Layout")," \u3002"),(0,i.kt)("p",null,"Canvas\u53c2\u6570\u6709\u4e24\u4e2a\u53c2\u6570, \u7c7b\u578b\u5206\u522b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Modifier")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope.() -> Unit"),"\u3002Modifier \u4f5c\u4e3a\u8be5\u7ec4\u4ef6\u7684\u4fee\u9970\u7b26\u4e0d\u96be\u7406\u89e3\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope.() -> Unit")," \u662f\u4e00\u4e2a reciever \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u7c7b\u578b\u7684 lambda\u3002\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u5728 lambda \u4e2d\u4efb\u610f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u4e3a\u6211\u4eec\u6240\u63d0\u4f9b\u7684 API \u4e86\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Canvas(modifier: Modifier, onDraw: DrawScope.() -> Unit)\n")),(0,i.kt)("p",null,"\u6211\u4eec\u6765\u770b\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u4e3a\u6211\u4eec\u9650\u5b9a\u4e86\u54ea\u4e9b API\u3002\u8fd9\u4e9b API \u5b57\u9762\u610f\u601d\u5f88\u597d\u7406\u89e3\uff0c\u5728\u4f7f\u7528\u65f6\u4e34\u65f6\u67e5\u627e\u5373\u53ef\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawLine"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u6761\u7ebf")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawRect"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u4e2a\u77e9\u5f62")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawImage"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u5f20\u56fe\u7247")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawRoundRect"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u4e2a\u5706\u89d2\u77e9\u5f62")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawCircle"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u4e2a\u5706")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawOval"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u4e2a\u692d\u5706")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawArc"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u6761\u5f27\u7ebf")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawPath"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u6761\u8def\u5f84")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawPoints"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7ed8\u5236\u4e00\u4e9b\u70b9")))),(0,i.kt)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u753b\u4e00\u4e2a\u7b80\u5355\u7684\u5706\u73af\u4f5c\u4e3a\u793a\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Preview\n@Composable\nfun DrawColorRing() {\n    Box(\n        modifier = Modifier.fillMaxSize(),\n        contentAlignment = Alignment.Center\n    ) {\n        var radius = 300.dp\n        var ringWidth = 30.dp\n        Canvas(modifier = Modifier.size(radius)) {\n            this.drawCircle( // \u753b\u5706\n                brush = Brush.sweepGradient(listOf(Color.Red, Color.Green, Color.Red), Offset(radius.toPx() / 2f, radius.toPx() / 2f)),\n                radius = radius.toPx() / 2f,\n                style = Stroke(\n                    width = ringWidth.toPx()\n                )\n            )\n        }\n    }\n}\n")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:o,width:"50%",height:"50%"})),(0,i.kt)("p",null,"Jetpack Compose \u4f5c\u4e3a\u4e00\u6b3e\u8de8\u5e73\u53f0 UI \u6846\u67b6\uff0c\u6240\u4f7f\u7528 Canvas \u53ea\u662f\u4e00\u4e2a\u66f4\u9ad8\u5c42\u6b21\u7684\u5c01\u88c5\uff0c\u6700\u7ec8\u8fd8\u662f\u843d\u5b9e\u5230\u5177\u4f53\u5e73\u53f0\u7684Canvas\u5b9e\u73b0\u7684\u3002\u6240\u4ee5\u5728 Android \u5e73\u53f0\u5373\u4f7f\u6211\u4eec\u4f7f\u7528\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u4e3a\u6211\u4eec\u6240\u63d0\u4f9b\u7684 API \uff0c\u6700\u7ec8\u4ecd\u7136\u8fd8\u662f\u4f1a\u4f7f\u7528\u5230Android\u539f\u751f\u7684Canvas\u7684\u3002\u5982\u679c\u4f60\u66fe\u7ecf\u5728\u4f20\u7edfView\u7cfb\u7edf\u4e2d\u505a\u8fc7\u81ea\u5b9a\u4e49\u7ed8\u5236\uff0c\u5728\u7ed8\u5236\u5904\u53ef\u80fd\u6bd4\u8f83\u5947\u602a\uff0c\u611f\u89c9 Compose \u597d\u50cf\u5c11\u4e86\u4e00\u4e2a\u91cd\u8981\u7684\u4e1c\u897f \u2014\u2014  ",(0,i.kt)("inlineCode",{parentName:"p"},"Paint")," \u753b\u7b14 \uff0c\u96be\u4e0d\u6210\u6bcf\u6b21\u7ed8\u5236\u65f6\u90fd\u4f1a\u6839\u636e API \u5982\u6b64\u53c2\u6570\u4e0d\u540c\u91cd\u65b0\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Painter")," ?\u5176\u5b9e\u6211\u4eec\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u4f1a\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u753b\u7b14\u8fdb\u884c\u7f13\u5b58\u7684\uff0c\u6240\u4ee5\u6027\u80fd\u662f\u6ca1\u6709\u95ee\u9898\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"// CanvasDrawScope\nprivate fun obtainFillPaint(): Paint =\n        fillPaint ?: Paint().apply { style = PaintingStyle.Fill }.also {\n                fillPaint = it\n        }\nprivate fun obtainStrokePaint(): Paint =\n    strokePaint ?: Paint().apply { style = PaintingStyle.Stroke }.also {\n        strokePaint = it\n        }\nprivate fun selectPaint(drawStyle: DrawStyle): Paint =\n    when (drawStyle) {\n        Fill -> obtainFillPaint()\n        is Stroke ->\n            obtainStrokePaint()\n                .apply {\n                    if (strokeWidth != drawStyle.width) strokeWidth = drawStyle.width\n                    if (strokeCap != drawStyle.cap) strokeCap = drawStyle.cap\n                    if (strokeMiterLimit != drawStyle.miter) strokeMiterLimit = drawStyle.miter\n                    if (strokeJoin != drawStyle.join) strokeJoin = drawStyle.join\n                    if (pathEffect != drawStyle.pathEffect) pathEffect = drawStyle.pathEffect\n                }\n    }\n")),(0,i.kt)("p",null,"\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvas Composable")," \u7684\u5b9e\u73b0\u53ef\u4ee5\u53d1\u73b0\u4ed6\u5176\u5b9e\u5c31\u662f\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Spacer")," \u5957\u58f3\uff0c\u771f\u6b63\u53d1\u6325\u7ed8\u5236\u4f5c\u7528\u7684\u5176\u5b9e\u662f\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Modifier.drawBehind()")," \u3002drawBehind\uff08\u753b\u5728\u540e\u9762\uff09\uff0c\u5b57\u9762\u610f\u601d\u5f88\u660e\u786e\u3002\u7531\u4e8e\u6b64\u65f6\u662f\u4fee\u9970\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spacer")," \u4e0a\u7684\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u6240\u7684\u4e00\u5207\u90fd\u753b\u5728\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Spacer")," \u540e\u9762\u3002\u7531\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Spacer")," \u9ed8\u8ba4\u80cc\u666f\u662f\u900f\u660e\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u6240\u753b\u7684\u5c31\u5b8c\u5168\u5c55\u793a\u51fa\u6765\u4e86\u3002 \u65e2\u7136\u90fd\u804a\u5230\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawBehind")," ,\u518d\u4e0d\u591a\u804a\u804a\u4ed6\u7684\u51e0\u4f4d\u597d\u5144\u5f1f\u591a\u4e0d\u597d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\nfun Canvas(modifier: Modifier, onDraw: DrawScope.() -> Unit) =\n    Spacer(modifier.drawBehind(onDraw))\n")),(0,i.kt)("h2",{id:"drawmodifier"},"DrawModifier"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u7ed8\u5236\uff0c\u5b98\u65b9\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e09\u4e2a Modifier API\uff0c\u5206\u522b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"drawWithContent ")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"drawBehind")," \u3001",(0,i.kt)("inlineCode",{parentName:"p"},"drawWithCache"),"\u3002 \u63a5\u4e0b\u6765\u7531\u6211\u6765\u4ecb\u7ecd\u8fd9\u4e09\u5144\u5f1f\u662f\u8c01\uff0c\u5e76\u4e14\u8be5\u5982\u4f55\u7528\u3002"),(0,i.kt)("h3",{id:"drawwithcontent"},"drawWithContent"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"drawWithContent")," \u9700\u8981\u4e00\u4e2aReciever\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"ContentDrawScope")," \u7c7b\u578b\u7684lambda\uff0c\u800c\u8fd9\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"ContentDrawScope")," \u62d3\u5c55\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u7684\u80fd\u529b\uff0c\u591a\u4e86\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"drawContent")," API\u3002\u8fd9\u4e2a API \u662f\u63d0\u4f9b\u7ed9\u5f00\u53d1\u8005\u6765\u63a7\u5236\u7ed8\u5236\u5c42\u7ea7\u7684\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Modifier.drawWithContent(\n    onDraw: ContentDrawScope.() -> Unit\n)\n\ninterface ContentDrawScope : DrawScope {\n    /**\n     * Causes child drawing operations to run during the `onPaint` lambda.\n     */\n    fun drawContent()\n}\n")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6982\u5ff5\u7c7b\u4f3c\u4e8eView\u7cfb\u7edf\u7684onDraw\uff0c\u5982\u679c\u6211\u4eec\u60f3\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"TextView")," \u7ed8\u5236\u6587\u672c\u7684\u57fa\u7840\u4e0a\u7ed8\u5236\u6211\u4eec\u60f3\u8981\u7684\u6548\u679c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236 ",(0,i.kt)("inlineCode",{parentName:"p"},"super.onDraw()")," \u4e0e\u6211\u4eec\u81ea\u5df1\u589e\u52a0\u7ed8\u5236\u903b\u8f91\u7684\u8c03\u7528\u5148\u540e\u5173\u7cfb\u4ece\u800c\u786e\u5b9a\u7ed8\u5236\u7684\u5c42\u7ea7\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"drawContent")," \u53ef\u4ee5\u7406\u89e3\u7b49\u4ef7\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"super.onDraw")," \u7684\u6982\u5ff5\u3002\u8d8a\u65e9\u8fdb\u884c\u7ed8\u5236Z\u8f74\u8d8a\u5c0f\uff0c\u540e\u9762\u7684\u7ed8\u5236\u4f1a\u8986\u76d6\u524d\u9762\u7684\u7ed8\u5236\uff0c\u4ece\u800c\u4ea7\u751f\u4e86\u7ed8\u5236\u7684\u5c42\u7ea7\u5173\u7cfb\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyTextView(context: Context): AppCompatTextView(context) {\n    override fun onDraw(canvas: Canvas?) {\n        // \u5728 TextView \u4e0b\u5c42\u7ed8\u5236\u7684\u63a7\u5236\u903b\u8f91\n        // ...\n        super.onDraw(canvas)\n        // \u5728 TextView \u4e0a\u5c42\u7ed8\u5236\u7684\u63a7\u5236\u903b\u8f91\n        // ...\n    }\n}\n")),(0,i.kt)("h3",{id:"drawbehind"},"drawBehind"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"drawBehind"),"\uff0c\u753b\u5728\u540e\u9762\u3002\u5177\u4f53\u753b\u5728\u8c01\u540e\u9762\u5462\uff0c\u5177\u4f53\u753b\u5728\u4ed6\u6240\u4fee\u9970\u7684UI\u7ec4\u4ef6\u540e\u9762\u3002\u6839\u636e\u524d\u9762\u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u731c\u5230\uff0c\u5176\u5b9e\u4e0d\u5c31\u662f\u5148\u753b\u6211\u4eec\u81ea\u5df1\u5b9a\u5236\u7684\u7ed8\u5236\u63a7\u5236\u903b\u8f91\u540e\uff0c\u518d\u753bUI\u7ec4\u4ef6\u672c\u8eab\u561b\uff1f\u6211\u4eec\u7ffb\u9605\u6e90\u7801\u53ef\u4ee5\u770b\u5230\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Modifier.drawBehind(\n    onDraw: DrawScope.() -> Unit\n) = this.then(\n    DrawBackgroundModifier(\n        onDraw = onDraw, // onDraw \u4e3a\u6211\u4eec\u5b9a\u5236\u7684\u7ed8\u5236\u63a7\u5236\u903b\u8f91\n        ...\n    )\n)\n\nprivate class DrawBackgroundModifier(\n    val onDraw: DrawScope.() -> Unit,\n    ...\n) : DrawModifier, InspectorValueInfo(inspectorInfo) {\n    override fun ContentDrawScope.draw() {\n        onDraw() // \u5148\u753b\u6211\u4eec\u5b9a\u5236\u7684\u7ed8\u5236\u63a7\u5236\u903b\u8f91\n        drawContent() // \u540e\u753bUI\u7ec4\u4ef6\u672c\u8eab\n    }\n    ...\n}\n")),(0,i.kt)("h3",{id:"drawwithcontent\u4e0edrawbehind\u7684\u6bd4\u8f83\u793a\u4f8b"},"drawWithContent\u4e0edrawBehind\u7684\u6bd4\u8f83\u793a\u4f8b"),(0,i.kt)("p",null,"\u6211\u4eec\u6765\u4e3a\u7528\u6237\u5934\u50cf\u589e\u52a0\u4e00\u4e2a\u7ea2\u70b9\u6d88\u606f\u63d0\u9192\u4f5c\u4e3a\u793a\u4f8b\uff08\u7136\u7136\u7ed9\u6211\u53d1\u6d88\u606f\u4e86..\u563f\u563f\ud83e\udd24\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Preview\n@Composable\nfun DrawBefore() {\n    Box(\n        modifier = Modifier.fillMaxSize(),\n        contentAlignment = Alignment.Center\n    ) {\n        Card(\n            shape = RoundedCornerShape(8.dp)\n            ,modifier = Modifier\n            .size(100.dp)\n            .drawWithContent {\n                drawContent()\n                drawCircle(Color(0xffe7614e), 18.dp.toPx() / 2, center = Offset(drawContext.size.width, 0f))\n            }\n        ) {\n            Image(painter = painterResource(id = R.drawable.diana), contentDescription = "Diana")\n        }\n    }\n}\n\n@Preview\n@Composable\nfun DrawBehind() {\n    Box(\n        modifier = Modifier.fillMaxSize(),\n        contentAlignment = Alignment.Center\n    ) {\n        Card(\n            shape = RoundedCornerShape(8.dp)\n            ,modifier = Modifier\n                .size(100.dp)\n                .drawBehind {\n                    drawCircle(Color(0xffe7614e), 18.dp.toPx() / 2, center = Offset(drawContext.size.width, 0f))\n                }\n        ) {\n            Image(painter = painterResource(id = R.drawable.diana), contentDescription = "Diana")\n        }\n    }\n}\n')),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:l})),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawBehind")," \u9ed8\u8ba4\u5c06\u7ea2\u70b9\u63d0\u9192\u6dfb\u52a0\u5230\u5934\u50cf\u540e\u9762\u3002\u5982\u679c\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawWithContent")," \u5373\u53ef\u63a7\u5236\u7ed8\u5236\u7684\u5c42\u7ea7\u5173\u7cfb\u4e86\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u6211\u4eec\u90fd\u5e0c\u671b\u5c06\u7ea2\u70b9\u63d0\u9192\u7ed8\u5236\u6700\u9876\u5c42\u3002\u6240\u4ee5\u6b64\u65f6\u5e94\u8be5\u5148 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawContent"),"\uff0c\u540e ",(0,i.kt)("inlineCode",{parentName:"p"},"drawCircle")," \u3002"),(0,i.kt)("h3",{id:"drawwithcache"},"drawWithCache"),(0,i.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u7ed8\u5236\u4e00\u4e9b\u6bd4\u8f83\u590d\u6742\u7684UI\u6548\u679c\u65f6\uff0c\u4e0d\u5e0c\u671b\u5f53 Recompose \u53d1\u751f\u65f6\u6240\u6709\u7ed8\u753b\u6240\u7528\u7684\u6240\u6709\u5b9e\u4f8b\u90fd\u91cd\u65b0\u6784\u5efa\u4e00\u6b21\uff08\u7c7b\u4f3cPath\uff09\uff0c\u8fd9\u53ef\u80fd\u4f1a\u4ea7\u751f\u5185\u5b58\u6296\u52a8\u3002\u5728 Compose \u4e2d\u6211\u4eec\u4e00\u822c\u80fd\u591f\u60f3\u5230\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"remember")," \u8fdb\u884c\u7f13\u5b58\uff0c\u7136\u800c\u6211\u4eec\u6240\u7ed8\u5236\u7684\u4f5c\u7528\u57df\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u5e76\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Composable"),"\uff0c\u6240\u4ee5\u65e0\u6cd5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"remember"),"\uff0c\u90a3\u6211\u4eec\u8be5\u600e\u4e48\u529e\u5462\uff1f",(0,i.kt)("inlineCode",{parentName:"p"},"drawWithCache")," \u63d0\u4f9b\u4e86\u8fd9\u4e2a\u80fd\u529b\u3002"),(0,i.kt)("p",null,"\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawWithCache")," \u7684\u58f0\u660e\u53ef\u4ee5\u770b\u5230\uff0c\u9700\u8981\u4f20\u5165\u4e00\u4e2aReciever\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheDrawScope")," \u7c7b\u578b\u7684lambda\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\u6b64\u65f6\u8fd4\u56de\u503c\u5fc5\u987b\u662f\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawResult"),"\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"CacheDrawScope")," \u4e3a\u6211\u4eec\u9650\u5b9a\u4e86\u54ea\u4e9b API\u3002"),(0,i.kt)("p",null,"\u54c8\u54c8\u53ef\u4ee5\u770b\u5230\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"CacheDrawScope")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"onDrawBehind"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"onDrawWithContent")," \u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawResult")," \u7c7b\u578b\u8fd4\u56de\u503c\uff0c\u8fd9\u4e24\u4e2a API \u5b8c\u5168\u7b49\u4ef7\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"drawBehind")," \u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"drawWithContent"),"\u3002\u600e\u4e48\u7528\u5c31\u4e0d\u5fc5\u591a\u8bf4\u4e86\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun Modifier.drawWithCache(\n    onBuildDrawCache: CacheDrawScope.() -> DrawResult\n)\n\nclass CacheDrawScope internal constructor() : Density {\n    ...\n    fun onDrawBehind(block: DrawScope.() -> Unit): DrawResult\n    fun onDrawWithContent(block: ContentDrawScope.() -> Unit): DrawResult\n        ...\n}\n")),(0,i.kt)("h3",{id:"drawwithcache-\u793a\u4f8b"},"drawWithCache \u793a\u4f8b"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6dfb\u52a0\u7528\u6237\u5934\u50cf\u76f8\u6846\u4f5c\u4e3a\u5b9e\u4f8b\uff0c\u5e76\u901a\u8fc7\u6539\u53d8\u76f8\u6846\u989c\u8272\u6765\u89e6\u53d1Recompose\u3002\u5f53\u7136\u76f8\u6846\u80af\u5b9a\u662f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," \u5b9e\u73b0\u7684\uff0c\u7531\u4e8e\u662f\u6539\u53d8\u76f8\u6846\u989c\u8272\uff0c\u6211\u4eec\u5e76\u4e0d\u5e0c\u671b Recompose \u65f6\u91cd\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"Path")," \u5b9e\u4f8b\uff0c\u6240\u4ee5\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawWithCache")," \u6765\u5b9e\u73b0\u4e86\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Preview\n@Composable\nfun DrawBorder() {\n    Box(\n        modifier = Modifier.fillMaxSize(),\n        contentAlignment = Alignment.Center\n    ) {\n        Column(\n            horizontalAlignment = Alignment.CenterHorizontally\n        ) {\n            var borderColor by mutableStateOf(Color.Red)\n            Card(\n                shape = RoundedCornerShape(0.dp)\n                ,modifier = Modifier\n                    .size(100.dp)\n                    .drawWithCache {\n                        Log.d("compose_study", "\u6b64\u5904\u4e0d\u4f1a\u53d1\u751f Recompose")\n                        var path = Path().apply {\n                            moveTo(0f, 0f)\n                            relativeLineTo(100.dp.toPx(), 0f)\n                            relativeLineTo(0f, 100.dp.toPx())\n                            relativeLineTo(-100.dp.toPx(), 0f)\n                            relativeLineTo(0f, -100.dp.toPx())\n                        }\n                        onDrawWithContent {\n                            Log.d("compose_study", "\u6b64\u5904\u4f1a\u53d1\u751f Recompose")\n                            drawContent()\n                            drawPath(\n                                path = path,\n                                color = borderColor,\n                                style = Stroke(\n                                    width = 10f,\n                                )\n                            )\n                        }\n                    }\n            ) {\n                Image(painter = painterResource(id = R.drawable.diana), contentDescription = "Diana")\n            }\n            Spacer(modifier = Modifier.height(20.dp))\n            Button(onClick = {\n                borderColor = Color.Yellow\n            }) {\n                Text("Change Color")\n            }\n        }\n    }\n}\n')),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:p,width:"50%",height:"50%"})),(0,i.kt)("h2",{id:"\u4e0e\u539f\u751f\u517c\u5bb9"},"\u4e0e\u539f\u751f\u517c\u5bb9"),(0,i.kt)("p",null,"\u524d\u9762\u6211\u4eec\u8bf4\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u4e2d\u6240\u63d0\u4f9b\u7684 API \u4ec5\u662f\u4e00\u4e2a\u9ad8\u5c42\u6b21\u7684\u5c01\u88c5\uff0c\u5e95\u5c42\u4ecd\u7136\u662f\u7528\u7684\u662f\u539f\u751f\u5e73\u53f0\u7684 Canvas \u8fdb\u884c\u7ed8\u5236\u3002\u4f5c\u4e3a\u4e00\u4e2a\u9ad8\u5c42\u6b21\u5c01\u88c5\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u5e73\u53f0\u901a\u7528\u6027\uff0c\u5fc5\u7136\u4f1a\u5bfc\u81f4\u5177\u4f53\u5e73\u53f0 API \u63d0\u4f9b\u7684\u4e00\u4e9b API \u7684\u4e22\u5931\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u5728 Android \u539f\u751f Canvas \u53ef\u4ee5\u7ed8\u5236\u6587\u5b57 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawText"),"\uff0c\u4f46\u8fd9\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u662f\u6ca1\u6709\u88ab\u63d0\u4f9b\u7684\uff0c\u90a3\u6211\u4eec\u8be5\u600e\u4e48\u505a\u5462\u3002"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u8bbf\u95ee\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawContext")," \u6210\u5458\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"drawContext")," \u5b58\u50a8\u4e86\u4ee5\u4e0b\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"size\uff1a"),"   \u7ed8\u5236\u5c3a\u5bf8"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"canvas\uff1a"),"  Compose \u5c01\u88c5\u7684\u9ad8\u5c42\u6b21 Canvas"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"transform\uff1a"),"  transform\u63a7\u5236\u5668\uff0c\u7528\u4ee5\u65cb\u8f6c\u3001\u7f29\u653e\u4e0e\u79fb\u52a8"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"canvas.nativeCanvas")," \u83b7\u53d6\u5177\u4f53\u5e73\u53f0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvas")," \u5b9e\u4f8b\uff0c\u5728 Android \u5e73\u53f0\u5c31\u5bf9\u5e94",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidCanvas"),"\uff0c\u901a\u8fc7\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"nativeCanvas")," \u5c31\u53ef\u4ee5\u8c03\u7528\u5230\u539f\u751f\u5e73\u53f0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvas")," \u65b9\u6cd5\u4e86\u3002\u6240\u4ee5\u5982\u679c\u4f60\u4e0d\u559c\u6b22\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"DrawScope")," \u63d0\u4f9b\u7684\u5e73\u53f0\u901a\u7528 API\u6216\u662f\u9700\u6c42\u9700\u8981\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u539f\u751f\u5e73\u53f0 ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvas")," \uff0c\u4f46\u8fd9\u6837\u505a\u7684\u4ee3\u4ef7\u5c31\u662f\u4f1a\u4e22\u5931\u5e73\u53f0\u901a\u7528\u6027\uff0c\u5bf9\u4e8e\u4e0d\u540c\u5e73\u53f0\u9700\u8981\u7ed9\u4e88\u4e0d\u540c\u7684\u5b9e\u73b0\uff0c\u4e0d\u80fd\u4f5c\u4e3a\u4e00\u4e2a\u901a\u7528\u6a21\u5757\u8fdb\u884c\u63d0\u4f9b\uff0c\u5982\u679c\u4f60\u53ea\u9488\u5bf9 Android \u5e73\u53f0\u8fdb\u884c\u5f00\u53d1\u5c31\u4e0d\u9700\u8981\u8003\u8651\u8fd9\u4e48\u591a\u4e86\uff0cAndroid \u5e73\u53f0 Canvas \u8fd8\u662f\u5f88\u9999\u7684\u3002"),(0,i.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u7ed8\u5236\u80fd\u529b\u7684\u8fdb\u9636"},"\u81ea\u5b9a\u4e49\u7ed8\u5236\u80fd\u529b\u7684\u8fdb\u9636"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u6ee1\u8db3\u4e8e\u7b80\u5355\u7684UI\u6837\u5f0f\u7ed8\u5236\uff0c\u76ee\u524d\u56fd\u5185\u5df2\u7ecf\u6709\u8bb8\u591a\u4f18\u79c0\u6280\u672f\u6587\u7ae0\u53ef\u4ee5\u4f9b\u4f60\u53c2\u8003\u4e0e\u5b66\u4e60\u4e86\uff0c\u4ee5\u4e0b\u63a8\u8350\u7684\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/user/4019470242152616"},"\u8def\u5f88\u957fOoO")," \u5927\u4f6c\u5728\u6398\u91d1\u793e\u533a\u5206\u4eab\u7684\u6709\u5173Compose \u81ea\u5b9a\u4e49\u7ed8\u5236\u7cfb\u5217\u6280\u672f\u6587\u7ae0\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6937700592340959269"},"JetPack-Compose - \u81ea\u5b9a\u4e49\u7ed8\u5236")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6940671523350904845"},"JetPack-Compose - Flutter  \u52a8\u6001UI? ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6947700226858123271"},"JetPack-Compose \u6c34\u58a8\u753b\u6548\u679c")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6943590136424693767"},"Jetpack\u2014Compose UI\u7ec8\u7ed3\u7bc7")))}w.isMDXComponent=!0}}]);