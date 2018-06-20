#一、HTML和CSS部分
===

>**要点：**对Web标准的理解、浏览器差异、CSS基本功：布局、盒子模型、选择器优先级及使用、HTML5、CSS3、移动端开发技术等  
**ps.**这些内容之后再看都会变的比较基础简单, 我期待这一天的到来. 


###1.Doctype作用? 严格模式与混杂模式-如何触发这两种模式，区分它们有何意义?
- <!DOCTYPE>,DTD文档模型，声明位于文档中的最前面，处于<html> 标签之前。告知浏览器的解析器，用什么文档类型 规范来解析这个文档。
- 严格模式的排版和JS运作模式是以该浏览器支持的最高标准运行。
- 在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
- DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。

###2.行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
- CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，比如div默认display属性值为“block”，成为“块级”元素；span默认display属性值为“inline”，是“行内”元素。
- 行内元素有: ```a b span img input select strong（强调的语气） ```
- 块级元素有:```div ul ol li dl dt dd h1 h2 h3 h4…p ```
- 知名的空元素： ```<br> <hr> <img> <input> <link> <meta> ```
- 鲜为人知的是： ```<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>```


###3.CSS的盒子模型？
***盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).***  

- 标准盒子模型
- 怪异盒子模型



###4.link 和@import 的区别是?
- 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
- import只在IE5以上才能识别，而link是XHTML标签，无兼容问题;
- ***link方式***的样式的***权重***高于@import的权重.


###5.CSS 选择符有哪些？
1. id选择器（ # myid）
2. 类选择器（.myclassname）
3. 标签选择器（div, h1, p）
4. 相邻选择器（h1 + p）
5. 子选择器（ul < li）
6. 后代选择器（li a）
7. 通配符选择器（ * ）
8. 属性选择器（a[rel = "external"]）
9. 伪类选择器（a: hover, li: nth - child）

###6.CSS哪些属性可以继承？
- 可继承： font-size font-family color, UL LI DL DD DT;
- 不可继承 ：border padding margin width height ;

###7.CSS优先级算法如何计算？
- 优先级就近原则，样式定义最近者为准;
- 载入样式以最后载入的定位为准;
- 优先级为:!important >  id > class > tag  
- important 比 内联优先级高

###8.CSS3新增伪类举例
```
p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
p:last-of-type  选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
:enabled、:disabled 控制表单控件的禁用状态。
:checked，单选框或复选框被选中。
```

###9.如何居中div,如何居中一个浮动元素?
- 给div设置一个宽度，然后添加margin:0 auto属性

		div{
			width:200px;
       		margin:0 auto;
     		} 

- 居中一个浮动元素

		确定容器的宽高 宽500 高 300 的层
      	设置层的外边距
		div { 
    		Width:500px ; height:300px;//高度可以不设
    		Margin: -150px 0 0 -250px;
      		position:relative;相对定位
      		background-color:pink;//方便看效果
      		left:50%;
      		top:50%;
    		} 


###10.浏览器的内核分别是什么?
- IE浏览器的内核Trident、 Mozilla的Gecko、google的WebKit、Opera内核Presto

###11.经常遇到的浏览器的兼容性有哪些？
- 关于兼容性的内容比较多,遇到问题在查找.
- ***当然最好的方式是直接使用成熟的框架(html5shim框架, Boilerplate模板, Initializr模板, modernizerjs检测浏览器兼容性并做相应处理)***

###12.你怎么来实现页面设计图，你认为前端应该如何高质量完成工作? 
- 实现效果图是最基本的工作，精确到2px; 
- 与设计师，产品经理的沟通和项目的参与; 
- 做好的页面结构，页面重构和用户体验; 
- 处理hack，兼容、写出优美的代码格式; 
- 针对服务器的优化、拥抱 HTML5. 


###13.常使用的库有哪些？
使用率较高的框架有jQuery

轻量级框架有Modernizr（理解这些框架的功能、性能、设计原理）

###14.常用的前端开发工具？
***Webstorm***, Brackets, Sublime Text, Chorme

###15.开发过什么应用或组件？
**轮播插件**

###16.列出display的值，说明他们的作用。
- block 象块类型元素一样显示。
- none 缺省值。向行内元素类型一样显示。
- inline-block 象行内元素一样显示，但其内容象块类型元素一样显示。
- list-item 象块类型元素一样显示，并添加样式列表标记。

