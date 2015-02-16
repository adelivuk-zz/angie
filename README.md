# Angie

If you want to fast and painless create a **multilingual app that uses angular**, this is just for you!

## Quick start

1. [Dowload it](http://antonio-delivuk.from.hr/angie/angie_v0.0.1.rar)
2. Just run `bower install` and you're good to go

## What's in here

* [HTML5Boilerplate](https://github.com/h5bp/html5-boilerplate)
* [angular](https://angularjs.org/)
* [angular-translate](https://github.com/angular-translate/angular-translate)
* [angular-ui-router](https://github.com/angular-ui/ui-router)
* and others - check out [bower.json](https://github.com/adelivuk/angie/blob/master/bower.json)

## [Plain demo](http://antonio-delivuk.from.hr/angie)
## [Bootstrap cover theme demo](http://antonio-delivuk.from.hr/angie/bootstrap)

## Usage

**Note:** I'm using [SASS](http://sass-lang.com/), but you don't have to, just make changes in [css/main.css](https://github.com/adelivuk/angie/blob/master/css/main.css) file

#### Change/add language
Add the `locales/locale` file, like `locale-[LANG_CODE].json` and add the button in [index.html](https://github.com/adelivuk/angie/blob/master/index.html#LC23)

Example

Create `locales/locale-it.json`


```
{
  "WELCOME": "benvenuto"
}
```

And in `index.html` add the `button`

```
<ul data-ng-controller="translateController" id="lang-menu">
  <li><span data-ng-click="changeLanguage('it')">Italian</span></li>
  <!-- other buttons-->
</ul>
```

#### Change animation between `views` or `modal` style
See the [scss folder](https://github.com/adelivuk/angie/tree/master/scss)

#### Change the `loading icon`
See the [loadingIcon directive](https://github.com/adelivuk/angie/blob/master/js/app.js#L49)

## Contributing
Feel free to contribute