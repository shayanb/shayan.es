This is my personal professional website which I made years ago using Jekyll. I've used it as resume and portfolio of papers, etc. I'm thinking of revamping it to make it more modern and visually appealing, while also making it easier to navigate and find information. Additioanlly I want the look and the feel of the website to be more personal and reflect my personality, while still being professional.
The current website is at https://shayan.es . 


The idea is to revamp it as it's been cluttered with to many things in one page, and this needs to be multiple pages and more impressive.

You can learn what exists in the data folder mainly, ideally we can keep the jekyll structure, but open to new ideas.


There are other sections I want to add:
- Hackathons I've participated in as Judge, Mentor, and hacker, with info like date, location, project, winnings, etc.
- Conferences I've attended, with info like date, location, talks, etc.
- App's I've built, with info like date, platform, description, etc.
- Projects I've worked on. It exists in one section in the current website but there are many other projects that I want to add. this can be an extension of the Apps section or a separate as projects might not be apps. 
- artistic works I've done, like pictures of the art i've created, analogue photos (links to instagram possible?)


-----

things to consider:
- The website should be responsive and look good on both desktop and mobile devices.
- dark mode support (but can be added later)
- easy to navigate with a clear menu structure


=====================================================

Claude response:


Now let me create a comprehensive plan for your website revamp:
  ⎿  ☐ Create multi-page navigation structure with clear menu system
     ☐ Design new homepage that serves as an engaging landing page
     ☐ Create dedicated pages for each major section (About, Projects, Publications, etc.)
     ☐ Add new data files for Hackathons, Conferences, Apps, and Artistic Works
     ☐ Design unique layouts for different content types to avoid visual monotony
     ☐ Implement modern design elements (animations, transitions, interactive components)
     ☐ Create a portfolio/gallery layout for artistic works
     ☐ Improve mobile navigation with hamburger menu or similar
     ☐ Add personal touches (custom typography, color scheme, micro-interactions)
     ☐ Implement dark mode support

✻ Thinking…

  Now I should ask clarifying questions to better understand the user's vision and preferences before 
  starting to code.

⏺ Before I start coding, I have some questions to ensure the revamp aligns with your vision:

  Design & Personality Questions:

  1. Visual Style: What design aesthetic appeals to you? (minimalist, bold/colorful, elegant/sophisticated,
  playful/creative, tech-forward?)
  2. Color Preferences: Any specific colors that represent your personality or brand?
  3. Typography: Do you prefer modern sans-serif, classic serif, or mixed typography?
  4. Personal Elements: What aspects of your personality should shine through? (innovative, approachable,
  technical expertise, creative side?)

  Content & Structure Questions:

  1. Homepage Vision: Should it be a brief overview with calls-to-action, a visual portfolio, or an
  interactive experience?
  2. Priority Sections: Which 3-5 sections are most important to highlight?
  3. Hackathons Data: What specific info do you want to track? (project name, team size, tech stack, awards,
  your role?)
  4. Apps Section: Should this showcase screenshots/demos, or be more description-focused?
  5. Artistic Works: Do you want a full gallery, or selected highlights? Instagram integration priority?

  Technical Questions:

  1. Animation Preference: Subtle micro-interactions or more dramatic transitions?
  2. Navigation Style: Traditional header menu, side navigation, or something more creative?
  3. Performance vs Visual: Prioritize fast loading or rich visuals?
  4. Jekyll Plugins: Open to using Jekyll plugins for enhanced functionality?

  Inspiration:

  Are there any websites whose design or functionality you admire that I should consider as inspiration?


======

Response:

1. visual style: I prefer a minimalist and elegant design that is sophisticated but not overly complex. Easter eggs (playful/creative) are welcome, tech-forward elements are also appreciated.
2. color preference: I like clean, matte colors. Like for clothing, I like black with red snips or threads, or like orange on blue. but not sure if those are well suited for a website. Current website is green, grey and while but I'm open to changing the color scheme.
3. typography: I'm open to mixing in some serif fonts for headings or special sections.
4. personal elements: I want to convey a sense of innovation, approachability, and technical expertise, while also showcasing my creative side.