###17.position的值， relative和absolute定位原点是？

- absolute  生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。 
- fixed （老IE不支持） 生成绝对定位的元素，相对于浏览器窗口进行定位。 
- relative  生成相对定位的元素，相对于其正常位置进行定位。 
- static  默认值。没有定位，元素出现在正常的流中
(忽略 top, bottom, left, right z-index 声明）。
- inherit 规定从父元素继承 position 属性的值。

###18.面重构怎么操作？
编写 CSS、让页面结构更合理化\语义化，提升用户体验，实现良好的页面效果和提升性能。

###19.语义化的理解？
- html语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；
- 在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。
- 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

###20.HTML5的离线储存？
- localStorage    长期存储数据，浏览器关闭后数据不丢失；
- sessionStorage  数据在浏览器关闭后自动删除。

###21.为什么要初始化CSS样式。
- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
- 当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。
- 最简单的初始化方法就是： * {padding: 0; margin: 0;} （不建议）
- 建议使用成熟的模板文件(tml5shim框架, Boilerplate模板, Initializr模板)开始.

###22.描述一段语义的html代码吧。
- 对于HTML4使用class描述, 标题h1, 文字span, 段落p等
- 对于H5, 多使用语义化标签
```
		<header>, <hgroup>, <nav>, <article>, <session>, <aside>和<footer>等
```

- 文本不包含样式信息, 使用CSS处理
- 不要使用纯样式标签，如：b、font、u等，改用css设置。
- 在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；

###23.iframe有那些缺点
- iframe会阻塞主页面的Onload事件
- iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以可以绕开以上两个问题


###24.css定义的权重
>**以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值**


	/*权重为1*/
	div{
	}
	/*权重为10*/
	.class1{
	}
	/*权重为100*/
	#id1{
	}
	/*权重为100+1=101*/
	#id1 div{
	}
	/*权重为10+1=11*/
	.class1 div{
	}
	/*权重为10+10+1=21*/
	.class1 .class2 div{
	}

**如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现**




###25.什么叫优雅降级和渐进增强？
- **优雅降级**：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效.
- **渐进增强**：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。



###26.WEB应用从服务器主动推送Data到客户端有那些方式？
- html5 websoket
- WebSocket通过Flash
- XHR长时间连接
- XHR Multipart Streaming
- 不可见的Iframe
- ```<script>```标签的长时间连接(可跨域)


===
#二、Javascript部分
===

>**要点：**数据类型、面向对象、继承、闭包、插件、作用域、跨域、原型链、模块化、自定义事件、异步装载回调、模板引擎、Nodejs等  

###1.js的几种数据类型
number,string,boolean,object,null,undefined

###2.js的常见内置对象类
Date,Array,Math、Number、Boolean、String、Array、RegExp、Function...


###3.创建一个对象
	function Person(name, age) {
        this.name = name;
        this.age = age;
        this.sing = function() { alert(this.name) } 
      } 

###4.谈谈This对象的理解。
- this是js的一个关键字，随着函数使用场合不同，this的值会发生变化。
- 但是总有一个原则，那就是this指的是调用函数的那个对象。
- this一般情况下：是全局对象Global。 作为方法调用，那么this就是指这个对象

###5.事件、IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
- 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。  
- 事件处理机制：IE是事件冒泡、火狐是 事件捕获；
- ev.stopPropagation();

###6.什么是闭包（closure），为什么要用？
**闭包**是指有权限访问另一个函数作用域的变量的函数，创建闭包的常见方式就是在一个函数内部创建另一个函数，



###7.如何判断一个对象是否属于某个类？
- 使用instanceof 
```if(arr instanceof Array){}```
- 如果在不同ifream或者不同window下   ```Object.prototype.toString.call(arr))//"[object Array]"，结果不受ifream的限制```


###8.new操作符具体干了什么呢?

1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2. 属性和方法被加入到 this 引用的对象中。
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this 。

		var obj  = {};
    	obj.__proto__ = Base.prototype;
    	Base.call(obj);

###9.JSON 的了解
JSON(JavaScript Object Notation) 是一种**轻量级的数据交换格式**。它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
```{'age':'12', 'name':'back'}```

