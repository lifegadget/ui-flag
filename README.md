# ui-flag
quickly and easily display country flags in EmberJS applications

---

> ### :warning: Maintainers wanted
>
> I am no longer using or supporting this plugin.

---

Uses the [`flag-icon-css`](https://github.com/lipis/flag-icon-css) library of SVG flags and wraps it in a simple Ember layer to make it more accessible.

## Installation

    ember install ui-flag

### Dependencies

#### flag-icon-css

The SASS/SVG assets are brought in via Bower but all the base work will be done for you. What is left of you to do is detailed below.

#### SASS

In order to not overload your CSS, we are assuming that you are using SASS and therefore we have included the base CSS buy you'll need to manually include the country codes that you plan to use. All countries are referred to using the two-letter [ISO 3166-1-alpha-2](http://www.iso.org/iso/country_names_and_code_elements) coding. So, for instance, to include the UK and US you would add the following to your SCSS file:

````scss
@import 'ui-flag';
@include flag-icon(gb);
@include flag-icon(us);
````

## Usage

There are two components to choose from but the primary one is `ui-flag`. It displays the flag as a inline element using flexbox styling as its default. For slightly different styling you can also opt to use the `ui-flag-background` component. See the **flag-icon-css** documentation for details on the differences.

Here are a few simple examples:

````handlebars
{{ui-flag 'us'}}
{{ui-flag 'uk' squared=true}}
````

Check out the demo at: [demo app](https://ui-flag.firebaseapp.com)

## License

Copyright (c) 2016 LifeGadget Ltd

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
