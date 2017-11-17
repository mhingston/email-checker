const dnscache = require('dnscache');
const Mailcheck  = require('mailcheck');
const validator = require('validator');

const EmailChecker =
{
    mxCheck: ({email, options}) =>
    {
        return new Promise((resolve, reject) =>
        {
            options = options || {enable: true, ttl: 300, cachesize: 1000};
            const dns = dnscache(options);
            const domain = email.split('@')[1];
    
            dns.resolveMx(domain, (error, addresses) =>
            {
                if(error)
                {
                    return reject(error);
                }

                return resolve(addresses.length > 0);
            });
        });
    },

    spellCheck: ({email, options}) =>
    {
        return new Promise((resolve, reject) =>
        {
            options = options || {};
            options.email = email;
            options.suggested = (suggestion) => resolve(suggestion.full);
            options.empty = () => resolve(email);
            return Mailcheck.run(options);
        });
    },

    syntaxCheck: ({email}) =>
    {
        return validator.isEmail(email);
    }
}

module.exports = EmailChecker;
