# gay-pride.js

This micro script displays a rainbow bar at the top of the page, when it's June or July.

And the rainbow links to [Gay pride](https://en.wikipedia.org/wiki/Gay_pride) on Wikipedia.

## Usage

With configs via meta tags, you can easily use this lib by simply adding:

```html
<script src="https://raw.githubusercontent.com/JoyNeop/gay-pride.js/master/pride.js"></script>
<!-- But notice Content-Security-Policy may prevent this script being run. -->
```

For live demo, visit [the author's website](http://joyneop.xyz/) in June or July.

## Config

### Duration

You may add `<meta name="pridejs-config-duration" content="regular" />` in `<head>`. The meta tag is supposed to be placed before `pride.js` gets included.

Available options:

- `regular`: Display from June to July
- `extended`: Display from May to August
- `always`: Literally, always.
- `never`: Literally, never. // Who the hell will need this???

## License

MIT License.

## Credits

Inspired by rainbow logo of Medium in June 2015, which reminded me the movement to advocate for.
