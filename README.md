# qrcode_test

对qrcode的测试

| 序号 | 操作 | 说明 |
|-----|------|----|
| 1 | 从草料找到二维码生成文件 | 测试草料效率 |
| 2 | yarn add qrcode | 测试npm qrcode效率 |
| 2 | yarn add react.qrcode | 测试npm react.qrcode效率 |

## 统计

| qrcode工具 | 字符数 | 正确率（数字越大越高) | 尺寸 | 是否成功生成二维码 | 生成效率 | 支付宝扫码速度 | enos插件扫码情况(成功次数/总次数，速度) |
|-----|------|----|----|----|----|----|----|
| 草料 | 2000 | 3 | 600 | 失败 | - | - | - |
| qrcode | 2000 | 3 | 600 | 失败 | - | - | - |
| react.qrcode | 2000 | 3 | 600 | 失败 | - | - | - |
| 草料 | 2000 | 2 | 600 | 失败 | - | - | - |
| qrcode | 2000 | 2 | 600 | 失败 | - | - | - |
| react.qrcode | 2000 | 2 | 600 | 失败 | - | - | - |
| 草料 | 2000 | 1 | 600 | 成功 | <1s | <1s | 4/5 <=1s |
| qrcode | 2000 | 1 | 600 | 成功 | <1s | <=1s | 1/5 >5s |
| react.qrcode | 2000 | 1 | 600 | 成功 | <1s | <500ms | 2/5 1s-2s |
| 草料 | 1750 | 3 | 600 | 失败 | - | - | - |
| qrcode | 1750 | 3 | 600 | 失败 | - | - | - |
| react.qrcode | 1750 | 3 | 600 | 失败 | - | - | - |
| 草料 | 1750 | 2 | 600 | 失败 | - | - | - |
| qrcode | 1750 | 2 | 600 | 失败 | - | - | - |
| react.qrcode | 1750 | 2 | 600 | 失败 | - | - | - |
| 草料 | 1750 | 1 | 600 | 成功 | <1s | <500ms | 3/3 <=1s |
| qrcode | 1750 | 1 | 600 | 成功 | <1s | <500ms | 0/5 >5s |
| react.qrcode | 1750 | 1 | 600 | 成功 | <=1s | <500ms | 4/5 <1s |
| 草料 | 1500 | 3 | 600 | 成功 | <1s | <500ms | 4/5 <=1s |
| qrcode | 1500 | 3 | 600 | 失败 | - | - | - |
| react.qrcode | 1500 | 3 | 600 | 失败 | - | - | - |
| 草料 | 1500 | 2 | 600 | 失败 | - | - | - |
| qrcode | 1500 | 2 | 600 | 成功 | <1s | <1s | 0/5 >5s |
| react.qrcode | 1500 | 2 | 600 | 成功 | <1s | <1s | 3/5 <=1s |
| 草料 | 1500 | 1 | 600 | 成功 | <1s | <500ms | 4/5 <=1s |
| qrcode | 1500 | 1 | 600 | 成功 | <1s | <500ms | 3/5 2s-3s |
| react.qrcode | 1500 | 1 | 600 | 成功 | <=1s | <1s | 4/5 1s-2s |
| 草料 | 1250 | 3 | 600 | 成功 | <1s | <500ms | 3/5 1s-2s |
| qrcode | 1250 | 3 | 600 | 成功 | <1s | <500ms | 5/5/ <1s |
| react.qrcode | 1250 | 3 | 600 | 成功 | <1s | <500ms | 4/5 <1s |
| 草料 | 1250 | 2 | 600 | 成功 | <1s | <1s | 5/5 <=1s |
| qrcode | 1250 | 2 | 600 | 成功 | <1s | <1s | 5/5 <=1s |
| react.qrcode | 1250 | 2 | 600 | 成功 | <1s | <1s | 5/5 <1s |
| 草料 | 1250 | 1 | 600 | 成功 | <1s | <500ms | 4/5 <=1s |
| qrcode | 1250 | 1 | 600 | 成功 | <1s | <500ms | 3/5 <=1s |
| react.qrcode | 1250 | 1 | 600 | 成功 | <=1s | <1s | 5/5 <1s |
