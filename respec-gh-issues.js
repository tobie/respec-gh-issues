;(function() {
    function onload() {
        if (window.respecEvents) {
            if (document.respecDone) {
                run();
            } else {
                respecEvents.sub("end-all", run);
            }
        } else {
            setTimeout(onload, 100);
        }
    }
    
    function run() {
        if (!respecConfig.issueAPI) {
            console.log("To use gh-issues, respecConfig.issuesAPI must point to the GH API for your repo's issue tracker.");
            return;
        }
        $.ajax(respecConfig.issueAPI).then(function(issues) {
            // index issues by their number.
            issues = issues.reduce(function(obj, issue) {
                obj[issue.number] = issue;
                return obj;
            }, {});
            $(".issue").each(function() {
                var element = $(this);
                var m = element.find("span").text().match(/\d+/);
                if (!m) return;
                var issue = issues[m[0]];
                if (!issue) return;
                element.find(".issue-title a").append(" • " + issue.title);
                element.find('div').last().html(marked(issue.body, {
                    gfm: true,
                    pedantic: false,
                    sanitize: false
                }));
            });
        });
    }

    onload();
    
})();