Content & Structure Questions:
1. homepage vision: I envision a brief overview with clear calls-to-action that lead to the main sections, and perhaps visual elements that indicate the sections without overwhelming the user.
2. priority sections: Publications, careers (past jobs and current), lectures and talks, links to other profiles, education, projects and apps, etc
3. hackathons data: hackathon name, date, location, my role (judge, mentor, hacker). in case of hacker, project name, link to the project, and any winnings or awards.
4. App sections: maybe desciption focused with their logos, and then click to open the module with more details and screenshots if available.
5. artistic works:  selected highlights with a smooth gallery layout, Instagram integration is a nice-to-have.


Technical Questions:
1. animation preference: subtle micro-interactions and transitions
2. the header menu (with hamburger menu for mobile) and side navigation for subsections. If you have creative ideas suggest and ask me.
3. performance vs visual: somewhere balanced
4. Jekyll plugins: yes.

=====================================

Claude response:

Design Details:

  1. Color Scheme Options - Which appeals more to you?
    - Option A: Black/charcoal base with vibrant red accents (like a red thread on black fabric)
    - Option B: Deep blue base with electric orange accents
    - Option C: Keep it neutral with grays but add one bold accent color
  2. Homepage Hero Section:
    - Would you like an animated typing effect with rotating titles (e.g., "Security Researcher", "Software
  Engineer", "Creative Technologist")?
    - Or a more static but elegant introduction with your name and a brief tagline?
  3. Section Cards on Homepage:
    - Interactive cards that reveal a preview on hover?
    - Or clean, minimal cards with just icons and titles?
  4. Easter Eggs Ideas:
    - Konami code that triggers a fun animation?
    - Hidden ASCII art in the console?
    - Subtle animations when clicking certain elements?
    - Terminal-style command palette (ctrl+k)?
  5. Projects/Apps Organization:
    - Should "Apps" be a subsection under "Projects" or completely separate?
    - For the expandable details, would you prefer a modal popup or inline expansion?
  6. Social Links Display:
    - Floating social bar?
    - Footer integration?
    - Or a dedicated "Connect" page with all your profiles?

-=--------------------------------

response:


1. Color Scheme: Option B, but make sure it's not too dark, and it looks professional and elegant. (not too funky)
2. Homepage Hero section: Elegant introduction with my name and a brief tagline, with a subtle animation.
3. Section Cards: Minimal Cards with icon and title, but with a hover effect that reveals more details.
4. Easter Eggs Ideas: Konami code that triggers a fun animation (slightly nerdy but NSFW), for sure hidden ascii art in the console. leave this for the end of the todo list after everything else is done to implement a subtle animations when clicking certain elements. 
5. Projects/Apps Organization: let's keep the separate. Apps will less details but more links, projects will have more technical details and maybe no pictures (but some can have). Modal popup for the expandable details.
6. Social Links Display: Floating social bar, all links in the footer, and a dedicated "Connect" page with all my profiles (with animated icons of the platforms and a line or two in the front.).



-------


Fix these:
- the fontawesome icons are not showing up on the local server (exising problem from before), why? can we fix this?

Home page:
- Recent highlights should be clickable to jump to the correct section (and open the modal). make them either show the latest 2 updates in each section, or create a yaml file to customize them

Publications:
- bring publications-stats up in the page, if you can integrate google scholar numbers (like the number of citations) it'll be awesome.
- make the published in to be under the title to the right. and more visible, also clickable. 
- make sure if there are media talks from the previous yaml format you integrate them here as 
- well. (this should be done for all other sections)


Projects:
- can we make the cards to be on the same size? consistent
- the media links are showing weirdly
- add year to the projects too (ideally a way to add start end, or just one offs)

Apps:
- remove the fake added projects, here are a list my projects to add:
  - PadSnap: Image Resize & Padding Tool 🎞️ 📸 : https://padsnap.app
  - ethduties: Ethereum validator Duties Tracker: https://ethduti.es/
  - EtherTrip: Psychedelic Ethereum Galaxy Visualizer : https://github.com/shayanb/EtherTrip
  - Ethereum Validator Staking Rewards Calculator (Pectra Edition): https://shayanb.github.io/EIP-7251-calcualator/
  - Interactive web application to create and visualize timelines.: https://shayanb.github.io/timeline/


Career:
- Add description to the jobs.
- ideally we can add the company logos that will be on the left bottom corner of their cards
- bring the Professional Highlights to the top of the lists with each clickable to go to the right page.


Talks:
- Add the proper links top the talks (youtube, slides, etc what ever exist in the old yaml files). add the conference title (with link), date, etc to the same card in a visually nice way.
- add an image to be added to the top of the cards (screenshot of youtube maybe)
- bring the speaking overview to the top with links to each section
- merge the conference presentation with the academic talks


Connect:
- use all the websites/profiles that are filled in the old config.yml file 


No Art/portfolio page exists.

go through your todo and make sure everything is implemented.




------------------


great, add these to your todo list and continue:

- make the social floating box to be an icon that will open up with an animation to show the icons/links for the socials
- overall the cards need more shades or somehow to be more bold, maybe a shadow 3d like view? but not extreme just a touch. 
- add dark mode
- add a image in the hero section for profile picture, it is @img/shayan.jpeg

Talks:
- Move the country flag to be right after the conference name on the right side. same for the year tag. 
- use icons for youtube and the link buttons, same for slides, paper, etc
- hackathon the only ones that will have details are participation as hackers. so the rest of the cards (judge, mentor) will take up a lot of space, find a solution for this.
- move the conference attendance to the end and make the section much more minimal, there will be almost 100 conference in there, so it should be names (linked), location, year. 

Apps:
  - if multiple screenshots are added, is there the option to show next photos?
  - inside the modal, the name, etc should be on the left side, the image on the right side, and the text in a organized container under the title. 


publications:
 - some confenrence names are long, break them into two lines if needed to wrap. specially if they result in the paper title to look weird
 - the whole media mention/converage sections are still not read properly , showing yaml structure it seems. they should be shown as tags with media name and clickable to open the link.
 - make the buttons (paper, etc) with some shadow so they are more obvious
 - if they have a matching presentation, link the youtube presentation here too (add to the yaml file)
 - the mobile view of this page is shit! it needs to be responsive. 
  

projects:
  - make the cards to be clickable to open the details section, unless a linked button is being clicked (github etc)


============

- Most pages have this double header that doesnt look good. replace the page-header with the page-header that is inside the page-content

- art page is missing from the nav bar
  - Add options for these:
    - Video art -- with screenshot, title, year --> opens modal with details
    - Physical art -- with pictures, title, year --> modal with details

talks:
- remove the "event" button and make the conference name clickable to go to the event page. 
- for Conference Attendance, move the location to the right bottom side of the containers. 
- change the year container to be more smooth but visible (the orange box is not visually appealing)
- The hackathons cards look great, make the title of the hackathon name to be clickable to go to the website. also move the location name to the right bottm side of the card 

publications:
- make the abstract section to look like quote 
- the conference names shortened is not ideal, can we make them wrap in multiple lines instead?
- the media converage is still not showing correctly. it's basically just showing the yaml data in a text box. 

Apps:
  - if multiple screenshots are added, is there the option to show next photos?
  - inside the modal, the name, etc should be on the left side, the image on the right side, and the text in a organized container under the title. 


Dark mode is not working properly, as examples:
- page-header s are not changed
- the navbar
- the cards (e.g. projects) are now dark text on dark background
  - platfom icons buttons are not changed
- basically go through all components of the website to make sure the dark mode behaviour is implemented correctly



--------------------------


use the shayan_about.jpeg for the about page, this can be square with round edges or any other way visaully nice photo object. 


publications:
bug: on venue-name inside pub-year when mouse hover, there are two actions happening and the text is flashing. 
enhancement: make the text content to break/wrap when needed (break on space)
- change the quote ::before ::after , just indicate visaully that this is the abstract of the paper


media toggle bug, this is what is shown:
<a href="#" class="pub-link media-toggle" data-media="{" name"="">"Coindesk", "link"=&gt;"https://www.coindesk.com/press-releases/worlds-first-peer-reviewed-smart-contract-paper/"},{"name"=&gt;"Bitaccess", "link"=&gt;"http://blog.bitaccess.ca/workshop-on-trusted-smart-contracts/"},{"name"=&gt;"bitcoin.com", "link"=&gt;"https://news.bitcoin.com/worlds-first-peer-reviewed-smart-contract-paper/"}"&gt;
            <i class="fa fa-newspaper-o"></i> Media Coverage
          </a>

each of these links should be a separate button with the name hyperlink link


Projects:

remove the "project-status status-completed" label completed 

media mention labels on the card media-label shows the number twice:  3 media mention3

Talks:
Add a new section for podcasts, so the entries are podcast episodes attended. make the yaml file that takes the title, youtube link, date, channel, description, thumbnail (if possible to fetch any of these from the youtube or link metadata, please do w/ proper error handling)

bring media-links to the same row as talk-location-bottom 

make the talks cards have the Other Talks sections that are shorter (or on grid) (implement yaml tag too), the look of it can be similar to Other Projects in the apps section, with grid. 


the fix for hackathon-card hackathon-card-minimal that are not hacker is not in effect. 

- conference attendance  conference-location-bottom should on conference-item-minimal (left bottom side of the container visually)

Apps:
in modals, move the modal-logo to the right side of the modal. align the rest accordingly.


Career:
the career-skills is not filled, in the previous implementation is was radar chart of the skills visually shown. create a similar fun chart (or more), possibly use the context to add other tags and scores (quantified self professionally? lol ) 


Connect:
in the original yaml file there were items like stackoverflow, youtube, google scholar links. add their icons in Find me Online section



Dark mode:  the navbar nad headers seems to be fine, but the text itself is mostly dark on dark. like nav-brand, inside project-card s, apps, titles inside apps page, etc. check all content pages for similar instances and fix for dark mode



---------

Great job, the changes look pretty good, there are some bugs on the dark mode but the rest look good. now continue, but also add these (some related to done tasks):

about:
- the image has two overlays right now, only use the bigger square one for hte picture, make the picture double the current size. -- maybe the underneath overlay can still exist to make the picture look more live out 3d paper photo style


publications:
- merge pub-year and pub-content, so the abstract will start from left side of publication-item under the year and the title


darkmode:
still not fixed items: highlight-card, career-company, career-marker and the line, app-card featured, stat-item (has slightly different background), pub-venue, expertise-item, about-cta, value-item, social-item


audits page exist but is not linked from anywhere. but not sure where is the best place to implement it.


about:
- add a psychedelic glitch on mouse hover on "What Drives Me" cards (value-item)
- footer: also add the same effect to the footer text (footer) (this change is site wide)


-------------

Create a hamburger menu for desktop mode and add these items to there. this can be expanded to all menus in mobile mode
- Audits
- Art
- 


publications:
- no the change is not what I wanted. the year and the title should be on top, and then abstract on another row. the paper tag as it was before maybe on top corner of the abstract, with overlapping 3d style button


============================


about page:
- move the journey highlight and areas of expertise to split the page inbetween the two (grid? but no borders or anything seamless)
- the background layout of the image is too big and not properly aligned, check the image components and fix it (idea is to be square with shades or somehow looking like a paper photo slightly elevated from the page)

publications:
- merge pub-year and pub-content, so the abstract will start from left side of publication-item under top part , the top part has the year and then title. in sub header/title, it should write the published in text. 
- remove the 3d and effects on the paper button


career:
- the chart looks great, remove Skills Overview and make the chart bigger.

Dark mode items still needs fixing: about page: expertise-item, value-item, about-cta | nav-toggle | stat-number (still has slightly different background) | app-title-btn to be orange in dark mode, goes the same as other titles. | other-apps-section . app-item | highlight-card icon in career, contact-form, response-card

Talks:
- make the "Speaking Overview" items/stats clickable to jump to the right section
- make the podcast item smaller same size as hackathon-card

Menu / navbar: 
the hamburger menu on desktop should only include the following items, and the rest should be on the navbar visible: audits, art, Projects, Apps, Connect.



====================


continue:

career page:
- for the technical expertise: remove the skills-legend , no need to have the legent with that chart, center the chart


Talks page:
- the podcast should be in the size that 3 podcast episodes shoudl fit in a row (grid) similar to "Hackathon Participation" section 
- in conference attendance: conference-minimal-meta should be in the same line-- year on the left side and location on the right side of the card.
- 

publications:
- refactor the publication-item. it should show the year in header number, followed by the title in the title of the container. then as the body, it should be the abstract, almost covering left to right of the container (90% of the container length). then the buttons for paper, presentation (consistent with the talks page). 

- merge pub-year and pub-content, so the abstract will start from left side of publication-item under top part , the top part has the year and then title. in sub header/title, it should write the published in text. 
- remove the 3d and effects on the paper button


About page:
- make the expertise-item smaller, or redesign them to fit the new structure of the page (the split between the journey and the expertise)


Connect page:
- make all items under the "find me online" to be just the icon and the tile of the platform (platform-card ), remove the extra text, just click on name/icon opens the link


-- 

menu/nav: the rest of the active items should move to the hamburger menu on mobile
- also on desktop the menu opens on the left side of the page, but it should be on right where the burger is 


dark mode adjustments:
- in home page, for section-card s : make the card-icon and titles orange, and the text white. 
  - hero-title for the name to be in white and the rest light grey,  
- in Talks: for hackathon cards hackathon-project has a bright background, remove it
  - under the speaking overview, stat-card stat-card s have white background. 

------------------------------


Great! this is fascinating! 

Continue, we're almost perfect:

Publications: publication-item -- make the pub-header to be horizontal and on top of the abstract. bring back the abstract quote format and the "abstract" tag . in this way media coverage opens on the bottom of the card which is correct.


Talks: the conference attendance cards conference-item-minimal look messy. the podcast card is still too big, it should be in the 1/3rd column and that width (in the grid, same style and size az hackathon-cards)

dark mode adjustments:
- about page , contact-note has bright background
- career-timeline, ::before is not shown properly as the career-content covers them, different than the light mode. make the line to be visible
- in app,s inside the cards the "Visit" button needs a background for the text to be visible (btn btn-outline)
- 

- for the glitch effect, continusly looping the glitch (while active, e.g mouse hover).
- add jump to top button at the end of the page (or maybe in the footer? (left side?))



----------------------

great.

the click to go up button glitches on mouse hover. the glitch on footer should only be on the text itself. 

talks:
- conference attendance cards, conference-minimal-meta align with bottom of the cards
- why podcast card is still big???


projects:
- inside project modals (modal-content), the Github button in dark mode needs a background. 
  - also remove the "COMPLETED" tag from inside the modal


Publication:
- again about the publication-item. the pub-header should be on top (up) and then the abstract below it (on the bottom). they should be stacked vertically! 
  -  media coverage should open the media-coverage on the bottom of the item, under the buttons 
- 

Menu: the current menu implementation is broken on mobile. it creates an additional horizontal page that the menu is shows in the closed mode . also in mobile the rest of the nav menu items (the audits, etc that are inside the hamburger menu in desktop) are not shown and gone! they should also be in the hamburger menu


Responsiveness: most pages seem ok except the publication page! 

-------------------------------------

the click to go up button glitches on mouse hover. the glitch on footer should only be on the text itself. also you can bring the go up button to the same z-index as social-float-toggle, this is just a impplemtentation suggestion. 

now more changes:
talks:
- why podcast card is still big??? the podcast section should be the same sizing as hackathons-grid and the hackathon-card for each podcast. 
- the hackathon-cards had this selection that if it's hacker show bigger card, if judge or mentor show smaller cards. this is working on mobile, make it work on desktop too. 

about: integrate the skills-container into the about page as well.

- darkmode : add background to btn btn-outline


bug: still on mobile if I scroll to the right I'll see the menu. it should be hidden when the hamburger menu is closed 

---------------------------

Publication:
- again about the publication-item. the pub-header should be on top (up) and then the abstract below it (on the bottom). they should be stacked vertically! 
- on the abstract remove the ::before ::after quotes 

podcasts look better but it is missing the image. fetch these other episodes and add the yaml data to show in the podcast section. curl the image from the webpages:
- https://shiryakhat.net/2025/02/devcon7.html
- https://shiryakhat.net/2025/03/ethereum-pectra-upgrade.html
- https://shiryakhat.net/2025/05/ai-blockchain-vibecoding.html


----------------

publications items: can you analyze and refactor publication-item, publications-list. the pub-header should be inside pub-body. adjust the rest of the items accordingly.

podcasts-cards: 
- the media-link to look like buttons as in the rest of the website (e.g. media-link youtube)
- hackathon-location to be aligned to the right 

Add the structure for artistic works:

there will be:
- physical framed art work / collages 
- digital video artwork (youtube links)
- photography


there are also some errors and warnings when you start jekyll, debug and fix as much as possible. 


------------------
awesome, good morning.

There are two art yaml files, and yet the art page still shows the coming soon. check to see whats what and implement correctly. 

make the hamburger menu to drop down with smooth animation rather that slide in.

Publication page:
- looks good. make the padding around publication-item smaller, so it takes less space.
- on mobile view, make the abstract section expandable (show a few lines with expand option)
- page-header is not responsive on mobile ("Publications" overflows outside the header)


Career page:
- the career-company looks too dark in dark mode. show it as orange with mouse hover slightly changing the color
- 

Audit page:
- add the consistent header/title like the rest of the website


======================================

if artworks.yml is not used and merged in art.yml, remove it.

Publication page:
- looks good. make the padding around publication-item smaller, so it takes less space.
- on mobile view, make the abstract section expandable (show a few lines with expand option)
- page-header is not responsive on mobile ("Publications" overflows outside the header)


Audit page:
- add the consistent header/title like the rest of the website


Mobile:
- make theme-toggle centered on the hamburger menu, maybe even look like toggle. 
  - also bug: the dark mode toggle doesn't seem to work on mobile right now


Idea for page navigation improvement:
- can jump-to-top be in a way that on pages like talks that have many sections, it shows a list of sections (none intrusive and subtle) that user can see the other sections in the page and can click/tap to go to that part of the page? or maybe some otherway of adding such functionality to that page. 


=====================

why did you move jump-to-top visible to the right side? move it back to the left where it was.

- for the talk page, make the icon to be the menu button (sectionsIcon) rather than move up button 
  

Menu on mobile: the dark mode toggle doesnt seem to be clickable. 
show the dark mode toggle only inside the hamburger menu (remove the second version on the navbar)
make the button more visually appealing (better sun/moon and colors)


publication page: the expand abstarct button is not present on desktop but the text (abstract-content) is shortened. show the "see more" expandable option
 - on mobile: looks  good as is now, but you can make changes to be consistent with desktop version if needed.
 - on desktop: only show at least 5 lines of abstract (with expand option)


------------------------------------

on talk page, bug: after clicking on jump-to-top visible (sectionsIcon), and closing, the icon turns back to the jump-to-top icon rather than the sectionsIcon. (only be sectionIcon on talks page)

add some spacing between theme-label and theme-toggle in the hamburger menu. 

make nav-container freeze on the page when scrolling down. 

in publications add the link of the website to the conference name (published in: ).

make the stats-grid and stat-card (in talks page), and highlights-grid and highlight-card (from the Career page) to behave similarly in dark mode. (white icons/text with orange highlighting on hover for dark mode). 


------------------------

something seemed to broke on the last session, the code changes are half done (jekyll is failing to run)

it seems that you were in the middle of one of these tasks:

in publications add the link of the website to the conference name (published in: ).

make the stats-grid and stat-card (in talks page), and highlights-grid and highlight-card (from the Career page) to behave similarly in dark mode. (white icons/text with orange highlighting on hover for dark mode). 


--------------------------------


added app screenshots under images apps, implement the screenshot viewer in the app modal cards properly. make sure the project modals also support similar behaviour, i will add the screenshots later. 

The modals on mobile are slightly too big (fits the full screen), make them to be smaller to visually look better. 

in the talks page for the hackathons (hackathon-card podcast-card-custom), make the podcast titles to be a link to the website, and change the pub-link youtube to be the same as media-link youtube (colors, etc)

for the publications page on mobile, move pub-links to be on the same line (aligned on right) as abstract-label

make the menu that opens up smaller, it should slide down as it does now but smaller width under the hamburger menu. 

--------------------------------

inside the app modals (modal-body):
- move the logo to the left side of the app name (modal-text-content)
- make the screenshot-gallery to show one screenshot at a time with next prev floating icons


for podcasts, as the link is moved to the title, remove the external link button (fa fa-external-link). also add the support for spotify link if exists in the yaml file (add one sample)

the dark mode toggle (theme-toggle, toggle-track) the moon goes slightly out of the toggle in desktop view. 

--------------------

add the data from reviews.yml to underneath the publications. change the page title to Academia everywhere

add the data from nonprofit.yml to the career page, it should be separate and less spacetaking that the current career view

for the app modals (and projects): change the screenshot-nav prev to be floating on the images themselves, they should visually look subtle and nice. make the screenshots container to have a fixed size (not change the size due to the image size differences)
also make the app logo inside the modal bigger, like double the current size. 

on apps page, in mobile view, the app title is dropped to the next line (below the icon), the icon and the app name should always be in the same row. also center the app-actions

there are tons of warnings and some errors on jekyll, try to fix as many as possible. 

---------------------------

make the reviews-section much more concise, it can be similar to non-profit work section under the career. 

on app modals screenshots, I still see the old screenshot-nav prev, and not the newly implemented one. and the screenshot container changes size on different picutres, it should have a fixed size.


these errors exist when running jekyll:

-----------------------------------

for the academic reviews, bring review-role down to the same row as review-date, but make it align to the right side (date on the left, role on the right)


these are tagged as fixed but not, investigate, debug and fix:
- on app modals screenshots, I still see the old screenshot-nav prev, and not the newly implemented one. and the screenshot container changes size on different picutres, it should have a fixed size.
- on the app page mobile view, make sure app-actions are in the same line and not moved to two lines (responsive)


------------------------------
these are tagged as fixed but not, investigate, debug and fix:
- on app modals screenshots, I still see the old screenshot-nav prev that is below the image, and not the newly implemented one. use something like class="gallery-nav next" for the next icon (floating on the image itself). you have already implemented something like this but it's not being used in the Apps page (modals)
  
- the screenshot container changes size on different screenshots, it should have a fixed size.


jekyll still has these errors, fix them:

-----------------------

actually, we need to add nested menu. let's redesign this menu (apply to both in desktop and mobile):

- home
- about
- career
- Academia (renamed from publications)
    - Academic Reviews
- Speaking & Participation (these submenus would go to talks page and jump to the correct header)
    - Talks & Presentations
    - Podcasts
    - Hackathons
    - Conferences

- Projects
    - open source
    - apps
    - audits
- art
- connect

--
move the dark mode toggle to the left side of the hamburger menu (in navbar), both for desktop and mobile


change the footer-text animation to be the same as value-item in about page, continues while hovering


======================================


on app modals screenshots, add a click to enlarge icon and modal to open


the menu looks good but is not nested, it should follow this structure:

- home
- about
- career
- Academia 
    - Academic Reviews
- Speaking & Participation 
    - Talks & Presentations
    - Podcasts
    - Hackathons
    - Conferences

- Projects
    - open source
    - apps
    - audits
- art
- connect


ui bug on podcasts section, the pub-link colors are reversed in dark mode. make them similar to media-link  


ui bug: the dark model toggle is not showing

------

what happened to the dark mode toggle? make sure it is visible on the left side of nav-toggle


also implement back the hamburger: true, desktop: true feature to show the menus selectively on the navbar.


the implementation in the menu: make all the menu items are visible but using size and design, the top titles are more visible and the rest are smaller/subtler? - only subtle chic animation on mouse hover.


-----

the dark mode toggle is only visible in light mode. bring back the full implementation of the toggle switch with the animation, on the left side of nav-toggle

the menu is all messed up! let's refactor, remove the header/navbar items, let's keep the navbar minimal, with the name on the left (as is now), and the dark mode toggle, and the hamburger menu on the right.

when clicked on hamburger menu, a clean neat menu is shown that has nested identifiers for some of the items (maybe a `tree` kind of look) with smooth colors. animates subtly on mouse hover


--------------------


it seems that the menu structure is only implemented in mobile view and not desktop view.

the look should be like nav-submenu are indented smaller version of nav-item
-----------

looks good, a few things to think harder about:
- bug: it only shows the submenus on mobile and not the desktop
- ui bug: the color scheme of nav-submenu (font , color, bg) should be the same nav-item
- make sure the above applies in both dark mode and light mode, on desktop and mobile