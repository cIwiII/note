
/**
 * 比对pathname和设定的路径是否匹配
 * @param pathname location的pathname
 * @param path 路径 (遵循路由路径规则 /xxx/:param)
 * @param basename 基础路由 (默认为/)
 * @return 是否匹配
 */
export function isEqualPath(pathname: string, path: string, basename: string = "/"): boolean {

  path = path.split("?")[0];
  if (path[0] !== "/") path = "/" + path;
  if (basename !== "/") path = "" + (basename[0] === "/" ? basename : "/" + basename) + path;
  var pathnameList = pathname.split("/");
  var pathList = path.split("/");
  if (pathnameList.length > pathList.length) return false;

  for (var i = 0; i < pathnameList.length; i++) {
    // :为匹配参数
    if (pathnameList[i] !== pathList[i] && pathList[i][0] !== ":") return false;
  }

  if (pathnameList.length !== pathList.length) {
    pathList = pathList.slice(pathnameList.length);

    for (var i = 0; i < pathList.length; i++) {
      // 检查可选参数
      if (pathList[i].indexOf("?") === -1) return false;
    }
  }

  return true;
}
