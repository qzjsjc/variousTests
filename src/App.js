import React, {useState} from 'react';
import Polygon from './Polygon';
import Point from './Point.js';

export default () => {
  const [polygonMap, setPolygonMap] = useState({
    rect: [{x: 10, y: 10}, {x: 10, y: 110}, {x: 110, y: 110}, {x: 110, y: 10}]
  });
  return (
    <section style={{display: 'flex'}}>
      <Polygon onGetPolygon={(points) => setPolygonMap({...polygonMap, [new Date().valueOf()]: points})} />
      <Point polygonMap={polygonMap} />
    </section>
  );
};
