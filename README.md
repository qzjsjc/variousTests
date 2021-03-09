# webpack_test

针对webpack的使用测试

| 序号 | 操作 | 说明 |
|-----|------|----|
| 1 | npm view webpack versions | 查看webpack版本 |
| 2 | yarn add webpack@latest | 安装最新的webpack版本 |

结论：

1. 假设在公共方法中，一个方法只被一个入口文件调用，则只有这个方法会被打包到使用它的入口文件中。
2. 一个方法被多个入口文件调用，在多个入口文件中都会打入此方法。
