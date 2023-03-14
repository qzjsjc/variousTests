import React, {useState, useEffect, useRef, useCallback} from 'react';
import {rayCasting, rayCasting2, drawPolygon, drawPoint} from './util';
import {CANVAS_SIZE} from './params';

export default ({onGetPolygon}) => {
  const pointRef = useRef();
  const [points, setPoints] = useState([]);
  const getPolygon = useCallback(() => {
    if (!pointRef || !pointRef.current) {
      return;
    }
    const ctx = pointRef.current.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    drawPolygon(ctx, points);
    onGetPolygon(points);
    setPoints([]);
  }, [points, pointRef]);
  const addPoint = useCallback((e) => {
    if (!pointRef || !pointRef.current) {
      return;
    }
    const {pageX, pageY, target} = e;
    const {offsetTop, offsetLeft} = target;
    const point = {x: pageX - offsetLeft, y: pageY - offsetTop};
    const nps = [...points];
    const ctx = pointRef.current.getContext('2d');
    if (points.length) {
      const start = points[0];
      if (start.x === point.x && start.y === point.y) {
        if (points.length > 1) {
          nps.push(point);
          setPoints(nps);
          getPolygon();
        }
        return;
      }
    } else {
      ctx.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    }
    drawPoint(ctx, point);
    nps.push(point);
    setPoints(nps);
  }, [points, pointRef]);
  const deletePoint = useCallback((i) => {
    if (!pointRef || !pointRef.current) {
      return;
    }
    const nps = [...points];
    nps.splice(i, 1);
    setPoints(nps);
    const ctx = pointRef.current.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    nps.forEach(p => drawPoint(ctx, p));
  }, [points, pointRef]);
  return (
    <section style={{display: 'flex', width: '50%'}}>
      <canvas
        ref={pointRef}
        width={CANVAS_SIZE[0]}
        height={CANVAS_SIZE[1]}
        style={{border: '1px solid', width: CANVAS_SIZE[0], height: CANVAS_SIZE[1]}}
        onClick={addPoint}
      />
      <div style={{pointerEvents: 'none', position: 'absolute', height: CANVAS_SIZE[0], width: CANVAS_SIZE[1], border: '1px solid'}}>
        {(points || []).map((p, i) => (
          <span key={i} style={{position: 'absolute', top: p.y, left: p.x + 5}}>{i + 1}</span>
        ))}
      </div>
      <ul>
        {points.map((p, i) => {
          return <li key={i}>x: {p.x}, y: {p.y} <button onClick={() => deletePoint(i)}>删除</button></li>
        })}
      </ul>
      <div style={{marginLeft: '20px'}}>
        <button disabled={points.length < 3} onClick={getPolygon}>生成多边形</button>
      </div>
    </section>
  );
};
