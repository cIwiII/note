// data是转换树形结构的数据源
// rootValue是根节点的特征
function transitionToTree(data, rootValue) {
  const parents = data.filter(item => item.pid === rootValue); // 把所有顶级节点拆分出来
  const children = data.filter(item => item.pid !== rootValue); // 把所有子级节点(无论多少级,二三四五六级..)拆分出来

  dataToTree(parents, children);
  return parents;
}

function dataToTree(parents, children) {
  parents.map(p => {
    children.map((c, index) => {
      // 判断当前循环的子节点是否是当前循环父节点的子级

      if (c.pid === p.id) {
        let newChildren = JSON.parse(JSON.stringify(children));
        // 一个对象只有一个父级时，添加完后可以进行删除，减少下次遍历次数。
        newChildren.splice(index, 1);

        dataToTree([c], newChildren);
        /*
                            如果是当前循环父节点的子级,那就看父节点有没有children属性,
                            如果有就push到children属性的数组,
                            如果没有就给父节点一个children属性并把当前循环的子级放进去
                        */
        if (p.children) {
          p.children.push(c);
        } else {
          p.children = [c];
        }
      }
    });
  });
}

//  取消注释
function transitionToTree(data, rootValue) {
  const parents = data.filter(item => item.pid === rootValue);
  const children = data.filter(item => item.pid !== rootValue);
  dataToTree(parents, children);
  function dataToTree(parents, children) {
    parents.map(p => {
      children.map((c, index) => {
        if (c.pid === p.id) {
          let newChildren = JSON.parse(JSON.stringify(children));
          newChildren.splice(index, 1);
          dataToTree([c], newChildren);
          if (p.children) {
            p.children.push(c);
          } else {
            p.children = [c];
          }
        }
      });
    });
  }
  return parents;
}
