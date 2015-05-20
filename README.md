respec-gh-issues
================

respec-gh-issues is a small JavaScript script that can be embedded in a ReSpec spec. Rpovided with the adequate configuration options, it lets you reference GitHub issues by their number and dynamically fills in the spec with the issue title and content.

These are the `respecConfig` options you need to add:

```js
respecConfig.issueBase = "https://www.github.com/{user}/{repo}/issues/";
respecConfig.issueAPI = "https://api.github.com/repos/{user}/{repo}/issues";
```

To reference an issue, just:

```html
<div class="issue" data-number="{issue number}"></div>
```