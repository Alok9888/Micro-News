# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Micro News Portal seriously. If you believe you've found a security vulnerability, please follow these steps:

1. **Do Not** disclose the vulnerability publicly until it has been addressed by our team.

2. **Email** your findings to [mail](mailto:mail@harikrishnanair.com). Please include:
   - Type of vulnerability
   - Full path of the vulnerable file
   - Steps to reproduce
   - Possible impact
   - Suggested fix (if any)

3. **Expect** an acknowledgment of your email within 48 hours.

4. **Give** us a reasonable time to respond before taking any further action.

5. **Make** a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service.

### What to Expect

- We will acknowledge your report within 48 hours
- We will keep you informed about our progress in fixing the vulnerability
- We will publicly acknowledge your responsible disclosure after the vulnerability is fixed
- We will include your name in our security changelog (unless you prefer to remain anonymous)

## Security Measures

Micro News Portal implements the following security measures:

- All API keys are stored securely using environment variables
- HTTPS is enforced for all connections
- Regular dependency updates to patch security vulnerabilities
- Input sanitization and validation
- XSS protection headers
- CSRF protection
- Rate limiting on API endpoints

## Best Practices for Contributors

When contributing to Micro News Portal, please follow these security best practices:

1. Never commit sensitive data or API keys
2. Use environment variables for configuration
3. Validate all user inputs
4. Follow the principle of least privilege
5. Keep dependencies updated
6. Write secure, maintainable code
7. Document security-related changes 