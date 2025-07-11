# Sample Projects for UI Code Insight Testing

This directory contains sample projects for different project types to test the UI Code Insight tool without requiring npm module installation.

## Available Sample Projects

### 1. React Sample (`react-sample/`)
A React project with intentional ESLint and Stylelint issues for testing.

**Features:**
- React components with common ESLint issues
- CSS with Stylelint issues
- Security vulnerabilities (hardcoded secrets, XSS)
- Accessibility issues (missing alt attributes, form labels)
- Performance issues (unused variables, missing dependencies)

**Files:**
- `package.json` - Project dependencies
- `src/App.js` - React component with intentional issues
- `src/App.css` - CSS with Stylelint issues

### 2. Node.js Sample (`node-sample/`)
A Node.js/Express project with intentional ESLint issues for testing.

**Features:**
- Express server with security vulnerabilities
- Hardcoded secrets and API keys
- Unsafe eval usage
- SQL injection vulnerabilities
- Missing error handling
- Console.log statements

**Files:**
- `package.json` - Project dependencies
- `src/index.js` - Express server with intentional issues

### 3. Vanilla JavaScript Sample (`vanilla-sample/`)
A vanilla JavaScript project with intentional ESLint and Stylelint issues.

**Features:**
- Pure JavaScript with common ESLint issues
- HTML with accessibility issues
- CSS with Stylelint issues
- Security vulnerabilities (XSS, innerHTML usage)
- DOM manipulation without proper checks

**Files:**
- `package.json` - Project dependencies
- `index.html` - HTML with accessibility issues
- `src/index.js` - JavaScript with intentional issues
- `css/styles.css` - CSS with Stylelint issues

## How to Test UI Code Insight

### Prerequisites
- Node.js installed
- UI Code Insight tool available

### Testing Steps

1. **Navigate to a sample project:**
   ```bash
   cd samples/react-sample
   # or
   cd samples/node-sample
   # or
   cd samples/vanilla-sample
   ```

2. **Run UI Code Insight:**
   ```bash
   # From the UI Code Insight project root
   node bin/index.js
   ```

3. **Select the sample project directory when prompted**

4. **Choose the appropriate project type:**
   - React Sample → "React"
   - Node.js Sample → "Node"
   - Vanilla JavaScript Sample → "Vanilla"

5. **Select the reports you want to generate:**
   - ESLint Report
   - Stylelint Report
   - Security Audit
   - Performance Audit
   - Accessibility Audit
   - Testing Audit
   - Dependency Audit

6. **Review the generated dashboard**

## Expected Issues in Each Sample

### React Sample
- **ESLint Issues:** Unused variables, missing dependencies, console.log statements
- **Security Issues:** Hardcoded API keys, XSS vulnerabilities
- **Accessibility Issues:** Missing alt attributes, form labels, color contrast
- **Performance Issues:** Missing key props, inefficient renders

### Node.js Sample
- **ESLint Issues:** Unused variables, missing semicolons, console.log statements
- **Security Issues:** Hardcoded secrets, unsafe eval, SQL injection
- **Performance Issues:** Missing await, unreachable code
- **Dependency Issues:** Outdated packages, security vulnerabilities

### Vanilla JavaScript Sample
- **ESLint Issues:** Unused variables, missing semicolons, global variables
- **Security Issues:** XSS vulnerabilities, innerHTML usage
- **Accessibility Issues:** Missing alt attributes, form labels, heading structure
- **Stylelint Issues:** Invalid colors, missing semicolons, duplicate properties

## Notes

- These sample projects are designed to trigger various linting and audit issues
- The issues are intentional and used for testing the tool's detection capabilities
- No actual npm modules are installed, so the tool will work with the package.json files
- The CSS files may have syntax errors that are intentional for testing
- Each project demonstrates different types of code quality issues

## Customization

You can modify these sample projects to test specific scenarios:
- Add more ESLint rules to test
- Include different types of security vulnerabilities
- Add more accessibility issues
- Test different CSS patterns for Stylelint

## Troubleshooting

If you encounter issues:
1. Make sure you're running the tool from the correct directory
2. Check that the sample project paths are correct
3. Verify that the project type selection matches the sample
4. Review the generated reports for expected issues 