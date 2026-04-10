# substackwriter

The author of [these posts](https://danielagrothe.substack.com) happens to be tired of manually replacing linebreaks.

So I was like let's build a tool.

Privacy first, it's not connected to any API or database,
just a simple tool that replaces linebreaks by something that works.

The outcome can become what you want it to.  
A blog post on your own website,  
a Word or Pages file to send somewhere  
or … even a substack post.

## What it does

* Paste a text
* Prettify it, that means, let linebreaks be formatted as html `<br>`, empty lines start a next paragraph.
* Now "copy to clipboard" and you're ready to publish your blog (after proofreading, as even apps are "only human" and can make mistakes).
* finally "Clear All" to be ready for the next text.

## Not reinventing the wheel.

I tested the following:

1. Shift-return in Notepad (Windows 11) ❌
2. Cut and paste from a markdown file snippet displayed with correct linebreaks ❌
3. Cutting and pasting from a poem of mine to overwrite it line by line — downside: losing time ⌛ for reading and writing …
4. Saving this file as HTML to cut and paste from there ✔️

So now we've got a technical route.
