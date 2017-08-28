# webpack-example
## install
```
sh install-deps.sh
```
## update react
由于在安装时建立了build/node_modules/xxx的软连接，所以修改react代码之后只需在react根目录执行`gulp react:modules`然后刷新浏览器就可以了