###10.js延迟加载的方式有哪些
defer和async、动态创建DOM方式（用得最多）、按需异步载入js  
- **defer(H4):**异步下载，DOM解析完成后DOMContentLoaded事件触发之前执行, 注意：script里面不能有document.write的内容  
```<script defer src="myDeferScript.js" onload="myInit()"></script>  ```
- **async(H5:**异步下载，下载完后立即执行！  
```<script async src="myAsyncScript.js" onload="myInit()"></script>```
- 创建script，插入到DOM中，加载完毕后callBack

###11.ajax是什么?ajax 的交互模型?同步和异步的区别?

**Ajax:** asyn+javascript+and+xml

- 通过异步模式，提升了用户体验
- 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用
- Ajax在客户端运行，承担了一部分本来由服务器承担的工作，减少了大用户量下的服务器负载。

**同步异步的区别在于不阻塞当前进程**
###12.如何解决跨域问题?
 jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面

###13.模块化怎么做？
立即执行函数,不暴露私有成员

		var module1 = (function(){
			var _count = 0;
			var m1 = function(){
				//...
			};
			var m2 = function(){
				//...
			};
			return {
				m1 : m1,
				m2 : m2
				};
			})(); 

###14.eval是做什么的？
它的功能是把对应的字符串解析成JS代码并运行；
>避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。

###15.Node.js的适用场景
高并发、聊天、实时消息推送

###16.对Node的优点和缺点提出了自己的看法：
- （优点）因为Node是基于事件驱动和无阻塞的，所以非常适合处理并发请求，
      因此构建在Node上的代理服务器相比其他技术实现（如Ruby）的服务器表现要好得多。
      此外，与Node代理服务器交互的客户端代码是由javascript语言编写的，
      因此客户端和服务器端都用同一种语言编写，这是非常美妙的事情。

- （缺点）Node是一个相对新的开源项目，所以不太稳定，它总是一直在变，
      而且缺少足够多的第三方库支持。看起来，就像是Ruby/Rails当年的样子。


###17.documen.write和 innerHTML的区别

- document.write是直接写入到页面的内容流, 只能重写整个document, 写入内容是字符串的html
- innerHTML是HTMLElement的属性，是一个元素的内部html内容, 可以精确到某一个具体的元素来进行更改
- innerHTML很多情况下都优于document.write，原因是其允许更精确的控制要刷新页面的那一个部分。

###18.JS中的call()和apply()方法的区别？
- 调用一个对象的一个方法，以另一个对象替换当前对象。
- apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）
- 如 func.call(func1,var1,var2,var3)对应的apply写法为：func.apply(func1,[var1,var2,var3])
- 说明白一点其实就是更改对象的内部指针，即改变对象的this指向的内容。

		<script>
   			var func=new function(){this.a="func"}
    		var myfunc=function(x){
    			cosole.log(this) 
        		var a="myfunc";
        		console.log("a:"+a);
       	 		console.log("this.a:"+this.a);
        		console.log("x:"+x);  
        		cosole.log(this)      	
    			}
    		myfunc.call(func,"var");
		</script>
		
		输出:
		Object {a: "func"}
		a:myfunc
		this.a:func
		x:var
		Object {a: "func"}

**call相当于1. 把两个函数的作用域揉在一起了.2. this指向了call的第一参数(func), 并且不会再给myfunc. **首先,myfunc.call(func,"var")时,this指针由之前的myfun指向了func,并执行了this.a="func"; 之后在myfunc继续向下执行var a="myfunc"; console.log("a:"+a); 所以输出a:myfunc; 因为this.a="func", 故输出this.a:"func"; x的传入参数是var, 所以输出var. 	


- 事实上，apply()和call()并非只用来传递参数，它们真正强大的地方是能够扩充函数赖以运行的作用域。

		window.color = "red";
		var o = {
   		 color: "blue"
		};

		function sayColor() {
		    alert(this.color);
		}

		sayColor();             //red
		sayColor.call(this);    //red
		sayColor.call(window);  //red
		sayColor.call(o);       //blue
		sayColor()
		
		
是作为全局函数定义的，当在全局作用域中调用它时，它会显示“red”——因为对this.color的求值会转换成window.color的求值。而sayColor.call(this)和sayColor.call(window)，则是两种显式地在全局作用中调用函数的方式，结果当然都会显示“red”。但是，当运行sayColor.call(o)时，函数的执行环境就不一样了，因为此时函数体内的this对象指向了o，于是就显示的是“blue”。

>使用call或apply()来扩充作用域的最大好处，就是对象不需要与方法有任何耦合关系。

###19.Jquery与jQuery UI 有啥区别？

- jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。
- jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等

###20.jquery 中如何将数组转化为json字符串，然后再转化回来？

jQuery中没有提供这个功能，所以你需要先编写两个jQuery的扩展：

	$.fn.stringifyArray = function(array) {
        	return JSON.stringify(array)
    	}

    	$.fn.parseArray = function(array) {
        	return JSON.parse(array)
    	} 

    然后调用：
    $("").stringifyArray(array)

###21.JavaScript原型，原型链 ? 有什么特点？
原型对象也是普通的对象，是对象一个自带隐式的 ```__proto__``` 属性，原型也有可能有自己的原型，如果一个原型对象的原型不为null的话，我们就称之为原型链（prototype chain）。

>原型链是一个由对象组成的有限对象链由于实现继承和共享属性。


下面的图示就是表示了上述a,b,c的继承关系

![原型链](http://pic002.cnblogs.com/images/2011/349491/2011123111374453.png)

####原型使用方式1：

		var Calculator = function (decimalDigits, tax) {
            this.decimalDigits = decimalDigits;
            this.tax = tax;
        };

然后，通过给Calculator对象的**prototype**属性赋值**对象字面量**来设定Calculator对象的原型。

		Calculator.prototype = {
            add: function (x, y) {
                return x + y;
            },

            subtract: function (x, y) {
                return x - y;
            }
        };
        
        alert((new Calculator()).add(1, 3));

这样，我们就可以new Calculator对象以后，就可以调用add方法来计算结果了。

####原型使用方式2：
第二种方式是，在赋值原型prototype的时候使用function立即执行的表达式来赋值，即如下格式：

		Calculator.prototype = function () { } ();

它的好处在前面的帖子里已经知道了，就是可以封装私有的function，通过return的形式暴露出简单的使用名称，以达到public/private的效果，修改后的代码如下：

		Calculator.prototype = function () {
            add = function (x, y) {
                return x + y;
            },

            subtract = function (x, y) {
                return x - y;
            }
            return {
                add: add,
                subtract: subtract
            }
        } ();

        alert((new Calculator()).add(11, 3));

同样的方式，我们可以new Calculator对象以后调用add方法来计算结果了。

####实现对象的继承：(实现原型链)

		//创建BaseCaculator对象
		var BaseCalculator = function() {
    		this.decimalDigits = 2;
			};
		//添加功能-对象
		BaseCalculator.prototype = {
    		add: function(x, y) {
        		return x + y;
    		},
    		subtract: function(x, y) {
        		return x - y;
    		}
		};

		var Calculator = function () {
    		//为每个实例都声明一个税收数字
    		this.tax = 5;
		};
        
        //继承
		Calculator.prototype = new BaseCalculator();
		
		var calc = new Calculator();
		alert(calc.add(1, 1));
		//BaseCalculator 里声明的decimalDigits属性，在 Calculator里是可以访问到的
		alert(calc.decimalDigits); 

####实现对象的重写:
		
		//覆盖前面Calculator的add() function 
		Calculator.prototype.add = function (x, y) {
    		return x + y + this.tax;
		};

		var calc = new Calculator();
		alert(calc.add(1, 1));

###22.原型链上对象属性的查找

>当查找一个对象的属性时，JavaScript 会向上遍历原型链，**属性在查找的时候是先查找自身的属性**，**如果没有再查找原型**，再没有，再往上走，直到找到给定名称的属性为止，到查找到达原型链的顶部 - 也就是 **Object.prototype** - 但是仍然没有找到指定的属性，就会返回 undefined


####hasOwnProperty函数
hasOwnProperty是Object.prototype的一个方法, 他能判断一个对象是否包含自定义属性而不是原型链上的属性，**因为hasOwnProperty 是 JavaScript 中唯一一个处理属性但是不查找原型链的函数。**

如果hasOwnProperty被重写, **使用下面的方法总是保险的:**

		var foo = {
    		hasOwnProperty: function() {
        		return false;
    		},
    		bar: 'Here be dragons'
		};

		foo.hasOwnProperty('bar'); // 总是返回 false

		// 使用{}对象的 hasOwnProperty，并将其上下为设置为foo
		{}.hasOwnProperty.call(foo, 'bar'); // true

遍历foo对象, 例举出属于他自己的对象:

		Object.prototype.bar2 = 1;
		
		for(var i in foo) {
    		if ({}.hasOwnProperty.call(foo,i)) {
        	console.log(i);
    		}
		}
		//hasOwnProperty
		//bar

不输出bar2.



===
###30个你 “ 不可能全部会做 ” 的javascript题目


>通常可以做一些小练习来判断TA的水平，js 虽然很灵活，但是具体的代码和实现方式能体现出一个人的全局观，随着代码规模的增长，复杂度增加，如何合理划分模块实现功能和接口的能力比较重要。（下面例题）  

		1.
		["1", "2", "3"].map(parseInt)	
		->	[1, NaN, NaN]//因为parseInt需要两个参数,而map传递了三个,故...
		//应该为["1", "2", "3"].map(function(value){return parseInt(value)});

		2.
		[typeof null, null instanceof Object]	
		->["object", false]
		
		3.
		[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow)] ]
		->Math.power(底数,指数),故第一次:Math.power(3,2)=9,第二次:Math.power(9,1)=9.
		
		4.
		var val = 'smtg';
 		console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');
 		-> Something,先进行字符串拼接,故不管什么值都返回something
 		
		5.
  		var name = 'World';
		(function(){
			if(typeof name === 'undefined'){
				var name = "Jack";
				console.info('Goodbye '+ name);
			}else{
				console.info('Hello ' + name);
			}
		})();
 		->判断语句被包裹在立即调用函数里，函数内部无法访问外部值为'World'的name，
 		因此typeof name === 'undefined'为真，执行下一步操作，最终输出Goodbye Jack
 
 		6.
 		var START = END -100;
		var count = 0;

		for(var i = START ; i <= END ;i++){
			count ++;
		}
		console.info(count);		
 		->END = 9007199254740992 ,START = 9007199254740892目的是计算的END和START之间的
 		差。但是2的53次方计算出的结果由于精度问题使得i++失效。
 		
		7.
 		(function(x){
   			delete x;
    		alert(x);
		})(1+5);
		-> 6//delete只能通过for in删除访问的属性, 即使删除失败也不会报错,返回6

	
