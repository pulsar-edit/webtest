import{_ as i,o as s,c as r,f as h,a as e,b as t,d as o,e as n,r as l}from"./app.7ed01042.js";const d={},c=e("p",null,"What's the natural response to finding out an application you use is being sunset? Spend the next several months creating a complex backend infrastructure of course!",-1),u=e("p",null,"In this blog post, which is my first so apologies if the style is widely inconsistent with everything else, I hope to get a place to talk about the journey that's occurred after the announcement of Atom's Sunset and the larger-than-assumed effect it has had on my life.",-1),m={href:"https://github.blog/2022-06-08-sunsetting-atom/",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"Now to give some background on where I was, I've never actually looked at the Atom source code. I used it every day, was the first thing I installed on new computers. But I liked it as a tool, and never paid much mind to how it was internally structured. But one of my favourite things was packages. The ability to install a package that can do nearly anything has always been amazing to me. I know many other applications can do this, but with this one feature Atom was everything I had ever wanted out of a text editor, and more so could be anything I ever want in the future.",-1),g=e("p",null,"So I knew with the announcement that this would mean I wouldn't be able to install packages. So right away I did what anyone would, find out how to keep packages going.",-1),w=e("h3",{id:"the-archival",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-archival","aria-hidden":"true"},"#"),t(" The Archival")],-1),f={href:"https://github.com/confused-Techie/AtomPackagesArchive",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/atom-community",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"Now I'll skip over the details about Atom Community, and the eventual split that occurred and focus on what my role was in the programming aspect.",-1),k=e("code",null,"+4 | -1",-1),v={href:"https://github.com/confused-Techie/AtomPackagesArchive/pull/1",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"confused-Techie/AtomPackagesArchive",-1),I=e("h3",{id:"what-to-do-with-this-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-to-do-with-this-data","aria-hidden":"true"},"#"),t(" What to do with this Data")],-1),A=e("p",null,"So now armed with a few thousand JSON files of Atom's Archived data, I had to figure out what made their backend tick. And since the Atom Package Repository is seemingly the only part of Atom that wasn't open source, I had nothing to base this on at all. So I just started hammering their servers.",-1),T=e("p",null,"Hitting every single endpoint that was in the documentation with each variance of query parameters and HTTP Methods that I could think of. To see what broke, how it broke, and what it says when it breaks.",-1),S={href:"https://github.com/confused-Techie/atom-community-server-backend",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"atom-community-server-backend",-1),x=e("code",null,"GET atom.io/api/packages/:invalidName",-1),B=e("code",null,'{ message: "Not Found" }',-1),P=e("em",null,"but",-1),O=e("code",null,"GET atom.io/api/users/:invalidName/stars",-1),j=e("code",null,'{ message: "Not found" }',-1),R=e("code",null,"confused-Techie/atom-community-server-backend-JS",-1),G={href:"https://github.com/confused-Techie/atom-backend",target:"_blank",rel:"noopener noreferrer"},J=e("code",null,"confused-Techie/atom-backend",-1),H=e("h3",{id:"the-misadventures-part",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-misadventures-part","aria-hidden":"true"},"#"),t(" The Misadventures Part")],-1),q=e("p",null,"At this point speed was picking up, there was so much to do and so little time. Rapid fire code was being written and things were being tested.",-1),z=e("p",null,"One thing that needed to be done was to take this mess of data I had archived and check it all. The most important thing I wanted to do, checked if everything was still valid, that is see if the GitHub repo each package pointed to still existed.",-1),C=e("p",null,"Now in doing this, I ended up needing to look up a repo on GitHub many times. So many times I accidentally got my IP blocked from them. A huge oversight on my part, and not at all an issue with them, but I remember the stress that was caused when attempting to work together with several others on GitHub while being blocked by GitHub.",-1),E={href:"https://github.com/confused-Techie/atom-package-migrator",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"confused-Techie/atom-package-migrator",-1),M=n("<p>Now this of itself was a feat, considering the following:</p><ul><li>Total Packages Archived from Atom: 12,470</li><li>Total Packages Migrated: 11,074</li><li>Total Packages Unavailable: 1,381</li><li>Total Packages w/ Banned Names: 10</li><li>Total Packages w/ URL-Unsafe Names: 5</li></ul><p>But from there we now had 11,074 packages that we needed to keep safe and find a way to distribute to any user of the new Atom, wherever that ended up being.</p><p>At this point, the other hardest part was that the Atom website for lack of better words, was on its last legs. With constant errors, crashes, and generally just failing to respond, it was clear things were nearing an end. Even worse was that when it would work, it was inundated with thousands of Spam packages. In the days after my initial archive, the original Package Repository had ballooned with spam packages now with their total packages totaling in... well. I just can&#39;t quite say. Even now during the time of writing I&#39;ve spent ten minutes refreshing <code>Atom.io/packages</code> and it won&#39;t stop timing out or returning 500 errors. But for the sake of my point, I&#39;ve kept trying, to confirm that the original Package Repository has ballooned with spam packages now to contain 405,137 Packages. But remember when I did my initial archival there were only 12,470. Just to convey how much spam this is, and how ridiculous it is that the service turned into this immediately after the announcement.</p><p>But the last hardest part of this stage was the problems that I created for myself.</p><p>Now you see, up until this point I&#39;ve never had to worry about handling this much data. It wasn&#39;t until it was too late did I find out that my methodology was ill-fitting. I had written a nearly complete feature parity Backend for the Atom Package Repository, that expected all of its data to be JSON. Now anyone that&#39;s done this before will say that was a dumb choice, but forgive me for only being smaller scale prior. The excitement of being nearly done immediately faded, when I got the new backend running in the cloud, and threw all of my data at it. Every single package.</p>",6),W=e("code",null,"/api/packages",-1),D={href:"https://github.com/confused-Techie/atom-backend/commit/f792a4975f932f20528b871e189300bd97585dac",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"f792a4975f932f20528b871e189300bd97585dac",-1),Q=n(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// One note of concern with chaining all of these together, is that this will potentially loop</span>
<span class="token comment">// through the entire array of packages 3 times, resulting in a</span>
<span class="token comment">// linear time complexity of O(3). But testing will have to determine how much that is a factor of concern.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now I&#39;m no mathematician and my understanding of Time Complexity is best described as weak, but I knew it could be a bad idea. And boy was it.</p><p>Resuming after I had pushed everything to the cloud and hit my endpoint, I got no response. Or rather I thought it was no response. The page took well over <code>300</code> seconds before most often it would time out.</p><p>So this meant I had to rewrite the entire thing to no longer assume we had JSON data, that&#39;s when we had to migrate the entire Backend Codebase to use an SQL server.</p><h3 id="the-good-news" tabindex="-1"><a class="header-anchor" href="#the-good-news" aria-hidden="true">#</a> The Good News</h3><p>Once the rewrite was done I posted the following on our Discord server.</p><hr><p>But heres some news I&#39;m very excited to see, about the improvements of performance on the iterations of the backend, when querying <code>/api/packages</code> (As in get all packages with default sorts)</p><ul><li>Reading all data from JSON on disk, took &lt;300 seconds</li><li>Reading all packages from shoehorned, unoptimized SQL 39800ms or ~40 seconds</li><li>Reading all packages from optimized, properly normalized SQL 365ms or 0.365 seconds</li></ul><p>Keep in mind these times are from the server itself. So that includes the express server getting the request, filtering query parameters, querying the SQL server over the web, and rebuilding/pruning the JSON response. But this is great to see, and is finally something that seems shippable, even if it can be further optimized</p><hr><p>So with that, it was time to finish rewriting the backend, which while the struggles were not over, we had at least gotten over the (as so far) biggest hurdle.</p><p>But beyond this, it was at this point we had a proper community. A team of skilled contributors are all willing to pull their weight to make this happen. We all have lives outside this project, we all live in different areas, in different timezones, and speak different languages. But the one thing we have in common is our mission, of keeping an Open Source Project we care about alive.</p><p>Throughout all of this, that has been my biggest takeaway. The most important lesson I think is available to learn here, and one I don&#39;t want to forget any time soon.</p><hr><p>What&#39;s the natural response to finding out an application you use is being sunset?</p><p>Take pride in the Open-Source community around you, and be thankful we live in a time where all that&#39;s needed to build a community and team is the text editor you choose to use.</p><p>Thanks for reading, and as I always say thanks for contributing.</p>`,18);function U(F,K){const a=l("ExternalLinkIcon");return s(),r("div",null,[c,h(" more "),u,e("p",null,[t("Like some others, I'm assuming, on a normal day I was browsing Reddit when I saw the initial announcement. On June 8th of 2022 GitHub officially "),e("a",m,[t("announced"),o(a)]),t(" that they were going to sunset Atom.")]),p,g,w,e("p",null,[t("On June 12th of 2022, I wrote a "),e("a",f,[t("super simple script"),o(a)]),t(", one that would just absolutely hammer Atom's package repository and get everything I possibly could. The only goal here was to archive every single package and all of their versions. Hoping that later I'd figure out what I could do with this data.")]),e("p",null,[t("It was around that same time I started to see "),e("a",b,[t("Atom Community"),o(a)]),t(" mentioned as the most likely fork to succeed after Atom. So of course seeing their GitHub I joined their Discord and got going with a group of other talented volunteers to start seeing what needed to be done.")]),y,e("p",null,[t("After creating this small script, I think what really made all of this feel like an actual team effort was the first PR I received for this project. A small diff, only "),k,t(" over on "),e("a",v,[_,o(a)]),t(" by @DeeDeeG, but what it really meant was that truly there was a community here that cared about keeping this whole ecosystem alive the same way I did. And from there, that's all that was needed to be off to the races.")]),I,A,T,e("p",null,[t("On June 13th of 2022, I started the "),e("a",S,[N,o(a)]),t(", what I thought would be the home of the new Backend for Atom Community, and there I delved into the strange idiosyncrasies of Atom. Still, the strangest one that sticks in my head, is I could tell how strange the codebase was just from the error messages. The best example, "),x,t(" Returns "),B,t(),P,t(" hitting "),O,t(" returns "),j,t(". Meaning that there was completely different code handling not found in one place, and in another. Notice the difference in capitalization.")]),e("p",null,[t("But soon after creating the repo, I realized that no one else on this small team we had was familiar with Golang at all, which is what I had initially written this in. So I switched over to JavaScript, which in the long run was likely a great choice as that is my most familiar language. And that's where I created "),R,t(", a mouthful I know, but was much later renamed just to "),e("a",G,[J,o(a)]),t(".")]),H,q,z,C,e("p",null,[t("In the end, the "),e("a",E,[L,o(a)]),t(" was able to check if every single package was valid, while also removing a list of banned package names that we had put together.")]),M,e("p",null,[t("Then simply I requested the default screen "),W,t(" which, in my poor implementation would scan every single package, then would filter it based on query parameters. Which would be iterating through every single one of them. Now you may hear this and think of course performance was terrible, and trust me it was a concern I had to, on commit "),e("a",D,[V,o(a)]),t(" I wrote the following comment after creating this terrible method.")]),Q])}const Y=i(d,[["render",U],["__file","20221127-confused-Techie-SunsetMisadventureBackend.html.vue"]]);export{Y as default};
