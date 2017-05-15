var getVideoUrl = function(a){

			a = a||{};
			var opts = {
				videoType   : a.videoType || 0,      //获取视频分类；不能为空；如：腾讯视频:1，乐视视频:2，优酷视频:3，乐视云视频:4；
				vid         : a.vid || '',            //获取vid，不能为空
				devid       : a.devid || '',
				uuid		: a.uuid || '',
				sources     : a.source || 0,           //片源切换，标清-1；高清-2；超清-3；1080P-4；
				netWorkType : a.netWorkType || 1        //1--移动网络； 2--WiFi
			};


			//获取腾讯视频地址主函数
			var getQQVideoUrl = function(){
				var APIUrl = 'http://sec.video.qq.com/p/h5vv.video/getinfo';
				var fileUrl = '';
				$.ajax({
					url: APIUrl,
					dataType: 'jsonp',
					data: {
						otype: 'json', 
						vids: opts.vid, 
						platform: '11001'
					},
					timeout: 3000,
					success: function(ret){
						var baseArr = ret.vl.vi[0];
						var baseDomain = baseArr.ul.ui[0].url;
						var fileName = baseArr.fn;
						var vkey = baseArr.fvkey;
						fileUrl = baseDomain + fileName + '?vkey=' + vkey;
						window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_1_DYR_AND_state_DYR_EQUAL_1_DYR_AND_fileurl_DYR_EQUAL_"+ fileUrl+"_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
					},
					error: function(xhr, type){
						//请求出错时，提示客户端
						window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_1_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
					}
				})
			};

			//获取乐视视频地址主函数
			var getLEVideoUrl = function(){
				
				//乐视加密算法
				var x2O=(function(){var j3=(0x33,86.8E2)<0x19?47:56.5E1<19?(0x5b,0x56):(0x17,0x2a)<(0x61,50.3E0)?(81,0x1e04890bccee):(81,0x1d),k2=(function(a4,D4){var b2="",A5=93.57E+0>(0x45,51.23E3)?(79.096E1,67.729E+0):42.9E3<=(35.8E2,76.)?(22.7E1,40.4E+2):(0x1,0x18)<=(72.1E2,84.64E3)?false:(15,0x4f);if(a4.length>(67.95E2,99)<(22.,21.)?(68,44.433E2):(0x9,0x3a)<=(71.11E+0,26.)?0x53:(0x47,21.)<=91.?(35,0xc):(0xd,69.68E1))for(var I2=(36.86E+1,62.)>(19.5E2,52.5E2)?(43,31.):0x27<29.82E0?(0x5d,47.672E0):0x50<86.3E3?(88.91E3,0xd):(0x29,88.33E3)>(56.,0x51)?(57.5E+1,12.88E+3):32E2>(29.6E1,0x29)?(41.428E+3,0x26):0x53<=0x1d?(29,19.):72.23E1>=0x37?(0x10,0x1b):(42.,90.);I2>1;)b2+=(A5=A5?(0x5b,64.)>=(80.,11.415E1)?7.747E2:(0x32,85)>=(52.641E1,11.033E2)?(78.07E+2,0x31):40.<=(0x19,0x15)?95.:(86.196E2,80.43E0)>=(74.45E0,23)?(73.8E0,false):(0x44,0xc)>=(60.39E2,0x11)?0x3:(0x4,69.99E2)<=(43.,45.2E1)?(70.396E0,0x3c):(0x7,20)>(18.577E1,0x4e)?(58,56E1):(0x7,3)>=66.3E+0?(36.1E0,57.19E3):(0x10,0x1a):(0x4f,9E+2)<=(87.,0x5d)?(8,0x3f):0x22>=(0x47,10.29E1)?(0x9,0x4b):6.243E1>0x53?(94,0x4d):(0x4b,97.9E2)<0x6?(48.8E1,51.61E3):(27.,42.529E+1)<0x4e?(0x58,60.189E+2):true)?a4.charAt(I2):"@%)eitg)(tDwn".charAt(I2--);return D4===null?eval(b2):D4^a4})("_9(mTe.)ea e(",(72.2E2,32.26E2)>=21.9E0?null:(42.8E3,75)<0x1c?62:(0x4f,0x4)<67.?(55.056E0,13.14E2):(85E2,10.5E2)<(73.81E3,40.269E0)?(89.274E+2,36.3E0):(0x51,0x22)<(0x18,5.28E0)?(0x2b,0x25):0x58);return{h8:function(p5){var T5,t7=(0x15,31.364E3)<=33?(94,97):(98.8E2,0x1f)<0x4e?(19,0x0):(0x14,0x9)<=64.3E2?65.4E2:(0x31,0x49)>=(0x39,88)?28.443E2:94.<29?(0x34,0x52):(46E2,0x1a),n6=j3>k2,T9;for(;t7<p5.length;){T9=(parseInt(p5.charAt(t7),17.7E2<24.?(0x62,0x6):(93.31E3,54.4E2)>=(40.51E0,0x3d)?(81,0x10):(0x38,73.41E+0)>=(27.91E1,81.)?(81,76E2):0x48<=(0x3b,88)?(76,90):(0x31,0x1d)>(92.77E+3,75.)?78.:(83.41E1,0x2c)>=61.7E2?94:(21.112E2,0x5)<(0x25,72.9E3)?0x17:(27.23E1,68.948E1))).toString((89,0x62)<(0x27,0x45)?(26.214E1,23.5E3):(2.26E1,64)>=70.9E1?(76.189E1,0x43):(0x25,96)<(37.321E1,1.2E1)?(0x1d,0x33):(0x3f,0x7)>(0x13,0x3)?0x2:(0x13,92E3)>=(0x4f,48.)?82.:(48.435E+2,0x3f)<=(79.049E1,91.)?(81.6E3,0x4e):0x4c>=46.853E+3?44.24E3:75);T5=t7++==(0x28,80.254E1)<=(61.,0x12)?(18.,36.29E3):(31.88E1,0x2a)>(60.,0x5f)?0x1d:(18.871E3,38.3E+2)>0x59?(0x5f,0x0):48.7E+2<(64.43E1,98)?70.1E2:0x46>86.5E0?(0x4a,79):(0x55,82.3E1)>=(66.,0x34)?(39.9E1,0x3b):42.12E3<(0x14,56.)?43:36.?T9.charAt(T9.length-(78.1E2,0x5d)>=(77.,36.099E+3)?(59.01E2,76.54E1):4.55E1<(81,10.14E1)?0x1:(0x4f,0x42)>(0x47,39.)?(27.,0x40):(0x13,95.)>=0x1?(0x4e,0x24):(12.188E2,0x1d)):T5^T9.charAt(T9.length-(0x26,86.28E+1)<(88.93E1,21.9E0)?(76.421E1,73):(80.,0x29)<=0x2c?(70.35E2,0x1):(0x18,0x1)>(48.97E3,61.39E2)?85.07E1:0x23)}return T5?!n6:n6}}})();var _1="feda8dd6e0127da88f3487a646fe8a6b",_2="jjuy9567dfj6bkksomnnghwokjlu0o",_3="tYt2bxik";var x2q={D:function(Y,r){return Y|r},d:function(Y,r){return Y%r},O:function(Y,r){return Y^r},k:function(Y,r){return Y<r},J:function(Y,r){return Y>>r},R:function(Y,r){return Y===r},g:function(Y,r){return Y>r},o:function(Y,r){return Y&r},l:function(Y,r){return Y!==r},L:function(Y,r){return Y!=r},a:function(Y,r){return Y-r},u:function(Y,r){return Y==r},e:function(Y,r){return Y<<r}};var Key={liveKey:_1,APIKey:_2,secret_key:_3,getAPIKey:function(e){var _1="AES",_2="decrypt",_3="APIKey",_4=x2O.h8("01")?"toString":"AES",_5="enc",_6="Utf8",_7="error";try{return Encode[_1][_2](e,this[_3])[_4](Encode[_5][_6])}catch(t){return _7}},getCl:function(e){var _1="MD5",_2=x2O.h8("303w")?"showmethemoney":"join",_3=x2O.h8("9127")?"error":"liveKey";try{return Encode[_1](e+_2)}catch(t){return _3}},getMmsKey:function(e){var _1=x2O.h8("49")?"d":"MD5",_2="rotateRight",_3="O";var t=47.3E2<=(67.01E3,78.4E1)?("d",37.2E2):4.1E2<=(0x2b,95)?0x63:(13.956E2,42.453E2)<=0x2?(93.79E2,"error"):(0x28,97.)<("error",8.)?(",","g"):(96.31E3,92.926E0)>=(0x35,0x5d)?0x62:10.>=(64.5E1,55.)?79.671E1:62.2E2<=0x2a?(20.908E1,93.):(0x1b,2.49E1)<0x5e?(52,0xb074319):(11,75.1E1)<(60.,55.42E1)?(0x11,50.66E1):(85.224E+2,0x5d),r=x2q[_1](t,17),n=e;n=this[_2](n,r);var o=x2q[_3](n,t);return o},rotateRight:function(e,t){var _1=x2O.h8("91")?"g":"tYt2bxik",_2="o";for(var r,n=0;x2q[_1](t,n);n++)r=x2q[_2](1,e),e>>=1,r<<=31,e+=r;return e},getLiveTkey:function(e,t){var _1="MD5",_2="liveKey",_3="join",_4=",",_5="toString";return Encode[_1]([e,t,this[_2]][_3](_4))[_5]()},getPingBackKey:function(e,t,r,n){var _1=x2O.h8("mo48")?"MD5":"rotateRight",_2=x2O.h8("8889")?"secret_key":"MD5",_3="toString";return Encode[_1](e+t+r+n+this[_2])[_3]()}};
				function getKey() {
					var e = new Date().getTime() / 1000;
					var _1 = x2O.h8("49") ? "d" : "MD5",_2 = "rotateRight",_3 = "O";
					var t = 47.3E2 <= (67.01E3, 78.4E1) ? ("d", 37.2E2) : 4.1E2 <= (0x2b, 95) ? 0x63 : (13.956E2, 42.453E2) <= 0x2 ? (93.79E2, "error") : (0x28, 97.) < ("error", 8.) ? (",", "g") : (96.31E3, 92.926E0) >= (0x35, 0x5d) ? 0x62 : 10. >= (64.5E1, 55.) ? 79.671E1 : 62.2E2 <= 0x2a ? (20.908E1, 93.) : (0x1b, 2.49E1) < 0x5e ? (52, 0xb074319) : (11, 75.1E1) < (60., 55.42E1) ? (0x11, 50.66E1) : (85.224E+2, 0x5d),r = x2q[_1](t, 17),n = e;n = rotateRight(n, r);
					var o = x2q[_3](n, t);
					return o;
				}
				function rotateRight(e, t) {
					var _1 = x2O.h8("91") ? "g" : "tYt2bxik",_2 = "o";
					for(var r, n = 0; x2q[_1](t, n); n++){r = x2q[_2](1, e),e >>= 1,r <<= 31,e += r;}
					return e
				}

				var leSources = (opts.sources == 0 && opts.netWorkType == 1 && 350) || (opts.sources == 0 && opts.netWorkType == 1 && 1000) || (opts.sources == 1 && 350) || (opts.sources == 2 && 1000) || (opts.sources == 3 && 1300) || 350;
				var leDomain = (opts.sources > 0 && opts.sources) || opts.netWorkType-1;
				
				//生成devid
				var createDevid = function(){
					for (var str = '', i = 32; i--; ){
						str += Math.floor(16 * Math.random()).toString(16);
					};
					return str;
				};

				//赋值devid
				if(opts.devid == '') opts.devid = createDevid().toUpperCase();

				//生成uuid
				if(opts.uuid == '') opts.uuid = "1" + String((new Date).getTime()).slice(4) + String(Math.random()).slice(-6);

				//发出请求
				$.ajax({
					url: 'http://player-pc.le.com/mms/out/video/playJson.json',
					dataType: 'jsonp',
					data: {
						id: opts.vid,           //视频ID由客户端传值
						tkey: getKey(),         //视频加密key由以上加密算法计算得出
						devid: opts.devid,      //视频devid由客户端传值
						platid: 3,              //固定值
						splatid: 301,           //固定值
						tss: 'no',              //固定值
						detect: 0,              //固定值
						dvtype: 1000,           //固定值
						accessyx: 1,            //固定值
						domain: 'm.le.com',     //固定值
						source: 1001,           //固定值
						lang: 'cn',             //固定值
						region: 'cn',           //固定值
						isHttps: 0              //固定值
					},
					timeout: 3000,
					success: function(ret){
						var tmpUrl = ret.msgs.playurl.domain[leDomain]+ret.msgs.playurl.dispatch[leSources][0];
						getLEVideoUrl2(tmpUrl);
					},
					error: function(xhr, type){
						//请求出错时，提示客户端
						window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_2_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid+"_DYR_AND_devid_DYR_EQUAL_"+opts.devid;
					}
				});

				//获取乐视视频播放地址
				var getLEVideoUrl2 = function(getUrl){
					var timers = 'vjs_'+new Date().getTime();
					if(getUrl == '') return;
					$.ajax({
						url: getUrl,
						dataType: 'jsonp',
						jsonpCallback: timers,
						data: {
							format: 1,              //固定值
		                    jsonp: timers,          //callback回调函数
		                    expect: 3,              //固定值
		                    p1: 0,                  //固定值
		                    p2: '04',               //固定值
		                    termid: 2,              //固定值
		                    ostype: 'un',            //固定值
		                    hwtype: 'iphone',       //固定值
		                    uuid: opts.uuid,             //视频devid由客户端传值
		                    vid: opts.vid          //视频ID由客户端传值
						},
						timeout: 3000,
						success: function(ret){
							window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_2_DYR_AND_state_DYR_EQUAL_1_DYR_AND_fileurl_DYR_EQUAL_"+ ret.location+"_DYR_AND_vid_DYR_EQUAL_"+opts.vid+"_DYR_AND_devid_DYR_EQUAL_"+opts.devid;
						},
						error: function(xhr, type){
							//请求出错时，提示客户端
							window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_2_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid+"_DYR_AND_devid_DYR_EQUAL_"+opts.devid;
						}
					});
				}
			};

			var getMyYouKuVideoUrl = function(){

				loadfile("https://log.mmstat.com/eg.js", "js");
				var getUrl = 'https://ups.youku.com/ups/get.json';
				var client_ts = parseInt((new Date).getTime() / 1000);
				var i = 0;
				function postUrl(){
					if(typeof window.goldlog == 'object'){
						var utid = window.goldlog.Etag;
						$.ajax({
							url: getUrl,
							dataType: 'jsonp',
							data: {
								vid: opts.vid,			//视频ID由客户端传值
								ccode: '0401',			//固定值
			                    client_ip: '0.0.0.0',	//固定值
			                    client_ts: client_ts,	//固定值
			                    utid: utid              //动态获取，默认5秒未出结果则返回失败
			                },           
							timeout: 3000,
							success: function(ret){
								var url3g = '', urlWifi = '', totalSecond3g = 0, totalSecondWifi = 0, totalSize3g = 0, totalSizeWifi = 0;
								var stream = ret.data.stream;
								var YKurlList = '';
								if(stream)
									YKurlList = stream[1].segs[0].cdn_url;
								console.log(YKurlList);
								if(YKurlList != '')
									$('#my_video_1').attr("src",YKurlList);
								    // window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_1_DYR_AND_fileurl_DYR_EQUAL_"+ url +"_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
							},
							error: function(xhr, type){
								//请求出错时，提示客户端
								window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
							}
						});
					}else{
						setTimeout(function(){
							i++;
							if(i>25){
								window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
							}else{
								postUrl();
							}
						},200)
					}
				}
				postUrl();
			};


			//优酷视频
			var getYouKuVideoUrl = function(){

				loadfile("https://log.mmstat.com/eg.js", "js");
				var getUrl = 'https://ups.youku.com/ups/get.json';
				var client_ts = parseInt((new Date).getTime() / 1000);
				var i = 0;
				function postUrl(){
					if(typeof window.goldlog == 'object'){
						var utid = window.goldlog.Etag;
						$.ajax({
							url: getUrl,
							dataType: 'jsonp',
							data: {
								vid: opts.vid,			//视频ID由客户端传值
								ccode: '0501',			//固定值
			                    client_ip: '0.0.0.0',	//固定值
			                    client_ts: client_ts,	//固定值
			                    utid: utid              //动态获取，默认5秒未出结果则返回失败
			                },           
							timeout: 3000,
							success: function(ret){
								var url3g = '', urlWifi = '', totalSecond3g = 0, totalSecondWifi = 0, totalSize3g = 0, totalSizeWifi = 0;
								var stream = ret.data.stream;
								for(var o in stream){
									if(stream[o].stream_type == '3gphd'){
										if(stream[o].milliseconds_video > totalSecond3g){
											totalSecond3g = stream[o].milliseconds_video;
											totalSize3g = stream[o].size;
											url3g = 'ffconcat version 1.0\r\n';
											for(var i in stream[o].segs){
												url3g += 'file '+stream[o].segs[i].cdn_url+'\r\n';
												url3g += 'duration '+stream[o].segs[i].total_milliseconds_video/1000+'\r\n';
											}
										}
									};
									if(stream[o].stream_type == 'mp4hd'){
										if(stream[o].milliseconds_video > totalSecondWifi){
											totalSecondWifi = stream[o].milliseconds_video;
											totalSizeWifi = stream[o].size;
											urlWifi = 'ffconcat version 1.0\r\n';
											for(var i in stream[o].segs){
												urlWifi += 'file '+stream[o].segs[i].cdn_url+'\r\n';
												urlWifi += 'duration '+stream[o].segs[i].total_milliseconds_video/1000+'\r\n';
											}
										}
									};
								};
								var YKurlList = '', totalSecond = 0, totalSize = 0;
								if(opts.netWorkType == 1){
									YKurlList = url3g || urlWifi;
									totalSecond = totalSecond3g || totalSecondWifi;
									totalSize = totalSize3g || totalSizeWifi;
								}else if(opts.netWorkType == 2){
									YKurlList = urlWifi || url3g;
									totalSecond = totalSecondWifi || totalSecond3g;
									totalSize = totalSizeWifi || totalSize3g;
								};
								totalSecond = Math.floor(totalSecond/1000);
								if(YKurlList != '') JDY.loadFfconcat(YKurlList, totalSecond, totalSize, opts.vid);
								//window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_1_DYR_AND_fileurl_DYR_EQUAL_"+ url +"_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
							},
							error: function(xhr, type){
								//请求出错时，提示客户端
								window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
							}
						});
					}else{
						setTimeout(function(){
							i++;
							if(i>25){
								window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
							}else{
								postUrl();
							}
						},200)
					}
				}
				postUrl();
			};

			//乐视云视频
			var getLeCloudVideoUrl = function(){
				var creatUuid = function() {
	                var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = [], c, d;
	                d = 16;
	                for (c = 0; 32 > c; c++)
	                    b[c] = a[0 | Math.random() * d];
	                return b.join("")
	            };
	            var MD5 = function(){
			        function a(a, b, c, d, l, m) {
			            a = g(g(b, a), g(d, m));
			            return g(a << l | a >>> 32 - l, c)
			        }
			        function b(b, c, d, g, l, m, n) {
			            return a(c & d | ~c & g, b, c, l, m, n)
			        }
			        function d(b, c, d, g, l, m, n) {
			            return a(c & g | d & ~g, b, c, l, m, n)
			        }
			        function c(b, c, d, g, l, m, n) {
			            return a(d ^ (c | ~g), b, c, l, m, n)
			        }
			        function g(a, b) {
			            var c = (a & 65535) + (b & 65535);
			            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
			        }
			        return {
			            hash: function(e) {
			                for (var f = [], h = 0; h < 8 * e.length; h += 8)
			                    f[h >> 5] |= (e.charCodeAt(h / 8) & 255) << h % 32;
			                e = 8 * e.length;
			                f[e >> 5] |= 128 << e % 32;
			                f[(e + 64 >>> 9 << 4) + 14] = e;
			                e = 1732584193;
			                for (var h = -271733879, k = -1732584194, l = 271733878, m = 0; m < f.length; m += 16) {
			                    var n = e
			                      , s = h
			                      , t = k
			                      , q = l;
			                    e = b(e, h, k, l, f[m + 0], 7, -680876936);
			                    l = b(l, e, h, k, f[m + 1], 12, -389564586);
			                    k = b(k, l, e, h, f[m + 2], 17, 606105819);
			                    h = b(h, k, l, e, f[m + 3], 22, -1044525330);
			                    e = b(e, h, k, l, f[m + 4], 7, -176418897);
			                    l = b(l, e, h, k, f[m + 5], 12, 1200080426);
			                    k = b(k, l, e, h, f[m + 6], 17, -1473231341);
			                    h = b(h, k, l, e, f[m + 7], 22, -45705983);
			                    e = b(e, h, k, l, f[m + 8], 7, 1770035416);
			                    l = b(l, e, h, k, f[m + 9], 12, -1958414417);
			                    k = b(k, l, e, h, f[m + 10], 17, -42063);
			                    h = b(h, k, l, e, f[m + 11], 22, -1990404162);
			                    e = b(e, h, k, l, f[m + 12], 7, 1804603682);
			                    l = b(l, e, h, k, f[m + 13], 12, -40341101);
			                    k = b(k, l, e, h, f[m + 14], 17, -1502002290);
			                    h = b(h, k, l, e, f[m + 15], 22, 1236535329);
			                    e = d(e, h, k, l, f[m + 1], 5, -165796510);
			                    l = d(l, e, h, k, f[m + 6], 9, -1069501632);
			                    k = d(k, l, e, h, f[m + 11], 14, 643717713);
			                    h = d(h, k, l, e, f[m + 0], 20, -373897302);
			                    e = d(e, h, k, l, f[m + 5], 5, -701558691);
			                    l = d(l, e, h, k, f[m + 10], 9, 38016083);
			                    k = d(k, l, e, h, f[m + 15], 14, -660478335);
			                    h = d(h, k, l, e, f[m + 4], 20, -405537848);
			                    e = d(e, h, k, l, f[m + 9], 5, 568446438);
			                    l = d(l, e, h, k, f[m + 14], 9, -1019803690);
			                    k = d(k, l, e, h, f[m + 3], 14, -187363961);
			                    h = d(h, k, l, e, f[m + 8], 20, 1163531501);
			                    e = d(e, h, k, l, f[m + 13], 5, -1444681467);
			                    l = d(l, e, h, k, f[m + 2], 9, -51403784);
			                    k = d(k, l, e, h, f[m + 7], 14, 1735328473);
			                    h = d(h, k, l, e, f[m + 12], 20, -1926607734);
			                    e = a(h ^ k ^ l, e, h, f[m + 5], 4, -378558);
			                    l = a(e ^ h ^ k, l, e, f[m + 8], 11, -2022574463);
			                    k = a(l ^ e ^ h, k, l, f[m + 11], 16, 1839030562);
			                    h = a(k ^ l ^ e, h, k, f[m + 14], 23, -35309556);
			                    e = a(h ^ k ^ l, e, h, f[m + 1], 4, -1530992060);
			                    l = a(e ^ h ^ k, l, e, f[m + 4], 11, 1272893353);
			                    k = a(l ^ e ^ h, k, l, f[m + 7], 16, -155497632);
			                    h = a(k ^ l ^ e, h, k, f[m + 10], 23, -1094730640);
			                    e = a(h ^ k ^ l, e, h, f[m + 13], 4, 681279174);
			                    l = a(e ^ h ^ k, l, e, f[m + 0], 11, -358537222);
			                    k = a(l ^ e ^ h, k, l, f[m + 3], 16, -722521979);
			                    h = a(k ^ l ^ e, h, k, f[m + 6], 23, 76029189);
			                    e = a(h ^ k ^ l, e, h, f[m + 9], 4, -640364487);
			                    l = a(e ^ h ^ k, l, e, f[m + 12], 11, -421815835);
			                    k = a(l ^ e ^ h, k, l, f[m + 15], 16, 530742520);
			                    h = a(k ^ l ^ e, h, k, f[m + 2], 23, -995338651);
			                    e = c(e, h, k, l, f[m + 0], 6, -198630844);
			                    l = c(l, e, h, k, f[m + 7], 10, 1126891415);
			                    k = c(k, l, e, h, f[m + 14], 15, -1416354905);
			                    h = c(h, k, l, e, f[m + 5], 21, -57434055);
			                    e = c(e, h, k, l, f[m + 12], 6, 1700485571);
			                    l = c(l, e, h, k, f[m + 3], 10, -1894986606);
			                    k = c(k, l, e, h, f[m + 10], 15, -1051523);
			                    h = c(h, k, l, e, f[m + 1], 21, -2054922799);
			                    e = c(e, h, k, l, f[m + 8], 6, 1873313359);
			                    l = c(l, e, h, k, f[m + 15], 10, -30611744);
			                    k = c(k, l, e, h, f[m + 6], 15, -1560198380);
			                    h = c(h, k, l, e, f[m + 13], 21, 1309151649);
			                    e = c(e, h, k, l, f[m + 4], 6, -145523070);
			                    l = c(l, e, h, k, f[m + 11], 10, -1120210379);
			                    k = c(k, l, e, h, f[m + 2], 15, 718787259);
			                    h = c(h, k, l, e, f[m + 9], 21, -343485551);
			                    e = g(e, n);
			                    h = g(h, s);
			                    k = g(k, t);
			                    l = g(l, q)
			                }
			                f = [e, h, k, l];
			                e = "";
			                for (h = 0; h < 4 * f.length; h++)
			                    e += "0123456789abcdef".charAt(f[h >> 2] >> h % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(f[h >> 2] >> h % 4 * 8 & 15);
			                return e
			            }
			        }
		        }();
		        var getSign = function(a) {
		            return MD5.hash(a.join("") + "fbeh5player12c43eccf2bec3300344")
		        };
		        var BaseCode = {
			        decode: function(a) {
			            var b, d, c, g, e, f = 0, h = 0;
			            g = "";
			            var k = [];
			            if (!a)
			                return a;
			            a += "";
			            do
			                b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
			                d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
			                g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
			                e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
			                c = b << 18 | d << 12 | g << 6 | e,
			                b = c >> 16 & 255,
			                d = c >> 8 & 255,
			                c &= 255,
			                64 == g ? k[h++] = String.fromCharCode(b) : 64 == e ? k[h++] = String.fromCharCode(b, d) : k[h++] = String.fromCharCode(b, d, c);
			            while (f < a.length);return g = k.join("")
			        },
			        encode: function(a) {
			            var b, d, c, g, e = 0, f = 0, h = "", h = [];
			            if (!a)
			                return a;
			            a = this.utf8_encode(a + "");
			            do
			                b = a.charCodeAt(e++),
			                d = a.charCodeAt(e++),
			                c = a.charCodeAt(e++),
			                g = b << 16 | d << 8 | c,
			                b = g >> 18 & 63,
			                d = g >> 12 & 63,
			                c = g >> 6 & 63,
			                g &= 63,
			                h[f++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g);
			            while (e < a.length);h = h.join("");
			            switch (a.length % 3) {
			            case 1:
			                h = h.slice(0, -2) + "==";
			                break;
			            case 2:
			                h = h.slice(0, -1) + "="
			            }
			            return h
			        },
			        utf8to16: function(a) {
			            var b, d, c, g, e, f;
			            b = "";
			            c = a.length;
			            for (d = 0; d < c; )
			                switch (g = a.charCodeAt(d++),
			                g >> 4) {
			                case 0:
			                case 1:
			                case 2:
			                case 3:
			                case 4:
			                case 5:
			                case 6:
			                case 7:
			                    b += a.charAt(d - 1);
			                    break;
			                case 12:
			                case 13:
			                    e = a.charCodeAt(d++);
			                    b += String.fromCharCode((g & 31) << 6 | e & 63);
			                    break;
			                case 14:
			                    e = a.charCodeAt(d++),
			                    f = a.charCodeAt(d++),
			                    b += String.fromCharCode((g & 15) << 12 | (e & 63) << 6 | (f & 63) << 0)
			                }
			            return b
			        }
			    };
			    var uu = '91c48ab8fe';
		        var sign = getSign(['html5', uu, opts.vid, parseInt(0.001 * new Date())])
	            var uuid = creatUuid()+'_0';
	            var getUrl = 'http://api.letvcloud.com/gpc.php';
	            var callbackValue = 'letvcloud' + parseInt(new Date()*1);
	            var referrer = 'http://yuntv.letv.com/bcloud.html?uu='+uu+'&vu='+opts.vid+'&auto_play=1&width=640&height=360&lang=zh_CN'
            	$.ajax({
					url: getUrl,
					dataType: 'jsonp',
					jsonpCallback: callbackValue,
					data: {
						format:'jsonp',
						ver:'2.4',
						cf:'html5',
						ran:parseInt(0.001 * new Date()),
						pver:'H5_Vod_20170406_4.8.3',
						bver:'chrome57.0.2987.133',
						uuid:uuid,
						pf:'html5',
						spf:'0',
						uu:uu,
						vu:opts.vid,
						lang:'zh_CN',
						pet:parseInt(new Date()),
						sign:sign,
						page_url:encodeURIComponent(referrer),
						jsonp:callbackValue
	                },           
					timeout: 3000,
					success: function(ret){
						var url = BaseCode.decode(ret.data.videoinfo.medialist[0].urllist[0].url);
						var vid = ret.data.videoinfo.vid;
						getLeCloudVideoUrl2(url,vid);
					},
					error: function(xhr, type){
						//请求出错时，提示客户端
						window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
					}
				});
				var getLeCloudVideoUrl2 = function(url,vid){
					var callbackValue = 'letvcloud' + parseInt(new Date()*1) + Math.floor(100 * Math.random())
					$.ajax({
						url: url,
						dataType: 'jsonp',
						jsonpCallback: callbackValue,
						data: {
							jsonp: callbackValue,
							uuid: uuid,
							vid: vid,
							ajax: 1,
							_r: 'jsonp',
							format: 1,
							expect: 3
		                },           
						timeout: 3000,
						success: function(ret){
							var url = ret.location;
							window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_1_DYR_AND_fileurl_DYR_EQUAL_"+ url +"_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
						},
						error: function(xhr, type){
							//请求出错时，提示客户端
							window.location.href = "diaoyu123://playvideo?source_DYR_EQUAL_3_DYR_AND_state_DYR_EQUAL_2_DYR_AND_fileurl_DYR_EQUAL_0_DYR_AND_vid_DYR_EQUAL_"+opts.vid;
						}
					});
				}
			};

			
			
			//根据视频分类做处理
			switch(opts.videoType){

				//处理腾讯视频
				case 1:
					opts.vid != '' && getQQVideoUrl();
				break;

				//处理乐视视频
				case 2:
					opts.vid != '' && getLEVideoUrl();
				break;

				//处理优酷视频
				case 3:
					opts.vid != '' && getYouKuVideoUrl();
				break;

				//处理乐视云视频
				case 4:
					opts.vid != '' && getLeCloudVideoUrl();
				break;

				case 10:
					opts.vid != '' && getMyYouKuVideoUrl();
				break;

				//不在视频分类中，不做任何处理
				default:
					console.log('视频类型不正确');
					return;
			};
		};

		//文件加载
		var loadfile = function(t, e) {
            var i = null;
            "js" == e ? (i = document.createElement("script"),
            i.setAttribute("type", "text/javascript"),
            i.setAttribute("src", t)) : "css" == e && (i = document.createElement("link"),
            i.setAttribute("rel", "stylesheet"),
            i.setAttribute("type", "text/css"),
            i.setAttribute("href", t)),
            "undefined" != typeof i && document.getElementsByTagName("head")[0].appendChild(i)
        }