### Storage封装

#### Cookie、localStorage、sessionStorage三者区别
* 存储大小：Cookie4K、Storage5M
* 有效期：Cookie拥有有效期，Storage永久存储
* Cookie会发送到服务器，存储在内存中，Storage只存储在浏览器端
* 路径：Cookie有路径限制，Storage只存储在域名下
* API：Cookie没有特定的API，Storage有对应的API
**其中，locaStorage是本地永久存储，sessionStorage是内存存储，浏览器关闭自动清除**

#### 为什么封装Storage？
* Storage本身有API，但是只是简单的key/value形式
* Storage只存储字符串，需要人工转换成json对象
* Storage只能一次性清空，不能单个清空（这里指的是API方式清空，浏览器的方法还是可以单个清空的）