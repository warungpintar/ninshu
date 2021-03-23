/**
 * @since 0.0.2
 */
import * as E from "fp-ts/Either";
import { flow } from "fp-ts/function";
import {
  validateString,
  validateRequired,
  validateFqdn,
  validateMatchRe,
} from "../Validators";

const emailUserUtf8Regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))$/i;

type Email = {
  domain: string;
  user: string;
};

const parseEmail = (val: string): E.Either<boolean, Email> => {
  const parts = val.split("@");
  const domain = parts[parts.length - 1];
  const user = parts.slice(0, parts.length - 2).join("@");

  if (!domain) return E.left(false);

  return E.right({
    domain,
    user,
  });
};

// Google mail ignore dot in email user, so foo.bar will be same as foobar
// Read: http://webapps.stackexchange.com/questions/14668/why-does-google-not-consider-dot-in-usernames-of-gmail-addresses
const normalizeGmail = (email: Email): Email => {
  const { domain, user } = email;
  const _domain = domain.toLocaleLowerCase();

  if (_domain === "gmail.com" || _domain === "googlemail.com") {
    return {
      domain,
      user: user.replace(/\./g, "").toLocaleLowerCase(),
    };
  }

  return email;
};

/**
 * check if it's an email
 *
 * @since 0.0.1
 * @category Is
 */

export const isEmail = <A>(val: A) => {
  return flow(
    validateRequired(false),
    E.chain(validateString(false)),
    E.chain(parseEmail),
    E.map(normalizeGmail),
    E.chain((val) => validateFqdn(false)(val.domain)),
    E.chain(validateMatchRe(emailUserUtf8Regex, false)),
    E.fold(
      (e) => e,
      () => true
    )
  )(val);
};
