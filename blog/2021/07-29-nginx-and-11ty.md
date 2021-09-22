# setting up 11ty and nginx , 1723 , aunt sams

## [x] [changed nginx config](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/)

- `/etc/nginx/sites-available/technomad`

- |
```
server { 
-	root	/???
+	root	/srv/technomad
+	location /todo/ {}
```

## [x] [yarn build output ~> srv/](https://www.11ty.dev/docs/config/#directory-for-global-data-files)

- `sudo yarn build --output /srv/technomad/todo`

