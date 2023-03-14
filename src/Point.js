import React, {useState, useEffect, useRef, useCallback} from 'react';
import {rayCasting, rayCasting2, windingNumber, drawPolygon, drawPoint} from './util';
import {CANVAS_SIZE} from './params';

export default ({polygonMap = {}}) => {
  const pointRef = useRef();
  const [currentPolygon, setCurrentPolygon] = useState('');
  const [point, setPoint] = useState(null);
  const [method, setMethod] = useState(1);
  const [showSign, setShowSign] = useState(false);
  useEffect(() => {
    if (!pointRef || !pointRef.current || !currentPolygon || !polygonMap[currentPolygon]) {
      return;
    }
    const polygon = polygonMap[currentPolygon];
    const ctx = pointRef.current.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    drawPolygon(ctx, polygon);
  }, [polygonMap, currentPolygon]);
  const judgePoint = useCallback((e) => {
    if (!pointRef || !pointRef.current || !currentPolygon || !polygonMap[currentPolygon]) {
      return;
    }
    const polygon = polygonMap[currentPolygon];
    const {pageX, pageY, target} = e;
    const {offsetTop, offsetLeft} = target;
    const point = {x: pageX - offsetLeft, y: pageY - offsetTop};
    const ctx = pointRef.current.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
    drawPolygon(ctx, polygon);
    drawPoint(ctx, point);
    switch(method) {
    case 1:
      point.status = rayCasting(point, polygon);
      break;
    case 2:
      point.status = rayCasting2(point, polygon);
      break;
    case 3:
      point.status = windingNumber(point, polygon);
      break;
    default:
    }
    setPoint(point);
  }, [polygonMap, currentPolygon, method]);
  return (
    <section style={{display: 'flex', width: '50%'}}>
      <canvas
        ref={pointRef}
        width={CANVAS_SIZE[0]}
        height={CANVAS_SIZE[1]}
        style={{border: '1px solid', width: CANVAS_SIZE[0], height: CANVAS_SIZE[1]}}
        onClick={judgePoint}
      />
      <div style={{pointerEvents: 'none', position: 'absolute', height: CANVAS_SIZE[0], width: CANVAS_SIZE[1], border: '1px solid'}}>
        {showSign && ((currentPolygon && polygonMap[currentPolygon]) || []).map((p, i) => (
          <span key={i} style={{position: 'absolute', top: p.y, left: p.x + 5}}>{i + 1}</span>
        ))}
      </div>
      <ul>
        {Object.entries(polygonMap).map(([key]) => {
          return (
            <li
              key={key}
              onClick={() => setCurrentPolygon(key)}
              style={{
                background: key === currentPolygon ? 'rgba(0, 0, 0, 0.2)' : 'none',
                cursor: 'pointer'
              }}
            >
              {key}
            </li>
          )
        })}
      </ul>
      <div style={{marginLeft: '20px'}}>
        {((currentPolygon && polygonMap[currentPolygon]) || []).map((p, i) => (
          <p key={i}>{i + 1}: {p.x}, {p.y}</p>
        ))}
      </div>
      <div style={{marginLeft: '20px'}}>
        <button onClick={() => setMethod(1)} disabled={method === 1}>方法1</button>
        <button onClick={() => setMethod(2)} disabled={method === 2}>方法2</button>
        <button onClick={() => setMethod(3)} disabled={method === 3}>方法3</button>
        <button onClick={() => setShowSign(!showSign)}>展示顺序标记</button>
        {point && (
          <p>
            {point.x}, {point.y}, {point.status}
          </p>
        )}
      </div>
    </section>
  );
};
