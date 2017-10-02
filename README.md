# email-checker

Check emails for typos, verify syntax and whether the domain has an MX record.

# Install
> npm install mhingston/email-checker
	
# Usage

```javascript	
const EmailChecker = require('email-checker');
```

## MX Record Check

Returns: Promise
* resolved {Boolean} Whether an MX entry exists
* rejected {Object} Error object

```javascript	
EmailChecker.mxCheck({email: 'me@domain.com', options: {});
```

You can also optionally pass in a [options object](https://github.com/yahoo/dnscache#configuration).

## Email Spell Check

Returns: Promise
* resolved {String} Suggested mail address
* rejected {Object} Error object

```javascript	
EmailChecker.spellCheck({email: 'me@domain.com', options: {});
```

You can also optionally pass in a [options object](https://github.com/mailcheck/mailcheck#usage-without-jquery).

## Email Syntax Check

Returns: Boolean

```javascript	
EmailChecker.syntaxCheck({email: 'me@domain.com'});
```
