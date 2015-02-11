/**
  The `{{t}}` helper renders a localized string using `I18n.t`.

  ```handlebars
  {{t "app.hello_world"}}
  ```

  ```html
  Hello, World!
  ```

  To pass parameters to the localization function, simply
  specify them as parameters to the localization helper
  like you would to a `{{view}}` helper.

  ```handlebars
  {{t "app.ordinals" count=2}}
  ```

  ```html
  2nd
  ```

  If the localization string is generated via a bound value,
  you may generate your string by specifying the bound values
  using the join helper:

  ```handlebars
  {{t (join "app.status." currentStatus)}}
  ```

  ```html
  Available
  ```

  @method t
  @for Ember.HTMLBars.helpers
  @param string  {String} The string to localize
  @param formats {Object} An object to format the string with.
  @return {String} HTML string
 */
export default function (params, hash) {
  let [text] = params;
  return I18n.t(text, hash).htmlSafe();
}