#三、其他
===
###1.平时如何管理你的项目，如何设计突发大规模并发架构？
- 先期团队必须确定好全局样式（globe.css），编码模式(utf-8) 等
- 编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；
- 标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；
- 页面进行标注（例如 页面 模块 开始和结束）；
- CSS跟HTML 分文件夹并行存放，命名都得统一（例如style.css）
- JS 分文件夹存放 命民以该JS 功能为准英文翻译；
- 图片采用整合的 images.png png8 格式文件使用 尽量整合在一起使用方便将来的管理

###2.一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）
**HTTP请求流程:**

1. 建立TCP链接
2. 浏览器向服务器发送请求命令-（GET 路径/文件名 HTTP/1.0）
3. 浏览器发送请求头信息（RequestHeader）
4. 服务器应答，发送HTTP状态码
5. 服务器发送应答头（ResponseHeader）
6. 服务器向浏览器发送数据
	1. html下载
	2. 建立文档树,根据标记请求加载指定MIME类型的文件(CSS, HTML, JS, 图片等)
	3. 对加载的文件进行语法解析,建立相应的内部数据结构,例如: HTML的DOM树, JS的对象属性表, CSS样式规则等 
7. 发送完毕关闭TCP链接（如果有信息包含Connection：keep-alive，则TCP任然保持打开状态）




###3.http状态码有那些？分别代表是什么意思？
- 100-199 用于指定客户端应相应的某些动作。 
- 200-299 用于表示请求成功。 
- 300-399 用于已经移动的文件并且常被包含在定位头信息中指定新的地址信息。 
- 400-499 用于指出客户端的错误。
	- 400  语义有误，当前请求无法被服务器理解。
	- 401  当前请求需要用户验证 
	- 403  服务器已经理解请求，但是拒绝执行它。
- 500-599 用于支持服务器错误。 
	- 503  服务不可用







