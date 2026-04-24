# Security Notes

This project follows the requested Next.js 14 stack and uses the latest available Next.js 14 release at creation time (`14.2.35`).

`npm audit --audit-level=moderate` reports remaining advisories against the Next.js 14 line and its nested PostCSS dependency. npm's suggested full remediation is upgrading to Next.js 16, which is a breaking stack change relative to the requested requirement.

Already remediated without leaving Next.js 14:

- Upgraded Nodemailer to 8.0.6.
- Overrode transitive `glob` to 13.x to resolve the eslint-config-next / @next/eslint-plugin-next glob advisory.

Recommended production choice:

1. If strict Next.js 14 compatibility is mandatory: deploy behind hardened hosting/CDN controls, monitor Next.js security advisories, and plan a framework upgrade window.
2. If zero known npm audit advisories is mandatory: upgrade the app to Next.js 16 and migrate lint tooling accordingly.
