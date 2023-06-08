
/**
 * 获取cookie值 TODO 用js-cookie
 * @param cname cookie名
 */
function getCookie(cname: string):string {
  var reg = new RegExp("(^| )" + cname + "=([^;]*)(;|$)");
  var arr = document.cookie.match(reg);
  if (arr) return unescape(arr[2]);
  return '';
};

function getCookie1(cname){        
  var name = cname + "=";        
  var ca = document.cookie.split(';');        
  for(var i=0; i<ca.length; i++){        
      var c = ca[i].trim();        
      if(c.indexOf(name)==0) return c.substring(name.length,c.length);        
  }        
  return "";        
}

function getCookie2(cname) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(cname + '=')) {
      return cookie.substring(cname.length + 1);
    }
  }
  return '';
}
// ======================
/**
 * 
 * @param {*} cname cookie 名
 * @param {*} cvalue cookie 值
 * @param {*} exdays cookie过期时间(天)
 */
export function setCookie(cname,cvalue,exdays){        
  var d = new Date();        
  d.setTime(d.getTime()+(exdays*24*60*60*1000));        
  var expires = "expires="+d.toUTCString();        
  document.cookie = cname + "=" + cvalue + "; " + expires;        
}