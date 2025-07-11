#!/usr/bin/env node

/**
 * Test script to demonstrate UI Code Insight with sample projects
 * This script shows how to test the tool with the sample projects
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SAMPLES_DIR = path.join(__dirname);
const TOOL_PATH = path.join(__dirname, '..', 'bin', 'index.js');

console.log('🧪 UI Code Insight Sample Projects Test\n');

// Check if the tool exists
if (!fs.existsSync(TOOL_PATH)) {
  console.error('❌ UI Code Insight tool not found at:', TOOL_PATH);
  console.error('Please make sure you are running this from the samples directory');
  process.exit(1);
}

console.log('✅ UI Code Insight tool found');
console.log('📁 Sample projects available:');

const samples = [
  { name: 'React Sample', path: 'react-sample', type: 'React' },
  { name: 'Node.js Sample', path: 'node-sample', type: 'Node' },
  { name: 'Vanilla JavaScript Sample', path: 'vanilla-sample', type: 'Vanilla' }
];

samples.forEach((sample, index) => {
  const samplePath = path.join(SAMPLES_DIR, sample.path);
  if (fs.existsSync(samplePath)) {
    console.log(`   ${index + 1}. ${sample.name} (${sample.type})`);
    console.log(`      Path: ${samplePath}`);
    
    // Check for key files
    const packageJson = path.join(samplePath, 'package.json');
    if (fs.existsSync(packageJson)) {
      console.log(`      ✅ package.json found`);
    }
    
    // Check for source files
    const srcFiles = fs.readdirSync(samplePath, { recursive: true })
      .filter(file => typeof file === 'string' && 
        (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.jsx') || 
         file.endsWith('.css') || file.endsWith('.html')));
    
    if (srcFiles.length > 0) {
      console.log(`      📄 ${srcFiles.length} source files found`);
    }
  } else {
    console.log(`   ${index + 1}. ${sample.name} - ❌ Directory not found`);
  }
});

console.log('\n🚀 How to test:');
console.log('1. Navigate to a sample project:');
console.log('   cd samples/react-sample');
console.log('');
console.log('2. Run UI Code Insight:');
console.log('   node ../bin/index.js');
console.log('');
console.log('3. Follow the prompts:');
console.log('   - Select the project directory');
console.log('   - Choose the appropriate project type');
console.log('   - Select the reports to generate');
console.log('');
console.log('4. Review the generated dashboard');
console.log('');

console.log('📋 Expected Issues by Sample:');
console.log('');
console.log('React Sample:');
console.log('  - ESLint: Unused variables, missing dependencies');
console.log('  - Security: Hardcoded API keys, XSS vulnerabilities');
console.log('  - Accessibility: Missing alt attributes, form labels');
console.log('  - Performance: Missing key props, inefficient renders');
console.log('');

console.log('Node.js Sample:');
console.log('  - ESLint: Unused variables, missing semicolons');
console.log('  - Security: Hardcoded secrets, unsafe eval, SQL injection');
console.log('  - Performance: Missing await, unreachable code');
console.log('  - Dependencies: Outdated packages, security vulnerabilities');
console.log('');

console.log('Vanilla JavaScript Sample:');
console.log('  - ESLint: Unused variables, missing semicolons, global variables');
console.log('  - Security: XSS vulnerabilities, innerHTML usage');
console.log('  - Accessibility: Missing alt attributes, form labels');
console.log('  - Stylelint: Invalid colors, missing semicolons, duplicate properties');
console.log('');

console.log('💡 Tips:');
console.log('- The sample projects contain intentional issues for testing');
console.log('- No npm modules are installed, so the tool works with package.json files');
console.log('- CSS files may have syntax errors that are intentional');
console.log('- Each project demonstrates different types of code quality issues');
console.log('');

console.log('🔧 Customization:');
console.log('- Modify the sample files to test specific scenarios');
console.log('- Add more ESLint rules or security vulnerabilities');
console.log('- Test different CSS patterns for Stylelint');
console.log('- Add more accessibility issues to HTML files'); 