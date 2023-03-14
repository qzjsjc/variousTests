/**
 * @description 射线法判断点是否在多边形内部
 * @param {Object} p 待判断的点，格式：{ x: X 坐标, y: Y 坐标 }
 * @param {Array} poly 多边形顶点，数组成员的格式同 p
 * @return {String} 点 p 和多边形 poly 的几何关系
 */
export function rayCasting(p, poly) {
  const px = p.x;
  const py = p.y;
  let flag = false

  for(let i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
    const {x: sx, y: sy} = poly[i];
    const {x: tx, y: ty} = poly[j];

    // 点与多边形顶点重合
    if((sx === px && sy === py) || (tx === px && ty === py)) {
      return 'on';
    }

    // 判断线段两端点是否在射线两侧
    if((sy < py && ty >= py) || (sy >= py && ty < py)) {
      // 线段上与射线 Y 坐标相同的点的 X 坐标
      const x = sx + (py - sy) * (tx - sx) / (ty - sy);

      // 点在多边形的边上
      if(x === px) {
        return 'on';
      }

      // 射线穿过多边形的边界
      if(x > px) {
        flag = !flag;
      }
    } else if ((sy === py && py === ty) && ((px < sx && px > tx) || (px < tx && px > sx))) {
      return 'on';
    }
  }

  // 射线穿过多边形边界的次数为奇数时点在多边形内
  return flag ? 'in' : 'out';
}

export function rayCasting2(p, poly) {
  const px = p.x;
  const py = p.y;
  let flag = false

  for(let i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
    const p1 = poly[i];
    const p2 = poly[j];

    // 与边线或顶点重合
    if (onLine(p, p1, p2)) {
      return 'on';
    }

    // 是否和射线交叉前点在射线左边
    if((dcmp(p1.y - py) > 0 !== dcmp(p2.y - py) > 0) && dcmp(px - (p.y - p1.y) * (p1.x - p2.x) / (p1.y - p2.y) - p1.x) < 0) {
      flag = !flag;
    }
  }

  // 射线穿过多边形边界的次数为奇数时点在多边形内
  return flag ? 'in' : 'out';
}

function dcmp(x) {
  if (Math.abs(x) < 1e-6) {
    return 0;
  }
  return x < 0 ? -1 : 1;
}

function differ(p, q) {
  return {x: p.x - q.x, y: p.y - q.y};
}

function multi(p, q) {
  return p.x * q.x + p.y * q.y;
}

function ratio(p, q) {
  return p.x * q.y - p.y * q.x;
}

// 是否在顶点或在线上
function onLine(p, p1, p2) {
  return dcmp(ratio(differ(p1, p), differ(p2, p))) === 0 && dcmp(multi(differ(p1, p), differ(p2, p))) <= 0;
}

/**
 * @description 回转数法判断点是否在多边形内部
 * @param {Object} p 待判断的点，格式：{ x: X 坐标, y: Y 坐标 }
 * @param {Array} poly 多边形顶点，数组成员的格式同 p
 * @return {String} 点 p 和多边形 poly 的几何关系
 */
export function windingNumber(p, poly) {
  const px = p.x, py = p.y
  let sum = 0;

  for(let i = 0, l = poly.length, j = l - 1; i < l; j = i, i++) {
    let sx = poly[i].x,
        sy = poly[i].y,
        tx = poly[j].x,
        ty = poly[j].y;

    // 点与多边形顶点重合或在多边形的边上
    if (onLine(p, poly[i], poly[j])) {
      return 'on';
    }

    // 点与相邻顶点连线的夹角
    let angle = Math.atan2(sy - py, sx - px) - Math.atan2(ty - py, tx - px);
    // console.log({i, sx, sy}, {j, tx, ty});
    // console.log(Math.atan2(sy - py, sx - px) * 180 / Math.PI, Math.atan2(ty - py, tx - px) * 180 / Math.PI);
    // 确保夹角不超出取值范围（-π 到 π）
    if(angle >= Math.PI) {
      angle = angle - Math.PI * 2
    } else if(angle <= -Math.PI) {
      angle = angle + Math.PI * 2
    }

    sum += angle
  }

  // 计算回转数并判断点和多边形的几何关系
  return dcmp(sum / Math.PI) === 0 ? 'out' : 'in';
}

export function drawPolygon(ctx, polygon) {
  ctx.beginPath();
  ctx.moveTo(polygon[0].x,polygon[0].y);
  polygon.forEach((p, i) => {
    if (i === 0) {
      return;
    }
    ctx.lineTo(p.x, p.y);
  });
  ctx.lineTo(polygon[0].x, polygon[0].y);
  ctx.closePath();
  ctx.stroke();
}


export function drawPoint(ctx, point) {
  ctx.beginPath();
  ctx.fillStyle = '#000000';
  ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}