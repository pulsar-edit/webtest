import{_ as o,o as s,c as r,a as e,b as t,d as a,e as i,r as d}from"./app.7ed01042.js";const l={},h=e("h2",{id:"building-the-website",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#building-the-website","aria-hidden":"true"},"#"),t(" Building the website")],-1),c=e("h3",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),u={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"git",-1),b={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"corepack enable",-1),f=e("h3",{id:"clone-the-repository-and-install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clone-the-repository-and-install","aria-hidden":"true"},"#"),t(" Clone the repository and install")],-1),g={href:"https://github.com/pulsar-edit/pulsar-edit.github.io",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/pulsar-edit/pulsar-edit.github.io

<span class="token builtin class-name">cd</span> pulsar-edit.github.io

<span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="running-the-website" tabindex="-1"><a class="header-anchor" href="#running-the-website" aria-hidden="true">#</a> Running the website</h3><p>Once installed there are a number of scripts available to help you develop and build the site. Just prefix each command with <code>pnpm</code>. e,g, <code>pnpm dev</code>.</p><h4 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> <code>dev</code></h4><p>Starts a watch task that will rebuild VuePress whenever a change has been made to the included Markdown and JavaScript files. Additionally, it launches the development server to test the results in the browser.</p><h4 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> <code>build</code></h4><p>Creates an optimized production build.</p><h4 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> <code>format</code></h4>`,8),_={href:"https://prettier.io",target:"_blank",rel:"noopener noreferrer"},w=i('<p><strong>Note:</strong> This task will run automatically on every commit, so it can be ignored in most cases</p><h4 id="lint" tabindex="-1"><a class="header-anchor" href="#lint" aria-hidden="true">#</a> <code>lint</code></h4><p>Lints all Markdown files in the repository.</p><p><strong>Note:</strong> This task will run automatically on every commit, so it can be ignored in most cases</p><h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h3><p>Whilst <code>dev</code> does run a watch task, not everything will be updated and some changes will require you to shut down the server and start it again. For example adding <code>@include</code> files to another file will not rebuild automatically.</p><p>If you wish to add new files from another repository via alias or <code>@include</code> then you will need to run <code>pnpm update</code> to get the latest version of the repository - the <code>pnpm-lock.yml</code> file will also be updated and must be part of any commit.</p>',7);function y(k,x){const n=d("ExternalLinkIcon");return s(),r("div",null,[h,c,e("ul",null,[e("li",null,[t("Node.js - at least version 16 (recommended installation via "),e("a",u,[t("nvm"),a(n)]),t(").")]),p,e("li",null,[e("a",b,[t("pnpm"),a(n)]),t(" - simply run "),m])]),f,e("p",null,[t("The website repository is "),e("a",g,[t("https://github.com/pulsar-edit/pulsar-edit.github.io"),a(n)]),t(". Other assets are stored on other repositories but these will be downloaded automatically.")]),v,e("p",null,[t("Runs "),e("a",_,[t("Prettier"),a(n)]),t(" over all Markdown files included in the repository to ensure consistent formatting.")]),w])}const V=o(l,[["render",y],["__file","building.html.vue"]]);export{V as default};
