第一步:
GET /api/v3/projects?search=clear-docs&?simple=true
devData
生成左上方select;
sessionStore: id, path_with_namespace,
name_with_namespace
第二步:
GET /api/v3/projects/:currId/repository/tree?recursive=true
生成路由
http://182.92.173.143:10080/help/api/repositories.md
第三步:
获取单个文件内容
GET /:path_with_namespace/raw/master/:file_path
