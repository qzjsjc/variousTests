// console.log(XLSX);

// function download() {
//   const data = [
//     [{v: "This", t: 's', l: {Target: 'https://www.baidu.com', Tooltip: 'this'}, s: {fill: {bgcolor: {rgb: 'ffff00'}}, numFmt: '0.00', alignment: {horizontal: 'center'}, font: {color: { rgb: "FF000000" }}}},   "is",     "a",    "Test"],
//     ["வணக்கம்", "สวัสดี", "你好", "가지마"],
//     [{v: 1.2345, t: 'n', z: '0.00', s: {numFmt: '0.00', alignment: {horizontal: 'center'}, font: {color: { rgb: "FF000000" }}}},        2,        3,      4],
//     ["Click",  "to",     "edit", "cells"]
//   ];
//   /* convert state to workbook */
//   const ws = XLSX.utils.aoa_to_sheet(data);
//   console.log(ws);
//   const wb = XLSX.utils.book_new();
//   console.log(wb);
//   XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
//   /* generate XLSX file and send to client */
//   XLSX.writeFile(wb, "sheetjs.xlsx");
// }

import * as XLSX from 'xlsx';
import * as XLSX_style from 'xlsx-style';
console.log(XLSX, XLSX_style);
function download() {
  /* const data = [
    [{v: "This", t: 's', l: {Target: 'https://www.baidu.com', Tooltip: 'this'}, s: {fill: {bgcolor: {rgb: 'ffff00'}}, numFmt: '0.00', alignment: {horizontal: 'center'}, font: {color: { rgb: "FF000000" }}}},   "is",     "a",    "Test"],
    ["வணக்கம்", "สวัสดี", "你好", "가지마"],
    [{v: 1.2345, t: 'n', z: '0.00', s: {numFmt: '0.00', alignment: {horizontal: 'center'}, font: {color: { rgb: "FF000000" }}}},        2,        3,      4],
    ["Click",  "to",     "edit", "cells"]
  ]; */
  const s = {
    fill: {
      fgColor: {
        rgb: 'FF00AA00'
      },
      bgColor: {
        rgb: 'FF00AA00'
      },
      patternType: 'solid'
    },
    font: {
      sz: 13,
      bold: true,
      color: {
          rgb: "FFFFAA00"
      }
    },
    alignment: {
        horizontal: "center",
        vertical: "center",
        wrap_text: true
    }
  };
  const data = [
    [{v: 1, t: 'n', s}, 2],
    ['this', 'that']
  ];
  /* convert state to workbook */
  const ws = XLSX.utils.aoa_to_sheet(data);
  console.log(ws);
  const wb = XLSX.utils.book_new();
  console.log(wb);
  XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
  /* generate XLSX file and send to client */
  var wopts = {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary'
  };
  const wbout = XLSX_style.write(wb, wopts);
  console.log(wbout);
  var blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  }); // 字符串转ArrayBuffer
  function s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
  };
  openDownloadDialog(blob, '下载.xlsx');
}

function openDownloadDialog(url, saveName) {
  if (typeof url == 'object' && url instanceof Blob) {
      url = URL.createObjectURL(url); // 创建blob地址
  }
  var aLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  var event;
  if (window.MouseEvent) event = new MouseEvent('click');
  else {
      event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }
  aLink.dispatchEvent(event);
}

window.download = download;