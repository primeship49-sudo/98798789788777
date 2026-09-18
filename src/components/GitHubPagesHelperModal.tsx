import React, { useState } from 'react';
import { X, ShieldCheck, Check, Copy, Terminal, Github, AlertTriangle, FileCode } from 'lucide-react';

interface GitHubPagesHelperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesHelperModal: React.FC<GitHubPagesHelperModalProps> = ({ isOpen, onClose }) => {
  const [copiedWorkflow, setCopiedWorkflow] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState(false);

  if (!isOpen) return null;

  const githubActionsWorkflow = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`;

  const copyToClipboard = (text: string, type: 'workflow' | 'cmd') => {
    navigator.clipboard.writeText(text);
    if (type === 'workflow') {
      setCopiedWorkflow(true);
      setTimeout(() => setCopiedWorkflow(false), 2000);
    } else {
      setCopiedCmd(true);
      setTimeout(() => setCopiedCmd(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-2xl my-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 text-left">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black font-display text-white flex items-center gap-2">
                GitHub Pages Compatibility Guide
              </h3>
              <p className="text-xs text-neutral-400">Zero Blank Screen • Verified Asset Paths</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Why Blank Screen Happens & How It's Fixed */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            1. Why GitHub Pages Shows a Blank Screen & How It's Fixed
          </h4>
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 space-y-2.5">
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Relative Base Path (<code className="text-amber-300 font-mono">base: './'</code>):</strong>{' '}
                Standard Vite apps default to <code className="text-neutral-400">base: '/'</code>, which requests <code className="text-red-400">https://username.github.io/assets/...</code> instead of <code className="text-emerald-400">https://username.github.io/repo-name/assets/...</code>. 
                We have configured <code className="text-amber-300 font-mono">base: './'</code> in <code className="text-white">vite.config.ts</code> so all generated script and stylesheet links work on any subdirectory or custom domain!
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Single-Page Hash & Smooth Scroll Architecture:</strong>{' '}
                Avoids GitHub Pages 404 errors when refreshing non-root paths like <code className="text-neutral-400">/pricing</code> without server rewrite rules.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Standard Production Build:</strong>{' '}
                Running <code className="text-amber-300 font-mono">npm run build</code> generates a self-contained <code className="text-neutral-300 font-mono">dist/</code> folder containing pure static HTML, CSS, and JS ready for deployment.
              </div>
            </div>
          </div>
        </div>

        {/* Option A: GitHub Actions Workflow */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <FileCode className="w-4 h-4" />
              <span>Option A: Automated GitHub Actions (<code className="text-neutral-300">.github/workflows/deploy.yml</code>)</span>
            </h4>
            <button
              onClick={() => copyToClipboard(githubActionsWorkflow, 'workflow')}
              className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
            >
              {copiedWorkflow ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Workflow</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-[11px] font-mono text-neutral-300 max-h-48 overflow-y-auto">
            {githubActionsWorkflow}
          </pre>
          <p className="text-[11px] text-neutral-500">
            In your GitHub repo: Go to <strong>Settings &gt; Pages</strong> and set <strong>Source</strong> to <em>GitHub Actions</em>.
          </p>
        </div>

        {/* Option B: Direct CLI deploy with gh-pages */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Terminal className="w-4 h-4" />
            <span>Option B: Quick One-Line CLI Deploy</span>
          </h4>
          <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs font-mono text-amber-300">
            <code>npm run build && npx gh-pages -d dist</code>
            <button
              onClick={() => copyToClipboard('npm run build && npx gh-pages -d dist', 'cmd')}
              className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Copy Command"
            >
              {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 cursor-pointer shadow-md"
        >
          Got It, All Set!
        </button>

      </div>
    </div>
  );
};
