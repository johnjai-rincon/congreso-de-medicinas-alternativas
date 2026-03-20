(()=>{var q={2018:(n,c,o)=>{"use strict";o.r(c),o.d(c,{default:()=>O});var i=o(9601),d=o.n(i),f=o(2609),y=o.n(f),g=o(5252),w=o(8991),C=o.n(w),P=new URL(o(4680),o.b),V=new URL(o(203),o.b),x=y()(d());x.i(g.Z);var u=C()(P),z=C()(V);x.push([n.id,`/* Base styling sheet for standard tags and common classes */

/* Radio button */
input[type='radio'] {
    -webkit-appearance: none;
    display: inline-block;
    width: 16px;
    min-width: 16px;
    height: 16px;
    padding: 4px;
    border: 1px solid var(--vscode-settings-textInputForeground);
    background-clip: content-box;
    background-color: transparent;
    border-radius: 50%;
    margin: 0;
}
input[type='radio']:checked {
    background-color: var(--vscode-focusBorder);
    border: 1px solid var(--vscode-focusBorder);
}
input:focus:not(:focus-visible) {
    outline-color: transparent;
}

/* Checkbox */
/* TODO: use https://github.com/microsoft/vscode-webview-ui-toolkit */
input[type='checkbox'] {
    -webkit-appearance: none;
    display: inline-block;
    width: 16px;
    min-width: 16px;
    height: 16px;
    border: 1px solid var(--vscode-settings-checkboxBorder);
    border-radius: 20%;
    background-size: 16px;
    background-color: var(--vscode-settings-checkboxBackground);
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
}

body.vscode-dark input[type='checkbox']:checked {
    background-image: url(`+u+`);
}

body.vscode-light input[type='checkbox']:checked {
    background-image: url(`+z+`);
}

/* Placeholder */
::placeholder {
    color: var(--vscode-input-placeholderForeground);
}

/* Text/number input box */
input[type='text'],
input[type='password'],
input[type='number'] {
    color: var(--vscode-settings-textInputForeground);
    background: var(--vscode-settings-textInputBackground);
    border: 1px solid var(--vscode-settings-textInputBorder);
    padding: 4px 4px;
}
input[type='text'][data-invalid='true'],
input[type='password'][data-invalid='true'],
input[type='number'][data-invalid='true'] {
    border: 1px solid var(--vscode-inputValidation-errorBorder);
    border-bottom: 0;
}
input:disabled {
    /* TODO: use VSC webcomponent library instead */
    filter: brightness(0.8);
}
.input-validation {
    color: var(--vscode-inputValidation-errorForeground);
    background: var(--vscode-inputValidation-errorBackground);
    border: 1px solid var(--vscode-inputValidation-errorBorder);
    padding: 4px 4px;
}

/* Select drop-down */
select {
    margin: 0px 0px;
    padding: 2px 0px;
    border-radius: 4px;
    border: 1px solid var(--vscode-settings-dropdownBorder);
    background: var(--vscode-settings-dropdownBackground);
    color: var(--vscode-settings-dropdownForeground);
}
select:invalid {
    color: var(--vscode-input-placeholderForeground);
}
option {
    color: var(--vscode-settings-dropdownForeground);
    background: var(--vscode-settings-dropdownBackground);
}

/* Header (for settings) (TODO: move to different sheet) */
.header {
    padding: 16px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
}
/* The below selectors apply a tint depending on the theme: light for dark and dark for light */
/* \`backdrop-filter\` with a brightness offset of 0.2 would be better here but it causes some slight flickering */
body.vscode-dark .header {
    background-color: rgb(255, 255, 255, 0.05);
}
body.vscode-light .header {
    background-color: rgba(0, 0, 0, 0.05);
}

/* Buttons */
button,
.button-theme-primary {
    color: var(--vscode-button-foreground);
    background: var(--vscode-button-background);
    border: 1px solid var(--vscode-button-border);
    padding: 8px 12px;
}
button,
.button-theme-primary:hover:not(:disabled) {
    background: var(--vscode-button-hoverBackground);
    cursor: pointer;
}
.button-theme-secondary {
    color: var(--vscode-button-secondaryForeground);
    background: var(--vscode-button-secondaryBackground);
    border: 1px solid var(--vscode-button-border);
}
.button-theme-secondary:hover:not(:disabled) {
    background: var(--vscode-button-secondaryHoverBackground);
    cursor: pointer;
}
.button-theme-soft {
    color: var(--vscode-settings-textInputForeground);
    background: var(--vscode-settings-textInputBackground);
}
button:disabled {
    /* TODO: use VSC webcomponent library instead */
    filter: brightness(0.8);
}

/* Text area */
textarea {
    color: var(--vscode-settings-textInputForeground);
    background: var(--vscode-settings-textInputBackground);
    border: 1px solid var(--vscode-settings-textInputBorder);
}

/* Badge */
.badge {
    color: var(--vscode-activityBarBadge-foreground);
    background-color: var(--vscode-activityBarBadge-background);
    padding: 3px 8px;
    font-size: 0.75rem;
    border-radius: 16px;
    white-space: nowrap;
}

/* Labels */
.label-context {
    display: block;
    padding: 0 0 4px 0;
}
.option-label {
    display: block;
    /* max-width: 560px; */
    padding: 0 0 8px 0;
}

/* Layout */
.ml-0 {
    margin-left: 0px;
}
.ml-2 {
    margin-left: 2px;
}
.ml-4 {
    margin-left: 4px;
}
.ml-8 {
    margin-left: 8px;
}
.ml-16 {
    margin-left: 16px;
}
.mr-0 {
    margin-right: 0px;
}
.mr-2 {
    margin-right: 2px;
}
.mr-4 {
    margin-right: 4px;
}
.mr-8 {
    margin-right: 8px;
}
.mr-16 {
    margin-right: 16px;
}
.mt-0 {
    margin-top: 0px;
}
.mt-2 {
    margin-top: 2px;
}
.mt-4 {
    margin-top: 4px;
}
.mt-8 {
    margin-top: 8px;
}
.mt-16 {
    margin-top: 16px;
}
.mb-0 {
    margin-bottom: 0px;
}
.mb-2 {
    margin-bottom: 2px;
}
.mb-4 {
    margin-bottom: 4px;
}
.mb-8 {
    margin-bottom: 8px;
}
.mb-16 {
    margin-bottom: 16px;
}

/* Basic 16px icon class */
.icon {
    display: inline;
    height: 16px;
    width: 16px;
    background-repeat: no-repeat;
    background-position: center;
}

/* Misc. */
.no-spacing {
    margin: 0;
    padding: 0;
}
.no-wrap {
    white-space: nowrap;
}
.soft {
    color: var(--vscode-input-placeholderForeground);
}
.container {
    background: var(--vscode-menu-background);
}
.display-contents {
    display: contents;
}
.button-container {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    /* margin: 16px 0 0 0; */
    padding: 10px;
    position: sticky;
    top: 10px;
    justify-content: flex-end;
    border-bottom: 1px solid var(--vscode-menu-separatorBackground);
    /**
     * HACK: Using background-color alpha as a workaround because "opacity" affects children.
     * TODO: Is there a way to use alpha with var(--vscode-menu-background) ?
     */
    /* background-color: rgba(0, 0, 0, 0.1); */
}

.button-container h1 {
    margin: 0px;
}
`,""]);const O=x},5252:(n,c,o)=>{"use strict";o.d(c,{Z:()=>x});var i=o(9601),d=o.n(i),f=o(2609),y=o.n(f),g=o(8991),w=o.n(g),C=new URL(o(6114),o.b),P=y()(d()),V=w()(C);P.push([n.id,`/* 
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. 
 * SPDX-License-Identifier: Apache-2.0 
 * 
 * This style sheet was generated using "packages/core/scripts/build/generateIcons.ts". 
 */ 

@font-face {
  font-display: auto;
  font-family: "aws-toolkit-icons";
  font-style: normal;
  font-weight: 400;
  
  src: url(`+V+`) format("woff"); 
}

.icon {
  display: inline-block;
  font-family: "aws-toolkit-icons";
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.icon-lg {
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.icon-xs {
  font-size: 0.75em;
}

.icon-sm {
  font-size: 0.875em;
}

.icon-1x {
  font-size: 1em;
}

.icon-2x {
  font-size: 2em;
}

.icon-3x {
  font-size: 3em;
}

.icon-4x {
  font-size: 4em;
}

.icon-5x {
  font-size: 5em;
}

.icon-6x {
  font-size: 6em;
}

.icon-7x {
  font-size: 7em;
}

.icon-8x {
  font-size: 8em;
}

.icon-9x {
  font-size: 9em;
}

.icon-10x {
  font-size: 10em;
}

.icon-fw {
  text-align: center;
  width: 1.25em;
}

.icon-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.icon-pull-left {
  float: left;
}

.icon-pull-right {
  float: right;
}

.icon.icon-pull-left {
  margin-right: 0.3em;
}

.icon.icon-pull-right {
  margin-left: 0.3em;
}


.icon-vscode-account::before {
  content: "\\eb99";
}

.icon-vscode-activate-breakpoints::before {
  content: "\\ea97";
}

.icon-vscode-add::before {
  content: "\\ea60";
}

.icon-vscode-archive::before {
  content: "\\ea98";
}

.icon-vscode-arrow-both::before {
  content: "\\ea99";
}

.icon-vscode-arrow-circle-down::before {
  content: "\\ebfc";
}

.icon-vscode-arrow-circle-left::before {
  content: "\\ebfd";
}

.icon-vscode-arrow-circle-right::before {
  content: "\\ebfe";
}

.icon-vscode-arrow-circle-up::before {
  content: "\\ebff";
}

.icon-vscode-arrow-down::before {
  content: "\\ea9a";
}

.icon-vscode-arrow-left::before {
  content: "\\ea9b";
}

.icon-vscode-arrow-right::before {
  content: "\\ea9c";
}

.icon-vscode-arrow-small-down::before {
  content: "\\ea9d";
}

.icon-vscode-arrow-small-left::before {
  content: "\\ea9e";
}

.icon-vscode-arrow-small-right::before {
  content: "\\ea9f";
}

.icon-vscode-arrow-small-up::before {
  content: "\\eaa0";
}

.icon-vscode-arrow-swap::before {
  content: "\\ebcb";
}

.icon-vscode-arrow-up::before {
  content: "\\eaa1";
}

.icon-vscode-azure::before {
  content: "\\ebd8";
}

.icon-vscode-azure-devops::before {
  content: "\\ebe8";
}

.icon-vscode-beaker::before {
  content: "\\ea79";
}

.icon-vscode-beaker-stop::before {
  content: "\\ebe1";
}

.icon-vscode-bell::before {
  content: "\\eaa2";
}

.icon-vscode-bell-dot::before {
  content: "\\eb9a";
}

.icon-vscode-bell-slash::before {
  content: "\\ec08";
}

.icon-vscode-bell-slash-dot::before {
  content: "\\ec09";
}

.icon-vscode-blank::before {
  content: "\\ec03";
}

.icon-vscode-bold::before {
  content: "\\eaa3";
}

.icon-vscode-book::before {
  content: "\\eaa4";
}

.icon-vscode-bookmark::before {
  content: "\\eaa5";
}

.icon-vscode-bracket-dot::before {
  content: "\\ebe5";
}

.icon-vscode-bracket-error::before {
  content: "\\ebe6";
}

.icon-vscode-briefcase::before {
  content: "\\eaac";
}

.icon-vscode-broadcast::before {
  content: "\\eaad";
}

.icon-vscode-browser::before {
  content: "\\eaae";
}

.icon-vscode-bug::before {
  content: "\\eaaf";
}

.icon-vscode-calendar::before {
  content: "\\eab0";
}

.icon-vscode-call-incoming::before {
  content: "\\eb92";
}

.icon-vscode-call-outgoing::before {
  content: "\\eb93";
}

.icon-vscode-case-sensitive::before {
  content: "\\eab1";
}

.icon-vscode-check::before {
  content: "\\eab2";
}

.icon-vscode-check-all::before {
  content: "\\ebb1";
}

.icon-vscode-checklist::before {
  content: "\\eab3";
}

.icon-vscode-chevron-down::before {
  content: "\\eab4";
}

.icon-vscode-chevron-left::before {
  content: "\\eab5";
}

.icon-vscode-chevron-right::before {
  content: "\\eab6";
}

.icon-vscode-chevron-up::before {
  content: "\\eab7";
}

.icon-vscode-chrome-close::before {
  content: "\\eab8";
}

.icon-vscode-chrome-maximize::before {
  content: "\\eab9";
}

.icon-vscode-chrome-minimize::before {
  content: "\\eaba";
}

.icon-vscode-chrome-restore::before {
  content: "\\eabb";
}

.icon-vscode-circle::before {
  content: "\\eabc";
}

.icon-vscode-circle-filled::before {
  content: "\\ea71";
}

.icon-vscode-circle-large::before {
  content: "\\ebb5";
}

.icon-vscode-circle-large-filled::before {
  content: "\\ebb4";
}

.icon-vscode-circle-slash::before {
  content: "\\eabd";
}

.icon-vscode-circle-small::before {
  content: "\\ec07";
}

.icon-vscode-circle-small-filled::before {
  content: "\\eb8a";
}

.icon-vscode-circuit-board::before {
  content: "\\eabe";
}

.icon-vscode-clear-all::before {
  content: "\\eabf";
}

.icon-vscode-clippy::before {
  content: "\\eac0";
}

.icon-vscode-close::before {
  content: "\\ea76";
}

.icon-vscode-close-all::before {
  content: "\\eac1";
}

.icon-vscode-cloud::before {
  content: "\\ebaa";
}

.icon-vscode-cloud-download::before {
  content: "\\eac2";
}

.icon-vscode-cloud-upload::before {
  content: "\\eac3";
}

.icon-vscode-code::before {
  content: "\\eac4";
}

.icon-vscode-collapse-all::before {
  content: "\\eac5";
}

.icon-vscode-color-mode::before {
  content: "\\eac6";
}

.icon-vscode-combine::before {
  content: "\\ebb6";
}

.icon-vscode-comment::before {
  content: "\\ea6b";
}

.icon-vscode-comment-discussion::before {
  content: "\\eac7";
}

.icon-vscode-comment-draft::before {
  content: "\\ec0e";
}

.icon-vscode-comment-unresolved::before {
  content: "\\ec0a";
}

.icon-vscode-compass::before {
  content: "\\ebd5";
}

.icon-vscode-compass-active::before {
  content: "\\ebd7";
}

.icon-vscode-compass-dot::before {
  content: "\\ebd6";
}

.icon-vscode-copy::before {
  content: "\\ebcc";
}

.icon-vscode-credit-card::before {
  content: "\\eac9";
}

.icon-vscode-dash::before {
  content: "\\eacc";
}

.icon-vscode-dashboard::before {
  content: "\\eacd";
}

.icon-vscode-database::before {
  content: "\\eace";
}

.icon-vscode-debug::before {
  content: "\\ead8";
}

.icon-vscode-debug-all::before {
  content: "\\ebdc";
}

.icon-vscode-debug-alt::before {
  content: "\\eb91";
}

.icon-vscode-debug-alt-small::before {
  content: "\\eba8";
}

.icon-vscode-debug-breakpoint-conditional::before {
  content: "\\eaa7";
}

.icon-vscode-debug-breakpoint-conditional-unverified::before {
  content: "\\eaa6";
}

.icon-vscode-debug-breakpoint-data::before {
  content: "\\eaa9";
}

.icon-vscode-debug-breakpoint-data-unverified::before {
  content: "\\eaa8";
}

.icon-vscode-debug-breakpoint-function::before {
  content: "\\eb88";
}

.icon-vscode-debug-breakpoint-function-unverified::before {
  content: "\\eb87";
}

.icon-vscode-debug-breakpoint-log::before {
  content: "\\eaab";
}

.icon-vscode-debug-breakpoint-log-unverified::before {
  content: "\\eaaa";
}

.icon-vscode-debug-breakpoint-unsupported::before {
  content: "\\eb8c";
}

.icon-vscode-debug-console::before {
  content: "\\eb9b";
}

.icon-vscode-debug-continue::before {
  content: "\\eacf";
}

.icon-vscode-debug-continue-small::before {
  content: "\\ebe0";
}

.icon-vscode-debug-coverage::before {
  content: "\\ebdd";
}

.icon-vscode-debug-disconnect::before {
  content: "\\ead0";
}

.icon-vscode-debug-line-by-line::before {
  content: "\\ebd0";
}

.icon-vscode-debug-pause::before {
  content: "\\ead1";
}

.icon-vscode-debug-rerun::before {
  content: "\\ebc0";
}

.icon-vscode-debug-restart::before {
  content: "\\ead2";
}

.icon-vscode-debug-restart-frame::before {
  content: "\\eb90";
}

.icon-vscode-debug-reverse-continue::before {
  content: "\\eb8e";
}

.icon-vscode-debug-stackframe::before {
  content: "\\eb8b";
}

.icon-vscode-debug-stackframe-active::before {
  content: "\\eb89";
}

.icon-vscode-debug-start::before {
  content: "\\ead3";
}

.icon-vscode-debug-step-back::before {
  content: "\\eb8f";
}

.icon-vscode-debug-step-into::before {
  content: "\\ead4";
}

.icon-vscode-debug-step-out::before {
  content: "\\ead5";
}

.icon-vscode-debug-step-over::before {
  content: "\\ead6";
}

.icon-vscode-debug-stop::before {
  content: "\\ead7";
}

.icon-vscode-desktop-download::before {
  content: "\\ea78";
}

.icon-vscode-device-camera::before {
  content: "\\eada";
}

.icon-vscode-device-camera-video::before {
  content: "\\ead9";
}

.icon-vscode-device-mobile::before {
  content: "\\eadb";
}

.icon-vscode-diff::before {
  content: "\\eae1";
}

.icon-vscode-diff-added::before {
  content: "\\eadc";
}

.icon-vscode-diff-ignored::before {
  content: "\\eadd";
}

.icon-vscode-diff-modified::before {
  content: "\\eade";
}

.icon-vscode-diff-removed::before {
  content: "\\eadf";
}

.icon-vscode-diff-renamed::before {
  content: "\\eae0";
}

.icon-vscode-discard::before {
  content: "\\eae2";
}

.icon-vscode-edit::before {
  content: "\\ea73";
}

.icon-vscode-editor-layout::before {
  content: "\\eae3";
}

.icon-vscode-ellipsis::before {
  content: "\\ea7c";
}

.icon-vscode-empty-window::before {
  content: "\\eae4";
}

.icon-vscode-error::before {
  content: "\\ea87";
}

.icon-vscode-error-small::before {
  content: "\\ebfb";
}

.icon-vscode-exclude::before {
  content: "\\eae5";
}

.icon-vscode-expand-all::before {
  content: "\\eb95";
}

.icon-vscode-export::before {
  content: "\\ebac";
}

.icon-vscode-extensions::before {
  content: "\\eae6";
}

.icon-vscode-eye::before {
  content: "\\ea70";
}

.icon-vscode-eye-closed::before {
  content: "\\eae7";
}

.icon-vscode-feedback::before {
  content: "\\eb96";
}

.icon-vscode-file::before {
  content: "\\ea7b";
}

.icon-vscode-file-binary::before {
  content: "\\eae8";
}

.icon-vscode-file-code::before {
  content: "\\eae9";
}

.icon-vscode-file-media::before {
  content: "\\eaea";
}

.icon-vscode-file-pdf::before {
  content: "\\eaeb";
}

.icon-vscode-file-submodule::before {
  content: "\\eaec";
}

.icon-vscode-file-symlink-directory::before {
  content: "\\eaed";
}

.icon-vscode-file-symlink-file::before {
  content: "\\eaee";
}

.icon-vscode-file-zip::before {
  content: "\\eaef";
}

.icon-vscode-files::before {
  content: "\\eaf0";
}

.icon-vscode-filter::before {
  content: "\\eaf1";
}

.icon-vscode-filter-filled::before {
  content: "\\ebce";
}

.icon-vscode-flame::before {
  content: "\\eaf2";
}

.icon-vscode-fold::before {
  content: "\\eaf5";
}

.icon-vscode-fold-down::before {
  content: "\\eaf3";
}

.icon-vscode-fold-up::before {
  content: "\\eaf4";
}

.icon-vscode-folder::before {
  content: "\\ea83";
}

.icon-vscode-folder-active::before {
  content: "\\eaf6";
}

.icon-vscode-folder-library::before {
  content: "\\ebdf";
}

.icon-vscode-folder-opened::before {
  content: "\\eaf7";
}

.icon-vscode-gear::before {
  content: "\\eaf8";
}

.icon-vscode-gift::before {
  content: "\\eaf9";
}

.icon-vscode-gist::before {
  content: "\\eafb";
}

.icon-vscode-gist-secret::before {
  content: "\\eafa";
}

.icon-vscode-git-commit::before {
  content: "\\eafc";
}

.icon-vscode-git-compare::before {
  content: "\\eafd";
}

.icon-vscode-git-merge::before {
  content: "\\eafe";
}

.icon-vscode-git-pull-request::before {
  content: "\\ea64";
}

.icon-vscode-git-pull-request-closed::before {
  content: "\\ebda";
}

.icon-vscode-git-pull-request-create::before {
  content: "\\ebbc";
}

.icon-vscode-git-pull-request-draft::before {
  content: "\\ebdb";
}

.icon-vscode-git-pull-request-go-to-changes::before {
  content: "\\ec0b";
}

.icon-vscode-git-pull-request-new-changes::before {
  content: "\\ec0c";
}

.icon-vscode-github::before {
  content: "\\ea84";
}

.icon-vscode-github-action::before {
  content: "\\eaff";
}

.icon-vscode-github-alt::before {
  content: "\\eb00";
}

.icon-vscode-github-inverted::before {
  content: "\\eba1";
}

.icon-vscode-globe::before {
  content: "\\eb01";
}

.icon-vscode-go-to-file::before {
  content: "\\ea94";
}

.icon-vscode-grabber::before {
  content: "\\eb02";
}

.icon-vscode-graph::before {
  content: "\\eb03";
}

.icon-vscode-graph-left::before {
  content: "\\ebad";
}

.icon-vscode-graph-line::before {
  content: "\\ebe2";
}

.icon-vscode-graph-scatter::before {
  content: "\\ebe3";
}

.icon-vscode-gripper::before {
  content: "\\eb04";
}

.icon-vscode-group-by-ref-type::before {
  content: "\\eb97";
}

.icon-vscode-heart::before {
  content: "\\eb05";
}

.icon-vscode-heart-filled::before {
  content: "\\ec04";
}

.icon-vscode-history::before {
  content: "\\ea82";
}

.icon-vscode-home::before {
  content: "\\eb06";
}

.icon-vscode-horizontal-rule::before {
  content: "\\eb07";
}

.icon-vscode-hubot::before {
  content: "\\eb08";
}

.icon-vscode-inbox::before {
  content: "\\eb09";
}

.icon-vscode-indent::before {
  content: "\\ebf9";
}

.icon-vscode-info::before {
  content: "\\ea74";
}

.icon-vscode-insert::before {
  content: "\\ec11";
}

.icon-vscode-inspect::before {
  content: "\\ebd1";
}

.icon-vscode-issue-draft::before {
  content: "\\ebd9";
}

.icon-vscode-issue-reopened::before {
  content: "\\eb0b";
}

.icon-vscode-issues::before {
  content: "\\eb0c";
}

.icon-vscode-italic::before {
  content: "\\eb0d";
}

.icon-vscode-jersey::before {
  content: "\\eb0e";
}

.icon-vscode-json::before {
  content: "\\eb0f";
}

.icon-vscode-kebab-vertical::before {
  content: "\\eb10";
}

.icon-vscode-key::before {
  content: "\\eb11";
}

.icon-vscode-law::before {
  content: "\\eb12";
}

.icon-vscode-layers::before {
  content: "\\ebd2";
}

.icon-vscode-layers-active::before {
  content: "\\ebd4";
}

.icon-vscode-layers-dot::before {
  content: "\\ebd3";
}

.icon-vscode-layout::before {
  content: "\\ebeb";
}

.icon-vscode-layout-activitybar-left::before {
  content: "\\ebec";
}

.icon-vscode-layout-activitybar-right::before {
  content: "\\ebed";
}

.icon-vscode-layout-centered::before {
  content: "\\ebf7";
}

.icon-vscode-layout-menubar::before {
  content: "\\ebf6";
}

.icon-vscode-layout-panel::before {
  content: "\\ebf2";
}

.icon-vscode-layout-panel-center::before {
  content: "\\ebef";
}

.icon-vscode-layout-panel-justify::before {
  content: "\\ebf0";
}

.icon-vscode-layout-panel-left::before {
  content: "\\ebee";
}

.icon-vscode-layout-panel-off::before {
  content: "\\ec01";
}

.icon-vscode-layout-panel-right::before {
  content: "\\ebf1";
}

.icon-vscode-layout-sidebar-left::before {
  content: "\\ebf3";
}

.icon-vscode-layout-sidebar-left-off::before {
  content: "\\ec02";
}

.icon-vscode-layout-sidebar-right::before {
  content: "\\ebf4";
}

.icon-vscode-layout-sidebar-right-off::before {
  content: "\\ec00";
}

.icon-vscode-layout-statusbar::before {
  content: "\\ebf5";
}

.icon-vscode-library::before {
  content: "\\eb9c";
}

.icon-vscode-lightbulb::before {
  content: "\\ea61";
}

.icon-vscode-lightbulb-autofix::before {
  content: "\\eb13";
}

.icon-vscode-link::before {
  content: "\\eb15";
}

.icon-vscode-link-external::before {
  content: "\\eb14";
}

.icon-vscode-list-filter::before {
  content: "\\eb83";
}

.icon-vscode-list-flat::before {
  content: "\\eb84";
}

.icon-vscode-list-ordered::before {
  content: "\\eb16";
}

.icon-vscode-list-selection::before {
  content: "\\eb85";
}

.icon-vscode-list-tree::before {
  content: "\\eb86";
}

.icon-vscode-list-unordered::before {
  content: "\\eb17";
}

.icon-vscode-live-share::before {
  content: "\\eb18";
}

.icon-vscode-loading::before {
  content: "\\eb19";
}

.icon-vscode-location::before {
  content: "\\eb1a";
}

.icon-vscode-lock::before {
  content: "\\ea75";
}

.icon-vscode-lock-small::before {
  content: "\\ebe7";
}

.icon-vscode-magnet::before {
  content: "\\ebae";
}

.icon-vscode-mail::before {
  content: "\\eb1c";
}

.icon-vscode-mail-read::before {
  content: "\\eb1b";
}

.icon-vscode-map::before {
  content: "\\ec05";
}

.icon-vscode-map-filled::before {
  content: "\\ec06";
}

.icon-vscode-markdown::before {
  content: "\\eb1d";
}

.icon-vscode-megaphone::before {
  content: "\\eb1e";
}

.icon-vscode-mention::before {
  content: "\\eb1f";
}

.icon-vscode-menu::before {
  content: "\\eb94";
}

.icon-vscode-merge::before {
  content: "\\ebab";
}

.icon-vscode-milestone::before {
  content: "\\eb20";
}

.icon-vscode-mirror::before {
  content: "\\ea69";
}

.icon-vscode-mortar-board::before {
  content: "\\eb21";
}

.icon-vscode-move::before {
  content: "\\eb22";
}

.icon-vscode-multiple-windows::before {
  content: "\\eb23";
}

.icon-vscode-mute::before {
  content: "\\eb24";
}

.icon-vscode-new-file::before {
  content: "\\ea7f";
}

.icon-vscode-new-folder::before {
  content: "\\ea80";
}

.icon-vscode-newline::before {
  content: "\\ebea";
}

.icon-vscode-no-newline::before {
  content: "\\eb25";
}

.icon-vscode-note::before {
  content: "\\eb26";
}

.icon-vscode-notebook::before {
  content: "\\ebaf";
}

.icon-vscode-notebook-template::before {
  content: "\\ebbf";
}

.icon-vscode-octoface::before {
  content: "\\eb27";
}

.icon-vscode-open-preview::before {
  content: "\\eb28";
}

.icon-vscode-organization::before {
  content: "\\ea7e";
}

.icon-vscode-output::before {
  content: "\\eb9d";
}

.icon-vscode-package::before {
  content: "\\eb29";
}

.icon-vscode-paintcan::before {
  content: "\\eb2a";
}

.icon-vscode-pass::before {
  content: "\\eba4";
}

.icon-vscode-pass-filled::before {
  content: "\\ebb3";
}

.icon-vscode-person::before {
  content: "\\ea67";
}

.icon-vscode-person-add::before {
  content: "\\ebcd";
}

.icon-vscode-pie-chart::before {
  content: "\\ebe4";
}

.icon-vscode-pin::before {
  content: "\\eb2b";
}

.icon-vscode-pinned::before {
  content: "\\eba0";
}

.icon-vscode-pinned-dirty::before {
  content: "\\ebb2";
}

.icon-vscode-play::before {
  content: "\\eb2c";
}

.icon-vscode-play-circle::before {
  content: "\\eba6";
}

.icon-vscode-plug::before {
  content: "\\eb2d";
}

.icon-vscode-preserve-case::before {
  content: "\\eb2e";
}

.icon-vscode-preview::before {
  content: "\\eb2f";
}

.icon-vscode-primitive-square::before {
  content: "\\ea72";
}

.icon-vscode-project::before {
  content: "\\eb30";
}

.icon-vscode-pulse::before {
  content: "\\eb31";
}

.icon-vscode-question::before {
  content: "\\eb32";
}

.icon-vscode-quote::before {
  content: "\\eb33";
}

.icon-vscode-radio-tower::before {
  content: "\\eb34";
}

.icon-vscode-reactions::before {
  content: "\\eb35";
}

.icon-vscode-record::before {
  content: "\\eba7";
}

.icon-vscode-record-keys::before {
  content: "\\ea65";
}

.icon-vscode-record-small::before {
  content: "\\ebfa";
}

.icon-vscode-redo::before {
  content: "\\ebb0";
}

.icon-vscode-references::before {
  content: "\\eb36";
}

.icon-vscode-refresh::before {
  content: "\\eb37";
}

.icon-vscode-regex::before {
  content: "\\eb38";
}

.icon-vscode-remote::before {
  content: "\\eb3a";
}

.icon-vscode-remote-explorer::before {
  content: "\\eb39";
}

.icon-vscode-remove::before {
  content: "\\eb3b";
}

.icon-vscode-replace::before {
  content: "\\eb3d";
}

.icon-vscode-replace-all::before {
  content: "\\eb3c";
}

.icon-vscode-reply::before {
  content: "\\ea7d";
}

.icon-vscode-repo::before {
  content: "\\ea62";
}

.icon-vscode-repo-clone::before {
  content: "\\eb3e";
}

.icon-vscode-repo-force-push::before {
  content: "\\eb3f";
}

.icon-vscode-repo-forked::before {
  content: "\\ea63";
}

.icon-vscode-repo-pull::before {
  content: "\\eb40";
}

.icon-vscode-repo-push::before {
  content: "\\eb41";
}

.icon-vscode-report::before {
  content: "\\eb42";
}

.icon-vscode-request-changes::before {
  content: "\\eb43";
}

.icon-vscode-rocket::before {
  content: "\\eb44";
}

.icon-vscode-root-folder::before {
  content: "\\eb46";
}

.icon-vscode-root-folder-opened::before {
  content: "\\eb45";
}

.icon-vscode-rss::before {
  content: "\\eb47";
}

.icon-vscode-ruby::before {
  content: "\\eb48";
}

.icon-vscode-run-above::before {
  content: "\\ebbd";
}

.icon-vscode-run-all::before {
  content: "\\eb9e";
}

.icon-vscode-run-below::before {
  content: "\\ebbe";
}

.icon-vscode-run-errors::before {
  content: "\\ebde";
}

.icon-vscode-save::before {
  content: "\\eb4b";
}

.icon-vscode-save-all::before {
  content: "\\eb49";
}

.icon-vscode-save-as::before {
  content: "\\eb4a";
}

.icon-vscode-screen-full::before {
  content: "\\eb4c";
}

.icon-vscode-screen-normal::before {
  content: "\\eb4d";
}

.icon-vscode-search::before {
  content: "\\ea6d";
}

.icon-vscode-search-fuzzy::before {
  content: "\\ec0d";
}

.icon-vscode-search-stop::before {
  content: "\\eb4e";
}

.icon-vscode-send::before {
  content: "\\ec0f";
}

.icon-vscode-server::before {
  content: "\\eb50";
}

.icon-vscode-server-environment::before {
  content: "\\eba3";
}

.icon-vscode-server-process::before {
  content: "\\eba2";
}

.icon-vscode-settings::before {
  content: "\\eb52";
}

.icon-vscode-settings-gear::before {
  content: "\\eb51";
}

.icon-vscode-shield::before {
  content: "\\eb53";
}

.icon-vscode-sign-in::before {
  content: "\\ea6f";
}

.icon-vscode-sign-out::before {
  content: "\\ea6e";
}

.icon-vscode-smiley::before {
  content: "\\eb54";
}

.icon-vscode-sort-precedence::before {
  content: "\\eb55";
}

.icon-vscode-source-control::before {
  content: "\\ea68";
}

.icon-vscode-sparkle::before {
  content: "\\ec10";
}

.icon-vscode-split-horizontal::before {
  content: "\\eb56";
}

.icon-vscode-split-vertical::before {
  content: "\\eb57";
}

.icon-vscode-squirrel::before {
  content: "\\eb58";
}

.icon-vscode-star-empty::before {
  content: "\\ea6a";
}

.icon-vscode-star-full::before {
  content: "\\eb59";
}

.icon-vscode-star-half::before {
  content: "\\eb5a";
}

.icon-vscode-stop-circle::before {
  content: "\\eba5";
}

.icon-vscode-symbol-array::before {
  content: "\\ea8a";
}

.icon-vscode-symbol-boolean::before {
  content: "\\ea8f";
}

.icon-vscode-symbol-class::before {
  content: "\\eb5b";
}

.icon-vscode-symbol-color::before {
  content: "\\eb5c";
}

.icon-vscode-symbol-constant::before {
  content: "\\eb5d";
}

.icon-vscode-symbol-enum::before {
  content: "\\ea95";
}

.icon-vscode-symbol-enum-member::before {
  content: "\\eb5e";
}

.icon-vscode-symbol-event::before {
  content: "\\ea86";
}

.icon-vscode-symbol-field::before {
  content: "\\eb5f";
}

.icon-vscode-symbol-file::before {
  content: "\\eb60";
}

.icon-vscode-symbol-interface::before {
  content: "\\eb61";
}

.icon-vscode-symbol-key::before {
  content: "\\ea93";
}

.icon-vscode-symbol-keyword::before {
  content: "\\eb62";
}

.icon-vscode-symbol-method::before {
  content: "\\ea8c";
}

.icon-vscode-symbol-misc::before {
  content: "\\eb63";
}

.icon-vscode-symbol-namespace::before {
  content: "\\ea8b";
}

.icon-vscode-symbol-numeric::before {
  content: "\\ea90";
}

.icon-vscode-symbol-operator::before {
  content: "\\eb64";
}

.icon-vscode-symbol-parameter::before {
  content: "\\ea92";
}

.icon-vscode-symbol-property::before {
  content: "\\eb65";
}

.icon-vscode-symbol-ruler::before {
  content: "\\ea96";
}

.icon-vscode-symbol-snippet::before {
  content: "\\eb66";
}

.icon-vscode-symbol-string::before {
  content: "\\eb8d";
}

.icon-vscode-symbol-structure::before {
  content: "\\ea91";
}

.icon-vscode-symbol-variable::before {
  content: "\\ea88";
}

.icon-vscode-sync::before {
  content: "\\ea77";
}

.icon-vscode-sync-ignored::before {
  content: "\\eb9f";
}

.icon-vscode-table::before {
  content: "\\ebb7";
}

.icon-vscode-tag::before {
  content: "\\ea66";
}

.icon-vscode-target::before {
  content: "\\ebf8";
}

.icon-vscode-tasklist::before {
  content: "\\eb67";
}

.icon-vscode-telescope::before {
  content: "\\eb68";
}

.icon-vscode-terminal::before {
  content: "\\ea85";
}

.icon-vscode-terminal-bash::before {
  content: "\\ebca";
}

.icon-vscode-terminal-cmd::before {
  content: "\\ebc4";
}

.icon-vscode-terminal-debian::before {
  content: "\\ebc5";
}

.icon-vscode-terminal-linux::before {
  content: "\\ebc6";
}

.icon-vscode-terminal-powershell::before {
  content: "\\ebc7";
}

.icon-vscode-terminal-tmux::before {
  content: "\\ebc8";
}

.icon-vscode-terminal-ubuntu::before {
  content: "\\ebc9";
}

.icon-vscode-text-size::before {
  content: "\\eb69";
}

.icon-vscode-three-bars::before {
  content: "\\eb6a";
}

.icon-vscode-thumbsdown::before {
  content: "\\eb6b";
}

.icon-vscode-thumbsup::before {
  content: "\\eb6c";
}

.icon-vscode-tools::before {
  content: "\\eb6d";
}

.icon-vscode-trash::before {
  content: "\\ea81";
}

.icon-vscode-triangle-down::before {
  content: "\\eb6e";
}

.icon-vscode-triangle-left::before {
  content: "\\eb6f";
}

.icon-vscode-triangle-right::before {
  content: "\\eb70";
}

.icon-vscode-triangle-up::before {
  content: "\\eb71";
}

.icon-vscode-twitter::before {
  content: "\\eb72";
}

.icon-vscode-type-hierarchy::before {
  content: "\\ebb9";
}

.icon-vscode-type-hierarchy-sub::before {
  content: "\\ebba";
}

.icon-vscode-type-hierarchy-super::before {
  content: "\\ebbb";
}

.icon-vscode-unfold::before {
  content: "\\eb73";
}

.icon-vscode-ungroup-by-ref-type::before {
  content: "\\eb98";
}

.icon-vscode-unlock::before {
  content: "\\eb74";
}

.icon-vscode-unmute::before {
  content: "\\eb75";
}

.icon-vscode-unverified::before {
  content: "\\eb76";
}

.icon-vscode-variable-group::before {
  content: "\\ebb8";
}

.icon-vscode-verified::before {
  content: "\\eb77";
}

.icon-vscode-verified-filled::before {
  content: "\\ebe9";
}

.icon-vscode-versions::before {
  content: "\\eb78";
}

.icon-vscode-vm::before {
  content: "\\ea7a";
}

.icon-vscode-vm-active::before {
  content: "\\eb79";
}

.icon-vscode-vm-connect::before {
  content: "\\eba9";
}

.icon-vscode-vm-outline::before {
  content: "\\eb7a";
}

.icon-vscode-vm-running::before {
  content: "\\eb7b";
}

.icon-vscode-wand::before {
  content: "\\ebcf";
}

.icon-vscode-warning::before {
  content: "\\ea6c";
}

.icon-vscode-watch::before {
  content: "\\eb7c";
}

.icon-vscode-whitespace::before {
  content: "\\eb7d";
}

.icon-vscode-whole-word::before {
  content: "\\eb7e";
}

.icon-vscode-window::before {
  content: "\\eb7f";
}

.icon-vscode-word-wrap::before {
  content: "\\eb80";
}

.icon-vscode-workspace-trusted::before {
  content: "\\ebc1";
}

.icon-vscode-workspace-unknown::before {
  content: "\\ebc3";
}

.icon-vscode-workspace-untrusted::before {
  content: "\\ebc2";
}

.icon-vscode-zoom-in::before {
  content: "\\eb81";
}

.icon-vscode-zoom-out::before {
  content: "\\eb82";
}

.icon-aws-amazonq-q-gradient::before {
  content: "\\f1aa";
}

.icon-aws-amazonq-q-squid-ink::before {
  content: "\\f1ab";
}

.icon-aws-amazonq-q-white::before {
  content: "\\f1ac";
}

.icon-aws-amazonq-transform-arrow-dark::before {
  content: "\\f1ad";
}

.icon-aws-amazonq-transform-arrow-light::before {
  content: "\\f1ae";
}

.icon-aws-amazonq-transform-default-dark::before {
  content: "\\f1af";
}

.icon-aws-amazonq-transform-default-light::before {
  content: "\\f1b0";
}

.icon-aws-amazonq-transform-dependencies-dark::before {
  content: "\\f1b1";
}

.icon-aws-amazonq-transform-dependencies-light::before {
  content: "\\f1b2";
}

.icon-aws-amazonq-transform-file-dark::before {
  content: "\\f1b3";
}

.icon-aws-amazonq-transform-file-light::before {
  content: "\\f1b4";
}

.icon-aws-amazonq-transform-logo::before {
  content: "\\f1b5";
}

.icon-aws-amazonq-transform-step-into-dark::before {
  content: "\\f1b6";
}

.icon-aws-amazonq-transform-step-into-light::before {
  content: "\\f1b7";
}

.icon-aws-amazonq-transform-variables-dark::before {
  content: "\\f1b8";
}

.icon-aws-amazonq-transform-variables-light::before {
  content: "\\f1b9";
}

.icon-aws-applicationcomposer-icon::before {
  content: "\\f1ba";
}

.icon-aws-applicationcomposer-icon-dark::before {
  content: "\\f1bb";
}

.icon-aws-apprunner-service::before {
  content: "\\f1bc";
}

.icon-aws-cdk-logo::before {
  content: "\\f1bd";
}

.icon-aws-cloudformation-stack::before {
  content: "\\f1be";
}

.icon-aws-cloudwatch-log-group::before {
  content: "\\f1bf";
}

.icon-aws-codecatalyst-logo::before {
  content: "\\f1c0";
}

.icon-aws-codewhisperer-icon-black::before {
  content: "\\f1c1";
}

.icon-aws-codewhisperer-icon-white::before {
  content: "\\f1c2";
}

.icon-aws-codewhisperer-learn::before {
  content: "\\f1c3";
}

.icon-aws-ecr-registry::before {
  content: "\\f1c4";
}

.icon-aws-ecs-cluster::before {
  content: "\\f1c5";
}

.icon-aws-ecs-container::before {
  content: "\\f1c6";
}

.icon-aws-ecs-service::before {
  content: "\\f1c7";
}

.icon-aws-generic-attach-file::before {
  content: "\\f1c8";
}

.icon-aws-iot-certificate::before {
  content: "\\f1c9";
}

.icon-aws-iot-policy::before {
  content: "\\f1ca";
}

.icon-aws-iot-thing::before {
  content: "\\f1cb";
}

.icon-aws-lambda-function::before {
  content: "\\f1cc";
}

.icon-aws-mynah-MynahIconBlack::before {
  content: "\\f1cd";
}

.icon-aws-mynah-MynahIconWhite::before {
  content: "\\f1ce";
}

.icon-aws-mynah-logo::before {
  content: "\\f1cf";
}

.icon-aws-redshift-cluster::before {
  content: "\\f1d0";
}

.icon-aws-redshift-cluster-connected::before {
  content: "\\f1d1";
}

.icon-aws-redshift-database::before {
  content: "\\f1d2";
}

.icon-aws-redshift-redshift-cluster-connected::before {
  content: "\\f1d3";
}

.icon-aws-redshift-schema::before {
  content: "\\f1d4";
}

.icon-aws-redshift-table::before {
  content: "\\f1d5";
}

.icon-aws-s3-bucket::before {
  content: "\\f1d6";
}

.icon-aws-s3-create-bucket::before {
  content: "\\f1d7";
}

.icon-aws-schemas-registry::before {
  content: "\\f1d8";
}

.icon-aws-schemas-schema::before {
  content: "\\f1d9";
}

.icon-aws-stepfunctions-preview::before {
  content: "\\f1da";
}

.icon-vscode-codicons-info::before {
  content: "\\f1db";
}

.icon-vscode-codicons-pass::before {
  content: "\\f1dc";
}

.icon-vscode-codicons-play-circle::before {
  content: "\\f1dd";
}

.icon-vscode-codicons-stop-circle::before {
  content: "\\f1de";
}`,""]);const x=P},3350:(n,c,o)=>{"use strict";o.r(c),o.d(c,{default:()=>w});var i=o(9601),d=o.n(i),f=o(2609),y=o.n(f),g=y()(d());g.push([n.id,`html,
body {
    font-family: var(
        --markdown-font-family,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe WPC',
        'Segoe UI',
        system-ui,
        'Ubuntu',
        'Droid Sans',
        sans-serif
    );
    font-size: var(--markdown-font-size, 14px);
    padding: 0 26px;
    line-height: var(--markdown-line-height, 22px);
    word-wrap: break-word;
}

body {
    padding-top: 1em;
}

/* Reset margin top for elements */
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
pre {
    margin-top: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 16px;
    line-height: 1.25;
}

/* Prevent \`sub\` and \`sup\` elements from affecting line height */
sub,
sup {
    line-height: 0;
}

ul ul:first-child,
ul ol:first-child,
ol ul:first-child,
ol ol:first-child {
    margin-bottom: 0;
}

img,
video {
    max-width: 100%;
    max-height: 100%;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

a:focus,
input:focus,
select:focus,
textarea:focus {
    outline: 1px solid -webkit-focus-ring-color;
    outline-offset: -1px;
}

p {
    margin-bottom: 16px;
}

li p {
    margin-bottom: 0.7em;
}

ul,
ol {
    margin-bottom: 0.7em;
}

hr {
    border: 0;
    height: 1px;
    border-bottom: 1px solid;
}

h1 {
    font-size: 2em;
    margin-top: 0;
}

h2 {
    font-size: 1.5em;
    padding-bottom: 0.3em;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

h3 {
    font-size: 1.25em;
}

h4 {
    font-size: 1em;
}

h5 {
    font-size: 0.875em;
}

h6 {
    font-size: 0.85em;
}

table {
    border-collapse: collapse;
    margin-bottom: 0.7em;
}

th {
    text-align: left;
    border-bottom: 1px solid;
}

th,
td {
    padding: 5px 10px;
}

table > tbody > tr + tr > td {
    border-top: 1px solid;
}

blockquote {
    margin: 0;
    padding: 2px 16px 0 10px;
    border-left-width: 5px;
    border-left-style: solid;
    border-radius: 2px;
}

code {
    font-family: var(
        --vscode-editor-font-family,
        'SF Mono',
        Monaco,
        Menlo,
        Consolas,
        'Ubuntu Mono',
        'Liberation Mono',
        'DejaVu Sans Mono',
        'Courier New',
        monospace
    );
    font-size: 1em;
    line-height: 1.357em;
}

body.wordWrap pre {
    white-space: pre-wrap;
}

pre:not(.hljs),
pre.hljs code > div {
    padding: 0 16px 16px 16px;
    border-radius: 3px;
    overflow: auto;
}

pre code {
    color: var(--vscode-editor-foreground);
    tab-size: 4;
}

pre {
    background-color: var(--vscode-textCodeBlock-background);
    border: 1px solid var(--vscode-widget-border);
}

/* These styles are used to render code diff with markdown-it rendered output */
.hljs-addition {
    background-color: var(--vscode-diffEditor-insertedTextBackground, rgba(155, 185, 85, 0.2));
    color: var(--vscode-diffEditorOverview-insertedForeground, rgb(155, 185, 85));
    display: inline-block;
    width: 100%;
    margin: 0 -16px;
    padding: 0 16px;
}

.hljs-deletion {
    background-color: var(--vscode-diffEditor-removedTextBackground, rgba(255, 0, 0, 0.2));
    color: var(--vscode-diffEditorOverview-removedForeground, rgb(255, 0, 0));
    display: inline-block;
    width: 100%;
    margin: 0 -16px;
    padding: 0 16px;
}

.hljs-meta {
    background-color: var(--vscode-editorMarkerNavigationInfo-headerBackground);
    color: var(--vscode-editorOverviewRuler-selectionHighlightForeground);
    display: inline-block;
    width: 100%;
    margin: 0 -16px;
    padding: 8px 16px;
}

input[type='submit'] {
    background-color: var(--vscode-button-background);
    border: none;
    color: var(--vscode-button-foreground);
    padding: 6px 14px;
    cursor: pointer;
    border-radius: 5%;
}

input[type='submit']:hover {
    background-color: var(--vscode-button-hoverBackground);
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.flex-container > div {
    flex: 33%;
}

@media screen and (max-width: 900px) {
    .flex-container > div {
        flex: 50%;
    }
}

@media screen and (max-width: 400px) {
    .flex-container {
        flex-direction: column;
    }
}

hr {
    border: unset;
    height: unset;
    border-bottom: 1px solid var(--vscode-menu-separatorBackground);
}

img.severity {
    height: 0.75em;
}
`,""]);const w=g},2609:n=>{"use strict";n.exports=function(c){var o=[];return o.toString=function(){return this.map(function(d){var f="",y=typeof d[5]<"u";return d[4]&&(f+="@supports (".concat(d[4],") {")),d[2]&&(f+="@media ".concat(d[2]," {")),y&&(f+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),f+=c(d),y&&(f+="}"),d[2]&&(f+="}"),d[4]&&(f+="}"),f}).join("")},o.i=function(d,f,y,g,w){typeof d=="string"&&(d=[[null,d,void 0]]);var C={};if(y)for(var P=0;P<this.length;P++){var V=this[P][0];V!=null&&(C[V]=!0)}for(var x=0;x<d.length;x++){var u=[].concat(d[x]);y&&C[u[0]]||(typeof w<"u"&&(typeof u[5]>"u"||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=w),f&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=f),g&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=g):u[4]="".concat(g)),o.push(u))}},o}},8991:n=>{"use strict";n.exports=function(c,o){return o||(o={}),c&&(c=String(c.__esModule?c.default:c),/^['"].*['"]$/.test(c)&&(c=c.slice(1,-1)),o.hash&&(c+=o.hash),/["'() \t\n]|(%20)/.test(c)||o.needQuotes?'"'.concat(c.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):c)}},9601:n=>{"use strict";n.exports=function(c){return c[1]}},4407:(n,c)=>{"use strict";var o;o={value:!0},c.Z=(i,d)=>{const f=i.__vccOpts||i;for(const[y,g]of d)f[y]=g;return f}},4543:(n,c,o)=>{var i=o(2018);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);var d=o(4940).Z,f=d("522a28c2",i,!1,{})},8305:(n,c,o)=>{var i=o(3350);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals);var d=o(4940).Z,f=d("5dc00f6f",i,!1,{})},4940:(n,c,o)=>{"use strict";o.d(c,{Z:()=>z});function i(r,v){for(var b=[],l={},s=0;s<v.length;s++){var E=v[s],p=E[0],M=E[1],D=E[2],R=E[3],T={id:r+":"+s,css:M,media:D,sourceMap:R};l[p]?l[p].parts.push(T):b.push(l[p]={id:p,parts:[T]})}return b}var d=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f={},y=d&&(document.head||document.getElementsByTagName("head")[0]),g=null,w=0,C=!1,P=function(){},V=null,x="data-vue-ssr-id",u=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function z(r,v,b,l){C=b,V=l||{};var s=i(r,v);return O(s),function(p){for(var M=[],D=0;D<s.length;D++){var R=s[D],T=f[R.id];T.refs--,M.push(T)}p?(s=i(r,p),O(s)):s=[];for(var D=0;D<M.length;D++){var T=M[D];if(T.refs===0){for(var B=0;B<T.parts.length;B++)T.parts[B]();delete f[T.id]}}}}function O(r){for(var v=0;v<r.length;v++){var b=r[v],l=f[b.id];if(l){l.refs++;for(var s=0;s<l.parts.length;s++)l.parts[s](b.parts[s]);for(;s<b.parts.length;s++)l.parts.push(F(b.parts[s]));l.parts.length>b.parts.length&&(l.parts.length=b.parts.length)}else{for(var E=[],s=0;s<b.parts.length;s++)E.push(F(b.parts[s]));f[b.id]={id:b.id,refs:1,parts:E}}}}function I(){var r=document.createElement("style");return r.type="text/css",y.appendChild(r),r}function F(r){var v,b,l=document.querySelector("style["+x+'~="'+r.id+'"]');if(l){if(C)return P;l.parentNode.removeChild(l)}if(u){var s=w++;l=g||(g=I()),v=j.bind(null,l,s,!1),b=j.bind(null,l,s,!0)}else l=I(),v=W.bind(null,l),b=function(){l.parentNode.removeChild(l)};return v(r),function(p){if(p){if(p.css===r.css&&p.media===r.media&&p.sourceMap===r.sourceMap)return;v(r=p)}else b()}}var Z=function(){var r=[];return function(v,b){return r[v]=b,r.filter(Boolean).join(`
`)}}();function j(r,v,b,l){var s=b?"":l.css;if(r.styleSheet)r.styleSheet.cssText=Z(v,s);else{var E=document.createTextNode(s),p=r.childNodes;p[v]&&r.removeChild(p[v]),p.length?r.insertBefore(E,p[v]):r.appendChild(E)}}function W(r,v){var b=v.css,l=v.media,s=v.sourceMap;if(l&&r.setAttribute("media",l),V.ssrId&&r.setAttribute(x,v.id),s&&(b+=`
/*# sourceURL=`+s.sources[0]+" */",b+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r.styleSheet)r.styleSheet.cssText=b;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(b))}}},4680:(n,c,o)=>{"use strict";n.exports=o.p+"985021a91e8b52a1ded8.svg"},203:(n,c,o)=>{"use strict";n.exports=o.p+"fa4be6586daf9e8f1934.svg"},6114:(n,c,o)=>{"use strict";n.exports=o.p+"11df4051c6fccb680f6e.woff?1715997177378"}},G={};function m(n){var c=G[n];if(c!==void 0)return c.exports;var o=G[n]={id:n,exports:{}};return q[n](o,o.exports,m),o.exports}m.m=q,m.n=n=>{var c=n&&n.__esModule?()=>n.default:()=>n;return m.d(c,{a:c}),c},m.d=(n,c)=>{for(var o in c)m.o(c,o)&&!m.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:c[o]})},m.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),m.o=(n,c)=>Object.prototype.hasOwnProperty.call(n,c),m.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var c=m.g.document;if(!n&&c&&(c.currentScript&&(n=c.currentScript.src),!n)){var o=c.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!n;)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n+"../../../"})(),(()=>{m.b=document.baseURI||self.location.href;var n={91:0}})();var L={};(()=>{"use strict";m.r(L);const n=Vue,c={id:"app"},o=(0,n.createElementVNode)("h1",null,"IAM Policy Checks",-1),i={key:0},g=[(0,n.createElementVNode)("h3",null,"Getting Started",-1),(0,n.createElementVNode)("p",null," Policy Checks requires Python 3.6+ and the respective Python CLI tools installed, based on the document type: ",-1),(0,n.createElementVNode)("ol",null,[(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("p",null,"Install Python")]),(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("code",null," pip install cfn-policy-validator ")]),(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("code",null," pip install tf-policy-validator ")]),(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("p",null,"Provide IAM Roles Credentials")])],-1)],w={style:{"justify-content":"space-between"}},C={style:{display:"flex"}},P={style:{display:"block","margin-right":"25px"}},V=(0,n.createElementVNode)("label",{for:"select-document-type",style:{display:"block","margin-top":"5px","margin-bottom":"3px"}},"Select a Document Type",-1),O=[(0,n.createElementVNode)("option",{value:"CloudFormation"},"CloudFormation",-1),(0,n.createElementVNode)("option",{value:"Terraform Plan"},"Terraform Plan",-1),(0,n.createElementVNode)("option",{value:"JSON Policy Language"},"JSON Policy Language",-1)],I={key:0,style:{display:"block"}},F=(0,n.createElementVNode)("label",{for:"select-policy-type",style:{display:"block","margin-top":"5px","margin-bottom":"3px"}},"Policy Type",-1),W=[(0,n.createElementVNode)("option",{value:"Identity"},"Identity",-1),(0,n.createElementVNode)("option",{value:"Resource"},"Resource",-1)],r={key:0},v=(0,n.createElementVNode)("label",{for:"input-path",style:{display:"block","margin-top":"15px","margin-bottom":"3px"}},"CloudFormation Parameter File (Optional)",-1),b=(0,n.createElementVNode)("label",{for:"input-path",style:{display:"block",cursor:"not-allowed","margin-top":"15px",opacity:"0.4"}}," Currently Read Input File ",-1),l={key:1,style:{"margin-top":"15px"}},p=[(0,n.createElementVNode)("p",null," For Terraform Plans, generate terraform plan file and convert the plan files to machine-readable JSON files before running policy checks. ",-1),(0,n.createElementVNode)("ol",null,[(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("code",null,"$terraform init")]),(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("code",null,"$terraform plan -out tf.plan")]),(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("code",null,"$terraform show -json -no-color tf.plan > tf.json")]),(0,n.createTextVNode)(" - For TF 0.12 and prior, use command "),(0,n.createElementVNode)("code",null,"$terraform show tf.plan > tf.out"),(0,n.createElementVNode)("li",null,"View the converted JSON file in VS Code and run the desired policy check")],-1)],M=(0,n.createElementVNode)("hr",{style:{"margin-top":"25px"}},null,-1),D={class:"validate-container"},R=(0,n.createElementVNode)("h2",{style:{"border-bottom-style":"none"}},"Validate Policies",-1),T={style:{display:"grid"}},B=(0,n.createElementVNode)("p",null," Validate your policy against IAM policy grammar and AWS best practices. You can view policy validation check findings that include security warnings, errors, general warnings, and suggestions for your policy. These findings provide actionable recommendations that help you author policies that are functional and conform to security best practices. ",-1),nn={style:{display:"grid"}},en=["disabled"],on={style:{"margin-top":"5px"}},tn=(0,n.createElementVNode)("hr",{style:{"margin-top":"25px"}},null,-1),cn={key:0,class:"custom-checks-container"},rn=(0,n.createElementVNode)("h2",{style:{"border-bottom-style":"none"}},"Custom Policy Checks",-1),sn={style:{display:"block"}},an=(0,n.createElementVNode)("p",null," Validate your policy against your specified security standards using AWS Identity and Access Management Access Analyzer custom policy checks. You can check against a reference policy or a list of IAM actions. ",-1),dn=(0,n.createElementVNode)("a",{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-custom-policy-checks.html"},"More about Custom Policy Checks",-1),ln={style:{"justify-content":"space-between"}},bn={style:{display:"flex"}},fn={style:{display:"block","margin-right":"25px"}},vn=(0,n.createElementVNode)("label",{for:"select-check-type",style:{display:"block","margin-top":"15px","margin-bottom":"3px"}},"Select a Check Type",-1),un=[(0,n.createElementVNode)("option",{value:"CheckNoNewAccess"},"CheckNoNewAccess",-1),(0,n.createElementVNode)("option",{value:"CheckAccessNotGranted"},"CheckAccessNotGranted",-1)],pn={key:0,style:{display:"block"}},mn=(0,n.createElementVNode)("label",{for:"select-reference-type",style:{display:"block","margin-top":"15px","margin-bottom":"3px"}},"Select a Reference Policy Type",-1),hn=[(0,n.createElementVNode)("option",{value:"Identity"},"Identity",-1),(0,n.createElementVNode)("option",{value:"Resource"},"Resource",-1)],gn=(0,n.createElementVNode)("label",{for:"input-path",style:{display:"block","margin-bottom":"3px"}},"Provide a Reference File",-1),yn=["placeholder"],_n={key:0,style:{"margin-top":"5px"}},kn={style:{color:"red"}},wn=["placeholder"],xn={style:{display:"grid"}},En=(0,n.createElementVNode)("b",{style:{"margin-bottom":"5px"}},[(0,n.createTextVNode)("A charge is associated with each custom policy check. For more details about pricing, see "),(0,n.createElementVNode)("a",{href:"https://aws.amazon.com/iam/access-analyzer/pricing/"}," IAM Access Analyzer pricing "),(0,n.createTextVNode)(". ")],-1),Cn=["disabled"],Pn={style:{"margin-top":"5px"}};function Tn(e,t,_,h,k,S){return(0,n.openBlock)(),(0,n.createElementBlock)("div",c,[(0,n.createElementVNode)("div",null,[o,e.initialData.pythonToolsInstalled?(0,n.createCommentVNode)("v-if",!0):((0,n.openBlock)(),(0,n.createElementBlock)("div",i,g)),(0,n.createElementVNode)("div",w,[(0,n.createElementVNode)("div",C,[(0,n.createElementVNode)("div",P,[V,(0,n.withDirectives)((0,n.createElementVNode)("select",{id:"select-document-type",onChange:t[0]||(t[0]=(...a)=>e.setDocumentType&&e.setDocumentType(...a)),"onUpdate:modelValue":t[1]||(t[1]=a=>e.documentType=a)},O,544),[[n.vModelSelect,e.documentType]])]),e.documentType=="JSON Policy Language"?((0,n.openBlock)(),(0,n.createElementBlock)("div",I,[F,(0,n.withDirectives)((0,n.createElementVNode)("select",{id:"select-policy-type",onChange:t[2]||(t[2]=(...a)=>e.setValidatePolicyType&&e.setValidatePolicyType(...a)),"onUpdate:modelValue":t[3]||(t[3]=a=>e.validatePolicyType=a)},W,544),[[n.vModelSelect,e.validatePolicyType]])])):(0,n.createCommentVNode)("v-if",!0)]),e.documentType=="CloudFormation"?((0,n.openBlock)(),(0,n.createElementBlock)("div",r,[v,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",style:{display:"flex","box-sizing":"border-box",position:"relative","margin-bottom":"10px",width:"70%"},id:"input-path",placeholder:"CloudFormation Parameter File Path",onChange:t[4]||(t[4]=(...a)=>e.setCfnParameterFilePath&&e.setCfnParameterFilePath(...a)),"onUpdate:modelValue":t[5]||(t[5]=a=>e.initialData.cfnParameterPath=a)},null,544),[[n.vModelText,e.initialData.cfnParameterPath]])])):(0,n.createCommentVNode)("v-if",!0),b,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",style:{display:"flex",cursor:"not-allowed","box-sizing":"border-box",position:"relative",opacity:"0.4",width:"70%"},id:"input-path",placeholder:"Input policy file path",readOnly:"",disabled:"","onUpdate:modelValue":t[6]||(t[6]=a=>e.inputPath=a)},null,512),[[n.vModelText,e.inputPath]])]),e.documentType=="Terraform Plan"?((0,n.openBlock)(),(0,n.createElementBlock)("div",l,p)):(0,n.createCommentVNode)("v-if",!0)]),M,(0,n.createElementVNode)("div",D,[R,(0,n.createElementVNode)("div",T,[B,(0,n.createElementVNode)("div",nn,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("button",{class:"button-theme-primary",onClick:t[7]||(t[7]=(...a)=>e.runValidator&&e.runValidator(...a)),disabled:e.validateButtonDisabled}," Run Policy Validation ",8,en),(0,n.createElementVNode)("div",on,[(0,n.createElementVNode)("p",{style:(0,n.normalizeStyle)({color:e.validatePolicyResponseColor})},(0,n.toDisplayString)(e.validatePolicyResponse),5)])])])])]),tn,e.documentType!="JSON Policy Language"?((0,n.openBlock)(),(0,n.createElementBlock)("div",cn,[rn,(0,n.createElementVNode)("div",sn,[an,dn,(0,n.createElementVNode)("div",ln,[(0,n.createElementVNode)("div",bn,[(0,n.createElementVNode)("div",fn,[vn,(0,n.createElementVNode)("select",{id:"select-check-type",style:{"margin-bottom":"5px"},onChange:t[8]||(t[8]=(...a)=>e.setCheckType&&e.setCheckType(...a))},un,32)]),(e.documentType=="CloudFormation"||e.documentType=="Terraform Plan")&&e.checkType=="CheckNoNewAccess"?((0,n.openBlock)(),(0,n.createElementBlock)("div",pn,[mn,(0,n.withDirectives)((0,n.createElementVNode)("select",{id:"select-reference-type",onChange:t[9]||(t[9]=(...a)=>e.setCustomChecksPolicyType&&e.setCustomChecksPolicyType(...a)),"onUpdate:modelValue":t[10]||(t[10]=a=>e.customChecksPolicyType=a)},hn,544),[[n.vModelSelect,e.customChecksPolicyType]])])):(0,n.createCommentVNode)("v-if",!0)])]),(0,n.createElementVNode)("div",null,[gn,(0,n.withDirectives)((0,n.createElementVNode)("input",{type:"text",style:{display:"flex","box-sizing":"border-box",position:"relative","margin-bottom":"10px",width:"70%"},id:"input-path",placeholder:e.customChecksPathPlaceholder,onChange:t[11]||(t[11]=(...a)=>e.setCustomChecksFilePath&&e.setCustomChecksFilePath(...a)),"onUpdate:modelValue":t[12]||(t[12]=a=>e.initialData.customChecksFilePath=a)},null,40,yn),[[n.vModelText,e.initialData.customChecksFilePath]])]),e.initialData.customChecksFileErrorMessage?((0,n.openBlock)(),(0,n.createElementBlock)("div",_n,[(0,n.createElementVNode)("p",kn,(0,n.toDisplayString)(e.initialData.customChecksFileErrorMessage),1)])):(0,n.createCommentVNode)("v-if",!0),(0,n.createElementVNode)("div",null,[(0,n.withDirectives)((0,n.createElementVNode)("textarea",{style:{width:"100%","margin-bottom":"10px","font-family":`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial,
                                sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`},rows:"30","onUpdate:modelValue":t[13]||(t[13]=a=>e.initialData.customChecksTextArea=a),placeholder:e.customChecksTextAreaPlaceholder},null,8,wn),[[n.vModelText,e.initialData.customChecksTextArea]])]),(0,n.createElementVNode)("div",xn,[En,(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("button",{class:"button-theme-primary",style:{"margin-bottom":"5px"},onClick:t[14]||(t[14]=(...a)=>e.runCustomPolicyCheck&&e.runCustomPolicyCheck(...a)),disabled:e.customCheckButtonDisabled}," Run Custom Policy Check ",8,Cn),(0,n.createElementVNode)("div",Pn,[(0,n.createElementVNode)("p",{style:(0,n.normalizeStyle)({color:e.customPolicyCheckResponseColor})},(0,n.toDisplayString)(e.customPolicyCheckResponse),5)])])])])])):(0,n.createCommentVNode)("v-if",!0)])}class U{static registerGlobalCommands(){const t=new Event("remount");window.addEventListener("message",_=>{const{command:h}=_.data;h==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(k=>this.removeListener(k)),window.dispatchEvent(t))})}static addListener(t){this.messageListeners.add(t),window.addEventListener("message",t)}static removeListener(t){this.messageListeners.delete(t),window.removeEventListener("message",t)}static sendRequest(t,_,h){const k=JSON.parse(JSON.stringify(h)),S=new Promise((a,K)=>{const J=On=>{const A=On.data;if(t===A.id)if(this.removeListener(J),window.clearTimeout(Mn),A.error===!0){const Rn=JSON.parse(A.data);K(new Error(Rn.message))}else A.event?(typeof h[0]!="function"&&K(new Error(`Expected frontend event handler to be a function: ${_}`)),a(this.registerEventHandler(_,h[0]))):a(A.data)},Mn=setTimeout(()=>{this.removeListener(J),K(new Error(`Timed out while waiting for response: id: ${t}, command: ${_}`))},3e5);this.addListener(J)});return vscode.postMessage({id:t,command:_,data:k}),S}static registerEventHandler(t,_){const h=k=>{const S=k.data;if(S.command===t){if(!S.event)throw new Error(`Expected backend handler to be an event emitter: ${t}`);_(S.data)}};return this.addListener(h),{dispose:()=>this.removeListener(h)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(t,_)=>{if(typeof _!="string"){console.warn(`Tried to index webview client with non-string property: ${String(_)}`);return}if(_==="init"){const k=vscode.getState()??{};if(k.__once)return()=>Promise.resolve();vscode.setState(Object.assign(k,{__once:!0}))}const h=(this.counter++).toString();return(...k)=>this.sendRequest(h,_,k)}})}}U.counter=0,U.initialized=!1,U.messageListeners=new Set;const $=new Set;window.addEventListener("remount",()=>$.clear());const Nn={created(){if(this.$data===void 0)return;const e=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const t=this.id??`${this.name??`DEFAULT-${$.size}`}-${this.$options._count}`;if(this.$options._unid=t,$.has(t)){console.warn(`Component "${t}" already exists. State-saving functionality will be disabled.`);return}$.add(t);const _=e[t]??{};Object.keys(this.$data).forEach(h=>{this.$data[h]=_[h]??this.$data[h]}),Object.keys(this.$data).forEach(h=>{this.$watch(h,k=>{const S=vscode.getState()??{},a=Object.assign(S[t]??{},{[h]:k!==void 0?JSON.parse(JSON.stringify(k)):void 0});vscode.setState(Object.assign(S,{[t]:a}))},{deep:!0})})}};var Fn=m(4543),Un=m(8305);const N=U.create(),Vn=(0,n.defineComponent)({mixins:[Nn],data:()=>({documentType:"CloudFormation",validatePolicyType:"Identity",customChecksPolicyType:"Identity",checkType:"CheckNoNewAccess",initialData:{customChecksFilePath:"",customChecksTextArea:"",customChecksFileErrorMessage:"",cfnParameterPath:"",pythonToolsInstalled:!1},inputPath:"",customChecksPathPlaceholder:"Reference policy file path",customChecksTextAreaPlaceholder:"Enter reference policy document",validatePolicyResponse:"",validatePolicyResponseColor:"red",customPolicyCheckResponse:"",customPolicyCheckResponseColor:"red",validateButtonDisabled:!1,customCheckButtonDisabled:!1}),async created(){this.initialData=await N.init()??this.initialData,N.onChangeInputPath(e=>{this.inputPath=e}),N.onChangeCustomChecksFilePath(e=>{this.initialData.customChecksFilePath=e,N.readCustomChecksFile(this.initialData.customChecksFilePath).then(t=>{this.initialData.customChecksTextArea=t}).catch(t=>console.log(t))}),N.onChangeCloudformationParameterFilePath(e=>{this.initialData.cfnParameterPath=e}),N.onValidatePolicyResponse(e=>{this.validatePolicyResponse=e[0],this.validatePolicyResponseColor=e[1]}),N.onCustomPolicyCheckResponse(e=>{this.customPolicyCheckResponse=e[0],this.customPolicyCheckResponseColor=e[1]}),N.onFileReadError(e=>{this.initialData.customChecksFileErrorMessage=e})},methods:{setDocumentType:function(e){this.documentType=e.target.value},setValidatePolicyType:function(e){this.validatePolicyType=e.target.value},setCustomChecksPolicyType:function(e){this.customChecksPolicyType=e.target.value},setCheckType:function(e){this.checkType=e.target.value,this.checkType=="CheckNoNewAccess"?(this.customChecksPathPlaceholder="Reference policy file path",this.customChecksTextAreaPlaceholder="Enter reference policy document"):(this.customChecksPathPlaceholder="List of actions file path",this.customChecksTextAreaPlaceholder="Enter list of actions")},setCustomChecksFilePath:function(e){this.initialData.customChecksFilePath=e.target.value,N.readCustomChecksFile(this.initialData.customChecksFilePath).then(t=>{this.initialData.customChecksTextArea=t}).catch(t=>console.log(t))},setCfnParameterFilePath:function(e){this.initialData.cfnParameterPath=e.target.value},runValidator:async function(){this.validateButtonDisabled=!0,await N.validatePolicy(this.documentType,this.validatePolicyType,this.initialData.cfnParameterPath),this.validateButtonDisabled=!1},runCustomPolicyCheck:async function(){this.customCheckButtonDisabled=!0,this.checkType=="CheckNoNewAccess"?await N.checkNoNewAccess(this.documentType,this.customChecksPolicyType,this.initialData.customChecksTextArea,this.initialData.cfnParameterPath):this.checkType=="CheckAccessNotGranted"&&await N.checkAccessNotGranted(this.documentType,this.initialData.customChecksTextArea,this.initialData.cfnParameterPath),this.customCheckButtonDisabled=!1}},computed:{}});var Dn=m(4407);const Sn=(0,Dn.Z)(Vn,[["render",Tn]]);const Y=()=>(0,n.createApp)(Sn),Q=Y();Q.mount("#vue-app"),window.addEventListener("remount",()=>{Q.unmount(),Y().mount("#vue-app")})})();var H=this;for(var X in L)H[X]=L[X];L.__esModule&&Object.defineProperty(H,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
