import Ember from "ember";

const SafeString = Ember.Handlebars.SafeString;

/**
  The `{{l}}` helper renders a localized string using `I18n.l`.

  ```handlebars
  {{l "percentage" 123.45}}
  ```

  ```html
  123.450%
  ```

  To pass additional configurations, simply provide them as
  attributes to the helper.

  ```handlebars
  {{l "number" 1000 delimiter='.' separator=','}}
  ```

  ```html
  1.000,00
  ```

  If the localization string is generated via a bound value,
  you may generate your string by specifying the bound values
  using the join helper:

  ```handlebars
  {{l (join "date.formats." size) "2009-09-18"}}
  ```

  If `size` is `"short"`, then the resulting HTML would be:

  ```html
  "Sep 18, 2009"
  ```

  If `size` is `"long"`, then the resulting HTML would be:

  ```html
  "September 18, 2009"
  ```

  @method l
  @for Ember.HTMLBars.helpers
  @param string {String} The string to localize
  @param value {Object} The value to localize
  @param formats {Object} An object to format the string with.
  @return {String} HTML string
 */
export default function (params, hash) {
  let [scope, value] = params;

  switch (scope) {
  case "currency":
    return new SafeString(I18n.toCurrency(value, hash));
  case "number":
    return new SafeString(I18n.toNumber(value, hash));
  case "human":
    return new SafeString(I18n.toHumanSize(value, hash));
  case "percentage":
    return new SafeString(I18n.toPercentage(value, hash));
  case "time":
  case "date":
    return new SafeString(I18n.toTime(value, hash));
  default:
    return value.toString();
  }
}
