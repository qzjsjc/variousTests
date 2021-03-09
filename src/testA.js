import {testA, testCommon} from './common/util';

testA();
testCommon();

import(/* webpackChunkName : 'aaa' */'./common/asyncUtil')
  .then((module) => {
    module.testAsync();
  });