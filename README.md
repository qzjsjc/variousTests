# variousTests


安装prisma组件，一个链接数据库的工具
npm install prisma --save-dev

初始化prisma文件，可在内部定义要链接的数据库，数据表等，定义生成的client(和你定义的数据库链接的api)
npx prisma init

生成数据库，会根据.prisma内定义的model自动创建数据库并生成表格
npx prisma migrate dev

生成链接数据库的客户端，也就是api等
npx prisma generate

prisma数据库操作浏览器版ide
npx prisma studio