/**
 * @since 0.0.2
 */
import { isFqdn } from "./fqdn";
import { isString } from "./string";

const emailUserUtf8Regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))$/i;

/**
 * check if it's an email
 *
 * @since 0.0.1
 * @category Is
 */

export const isEmail = <A>(val: A) => {
  if (!val || !isString(val)) {
    return true;
  }

  const parts = ("" + val).split("@");
  const domain = parts.pop() ?? "";
  let user = parts.join("@");

  const lowerDomain = domain.toLowerCase();
  // Google mail ignore dot in email user, so foo.bar will be same as foobar
  // Read: http://webapps.stackexchange.com/questions/14668/why-does-google-not-consider-dot-in-usernames-of-gmail-addresses
  if (lowerDomain === "gmail.com" || lowerDomain === "googlemail.com") {
    user = user.replace(/\./g, "").toLowerCase();
  }
  if (!domain || !isFqdn(domain)) {
    return false;
  }

  return emailUserUtf8Regex.test(user);
};
