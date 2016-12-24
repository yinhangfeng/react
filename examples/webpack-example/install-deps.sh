# 安装依赖并建立软连接
npm install --registry=https://registry.npm.taobao.org --verbose
rm -rf node_modules/react/lib
rm -rf node_modules/react-dom/lib
ln -s ../../../../build/node_modules/react/lib node_modules/react/lib
ln -s ../../../../build/node_modules/react-dom/lib node_modules/react-dom/lib