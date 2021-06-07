# variousTests

1. 
安装prisma组件，一个链接数据库的工具
npm install prisma --save-dev

2. 
初始化prisma文件，可在内部定义要链接的数据库，数据表等，定义生成的client(和你定义的数据库链接的api)
npx prisma init

3. 
生成数据库，会根据.prisma内定义的model自动创建数据库并生成表格
npx prisma migrate dev

4. 
生成链接数据库的客户端，也就是api等
npx prisma generate

5. 
prisma数据库操作浏览器版ide
npx prisma studio

6. 
再次刷新数据库，并给这次操作命名为add-user-model
npx prisma migrate dev --name "add-user-model"
后续再次执行命令4,则生产新的api,包含了新增的数据库定义内容

7. 
刷新数据，并给这次操作命名为add-vote-model
npx prisma migrate dev --name "add-vote-model"
后续再次执行命令4,则生产新的api,包含了新增的数据库定义内容