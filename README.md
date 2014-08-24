## Silkworm

Built with [angular](http://angularjs.org), [grunt](http://gruntjs.com/) and [bootstrap](http://getbootstrap.com), using the [ravelry api](www.ravelry.com/api)


## Get Started

####Install pre-reqs
Using your package manager of choice, install `ruby`, `gem`, `node`, and `npm` making sure that all are accessible through your $PATH


#### Get the Code
```sh
$ git clone git://github.com/amschrader/silkworm
$ cd silkworm
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
```

#### setup /etc/hosts
add the following to your etc/hosts file
```
127.0.0.1 local.slkwrrm.com
```

#### run the app
```sh
$ grunt build
$ grunt shell:localServer
```
open your web browser to `local.slkwrrm.com:7070`

## More setup
#### Adding your ravelry and aws keys
to add
#### Pushing to aws and invalidating cloudfront
to add

