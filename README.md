# HTTP Service

### 1) env setup

#### local

##### create new .env file in the project root directory and copy the contents of sample.env file

#### docker

##### create new http-service.env file in the project root directory and copy the contents of http-service-sample.env file

### 2) Package project

#### install pkg

```
npm install  pkg -g
```

#### build package : run below command in root directory

```
pkg .
#dist folder is generated
```

#### install snappy in dist directory

```
npm install snappy
#node_modules with snappy is added
```

#### copy the files to linux server and add .env file(along with generated file)

```
./file-name
# ex: ./bobcat-server
```
